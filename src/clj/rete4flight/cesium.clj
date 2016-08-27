(ns rete4flight.cesium
  (:require
    [ring.adapter.jetty :as jetty]
    [ring.util.response :as r]
    [compojure.core :refer [defroutes routes GET]]
    [compojure.handler :as handler]
    [compojure.route :as route]
    [clojure.core.async :as async :refer [chan put! alts!!]])
  (:import java.util.Calendar))

(defonce CAM (volatile! {:onboard nil
                         :id nil
                         :heading "FORWARD"
                         :pitch -10.0
                         :roll 0.0
                         :chan nil}))

(def OLD-CRS (volatile! 0))
(def DOC-SND (volatile! true))

(defn send-event [typ dat]
  (if-let [ch (:chan @CAM)]
    (async/put! ch [typ (.trim dat)])))

(defn pump-out-events [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [chn] :default :none) (conj bits bit)))))

;; ----------------------------- SSE Server -----------------------------

(defn events []
  (if-let [ch (:chan @CAM)]
    (let [evt-hr (fn [[typ dat]]
                   (str "event: " typ "\ndata: " dat "\n\n"))
          ee (deref (future (pump-out-events ch)))
          resp (if (seq ee)
                 (apply str (map evt-hr ee))
                 "")]
      (->
        (r/response resp)
        (r/header "Access-Control-Allow-Origin" "*")
        (r/header "Content-Type" "text/event-stream;charset=utf-8")))))

(defn start-sse-server []
  (when (nil? (:chan @CAM))
    (vswap! CAM assoc :chan (async/chan))
    (println (str "SSE Server started on channel: " (:chan @CAM)))))

(defn stop-sse-server []
  (when (:chan @CAM)
    (vswap! CAM dissoc :chan)
    (println "SSE Server stopped.")))

;; ----------------------------- CZML Generator -------------------------

(defn fly-control [ctrl lat lon alt hea pit rol per]
  (let [p (str "{\"ctrl\":\""
               ctrl "\",\"lat\":"
               lat ",\"lon\":"
               lon ",\"altitude\":"
               alt ",\"heading\":"
               hea ",\"pitch\":"
               pit ",\"roll\":"
               rol ",\"duration\":"
               per "}")]
    (send-event "fly" p)))

(defn what-side [crs on-course]
  (if (> on-course crs)
    (if (< (- on-course crs) 180)
      :right
      :left)
    (if (< (- crs on-course) 180)
      :left
      :right)))

(defn bank [dif side]
  (let [dif (if (> dif 0) dif (- 0 dif))
        rol (if (>= dif 4) 28 6)]
    (condp = side
      :right rol
      :left (- 0 rol))))

(defn fly-to [lat lon alt crs per]
  (let [pitch (:pitch @CAM)
        roll (:roll @CAM)
        direct (fn [x] (cond
                         (> x 360) (- x 360)
                         (< x 0) (+ x 360)
                         true x))
        head (condp = (:heading @CAM)
               "FORWARD" (direct crs)
               "BACKWARD" (direct (+ crs 180))
               "RIGHT" (direct (+ crs 90))
               "LEFT" (direct (- crs 90))
               "UP" (direct crs)
               "DOWN" (direct crs))
        dif (- crs @OLD-CRS)
        roll (if (and (> alt 300) (or (> dif 1)(< dif -1)))
               (bank dif (what-side @OLD-CRS crs))
               roll)]
    (vreset! OLD-CRS crs)
    (fly-control "fly" lat lon alt head pitch roll per)))

(defn iso8601curt []
  (let [cld (Calendar/getInstance)
        yar (.get cld Calendar/YEAR )
        mon (inc (.get cld Calendar/MONTH))
        dat (.get cld Calendar/DATE)
        hor (.get cld Calendar/HOUR_OF_DAY)
        min (.get cld Calendar/MINUTE)
        sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn iso8601futt [sec]
  (let [cld (Calendar/getInstance)
        mil (.getTimeInMillis cld)
        _ (.setTimeInMillis cld (+ mil (* sec 1000)))
        yar (.get cld Calendar/YEAR )
        mon (inc (.get cld Calendar/MONTH))
        dat (.get cld Calendar/DATE)
        hor (.get cld Calendar/HOUR_OF_DAY)
        min (.get cld Calendar/MINUTE)
        sec (.get cld Calendar/SECOND)]
    (format "%04d-%02d-%02dT%02d:%02d:%02dZ" yar mon dat hor min sec)))

(defn doc []
  (str "{\"id\":\"document\",\"version\":\"1.0\",\"clock\":{\"currentTime\":\"" (iso8601futt -30) "\"}}"))

(defn location [label scale img-url lat lon alt span-sec]
  (when @DOC-SND
    (send-event "czml" (doc))
    (vreset! DOC-SND false))
  (let [p (str "{\"id\":\""
               label
               "\",\"availability\":\""
               (iso8601curt) "/" (iso8601futt span-sec)
               "\",\"label\":{\"scale\":"
               scale
               " ,\"pixelOffset\":{\"cartesian2\":[8, -24]},\"text\":\""
               label
               "\"},\"billboard\":{\"scale\":"
               scale
               ",\"image\":\""
               img-url
               "\"},\"position\":{\"cartographicDegrees\":["
               lon
               ", "
               lat
               ", "
               alt
               "]}}")]
    (send-event "czml" p)))

(defn leg [label img-url scale [lat1 lon1 alt1 tim1] [lat2 lon2 alt2 tim2]]
  (when @DOC-SND
    (send-event "czml" (doc))
    (vreset! DOC-SND false))
  (let [p (str "{\"id\":\""
               label
               "\",\"label\":{\"scale\":"
               (/ scale 2)
               ",\"pixelOffset\":{\"cartesian2\":[8, -8]},\"text\":\""
               label
               "\"},\"billboard\":{\"scale\":"
               scale
               ",\"image\":\""
               img-url
               "\"},\"position\":{\"cartographicDegrees\":[\""
               tim1
               "\", "
               lon1
               ", "
               lat1
               ", "
               alt1
               ",\""
               tim2
               "\", "
               lon2
               ", "
               lat2
               ", "
               alt2
               "]}}")]
    (send-event "czml" p)))

(defn point-out [txt [lat lon] dist max-dist]
  ;;(println [:CZ-POINT-OUT txt [lat lon] dist max-dist])
  (let [min-scl 0.25
        scl (+ min-scl (* (- 1 min-scl) (- 1 (/ dist max-dist))))]
    (location txt scl "http://localhost:3000/img/arrdn.png" lat lon 100 40)))










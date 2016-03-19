(ns rete4flight.cesium
  (:require
    [ring.adapter.jetty :as jetty]
    [ring.util.response :as r]
    [compojure.core :refer [defroutes routes GET]]
    [compojure.handler :as handler]
    [compojure.route :as route]
    [clojure.core.async :as async :refer [chan put! alts!!]]))

(defonce CAM (volatile! {:onboard nil
                         :id nil
                         :heading "FORWARD"
                         :pitch -15.0
                         :roll 0.0
                         :chan nil}))

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

(def OLD-CRS (volatile! 0))

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
      :right (vswap! CAM assoc :roll rol)
      :left (vswap! CAM assoc :roll (- 0 rol)))))

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
        dif (- crs @OLD-CRS)]
    (if (< alt 300)
      (vswap! CAM assoc :roll 0)
      (if (or (> dif 1)(< dif -1))
        (do
          (bank dif (what-side @OLD-CRS crs))
          (vreset! OLD-CRS crs))
        (vswap! CAM assoc :roll 0)))
    (fly-control "fly" lat lon alt head pitch roll per)))











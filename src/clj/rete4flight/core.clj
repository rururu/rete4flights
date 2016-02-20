(ns rete4flight.core
  (:import (java.io ByteArrayOutputStream
                    ByteArrayInputStream))
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [cognitect.transit :as t]
            [clojure.core.async :as async :refer [chan alts!! put! <! go timeout]]
            [org.httpkit.client :as client]
            [clj-json.core :as json]
            [rete.core :as rete])
  (:gen-class))

;; ------------------------- Flightradar24 client ------------------------

(def SERV (volatile! nil))
(def PORT 3000) ;; server port
(def ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(def EVT-CHN (chan)) ;; events channel
(def ES-FILE "src/clj/rete4flight/es.clj")
(def BBX (volatile! [])) ;; bounding box
(def WTCH-INTL 10000) ;; watch interval (10 sec)
(def STAT-INTL 20000) ;; flight state checking interval (20 sec)
(def POP-DEL 30000) ;; popup delay
(def HIS-MEM 3) ;; number of remembered watching intervals (30 sec memory)
(def REP-FLG-STA (volatile! nil)) ;; flight state checking repetition flag
(def FOLLOW-ID (volatile! nil)) ;; id of followed flight
(def FOLW-INTL 40000) ;; following interval (40 sec)

(defonce FRS (volatile! {:balurl "http://www.flightradar24.com/balance.json"
                    :apsurl "http://www.flightradar24.com/_json/airports.php"
                    :allpath "/zones/fcgi/feed.json"
                    :plnpath "/_external/planedata_json.1.3.php?f="
                    :allurl nil
                    :plnurl nil
                    :all nil
                    :airports nil
                    :infos {}}))

(defn balance []
  (let [bal (:body @(client/get (:balurl @FRS)))
        bal (json/parse-string bal)
        bal (sort-by second (seq bal))
        bal (ffirst bal)]
    (vswap! FRS assoc :allurl (str "http://" bal (:allpath @FRS)))
    (vswap! FRS assoc :plnurl (str "http://" bal (:plnpath @FRS)))))

(defn corr-dat [y]
  (filter #(vector? (second %)) y))

(defn all []
  (try
    (if-let [ff (:all @FRS)]
      ff
      (if-let [url (:allurl @FRS)]
        (let [ff (json/parse-string (:body @(client/get url)))]
          (vswap! FRS assoc :all ff)
          ff)
        (do (balance) (all))))
    (catch Exception e
      )))

(defn mk-airports [rows]
  (reduce #(assoc %1
             (get %2 "country")
             (assoc (or (get %1 (get %2 "country")) {})
               (get %2 "name") %2)) {} rows))

(defn airports []
  (try
    (if-let [aps (:airports @FRS)]
      aps
      (if-let [url (:apsurl @FRS)]
        (let [aps (json/parse-string (:body @(client/get url)))
              aps (mk-airports (get aps "rows"))]
          (vswap! FRS assoc :airports aps)
          aps)))
    (catch Exception e
      )))

(defn bbx [n s w e]
  (try
    (if-let [aurl (:allurl @FRS)]
      (let [burl (str aurl "?bounds=" n "," s "," w "," e)
            ff (json/parse-string (:body @(client/get burl)))]
        (vswap! FRS assoc :all ff)
        ff)
      (do (balance) (bbx n s w e)))
    (catch Exception e
      )))

(defn info [id]
  (if-let [inf (get-in [:infos id] @FRS)]
    inf
    (if-let [url (:plnurl @FRS)]
      (let [inf (json/parse-string (:body @(client/get (str url id))))]
        (vswap! FRS assoc-in [:infos id] inf)
        inf)
      (do (balance) (info id)))))

(defn clear []
  (vswap! FRS assoc :allurl nil)
  (vswap! FRS assoc :plnurl nil)
  (vswap! FRS assoc :all nil)
  (vswap! FRS assoc :infos {})
  (vswap! FRS assoc :regions {}))

(defn dat [iod]
  (if (string? iod) (get (:all @FRS) iod) iod))

(defn coord [iod]
  (let [dd (dat iod)]
    [(nth dd 1) (nth dd 2)]))

(defn course [iod]
  (nth (dat iod) 3))

(defn speed [iod]
  (nth (dat iod) 5))

(defn altitude [iod]
  (nth (dat iod) 4))

(defn callsign [iod]
  (nth (dat iod) 16))

(defn by-call [cs]
  (let [aa (corr-dat (all))]
    (if-let [flt (filter #(= cs (callsign (second %))) aa)]
      flt)))

(defn id-by-call [cs]
  (if-let [[id dat] (by-call cs)]
    id))

(defn dat-by-call [cs]
  (if-let [[id dat] (by-call cs)]
    dat))

(def ngen
  (let [counter (volatile! -1)]
    (fn [] (do (vswap! counter inc) @counter))))

(defn assert-visible [n s w e his]
  (let [ff (corr-dat (bbx n s w e))
        nf (count ff)]
    (doseq [[id dat] ff]
      (let [[lat lon] (coord dat)
            crs (course dat)
            spd (speed dat)
            alt (altitude dat)]
        (rete/assert-frame ['Flight
                            'id id
                            'N (Integer/parseInt id 16)
                            'latitude  lat
                            'longitude lon
                            'course crs
                            'speed spd
                            'altitude alt
                            'history his
                            'state (if (> alt 0)
                                     "LEVEL"
                                     "GROUND")])))
    nf))

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn pump-in-evt [val]
  ;;(println [:PIE val])
  (put! EVT-CHN val))

(defn repeater [task timo]
  "Channel that repeats task (function call) forever"
  (go (while true
        (task)
        (<! (timeout timo)))))

(defn write-transit [x]
  (let [baos (ByteArrayOutputStream.)
        w    (t/writer baos :json)
        _    (t/write w x)
        ret  (.toString baos)]
    (.reset baos)
    ret))

(defn read-transit [x]
  (let [bais (ByteArrayInputStream. (.getBytes x "UTF-8"))
        r    (t/reader bais :json)]
    (.reset bais)
    (t/read r)))

(defn index-page []
  (slurp (str ROOT "index.html")))

(defn events []
  (write-transit (deref (future (pump-out EVT-CHN)))))

(defn watch-all []
  (let [his (ngen)
        [n s w e c] @BBX
        nf (assert-visible n s w e his)]
    (println (str " - Flights in BBX: " nf))
    (rete/assert-frame ['History
                        'moment his
                        'memory HIS-MEM])
    (rete/fire)))

(defn new-visible [params]
  (when @BBX
    (println (str "New visible area: " params))
    (let [n (params :n)
          s (params :s)
          w (params :w)
          e (params :e)
          c (params :c)]
      (vreset! BBX [n s w e c])))
  "")

(defn watch-visible [params]
  (println (str "Watch visible area: " params))
  (let [n (params :n)
        s (params :s)
        w (params :w)
        e (params :e)
        c (params :c)
        obbx @BBX]
    (vreset! BBX [n s w e c])
    (println "Clear all data.")
    (clear)
    (println (str "Start expert system from file: " ES-FILE))
    (binding [*ns* *ns*]
      (rete/app "run" ES-FILE))
    (println (str "Assert visible flights."))
    (when (empty? obbx)
      (println "Start (watch-all)..")
      (repeater #(watch-all) WTCH-INTL))
    ""))

(defn check-states []
  (when @REP-FLG-STA
    (println "Check state of flights.")
    (rete/assert-frame ['Check 'status "STATE"])
    (rete/fire)))

(defn flight-states []
  (let [orfs @REP-FLG-STA]
    (vreset! REP-FLG-STA true)
    (when (nil? orfs)
      (println "Start (check-states)..")
      (repeater #(check-states) STAT-INTL))
    ""))

(defn intersect []
  (pump-in-evt {:event :clear-links})
  (println "Check intersections.")
  (rete/assert-frame ['Check 'status "INTERSECTION"])
  (rete/fire)
  "")

(defn make-info-html [call img dat]
  (let [head (str "<h3>" call "</h3>")
        itag (str "<img src=\"" img "\">")
        rows (for [[k v] (seq dat)]
               (str "<tr><td>" k "</td><td>" v "</td></tr>"))
        rows (apply str rows)]
    (str head itag "<table>" rows "</table>")))

(defn inform [id]
  (println (str "Info: " id))
  (if-let [inf (info id)]
    (let [cal (callsign id)
          img (inf "image")
          dat (dissoc inf
                      "trail"
                      "copyright_large"
                      "imagesource"
                      "image"
                      "imagelink"
                      "snapshot_id"
                      "airline_url"
                      "copyright"
                      "imagelink_large"
                      "first_timestamp"
                      "image_large"
                      "from_tz_code"
                      "from_tz_offset"
                      "from_tz_name"
                      "to_tz_code"
                      "to_tz_offset"
                      "to_tz_name"
                      )
          html (make-info-html cal img dat)]
      (pump-in-evt {:event :add-popup
                    :id id
                    :html html
                    :time POP-DEL})))
  "")

(defn info-id [params]
  (inform (params :id)))


(defn trail [id]
  (println (str "Trail: " id))
  (if-let [inf (info id)]
    (pump-in-evt {:event :add-trail
                  :id id
                  :lla (inf "trail")
                  :options {:weight 3
                            :color "purple"}
                  :time 30000}))
  "")

(defn trail-id [params]
  (trail (params :id)))

(defn follow-flight []
  (let [id @FOLLOW-ID]
    (when (not= id "$$$$")
      (rete/assert-frame ['Follow 'id id])
      (rete/fire))))

(defn follow-id [params]
  (println (str "Follow: " params))
  (let [ofid @FOLLOW-ID]
    (vreset! FOLLOW-ID (params :id))
    (when (nil? ofid)
      (println "Start (follow-flight)..")
      (repeater #(follow-flight) FOLW-INTL)))
    "")

(defn stopfollow []
  (println "StopFollow.")
  (vreset! FOLLOW-ID "$$$$"))

(defn contries []
  (if-let [aps (airports)]
    (write-transit (sort (keys aps)))))

(defn airports-for-country [params]
  (if-let [aps (airports)]
    (write-transit (sort (keys (aps (params :contry)))))))

;; --------------------- Call Functions ---------------------

(defn call [params]
  (let [func (params :func)
        func (symbol func)
        func (ns-resolve (find-ns 'rete4flight.core) func)]
    (func params))
  "")

(defn move-to [params]
  (let [apt (get-in (:airports @FRS)
                    [(params :to-country) (params :to-airport)])
        lat (apt "lat")
        lon (apt "lon")]
    (println [:APT apt])
    (println [:LAT lat :LON lon])
    (pump-in-evt {:event :set-map-view
                       :lat lat
                       :lon lon})
    (pump-in-evt {:event :clear-dialog})))

(defn schedule [params]
  (let [apts (:airports @FRS)
        call (params :callsign)
        hour (params :hour)
        min  (params :minute)
        fapt (get-in apts [(params :from-country) (params :from-airport)])
        tapt (get-in apts [(params :to-country) (params :to-airport)])]
    (println [:CALLSIGN call :HR hour :MIN min])
    (println [:FROM fapt])
    (println [:TO tapt])))

;; --------------------- Routes -----------------------------

(defroutes app-routes
  (GET "/" [] (index-page))
  (GET "/events/" [] (events))
  (GET "/new-visible/" [& params] (new-visible params))
  (GET "/watch-visible/" [& params] (watch-visible params))
  (GET "/flight-states/" [] (flight-states))
  (GET "/intersect/" [] (intersect))
  (GET "/info/" [& params] (info-id params))
  (GET "/trail/" [& params] (trail-id params))
  (GET "/follow/" [& params] (follow-id params))
  (GET "/stopfollow/" [] (stopfollow))
  (GET "/contries/" [] (contries))
  (GET "/airports/" [& params] (airports-for-country params))
  (GET "/call/" [& params] (call params))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))

(defn start-server
  ([]
    (start-server PORT))
  ([port]
    (vreset! SERV (jetty/run-jetty app {:port port :join? false}))))

(defn stop-server []
  (when-let [serv @SERV]
    (.stop serv)
    (println "Server stopped!")))

(defn open-in-browser!
  ([]
    (open-in-browser! PORT))
  ([port]
    (let [address (str "http://localhost:" port)]
      (println "Location:" address)
      (when (java.awt.Desktop/isDesktopSupported)
        (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address))))))

;; ---------------------------- Start server ---------------------------

(defn -main [& args]
  (start-server)
  (open-in-browser!))

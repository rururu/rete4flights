(ns rete4flight.core
  (:import (java.io ByteArrayOutputStream
                    ByteArrayInputStream)
           java.util.Calendar)
  (:require [ring.adapter.jetty :as jetty]
            [compojure.core :refer [defroutes GET]]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [cognitect.transit :as t]
            [clojure.core.async :as async :refer [chan alts!! put! <! go timeout]]
            [org.httpkit.client :as client]
            [clj-json.core :as json]
            [rete.core :as rete]
            [rete4flight.geo :as geo]
            [rete4flight.cesium :as cz]
            [rete4flight.data :as data])
  (:gen-class))

;; ----------------------- Flightradar24 client ------------------------

(def PORT 3000) ;; server port
(def ES-FILE "src/clj/rete4flight/es.clj")
(def WTCH-INTL 20000) ;; watch interval (20 sec)
(def DATA-INTL 12000) ;; external data interval (12 sec)
(def STAT-INTL 20000) ;; flight state checking interval (20 sec)
(def POP-PERI 30000) ;; popup period
(def HIS-MEM 3) ;; number of remembered watching intervals (30 sec memory)
(def FOLW-INTL 40000) ;; following interval (40 sec)
(def MYFS-INTL 4000) ;; my flights simulation interval (4 sec)
(def TRN-STP 12) ;; step of course in degrees while turning
(def CZMW-INTL 30000) ;; Cesium work interval (20 sec)

(defonce SERV (volatile! nil))
(defonce ROOT (str (System/getProperty "user.dir") "/resources/public/"))
(defonce EVT-CHN (chan)) ;; events channel
(defonce BBX (volatile! [])) ;; bounding box
(defonce WTCH-FIRST (volatile! true)) ;; first swatch
(defonce REP-FLG-STA (volatile! nil)) ;; flight state checking repetition flag
(defonce FOLLOW-ID (volatile! nil)) ;; id of followed flight
(defonce DATA (volatile! nil)) ;; External data
(defonce EXT-DATA (volatile! false))
(defonce FRS (volatile! {:apsurl "http://www.flightradar24.com/_json/airports.php"
                         :allurl "http://data-live.flightradar24.com/zones/fcgi/feed.js"
                         :plnurl "http://data-live.flightradar24.com/clickhandler/?version=1.5&flight="
                         :all nil
                         :airports nil
                         :infos {}}))
(defonce MYFS (volatile! {:all nil
                          :infos {}
                          :control {}})) ;; my flights
(defonce RUNWAYS (volatile! {"URE" 180 "LED" 287 "LHR" 90 "EWR" 26
                             "TAY" 269 "HEL" 227 "FRA" 70 "KEF" 180
                             "KDL" 147 "JFK" 301 "BOS" 200 "LGA" 122}))

;; --------------------- Flightradar24 Client Functions ------------------

(defn corr-dat [y]
  (filter #(vector? (second %)) y))

(defn json-web-data [url]
  (let [r @(client/get url)
        s (:status r)]
    (if (= s 200)
      (try
        (json/parse-string (:body r))
        (catch Exception e
          (println [:EXCEPTION e])
          nil))
      (do
        (println [:STATUS s])
        nil))))

(defn all []
  (let [ff (or (:all @FRS)
               (let [ff (json-web-data (:allurl @FRS))]
                 (vswap! FRS assoc :all ff)
                 ff))]
    (merge ff (:all @MYFS))))

(defn mk-airports [rows]
  (reduce #(assoc %1
             (get %2 "country")
             (assoc (or (get %1 (get %2 "country")) {})
               (get %2 "name") %2)) {} rows))

(defn airports []
  (or (:airports @FRS)
      (let [aps (json-web-data (:apsurl @FRS))
            aps (mk-airports (get aps "rows"))]
        (vswap! FRS assoc :airports aps)
        aps)))

(defn bbx [n s w e]
  (let [burl (str (:allurl @FRS) "?bounds=" n "," s "," w "," e)
        ff (json-web-data burl)]
    (vswap! FRS assoc :all ff)
    (merge ff (:all @MYFS))))

(defn info [id]
  (if-let [inf (or (get (:infos @FRS) id)
                   (get (:infos @MYFS) id))]
    inf
    (let [inf (json-web-data (str (:plnurl @FRS) id))]
      (vswap! FRS assoc-in [:infos id] inf)
      inf)))

(defn clear []
  (vswap! FRS assoc :all nil)
  (vswap! FRS assoc :infos {})
  (vswap! FRS assoc :regions {})
  (vswap! MYFS assoc :all nil)
  (vswap! MYFS assoc :infos {}))

(defn dat [iod]
  (if (string? iod)
    (or (get (:all @FRS) iod)
        (get (:all @MYFS) iod))
    iod))

(defn coord [iod]
  (let [dd (dat iod)]
    [(nth dd 1) (nth dd 2)]))

(defn coord! [iod [lat lon]]
  (-> (dat iod)
      (assoc 1 lat)
      (assoc 2 lon)))

(defn course [iod]
  (nth (dat iod) 3))

(defn course! [iod crs]
  (let [crs2 (cond
               (>= crs 360) (- crs 360)
               (< crs 0) (+ crs 360)
               true crs)]
    (assoc (dat iod) 3 crs2)))

(defn speed [iod]
  (nth (dat iod) 5))

(defn speed! [iod spd]
  (assoc (dat iod) 5 spd))

(defn altitude [iod]
  (nth (dat iod) 4))

(defn altitude! [iod alt]
  (assoc (dat iod) 4 alt))

(defn callsign [iod]
  (nth (dat iod) 16))

(defn callsign! [iod cls]
  (assoc (dat iod) 16 cls))

(defn get-param [id param]
  (case param
    :course   (course id)
    :coord    (coord id)
    :speed    (speed id)
    :altitude (altitude id)
    (get (:all @MYFS) id)))

(defn set-param! [id param val]
  (vswap! MYFS assoc-in [:all id]
          (case param
            :course (course! id val)
            :coord (coord! id val)
            :speed (speed! id val)
            :altitude (altitude! id val)
            val)))

(defn by-call [cs]
  (let [aa (concat (corr-dat (all)) (:all @MYFS))]
    (if-let [flt (filter #(= cs (callsign (second %))) aa)]
      (first flt))))

(defn id-by-call [cs]
  (if-let [[id dat] (by-call cs)]
    id))

(defn dat-by-call [cs]
  (if-let [[id dat] (by-call cs)]
    dat))

(defn current-time []
  (System/currentTimeMillis))

(defn assert-visible [n s w e his]
  (let [ff (corr-dat (bbx n s w e))
        nf (count ff)]
    (doseq [[id dat] ff]
      (let [[lat lon :as crd] (coord dat)
            alt (altitude dat)
            crs (course dat)
            spd (speed dat)
            p4d (if (:chan @cz/CAM) [lat lon alt (cz/iso8601curt)])]
        (rete/assert-frame ['Flight
                            'id id
                            'N (Integer/parseInt id 16)
                            'callsign (callsign dat)
                            'coord crd
                            'course crs
                            'speed spd
                            'altitude alt
                            'history his
                            'pos4d p4d
                            'time (current-time)
                            'state (if (> alt 0)
                                     "LEVEL"
                                     "GROUND")])))
    nf))

;; -------------------- Channel Operations --------------------------

(defn pump-out [chn]
  (loop [[bit ch] (alts!! [chn] :default :none) bits []]
    (if (= bit :none)
      bits
      (recur (alts!! [chn] :default :none) (conj bits bit)))))

(defn pump-in-evt [val]
  ;;(println [:PIE val])
  (put! EVT-CHN val))

;; ------------------------- Table Function --------------------------

   (defn linint [x [x1 y1] [x2 y2]]
     (float (+ y1 (/ (* (- y2 y1) (- x x1)) (- x2 x1)))))

   (defn tabfun [x table]
     ;; left and right borders in table are exclusive
     (let [[lo hi] (split-with #(< (first %) x) table)]
       (if (seq lo)
         (if (seq hi)
           (linint x (last lo) (first hi))
           [:UB (second (last table))])
         [:LB (second (first table))])))

   (defn i-mono-tabfun [y table]
     ;; inverse function, only for monotone(!!!) functions
     (tabfun y (map #(vector (second %)(first %)) table)))

   (defn smooth-tabfun [x table]
     (let [res (tabfun x table)]
       (if (vector? res) (second res) res)))

;; ------------------------- Repeaters -------------------------------

(defn repeater [task timo]
  "Channel that repeats task (function call) forever
  with minimal timeout"
  (go (while true
        (let [st (System/currentTimeMillis)]
          (task)
          (let [elt (- (System/currentTimeMillis) st)]
            (if (< elt timo)
              (<! (timeout (- timo elt)))))))))

(defn turn [id on-course]
  "turning of my flight plane on new course"
  (when (<= 0 on-course 359)
    (pump-in-evt {:event :turn :id id :on-course on-course})
    (if-let [crs (course id)]
      (if (not= crs on-course)
        (let [side (cz/what-side crs on-course)]
          (go (loop [crs crs]
                (if (< (Math/abs (- crs on-course)) TRN-STP)
                  (set-param! id :course on-course)
                  (do
                    (if (= side :left)
                      (set-param! id :course (- crs TRN-STP))
                      (set-param! id :course (+ crs TRN-STP)))
                    (<! (timeout MYFS-INTL))
                    (recur (course id)))))))))))

(defn plane-move [id hours]
  "Moving my flight plane on plane during period of time = hours"
  (let [mihs (/ MYFS-INTL 3600000)]
    (go (loop [millis (* hours 3600000)]
          (when (> millis 0)
            (if-let [spd (speed id)]
              (if (> spd 0)
                (set-param! id :coord (geo/future-pos (coord id) (course id) spd mihs))))
            (<! (timeout MYFS-INTL))
            (recur (- millis MYFS-INTL)))))))

(defn grad-mono-change [id param target table]
  "Changes parameter gradually in accordance with table,
  argument of table value is number of intervals MYFS-INTL,
  only for monotone (!!!) table functions"
  (let [mi (second (first table))
        ma (second (last table))]
    (cond
     (< target mi) (grad-mono-change id param mi table)
     (> target ma) (grad-mono-change id param ma table)
     true (if-let [y (get-param id param)]
            (if (not= y target)
              (let [[pred step] (if (> y target) [<= dec] [>= inc])]
                (go (loop [x (int (i-mono-tabfun y table)) y y]
                      (if (pred y target)
                        (set-param! id param (int target))
                        (do
                          (<! (timeout MYFS-INTL))
                          (let [x (step x)
                                y (smooth-tabfun x table)]
                            (set-param! id param (int y))
                            (recur x y))))))))))))

;; --------------------------------------------------------------------

(defn cur-hrs-min []
  (let [cld (Calendar/getInstance)]
    [(.get cld Calendar/HOUR_OF_DAY)
     (.get cld Calendar/MINUTE)]))

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

(defonce mgen
  (let [counter (volatile! -1)]
    (fn [] (do (vswap! counter inc) @counter))))

(defn our-position []
  (read-string (nth @BBX 4)))

(defn our-radius []
  (/ (* (- (read-string (nth @BBX 0)) (read-string (nth @BBX 1))) 60) 2))

(defn point-out-place [dat]
  (let [lat (get dat "lat")
        lon (get dat "lng")
        dis (geo/distance-nm (our-position) [lat lon])]
    (cz/point-out (get dat "title") [lat lon] dis (our-radius))))

(defn display-external-data [data]
  (pump-in-evt {:event :clear-placemarks})
  (dotimes [i (count data)]
    (let [dat (nth data i)
          evt (data/placemark-evt i dat)]
      (pump-in-evt evt)
      (point-out-place dat))))

(defn get-data []
  (if @EXT-DATA
    (when-let [dat (data/data-bbx @BBX)]
      (display-external-data dat)
      (vreset! DATA dat))))

(defn watch-all []
  (let [mom (mgen)
        [n s w e c] @BBX
        nf (assert-visible n s w e mom)]
    ;;(println (str " - Flights in BBX: " nf))
    (rete/assert-frame ['History
                        'moment mom
                        'memory HIS-MEM])
    (rete/fire)))

(defn new-visible [params]
  (when @BBX
    ;;(println (str "New visible area: " params))
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
    (when @WTCH-FIRST
      (println "Start (watch-all)..")
      (repeater #(watch-all) WTCH-INTL)
      (repeater #(get-data) DATA-INTL)
      (vreset! WTCH-FIRST false))
    ""))

(defn check-states []
  (when @REP-FLG-STA
    ;;(println "Check state of flights.")
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
        rows (for [[k v] dat]
               (str "<tr><td>" k "</td><td>" v "</td></tr>"))
        rows (apply str rows)]
    (str head itag "<table>" rows "</table>")))

(defn plane-html-evt [id]
  (if-let [inf (info id)]
    (let [cal (callsign id)
          apt (inf "airport")
          acr (inf "aircraft")
          tim (inf "time")
          img (get (first (get-in acr ["images" "thumbnails"])) "src")
          [lat lon] (coord id)
          dat [["from" (or (get-in apt ["origin" "name"]) "-")]
               ;;"from-iata" (get-in apt ["origin" "code" "iata"])
               ["to" (or (get-in apt ["destination" "name"]) "-")]
               ;;"to-iata" (get-in apt ["destination" "code" "iata"])
               ["airline" (or (get-in inf ["airline" "short"]) "-")]
               ["real-departure" (or (get-in tim ["real" "departure"]) "-")]
               ["scheduled-arrival" (or (get-in tim ["scheduled" "arrival"]) "-")]
               ["aircraft" (or (get-in acr ["model" "text"]) "-")]
               ["latitude" (or lat "-")]
               ["longitude" (or lon "-")]
               ["course" (or (course id) "-")]
               ["speed" (or (speed id) "-")]
               ["altitude" (or (altitude id) "-")]
               [(str "<input type='button' style='color:purple' value='Trail'
                 onclick='rete4flight.core.trail(\"" id "\")' >")
               (str "<input type='button' style='color:blue' value='Follow'
                 onclick='rete4flight.core.follow(\"" id "\")' >")]
               [""
               "<input type='button' style='color:red' value='Stop'
                 onclick='rete4flight.core.stopfollow()' >"]]
          html (make-info-html cal img dat)]
      {:event :add-popup
                    :id id
                    :html html
                    :time POP-PERI})))

(defn place-html-evt [dat]
  (data/placemark-html-evt dat))

(defn info-id [params]
  (println (str "Info: " params))
  (let [id (params :id)
        evt (if (.startsWith id "pm")
               (let [dat (nth @DATA (read-string (.substring id 2)))]
                 (point-out-place dat)
                 (place-html-evt dat))
               (plane-html-evt id))]
    (if evt
      (pump-in-evt evt)))
  "")

(defn trans-trail [trl]
  (mapcat #(list (% "lat") (% "lng") (% "alt")) trl))

(defn trail [id head]
  (if-let [inf (info id)]
    (let [trl (trans-trail (inf "trail"))]
      ;;(println [:TRAIL id (count head) (count trl)])
      (pump-in-evt {:event :add-trail
                    :id id
                    :lla (concat head trl)
                    :options {:weight 3
                              :color "purple"}
                    :time 30000})))
  "")

(defn trail-id [params]
  (trail (params :id) []))

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
    (if @FOLLOW-ID
      (stopfollow))
    (println [:MOVE-TO apt :LAT lat :LON lon])
    (pump-in-evt {:event :set-map-view
                       :lat lat
                       :lon lon})
    (pump-in-evt {:event :clear-dialog})))

(defonce ngen
  (let [counter (volatile! 0)]
    (fn [] (do (vswap! counter inc) @counter))))

(defn add-my-flight [call crd crs spd alt]
  (let [id (str "-" (Integer/toHexString (ngen)))
        mf (->(vec (range 18))
              (callsign! call)
              (coord! crd)
              (course! crs)
              (speed! spd)
              (altitude! alt))]
    (vswap! MYFS assoc-in [:all id] mf)
    (vswap! MYFS assoc-in [:control id] :auto)
    id))

(defn runway [iata]
  (if-let [rw (@RUNWAYS iata)]
    (int rw)
    (int (rand 360)))) ;; random runway direction

(defn schedule [params]
  (let [apts (:airports @FRS)
        call (params :callsign)
        hour (params :hour)
        min  (params :minute)
        fapt (get-in apts [(params :from-country) (params :from-airport)])
        tapt (get-in apts [(params :to-country) (params :to-airport)])]
    (if (and fapt tapt)
      (let [tim [hour min]
            fcrd [(fapt "lat")(fapt "lon")]
            tcrd [(tapt "lat")(tapt "lon")]
            iatf (fapt "iata")
            iatt (tapt "iata")
            crs 0
            spd 0
            alt 0
            from [iatf fcrd (runway iatf)] ;; takeoff direction
            to   [iatt tcrd (runway iatt)] ;; landing direction
            id (add-my-flight call fcrd crs spd alt)
            hrs (+ (/ (geo/distance-nm fcrd tcrd) 455) 2)] ;; approximate time of flight
        (plane-move id hrs)
        (println [:SCHEDULE :CALLSIGN call :TIME tim :FROM from :TO to :HOURS hrs])
        (rete/assert-frame ['Schedule 'id id 'time tim 'from from 'to to])
        (pump-in-evt {:event :clear-dialog})
        (vswap! MYFS assoc-in [:infos id]
                {"airport" {"origin" {"name" (fapt "name") "code" {"iata" iatf}}
                            "destination" {"name" (tapt "name") "code" {"iata" iatt}}}

                 "aircraft" {"model" {"text" "Ru Lentokone"}
                             "images" {"thumbnails" [{"src" (str "img/" (int  (rand 7)) ".jpg")}]}}

                 "time" {"real" {"departure" (str hour ":" min)}
                         "scheduled" {"arrival" "unk"}}

                 "airline" {"short" "Ru Airlines"}}))
      (do
        (pump-in-evt {:event :clear-dialog})
        (if (nil? fapt)
          (println (str "No info about airport " (params :from-airport))))
        (if (nil? tapt)
          (println (str "No info about airport " (params :to-airport))))))))

(defn open-in-browser!
  ([]
   (open-in-browser! (str "http://localhost:" PORT)))
  ([address]
   (println "Location:" address)
   (when (java.awt.Desktop/isDesktopSupported)
     (.browse (java.awt.Desktop/getDesktop) (java.net.URI. address)))))

(defn callsign-list []
  (->> (vals (:all @FRS))
       (concat (vals (:all @MYFS)))
       (filter vector?)
       (map callsign)
       (filter #(not (empty? %)))
       sort))

(defn camera [params]
  (println [:CAMERA params])
  (vswap! cz/CAM merge params)
  (cond
   (= (params :camera) "on")
     (cz/start-sse-server)
   (= (params :camera) "off")
     (cz/stop-sse-server)
   (some? (params :onboard))
     (when-let [id (id-by-call (params :onboard))]
      (vswap! cz/CAM assoc :id id)
      (vreset! cz/DOC-SND true)
      (rete/assert-frame ['Camera
                          'onboard id
                          'time (current-time)]))
   (= (params :heading) "UP")
     (vswap! cz/CAM assoc :pitch 90.0)
   (= (params :heading) "DOWN")
     (vswap! cz/CAM assoc :pitch -90.0))
  (if (= (params :camera) "on")
    (write-transit (callsign-list))
    ""))

(defn manual [params]
  (println [:MANUAL params])
  (if-let [id (get @cz/CAM :id)]
    (if (.startsWith id "-") ;; only my flights can be manually controlled
      (if-let [man (params :manual)]
        (condp = man
          "on" (vswap! MYFS assoc-in [:control id] :manual)
          "off" (vswap! MYFS assoc-in [:control id] :auto))
        (if-let [spd (params :speed)]
          (grad-mono-change id :speed
                            (read-string spd)
                            [[0 0][(/ 1800 (/ MYFS-INTL 1000)) 600]])
          (if-let [crs (params :course)]
            (turn id (read-string crs))
            (if-let [alt (params :altitude)]
              (grad-mono-change id :altitude
                                (read-string alt)
                                [[0 0][(/ 1200 (/ MYFS-INTL 1000)) 44000]])))))))
  "")

(defn toggle-ext-data []
  (if @EXT-DATA
    (do (println "External data off.")
      (pump-in-evt {:event :clear-placemarks})
      (vreset! EXT-DATA false))
    (do (println "External data on.")
      (vreset! EXT-DATA true)))
  "")

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
  (GET "/camera/" [& params] (camera params))
  (GET "/manual/" [& params] (manual params))
  (GET "/czml/" [] (cz/events))
  (GET "/call/" [& params] (call params))
  (GET "/ext-data/" [] (toggle-ext-data))
  (route/files "/" (do (println [:ROOT-FILES ROOT]) {:root ROOT}))
  (route/resources "/")
  (route/not-found "Not Found"))

(defonce app
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

;; ---------------------------- Start server ---------------------------

(defn -main [& args]
  (start-server)
  (open-in-browser!))

;; (rete/log-lst "beta-net-plan.txt" rete/BPLAN)

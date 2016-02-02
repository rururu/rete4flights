(ns rete4flight.core
  (:require
    [cljs.core.async :as async :refer [<! >! chan put! timeout close!]]
    [rete4flight.geomath :as geo]
    [cognitect.transit :as t]
    [goog.string :as gstring]
    [goog.string.format]
    [ajax.core :refer (GET)])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; ---------------------- General constants ------------------------------------

(def chart (atom nil)) ;; chart object
(def clock (atom 0.0)) ;; clock in hrs
(def mapobs (atom {})) ;; map of all flights on chart
(def links (atom {})) ;; map of all links on chart
(def trails (atom {})) ;; map of all trails on chart
(def CLK-STP 100) ;; clock step 100 msec (0.1 sec)
(def CLS-HRS (/ CLK-STP 3600000)) ;; clock step in hours
(def DLT-EVT 1000) ;; check event queue from server every 1000 msec (1 sec)
(def DLT-MOV 200) ;; move flight every 200 msec (5 times per sec)
(def DLT-LKS 300) ;; update links every 300 msec (3 times per sec)
(def URL-EVT "http://localhost:3000/events/")
(def URL-WVI "http://localhost:3000/watch-visible/")
(def URL-FLS "http://localhost:3000/flight-states/")
(def URL-INT "http://localhost:3000/intersect/")
(def URL-INF "http://localhost:3000/info/")
(def URL-TRL "http://localhost:3000/trail/")
(def URL-OSM "http://{s}.tile.osm.org/{z}/{x}/{y}.png")
(def URL-MQO "http://otile1.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png")
(def URL-ICO {"INTERSECT" "http://localhost:3000/img/redpln32.png"
              "DESCEND" "http://localhost:3000/img/greenpln32.png"
              "CLIMB" "http://localhost:3000/img/bluepln32.png"
              "LEVEL" "http://localhost:3000/img/purplepln32.png"
              "GROUND" "http://localhost:3000/img/greypln32.png"})

;; ----------------- Chart creation and control -------------------------

(defn by-id  [id]
  (.getElementById js/document id))

(defn get-html [id]
  (.-innerHTML (by-id id)))

(defn set-html! [id msg]
  (set! (.-innerHTML (by-id id)) msg))

(defn format
  "Formats a string using goog.string.format."
  [fmt & args]
  (apply gstring/format fmt args))

(defn mouse-move [lat lng]
  (set-html! "mousepos" (str "lat " (format "%.4f" lat) " lon " (format "%.4f" lng))))

;; ---------------------- General Functions ------------------------------------

(defn read-transit [x]
  (t/read (t/reader :json) x))

(defn write-transit [x]
  (t/write (t/writer :json) x))

(defn clock-step []
  (swap! clock + CLS-HRS))

(defn repeater [task timo]
  "Channel that repeats task (function call) forever"
  (go (while true
        (task)
        (<! (timeout timo)))))

(defn create-marker [lat lon sta]
  (let [pos (js/L.LatLng. lat lon)
        ico (js/L.icon #js{:iconUrl (URL-ICO sta) :iconSize #js[32, 32]})
        opt #js{:icon ico :draggable true}
        mk (-> js/L (.rotatedMarker pos opt))]
    mk))

(defn move [id]
  (if-let [mob (@mapobs id)]
    (let [rdh (mob :anc-rdh)]
      (if (> rdh 0)
        (let [cur @clock
              dir (mob :anc-dir)
              phi (mob :anc-phi)
              lam (mob :anc-lam)
              tim (- cur (mob :anc-clk))
              way (* rdh tim)
              [phi2 lam2] (geo/spherica-between phi lam way dir)
              lat (/ phi2 geo/pid180)
              lon (/ lam2 geo/pid180)
              pos (js/L.LatLng. lat lon)
              mrk (mob :marker)]
          (.setLatLng mrk pos)
          (swap! mapobs assoc-in [id :anc-phi] phi2)
          (swap! mapobs assoc-in [id :anc-lam] lam2)
          (swap! mapobs assoc-in [id :anc-clk] cur))))))

(defn set-anchor [id lat lon crs spd]
  (swap! mapobs assoc-in [id :anc-phi] (* lat geo/pid180))
  (swap! mapobs assoc-in [id :anc-lam] (* lon geo/pid180))
  (swap! mapobs assoc-in [id :anc-dir] (* crs geo/pid180))
  (swap! mapobs assoc-in [id :anc-rdh] (* spd geo/nmrad))
  (swap! mapobs assoc-in [id :anc-clk] @clock))

(defn mapobPopup [id callsign alt lat lon crs spd sta]
  (str "<h3>" callsign "</h3>"
       "<table>"
       "<tr><td>id</td><td>" id "</td></tr>"
       "<tr><td>altitude</td><td>" alt "</td></tr>"
       "<tr><td>latitude</td><td>" lat "</td></tr>"
       "<tr><td>longitude</td><td>" lon "</td></tr>"
       "<tr><td>course</td><td>" crs "</td></tr>"
       "<tr><td>speed</td><td>" spd "</td></tr>"
       "<tr><td>state</td><td>" sta "</td></tr>"
       "<tr><td><input type='button' style='color:green' value='Info'
                 onclick='rete4flight.core.info(\"" id "\")' ></td>
            <td><input type='button' style='color:blue' value='Trail'
                 onclick='rete4flight.core.trail(\"" id "\")' ></td></tr>"
       "</table>"))

(defn delete-mapob [id]
  (when-let [mob (@mapobs id)]
    (if-let [mvr (mob :mover)]
      (close! mvr))
    (.removeLayer @chart (mob :marker))
    (swap! mapobs dissoc id)))

(defn create-mapob [id callsign lat lon crs spd alt sta]
  (if (@mapobs id)
    (delete-mapob id))
  (let [mrk (create-marker lat lon sta)]
    (swap! mapobs assoc-in [id :marker] mrk)
    (swap! mapobs assoc-in [id :radhrs] (* spd geo/nmrad))
    (swap! mapobs assoc-in [id :altitude] alt)
    (.addTo mrk @chart)
    (set! (.. mrk -options -angle) crs)
    (.bindPopup mrk (mapobPopup id callsign alt lat lon crs spd sta))
    (set-anchor id lat lon crs spd)
    (swap! mapobs assoc-in [id :mover]
           (repeater #(move id) DLT-MOV))))

(defn clear-mapobs []
  (doseq [id (keys @mapobs)]
    (delete-mapob id)))

;;----------------------- Trail manipulation ------------------------

(defn add-trail [id lla options time]
  (let [ops (clj->js options)
        llg (map #(js/L.LatLng. (first %) (second %)) (partition 3 lla))
        lle (clj->js llg)
        trl (js/L.polyline lle ops)]
    (.addLayer @chart trl)
    (swap! trails assoc-in [id :id] id)
    (swap! trails assoc-in [id :trail] trl)
    (swap! trails assoc-in [id :options] options)
    (if (> time 0)
      (go (<! (timeout time))
          (.removeLayer @chart trl)
          (swap! trails dissoc id)))))

;;----------------------- Links manipulation ------------------------

(defn collect-llga [ids]
  (let [mobs (filter some? (map #(@mapobs %) ids))
        mrks (map #(:marker %) mobs)
        llgs (map #(.getLatLng %) mrks)]
    (clj->js llgs)))

(defn linkPopup [[id1 id2] ops]
  (let [alt1 (get-in @mapobs [id1 :altitude])
        alt2 (get-in @mapobs [id2 :altitude])
        adif (- alt1 alt2)
        titl (get ops :title)
        dmin (get ops :dmin)
        tmin (get ops :tmin)]
    (str "<h3>" titl "</h3>"
       "<table>"
       "<tr><td>Dmin</td><td>" (if (number? dmin) (int (* 1852 dmin))) " m</td></tr>"
       "<tr><td>Tmin</td><td>" (if (number? tmin) (int (* 60 tmin))) " min</td></tr>"
       "<tr><td>Alt-diff</td><td>" adif " ft</td></tr>"
       "</table>")))

(defn add-link [ids options]
  (let [ops (clj->js options)
        tmin (get options :tmin)
        del (if (number? tmin)
              (int (* 3600000 tmin))
              30000)
        llg (collect-llga ids)
        lnk (js/L.polyline llg ops)]
    (.addLayer @chart lnk)
    (.bindPopup lnk (linkPopup ids options))
    (swap! links assoc ids lnk)
    (if (> del 0)
      (go (<! (timeout del))
          (.removeLayer @chart lnk)
          (swap! links dissoc ids)))))

(defn delete-link [ids]
  (when-let [lnk (get @links ids)]
    (.removeLayer @chart lnk)
    (swap! links dissoc ids)))

(defn shift-links []
  (doseq [[ids lnk] @links]
    (.setLatLngs lnk (collect-llga ids))))

(defn clear-links []
  (doseq [ids (keys @links)]
    (delete-link ids)))

(defn get-pos [id]
  (if-let [mob (@mapobs id)]
    (let [mrk (mob :marker)
          pos (.getLatLng mrk)
          lat (.-lat pos)
          lon (.-lng pos)]
      [lat lon])))

(defn add-popup
  ([id html time]
    (let [[lat lon] (get-pos id)]
      (add-popup lat lon html time)))
  ([lat lon html time]
    (let [pop (-> js/L (.popup {:maxWidth 600 :maxHeight 800 })
                (.setLatLng (array lat lon))
                (.setContent html))]
      (.addLayer @chart pop)
      (if (> time 0)
        (go (<! (timeout time))
            (.removeLayer @chart pop))))))

;; ------------------------ Event handler ---------------------------

(defn event-handler [response]
  (doseq [{:keys [event] :as evt} (read-transit response)]
    ;;(println [:EVENT evt])
    (condp = event
      :create-mapob (let [{:keys [id callsign lat lon crs spd alt state]} evt]
                      (create-mapob id callsign lat lon crs spd alt state))
      :delete-mapob (let [{:keys [id]} evt]
                      (delete-mapob id))
      :clear-mapobs (clear-mapobs)
      :add-link (let [{:keys [ids options]} evt]
                  (add-link ids options))
      :delete-link (let [{:keys [ids]} evt]
                     (delete-link ids))
      :clear-links (clear-links)
      :add-popup (let [{:keys [id lat lon html time]} evt]
                   (cond
                    id (add-popup id html time)
                    (and lat lon) (add-popup lat lon html time)))
      :add-trail (let [{:keys [id lla options time]} evt]
                   (add-trail id lla options time))
      (println (str "Unknown event: " [event evt])))))

(defn error-handler [{:keys [status status-text]}]
  (println (str "AJAX ERROR: " status " " status-text)))

(defn check-events []
  (GET URL-EVT {:handler event-handler
                 :error-handler error-handler}))

(defn no-handler [response])

;; -------------------------- Buttons --------------------------------

(defn info [id]
  (let [url (str URL-INF "?id=" id)]
    (GET url {:handler no-handler
              :error-handler error-handler})))

(defn trail [id]
  (let [url (str URL-TRL "?id=" id)]
    (GET url {:handler no-handler
              :error-handler error-handler})))

;; -------------------------- Commands -------------------------------

(def COMMANDS
  "<select onchange='javascript:rete4flight.core.commands(this.value)'>
  			<option value='commands'>Commands</option>
  			<option value='watch-visible'>Watch visible area</option>
  			<option value='flight-states'>State of flights</option>
  			<option value='intersect'>Intersections</option>
  			<option value='clear'>Clear</option>
		</select>")

(def PARAMETERS
  "<input type='text' id='params' style='width:240px'>")

(defn clear-all []
  (clear-links)
  (clear-mapobs))

(defn visible-map []
  (let [bnd (.getBounds @chart)]
    [(.getNorth bnd)
     (.getSouth bnd)
     (.getWest bnd)
     (.getEast bnd)]))

(defn watch-visible []
  (let [[n s w e] (visible-map)
        url (str URL-WVI "?n=" n "&s=" s "&w=" w "&e=" e)]
    (clear-all)
    (GET url {:handler no-handler
              :error-handler error-handler})))

(defn flight-states []
  (GET URL-FLS {:handler no-handler
                :error-handler error-handler}))

(defn intersect []
  (GET URL-INT {:handler no-handler
                :error-handler error-handler}))

(defn commands [func]
  (condp = func
    "watch-visible" (watch-visible)
    "flight-states" (flight-states)
    "intersect" (intersect)
    "clear" (clear-all))
  (set-html! "commands" COMMANDS))

;; ------------------------ Initialization ----------------------------

(defn init []
  (let [m (-> js/L
            (.map "map")
            (.setView (array 40.8, -74.0) 9))
        tile1 (-> js/L (.tileLayer URL-OSM
                         #js{:maxZoom 16
                             :attribution "OOGIS RL &copy;"}))
        tile2 (-> js/L (.tileLayer URL-MQO
                         #js{:type "sat"
                             :attribution "OOGIS RL &copy;"}))
        base (clj->js {"osm" tile1
                       "sat" tile2})
        ctrl (-> js/L (.control.layers base nil))]
    (.addTo tile1 m)
    (.addTo ctrl m)
    (.on m "mousemove"
      (fn [e] (mouse-move (.. e -latlng -lat) (.. e -latlng -lng))))
    (reset! chart m)
    (set-html! "commands" COMMANDS)
    (set-html! "parameters" PARAMETERS)
    (repeater #(check-events) DLT-EVT)
    (repeater #(shift-links) DLT-LKS)
    (.setInterval js/window #(clock-step) CLK-STP)))

;; ----------------------------- Start ---------------------------------

(set! (.-onload js/window) (init))

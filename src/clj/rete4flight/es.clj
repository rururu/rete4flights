((templates
  (Flight id coord course speed altitude
          N history state pos4d callsign
          time)
  (History moment memory)
  (Check status)
  (Follow id)
  (Schedule id time from to)
  (FlightPlan id takeoff landing
              initial-turn final-turn
              acceleration deceleration
              climb descent
              direct-flight final-coord)
  (Last id time history)
  (Camera onboard time))

 (rules
  (fl:MoveHistory
   1
   ?h1 (History moment ?m1)
   ?h2 (History moment ?m2
                (> ?m2 ?m1))
   =>
   (retract ?h1))

  (fl:MoveCamera
   1
   ?c1 (Camera time ?t1)
   ?c2 (Camera time ?t2
               (> ?t2 ?t1))
   =>
   (retract ?c1))

  (fl:ForegetOldFlights
   0
   ?fl (Flight history ?his)
   (History moment ?now
            memory ?mem
            (> ?now (+ ?his ?mem)))
   =>
   (retract ?fl))

  (fl:Climbing
   0
   (Flight id ?id altitude ?a1 history ?h1)
   (Flight id ?id altitude ?a2 history ?h2)
   ?fl (Flight id ?id altitude ?a3 history ?now state "LEVEL")
   (History moment ?now
            ((> ?now ?h2 ?h1)
             (> ?a3 ?a2 ?a1)))
   =>
   ;;(println [:CLIMB ?id])
   (modify ?fl state "CLIMB"))

  (fl:Descending
   0
   (Flight id ?id altitude ?a1 history ?h1)
   (Flight id ?id altitude ?a2 history ?h2)
   ?fl (Flight id ?id altitude ?a3 history ?now state "LEVEL")
   (History moment ?now
            ((> ?now ?h2 ?h1)
             (< ?a3 ?a2 ?a1)))
   =>
   ;;(println [:DESCEND ?id])
   (modify ?fl state "DESCEND"))

  (fl:FollowFlight
   0
   ?f (Follow id ?id)
   (Flight id ?id coord ?crd1 history ?h1)
   (Flight id ?id coord ?crd2 history ?h2)
   (Flight id ?id coord ?crd3 history ?now)
   (History moment ?now
            (> ?now ?h2 ?h1))
   =>
   ;;(println [:FOLLOW ?id :CENTER ?lat ?lon])
   (fl/set-map-view ?crd3)
   (fl/follow-flight ?id ?crd3 ?crd2 ?crd1)
   (retract ?f))

  (fl:CheckStateHere
   -1
   (Check status "STATE")
   (History moment ?now)
   (Flight id ?id
           callsign ?cs
           history ?now
           state ?sta)
   =>
   ;;(println [:PUT-ON-MAP ?id ?cs ?sta])
   (fl/put-on-map ?id ?cs ?sta))

  (fl:CheckStateGone
   -1
   (Check status "STATE")
   (History moment ?now)
   (Flight id ?id
           history ?his
           (< ?his ?now))
   (not Flight id ?id
           history ?now)
   =>
   (fl/put-off-map ?id))

  (fl:Check2FlightsIntersection
   -1
   (Check status "INTERSECTION")
   (History moment ?now)
   (Flight id ?id1
           callsign ?cs1
           coord ?crd1
           course ?crs1
           speed ?spd1
           altitude ?a1
           history ?now
           N ?n1)
   (Flight id ?id2
           callsign ?cs2
           coord ?crd2
           course ?crs2
           speed ?spd2
           altitude ?a2
           history ?now
           N ?n2
           ((< ?n1 ?n2)
            (and (> ?spd1 0) (> ?spd2 0))
            [(and (> ?a1 0) (> ?a2 0) (< (Math/abs (- ?a1 ?a2)) 10000))
             (and (== ?a1 0) (== ?a2 0))]
            (< (fl/distance-nm ?crd1 ?crd2)
               (fl/max-distance ?spd1 ?spd2))))
   =>
   ;;(println [?id1 ?id2])
   (when-let [[dmin tmin] (fl/intersect?
                            ?crd1 ?crs1 ?spd1 ?crd2 ?crs2 ?spd2 ?id1 ?id2)]
     (println [:Dmin dmin :Tmin tmin])
     (fl/pom-and-link ?id1 ?cs1 ?id2 ?cs2 dmin tmin)))

  (fl:RetractCheck
   -2
   ?ch (Check)
   =>
   ;;(println :RET-CHECK)
   (retract ?ch))

  (fl:CZML-LegGeneration
   0
   (Camera onboard ?id1)
   (Flight id ?id1 coord ?c1 course ?crs1)
   (Flight id ?id2 coord ?c2 altitude ?a2 pos4d ?p2 history ?h2)
   (Flight id ?id2 coord ?c3 altitude ?a3 pos4d ?p3 history ?now course ?crs3 callsign ?cs)
   (History moment ?now
            ((= (- ?now ?h2) 1)
             (< (fl/distance-nm ?c1 ?c3) 10)))
   =>
   (fl/leg ?cs
           (fl/smooth-tabfun (fl/distance-nm ?c1 ?c3) [[0 1.0][20 0.1]])
           (fl/following ?crs1 ?crs3)
           ?p2
           ?p3))

  (fl:Fly-to
   0
   (Camera onboard ?id1)
   (Flight id ?id1 coord ?c1 time ?t1 history ?h1)
   (Flight id ?id1 coord ?c2 altitude ?a2 time ?t2 history ?now)
   (History moment ?now
            (= (- ?now ?h1) 1))
   =>
   (let [bea (fl/bear-deg ?c1 ?c2)
         sec (long (/ (- ?t2 ?t1) 1000))]
     ;;(println [:fly-to ?c2 ?a2 bea sec])
     (fl/fly-to ?c2 ?a2 bea sec)))

  (fl:SwtchCamera
   2
   (Camera onboard ?id1 time ?t1)
   (Camera onboard ?id2 time ?t2
           ((not= ?id1 ?id2)
            (> ?t2 ?t1)))
   (Flight id ?id1 coord ?c1 altitude ?a1)
   (Flight id ?id2 coord ?c2 altitude ?a2)
   =>
   (let [bea (fl/bear-deg ?c2 ?c1)]
     ;;(println [:from ?id1 ?c1 :to ?id2 ?c2])
     (fl/fly-to ?c2 ?a2 bea 4)))

;; ------------------------ MyFlights --------------------

  (fl:ScheduleFlight
   0
   ?sd (Schedule id ?id
                 time ?tim
                 from ?frm
                 to ?to)
   (History moment ?now
            (fl/time-passed? ?tim))
   =>
   (println [:SCHEDULE-FLIGHT ?id ?tim ?frm ?to])
   (let [start (fl/current-time)]
     (asser Last id ?id
            time start
            history ?now)
     (asser FlightPlan id ?id
            takeoff (fl/takeoff-plan start ?frm ?to)
            landing (fl/landing-plan start ?frm ?to)
            initial-turn (fl/initial-turn start ?frm ?to)
            final-turn (fl/final-turn start ?frm ?to)
            climb (fl/climb-plan start ?frm ?to)
            descent (fl/descent-plan start ?frm ?to)
            acceleration (fl/accel-plan start ?frm ?to)
            deceleration (fl/decel-plan start ?frm ?to)
            final-coord (nth ?to 1))
     (retract ?sd)))

  (fl:MyFlight-Takeoff
   0
   ?fp (FlightPlan id ?id
                   takeoff ?toff-plan
                   (vector? ?toff-plan))
   (History moment ?now
            (fl/exists? ?id))
   =>
   ;; Takeoff done when min speed and min altitude reached
   (let [[crs-tab min-spd min-alt] ?toff-plan
         curt (fl/current-time)
         pcrs (fl/tabfun curt crs-tab)]
     (if (number? pcrs)
       (fl/auto-control ?id :course (int pcrs))
       (if (and (> (fl/get-param ?id :speed) min-spd)
                (> (fl/get-param ?id :altitude) min-alt))
         (modify ?fp takeoff "DONE")))))

  (fl:MyFlight-Initial-Turn
   0
   ?fp (FlightPlan id ?id
                   takeoff "DONE"
                   initial-turn ?it-plan
                   (vector? ?it-plan))
   (History moment ?now
            (fl/exists? ?id))
   =>
   ;; Initial turn done when course equal to bearing on destination airport
   (let [[fst scd] ?it-plan]
     (cond
      (number? fst)
      (do
        (fl/turn ?id fst)
        (modify ?fp initial-turn ["TURN-ON" fst]))
      (and (= fst "TURN-ON")
           (= (fl/get-param ?id :course) scd))
      (modify ?fp
              initial-turn "DONE"
              direct-flight "AUTOPILOT"))))

  (fl:MyFlight-Climb
   0
   ?fp (FlightPlan id ?id
                   climb ?cli-plan)
   (History moment ?now
            ((vector? ?cli-plan)
             (fl/exists? ?id)))
   =>
   (let [curt (fl/current-time)
         calt (fl/tabfun curt ?cli-plan)]
     (if (number? calt)
       (fl/auto-control ?id :altitude (int calt))
       (do
         (fl/auto-control ?id :altitude (int (second calt)))
         (modify ?fp climb "DONE")))))

  (fl:MyFlight-Acceleration
   0
   ?fp (FlightPlan id ?id
                   acceleration ?acl-plan)
   (History moment ?now
            ((vector? ?acl-plan)
             (fl/exists? ?id)))
   =>
   (let [curt (fl/current-time)
         cspd (fl/tabfun curt ?acl-plan)]
     (if (number? cspd)
       (fl/auto-control ?id :speed (int cspd))
       (do
         (fl/auto-control ?id :speed (int (second cspd)))
         (modify ?fp acceleration "DONE")))))

  (fl:MyFlight-Direct-Flight
    0
    ?fp (FlightPlan id ?id
                    direct-flight "AUTOPILOT"
                    final-coord ?fcrd)
   (History moment ?now
            (fl/exists? ?id))
    =>
    (let [ccrd (fl/get-param ?id :coord)
          crs (fl/get-param ?id :course)
          bea (int (fl/bear-deg ccrd ?fcrd))]
      (if (not= crs bea)
        (fl/auto-control ?id :course bea))))

  (fl:MyFlight-Deceleration
   0
   ?fp (FlightPlan id ?id
                   acceleration ?acl
                   deceleration ?dcl-plan
                   final-coord ?fcrd)
   (History moment ?now
            (vector? ?dcl-plan))
   =>
   (if (fl/exists? ?id)
     (let [ccrd (fl/get-param ?id :coord)
           dist (fl/distance-nm ccrd ?fcrd)
           pspd (fl/tabfun dist ?dcl-plan)]
       (if (number? pspd)
         (when (< pspd (fl/get-param ?id :speed))
           (fl/auto-control ?id :speed (int pspd))
           (if (vector? ?acl)
             (modify ?fp acceleration "DONE")))
         (when (and (= ?acceleration "DONE") (= (first pspd) :LB))
           (fl/auto-control ?id :speed (int (second pspd)))
           (modify ?fp deceleration "DONE"))))))

   (fl:MyFlight-Descent
     0
     ?fp (FlightPlan id ?id
                     climb ?clm
                     descent ?desc-plan
                     final-turn ?fint
                     final-coord ?fcrd
                     (vector? ?desc-plan))
     (History moment ?now
              (fl/exists? ?id))
     =>
     (let [ccrd (fl/get-param ?id :coord)
           dist (fl/distance-nm ccrd ?fcrd)
           palt (fl/tabfun dist ?desc-plan)
           [ftpt _] ?fint]
       (if (number? palt)
         (when (< palt (fl/get-param ?id :altitude))
           (fl/auto-control ?id :altitude (int palt))
           (if (vector? ?clm)
             (modify ?fp climb "DONE"))
           (when (not= ?fcrd ftpt)
             (println [:TURN-ON-FT-MARKER ftpt :ID ?id])
             (modify ?fp final-coord ftpt))) ;; turn on final turn start point
         (when (and (= ?clm "DONE") (= (first palt) :LB))
           (fl/auto-control ?id :altitude (int (second palt)))
           (modify ?fp descent "DONE")))))

  (fl:MyFlight-Final-Turn
   0
   ?fp (FlightPlan id ?id
                   descent "DONE"
                   direct-flight ?dirf
                   final-turn ?fint
                   (vector? ?fint))
   (History moment ?now
            (fl/exists? ?id))
   =>
   (if (not= ?dirf "DONE")
     (modify ?fp direct-flight "DONE")
     (let [[ftpt rw2] ?fint
           ccrs (fl/get-param ?id :course)]
       (cond
        (vector? ftpt)
        (let [ccrd (fl/get-param ?id :coord)]
          (when (fl/abaft ccrs ccrd ftpt)
            (println [:FINAL-TURN-ON rw2 :ID ?id])
            (fl/turn ?id rw2)
            (modify ?fp final-turn ["TURN" rw2])))
        (and (= ftpt "TURN") (= ccrs rw2))
        (do
          (println [:LANDING :ID ?id])
          (modify ?fp final-turn "DONE"))))))

  (fl:MyFlight-Landing
   0
   ?fp (FlightPlan id ?id
                   final-turn "DONE"
                   landing ?land
                   (vector? ?land))
   (History moment ?now
            (fl/exists? ?id))
   =>
   (let [[iata crd2 spd-tab alt-tab] ?land
         ccrd (fl/get-param ?id :coord)
         dist (fl/distance-nm ccrd crd2)]
     (if (< dist 0.05)
       (fl/arrived ?id iata)
       (do
         (fl/auto-control ?id :course (int (fl/bear-deg ccrd crd2)))
         (fl/auto-control ?id :speed (int (fl/smooth-tabfun dist spd-tab)))
         (fl/auto-control ?id :altitude (int (fl/smooth-tabfun dist alt-tab))))))))

;; ------------------------ Functions -------------------------
 (functions
   (ns fl
     (:require [rete4flight.core :as core]
               [rete4flight.geo :as geo]
               [rete4flight.cesium :as cz]))

   (def TIME 0.1) ;; forcast time for intersection in hours (6 min)
   (def DMIN 0.215) ;; distance of intersection in nautical miles (~400 m)

   (defn tabfun [x table]
     (core/tabfun x table))

   (defn smooth-tabfun [x table]
     (core/smooth-tabfun x table))

   (defn get-param [id param]
     (core/get-param id param))

   (defn auto-control [id param val]
     (if (= (get-in @core/MYFS [:control id]) :auto)
       (core/set-param! id param val)))

   (defn exists? [id]
     (get (:all @core/MYFS) id))

   (defn put-on-map [id cs sta]
     (if-let [dat (or (get (:all @core/FRS) id)
                      (get (:all @core/MYFS) id))]
       (let [[lat lon] (core/coord dat)]
         (core/pump-in-evt {:event :create-mapob
                            :id id
                            :callsign cs
                            :lat lat
                            :lon lon
                            :crs (core/course dat)
                            :spd (core/speed dat)
                            :alt (core/altitude dat)
                            :state sta}))))

   (defn put-off-map [id]
     (core/pump-in-evt {:event :delete-mapob :id id}))

  (defn pom-and-link [id1 cs1 id2 cs2 dmin tmin]
    (put-on-map id1 cs1 "INTERSECT")
    (put-on-map id2 cs1 "INTERSECT")
    (core/pump-in-evt {:event :add-link
                       :ids [id1 id2]
                       :options {:weight 4
                                 :title (str cs1 " - " cs2)
                                 :color "red"
                                 :dmin dmin
                                 :tmin tmin}}))

   (defn set-map-view [[lat lon]]
     (core/pump-in-evt {:event :set-map-view
                        :lat lat
                        :lon lon}))

   (defn follow-flight [id [y3 x3] [y2 x2] [y1 x1]]
     ;;(core/inform id)
     (core/trail id [y3 x3 0 y2 x2 0 y1 x1 0]))

   (defn distance-nm [crd1 crd2]
     (geo/distance-nm crd1 crd2))

   (defn bear-deg [from to]
     (geo/bear-deg from to))

   (defn intersect? [crd1 crs1 spd1 crd2 crs2 spd2 id1 id2]
     (when-let [crd3 (geo/future-intersect crd1 crs1 spd1 crd2 crs2 spd2 TIME)]
       (let [d1 (distance-nm crd1 crd3)
             tmin (/ d1 spd1)
             crd4 (geo/future-pos crd2 crs2 spd2 tmin)
             dmin (distance-nm crd3 crd4)]
         (if (< dmin DMIN)
           [dmin tmin]))))

   (defn max-distance [spd1 spd2]
     (* (+ spd1 spd2) TIME))

   (defn abaft [crs crd1 crd2]
     (geo/abaft crs crd1 crd2))

   ;; ------------------------ Current time -----------------------------

   (defn current-time []
     (core/current-time))

   (defn time-passed? [[hour min]]
     (let [hr0 (read-string hour)
           mn0 (read-string min)
           [chr cmn] (core/cur-hrs-min)]
       (and (>= chr hr0) (>= cmn mn0))))

   (defn adjust-course [crs1 can1]
     (let [dc 8 mdc -8]
       (if (> can1 0)
         (let [crs2 (+ crs1 dc)
               can2 (- can1 dc)
               crs2 (if (> crs2 360) (- crs2 360) crs2)]
           (if (< can2 dc) "FINAL" crs2))
         (let [crs2 (- crs1 dc)
               can2 (+ can1 dc)
               crs2 (if (< crs2 0) (+ crs2 360) crs2)]
           (if (> can2 mdc) "FINAL" crs2)))))

   (defn turn [id on-course]
     (core/turn id on-course))

  (defn what-side [crs on-course]
    (cz/what-side crs on-course))

  (defn ncrs [crs]
    (cond
     (>= crs 360) (- crs 360)
     (< crs 0) (+ crs 360)
     true crs))

   (defn turn-end-point [ipoint spd crs1 crs2]
     "Calculates end point of turn"
     (if (not= crs1 crs2)
       (let [mihs (/ core/MYFS-INTL 3600000)
             step core/TRN-STP
             side (what-side crs1 crs2)]
         (loop [crs crs1 point ipoint]
           (if (< (Math/abs (- crs crs2)) step)
             point
             (if (= side :left)
               (recur (ncrs (- crs step)) (geo/future-pos point crs spd mihs))
               (recur (ncrs (+ crs step)) (geo/future-pos point crs spd mihs))))))))

   (defn arrived [id iata]
     (println [:ARRIVED :ID id :AIRPORT iata])
     (vswap! core/MYFS assoc-in [:all id] nil) ;; clear my flight
     (if (= id @core/FOLLOW-ID)
       (core/stopfollow)))

  (defn fly-to [[lat lon] alt crs per]
    (cz/fly-to lat lon alt crs per))

  (defn leg [label scale following p4d1 p4d2]
    (let [img (if following
                "http://localhost:3000/img/b.png"
                "http://localhost:3000/img/r.png")]
      (cz/leg label img scale p4d1 p4d2)))

   (defn following [crs1 crs2]
     (let [dif (Math/abs (- crs2 crs1))]
       (or (< dif 90)(> dif 270))))

   (defn shift-plan [curt tab]
     (vec (map #(vector (+ curt (first %)) (second %)) tab)))

   ;; ----------------------- Flight Plans -----------------------

   (defn initial-turn [start-msec from to]
     (let [[_ crd1 _] from
           [_ crd2 _] to
           bea1 (int (bear-deg crd1 crd2))]
       [bea1]))

   (defn final-turn [start-msec from to]
     (let [[_ crd1 _] from
           [_ crd2 rw2] to
           rebe (geo/rev-bear rw2) ;; reverse landing course
           omrk (geo/future-pos crd2 rebe 9 1) ;; outer marker position
           regc (geo/bear-deg crd2 crd1) ;; reverse general course
           ftpt (turn-end-point omrk 200 rebe regc)] ;; final turn start point
       [ftpt rw2]))

   (defn climb-plan [start-msec from to]
     ;; plan of altitude increase
     (shift-plan start-msec [[0 0][30000 0][600000 20000][1200000 33000]])) ;; x - time, y - altitude

   (defn descent-plan [start-msec from to]
     ;; plan of altitude decrease
     [[4 3400][75 33000]]) ;; x - distance, y - altitude

   (defn accel-plan [start-msec from to]
     ;; plan of speed increase
     (shift-plan start-msec [[0 0][30000 220][600000 380][1200000 455]])) ;; x - time, y - speed

   (defn decel-plan [start-msec from to]
     ;; plan of speed decrease
     [[3 200][80 455]]) ;; x - distance, y - speed

   (defn takeoff-plan [start-msec from to]
     (let [[_ crd1 rw1] from]
       [(shift-plan start-msec [[0 rw1][60000 rw1]]) 200 300])) ;; [crs-tab min-spd min-alt]

   (defn landing-plan [start-msec from to]
     (let [[iata crd2 _] to]
       [iata crd2
        [[0.05 5][0.5 140][3 250]]     ;; x - distance, y - speed
        [[0.05 0] [0.5 50][2 1000][4 3400]]]))) ;; x - distance, y - altitude


 (facts))

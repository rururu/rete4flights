((templates
  (Flight id latitude longitude course speed altitude N history state)
  (History moment memory)
  (Check status)
  (Follow id))

 (rules
  (fl:MoveHistory
   1
   ?h1 (History moment ?m1)
   ?h2 (History moment ?m2
                (> ?m2 ?m1))
   =>
   (retract ?h1))

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
   (History moment ?now)
   (Flight id ?id
           latitude ?lat
           longitude ?lon
           history ?now)
   =>
   ;;(println [:FOLLOW ?id :CENTER ?lat ?lon])
   (fl/set-map-view ?lat ?lon)
   (fl/follow-flight ?id)
   (retract ?f))


  (fl:CheckStateHere
   -1
   (Check status "STATE")
   (History moment ?now)
   (Flight id ?id
           history ?now
           state ?sta)
   =>
   (fl/put-on-map ?id ?sta))

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
           latitude ?lat1
           longitude ?lon1
           course ?crs1
           speed ?spd1
           altitude ?a1
           history ?now
           N ?n1)
   (Flight id ?id2
           latitude ?lat2
           longitude ?lon2
           course ?crs2
           speed ?spd2
           altitude ?a2
           history ?now
           N ?n2
           ((< ?n1 ?n2)
            (and (> ?spd1 0) (> ?spd2 0))
            [(and (> ?a1 0) (> ?a2 0) (< (Math/abs (- ?a1 ?a2)) 10000))
             (and (== ?a1 0) (== ?a2 0))]
            (< (fl/distance-nm ?lat1 ?lon1 ?lat2 ?lon2)
               (fl/max-distance ?spd1 ?spd2))))
   =>
   ;;(println [?id1 ?id2])
   (when-let [[dmin tmin] (fl/intersect? ?lat1 ?lon1 ?crs1 ?spd1
                                                       ?lat2 ?lon2 ?crs2 ?spd2
                                                       ?id1 ?id2)]
     (println [:Dmin dmin :Tmin tmin])
     (fl/pom-and-link ?id1 ?id2 dmin tmin)))

  (fl:RetractCheck
   -2
   ?ch (Check)
   =>
   (retract ?ch)))

 (functions
  (ns fl
    (:require [rete4flight.core :as core]))

  (def TIME 0.1) ;; forcast time for intersection in hours (6 min)
  (def DMIN 0.215) ;; distance of intersection in nautical miles (~400 m)

  (defn spherical-between [^double phi1 ^double lambda0 ^double c ^double az]
    (let [cosphi1 (Math/cos phi1)
          sinphi1 (Math/sin phi1)
          cosaz (Math/cos az)
          sinaz (Math/sin az)
          sinc (Math/sin c)
          cosc (Math/cos c)
          phi2 (Math/asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
          lam2 (+ (Math/atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
      [phi2 lam2]))

  (defn spherical-distance [^double phi1 ^double lambda0 ^double phi ^double lambda]
    (let [pdiff (Math/sin (/ (- phi phi1) 2.0))
          ldiff (Math/sin (/ (- lambda lambda0) 2.0))
          rval (Math/sqrt (+ (* pdiff pdiff) (* (Math/cos phi1) (Math/cos phi) ldiff ldiff)))]
      (* 2.0 (Math/asin rval))))

  (defn spherical-azimuth [^double phi1 ^double lambda0 ^double phi ^double lambda]
    (let [ldiff (- lambda lambda0)
          cosphi (Math/cos phi)]
      (Math/atan2 (* cosphi (Math/sin ldiff))
                  (- (* (Math/cos phi1) (Math/sin phi)) (* (Math/sin phi1) cosphi (Math/cos ldiff))))))

  (defn future-pos [lat lon crs spd tim]
    (let [phi (Math/toRadians lat)
          lam (Math/toRadians lon)
          dir (Math/toRadians crs)
          way (* spd tim)
          way (Math/toRadians (/ way 60))
          [phi2 lam2] (spherical-between phi lam way dir)]
      [(Math/toDegrees phi2) (Math/toDegrees lam2)]))

  (defn seg-intersect [x1 y1 x2 y2 x3 y3 x4 y4]
    (let [denom (- (* (- y4 y3) (- x2 x1)) (* (- x4 x3) (- y2 y1)))]
      (if (not (== denom 0.0))
        (let [ua (/ (- (* (- x4 x3) (- y1 y3)) (* (- y4 y3) (- x1 x3))) denom)
              ub (/ (- (* (- x2 x1) (- y1 y3)) (* (- y2 y1) (- x1 x3))) denom)]
          (if (and (<= 0.0 ua 1.0) (<= 0.0 ub 1.0))
            [(+ y1 (* ua (- y2 y1))) (+ x1 (* ua (- x2 x1)))])))))

  (defn future-intersect [la1 lo1 crs1 spd1 la2 lo2 crs2 spd2 tim]
    (let [[la3 lo3] (future-pos la1 lo1 crs1 spd1 tim)
          [la4 lo4] (future-pos la2 lo2 crs2 spd2 tim)]
      (seg-intersect lo1 la1 lo3 la3 lo2 la2 lo4 la4)))

  (defn distance-nm [la1 lo1 la2 lo2]
    (let [fi1 (Math/toRadians la1)
          ld1 (Math/toRadians lo1)
          fi2 (Math/toRadians la2)
          ld2 (Math/toRadians lo2)
          rad (spherical-distance fi1 ld1 fi2 ld2)]
      (* (Math/toDegrees rad) 60)))

  (defn bear-deg [la1 lo1 la2 lo2]
    (let [fi1 (Math/toRadians la1)
          ld1 (Math/toRadians lo1)
          fi2 (Math/toRadians la2)
          ld2 (Math/toRadians lo2)
          rad (spherical-azimuth fi1 ld1 fi2 ld2)
          deg (Math/toDegrees rad)]
      (cond
       (< deg 0) (+ deg 360.0)
       (> deg 360.0) (- deg 360.0)
       true deg)))

  (defn abaft [la1 lo1 crs1 la2 lo2]
    (let [bea (bear-deg la1 lo1 la2 lo2)
          ca (Math/abs (- bea crs1))]
      (println [crs1 bea ca])
      (and (> ca 90) (< ca 270))))

  (defn max-distance [spd1 spd2]
    (* (+ spd1 spd2) TIME))

  (defn intersect? [lat1 lon1 crs1 spd1 lat2 lon2 crs2 spd2 id1 id2]
    (when-let [[lat3 lon3] (future-intersect lat1 lon1 crs1 spd1 lat2 lon2 crs2 spd2 TIME)]
      (let [d1 (distance-nm lat1 lon1 lat3 lon3)
            tmin (/ d1 spd1)
            [lat4 lon4] (future-pos lat2 lon2 crs2 spd2 tmin)
            dmin (distance-nm lat3 lon3 lat4 lon4)]
        (if (< dmin DMIN)
          [dmin tmin]))))

  (defn put-on-map [id sta]
    (if-let [dat (get (:all @core/FRS) id)]
      (let [[lat lon] (core/coord dat)]
        (core/pump-in-evt {:event :create-mapob
                           :id id
                           :callsign (core/callsign dat)
                           :lat lat
                           :lon lon
                           :crs (core/course dat)
                           :spd (core/speed dat)
                           :alt (core/altitude dat)
                           :state sta}))))

  (defn put-off-map [id]
    (core/pump-in-evt {:event :delete-mapob :id id}))

  (defn pom-and-link [id1 id2 dmin tmin]
    (let [cs1 (core/callsign id1)
          cs2 (core/callsign id2)]
      (put-on-map id1 "INTERSECT")
      (put-on-map id2 "INTERSECT")
      (core/pump-in-evt {:event :add-link
                         :ids [id1 id2]
                         :options {:weight 4
                                   :title (str cs1 " - " cs2)
                                   :color "red"
                                   :dmin dmin
                                   :tmin tmin}})))

  (defn set-map-view [lat lon]
    (core/pump-in-evt {:event :set-map-view
                       :lat lat
                       :lon lon}))

  (defn follow-flight [id]
    ;;(core/inform id)
    (core/trail id)))


 (facts))

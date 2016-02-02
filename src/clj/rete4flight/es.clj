((templates
  (Flight id latitude longitude course speed altitude N history state)
  (History moment memory)
  (Check status)
  )
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

  (fl:CheckStateHere
   -1
   (Check status "STATE")
   (History moment ?now)
   (Flight id ?id
           history ?now
           state ?sta)
   =>
   (rete4flight.core/put-on-map ?id ?sta))

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
   (rete4flight.core/put-off-map ?id))

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
            (< (rete4flight.calc/distance-nm ?lat1 ?lon1 ?lat2 ?lon2)
               (rete4flight.calc/max-distance ?spd1 ?spd2))))
   =>
   ;;(println [?id1 ?id2])
   (when-let [[dmin tmin] (rete4flight.calc/intersect? ?lat1 ?lon1 ?crs1 ?spd1
                                                       ?lat2 ?lon2 ?crs2 ?spd2
                                                       ?id1 ?id2)]
     (println [:Dmin dmin :Tmin tmin])
     (rete4flight.core/pom-and-link ?id1 ?id2 dmin tmin)))

  (fl:RetractCheck
   -2
   ?ch (Check)
   =>
   (retract ?ch)))
 (functions)
 (facts))

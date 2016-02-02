(ns rete4flight.calc)

(def TIME 0.1) ;; forcast time for intersection in hours (6 min)
(def DMIN 0.215) ;; distance of intersection in nautical miles (~400 m)

(defn spherica-between [^double phi1 ^double lambda0 ^double c ^double az]
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
        [phi2 lam2] (spherica-between phi lam way dir)]
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


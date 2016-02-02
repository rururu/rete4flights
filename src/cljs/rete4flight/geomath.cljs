(ns rete4flight.geomath)

(def pid180 (/ Math.PI 180))
(def nmrad (/ Math.PI 10800))

(defn spherica-between [phi1 lambda0 c az]
  (let [cosphi1 (js/Math.cos phi1)
        sinphi1 (js/Math.sin phi1)
        cosaz (js/Math.cos az)
        sinaz (js/Math.sin az)
        sinc (js/Math.sin c)
        cosc (js/Math.cos c)
        phi2 (js/Math.asin (+ (* sinphi1 cosc) (* cosphi1 sinc cosaz)))
        lam2 (+ (js/Math.atan2 (* sinc sinaz) (- (* cosphi1 cosc) (* sinphi1 sinc cosaz))) lambda0)]
    [phi2 lam2]))

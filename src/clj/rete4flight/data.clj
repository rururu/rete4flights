(ns rete4flight.data
  (:require [rete4flight.geo :as geo]
            [clj-json.core :as json]))

(def BBX (volatile! [0 0 0 0 [0 0] 0]))
(def STEP 0.5) ;; Percentage of BBX height for data update

(def USERNAME "liikalanjoki")
(def MAXROWS 36)
(def FEATURES ["landmark"
               "city"
               "edu"
               "mountain"
               "river"
               "railwaystation"
               "event"])

(defn placemark-evt [n dat]
  {:event :create-placemark
   :id (str "placemark" n)
   :title (get dat "title")
   :lat (get dat "lat")
   :lon (get dat "lng")
   :alt (or (get dat "elevation") 0)
   :state (get dat "feature")})

(defn fetch-data []
  (let [[n s w e c] @BBX
        url (str "http://api.geonames.org/wikipediaBoundingBoxJSON"
                 "?north=" n "&south=" s "&east=" e "&west=" w
                 "&maxRows=" MAXROWS
                 "&username=" USERNAME)]
    (try
      (let [res (slurp url)
            jsn (json/parse-string res)
            gns (get jsn "geonames")
            fea (set (map #(get % "feature") gns))
            ret (filter #(some #{(get % "feature")} FEATURES) gns)]
        (println (str "Fetched " (count gns) " data items, features: " fea))
        (println (str "Returned " (count ret) " data items, features: " FEATURES))
        ret)
      (catch Exception e
        (println [:FETCH-DATA-EXCEPTION e])
        nil))))

(defn data-bbx [bbx-str]
  (let [bbx (vec (map read-string bbx-str))
        [n1 s1 w1 e1 c1] bbx
        [n0 s0 w0 e0 c0 d0] @BBX
        d1 (geo/distance-nm c1 c0)]
    (when (> d1 d0)
      (vreset! BBX (conj bbx (* (- n1 s1) (* 60 STEP))))
      (fetch-data))))


(defproject rete4flight "0.0.1-SNAPSHOT"
  :description "FIXME: write this!"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.225"]
                 [org.clojure/core.async "0.2.385"]
                 [ring "1.5.0"]
                 [compojure "1.5.1"]
                 [cljs-ajax "0.5.8"]
                 [http-kit "2.1.18"]
                 [clj-json "0.5.3"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 [rete "5.2.4-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.1.4"]]
  :hooks [leiningen.cljsbuild]
  :source-paths ["src/clj" "src/cljs"]
  :javac-options ["-target" "1.7" "-source" "1.7" "-Xlint:-options"]
  :cljsbuild {
    :builds {
      :main {
        :source-paths ["src/cljs"]
        :compiler {:output-to "resources/public/cljs.js"
                   :optimizations :simple
                   :pretty-print true}
        :jar false}}}
  :aot [rete4flight.core]
  :main rete4flight.core
  :ring {:handler rete4flight.core/app}
  :repl-options {
             ;; If nREPL takes too long to load it may timeout,
             ;; increase this to wait longer before timing out.
             ;; Defaults to 30000 (30 seconds)
             :timeout 600000
             })

(defproject docker.ui "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [;cljs
                 [org.clojure/clojurescript "1.7.170"]
                 [reagent "0.6.0-alpha"]
                 [com.cognitect/transit-cljs "0.8.237"]
                 [garden "1.3.0"]
                 [cljs-ajax "0.5.3"]
                 [venantius/accountant  "0.1.6"]
                 [secretary "1.2.3"]
                 [reagent-utils "0.1.7"]
                 ;server
                 [compojure "1.3.4"]
                 [ring  "1.4.0"]
                 [ring/ring-defaults  "0.1.5"]
                 [ring/ring-codec  "1.0.0"]
                 [http-kit "2.1.18"]
                 [hiccup  "1.0.5"]
                 ;redis
                 [com.taoensso/carmine  "2.10.0"] 
                 ;core
                 [jarohen/chord  "0.7.0" :exclusions [[com.cognitect/transit-cljs]] ] ;avoid uuid conflict
                 [org.clojure/core.async "0.2.374"]
                 [environ "1.0.0"]
                 [cheshire "5.5.0"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/algo.monads "0.1.5"]
                 [clj-time "0.9.0"]
                 [prone "0.6.1"]
                 ;java
                 [commons-lang/commons-lang "2.6"]]

  :repl-options {:init-ns docker.ui.repl}
  :uberjar-name "docker.ui.jar"
  :source-paths ["src/main/clj"]
  :resource-paths ["src/main/resources"]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-parent  "0.2.1"]
            [lein-ring "0.9.3"]
            [lein-environ "1.0.0"]
            [lein-ancient "0.5.5"]
            [lein-garden "0.2.6"]] 

  :cljsbuild {:builds {:app {:source-paths ["src/main/cljs"]
                             :compiler {:output-to     "src/main/resources/public/assets/js/app.js"
                                        :output-dir    "src/main/resources/public/assets/js/out"
                                        :source-map    "src/main/resources/public/assets/js/out.js.map"
                                        :optimizations :simple
                                        :pretty-print true}}}}
  :garden {:builds [{:source-paths  ["src/main/css"]
                     :stylesheet docker.ui.css/screen
                     :compiler  {:output-to "src/main/resources/public/assets/css/out/screen.css"}
                     :pretty-print? false}]}

  :profiles  {:dev {:env {:dev? true
                          :docker-tcp-address "192.168.99.100:2376"}}
              :uberjar {:omit-source true
                        :hooks  [leiningen.cljsbuild]
                        :cljsbuild {:jar true
                                    :builds {:app {:compiler {
                                                              :optimizations :whitespace
                                                              :pretty-print false}}}}
                        :manifest {"Class-Path" "conf/"}
                        :aot :all}}
  :main docker.ui.server 
  :min-lein-version "2.0.0")

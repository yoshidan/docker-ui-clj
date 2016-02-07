(ns docker.ui.client
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require
   [chord.client :refer  [ws-ch]]
   [cljs.core.async :refer  [put! chan <! >! timeout]]
   [clojure.data :as data]
   [clojure.string :as string]
   [reagent.core :as reagent :refer  [atom]]
   [clojure.browser.repl :as repl]
   [cljs.reader :as reader]))

(enable-console-print!)

(def docker-stats  (reagent/atom {:stats {}}))

(defn- container-list []
  (js/console.log (:stats @docker-stats))
  [:div 
   [:h1 "Docker I/O"]
[:div 
   [:table.table.table-hover
    [:thead
     [:tr 
      [:th "CONTAINER"]
      [:th "CPU %"]
      [:th "MEM USAGE / LIMIT"]
      [:th "MEM %"]
      [:th "NET I/O"]
      [:th "BLOCK I/O"]]]
    [:tbody 
     (for [container (:detail (:stats @docker-stats)) ]
       [:tr 
        [:td (:id container) ]
        [:td (str (:percent (:cpu container)))]
        [:td (str (:usage (:memory container)) " / " (:limit (:memory container)))]
        [:td (str (:percent (:memory container)))]
        [:td (str (:rx-bytes (:network container)) " / " (:tx-bytes (:network container)) )]
        [:td (str (:read-io (:block-io container)) " / " (:write-io (:block-io container)) )]])]
    (let [summary (:summary (:stats @docker-stats))] 
      [:tfoot
       [:tr 
        [:th "SUM" ]
        [:td (:percent (:cpu summary)) ]
        [:td (:usage (:memory summary)) ]
        [:td (:percent (:memory summary))]
        [:td (str (:rx-bytes (:network summary)) " / " (:tx-bytes (:network summary)) )]
        [:td (str (:read-io (:block-io summary)) " / " (:write-io (:block-io summary)) )]
        ]])]]] )

(defn- main-app
  "ルート"
  []
  (container-list))

(defn ^:export run
  []
  (go 
   (let  [{:keys  [ws-channel]}  (<! (ws-ch  "ws://localhost:3000/ws/docker/stats" (:format :edn) ))]
     (loop []
       (let [{:keys  [message error]}  (<! ws-channel)]
         (if error
           (js/console.log  "Uh oh:" error)
           (let [response message]
             ;responseがlistになっているはずだがlistにしなくてはならない
             (apply swap! docker-stats assoc :stats (list message) ) 
             (recur )))))))
  (reagent/render-component [main-app] (.getElementById js/document "app") ))
 

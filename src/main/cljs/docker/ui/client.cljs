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

(def docker-stats  (reagent/atom {:stats []}))

(defn- container-list []
  (js/console.log (:stats @docker-stats))
  [:div 
   [:table 
    [:thead
     [:tr 
      [:th "CONTAINER"]
      [:th "CPU %"]
      [:th "MEM USAGE / LIMIT"]
      [:th "MEM %"]
      [:th "NET I/O"]
      [:th "BLOCK I/O"]]]
    [:tbody 
     (for [container (:stats @docker-stats) ]
       [:tr 
        [:td (:id container) ]
        [:td (str (:percent (:cpu container)) "%" )]
        [:td (str (:usage (:memory container)) "MB / " (:limit (:memory container)) "GB" )]
        [:td (str (:percent (:memory container)) "%" )]
        [:td (:net-io container)]
        [:td (:block-io container)]])]]])

(defn- main-app
  "ルート"
  []
  (container-list))

(defn ^:export run
  []
  (go 
   (let  [{:keys  [ws-channel]}  (<! (ws-ch  "ws://localhost:3000/ws/docker/stats" (:format :edn) ))]
     (loop []
       ;送信
       (let [send-ok  (>! ws-channel  "PLEASE-SEND-DOCKER-STATS")]
         (if-not send-ok
           (js/console.log  "Can't send in /docker/stats loop")
           (let [{:keys  [message error]}  (<! ws-channel)]
             (if error
               (js/console.log  "Uh oh:" error)
               (let [response message]
                ;responseがlistになっているはずだがlistにしなくてはならない
                (apply swap! docker-stats assoc :stats (list message) ) 
                (<! (timeout 1000))
                (recur )))))))))
  (reagent/render-component [main-app] (.getElementById js/document "app") ))
 

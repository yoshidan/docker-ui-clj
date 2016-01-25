(ns docker.ui.app
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

(def app-state
  (reagent/atom
   {:container []}))

(defn- container-list []
  [:div 
   [:table 
    [:thead
     [:tr 
      [:th "CONTAINER"]
      [:th "CPU"]
      [:th "MEM USAGE / LIMIT"]
      [:th "NET I/O"]
      [:th "BLOCK I/O"]]]
    [:tbody 
     (for [container (:container @app-state)]
       [:tr 
        [:td (:name container)]
        [:td (:cpu container)]
        [:td (:mem-usage container)]
        [:td (:net-io container)]
        [:td (:block-io container)]])]]])

(defn- main-app
  "ルート"
  []
  (container-list))

(defn ^:export run
  []
  (reagent/render-component [main-app] (.getElementById js/document "app") ))
 

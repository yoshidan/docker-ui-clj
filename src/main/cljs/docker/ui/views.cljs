(ns docker.ui.views
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent ]
   [clojure.browser.repl :as repl]
   [docker.ui.utils :as u]
   [cljs.reader :as reader]))

(enable-console-print!)

(def current-view  (reagent/atom nil))

(defn set-current-view!  
  "現在のviewを変更する"
  [function]
  (reset! current-view function))

(def docker-stats  (reagent/atom {:stats {}}))

(defn stats-view []
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
        [:tr {:key (:id container)} 
         [:td {:on-click #(u/dispatch (str "/containers/" (:id container)))} (:name container) ]
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
         [:td ]
         [:td (str (:rx-bytes (:network summary)) " / " (:tx-bytes (:network summary)) )]
         [:td (str (:read-io (:block-io summary)) " / " (:write-io (:block-io summary)) )]
         ]])]]] )

(defn container-view
  "コンテナの情報"
  [container]
  [:div 
   [:h1 "Docker Info"]
   [:span container]
   [:span (cljs.reader/read-string container)]
   [:div 
    [:table.table.table-hover
     [:tbody
      [:tr [:th "HostPath"] [:td (get (cljs.reader/read-string container) "HostsPath") ]]
      [:tr [:th "Links"] [:td (:Links (:HostConfig container))]]]]]])



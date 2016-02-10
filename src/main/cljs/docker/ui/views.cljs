(ns docker.ui.views
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require
   [clojure.string :as string]
   [reagent.core :as reagent ]
   [reagent.session :as session ]
   [clojure.browser.repl :as repl]
   [accountant.core :as accountant]
   [cljs.reader :as reader]))

(enable-console-print!)

(defn current-view
  "現在のview current-pageが更新される毎に再レンダリング"
  []
  ((session/get :current-page)))

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
      (for [container (:detail (session/get :stats )) ]
        [:tr {:key (:id container) :on-click #(accountant/navigate! (str "/containers/" (:id container))) } 
         [:td (:name container) ]
         [:td (str (:percent (:cpu container)))]
         [:td (str (:usage (:memory container)) " / " (:limit (:memory container)))]
         [:td (str (:percent (:memory container)))]
         [:td (str (:rx-bytes (:network container)) " / " (:tx-bytes (:network container)) )]
         [:td (str (:read-io (:block-io container)) " / " (:write-io (:block-io container)) )]])]
     (let [summary (:summary (session/get :stats))] 
       [:tfoot
        [:tr 
         [:th "SUM" ]
         [:td (:percent (:cpu summary)) ]
         [:td (:usage (:memory summary)) ]
         [:td ]
         [:td (str (:rx-bytes (:network summary)) " / " (:tx-bytes (:network summary)) )]
         [:td (str (:read-io (:block-io summary)) " / " (:write-io (:block-io summary)) )]
         ]])]]] )

(defn info-view
  "コンテナの情報"
  [container]
  ;serverからのレスポンスがシンボルなしのedn形式の文字列であるためparse
  (let [edn (cljs.reader/read-string container)] 
    [:div 
     [:h1 "Docker Info"]
     [:div 
      [:table.table.table-hover
       [:thead
        [:tr [:th {:width "20%"} "キー" ] [:th "値"]]]
       [:tbody
        [:tr [:th "ID"] [:td (get edn "Id") ]]
        [:tr [:th "コンテナ名"] [:td (get edn "Name") ]]
        [:tr [:th "イメージ"] [:td (get edn "Image") ]]
        [:tr [:th "ポート"] [:td (-> (get edn "HostConfig") (get "PortBindings") (str)) ]]
        [:tr [:th "IPアドレス"] [:td (-> (get edn "NetworkSettings") (get "IPAddress") (str)) ]]
        [:tr [:th "Gateway"] [:td (-> (get edn "NetworkSettings") (get "Gateway") (str)) ]]
        [:tr [:th "マウント"] [:td (-> (get edn "Volumes") (str)) ]]
        [:tr [:th "リンク"] [:td (-> (get edn "HostConfig") (get "Links") (str)) ]]
        [:tr [:th "ステータス"] [:td (-> (get edn "State") 
                                         (select-keys ["Status" "Restarting" "StartedAt" "FinishedAt"]) (str)) ]]
        [:tr [:th "作成日"] [:td (get edn "Created")]]]]]]))



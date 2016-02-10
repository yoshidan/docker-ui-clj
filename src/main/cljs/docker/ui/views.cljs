(ns docker.ui.views
  (:require
   [reagent.session :as session ]
   [accountant.core :as accountant]))

(defn default-view 
  []
  [:div [:span ""]])

(defn current-view
  "現在のview current-pageが更新される毎に再レンダリング"
  []
  ((session/get :current-page default-view)))

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
      [:table.table.table-hover.grid
       [:thead
        [:tr [:th {:width "20%"} "キー" ] [:th {:col-span 2} "値"]]]
       [:tbody
        [:tr [:th "ID"] [:td {:col-span 2} (get edn "Id") ]]
        [:tr [:th "コンテナ名"] [:td {:col-span 2} (get edn "Name") ]]
        [:tr [:th "イメージ"] [:td {:col-span 2}(get edn "Image") ]]
        [:tr [:th "ポート"] [:td {:col-span 2}(-> (get edn "HostConfig") (get "PortBindings") (str)) ]]
        [:tr [:th "IPアドレス"] [:td {:col-span 2}(-> (get edn "NetworkSettings") (get "IPAddress") (str)) ]]
        [:tr [:th "Gateway"] [:td {:col-span 2}(-> (get edn "NetworkSettings") (get "Gateway") (str)) ]]
        [:tr [:th "マウント"] [:td {:col-span 2}(-> (get edn "Volumes") (str)) ]]
        [:tr [:th "リンク"] [:td {:col-span 2}(-> (get edn "HostConfig") (get "Links") (str)) ]]
        (let [status (-> (get edn "State") 
                         (select-keys ["Status" "Restarting" "StartedAt" "FinishedAt"]))]
          (list
           [:tr [:th {:row-span 4} "ステータス" ] [:th {:width "10%"} "起動状態"] 
            [:td 
             (let [running  (get status "Status")] 
               [:div 
                [:span.with-link running ]
                (case running
                  "running" [:a.stop {:href "#" 
                                 :on-click #(accountant/navigate! (str "/containers/" (get edn "Id") "/stop")) } 
                             [:span {:title "Stop Container" :class "glyphicon glyphicon-stop"}]]
                  "exited" [:a {:href "#"
                                :on-click #(accountant/navigate! (str "/containers/" (get edn "Id") "/start")) } 
                            [:span {:title "Start Container" :class "glyphicon glyphicon-play"}]])]) ]]
           [:tr [:th "再起動中？"] [:td (if-let [restarting (get status "Restarting")] restarting "false")]]
           [:tr [:th "開始時刻"] [:td (get status "StartedAt")]]
           [:tr [:th "終了時刻"] [:td (get status "FinishedAt")]]))
        [:tr [:th "作成時刻"] [:td {:col-span 2}(get edn "Created")]]]]]]))



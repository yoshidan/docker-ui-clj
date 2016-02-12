(ns docker.ui.views
  (:require
   [reagent.session :as session ]
   [ajax.core :as ajax]
   [accountant.core :as accountant]))

(defn default-view 
  "URL直接指定などされた時のdisatch-currentでajax通信中でcurrent-pageがnilになるのを防止する"
  []
  [:div [:span ""]])

(defn current-view
  "現在のview current-pageが更新される毎に再レンダリング"
  []
  (println "render ")
  ((session/get :current-page default-view)))

(defn start-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-info {:role "alert"} "コンテナを起動しますか？"
    [:button.btn.btn-primary
     {:on-click #(ajax/POST (str "/api/containers/" id "/start") 
                            {:handler (fn [e] (accountant/navigate! (str "/containers/" id "/start/complete")))
                             :error-handler (fn [e] (accountant/navigate! (str "/containers/" id "/start/failure")))})}
     "OK" ]]])

(defn start-failure-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-danger {:role "alert"} (str id "の起動に失敗しました")]])

(defn start-complete-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-success {:role "alert"} (str id "の起動に成功しました")]])

(defn stop-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-info {:role "alert"} "コンテナを停止しますか？"
    [:button.btn.btn-primary
     {:on-click #(ajax/POST (str "/api/containers/" id "/stop") 
                            {:handler (fn [e] (accountant/navigate! (str "/containers/" id "/stop/complete")))
                             :error-handler (fn [e] (accountant/navigate! (str "/containers/" id "/stop/failure")))})}
     "OK"]]])

(defn stop-failure-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-danger {:role "alert"} (str id "の停止に失敗しました")]])

(defn stop-complete-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-success {:role "alert"} (str id "の停止に成功しました")]])

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
                  "running" [:button.btn.btn-danger.btn-sm 
                             {:on-click #(accountant/navigate! (str "/containers/" (get edn "Id") "/stop")) }
                            "stop" ]
                  "exited" [:button.btn.btn-primary.btn-sm 
                            {:on-click #(accountant/navigate! (str "/containers/" (get edn "Id") "/start")) } 
                            "start"])]) ]]
           [:tr [:th "再起動中？"] [:td (if-let [restarting (get status "Restarting")] restarting "false")]]
           [:tr [:th "開始時刻"] [:td (get status "StartedAt")]]
           [:tr [:th "終了時刻"] [:td (get status "FinishedAt")]]))
        [:tr [:th "作成時刻"] [:td {:col-span 2}(get edn "Created")]]]]]]))



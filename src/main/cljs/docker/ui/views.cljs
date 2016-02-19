(ns docker.ui.views
  (:require
   [reagent.session :as session ]
   [ajax.core :as ajax]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [accountant.core :as accountant]))

(defn default-view 
  "URL直接指定などされた時のdisatch-currentでajax通信中でcurrent-pageがnilになるのを防止する"
  []
  [:div [:span ""]])

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
  (let [stats-ratom (re-frame/subscribe [:stats])] 
    (println stats-ratom)
    ;subscribeする場合はinnerにすることで:stats以外の変更時のre-renderを抑止
    (fn [] 
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
          (for [container (:detail @stats-ratom) ]
            [:tr {:key (:id container) :on-click #(accountant/navigate! (str "/containers/" (:id container))) } 
             [:td (:name container) ]
             [:td (str (:percent (:cpu container)))]
             [:td (str (:usage (:memory container)) " / " (:limit (:memory container)))]
             [:td (str (:percent (:memory container)))]
             [:td (str (:rx-bytes (:network container)) " / " (:tx-bytes (:network container)) )]
             [:td (str (:read-io (:block-io container)) " / " (:write-io (:block-io container)) )]])]
         (let [summary (:summary @stats-ratom)] 
           [:tfoot
            [:tr 
             [:th "SUM" ]
             [:td (:percent (:cpu summary)) ]
             [:td (:usage (:memory summary)) ]
             [:td ]
             [:td (str (:rx-bytes (:network summary)) " / " (:tx-bytes (:network summary)) )]
             [:td (str (:read-io (:block-io summary)) " / " (:write-io (:block-io summary)) )]
             ]])]]])))

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
           [:tr {:key 1} [:th {:row-span 4} "ステータス" ] [:th {:width "10%"} "起動状態"] 
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
           [:tr {:key 2} [:th "再起動中？"] [:td (if-let [restarting (get status "Restarting")] restarting "false")]]
           [:tr {:key 3} [:th "開始時刻"] [:td (get status "StartedAt")]]
           [:tr {:key 4} [:th "終了時刻"] [:td (get status "FinishedAt")]]))
        [:tr [:th "作成時刻"] [:td {:col-span 2}(get edn "Created")]]]]]]))

(defn current-view
  "現在のview current-pageが更新される毎に再レンダリング"
  []
  (let [current-page-ratom (re-frame/subscribe [:current-page])]  
    (fn [] 
      (if (nil? @current-page-ratom) 
        [default-view] 
        [@current-page-ratom]))))

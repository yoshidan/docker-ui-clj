(ns docker.ui.views
  (:require-macros 
   [cljs.core.async.macros :refer [go]])
  (:require
   [chord.client :refer [ws-ch]]
   [cljs.core.async :refer [put! chan <! >! timeout close!]]
   [reagent.core :as reagent]
   [ajax.core :as ajax]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [goog.string :as gstring]
   goog.string.format
   [accountant.core :as accountant]))

(defn- failure-result
  [id message]
  [:div 
   [:h1 "Docker Info"]
   [:div.alert.alert-danger {:role "alert"} (str id message)]])

(defn- success-result
  [id message]
  [:div 
   [:h1 "Docker Info"]
   [:div.alert.alert-success {:role "alert"} (str id message)]])

(defn default-view 
  []
  [:div ])

(defn start-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-info {:role "alert"} "コンテナを起動しますか？"
    [:button.btn.btn-primary
     {:on-click #(re-frame/dispatch [:start-container id])}
     "OK" ]]])

(defn start-failure-view
  [id]
  (failure-result id "の起動に失敗しました"))

(defn start-complete-view
  [id]
  (success-result id "の起動に成功しました"))

(defn stop-view
  [id]
  [:div 
   [:h1 "Dokcer Info"]
   [:div.alert.alert-info {:role "alert"} "コンテナを停止しますか？"
    [:button.btn.btn-primary
     {:on-click #(re-frame/dispatch [:stop-container id])}
     "OK"]]])

(defn stop-failure-view
  [id]
  (failure-result id "の停止に失敗しました"))

(defn stop-complete-view
  [id]
  (success-result id "の停止に成功しました"))

(defn stats-view []
  (let [stats-ratom (re-frame/subscribe [:stats])] 
    (reagent/create-class
     {:component-did-mount 
      (fn []
        (go 
         (let [url (str "ws://" (.-host (.-location js/window)) "/ws/docker/stats")
              {:keys [ws-channel]}  (<! (ws-ch url (:format :edn) ))]
           (loop []
             (let [{:keys  [message error]}  (<! ws-channel)]
               (if error
                 (close! ws-ch)
                 (do
                  (re-frame/dispatch [:update-stats message])
                  (recur))))))))
      :reagent-render
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
              [:tr {:key (:id container) :on-click #(re-frame/dispatch [:navigate-info-view (:id container)]) } 
               [:td (:name container) ]
               [:td (gstring/format "%.2f" (:percent (:cpu container))) ]
               [:td (str (gstring/format "%.2fMB" (-> (:usage (:memory container)) (/ 1024) (/ 1024))) 
                         " / " 
                         (gstring/format "%.2fGB" (-> (:limit (:memory container)) (/ 1024) (/ 1024) (/ 1024))))]
               [:td (gstring/format "%.2f" (:percent (:memory container)))]
               [:td (str (gstring/format "%.2fKB" (-> (:rx-bytes (:network container)) (/ 1024)  )) 
                         " / " 
                         (gstring/format "%.2fKB" (-> (:tx-bytes (:network container)) (/ 1024) )) )]
               [:td (str (gstring/format "%.2fMB" (-> (:read-io (:block-io container)) (/ 1024) (/ 1024) )) 
                         " / " 
                         (gstring/format "%.2fMB" (-> (:write-io (:block-io container)) (/ 1024) (/ 1024) )) )]])]
           (when-let [summary (:summary @stats-ratom)] 
             [:tfoot
              [:tr 
               [:th "SUM" ]
               [:td (gstring/format "%.2f" (:percent (:cpu summary))) ]
               [:td (gstring/format "%.2fMB" (-> (:usage (:memory summary)) (/ 1024) (/ 1024) )) ]
               [:td ]
               [:td (str (gstring/format "%.2fKB" (-> (:rx-bytes (:network summary)) (/ 1024) )) 
                         " / " 
                         (gstring/format "%.2fKB" (-> (:tx-bytes (:network summary)) (/ 1024) )) )]
               [:td (str (gstring/format "%.2fMB" (-> (:read-io (:block-io summary)) (/ 1024) (/ 1024) )) 
                         " / " 
                         (gstring/format "%.2fMB" (-> (:write-io (:block-io summary)) (/ 1024) (/ 1024) )) )]
               ]])]]]) })))

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
  (let [current-page-ratom (re-frame/subscribe [:current-view])]  
    (fn [] [@current-page-ratom])))

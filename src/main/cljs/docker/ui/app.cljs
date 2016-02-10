(ns docker.ui.app
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require
   [chord.client :refer [ws-ch]]
   [secretary.core :as secretary :refer-macros  [defroute]]
   [ajax.core :as ajax]
   [cljs.core.async :refer  [put! chan <! >! timeout close!]]
   [docker.ui.views :as view]
   [clojure.data :as data]
   [accountant.core :as accountant]
   [reagent.session :as session]
   [clojure.string :as string]
   [reagent.core :as reagent :refer  [atom]]
   [clojure.browser.repl :as repl]
   [cljs.reader :as reader]))

(enable-console-print!)


(defn ^:export run
  []
  (go 
   (let  [{:keys  [ws-channel]}  (<! (ws-ch  "ws://localhost:3000/ws/docker/stats" (:format :edn) ))]
     (loop []
       (let [{:keys  [message error]}  (<! ws-channel)]
         (if error
           (do
            (close! ws-ch)
            (js/console.log  "Uh oh:" error))
           (let [response message]
             ;responseがlistになっているはずだがlistにしなくてはならない
             (session/put! :stats message)
             (recur )))))))

  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (reagent/render-component [view/current-view] (.getElementById js/document "app") ))



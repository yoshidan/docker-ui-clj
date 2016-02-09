(ns docker.ui.utils
  (:require
   [secretary.core :as secretary]
   [reagent.core :as reagent :refer  [atom]]
   [clojure.browser.repl :as repl]))

(enable-console-print!)

(defn dispatch 
  "画面遷移する"
  [url]
  (secretary/dispatch! url) false)


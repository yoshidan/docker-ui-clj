(ns docker.ui.css
  (:require [garden.def :refer  [defstylesheet defstyles]]
            [garden.selectors :as s]
            [garden.units :refer [px]]))


;lein-gardenするとdefstylesheeだと何も出力されない
(defstyles screen
  (list  
   [(s/+ :span.with-link :button ) {:margin-left (px 5)} ]
   [:.table-hover.grid
    [:tbody 
     [:tr 
      [:th {:background-color "rgba(238, 238, 238, 0.63)"}]]]]))



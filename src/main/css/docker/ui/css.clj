(ns docker.ui.css
  (:require [garden.def :refer  [defstylesheet defstyles]]
            [garden.selectors :as s]
            [garden.units :refer [px]]))


;lein-gardenするとdefstylesheeだと何も出力されない
(defstyles screen
  (list  
   [:span.with-link {:vertical-align "super"} ]
   [(s/+ :span.with-link :a ) {:font-size (px 20)} ]
   [(s/+ :span.with-link :a.stop ) {:color "#D8162E"} ]
   [:.table-hover.grid
    [:tbody 
     [:tr 
      [:th {:background-color "rgba(238, 238, 238, 0.63)"}]]]]))



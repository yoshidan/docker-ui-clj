(ns docker.ui.css
  (:require [garden.def :refer  [defstylesheet defstyles]]
            [garden.units :refer  [px]]))

;lein-gardenするとdefstylesheeだと何も出力されない
(defstyles screen
  (list 
   [:.table-hover.grid
    [:tbody 
     [:tr 
      [:th {:background-color "rgba(238, 238, 238, 0.63)"}]]]]))



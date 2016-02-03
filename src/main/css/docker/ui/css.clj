(ns docker.ui.css
  (:require [garden.def :refer  [defstylesheet defstyles]]
            [garden.units :refer  [px]]))

;lein-gardenするとdefstylesheeだと何も出力されない
(defstyles screen
  (list 
   [:.test {:font-size (px 500)}] 
   ))



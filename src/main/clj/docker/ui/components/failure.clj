(ns docker.ui.components.failure
  (:require  
   [clojure.algo.monads :refer  (defmonad domonad)]
   [clj-time.core :as ct-core]
   [clj-time.format :as ct-format]
   [clj-time.coerce :as ct-coerce]
   [clojure.string :refer  (blank? trim)])
  (:import  
   [java.nio.charset Charset CharsetEncoder]))

(defrecord Failure [tag])

(defn fail
  ([]
   (fail :default))
  ([tag]
   (Failure. tag))
  ([tag msg]
   (let  [f  (Failure. tag)]
     (assoc f :msg msg))))

(defprotocol ComputationFailed
    (has-failed?  [self]))

(extend-protocol ComputationFailed
  Object
  (has-failed?  [self] false)
  Failure
  (has-failed?  [self] true)
  Exception
  (has-failed?  [self] true)
  nil
  (has-failed?  [self] false))

(defn failed?  [x]
    (has-failed? x))

(defn succeeded?  [x]
    (not  (has-failed? x)))

(defmonad error-m
  "エラーハンドリング追加"
  [m-result identity
   m-bind  (fn  [m f]
             (try
              (if  (has-failed? m)
                m
                (f m))
              (catch Exception e
                e)))])

(defmacro attempt-all
  "失敗可能な処理一覧を実施する"
  ([bindings return] `(domonad error-m ~bindings ~return))
  ([bindings return else]
   `(let [result# (attempt-all ~bindings ~return)]
      (if (has-failed? result#)
        ~else
        result#))))

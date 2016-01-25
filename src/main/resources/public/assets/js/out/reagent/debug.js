// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__9942__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9943__i = 0, G__9943__a = new Array(arguments.length -  0);
while (G__9943__i < G__9943__a.length) {G__9943__a[G__9943__i] = arguments[G__9943__i + 0]; ++G__9943__i;}
  args = new cljs.core.IndexedSeq(G__9943__a,0);
} 
return G__9942__delegate.call(this,args);};
G__9942.cljs$lang$maxFixedArity = 0;
G__9942.cljs$lang$applyTo = (function (arglist__9944){
var args = cljs.core.seq(arglist__9944);
return G__9942__delegate(args);
});
G__9942.cljs$core$IFn$_invoke$arity$variadic = G__9942__delegate;
return G__9942;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9945__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9946__i = 0, G__9946__a = new Array(arguments.length -  0);
while (G__9946__i < G__9946__a.length) {G__9946__a[G__9946__i] = arguments[G__9946__i + 0]; ++G__9946__i;}
  args = new cljs.core.IndexedSeq(G__9946__a,0);
} 
return G__9945__delegate.call(this,args);};
G__9945.cljs$lang$maxFixedArity = 0;
G__9945.cljs$lang$applyTo = (function (arglist__9947){
var args = cljs.core.seq(arglist__9947);
return G__9945__delegate(args);
});
G__9945.cljs$core$IFn$_invoke$arity$variadic = G__9945__delegate;
return G__9945;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

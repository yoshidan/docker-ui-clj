// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__4668__auto__ = (function (){var and__4656__auto__ = typeof ReactDOM !== 'undefined';
if(and__4656__auto__){
return ReactDOM;
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var and__4656__auto__ = typeof require !== 'undefined';
if(and__4656__auto__){
return require("react-dom");
} else {
return and__4656__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_10425 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_10425){
return (function (){
var _STAR_always_update_STAR_10426 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10426;
}});})(_STAR_always_update_STAR_10425))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_10425;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args10427 = [];
var len__5726__auto___10430 = arguments.length;
var i__5727__auto___10431 = (0);
while(true){
if((i__5727__auto___10431 < len__5726__auto___10430)){
args10427.push((arguments[i__5727__auto___10431]));

var G__10432 = (i__5727__auto___10431 + (1));
i__5727__auto___10431 = G__10432;
continue;
} else {
}
break;
}

var G__10429 = args10427.length;
switch (G__10429) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10427.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__10438_10442 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__10439_10443 = null;
var count__10440_10444 = (0);
var i__10441_10445 = (0);
while(true){
if((i__10441_10445 < count__10440_10444)){
var v_10446 = cljs.core._nth.call(null,chunk__10439_10443,i__10441_10445);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_10446);

var G__10447 = seq__10438_10442;
var G__10448 = chunk__10439_10443;
var G__10449 = count__10440_10444;
var G__10450 = (i__10441_10445 + (1));
seq__10438_10442 = G__10447;
chunk__10439_10443 = G__10448;
count__10440_10444 = G__10449;
i__10441_10445 = G__10450;
continue;
} else {
var temp__4425__auto___10451 = cljs.core.seq.call(null,seq__10438_10442);
if(temp__4425__auto___10451){
var seq__10438_10452__$1 = temp__4425__auto___10451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10438_10452__$1)){
var c__5471__auto___10453 = cljs.core.chunk_first.call(null,seq__10438_10452__$1);
var G__10454 = cljs.core.chunk_rest.call(null,seq__10438_10452__$1);
var G__10455 = c__5471__auto___10453;
var G__10456 = cljs.core.count.call(null,c__5471__auto___10453);
var G__10457 = (0);
seq__10438_10442 = G__10454;
chunk__10439_10443 = G__10455;
count__10440_10444 = G__10456;
i__10441_10445 = G__10457;
continue;
} else {
var v_10458 = cljs.core.first.call(null,seq__10438_10452__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_10458);

var G__10459 = cljs.core.next.call(null,seq__10438_10452__$1);
var G__10460 = null;
var G__10461 = (0);
var G__10462 = (0);
seq__10438_10442 = G__10459;
chunk__10439_10443 = G__10460;
count__10440_10444 = G__10461;
i__10441_10445 = G__10462;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

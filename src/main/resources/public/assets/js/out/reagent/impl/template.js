// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
goog.require('clojure.walk');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (){
})

reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reagent.impl.template.NativeWrapper.cljs$lang$type = true;

reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper";

reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"reagent.impl.template/NativeWrapper");
});

reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(){
return (new reagent.impl.template.NativeWrapper());
});

reagent.impl.template.named_QMARK_ = (function reagent$impl$template$named_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return (reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper));
});
reagent.impl.template.prop_name_cache = {"class": "className", "for": "htmlFor", "charset": "charSet"};
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.template.named_QMARK_.call(null,k)){
var temp__4427__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__4427__auto__ == null)){
return (reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__4427__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.js_val_QMARK_ = (function reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
reagent.impl.template.convert_prop_value;
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__10371 = o;
(G__10371[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.convert_prop_value.call(null,v));

return G__10371;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,{},x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__10372__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__10372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10373__i = 0, G__10373__a = new Array(arguments.length -  0);
while (G__10373__i < G__10373__a.length) {G__10373__a[G__10373__i] = arguments[G__10373__i + 0]; ++G__10373__i;}
  args = new cljs.core.IndexedSeq(G__10373__a,0);
} 
return G__10372__delegate.call(this,args);};
G__10372.cljs$lang$maxFixedArity = 0;
G__10372.cljs$lang$applyTo = (function (arglist__10374){
var args = cljs.core.seq(arglist__10374);
return G__10372__delegate(args);
});
G__10372.cljs$core$IFn$_invoke$arity$variadic = G__10372__delegate;
return G__10372;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.oset = (function reagent$impl$template$oset(o,k,v){
var G__10376 = (((o == null))?{}:o);
(G__10376[k] = v);

return G__10376;
});
reagent.impl.template.oget = (function reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = (((cljs.core.some_QMARK_.call(null,id)) && ((reagent.impl.template.oget.call(null,p,"id") == null)))?reagent.impl.template.oset.call(null,p,"id",id):p);
var temp__4427__auto__ = (id_class["className"]);
if((temp__4427__auto__ == null)){
return p__$1;
} else {
var class$ = temp__4427__auto__;
var old = reagent.impl.template.oget.call(null,p__$1,"className");
return reagent.impl.template.oset.call(null,p__$1,"className",(((old == null))?class$:[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('')));
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
return reagent.impl.template.set_id_class.call(null,reagent.impl.template.convert_prop_value.call(null,props),id_class);
});
reagent.impl.template.find_dom_node = null;
reagent.impl.template.input_unmount = (function reagent$impl$template$input_unmount(this$){
return (this$["cljsInputValue"] = null);
});
reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
reagent.impl.template.has_selection_api_QMARK_ = (function reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,reagent.impl.template.these_inputs_have_selection_api,input_type);
});
reagent.impl.template.input_set_value = (function reagent$impl$template$input_set_value(this$){
var temp__4429__auto__ = (this$["cljsInputValue"]);
if((temp__4429__auto__ == null)){
return null;
} else {
var value = temp__4429__auto__;
(this$["cljsInputDirty"] = false);

var node = reagent.impl.template.find_dom_node.call(null,this$);
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,value,node_value)){
if(!(((node === (document["activeElement"]))) && (reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof value === 'string') && (typeof node_value === 'string'))){
return (node["value"] = value);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,value) - existing_offset_from_end);
(node["value"] = value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
} else {
return null;
}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

reagent.impl.batching.do_after_render.call(null,((function (res){
return (function (){
return reagent.impl.template.input_set_value.call(null,this$);
});})(res))
);
}

return res;
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.some_QMARK_.call(null,reagent.impl.template.find_dom_node);
if(and__4656__auto__){
var and__4656__auto____$1 = cljs.core.some_QMARK_.call(null,jsprops);
if(and__4656__auto____$1){
var and__4656__auto____$2 = (jsprops["hasOwnProperty"])("onChange");
if(cljs.core.truth_(and__4656__auto____$2)){
return (jsprops["hasOwnProperty"])("value");
} else {
return and__4656__auto____$2;
}
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())){
var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
(this$["cljsInputValue"] = value);

delete jsprops["value"];

var G__10379 = jsprops;
(G__10379["defaultValue"] = value);

(G__10379["onChange"] = ((function (G__10379,v,value,on_change){
return (function (p1__10377_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__10377_SHARP_);
});})(G__10379,v,value,on_change))
);

return G__10379;
} else {
return (this$["cljsInputValue"] = null);
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var G__10381 = x;
switch (G__10381) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
reagent.impl.template.reagent_input_class = null;
reagent.impl.template.make_element;
reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
reagent.impl.template.reagent_input = (function reagent$impl$template$reagent_input(){
if((reagent.impl.template.reagent_input_class == null)){
reagent.impl.template.reagent_input_class = reagent.impl.component.create_class.call(null,reagent.impl.template.input_spec);
} else {
}

return reagent.impl.template.reagent_input_class;
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__10384 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__10384,(0),null);
var id = cljs.core.nth.call(null,vec__10384,(1),null);
var class$ = cljs.core.nth.call(null,vec__10384,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"tag","tag",350170304,null)))].join('')));
}

return {"name": tag, "id": id, "className": class$__$1};
});
reagent.impl.template.try_get_key = (function reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e10386){var e = e10386;
return null;
}});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
reagent.impl.template.key_from_vec = (function reagent$impl$template$key_from_vec(v){
var temp__4427__auto__ = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__4427__auto__ == null)){
return reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__4427__auto__;
return k;
}
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v){
var c = reagent.impl.component.as_class.call(null,tag);
var jsprops = {"argv": v};
var temp__4429__auto___10387 = reagent.impl.template.key_from_vec.call(null,v);
if((temp__4429__auto___10387 == null)){
} else {
var key_10388 = temp__4429__auto___10387;
(jsprops["key"] = key_10388);
}

return (reagent.impl.util.react["createElement"])(c,jsprops);
});
reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
var G__10390 = (new reagent.impl.template.NativeWrapper());
(G__10390["name"] = c);

(G__10390["id"] = null);

(G__10390["class"] = null);

return G__10390;
});
reagent.impl.template.tag_name_cache = {};
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__4427__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__4427__auto__ == null)){
return (reagent.impl.template.tag_name_cache[x] = reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__4427__auto__;
return s;
}
});
reagent.impl.template.as_element;
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.template.input_component_QMARK_.call(null,comp)){
return reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:reagent.impl.template.oset.call(null,jsprops,"key",key));
return reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
reagent.impl.template.str_coll = (function reagent$impl$template$str_coll(coll){
return [cljs.core.str(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = reagent.impl.util.fun_name.call(null,x);
var G__10392 = n;
switch (G__10392) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll))].join('');

});
reagent.impl.template.hiccup_err = (function reagent$impl$template$hiccup_err(var_args){
var args__5733__auto__ = [];
var len__5726__auto___10396 = arguments.length;
var i__5727__auto___10397 = (0);
while(true){
if((i__5727__auto___10397 < len__5726__auto___10396)){
args__5733__auto__.push((arguments[i__5727__auto___10397]));

var G__10398 = (i__5727__auto___10397 + (1));
i__5727__auto___10397 = G__10398;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,msg)),cljs.core.str(": "),cljs.core.str(reagent.impl.template.str_coll.call(null,v)),cljs.core.str("\n"),cljs.core.str(reagent.impl.component.comp_name.call(null))].join('');
});

reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq10394){
var G__10395 = cljs.core.first.call(null,seq10394);
var seq10394__$1 = cljs.core.next.call(null,seq10394);
return reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(G__10395,seq10394__$1);
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty")),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form")),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),new cljs.core.Symbol(null,"tag","tag",350170304,null))))].join('')));
}

if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__10400 = pos;
switch (G__10400) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag")),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),">",new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

if((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,v,"Expected React component in")),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"comp","comp",-1462482139,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"comp","comp",-1462482139,null)))))].join('')));
}

return reagent.impl.template.native_element.call(null,{"name": comp},v,(2));

break;
default:
var G__10402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__10402;
continue;

}
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
});
reagent.impl.template.expand_seq;
reagent.impl.template.expand_seq_check;
reagent.impl.template.as_element = (function reagent$impl$template$as_element(x){
if(reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x);

} else {
return x;

}
}
}
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__5571__auto___10403 = a.length;
var i_10404 = (0);
while(true){
if((i_10404 < n__5571__auto___10403)){
(a[i_10404] = reagent.impl.template.as_element.call(null,(a[i_10404])));

var G__10405 = (i_10404 + (1));
i_10404 = G__10405;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__5571__auto___10406 = a.length;
var i_10407 = (0);
while(true){
if((i_10407 < n__5571__auto___10406)){
var val_10408 = (a[i_10407]);
if((cljs.core.vector_QMARK_.call(null,val_10408)) && ((reagent.impl.template.key_from_vec.call(null,val_10408) == null))){
(o["no-key"] = true);
} else {
}

(a[i_10407] = reagent.impl.template.as_element.call(null,val_10408));

var G__10409 = (i_10407 + (1));
i_10407 = G__10409;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x){
var ctx = {};
var vec__10411 = reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__10411,(0),null);
var derefed = cljs.core.nth.call(null,vec__10411,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall"))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn([cljs.core.str("Warning: "),cljs.core.str(reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key"))].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__10413 = (cljs.core.count.call(null,argv) - first_child);
switch (G__10413) {
case (0):
return (reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (reagent.impl.util.react["createElement"])(comp,jsprops,reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return (reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__10413){
return (function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__10413))
,[comp,jsprops],argv));

}
});

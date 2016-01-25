// Compiled by ClojureScript 1.7.170 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (chord.format.freeze[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_,obj);
} else {
var m__5324__auto____$1 = (chord.format.freeze["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (chord.format.thaw[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_,s);
} else {
var m__5324__auto____$1 = (chord.format.thaw["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__5581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5585__auto__,method_table__5581__auto__,prefer_table__5582__auto__,method_cache__5583__auto__,cached_hierarchy__5584__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format15698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format15698 = (function (_,meta15699){
this._ = _;
this.meta15699 = meta15699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format15698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15700,meta15699__$1){
var self__ = this;
var _15700__$1 = this;
return (new chord.format.t_chord$format15698(self__._,meta15699__$1));
});

chord.format.t_chord$format15698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15700){
var self__ = this;
var _15700__$1 = this;
return self__.meta15699;
});

chord.format.t_chord$format15698.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format15698.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format15698.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format15698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta15699","meta15699",88005601,null)], null);
});

chord.format.t_chord$format15698.cljs$lang$type = true;

chord.format.t_chord$format15698.cljs$lang$ctorStr = "chord.format/t_chord$format15698";

chord.format.t_chord$format15698.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"chord.format/t_chord$format15698");
});

chord.format.__GT_t_chord$format15698 = (function chord$format$__GT_t_chord$format15698(___$1,meta15699){
return (new chord.format.t_chord$format15698(___$1,meta15699));
});

}

return (new chord.format.t_chord$format15698(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format15701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format15701 = (function (_,meta15702){
this._ = _;
this.meta15702 = meta15702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format15701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15703,meta15702__$1){
var self__ = this;
var _15703__$1 = this;
return (new chord.format.t_chord$format15701(self__._,meta15702__$1));
});

chord.format.t_chord$format15701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15703){
var self__ = this;
var _15703__$1 = this;
return self__.meta15702;
});

chord.format.t_chord$format15701.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format15701.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format15701.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format15701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta15702","meta15702",-1400255085,null)], null);
});

chord.format.t_chord$format15701.cljs$lang$type = true;

chord.format.t_chord$format15701.cljs$lang$ctorStr = "chord.format/t_chord$format15701";

chord.format.t_chord$format15701.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"chord.format/t_chord$format15701");
});

chord.format.__GT_t_chord$format15701 = (function chord$format$__GT_t_chord$format15701(___$1,meta15702){
return (new chord.format.t_chord$format15701(___$1,meta15702));
});

}

return (new chord.format.t_chord$format15701(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format15704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format15704 = (function (opts,json_formatter,meta15705){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new chord.format.t_chord$format15704(self__.opts,self__.json_formatter,meta15705__$1));
});})(json_formatter))
;

chord.format.t_chord$format15704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
});})(json_formatter))
;

chord.format.t_chord$format15704.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format15704.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format15704.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format15704.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta15705","meta15705",1640426721,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format15704.cljs$lang$type = true;

chord.format.t_chord$format15704.cljs$lang$ctorStr = "chord.format/t_chord$format15704";

chord.format.t_chord$format15704.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"chord.format/t_chord$format15704");
});})(json_formatter))
;

chord.format.__GT_t_chord$format15704 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format15704(opts__$1,json_formatter__$1,meta15705){
return (new chord.format.t_chord$format15704(opts__$1,json_formatter__$1,meta15705));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format15704(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format15707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format15707 = (function (_,meta15708){
this._ = _;
this.meta15708 = meta15708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format15707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15709,meta15708__$1){
var self__ = this;
var _15709__$1 = this;
return (new chord.format.t_chord$format15707(self__._,meta15708__$1));
});

chord.format.t_chord$format15707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15709){
var self__ = this;
var _15709__$1 = this;
return self__.meta15708;
});

chord.format.t_chord$format15707.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format15707.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format15707.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format15707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta15708","meta15708",324216887,null)], null);
});

chord.format.t_chord$format15707.cljs$lang$type = true;

chord.format.t_chord$format15707.cljs$lang$ctorStr = "chord.format/t_chord$format15707";

chord.format.t_chord$format15707.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"chord.format/t_chord$format15707");
});

chord.format.__GT_t_chord$format15707 = (function chord$format$__GT_t_chord$format15707(___$1,meta15708){
return (new chord.format.t_chord$format15707(___$1,meta15708));
});

}

return (new chord.format.t_chord$format15707(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format15710 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format15710 = (function (_,meta15711){
this._ = _;
this.meta15711 = meta15711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format15710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15712,meta15711__$1){
var self__ = this;
var _15712__$1 = this;
return (new chord.format.t_chord$format15710(self__._,meta15711__$1));
});

chord.format.t_chord$format15710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15712){
var self__ = this;
var _15712__$1 = this;
return self__.meta15711;
});

chord.format.t_chord$format15710.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format15710.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format15710.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format15710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta15711","meta15711",-587690966,null)], null);
});

chord.format.t_chord$format15710.cljs$lang$type = true;

chord.format.t_chord$format15710.cljs$lang$ctorStr = "chord.format/t_chord$format15710";

chord.format.t_chord$format15710.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"chord.format/t_chord$format15710");
});

chord.format.__GT_t_chord$format15710 = (function chord$format$__GT_t_chord$format15710(___$1,meta15711){
return (new chord.format.t_chord$format15710(___$1,meta15711));
});

}

return (new chord.format.t_chord$format15710(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__15714,p__15715){
var map__15724 = p__15714;
var map__15724__$1 = ((((!((map__15724 == null)))?((((map__15724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15724):map__15724);
var read_ch = cljs.core.get.call(null,map__15724__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__15724__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__15725 = p__15715;
var map__15725__$1 = ((((!((map__15725 == null)))?((((map__15725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15725):map__15725);
var opts = map__15725__$1;
var format = cljs.core.get.call(null,map__15725__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__15724,map__15724__$1,read_ch,write_ch,map__15725,map__15725__$1,opts,format){
return (function (p__15728){
var map__15729 = p__15728;
var map__15729__$1 = ((((!((map__15729 == null)))?((((map__15729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15729):map__15729);
var message = cljs.core.get.call(null,map__15729__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
} else {
return null;
}
}catch (e15731){if((e15731 instanceof Error)){
var e = e15731;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e15731;

}
}});})(fmtr,map__15724,map__15724__$1,read_ch,write_ch,map__15725,map__15725__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__15724,map__15724__$1,read_ch,write_ch,map__15725,map__15725__$1,opts,format){
return (function (p1__15713_SHARP_){
if(cljs.core.truth_(p1__15713_SHARP_)){
return chord.format.freeze.call(null,fmtr,p1__15713_SHARP_);
} else {
return null;
}
});})(fmtr,map__15724,map__15724__$1,read_ch,write_ch,map__15725,map__15725__$1,opts,format))
,write_ch)], null);
});

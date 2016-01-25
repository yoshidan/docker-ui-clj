// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11293_11307 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11294_11308 = null;
var count__11295_11309 = (0);
var i__11296_11310 = (0);
while(true){
if((i__11296_11310 < count__11295_11309)){
var f_11311 = cljs.core._nth.call(null,chunk__11294_11308,i__11296_11310);
cljs.core.println.call(null,"  ",f_11311);

var G__11312 = seq__11293_11307;
var G__11313 = chunk__11294_11308;
var G__11314 = count__11295_11309;
var G__11315 = (i__11296_11310 + (1));
seq__11293_11307 = G__11312;
chunk__11294_11308 = G__11313;
count__11295_11309 = G__11314;
i__11296_11310 = G__11315;
continue;
} else {
var temp__4425__auto___11316 = cljs.core.seq.call(null,seq__11293_11307);
if(temp__4425__auto___11316){
var seq__11293_11317__$1 = temp__4425__auto___11316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11293_11317__$1)){
var c__5471__auto___11318 = cljs.core.chunk_first.call(null,seq__11293_11317__$1);
var G__11319 = cljs.core.chunk_rest.call(null,seq__11293_11317__$1);
var G__11320 = c__5471__auto___11318;
var G__11321 = cljs.core.count.call(null,c__5471__auto___11318);
var G__11322 = (0);
seq__11293_11307 = G__11319;
chunk__11294_11308 = G__11320;
count__11295_11309 = G__11321;
i__11296_11310 = G__11322;
continue;
} else {
var f_11323 = cljs.core.first.call(null,seq__11293_11317__$1);
cljs.core.println.call(null,"  ",f_11323);

var G__11324 = cljs.core.next.call(null,seq__11293_11317__$1);
var G__11325 = null;
var G__11326 = (0);
var G__11327 = (0);
seq__11293_11307 = G__11324;
chunk__11294_11308 = G__11325;
count__11295_11309 = G__11326;
i__11296_11310 = G__11327;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11328 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4668__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11328);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11328)))?cljs.core.second.call(null,arglists_11328):arglists_11328));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11297 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11298 = null;
var count__11299 = (0);
var i__11300 = (0);
while(true){
if((i__11300 < count__11299)){
var vec__11301 = cljs.core._nth.call(null,chunk__11298,i__11300);
var name = cljs.core.nth.call(null,vec__11301,(0),null);
var map__11302 = cljs.core.nth.call(null,vec__11301,(1),null);
var map__11302__$1 = ((((!((map__11302 == null)))?((((map__11302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11302):map__11302);
var doc = cljs.core.get.call(null,map__11302__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11302__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11329 = seq__11297;
var G__11330 = chunk__11298;
var G__11331 = count__11299;
var G__11332 = (i__11300 + (1));
seq__11297 = G__11329;
chunk__11298 = G__11330;
count__11299 = G__11331;
i__11300 = G__11332;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11297);
if(temp__4425__auto__){
var seq__11297__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11297__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__11297__$1);
var G__11333 = cljs.core.chunk_rest.call(null,seq__11297__$1);
var G__11334 = c__5471__auto__;
var G__11335 = cljs.core.count.call(null,c__5471__auto__);
var G__11336 = (0);
seq__11297 = G__11333;
chunk__11298 = G__11334;
count__11299 = G__11335;
i__11300 = G__11336;
continue;
} else {
var vec__11304 = cljs.core.first.call(null,seq__11297__$1);
var name = cljs.core.nth.call(null,vec__11304,(0),null);
var map__11305 = cljs.core.nth.call(null,vec__11304,(1),null);
var map__11305__$1 = ((((!((map__11305 == null)))?((((map__11305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11305):map__11305);
var doc = cljs.core.get.call(null,map__11305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11337 = cljs.core.next.call(null,seq__11297__$1);
var G__11338 = null;
var G__11339 = (0);
var G__11340 = (0);
seq__11297 = G__11337;
chunk__11298 = G__11338;
count__11299 = G__11339;
i__11300 = G__11340;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

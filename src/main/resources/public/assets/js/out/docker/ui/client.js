// Compiled by ClojureScript 1.7.170 {}
goog.provide('docker.ui.client');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.data');
goog.require('clojure.browser.repl');
goog.require('chord.client');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
docker.ui.client.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",-1736937707),cljs.core.PersistentVector.EMPTY], null));
docker.ui.client.container_list = (function docker$ui$client$container_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"CONTAINER"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"CPU"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"MEM USAGE / LIMIT"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"NET I/O"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"BLOCK I/O"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5440__auto__ = (function docker$ui$client$container_list_$_iter__15894(s__15895){
return (new cljs.core.LazySeq(null,(function (){
var s__15895__$1 = s__15895;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15895__$1);
if(temp__4425__auto__){
var s__15895__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15895__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__15895__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__15897 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__15896 = (0);
while(true){
if((i__15896 < size__5439__auto__)){
var container = cljs.core._nth.call(null,c__5438__auto__,i__15896);
cljs.core.chunk_append.call(null,b__15897,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"cpu","cpu",106162238).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mem-usage","mem-usage",-1235418928).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"net-io","net-io",-2129879852).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"block-io","block-io",644256381).cljs$core$IFn$_invoke$arity$1(container)], null)], null));

var G__15898 = (i__15896 + (1));
i__15896 = G__15898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15897),docker$ui$client$container_list_$_iter__15894.call(null,cljs.core.chunk_rest.call(null,s__15895__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15897),null);
}
} else {
var container = cljs.core.first.call(null,s__15895__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"cpu","cpu",106162238).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"mem-usage","mem-usage",-1235418928).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"net-io","net-io",-2129879852).cljs$core$IFn$_invoke$arity$1(container)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"block-io","block-io",644256381).cljs$core$IFn$_invoke$arity$1(container)], null)], null),docker$ui$client$container_list_$_iter__15894.call(null,cljs.core.rest.call(null,s__15895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,docker.ui.client.app_state)));
})()], null)], null)], null);
});
/**
 * ルート
 */
docker.ui.client.main_app = (function docker$ui$client$main_app(){
return docker.ui.client.container_list.call(null);
});
docker.ui.client.run = (function docker$ui$client$run(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [docker.ui.client.main_app], null),document.getElementById("app"));
});
goog.exportSymbol('docker.ui.client.run', docker.ui.client.run);

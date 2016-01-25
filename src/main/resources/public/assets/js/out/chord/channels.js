// Compiled by ClojureScript 1.7.170 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__12727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto__){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto__){
return (function (state_15543){
var state_val_15544 = (state_15543[(1)]);
if((state_val_15544 === (1))){
var state_15543__$1 = state_15543;
var statearr_15545_15560 = state_15543__$1;
(statearr_15545_15560[(2)] = null);

(statearr_15545_15560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (2))){
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15543__$1,(4),ch);
} else {
if((state_val_15544 === (3))){
var inst_15541 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15543__$1,inst_15541);
} else {
if((state_val_15544 === (4))){
var inst_15533 = (state_15543[(7)]);
var inst_15533__$1 = (state_15543[(2)]);
var state_15543__$1 = (function (){var statearr_15546 = state_15543;
(statearr_15546[(7)] = inst_15533__$1);

return statearr_15546;
})();
if(cljs.core.truth_(inst_15533__$1)){
var statearr_15547_15561 = state_15543__$1;
(statearr_15547_15561[(1)] = (5));

} else {
var statearr_15548_15562 = state_15543__$1;
(statearr_15548_15562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (5))){
var inst_15533 = (state_15543[(7)]);
var inst_15535 = ws.send(inst_15533);
var state_15543__$1 = (function (){var statearr_15549 = state_15543;
(statearr_15549[(8)] = inst_15535);

return statearr_15549;
})();
var statearr_15550_15563 = state_15543__$1;
(statearr_15550_15563[(2)] = null);

(statearr_15550_15563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (6))){
var state_15543__$1 = state_15543;
var statearr_15551_15564 = state_15543__$1;
(statearr_15551_15564[(2)] = null);

(statearr_15551_15564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15544 === (7))){
var inst_15539 = (state_15543[(2)]);
var state_15543__$1 = state_15543;
var statearr_15552_15565 = state_15543__$1;
(statearr_15552_15565[(2)] = inst_15539);

(statearr_15552_15565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12727__auto__))
;
return ((function (switch__12615__auto__,c__12727__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__12616__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__12616__auto____0 = (function (){
var statearr_15556 = [null,null,null,null,null,null,null,null,null];
(statearr_15556[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__12616__auto__);

(statearr_15556[(1)] = (1));

return statearr_15556;
});
var chord$channels$write_to_ws_BANG__$_state_machine__12616__auto____1 = (function (state_15543){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_15543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e15557){if((e15557 instanceof Object)){
var ex__12619__auto__ = e15557;
var statearr_15558_15566 = state_15543;
(statearr_15558_15566[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15567 = state_15543;
state_15543 = G__15567;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__12616__auto__ = function(state_15543){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__12616__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__12616__auto____1.call(this,state_15543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__12616__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__12616__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto__))
})();
var state__12729__auto__ = (function (){var statearr_15559 = f__12728__auto__.call(null);
(statearr_15559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto__);

return statearr_15559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto__))
);

return c__12727__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15578 = arguments.length;
var i__5727__auto___15579 = (0);
while(true){
if((i__5727__auto___15579 < len__5726__auto___15578)){
args__5733__auto__.push((arguments[i__5727__auto___15579]));

var G__15580 = (i__5727__auto___15579 + (1));
i__5727__auto___15579 = G__15580;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__15571){
var vec__15572 = p__15571;
var map__15573 = cljs.core.nth.call(null,vec__15572,(0),null);
var map__15573__$1 = ((((!((map__15573 == null)))?((((map__15573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15573):map__15573);
var on_close = cljs.core.get.call(null,map__15573__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels15575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels15575 = (function (read_ch,write_ch,p__15571,vec__15572,map__15573,on_close,meta15576){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__15571 = p__15571;
this.vec__15572 = vec__15572;
this.map__15573 = map__15573;
this.on_close = on_close;
this.meta15576 = meta15576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels15575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (_15577,meta15576__$1){
var self__ = this;
var _15577__$1 = this;
return (new chord.channels.t_chord$channels15575(self__.read_ch,self__.write_ch,self__.p__15571,self__.vec__15572,self__.map__15573,self__.on_close,meta15576__$1));
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.t_chord$channels15575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (_15577){
var self__ = this;
var _15577__$1 = this;
return self__.meta15576;
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.t_chord$channels15575.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels15575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.t_chord$channels15575.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels15575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.t_chord$channels15575.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels15575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.t_chord$channels15575.getBasis = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__15571","p__15571",1233526549,null),new cljs.core.Symbol(null,"vec__15572","vec__15572",-1087448165,null),new cljs.core.Symbol(null,"map__15573","map__15573",1522392400,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta15576","meta15576",930516007,null)], null);
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.t_chord$channels15575.cljs$lang$type = true;

chord.channels.t_chord$channels15575.cljs$lang$ctorStr = "chord.channels/t_chord$channels15575";

chord.channels.t_chord$channels15575.cljs$lang$ctorPrWriter = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"chord.channels/t_chord$channels15575");
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

chord.channels.__GT_t_chord$channels15575 = ((function (vec__15572,map__15573,map__15573__$1,on_close){
return (function chord$channels$__GT_t_chord$channels15575(read_ch__$1,write_ch__$1,p__15571__$1,vec__15572__$1,map__15573__$2,on_close__$1,meta15576){
return (new chord.channels.t_chord$channels15575(read_ch__$1,write_ch__$1,p__15571__$1,vec__15572__$1,map__15573__$2,on_close__$1,meta15576));
});})(vec__15572,map__15573,map__15573__$1,on_close))
;

}

return (new chord.channels.t_chord$channels15575(read_ch,write_ch,p__15571,vec__15572,map__15573__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq15568){
var G__15569 = cljs.core.first.call(null,seq15568);
var seq15568__$1 = cljs.core.next.call(null,seq15568);
var G__15570 = cljs.core.first.call(null,seq15568__$1);
var seq15568__$2 = cljs.core.next.call(null,seq15568__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__15569,G__15570,seq15568__$2);
});

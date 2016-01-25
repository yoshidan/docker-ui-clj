// Compiled by ClojureScript 1.7.170 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__5733__auto__ = [];
var len__5726__auto___15840 = arguments.length;
var i__5727__auto___15841 = (0);
while(true){
if((i__5727__auto___15841 < len__5726__auto___15840)){
args__5733__auto__.push((arguments[i__5727__auto___15841]));

var G__15842 = (i__5727__auto___15841 + (1));
i__5727__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__15738){
var vec__15739 = p__15738;
var map__15740 = cljs.core.nth.call(null,vec__15739,(0),null);
var map__15740__$1 = ((((!((map__15740 == null)))?((((map__15740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15740):map__15740);
var opts = map__15740__$1;
var read_ch = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__15740__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__15742 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4668__auto__ = read_ch;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4668__auto__ = write_ch;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__15742__$1 = ((((!((map__15742 == null)))?((((map__15742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15742):map__15742);
var read_ch__$1 = cljs.core.get.call(null,map__15742__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__15742__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format){
return (function (p1__15734_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__15734_SHARP_);
});})(web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format){
return (function (p1__15735_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__15735_SHARP_);
});})(web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__12727__auto___15843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___15843,ws_chan,initial_ch,web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___15843,ws_chan,initial_ch,web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format){
return (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (7))){
var inst_15799 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15805_15844 = state_15803__$1;
(statearr_15805_15844[(2)] = inst_15799);

(statearr_15805_15844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (20))){
var state_15803__$1 = state_15803;
var statearr_15806_15845 = state_15803__$1;
(statearr_15806_15845[(2)] = null);

(statearr_15806_15845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (1))){
var inst_15744 = false;
var state_15803__$1 = (function (){var statearr_15807 = state_15803;
(statearr_15807[(7)] = inst_15744);

return statearr_15807;
})();
var statearr_15808_15846 = state_15803__$1;
(statearr_15808_15846[(2)] = null);

(statearr_15808_15846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (4))){
var inst_15757 = (state_15803[(8)]);
var inst_15755 = (state_15803[(9)]);
var inst_15755__$1 = (state_15803[(2)]);
var inst_15756 = cljs.core.nth.call(null,inst_15755__$1,(0),null);
var inst_15757__$1 = cljs.core.nth.call(null,inst_15755__$1,(1),null);
var inst_15758 = cljs.core._EQ_.call(null,inst_15757__$1,open_ch);
var state_15803__$1 = (function (){var statearr_15809 = state_15803;
(statearr_15809[(10)] = inst_15756);

(statearr_15809[(8)] = inst_15757__$1);

(statearr_15809[(9)] = inst_15755__$1);

return statearr_15809;
})();
if(inst_15758){
var statearr_15810_15847 = state_15803__$1;
(statearr_15810_15847[(1)] = (5));

} else {
var statearr_15811_15848 = state_15803__$1;
(statearr_15811_15848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (15))){
var inst_15784 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15812_15849 = state_15803__$1;
(statearr_15812_15849[(2)] = inst_15784);

(statearr_15812_15849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (21))){
var inst_15795 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15813_15850 = state_15803__$1;
(statearr_15813_15850[(2)] = inst_15795);

(statearr_15813_15850[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (13))){
var state_15803__$1 = state_15803;
var statearr_15814_15851 = state_15803__$1;
(statearr_15814_15851[(2)] = null);

(statearr_15814_15851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (6))){
var inst_15757 = (state_15803[(8)]);
var inst_15770 = cljs.core._EQ_.call(null,inst_15757,close_ch);
var state_15803__$1 = state_15803;
if(inst_15770){
var statearr_15815_15852 = state_15803__$1;
(statearr_15815_15852[(1)] = (9));

} else {
var statearr_15816_15853 = state_15803__$1;
(statearr_15816_15853[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (17))){
var state_15803__$1 = state_15803;
var statearr_15817_15854 = state_15803__$1;
(statearr_15817_15854[(2)] = initial_ch);

(statearr_15817_15854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (3))){
var inst_15801 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15803__$1,inst_15801);
} else {
if((state_val_15804 === (12))){
var inst_15744 = (state_15803[(7)]);
var state_15803__$1 = state_15803;
if(cljs.core.truth_(inst_15744)){
var statearr_15818_15855 = state_15803__$1;
(statearr_15818_15855[(1)] = (16));

} else {
var statearr_15819_15856 = state_15803__$1;
(statearr_15819_15856[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (2))){
var inst_15751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15752 = [open_ch,close_ch];
var inst_15753 = (new cljs.core.PersistentVector(null,2,(5),inst_15751,inst_15752,null));
var state_15803__$1 = state_15803;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15803__$1,(4),inst_15753);
} else {
if((state_val_15804 === (19))){
var inst_15756 = (state_15803[(10)]);
var state_15803__$1 = state_15803;
var statearr_15820_15857 = state_15803__$1;
(statearr_15820_15857[(2)] = inst_15756);

(statearr_15820_15857[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (11))){
var inst_15797 = (state_15803[(2)]);
var state_15803__$1 = state_15803;
var statearr_15821_15858 = state_15803__$1;
(statearr_15821_15858[(2)] = inst_15797);

(statearr_15821_15858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (9))){
var inst_15774 = (state_15803[(11)]);
var inst_15755 = (state_15803[(9)]);
var inst_15773 = cljs.core.nth.call(null,inst_15755,(0),null);
var inst_15774__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_15773);
var state_15803__$1 = (function (){var statearr_15822 = state_15803;
(statearr_15822[(11)] = inst_15774__$1);

return statearr_15822;
})();
if(cljs.core.truth_(inst_15774__$1)){
var statearr_15823_15859 = state_15803__$1;
(statearr_15823_15859[(1)] = (12));

} else {
var statearr_15824_15860 = state_15803__$1;
(statearr_15824_15860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (5))){
var inst_15755 = (state_15803[(9)]);
var inst_15761 = cljs.core.nth.call(null,inst_15755,(0),null);
var inst_15762 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_15763 = [ws_chan];
var inst_15764 = cljs.core.PersistentHashMap.fromArrays(inst_15762,inst_15763);
var state_15803__$1 = (function (){var statearr_15825 = state_15803;
(statearr_15825[(12)] = inst_15761);

return statearr_15825;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15803__$1,(8),initial_ch,inst_15764);
} else {
if((state_val_15804 === (14))){
var inst_15787 = (state_15803[(2)]);
var inst_15788 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_15789 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_15803__$1 = (function (){var statearr_15826 = state_15803;
(statearr_15826[(13)] = inst_15787);

(statearr_15826[(14)] = inst_15788);

return statearr_15826;
})();
var statearr_15827_15861 = state_15803__$1;
(statearr_15827_15861[(2)] = inst_15789);

(statearr_15827_15861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (16))){
var state_15803__$1 = state_15803;
var statearr_15828_15862 = state_15803__$1;
(statearr_15828_15862[(2)] = read_ch__$1);

(statearr_15828_15862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (10))){
var inst_15757 = (state_15803[(8)]);
var inst_15791 = cljs.core._EQ_.call(null,inst_15757,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_15803__$1 = state_15803;
if(inst_15791){
var statearr_15829_15863 = state_15803__$1;
(statearr_15829_15863[(1)] = (19));

} else {
var statearr_15830_15864 = state_15803__$1;
(statearr_15830_15864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15804 === (18))){
var inst_15774 = (state_15803[(11)]);
var inst_15779 = (state_15803[(2)]);
var inst_15780 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_15781 = [inst_15774];
var inst_15782 = cljs.core.PersistentHashMap.fromArrays(inst_15780,inst_15781);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15803__$1,(15),inst_15779,inst_15782);
} else {
if((state_val_15804 === (8))){
var inst_15766 = (state_15803[(2)]);
var inst_15767 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_15744 = true;
var state_15803__$1 = (function (){var statearr_15831 = state_15803;
(statearr_15831[(15)] = inst_15766);

(statearr_15831[(7)] = inst_15744);

(statearr_15831[(16)] = inst_15767);

return statearr_15831;
})();
var statearr_15832_15865 = state_15803__$1;
(statearr_15832_15865[(2)] = null);

(statearr_15832_15865[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12727__auto___15843,ws_chan,initial_ch,web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__12615__auto__,c__12727__auto___15843,ws_chan,initial_ch,web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__12616__auto__ = null;
var chord$client$state_machine__12616__auto____0 = (function (){
var statearr_15836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15836[(0)] = chord$client$state_machine__12616__auto__);

(statearr_15836[(1)] = (1));

return statearr_15836;
});
var chord$client$state_machine__12616__auto____1 = (function (state_15803){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_15803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e15837){if((e15837 instanceof Object)){
var ex__12619__auto__ = e15837;
var statearr_15838_15866 = state_15803;
(statearr_15838_15866[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15867 = state_15803;
state_15803 = G__15867;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
chord$client$state_machine__12616__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return chord$client$state_machine__12616__auto____0.call(this);
case 1:
return chord$client$state_machine__12616__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__12616__auto____0;
chord$client$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__12616__auto____1;
return chord$client$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___15843,ws_chan,initial_ch,web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format))
})();
var state__12729__auto__ = (function (){var statearr_15839 = f__12728__auto__.call(null);
(statearr_15839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___15843);

return statearr_15839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___15843,ws_chan,initial_ch,web_socket,map__15742,map__15742__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__15739,map__15740,map__15740__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq15736){
var G__15737 = cljs.core.first.call(null,seq15736);
var seq15736__$1 = cljs.core.next.call(null,seq15736);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__15737,seq15736__$1);
});

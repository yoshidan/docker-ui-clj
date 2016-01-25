// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12772 = [];
var len__5726__auto___12778 = arguments.length;
var i__5727__auto___12779 = (0);
while(true){
if((i__5727__auto___12779 < len__5726__auto___12778)){
args12772.push((arguments[i__5727__auto___12779]));

var G__12780 = (i__5727__auto___12779 + (1));
i__5727__auto___12779 = G__12780;
continue;
} else {
}
break;
}

var G__12774 = args12772.length;
switch (G__12774) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12772.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12775 = (function (f,blockable,meta12776){
this.f = f;
this.blockable = blockable;
this.meta12776 = meta12776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12777,meta12776__$1){
var self__ = this;
var _12777__$1 = this;
return (new cljs.core.async.t_cljs$core$async12775(self__.f,self__.blockable,meta12776__$1));
});

cljs.core.async.t_cljs$core$async12775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12777){
var self__ = this;
var _12777__$1 = this;
return self__.meta12776;
});

cljs.core.async.t_cljs$core$async12775.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12776","meta12776",741880557,null)], null);
});

cljs.core.async.t_cljs$core$async12775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12775";

cljs.core.async.t_cljs$core$async12775.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12775");
});

cljs.core.async.__GT_t_cljs$core$async12775 = (function cljs$core$async$__GT_t_cljs$core$async12775(f__$1,blockable__$1,meta12776){
return (new cljs.core.async.t_cljs$core$async12775(f__$1,blockable__$1,meta12776));
});

}

return (new cljs.core.async.t_cljs$core$async12775(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12784 = [];
var len__5726__auto___12787 = arguments.length;
var i__5727__auto___12788 = (0);
while(true){
if((i__5727__auto___12788 < len__5726__auto___12787)){
args12784.push((arguments[i__5727__auto___12788]));

var G__12789 = (i__5727__auto___12788 + (1));
i__5727__auto___12788 = G__12789;
continue;
} else {
}
break;
}

var G__12786 = args12784.length;
switch (G__12786) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12784.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12791 = [];
var len__5726__auto___12794 = arguments.length;
var i__5727__auto___12795 = (0);
while(true){
if((i__5727__auto___12795 < len__5726__auto___12794)){
args12791.push((arguments[i__5727__auto___12795]));

var G__12796 = (i__5727__auto___12795 + (1));
i__5727__auto___12795 = G__12796;
continue;
} else {
}
break;
}

var G__12793 = args12791.length;
switch (G__12793) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12791.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12798 = [];
var len__5726__auto___12801 = arguments.length;
var i__5727__auto___12802 = (0);
while(true){
if((i__5727__auto___12802 < len__5726__auto___12801)){
args12798.push((arguments[i__5727__auto___12802]));

var G__12803 = (i__5727__auto___12802 + (1));
i__5727__auto___12802 = G__12803;
continue;
} else {
}
break;
}

var G__12800 = args12798.length;
switch (G__12800) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12798.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12805 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12805);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12805,ret){
return (function (){
return fn1.call(null,val_12805);
});})(val_12805,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12806 = [];
var len__5726__auto___12809 = arguments.length;
var i__5727__auto___12810 = (0);
while(true){
if((i__5727__auto___12810 < len__5726__auto___12809)){
args12806.push((arguments[i__5727__auto___12810]));

var G__12811 = (i__5727__auto___12810 + (1));
i__5727__auto___12810 = G__12811;
continue;
} else {
}
break;
}

var G__12808 = args12806.length;
switch (G__12808) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12806.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___12813 = n;
var x_12814 = (0);
while(true){
if((x_12814 < n__5571__auto___12813)){
(a[x_12814] = (0));

var G__12815 = (x_12814 + (1));
x_12814 = G__12815;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12816 = (i + (1));
i = G__12816;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12820 = (function (alt_flag,flag,meta12821){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12821 = meta12821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12822,meta12821__$1){
var self__ = this;
var _12822__$1 = this;
return (new cljs.core.async.t_cljs$core$async12820(self__.alt_flag,self__.flag,meta12821__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12822){
var self__ = this;
var _12822__$1 = this;
return self__.meta12821;
});})(flag))
;

cljs.core.async.t_cljs$core$async12820.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12820.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12821","meta12821",-455190652,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12820";

cljs.core.async.t_cljs$core$async12820.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12820");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12820 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12820(alt_flag__$1,flag__$1,meta12821){
return (new cljs.core.async.t_cljs$core$async12820(alt_flag__$1,flag__$1,meta12821));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12820(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12826 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12826 = (function (alt_handler,flag,cb,meta12827){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12827 = meta12827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12828,meta12827__$1){
var self__ = this;
var _12828__$1 = this;
return (new cljs.core.async.t_cljs$core$async12826(self__.alt_handler,self__.flag,self__.cb,meta12827__$1));
});

cljs.core.async.t_cljs$core$async12826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12828){
var self__ = this;
var _12828__$1 = this;
return self__.meta12827;
});

cljs.core.async.t_cljs$core$async12826.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12826.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12827","meta12827",-1997467905,null)], null);
});

cljs.core.async.t_cljs$core$async12826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12826";

cljs.core.async.t_cljs$core$async12826.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async12826");
});

cljs.core.async.__GT_t_cljs$core$async12826 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12826(alt_handler__$1,flag__$1,cb__$1,meta12827){
return (new cljs.core.async.t_cljs$core$async12826(alt_handler__$1,flag__$1,cb__$1,meta12827));
});

}

return (new cljs.core.async.t_cljs$core$async12826(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12829_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12829_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12830_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12830_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12831 = (i + (1));
i = G__12831;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___12837 = arguments.length;
var i__5727__auto___12838 = (0);
while(true){
if((i__5727__auto___12838 < len__5726__auto___12837)){
args__5733__auto__.push((arguments[i__5727__auto___12838]));

var G__12839 = (i__5727__auto___12838 + (1));
i__5727__auto___12838 = G__12839;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12834){
var map__12835 = p__12834;
var map__12835__$1 = ((((!((map__12835 == null)))?((((map__12835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12835):map__12835);
var opts = map__12835__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12832){
var G__12833 = cljs.core.first.call(null,seq12832);
var seq12832__$1 = cljs.core.next.call(null,seq12832);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12833,seq12832__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12840 = [];
var len__5726__auto___12890 = arguments.length;
var i__5727__auto___12891 = (0);
while(true){
if((i__5727__auto___12891 < len__5726__auto___12890)){
args12840.push((arguments[i__5727__auto___12891]));

var G__12892 = (i__5727__auto___12891 + (1));
i__5727__auto___12891 = G__12892;
continue;
} else {
}
break;
}

var G__12842 = args12840.length;
switch (G__12842) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12840.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12727__auto___12894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___12894){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___12894){
return (function (state_12866){
var state_val_12867 = (state_12866[(1)]);
if((state_val_12867 === (7))){
var inst_12862 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12868_12895 = state_12866__$1;
(statearr_12868_12895[(2)] = inst_12862);

(statearr_12868_12895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (1))){
var state_12866__$1 = state_12866;
var statearr_12869_12896 = state_12866__$1;
(statearr_12869_12896[(2)] = null);

(statearr_12869_12896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (4))){
var inst_12845 = (state_12866[(7)]);
var inst_12845__$1 = (state_12866[(2)]);
var inst_12846 = (inst_12845__$1 == null);
var state_12866__$1 = (function (){var statearr_12870 = state_12866;
(statearr_12870[(7)] = inst_12845__$1);

return statearr_12870;
})();
if(cljs.core.truth_(inst_12846)){
var statearr_12871_12897 = state_12866__$1;
(statearr_12871_12897[(1)] = (5));

} else {
var statearr_12872_12898 = state_12866__$1;
(statearr_12872_12898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (13))){
var state_12866__$1 = state_12866;
var statearr_12873_12899 = state_12866__$1;
(statearr_12873_12899[(2)] = null);

(statearr_12873_12899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (6))){
var inst_12845 = (state_12866[(7)]);
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12866__$1,(11),to,inst_12845);
} else {
if((state_val_12867 === (3))){
var inst_12864 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12866__$1,inst_12864);
} else {
if((state_val_12867 === (12))){
var state_12866__$1 = state_12866;
var statearr_12874_12900 = state_12866__$1;
(statearr_12874_12900[(2)] = null);

(statearr_12874_12900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (2))){
var state_12866__$1 = state_12866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12866__$1,(4),from);
} else {
if((state_val_12867 === (11))){
var inst_12855 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
if(cljs.core.truth_(inst_12855)){
var statearr_12875_12901 = state_12866__$1;
(statearr_12875_12901[(1)] = (12));

} else {
var statearr_12876_12902 = state_12866__$1;
(statearr_12876_12902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (9))){
var state_12866__$1 = state_12866;
var statearr_12877_12903 = state_12866__$1;
(statearr_12877_12903[(2)] = null);

(statearr_12877_12903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (5))){
var state_12866__$1 = state_12866;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12878_12904 = state_12866__$1;
(statearr_12878_12904[(1)] = (8));

} else {
var statearr_12879_12905 = state_12866__$1;
(statearr_12879_12905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (14))){
var inst_12860 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12880_12906 = state_12866__$1;
(statearr_12880_12906[(2)] = inst_12860);

(statearr_12880_12906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (10))){
var inst_12852 = (state_12866[(2)]);
var state_12866__$1 = state_12866;
var statearr_12881_12907 = state_12866__$1;
(statearr_12881_12907[(2)] = inst_12852);

(statearr_12881_12907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12867 === (8))){
var inst_12849 = cljs.core.async.close_BANG_.call(null,to);
var state_12866__$1 = state_12866;
var statearr_12882_12908 = state_12866__$1;
(statearr_12882_12908[(2)] = inst_12849);

(statearr_12882_12908[(1)] = (10));


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
});})(c__12727__auto___12894))
;
return ((function (switch__12615__auto__,c__12727__auto___12894){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_12886 = [null,null,null,null,null,null,null,null];
(statearr_12886[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_12886[(1)] = (1));

return statearr_12886;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_12866){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_12866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e12887){if((e12887 instanceof Object)){
var ex__12619__auto__ = e12887;
var statearr_12888_12909 = state_12866;
(statearr_12888_12909[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12910 = state_12866;
state_12866 = G__12910;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_12866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_12866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___12894))
})();
var state__12729__auto__ = (function (){var statearr_12889 = f__12728__auto__.call(null);
(statearr_12889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___12894);

return statearr_12889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___12894))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13094){
var vec__13095 = p__13094;
var v = cljs.core.nth.call(null,vec__13095,(0),null);
var p = cljs.core.nth.call(null,vec__13095,(1),null);
var job = vec__13095;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12727__auto___13277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___13277,res,vec__13095,v,p,job,jobs,results){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___13277,res,vec__13095,v,p,job,jobs,results){
return (function (state_13100){
var state_val_13101 = (state_13100[(1)]);
if((state_val_13101 === (1))){
var state_13100__$1 = state_13100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13100__$1,(2),res,v);
} else {
if((state_val_13101 === (2))){
var inst_13097 = (state_13100[(2)]);
var inst_13098 = cljs.core.async.close_BANG_.call(null,res);
var state_13100__$1 = (function (){var statearr_13102 = state_13100;
(statearr_13102[(7)] = inst_13097);

return statearr_13102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13100__$1,inst_13098);
} else {
return null;
}
}
});})(c__12727__auto___13277,res,vec__13095,v,p,job,jobs,results))
;
return ((function (switch__12615__auto__,c__12727__auto___13277,res,vec__13095,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0 = (function (){
var statearr_13106 = [null,null,null,null,null,null,null,null];
(statearr_13106[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__);

(statearr_13106[(1)] = (1));

return statearr_13106;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1 = (function (state_13100){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13107){if((e13107 instanceof Object)){
var ex__12619__auto__ = e13107;
var statearr_13108_13278 = state_13100;
(statearr_13108_13278[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13279 = state_13100;
state_13100 = G__13279;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = function(state_13100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1.call(this,state_13100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___13277,res,vec__13095,v,p,job,jobs,results))
})();
var state__12729__auto__ = (function (){var statearr_13109 = f__12728__auto__.call(null);
(statearr_13109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___13277);

return statearr_13109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___13277,res,vec__13095,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13110){
var vec__13111 = p__13110;
var v = cljs.core.nth.call(null,vec__13111,(0),null);
var p = cljs.core.nth.call(null,vec__13111,(1),null);
var job = vec__13111;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___13280 = n;
var __13281 = (0);
while(true){
if((__13281 < n__5571__auto___13280)){
var G__13112_13282 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13112_13282) {
case "compute":
var c__12727__auto___13284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13281,c__12727__auto___13284,G__13112_13282,n__5571__auto___13280,jobs,results,process,async){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (__13281,c__12727__auto___13284,G__13112_13282,n__5571__auto___13280,jobs,results,process,async){
return (function (state_13125){
var state_val_13126 = (state_13125[(1)]);
if((state_val_13126 === (1))){
var state_13125__$1 = state_13125;
var statearr_13127_13285 = state_13125__$1;
(statearr_13127_13285[(2)] = null);

(statearr_13127_13285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (2))){
var state_13125__$1 = state_13125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13125__$1,(4),jobs);
} else {
if((state_val_13126 === (3))){
var inst_13123 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13125__$1,inst_13123);
} else {
if((state_val_13126 === (4))){
var inst_13115 = (state_13125[(2)]);
var inst_13116 = process.call(null,inst_13115);
var state_13125__$1 = state_13125;
if(cljs.core.truth_(inst_13116)){
var statearr_13128_13286 = state_13125__$1;
(statearr_13128_13286[(1)] = (5));

} else {
var statearr_13129_13287 = state_13125__$1;
(statearr_13129_13287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (5))){
var state_13125__$1 = state_13125;
var statearr_13130_13288 = state_13125__$1;
(statearr_13130_13288[(2)] = null);

(statearr_13130_13288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (6))){
var state_13125__$1 = state_13125;
var statearr_13131_13289 = state_13125__$1;
(statearr_13131_13289[(2)] = null);

(statearr_13131_13289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13126 === (7))){
var inst_13121 = (state_13125[(2)]);
var state_13125__$1 = state_13125;
var statearr_13132_13290 = state_13125__$1;
(statearr_13132_13290[(2)] = inst_13121);

(statearr_13132_13290[(1)] = (3));


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
});})(__13281,c__12727__auto___13284,G__13112_13282,n__5571__auto___13280,jobs,results,process,async))
;
return ((function (__13281,switch__12615__auto__,c__12727__auto___13284,G__13112_13282,n__5571__auto___13280,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0 = (function (){
var statearr_13136 = [null,null,null,null,null,null,null];
(statearr_13136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__);

(statearr_13136[(1)] = (1));

return statearr_13136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1 = (function (state_13125){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13137){if((e13137 instanceof Object)){
var ex__12619__auto__ = e13137;
var statearr_13138_13291 = state_13125;
(statearr_13138_13291[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13292 = state_13125;
state_13125 = G__13292;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = function(state_13125){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1.call(this,state_13125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__;
})()
;})(__13281,switch__12615__auto__,c__12727__auto___13284,G__13112_13282,n__5571__auto___13280,jobs,results,process,async))
})();
var state__12729__auto__ = (function (){var statearr_13139 = f__12728__auto__.call(null);
(statearr_13139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___13284);

return statearr_13139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(__13281,c__12727__auto___13284,G__13112_13282,n__5571__auto___13280,jobs,results,process,async))
);


break;
case "async":
var c__12727__auto___13293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13281,c__12727__auto___13293,G__13112_13282,n__5571__auto___13280,jobs,results,process,async){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (__13281,c__12727__auto___13293,G__13112_13282,n__5571__auto___13280,jobs,results,process,async){
return (function (state_13152){
var state_val_13153 = (state_13152[(1)]);
if((state_val_13153 === (1))){
var state_13152__$1 = state_13152;
var statearr_13154_13294 = state_13152__$1;
(statearr_13154_13294[(2)] = null);

(statearr_13154_13294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13153 === (2))){
var state_13152__$1 = state_13152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13152__$1,(4),jobs);
} else {
if((state_val_13153 === (3))){
var inst_13150 = (state_13152[(2)]);
var state_13152__$1 = state_13152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13152__$1,inst_13150);
} else {
if((state_val_13153 === (4))){
var inst_13142 = (state_13152[(2)]);
var inst_13143 = async.call(null,inst_13142);
var state_13152__$1 = state_13152;
if(cljs.core.truth_(inst_13143)){
var statearr_13155_13295 = state_13152__$1;
(statearr_13155_13295[(1)] = (5));

} else {
var statearr_13156_13296 = state_13152__$1;
(statearr_13156_13296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13153 === (5))){
var state_13152__$1 = state_13152;
var statearr_13157_13297 = state_13152__$1;
(statearr_13157_13297[(2)] = null);

(statearr_13157_13297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13153 === (6))){
var state_13152__$1 = state_13152;
var statearr_13158_13298 = state_13152__$1;
(statearr_13158_13298[(2)] = null);

(statearr_13158_13298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13153 === (7))){
var inst_13148 = (state_13152[(2)]);
var state_13152__$1 = state_13152;
var statearr_13159_13299 = state_13152__$1;
(statearr_13159_13299[(2)] = inst_13148);

(statearr_13159_13299[(1)] = (3));


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
});})(__13281,c__12727__auto___13293,G__13112_13282,n__5571__auto___13280,jobs,results,process,async))
;
return ((function (__13281,switch__12615__auto__,c__12727__auto___13293,G__13112_13282,n__5571__auto___13280,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0 = (function (){
var statearr_13163 = [null,null,null,null,null,null,null];
(statearr_13163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__);

(statearr_13163[(1)] = (1));

return statearr_13163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1 = (function (state_13152){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13164){if((e13164 instanceof Object)){
var ex__12619__auto__ = e13164;
var statearr_13165_13300 = state_13152;
(statearr_13165_13300[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13301 = state_13152;
state_13152 = G__13301;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = function(state_13152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1.call(this,state_13152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__;
})()
;})(__13281,switch__12615__auto__,c__12727__auto___13293,G__13112_13282,n__5571__auto___13280,jobs,results,process,async))
})();
var state__12729__auto__ = (function (){var statearr_13166 = f__12728__auto__.call(null);
(statearr_13166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___13293);

return statearr_13166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(__13281,c__12727__auto___13293,G__13112_13282,n__5571__auto___13280,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13302 = (__13281 + (1));
__13281 = G__13302;
continue;
} else {
}
break;
}

var c__12727__auto___13303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___13303,jobs,results,process,async){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___13303,jobs,results,process,async){
return (function (state_13188){
var state_val_13189 = (state_13188[(1)]);
if((state_val_13189 === (1))){
var state_13188__$1 = state_13188;
var statearr_13190_13304 = state_13188__$1;
(statearr_13190_13304[(2)] = null);

(statearr_13190_13304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (2))){
var state_13188__$1 = state_13188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13188__$1,(4),from);
} else {
if((state_val_13189 === (3))){
var inst_13186 = (state_13188[(2)]);
var state_13188__$1 = state_13188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13188__$1,inst_13186);
} else {
if((state_val_13189 === (4))){
var inst_13169 = (state_13188[(7)]);
var inst_13169__$1 = (state_13188[(2)]);
var inst_13170 = (inst_13169__$1 == null);
var state_13188__$1 = (function (){var statearr_13191 = state_13188;
(statearr_13191[(7)] = inst_13169__$1);

return statearr_13191;
})();
if(cljs.core.truth_(inst_13170)){
var statearr_13192_13305 = state_13188__$1;
(statearr_13192_13305[(1)] = (5));

} else {
var statearr_13193_13306 = state_13188__$1;
(statearr_13193_13306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (5))){
var inst_13172 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13188__$1 = state_13188;
var statearr_13194_13307 = state_13188__$1;
(statearr_13194_13307[(2)] = inst_13172);

(statearr_13194_13307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (6))){
var inst_13174 = (state_13188[(8)]);
var inst_13169 = (state_13188[(7)]);
var inst_13174__$1 = cljs.core.async.chan.call(null,(1));
var inst_13175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13176 = [inst_13169,inst_13174__$1];
var inst_13177 = (new cljs.core.PersistentVector(null,2,(5),inst_13175,inst_13176,null));
var state_13188__$1 = (function (){var statearr_13195 = state_13188;
(statearr_13195[(8)] = inst_13174__$1);

return statearr_13195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,(8),jobs,inst_13177);
} else {
if((state_val_13189 === (7))){
var inst_13184 = (state_13188[(2)]);
var state_13188__$1 = state_13188;
var statearr_13196_13308 = state_13188__$1;
(statearr_13196_13308[(2)] = inst_13184);

(statearr_13196_13308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13189 === (8))){
var inst_13174 = (state_13188[(8)]);
var inst_13179 = (state_13188[(2)]);
var state_13188__$1 = (function (){var statearr_13197 = state_13188;
(statearr_13197[(9)] = inst_13179);

return statearr_13197;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13188__$1,(9),results,inst_13174);
} else {
if((state_val_13189 === (9))){
var inst_13181 = (state_13188[(2)]);
var state_13188__$1 = (function (){var statearr_13198 = state_13188;
(statearr_13198[(10)] = inst_13181);

return statearr_13198;
})();
var statearr_13199_13309 = state_13188__$1;
(statearr_13199_13309[(2)] = null);

(statearr_13199_13309[(1)] = (2));


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
});})(c__12727__auto___13303,jobs,results,process,async))
;
return ((function (switch__12615__auto__,c__12727__auto___13303,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0 = (function (){
var statearr_13203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__);

(statearr_13203[(1)] = (1));

return statearr_13203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1 = (function (state_13188){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13204){if((e13204 instanceof Object)){
var ex__12619__auto__ = e13204;
var statearr_13205_13310 = state_13188;
(statearr_13205_13310[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13311 = state_13188;
state_13188 = G__13311;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = function(state_13188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1.call(this,state_13188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___13303,jobs,results,process,async))
})();
var state__12729__auto__ = (function (){var statearr_13206 = f__12728__auto__.call(null);
(statearr_13206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___13303);

return statearr_13206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___13303,jobs,results,process,async))
);


var c__12727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto__,jobs,results,process,async){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto__,jobs,results,process,async){
return (function (state_13244){
var state_val_13245 = (state_13244[(1)]);
if((state_val_13245 === (7))){
var inst_13240 = (state_13244[(2)]);
var state_13244__$1 = state_13244;
var statearr_13246_13312 = state_13244__$1;
(statearr_13246_13312[(2)] = inst_13240);

(statearr_13246_13312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (20))){
var state_13244__$1 = state_13244;
var statearr_13247_13313 = state_13244__$1;
(statearr_13247_13313[(2)] = null);

(statearr_13247_13313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (1))){
var state_13244__$1 = state_13244;
var statearr_13248_13314 = state_13244__$1;
(statearr_13248_13314[(2)] = null);

(statearr_13248_13314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (4))){
var inst_13209 = (state_13244[(7)]);
var inst_13209__$1 = (state_13244[(2)]);
var inst_13210 = (inst_13209__$1 == null);
var state_13244__$1 = (function (){var statearr_13249 = state_13244;
(statearr_13249[(7)] = inst_13209__$1);

return statearr_13249;
})();
if(cljs.core.truth_(inst_13210)){
var statearr_13250_13315 = state_13244__$1;
(statearr_13250_13315[(1)] = (5));

} else {
var statearr_13251_13316 = state_13244__$1;
(statearr_13251_13316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (15))){
var inst_13222 = (state_13244[(8)]);
var state_13244__$1 = state_13244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13244__$1,(18),to,inst_13222);
} else {
if((state_val_13245 === (21))){
var inst_13235 = (state_13244[(2)]);
var state_13244__$1 = state_13244;
var statearr_13252_13317 = state_13244__$1;
(statearr_13252_13317[(2)] = inst_13235);

(statearr_13252_13317[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (13))){
var inst_13237 = (state_13244[(2)]);
var state_13244__$1 = (function (){var statearr_13253 = state_13244;
(statearr_13253[(9)] = inst_13237);

return statearr_13253;
})();
var statearr_13254_13318 = state_13244__$1;
(statearr_13254_13318[(2)] = null);

(statearr_13254_13318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (6))){
var inst_13209 = (state_13244[(7)]);
var state_13244__$1 = state_13244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13244__$1,(11),inst_13209);
} else {
if((state_val_13245 === (17))){
var inst_13230 = (state_13244[(2)]);
var state_13244__$1 = state_13244;
if(cljs.core.truth_(inst_13230)){
var statearr_13255_13319 = state_13244__$1;
(statearr_13255_13319[(1)] = (19));

} else {
var statearr_13256_13320 = state_13244__$1;
(statearr_13256_13320[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (3))){
var inst_13242 = (state_13244[(2)]);
var state_13244__$1 = state_13244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13244__$1,inst_13242);
} else {
if((state_val_13245 === (12))){
var inst_13219 = (state_13244[(10)]);
var state_13244__$1 = state_13244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13244__$1,(14),inst_13219);
} else {
if((state_val_13245 === (2))){
var state_13244__$1 = state_13244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13244__$1,(4),results);
} else {
if((state_val_13245 === (19))){
var state_13244__$1 = state_13244;
var statearr_13257_13321 = state_13244__$1;
(statearr_13257_13321[(2)] = null);

(statearr_13257_13321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (11))){
var inst_13219 = (state_13244[(2)]);
var state_13244__$1 = (function (){var statearr_13258 = state_13244;
(statearr_13258[(10)] = inst_13219);

return statearr_13258;
})();
var statearr_13259_13322 = state_13244__$1;
(statearr_13259_13322[(2)] = null);

(statearr_13259_13322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (9))){
var state_13244__$1 = state_13244;
var statearr_13260_13323 = state_13244__$1;
(statearr_13260_13323[(2)] = null);

(statearr_13260_13323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (5))){
var state_13244__$1 = state_13244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13261_13324 = state_13244__$1;
(statearr_13261_13324[(1)] = (8));

} else {
var statearr_13262_13325 = state_13244__$1;
(statearr_13262_13325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (14))){
var inst_13222 = (state_13244[(8)]);
var inst_13224 = (state_13244[(11)]);
var inst_13222__$1 = (state_13244[(2)]);
var inst_13223 = (inst_13222__$1 == null);
var inst_13224__$1 = cljs.core.not.call(null,inst_13223);
var state_13244__$1 = (function (){var statearr_13263 = state_13244;
(statearr_13263[(8)] = inst_13222__$1);

(statearr_13263[(11)] = inst_13224__$1);

return statearr_13263;
})();
if(inst_13224__$1){
var statearr_13264_13326 = state_13244__$1;
(statearr_13264_13326[(1)] = (15));

} else {
var statearr_13265_13327 = state_13244__$1;
(statearr_13265_13327[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (16))){
var inst_13224 = (state_13244[(11)]);
var state_13244__$1 = state_13244;
var statearr_13266_13328 = state_13244__$1;
(statearr_13266_13328[(2)] = inst_13224);

(statearr_13266_13328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (10))){
var inst_13216 = (state_13244[(2)]);
var state_13244__$1 = state_13244;
var statearr_13267_13329 = state_13244__$1;
(statearr_13267_13329[(2)] = inst_13216);

(statearr_13267_13329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (18))){
var inst_13227 = (state_13244[(2)]);
var state_13244__$1 = state_13244;
var statearr_13268_13330 = state_13244__$1;
(statearr_13268_13330[(2)] = inst_13227);

(statearr_13268_13330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13245 === (8))){
var inst_13213 = cljs.core.async.close_BANG_.call(null,to);
var state_13244__$1 = state_13244;
var statearr_13269_13331 = state_13244__$1;
(statearr_13269_13331[(2)] = inst_13213);

(statearr_13269_13331[(1)] = (10));


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
});})(c__12727__auto__,jobs,results,process,async))
;
return ((function (switch__12615__auto__,c__12727__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0 = (function (){
var statearr_13273 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__);

(statearr_13273[(1)] = (1));

return statearr_13273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1 = (function (state_13244){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13274){if((e13274 instanceof Object)){
var ex__12619__auto__ = e13274;
var statearr_13275_13332 = state_13244;
(statearr_13275_13332[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13333 = state_13244;
state_13244 = G__13333;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__ = function(state_13244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1.call(this,state_13244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto__,jobs,results,process,async))
})();
var state__12729__auto__ = (function (){var statearr_13276 = f__12728__auto__.call(null);
(statearr_13276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto__);

return statearr_13276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto__,jobs,results,process,async))
);

return c__12727__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13334 = [];
var len__5726__auto___13337 = arguments.length;
var i__5727__auto___13338 = (0);
while(true){
if((i__5727__auto___13338 < len__5726__auto___13337)){
args13334.push((arguments[i__5727__auto___13338]));

var G__13339 = (i__5727__auto___13338 + (1));
i__5727__auto___13338 = G__13339;
continue;
} else {
}
break;
}

var G__13336 = args13334.length;
switch (G__13336) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13334.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13341 = [];
var len__5726__auto___13344 = arguments.length;
var i__5727__auto___13345 = (0);
while(true){
if((i__5727__auto___13345 < len__5726__auto___13344)){
args13341.push((arguments[i__5727__auto___13345]));

var G__13346 = (i__5727__auto___13345 + (1));
i__5727__auto___13345 = G__13346;
continue;
} else {
}
break;
}

var G__13343 = args13341.length;
switch (G__13343) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13341.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13348 = [];
var len__5726__auto___13401 = arguments.length;
var i__5727__auto___13402 = (0);
while(true){
if((i__5727__auto___13402 < len__5726__auto___13401)){
args13348.push((arguments[i__5727__auto___13402]));

var G__13403 = (i__5727__auto___13402 + (1));
i__5727__auto___13402 = G__13403;
continue;
} else {
}
break;
}

var G__13350 = args13348.length;
switch (G__13350) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13348.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12727__auto___13405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___13405,tc,fc){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___13405,tc,fc){
return (function (state_13376){
var state_val_13377 = (state_13376[(1)]);
if((state_val_13377 === (7))){
var inst_13372 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13378_13406 = state_13376__$1;
(statearr_13378_13406[(2)] = inst_13372);

(statearr_13378_13406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (1))){
var state_13376__$1 = state_13376;
var statearr_13379_13407 = state_13376__$1;
(statearr_13379_13407[(2)] = null);

(statearr_13379_13407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (4))){
var inst_13353 = (state_13376[(7)]);
var inst_13353__$1 = (state_13376[(2)]);
var inst_13354 = (inst_13353__$1 == null);
var state_13376__$1 = (function (){var statearr_13380 = state_13376;
(statearr_13380[(7)] = inst_13353__$1);

return statearr_13380;
})();
if(cljs.core.truth_(inst_13354)){
var statearr_13381_13408 = state_13376__$1;
(statearr_13381_13408[(1)] = (5));

} else {
var statearr_13382_13409 = state_13376__$1;
(statearr_13382_13409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (13))){
var state_13376__$1 = state_13376;
var statearr_13383_13410 = state_13376__$1;
(statearr_13383_13410[(2)] = null);

(statearr_13383_13410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (6))){
var inst_13353 = (state_13376[(7)]);
var inst_13359 = p.call(null,inst_13353);
var state_13376__$1 = state_13376;
if(cljs.core.truth_(inst_13359)){
var statearr_13384_13411 = state_13376__$1;
(statearr_13384_13411[(1)] = (9));

} else {
var statearr_13385_13412 = state_13376__$1;
(statearr_13385_13412[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (3))){
var inst_13374 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13376__$1,inst_13374);
} else {
if((state_val_13377 === (12))){
var state_13376__$1 = state_13376;
var statearr_13386_13413 = state_13376__$1;
(statearr_13386_13413[(2)] = null);

(statearr_13386_13413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (2))){
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13376__$1,(4),ch);
} else {
if((state_val_13377 === (11))){
var inst_13353 = (state_13376[(7)]);
var inst_13363 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13376__$1,(8),inst_13363,inst_13353);
} else {
if((state_val_13377 === (9))){
var state_13376__$1 = state_13376;
var statearr_13387_13414 = state_13376__$1;
(statearr_13387_13414[(2)] = tc);

(statearr_13387_13414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (5))){
var inst_13356 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13357 = cljs.core.async.close_BANG_.call(null,fc);
var state_13376__$1 = (function (){var statearr_13388 = state_13376;
(statearr_13388[(8)] = inst_13356);

return statearr_13388;
})();
var statearr_13389_13415 = state_13376__$1;
(statearr_13389_13415[(2)] = inst_13357);

(statearr_13389_13415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (14))){
var inst_13370 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
var statearr_13390_13416 = state_13376__$1;
(statearr_13390_13416[(2)] = inst_13370);

(statearr_13390_13416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (10))){
var state_13376__$1 = state_13376;
var statearr_13391_13417 = state_13376__$1;
(statearr_13391_13417[(2)] = fc);

(statearr_13391_13417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13377 === (8))){
var inst_13365 = (state_13376[(2)]);
var state_13376__$1 = state_13376;
if(cljs.core.truth_(inst_13365)){
var statearr_13392_13418 = state_13376__$1;
(statearr_13392_13418[(1)] = (12));

} else {
var statearr_13393_13419 = state_13376__$1;
(statearr_13393_13419[(1)] = (13));

}

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
});})(c__12727__auto___13405,tc,fc))
;
return ((function (switch__12615__auto__,c__12727__auto___13405,tc,fc){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_13397 = [null,null,null,null,null,null,null,null,null];
(statearr_13397[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_13397[(1)] = (1));

return statearr_13397;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_13376){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13398){if((e13398 instanceof Object)){
var ex__12619__auto__ = e13398;
var statearr_13399_13420 = state_13376;
(statearr_13399_13420[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13421 = state_13376;
state_13376 = G__13421;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_13376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_13376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___13405,tc,fc))
})();
var state__12729__auto__ = (function (){var statearr_13400 = f__12728__auto__.call(null);
(statearr_13400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___13405);

return statearr_13400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___13405,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto__){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto__){
return (function (state_13485){
var state_val_13486 = (state_13485[(1)]);
if((state_val_13486 === (7))){
var inst_13481 = (state_13485[(2)]);
var state_13485__$1 = state_13485;
var statearr_13487_13508 = state_13485__$1;
(statearr_13487_13508[(2)] = inst_13481);

(statearr_13487_13508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (1))){
var inst_13465 = init;
var state_13485__$1 = (function (){var statearr_13488 = state_13485;
(statearr_13488[(7)] = inst_13465);

return statearr_13488;
})();
var statearr_13489_13509 = state_13485__$1;
(statearr_13489_13509[(2)] = null);

(statearr_13489_13509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (4))){
var inst_13468 = (state_13485[(8)]);
var inst_13468__$1 = (state_13485[(2)]);
var inst_13469 = (inst_13468__$1 == null);
var state_13485__$1 = (function (){var statearr_13490 = state_13485;
(statearr_13490[(8)] = inst_13468__$1);

return statearr_13490;
})();
if(cljs.core.truth_(inst_13469)){
var statearr_13491_13510 = state_13485__$1;
(statearr_13491_13510[(1)] = (5));

} else {
var statearr_13492_13511 = state_13485__$1;
(statearr_13492_13511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (6))){
var inst_13465 = (state_13485[(7)]);
var inst_13472 = (state_13485[(9)]);
var inst_13468 = (state_13485[(8)]);
var inst_13472__$1 = f.call(null,inst_13465,inst_13468);
var inst_13473 = cljs.core.reduced_QMARK_.call(null,inst_13472__$1);
var state_13485__$1 = (function (){var statearr_13493 = state_13485;
(statearr_13493[(9)] = inst_13472__$1);

return statearr_13493;
})();
if(inst_13473){
var statearr_13494_13512 = state_13485__$1;
(statearr_13494_13512[(1)] = (8));

} else {
var statearr_13495_13513 = state_13485__$1;
(statearr_13495_13513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (3))){
var inst_13483 = (state_13485[(2)]);
var state_13485__$1 = state_13485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13485__$1,inst_13483);
} else {
if((state_val_13486 === (2))){
var state_13485__$1 = state_13485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13485__$1,(4),ch);
} else {
if((state_val_13486 === (9))){
var inst_13472 = (state_13485[(9)]);
var inst_13465 = inst_13472;
var state_13485__$1 = (function (){var statearr_13496 = state_13485;
(statearr_13496[(7)] = inst_13465);

return statearr_13496;
})();
var statearr_13497_13514 = state_13485__$1;
(statearr_13497_13514[(2)] = null);

(statearr_13497_13514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (5))){
var inst_13465 = (state_13485[(7)]);
var state_13485__$1 = state_13485;
var statearr_13498_13515 = state_13485__$1;
(statearr_13498_13515[(2)] = inst_13465);

(statearr_13498_13515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (10))){
var inst_13479 = (state_13485[(2)]);
var state_13485__$1 = state_13485;
var statearr_13499_13516 = state_13485__$1;
(statearr_13499_13516[(2)] = inst_13479);

(statearr_13499_13516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13486 === (8))){
var inst_13472 = (state_13485[(9)]);
var inst_13475 = cljs.core.deref.call(null,inst_13472);
var state_13485__$1 = state_13485;
var statearr_13500_13517 = state_13485__$1;
(statearr_13500_13517[(2)] = inst_13475);

(statearr_13500_13517[(1)] = (10));


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
});})(c__12727__auto__))
;
return ((function (switch__12615__auto__,c__12727__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12616__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12616__auto____0 = (function (){
var statearr_13504 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13504[(0)] = cljs$core$async$reduce_$_state_machine__12616__auto__);

(statearr_13504[(1)] = (1));

return statearr_13504;
});
var cljs$core$async$reduce_$_state_machine__12616__auto____1 = (function (state_13485){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13505){if((e13505 instanceof Object)){
var ex__12619__auto__ = e13505;
var statearr_13506_13518 = state_13485;
(statearr_13506_13518[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13519 = state_13485;
state_13485 = G__13519;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12616__auto__ = function(state_13485){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12616__auto____1.call(this,state_13485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12616__auto____0;
cljs$core$async$reduce_$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12616__auto____1;
return cljs$core$async$reduce_$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto__))
})();
var state__12729__auto__ = (function (){var statearr_13507 = f__12728__auto__.call(null);
(statearr_13507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto__);

return statearr_13507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto__))
);

return c__12727__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13520 = [];
var len__5726__auto___13572 = arguments.length;
var i__5727__auto___13573 = (0);
while(true){
if((i__5727__auto___13573 < len__5726__auto___13572)){
args13520.push((arguments[i__5727__auto___13573]));

var G__13574 = (i__5727__auto___13573 + (1));
i__5727__auto___13573 = G__13574;
continue;
} else {
}
break;
}

var G__13522 = args13520.length;
switch (G__13522) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13520.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto__){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto__){
return (function (state_13547){
var state_val_13548 = (state_13547[(1)]);
if((state_val_13548 === (7))){
var inst_13529 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
var statearr_13549_13576 = state_13547__$1;
(statearr_13549_13576[(2)] = inst_13529);

(statearr_13549_13576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (1))){
var inst_13523 = cljs.core.seq.call(null,coll);
var inst_13524 = inst_13523;
var state_13547__$1 = (function (){var statearr_13550 = state_13547;
(statearr_13550[(7)] = inst_13524);

return statearr_13550;
})();
var statearr_13551_13577 = state_13547__$1;
(statearr_13551_13577[(2)] = null);

(statearr_13551_13577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (4))){
var inst_13524 = (state_13547[(7)]);
var inst_13527 = cljs.core.first.call(null,inst_13524);
var state_13547__$1 = state_13547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13547__$1,(7),ch,inst_13527);
} else {
if((state_val_13548 === (13))){
var inst_13541 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
var statearr_13552_13578 = state_13547__$1;
(statearr_13552_13578[(2)] = inst_13541);

(statearr_13552_13578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (6))){
var inst_13532 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
if(cljs.core.truth_(inst_13532)){
var statearr_13553_13579 = state_13547__$1;
(statearr_13553_13579[(1)] = (8));

} else {
var statearr_13554_13580 = state_13547__$1;
(statearr_13554_13580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (3))){
var inst_13545 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13547__$1,inst_13545);
} else {
if((state_val_13548 === (12))){
var state_13547__$1 = state_13547;
var statearr_13555_13581 = state_13547__$1;
(statearr_13555_13581[(2)] = null);

(statearr_13555_13581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (2))){
var inst_13524 = (state_13547[(7)]);
var state_13547__$1 = state_13547;
if(cljs.core.truth_(inst_13524)){
var statearr_13556_13582 = state_13547__$1;
(statearr_13556_13582[(1)] = (4));

} else {
var statearr_13557_13583 = state_13547__$1;
(statearr_13557_13583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (11))){
var inst_13538 = cljs.core.async.close_BANG_.call(null,ch);
var state_13547__$1 = state_13547;
var statearr_13558_13584 = state_13547__$1;
(statearr_13558_13584[(2)] = inst_13538);

(statearr_13558_13584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (9))){
var state_13547__$1 = state_13547;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13559_13585 = state_13547__$1;
(statearr_13559_13585[(1)] = (11));

} else {
var statearr_13560_13586 = state_13547__$1;
(statearr_13560_13586[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (5))){
var inst_13524 = (state_13547[(7)]);
var state_13547__$1 = state_13547;
var statearr_13561_13587 = state_13547__$1;
(statearr_13561_13587[(2)] = inst_13524);

(statearr_13561_13587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (10))){
var inst_13543 = (state_13547[(2)]);
var state_13547__$1 = state_13547;
var statearr_13562_13588 = state_13547__$1;
(statearr_13562_13588[(2)] = inst_13543);

(statearr_13562_13588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13548 === (8))){
var inst_13524 = (state_13547[(7)]);
var inst_13534 = cljs.core.next.call(null,inst_13524);
var inst_13524__$1 = inst_13534;
var state_13547__$1 = (function (){var statearr_13563 = state_13547;
(statearr_13563[(7)] = inst_13524__$1);

return statearr_13563;
})();
var statearr_13564_13589 = state_13547__$1;
(statearr_13564_13589[(2)] = null);

(statearr_13564_13589[(1)] = (2));


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
});})(c__12727__auto__))
;
return ((function (switch__12615__auto__,c__12727__auto__){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_13568 = [null,null,null,null,null,null,null,null];
(statearr_13568[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_13568[(1)] = (1));

return statearr_13568;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_13547){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e13569){if((e13569 instanceof Object)){
var ex__12619__auto__ = e13569;
var statearr_13570_13590 = state_13547;
(statearr_13570_13590[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13591 = state_13547;
state_13547 = G__13591;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_13547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_13547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto__))
})();
var state__12729__auto__ = (function (){var statearr_13571 = f__12728__auto__.call(null);
(statearr_13571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto__);

return statearr_13571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto__))
);

return c__12727__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13813 = (function (mult,ch,cs,meta13814){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13814 = meta13814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13815,meta13814__$1){
var self__ = this;
var _13815__$1 = this;
return (new cljs.core.async.t_cljs$core$async13813(self__.mult,self__.ch,self__.cs,meta13814__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13815){
var self__ = this;
var _13815__$1 = this;
return self__.meta13814;
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13814","meta13814",1050296719,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13813";

cljs.core.async.t_cljs$core$async13813.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async13813");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13813 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13813(mult__$1,ch__$1,cs__$1,meta13814){
return (new cljs.core.async.t_cljs$core$async13813(mult__$1,ch__$1,cs__$1,meta13814));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13813(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12727__auto___14034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14034,cs,m,dchan,dctr,done){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14034,cs,m,dchan,dctr,done){
return (function (state_13946){
var state_val_13947 = (state_13946[(1)]);
if((state_val_13947 === (7))){
var inst_13942 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13948_14035 = state_13946__$1;
(statearr_13948_14035[(2)] = inst_13942);

(statearr_13948_14035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (20))){
var inst_13847 = (state_13946[(7)]);
var inst_13857 = cljs.core.first.call(null,inst_13847);
var inst_13858 = cljs.core.nth.call(null,inst_13857,(0),null);
var inst_13859 = cljs.core.nth.call(null,inst_13857,(1),null);
var state_13946__$1 = (function (){var statearr_13949 = state_13946;
(statearr_13949[(8)] = inst_13858);

return statearr_13949;
})();
if(cljs.core.truth_(inst_13859)){
var statearr_13950_14036 = state_13946__$1;
(statearr_13950_14036[(1)] = (22));

} else {
var statearr_13951_14037 = state_13946__$1;
(statearr_13951_14037[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (27))){
var inst_13818 = (state_13946[(9)]);
var inst_13887 = (state_13946[(10)]);
var inst_13889 = (state_13946[(11)]);
var inst_13894 = (state_13946[(12)]);
var inst_13894__$1 = cljs.core._nth.call(null,inst_13887,inst_13889);
var inst_13895 = cljs.core.async.put_BANG_.call(null,inst_13894__$1,inst_13818,done);
var state_13946__$1 = (function (){var statearr_13952 = state_13946;
(statearr_13952[(12)] = inst_13894__$1);

return statearr_13952;
})();
if(cljs.core.truth_(inst_13895)){
var statearr_13953_14038 = state_13946__$1;
(statearr_13953_14038[(1)] = (30));

} else {
var statearr_13954_14039 = state_13946__$1;
(statearr_13954_14039[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (1))){
var state_13946__$1 = state_13946;
var statearr_13955_14040 = state_13946__$1;
(statearr_13955_14040[(2)] = null);

(statearr_13955_14040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (24))){
var inst_13847 = (state_13946[(7)]);
var inst_13864 = (state_13946[(2)]);
var inst_13865 = cljs.core.next.call(null,inst_13847);
var inst_13827 = inst_13865;
var inst_13828 = null;
var inst_13829 = (0);
var inst_13830 = (0);
var state_13946__$1 = (function (){var statearr_13956 = state_13946;
(statearr_13956[(13)] = inst_13827);

(statearr_13956[(14)] = inst_13830);

(statearr_13956[(15)] = inst_13864);

(statearr_13956[(16)] = inst_13828);

(statearr_13956[(17)] = inst_13829);

return statearr_13956;
})();
var statearr_13957_14041 = state_13946__$1;
(statearr_13957_14041[(2)] = null);

(statearr_13957_14041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (39))){
var state_13946__$1 = state_13946;
var statearr_13961_14042 = state_13946__$1;
(statearr_13961_14042[(2)] = null);

(statearr_13961_14042[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (4))){
var inst_13818 = (state_13946[(9)]);
var inst_13818__$1 = (state_13946[(2)]);
var inst_13819 = (inst_13818__$1 == null);
var state_13946__$1 = (function (){var statearr_13962 = state_13946;
(statearr_13962[(9)] = inst_13818__$1);

return statearr_13962;
})();
if(cljs.core.truth_(inst_13819)){
var statearr_13963_14043 = state_13946__$1;
(statearr_13963_14043[(1)] = (5));

} else {
var statearr_13964_14044 = state_13946__$1;
(statearr_13964_14044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (15))){
var inst_13827 = (state_13946[(13)]);
var inst_13830 = (state_13946[(14)]);
var inst_13828 = (state_13946[(16)]);
var inst_13829 = (state_13946[(17)]);
var inst_13843 = (state_13946[(2)]);
var inst_13844 = (inst_13830 + (1));
var tmp13958 = inst_13827;
var tmp13959 = inst_13828;
var tmp13960 = inst_13829;
var inst_13827__$1 = tmp13958;
var inst_13828__$1 = tmp13959;
var inst_13829__$1 = tmp13960;
var inst_13830__$1 = inst_13844;
var state_13946__$1 = (function (){var statearr_13965 = state_13946;
(statearr_13965[(13)] = inst_13827__$1);

(statearr_13965[(14)] = inst_13830__$1);

(statearr_13965[(16)] = inst_13828__$1);

(statearr_13965[(18)] = inst_13843);

(statearr_13965[(17)] = inst_13829__$1);

return statearr_13965;
})();
var statearr_13966_14045 = state_13946__$1;
(statearr_13966_14045[(2)] = null);

(statearr_13966_14045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (21))){
var inst_13868 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13970_14046 = state_13946__$1;
(statearr_13970_14046[(2)] = inst_13868);

(statearr_13970_14046[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (31))){
var inst_13894 = (state_13946[(12)]);
var inst_13898 = done.call(null,null);
var inst_13899 = cljs.core.async.untap_STAR_.call(null,m,inst_13894);
var state_13946__$1 = (function (){var statearr_13971 = state_13946;
(statearr_13971[(19)] = inst_13898);

return statearr_13971;
})();
var statearr_13972_14047 = state_13946__$1;
(statearr_13972_14047[(2)] = inst_13899);

(statearr_13972_14047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (32))){
var inst_13888 = (state_13946[(20)]);
var inst_13887 = (state_13946[(10)]);
var inst_13886 = (state_13946[(21)]);
var inst_13889 = (state_13946[(11)]);
var inst_13901 = (state_13946[(2)]);
var inst_13902 = (inst_13889 + (1));
var tmp13967 = inst_13888;
var tmp13968 = inst_13887;
var tmp13969 = inst_13886;
var inst_13886__$1 = tmp13969;
var inst_13887__$1 = tmp13968;
var inst_13888__$1 = tmp13967;
var inst_13889__$1 = inst_13902;
var state_13946__$1 = (function (){var statearr_13973 = state_13946;
(statearr_13973[(20)] = inst_13888__$1);

(statearr_13973[(10)] = inst_13887__$1);

(statearr_13973[(22)] = inst_13901);

(statearr_13973[(21)] = inst_13886__$1);

(statearr_13973[(11)] = inst_13889__$1);

return statearr_13973;
})();
var statearr_13974_14048 = state_13946__$1;
(statearr_13974_14048[(2)] = null);

(statearr_13974_14048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (40))){
var inst_13914 = (state_13946[(23)]);
var inst_13918 = done.call(null,null);
var inst_13919 = cljs.core.async.untap_STAR_.call(null,m,inst_13914);
var state_13946__$1 = (function (){var statearr_13975 = state_13946;
(statearr_13975[(24)] = inst_13918);

return statearr_13975;
})();
var statearr_13976_14049 = state_13946__$1;
(statearr_13976_14049[(2)] = inst_13919);

(statearr_13976_14049[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (33))){
var inst_13905 = (state_13946[(25)]);
var inst_13907 = cljs.core.chunked_seq_QMARK_.call(null,inst_13905);
var state_13946__$1 = state_13946;
if(inst_13907){
var statearr_13977_14050 = state_13946__$1;
(statearr_13977_14050[(1)] = (36));

} else {
var statearr_13978_14051 = state_13946__$1;
(statearr_13978_14051[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (13))){
var inst_13837 = (state_13946[(26)]);
var inst_13840 = cljs.core.async.close_BANG_.call(null,inst_13837);
var state_13946__$1 = state_13946;
var statearr_13979_14052 = state_13946__$1;
(statearr_13979_14052[(2)] = inst_13840);

(statearr_13979_14052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (22))){
var inst_13858 = (state_13946[(8)]);
var inst_13861 = cljs.core.async.close_BANG_.call(null,inst_13858);
var state_13946__$1 = state_13946;
var statearr_13980_14053 = state_13946__$1;
(statearr_13980_14053[(2)] = inst_13861);

(statearr_13980_14053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (36))){
var inst_13905 = (state_13946[(25)]);
var inst_13909 = cljs.core.chunk_first.call(null,inst_13905);
var inst_13910 = cljs.core.chunk_rest.call(null,inst_13905);
var inst_13911 = cljs.core.count.call(null,inst_13909);
var inst_13886 = inst_13910;
var inst_13887 = inst_13909;
var inst_13888 = inst_13911;
var inst_13889 = (0);
var state_13946__$1 = (function (){var statearr_13981 = state_13946;
(statearr_13981[(20)] = inst_13888);

(statearr_13981[(10)] = inst_13887);

(statearr_13981[(21)] = inst_13886);

(statearr_13981[(11)] = inst_13889);

return statearr_13981;
})();
var statearr_13982_14054 = state_13946__$1;
(statearr_13982_14054[(2)] = null);

(statearr_13982_14054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (41))){
var inst_13905 = (state_13946[(25)]);
var inst_13921 = (state_13946[(2)]);
var inst_13922 = cljs.core.next.call(null,inst_13905);
var inst_13886 = inst_13922;
var inst_13887 = null;
var inst_13888 = (0);
var inst_13889 = (0);
var state_13946__$1 = (function (){var statearr_13983 = state_13946;
(statearr_13983[(20)] = inst_13888);

(statearr_13983[(10)] = inst_13887);

(statearr_13983[(21)] = inst_13886);

(statearr_13983[(27)] = inst_13921);

(statearr_13983[(11)] = inst_13889);

return statearr_13983;
})();
var statearr_13984_14055 = state_13946__$1;
(statearr_13984_14055[(2)] = null);

(statearr_13984_14055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (43))){
var state_13946__$1 = state_13946;
var statearr_13985_14056 = state_13946__$1;
(statearr_13985_14056[(2)] = null);

(statearr_13985_14056[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (29))){
var inst_13930 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13986_14057 = state_13946__$1;
(statearr_13986_14057[(2)] = inst_13930);

(statearr_13986_14057[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (44))){
var inst_13939 = (state_13946[(2)]);
var state_13946__$1 = (function (){var statearr_13987 = state_13946;
(statearr_13987[(28)] = inst_13939);

return statearr_13987;
})();
var statearr_13988_14058 = state_13946__$1;
(statearr_13988_14058[(2)] = null);

(statearr_13988_14058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (6))){
var inst_13878 = (state_13946[(29)]);
var inst_13877 = cljs.core.deref.call(null,cs);
var inst_13878__$1 = cljs.core.keys.call(null,inst_13877);
var inst_13879 = cljs.core.count.call(null,inst_13878__$1);
var inst_13880 = cljs.core.reset_BANG_.call(null,dctr,inst_13879);
var inst_13885 = cljs.core.seq.call(null,inst_13878__$1);
var inst_13886 = inst_13885;
var inst_13887 = null;
var inst_13888 = (0);
var inst_13889 = (0);
var state_13946__$1 = (function (){var statearr_13989 = state_13946;
(statearr_13989[(20)] = inst_13888);

(statearr_13989[(30)] = inst_13880);

(statearr_13989[(10)] = inst_13887);

(statearr_13989[(21)] = inst_13886);

(statearr_13989[(29)] = inst_13878__$1);

(statearr_13989[(11)] = inst_13889);

return statearr_13989;
})();
var statearr_13990_14059 = state_13946__$1;
(statearr_13990_14059[(2)] = null);

(statearr_13990_14059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (28))){
var inst_13905 = (state_13946[(25)]);
var inst_13886 = (state_13946[(21)]);
var inst_13905__$1 = cljs.core.seq.call(null,inst_13886);
var state_13946__$1 = (function (){var statearr_13991 = state_13946;
(statearr_13991[(25)] = inst_13905__$1);

return statearr_13991;
})();
if(inst_13905__$1){
var statearr_13992_14060 = state_13946__$1;
(statearr_13992_14060[(1)] = (33));

} else {
var statearr_13993_14061 = state_13946__$1;
(statearr_13993_14061[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (25))){
var inst_13888 = (state_13946[(20)]);
var inst_13889 = (state_13946[(11)]);
var inst_13891 = (inst_13889 < inst_13888);
var inst_13892 = inst_13891;
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13892)){
var statearr_13994_14062 = state_13946__$1;
(statearr_13994_14062[(1)] = (27));

} else {
var statearr_13995_14063 = state_13946__$1;
(statearr_13995_14063[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (34))){
var state_13946__$1 = state_13946;
var statearr_13996_14064 = state_13946__$1;
(statearr_13996_14064[(2)] = null);

(statearr_13996_14064[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (17))){
var state_13946__$1 = state_13946;
var statearr_13997_14065 = state_13946__$1;
(statearr_13997_14065[(2)] = null);

(statearr_13997_14065[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (3))){
var inst_13944 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13946__$1,inst_13944);
} else {
if((state_val_13947 === (12))){
var inst_13873 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_13998_14066 = state_13946__$1;
(statearr_13998_14066[(2)] = inst_13873);

(statearr_13998_14066[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (2))){
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13946__$1,(4),ch);
} else {
if((state_val_13947 === (23))){
var state_13946__$1 = state_13946;
var statearr_13999_14067 = state_13946__$1;
(statearr_13999_14067[(2)] = null);

(statearr_13999_14067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (35))){
var inst_13928 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_14000_14068 = state_13946__$1;
(statearr_14000_14068[(2)] = inst_13928);

(statearr_14000_14068[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (19))){
var inst_13847 = (state_13946[(7)]);
var inst_13851 = cljs.core.chunk_first.call(null,inst_13847);
var inst_13852 = cljs.core.chunk_rest.call(null,inst_13847);
var inst_13853 = cljs.core.count.call(null,inst_13851);
var inst_13827 = inst_13852;
var inst_13828 = inst_13851;
var inst_13829 = inst_13853;
var inst_13830 = (0);
var state_13946__$1 = (function (){var statearr_14001 = state_13946;
(statearr_14001[(13)] = inst_13827);

(statearr_14001[(14)] = inst_13830);

(statearr_14001[(16)] = inst_13828);

(statearr_14001[(17)] = inst_13829);

return statearr_14001;
})();
var statearr_14002_14069 = state_13946__$1;
(statearr_14002_14069[(2)] = null);

(statearr_14002_14069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (11))){
var inst_13827 = (state_13946[(13)]);
var inst_13847 = (state_13946[(7)]);
var inst_13847__$1 = cljs.core.seq.call(null,inst_13827);
var state_13946__$1 = (function (){var statearr_14003 = state_13946;
(statearr_14003[(7)] = inst_13847__$1);

return statearr_14003;
})();
if(inst_13847__$1){
var statearr_14004_14070 = state_13946__$1;
(statearr_14004_14070[(1)] = (16));

} else {
var statearr_14005_14071 = state_13946__$1;
(statearr_14005_14071[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (9))){
var inst_13875 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_14006_14072 = state_13946__$1;
(statearr_14006_14072[(2)] = inst_13875);

(statearr_14006_14072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (5))){
var inst_13825 = cljs.core.deref.call(null,cs);
var inst_13826 = cljs.core.seq.call(null,inst_13825);
var inst_13827 = inst_13826;
var inst_13828 = null;
var inst_13829 = (0);
var inst_13830 = (0);
var state_13946__$1 = (function (){var statearr_14007 = state_13946;
(statearr_14007[(13)] = inst_13827);

(statearr_14007[(14)] = inst_13830);

(statearr_14007[(16)] = inst_13828);

(statearr_14007[(17)] = inst_13829);

return statearr_14007;
})();
var statearr_14008_14073 = state_13946__$1;
(statearr_14008_14073[(2)] = null);

(statearr_14008_14073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (14))){
var state_13946__$1 = state_13946;
var statearr_14009_14074 = state_13946__$1;
(statearr_14009_14074[(2)] = null);

(statearr_14009_14074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (45))){
var inst_13936 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_14010_14075 = state_13946__$1;
(statearr_14010_14075[(2)] = inst_13936);

(statearr_14010_14075[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (26))){
var inst_13878 = (state_13946[(29)]);
var inst_13932 = (state_13946[(2)]);
var inst_13933 = cljs.core.seq.call(null,inst_13878);
var state_13946__$1 = (function (){var statearr_14011 = state_13946;
(statearr_14011[(31)] = inst_13932);

return statearr_14011;
})();
if(inst_13933){
var statearr_14012_14076 = state_13946__$1;
(statearr_14012_14076[(1)] = (42));

} else {
var statearr_14013_14077 = state_13946__$1;
(statearr_14013_14077[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (16))){
var inst_13847 = (state_13946[(7)]);
var inst_13849 = cljs.core.chunked_seq_QMARK_.call(null,inst_13847);
var state_13946__$1 = state_13946;
if(inst_13849){
var statearr_14014_14078 = state_13946__$1;
(statearr_14014_14078[(1)] = (19));

} else {
var statearr_14015_14079 = state_13946__$1;
(statearr_14015_14079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (38))){
var inst_13925 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_14016_14080 = state_13946__$1;
(statearr_14016_14080[(2)] = inst_13925);

(statearr_14016_14080[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (30))){
var state_13946__$1 = state_13946;
var statearr_14017_14081 = state_13946__$1;
(statearr_14017_14081[(2)] = null);

(statearr_14017_14081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (10))){
var inst_13830 = (state_13946[(14)]);
var inst_13828 = (state_13946[(16)]);
var inst_13836 = cljs.core._nth.call(null,inst_13828,inst_13830);
var inst_13837 = cljs.core.nth.call(null,inst_13836,(0),null);
var inst_13838 = cljs.core.nth.call(null,inst_13836,(1),null);
var state_13946__$1 = (function (){var statearr_14018 = state_13946;
(statearr_14018[(26)] = inst_13837);

return statearr_14018;
})();
if(cljs.core.truth_(inst_13838)){
var statearr_14019_14082 = state_13946__$1;
(statearr_14019_14082[(1)] = (13));

} else {
var statearr_14020_14083 = state_13946__$1;
(statearr_14020_14083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (18))){
var inst_13871 = (state_13946[(2)]);
var state_13946__$1 = state_13946;
var statearr_14021_14084 = state_13946__$1;
(statearr_14021_14084[(2)] = inst_13871);

(statearr_14021_14084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (42))){
var state_13946__$1 = state_13946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13946__$1,(45),dchan);
} else {
if((state_val_13947 === (37))){
var inst_13818 = (state_13946[(9)]);
var inst_13905 = (state_13946[(25)]);
var inst_13914 = (state_13946[(23)]);
var inst_13914__$1 = cljs.core.first.call(null,inst_13905);
var inst_13915 = cljs.core.async.put_BANG_.call(null,inst_13914__$1,inst_13818,done);
var state_13946__$1 = (function (){var statearr_14022 = state_13946;
(statearr_14022[(23)] = inst_13914__$1);

return statearr_14022;
})();
if(cljs.core.truth_(inst_13915)){
var statearr_14023_14085 = state_13946__$1;
(statearr_14023_14085[(1)] = (39));

} else {
var statearr_14024_14086 = state_13946__$1;
(statearr_14024_14086[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13947 === (8))){
var inst_13830 = (state_13946[(14)]);
var inst_13829 = (state_13946[(17)]);
var inst_13832 = (inst_13830 < inst_13829);
var inst_13833 = inst_13832;
var state_13946__$1 = state_13946;
if(cljs.core.truth_(inst_13833)){
var statearr_14025_14087 = state_13946__$1;
(statearr_14025_14087[(1)] = (10));

} else {
var statearr_14026_14088 = state_13946__$1;
(statearr_14026_14088[(1)] = (11));

}

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
}
}
}
});})(c__12727__auto___14034,cs,m,dchan,dctr,done))
;
return ((function (switch__12615__auto__,c__12727__auto___14034,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12616__auto__ = null;
var cljs$core$async$mult_$_state_machine__12616__auto____0 = (function (){
var statearr_14030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14030[(0)] = cljs$core$async$mult_$_state_machine__12616__auto__);

(statearr_14030[(1)] = (1));

return statearr_14030;
});
var cljs$core$async$mult_$_state_machine__12616__auto____1 = (function (state_13946){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_13946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14031){if((e14031 instanceof Object)){
var ex__12619__auto__ = e14031;
var statearr_14032_14089 = state_13946;
(statearr_14032_14089[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14090 = state_13946;
state_13946 = G__14090;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12616__auto__ = function(state_13946){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12616__auto____1.call(this,state_13946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12616__auto____0;
cljs$core$async$mult_$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12616__auto____1;
return cljs$core$async$mult_$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14034,cs,m,dchan,dctr,done))
})();
var state__12729__auto__ = (function (){var statearr_14033 = f__12728__auto__.call(null);
(statearr_14033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14034);

return statearr_14033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14034,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14091 = [];
var len__5726__auto___14094 = arguments.length;
var i__5727__auto___14095 = (0);
while(true){
if((i__5727__auto___14095 < len__5726__auto___14094)){
args14091.push((arguments[i__5727__auto___14095]));

var G__14096 = (i__5727__auto___14095 + (1));
i__5727__auto___14095 = G__14096;
continue;
} else {
}
break;
}

var G__14093 = args14091.length;
switch (G__14093) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14091.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___14108 = arguments.length;
var i__5727__auto___14109 = (0);
while(true){
if((i__5727__auto___14109 < len__5726__auto___14108)){
args__5733__auto__.push((arguments[i__5727__auto___14109]));

var G__14110 = (i__5727__auto___14109 + (1));
i__5727__auto___14109 = G__14110;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14102){
var map__14103 = p__14102;
var map__14103__$1 = ((((!((map__14103 == null)))?((((map__14103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14103):map__14103);
var opts = map__14103__$1;
var statearr_14105_14111 = state;
(statearr_14105_14111[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14103,map__14103__$1,opts){
return (function (val){
var statearr_14106_14112 = state;
(statearr_14106_14112[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14103,map__14103__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14107_14113 = state;
(statearr_14107_14113[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first.call(null,seq14098);
var seq14098__$1 = cljs.core.next.call(null,seq14098);
var G__14100 = cljs.core.first.call(null,seq14098__$1);
var seq14098__$2 = cljs.core.next.call(null,seq14098__$1);
var G__14101 = cljs.core.first.call(null,seq14098__$2);
var seq14098__$3 = cljs.core.next.call(null,seq14098__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14099,G__14100,G__14101,seq14098__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14277 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14278){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14278 = meta14278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14279,meta14278__$1){
var self__ = this;
var _14279__$1 = this;
return (new cljs.core.async.t_cljs$core$async14277(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14278__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14279){
var self__ = this;
var _14279__$1 = this;
return self__.meta14278;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14278","meta14278",-1222092501,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14277";

cljs.core.async.t_cljs$core$async14277.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async14277");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14277 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14277(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14278){
return (new cljs.core.async.t_cljs$core$async14277(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14278));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14277(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12727__auto___14440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14377){
var state_val_14378 = (state_14377[(1)]);
if((state_val_14378 === (7))){
var inst_14295 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
var statearr_14379_14441 = state_14377__$1;
(statearr_14379_14441[(2)] = inst_14295);

(statearr_14379_14441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (20))){
var inst_14307 = (state_14377[(7)]);
var state_14377__$1 = state_14377;
var statearr_14380_14442 = state_14377__$1;
(statearr_14380_14442[(2)] = inst_14307);

(statearr_14380_14442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (27))){
var state_14377__$1 = state_14377;
var statearr_14381_14443 = state_14377__$1;
(statearr_14381_14443[(2)] = null);

(statearr_14381_14443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (1))){
var inst_14283 = (state_14377[(8)]);
var inst_14283__$1 = calc_state.call(null);
var inst_14285 = (inst_14283__$1 == null);
var inst_14286 = cljs.core.not.call(null,inst_14285);
var state_14377__$1 = (function (){var statearr_14382 = state_14377;
(statearr_14382[(8)] = inst_14283__$1);

return statearr_14382;
})();
if(inst_14286){
var statearr_14383_14444 = state_14377__$1;
(statearr_14383_14444[(1)] = (2));

} else {
var statearr_14384_14445 = state_14377__$1;
(statearr_14384_14445[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (24))){
var inst_14330 = (state_14377[(9)]);
var inst_14351 = (state_14377[(10)]);
var inst_14337 = (state_14377[(11)]);
var inst_14351__$1 = inst_14330.call(null,inst_14337);
var state_14377__$1 = (function (){var statearr_14385 = state_14377;
(statearr_14385[(10)] = inst_14351__$1);

return statearr_14385;
})();
if(cljs.core.truth_(inst_14351__$1)){
var statearr_14386_14446 = state_14377__$1;
(statearr_14386_14446[(1)] = (29));

} else {
var statearr_14387_14447 = state_14377__$1;
(statearr_14387_14447[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (4))){
var inst_14298 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14298)){
var statearr_14388_14448 = state_14377__$1;
(statearr_14388_14448[(1)] = (8));

} else {
var statearr_14389_14449 = state_14377__$1;
(statearr_14389_14449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (15))){
var inst_14324 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14324)){
var statearr_14390_14450 = state_14377__$1;
(statearr_14390_14450[(1)] = (19));

} else {
var statearr_14391_14451 = state_14377__$1;
(statearr_14391_14451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (21))){
var inst_14329 = (state_14377[(12)]);
var inst_14329__$1 = (state_14377[(2)]);
var inst_14330 = cljs.core.get.call(null,inst_14329__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14331 = cljs.core.get.call(null,inst_14329__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14332 = cljs.core.get.call(null,inst_14329__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14377__$1 = (function (){var statearr_14392 = state_14377;
(statearr_14392[(9)] = inst_14330);

(statearr_14392[(13)] = inst_14331);

(statearr_14392[(12)] = inst_14329__$1);

return statearr_14392;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14377__$1,(22),inst_14332);
} else {
if((state_val_14378 === (31))){
var inst_14359 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14359)){
var statearr_14393_14452 = state_14377__$1;
(statearr_14393_14452[(1)] = (32));

} else {
var statearr_14394_14453 = state_14377__$1;
(statearr_14394_14453[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (32))){
var inst_14336 = (state_14377[(14)]);
var state_14377__$1 = state_14377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14377__$1,(35),out,inst_14336);
} else {
if((state_val_14378 === (33))){
var inst_14329 = (state_14377[(12)]);
var inst_14307 = inst_14329;
var state_14377__$1 = (function (){var statearr_14395 = state_14377;
(statearr_14395[(7)] = inst_14307);

return statearr_14395;
})();
var statearr_14396_14454 = state_14377__$1;
(statearr_14396_14454[(2)] = null);

(statearr_14396_14454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (13))){
var inst_14307 = (state_14377[(7)]);
var inst_14314 = inst_14307.cljs$lang$protocol_mask$partition0$;
var inst_14315 = (inst_14314 & (64));
var inst_14316 = inst_14307.cljs$core$ISeq$;
var inst_14317 = (inst_14315) || (inst_14316);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14317)){
var statearr_14397_14455 = state_14377__$1;
(statearr_14397_14455[(1)] = (16));

} else {
var statearr_14398_14456 = state_14377__$1;
(statearr_14398_14456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (22))){
var inst_14336 = (state_14377[(14)]);
var inst_14337 = (state_14377[(11)]);
var inst_14335 = (state_14377[(2)]);
var inst_14336__$1 = cljs.core.nth.call(null,inst_14335,(0),null);
var inst_14337__$1 = cljs.core.nth.call(null,inst_14335,(1),null);
var inst_14338 = (inst_14336__$1 == null);
var inst_14339 = cljs.core._EQ_.call(null,inst_14337__$1,change);
var inst_14340 = (inst_14338) || (inst_14339);
var state_14377__$1 = (function (){var statearr_14399 = state_14377;
(statearr_14399[(14)] = inst_14336__$1);

(statearr_14399[(11)] = inst_14337__$1);

return statearr_14399;
})();
if(cljs.core.truth_(inst_14340)){
var statearr_14400_14457 = state_14377__$1;
(statearr_14400_14457[(1)] = (23));

} else {
var statearr_14401_14458 = state_14377__$1;
(statearr_14401_14458[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (36))){
var inst_14329 = (state_14377[(12)]);
var inst_14307 = inst_14329;
var state_14377__$1 = (function (){var statearr_14402 = state_14377;
(statearr_14402[(7)] = inst_14307);

return statearr_14402;
})();
var statearr_14403_14459 = state_14377__$1;
(statearr_14403_14459[(2)] = null);

(statearr_14403_14459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (29))){
var inst_14351 = (state_14377[(10)]);
var state_14377__$1 = state_14377;
var statearr_14404_14460 = state_14377__$1;
(statearr_14404_14460[(2)] = inst_14351);

(statearr_14404_14460[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (6))){
var state_14377__$1 = state_14377;
var statearr_14405_14461 = state_14377__$1;
(statearr_14405_14461[(2)] = false);

(statearr_14405_14461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (28))){
var inst_14347 = (state_14377[(2)]);
var inst_14348 = calc_state.call(null);
var inst_14307 = inst_14348;
var state_14377__$1 = (function (){var statearr_14406 = state_14377;
(statearr_14406[(7)] = inst_14307);

(statearr_14406[(15)] = inst_14347);

return statearr_14406;
})();
var statearr_14407_14462 = state_14377__$1;
(statearr_14407_14462[(2)] = null);

(statearr_14407_14462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (25))){
var inst_14373 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
var statearr_14408_14463 = state_14377__$1;
(statearr_14408_14463[(2)] = inst_14373);

(statearr_14408_14463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (34))){
var inst_14371 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
var statearr_14409_14464 = state_14377__$1;
(statearr_14409_14464[(2)] = inst_14371);

(statearr_14409_14464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (17))){
var state_14377__$1 = state_14377;
var statearr_14410_14465 = state_14377__$1;
(statearr_14410_14465[(2)] = false);

(statearr_14410_14465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (3))){
var state_14377__$1 = state_14377;
var statearr_14411_14466 = state_14377__$1;
(statearr_14411_14466[(2)] = false);

(statearr_14411_14466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (12))){
var inst_14375 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14377__$1,inst_14375);
} else {
if((state_val_14378 === (2))){
var inst_14283 = (state_14377[(8)]);
var inst_14288 = inst_14283.cljs$lang$protocol_mask$partition0$;
var inst_14289 = (inst_14288 & (64));
var inst_14290 = inst_14283.cljs$core$ISeq$;
var inst_14291 = (inst_14289) || (inst_14290);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14291)){
var statearr_14412_14467 = state_14377__$1;
(statearr_14412_14467[(1)] = (5));

} else {
var statearr_14413_14468 = state_14377__$1;
(statearr_14413_14468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (23))){
var inst_14336 = (state_14377[(14)]);
var inst_14342 = (inst_14336 == null);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14342)){
var statearr_14414_14469 = state_14377__$1;
(statearr_14414_14469[(1)] = (26));

} else {
var statearr_14415_14470 = state_14377__$1;
(statearr_14415_14470[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (35))){
var inst_14362 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
if(cljs.core.truth_(inst_14362)){
var statearr_14416_14471 = state_14377__$1;
(statearr_14416_14471[(1)] = (36));

} else {
var statearr_14417_14472 = state_14377__$1;
(statearr_14417_14472[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (19))){
var inst_14307 = (state_14377[(7)]);
var inst_14326 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14307);
var state_14377__$1 = state_14377;
var statearr_14418_14473 = state_14377__$1;
(statearr_14418_14473[(2)] = inst_14326);

(statearr_14418_14473[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (11))){
var inst_14307 = (state_14377[(7)]);
var inst_14311 = (inst_14307 == null);
var inst_14312 = cljs.core.not.call(null,inst_14311);
var state_14377__$1 = state_14377;
if(inst_14312){
var statearr_14419_14474 = state_14377__$1;
(statearr_14419_14474[(1)] = (13));

} else {
var statearr_14420_14475 = state_14377__$1;
(statearr_14420_14475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (9))){
var inst_14283 = (state_14377[(8)]);
var state_14377__$1 = state_14377;
var statearr_14421_14476 = state_14377__$1;
(statearr_14421_14476[(2)] = inst_14283);

(statearr_14421_14476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (5))){
var state_14377__$1 = state_14377;
var statearr_14422_14477 = state_14377__$1;
(statearr_14422_14477[(2)] = true);

(statearr_14422_14477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (14))){
var state_14377__$1 = state_14377;
var statearr_14423_14478 = state_14377__$1;
(statearr_14423_14478[(2)] = false);

(statearr_14423_14478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (26))){
var inst_14337 = (state_14377[(11)]);
var inst_14344 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14337);
var state_14377__$1 = state_14377;
var statearr_14424_14479 = state_14377__$1;
(statearr_14424_14479[(2)] = inst_14344);

(statearr_14424_14479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (16))){
var state_14377__$1 = state_14377;
var statearr_14425_14480 = state_14377__$1;
(statearr_14425_14480[(2)] = true);

(statearr_14425_14480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (38))){
var inst_14367 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
var statearr_14426_14481 = state_14377__$1;
(statearr_14426_14481[(2)] = inst_14367);

(statearr_14426_14481[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (30))){
var inst_14330 = (state_14377[(9)]);
var inst_14331 = (state_14377[(13)]);
var inst_14337 = (state_14377[(11)]);
var inst_14354 = cljs.core.empty_QMARK_.call(null,inst_14330);
var inst_14355 = inst_14331.call(null,inst_14337);
var inst_14356 = cljs.core.not.call(null,inst_14355);
var inst_14357 = (inst_14354) && (inst_14356);
var state_14377__$1 = state_14377;
var statearr_14427_14482 = state_14377__$1;
(statearr_14427_14482[(2)] = inst_14357);

(statearr_14427_14482[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (10))){
var inst_14283 = (state_14377[(8)]);
var inst_14303 = (state_14377[(2)]);
var inst_14304 = cljs.core.get.call(null,inst_14303,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14305 = cljs.core.get.call(null,inst_14303,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14306 = cljs.core.get.call(null,inst_14303,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14307 = inst_14283;
var state_14377__$1 = (function (){var statearr_14428 = state_14377;
(statearr_14428[(7)] = inst_14307);

(statearr_14428[(16)] = inst_14306);

(statearr_14428[(17)] = inst_14305);

(statearr_14428[(18)] = inst_14304);

return statearr_14428;
})();
var statearr_14429_14483 = state_14377__$1;
(statearr_14429_14483[(2)] = null);

(statearr_14429_14483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (18))){
var inst_14321 = (state_14377[(2)]);
var state_14377__$1 = state_14377;
var statearr_14430_14484 = state_14377__$1;
(statearr_14430_14484[(2)] = inst_14321);

(statearr_14430_14484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (37))){
var state_14377__$1 = state_14377;
var statearr_14431_14485 = state_14377__$1;
(statearr_14431_14485[(2)] = null);

(statearr_14431_14485[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14378 === (8))){
var inst_14283 = (state_14377[(8)]);
var inst_14300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14283);
var state_14377__$1 = state_14377;
var statearr_14432_14486 = state_14377__$1;
(statearr_14432_14486[(2)] = inst_14300);

(statearr_14432_14486[(1)] = (10));


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
});})(c__12727__auto___14440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12615__auto__,c__12727__auto___14440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12616__auto__ = null;
var cljs$core$async$mix_$_state_machine__12616__auto____0 = (function (){
var statearr_14436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14436[(0)] = cljs$core$async$mix_$_state_machine__12616__auto__);

(statearr_14436[(1)] = (1));

return statearr_14436;
});
var cljs$core$async$mix_$_state_machine__12616__auto____1 = (function (state_14377){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_14377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14437){if((e14437 instanceof Object)){
var ex__12619__auto__ = e14437;
var statearr_14438_14487 = state_14377;
(statearr_14438_14487[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14488 = state_14377;
state_14377 = G__14488;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12616__auto__ = function(state_14377){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12616__auto____1.call(this,state_14377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12616__auto____0;
cljs$core$async$mix_$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12616__auto____1;
return cljs$core$async$mix_$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12729__auto__ = (function (){var statearr_14439 = f__12728__auto__.call(null);
(statearr_14439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14440);

return statearr_14439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14440,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14489 = [];
var len__5726__auto___14492 = arguments.length;
var i__5727__auto___14493 = (0);
while(true){
if((i__5727__auto___14493 < len__5726__auto___14492)){
args14489.push((arguments[i__5727__auto___14493]));

var G__14494 = (i__5727__auto___14493 + (1));
i__5727__auto___14493 = G__14494;
continue;
} else {
}
break;
}

var G__14491 = args14489.length;
switch (G__14491) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14489.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14497 = [];
var len__5726__auto___14622 = arguments.length;
var i__5727__auto___14623 = (0);
while(true){
if((i__5727__auto___14623 < len__5726__auto___14622)){
args14497.push((arguments[i__5727__auto___14623]));

var G__14624 = (i__5727__auto___14623 + (1));
i__5727__auto___14623 = G__14624;
continue;
} else {
}
break;
}

var G__14499 = args14497.length;
switch (G__14499) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14497.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__14496_SHARP_){
if(cljs.core.truth_(p1__14496_SHARP_.call(null,topic))){
return p1__14496_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14496_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14500 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14501){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14501 = meta14501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14502,meta14501__$1){
var self__ = this;
var _14502__$1 = this;
return (new cljs.core.async.t_cljs$core$async14500(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14501__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14502){
var self__ = this;
var _14502__$1 = this;
return self__.meta14501;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14501","meta14501",-422570366,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14500";

cljs.core.async.t_cljs$core$async14500.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async14500");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14500 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14500(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14501){
return (new cljs.core.async.t_cljs$core$async14500(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14501));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14500(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12727__auto___14626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14626,mults,ensure_mult,p){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14626,mults,ensure_mult,p){
return (function (state_14574){
var state_val_14575 = (state_14574[(1)]);
if((state_val_14575 === (7))){
var inst_14570 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14576_14627 = state_14574__$1;
(statearr_14576_14627[(2)] = inst_14570);

(statearr_14576_14627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (20))){
var state_14574__$1 = state_14574;
var statearr_14577_14628 = state_14574__$1;
(statearr_14577_14628[(2)] = null);

(statearr_14577_14628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (1))){
var state_14574__$1 = state_14574;
var statearr_14578_14629 = state_14574__$1;
(statearr_14578_14629[(2)] = null);

(statearr_14578_14629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (24))){
var inst_14553 = (state_14574[(7)]);
var inst_14562 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14553);
var state_14574__$1 = state_14574;
var statearr_14579_14630 = state_14574__$1;
(statearr_14579_14630[(2)] = inst_14562);

(statearr_14579_14630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (4))){
var inst_14505 = (state_14574[(8)]);
var inst_14505__$1 = (state_14574[(2)]);
var inst_14506 = (inst_14505__$1 == null);
var state_14574__$1 = (function (){var statearr_14580 = state_14574;
(statearr_14580[(8)] = inst_14505__$1);

return statearr_14580;
})();
if(cljs.core.truth_(inst_14506)){
var statearr_14581_14631 = state_14574__$1;
(statearr_14581_14631[(1)] = (5));

} else {
var statearr_14582_14632 = state_14574__$1;
(statearr_14582_14632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (15))){
var inst_14547 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14583_14633 = state_14574__$1;
(statearr_14583_14633[(2)] = inst_14547);

(statearr_14583_14633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (21))){
var inst_14567 = (state_14574[(2)]);
var state_14574__$1 = (function (){var statearr_14584 = state_14574;
(statearr_14584[(9)] = inst_14567);

return statearr_14584;
})();
var statearr_14585_14634 = state_14574__$1;
(statearr_14585_14634[(2)] = null);

(statearr_14585_14634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (13))){
var inst_14529 = (state_14574[(10)]);
var inst_14531 = cljs.core.chunked_seq_QMARK_.call(null,inst_14529);
var state_14574__$1 = state_14574;
if(inst_14531){
var statearr_14586_14635 = state_14574__$1;
(statearr_14586_14635[(1)] = (16));

} else {
var statearr_14587_14636 = state_14574__$1;
(statearr_14587_14636[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (22))){
var inst_14559 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14559)){
var statearr_14588_14637 = state_14574__$1;
(statearr_14588_14637[(1)] = (23));

} else {
var statearr_14589_14638 = state_14574__$1;
(statearr_14589_14638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (6))){
var inst_14505 = (state_14574[(8)]);
var inst_14553 = (state_14574[(7)]);
var inst_14555 = (state_14574[(11)]);
var inst_14553__$1 = topic_fn.call(null,inst_14505);
var inst_14554 = cljs.core.deref.call(null,mults);
var inst_14555__$1 = cljs.core.get.call(null,inst_14554,inst_14553__$1);
var state_14574__$1 = (function (){var statearr_14590 = state_14574;
(statearr_14590[(7)] = inst_14553__$1);

(statearr_14590[(11)] = inst_14555__$1);

return statearr_14590;
})();
if(cljs.core.truth_(inst_14555__$1)){
var statearr_14591_14639 = state_14574__$1;
(statearr_14591_14639[(1)] = (19));

} else {
var statearr_14592_14640 = state_14574__$1;
(statearr_14592_14640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (25))){
var inst_14564 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14593_14641 = state_14574__$1;
(statearr_14593_14641[(2)] = inst_14564);

(statearr_14593_14641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (17))){
var inst_14529 = (state_14574[(10)]);
var inst_14538 = cljs.core.first.call(null,inst_14529);
var inst_14539 = cljs.core.async.muxch_STAR_.call(null,inst_14538);
var inst_14540 = cljs.core.async.close_BANG_.call(null,inst_14539);
var inst_14541 = cljs.core.next.call(null,inst_14529);
var inst_14515 = inst_14541;
var inst_14516 = null;
var inst_14517 = (0);
var inst_14518 = (0);
var state_14574__$1 = (function (){var statearr_14594 = state_14574;
(statearr_14594[(12)] = inst_14518);

(statearr_14594[(13)] = inst_14540);

(statearr_14594[(14)] = inst_14516);

(statearr_14594[(15)] = inst_14515);

(statearr_14594[(16)] = inst_14517);

return statearr_14594;
})();
var statearr_14595_14642 = state_14574__$1;
(statearr_14595_14642[(2)] = null);

(statearr_14595_14642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (3))){
var inst_14572 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14574__$1,inst_14572);
} else {
if((state_val_14575 === (12))){
var inst_14549 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14596_14643 = state_14574__$1;
(statearr_14596_14643[(2)] = inst_14549);

(statearr_14596_14643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (2))){
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14574__$1,(4),ch);
} else {
if((state_val_14575 === (23))){
var state_14574__$1 = state_14574;
var statearr_14597_14644 = state_14574__$1;
(statearr_14597_14644[(2)] = null);

(statearr_14597_14644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (19))){
var inst_14505 = (state_14574[(8)]);
var inst_14555 = (state_14574[(11)]);
var inst_14557 = cljs.core.async.muxch_STAR_.call(null,inst_14555);
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14574__$1,(22),inst_14557,inst_14505);
} else {
if((state_val_14575 === (11))){
var inst_14529 = (state_14574[(10)]);
var inst_14515 = (state_14574[(15)]);
var inst_14529__$1 = cljs.core.seq.call(null,inst_14515);
var state_14574__$1 = (function (){var statearr_14598 = state_14574;
(statearr_14598[(10)] = inst_14529__$1);

return statearr_14598;
})();
if(inst_14529__$1){
var statearr_14599_14645 = state_14574__$1;
(statearr_14599_14645[(1)] = (13));

} else {
var statearr_14600_14646 = state_14574__$1;
(statearr_14600_14646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (9))){
var inst_14551 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14601_14647 = state_14574__$1;
(statearr_14601_14647[(2)] = inst_14551);

(statearr_14601_14647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (5))){
var inst_14512 = cljs.core.deref.call(null,mults);
var inst_14513 = cljs.core.vals.call(null,inst_14512);
var inst_14514 = cljs.core.seq.call(null,inst_14513);
var inst_14515 = inst_14514;
var inst_14516 = null;
var inst_14517 = (0);
var inst_14518 = (0);
var state_14574__$1 = (function (){var statearr_14602 = state_14574;
(statearr_14602[(12)] = inst_14518);

(statearr_14602[(14)] = inst_14516);

(statearr_14602[(15)] = inst_14515);

(statearr_14602[(16)] = inst_14517);

return statearr_14602;
})();
var statearr_14603_14648 = state_14574__$1;
(statearr_14603_14648[(2)] = null);

(statearr_14603_14648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (14))){
var state_14574__$1 = state_14574;
var statearr_14607_14649 = state_14574__$1;
(statearr_14607_14649[(2)] = null);

(statearr_14607_14649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (16))){
var inst_14529 = (state_14574[(10)]);
var inst_14533 = cljs.core.chunk_first.call(null,inst_14529);
var inst_14534 = cljs.core.chunk_rest.call(null,inst_14529);
var inst_14535 = cljs.core.count.call(null,inst_14533);
var inst_14515 = inst_14534;
var inst_14516 = inst_14533;
var inst_14517 = inst_14535;
var inst_14518 = (0);
var state_14574__$1 = (function (){var statearr_14608 = state_14574;
(statearr_14608[(12)] = inst_14518);

(statearr_14608[(14)] = inst_14516);

(statearr_14608[(15)] = inst_14515);

(statearr_14608[(16)] = inst_14517);

return statearr_14608;
})();
var statearr_14609_14650 = state_14574__$1;
(statearr_14609_14650[(2)] = null);

(statearr_14609_14650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (10))){
var inst_14518 = (state_14574[(12)]);
var inst_14516 = (state_14574[(14)]);
var inst_14515 = (state_14574[(15)]);
var inst_14517 = (state_14574[(16)]);
var inst_14523 = cljs.core._nth.call(null,inst_14516,inst_14518);
var inst_14524 = cljs.core.async.muxch_STAR_.call(null,inst_14523);
var inst_14525 = cljs.core.async.close_BANG_.call(null,inst_14524);
var inst_14526 = (inst_14518 + (1));
var tmp14604 = inst_14516;
var tmp14605 = inst_14515;
var tmp14606 = inst_14517;
var inst_14515__$1 = tmp14605;
var inst_14516__$1 = tmp14604;
var inst_14517__$1 = tmp14606;
var inst_14518__$1 = inst_14526;
var state_14574__$1 = (function (){var statearr_14610 = state_14574;
(statearr_14610[(12)] = inst_14518__$1);

(statearr_14610[(17)] = inst_14525);

(statearr_14610[(14)] = inst_14516__$1);

(statearr_14610[(15)] = inst_14515__$1);

(statearr_14610[(16)] = inst_14517__$1);

return statearr_14610;
})();
var statearr_14611_14651 = state_14574__$1;
(statearr_14611_14651[(2)] = null);

(statearr_14611_14651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (18))){
var inst_14544 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14612_14652 = state_14574__$1;
(statearr_14612_14652[(2)] = inst_14544);

(statearr_14612_14652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (8))){
var inst_14518 = (state_14574[(12)]);
var inst_14517 = (state_14574[(16)]);
var inst_14520 = (inst_14518 < inst_14517);
var inst_14521 = inst_14520;
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14521)){
var statearr_14613_14653 = state_14574__$1;
(statearr_14613_14653[(1)] = (10));

} else {
var statearr_14614_14654 = state_14574__$1;
(statearr_14614_14654[(1)] = (11));

}

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
}
}
}
}
});})(c__12727__auto___14626,mults,ensure_mult,p))
;
return ((function (switch__12615__auto__,c__12727__auto___14626,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_14618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14618[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_14618[(1)] = (1));

return statearr_14618;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_14574){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_14574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14619){if((e14619 instanceof Object)){
var ex__12619__auto__ = e14619;
var statearr_14620_14655 = state_14574;
(statearr_14620_14655[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14656 = state_14574;
state_14574 = G__14656;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_14574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_14574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14626,mults,ensure_mult,p))
})();
var state__12729__auto__ = (function (){var statearr_14621 = f__12728__auto__.call(null);
(statearr_14621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14626);

return statearr_14621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14626,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14657 = [];
var len__5726__auto___14660 = arguments.length;
var i__5727__auto___14661 = (0);
while(true){
if((i__5727__auto___14661 < len__5726__auto___14660)){
args14657.push((arguments[i__5727__auto___14661]));

var G__14662 = (i__5727__auto___14661 + (1));
i__5727__auto___14661 = G__14662;
continue;
} else {
}
break;
}

var G__14659 = args14657.length;
switch (G__14659) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14657.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14664 = [];
var len__5726__auto___14667 = arguments.length;
var i__5727__auto___14668 = (0);
while(true){
if((i__5727__auto___14668 < len__5726__auto___14667)){
args14664.push((arguments[i__5727__auto___14668]));

var G__14669 = (i__5727__auto___14668 + (1));
i__5727__auto___14668 = G__14669;
continue;
} else {
}
break;
}

var G__14666 = args14664.length;
switch (G__14666) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14664.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14671 = [];
var len__5726__auto___14742 = arguments.length;
var i__5727__auto___14743 = (0);
while(true){
if((i__5727__auto___14743 < len__5726__auto___14742)){
args14671.push((arguments[i__5727__auto___14743]));

var G__14744 = (i__5727__auto___14743 + (1));
i__5727__auto___14743 = G__14744;
continue;
} else {
}
break;
}

var G__14673 = args14671.length;
switch (G__14673) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14671.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12727__auto___14746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14712){
var state_val_14713 = (state_14712[(1)]);
if((state_val_14713 === (7))){
var state_14712__$1 = state_14712;
var statearr_14714_14747 = state_14712__$1;
(statearr_14714_14747[(2)] = null);

(statearr_14714_14747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (1))){
var state_14712__$1 = state_14712;
var statearr_14715_14748 = state_14712__$1;
(statearr_14715_14748[(2)] = null);

(statearr_14715_14748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (4))){
var inst_14676 = (state_14712[(7)]);
var inst_14678 = (inst_14676 < cnt);
var state_14712__$1 = state_14712;
if(cljs.core.truth_(inst_14678)){
var statearr_14716_14749 = state_14712__$1;
(statearr_14716_14749[(1)] = (6));

} else {
var statearr_14717_14750 = state_14712__$1;
(statearr_14717_14750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (15))){
var inst_14708 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
var statearr_14718_14751 = state_14712__$1;
(statearr_14718_14751[(2)] = inst_14708);

(statearr_14718_14751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (13))){
var inst_14701 = cljs.core.async.close_BANG_.call(null,out);
var state_14712__$1 = state_14712;
var statearr_14719_14752 = state_14712__$1;
(statearr_14719_14752[(2)] = inst_14701);

(statearr_14719_14752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (6))){
var state_14712__$1 = state_14712;
var statearr_14720_14753 = state_14712__$1;
(statearr_14720_14753[(2)] = null);

(statearr_14720_14753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (3))){
var inst_14710 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14712__$1,inst_14710);
} else {
if((state_val_14713 === (12))){
var inst_14698 = (state_14712[(8)]);
var inst_14698__$1 = (state_14712[(2)]);
var inst_14699 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14698__$1);
var state_14712__$1 = (function (){var statearr_14721 = state_14712;
(statearr_14721[(8)] = inst_14698__$1);

return statearr_14721;
})();
if(cljs.core.truth_(inst_14699)){
var statearr_14722_14754 = state_14712__$1;
(statearr_14722_14754[(1)] = (13));

} else {
var statearr_14723_14755 = state_14712__$1;
(statearr_14723_14755[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (2))){
var inst_14675 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14676 = (0);
var state_14712__$1 = (function (){var statearr_14724 = state_14712;
(statearr_14724[(9)] = inst_14675);

(statearr_14724[(7)] = inst_14676);

return statearr_14724;
})();
var statearr_14725_14756 = state_14712__$1;
(statearr_14725_14756[(2)] = null);

(statearr_14725_14756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (11))){
var inst_14676 = (state_14712[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14712,(10),Object,null,(9));
var inst_14685 = chs__$1.call(null,inst_14676);
var inst_14686 = done.call(null,inst_14676);
var inst_14687 = cljs.core.async.take_BANG_.call(null,inst_14685,inst_14686);
var state_14712__$1 = state_14712;
var statearr_14726_14757 = state_14712__$1;
(statearr_14726_14757[(2)] = inst_14687);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (9))){
var inst_14676 = (state_14712[(7)]);
var inst_14689 = (state_14712[(2)]);
var inst_14690 = (inst_14676 + (1));
var inst_14676__$1 = inst_14690;
var state_14712__$1 = (function (){var statearr_14727 = state_14712;
(statearr_14727[(7)] = inst_14676__$1);

(statearr_14727[(10)] = inst_14689);

return statearr_14727;
})();
var statearr_14728_14758 = state_14712__$1;
(statearr_14728_14758[(2)] = null);

(statearr_14728_14758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (5))){
var inst_14696 = (state_14712[(2)]);
var state_14712__$1 = (function (){var statearr_14729 = state_14712;
(statearr_14729[(11)] = inst_14696);

return statearr_14729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14712__$1,(12),dchan);
} else {
if((state_val_14713 === (14))){
var inst_14698 = (state_14712[(8)]);
var inst_14703 = cljs.core.apply.call(null,f,inst_14698);
var state_14712__$1 = state_14712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14712__$1,(16),out,inst_14703);
} else {
if((state_val_14713 === (16))){
var inst_14705 = (state_14712[(2)]);
var state_14712__$1 = (function (){var statearr_14730 = state_14712;
(statearr_14730[(12)] = inst_14705);

return statearr_14730;
})();
var statearr_14731_14759 = state_14712__$1;
(statearr_14731_14759[(2)] = null);

(statearr_14731_14759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (10))){
var inst_14680 = (state_14712[(2)]);
var inst_14681 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14712__$1 = (function (){var statearr_14732 = state_14712;
(statearr_14732[(13)] = inst_14680);

return statearr_14732;
})();
var statearr_14733_14760 = state_14712__$1;
(statearr_14733_14760[(2)] = inst_14681);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14712__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14713 === (8))){
var inst_14694 = (state_14712[(2)]);
var state_14712__$1 = state_14712;
var statearr_14734_14761 = state_14712__$1;
(statearr_14734_14761[(2)] = inst_14694);

(statearr_14734_14761[(1)] = (5));


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
});})(c__12727__auto___14746,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12615__auto__,c__12727__auto___14746,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_14738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14738[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_14738[(1)] = (1));

return statearr_14738;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_14712){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_14712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14739){if((e14739 instanceof Object)){
var ex__12619__auto__ = e14739;
var statearr_14740_14762 = state_14712;
(statearr_14740_14762[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14763 = state_14712;
state_14712 = G__14763;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_14712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_14712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14746,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12729__auto__ = (function (){var statearr_14741 = f__12728__auto__.call(null);
(statearr_14741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14746);

return statearr_14741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14746,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14765 = [];
var len__5726__auto___14821 = arguments.length;
var i__5727__auto___14822 = (0);
while(true){
if((i__5727__auto___14822 < len__5726__auto___14821)){
args14765.push((arguments[i__5727__auto___14822]));

var G__14823 = (i__5727__auto___14822 + (1));
i__5727__auto___14822 = G__14823;
continue;
} else {
}
break;
}

var G__14767 = args14765.length;
switch (G__14767) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14765.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12727__auto___14825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14825,out){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14825,out){
return (function (state_14797){
var state_val_14798 = (state_14797[(1)]);
if((state_val_14798 === (7))){
var inst_14777 = (state_14797[(7)]);
var inst_14776 = (state_14797[(8)]);
var inst_14776__$1 = (state_14797[(2)]);
var inst_14777__$1 = cljs.core.nth.call(null,inst_14776__$1,(0),null);
var inst_14778 = cljs.core.nth.call(null,inst_14776__$1,(1),null);
var inst_14779 = (inst_14777__$1 == null);
var state_14797__$1 = (function (){var statearr_14799 = state_14797;
(statearr_14799[(7)] = inst_14777__$1);

(statearr_14799[(8)] = inst_14776__$1);

(statearr_14799[(9)] = inst_14778);

return statearr_14799;
})();
if(cljs.core.truth_(inst_14779)){
var statearr_14800_14826 = state_14797__$1;
(statearr_14800_14826[(1)] = (8));

} else {
var statearr_14801_14827 = state_14797__$1;
(statearr_14801_14827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (1))){
var inst_14768 = cljs.core.vec.call(null,chs);
var inst_14769 = inst_14768;
var state_14797__$1 = (function (){var statearr_14802 = state_14797;
(statearr_14802[(10)] = inst_14769);

return statearr_14802;
})();
var statearr_14803_14828 = state_14797__$1;
(statearr_14803_14828[(2)] = null);

(statearr_14803_14828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (4))){
var inst_14769 = (state_14797[(10)]);
var state_14797__$1 = state_14797;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14797__$1,(7),inst_14769);
} else {
if((state_val_14798 === (6))){
var inst_14793 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14804_14829 = state_14797__$1;
(statearr_14804_14829[(2)] = inst_14793);

(statearr_14804_14829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (3))){
var inst_14795 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14797__$1,inst_14795);
} else {
if((state_val_14798 === (2))){
var inst_14769 = (state_14797[(10)]);
var inst_14771 = cljs.core.count.call(null,inst_14769);
var inst_14772 = (inst_14771 > (0));
var state_14797__$1 = state_14797;
if(cljs.core.truth_(inst_14772)){
var statearr_14806_14830 = state_14797__$1;
(statearr_14806_14830[(1)] = (4));

} else {
var statearr_14807_14831 = state_14797__$1;
(statearr_14807_14831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (11))){
var inst_14769 = (state_14797[(10)]);
var inst_14786 = (state_14797[(2)]);
var tmp14805 = inst_14769;
var inst_14769__$1 = tmp14805;
var state_14797__$1 = (function (){var statearr_14808 = state_14797;
(statearr_14808[(10)] = inst_14769__$1);

(statearr_14808[(11)] = inst_14786);

return statearr_14808;
})();
var statearr_14809_14832 = state_14797__$1;
(statearr_14809_14832[(2)] = null);

(statearr_14809_14832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (9))){
var inst_14777 = (state_14797[(7)]);
var state_14797__$1 = state_14797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14797__$1,(11),out,inst_14777);
} else {
if((state_val_14798 === (5))){
var inst_14791 = cljs.core.async.close_BANG_.call(null,out);
var state_14797__$1 = state_14797;
var statearr_14810_14833 = state_14797__$1;
(statearr_14810_14833[(2)] = inst_14791);

(statearr_14810_14833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (10))){
var inst_14789 = (state_14797[(2)]);
var state_14797__$1 = state_14797;
var statearr_14811_14834 = state_14797__$1;
(statearr_14811_14834[(2)] = inst_14789);

(statearr_14811_14834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14798 === (8))){
var inst_14769 = (state_14797[(10)]);
var inst_14777 = (state_14797[(7)]);
var inst_14776 = (state_14797[(8)]);
var inst_14778 = (state_14797[(9)]);
var inst_14781 = (function (){var cs = inst_14769;
var vec__14774 = inst_14776;
var v = inst_14777;
var c = inst_14778;
return ((function (cs,vec__14774,v,c,inst_14769,inst_14777,inst_14776,inst_14778,state_val_14798,c__12727__auto___14825,out){
return (function (p1__14764_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14764_SHARP_);
});
;})(cs,vec__14774,v,c,inst_14769,inst_14777,inst_14776,inst_14778,state_val_14798,c__12727__auto___14825,out))
})();
var inst_14782 = cljs.core.filterv.call(null,inst_14781,inst_14769);
var inst_14769__$1 = inst_14782;
var state_14797__$1 = (function (){var statearr_14812 = state_14797;
(statearr_14812[(10)] = inst_14769__$1);

return statearr_14812;
})();
var statearr_14813_14835 = state_14797__$1;
(statearr_14813_14835[(2)] = null);

(statearr_14813_14835[(1)] = (2));


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
});})(c__12727__auto___14825,out))
;
return ((function (switch__12615__auto__,c__12727__auto___14825,out){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_14817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14817[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_14817[(1)] = (1));

return statearr_14817;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_14797){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_14797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14818){if((e14818 instanceof Object)){
var ex__12619__auto__ = e14818;
var statearr_14819_14836 = state_14797;
(statearr_14819_14836[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14837 = state_14797;
state_14797 = G__14837;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_14797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_14797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14825,out))
})();
var state__12729__auto__ = (function (){var statearr_14820 = f__12728__auto__.call(null);
(statearr_14820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14825);

return statearr_14820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14825,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14838 = [];
var len__5726__auto___14887 = arguments.length;
var i__5727__auto___14888 = (0);
while(true){
if((i__5727__auto___14888 < len__5726__auto___14887)){
args14838.push((arguments[i__5727__auto___14888]));

var G__14889 = (i__5727__auto___14888 + (1));
i__5727__auto___14888 = G__14889;
continue;
} else {
}
break;
}

var G__14840 = args14838.length;
switch (G__14840) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14838.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12727__auto___14891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14891,out){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14891,out){
return (function (state_14864){
var state_val_14865 = (state_14864[(1)]);
if((state_val_14865 === (7))){
var inst_14846 = (state_14864[(7)]);
var inst_14846__$1 = (state_14864[(2)]);
var inst_14847 = (inst_14846__$1 == null);
var inst_14848 = cljs.core.not.call(null,inst_14847);
var state_14864__$1 = (function (){var statearr_14866 = state_14864;
(statearr_14866[(7)] = inst_14846__$1);

return statearr_14866;
})();
if(inst_14848){
var statearr_14867_14892 = state_14864__$1;
(statearr_14867_14892[(1)] = (8));

} else {
var statearr_14868_14893 = state_14864__$1;
(statearr_14868_14893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (1))){
var inst_14841 = (0);
var state_14864__$1 = (function (){var statearr_14869 = state_14864;
(statearr_14869[(8)] = inst_14841);

return statearr_14869;
})();
var statearr_14870_14894 = state_14864__$1;
(statearr_14870_14894[(2)] = null);

(statearr_14870_14894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (4))){
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14864__$1,(7),ch);
} else {
if((state_val_14865 === (6))){
var inst_14859 = (state_14864[(2)]);
var state_14864__$1 = state_14864;
var statearr_14871_14895 = state_14864__$1;
(statearr_14871_14895[(2)] = inst_14859);

(statearr_14871_14895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (3))){
var inst_14861 = (state_14864[(2)]);
var inst_14862 = cljs.core.async.close_BANG_.call(null,out);
var state_14864__$1 = (function (){var statearr_14872 = state_14864;
(statearr_14872[(9)] = inst_14861);

return statearr_14872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14864__$1,inst_14862);
} else {
if((state_val_14865 === (2))){
var inst_14841 = (state_14864[(8)]);
var inst_14843 = (inst_14841 < n);
var state_14864__$1 = state_14864;
if(cljs.core.truth_(inst_14843)){
var statearr_14873_14896 = state_14864__$1;
(statearr_14873_14896[(1)] = (4));

} else {
var statearr_14874_14897 = state_14864__$1;
(statearr_14874_14897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (11))){
var inst_14841 = (state_14864[(8)]);
var inst_14851 = (state_14864[(2)]);
var inst_14852 = (inst_14841 + (1));
var inst_14841__$1 = inst_14852;
var state_14864__$1 = (function (){var statearr_14875 = state_14864;
(statearr_14875[(10)] = inst_14851);

(statearr_14875[(8)] = inst_14841__$1);

return statearr_14875;
})();
var statearr_14876_14898 = state_14864__$1;
(statearr_14876_14898[(2)] = null);

(statearr_14876_14898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (9))){
var state_14864__$1 = state_14864;
var statearr_14877_14899 = state_14864__$1;
(statearr_14877_14899[(2)] = null);

(statearr_14877_14899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (5))){
var state_14864__$1 = state_14864;
var statearr_14878_14900 = state_14864__$1;
(statearr_14878_14900[(2)] = null);

(statearr_14878_14900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (10))){
var inst_14856 = (state_14864[(2)]);
var state_14864__$1 = state_14864;
var statearr_14879_14901 = state_14864__$1;
(statearr_14879_14901[(2)] = inst_14856);

(statearr_14879_14901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14865 === (8))){
var inst_14846 = (state_14864[(7)]);
var state_14864__$1 = state_14864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14864__$1,(11),out,inst_14846);
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
});})(c__12727__auto___14891,out))
;
return ((function (switch__12615__auto__,c__12727__auto___14891,out){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_14883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14883[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_14883[(1)] = (1));

return statearr_14883;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_14864){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_14864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14884){if((e14884 instanceof Object)){
var ex__12619__auto__ = e14884;
var statearr_14885_14902 = state_14864;
(statearr_14885_14902[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14903 = state_14864;
state_14864 = G__14903;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_14864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_14864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14891,out))
})();
var state__12729__auto__ = (function (){var statearr_14886 = f__12728__auto__.call(null);
(statearr_14886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14891);

return statearr_14886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14891,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14911 = (function (map_LT_,f,ch,meta14912){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14912 = meta14912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14913,meta14912__$1){
var self__ = this;
var _14913__$1 = this;
return (new cljs.core.async.t_cljs$core$async14911(self__.map_LT_,self__.f,self__.ch,meta14912__$1));
});

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14913){
var self__ = this;
var _14913__$1 = this;
return self__.meta14912;
});

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14914 = (function (map_LT_,f,ch,meta14912,_,fn1,meta14915){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14912 = meta14912;
this._ = _;
this.fn1 = fn1;
this.meta14915 = meta14915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14916,meta14915__$1){
var self__ = this;
var _14916__$1 = this;
return (new cljs.core.async.t_cljs$core$async14914(self__.map_LT_,self__.f,self__.ch,self__.meta14912,self__._,self__.fn1,meta14915__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14916){
var self__ = this;
var _14916__$1 = this;
return self__.meta14915;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14904_SHARP_){
return f1.call(null,(((p1__14904_SHARP_ == null))?null:self__.f.call(null,p1__14904_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14914.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14912","meta14912",-428267042,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14911","cljs.core.async/t_cljs$core$async14911",-925699276,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14915","meta14915",1477335328,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14914";

cljs.core.async.t_cljs$core$async14914.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async14914");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14914 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14914(map_LT___$1,f__$1,ch__$1,meta14912__$1,___$2,fn1__$1,meta14915){
return (new cljs.core.async.t_cljs$core$async14914(map_LT___$1,f__$1,ch__$1,meta14912__$1,___$2,fn1__$1,meta14915));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14914(self__.map_LT_,self__.f,self__.ch,self__.meta14912,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14912","meta14912",-428267042,null)], null);
});

cljs.core.async.t_cljs$core$async14911.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14911";

cljs.core.async.t_cljs$core$async14911.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async14911");
});

cljs.core.async.__GT_t_cljs$core$async14911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14911(map_LT___$1,f__$1,ch__$1,meta14912){
return (new cljs.core.async.t_cljs$core$async14911(map_LT___$1,f__$1,ch__$1,meta14912));
});

}

return (new cljs.core.async.t_cljs$core$async14911(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14920 = (function (map_GT_,f,ch,meta14921){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14921 = meta14921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14922,meta14921__$1){
var self__ = this;
var _14922__$1 = this;
return (new cljs.core.async.t_cljs$core$async14920(self__.map_GT_,self__.f,self__.ch,meta14921__$1));
});

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14922){
var self__ = this;
var _14922__$1 = this;
return self__.meta14921;
});

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14921","meta14921",-1285276348,null)], null);
});

cljs.core.async.t_cljs$core$async14920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14920";

cljs.core.async.t_cljs$core$async14920.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async14920");
});

cljs.core.async.__GT_t_cljs$core$async14920 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14920(map_GT___$1,f__$1,ch__$1,meta14921){
return (new cljs.core.async.t_cljs$core$async14920(map_GT___$1,f__$1,ch__$1,meta14921));
});

}

return (new cljs.core.async.t_cljs$core$async14920(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14926 = (function (filter_GT_,p,ch,meta14927){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14927 = meta14927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14928,meta14927__$1){
var self__ = this;
var _14928__$1 = this;
return (new cljs.core.async.t_cljs$core$async14926(self__.filter_GT_,self__.p,self__.ch,meta14927__$1));
});

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14928){
var self__ = this;
var _14928__$1 = this;
return self__.meta14927;
});

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14926.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14927","meta14927",1699253856,null)], null);
});

cljs.core.async.t_cljs$core$async14926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14926";

cljs.core.async.t_cljs$core$async14926.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async14926");
});

cljs.core.async.__GT_t_cljs$core$async14926 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14926(filter_GT___$1,p__$1,ch__$1,meta14927){
return (new cljs.core.async.t_cljs$core$async14926(filter_GT___$1,p__$1,ch__$1,meta14927));
});

}

return (new cljs.core.async.t_cljs$core$async14926(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14929 = [];
var len__5726__auto___14973 = arguments.length;
var i__5727__auto___14974 = (0);
while(true){
if((i__5727__auto___14974 < len__5726__auto___14973)){
args14929.push((arguments[i__5727__auto___14974]));

var G__14975 = (i__5727__auto___14974 + (1));
i__5727__auto___14974 = G__14975;
continue;
} else {
}
break;
}

var G__14931 = args14929.length;
switch (G__14931) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14929.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12727__auto___14977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___14977,out){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___14977,out){
return (function (state_14952){
var state_val_14953 = (state_14952[(1)]);
if((state_val_14953 === (7))){
var inst_14948 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14954_14978 = state_14952__$1;
(statearr_14954_14978[(2)] = inst_14948);

(statearr_14954_14978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (1))){
var state_14952__$1 = state_14952;
var statearr_14955_14979 = state_14952__$1;
(statearr_14955_14979[(2)] = null);

(statearr_14955_14979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (4))){
var inst_14934 = (state_14952[(7)]);
var inst_14934__$1 = (state_14952[(2)]);
var inst_14935 = (inst_14934__$1 == null);
var state_14952__$1 = (function (){var statearr_14956 = state_14952;
(statearr_14956[(7)] = inst_14934__$1);

return statearr_14956;
})();
if(cljs.core.truth_(inst_14935)){
var statearr_14957_14980 = state_14952__$1;
(statearr_14957_14980[(1)] = (5));

} else {
var statearr_14958_14981 = state_14952__$1;
(statearr_14958_14981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (6))){
var inst_14934 = (state_14952[(7)]);
var inst_14939 = p.call(null,inst_14934);
var state_14952__$1 = state_14952;
if(cljs.core.truth_(inst_14939)){
var statearr_14959_14982 = state_14952__$1;
(statearr_14959_14982[(1)] = (8));

} else {
var statearr_14960_14983 = state_14952__$1;
(statearr_14960_14983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (3))){
var inst_14950 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14952__$1,inst_14950);
} else {
if((state_val_14953 === (2))){
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14952__$1,(4),ch);
} else {
if((state_val_14953 === (11))){
var inst_14942 = (state_14952[(2)]);
var state_14952__$1 = state_14952;
var statearr_14961_14984 = state_14952__$1;
(statearr_14961_14984[(2)] = inst_14942);

(statearr_14961_14984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (9))){
var state_14952__$1 = state_14952;
var statearr_14962_14985 = state_14952__$1;
(statearr_14962_14985[(2)] = null);

(statearr_14962_14985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (5))){
var inst_14937 = cljs.core.async.close_BANG_.call(null,out);
var state_14952__$1 = state_14952;
var statearr_14963_14986 = state_14952__$1;
(statearr_14963_14986[(2)] = inst_14937);

(statearr_14963_14986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (10))){
var inst_14945 = (state_14952[(2)]);
var state_14952__$1 = (function (){var statearr_14964 = state_14952;
(statearr_14964[(8)] = inst_14945);

return statearr_14964;
})();
var statearr_14965_14987 = state_14952__$1;
(statearr_14965_14987[(2)] = null);

(statearr_14965_14987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14953 === (8))){
var inst_14934 = (state_14952[(7)]);
var state_14952__$1 = state_14952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14952__$1,(11),out,inst_14934);
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
});})(c__12727__auto___14977,out))
;
return ((function (switch__12615__auto__,c__12727__auto___14977,out){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_14969 = [null,null,null,null,null,null,null,null,null];
(statearr_14969[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_14969[(1)] = (1));

return statearr_14969;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_14952){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_14952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e14970){if((e14970 instanceof Object)){
var ex__12619__auto__ = e14970;
var statearr_14971_14988 = state_14952;
(statearr_14971_14988[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14989 = state_14952;
state_14952 = G__14989;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_14952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_14952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___14977,out))
})();
var state__12729__auto__ = (function (){var statearr_14972 = f__12728__auto__.call(null);
(statearr_14972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___14977);

return statearr_14972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___14977,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14990 = [];
var len__5726__auto___14993 = arguments.length;
var i__5727__auto___14994 = (0);
while(true){
if((i__5727__auto___14994 < len__5726__auto___14993)){
args14990.push((arguments[i__5727__auto___14994]));

var G__14995 = (i__5727__auto___14994 + (1));
i__5727__auto___14994 = G__14995;
continue;
} else {
}
break;
}

var G__14992 = args14990.length;
switch (G__14992) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14990.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12727__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto__){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto__){
return (function (state_15162){
var state_val_15163 = (state_15162[(1)]);
if((state_val_15163 === (7))){
var inst_15158 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15164_15205 = state_15162__$1;
(statearr_15164_15205[(2)] = inst_15158);

(statearr_15164_15205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (20))){
var inst_15128 = (state_15162[(7)]);
var inst_15139 = (state_15162[(2)]);
var inst_15140 = cljs.core.next.call(null,inst_15128);
var inst_15114 = inst_15140;
var inst_15115 = null;
var inst_15116 = (0);
var inst_15117 = (0);
var state_15162__$1 = (function (){var statearr_15165 = state_15162;
(statearr_15165[(8)] = inst_15139);

(statearr_15165[(9)] = inst_15117);

(statearr_15165[(10)] = inst_15116);

(statearr_15165[(11)] = inst_15114);

(statearr_15165[(12)] = inst_15115);

return statearr_15165;
})();
var statearr_15166_15206 = state_15162__$1;
(statearr_15166_15206[(2)] = null);

(statearr_15166_15206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (1))){
var state_15162__$1 = state_15162;
var statearr_15167_15207 = state_15162__$1;
(statearr_15167_15207[(2)] = null);

(statearr_15167_15207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (4))){
var inst_15103 = (state_15162[(13)]);
var inst_15103__$1 = (state_15162[(2)]);
var inst_15104 = (inst_15103__$1 == null);
var state_15162__$1 = (function (){var statearr_15168 = state_15162;
(statearr_15168[(13)] = inst_15103__$1);

return statearr_15168;
})();
if(cljs.core.truth_(inst_15104)){
var statearr_15169_15208 = state_15162__$1;
(statearr_15169_15208[(1)] = (5));

} else {
var statearr_15170_15209 = state_15162__$1;
(statearr_15170_15209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (15))){
var state_15162__$1 = state_15162;
var statearr_15174_15210 = state_15162__$1;
(statearr_15174_15210[(2)] = null);

(statearr_15174_15210[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (21))){
var state_15162__$1 = state_15162;
var statearr_15175_15211 = state_15162__$1;
(statearr_15175_15211[(2)] = null);

(statearr_15175_15211[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (13))){
var inst_15117 = (state_15162[(9)]);
var inst_15116 = (state_15162[(10)]);
var inst_15114 = (state_15162[(11)]);
var inst_15115 = (state_15162[(12)]);
var inst_15124 = (state_15162[(2)]);
var inst_15125 = (inst_15117 + (1));
var tmp15171 = inst_15116;
var tmp15172 = inst_15114;
var tmp15173 = inst_15115;
var inst_15114__$1 = tmp15172;
var inst_15115__$1 = tmp15173;
var inst_15116__$1 = tmp15171;
var inst_15117__$1 = inst_15125;
var state_15162__$1 = (function (){var statearr_15176 = state_15162;
(statearr_15176[(14)] = inst_15124);

(statearr_15176[(9)] = inst_15117__$1);

(statearr_15176[(10)] = inst_15116__$1);

(statearr_15176[(11)] = inst_15114__$1);

(statearr_15176[(12)] = inst_15115__$1);

return statearr_15176;
})();
var statearr_15177_15212 = state_15162__$1;
(statearr_15177_15212[(2)] = null);

(statearr_15177_15212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (22))){
var state_15162__$1 = state_15162;
var statearr_15178_15213 = state_15162__$1;
(statearr_15178_15213[(2)] = null);

(statearr_15178_15213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (6))){
var inst_15103 = (state_15162[(13)]);
var inst_15112 = f.call(null,inst_15103);
var inst_15113 = cljs.core.seq.call(null,inst_15112);
var inst_15114 = inst_15113;
var inst_15115 = null;
var inst_15116 = (0);
var inst_15117 = (0);
var state_15162__$1 = (function (){var statearr_15179 = state_15162;
(statearr_15179[(9)] = inst_15117);

(statearr_15179[(10)] = inst_15116);

(statearr_15179[(11)] = inst_15114);

(statearr_15179[(12)] = inst_15115);

return statearr_15179;
})();
var statearr_15180_15214 = state_15162__$1;
(statearr_15180_15214[(2)] = null);

(statearr_15180_15214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (17))){
var inst_15128 = (state_15162[(7)]);
var inst_15132 = cljs.core.chunk_first.call(null,inst_15128);
var inst_15133 = cljs.core.chunk_rest.call(null,inst_15128);
var inst_15134 = cljs.core.count.call(null,inst_15132);
var inst_15114 = inst_15133;
var inst_15115 = inst_15132;
var inst_15116 = inst_15134;
var inst_15117 = (0);
var state_15162__$1 = (function (){var statearr_15181 = state_15162;
(statearr_15181[(9)] = inst_15117);

(statearr_15181[(10)] = inst_15116);

(statearr_15181[(11)] = inst_15114);

(statearr_15181[(12)] = inst_15115);

return statearr_15181;
})();
var statearr_15182_15215 = state_15162__$1;
(statearr_15182_15215[(2)] = null);

(statearr_15182_15215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (3))){
var inst_15160 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15162__$1,inst_15160);
} else {
if((state_val_15163 === (12))){
var inst_15148 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15183_15216 = state_15162__$1;
(statearr_15183_15216[(2)] = inst_15148);

(statearr_15183_15216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (2))){
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15162__$1,(4),in$);
} else {
if((state_val_15163 === (23))){
var inst_15156 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15184_15217 = state_15162__$1;
(statearr_15184_15217[(2)] = inst_15156);

(statearr_15184_15217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (19))){
var inst_15143 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15185_15218 = state_15162__$1;
(statearr_15185_15218[(2)] = inst_15143);

(statearr_15185_15218[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (11))){
var inst_15128 = (state_15162[(7)]);
var inst_15114 = (state_15162[(11)]);
var inst_15128__$1 = cljs.core.seq.call(null,inst_15114);
var state_15162__$1 = (function (){var statearr_15186 = state_15162;
(statearr_15186[(7)] = inst_15128__$1);

return statearr_15186;
})();
if(inst_15128__$1){
var statearr_15187_15219 = state_15162__$1;
(statearr_15187_15219[(1)] = (14));

} else {
var statearr_15188_15220 = state_15162__$1;
(statearr_15188_15220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (9))){
var inst_15150 = (state_15162[(2)]);
var inst_15151 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15162__$1 = (function (){var statearr_15189 = state_15162;
(statearr_15189[(15)] = inst_15150);

return statearr_15189;
})();
if(cljs.core.truth_(inst_15151)){
var statearr_15190_15221 = state_15162__$1;
(statearr_15190_15221[(1)] = (21));

} else {
var statearr_15191_15222 = state_15162__$1;
(statearr_15191_15222[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (5))){
var inst_15106 = cljs.core.async.close_BANG_.call(null,out);
var state_15162__$1 = state_15162;
var statearr_15192_15223 = state_15162__$1;
(statearr_15192_15223[(2)] = inst_15106);

(statearr_15192_15223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (14))){
var inst_15128 = (state_15162[(7)]);
var inst_15130 = cljs.core.chunked_seq_QMARK_.call(null,inst_15128);
var state_15162__$1 = state_15162;
if(inst_15130){
var statearr_15193_15224 = state_15162__$1;
(statearr_15193_15224[(1)] = (17));

} else {
var statearr_15194_15225 = state_15162__$1;
(statearr_15194_15225[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (16))){
var inst_15146 = (state_15162[(2)]);
var state_15162__$1 = state_15162;
var statearr_15195_15226 = state_15162__$1;
(statearr_15195_15226[(2)] = inst_15146);

(statearr_15195_15226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15163 === (10))){
var inst_15117 = (state_15162[(9)]);
var inst_15115 = (state_15162[(12)]);
var inst_15122 = cljs.core._nth.call(null,inst_15115,inst_15117);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15162__$1,(13),out,inst_15122);
} else {
if((state_val_15163 === (18))){
var inst_15128 = (state_15162[(7)]);
var inst_15137 = cljs.core.first.call(null,inst_15128);
var state_15162__$1 = state_15162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15162__$1,(20),out,inst_15137);
} else {
if((state_val_15163 === (8))){
var inst_15117 = (state_15162[(9)]);
var inst_15116 = (state_15162[(10)]);
var inst_15119 = (inst_15117 < inst_15116);
var inst_15120 = inst_15119;
var state_15162__$1 = state_15162;
if(cljs.core.truth_(inst_15120)){
var statearr_15196_15227 = state_15162__$1;
(statearr_15196_15227[(1)] = (10));

} else {
var statearr_15197_15228 = state_15162__$1;
(statearr_15197_15228[(1)] = (11));

}

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
}
}
});})(c__12727__auto__))
;
return ((function (switch__12615__auto__,c__12727__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12616__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12616__auto____0 = (function (){
var statearr_15201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15201[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12616__auto__);

(statearr_15201[(1)] = (1));

return statearr_15201;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12616__auto____1 = (function (state_15162){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_15162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e15202){if((e15202 instanceof Object)){
var ex__12619__auto__ = e15202;
var statearr_15203_15229 = state_15162;
(statearr_15203_15229[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15230 = state_15162;
state_15162 = G__15230;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12616__auto__ = function(state_15162){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12616__auto____1.call(this,state_15162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12616__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12616__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto__))
})();
var state__12729__auto__ = (function (){var statearr_15204 = f__12728__auto__.call(null);
(statearr_15204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto__);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto__))
);

return c__12727__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15231 = [];
var len__5726__auto___15234 = arguments.length;
var i__5727__auto___15235 = (0);
while(true){
if((i__5727__auto___15235 < len__5726__auto___15234)){
args15231.push((arguments[i__5727__auto___15235]));

var G__15236 = (i__5727__auto___15235 + (1));
i__5727__auto___15235 = G__15236;
continue;
} else {
}
break;
}

var G__15233 = args15231.length;
switch (G__15233) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15231.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15238 = [];
var len__5726__auto___15241 = arguments.length;
var i__5727__auto___15242 = (0);
while(true){
if((i__5727__auto___15242 < len__5726__auto___15241)){
args15238.push((arguments[i__5727__auto___15242]));

var G__15243 = (i__5727__auto___15242 + (1));
i__5727__auto___15242 = G__15243;
continue;
} else {
}
break;
}

var G__15240 = args15238.length;
switch (G__15240) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15238.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15245 = [];
var len__5726__auto___15296 = arguments.length;
var i__5727__auto___15297 = (0);
while(true){
if((i__5727__auto___15297 < len__5726__auto___15296)){
args15245.push((arguments[i__5727__auto___15297]));

var G__15298 = (i__5727__auto___15297 + (1));
i__5727__auto___15297 = G__15298;
continue;
} else {
}
break;
}

var G__15247 = args15245.length;
switch (G__15247) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15245.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12727__auto___15300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___15300,out){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___15300,out){
return (function (state_15271){
var state_val_15272 = (state_15271[(1)]);
if((state_val_15272 === (7))){
var inst_15266 = (state_15271[(2)]);
var state_15271__$1 = state_15271;
var statearr_15273_15301 = state_15271__$1;
(statearr_15273_15301[(2)] = inst_15266);

(statearr_15273_15301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (1))){
var inst_15248 = null;
var state_15271__$1 = (function (){var statearr_15274 = state_15271;
(statearr_15274[(7)] = inst_15248);

return statearr_15274;
})();
var statearr_15275_15302 = state_15271__$1;
(statearr_15275_15302[(2)] = null);

(statearr_15275_15302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (4))){
var inst_15251 = (state_15271[(8)]);
var inst_15251__$1 = (state_15271[(2)]);
var inst_15252 = (inst_15251__$1 == null);
var inst_15253 = cljs.core.not.call(null,inst_15252);
var state_15271__$1 = (function (){var statearr_15276 = state_15271;
(statearr_15276[(8)] = inst_15251__$1);

return statearr_15276;
})();
if(inst_15253){
var statearr_15277_15303 = state_15271__$1;
(statearr_15277_15303[(1)] = (5));

} else {
var statearr_15278_15304 = state_15271__$1;
(statearr_15278_15304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (6))){
var state_15271__$1 = state_15271;
var statearr_15279_15305 = state_15271__$1;
(statearr_15279_15305[(2)] = null);

(statearr_15279_15305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (3))){
var inst_15268 = (state_15271[(2)]);
var inst_15269 = cljs.core.async.close_BANG_.call(null,out);
var state_15271__$1 = (function (){var statearr_15280 = state_15271;
(statearr_15280[(9)] = inst_15268);

return statearr_15280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15271__$1,inst_15269);
} else {
if((state_val_15272 === (2))){
var state_15271__$1 = state_15271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15271__$1,(4),ch);
} else {
if((state_val_15272 === (11))){
var inst_15251 = (state_15271[(8)]);
var inst_15260 = (state_15271[(2)]);
var inst_15248 = inst_15251;
var state_15271__$1 = (function (){var statearr_15281 = state_15271;
(statearr_15281[(7)] = inst_15248);

(statearr_15281[(10)] = inst_15260);

return statearr_15281;
})();
var statearr_15282_15306 = state_15271__$1;
(statearr_15282_15306[(2)] = null);

(statearr_15282_15306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (9))){
var inst_15251 = (state_15271[(8)]);
var state_15271__$1 = state_15271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15271__$1,(11),out,inst_15251);
} else {
if((state_val_15272 === (5))){
var inst_15248 = (state_15271[(7)]);
var inst_15251 = (state_15271[(8)]);
var inst_15255 = cljs.core._EQ_.call(null,inst_15251,inst_15248);
var state_15271__$1 = state_15271;
if(inst_15255){
var statearr_15284_15307 = state_15271__$1;
(statearr_15284_15307[(1)] = (8));

} else {
var statearr_15285_15308 = state_15271__$1;
(statearr_15285_15308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (10))){
var inst_15263 = (state_15271[(2)]);
var state_15271__$1 = state_15271;
var statearr_15286_15309 = state_15271__$1;
(statearr_15286_15309[(2)] = inst_15263);

(statearr_15286_15309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15272 === (8))){
var inst_15248 = (state_15271[(7)]);
var tmp15283 = inst_15248;
var inst_15248__$1 = tmp15283;
var state_15271__$1 = (function (){var statearr_15287 = state_15271;
(statearr_15287[(7)] = inst_15248__$1);

return statearr_15287;
})();
var statearr_15288_15310 = state_15271__$1;
(statearr_15288_15310[(2)] = null);

(statearr_15288_15310[(1)] = (2));


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
});})(c__12727__auto___15300,out))
;
return ((function (switch__12615__auto__,c__12727__auto___15300,out){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_15292 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15292[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_15292[(1)] = (1));

return statearr_15292;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_15271){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_15271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e15293){if((e15293 instanceof Object)){
var ex__12619__auto__ = e15293;
var statearr_15294_15311 = state_15271;
(statearr_15294_15311[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15312 = state_15271;
state_15271 = G__15312;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_15271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_15271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___15300,out))
})();
var state__12729__auto__ = (function (){var statearr_15295 = f__12728__auto__.call(null);
(statearr_15295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___15300);

return statearr_15295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___15300,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15313 = [];
var len__5726__auto___15383 = arguments.length;
var i__5727__auto___15384 = (0);
while(true){
if((i__5727__auto___15384 < len__5726__auto___15383)){
args15313.push((arguments[i__5727__auto___15384]));

var G__15385 = (i__5727__auto___15384 + (1));
i__5727__auto___15384 = G__15385;
continue;
} else {
}
break;
}

var G__15315 = args15313.length;
switch (G__15315) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15313.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12727__auto___15387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___15387,out){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___15387,out){
return (function (state_15353){
var state_val_15354 = (state_15353[(1)]);
if((state_val_15354 === (7))){
var inst_15349 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15355_15388 = state_15353__$1;
(statearr_15355_15388[(2)] = inst_15349);

(statearr_15355_15388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (1))){
var inst_15316 = (new Array(n));
var inst_15317 = inst_15316;
var inst_15318 = (0);
var state_15353__$1 = (function (){var statearr_15356 = state_15353;
(statearr_15356[(7)] = inst_15318);

(statearr_15356[(8)] = inst_15317);

return statearr_15356;
})();
var statearr_15357_15389 = state_15353__$1;
(statearr_15357_15389[(2)] = null);

(statearr_15357_15389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (4))){
var inst_15321 = (state_15353[(9)]);
var inst_15321__$1 = (state_15353[(2)]);
var inst_15322 = (inst_15321__$1 == null);
var inst_15323 = cljs.core.not.call(null,inst_15322);
var state_15353__$1 = (function (){var statearr_15358 = state_15353;
(statearr_15358[(9)] = inst_15321__$1);

return statearr_15358;
})();
if(inst_15323){
var statearr_15359_15390 = state_15353__$1;
(statearr_15359_15390[(1)] = (5));

} else {
var statearr_15360_15391 = state_15353__$1;
(statearr_15360_15391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (15))){
var inst_15343 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15361_15392 = state_15353__$1;
(statearr_15361_15392[(2)] = inst_15343);

(statearr_15361_15392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (13))){
var state_15353__$1 = state_15353;
var statearr_15362_15393 = state_15353__$1;
(statearr_15362_15393[(2)] = null);

(statearr_15362_15393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (6))){
var inst_15318 = (state_15353[(7)]);
var inst_15339 = (inst_15318 > (0));
var state_15353__$1 = state_15353;
if(cljs.core.truth_(inst_15339)){
var statearr_15363_15394 = state_15353__$1;
(statearr_15363_15394[(1)] = (12));

} else {
var statearr_15364_15395 = state_15353__$1;
(statearr_15364_15395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (3))){
var inst_15351 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15353__$1,inst_15351);
} else {
if((state_val_15354 === (12))){
var inst_15317 = (state_15353[(8)]);
var inst_15341 = cljs.core.vec.call(null,inst_15317);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15353__$1,(15),out,inst_15341);
} else {
if((state_val_15354 === (2))){
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15353__$1,(4),ch);
} else {
if((state_val_15354 === (11))){
var inst_15333 = (state_15353[(2)]);
var inst_15334 = (new Array(n));
var inst_15317 = inst_15334;
var inst_15318 = (0);
var state_15353__$1 = (function (){var statearr_15365 = state_15353;
(statearr_15365[(10)] = inst_15333);

(statearr_15365[(7)] = inst_15318);

(statearr_15365[(8)] = inst_15317);

return statearr_15365;
})();
var statearr_15366_15396 = state_15353__$1;
(statearr_15366_15396[(2)] = null);

(statearr_15366_15396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (9))){
var inst_15317 = (state_15353[(8)]);
var inst_15331 = cljs.core.vec.call(null,inst_15317);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15353__$1,(11),out,inst_15331);
} else {
if((state_val_15354 === (5))){
var inst_15326 = (state_15353[(11)]);
var inst_15321 = (state_15353[(9)]);
var inst_15318 = (state_15353[(7)]);
var inst_15317 = (state_15353[(8)]);
var inst_15325 = (inst_15317[inst_15318] = inst_15321);
var inst_15326__$1 = (inst_15318 + (1));
var inst_15327 = (inst_15326__$1 < n);
var state_15353__$1 = (function (){var statearr_15367 = state_15353;
(statearr_15367[(11)] = inst_15326__$1);

(statearr_15367[(12)] = inst_15325);

return statearr_15367;
})();
if(cljs.core.truth_(inst_15327)){
var statearr_15368_15397 = state_15353__$1;
(statearr_15368_15397[(1)] = (8));

} else {
var statearr_15369_15398 = state_15353__$1;
(statearr_15369_15398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (14))){
var inst_15346 = (state_15353[(2)]);
var inst_15347 = cljs.core.async.close_BANG_.call(null,out);
var state_15353__$1 = (function (){var statearr_15371 = state_15353;
(statearr_15371[(13)] = inst_15346);

return statearr_15371;
})();
var statearr_15372_15399 = state_15353__$1;
(statearr_15372_15399[(2)] = inst_15347);

(statearr_15372_15399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (10))){
var inst_15337 = (state_15353[(2)]);
var state_15353__$1 = state_15353;
var statearr_15373_15400 = state_15353__$1;
(statearr_15373_15400[(2)] = inst_15337);

(statearr_15373_15400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15354 === (8))){
var inst_15326 = (state_15353[(11)]);
var inst_15317 = (state_15353[(8)]);
var tmp15370 = inst_15317;
var inst_15317__$1 = tmp15370;
var inst_15318 = inst_15326;
var state_15353__$1 = (function (){var statearr_15374 = state_15353;
(statearr_15374[(7)] = inst_15318);

(statearr_15374[(8)] = inst_15317__$1);

return statearr_15374;
})();
var statearr_15375_15401 = state_15353__$1;
(statearr_15375_15401[(2)] = null);

(statearr_15375_15401[(1)] = (2));


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
});})(c__12727__auto___15387,out))
;
return ((function (switch__12615__auto__,c__12727__auto___15387,out){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_15379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15379[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_15379[(1)] = (1));

return statearr_15379;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_15353){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_15353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e15380){if((e15380 instanceof Object)){
var ex__12619__auto__ = e15380;
var statearr_15381_15402 = state_15353;
(statearr_15381_15402[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15403 = state_15353;
state_15353 = G__15403;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_15353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_15353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___15387,out))
})();
var state__12729__auto__ = (function (){var statearr_15382 = f__12728__auto__.call(null);
(statearr_15382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___15387);

return statearr_15382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___15387,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15404 = [];
var len__5726__auto___15478 = arguments.length;
var i__5727__auto___15479 = (0);
while(true){
if((i__5727__auto___15479 < len__5726__auto___15478)){
args15404.push((arguments[i__5727__auto___15479]));

var G__15480 = (i__5727__auto___15479 + (1));
i__5727__auto___15479 = G__15480;
continue;
} else {
}
break;
}

var G__15406 = args15404.length;
switch (G__15406) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15404.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12727__auto___15482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12727__auto___15482,out){
return (function (){
var f__12728__auto__ = (function (){var switch__12615__auto__ = ((function (c__12727__auto___15482,out){
return (function (state_15448){
var state_val_15449 = (state_15448[(1)]);
if((state_val_15449 === (7))){
var inst_15444 = (state_15448[(2)]);
var state_15448__$1 = state_15448;
var statearr_15450_15483 = state_15448__$1;
(statearr_15450_15483[(2)] = inst_15444);

(statearr_15450_15483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (1))){
var inst_15407 = [];
var inst_15408 = inst_15407;
var inst_15409 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15448__$1 = (function (){var statearr_15451 = state_15448;
(statearr_15451[(7)] = inst_15409);

(statearr_15451[(8)] = inst_15408);

return statearr_15451;
})();
var statearr_15452_15484 = state_15448__$1;
(statearr_15452_15484[(2)] = null);

(statearr_15452_15484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (4))){
var inst_15412 = (state_15448[(9)]);
var inst_15412__$1 = (state_15448[(2)]);
var inst_15413 = (inst_15412__$1 == null);
var inst_15414 = cljs.core.not.call(null,inst_15413);
var state_15448__$1 = (function (){var statearr_15453 = state_15448;
(statearr_15453[(9)] = inst_15412__$1);

return statearr_15453;
})();
if(inst_15414){
var statearr_15454_15485 = state_15448__$1;
(statearr_15454_15485[(1)] = (5));

} else {
var statearr_15455_15486 = state_15448__$1;
(statearr_15455_15486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (15))){
var inst_15438 = (state_15448[(2)]);
var state_15448__$1 = state_15448;
var statearr_15456_15487 = state_15448__$1;
(statearr_15456_15487[(2)] = inst_15438);

(statearr_15456_15487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (13))){
var state_15448__$1 = state_15448;
var statearr_15457_15488 = state_15448__$1;
(statearr_15457_15488[(2)] = null);

(statearr_15457_15488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (6))){
var inst_15408 = (state_15448[(8)]);
var inst_15433 = inst_15408.length;
var inst_15434 = (inst_15433 > (0));
var state_15448__$1 = state_15448;
if(cljs.core.truth_(inst_15434)){
var statearr_15458_15489 = state_15448__$1;
(statearr_15458_15489[(1)] = (12));

} else {
var statearr_15459_15490 = state_15448__$1;
(statearr_15459_15490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (3))){
var inst_15446 = (state_15448[(2)]);
var state_15448__$1 = state_15448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15448__$1,inst_15446);
} else {
if((state_val_15449 === (12))){
var inst_15408 = (state_15448[(8)]);
var inst_15436 = cljs.core.vec.call(null,inst_15408);
var state_15448__$1 = state_15448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15448__$1,(15),out,inst_15436);
} else {
if((state_val_15449 === (2))){
var state_15448__$1 = state_15448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15448__$1,(4),ch);
} else {
if((state_val_15449 === (11))){
var inst_15416 = (state_15448[(10)]);
var inst_15412 = (state_15448[(9)]);
var inst_15426 = (state_15448[(2)]);
var inst_15427 = [];
var inst_15428 = inst_15427.push(inst_15412);
var inst_15408 = inst_15427;
var inst_15409 = inst_15416;
var state_15448__$1 = (function (){var statearr_15460 = state_15448;
(statearr_15460[(7)] = inst_15409);

(statearr_15460[(8)] = inst_15408);

(statearr_15460[(11)] = inst_15426);

(statearr_15460[(12)] = inst_15428);

return statearr_15460;
})();
var statearr_15461_15491 = state_15448__$1;
(statearr_15461_15491[(2)] = null);

(statearr_15461_15491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (9))){
var inst_15408 = (state_15448[(8)]);
var inst_15424 = cljs.core.vec.call(null,inst_15408);
var state_15448__$1 = state_15448;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15448__$1,(11),out,inst_15424);
} else {
if((state_val_15449 === (5))){
var inst_15409 = (state_15448[(7)]);
var inst_15416 = (state_15448[(10)]);
var inst_15412 = (state_15448[(9)]);
var inst_15416__$1 = f.call(null,inst_15412);
var inst_15417 = cljs.core._EQ_.call(null,inst_15416__$1,inst_15409);
var inst_15418 = cljs.core.keyword_identical_QMARK_.call(null,inst_15409,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15419 = (inst_15417) || (inst_15418);
var state_15448__$1 = (function (){var statearr_15462 = state_15448;
(statearr_15462[(10)] = inst_15416__$1);

return statearr_15462;
})();
if(cljs.core.truth_(inst_15419)){
var statearr_15463_15492 = state_15448__$1;
(statearr_15463_15492[(1)] = (8));

} else {
var statearr_15464_15493 = state_15448__$1;
(statearr_15464_15493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (14))){
var inst_15441 = (state_15448[(2)]);
var inst_15442 = cljs.core.async.close_BANG_.call(null,out);
var state_15448__$1 = (function (){var statearr_15466 = state_15448;
(statearr_15466[(13)] = inst_15441);

return statearr_15466;
})();
var statearr_15467_15494 = state_15448__$1;
(statearr_15467_15494[(2)] = inst_15442);

(statearr_15467_15494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (10))){
var inst_15431 = (state_15448[(2)]);
var state_15448__$1 = state_15448;
var statearr_15468_15495 = state_15448__$1;
(statearr_15468_15495[(2)] = inst_15431);

(statearr_15468_15495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15449 === (8))){
var inst_15416 = (state_15448[(10)]);
var inst_15408 = (state_15448[(8)]);
var inst_15412 = (state_15448[(9)]);
var inst_15421 = inst_15408.push(inst_15412);
var tmp15465 = inst_15408;
var inst_15408__$1 = tmp15465;
var inst_15409 = inst_15416;
var state_15448__$1 = (function (){var statearr_15469 = state_15448;
(statearr_15469[(7)] = inst_15409);

(statearr_15469[(8)] = inst_15408__$1);

(statearr_15469[(14)] = inst_15421);

return statearr_15469;
})();
var statearr_15470_15496 = state_15448__$1;
(statearr_15470_15496[(2)] = null);

(statearr_15470_15496[(1)] = (2));


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
});})(c__12727__auto___15482,out))
;
return ((function (switch__12615__auto__,c__12727__auto___15482,out){
return (function() {
var cljs$core$async$state_machine__12616__auto__ = null;
var cljs$core$async$state_machine__12616__auto____0 = (function (){
var statearr_15474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15474[(0)] = cljs$core$async$state_machine__12616__auto__);

(statearr_15474[(1)] = (1));

return statearr_15474;
});
var cljs$core$async$state_machine__12616__auto____1 = (function (state_15448){
while(true){
var ret_value__12617__auto__ = (function (){try{while(true){
var result__12618__auto__ = switch__12615__auto__.call(null,state_15448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12618__auto__;
}
break;
}
}catch (e15475){if((e15475 instanceof Object)){
var ex__12619__auto__ = e15475;
var statearr_15476_15497 = state_15448;
(statearr_15476_15497[(5)] = ex__12619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15498 = state_15448;
state_15448 = G__15498;
continue;
} else {
return ret_value__12617__auto__;
}
break;
}
});
cljs$core$async$state_machine__12616__auto__ = function(state_15448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12616__auto____1.call(this,state_15448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12616__auto____0;
cljs$core$async$state_machine__12616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12616__auto____1;
return cljs$core$async$state_machine__12616__auto__;
})()
;})(switch__12615__auto__,c__12727__auto___15482,out))
})();
var state__12729__auto__ = (function (){var statearr_15477 = f__12728__auto__.call(null);
(statearr_15477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12727__auto___15482);

return statearr_15477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12729__auto__);
});})(c__12727__auto___15482,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

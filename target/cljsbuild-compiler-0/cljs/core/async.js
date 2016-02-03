// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13326 = [];
var len__7214__auto___13332 = arguments.length;
var i__7215__auto___13333 = (0);
while(true){
if((i__7215__auto___13333 < len__7214__auto___13332)){
args13326.push((arguments[i__7215__auto___13333]));

var G__13334 = (i__7215__auto___13333 + (1));
i__7215__auto___13333 = G__13334;
continue;
} else {
}
break;
}

var G__13328 = args13326.length;
switch (G__13328) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13326.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13329 = (function (f,blockable,meta13330){
this.f = f;
this.blockable = blockable;
this.meta13330 = meta13330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13331,meta13330__$1){
var self__ = this;
var _13331__$1 = this;
return (new cljs.core.async.t_cljs$core$async13329(self__.f,self__.blockable,meta13330__$1));
});

cljs.core.async.t_cljs$core$async13329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13331){
var self__ = this;
var _13331__$1 = this;
return self__.meta13330;
});

cljs.core.async.t_cljs$core$async13329.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13330","meta13330",-1097284257,null)], null);
});

cljs.core.async.t_cljs$core$async13329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13329";

cljs.core.async.t_cljs$core$async13329.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13329");
});

cljs.core.async.__GT_t_cljs$core$async13329 = (function cljs$core$async$__GT_t_cljs$core$async13329(f__$1,blockable__$1,meta13330){
return (new cljs.core.async.t_cljs$core$async13329(f__$1,blockable__$1,meta13330));
});

}

return (new cljs.core.async.t_cljs$core$async13329(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args13338 = [];
var len__7214__auto___13341 = arguments.length;
var i__7215__auto___13342 = (0);
while(true){
if((i__7215__auto___13342 < len__7214__auto___13341)){
args13338.push((arguments[i__7215__auto___13342]));

var G__13343 = (i__7215__auto___13342 + (1));
i__7215__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var G__13340 = args13338.length;
switch (G__13340) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13338.length)].join('')));

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
var args13345 = [];
var len__7214__auto___13348 = arguments.length;
var i__7215__auto___13349 = (0);
while(true){
if((i__7215__auto___13349 < len__7214__auto___13348)){
args13345.push((arguments[i__7215__auto___13349]));

var G__13350 = (i__7215__auto___13349 + (1));
i__7215__auto___13349 = G__13350;
continue;
} else {
}
break;
}

var G__13347 = args13345.length;
switch (G__13347) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13345.length)].join('')));

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
var args13352 = [];
var len__7214__auto___13355 = arguments.length;
var i__7215__auto___13356 = (0);
while(true){
if((i__7215__auto___13356 < len__7214__auto___13355)){
args13352.push((arguments[i__7215__auto___13356]));

var G__13357 = (i__7215__auto___13356 + (1));
i__7215__auto___13356 = G__13357;
continue;
} else {
}
break;
}

var G__13354 = args13352.length;
switch (G__13354) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13352.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13359 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13359);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13359,ret){
return (function (){
return fn1.call(null,val_13359);
});})(val_13359,ret))
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
var args13360 = [];
var len__7214__auto___13363 = arguments.length;
var i__7215__auto___13364 = (0);
while(true){
if((i__7215__auto___13364 < len__7214__auto___13363)){
args13360.push((arguments[i__7215__auto___13364]));

var G__13365 = (i__7215__auto___13364 + (1));
i__7215__auto___13364 = G__13365;
continue;
} else {
}
break;
}

var G__13362 = args13360.length;
switch (G__13362) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13360.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__7059__auto___13367 = n;
var x_13368 = (0);
while(true){
if((x_13368 < n__7059__auto___13367)){
(a[x_13368] = (0));

var G__13369 = (x_13368 + (1));
x_13368 = G__13369;
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

var G__13370 = (i + (1));
i = G__13370;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13374 = (function (alt_flag,flag,meta13375){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13375 = meta13375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13376,meta13375__$1){
var self__ = this;
var _13376__$1 = this;
return (new cljs.core.async.t_cljs$core$async13374(self__.alt_flag,self__.flag,meta13375__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13376){
var self__ = this;
var _13376__$1 = this;
return self__.meta13375;
});})(flag))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13374.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13375","meta13375",-464932069,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13374";

cljs.core.async.t_cljs$core$async13374.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13374");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13374 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13374(alt_flag__$1,flag__$1,meta13375){
return (new cljs.core.async.t_cljs$core$async13374(alt_flag__$1,flag__$1,meta13375));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13374(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13380 = (function (alt_handler,flag,cb,meta13381){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13381 = meta13381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13382,meta13381__$1){
var self__ = this;
var _13382__$1 = this;
return (new cljs.core.async.t_cljs$core$async13380(self__.alt_handler,self__.flag,self__.cb,meta13381__$1));
});

cljs.core.async.t_cljs$core$async13380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13382){
var self__ = this;
var _13382__$1 = this;
return self__.meta13381;
});

cljs.core.async.t_cljs$core$async13380.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13380.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13380.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13380.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13381","meta13381",1876241020,null)], null);
});

cljs.core.async.t_cljs$core$async13380.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13380.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13380";

cljs.core.async.t_cljs$core$async13380.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13380");
});

cljs.core.async.__GT_t_cljs$core$async13380 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13380(alt_handler__$1,flag__$1,cb__$1,meta13381){
return (new cljs.core.async.t_cljs$core$async13380(alt_handler__$1,flag__$1,cb__$1,meta13381));
});

}

return (new cljs.core.async.t_cljs$core$async13380(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13383_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13384_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13384_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6156__auto__ = wport;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13385 = (i + (1));
i = G__13385;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6156__auto__ = ret;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6144__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6144__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7221__auto__ = [];
var len__7214__auto___13391 = arguments.length;
var i__7215__auto___13392 = (0);
while(true){
if((i__7215__auto___13392 < len__7214__auto___13391)){
args__7221__auto__.push((arguments[i__7215__auto___13392]));

var G__13393 = (i__7215__auto___13392 + (1));
i__7215__auto___13392 = G__13393;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13388){
var map__13389 = p__13388;
var map__13389__$1 = ((((!((map__13389 == null)))?((((map__13389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13389):map__13389);
var opts = map__13389__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13386){
var G__13387 = cljs.core.first.call(null,seq13386);
var seq13386__$1 = cljs.core.next.call(null,seq13386);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13387,seq13386__$1);
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
var args13394 = [];
var len__7214__auto___13444 = arguments.length;
var i__7215__auto___13445 = (0);
while(true){
if((i__7215__auto___13445 < len__7214__auto___13444)){
args13394.push((arguments[i__7215__auto___13445]));

var G__13446 = (i__7215__auto___13445 + (1));
i__7215__auto___13445 = G__13446;
continue;
} else {
}
break;
}

var G__13396 = args13394.length;
switch (G__13396) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13394.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13281__auto___13448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___13448){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___13448){
return (function (state_13420){
var state_val_13421 = (state_13420[(1)]);
if((state_val_13421 === (7))){
var inst_13416 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
var statearr_13422_13449 = state_13420__$1;
(statearr_13422_13449[(2)] = inst_13416);

(statearr_13422_13449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (1))){
var state_13420__$1 = state_13420;
var statearr_13423_13450 = state_13420__$1;
(statearr_13423_13450[(2)] = null);

(statearr_13423_13450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (4))){
var inst_13399 = (state_13420[(7)]);
var inst_13399__$1 = (state_13420[(2)]);
var inst_13400 = (inst_13399__$1 == null);
var state_13420__$1 = (function (){var statearr_13424 = state_13420;
(statearr_13424[(7)] = inst_13399__$1);

return statearr_13424;
})();
if(cljs.core.truth_(inst_13400)){
var statearr_13425_13451 = state_13420__$1;
(statearr_13425_13451[(1)] = (5));

} else {
var statearr_13426_13452 = state_13420__$1;
(statearr_13426_13452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (13))){
var state_13420__$1 = state_13420;
var statearr_13427_13453 = state_13420__$1;
(statearr_13427_13453[(2)] = null);

(statearr_13427_13453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (6))){
var inst_13399 = (state_13420[(7)]);
var state_13420__$1 = state_13420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13420__$1,(11),to,inst_13399);
} else {
if((state_val_13421 === (3))){
var inst_13418 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13420__$1,inst_13418);
} else {
if((state_val_13421 === (12))){
var state_13420__$1 = state_13420;
var statearr_13428_13454 = state_13420__$1;
(statearr_13428_13454[(2)] = null);

(statearr_13428_13454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (2))){
var state_13420__$1 = state_13420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13420__$1,(4),from);
} else {
if((state_val_13421 === (11))){
var inst_13409 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
if(cljs.core.truth_(inst_13409)){
var statearr_13429_13455 = state_13420__$1;
(statearr_13429_13455[(1)] = (12));

} else {
var statearr_13430_13456 = state_13420__$1;
(statearr_13430_13456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (9))){
var state_13420__$1 = state_13420;
var statearr_13431_13457 = state_13420__$1;
(statearr_13431_13457[(2)] = null);

(statearr_13431_13457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (5))){
var state_13420__$1 = state_13420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13432_13458 = state_13420__$1;
(statearr_13432_13458[(1)] = (8));

} else {
var statearr_13433_13459 = state_13420__$1;
(statearr_13433_13459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (14))){
var inst_13414 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
var statearr_13434_13460 = state_13420__$1;
(statearr_13434_13460[(2)] = inst_13414);

(statearr_13434_13460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (10))){
var inst_13406 = (state_13420[(2)]);
var state_13420__$1 = state_13420;
var statearr_13435_13461 = state_13420__$1;
(statearr_13435_13461[(2)] = inst_13406);

(statearr_13435_13461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13421 === (8))){
var inst_13403 = cljs.core.async.close_BANG_.call(null,to);
var state_13420__$1 = state_13420;
var statearr_13436_13462 = state_13420__$1;
(statearr_13436_13462[(2)] = inst_13403);

(statearr_13436_13462[(1)] = (10));


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
});})(c__13281__auto___13448))
;
return ((function (switch__13169__auto__,c__13281__auto___13448){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_13440 = [null,null,null,null,null,null,null,null];
(statearr_13440[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_13440[(1)] = (1));

return statearr_13440;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_13420){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13441){if((e13441 instanceof Object)){
var ex__13173__auto__ = e13441;
var statearr_13442_13463 = state_13420;
(statearr_13442_13463[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13464 = state_13420;
state_13420 = G__13464;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_13420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_13420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___13448))
})();
var state__13283__auto__ = (function (){var statearr_13443 = f__13282__auto__.call(null);
(statearr_13443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___13448);

return statearr_13443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___13448))
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
return (function (p__13648){
var vec__13649 = p__13648;
var v = cljs.core.nth.call(null,vec__13649,(0),null);
var p = cljs.core.nth.call(null,vec__13649,(1),null);
var job = vec__13649;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13281__auto___13831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___13831,res,vec__13649,v,p,job,jobs,results){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___13831,res,vec__13649,v,p,job,jobs,results){
return (function (state_13654){
var state_val_13655 = (state_13654[(1)]);
if((state_val_13655 === (1))){
var state_13654__$1 = state_13654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13654__$1,(2),res,v);
} else {
if((state_val_13655 === (2))){
var inst_13651 = (state_13654[(2)]);
var inst_13652 = cljs.core.async.close_BANG_.call(null,res);
var state_13654__$1 = (function (){var statearr_13656 = state_13654;
(statearr_13656[(7)] = inst_13651);

return statearr_13656;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13654__$1,inst_13652);
} else {
return null;
}
}
});})(c__13281__auto___13831,res,vec__13649,v,p,job,jobs,results))
;
return ((function (switch__13169__auto__,c__13281__auto___13831,res,vec__13649,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0 = (function (){
var statearr_13660 = [null,null,null,null,null,null,null,null];
(statearr_13660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__);

(statearr_13660[(1)] = (1));

return statearr_13660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1 = (function (state_13654){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13661){if((e13661 instanceof Object)){
var ex__13173__auto__ = e13661;
var statearr_13662_13832 = state_13654;
(statearr_13662_13832[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13833 = state_13654;
state_13654 = G__13833;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = function(state_13654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1.call(this,state_13654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___13831,res,vec__13649,v,p,job,jobs,results))
})();
var state__13283__auto__ = (function (){var statearr_13663 = f__13282__auto__.call(null);
(statearr_13663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___13831);

return statearr_13663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___13831,res,vec__13649,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13664){
var vec__13665 = p__13664;
var v = cljs.core.nth.call(null,vec__13665,(0),null);
var p = cljs.core.nth.call(null,vec__13665,(1),null);
var job = vec__13665;
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
var n__7059__auto___13834 = n;
var __13835 = (0);
while(true){
if((__13835 < n__7059__auto___13834)){
var G__13666_13836 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13666_13836) {
case "compute":
var c__13281__auto___13838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13835,c__13281__auto___13838,G__13666_13836,n__7059__auto___13834,jobs,results,process,async){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (__13835,c__13281__auto___13838,G__13666_13836,n__7059__auto___13834,jobs,results,process,async){
return (function (state_13679){
var state_val_13680 = (state_13679[(1)]);
if((state_val_13680 === (1))){
var state_13679__$1 = state_13679;
var statearr_13681_13839 = state_13679__$1;
(statearr_13681_13839[(2)] = null);

(statearr_13681_13839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13680 === (2))){
var state_13679__$1 = state_13679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13679__$1,(4),jobs);
} else {
if((state_val_13680 === (3))){
var inst_13677 = (state_13679[(2)]);
var state_13679__$1 = state_13679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13679__$1,inst_13677);
} else {
if((state_val_13680 === (4))){
var inst_13669 = (state_13679[(2)]);
var inst_13670 = process.call(null,inst_13669);
var state_13679__$1 = state_13679;
if(cljs.core.truth_(inst_13670)){
var statearr_13682_13840 = state_13679__$1;
(statearr_13682_13840[(1)] = (5));

} else {
var statearr_13683_13841 = state_13679__$1;
(statearr_13683_13841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13680 === (5))){
var state_13679__$1 = state_13679;
var statearr_13684_13842 = state_13679__$1;
(statearr_13684_13842[(2)] = null);

(statearr_13684_13842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13680 === (6))){
var state_13679__$1 = state_13679;
var statearr_13685_13843 = state_13679__$1;
(statearr_13685_13843[(2)] = null);

(statearr_13685_13843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13680 === (7))){
var inst_13675 = (state_13679[(2)]);
var state_13679__$1 = state_13679;
var statearr_13686_13844 = state_13679__$1;
(statearr_13686_13844[(2)] = inst_13675);

(statearr_13686_13844[(1)] = (3));


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
});})(__13835,c__13281__auto___13838,G__13666_13836,n__7059__auto___13834,jobs,results,process,async))
;
return ((function (__13835,switch__13169__auto__,c__13281__auto___13838,G__13666_13836,n__7059__auto___13834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0 = (function (){
var statearr_13690 = [null,null,null,null,null,null,null];
(statearr_13690[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__);

(statearr_13690[(1)] = (1));

return statearr_13690;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1 = (function (state_13679){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13691){if((e13691 instanceof Object)){
var ex__13173__auto__ = e13691;
var statearr_13692_13845 = state_13679;
(statearr_13692_13845[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13846 = state_13679;
state_13679 = G__13846;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = function(state_13679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1.call(this,state_13679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__;
})()
;})(__13835,switch__13169__auto__,c__13281__auto___13838,G__13666_13836,n__7059__auto___13834,jobs,results,process,async))
})();
var state__13283__auto__ = (function (){var statearr_13693 = f__13282__auto__.call(null);
(statearr_13693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___13838);

return statearr_13693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(__13835,c__13281__auto___13838,G__13666_13836,n__7059__auto___13834,jobs,results,process,async))
);


break;
case "async":
var c__13281__auto___13847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13835,c__13281__auto___13847,G__13666_13836,n__7059__auto___13834,jobs,results,process,async){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (__13835,c__13281__auto___13847,G__13666_13836,n__7059__auto___13834,jobs,results,process,async){
return (function (state_13706){
var state_val_13707 = (state_13706[(1)]);
if((state_val_13707 === (1))){
var state_13706__$1 = state_13706;
var statearr_13708_13848 = state_13706__$1;
(statearr_13708_13848[(2)] = null);

(statearr_13708_13848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (2))){
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13706__$1,(4),jobs);
} else {
if((state_val_13707 === (3))){
var inst_13704 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else {
if((state_val_13707 === (4))){
var inst_13696 = (state_13706[(2)]);
var inst_13697 = async.call(null,inst_13696);
var state_13706__$1 = state_13706;
if(cljs.core.truth_(inst_13697)){
var statearr_13709_13849 = state_13706__$1;
(statearr_13709_13849[(1)] = (5));

} else {
var statearr_13710_13850 = state_13706__$1;
(statearr_13710_13850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (5))){
var state_13706__$1 = state_13706;
var statearr_13711_13851 = state_13706__$1;
(statearr_13711_13851[(2)] = null);

(statearr_13711_13851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (6))){
var state_13706__$1 = state_13706;
var statearr_13712_13852 = state_13706__$1;
(statearr_13712_13852[(2)] = null);

(statearr_13712_13852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13707 === (7))){
var inst_13702 = (state_13706[(2)]);
var state_13706__$1 = state_13706;
var statearr_13713_13853 = state_13706__$1;
(statearr_13713_13853[(2)] = inst_13702);

(statearr_13713_13853[(1)] = (3));


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
});})(__13835,c__13281__auto___13847,G__13666_13836,n__7059__auto___13834,jobs,results,process,async))
;
return ((function (__13835,switch__13169__auto__,c__13281__auto___13847,G__13666_13836,n__7059__auto___13834,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0 = (function (){
var statearr_13717 = [null,null,null,null,null,null,null];
(statearr_13717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__);

(statearr_13717[(1)] = (1));

return statearr_13717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1 = (function (state_13706){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13718){if((e13718 instanceof Object)){
var ex__13173__auto__ = e13718;
var statearr_13719_13854 = state_13706;
(statearr_13719_13854[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13855 = state_13706;
state_13706 = G__13855;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__;
})()
;})(__13835,switch__13169__auto__,c__13281__auto___13847,G__13666_13836,n__7059__auto___13834,jobs,results,process,async))
})();
var state__13283__auto__ = (function (){var statearr_13720 = f__13282__auto__.call(null);
(statearr_13720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___13847);

return statearr_13720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(__13835,c__13281__auto___13847,G__13666_13836,n__7059__auto___13834,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13856 = (__13835 + (1));
__13835 = G__13856;
continue;
} else {
}
break;
}

var c__13281__auto___13857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___13857,jobs,results,process,async){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___13857,jobs,results,process,async){
return (function (state_13742){
var state_val_13743 = (state_13742[(1)]);
if((state_val_13743 === (1))){
var state_13742__$1 = state_13742;
var statearr_13744_13858 = state_13742__$1;
(statearr_13744_13858[(2)] = null);

(statearr_13744_13858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13743 === (2))){
var state_13742__$1 = state_13742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13742__$1,(4),from);
} else {
if((state_val_13743 === (3))){
var inst_13740 = (state_13742[(2)]);
var state_13742__$1 = state_13742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13742__$1,inst_13740);
} else {
if((state_val_13743 === (4))){
var inst_13723 = (state_13742[(7)]);
var inst_13723__$1 = (state_13742[(2)]);
var inst_13724 = (inst_13723__$1 == null);
var state_13742__$1 = (function (){var statearr_13745 = state_13742;
(statearr_13745[(7)] = inst_13723__$1);

return statearr_13745;
})();
if(cljs.core.truth_(inst_13724)){
var statearr_13746_13859 = state_13742__$1;
(statearr_13746_13859[(1)] = (5));

} else {
var statearr_13747_13860 = state_13742__$1;
(statearr_13747_13860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13743 === (5))){
var inst_13726 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13742__$1 = state_13742;
var statearr_13748_13861 = state_13742__$1;
(statearr_13748_13861[(2)] = inst_13726);

(statearr_13748_13861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13743 === (6))){
var inst_13723 = (state_13742[(7)]);
var inst_13728 = (state_13742[(8)]);
var inst_13728__$1 = cljs.core.async.chan.call(null,(1));
var inst_13729 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13730 = [inst_13723,inst_13728__$1];
var inst_13731 = (new cljs.core.PersistentVector(null,2,(5),inst_13729,inst_13730,null));
var state_13742__$1 = (function (){var statearr_13749 = state_13742;
(statearr_13749[(8)] = inst_13728__$1);

return statearr_13749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13742__$1,(8),jobs,inst_13731);
} else {
if((state_val_13743 === (7))){
var inst_13738 = (state_13742[(2)]);
var state_13742__$1 = state_13742;
var statearr_13750_13862 = state_13742__$1;
(statearr_13750_13862[(2)] = inst_13738);

(statearr_13750_13862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13743 === (8))){
var inst_13728 = (state_13742[(8)]);
var inst_13733 = (state_13742[(2)]);
var state_13742__$1 = (function (){var statearr_13751 = state_13742;
(statearr_13751[(9)] = inst_13733);

return statearr_13751;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13742__$1,(9),results,inst_13728);
} else {
if((state_val_13743 === (9))){
var inst_13735 = (state_13742[(2)]);
var state_13742__$1 = (function (){var statearr_13752 = state_13742;
(statearr_13752[(10)] = inst_13735);

return statearr_13752;
})();
var statearr_13753_13863 = state_13742__$1;
(statearr_13753_13863[(2)] = null);

(statearr_13753_13863[(1)] = (2));


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
});})(c__13281__auto___13857,jobs,results,process,async))
;
return ((function (switch__13169__auto__,c__13281__auto___13857,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0 = (function (){
var statearr_13757 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__);

(statearr_13757[(1)] = (1));

return statearr_13757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1 = (function (state_13742){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13758){if((e13758 instanceof Object)){
var ex__13173__auto__ = e13758;
var statearr_13759_13864 = state_13742;
(statearr_13759_13864[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13865 = state_13742;
state_13742 = G__13865;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = function(state_13742){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1.call(this,state_13742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___13857,jobs,results,process,async))
})();
var state__13283__auto__ = (function (){var statearr_13760 = f__13282__auto__.call(null);
(statearr_13760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___13857);

return statearr_13760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___13857,jobs,results,process,async))
);


var c__13281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto__,jobs,results,process,async){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto__,jobs,results,process,async){
return (function (state_13798){
var state_val_13799 = (state_13798[(1)]);
if((state_val_13799 === (7))){
var inst_13794 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
var statearr_13800_13866 = state_13798__$1;
(statearr_13800_13866[(2)] = inst_13794);

(statearr_13800_13866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (20))){
var state_13798__$1 = state_13798;
var statearr_13801_13867 = state_13798__$1;
(statearr_13801_13867[(2)] = null);

(statearr_13801_13867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (1))){
var state_13798__$1 = state_13798;
var statearr_13802_13868 = state_13798__$1;
(statearr_13802_13868[(2)] = null);

(statearr_13802_13868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (4))){
var inst_13763 = (state_13798[(7)]);
var inst_13763__$1 = (state_13798[(2)]);
var inst_13764 = (inst_13763__$1 == null);
var state_13798__$1 = (function (){var statearr_13803 = state_13798;
(statearr_13803[(7)] = inst_13763__$1);

return statearr_13803;
})();
if(cljs.core.truth_(inst_13764)){
var statearr_13804_13869 = state_13798__$1;
(statearr_13804_13869[(1)] = (5));

} else {
var statearr_13805_13870 = state_13798__$1;
(statearr_13805_13870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (15))){
var inst_13776 = (state_13798[(8)]);
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13798__$1,(18),to,inst_13776);
} else {
if((state_val_13799 === (21))){
var inst_13789 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
var statearr_13806_13871 = state_13798__$1;
(statearr_13806_13871[(2)] = inst_13789);

(statearr_13806_13871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (13))){
var inst_13791 = (state_13798[(2)]);
var state_13798__$1 = (function (){var statearr_13807 = state_13798;
(statearr_13807[(9)] = inst_13791);

return statearr_13807;
})();
var statearr_13808_13872 = state_13798__$1;
(statearr_13808_13872[(2)] = null);

(statearr_13808_13872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (6))){
var inst_13763 = (state_13798[(7)]);
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13798__$1,(11),inst_13763);
} else {
if((state_val_13799 === (17))){
var inst_13784 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
if(cljs.core.truth_(inst_13784)){
var statearr_13809_13873 = state_13798__$1;
(statearr_13809_13873[(1)] = (19));

} else {
var statearr_13810_13874 = state_13798__$1;
(statearr_13810_13874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (3))){
var inst_13796 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13798__$1,inst_13796);
} else {
if((state_val_13799 === (12))){
var inst_13773 = (state_13798[(10)]);
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13798__$1,(14),inst_13773);
} else {
if((state_val_13799 === (2))){
var state_13798__$1 = state_13798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13798__$1,(4),results);
} else {
if((state_val_13799 === (19))){
var state_13798__$1 = state_13798;
var statearr_13811_13875 = state_13798__$1;
(statearr_13811_13875[(2)] = null);

(statearr_13811_13875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (11))){
var inst_13773 = (state_13798[(2)]);
var state_13798__$1 = (function (){var statearr_13812 = state_13798;
(statearr_13812[(10)] = inst_13773);

return statearr_13812;
})();
var statearr_13813_13876 = state_13798__$1;
(statearr_13813_13876[(2)] = null);

(statearr_13813_13876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (9))){
var state_13798__$1 = state_13798;
var statearr_13814_13877 = state_13798__$1;
(statearr_13814_13877[(2)] = null);

(statearr_13814_13877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (5))){
var state_13798__$1 = state_13798;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13815_13878 = state_13798__$1;
(statearr_13815_13878[(1)] = (8));

} else {
var statearr_13816_13879 = state_13798__$1;
(statearr_13816_13879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (14))){
var inst_13776 = (state_13798[(8)]);
var inst_13778 = (state_13798[(11)]);
var inst_13776__$1 = (state_13798[(2)]);
var inst_13777 = (inst_13776__$1 == null);
var inst_13778__$1 = cljs.core.not.call(null,inst_13777);
var state_13798__$1 = (function (){var statearr_13817 = state_13798;
(statearr_13817[(8)] = inst_13776__$1);

(statearr_13817[(11)] = inst_13778__$1);

return statearr_13817;
})();
if(inst_13778__$1){
var statearr_13818_13880 = state_13798__$1;
(statearr_13818_13880[(1)] = (15));

} else {
var statearr_13819_13881 = state_13798__$1;
(statearr_13819_13881[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (16))){
var inst_13778 = (state_13798[(11)]);
var state_13798__$1 = state_13798;
var statearr_13820_13882 = state_13798__$1;
(statearr_13820_13882[(2)] = inst_13778);

(statearr_13820_13882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (10))){
var inst_13770 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
var statearr_13821_13883 = state_13798__$1;
(statearr_13821_13883[(2)] = inst_13770);

(statearr_13821_13883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (18))){
var inst_13781 = (state_13798[(2)]);
var state_13798__$1 = state_13798;
var statearr_13822_13884 = state_13798__$1;
(statearr_13822_13884[(2)] = inst_13781);

(statearr_13822_13884[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13799 === (8))){
var inst_13767 = cljs.core.async.close_BANG_.call(null,to);
var state_13798__$1 = state_13798;
var statearr_13823_13885 = state_13798__$1;
(statearr_13823_13885[(2)] = inst_13767);

(statearr_13823_13885[(1)] = (10));


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
});})(c__13281__auto__,jobs,results,process,async))
;
return ((function (switch__13169__auto__,c__13281__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0 = (function (){
var statearr_13827 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__);

(statearr_13827[(1)] = (1));

return statearr_13827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1 = (function (state_13798){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13828){if((e13828 instanceof Object)){
var ex__13173__auto__ = e13828;
var statearr_13829_13886 = state_13798;
(statearr_13829_13886[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13887 = state_13798;
state_13798 = G__13887;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__ = function(state_13798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1.call(this,state_13798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13170__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto__,jobs,results,process,async))
})();
var state__13283__auto__ = (function (){var statearr_13830 = f__13282__auto__.call(null);
(statearr_13830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto__);

return statearr_13830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto__,jobs,results,process,async))
);

return c__13281__auto__;
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
var args13888 = [];
var len__7214__auto___13891 = arguments.length;
var i__7215__auto___13892 = (0);
while(true){
if((i__7215__auto___13892 < len__7214__auto___13891)){
args13888.push((arguments[i__7215__auto___13892]));

var G__13893 = (i__7215__auto___13892 + (1));
i__7215__auto___13892 = G__13893;
continue;
} else {
}
break;
}

var G__13890 = args13888.length;
switch (G__13890) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13888.length)].join('')));

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
var args13895 = [];
var len__7214__auto___13898 = arguments.length;
var i__7215__auto___13899 = (0);
while(true){
if((i__7215__auto___13899 < len__7214__auto___13898)){
args13895.push((arguments[i__7215__auto___13899]));

var G__13900 = (i__7215__auto___13899 + (1));
i__7215__auto___13899 = G__13900;
continue;
} else {
}
break;
}

var G__13897 = args13895.length;
switch (G__13897) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13895.length)].join('')));

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
var args13902 = [];
var len__7214__auto___13955 = arguments.length;
var i__7215__auto___13956 = (0);
while(true){
if((i__7215__auto___13956 < len__7214__auto___13955)){
args13902.push((arguments[i__7215__auto___13956]));

var G__13957 = (i__7215__auto___13956 + (1));
i__7215__auto___13956 = G__13957;
continue;
} else {
}
break;
}

var G__13904 = args13902.length;
switch (G__13904) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13902.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13281__auto___13959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___13959,tc,fc){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___13959,tc,fc){
return (function (state_13930){
var state_val_13931 = (state_13930[(1)]);
if((state_val_13931 === (7))){
var inst_13926 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
var statearr_13932_13960 = state_13930__$1;
(statearr_13932_13960[(2)] = inst_13926);

(statearr_13932_13960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (1))){
var state_13930__$1 = state_13930;
var statearr_13933_13961 = state_13930__$1;
(statearr_13933_13961[(2)] = null);

(statearr_13933_13961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (4))){
var inst_13907 = (state_13930[(7)]);
var inst_13907__$1 = (state_13930[(2)]);
var inst_13908 = (inst_13907__$1 == null);
var state_13930__$1 = (function (){var statearr_13934 = state_13930;
(statearr_13934[(7)] = inst_13907__$1);

return statearr_13934;
})();
if(cljs.core.truth_(inst_13908)){
var statearr_13935_13962 = state_13930__$1;
(statearr_13935_13962[(1)] = (5));

} else {
var statearr_13936_13963 = state_13930__$1;
(statearr_13936_13963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (13))){
var state_13930__$1 = state_13930;
var statearr_13937_13964 = state_13930__$1;
(statearr_13937_13964[(2)] = null);

(statearr_13937_13964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (6))){
var inst_13907 = (state_13930[(7)]);
var inst_13913 = p.call(null,inst_13907);
var state_13930__$1 = state_13930;
if(cljs.core.truth_(inst_13913)){
var statearr_13938_13965 = state_13930__$1;
(statearr_13938_13965[(1)] = (9));

} else {
var statearr_13939_13966 = state_13930__$1;
(statearr_13939_13966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (3))){
var inst_13928 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13930__$1,inst_13928);
} else {
if((state_val_13931 === (12))){
var state_13930__$1 = state_13930;
var statearr_13940_13967 = state_13930__$1;
(statearr_13940_13967[(2)] = null);

(statearr_13940_13967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (2))){
var state_13930__$1 = state_13930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13930__$1,(4),ch);
} else {
if((state_val_13931 === (11))){
var inst_13907 = (state_13930[(7)]);
var inst_13917 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13930__$1,(8),inst_13917,inst_13907);
} else {
if((state_val_13931 === (9))){
var state_13930__$1 = state_13930;
var statearr_13941_13968 = state_13930__$1;
(statearr_13941_13968[(2)] = tc);

(statearr_13941_13968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (5))){
var inst_13910 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13911 = cljs.core.async.close_BANG_.call(null,fc);
var state_13930__$1 = (function (){var statearr_13942 = state_13930;
(statearr_13942[(8)] = inst_13910);

return statearr_13942;
})();
var statearr_13943_13969 = state_13930__$1;
(statearr_13943_13969[(2)] = inst_13911);

(statearr_13943_13969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (14))){
var inst_13924 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
var statearr_13944_13970 = state_13930__$1;
(statearr_13944_13970[(2)] = inst_13924);

(statearr_13944_13970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (10))){
var state_13930__$1 = state_13930;
var statearr_13945_13971 = state_13930__$1;
(statearr_13945_13971[(2)] = fc);

(statearr_13945_13971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13931 === (8))){
var inst_13919 = (state_13930[(2)]);
var state_13930__$1 = state_13930;
if(cljs.core.truth_(inst_13919)){
var statearr_13946_13972 = state_13930__$1;
(statearr_13946_13972[(1)] = (12));

} else {
var statearr_13947_13973 = state_13930__$1;
(statearr_13947_13973[(1)] = (13));

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
});})(c__13281__auto___13959,tc,fc))
;
return ((function (switch__13169__auto__,c__13281__auto___13959,tc,fc){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_13951 = [null,null,null,null,null,null,null,null,null];
(statearr_13951[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_13951[(1)] = (1));

return statearr_13951;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_13930){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_13930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e13952){if((e13952 instanceof Object)){
var ex__13173__auto__ = e13952;
var statearr_13953_13974 = state_13930;
(statearr_13953_13974[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13975 = state_13930;
state_13930 = G__13975;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_13930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_13930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___13959,tc,fc))
})();
var state__13283__auto__ = (function (){var statearr_13954 = f__13282__auto__.call(null);
(statearr_13954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___13959);

return statearr_13954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___13959,tc,fc))
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
var c__13281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto__){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto__){
return (function (state_14039){
var state_val_14040 = (state_14039[(1)]);
if((state_val_14040 === (7))){
var inst_14035 = (state_14039[(2)]);
var state_14039__$1 = state_14039;
var statearr_14041_14062 = state_14039__$1;
(statearr_14041_14062[(2)] = inst_14035);

(statearr_14041_14062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (1))){
var inst_14019 = init;
var state_14039__$1 = (function (){var statearr_14042 = state_14039;
(statearr_14042[(7)] = inst_14019);

return statearr_14042;
})();
var statearr_14043_14063 = state_14039__$1;
(statearr_14043_14063[(2)] = null);

(statearr_14043_14063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (4))){
var inst_14022 = (state_14039[(8)]);
var inst_14022__$1 = (state_14039[(2)]);
var inst_14023 = (inst_14022__$1 == null);
var state_14039__$1 = (function (){var statearr_14044 = state_14039;
(statearr_14044[(8)] = inst_14022__$1);

return statearr_14044;
})();
if(cljs.core.truth_(inst_14023)){
var statearr_14045_14064 = state_14039__$1;
(statearr_14045_14064[(1)] = (5));

} else {
var statearr_14046_14065 = state_14039__$1;
(statearr_14046_14065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (6))){
var inst_14022 = (state_14039[(8)]);
var inst_14019 = (state_14039[(7)]);
var inst_14026 = (state_14039[(9)]);
var inst_14026__$1 = f.call(null,inst_14019,inst_14022);
var inst_14027 = cljs.core.reduced_QMARK_.call(null,inst_14026__$1);
var state_14039__$1 = (function (){var statearr_14047 = state_14039;
(statearr_14047[(9)] = inst_14026__$1);

return statearr_14047;
})();
if(inst_14027){
var statearr_14048_14066 = state_14039__$1;
(statearr_14048_14066[(1)] = (8));

} else {
var statearr_14049_14067 = state_14039__$1;
(statearr_14049_14067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (3))){
var inst_14037 = (state_14039[(2)]);
var state_14039__$1 = state_14039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14039__$1,inst_14037);
} else {
if((state_val_14040 === (2))){
var state_14039__$1 = state_14039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14039__$1,(4),ch);
} else {
if((state_val_14040 === (9))){
var inst_14026 = (state_14039[(9)]);
var inst_14019 = inst_14026;
var state_14039__$1 = (function (){var statearr_14050 = state_14039;
(statearr_14050[(7)] = inst_14019);

return statearr_14050;
})();
var statearr_14051_14068 = state_14039__$1;
(statearr_14051_14068[(2)] = null);

(statearr_14051_14068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (5))){
var inst_14019 = (state_14039[(7)]);
var state_14039__$1 = state_14039;
var statearr_14052_14069 = state_14039__$1;
(statearr_14052_14069[(2)] = inst_14019);

(statearr_14052_14069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (10))){
var inst_14033 = (state_14039[(2)]);
var state_14039__$1 = state_14039;
var statearr_14053_14070 = state_14039__$1;
(statearr_14053_14070[(2)] = inst_14033);

(statearr_14053_14070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14040 === (8))){
var inst_14026 = (state_14039[(9)]);
var inst_14029 = cljs.core.deref.call(null,inst_14026);
var state_14039__$1 = state_14039;
var statearr_14054_14071 = state_14039__$1;
(statearr_14054_14071[(2)] = inst_14029);

(statearr_14054_14071[(1)] = (10));


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
});})(c__13281__auto__))
;
return ((function (switch__13169__auto__,c__13281__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13170__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13170__auto____0 = (function (){
var statearr_14058 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14058[(0)] = cljs$core$async$reduce_$_state_machine__13170__auto__);

(statearr_14058[(1)] = (1));

return statearr_14058;
});
var cljs$core$async$reduce_$_state_machine__13170__auto____1 = (function (state_14039){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_14039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e14059){if((e14059 instanceof Object)){
var ex__13173__auto__ = e14059;
var statearr_14060_14072 = state_14039;
(statearr_14060_14072[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14073 = state_14039;
state_14039 = G__14073;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13170__auto__ = function(state_14039){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13170__auto____1.call(this,state_14039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13170__auto____0;
cljs$core$async$reduce_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13170__auto____1;
return cljs$core$async$reduce_$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto__))
})();
var state__13283__auto__ = (function (){var statearr_14061 = f__13282__auto__.call(null);
(statearr_14061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto__);

return statearr_14061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto__))
);

return c__13281__auto__;
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
var args14074 = [];
var len__7214__auto___14126 = arguments.length;
var i__7215__auto___14127 = (0);
while(true){
if((i__7215__auto___14127 < len__7214__auto___14126)){
args14074.push((arguments[i__7215__auto___14127]));

var G__14128 = (i__7215__auto___14127 + (1));
i__7215__auto___14127 = G__14128;
continue;
} else {
}
break;
}

var G__14076 = args14074.length;
switch (G__14076) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14074.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto__){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto__){
return (function (state_14101){
var state_val_14102 = (state_14101[(1)]);
if((state_val_14102 === (7))){
var inst_14083 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
var statearr_14103_14130 = state_14101__$1;
(statearr_14103_14130[(2)] = inst_14083);

(statearr_14103_14130[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (1))){
var inst_14077 = cljs.core.seq.call(null,coll);
var inst_14078 = inst_14077;
var state_14101__$1 = (function (){var statearr_14104 = state_14101;
(statearr_14104[(7)] = inst_14078);

return statearr_14104;
})();
var statearr_14105_14131 = state_14101__$1;
(statearr_14105_14131[(2)] = null);

(statearr_14105_14131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (4))){
var inst_14078 = (state_14101[(7)]);
var inst_14081 = cljs.core.first.call(null,inst_14078);
var state_14101__$1 = state_14101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14101__$1,(7),ch,inst_14081);
} else {
if((state_val_14102 === (13))){
var inst_14095 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
var statearr_14106_14132 = state_14101__$1;
(statearr_14106_14132[(2)] = inst_14095);

(statearr_14106_14132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (6))){
var inst_14086 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
if(cljs.core.truth_(inst_14086)){
var statearr_14107_14133 = state_14101__$1;
(statearr_14107_14133[(1)] = (8));

} else {
var statearr_14108_14134 = state_14101__$1;
(statearr_14108_14134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (3))){
var inst_14099 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14101__$1,inst_14099);
} else {
if((state_val_14102 === (12))){
var state_14101__$1 = state_14101;
var statearr_14109_14135 = state_14101__$1;
(statearr_14109_14135[(2)] = null);

(statearr_14109_14135[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (2))){
var inst_14078 = (state_14101[(7)]);
var state_14101__$1 = state_14101;
if(cljs.core.truth_(inst_14078)){
var statearr_14110_14136 = state_14101__$1;
(statearr_14110_14136[(1)] = (4));

} else {
var statearr_14111_14137 = state_14101__$1;
(statearr_14111_14137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (11))){
var inst_14092 = cljs.core.async.close_BANG_.call(null,ch);
var state_14101__$1 = state_14101;
var statearr_14112_14138 = state_14101__$1;
(statearr_14112_14138[(2)] = inst_14092);

(statearr_14112_14138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (9))){
var state_14101__$1 = state_14101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14113_14139 = state_14101__$1;
(statearr_14113_14139[(1)] = (11));

} else {
var statearr_14114_14140 = state_14101__$1;
(statearr_14114_14140[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (5))){
var inst_14078 = (state_14101[(7)]);
var state_14101__$1 = state_14101;
var statearr_14115_14141 = state_14101__$1;
(statearr_14115_14141[(2)] = inst_14078);

(statearr_14115_14141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (10))){
var inst_14097 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
var statearr_14116_14142 = state_14101__$1;
(statearr_14116_14142[(2)] = inst_14097);

(statearr_14116_14142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (8))){
var inst_14078 = (state_14101[(7)]);
var inst_14088 = cljs.core.next.call(null,inst_14078);
var inst_14078__$1 = inst_14088;
var state_14101__$1 = (function (){var statearr_14117 = state_14101;
(statearr_14117[(7)] = inst_14078__$1);

return statearr_14117;
})();
var statearr_14118_14143 = state_14101__$1;
(statearr_14118_14143[(2)] = null);

(statearr_14118_14143[(1)] = (2));


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
});})(c__13281__auto__))
;
return ((function (switch__13169__auto__,c__13281__auto__){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_14122 = [null,null,null,null,null,null,null,null];
(statearr_14122[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_14122[(1)] = (1));

return statearr_14122;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_14101){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_14101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e14123){if((e14123 instanceof Object)){
var ex__13173__auto__ = e14123;
var statearr_14124_14144 = state_14101;
(statearr_14124_14144[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14145 = state_14101;
state_14101 = G__14145;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_14101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_14101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto__))
})();
var state__13283__auto__ = (function (){var statearr_14125 = f__13282__auto__.call(null);
(statearr_14125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto__);

return statearr_14125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto__))
);

return c__13281__auto__;
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
var x__6811__auto__ = (((_ == null))?null:_);
var m__6812__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,_);
} else {
var m__6812__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,_);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async14367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14367 = (function (mult,ch,cs,meta14368){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14368 = meta14368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14369,meta14368__$1){
var self__ = this;
var _14369__$1 = this;
return (new cljs.core.async.t_cljs$core$async14367(self__.mult,self__.ch,self__.cs,meta14368__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14369){
var self__ = this;
var _14369__$1 = this;
return self__.meta14368;
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14368","meta14368",1013677825,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14367";

cljs.core.async.t_cljs$core$async14367.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14367");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14367 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14367(mult__$1,ch__$1,cs__$1,meta14368){
return (new cljs.core.async.t_cljs$core$async14367(mult__$1,ch__$1,cs__$1,meta14368));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14367(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13281__auto___14588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___14588,cs,m,dchan,dctr,done){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___14588,cs,m,dchan,dctr,done){
return (function (state_14500){
var state_val_14501 = (state_14500[(1)]);
if((state_val_14501 === (7))){
var inst_14496 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14502_14589 = state_14500__$1;
(statearr_14502_14589[(2)] = inst_14496);

(statearr_14502_14589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (20))){
var inst_14401 = (state_14500[(7)]);
var inst_14411 = cljs.core.first.call(null,inst_14401);
var inst_14412 = cljs.core.nth.call(null,inst_14411,(0),null);
var inst_14413 = cljs.core.nth.call(null,inst_14411,(1),null);
var state_14500__$1 = (function (){var statearr_14503 = state_14500;
(statearr_14503[(8)] = inst_14412);

return statearr_14503;
})();
if(cljs.core.truth_(inst_14413)){
var statearr_14504_14590 = state_14500__$1;
(statearr_14504_14590[(1)] = (22));

} else {
var statearr_14505_14591 = state_14500__$1;
(statearr_14505_14591[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (27))){
var inst_14372 = (state_14500[(9)]);
var inst_14441 = (state_14500[(10)]);
var inst_14448 = (state_14500[(11)]);
var inst_14443 = (state_14500[(12)]);
var inst_14448__$1 = cljs.core._nth.call(null,inst_14441,inst_14443);
var inst_14449 = cljs.core.async.put_BANG_.call(null,inst_14448__$1,inst_14372,done);
var state_14500__$1 = (function (){var statearr_14506 = state_14500;
(statearr_14506[(11)] = inst_14448__$1);

return statearr_14506;
})();
if(cljs.core.truth_(inst_14449)){
var statearr_14507_14592 = state_14500__$1;
(statearr_14507_14592[(1)] = (30));

} else {
var statearr_14508_14593 = state_14500__$1;
(statearr_14508_14593[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (1))){
var state_14500__$1 = state_14500;
var statearr_14509_14594 = state_14500__$1;
(statearr_14509_14594[(2)] = null);

(statearr_14509_14594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (24))){
var inst_14401 = (state_14500[(7)]);
var inst_14418 = (state_14500[(2)]);
var inst_14419 = cljs.core.next.call(null,inst_14401);
var inst_14381 = inst_14419;
var inst_14382 = null;
var inst_14383 = (0);
var inst_14384 = (0);
var state_14500__$1 = (function (){var statearr_14510 = state_14500;
(statearr_14510[(13)] = inst_14382);

(statearr_14510[(14)] = inst_14383);

(statearr_14510[(15)] = inst_14384);

(statearr_14510[(16)] = inst_14381);

(statearr_14510[(17)] = inst_14418);

return statearr_14510;
})();
var statearr_14511_14595 = state_14500__$1;
(statearr_14511_14595[(2)] = null);

(statearr_14511_14595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (39))){
var state_14500__$1 = state_14500;
var statearr_14515_14596 = state_14500__$1;
(statearr_14515_14596[(2)] = null);

(statearr_14515_14596[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (4))){
var inst_14372 = (state_14500[(9)]);
var inst_14372__$1 = (state_14500[(2)]);
var inst_14373 = (inst_14372__$1 == null);
var state_14500__$1 = (function (){var statearr_14516 = state_14500;
(statearr_14516[(9)] = inst_14372__$1);

return statearr_14516;
})();
if(cljs.core.truth_(inst_14373)){
var statearr_14517_14597 = state_14500__$1;
(statearr_14517_14597[(1)] = (5));

} else {
var statearr_14518_14598 = state_14500__$1;
(statearr_14518_14598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (15))){
var inst_14382 = (state_14500[(13)]);
var inst_14383 = (state_14500[(14)]);
var inst_14384 = (state_14500[(15)]);
var inst_14381 = (state_14500[(16)]);
var inst_14397 = (state_14500[(2)]);
var inst_14398 = (inst_14384 + (1));
var tmp14512 = inst_14382;
var tmp14513 = inst_14383;
var tmp14514 = inst_14381;
var inst_14381__$1 = tmp14514;
var inst_14382__$1 = tmp14512;
var inst_14383__$1 = tmp14513;
var inst_14384__$1 = inst_14398;
var state_14500__$1 = (function (){var statearr_14519 = state_14500;
(statearr_14519[(13)] = inst_14382__$1);

(statearr_14519[(14)] = inst_14383__$1);

(statearr_14519[(15)] = inst_14384__$1);

(statearr_14519[(18)] = inst_14397);

(statearr_14519[(16)] = inst_14381__$1);

return statearr_14519;
})();
var statearr_14520_14599 = state_14500__$1;
(statearr_14520_14599[(2)] = null);

(statearr_14520_14599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (21))){
var inst_14422 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14524_14600 = state_14500__$1;
(statearr_14524_14600[(2)] = inst_14422);

(statearr_14524_14600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (31))){
var inst_14448 = (state_14500[(11)]);
var inst_14452 = done.call(null,null);
var inst_14453 = cljs.core.async.untap_STAR_.call(null,m,inst_14448);
var state_14500__$1 = (function (){var statearr_14525 = state_14500;
(statearr_14525[(19)] = inst_14452);

return statearr_14525;
})();
var statearr_14526_14601 = state_14500__$1;
(statearr_14526_14601[(2)] = inst_14453);

(statearr_14526_14601[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (32))){
var inst_14441 = (state_14500[(10)]);
var inst_14440 = (state_14500[(20)]);
var inst_14442 = (state_14500[(21)]);
var inst_14443 = (state_14500[(12)]);
var inst_14455 = (state_14500[(2)]);
var inst_14456 = (inst_14443 + (1));
var tmp14521 = inst_14441;
var tmp14522 = inst_14440;
var tmp14523 = inst_14442;
var inst_14440__$1 = tmp14522;
var inst_14441__$1 = tmp14521;
var inst_14442__$1 = tmp14523;
var inst_14443__$1 = inst_14456;
var state_14500__$1 = (function (){var statearr_14527 = state_14500;
(statearr_14527[(22)] = inst_14455);

(statearr_14527[(10)] = inst_14441__$1);

(statearr_14527[(20)] = inst_14440__$1);

(statearr_14527[(21)] = inst_14442__$1);

(statearr_14527[(12)] = inst_14443__$1);

return statearr_14527;
})();
var statearr_14528_14602 = state_14500__$1;
(statearr_14528_14602[(2)] = null);

(statearr_14528_14602[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (40))){
var inst_14468 = (state_14500[(23)]);
var inst_14472 = done.call(null,null);
var inst_14473 = cljs.core.async.untap_STAR_.call(null,m,inst_14468);
var state_14500__$1 = (function (){var statearr_14529 = state_14500;
(statearr_14529[(24)] = inst_14472);

return statearr_14529;
})();
var statearr_14530_14603 = state_14500__$1;
(statearr_14530_14603[(2)] = inst_14473);

(statearr_14530_14603[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (33))){
var inst_14459 = (state_14500[(25)]);
var inst_14461 = cljs.core.chunked_seq_QMARK_.call(null,inst_14459);
var state_14500__$1 = state_14500;
if(inst_14461){
var statearr_14531_14604 = state_14500__$1;
(statearr_14531_14604[(1)] = (36));

} else {
var statearr_14532_14605 = state_14500__$1;
(statearr_14532_14605[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (13))){
var inst_14391 = (state_14500[(26)]);
var inst_14394 = cljs.core.async.close_BANG_.call(null,inst_14391);
var state_14500__$1 = state_14500;
var statearr_14533_14606 = state_14500__$1;
(statearr_14533_14606[(2)] = inst_14394);

(statearr_14533_14606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (22))){
var inst_14412 = (state_14500[(8)]);
var inst_14415 = cljs.core.async.close_BANG_.call(null,inst_14412);
var state_14500__$1 = state_14500;
var statearr_14534_14607 = state_14500__$1;
(statearr_14534_14607[(2)] = inst_14415);

(statearr_14534_14607[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (36))){
var inst_14459 = (state_14500[(25)]);
var inst_14463 = cljs.core.chunk_first.call(null,inst_14459);
var inst_14464 = cljs.core.chunk_rest.call(null,inst_14459);
var inst_14465 = cljs.core.count.call(null,inst_14463);
var inst_14440 = inst_14464;
var inst_14441 = inst_14463;
var inst_14442 = inst_14465;
var inst_14443 = (0);
var state_14500__$1 = (function (){var statearr_14535 = state_14500;
(statearr_14535[(10)] = inst_14441);

(statearr_14535[(20)] = inst_14440);

(statearr_14535[(21)] = inst_14442);

(statearr_14535[(12)] = inst_14443);

return statearr_14535;
})();
var statearr_14536_14608 = state_14500__$1;
(statearr_14536_14608[(2)] = null);

(statearr_14536_14608[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (41))){
var inst_14459 = (state_14500[(25)]);
var inst_14475 = (state_14500[(2)]);
var inst_14476 = cljs.core.next.call(null,inst_14459);
var inst_14440 = inst_14476;
var inst_14441 = null;
var inst_14442 = (0);
var inst_14443 = (0);
var state_14500__$1 = (function (){var statearr_14537 = state_14500;
(statearr_14537[(27)] = inst_14475);

(statearr_14537[(10)] = inst_14441);

(statearr_14537[(20)] = inst_14440);

(statearr_14537[(21)] = inst_14442);

(statearr_14537[(12)] = inst_14443);

return statearr_14537;
})();
var statearr_14538_14609 = state_14500__$1;
(statearr_14538_14609[(2)] = null);

(statearr_14538_14609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (43))){
var state_14500__$1 = state_14500;
var statearr_14539_14610 = state_14500__$1;
(statearr_14539_14610[(2)] = null);

(statearr_14539_14610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (29))){
var inst_14484 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14540_14611 = state_14500__$1;
(statearr_14540_14611[(2)] = inst_14484);

(statearr_14540_14611[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (44))){
var inst_14493 = (state_14500[(2)]);
var state_14500__$1 = (function (){var statearr_14541 = state_14500;
(statearr_14541[(28)] = inst_14493);

return statearr_14541;
})();
var statearr_14542_14612 = state_14500__$1;
(statearr_14542_14612[(2)] = null);

(statearr_14542_14612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (6))){
var inst_14432 = (state_14500[(29)]);
var inst_14431 = cljs.core.deref.call(null,cs);
var inst_14432__$1 = cljs.core.keys.call(null,inst_14431);
var inst_14433 = cljs.core.count.call(null,inst_14432__$1);
var inst_14434 = cljs.core.reset_BANG_.call(null,dctr,inst_14433);
var inst_14439 = cljs.core.seq.call(null,inst_14432__$1);
var inst_14440 = inst_14439;
var inst_14441 = null;
var inst_14442 = (0);
var inst_14443 = (0);
var state_14500__$1 = (function (){var statearr_14543 = state_14500;
(statearr_14543[(30)] = inst_14434);

(statearr_14543[(29)] = inst_14432__$1);

(statearr_14543[(10)] = inst_14441);

(statearr_14543[(20)] = inst_14440);

(statearr_14543[(21)] = inst_14442);

(statearr_14543[(12)] = inst_14443);

return statearr_14543;
})();
var statearr_14544_14613 = state_14500__$1;
(statearr_14544_14613[(2)] = null);

(statearr_14544_14613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (28))){
var inst_14459 = (state_14500[(25)]);
var inst_14440 = (state_14500[(20)]);
var inst_14459__$1 = cljs.core.seq.call(null,inst_14440);
var state_14500__$1 = (function (){var statearr_14545 = state_14500;
(statearr_14545[(25)] = inst_14459__$1);

return statearr_14545;
})();
if(inst_14459__$1){
var statearr_14546_14614 = state_14500__$1;
(statearr_14546_14614[(1)] = (33));

} else {
var statearr_14547_14615 = state_14500__$1;
(statearr_14547_14615[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (25))){
var inst_14442 = (state_14500[(21)]);
var inst_14443 = (state_14500[(12)]);
var inst_14445 = (inst_14443 < inst_14442);
var inst_14446 = inst_14445;
var state_14500__$1 = state_14500;
if(cljs.core.truth_(inst_14446)){
var statearr_14548_14616 = state_14500__$1;
(statearr_14548_14616[(1)] = (27));

} else {
var statearr_14549_14617 = state_14500__$1;
(statearr_14549_14617[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (34))){
var state_14500__$1 = state_14500;
var statearr_14550_14618 = state_14500__$1;
(statearr_14550_14618[(2)] = null);

(statearr_14550_14618[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (17))){
var state_14500__$1 = state_14500;
var statearr_14551_14619 = state_14500__$1;
(statearr_14551_14619[(2)] = null);

(statearr_14551_14619[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (3))){
var inst_14498 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14500__$1,inst_14498);
} else {
if((state_val_14501 === (12))){
var inst_14427 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14552_14620 = state_14500__$1;
(statearr_14552_14620[(2)] = inst_14427);

(statearr_14552_14620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (2))){
var state_14500__$1 = state_14500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14500__$1,(4),ch);
} else {
if((state_val_14501 === (23))){
var state_14500__$1 = state_14500;
var statearr_14553_14621 = state_14500__$1;
(statearr_14553_14621[(2)] = null);

(statearr_14553_14621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (35))){
var inst_14482 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14554_14622 = state_14500__$1;
(statearr_14554_14622[(2)] = inst_14482);

(statearr_14554_14622[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (19))){
var inst_14401 = (state_14500[(7)]);
var inst_14405 = cljs.core.chunk_first.call(null,inst_14401);
var inst_14406 = cljs.core.chunk_rest.call(null,inst_14401);
var inst_14407 = cljs.core.count.call(null,inst_14405);
var inst_14381 = inst_14406;
var inst_14382 = inst_14405;
var inst_14383 = inst_14407;
var inst_14384 = (0);
var state_14500__$1 = (function (){var statearr_14555 = state_14500;
(statearr_14555[(13)] = inst_14382);

(statearr_14555[(14)] = inst_14383);

(statearr_14555[(15)] = inst_14384);

(statearr_14555[(16)] = inst_14381);

return statearr_14555;
})();
var statearr_14556_14623 = state_14500__$1;
(statearr_14556_14623[(2)] = null);

(statearr_14556_14623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (11))){
var inst_14401 = (state_14500[(7)]);
var inst_14381 = (state_14500[(16)]);
var inst_14401__$1 = cljs.core.seq.call(null,inst_14381);
var state_14500__$1 = (function (){var statearr_14557 = state_14500;
(statearr_14557[(7)] = inst_14401__$1);

return statearr_14557;
})();
if(inst_14401__$1){
var statearr_14558_14624 = state_14500__$1;
(statearr_14558_14624[(1)] = (16));

} else {
var statearr_14559_14625 = state_14500__$1;
(statearr_14559_14625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (9))){
var inst_14429 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14560_14626 = state_14500__$1;
(statearr_14560_14626[(2)] = inst_14429);

(statearr_14560_14626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (5))){
var inst_14379 = cljs.core.deref.call(null,cs);
var inst_14380 = cljs.core.seq.call(null,inst_14379);
var inst_14381 = inst_14380;
var inst_14382 = null;
var inst_14383 = (0);
var inst_14384 = (0);
var state_14500__$1 = (function (){var statearr_14561 = state_14500;
(statearr_14561[(13)] = inst_14382);

(statearr_14561[(14)] = inst_14383);

(statearr_14561[(15)] = inst_14384);

(statearr_14561[(16)] = inst_14381);

return statearr_14561;
})();
var statearr_14562_14627 = state_14500__$1;
(statearr_14562_14627[(2)] = null);

(statearr_14562_14627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (14))){
var state_14500__$1 = state_14500;
var statearr_14563_14628 = state_14500__$1;
(statearr_14563_14628[(2)] = null);

(statearr_14563_14628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (45))){
var inst_14490 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14564_14629 = state_14500__$1;
(statearr_14564_14629[(2)] = inst_14490);

(statearr_14564_14629[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (26))){
var inst_14432 = (state_14500[(29)]);
var inst_14486 = (state_14500[(2)]);
var inst_14487 = cljs.core.seq.call(null,inst_14432);
var state_14500__$1 = (function (){var statearr_14565 = state_14500;
(statearr_14565[(31)] = inst_14486);

return statearr_14565;
})();
if(inst_14487){
var statearr_14566_14630 = state_14500__$1;
(statearr_14566_14630[(1)] = (42));

} else {
var statearr_14567_14631 = state_14500__$1;
(statearr_14567_14631[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (16))){
var inst_14401 = (state_14500[(7)]);
var inst_14403 = cljs.core.chunked_seq_QMARK_.call(null,inst_14401);
var state_14500__$1 = state_14500;
if(inst_14403){
var statearr_14568_14632 = state_14500__$1;
(statearr_14568_14632[(1)] = (19));

} else {
var statearr_14569_14633 = state_14500__$1;
(statearr_14569_14633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (38))){
var inst_14479 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14570_14634 = state_14500__$1;
(statearr_14570_14634[(2)] = inst_14479);

(statearr_14570_14634[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (30))){
var state_14500__$1 = state_14500;
var statearr_14571_14635 = state_14500__$1;
(statearr_14571_14635[(2)] = null);

(statearr_14571_14635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (10))){
var inst_14382 = (state_14500[(13)]);
var inst_14384 = (state_14500[(15)]);
var inst_14390 = cljs.core._nth.call(null,inst_14382,inst_14384);
var inst_14391 = cljs.core.nth.call(null,inst_14390,(0),null);
var inst_14392 = cljs.core.nth.call(null,inst_14390,(1),null);
var state_14500__$1 = (function (){var statearr_14572 = state_14500;
(statearr_14572[(26)] = inst_14391);

return statearr_14572;
})();
if(cljs.core.truth_(inst_14392)){
var statearr_14573_14636 = state_14500__$1;
(statearr_14573_14636[(1)] = (13));

} else {
var statearr_14574_14637 = state_14500__$1;
(statearr_14574_14637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (18))){
var inst_14425 = (state_14500[(2)]);
var state_14500__$1 = state_14500;
var statearr_14575_14638 = state_14500__$1;
(statearr_14575_14638[(2)] = inst_14425);

(statearr_14575_14638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (42))){
var state_14500__$1 = state_14500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14500__$1,(45),dchan);
} else {
if((state_val_14501 === (37))){
var inst_14459 = (state_14500[(25)]);
var inst_14372 = (state_14500[(9)]);
var inst_14468 = (state_14500[(23)]);
var inst_14468__$1 = cljs.core.first.call(null,inst_14459);
var inst_14469 = cljs.core.async.put_BANG_.call(null,inst_14468__$1,inst_14372,done);
var state_14500__$1 = (function (){var statearr_14576 = state_14500;
(statearr_14576[(23)] = inst_14468__$1);

return statearr_14576;
})();
if(cljs.core.truth_(inst_14469)){
var statearr_14577_14639 = state_14500__$1;
(statearr_14577_14639[(1)] = (39));

} else {
var statearr_14578_14640 = state_14500__$1;
(statearr_14578_14640[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14501 === (8))){
var inst_14383 = (state_14500[(14)]);
var inst_14384 = (state_14500[(15)]);
var inst_14386 = (inst_14384 < inst_14383);
var inst_14387 = inst_14386;
var state_14500__$1 = state_14500;
if(cljs.core.truth_(inst_14387)){
var statearr_14579_14641 = state_14500__$1;
(statearr_14579_14641[(1)] = (10));

} else {
var statearr_14580_14642 = state_14500__$1;
(statearr_14580_14642[(1)] = (11));

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
});})(c__13281__auto___14588,cs,m,dchan,dctr,done))
;
return ((function (switch__13169__auto__,c__13281__auto___14588,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13170__auto__ = null;
var cljs$core$async$mult_$_state_machine__13170__auto____0 = (function (){
var statearr_14584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14584[(0)] = cljs$core$async$mult_$_state_machine__13170__auto__);

(statearr_14584[(1)] = (1));

return statearr_14584;
});
var cljs$core$async$mult_$_state_machine__13170__auto____1 = (function (state_14500){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_14500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e14585){if((e14585 instanceof Object)){
var ex__13173__auto__ = e14585;
var statearr_14586_14643 = state_14500;
(statearr_14586_14643[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14644 = state_14500;
state_14500 = G__14644;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13170__auto__ = function(state_14500){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13170__auto____1.call(this,state_14500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13170__auto____0;
cljs$core$async$mult_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13170__auto____1;
return cljs$core$async$mult_$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___14588,cs,m,dchan,dctr,done))
})();
var state__13283__auto__ = (function (){var statearr_14587 = f__13282__auto__.call(null);
(statearr_14587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___14588);

return statearr_14587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___14588,cs,m,dchan,dctr,done))
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
var args14645 = [];
var len__7214__auto___14648 = arguments.length;
var i__7215__auto___14649 = (0);
while(true){
if((i__7215__auto___14649 < len__7214__auto___14648)){
args14645.push((arguments[i__7215__auto___14649]));

var G__14650 = (i__7215__auto___14649 + (1));
i__7215__auto___14649 = G__14650;
continue;
} else {
}
break;
}

var G__14647 = args14645.length;
switch (G__14647) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14645.length)].join('')));

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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,ch);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m);
} else {
var m__6812__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,state_map);
} else {
var m__6812__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,state_map);
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
var x__6811__auto__ = (((m == null))?null:m);
var m__6812__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,m,mode);
} else {
var m__6812__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7221__auto__ = [];
var len__7214__auto___14662 = arguments.length;
var i__7215__auto___14663 = (0);
while(true){
if((i__7215__auto___14663 < len__7214__auto___14662)){
args__7221__auto__.push((arguments[i__7215__auto___14663]));

var G__14664 = (i__7215__auto___14663 + (1));
i__7215__auto___14663 = G__14664;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14656){
var map__14657 = p__14656;
var map__14657__$1 = ((((!((map__14657 == null)))?((((map__14657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14657):map__14657);
var opts = map__14657__$1;
var statearr_14659_14665 = state;
(statearr_14659_14665[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14657,map__14657__$1,opts){
return (function (val){
var statearr_14660_14666 = state;
(statearr_14660_14666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14657,map__14657__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14661_14667 = state;
(statearr_14661_14667[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14652){
var G__14653 = cljs.core.first.call(null,seq14652);
var seq14652__$1 = cljs.core.next.call(null,seq14652);
var G__14654 = cljs.core.first.call(null,seq14652__$1);
var seq14652__$2 = cljs.core.next.call(null,seq14652__$1);
var G__14655 = cljs.core.first.call(null,seq14652__$2);
var seq14652__$3 = cljs.core.next.call(null,seq14652__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14653,G__14654,G__14655,seq14652__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14831 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14832){
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
this.meta14832 = meta14832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14833,meta14832__$1){
var self__ = this;
var _14833__$1 = this;
return (new cljs.core.async.t_cljs$core$async14831(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14832__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14833){
var self__ = this;
var _14833__$1 = this;
return self__.meta14832;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14831.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14832","meta14832",1356354673,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14831";

cljs.core.async.t_cljs$core$async14831.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14831");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14831 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14831(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14832){
return (new cljs.core.async.t_cljs$core$async14831(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14832));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14831(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13281__auto___14994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___14994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___14994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14931){
var state_val_14932 = (state_14931[(1)]);
if((state_val_14932 === (7))){
var inst_14849 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14933_14995 = state_14931__$1;
(statearr_14933_14995[(2)] = inst_14849);

(statearr_14933_14995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (20))){
var inst_14861 = (state_14931[(7)]);
var state_14931__$1 = state_14931;
var statearr_14934_14996 = state_14931__$1;
(statearr_14934_14996[(2)] = inst_14861);

(statearr_14934_14996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (27))){
var state_14931__$1 = state_14931;
var statearr_14935_14997 = state_14931__$1;
(statearr_14935_14997[(2)] = null);

(statearr_14935_14997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (1))){
var inst_14837 = (state_14931[(8)]);
var inst_14837__$1 = calc_state.call(null);
var inst_14839 = (inst_14837__$1 == null);
var inst_14840 = cljs.core.not.call(null,inst_14839);
var state_14931__$1 = (function (){var statearr_14936 = state_14931;
(statearr_14936[(8)] = inst_14837__$1);

return statearr_14936;
})();
if(inst_14840){
var statearr_14937_14998 = state_14931__$1;
(statearr_14937_14998[(1)] = (2));

} else {
var statearr_14938_14999 = state_14931__$1;
(statearr_14938_14999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (24))){
var inst_14891 = (state_14931[(9)]);
var inst_14905 = (state_14931[(10)]);
var inst_14884 = (state_14931[(11)]);
var inst_14905__$1 = inst_14884.call(null,inst_14891);
var state_14931__$1 = (function (){var statearr_14939 = state_14931;
(statearr_14939[(10)] = inst_14905__$1);

return statearr_14939;
})();
if(cljs.core.truth_(inst_14905__$1)){
var statearr_14940_15000 = state_14931__$1;
(statearr_14940_15000[(1)] = (29));

} else {
var statearr_14941_15001 = state_14931__$1;
(statearr_14941_15001[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (4))){
var inst_14852 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14852)){
var statearr_14942_15002 = state_14931__$1;
(statearr_14942_15002[(1)] = (8));

} else {
var statearr_14943_15003 = state_14931__$1;
(statearr_14943_15003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (15))){
var inst_14878 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14878)){
var statearr_14944_15004 = state_14931__$1;
(statearr_14944_15004[(1)] = (19));

} else {
var statearr_14945_15005 = state_14931__$1;
(statearr_14945_15005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (21))){
var inst_14883 = (state_14931[(12)]);
var inst_14883__$1 = (state_14931[(2)]);
var inst_14884 = cljs.core.get.call(null,inst_14883__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14885 = cljs.core.get.call(null,inst_14883__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14886 = cljs.core.get.call(null,inst_14883__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14931__$1 = (function (){var statearr_14946 = state_14931;
(statearr_14946[(12)] = inst_14883__$1);

(statearr_14946[(11)] = inst_14884);

(statearr_14946[(13)] = inst_14885);

return statearr_14946;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14931__$1,(22),inst_14886);
} else {
if((state_val_14932 === (31))){
var inst_14913 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14913)){
var statearr_14947_15006 = state_14931__$1;
(statearr_14947_15006[(1)] = (32));

} else {
var statearr_14948_15007 = state_14931__$1;
(statearr_14948_15007[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (32))){
var inst_14890 = (state_14931[(14)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14931__$1,(35),out,inst_14890);
} else {
if((state_val_14932 === (33))){
var inst_14883 = (state_14931[(12)]);
var inst_14861 = inst_14883;
var state_14931__$1 = (function (){var statearr_14949 = state_14931;
(statearr_14949[(7)] = inst_14861);

return statearr_14949;
})();
var statearr_14950_15008 = state_14931__$1;
(statearr_14950_15008[(2)] = null);

(statearr_14950_15008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (13))){
var inst_14861 = (state_14931[(7)]);
var inst_14868 = inst_14861.cljs$lang$protocol_mask$partition0$;
var inst_14869 = (inst_14868 & (64));
var inst_14870 = inst_14861.cljs$core$ISeq$;
var inst_14871 = (inst_14869) || (inst_14870);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14871)){
var statearr_14951_15009 = state_14931__$1;
(statearr_14951_15009[(1)] = (16));

} else {
var statearr_14952_15010 = state_14931__$1;
(statearr_14952_15010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (22))){
var inst_14891 = (state_14931[(9)]);
var inst_14890 = (state_14931[(14)]);
var inst_14889 = (state_14931[(2)]);
var inst_14890__$1 = cljs.core.nth.call(null,inst_14889,(0),null);
var inst_14891__$1 = cljs.core.nth.call(null,inst_14889,(1),null);
var inst_14892 = (inst_14890__$1 == null);
var inst_14893 = cljs.core._EQ_.call(null,inst_14891__$1,change);
var inst_14894 = (inst_14892) || (inst_14893);
var state_14931__$1 = (function (){var statearr_14953 = state_14931;
(statearr_14953[(9)] = inst_14891__$1);

(statearr_14953[(14)] = inst_14890__$1);

return statearr_14953;
})();
if(cljs.core.truth_(inst_14894)){
var statearr_14954_15011 = state_14931__$1;
(statearr_14954_15011[(1)] = (23));

} else {
var statearr_14955_15012 = state_14931__$1;
(statearr_14955_15012[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (36))){
var inst_14883 = (state_14931[(12)]);
var inst_14861 = inst_14883;
var state_14931__$1 = (function (){var statearr_14956 = state_14931;
(statearr_14956[(7)] = inst_14861);

return statearr_14956;
})();
var statearr_14957_15013 = state_14931__$1;
(statearr_14957_15013[(2)] = null);

(statearr_14957_15013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (29))){
var inst_14905 = (state_14931[(10)]);
var state_14931__$1 = state_14931;
var statearr_14958_15014 = state_14931__$1;
(statearr_14958_15014[(2)] = inst_14905);

(statearr_14958_15014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (6))){
var state_14931__$1 = state_14931;
var statearr_14959_15015 = state_14931__$1;
(statearr_14959_15015[(2)] = false);

(statearr_14959_15015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (28))){
var inst_14901 = (state_14931[(2)]);
var inst_14902 = calc_state.call(null);
var inst_14861 = inst_14902;
var state_14931__$1 = (function (){var statearr_14960 = state_14931;
(statearr_14960[(15)] = inst_14901);

(statearr_14960[(7)] = inst_14861);

return statearr_14960;
})();
var statearr_14961_15016 = state_14931__$1;
(statearr_14961_15016[(2)] = null);

(statearr_14961_15016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (25))){
var inst_14927 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14962_15017 = state_14931__$1;
(statearr_14962_15017[(2)] = inst_14927);

(statearr_14962_15017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (34))){
var inst_14925 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14963_15018 = state_14931__$1;
(statearr_14963_15018[(2)] = inst_14925);

(statearr_14963_15018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (17))){
var state_14931__$1 = state_14931;
var statearr_14964_15019 = state_14931__$1;
(statearr_14964_15019[(2)] = false);

(statearr_14964_15019[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (3))){
var state_14931__$1 = state_14931;
var statearr_14965_15020 = state_14931__$1;
(statearr_14965_15020[(2)] = false);

(statearr_14965_15020[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (12))){
var inst_14929 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14931__$1,inst_14929);
} else {
if((state_val_14932 === (2))){
var inst_14837 = (state_14931[(8)]);
var inst_14842 = inst_14837.cljs$lang$protocol_mask$partition0$;
var inst_14843 = (inst_14842 & (64));
var inst_14844 = inst_14837.cljs$core$ISeq$;
var inst_14845 = (inst_14843) || (inst_14844);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14845)){
var statearr_14966_15021 = state_14931__$1;
(statearr_14966_15021[(1)] = (5));

} else {
var statearr_14967_15022 = state_14931__$1;
(statearr_14967_15022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (23))){
var inst_14890 = (state_14931[(14)]);
var inst_14896 = (inst_14890 == null);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14896)){
var statearr_14968_15023 = state_14931__$1;
(statearr_14968_15023[(1)] = (26));

} else {
var statearr_14969_15024 = state_14931__$1;
(statearr_14969_15024[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (35))){
var inst_14916 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14916)){
var statearr_14970_15025 = state_14931__$1;
(statearr_14970_15025[(1)] = (36));

} else {
var statearr_14971_15026 = state_14931__$1;
(statearr_14971_15026[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (19))){
var inst_14861 = (state_14931[(7)]);
var inst_14880 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14861);
var state_14931__$1 = state_14931;
var statearr_14972_15027 = state_14931__$1;
(statearr_14972_15027[(2)] = inst_14880);

(statearr_14972_15027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (11))){
var inst_14861 = (state_14931[(7)]);
var inst_14865 = (inst_14861 == null);
var inst_14866 = cljs.core.not.call(null,inst_14865);
var state_14931__$1 = state_14931;
if(inst_14866){
var statearr_14973_15028 = state_14931__$1;
(statearr_14973_15028[(1)] = (13));

} else {
var statearr_14974_15029 = state_14931__$1;
(statearr_14974_15029[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (9))){
var inst_14837 = (state_14931[(8)]);
var state_14931__$1 = state_14931;
var statearr_14975_15030 = state_14931__$1;
(statearr_14975_15030[(2)] = inst_14837);

(statearr_14975_15030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (5))){
var state_14931__$1 = state_14931;
var statearr_14976_15031 = state_14931__$1;
(statearr_14976_15031[(2)] = true);

(statearr_14976_15031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (14))){
var state_14931__$1 = state_14931;
var statearr_14977_15032 = state_14931__$1;
(statearr_14977_15032[(2)] = false);

(statearr_14977_15032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (26))){
var inst_14891 = (state_14931[(9)]);
var inst_14898 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14891);
var state_14931__$1 = state_14931;
var statearr_14978_15033 = state_14931__$1;
(statearr_14978_15033[(2)] = inst_14898);

(statearr_14978_15033[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (16))){
var state_14931__$1 = state_14931;
var statearr_14979_15034 = state_14931__$1;
(statearr_14979_15034[(2)] = true);

(statearr_14979_15034[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (38))){
var inst_14921 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14980_15035 = state_14931__$1;
(statearr_14980_15035[(2)] = inst_14921);

(statearr_14980_15035[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (30))){
var inst_14891 = (state_14931[(9)]);
var inst_14884 = (state_14931[(11)]);
var inst_14885 = (state_14931[(13)]);
var inst_14908 = cljs.core.empty_QMARK_.call(null,inst_14884);
var inst_14909 = inst_14885.call(null,inst_14891);
var inst_14910 = cljs.core.not.call(null,inst_14909);
var inst_14911 = (inst_14908) && (inst_14910);
var state_14931__$1 = state_14931;
var statearr_14981_15036 = state_14931__$1;
(statearr_14981_15036[(2)] = inst_14911);

(statearr_14981_15036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (10))){
var inst_14837 = (state_14931[(8)]);
var inst_14857 = (state_14931[(2)]);
var inst_14858 = cljs.core.get.call(null,inst_14857,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14859 = cljs.core.get.call(null,inst_14857,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14860 = cljs.core.get.call(null,inst_14857,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14861 = inst_14837;
var state_14931__$1 = (function (){var statearr_14982 = state_14931;
(statearr_14982[(16)] = inst_14858);

(statearr_14982[(7)] = inst_14861);

(statearr_14982[(17)] = inst_14860);

(statearr_14982[(18)] = inst_14859);

return statearr_14982;
})();
var statearr_14983_15037 = state_14931__$1;
(statearr_14983_15037[(2)] = null);

(statearr_14983_15037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (18))){
var inst_14875 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14984_15038 = state_14931__$1;
(statearr_14984_15038[(2)] = inst_14875);

(statearr_14984_15038[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (37))){
var state_14931__$1 = state_14931;
var statearr_14985_15039 = state_14931__$1;
(statearr_14985_15039[(2)] = null);

(statearr_14985_15039[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (8))){
var inst_14837 = (state_14931[(8)]);
var inst_14854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14837);
var state_14931__$1 = state_14931;
var statearr_14986_15040 = state_14931__$1;
(statearr_14986_15040[(2)] = inst_14854);

(statearr_14986_15040[(1)] = (10));


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
});})(c__13281__auto___14994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13169__auto__,c__13281__auto___14994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13170__auto__ = null;
var cljs$core$async$mix_$_state_machine__13170__auto____0 = (function (){
var statearr_14990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14990[(0)] = cljs$core$async$mix_$_state_machine__13170__auto__);

(statearr_14990[(1)] = (1));

return statearr_14990;
});
var cljs$core$async$mix_$_state_machine__13170__auto____1 = (function (state_14931){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_14931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e14991){if((e14991 instanceof Object)){
var ex__13173__auto__ = e14991;
var statearr_14992_15041 = state_14931;
(statearr_14992_15041[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15042 = state_14931;
state_14931 = G__15042;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13170__auto__ = function(state_14931){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13170__auto____1.call(this,state_14931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13170__auto____0;
cljs$core$async$mix_$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13170__auto____1;
return cljs$core$async$mix_$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___14994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13283__auto__ = (function (){var statearr_14993 = f__13282__auto__.call(null);
(statearr_14993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___14994);

return statearr_14993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___14994,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6812__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v,ch);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15043 = [];
var len__7214__auto___15046 = arguments.length;
var i__7215__auto___15047 = (0);
while(true){
if((i__7215__auto___15047 < len__7214__auto___15046)){
args15043.push((arguments[i__7215__auto___15047]));

var G__15048 = (i__7215__auto___15047 + (1));
i__7215__auto___15047 = G__15048;
continue;
} else {
}
break;
}

var G__15045 = args15043.length;
switch (G__15045) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15043.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p);
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
var x__6811__auto__ = (((p == null))?null:p);
var m__6812__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6811__auto__)]);
if(!((m__6812__auto__ == null))){
return m__6812__auto__.call(null,p,v);
} else {
var m__6812__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6812__auto____$1 == null))){
return m__6812__auto____$1.call(null,p,v);
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
var args15051 = [];
var len__7214__auto___15176 = arguments.length;
var i__7215__auto___15177 = (0);
while(true){
if((i__7215__auto___15177 < len__7214__auto___15176)){
args15051.push((arguments[i__7215__auto___15177]));

var G__15178 = (i__7215__auto___15177 + (1));
i__7215__auto___15177 = G__15178;
continue;
} else {
}
break;
}

var G__15053 = args15051.length;
switch (G__15053) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15051.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6156__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6156__auto__,mults){
return (function (p1__15050_SHARP_){
if(cljs.core.truth_(p1__15050_SHARP_.call(null,topic))){
return p1__15050_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15050_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15054 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15055){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15055 = meta15055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15056,meta15055__$1){
var self__ = this;
var _15056__$1 = this;
return (new cljs.core.async.t_cljs$core$async15054(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15055__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15056){
var self__ = this;
var _15056__$1 = this;
return self__.meta15055;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15055","meta15055",-1440041651,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15054";

cljs.core.async.t_cljs$core$async15054.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15054");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15054 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15054(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15055){
return (new cljs.core.async.t_cljs$core$async15054(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15055));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15054(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13281__auto___15180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15180,mults,ensure_mult,p){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15180,mults,ensure_mult,p){
return (function (state_15128){
var state_val_15129 = (state_15128[(1)]);
if((state_val_15129 === (7))){
var inst_15124 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15130_15181 = state_15128__$1;
(statearr_15130_15181[(2)] = inst_15124);

(statearr_15130_15181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (20))){
var state_15128__$1 = state_15128;
var statearr_15131_15182 = state_15128__$1;
(statearr_15131_15182[(2)] = null);

(statearr_15131_15182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (1))){
var state_15128__$1 = state_15128;
var statearr_15132_15183 = state_15128__$1;
(statearr_15132_15183[(2)] = null);

(statearr_15132_15183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (24))){
var inst_15107 = (state_15128[(7)]);
var inst_15116 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15107);
var state_15128__$1 = state_15128;
var statearr_15133_15184 = state_15128__$1;
(statearr_15133_15184[(2)] = inst_15116);

(statearr_15133_15184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (4))){
var inst_15059 = (state_15128[(8)]);
var inst_15059__$1 = (state_15128[(2)]);
var inst_15060 = (inst_15059__$1 == null);
var state_15128__$1 = (function (){var statearr_15134 = state_15128;
(statearr_15134[(8)] = inst_15059__$1);

return statearr_15134;
})();
if(cljs.core.truth_(inst_15060)){
var statearr_15135_15185 = state_15128__$1;
(statearr_15135_15185[(1)] = (5));

} else {
var statearr_15136_15186 = state_15128__$1;
(statearr_15136_15186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (15))){
var inst_15101 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15137_15187 = state_15128__$1;
(statearr_15137_15187[(2)] = inst_15101);

(statearr_15137_15187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (21))){
var inst_15121 = (state_15128[(2)]);
var state_15128__$1 = (function (){var statearr_15138 = state_15128;
(statearr_15138[(9)] = inst_15121);

return statearr_15138;
})();
var statearr_15139_15188 = state_15128__$1;
(statearr_15139_15188[(2)] = null);

(statearr_15139_15188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (13))){
var inst_15083 = (state_15128[(10)]);
var inst_15085 = cljs.core.chunked_seq_QMARK_.call(null,inst_15083);
var state_15128__$1 = state_15128;
if(inst_15085){
var statearr_15140_15189 = state_15128__$1;
(statearr_15140_15189[(1)] = (16));

} else {
var statearr_15141_15190 = state_15128__$1;
(statearr_15141_15190[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (22))){
var inst_15113 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
if(cljs.core.truth_(inst_15113)){
var statearr_15142_15191 = state_15128__$1;
(statearr_15142_15191[(1)] = (23));

} else {
var statearr_15143_15192 = state_15128__$1;
(statearr_15143_15192[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (6))){
var inst_15059 = (state_15128[(8)]);
var inst_15107 = (state_15128[(7)]);
var inst_15109 = (state_15128[(11)]);
var inst_15107__$1 = topic_fn.call(null,inst_15059);
var inst_15108 = cljs.core.deref.call(null,mults);
var inst_15109__$1 = cljs.core.get.call(null,inst_15108,inst_15107__$1);
var state_15128__$1 = (function (){var statearr_15144 = state_15128;
(statearr_15144[(7)] = inst_15107__$1);

(statearr_15144[(11)] = inst_15109__$1);

return statearr_15144;
})();
if(cljs.core.truth_(inst_15109__$1)){
var statearr_15145_15193 = state_15128__$1;
(statearr_15145_15193[(1)] = (19));

} else {
var statearr_15146_15194 = state_15128__$1;
(statearr_15146_15194[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (25))){
var inst_15118 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15147_15195 = state_15128__$1;
(statearr_15147_15195[(2)] = inst_15118);

(statearr_15147_15195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (17))){
var inst_15083 = (state_15128[(10)]);
var inst_15092 = cljs.core.first.call(null,inst_15083);
var inst_15093 = cljs.core.async.muxch_STAR_.call(null,inst_15092);
var inst_15094 = cljs.core.async.close_BANG_.call(null,inst_15093);
var inst_15095 = cljs.core.next.call(null,inst_15083);
var inst_15069 = inst_15095;
var inst_15070 = null;
var inst_15071 = (0);
var inst_15072 = (0);
var state_15128__$1 = (function (){var statearr_15148 = state_15128;
(statearr_15148[(12)] = inst_15072);

(statearr_15148[(13)] = inst_15069);

(statearr_15148[(14)] = inst_15071);

(statearr_15148[(15)] = inst_15070);

(statearr_15148[(16)] = inst_15094);

return statearr_15148;
})();
var statearr_15149_15196 = state_15128__$1;
(statearr_15149_15196[(2)] = null);

(statearr_15149_15196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (3))){
var inst_15126 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15128__$1,inst_15126);
} else {
if((state_val_15129 === (12))){
var inst_15103 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15150_15197 = state_15128__$1;
(statearr_15150_15197[(2)] = inst_15103);

(statearr_15150_15197[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (2))){
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15128__$1,(4),ch);
} else {
if((state_val_15129 === (23))){
var state_15128__$1 = state_15128;
var statearr_15151_15198 = state_15128__$1;
(statearr_15151_15198[(2)] = null);

(statearr_15151_15198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (19))){
var inst_15059 = (state_15128[(8)]);
var inst_15109 = (state_15128[(11)]);
var inst_15111 = cljs.core.async.muxch_STAR_.call(null,inst_15109);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15128__$1,(22),inst_15111,inst_15059);
} else {
if((state_val_15129 === (11))){
var inst_15069 = (state_15128[(13)]);
var inst_15083 = (state_15128[(10)]);
var inst_15083__$1 = cljs.core.seq.call(null,inst_15069);
var state_15128__$1 = (function (){var statearr_15152 = state_15128;
(statearr_15152[(10)] = inst_15083__$1);

return statearr_15152;
})();
if(inst_15083__$1){
var statearr_15153_15199 = state_15128__$1;
(statearr_15153_15199[(1)] = (13));

} else {
var statearr_15154_15200 = state_15128__$1;
(statearr_15154_15200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (9))){
var inst_15105 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15155_15201 = state_15128__$1;
(statearr_15155_15201[(2)] = inst_15105);

(statearr_15155_15201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (5))){
var inst_15066 = cljs.core.deref.call(null,mults);
var inst_15067 = cljs.core.vals.call(null,inst_15066);
var inst_15068 = cljs.core.seq.call(null,inst_15067);
var inst_15069 = inst_15068;
var inst_15070 = null;
var inst_15071 = (0);
var inst_15072 = (0);
var state_15128__$1 = (function (){var statearr_15156 = state_15128;
(statearr_15156[(12)] = inst_15072);

(statearr_15156[(13)] = inst_15069);

(statearr_15156[(14)] = inst_15071);

(statearr_15156[(15)] = inst_15070);

return statearr_15156;
})();
var statearr_15157_15202 = state_15128__$1;
(statearr_15157_15202[(2)] = null);

(statearr_15157_15202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (14))){
var state_15128__$1 = state_15128;
var statearr_15161_15203 = state_15128__$1;
(statearr_15161_15203[(2)] = null);

(statearr_15161_15203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (16))){
var inst_15083 = (state_15128[(10)]);
var inst_15087 = cljs.core.chunk_first.call(null,inst_15083);
var inst_15088 = cljs.core.chunk_rest.call(null,inst_15083);
var inst_15089 = cljs.core.count.call(null,inst_15087);
var inst_15069 = inst_15088;
var inst_15070 = inst_15087;
var inst_15071 = inst_15089;
var inst_15072 = (0);
var state_15128__$1 = (function (){var statearr_15162 = state_15128;
(statearr_15162[(12)] = inst_15072);

(statearr_15162[(13)] = inst_15069);

(statearr_15162[(14)] = inst_15071);

(statearr_15162[(15)] = inst_15070);

return statearr_15162;
})();
var statearr_15163_15204 = state_15128__$1;
(statearr_15163_15204[(2)] = null);

(statearr_15163_15204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (10))){
var inst_15072 = (state_15128[(12)]);
var inst_15069 = (state_15128[(13)]);
var inst_15071 = (state_15128[(14)]);
var inst_15070 = (state_15128[(15)]);
var inst_15077 = cljs.core._nth.call(null,inst_15070,inst_15072);
var inst_15078 = cljs.core.async.muxch_STAR_.call(null,inst_15077);
var inst_15079 = cljs.core.async.close_BANG_.call(null,inst_15078);
var inst_15080 = (inst_15072 + (1));
var tmp15158 = inst_15069;
var tmp15159 = inst_15071;
var tmp15160 = inst_15070;
var inst_15069__$1 = tmp15158;
var inst_15070__$1 = tmp15160;
var inst_15071__$1 = tmp15159;
var inst_15072__$1 = inst_15080;
var state_15128__$1 = (function (){var statearr_15164 = state_15128;
(statearr_15164[(12)] = inst_15072__$1);

(statearr_15164[(13)] = inst_15069__$1);

(statearr_15164[(17)] = inst_15079);

(statearr_15164[(14)] = inst_15071__$1);

(statearr_15164[(15)] = inst_15070__$1);

return statearr_15164;
})();
var statearr_15165_15205 = state_15128__$1;
(statearr_15165_15205[(2)] = null);

(statearr_15165_15205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (18))){
var inst_15098 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15166_15206 = state_15128__$1;
(statearr_15166_15206[(2)] = inst_15098);

(statearr_15166_15206[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (8))){
var inst_15072 = (state_15128[(12)]);
var inst_15071 = (state_15128[(14)]);
var inst_15074 = (inst_15072 < inst_15071);
var inst_15075 = inst_15074;
var state_15128__$1 = state_15128;
if(cljs.core.truth_(inst_15075)){
var statearr_15167_15207 = state_15128__$1;
(statearr_15167_15207[(1)] = (10));

} else {
var statearr_15168_15208 = state_15128__$1;
(statearr_15168_15208[(1)] = (11));

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
});})(c__13281__auto___15180,mults,ensure_mult,p))
;
return ((function (switch__13169__auto__,c__13281__auto___15180,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15172[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15172[(1)] = (1));

return statearr_15172;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15128){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15173){if((e15173 instanceof Object)){
var ex__13173__auto__ = e15173;
var statearr_15174_15209 = state_15128;
(statearr_15174_15209[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15210 = state_15128;
state_15128 = G__15210;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15180,mults,ensure_mult,p))
})();
var state__13283__auto__ = (function (){var statearr_15175 = f__13282__auto__.call(null);
(statearr_15175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15180);

return statearr_15175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15180,mults,ensure_mult,p))
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
var args15211 = [];
var len__7214__auto___15214 = arguments.length;
var i__7215__auto___15215 = (0);
while(true){
if((i__7215__auto___15215 < len__7214__auto___15214)){
args15211.push((arguments[i__7215__auto___15215]));

var G__15216 = (i__7215__auto___15215 + (1));
i__7215__auto___15215 = G__15216;
continue;
} else {
}
break;
}

var G__15213 = args15211.length;
switch (G__15213) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15211.length)].join('')));

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
var args15218 = [];
var len__7214__auto___15221 = arguments.length;
var i__7215__auto___15222 = (0);
while(true){
if((i__7215__auto___15222 < len__7214__auto___15221)){
args15218.push((arguments[i__7215__auto___15222]));

var G__15223 = (i__7215__auto___15222 + (1));
i__7215__auto___15222 = G__15223;
continue;
} else {
}
break;
}

var G__15220 = args15218.length;
switch (G__15220) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15218.length)].join('')));

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
var args15225 = [];
var len__7214__auto___15296 = arguments.length;
var i__7215__auto___15297 = (0);
while(true){
if((i__7215__auto___15297 < len__7214__auto___15296)){
args15225.push((arguments[i__7215__auto___15297]));

var G__15298 = (i__7215__auto___15297 + (1));
i__7215__auto___15297 = G__15298;
continue;
} else {
}
break;
}

var G__15227 = args15225.length;
switch (G__15227) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15225.length)].join('')));

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
var c__13281__auto___15300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15266){
var state_val_15267 = (state_15266[(1)]);
if((state_val_15267 === (7))){
var state_15266__$1 = state_15266;
var statearr_15268_15301 = state_15266__$1;
(statearr_15268_15301[(2)] = null);

(statearr_15268_15301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (1))){
var state_15266__$1 = state_15266;
var statearr_15269_15302 = state_15266__$1;
(statearr_15269_15302[(2)] = null);

(statearr_15269_15302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (4))){
var inst_15230 = (state_15266[(7)]);
var inst_15232 = (inst_15230 < cnt);
var state_15266__$1 = state_15266;
if(cljs.core.truth_(inst_15232)){
var statearr_15270_15303 = state_15266__$1;
(statearr_15270_15303[(1)] = (6));

} else {
var statearr_15271_15304 = state_15266__$1;
(statearr_15271_15304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (15))){
var inst_15262 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15272_15305 = state_15266__$1;
(statearr_15272_15305[(2)] = inst_15262);

(statearr_15272_15305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (13))){
var inst_15255 = cljs.core.async.close_BANG_.call(null,out);
var state_15266__$1 = state_15266;
var statearr_15273_15306 = state_15266__$1;
(statearr_15273_15306[(2)] = inst_15255);

(statearr_15273_15306[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (6))){
var state_15266__$1 = state_15266;
var statearr_15274_15307 = state_15266__$1;
(statearr_15274_15307[(2)] = null);

(statearr_15274_15307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (3))){
var inst_15264 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15266__$1,inst_15264);
} else {
if((state_val_15267 === (12))){
var inst_15252 = (state_15266[(8)]);
var inst_15252__$1 = (state_15266[(2)]);
var inst_15253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15252__$1);
var state_15266__$1 = (function (){var statearr_15275 = state_15266;
(statearr_15275[(8)] = inst_15252__$1);

return statearr_15275;
})();
if(cljs.core.truth_(inst_15253)){
var statearr_15276_15308 = state_15266__$1;
(statearr_15276_15308[(1)] = (13));

} else {
var statearr_15277_15309 = state_15266__$1;
(statearr_15277_15309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (2))){
var inst_15229 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15230 = (0);
var state_15266__$1 = (function (){var statearr_15278 = state_15266;
(statearr_15278[(9)] = inst_15229);

(statearr_15278[(7)] = inst_15230);

return statearr_15278;
})();
var statearr_15279_15310 = state_15266__$1;
(statearr_15279_15310[(2)] = null);

(statearr_15279_15310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (11))){
var inst_15230 = (state_15266[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15266,(10),Object,null,(9));
var inst_15239 = chs__$1.call(null,inst_15230);
var inst_15240 = done.call(null,inst_15230);
var inst_15241 = cljs.core.async.take_BANG_.call(null,inst_15239,inst_15240);
var state_15266__$1 = state_15266;
var statearr_15280_15311 = state_15266__$1;
(statearr_15280_15311[(2)] = inst_15241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (9))){
var inst_15230 = (state_15266[(7)]);
var inst_15243 = (state_15266[(2)]);
var inst_15244 = (inst_15230 + (1));
var inst_15230__$1 = inst_15244;
var state_15266__$1 = (function (){var statearr_15281 = state_15266;
(statearr_15281[(10)] = inst_15243);

(statearr_15281[(7)] = inst_15230__$1);

return statearr_15281;
})();
var statearr_15282_15312 = state_15266__$1;
(statearr_15282_15312[(2)] = null);

(statearr_15282_15312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (5))){
var inst_15250 = (state_15266[(2)]);
var state_15266__$1 = (function (){var statearr_15283 = state_15266;
(statearr_15283[(11)] = inst_15250);

return statearr_15283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15266__$1,(12),dchan);
} else {
if((state_val_15267 === (14))){
var inst_15252 = (state_15266[(8)]);
var inst_15257 = cljs.core.apply.call(null,f,inst_15252);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15266__$1,(16),out,inst_15257);
} else {
if((state_val_15267 === (16))){
var inst_15259 = (state_15266[(2)]);
var state_15266__$1 = (function (){var statearr_15284 = state_15266;
(statearr_15284[(12)] = inst_15259);

return statearr_15284;
})();
var statearr_15285_15313 = state_15266__$1;
(statearr_15285_15313[(2)] = null);

(statearr_15285_15313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (10))){
var inst_15234 = (state_15266[(2)]);
var inst_15235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15266__$1 = (function (){var statearr_15286 = state_15266;
(statearr_15286[(13)] = inst_15234);

return statearr_15286;
})();
var statearr_15287_15314 = state_15266__$1;
(statearr_15287_15314[(2)] = inst_15235);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15266__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (8))){
var inst_15248 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15288_15315 = state_15266__$1;
(statearr_15288_15315[(2)] = inst_15248);

(statearr_15288_15315[(1)] = (5));


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
});})(c__13281__auto___15300,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13169__auto__,c__13281__auto___15300,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15292[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15292[(1)] = (1));

return statearr_15292;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15266){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15293){if((e15293 instanceof Object)){
var ex__13173__auto__ = e15293;
var statearr_15294_15316 = state_15266;
(statearr_15294_15316[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15317 = state_15266;
state_15266 = G__15317;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15300,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13283__auto__ = (function (){var statearr_15295 = f__13282__auto__.call(null);
(statearr_15295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15300);

return statearr_15295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15300,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15319 = [];
var len__7214__auto___15375 = arguments.length;
var i__7215__auto___15376 = (0);
while(true){
if((i__7215__auto___15376 < len__7214__auto___15375)){
args15319.push((arguments[i__7215__auto___15376]));

var G__15377 = (i__7215__auto___15376 + (1));
i__7215__auto___15376 = G__15377;
continue;
} else {
}
break;
}

var G__15321 = args15319.length;
switch (G__15321) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15319.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13281__auto___15379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15379,out){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15379,out){
return (function (state_15351){
var state_val_15352 = (state_15351[(1)]);
if((state_val_15352 === (7))){
var inst_15330 = (state_15351[(7)]);
var inst_15331 = (state_15351[(8)]);
var inst_15330__$1 = (state_15351[(2)]);
var inst_15331__$1 = cljs.core.nth.call(null,inst_15330__$1,(0),null);
var inst_15332 = cljs.core.nth.call(null,inst_15330__$1,(1),null);
var inst_15333 = (inst_15331__$1 == null);
var state_15351__$1 = (function (){var statearr_15353 = state_15351;
(statearr_15353[(7)] = inst_15330__$1);

(statearr_15353[(9)] = inst_15332);

(statearr_15353[(8)] = inst_15331__$1);

return statearr_15353;
})();
if(cljs.core.truth_(inst_15333)){
var statearr_15354_15380 = state_15351__$1;
(statearr_15354_15380[(1)] = (8));

} else {
var statearr_15355_15381 = state_15351__$1;
(statearr_15355_15381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (1))){
var inst_15322 = cljs.core.vec.call(null,chs);
var inst_15323 = inst_15322;
var state_15351__$1 = (function (){var statearr_15356 = state_15351;
(statearr_15356[(10)] = inst_15323);

return statearr_15356;
})();
var statearr_15357_15382 = state_15351__$1;
(statearr_15357_15382[(2)] = null);

(statearr_15357_15382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (4))){
var inst_15323 = (state_15351[(10)]);
var state_15351__$1 = state_15351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15351__$1,(7),inst_15323);
} else {
if((state_val_15352 === (6))){
var inst_15347 = (state_15351[(2)]);
var state_15351__$1 = state_15351;
var statearr_15358_15383 = state_15351__$1;
(statearr_15358_15383[(2)] = inst_15347);

(statearr_15358_15383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (3))){
var inst_15349 = (state_15351[(2)]);
var state_15351__$1 = state_15351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15351__$1,inst_15349);
} else {
if((state_val_15352 === (2))){
var inst_15323 = (state_15351[(10)]);
var inst_15325 = cljs.core.count.call(null,inst_15323);
var inst_15326 = (inst_15325 > (0));
var state_15351__$1 = state_15351;
if(cljs.core.truth_(inst_15326)){
var statearr_15360_15384 = state_15351__$1;
(statearr_15360_15384[(1)] = (4));

} else {
var statearr_15361_15385 = state_15351__$1;
(statearr_15361_15385[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (11))){
var inst_15323 = (state_15351[(10)]);
var inst_15340 = (state_15351[(2)]);
var tmp15359 = inst_15323;
var inst_15323__$1 = tmp15359;
var state_15351__$1 = (function (){var statearr_15362 = state_15351;
(statearr_15362[(10)] = inst_15323__$1);

(statearr_15362[(11)] = inst_15340);

return statearr_15362;
})();
var statearr_15363_15386 = state_15351__$1;
(statearr_15363_15386[(2)] = null);

(statearr_15363_15386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (9))){
var inst_15331 = (state_15351[(8)]);
var state_15351__$1 = state_15351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15351__$1,(11),out,inst_15331);
} else {
if((state_val_15352 === (5))){
var inst_15345 = cljs.core.async.close_BANG_.call(null,out);
var state_15351__$1 = state_15351;
var statearr_15364_15387 = state_15351__$1;
(statearr_15364_15387[(2)] = inst_15345);

(statearr_15364_15387[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (10))){
var inst_15343 = (state_15351[(2)]);
var state_15351__$1 = state_15351;
var statearr_15365_15388 = state_15351__$1;
(statearr_15365_15388[(2)] = inst_15343);

(statearr_15365_15388[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15352 === (8))){
var inst_15330 = (state_15351[(7)]);
var inst_15323 = (state_15351[(10)]);
var inst_15332 = (state_15351[(9)]);
var inst_15331 = (state_15351[(8)]);
var inst_15335 = (function (){var cs = inst_15323;
var vec__15328 = inst_15330;
var v = inst_15331;
var c = inst_15332;
return ((function (cs,vec__15328,v,c,inst_15330,inst_15323,inst_15332,inst_15331,state_val_15352,c__13281__auto___15379,out){
return (function (p1__15318_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15318_SHARP_);
});
;})(cs,vec__15328,v,c,inst_15330,inst_15323,inst_15332,inst_15331,state_val_15352,c__13281__auto___15379,out))
})();
var inst_15336 = cljs.core.filterv.call(null,inst_15335,inst_15323);
var inst_15323__$1 = inst_15336;
var state_15351__$1 = (function (){var statearr_15366 = state_15351;
(statearr_15366[(10)] = inst_15323__$1);

return statearr_15366;
})();
var statearr_15367_15389 = state_15351__$1;
(statearr_15367_15389[(2)] = null);

(statearr_15367_15389[(1)] = (2));


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
});})(c__13281__auto___15379,out))
;
return ((function (switch__13169__auto__,c__13281__auto___15379,out){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15371 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15371[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15371[(1)] = (1));

return statearr_15371;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15351){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15372){if((e15372 instanceof Object)){
var ex__13173__auto__ = e15372;
var statearr_15373_15390 = state_15351;
(statearr_15373_15390[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15391 = state_15351;
state_15351 = G__15391;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15379,out))
})();
var state__13283__auto__ = (function (){var statearr_15374 = f__13282__auto__.call(null);
(statearr_15374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15379);

return statearr_15374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15379,out))
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
var args15392 = [];
var len__7214__auto___15441 = arguments.length;
var i__7215__auto___15442 = (0);
while(true){
if((i__7215__auto___15442 < len__7214__auto___15441)){
args15392.push((arguments[i__7215__auto___15442]));

var G__15443 = (i__7215__auto___15442 + (1));
i__7215__auto___15442 = G__15443;
continue;
} else {
}
break;
}

var G__15394 = args15392.length;
switch (G__15394) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15392.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13281__auto___15445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15445,out){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15445,out){
return (function (state_15418){
var state_val_15419 = (state_15418[(1)]);
if((state_val_15419 === (7))){
var inst_15400 = (state_15418[(7)]);
var inst_15400__$1 = (state_15418[(2)]);
var inst_15401 = (inst_15400__$1 == null);
var inst_15402 = cljs.core.not.call(null,inst_15401);
var state_15418__$1 = (function (){var statearr_15420 = state_15418;
(statearr_15420[(7)] = inst_15400__$1);

return statearr_15420;
})();
if(inst_15402){
var statearr_15421_15446 = state_15418__$1;
(statearr_15421_15446[(1)] = (8));

} else {
var statearr_15422_15447 = state_15418__$1;
(statearr_15422_15447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (1))){
var inst_15395 = (0);
var state_15418__$1 = (function (){var statearr_15423 = state_15418;
(statearr_15423[(8)] = inst_15395);

return statearr_15423;
})();
var statearr_15424_15448 = state_15418__$1;
(statearr_15424_15448[(2)] = null);

(statearr_15424_15448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (4))){
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15418__$1,(7),ch);
} else {
if((state_val_15419 === (6))){
var inst_15413 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15425_15449 = state_15418__$1;
(statearr_15425_15449[(2)] = inst_15413);

(statearr_15425_15449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (3))){
var inst_15415 = (state_15418[(2)]);
var inst_15416 = cljs.core.async.close_BANG_.call(null,out);
var state_15418__$1 = (function (){var statearr_15426 = state_15418;
(statearr_15426[(9)] = inst_15415);

return statearr_15426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15418__$1,inst_15416);
} else {
if((state_val_15419 === (2))){
var inst_15395 = (state_15418[(8)]);
var inst_15397 = (inst_15395 < n);
var state_15418__$1 = state_15418;
if(cljs.core.truth_(inst_15397)){
var statearr_15427_15450 = state_15418__$1;
(statearr_15427_15450[(1)] = (4));

} else {
var statearr_15428_15451 = state_15418__$1;
(statearr_15428_15451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (11))){
var inst_15395 = (state_15418[(8)]);
var inst_15405 = (state_15418[(2)]);
var inst_15406 = (inst_15395 + (1));
var inst_15395__$1 = inst_15406;
var state_15418__$1 = (function (){var statearr_15429 = state_15418;
(statearr_15429[(8)] = inst_15395__$1);

(statearr_15429[(10)] = inst_15405);

return statearr_15429;
})();
var statearr_15430_15452 = state_15418__$1;
(statearr_15430_15452[(2)] = null);

(statearr_15430_15452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (9))){
var state_15418__$1 = state_15418;
var statearr_15431_15453 = state_15418__$1;
(statearr_15431_15453[(2)] = null);

(statearr_15431_15453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (5))){
var state_15418__$1 = state_15418;
var statearr_15432_15454 = state_15418__$1;
(statearr_15432_15454[(2)] = null);

(statearr_15432_15454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (10))){
var inst_15410 = (state_15418[(2)]);
var state_15418__$1 = state_15418;
var statearr_15433_15455 = state_15418__$1;
(statearr_15433_15455[(2)] = inst_15410);

(statearr_15433_15455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15419 === (8))){
var inst_15400 = (state_15418[(7)]);
var state_15418__$1 = state_15418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15418__$1,(11),out,inst_15400);
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
});})(c__13281__auto___15445,out))
;
return ((function (switch__13169__auto__,c__13281__auto___15445,out){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15437[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15437[(1)] = (1));

return statearr_15437;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15418){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15438){if((e15438 instanceof Object)){
var ex__13173__auto__ = e15438;
var statearr_15439_15456 = state_15418;
(statearr_15439_15456[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15457 = state_15418;
state_15418 = G__15457;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15445,out))
})();
var state__13283__auto__ = (function (){var statearr_15440 = f__13282__auto__.call(null);
(statearr_15440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15445);

return statearr_15440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15445,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15465 = (function (map_LT_,f,ch,meta15466){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15466 = meta15466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15467,meta15466__$1){
var self__ = this;
var _15467__$1 = this;
return (new cljs.core.async.t_cljs$core$async15465(self__.map_LT_,self__.f,self__.ch,meta15466__$1));
});

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15467){
var self__ = this;
var _15467__$1 = this;
return self__.meta15466;
});

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15468 = (function (map_LT_,f,ch,meta15466,_,fn1,meta15469){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15466 = meta15466;
this._ = _;
this.fn1 = fn1;
this.meta15469 = meta15469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15470,meta15469__$1){
var self__ = this;
var _15470__$1 = this;
return (new cljs.core.async.t_cljs$core$async15468(self__.map_LT_,self__.f,self__.ch,self__.meta15466,self__._,self__.fn1,meta15469__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15470){
var self__ = this;
var _15470__$1 = this;
return self__.meta15469;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15458_SHARP_){
return f1.call(null,(((p1__15458_SHARP_ == null))?null:self__.f.call(null,p1__15458_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15468.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15466","meta15466",-1740597976,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15465","cljs.core.async/t_cljs$core$async15465",-340220116,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15469","meta15469",176362814,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15468";

cljs.core.async.t_cljs$core$async15468.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15468");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15468 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15468(map_LT___$1,f__$1,ch__$1,meta15466__$1,___$2,fn1__$1,meta15469){
return (new cljs.core.async.t_cljs$core$async15468(map_LT___$1,f__$1,ch__$1,meta15466__$1,___$2,fn1__$1,meta15469));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15468(self__.map_LT_,self__.f,self__.ch,self__.meta15466,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6144__auto__ = ret;
if(cljs.core.truth_(and__6144__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6144__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15466","meta15466",-1740597976,null)], null);
});

cljs.core.async.t_cljs$core$async15465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15465";

cljs.core.async.t_cljs$core$async15465.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15465");
});

cljs.core.async.__GT_t_cljs$core$async15465 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15465(map_LT___$1,f__$1,ch__$1,meta15466){
return (new cljs.core.async.t_cljs$core$async15465(map_LT___$1,f__$1,ch__$1,meta15466));
});

}

return (new cljs.core.async.t_cljs$core$async15465(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15474 = (function (map_GT_,f,ch,meta15475){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15475 = meta15475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15476,meta15475__$1){
var self__ = this;
var _15476__$1 = this;
return (new cljs.core.async.t_cljs$core$async15474(self__.map_GT_,self__.f,self__.ch,meta15475__$1));
});

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15476){
var self__ = this;
var _15476__$1 = this;
return self__.meta15475;
});

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15475","meta15475",-1808079525,null)], null);
});

cljs.core.async.t_cljs$core$async15474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15474";

cljs.core.async.t_cljs$core$async15474.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15474");
});

cljs.core.async.__GT_t_cljs$core$async15474 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15474(map_GT___$1,f__$1,ch__$1,meta15475){
return (new cljs.core.async.t_cljs$core$async15474(map_GT___$1,f__$1,ch__$1,meta15475));
});

}

return (new cljs.core.async.t_cljs$core$async15474(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15480 = (function (filter_GT_,p,ch,meta15481){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15481 = meta15481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15482,meta15481__$1){
var self__ = this;
var _15482__$1 = this;
return (new cljs.core.async.t_cljs$core$async15480(self__.filter_GT_,self__.p,self__.ch,meta15481__$1));
});

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15482){
var self__ = this;
var _15482__$1 = this;
return self__.meta15481;
});

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15481","meta15481",-1695790873,null)], null);
});

cljs.core.async.t_cljs$core$async15480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15480";

cljs.core.async.t_cljs$core$async15480.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15480");
});

cljs.core.async.__GT_t_cljs$core$async15480 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15480(filter_GT___$1,p__$1,ch__$1,meta15481){
return (new cljs.core.async.t_cljs$core$async15480(filter_GT___$1,p__$1,ch__$1,meta15481));
});

}

return (new cljs.core.async.t_cljs$core$async15480(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15483 = [];
var len__7214__auto___15527 = arguments.length;
var i__7215__auto___15528 = (0);
while(true){
if((i__7215__auto___15528 < len__7214__auto___15527)){
args15483.push((arguments[i__7215__auto___15528]));

var G__15529 = (i__7215__auto___15528 + (1));
i__7215__auto___15528 = G__15529;
continue;
} else {
}
break;
}

var G__15485 = args15483.length;
switch (G__15485) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15483.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13281__auto___15531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15531,out){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15531,out){
return (function (state_15506){
var state_val_15507 = (state_15506[(1)]);
if((state_val_15507 === (7))){
var inst_15502 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
var statearr_15508_15532 = state_15506__$1;
(statearr_15508_15532[(2)] = inst_15502);

(statearr_15508_15532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (1))){
var state_15506__$1 = state_15506;
var statearr_15509_15533 = state_15506__$1;
(statearr_15509_15533[(2)] = null);

(statearr_15509_15533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (4))){
var inst_15488 = (state_15506[(7)]);
var inst_15488__$1 = (state_15506[(2)]);
var inst_15489 = (inst_15488__$1 == null);
var state_15506__$1 = (function (){var statearr_15510 = state_15506;
(statearr_15510[(7)] = inst_15488__$1);

return statearr_15510;
})();
if(cljs.core.truth_(inst_15489)){
var statearr_15511_15534 = state_15506__$1;
(statearr_15511_15534[(1)] = (5));

} else {
var statearr_15512_15535 = state_15506__$1;
(statearr_15512_15535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (6))){
var inst_15488 = (state_15506[(7)]);
var inst_15493 = p.call(null,inst_15488);
var state_15506__$1 = state_15506;
if(cljs.core.truth_(inst_15493)){
var statearr_15513_15536 = state_15506__$1;
(statearr_15513_15536[(1)] = (8));

} else {
var statearr_15514_15537 = state_15506__$1;
(statearr_15514_15537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (3))){
var inst_15504 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15506__$1,inst_15504);
} else {
if((state_val_15507 === (2))){
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15506__$1,(4),ch);
} else {
if((state_val_15507 === (11))){
var inst_15496 = (state_15506[(2)]);
var state_15506__$1 = state_15506;
var statearr_15515_15538 = state_15506__$1;
(statearr_15515_15538[(2)] = inst_15496);

(statearr_15515_15538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (9))){
var state_15506__$1 = state_15506;
var statearr_15516_15539 = state_15506__$1;
(statearr_15516_15539[(2)] = null);

(statearr_15516_15539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (5))){
var inst_15491 = cljs.core.async.close_BANG_.call(null,out);
var state_15506__$1 = state_15506;
var statearr_15517_15540 = state_15506__$1;
(statearr_15517_15540[(2)] = inst_15491);

(statearr_15517_15540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (10))){
var inst_15499 = (state_15506[(2)]);
var state_15506__$1 = (function (){var statearr_15518 = state_15506;
(statearr_15518[(8)] = inst_15499);

return statearr_15518;
})();
var statearr_15519_15541 = state_15506__$1;
(statearr_15519_15541[(2)] = null);

(statearr_15519_15541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15507 === (8))){
var inst_15488 = (state_15506[(7)]);
var state_15506__$1 = state_15506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15506__$1,(11),out,inst_15488);
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
});})(c__13281__auto___15531,out))
;
return ((function (switch__13169__auto__,c__13281__auto___15531,out){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15523 = [null,null,null,null,null,null,null,null,null];
(statearr_15523[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15523[(1)] = (1));

return statearr_15523;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15506){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15524){if((e15524 instanceof Object)){
var ex__13173__auto__ = e15524;
var statearr_15525_15542 = state_15506;
(statearr_15525_15542[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15543 = state_15506;
state_15506 = G__15543;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15531,out))
})();
var state__13283__auto__ = (function (){var statearr_15526 = f__13282__auto__.call(null);
(statearr_15526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15531);

return statearr_15526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15531,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15544 = [];
var len__7214__auto___15547 = arguments.length;
var i__7215__auto___15548 = (0);
while(true){
if((i__7215__auto___15548 < len__7214__auto___15547)){
args15544.push((arguments[i__7215__auto___15548]));

var G__15549 = (i__7215__auto___15548 + (1));
i__7215__auto___15548 = G__15549;
continue;
} else {
}
break;
}

var G__15546 = args15544.length;
switch (G__15546) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15544.length)].join('')));

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
var c__13281__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto__){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto__){
return (function (state_15716){
var state_val_15717 = (state_15716[(1)]);
if((state_val_15717 === (7))){
var inst_15712 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15718_15759 = state_15716__$1;
(statearr_15718_15759[(2)] = inst_15712);

(statearr_15718_15759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (20))){
var inst_15682 = (state_15716[(7)]);
var inst_15693 = (state_15716[(2)]);
var inst_15694 = cljs.core.next.call(null,inst_15682);
var inst_15668 = inst_15694;
var inst_15669 = null;
var inst_15670 = (0);
var inst_15671 = (0);
var state_15716__$1 = (function (){var statearr_15719 = state_15716;
(statearr_15719[(8)] = inst_15671);

(statearr_15719[(9)] = inst_15668);

(statearr_15719[(10)] = inst_15693);

(statearr_15719[(11)] = inst_15670);

(statearr_15719[(12)] = inst_15669);

return statearr_15719;
})();
var statearr_15720_15760 = state_15716__$1;
(statearr_15720_15760[(2)] = null);

(statearr_15720_15760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (1))){
var state_15716__$1 = state_15716;
var statearr_15721_15761 = state_15716__$1;
(statearr_15721_15761[(2)] = null);

(statearr_15721_15761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (4))){
var inst_15657 = (state_15716[(13)]);
var inst_15657__$1 = (state_15716[(2)]);
var inst_15658 = (inst_15657__$1 == null);
var state_15716__$1 = (function (){var statearr_15722 = state_15716;
(statearr_15722[(13)] = inst_15657__$1);

return statearr_15722;
})();
if(cljs.core.truth_(inst_15658)){
var statearr_15723_15762 = state_15716__$1;
(statearr_15723_15762[(1)] = (5));

} else {
var statearr_15724_15763 = state_15716__$1;
(statearr_15724_15763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (15))){
var state_15716__$1 = state_15716;
var statearr_15728_15764 = state_15716__$1;
(statearr_15728_15764[(2)] = null);

(statearr_15728_15764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (21))){
var state_15716__$1 = state_15716;
var statearr_15729_15765 = state_15716__$1;
(statearr_15729_15765[(2)] = null);

(statearr_15729_15765[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (13))){
var inst_15671 = (state_15716[(8)]);
var inst_15668 = (state_15716[(9)]);
var inst_15670 = (state_15716[(11)]);
var inst_15669 = (state_15716[(12)]);
var inst_15678 = (state_15716[(2)]);
var inst_15679 = (inst_15671 + (1));
var tmp15725 = inst_15668;
var tmp15726 = inst_15670;
var tmp15727 = inst_15669;
var inst_15668__$1 = tmp15725;
var inst_15669__$1 = tmp15727;
var inst_15670__$1 = tmp15726;
var inst_15671__$1 = inst_15679;
var state_15716__$1 = (function (){var statearr_15730 = state_15716;
(statearr_15730[(8)] = inst_15671__$1);

(statearr_15730[(14)] = inst_15678);

(statearr_15730[(9)] = inst_15668__$1);

(statearr_15730[(11)] = inst_15670__$1);

(statearr_15730[(12)] = inst_15669__$1);

return statearr_15730;
})();
var statearr_15731_15766 = state_15716__$1;
(statearr_15731_15766[(2)] = null);

(statearr_15731_15766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (22))){
var state_15716__$1 = state_15716;
var statearr_15732_15767 = state_15716__$1;
(statearr_15732_15767[(2)] = null);

(statearr_15732_15767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (6))){
var inst_15657 = (state_15716[(13)]);
var inst_15666 = f.call(null,inst_15657);
var inst_15667 = cljs.core.seq.call(null,inst_15666);
var inst_15668 = inst_15667;
var inst_15669 = null;
var inst_15670 = (0);
var inst_15671 = (0);
var state_15716__$1 = (function (){var statearr_15733 = state_15716;
(statearr_15733[(8)] = inst_15671);

(statearr_15733[(9)] = inst_15668);

(statearr_15733[(11)] = inst_15670);

(statearr_15733[(12)] = inst_15669);

return statearr_15733;
})();
var statearr_15734_15768 = state_15716__$1;
(statearr_15734_15768[(2)] = null);

(statearr_15734_15768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (17))){
var inst_15682 = (state_15716[(7)]);
var inst_15686 = cljs.core.chunk_first.call(null,inst_15682);
var inst_15687 = cljs.core.chunk_rest.call(null,inst_15682);
var inst_15688 = cljs.core.count.call(null,inst_15686);
var inst_15668 = inst_15687;
var inst_15669 = inst_15686;
var inst_15670 = inst_15688;
var inst_15671 = (0);
var state_15716__$1 = (function (){var statearr_15735 = state_15716;
(statearr_15735[(8)] = inst_15671);

(statearr_15735[(9)] = inst_15668);

(statearr_15735[(11)] = inst_15670);

(statearr_15735[(12)] = inst_15669);

return statearr_15735;
})();
var statearr_15736_15769 = state_15716__$1;
(statearr_15736_15769[(2)] = null);

(statearr_15736_15769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (3))){
var inst_15714 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15716__$1,inst_15714);
} else {
if((state_val_15717 === (12))){
var inst_15702 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15737_15770 = state_15716__$1;
(statearr_15737_15770[(2)] = inst_15702);

(statearr_15737_15770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (2))){
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15716__$1,(4),in$);
} else {
if((state_val_15717 === (23))){
var inst_15710 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15738_15771 = state_15716__$1;
(statearr_15738_15771[(2)] = inst_15710);

(statearr_15738_15771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (19))){
var inst_15697 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15739_15772 = state_15716__$1;
(statearr_15739_15772[(2)] = inst_15697);

(statearr_15739_15772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (11))){
var inst_15668 = (state_15716[(9)]);
var inst_15682 = (state_15716[(7)]);
var inst_15682__$1 = cljs.core.seq.call(null,inst_15668);
var state_15716__$1 = (function (){var statearr_15740 = state_15716;
(statearr_15740[(7)] = inst_15682__$1);

return statearr_15740;
})();
if(inst_15682__$1){
var statearr_15741_15773 = state_15716__$1;
(statearr_15741_15773[(1)] = (14));

} else {
var statearr_15742_15774 = state_15716__$1;
(statearr_15742_15774[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (9))){
var inst_15704 = (state_15716[(2)]);
var inst_15705 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15716__$1 = (function (){var statearr_15743 = state_15716;
(statearr_15743[(15)] = inst_15704);

return statearr_15743;
})();
if(cljs.core.truth_(inst_15705)){
var statearr_15744_15775 = state_15716__$1;
(statearr_15744_15775[(1)] = (21));

} else {
var statearr_15745_15776 = state_15716__$1;
(statearr_15745_15776[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (5))){
var inst_15660 = cljs.core.async.close_BANG_.call(null,out);
var state_15716__$1 = state_15716;
var statearr_15746_15777 = state_15716__$1;
(statearr_15746_15777[(2)] = inst_15660);

(statearr_15746_15777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (14))){
var inst_15682 = (state_15716[(7)]);
var inst_15684 = cljs.core.chunked_seq_QMARK_.call(null,inst_15682);
var state_15716__$1 = state_15716;
if(inst_15684){
var statearr_15747_15778 = state_15716__$1;
(statearr_15747_15778[(1)] = (17));

} else {
var statearr_15748_15779 = state_15716__$1;
(statearr_15748_15779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (16))){
var inst_15700 = (state_15716[(2)]);
var state_15716__$1 = state_15716;
var statearr_15749_15780 = state_15716__$1;
(statearr_15749_15780[(2)] = inst_15700);

(statearr_15749_15780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15717 === (10))){
var inst_15671 = (state_15716[(8)]);
var inst_15669 = (state_15716[(12)]);
var inst_15676 = cljs.core._nth.call(null,inst_15669,inst_15671);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15716__$1,(13),out,inst_15676);
} else {
if((state_val_15717 === (18))){
var inst_15682 = (state_15716[(7)]);
var inst_15691 = cljs.core.first.call(null,inst_15682);
var state_15716__$1 = state_15716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15716__$1,(20),out,inst_15691);
} else {
if((state_val_15717 === (8))){
var inst_15671 = (state_15716[(8)]);
var inst_15670 = (state_15716[(11)]);
var inst_15673 = (inst_15671 < inst_15670);
var inst_15674 = inst_15673;
var state_15716__$1 = state_15716;
if(cljs.core.truth_(inst_15674)){
var statearr_15750_15781 = state_15716__$1;
(statearr_15750_15781[(1)] = (10));

} else {
var statearr_15751_15782 = state_15716__$1;
(statearr_15751_15782[(1)] = (11));

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
});})(c__13281__auto__))
;
return ((function (switch__13169__auto__,c__13281__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13170__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13170__auto____0 = (function (){
var statearr_15755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15755[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13170__auto__);

(statearr_15755[(1)] = (1));

return statearr_15755;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13170__auto____1 = (function (state_15716){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15756){if((e15756 instanceof Object)){
var ex__13173__auto__ = e15756;
var statearr_15757_15783 = state_15716;
(statearr_15757_15783[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15784 = state_15716;
state_15716 = G__15784;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13170__auto__ = function(state_15716){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13170__auto____1.call(this,state_15716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13170__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13170__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto__))
})();
var state__13283__auto__ = (function (){var statearr_15758 = f__13282__auto__.call(null);
(statearr_15758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto__);

return statearr_15758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto__))
);

return c__13281__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15785 = [];
var len__7214__auto___15788 = arguments.length;
var i__7215__auto___15789 = (0);
while(true){
if((i__7215__auto___15789 < len__7214__auto___15788)){
args15785.push((arguments[i__7215__auto___15789]));

var G__15790 = (i__7215__auto___15789 + (1));
i__7215__auto___15789 = G__15790;
continue;
} else {
}
break;
}

var G__15787 = args15785.length;
switch (G__15787) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15785.length)].join('')));

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
var args15792 = [];
var len__7214__auto___15795 = arguments.length;
var i__7215__auto___15796 = (0);
while(true){
if((i__7215__auto___15796 < len__7214__auto___15795)){
args15792.push((arguments[i__7215__auto___15796]));

var G__15797 = (i__7215__auto___15796 + (1));
i__7215__auto___15796 = G__15797;
continue;
} else {
}
break;
}

var G__15794 = args15792.length;
switch (G__15794) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15792.length)].join('')));

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
var args15799 = [];
var len__7214__auto___15850 = arguments.length;
var i__7215__auto___15851 = (0);
while(true){
if((i__7215__auto___15851 < len__7214__auto___15850)){
args15799.push((arguments[i__7215__auto___15851]));

var G__15852 = (i__7215__auto___15851 + (1));
i__7215__auto___15851 = G__15852;
continue;
} else {
}
break;
}

var G__15801 = args15799.length;
switch (G__15801) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15799.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13281__auto___15854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15854,out){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15854,out){
return (function (state_15825){
var state_val_15826 = (state_15825[(1)]);
if((state_val_15826 === (7))){
var inst_15820 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15827_15855 = state_15825__$1;
(statearr_15827_15855[(2)] = inst_15820);

(statearr_15827_15855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (1))){
var inst_15802 = null;
var state_15825__$1 = (function (){var statearr_15828 = state_15825;
(statearr_15828[(7)] = inst_15802);

return statearr_15828;
})();
var statearr_15829_15856 = state_15825__$1;
(statearr_15829_15856[(2)] = null);

(statearr_15829_15856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (4))){
var inst_15805 = (state_15825[(8)]);
var inst_15805__$1 = (state_15825[(2)]);
var inst_15806 = (inst_15805__$1 == null);
var inst_15807 = cljs.core.not.call(null,inst_15806);
var state_15825__$1 = (function (){var statearr_15830 = state_15825;
(statearr_15830[(8)] = inst_15805__$1);

return statearr_15830;
})();
if(inst_15807){
var statearr_15831_15857 = state_15825__$1;
(statearr_15831_15857[(1)] = (5));

} else {
var statearr_15832_15858 = state_15825__$1;
(statearr_15832_15858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (6))){
var state_15825__$1 = state_15825;
var statearr_15833_15859 = state_15825__$1;
(statearr_15833_15859[(2)] = null);

(statearr_15833_15859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (3))){
var inst_15822 = (state_15825[(2)]);
var inst_15823 = cljs.core.async.close_BANG_.call(null,out);
var state_15825__$1 = (function (){var statearr_15834 = state_15825;
(statearr_15834[(9)] = inst_15822);

return statearr_15834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15825__$1,inst_15823);
} else {
if((state_val_15826 === (2))){
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15825__$1,(4),ch);
} else {
if((state_val_15826 === (11))){
var inst_15805 = (state_15825[(8)]);
var inst_15814 = (state_15825[(2)]);
var inst_15802 = inst_15805;
var state_15825__$1 = (function (){var statearr_15835 = state_15825;
(statearr_15835[(10)] = inst_15814);

(statearr_15835[(7)] = inst_15802);

return statearr_15835;
})();
var statearr_15836_15860 = state_15825__$1;
(statearr_15836_15860[(2)] = null);

(statearr_15836_15860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (9))){
var inst_15805 = (state_15825[(8)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15825__$1,(11),out,inst_15805);
} else {
if((state_val_15826 === (5))){
var inst_15802 = (state_15825[(7)]);
var inst_15805 = (state_15825[(8)]);
var inst_15809 = cljs.core._EQ_.call(null,inst_15805,inst_15802);
var state_15825__$1 = state_15825;
if(inst_15809){
var statearr_15838_15861 = state_15825__$1;
(statearr_15838_15861[(1)] = (8));

} else {
var statearr_15839_15862 = state_15825__$1;
(statearr_15839_15862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (10))){
var inst_15817 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15840_15863 = state_15825__$1;
(statearr_15840_15863[(2)] = inst_15817);

(statearr_15840_15863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15826 === (8))){
var inst_15802 = (state_15825[(7)]);
var tmp15837 = inst_15802;
var inst_15802__$1 = tmp15837;
var state_15825__$1 = (function (){var statearr_15841 = state_15825;
(statearr_15841[(7)] = inst_15802__$1);

return statearr_15841;
})();
var statearr_15842_15864 = state_15825__$1;
(statearr_15842_15864[(2)] = null);

(statearr_15842_15864[(1)] = (2));


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
});})(c__13281__auto___15854,out))
;
return ((function (switch__13169__auto__,c__13281__auto___15854,out){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15846[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15846[(1)] = (1));

return statearr_15846;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15825){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15847){if((e15847 instanceof Object)){
var ex__13173__auto__ = e15847;
var statearr_15848_15865 = state_15825;
(statearr_15848_15865[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15866 = state_15825;
state_15825 = G__15866;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15854,out))
})();
var state__13283__auto__ = (function (){var statearr_15849 = f__13282__auto__.call(null);
(statearr_15849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15854);

return statearr_15849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15854,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15867 = [];
var len__7214__auto___15937 = arguments.length;
var i__7215__auto___15938 = (0);
while(true){
if((i__7215__auto___15938 < len__7214__auto___15937)){
args15867.push((arguments[i__7215__auto___15938]));

var G__15939 = (i__7215__auto___15938 + (1));
i__7215__auto___15938 = G__15939;
continue;
} else {
}
break;
}

var G__15869 = args15867.length;
switch (G__15869) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15867.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13281__auto___15941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___15941,out){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___15941,out){
return (function (state_15907){
var state_val_15908 = (state_15907[(1)]);
if((state_val_15908 === (7))){
var inst_15903 = (state_15907[(2)]);
var state_15907__$1 = state_15907;
var statearr_15909_15942 = state_15907__$1;
(statearr_15909_15942[(2)] = inst_15903);

(statearr_15909_15942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (1))){
var inst_15870 = (new Array(n));
var inst_15871 = inst_15870;
var inst_15872 = (0);
var state_15907__$1 = (function (){var statearr_15910 = state_15907;
(statearr_15910[(7)] = inst_15872);

(statearr_15910[(8)] = inst_15871);

return statearr_15910;
})();
var statearr_15911_15943 = state_15907__$1;
(statearr_15911_15943[(2)] = null);

(statearr_15911_15943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (4))){
var inst_15875 = (state_15907[(9)]);
var inst_15875__$1 = (state_15907[(2)]);
var inst_15876 = (inst_15875__$1 == null);
var inst_15877 = cljs.core.not.call(null,inst_15876);
var state_15907__$1 = (function (){var statearr_15912 = state_15907;
(statearr_15912[(9)] = inst_15875__$1);

return statearr_15912;
})();
if(inst_15877){
var statearr_15913_15944 = state_15907__$1;
(statearr_15913_15944[(1)] = (5));

} else {
var statearr_15914_15945 = state_15907__$1;
(statearr_15914_15945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (15))){
var inst_15897 = (state_15907[(2)]);
var state_15907__$1 = state_15907;
var statearr_15915_15946 = state_15907__$1;
(statearr_15915_15946[(2)] = inst_15897);

(statearr_15915_15946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (13))){
var state_15907__$1 = state_15907;
var statearr_15916_15947 = state_15907__$1;
(statearr_15916_15947[(2)] = null);

(statearr_15916_15947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (6))){
var inst_15872 = (state_15907[(7)]);
var inst_15893 = (inst_15872 > (0));
var state_15907__$1 = state_15907;
if(cljs.core.truth_(inst_15893)){
var statearr_15917_15948 = state_15907__$1;
(statearr_15917_15948[(1)] = (12));

} else {
var statearr_15918_15949 = state_15907__$1;
(statearr_15918_15949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (3))){
var inst_15905 = (state_15907[(2)]);
var state_15907__$1 = state_15907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15907__$1,inst_15905);
} else {
if((state_val_15908 === (12))){
var inst_15871 = (state_15907[(8)]);
var inst_15895 = cljs.core.vec.call(null,inst_15871);
var state_15907__$1 = state_15907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15907__$1,(15),out,inst_15895);
} else {
if((state_val_15908 === (2))){
var state_15907__$1 = state_15907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15907__$1,(4),ch);
} else {
if((state_val_15908 === (11))){
var inst_15887 = (state_15907[(2)]);
var inst_15888 = (new Array(n));
var inst_15871 = inst_15888;
var inst_15872 = (0);
var state_15907__$1 = (function (){var statearr_15919 = state_15907;
(statearr_15919[(7)] = inst_15872);

(statearr_15919[(10)] = inst_15887);

(statearr_15919[(8)] = inst_15871);

return statearr_15919;
})();
var statearr_15920_15950 = state_15907__$1;
(statearr_15920_15950[(2)] = null);

(statearr_15920_15950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (9))){
var inst_15871 = (state_15907[(8)]);
var inst_15885 = cljs.core.vec.call(null,inst_15871);
var state_15907__$1 = state_15907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15907__$1,(11),out,inst_15885);
} else {
if((state_val_15908 === (5))){
var inst_15872 = (state_15907[(7)]);
var inst_15875 = (state_15907[(9)]);
var inst_15880 = (state_15907[(11)]);
var inst_15871 = (state_15907[(8)]);
var inst_15879 = (inst_15871[inst_15872] = inst_15875);
var inst_15880__$1 = (inst_15872 + (1));
var inst_15881 = (inst_15880__$1 < n);
var state_15907__$1 = (function (){var statearr_15921 = state_15907;
(statearr_15921[(11)] = inst_15880__$1);

(statearr_15921[(12)] = inst_15879);

return statearr_15921;
})();
if(cljs.core.truth_(inst_15881)){
var statearr_15922_15951 = state_15907__$1;
(statearr_15922_15951[(1)] = (8));

} else {
var statearr_15923_15952 = state_15907__$1;
(statearr_15923_15952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (14))){
var inst_15900 = (state_15907[(2)]);
var inst_15901 = cljs.core.async.close_BANG_.call(null,out);
var state_15907__$1 = (function (){var statearr_15925 = state_15907;
(statearr_15925[(13)] = inst_15900);

return statearr_15925;
})();
var statearr_15926_15953 = state_15907__$1;
(statearr_15926_15953[(2)] = inst_15901);

(statearr_15926_15953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (10))){
var inst_15891 = (state_15907[(2)]);
var state_15907__$1 = state_15907;
var statearr_15927_15954 = state_15907__$1;
(statearr_15927_15954[(2)] = inst_15891);

(statearr_15927_15954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15908 === (8))){
var inst_15880 = (state_15907[(11)]);
var inst_15871 = (state_15907[(8)]);
var tmp15924 = inst_15871;
var inst_15871__$1 = tmp15924;
var inst_15872 = inst_15880;
var state_15907__$1 = (function (){var statearr_15928 = state_15907;
(statearr_15928[(7)] = inst_15872);

(statearr_15928[(8)] = inst_15871__$1);

return statearr_15928;
})();
var statearr_15929_15955 = state_15907__$1;
(statearr_15929_15955[(2)] = null);

(statearr_15929_15955[(1)] = (2));


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
});})(c__13281__auto___15941,out))
;
return ((function (switch__13169__auto__,c__13281__auto___15941,out){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_15933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15933[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_15933[(1)] = (1));

return statearr_15933;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_15907){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_15907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e15934){if((e15934 instanceof Object)){
var ex__13173__auto__ = e15934;
var statearr_15935_15956 = state_15907;
(statearr_15935_15956[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15957 = state_15907;
state_15907 = G__15957;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_15907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_15907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___15941,out))
})();
var state__13283__auto__ = (function (){var statearr_15936 = f__13282__auto__.call(null);
(statearr_15936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___15941);

return statearr_15936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___15941,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15958 = [];
var len__7214__auto___16032 = arguments.length;
var i__7215__auto___16033 = (0);
while(true){
if((i__7215__auto___16033 < len__7214__auto___16032)){
args15958.push((arguments[i__7215__auto___16033]));

var G__16034 = (i__7215__auto___16033 + (1));
i__7215__auto___16033 = G__16034;
continue;
} else {
}
break;
}

var G__15960 = args15958.length;
switch (G__15960) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15958.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13281__auto___16036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13281__auto___16036,out){
return (function (){
var f__13282__auto__ = (function (){var switch__13169__auto__ = ((function (c__13281__auto___16036,out){
return (function (state_16002){
var state_val_16003 = (state_16002[(1)]);
if((state_val_16003 === (7))){
var inst_15998 = (state_16002[(2)]);
var state_16002__$1 = state_16002;
var statearr_16004_16037 = state_16002__$1;
(statearr_16004_16037[(2)] = inst_15998);

(statearr_16004_16037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (1))){
var inst_15961 = [];
var inst_15962 = inst_15961;
var inst_15963 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16002__$1 = (function (){var statearr_16005 = state_16002;
(statearr_16005[(7)] = inst_15963);

(statearr_16005[(8)] = inst_15962);

return statearr_16005;
})();
var statearr_16006_16038 = state_16002__$1;
(statearr_16006_16038[(2)] = null);

(statearr_16006_16038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (4))){
var inst_15966 = (state_16002[(9)]);
var inst_15966__$1 = (state_16002[(2)]);
var inst_15967 = (inst_15966__$1 == null);
var inst_15968 = cljs.core.not.call(null,inst_15967);
var state_16002__$1 = (function (){var statearr_16007 = state_16002;
(statearr_16007[(9)] = inst_15966__$1);

return statearr_16007;
})();
if(inst_15968){
var statearr_16008_16039 = state_16002__$1;
(statearr_16008_16039[(1)] = (5));

} else {
var statearr_16009_16040 = state_16002__$1;
(statearr_16009_16040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (15))){
var inst_15992 = (state_16002[(2)]);
var state_16002__$1 = state_16002;
var statearr_16010_16041 = state_16002__$1;
(statearr_16010_16041[(2)] = inst_15992);

(statearr_16010_16041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (13))){
var state_16002__$1 = state_16002;
var statearr_16011_16042 = state_16002__$1;
(statearr_16011_16042[(2)] = null);

(statearr_16011_16042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (6))){
var inst_15962 = (state_16002[(8)]);
var inst_15987 = inst_15962.length;
var inst_15988 = (inst_15987 > (0));
var state_16002__$1 = state_16002;
if(cljs.core.truth_(inst_15988)){
var statearr_16012_16043 = state_16002__$1;
(statearr_16012_16043[(1)] = (12));

} else {
var statearr_16013_16044 = state_16002__$1;
(statearr_16013_16044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (3))){
var inst_16000 = (state_16002[(2)]);
var state_16002__$1 = state_16002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16002__$1,inst_16000);
} else {
if((state_val_16003 === (12))){
var inst_15962 = (state_16002[(8)]);
var inst_15990 = cljs.core.vec.call(null,inst_15962);
var state_16002__$1 = state_16002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16002__$1,(15),out,inst_15990);
} else {
if((state_val_16003 === (2))){
var state_16002__$1 = state_16002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16002__$1,(4),ch);
} else {
if((state_val_16003 === (11))){
var inst_15970 = (state_16002[(10)]);
var inst_15966 = (state_16002[(9)]);
var inst_15980 = (state_16002[(2)]);
var inst_15981 = [];
var inst_15982 = inst_15981.push(inst_15966);
var inst_15962 = inst_15981;
var inst_15963 = inst_15970;
var state_16002__$1 = (function (){var statearr_16014 = state_16002;
(statearr_16014[(11)] = inst_15980);

(statearr_16014[(7)] = inst_15963);

(statearr_16014[(8)] = inst_15962);

(statearr_16014[(12)] = inst_15982);

return statearr_16014;
})();
var statearr_16015_16045 = state_16002__$1;
(statearr_16015_16045[(2)] = null);

(statearr_16015_16045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (9))){
var inst_15962 = (state_16002[(8)]);
var inst_15978 = cljs.core.vec.call(null,inst_15962);
var state_16002__$1 = state_16002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16002__$1,(11),out,inst_15978);
} else {
if((state_val_16003 === (5))){
var inst_15970 = (state_16002[(10)]);
var inst_15966 = (state_16002[(9)]);
var inst_15963 = (state_16002[(7)]);
var inst_15970__$1 = f.call(null,inst_15966);
var inst_15971 = cljs.core._EQ_.call(null,inst_15970__$1,inst_15963);
var inst_15972 = cljs.core.keyword_identical_QMARK_.call(null,inst_15963,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15973 = (inst_15971) || (inst_15972);
var state_16002__$1 = (function (){var statearr_16016 = state_16002;
(statearr_16016[(10)] = inst_15970__$1);

return statearr_16016;
})();
if(cljs.core.truth_(inst_15973)){
var statearr_16017_16046 = state_16002__$1;
(statearr_16017_16046[(1)] = (8));

} else {
var statearr_16018_16047 = state_16002__$1;
(statearr_16018_16047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (14))){
var inst_15995 = (state_16002[(2)]);
var inst_15996 = cljs.core.async.close_BANG_.call(null,out);
var state_16002__$1 = (function (){var statearr_16020 = state_16002;
(statearr_16020[(13)] = inst_15995);

return statearr_16020;
})();
var statearr_16021_16048 = state_16002__$1;
(statearr_16021_16048[(2)] = inst_15996);

(statearr_16021_16048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (10))){
var inst_15985 = (state_16002[(2)]);
var state_16002__$1 = state_16002;
var statearr_16022_16049 = state_16002__$1;
(statearr_16022_16049[(2)] = inst_15985);

(statearr_16022_16049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16003 === (8))){
var inst_15970 = (state_16002[(10)]);
var inst_15966 = (state_16002[(9)]);
var inst_15962 = (state_16002[(8)]);
var inst_15975 = inst_15962.push(inst_15966);
var tmp16019 = inst_15962;
var inst_15962__$1 = tmp16019;
var inst_15963 = inst_15970;
var state_16002__$1 = (function (){var statearr_16023 = state_16002;
(statearr_16023[(14)] = inst_15975);

(statearr_16023[(7)] = inst_15963);

(statearr_16023[(8)] = inst_15962__$1);

return statearr_16023;
})();
var statearr_16024_16050 = state_16002__$1;
(statearr_16024_16050[(2)] = null);

(statearr_16024_16050[(1)] = (2));


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
});})(c__13281__auto___16036,out))
;
return ((function (switch__13169__auto__,c__13281__auto___16036,out){
return (function() {
var cljs$core$async$state_machine__13170__auto__ = null;
var cljs$core$async$state_machine__13170__auto____0 = (function (){
var statearr_16028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16028[(0)] = cljs$core$async$state_machine__13170__auto__);

(statearr_16028[(1)] = (1));

return statearr_16028;
});
var cljs$core$async$state_machine__13170__auto____1 = (function (state_16002){
while(true){
var ret_value__13171__auto__ = (function (){try{while(true){
var result__13172__auto__ = switch__13169__auto__.call(null,state_16002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13172__auto__;
}
break;
}
}catch (e16029){if((e16029 instanceof Object)){
var ex__13173__auto__ = e16029;
var statearr_16030_16051 = state_16002;
(statearr_16030_16051[(5)] = ex__13173__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13171__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16052 = state_16002;
state_16002 = G__16052;
continue;
} else {
return ret_value__13171__auto__;
}
break;
}
});
cljs$core$async$state_machine__13170__auto__ = function(state_16002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13170__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13170__auto____1.call(this,state_16002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13170__auto____0;
cljs$core$async$state_machine__13170__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13170__auto____1;
return cljs$core$async$state_machine__13170__auto__;
})()
;})(switch__13169__auto__,c__13281__auto___16036,out))
})();
var state__13283__auto__ = (function (){var statearr_16031 = f__13282__auto__.call(null);
(statearr_16031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13281__auto___16036);

return statearr_16031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13283__auto__);
});})(c__13281__auto___16036,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

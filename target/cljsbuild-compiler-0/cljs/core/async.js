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
var args13324 = [];
var len__7214__auto___13330 = arguments.length;
var i__7215__auto___13331 = (0);
while(true){
if((i__7215__auto___13331 < len__7214__auto___13330)){
args13324.push((arguments[i__7215__auto___13331]));

var G__13332 = (i__7215__auto___13331 + (1));
i__7215__auto___13331 = G__13332;
continue;
} else {
}
break;
}

var G__13326 = args13324.length;
switch (G__13326) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13324.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13327 = (function (f,blockable,meta13328){
this.f = f;
this.blockable = blockable;
this.meta13328 = meta13328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13329,meta13328__$1){
var self__ = this;
var _13329__$1 = this;
return (new cljs.core.async.t_cljs$core$async13327(self__.f,self__.blockable,meta13328__$1));
});

cljs.core.async.t_cljs$core$async13327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13329){
var self__ = this;
var _13329__$1 = this;
return self__.meta13328;
});

cljs.core.async.t_cljs$core$async13327.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13327.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13328","meta13328",2280599,null)], null);
});

cljs.core.async.t_cljs$core$async13327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13327";

cljs.core.async.t_cljs$core$async13327.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13327");
});

cljs.core.async.__GT_t_cljs$core$async13327 = (function cljs$core$async$__GT_t_cljs$core$async13327(f__$1,blockable__$1,meta13328){
return (new cljs.core.async.t_cljs$core$async13327(f__$1,blockable__$1,meta13328));
});

}

return (new cljs.core.async.t_cljs$core$async13327(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args13336 = [];
var len__7214__auto___13339 = arguments.length;
var i__7215__auto___13340 = (0);
while(true){
if((i__7215__auto___13340 < len__7214__auto___13339)){
args13336.push((arguments[i__7215__auto___13340]));

var G__13341 = (i__7215__auto___13340 + (1));
i__7215__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var G__13338 = args13336.length;
switch (G__13338) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13336.length)].join('')));

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
var args13343 = [];
var len__7214__auto___13346 = arguments.length;
var i__7215__auto___13347 = (0);
while(true){
if((i__7215__auto___13347 < len__7214__auto___13346)){
args13343.push((arguments[i__7215__auto___13347]));

var G__13348 = (i__7215__auto___13347 + (1));
i__7215__auto___13347 = G__13348;
continue;
} else {
}
break;
}

var G__13345 = args13343.length;
switch (G__13345) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13343.length)].join('')));

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
var args13350 = [];
var len__7214__auto___13353 = arguments.length;
var i__7215__auto___13354 = (0);
while(true){
if((i__7215__auto___13354 < len__7214__auto___13353)){
args13350.push((arguments[i__7215__auto___13354]));

var G__13355 = (i__7215__auto___13354 + (1));
i__7215__auto___13354 = G__13355;
continue;
} else {
}
break;
}

var G__13352 = args13350.length;
switch (G__13352) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13350.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13357 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13357);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13357,ret){
return (function (){
return fn1.call(null,val_13357);
});})(val_13357,ret))
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
var args13358 = [];
var len__7214__auto___13361 = arguments.length;
var i__7215__auto___13362 = (0);
while(true){
if((i__7215__auto___13362 < len__7214__auto___13361)){
args13358.push((arguments[i__7215__auto___13362]));

var G__13363 = (i__7215__auto___13362 + (1));
i__7215__auto___13362 = G__13363;
continue;
} else {
}
break;
}

var G__13360 = args13358.length;
switch (G__13360) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13358.length)].join('')));

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
var n__7059__auto___13365 = n;
var x_13366 = (0);
while(true){
if((x_13366 < n__7059__auto___13365)){
(a[x_13366] = (0));

var G__13367 = (x_13366 + (1));
x_13366 = G__13367;
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

var G__13368 = (i + (1));
i = G__13368;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13372 = (function (alt_flag,flag,meta13373){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13373 = meta13373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13374,meta13373__$1){
var self__ = this;
var _13374__$1 = this;
return (new cljs.core.async.t_cljs$core$async13372(self__.alt_flag,self__.flag,meta13373__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13374){
var self__ = this;
var _13374__$1 = this;
return self__.meta13373;
});})(flag))
;

cljs.core.async.t_cljs$core$async13372.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13372.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13372.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13372.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13372.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13373","meta13373",1336510169,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13372.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13372";

cljs.core.async.t_cljs$core$async13372.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13372");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13372 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13372(alt_flag__$1,flag__$1,meta13373){
return (new cljs.core.async.t_cljs$core$async13372(alt_flag__$1,flag__$1,meta13373));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13372(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13378 = (function (alt_handler,flag,cb,meta13379){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13379 = meta13379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13380,meta13379__$1){
var self__ = this;
var _13380__$1 = this;
return (new cljs.core.async.t_cljs$core$async13378(self__.alt_handler,self__.flag,self__.cb,meta13379__$1));
});

cljs.core.async.t_cljs$core$async13378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13380){
var self__ = this;
var _13380__$1 = this;
return self__.meta13379;
});

cljs.core.async.t_cljs$core$async13378.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13378.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13378.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13378.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13379","meta13379",-970597318,null)], null);
});

cljs.core.async.t_cljs$core$async13378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13378";

cljs.core.async.t_cljs$core$async13378.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async13378");
});

cljs.core.async.__GT_t_cljs$core$async13378 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13378(alt_handler__$1,flag__$1,cb__$1,meta13379){
return (new cljs.core.async.t_cljs$core$async13378(alt_handler__$1,flag__$1,cb__$1,meta13379));
});

}

return (new cljs.core.async.t_cljs$core$async13378(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13381_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13381_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13382_SHARP_,port], null));
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
var G__13383 = (i + (1));
i = G__13383;
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
var len__7214__auto___13389 = arguments.length;
var i__7215__auto___13390 = (0);
while(true){
if((i__7215__auto___13390 < len__7214__auto___13389)){
args__7221__auto__.push((arguments[i__7215__auto___13390]));

var G__13391 = (i__7215__auto___13390 + (1));
i__7215__auto___13390 = G__13391;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13386){
var map__13387 = p__13386;
var map__13387__$1 = ((((!((map__13387 == null)))?((((map__13387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13387):map__13387);
var opts = map__13387__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13384){
var G__13385 = cljs.core.first.call(null,seq13384);
var seq13384__$1 = cljs.core.next.call(null,seq13384);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13385,seq13384__$1);
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
var args13392 = [];
var len__7214__auto___13442 = arguments.length;
var i__7215__auto___13443 = (0);
while(true){
if((i__7215__auto___13443 < len__7214__auto___13442)){
args13392.push((arguments[i__7215__auto___13443]));

var G__13444 = (i__7215__auto___13443 + (1));
i__7215__auto___13443 = G__13444;
continue;
} else {
}
break;
}

var G__13394 = args13392.length;
switch (G__13394) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13392.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13279__auto___13446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___13446){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___13446){
return (function (state_13418){
var state_val_13419 = (state_13418[(1)]);
if((state_val_13419 === (7))){
var inst_13414 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
var statearr_13420_13447 = state_13418__$1;
(statearr_13420_13447[(2)] = inst_13414);

(statearr_13420_13447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (1))){
var state_13418__$1 = state_13418;
var statearr_13421_13448 = state_13418__$1;
(statearr_13421_13448[(2)] = null);

(statearr_13421_13448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (4))){
var inst_13397 = (state_13418[(7)]);
var inst_13397__$1 = (state_13418[(2)]);
var inst_13398 = (inst_13397__$1 == null);
var state_13418__$1 = (function (){var statearr_13422 = state_13418;
(statearr_13422[(7)] = inst_13397__$1);

return statearr_13422;
})();
if(cljs.core.truth_(inst_13398)){
var statearr_13423_13449 = state_13418__$1;
(statearr_13423_13449[(1)] = (5));

} else {
var statearr_13424_13450 = state_13418__$1;
(statearr_13424_13450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (13))){
var state_13418__$1 = state_13418;
var statearr_13425_13451 = state_13418__$1;
(statearr_13425_13451[(2)] = null);

(statearr_13425_13451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (6))){
var inst_13397 = (state_13418[(7)]);
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13418__$1,(11),to,inst_13397);
} else {
if((state_val_13419 === (3))){
var inst_13416 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13418__$1,inst_13416);
} else {
if((state_val_13419 === (12))){
var state_13418__$1 = state_13418;
var statearr_13426_13452 = state_13418__$1;
(statearr_13426_13452[(2)] = null);

(statearr_13426_13452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (2))){
var state_13418__$1 = state_13418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13418__$1,(4),from);
} else {
if((state_val_13419 === (11))){
var inst_13407 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
if(cljs.core.truth_(inst_13407)){
var statearr_13427_13453 = state_13418__$1;
(statearr_13427_13453[(1)] = (12));

} else {
var statearr_13428_13454 = state_13418__$1;
(statearr_13428_13454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (9))){
var state_13418__$1 = state_13418;
var statearr_13429_13455 = state_13418__$1;
(statearr_13429_13455[(2)] = null);

(statearr_13429_13455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (5))){
var state_13418__$1 = state_13418;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13430_13456 = state_13418__$1;
(statearr_13430_13456[(1)] = (8));

} else {
var statearr_13431_13457 = state_13418__$1;
(statearr_13431_13457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (14))){
var inst_13412 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
var statearr_13432_13458 = state_13418__$1;
(statearr_13432_13458[(2)] = inst_13412);

(statearr_13432_13458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (10))){
var inst_13404 = (state_13418[(2)]);
var state_13418__$1 = state_13418;
var statearr_13433_13459 = state_13418__$1;
(statearr_13433_13459[(2)] = inst_13404);

(statearr_13433_13459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13419 === (8))){
var inst_13401 = cljs.core.async.close_BANG_.call(null,to);
var state_13418__$1 = state_13418;
var statearr_13434_13460 = state_13418__$1;
(statearr_13434_13460[(2)] = inst_13401);

(statearr_13434_13460[(1)] = (10));


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
});})(c__13279__auto___13446))
;
return ((function (switch__13167__auto__,c__13279__auto___13446){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_13438 = [null,null,null,null,null,null,null,null];
(statearr_13438[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_13438[(1)] = (1));

return statearr_13438;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_13418){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13439){if((e13439 instanceof Object)){
var ex__13171__auto__ = e13439;
var statearr_13440_13461 = state_13418;
(statearr_13440_13461[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13462 = state_13418;
state_13418 = G__13462;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_13418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_13418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___13446))
})();
var state__13281__auto__ = (function (){var statearr_13441 = f__13280__auto__.call(null);
(statearr_13441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___13446);

return statearr_13441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___13446))
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
return (function (p__13646){
var vec__13647 = p__13646;
var v = cljs.core.nth.call(null,vec__13647,(0),null);
var p = cljs.core.nth.call(null,vec__13647,(1),null);
var job = vec__13647;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13279__auto___13829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___13829,res,vec__13647,v,p,job,jobs,results){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___13829,res,vec__13647,v,p,job,jobs,results){
return (function (state_13652){
var state_val_13653 = (state_13652[(1)]);
if((state_val_13653 === (1))){
var state_13652__$1 = state_13652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13652__$1,(2),res,v);
} else {
if((state_val_13653 === (2))){
var inst_13649 = (state_13652[(2)]);
var inst_13650 = cljs.core.async.close_BANG_.call(null,res);
var state_13652__$1 = (function (){var statearr_13654 = state_13652;
(statearr_13654[(7)] = inst_13649);

return statearr_13654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13652__$1,inst_13650);
} else {
return null;
}
}
});})(c__13279__auto___13829,res,vec__13647,v,p,job,jobs,results))
;
return ((function (switch__13167__auto__,c__13279__auto___13829,res,vec__13647,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0 = (function (){
var statearr_13658 = [null,null,null,null,null,null,null,null];
(statearr_13658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__);

(statearr_13658[(1)] = (1));

return statearr_13658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1 = (function (state_13652){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13659){if((e13659 instanceof Object)){
var ex__13171__auto__ = e13659;
var statearr_13660_13830 = state_13652;
(statearr_13660_13830[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13831 = state_13652;
state_13652 = G__13831;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = function(state_13652){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1.call(this,state_13652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___13829,res,vec__13647,v,p,job,jobs,results))
})();
var state__13281__auto__ = (function (){var statearr_13661 = f__13280__auto__.call(null);
(statearr_13661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___13829);

return statearr_13661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___13829,res,vec__13647,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13662){
var vec__13663 = p__13662;
var v = cljs.core.nth.call(null,vec__13663,(0),null);
var p = cljs.core.nth.call(null,vec__13663,(1),null);
var job = vec__13663;
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
var n__7059__auto___13832 = n;
var __13833 = (0);
while(true){
if((__13833 < n__7059__auto___13832)){
var G__13664_13834 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13664_13834) {
case "compute":
var c__13279__auto___13836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13833,c__13279__auto___13836,G__13664_13834,n__7059__auto___13832,jobs,results,process,async){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (__13833,c__13279__auto___13836,G__13664_13834,n__7059__auto___13832,jobs,results,process,async){
return (function (state_13677){
var state_val_13678 = (state_13677[(1)]);
if((state_val_13678 === (1))){
var state_13677__$1 = state_13677;
var statearr_13679_13837 = state_13677__$1;
(statearr_13679_13837[(2)] = null);

(statearr_13679_13837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13678 === (2))){
var state_13677__$1 = state_13677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13677__$1,(4),jobs);
} else {
if((state_val_13678 === (3))){
var inst_13675 = (state_13677[(2)]);
var state_13677__$1 = state_13677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13677__$1,inst_13675);
} else {
if((state_val_13678 === (4))){
var inst_13667 = (state_13677[(2)]);
var inst_13668 = process.call(null,inst_13667);
var state_13677__$1 = state_13677;
if(cljs.core.truth_(inst_13668)){
var statearr_13680_13838 = state_13677__$1;
(statearr_13680_13838[(1)] = (5));

} else {
var statearr_13681_13839 = state_13677__$1;
(statearr_13681_13839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13678 === (5))){
var state_13677__$1 = state_13677;
var statearr_13682_13840 = state_13677__$1;
(statearr_13682_13840[(2)] = null);

(statearr_13682_13840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13678 === (6))){
var state_13677__$1 = state_13677;
var statearr_13683_13841 = state_13677__$1;
(statearr_13683_13841[(2)] = null);

(statearr_13683_13841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13678 === (7))){
var inst_13673 = (state_13677[(2)]);
var state_13677__$1 = state_13677;
var statearr_13684_13842 = state_13677__$1;
(statearr_13684_13842[(2)] = inst_13673);

(statearr_13684_13842[(1)] = (3));


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
});})(__13833,c__13279__auto___13836,G__13664_13834,n__7059__auto___13832,jobs,results,process,async))
;
return ((function (__13833,switch__13167__auto__,c__13279__auto___13836,G__13664_13834,n__7059__auto___13832,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0 = (function (){
var statearr_13688 = [null,null,null,null,null,null,null];
(statearr_13688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__);

(statearr_13688[(1)] = (1));

return statearr_13688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1 = (function (state_13677){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13689){if((e13689 instanceof Object)){
var ex__13171__auto__ = e13689;
var statearr_13690_13843 = state_13677;
(statearr_13690_13843[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13844 = state_13677;
state_13677 = G__13844;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = function(state_13677){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1.call(this,state_13677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__;
})()
;})(__13833,switch__13167__auto__,c__13279__auto___13836,G__13664_13834,n__7059__auto___13832,jobs,results,process,async))
})();
var state__13281__auto__ = (function (){var statearr_13691 = f__13280__auto__.call(null);
(statearr_13691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___13836);

return statearr_13691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(__13833,c__13279__auto___13836,G__13664_13834,n__7059__auto___13832,jobs,results,process,async))
);


break;
case "async":
var c__13279__auto___13845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13833,c__13279__auto___13845,G__13664_13834,n__7059__auto___13832,jobs,results,process,async){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (__13833,c__13279__auto___13845,G__13664_13834,n__7059__auto___13832,jobs,results,process,async){
return (function (state_13704){
var state_val_13705 = (state_13704[(1)]);
if((state_val_13705 === (1))){
var state_13704__$1 = state_13704;
var statearr_13706_13846 = state_13704__$1;
(statearr_13706_13846[(2)] = null);

(statearr_13706_13846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13705 === (2))){
var state_13704__$1 = state_13704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13704__$1,(4),jobs);
} else {
if((state_val_13705 === (3))){
var inst_13702 = (state_13704[(2)]);
var state_13704__$1 = state_13704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13704__$1,inst_13702);
} else {
if((state_val_13705 === (4))){
var inst_13694 = (state_13704[(2)]);
var inst_13695 = async.call(null,inst_13694);
var state_13704__$1 = state_13704;
if(cljs.core.truth_(inst_13695)){
var statearr_13707_13847 = state_13704__$1;
(statearr_13707_13847[(1)] = (5));

} else {
var statearr_13708_13848 = state_13704__$1;
(statearr_13708_13848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13705 === (5))){
var state_13704__$1 = state_13704;
var statearr_13709_13849 = state_13704__$1;
(statearr_13709_13849[(2)] = null);

(statearr_13709_13849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13705 === (6))){
var state_13704__$1 = state_13704;
var statearr_13710_13850 = state_13704__$1;
(statearr_13710_13850[(2)] = null);

(statearr_13710_13850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13705 === (7))){
var inst_13700 = (state_13704[(2)]);
var state_13704__$1 = state_13704;
var statearr_13711_13851 = state_13704__$1;
(statearr_13711_13851[(2)] = inst_13700);

(statearr_13711_13851[(1)] = (3));


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
});})(__13833,c__13279__auto___13845,G__13664_13834,n__7059__auto___13832,jobs,results,process,async))
;
return ((function (__13833,switch__13167__auto__,c__13279__auto___13845,G__13664_13834,n__7059__auto___13832,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0 = (function (){
var statearr_13715 = [null,null,null,null,null,null,null];
(statearr_13715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__);

(statearr_13715[(1)] = (1));

return statearr_13715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1 = (function (state_13704){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13716){if((e13716 instanceof Object)){
var ex__13171__auto__ = e13716;
var statearr_13717_13852 = state_13704;
(statearr_13717_13852[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13853 = state_13704;
state_13704 = G__13853;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = function(state_13704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1.call(this,state_13704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__;
})()
;})(__13833,switch__13167__auto__,c__13279__auto___13845,G__13664_13834,n__7059__auto___13832,jobs,results,process,async))
})();
var state__13281__auto__ = (function (){var statearr_13718 = f__13280__auto__.call(null);
(statearr_13718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___13845);

return statearr_13718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(__13833,c__13279__auto___13845,G__13664_13834,n__7059__auto___13832,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13854 = (__13833 + (1));
__13833 = G__13854;
continue;
} else {
}
break;
}

var c__13279__auto___13855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___13855,jobs,results,process,async){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___13855,jobs,results,process,async){
return (function (state_13740){
var state_val_13741 = (state_13740[(1)]);
if((state_val_13741 === (1))){
var state_13740__$1 = state_13740;
var statearr_13742_13856 = state_13740__$1;
(statearr_13742_13856[(2)] = null);

(statearr_13742_13856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (2))){
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13740__$1,(4),from);
} else {
if((state_val_13741 === (3))){
var inst_13738 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13740__$1,inst_13738);
} else {
if((state_val_13741 === (4))){
var inst_13721 = (state_13740[(7)]);
var inst_13721__$1 = (state_13740[(2)]);
var inst_13722 = (inst_13721__$1 == null);
var state_13740__$1 = (function (){var statearr_13743 = state_13740;
(statearr_13743[(7)] = inst_13721__$1);

return statearr_13743;
})();
if(cljs.core.truth_(inst_13722)){
var statearr_13744_13857 = state_13740__$1;
(statearr_13744_13857[(1)] = (5));

} else {
var statearr_13745_13858 = state_13740__$1;
(statearr_13745_13858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (5))){
var inst_13724 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13740__$1 = state_13740;
var statearr_13746_13859 = state_13740__$1;
(statearr_13746_13859[(2)] = inst_13724);

(statearr_13746_13859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (6))){
var inst_13721 = (state_13740[(7)]);
var inst_13726 = (state_13740[(8)]);
var inst_13726__$1 = cljs.core.async.chan.call(null,(1));
var inst_13727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13728 = [inst_13721,inst_13726__$1];
var inst_13729 = (new cljs.core.PersistentVector(null,2,(5),inst_13727,inst_13728,null));
var state_13740__$1 = (function (){var statearr_13747 = state_13740;
(statearr_13747[(8)] = inst_13726__$1);

return statearr_13747;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13740__$1,(8),jobs,inst_13729);
} else {
if((state_val_13741 === (7))){
var inst_13736 = (state_13740[(2)]);
var state_13740__$1 = state_13740;
var statearr_13748_13860 = state_13740__$1;
(statearr_13748_13860[(2)] = inst_13736);

(statearr_13748_13860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13741 === (8))){
var inst_13726 = (state_13740[(8)]);
var inst_13731 = (state_13740[(2)]);
var state_13740__$1 = (function (){var statearr_13749 = state_13740;
(statearr_13749[(9)] = inst_13731);

return statearr_13749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13740__$1,(9),results,inst_13726);
} else {
if((state_val_13741 === (9))){
var inst_13733 = (state_13740[(2)]);
var state_13740__$1 = (function (){var statearr_13750 = state_13740;
(statearr_13750[(10)] = inst_13733);

return statearr_13750;
})();
var statearr_13751_13861 = state_13740__$1;
(statearr_13751_13861[(2)] = null);

(statearr_13751_13861[(1)] = (2));


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
});})(c__13279__auto___13855,jobs,results,process,async))
;
return ((function (switch__13167__auto__,c__13279__auto___13855,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0 = (function (){
var statearr_13755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13755[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__);

(statearr_13755[(1)] = (1));

return statearr_13755;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1 = (function (state_13740){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13756){if((e13756 instanceof Object)){
var ex__13171__auto__ = e13756;
var statearr_13757_13862 = state_13740;
(statearr_13757_13862[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13863 = state_13740;
state_13740 = G__13863;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = function(state_13740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1.call(this,state_13740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___13855,jobs,results,process,async))
})();
var state__13281__auto__ = (function (){var statearr_13758 = f__13280__auto__.call(null);
(statearr_13758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___13855);

return statearr_13758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___13855,jobs,results,process,async))
);


var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__,jobs,results,process,async){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__,jobs,results,process,async){
return (function (state_13796){
var state_val_13797 = (state_13796[(1)]);
if((state_val_13797 === (7))){
var inst_13792 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13798_13864 = state_13796__$1;
(statearr_13798_13864[(2)] = inst_13792);

(statearr_13798_13864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (20))){
var state_13796__$1 = state_13796;
var statearr_13799_13865 = state_13796__$1;
(statearr_13799_13865[(2)] = null);

(statearr_13799_13865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (1))){
var state_13796__$1 = state_13796;
var statearr_13800_13866 = state_13796__$1;
(statearr_13800_13866[(2)] = null);

(statearr_13800_13866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (4))){
var inst_13761 = (state_13796[(7)]);
var inst_13761__$1 = (state_13796[(2)]);
var inst_13762 = (inst_13761__$1 == null);
var state_13796__$1 = (function (){var statearr_13801 = state_13796;
(statearr_13801[(7)] = inst_13761__$1);

return statearr_13801;
})();
if(cljs.core.truth_(inst_13762)){
var statearr_13802_13867 = state_13796__$1;
(statearr_13802_13867[(1)] = (5));

} else {
var statearr_13803_13868 = state_13796__$1;
(statearr_13803_13868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (15))){
var inst_13774 = (state_13796[(8)]);
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13796__$1,(18),to,inst_13774);
} else {
if((state_val_13797 === (21))){
var inst_13787 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13804_13869 = state_13796__$1;
(statearr_13804_13869[(2)] = inst_13787);

(statearr_13804_13869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (13))){
var inst_13789 = (state_13796[(2)]);
var state_13796__$1 = (function (){var statearr_13805 = state_13796;
(statearr_13805[(9)] = inst_13789);

return statearr_13805;
})();
var statearr_13806_13870 = state_13796__$1;
(statearr_13806_13870[(2)] = null);

(statearr_13806_13870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (6))){
var inst_13761 = (state_13796[(7)]);
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13796__$1,(11),inst_13761);
} else {
if((state_val_13797 === (17))){
var inst_13782 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
if(cljs.core.truth_(inst_13782)){
var statearr_13807_13871 = state_13796__$1;
(statearr_13807_13871[(1)] = (19));

} else {
var statearr_13808_13872 = state_13796__$1;
(statearr_13808_13872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (3))){
var inst_13794 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13796__$1,inst_13794);
} else {
if((state_val_13797 === (12))){
var inst_13771 = (state_13796[(10)]);
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13796__$1,(14),inst_13771);
} else {
if((state_val_13797 === (2))){
var state_13796__$1 = state_13796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13796__$1,(4),results);
} else {
if((state_val_13797 === (19))){
var state_13796__$1 = state_13796;
var statearr_13809_13873 = state_13796__$1;
(statearr_13809_13873[(2)] = null);

(statearr_13809_13873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (11))){
var inst_13771 = (state_13796[(2)]);
var state_13796__$1 = (function (){var statearr_13810 = state_13796;
(statearr_13810[(10)] = inst_13771);

return statearr_13810;
})();
var statearr_13811_13874 = state_13796__$1;
(statearr_13811_13874[(2)] = null);

(statearr_13811_13874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (9))){
var state_13796__$1 = state_13796;
var statearr_13812_13875 = state_13796__$1;
(statearr_13812_13875[(2)] = null);

(statearr_13812_13875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (5))){
var state_13796__$1 = state_13796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13813_13876 = state_13796__$1;
(statearr_13813_13876[(1)] = (8));

} else {
var statearr_13814_13877 = state_13796__$1;
(statearr_13814_13877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (14))){
var inst_13776 = (state_13796[(11)]);
var inst_13774 = (state_13796[(8)]);
var inst_13774__$1 = (state_13796[(2)]);
var inst_13775 = (inst_13774__$1 == null);
var inst_13776__$1 = cljs.core.not.call(null,inst_13775);
var state_13796__$1 = (function (){var statearr_13815 = state_13796;
(statearr_13815[(11)] = inst_13776__$1);

(statearr_13815[(8)] = inst_13774__$1);

return statearr_13815;
})();
if(inst_13776__$1){
var statearr_13816_13878 = state_13796__$1;
(statearr_13816_13878[(1)] = (15));

} else {
var statearr_13817_13879 = state_13796__$1;
(statearr_13817_13879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (16))){
var inst_13776 = (state_13796[(11)]);
var state_13796__$1 = state_13796;
var statearr_13818_13880 = state_13796__$1;
(statearr_13818_13880[(2)] = inst_13776);

(statearr_13818_13880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (10))){
var inst_13768 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13819_13881 = state_13796__$1;
(statearr_13819_13881[(2)] = inst_13768);

(statearr_13819_13881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (18))){
var inst_13779 = (state_13796[(2)]);
var state_13796__$1 = state_13796;
var statearr_13820_13882 = state_13796__$1;
(statearr_13820_13882[(2)] = inst_13779);

(statearr_13820_13882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13797 === (8))){
var inst_13765 = cljs.core.async.close_BANG_.call(null,to);
var state_13796__$1 = state_13796;
var statearr_13821_13883 = state_13796__$1;
(statearr_13821_13883[(2)] = inst_13765);

(statearr_13821_13883[(1)] = (10));


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
});})(c__13279__auto__,jobs,results,process,async))
;
return ((function (switch__13167__auto__,c__13279__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0 = (function (){
var statearr_13825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__);

(statearr_13825[(1)] = (1));

return statearr_13825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1 = (function (state_13796){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13826){if((e13826 instanceof Object)){
var ex__13171__auto__ = e13826;
var statearr_13827_13884 = state_13796;
(statearr_13827_13884[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13885 = state_13796;
state_13796 = G__13885;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__ = function(state_13796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1.call(this,state_13796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13168__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__,jobs,results,process,async))
})();
var state__13281__auto__ = (function (){var statearr_13828 = f__13280__auto__.call(null);
(statearr_13828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_13828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__,jobs,results,process,async))
);

return c__13279__auto__;
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
var args13886 = [];
var len__7214__auto___13889 = arguments.length;
var i__7215__auto___13890 = (0);
while(true){
if((i__7215__auto___13890 < len__7214__auto___13889)){
args13886.push((arguments[i__7215__auto___13890]));

var G__13891 = (i__7215__auto___13890 + (1));
i__7215__auto___13890 = G__13891;
continue;
} else {
}
break;
}

var G__13888 = args13886.length;
switch (G__13888) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13886.length)].join('')));

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
var args13893 = [];
var len__7214__auto___13896 = arguments.length;
var i__7215__auto___13897 = (0);
while(true){
if((i__7215__auto___13897 < len__7214__auto___13896)){
args13893.push((arguments[i__7215__auto___13897]));

var G__13898 = (i__7215__auto___13897 + (1));
i__7215__auto___13897 = G__13898;
continue;
} else {
}
break;
}

var G__13895 = args13893.length;
switch (G__13895) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13893.length)].join('')));

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
var args13900 = [];
var len__7214__auto___13953 = arguments.length;
var i__7215__auto___13954 = (0);
while(true){
if((i__7215__auto___13954 < len__7214__auto___13953)){
args13900.push((arguments[i__7215__auto___13954]));

var G__13955 = (i__7215__auto___13954 + (1));
i__7215__auto___13954 = G__13955;
continue;
} else {
}
break;
}

var G__13902 = args13900.length;
switch (G__13902) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13900.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13279__auto___13957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___13957,tc,fc){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___13957,tc,fc){
return (function (state_13928){
var state_val_13929 = (state_13928[(1)]);
if((state_val_13929 === (7))){
var inst_13924 = (state_13928[(2)]);
var state_13928__$1 = state_13928;
var statearr_13930_13958 = state_13928__$1;
(statearr_13930_13958[(2)] = inst_13924);

(statearr_13930_13958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (1))){
var state_13928__$1 = state_13928;
var statearr_13931_13959 = state_13928__$1;
(statearr_13931_13959[(2)] = null);

(statearr_13931_13959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (4))){
var inst_13905 = (state_13928[(7)]);
var inst_13905__$1 = (state_13928[(2)]);
var inst_13906 = (inst_13905__$1 == null);
var state_13928__$1 = (function (){var statearr_13932 = state_13928;
(statearr_13932[(7)] = inst_13905__$1);

return statearr_13932;
})();
if(cljs.core.truth_(inst_13906)){
var statearr_13933_13960 = state_13928__$1;
(statearr_13933_13960[(1)] = (5));

} else {
var statearr_13934_13961 = state_13928__$1;
(statearr_13934_13961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (13))){
var state_13928__$1 = state_13928;
var statearr_13935_13962 = state_13928__$1;
(statearr_13935_13962[(2)] = null);

(statearr_13935_13962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (6))){
var inst_13905 = (state_13928[(7)]);
var inst_13911 = p.call(null,inst_13905);
var state_13928__$1 = state_13928;
if(cljs.core.truth_(inst_13911)){
var statearr_13936_13963 = state_13928__$1;
(statearr_13936_13963[(1)] = (9));

} else {
var statearr_13937_13964 = state_13928__$1;
(statearr_13937_13964[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (3))){
var inst_13926 = (state_13928[(2)]);
var state_13928__$1 = state_13928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13928__$1,inst_13926);
} else {
if((state_val_13929 === (12))){
var state_13928__$1 = state_13928;
var statearr_13938_13965 = state_13928__$1;
(statearr_13938_13965[(2)] = null);

(statearr_13938_13965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (2))){
var state_13928__$1 = state_13928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13928__$1,(4),ch);
} else {
if((state_val_13929 === (11))){
var inst_13905 = (state_13928[(7)]);
var inst_13915 = (state_13928[(2)]);
var state_13928__$1 = state_13928;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13928__$1,(8),inst_13915,inst_13905);
} else {
if((state_val_13929 === (9))){
var state_13928__$1 = state_13928;
var statearr_13939_13966 = state_13928__$1;
(statearr_13939_13966[(2)] = tc);

(statearr_13939_13966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (5))){
var inst_13908 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13909 = cljs.core.async.close_BANG_.call(null,fc);
var state_13928__$1 = (function (){var statearr_13940 = state_13928;
(statearr_13940[(8)] = inst_13908);

return statearr_13940;
})();
var statearr_13941_13967 = state_13928__$1;
(statearr_13941_13967[(2)] = inst_13909);

(statearr_13941_13967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (14))){
var inst_13922 = (state_13928[(2)]);
var state_13928__$1 = state_13928;
var statearr_13942_13968 = state_13928__$1;
(statearr_13942_13968[(2)] = inst_13922);

(statearr_13942_13968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (10))){
var state_13928__$1 = state_13928;
var statearr_13943_13969 = state_13928__$1;
(statearr_13943_13969[(2)] = fc);

(statearr_13943_13969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13929 === (8))){
var inst_13917 = (state_13928[(2)]);
var state_13928__$1 = state_13928;
if(cljs.core.truth_(inst_13917)){
var statearr_13944_13970 = state_13928__$1;
(statearr_13944_13970[(1)] = (12));

} else {
var statearr_13945_13971 = state_13928__$1;
(statearr_13945_13971[(1)] = (13));

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
});})(c__13279__auto___13957,tc,fc))
;
return ((function (switch__13167__auto__,c__13279__auto___13957,tc,fc){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_13949 = [null,null,null,null,null,null,null,null,null];
(statearr_13949[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_13949[(1)] = (1));

return statearr_13949;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_13928){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_13928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e13950){if((e13950 instanceof Object)){
var ex__13171__auto__ = e13950;
var statearr_13951_13972 = state_13928;
(statearr_13951_13972[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13973 = state_13928;
state_13928 = G__13973;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_13928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_13928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___13957,tc,fc))
})();
var state__13281__auto__ = (function (){var statearr_13952 = f__13280__auto__.call(null);
(statearr_13952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___13957);

return statearr_13952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___13957,tc,fc))
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
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__){
return (function (state_14037){
var state_val_14038 = (state_14037[(1)]);
if((state_val_14038 === (7))){
var inst_14033 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14039_14060 = state_14037__$1;
(statearr_14039_14060[(2)] = inst_14033);

(statearr_14039_14060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (1))){
var inst_14017 = init;
var state_14037__$1 = (function (){var statearr_14040 = state_14037;
(statearr_14040[(7)] = inst_14017);

return statearr_14040;
})();
var statearr_14041_14061 = state_14037__$1;
(statearr_14041_14061[(2)] = null);

(statearr_14041_14061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (4))){
var inst_14020 = (state_14037[(8)]);
var inst_14020__$1 = (state_14037[(2)]);
var inst_14021 = (inst_14020__$1 == null);
var state_14037__$1 = (function (){var statearr_14042 = state_14037;
(statearr_14042[(8)] = inst_14020__$1);

return statearr_14042;
})();
if(cljs.core.truth_(inst_14021)){
var statearr_14043_14062 = state_14037__$1;
(statearr_14043_14062[(1)] = (5));

} else {
var statearr_14044_14063 = state_14037__$1;
(statearr_14044_14063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (6))){
var inst_14024 = (state_14037[(9)]);
var inst_14020 = (state_14037[(8)]);
var inst_14017 = (state_14037[(7)]);
var inst_14024__$1 = f.call(null,inst_14017,inst_14020);
var inst_14025 = cljs.core.reduced_QMARK_.call(null,inst_14024__$1);
var state_14037__$1 = (function (){var statearr_14045 = state_14037;
(statearr_14045[(9)] = inst_14024__$1);

return statearr_14045;
})();
if(inst_14025){
var statearr_14046_14064 = state_14037__$1;
(statearr_14046_14064[(1)] = (8));

} else {
var statearr_14047_14065 = state_14037__$1;
(statearr_14047_14065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (3))){
var inst_14035 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14037__$1,inst_14035);
} else {
if((state_val_14038 === (2))){
var state_14037__$1 = state_14037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14037__$1,(4),ch);
} else {
if((state_val_14038 === (9))){
var inst_14024 = (state_14037[(9)]);
var inst_14017 = inst_14024;
var state_14037__$1 = (function (){var statearr_14048 = state_14037;
(statearr_14048[(7)] = inst_14017);

return statearr_14048;
})();
var statearr_14049_14066 = state_14037__$1;
(statearr_14049_14066[(2)] = null);

(statearr_14049_14066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (5))){
var inst_14017 = (state_14037[(7)]);
var state_14037__$1 = state_14037;
var statearr_14050_14067 = state_14037__$1;
(statearr_14050_14067[(2)] = inst_14017);

(statearr_14050_14067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (10))){
var inst_14031 = (state_14037[(2)]);
var state_14037__$1 = state_14037;
var statearr_14051_14068 = state_14037__$1;
(statearr_14051_14068[(2)] = inst_14031);

(statearr_14051_14068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14038 === (8))){
var inst_14024 = (state_14037[(9)]);
var inst_14027 = cljs.core.deref.call(null,inst_14024);
var state_14037__$1 = state_14037;
var statearr_14052_14069 = state_14037__$1;
(statearr_14052_14069[(2)] = inst_14027);

(statearr_14052_14069[(1)] = (10));


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
});})(c__13279__auto__))
;
return ((function (switch__13167__auto__,c__13279__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13168__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13168__auto____0 = (function (){
var statearr_14056 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14056[(0)] = cljs$core$async$reduce_$_state_machine__13168__auto__);

(statearr_14056[(1)] = (1));

return statearr_14056;
});
var cljs$core$async$reduce_$_state_machine__13168__auto____1 = (function (state_14037){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_14037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e14057){if((e14057 instanceof Object)){
var ex__13171__auto__ = e14057;
var statearr_14058_14070 = state_14037;
(statearr_14058_14070[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14071 = state_14037;
state_14037 = G__14071;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13168__auto__ = function(state_14037){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13168__auto____1.call(this,state_14037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13168__auto____0;
cljs$core$async$reduce_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13168__auto____1;
return cljs$core$async$reduce_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__))
})();
var state__13281__auto__ = (function (){var statearr_14059 = f__13280__auto__.call(null);
(statearr_14059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_14059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__))
);

return c__13279__auto__;
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
var args14072 = [];
var len__7214__auto___14124 = arguments.length;
var i__7215__auto___14125 = (0);
while(true){
if((i__7215__auto___14125 < len__7214__auto___14124)){
args14072.push((arguments[i__7215__auto___14125]));

var G__14126 = (i__7215__auto___14125 + (1));
i__7215__auto___14125 = G__14126;
continue;
} else {
}
break;
}

var G__14074 = args14072.length;
switch (G__14074) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14072.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__){
return (function (state_14099){
var state_val_14100 = (state_14099[(1)]);
if((state_val_14100 === (7))){
var inst_14081 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
var statearr_14101_14128 = state_14099__$1;
(statearr_14101_14128[(2)] = inst_14081);

(statearr_14101_14128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (1))){
var inst_14075 = cljs.core.seq.call(null,coll);
var inst_14076 = inst_14075;
var state_14099__$1 = (function (){var statearr_14102 = state_14099;
(statearr_14102[(7)] = inst_14076);

return statearr_14102;
})();
var statearr_14103_14129 = state_14099__$1;
(statearr_14103_14129[(2)] = null);

(statearr_14103_14129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (4))){
var inst_14076 = (state_14099[(7)]);
var inst_14079 = cljs.core.first.call(null,inst_14076);
var state_14099__$1 = state_14099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14099__$1,(7),ch,inst_14079);
} else {
if((state_val_14100 === (13))){
var inst_14093 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
var statearr_14104_14130 = state_14099__$1;
(statearr_14104_14130[(2)] = inst_14093);

(statearr_14104_14130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (6))){
var inst_14084 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
if(cljs.core.truth_(inst_14084)){
var statearr_14105_14131 = state_14099__$1;
(statearr_14105_14131[(1)] = (8));

} else {
var statearr_14106_14132 = state_14099__$1;
(statearr_14106_14132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (3))){
var inst_14097 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14099__$1,inst_14097);
} else {
if((state_val_14100 === (12))){
var state_14099__$1 = state_14099;
var statearr_14107_14133 = state_14099__$1;
(statearr_14107_14133[(2)] = null);

(statearr_14107_14133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (2))){
var inst_14076 = (state_14099[(7)]);
var state_14099__$1 = state_14099;
if(cljs.core.truth_(inst_14076)){
var statearr_14108_14134 = state_14099__$1;
(statearr_14108_14134[(1)] = (4));

} else {
var statearr_14109_14135 = state_14099__$1;
(statearr_14109_14135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (11))){
var inst_14090 = cljs.core.async.close_BANG_.call(null,ch);
var state_14099__$1 = state_14099;
var statearr_14110_14136 = state_14099__$1;
(statearr_14110_14136[(2)] = inst_14090);

(statearr_14110_14136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (9))){
var state_14099__$1 = state_14099;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14111_14137 = state_14099__$1;
(statearr_14111_14137[(1)] = (11));

} else {
var statearr_14112_14138 = state_14099__$1;
(statearr_14112_14138[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (5))){
var inst_14076 = (state_14099[(7)]);
var state_14099__$1 = state_14099;
var statearr_14113_14139 = state_14099__$1;
(statearr_14113_14139[(2)] = inst_14076);

(statearr_14113_14139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (10))){
var inst_14095 = (state_14099[(2)]);
var state_14099__$1 = state_14099;
var statearr_14114_14140 = state_14099__$1;
(statearr_14114_14140[(2)] = inst_14095);

(statearr_14114_14140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14100 === (8))){
var inst_14076 = (state_14099[(7)]);
var inst_14086 = cljs.core.next.call(null,inst_14076);
var inst_14076__$1 = inst_14086;
var state_14099__$1 = (function (){var statearr_14115 = state_14099;
(statearr_14115[(7)] = inst_14076__$1);

return statearr_14115;
})();
var statearr_14116_14141 = state_14099__$1;
(statearr_14116_14141[(2)] = null);

(statearr_14116_14141[(1)] = (2));


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
});})(c__13279__auto__))
;
return ((function (switch__13167__auto__,c__13279__auto__){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_14120 = [null,null,null,null,null,null,null,null];
(statearr_14120[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_14120[(1)] = (1));

return statearr_14120;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_14099){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_14099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e14121){if((e14121 instanceof Object)){
var ex__13171__auto__ = e14121;
var statearr_14122_14142 = state_14099;
(statearr_14122_14142[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14143 = state_14099;
state_14099 = G__14143;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_14099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_14099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__))
})();
var state__13281__auto__ = (function (){var statearr_14123 = f__13280__auto__.call(null);
(statearr_14123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_14123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__))
);

return c__13279__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async14365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14365 = (function (mult,ch,cs,meta14366){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14366 = meta14366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14367,meta14366__$1){
var self__ = this;
var _14367__$1 = this;
return (new cljs.core.async.t_cljs$core$async14365(self__.mult,self__.ch,self__.cs,meta14366__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14367){
var self__ = this;
var _14367__$1 = this;
return self__.meta14366;
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14366","meta14366",914774106,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14365";

cljs.core.async.t_cljs$core$async14365.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14365");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14365 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14365(mult__$1,ch__$1,cs__$1,meta14366){
return (new cljs.core.async.t_cljs$core$async14365(mult__$1,ch__$1,cs__$1,meta14366));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14365(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__13279__auto___14586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___14586,cs,m,dchan,dctr,done){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___14586,cs,m,dchan,dctr,done){
return (function (state_14498){
var state_val_14499 = (state_14498[(1)]);
if((state_val_14499 === (7))){
var inst_14494 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14500_14587 = state_14498__$1;
(statearr_14500_14587[(2)] = inst_14494);

(statearr_14500_14587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (20))){
var inst_14399 = (state_14498[(7)]);
var inst_14409 = cljs.core.first.call(null,inst_14399);
var inst_14410 = cljs.core.nth.call(null,inst_14409,(0),null);
var inst_14411 = cljs.core.nth.call(null,inst_14409,(1),null);
var state_14498__$1 = (function (){var statearr_14501 = state_14498;
(statearr_14501[(8)] = inst_14410);

return statearr_14501;
})();
if(cljs.core.truth_(inst_14411)){
var statearr_14502_14588 = state_14498__$1;
(statearr_14502_14588[(1)] = (22));

} else {
var statearr_14503_14589 = state_14498__$1;
(statearr_14503_14589[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (27))){
var inst_14439 = (state_14498[(9)]);
var inst_14370 = (state_14498[(10)]);
var inst_14446 = (state_14498[(11)]);
var inst_14441 = (state_14498[(12)]);
var inst_14446__$1 = cljs.core._nth.call(null,inst_14439,inst_14441);
var inst_14447 = cljs.core.async.put_BANG_.call(null,inst_14446__$1,inst_14370,done);
var state_14498__$1 = (function (){var statearr_14504 = state_14498;
(statearr_14504[(11)] = inst_14446__$1);

return statearr_14504;
})();
if(cljs.core.truth_(inst_14447)){
var statearr_14505_14590 = state_14498__$1;
(statearr_14505_14590[(1)] = (30));

} else {
var statearr_14506_14591 = state_14498__$1;
(statearr_14506_14591[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (1))){
var state_14498__$1 = state_14498;
var statearr_14507_14592 = state_14498__$1;
(statearr_14507_14592[(2)] = null);

(statearr_14507_14592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (24))){
var inst_14399 = (state_14498[(7)]);
var inst_14416 = (state_14498[(2)]);
var inst_14417 = cljs.core.next.call(null,inst_14399);
var inst_14379 = inst_14417;
var inst_14380 = null;
var inst_14381 = (0);
var inst_14382 = (0);
var state_14498__$1 = (function (){var statearr_14508 = state_14498;
(statearr_14508[(13)] = inst_14382);

(statearr_14508[(14)] = inst_14416);

(statearr_14508[(15)] = inst_14380);

(statearr_14508[(16)] = inst_14381);

(statearr_14508[(17)] = inst_14379);

return statearr_14508;
})();
var statearr_14509_14593 = state_14498__$1;
(statearr_14509_14593[(2)] = null);

(statearr_14509_14593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (39))){
var state_14498__$1 = state_14498;
var statearr_14513_14594 = state_14498__$1;
(statearr_14513_14594[(2)] = null);

(statearr_14513_14594[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (4))){
var inst_14370 = (state_14498[(10)]);
var inst_14370__$1 = (state_14498[(2)]);
var inst_14371 = (inst_14370__$1 == null);
var state_14498__$1 = (function (){var statearr_14514 = state_14498;
(statearr_14514[(10)] = inst_14370__$1);

return statearr_14514;
})();
if(cljs.core.truth_(inst_14371)){
var statearr_14515_14595 = state_14498__$1;
(statearr_14515_14595[(1)] = (5));

} else {
var statearr_14516_14596 = state_14498__$1;
(statearr_14516_14596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (15))){
var inst_14382 = (state_14498[(13)]);
var inst_14380 = (state_14498[(15)]);
var inst_14381 = (state_14498[(16)]);
var inst_14379 = (state_14498[(17)]);
var inst_14395 = (state_14498[(2)]);
var inst_14396 = (inst_14382 + (1));
var tmp14510 = inst_14380;
var tmp14511 = inst_14381;
var tmp14512 = inst_14379;
var inst_14379__$1 = tmp14512;
var inst_14380__$1 = tmp14510;
var inst_14381__$1 = tmp14511;
var inst_14382__$1 = inst_14396;
var state_14498__$1 = (function (){var statearr_14517 = state_14498;
(statearr_14517[(13)] = inst_14382__$1);

(statearr_14517[(18)] = inst_14395);

(statearr_14517[(15)] = inst_14380__$1);

(statearr_14517[(16)] = inst_14381__$1);

(statearr_14517[(17)] = inst_14379__$1);

return statearr_14517;
})();
var statearr_14518_14597 = state_14498__$1;
(statearr_14518_14597[(2)] = null);

(statearr_14518_14597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (21))){
var inst_14420 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14522_14598 = state_14498__$1;
(statearr_14522_14598[(2)] = inst_14420);

(statearr_14522_14598[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (31))){
var inst_14446 = (state_14498[(11)]);
var inst_14450 = done.call(null,null);
var inst_14451 = cljs.core.async.untap_STAR_.call(null,m,inst_14446);
var state_14498__$1 = (function (){var statearr_14523 = state_14498;
(statearr_14523[(19)] = inst_14450);

return statearr_14523;
})();
var statearr_14524_14599 = state_14498__$1;
(statearr_14524_14599[(2)] = inst_14451);

(statearr_14524_14599[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (32))){
var inst_14439 = (state_14498[(9)]);
var inst_14441 = (state_14498[(12)]);
var inst_14440 = (state_14498[(20)]);
var inst_14438 = (state_14498[(21)]);
var inst_14453 = (state_14498[(2)]);
var inst_14454 = (inst_14441 + (1));
var tmp14519 = inst_14439;
var tmp14520 = inst_14440;
var tmp14521 = inst_14438;
var inst_14438__$1 = tmp14521;
var inst_14439__$1 = tmp14519;
var inst_14440__$1 = tmp14520;
var inst_14441__$1 = inst_14454;
var state_14498__$1 = (function (){var statearr_14525 = state_14498;
(statearr_14525[(9)] = inst_14439__$1);

(statearr_14525[(22)] = inst_14453);

(statearr_14525[(12)] = inst_14441__$1);

(statearr_14525[(20)] = inst_14440__$1);

(statearr_14525[(21)] = inst_14438__$1);

return statearr_14525;
})();
var statearr_14526_14600 = state_14498__$1;
(statearr_14526_14600[(2)] = null);

(statearr_14526_14600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (40))){
var inst_14466 = (state_14498[(23)]);
var inst_14470 = done.call(null,null);
var inst_14471 = cljs.core.async.untap_STAR_.call(null,m,inst_14466);
var state_14498__$1 = (function (){var statearr_14527 = state_14498;
(statearr_14527[(24)] = inst_14470);

return statearr_14527;
})();
var statearr_14528_14601 = state_14498__$1;
(statearr_14528_14601[(2)] = inst_14471);

(statearr_14528_14601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (33))){
var inst_14457 = (state_14498[(25)]);
var inst_14459 = cljs.core.chunked_seq_QMARK_.call(null,inst_14457);
var state_14498__$1 = state_14498;
if(inst_14459){
var statearr_14529_14602 = state_14498__$1;
(statearr_14529_14602[(1)] = (36));

} else {
var statearr_14530_14603 = state_14498__$1;
(statearr_14530_14603[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (13))){
var inst_14389 = (state_14498[(26)]);
var inst_14392 = cljs.core.async.close_BANG_.call(null,inst_14389);
var state_14498__$1 = state_14498;
var statearr_14531_14604 = state_14498__$1;
(statearr_14531_14604[(2)] = inst_14392);

(statearr_14531_14604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (22))){
var inst_14410 = (state_14498[(8)]);
var inst_14413 = cljs.core.async.close_BANG_.call(null,inst_14410);
var state_14498__$1 = state_14498;
var statearr_14532_14605 = state_14498__$1;
(statearr_14532_14605[(2)] = inst_14413);

(statearr_14532_14605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (36))){
var inst_14457 = (state_14498[(25)]);
var inst_14461 = cljs.core.chunk_first.call(null,inst_14457);
var inst_14462 = cljs.core.chunk_rest.call(null,inst_14457);
var inst_14463 = cljs.core.count.call(null,inst_14461);
var inst_14438 = inst_14462;
var inst_14439 = inst_14461;
var inst_14440 = inst_14463;
var inst_14441 = (0);
var state_14498__$1 = (function (){var statearr_14533 = state_14498;
(statearr_14533[(9)] = inst_14439);

(statearr_14533[(12)] = inst_14441);

(statearr_14533[(20)] = inst_14440);

(statearr_14533[(21)] = inst_14438);

return statearr_14533;
})();
var statearr_14534_14606 = state_14498__$1;
(statearr_14534_14606[(2)] = null);

(statearr_14534_14606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (41))){
var inst_14457 = (state_14498[(25)]);
var inst_14473 = (state_14498[(2)]);
var inst_14474 = cljs.core.next.call(null,inst_14457);
var inst_14438 = inst_14474;
var inst_14439 = null;
var inst_14440 = (0);
var inst_14441 = (0);
var state_14498__$1 = (function (){var statearr_14535 = state_14498;
(statearr_14535[(27)] = inst_14473);

(statearr_14535[(9)] = inst_14439);

(statearr_14535[(12)] = inst_14441);

(statearr_14535[(20)] = inst_14440);

(statearr_14535[(21)] = inst_14438);

return statearr_14535;
})();
var statearr_14536_14607 = state_14498__$1;
(statearr_14536_14607[(2)] = null);

(statearr_14536_14607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (43))){
var state_14498__$1 = state_14498;
var statearr_14537_14608 = state_14498__$1;
(statearr_14537_14608[(2)] = null);

(statearr_14537_14608[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (29))){
var inst_14482 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14538_14609 = state_14498__$1;
(statearr_14538_14609[(2)] = inst_14482);

(statearr_14538_14609[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (44))){
var inst_14491 = (state_14498[(2)]);
var state_14498__$1 = (function (){var statearr_14539 = state_14498;
(statearr_14539[(28)] = inst_14491);

return statearr_14539;
})();
var statearr_14540_14610 = state_14498__$1;
(statearr_14540_14610[(2)] = null);

(statearr_14540_14610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (6))){
var inst_14430 = (state_14498[(29)]);
var inst_14429 = cljs.core.deref.call(null,cs);
var inst_14430__$1 = cljs.core.keys.call(null,inst_14429);
var inst_14431 = cljs.core.count.call(null,inst_14430__$1);
var inst_14432 = cljs.core.reset_BANG_.call(null,dctr,inst_14431);
var inst_14437 = cljs.core.seq.call(null,inst_14430__$1);
var inst_14438 = inst_14437;
var inst_14439 = null;
var inst_14440 = (0);
var inst_14441 = (0);
var state_14498__$1 = (function (){var statearr_14541 = state_14498;
(statearr_14541[(9)] = inst_14439);

(statearr_14541[(29)] = inst_14430__$1);

(statearr_14541[(30)] = inst_14432);

(statearr_14541[(12)] = inst_14441);

(statearr_14541[(20)] = inst_14440);

(statearr_14541[(21)] = inst_14438);

return statearr_14541;
})();
var statearr_14542_14611 = state_14498__$1;
(statearr_14542_14611[(2)] = null);

(statearr_14542_14611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (28))){
var inst_14457 = (state_14498[(25)]);
var inst_14438 = (state_14498[(21)]);
var inst_14457__$1 = cljs.core.seq.call(null,inst_14438);
var state_14498__$1 = (function (){var statearr_14543 = state_14498;
(statearr_14543[(25)] = inst_14457__$1);

return statearr_14543;
})();
if(inst_14457__$1){
var statearr_14544_14612 = state_14498__$1;
(statearr_14544_14612[(1)] = (33));

} else {
var statearr_14545_14613 = state_14498__$1;
(statearr_14545_14613[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (25))){
var inst_14441 = (state_14498[(12)]);
var inst_14440 = (state_14498[(20)]);
var inst_14443 = (inst_14441 < inst_14440);
var inst_14444 = inst_14443;
var state_14498__$1 = state_14498;
if(cljs.core.truth_(inst_14444)){
var statearr_14546_14614 = state_14498__$1;
(statearr_14546_14614[(1)] = (27));

} else {
var statearr_14547_14615 = state_14498__$1;
(statearr_14547_14615[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (34))){
var state_14498__$1 = state_14498;
var statearr_14548_14616 = state_14498__$1;
(statearr_14548_14616[(2)] = null);

(statearr_14548_14616[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (17))){
var state_14498__$1 = state_14498;
var statearr_14549_14617 = state_14498__$1;
(statearr_14549_14617[(2)] = null);

(statearr_14549_14617[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (3))){
var inst_14496 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14498__$1,inst_14496);
} else {
if((state_val_14499 === (12))){
var inst_14425 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14550_14618 = state_14498__$1;
(statearr_14550_14618[(2)] = inst_14425);

(statearr_14550_14618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (2))){
var state_14498__$1 = state_14498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14498__$1,(4),ch);
} else {
if((state_val_14499 === (23))){
var state_14498__$1 = state_14498;
var statearr_14551_14619 = state_14498__$1;
(statearr_14551_14619[(2)] = null);

(statearr_14551_14619[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (35))){
var inst_14480 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14552_14620 = state_14498__$1;
(statearr_14552_14620[(2)] = inst_14480);

(statearr_14552_14620[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (19))){
var inst_14399 = (state_14498[(7)]);
var inst_14403 = cljs.core.chunk_first.call(null,inst_14399);
var inst_14404 = cljs.core.chunk_rest.call(null,inst_14399);
var inst_14405 = cljs.core.count.call(null,inst_14403);
var inst_14379 = inst_14404;
var inst_14380 = inst_14403;
var inst_14381 = inst_14405;
var inst_14382 = (0);
var state_14498__$1 = (function (){var statearr_14553 = state_14498;
(statearr_14553[(13)] = inst_14382);

(statearr_14553[(15)] = inst_14380);

(statearr_14553[(16)] = inst_14381);

(statearr_14553[(17)] = inst_14379);

return statearr_14553;
})();
var statearr_14554_14621 = state_14498__$1;
(statearr_14554_14621[(2)] = null);

(statearr_14554_14621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (11))){
var inst_14399 = (state_14498[(7)]);
var inst_14379 = (state_14498[(17)]);
var inst_14399__$1 = cljs.core.seq.call(null,inst_14379);
var state_14498__$1 = (function (){var statearr_14555 = state_14498;
(statearr_14555[(7)] = inst_14399__$1);

return statearr_14555;
})();
if(inst_14399__$1){
var statearr_14556_14622 = state_14498__$1;
(statearr_14556_14622[(1)] = (16));

} else {
var statearr_14557_14623 = state_14498__$1;
(statearr_14557_14623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (9))){
var inst_14427 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14558_14624 = state_14498__$1;
(statearr_14558_14624[(2)] = inst_14427);

(statearr_14558_14624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (5))){
var inst_14377 = cljs.core.deref.call(null,cs);
var inst_14378 = cljs.core.seq.call(null,inst_14377);
var inst_14379 = inst_14378;
var inst_14380 = null;
var inst_14381 = (0);
var inst_14382 = (0);
var state_14498__$1 = (function (){var statearr_14559 = state_14498;
(statearr_14559[(13)] = inst_14382);

(statearr_14559[(15)] = inst_14380);

(statearr_14559[(16)] = inst_14381);

(statearr_14559[(17)] = inst_14379);

return statearr_14559;
})();
var statearr_14560_14625 = state_14498__$1;
(statearr_14560_14625[(2)] = null);

(statearr_14560_14625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (14))){
var state_14498__$1 = state_14498;
var statearr_14561_14626 = state_14498__$1;
(statearr_14561_14626[(2)] = null);

(statearr_14561_14626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (45))){
var inst_14488 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14562_14627 = state_14498__$1;
(statearr_14562_14627[(2)] = inst_14488);

(statearr_14562_14627[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (26))){
var inst_14430 = (state_14498[(29)]);
var inst_14484 = (state_14498[(2)]);
var inst_14485 = cljs.core.seq.call(null,inst_14430);
var state_14498__$1 = (function (){var statearr_14563 = state_14498;
(statearr_14563[(31)] = inst_14484);

return statearr_14563;
})();
if(inst_14485){
var statearr_14564_14628 = state_14498__$1;
(statearr_14564_14628[(1)] = (42));

} else {
var statearr_14565_14629 = state_14498__$1;
(statearr_14565_14629[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (16))){
var inst_14399 = (state_14498[(7)]);
var inst_14401 = cljs.core.chunked_seq_QMARK_.call(null,inst_14399);
var state_14498__$1 = state_14498;
if(inst_14401){
var statearr_14566_14630 = state_14498__$1;
(statearr_14566_14630[(1)] = (19));

} else {
var statearr_14567_14631 = state_14498__$1;
(statearr_14567_14631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (38))){
var inst_14477 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14568_14632 = state_14498__$1;
(statearr_14568_14632[(2)] = inst_14477);

(statearr_14568_14632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (30))){
var state_14498__$1 = state_14498;
var statearr_14569_14633 = state_14498__$1;
(statearr_14569_14633[(2)] = null);

(statearr_14569_14633[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (10))){
var inst_14382 = (state_14498[(13)]);
var inst_14380 = (state_14498[(15)]);
var inst_14388 = cljs.core._nth.call(null,inst_14380,inst_14382);
var inst_14389 = cljs.core.nth.call(null,inst_14388,(0),null);
var inst_14390 = cljs.core.nth.call(null,inst_14388,(1),null);
var state_14498__$1 = (function (){var statearr_14570 = state_14498;
(statearr_14570[(26)] = inst_14389);

return statearr_14570;
})();
if(cljs.core.truth_(inst_14390)){
var statearr_14571_14634 = state_14498__$1;
(statearr_14571_14634[(1)] = (13));

} else {
var statearr_14572_14635 = state_14498__$1;
(statearr_14572_14635[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (18))){
var inst_14423 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14573_14636 = state_14498__$1;
(statearr_14573_14636[(2)] = inst_14423);

(statearr_14573_14636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (42))){
var state_14498__$1 = state_14498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14498__$1,(45),dchan);
} else {
if((state_val_14499 === (37))){
var inst_14466 = (state_14498[(23)]);
var inst_14370 = (state_14498[(10)]);
var inst_14457 = (state_14498[(25)]);
var inst_14466__$1 = cljs.core.first.call(null,inst_14457);
var inst_14467 = cljs.core.async.put_BANG_.call(null,inst_14466__$1,inst_14370,done);
var state_14498__$1 = (function (){var statearr_14574 = state_14498;
(statearr_14574[(23)] = inst_14466__$1);

return statearr_14574;
})();
if(cljs.core.truth_(inst_14467)){
var statearr_14575_14637 = state_14498__$1;
(statearr_14575_14637[(1)] = (39));

} else {
var statearr_14576_14638 = state_14498__$1;
(statearr_14576_14638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14499 === (8))){
var inst_14382 = (state_14498[(13)]);
var inst_14381 = (state_14498[(16)]);
var inst_14384 = (inst_14382 < inst_14381);
var inst_14385 = inst_14384;
var state_14498__$1 = state_14498;
if(cljs.core.truth_(inst_14385)){
var statearr_14577_14639 = state_14498__$1;
(statearr_14577_14639[(1)] = (10));

} else {
var statearr_14578_14640 = state_14498__$1;
(statearr_14578_14640[(1)] = (11));

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
});})(c__13279__auto___14586,cs,m,dchan,dctr,done))
;
return ((function (switch__13167__auto__,c__13279__auto___14586,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13168__auto__ = null;
var cljs$core$async$mult_$_state_machine__13168__auto____0 = (function (){
var statearr_14582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14582[(0)] = cljs$core$async$mult_$_state_machine__13168__auto__);

(statearr_14582[(1)] = (1));

return statearr_14582;
});
var cljs$core$async$mult_$_state_machine__13168__auto____1 = (function (state_14498){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_14498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object)){
var ex__13171__auto__ = e14583;
var statearr_14584_14641 = state_14498;
(statearr_14584_14641[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14642 = state_14498;
state_14498 = G__14642;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13168__auto__ = function(state_14498){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13168__auto____1.call(this,state_14498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13168__auto____0;
cljs$core$async$mult_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13168__auto____1;
return cljs$core$async$mult_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___14586,cs,m,dchan,dctr,done))
})();
var state__13281__auto__ = (function (){var statearr_14585 = f__13280__auto__.call(null);
(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___14586);

return statearr_14585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___14586,cs,m,dchan,dctr,done))
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
var args14643 = [];
var len__7214__auto___14646 = arguments.length;
var i__7215__auto___14647 = (0);
while(true){
if((i__7215__auto___14647 < len__7214__auto___14646)){
args14643.push((arguments[i__7215__auto___14647]));

var G__14648 = (i__7215__auto___14647 + (1));
i__7215__auto___14647 = G__14648;
continue;
} else {
}
break;
}

var G__14645 = args14643.length;
switch (G__14645) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14643.length)].join('')));

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
var len__7214__auto___14660 = arguments.length;
var i__7215__auto___14661 = (0);
while(true){
if((i__7215__auto___14661 < len__7214__auto___14660)){
args__7221__auto__.push((arguments[i__7215__auto___14661]));

var G__14662 = (i__7215__auto___14661 + (1));
i__7215__auto___14661 = G__14662;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14654){
var map__14655 = p__14654;
var map__14655__$1 = ((((!((map__14655 == null)))?((((map__14655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14655):map__14655);
var opts = map__14655__$1;
var statearr_14657_14663 = state;
(statearr_14657_14663[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__14655,map__14655__$1,opts){
return (function (val){
var statearr_14658_14664 = state;
(statearr_14658_14664[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14655,map__14655__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_14659_14665 = state;
(statearr_14659_14665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14650){
var G__14651 = cljs.core.first.call(null,seq14650);
var seq14650__$1 = cljs.core.next.call(null,seq14650);
var G__14652 = cljs.core.first.call(null,seq14650__$1);
var seq14650__$2 = cljs.core.next.call(null,seq14650__$1);
var G__14653 = cljs.core.first.call(null,seq14650__$2);
var seq14650__$3 = cljs.core.next.call(null,seq14650__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14651,G__14652,G__14653,seq14650__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14829 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14830){
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
this.meta14830 = meta14830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14831,meta14830__$1){
var self__ = this;
var _14831__$1 = this;
return (new cljs.core.async.t_cljs$core$async14829(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14830__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14831){
var self__ = this;
var _14831__$1 = this;
return self__.meta14830;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14829.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14830","meta14830",-399334899,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14829";

cljs.core.async.t_cljs$core$async14829.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async14829");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14829 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14829(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14830){
return (new cljs.core.async.t_cljs$core$async14829(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14830));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14829(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13279__auto___14992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___14992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___14992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14929){
var state_val_14930 = (state_14929[(1)]);
if((state_val_14930 === (7))){
var inst_14847 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14931_14993 = state_14929__$1;
(statearr_14931_14993[(2)] = inst_14847);

(statearr_14931_14993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (20))){
var inst_14859 = (state_14929[(7)]);
var state_14929__$1 = state_14929;
var statearr_14932_14994 = state_14929__$1;
(statearr_14932_14994[(2)] = inst_14859);

(statearr_14932_14994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (27))){
var state_14929__$1 = state_14929;
var statearr_14933_14995 = state_14929__$1;
(statearr_14933_14995[(2)] = null);

(statearr_14933_14995[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (1))){
var inst_14835 = (state_14929[(8)]);
var inst_14835__$1 = calc_state.call(null);
var inst_14837 = (inst_14835__$1 == null);
var inst_14838 = cljs.core.not.call(null,inst_14837);
var state_14929__$1 = (function (){var statearr_14934 = state_14929;
(statearr_14934[(8)] = inst_14835__$1);

return statearr_14934;
})();
if(inst_14838){
var statearr_14935_14996 = state_14929__$1;
(statearr_14935_14996[(1)] = (2));

} else {
var statearr_14936_14997 = state_14929__$1;
(statearr_14936_14997[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (24))){
var inst_14903 = (state_14929[(9)]);
var inst_14882 = (state_14929[(10)]);
var inst_14889 = (state_14929[(11)]);
var inst_14903__$1 = inst_14882.call(null,inst_14889);
var state_14929__$1 = (function (){var statearr_14937 = state_14929;
(statearr_14937[(9)] = inst_14903__$1);

return statearr_14937;
})();
if(cljs.core.truth_(inst_14903__$1)){
var statearr_14938_14998 = state_14929__$1;
(statearr_14938_14998[(1)] = (29));

} else {
var statearr_14939_14999 = state_14929__$1;
(statearr_14939_14999[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (4))){
var inst_14850 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14850)){
var statearr_14940_15000 = state_14929__$1;
(statearr_14940_15000[(1)] = (8));

} else {
var statearr_14941_15001 = state_14929__$1;
(statearr_14941_15001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (15))){
var inst_14876 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14876)){
var statearr_14942_15002 = state_14929__$1;
(statearr_14942_15002[(1)] = (19));

} else {
var statearr_14943_15003 = state_14929__$1;
(statearr_14943_15003[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (21))){
var inst_14881 = (state_14929[(12)]);
var inst_14881__$1 = (state_14929[(2)]);
var inst_14882 = cljs.core.get.call(null,inst_14881__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14883 = cljs.core.get.call(null,inst_14881__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14884 = cljs.core.get.call(null,inst_14881__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14929__$1 = (function (){var statearr_14944 = state_14929;
(statearr_14944[(13)] = inst_14883);

(statearr_14944[(10)] = inst_14882);

(statearr_14944[(12)] = inst_14881__$1);

return statearr_14944;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14929__$1,(22),inst_14884);
} else {
if((state_val_14930 === (31))){
var inst_14911 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14911)){
var statearr_14945_15004 = state_14929__$1;
(statearr_14945_15004[(1)] = (32));

} else {
var statearr_14946_15005 = state_14929__$1;
(statearr_14946_15005[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (32))){
var inst_14888 = (state_14929[(14)]);
var state_14929__$1 = state_14929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14929__$1,(35),out,inst_14888);
} else {
if((state_val_14930 === (33))){
var inst_14881 = (state_14929[(12)]);
var inst_14859 = inst_14881;
var state_14929__$1 = (function (){var statearr_14947 = state_14929;
(statearr_14947[(7)] = inst_14859);

return statearr_14947;
})();
var statearr_14948_15006 = state_14929__$1;
(statearr_14948_15006[(2)] = null);

(statearr_14948_15006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (13))){
var inst_14859 = (state_14929[(7)]);
var inst_14866 = inst_14859.cljs$lang$protocol_mask$partition0$;
var inst_14867 = (inst_14866 & (64));
var inst_14868 = inst_14859.cljs$core$ISeq$;
var inst_14869 = (inst_14867) || (inst_14868);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14869)){
var statearr_14949_15007 = state_14929__$1;
(statearr_14949_15007[(1)] = (16));

} else {
var statearr_14950_15008 = state_14929__$1;
(statearr_14950_15008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (22))){
var inst_14889 = (state_14929[(11)]);
var inst_14888 = (state_14929[(14)]);
var inst_14887 = (state_14929[(2)]);
var inst_14888__$1 = cljs.core.nth.call(null,inst_14887,(0),null);
var inst_14889__$1 = cljs.core.nth.call(null,inst_14887,(1),null);
var inst_14890 = (inst_14888__$1 == null);
var inst_14891 = cljs.core._EQ_.call(null,inst_14889__$1,change);
var inst_14892 = (inst_14890) || (inst_14891);
var state_14929__$1 = (function (){var statearr_14951 = state_14929;
(statearr_14951[(11)] = inst_14889__$1);

(statearr_14951[(14)] = inst_14888__$1);

return statearr_14951;
})();
if(cljs.core.truth_(inst_14892)){
var statearr_14952_15009 = state_14929__$1;
(statearr_14952_15009[(1)] = (23));

} else {
var statearr_14953_15010 = state_14929__$1;
(statearr_14953_15010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (36))){
var inst_14881 = (state_14929[(12)]);
var inst_14859 = inst_14881;
var state_14929__$1 = (function (){var statearr_14954 = state_14929;
(statearr_14954[(7)] = inst_14859);

return statearr_14954;
})();
var statearr_14955_15011 = state_14929__$1;
(statearr_14955_15011[(2)] = null);

(statearr_14955_15011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (29))){
var inst_14903 = (state_14929[(9)]);
var state_14929__$1 = state_14929;
var statearr_14956_15012 = state_14929__$1;
(statearr_14956_15012[(2)] = inst_14903);

(statearr_14956_15012[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (6))){
var state_14929__$1 = state_14929;
var statearr_14957_15013 = state_14929__$1;
(statearr_14957_15013[(2)] = false);

(statearr_14957_15013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (28))){
var inst_14899 = (state_14929[(2)]);
var inst_14900 = calc_state.call(null);
var inst_14859 = inst_14900;
var state_14929__$1 = (function (){var statearr_14958 = state_14929;
(statearr_14958[(15)] = inst_14899);

(statearr_14958[(7)] = inst_14859);

return statearr_14958;
})();
var statearr_14959_15014 = state_14929__$1;
(statearr_14959_15014[(2)] = null);

(statearr_14959_15014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (25))){
var inst_14925 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14960_15015 = state_14929__$1;
(statearr_14960_15015[(2)] = inst_14925);

(statearr_14960_15015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (34))){
var inst_14923 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14961_15016 = state_14929__$1;
(statearr_14961_15016[(2)] = inst_14923);

(statearr_14961_15016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (17))){
var state_14929__$1 = state_14929;
var statearr_14962_15017 = state_14929__$1;
(statearr_14962_15017[(2)] = false);

(statearr_14962_15017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (3))){
var state_14929__$1 = state_14929;
var statearr_14963_15018 = state_14929__$1;
(statearr_14963_15018[(2)] = false);

(statearr_14963_15018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (12))){
var inst_14927 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14929__$1,inst_14927);
} else {
if((state_val_14930 === (2))){
var inst_14835 = (state_14929[(8)]);
var inst_14840 = inst_14835.cljs$lang$protocol_mask$partition0$;
var inst_14841 = (inst_14840 & (64));
var inst_14842 = inst_14835.cljs$core$ISeq$;
var inst_14843 = (inst_14841) || (inst_14842);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14843)){
var statearr_14964_15019 = state_14929__$1;
(statearr_14964_15019[(1)] = (5));

} else {
var statearr_14965_15020 = state_14929__$1;
(statearr_14965_15020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (23))){
var inst_14888 = (state_14929[(14)]);
var inst_14894 = (inst_14888 == null);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14894)){
var statearr_14966_15021 = state_14929__$1;
(statearr_14966_15021[(1)] = (26));

} else {
var statearr_14967_15022 = state_14929__$1;
(statearr_14967_15022[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (35))){
var inst_14914 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
if(cljs.core.truth_(inst_14914)){
var statearr_14968_15023 = state_14929__$1;
(statearr_14968_15023[(1)] = (36));

} else {
var statearr_14969_15024 = state_14929__$1;
(statearr_14969_15024[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (19))){
var inst_14859 = (state_14929[(7)]);
var inst_14878 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14859);
var state_14929__$1 = state_14929;
var statearr_14970_15025 = state_14929__$1;
(statearr_14970_15025[(2)] = inst_14878);

(statearr_14970_15025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (11))){
var inst_14859 = (state_14929[(7)]);
var inst_14863 = (inst_14859 == null);
var inst_14864 = cljs.core.not.call(null,inst_14863);
var state_14929__$1 = state_14929;
if(inst_14864){
var statearr_14971_15026 = state_14929__$1;
(statearr_14971_15026[(1)] = (13));

} else {
var statearr_14972_15027 = state_14929__$1;
(statearr_14972_15027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (9))){
var inst_14835 = (state_14929[(8)]);
var state_14929__$1 = state_14929;
var statearr_14973_15028 = state_14929__$1;
(statearr_14973_15028[(2)] = inst_14835);

(statearr_14973_15028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (5))){
var state_14929__$1 = state_14929;
var statearr_14974_15029 = state_14929__$1;
(statearr_14974_15029[(2)] = true);

(statearr_14974_15029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (14))){
var state_14929__$1 = state_14929;
var statearr_14975_15030 = state_14929__$1;
(statearr_14975_15030[(2)] = false);

(statearr_14975_15030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (26))){
var inst_14889 = (state_14929[(11)]);
var inst_14896 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14889);
var state_14929__$1 = state_14929;
var statearr_14976_15031 = state_14929__$1;
(statearr_14976_15031[(2)] = inst_14896);

(statearr_14976_15031[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (16))){
var state_14929__$1 = state_14929;
var statearr_14977_15032 = state_14929__$1;
(statearr_14977_15032[(2)] = true);

(statearr_14977_15032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (38))){
var inst_14919 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14978_15033 = state_14929__$1;
(statearr_14978_15033[(2)] = inst_14919);

(statearr_14978_15033[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (30))){
var inst_14883 = (state_14929[(13)]);
var inst_14882 = (state_14929[(10)]);
var inst_14889 = (state_14929[(11)]);
var inst_14906 = cljs.core.empty_QMARK_.call(null,inst_14882);
var inst_14907 = inst_14883.call(null,inst_14889);
var inst_14908 = cljs.core.not.call(null,inst_14907);
var inst_14909 = (inst_14906) && (inst_14908);
var state_14929__$1 = state_14929;
var statearr_14979_15034 = state_14929__$1;
(statearr_14979_15034[(2)] = inst_14909);

(statearr_14979_15034[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (10))){
var inst_14835 = (state_14929[(8)]);
var inst_14855 = (state_14929[(2)]);
var inst_14856 = cljs.core.get.call(null,inst_14855,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14857 = cljs.core.get.call(null,inst_14855,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14858 = cljs.core.get.call(null,inst_14855,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14859 = inst_14835;
var state_14929__$1 = (function (){var statearr_14980 = state_14929;
(statearr_14980[(16)] = inst_14858);

(statearr_14980[(17)] = inst_14857);

(statearr_14980[(18)] = inst_14856);

(statearr_14980[(7)] = inst_14859);

return statearr_14980;
})();
var statearr_14981_15035 = state_14929__$1;
(statearr_14981_15035[(2)] = null);

(statearr_14981_15035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (18))){
var inst_14873 = (state_14929[(2)]);
var state_14929__$1 = state_14929;
var statearr_14982_15036 = state_14929__$1;
(statearr_14982_15036[(2)] = inst_14873);

(statearr_14982_15036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (37))){
var state_14929__$1 = state_14929;
var statearr_14983_15037 = state_14929__$1;
(statearr_14983_15037[(2)] = null);

(statearr_14983_15037[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14930 === (8))){
var inst_14835 = (state_14929[(8)]);
var inst_14852 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14835);
var state_14929__$1 = state_14929;
var statearr_14984_15038 = state_14929__$1;
(statearr_14984_15038[(2)] = inst_14852);

(statearr_14984_15038[(1)] = (10));


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
});})(c__13279__auto___14992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13167__auto__,c__13279__auto___14992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13168__auto__ = null;
var cljs$core$async$mix_$_state_machine__13168__auto____0 = (function (){
var statearr_14988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14988[(0)] = cljs$core$async$mix_$_state_machine__13168__auto__);

(statearr_14988[(1)] = (1));

return statearr_14988;
});
var cljs$core$async$mix_$_state_machine__13168__auto____1 = (function (state_14929){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_14929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e14989){if((e14989 instanceof Object)){
var ex__13171__auto__ = e14989;
var statearr_14990_15039 = state_14929;
(statearr_14990_15039[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15040 = state_14929;
state_14929 = G__15040;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13168__auto__ = function(state_14929){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13168__auto____1.call(this,state_14929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13168__auto____0;
cljs$core$async$mix_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13168__auto____1;
return cljs$core$async$mix_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___14992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13281__auto__ = (function (){var statearr_14991 = f__13280__auto__.call(null);
(statearr_14991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___14992);

return statearr_14991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___14992,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args15041 = [];
var len__7214__auto___15044 = arguments.length;
var i__7215__auto___15045 = (0);
while(true){
if((i__7215__auto___15045 < len__7214__auto___15044)){
args15041.push((arguments[i__7215__auto___15045]));

var G__15046 = (i__7215__auto___15045 + (1));
i__7215__auto___15045 = G__15046;
continue;
} else {
}
break;
}

var G__15043 = args15041.length;
switch (G__15043) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15041.length)].join('')));

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
var args15049 = [];
var len__7214__auto___15174 = arguments.length;
var i__7215__auto___15175 = (0);
while(true){
if((i__7215__auto___15175 < len__7214__auto___15174)){
args15049.push((arguments[i__7215__auto___15175]));

var G__15176 = (i__7215__auto___15175 + (1));
i__7215__auto___15175 = G__15176;
continue;
} else {
}
break;
}

var G__15051 = args15049.length;
switch (G__15051) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15049.length)].join('')));

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
return (function (p1__15048_SHARP_){
if(cljs.core.truth_(p1__15048_SHARP_.call(null,topic))){
return p1__15048_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15048_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15052 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15053){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15053 = meta15053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15054,meta15053__$1){
var self__ = this;
var _15054__$1 = this;
return (new cljs.core.async.t_cljs$core$async15052(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15053__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15054){
var self__ = this;
var _15054__$1 = this;
return self__.meta15053;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15053","meta15053",-49756488,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15052";

cljs.core.async.t_cljs$core$async15052.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15052");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15052 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15052(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15053){
return (new cljs.core.async.t_cljs$core$async15052(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15053));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15052(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13279__auto___15178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15178,mults,ensure_mult,p){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15178,mults,ensure_mult,p){
return (function (state_15126){
var state_val_15127 = (state_15126[(1)]);
if((state_val_15127 === (7))){
var inst_15122 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
var statearr_15128_15179 = state_15126__$1;
(statearr_15128_15179[(2)] = inst_15122);

(statearr_15128_15179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (20))){
var state_15126__$1 = state_15126;
var statearr_15129_15180 = state_15126__$1;
(statearr_15129_15180[(2)] = null);

(statearr_15129_15180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (1))){
var state_15126__$1 = state_15126;
var statearr_15130_15181 = state_15126__$1;
(statearr_15130_15181[(2)] = null);

(statearr_15130_15181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (24))){
var inst_15105 = (state_15126[(7)]);
var inst_15114 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15105);
var state_15126__$1 = state_15126;
var statearr_15131_15182 = state_15126__$1;
(statearr_15131_15182[(2)] = inst_15114);

(statearr_15131_15182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (4))){
var inst_15057 = (state_15126[(8)]);
var inst_15057__$1 = (state_15126[(2)]);
var inst_15058 = (inst_15057__$1 == null);
var state_15126__$1 = (function (){var statearr_15132 = state_15126;
(statearr_15132[(8)] = inst_15057__$1);

return statearr_15132;
})();
if(cljs.core.truth_(inst_15058)){
var statearr_15133_15183 = state_15126__$1;
(statearr_15133_15183[(1)] = (5));

} else {
var statearr_15134_15184 = state_15126__$1;
(statearr_15134_15184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (15))){
var inst_15099 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
var statearr_15135_15185 = state_15126__$1;
(statearr_15135_15185[(2)] = inst_15099);

(statearr_15135_15185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (21))){
var inst_15119 = (state_15126[(2)]);
var state_15126__$1 = (function (){var statearr_15136 = state_15126;
(statearr_15136[(9)] = inst_15119);

return statearr_15136;
})();
var statearr_15137_15186 = state_15126__$1;
(statearr_15137_15186[(2)] = null);

(statearr_15137_15186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (13))){
var inst_15081 = (state_15126[(10)]);
var inst_15083 = cljs.core.chunked_seq_QMARK_.call(null,inst_15081);
var state_15126__$1 = state_15126;
if(inst_15083){
var statearr_15138_15187 = state_15126__$1;
(statearr_15138_15187[(1)] = (16));

} else {
var statearr_15139_15188 = state_15126__$1;
(statearr_15139_15188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (22))){
var inst_15111 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
if(cljs.core.truth_(inst_15111)){
var statearr_15140_15189 = state_15126__$1;
(statearr_15140_15189[(1)] = (23));

} else {
var statearr_15141_15190 = state_15126__$1;
(statearr_15141_15190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (6))){
var inst_15057 = (state_15126[(8)]);
var inst_15105 = (state_15126[(7)]);
var inst_15107 = (state_15126[(11)]);
var inst_15105__$1 = topic_fn.call(null,inst_15057);
var inst_15106 = cljs.core.deref.call(null,mults);
var inst_15107__$1 = cljs.core.get.call(null,inst_15106,inst_15105__$1);
var state_15126__$1 = (function (){var statearr_15142 = state_15126;
(statearr_15142[(7)] = inst_15105__$1);

(statearr_15142[(11)] = inst_15107__$1);

return statearr_15142;
})();
if(cljs.core.truth_(inst_15107__$1)){
var statearr_15143_15191 = state_15126__$1;
(statearr_15143_15191[(1)] = (19));

} else {
var statearr_15144_15192 = state_15126__$1;
(statearr_15144_15192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (25))){
var inst_15116 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
var statearr_15145_15193 = state_15126__$1;
(statearr_15145_15193[(2)] = inst_15116);

(statearr_15145_15193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (17))){
var inst_15081 = (state_15126[(10)]);
var inst_15090 = cljs.core.first.call(null,inst_15081);
var inst_15091 = cljs.core.async.muxch_STAR_.call(null,inst_15090);
var inst_15092 = cljs.core.async.close_BANG_.call(null,inst_15091);
var inst_15093 = cljs.core.next.call(null,inst_15081);
var inst_15067 = inst_15093;
var inst_15068 = null;
var inst_15069 = (0);
var inst_15070 = (0);
var state_15126__$1 = (function (){var statearr_15146 = state_15126;
(statearr_15146[(12)] = inst_15068);

(statearr_15146[(13)] = inst_15069);

(statearr_15146[(14)] = inst_15067);

(statearr_15146[(15)] = inst_15092);

(statearr_15146[(16)] = inst_15070);

return statearr_15146;
})();
var statearr_15147_15194 = state_15126__$1;
(statearr_15147_15194[(2)] = null);

(statearr_15147_15194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (3))){
var inst_15124 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15126__$1,inst_15124);
} else {
if((state_val_15127 === (12))){
var inst_15101 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
var statearr_15148_15195 = state_15126__$1;
(statearr_15148_15195[(2)] = inst_15101);

(statearr_15148_15195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (2))){
var state_15126__$1 = state_15126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15126__$1,(4),ch);
} else {
if((state_val_15127 === (23))){
var state_15126__$1 = state_15126;
var statearr_15149_15196 = state_15126__$1;
(statearr_15149_15196[(2)] = null);

(statearr_15149_15196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (19))){
var inst_15057 = (state_15126[(8)]);
var inst_15107 = (state_15126[(11)]);
var inst_15109 = cljs.core.async.muxch_STAR_.call(null,inst_15107);
var state_15126__$1 = state_15126;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15126__$1,(22),inst_15109,inst_15057);
} else {
if((state_val_15127 === (11))){
var inst_15067 = (state_15126[(14)]);
var inst_15081 = (state_15126[(10)]);
var inst_15081__$1 = cljs.core.seq.call(null,inst_15067);
var state_15126__$1 = (function (){var statearr_15150 = state_15126;
(statearr_15150[(10)] = inst_15081__$1);

return statearr_15150;
})();
if(inst_15081__$1){
var statearr_15151_15197 = state_15126__$1;
(statearr_15151_15197[(1)] = (13));

} else {
var statearr_15152_15198 = state_15126__$1;
(statearr_15152_15198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (9))){
var inst_15103 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
var statearr_15153_15199 = state_15126__$1;
(statearr_15153_15199[(2)] = inst_15103);

(statearr_15153_15199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (5))){
var inst_15064 = cljs.core.deref.call(null,mults);
var inst_15065 = cljs.core.vals.call(null,inst_15064);
var inst_15066 = cljs.core.seq.call(null,inst_15065);
var inst_15067 = inst_15066;
var inst_15068 = null;
var inst_15069 = (0);
var inst_15070 = (0);
var state_15126__$1 = (function (){var statearr_15154 = state_15126;
(statearr_15154[(12)] = inst_15068);

(statearr_15154[(13)] = inst_15069);

(statearr_15154[(14)] = inst_15067);

(statearr_15154[(16)] = inst_15070);

return statearr_15154;
})();
var statearr_15155_15200 = state_15126__$1;
(statearr_15155_15200[(2)] = null);

(statearr_15155_15200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (14))){
var state_15126__$1 = state_15126;
var statearr_15159_15201 = state_15126__$1;
(statearr_15159_15201[(2)] = null);

(statearr_15159_15201[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (16))){
var inst_15081 = (state_15126[(10)]);
var inst_15085 = cljs.core.chunk_first.call(null,inst_15081);
var inst_15086 = cljs.core.chunk_rest.call(null,inst_15081);
var inst_15087 = cljs.core.count.call(null,inst_15085);
var inst_15067 = inst_15086;
var inst_15068 = inst_15085;
var inst_15069 = inst_15087;
var inst_15070 = (0);
var state_15126__$1 = (function (){var statearr_15160 = state_15126;
(statearr_15160[(12)] = inst_15068);

(statearr_15160[(13)] = inst_15069);

(statearr_15160[(14)] = inst_15067);

(statearr_15160[(16)] = inst_15070);

return statearr_15160;
})();
var statearr_15161_15202 = state_15126__$1;
(statearr_15161_15202[(2)] = null);

(statearr_15161_15202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (10))){
var inst_15068 = (state_15126[(12)]);
var inst_15069 = (state_15126[(13)]);
var inst_15067 = (state_15126[(14)]);
var inst_15070 = (state_15126[(16)]);
var inst_15075 = cljs.core._nth.call(null,inst_15068,inst_15070);
var inst_15076 = cljs.core.async.muxch_STAR_.call(null,inst_15075);
var inst_15077 = cljs.core.async.close_BANG_.call(null,inst_15076);
var inst_15078 = (inst_15070 + (1));
var tmp15156 = inst_15068;
var tmp15157 = inst_15069;
var tmp15158 = inst_15067;
var inst_15067__$1 = tmp15158;
var inst_15068__$1 = tmp15156;
var inst_15069__$1 = tmp15157;
var inst_15070__$1 = inst_15078;
var state_15126__$1 = (function (){var statearr_15162 = state_15126;
(statearr_15162[(12)] = inst_15068__$1);

(statearr_15162[(13)] = inst_15069__$1);

(statearr_15162[(14)] = inst_15067__$1);

(statearr_15162[(17)] = inst_15077);

(statearr_15162[(16)] = inst_15070__$1);

return statearr_15162;
})();
var statearr_15163_15203 = state_15126__$1;
(statearr_15163_15203[(2)] = null);

(statearr_15163_15203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (18))){
var inst_15096 = (state_15126[(2)]);
var state_15126__$1 = state_15126;
var statearr_15164_15204 = state_15126__$1;
(statearr_15164_15204[(2)] = inst_15096);

(statearr_15164_15204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15127 === (8))){
var inst_15069 = (state_15126[(13)]);
var inst_15070 = (state_15126[(16)]);
var inst_15072 = (inst_15070 < inst_15069);
var inst_15073 = inst_15072;
var state_15126__$1 = state_15126;
if(cljs.core.truth_(inst_15073)){
var statearr_15165_15205 = state_15126__$1;
(statearr_15165_15205[(1)] = (10));

} else {
var statearr_15166_15206 = state_15126__$1;
(statearr_15166_15206[(1)] = (11));

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
});})(c__13279__auto___15178,mults,ensure_mult,p))
;
return ((function (switch__13167__auto__,c__13279__auto___15178,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15170[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15170[(1)] = (1));

return statearr_15170;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15126){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15171){if((e15171 instanceof Object)){
var ex__13171__auto__ = e15171;
var statearr_15172_15207 = state_15126;
(statearr_15172_15207[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15208 = state_15126;
state_15126 = G__15208;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15178,mults,ensure_mult,p))
})();
var state__13281__auto__ = (function (){var statearr_15173 = f__13280__auto__.call(null);
(statearr_15173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15178);

return statearr_15173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15178,mults,ensure_mult,p))
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
var args15209 = [];
var len__7214__auto___15212 = arguments.length;
var i__7215__auto___15213 = (0);
while(true){
if((i__7215__auto___15213 < len__7214__auto___15212)){
args15209.push((arguments[i__7215__auto___15213]));

var G__15214 = (i__7215__auto___15213 + (1));
i__7215__auto___15213 = G__15214;
continue;
} else {
}
break;
}

var G__15211 = args15209.length;
switch (G__15211) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15209.length)].join('')));

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
var args15216 = [];
var len__7214__auto___15219 = arguments.length;
var i__7215__auto___15220 = (0);
while(true){
if((i__7215__auto___15220 < len__7214__auto___15219)){
args15216.push((arguments[i__7215__auto___15220]));

var G__15221 = (i__7215__auto___15220 + (1));
i__7215__auto___15220 = G__15221;
continue;
} else {
}
break;
}

var G__15218 = args15216.length;
switch (G__15218) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15216.length)].join('')));

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
var args15223 = [];
var len__7214__auto___15294 = arguments.length;
var i__7215__auto___15295 = (0);
while(true){
if((i__7215__auto___15295 < len__7214__auto___15294)){
args15223.push((arguments[i__7215__auto___15295]));

var G__15296 = (i__7215__auto___15295 + (1));
i__7215__auto___15295 = G__15296;
continue;
} else {
}
break;
}

var G__15225 = args15223.length;
switch (G__15225) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15223.length)].join('')));

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
var c__13279__auto___15298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15264){
var state_val_15265 = (state_15264[(1)]);
if((state_val_15265 === (7))){
var state_15264__$1 = state_15264;
var statearr_15266_15299 = state_15264__$1;
(statearr_15266_15299[(2)] = null);

(statearr_15266_15299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (1))){
var state_15264__$1 = state_15264;
var statearr_15267_15300 = state_15264__$1;
(statearr_15267_15300[(2)] = null);

(statearr_15267_15300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (4))){
var inst_15228 = (state_15264[(7)]);
var inst_15230 = (inst_15228 < cnt);
var state_15264__$1 = state_15264;
if(cljs.core.truth_(inst_15230)){
var statearr_15268_15301 = state_15264__$1;
(statearr_15268_15301[(1)] = (6));

} else {
var statearr_15269_15302 = state_15264__$1;
(statearr_15269_15302[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (15))){
var inst_15260 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15270_15303 = state_15264__$1;
(statearr_15270_15303[(2)] = inst_15260);

(statearr_15270_15303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (13))){
var inst_15253 = cljs.core.async.close_BANG_.call(null,out);
var state_15264__$1 = state_15264;
var statearr_15271_15304 = state_15264__$1;
(statearr_15271_15304[(2)] = inst_15253);

(statearr_15271_15304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (6))){
var state_15264__$1 = state_15264;
var statearr_15272_15305 = state_15264__$1;
(statearr_15272_15305[(2)] = null);

(statearr_15272_15305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (3))){
var inst_15262 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15264__$1,inst_15262);
} else {
if((state_val_15265 === (12))){
var inst_15250 = (state_15264[(8)]);
var inst_15250__$1 = (state_15264[(2)]);
var inst_15251 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15250__$1);
var state_15264__$1 = (function (){var statearr_15273 = state_15264;
(statearr_15273[(8)] = inst_15250__$1);

return statearr_15273;
})();
if(cljs.core.truth_(inst_15251)){
var statearr_15274_15306 = state_15264__$1;
(statearr_15274_15306[(1)] = (13));

} else {
var statearr_15275_15307 = state_15264__$1;
(statearr_15275_15307[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (2))){
var inst_15227 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15228 = (0);
var state_15264__$1 = (function (){var statearr_15276 = state_15264;
(statearr_15276[(9)] = inst_15227);

(statearr_15276[(7)] = inst_15228);

return statearr_15276;
})();
var statearr_15277_15308 = state_15264__$1;
(statearr_15277_15308[(2)] = null);

(statearr_15277_15308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (11))){
var inst_15228 = (state_15264[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15264,(10),Object,null,(9));
var inst_15237 = chs__$1.call(null,inst_15228);
var inst_15238 = done.call(null,inst_15228);
var inst_15239 = cljs.core.async.take_BANG_.call(null,inst_15237,inst_15238);
var state_15264__$1 = state_15264;
var statearr_15278_15309 = state_15264__$1;
(statearr_15278_15309[(2)] = inst_15239);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15264__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (9))){
var inst_15228 = (state_15264[(7)]);
var inst_15241 = (state_15264[(2)]);
var inst_15242 = (inst_15228 + (1));
var inst_15228__$1 = inst_15242;
var state_15264__$1 = (function (){var statearr_15279 = state_15264;
(statearr_15279[(10)] = inst_15241);

(statearr_15279[(7)] = inst_15228__$1);

return statearr_15279;
})();
var statearr_15280_15310 = state_15264__$1;
(statearr_15280_15310[(2)] = null);

(statearr_15280_15310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (5))){
var inst_15248 = (state_15264[(2)]);
var state_15264__$1 = (function (){var statearr_15281 = state_15264;
(statearr_15281[(11)] = inst_15248);

return statearr_15281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15264__$1,(12),dchan);
} else {
if((state_val_15265 === (14))){
var inst_15250 = (state_15264[(8)]);
var inst_15255 = cljs.core.apply.call(null,f,inst_15250);
var state_15264__$1 = state_15264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15264__$1,(16),out,inst_15255);
} else {
if((state_val_15265 === (16))){
var inst_15257 = (state_15264[(2)]);
var state_15264__$1 = (function (){var statearr_15282 = state_15264;
(statearr_15282[(12)] = inst_15257);

return statearr_15282;
})();
var statearr_15283_15311 = state_15264__$1;
(statearr_15283_15311[(2)] = null);

(statearr_15283_15311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (10))){
var inst_15232 = (state_15264[(2)]);
var inst_15233 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15264__$1 = (function (){var statearr_15284 = state_15264;
(statearr_15284[(13)] = inst_15232);

return statearr_15284;
})();
var statearr_15285_15312 = state_15264__$1;
(statearr_15285_15312[(2)] = inst_15233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15264__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15265 === (8))){
var inst_15246 = (state_15264[(2)]);
var state_15264__$1 = state_15264;
var statearr_15286_15313 = state_15264__$1;
(statearr_15286_15313[(2)] = inst_15246);

(statearr_15286_15313[(1)] = (5));


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
});})(c__13279__auto___15298,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13167__auto__,c__13279__auto___15298,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15290[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15290[(1)] = (1));

return statearr_15290;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15264){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15291){if((e15291 instanceof Object)){
var ex__13171__auto__ = e15291;
var statearr_15292_15314 = state_15264;
(statearr_15292_15314[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15315 = state_15264;
state_15264 = G__15315;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15298,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13281__auto__ = (function (){var statearr_15293 = f__13280__auto__.call(null);
(statearr_15293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15298);

return statearr_15293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15298,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15317 = [];
var len__7214__auto___15373 = arguments.length;
var i__7215__auto___15374 = (0);
while(true){
if((i__7215__auto___15374 < len__7214__auto___15373)){
args15317.push((arguments[i__7215__auto___15374]));

var G__15375 = (i__7215__auto___15374 + (1));
i__7215__auto___15374 = G__15375;
continue;
} else {
}
break;
}

var G__15319 = args15317.length;
switch (G__15319) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15317.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15377,out){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15377,out){
return (function (state_15349){
var state_val_15350 = (state_15349[(1)]);
if((state_val_15350 === (7))){
var inst_15328 = (state_15349[(7)]);
var inst_15329 = (state_15349[(8)]);
var inst_15328__$1 = (state_15349[(2)]);
var inst_15329__$1 = cljs.core.nth.call(null,inst_15328__$1,(0),null);
var inst_15330 = cljs.core.nth.call(null,inst_15328__$1,(1),null);
var inst_15331 = (inst_15329__$1 == null);
var state_15349__$1 = (function (){var statearr_15351 = state_15349;
(statearr_15351[(9)] = inst_15330);

(statearr_15351[(7)] = inst_15328__$1);

(statearr_15351[(8)] = inst_15329__$1);

return statearr_15351;
})();
if(cljs.core.truth_(inst_15331)){
var statearr_15352_15378 = state_15349__$1;
(statearr_15352_15378[(1)] = (8));

} else {
var statearr_15353_15379 = state_15349__$1;
(statearr_15353_15379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (1))){
var inst_15320 = cljs.core.vec.call(null,chs);
var inst_15321 = inst_15320;
var state_15349__$1 = (function (){var statearr_15354 = state_15349;
(statearr_15354[(10)] = inst_15321);

return statearr_15354;
})();
var statearr_15355_15380 = state_15349__$1;
(statearr_15355_15380[(2)] = null);

(statearr_15355_15380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (4))){
var inst_15321 = (state_15349[(10)]);
var state_15349__$1 = state_15349;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15349__$1,(7),inst_15321);
} else {
if((state_val_15350 === (6))){
var inst_15345 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15356_15381 = state_15349__$1;
(statearr_15356_15381[(2)] = inst_15345);

(statearr_15356_15381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (3))){
var inst_15347 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15349__$1,inst_15347);
} else {
if((state_val_15350 === (2))){
var inst_15321 = (state_15349[(10)]);
var inst_15323 = cljs.core.count.call(null,inst_15321);
var inst_15324 = (inst_15323 > (0));
var state_15349__$1 = state_15349;
if(cljs.core.truth_(inst_15324)){
var statearr_15358_15382 = state_15349__$1;
(statearr_15358_15382[(1)] = (4));

} else {
var statearr_15359_15383 = state_15349__$1;
(statearr_15359_15383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (11))){
var inst_15321 = (state_15349[(10)]);
var inst_15338 = (state_15349[(2)]);
var tmp15357 = inst_15321;
var inst_15321__$1 = tmp15357;
var state_15349__$1 = (function (){var statearr_15360 = state_15349;
(statearr_15360[(10)] = inst_15321__$1);

(statearr_15360[(11)] = inst_15338);

return statearr_15360;
})();
var statearr_15361_15384 = state_15349__$1;
(statearr_15361_15384[(2)] = null);

(statearr_15361_15384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (9))){
var inst_15329 = (state_15349[(8)]);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15349__$1,(11),out,inst_15329);
} else {
if((state_val_15350 === (5))){
var inst_15343 = cljs.core.async.close_BANG_.call(null,out);
var state_15349__$1 = state_15349;
var statearr_15362_15385 = state_15349__$1;
(statearr_15362_15385[(2)] = inst_15343);

(statearr_15362_15385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (10))){
var inst_15341 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15363_15386 = state_15349__$1;
(statearr_15363_15386[(2)] = inst_15341);

(statearr_15363_15386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (8))){
var inst_15330 = (state_15349[(9)]);
var inst_15321 = (state_15349[(10)]);
var inst_15328 = (state_15349[(7)]);
var inst_15329 = (state_15349[(8)]);
var inst_15333 = (function (){var cs = inst_15321;
var vec__15326 = inst_15328;
var v = inst_15329;
var c = inst_15330;
return ((function (cs,vec__15326,v,c,inst_15330,inst_15321,inst_15328,inst_15329,state_val_15350,c__13279__auto___15377,out){
return (function (p1__15316_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15316_SHARP_);
});
;})(cs,vec__15326,v,c,inst_15330,inst_15321,inst_15328,inst_15329,state_val_15350,c__13279__auto___15377,out))
})();
var inst_15334 = cljs.core.filterv.call(null,inst_15333,inst_15321);
var inst_15321__$1 = inst_15334;
var state_15349__$1 = (function (){var statearr_15364 = state_15349;
(statearr_15364[(10)] = inst_15321__$1);

return statearr_15364;
})();
var statearr_15365_15387 = state_15349__$1;
(statearr_15365_15387[(2)] = null);

(statearr_15365_15387[(1)] = (2));


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
});})(c__13279__auto___15377,out))
;
return ((function (switch__13167__auto__,c__13279__auto___15377,out){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15369 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15369[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15369[(1)] = (1));

return statearr_15369;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15349){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15370){if((e15370 instanceof Object)){
var ex__13171__auto__ = e15370;
var statearr_15371_15388 = state_15349;
(statearr_15371_15388[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15389 = state_15349;
state_15349 = G__15389;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15377,out))
})();
var state__13281__auto__ = (function (){var statearr_15372 = f__13280__auto__.call(null);
(statearr_15372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15377);

return statearr_15372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15377,out))
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
var args15390 = [];
var len__7214__auto___15439 = arguments.length;
var i__7215__auto___15440 = (0);
while(true){
if((i__7215__auto___15440 < len__7214__auto___15439)){
args15390.push((arguments[i__7215__auto___15440]));

var G__15441 = (i__7215__auto___15440 + (1));
i__7215__auto___15440 = G__15441;
continue;
} else {
}
break;
}

var G__15392 = args15390.length;
switch (G__15392) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15390.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15443,out){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15443,out){
return (function (state_15416){
var state_val_15417 = (state_15416[(1)]);
if((state_val_15417 === (7))){
var inst_15398 = (state_15416[(7)]);
var inst_15398__$1 = (state_15416[(2)]);
var inst_15399 = (inst_15398__$1 == null);
var inst_15400 = cljs.core.not.call(null,inst_15399);
var state_15416__$1 = (function (){var statearr_15418 = state_15416;
(statearr_15418[(7)] = inst_15398__$1);

return statearr_15418;
})();
if(inst_15400){
var statearr_15419_15444 = state_15416__$1;
(statearr_15419_15444[(1)] = (8));

} else {
var statearr_15420_15445 = state_15416__$1;
(statearr_15420_15445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (1))){
var inst_15393 = (0);
var state_15416__$1 = (function (){var statearr_15421 = state_15416;
(statearr_15421[(8)] = inst_15393);

return statearr_15421;
})();
var statearr_15422_15446 = state_15416__$1;
(statearr_15422_15446[(2)] = null);

(statearr_15422_15446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (4))){
var state_15416__$1 = state_15416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15416__$1,(7),ch);
} else {
if((state_val_15417 === (6))){
var inst_15411 = (state_15416[(2)]);
var state_15416__$1 = state_15416;
var statearr_15423_15447 = state_15416__$1;
(statearr_15423_15447[(2)] = inst_15411);

(statearr_15423_15447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (3))){
var inst_15413 = (state_15416[(2)]);
var inst_15414 = cljs.core.async.close_BANG_.call(null,out);
var state_15416__$1 = (function (){var statearr_15424 = state_15416;
(statearr_15424[(9)] = inst_15413);

return statearr_15424;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15416__$1,inst_15414);
} else {
if((state_val_15417 === (2))){
var inst_15393 = (state_15416[(8)]);
var inst_15395 = (inst_15393 < n);
var state_15416__$1 = state_15416;
if(cljs.core.truth_(inst_15395)){
var statearr_15425_15448 = state_15416__$1;
(statearr_15425_15448[(1)] = (4));

} else {
var statearr_15426_15449 = state_15416__$1;
(statearr_15426_15449[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (11))){
var inst_15393 = (state_15416[(8)]);
var inst_15403 = (state_15416[(2)]);
var inst_15404 = (inst_15393 + (1));
var inst_15393__$1 = inst_15404;
var state_15416__$1 = (function (){var statearr_15427 = state_15416;
(statearr_15427[(10)] = inst_15403);

(statearr_15427[(8)] = inst_15393__$1);

return statearr_15427;
})();
var statearr_15428_15450 = state_15416__$1;
(statearr_15428_15450[(2)] = null);

(statearr_15428_15450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (9))){
var state_15416__$1 = state_15416;
var statearr_15429_15451 = state_15416__$1;
(statearr_15429_15451[(2)] = null);

(statearr_15429_15451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (5))){
var state_15416__$1 = state_15416;
var statearr_15430_15452 = state_15416__$1;
(statearr_15430_15452[(2)] = null);

(statearr_15430_15452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (10))){
var inst_15408 = (state_15416[(2)]);
var state_15416__$1 = state_15416;
var statearr_15431_15453 = state_15416__$1;
(statearr_15431_15453[(2)] = inst_15408);

(statearr_15431_15453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15417 === (8))){
var inst_15398 = (state_15416[(7)]);
var state_15416__$1 = state_15416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15416__$1,(11),out,inst_15398);
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
});})(c__13279__auto___15443,out))
;
return ((function (switch__13167__auto__,c__13279__auto___15443,out){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15435[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15435[(1)] = (1));

return statearr_15435;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15416){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15436){if((e15436 instanceof Object)){
var ex__13171__auto__ = e15436;
var statearr_15437_15454 = state_15416;
(statearr_15437_15454[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15455 = state_15416;
state_15416 = G__15455;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15443,out))
})();
var state__13281__auto__ = (function (){var statearr_15438 = f__13280__auto__.call(null);
(statearr_15438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15443);

return statearr_15438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15443,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15463 = (function (map_LT_,f,ch,meta15464){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15464 = meta15464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15465,meta15464__$1){
var self__ = this;
var _15465__$1 = this;
return (new cljs.core.async.t_cljs$core$async15463(self__.map_LT_,self__.f,self__.ch,meta15464__$1));
});

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15465){
var self__ = this;
var _15465__$1 = this;
return self__.meta15464;
});

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15466 = (function (map_LT_,f,ch,meta15464,_,fn1,meta15467){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15464 = meta15464;
this._ = _;
this.fn1 = fn1;
this.meta15467 = meta15467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15468,meta15467__$1){
var self__ = this;
var _15468__$1 = this;
return (new cljs.core.async.t_cljs$core$async15466(self__.map_LT_,self__.f,self__.ch,self__.meta15464,self__._,self__.fn1,meta15467__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15466.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15468){
var self__ = this;
var _15468__$1 = this;
return self__.meta15467;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15466.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15456_SHARP_){
return f1.call(null,(((p1__15456_SHARP_ == null))?null:self__.f.call(null,p1__15456_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15466.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15464","meta15464",-96192278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15463","cljs.core.async/t_cljs$core$async15463",-975910848,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15467","meta15467",-1908652674,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15466";

cljs.core.async.t_cljs$core$async15466.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15466");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15466 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15466(map_LT___$1,f__$1,ch__$1,meta15464__$1,___$2,fn1__$1,meta15467){
return (new cljs.core.async.t_cljs$core$async15466(map_LT___$1,f__$1,ch__$1,meta15464__$1,___$2,fn1__$1,meta15467));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15466(self__.map_LT_,self__.f,self__.ch,self__.meta15464,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15464","meta15464",-96192278,null)], null);
});

cljs.core.async.t_cljs$core$async15463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15463";

cljs.core.async.t_cljs$core$async15463.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15463");
});

cljs.core.async.__GT_t_cljs$core$async15463 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15463(map_LT___$1,f__$1,ch__$1,meta15464){
return (new cljs.core.async.t_cljs$core$async15463(map_LT___$1,f__$1,ch__$1,meta15464));
});

}

return (new cljs.core.async.t_cljs$core$async15463(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15472 = (function (map_GT_,f,ch,meta15473){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15473 = meta15473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15474,meta15473__$1){
var self__ = this;
var _15474__$1 = this;
return (new cljs.core.async.t_cljs$core$async15472(self__.map_GT_,self__.f,self__.ch,meta15473__$1));
});

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15474){
var self__ = this;
var _15474__$1 = this;
return self__.meta15473;
});

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15473","meta15473",1036948233,null)], null);
});

cljs.core.async.t_cljs$core$async15472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15472";

cljs.core.async.t_cljs$core$async15472.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15472");
});

cljs.core.async.__GT_t_cljs$core$async15472 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15472(map_GT___$1,f__$1,ch__$1,meta15473){
return (new cljs.core.async.t_cljs$core$async15472(map_GT___$1,f__$1,ch__$1,meta15473));
});

}

return (new cljs.core.async.t_cljs$core$async15472(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15478 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15478 = (function (filter_GT_,p,ch,meta15479){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15479 = meta15479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15480,meta15479__$1){
var self__ = this;
var _15480__$1 = this;
return (new cljs.core.async.t_cljs$core$async15478(self__.filter_GT_,self__.p,self__.ch,meta15479__$1));
});

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15480){
var self__ = this;
var _15480__$1 = this;
return self__.meta15479;
});

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15478.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15479","meta15479",573400151,null)], null);
});

cljs.core.async.t_cljs$core$async15478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15478";

cljs.core.async.t_cljs$core$async15478.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async15478");
});

cljs.core.async.__GT_t_cljs$core$async15478 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15478(filter_GT___$1,p__$1,ch__$1,meta15479){
return (new cljs.core.async.t_cljs$core$async15478(filter_GT___$1,p__$1,ch__$1,meta15479));
});

}

return (new cljs.core.async.t_cljs$core$async15478(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15481 = [];
var len__7214__auto___15525 = arguments.length;
var i__7215__auto___15526 = (0);
while(true){
if((i__7215__auto___15526 < len__7214__auto___15525)){
args15481.push((arguments[i__7215__auto___15526]));

var G__15527 = (i__7215__auto___15526 + (1));
i__7215__auto___15526 = G__15527;
continue;
} else {
}
break;
}

var G__15483 = args15481.length;
switch (G__15483) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15481.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15529,out){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15529,out){
return (function (state_15504){
var state_val_15505 = (state_15504[(1)]);
if((state_val_15505 === (7))){
var inst_15500 = (state_15504[(2)]);
var state_15504__$1 = state_15504;
var statearr_15506_15530 = state_15504__$1;
(statearr_15506_15530[(2)] = inst_15500);

(statearr_15506_15530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (1))){
var state_15504__$1 = state_15504;
var statearr_15507_15531 = state_15504__$1;
(statearr_15507_15531[(2)] = null);

(statearr_15507_15531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (4))){
var inst_15486 = (state_15504[(7)]);
var inst_15486__$1 = (state_15504[(2)]);
var inst_15487 = (inst_15486__$1 == null);
var state_15504__$1 = (function (){var statearr_15508 = state_15504;
(statearr_15508[(7)] = inst_15486__$1);

return statearr_15508;
})();
if(cljs.core.truth_(inst_15487)){
var statearr_15509_15532 = state_15504__$1;
(statearr_15509_15532[(1)] = (5));

} else {
var statearr_15510_15533 = state_15504__$1;
(statearr_15510_15533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (6))){
var inst_15486 = (state_15504[(7)]);
var inst_15491 = p.call(null,inst_15486);
var state_15504__$1 = state_15504;
if(cljs.core.truth_(inst_15491)){
var statearr_15511_15534 = state_15504__$1;
(statearr_15511_15534[(1)] = (8));

} else {
var statearr_15512_15535 = state_15504__$1;
(statearr_15512_15535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (3))){
var inst_15502 = (state_15504[(2)]);
var state_15504__$1 = state_15504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15504__$1,inst_15502);
} else {
if((state_val_15505 === (2))){
var state_15504__$1 = state_15504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15504__$1,(4),ch);
} else {
if((state_val_15505 === (11))){
var inst_15494 = (state_15504[(2)]);
var state_15504__$1 = state_15504;
var statearr_15513_15536 = state_15504__$1;
(statearr_15513_15536[(2)] = inst_15494);

(statearr_15513_15536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (9))){
var state_15504__$1 = state_15504;
var statearr_15514_15537 = state_15504__$1;
(statearr_15514_15537[(2)] = null);

(statearr_15514_15537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (5))){
var inst_15489 = cljs.core.async.close_BANG_.call(null,out);
var state_15504__$1 = state_15504;
var statearr_15515_15538 = state_15504__$1;
(statearr_15515_15538[(2)] = inst_15489);

(statearr_15515_15538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (10))){
var inst_15497 = (state_15504[(2)]);
var state_15504__$1 = (function (){var statearr_15516 = state_15504;
(statearr_15516[(8)] = inst_15497);

return statearr_15516;
})();
var statearr_15517_15539 = state_15504__$1;
(statearr_15517_15539[(2)] = null);

(statearr_15517_15539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15505 === (8))){
var inst_15486 = (state_15504[(7)]);
var state_15504__$1 = state_15504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15504__$1,(11),out,inst_15486);
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
});})(c__13279__auto___15529,out))
;
return ((function (switch__13167__auto__,c__13279__auto___15529,out){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15521 = [null,null,null,null,null,null,null,null,null];
(statearr_15521[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15521[(1)] = (1));

return statearr_15521;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15504){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15522){if((e15522 instanceof Object)){
var ex__13171__auto__ = e15522;
var statearr_15523_15540 = state_15504;
(statearr_15523_15540[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15541 = state_15504;
state_15504 = G__15541;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15529,out))
})();
var state__13281__auto__ = (function (){var statearr_15524 = f__13280__auto__.call(null);
(statearr_15524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15529);

return statearr_15524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15529,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15542 = [];
var len__7214__auto___15545 = arguments.length;
var i__7215__auto___15546 = (0);
while(true){
if((i__7215__auto___15546 < len__7214__auto___15545)){
args15542.push((arguments[i__7215__auto___15546]));

var G__15547 = (i__7215__auto___15546 + (1));
i__7215__auto___15546 = G__15547;
continue;
} else {
}
break;
}

var G__15544 = args15542.length;
switch (G__15544) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15542.length)].join('')));

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
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__){
return (function (state_15714){
var state_val_15715 = (state_15714[(1)]);
if((state_val_15715 === (7))){
var inst_15710 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15716_15757 = state_15714__$1;
(statearr_15716_15757[(2)] = inst_15710);

(statearr_15716_15757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (20))){
var inst_15680 = (state_15714[(7)]);
var inst_15691 = (state_15714[(2)]);
var inst_15692 = cljs.core.next.call(null,inst_15680);
var inst_15666 = inst_15692;
var inst_15667 = null;
var inst_15668 = (0);
var inst_15669 = (0);
var state_15714__$1 = (function (){var statearr_15717 = state_15714;
(statearr_15717[(8)] = inst_15691);

(statearr_15717[(9)] = inst_15668);

(statearr_15717[(10)] = inst_15667);

(statearr_15717[(11)] = inst_15666);

(statearr_15717[(12)] = inst_15669);

return statearr_15717;
})();
var statearr_15718_15758 = state_15714__$1;
(statearr_15718_15758[(2)] = null);

(statearr_15718_15758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (1))){
var state_15714__$1 = state_15714;
var statearr_15719_15759 = state_15714__$1;
(statearr_15719_15759[(2)] = null);

(statearr_15719_15759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (4))){
var inst_15655 = (state_15714[(13)]);
var inst_15655__$1 = (state_15714[(2)]);
var inst_15656 = (inst_15655__$1 == null);
var state_15714__$1 = (function (){var statearr_15720 = state_15714;
(statearr_15720[(13)] = inst_15655__$1);

return statearr_15720;
})();
if(cljs.core.truth_(inst_15656)){
var statearr_15721_15760 = state_15714__$1;
(statearr_15721_15760[(1)] = (5));

} else {
var statearr_15722_15761 = state_15714__$1;
(statearr_15722_15761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (15))){
var state_15714__$1 = state_15714;
var statearr_15726_15762 = state_15714__$1;
(statearr_15726_15762[(2)] = null);

(statearr_15726_15762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (21))){
var state_15714__$1 = state_15714;
var statearr_15727_15763 = state_15714__$1;
(statearr_15727_15763[(2)] = null);

(statearr_15727_15763[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (13))){
var inst_15668 = (state_15714[(9)]);
var inst_15667 = (state_15714[(10)]);
var inst_15666 = (state_15714[(11)]);
var inst_15669 = (state_15714[(12)]);
var inst_15676 = (state_15714[(2)]);
var inst_15677 = (inst_15669 + (1));
var tmp15723 = inst_15668;
var tmp15724 = inst_15667;
var tmp15725 = inst_15666;
var inst_15666__$1 = tmp15725;
var inst_15667__$1 = tmp15724;
var inst_15668__$1 = tmp15723;
var inst_15669__$1 = inst_15677;
var state_15714__$1 = (function (){var statearr_15728 = state_15714;
(statearr_15728[(9)] = inst_15668__$1);

(statearr_15728[(10)] = inst_15667__$1);

(statearr_15728[(14)] = inst_15676);

(statearr_15728[(11)] = inst_15666__$1);

(statearr_15728[(12)] = inst_15669__$1);

return statearr_15728;
})();
var statearr_15729_15764 = state_15714__$1;
(statearr_15729_15764[(2)] = null);

(statearr_15729_15764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (22))){
var state_15714__$1 = state_15714;
var statearr_15730_15765 = state_15714__$1;
(statearr_15730_15765[(2)] = null);

(statearr_15730_15765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (6))){
var inst_15655 = (state_15714[(13)]);
var inst_15664 = f.call(null,inst_15655);
var inst_15665 = cljs.core.seq.call(null,inst_15664);
var inst_15666 = inst_15665;
var inst_15667 = null;
var inst_15668 = (0);
var inst_15669 = (0);
var state_15714__$1 = (function (){var statearr_15731 = state_15714;
(statearr_15731[(9)] = inst_15668);

(statearr_15731[(10)] = inst_15667);

(statearr_15731[(11)] = inst_15666);

(statearr_15731[(12)] = inst_15669);

return statearr_15731;
})();
var statearr_15732_15766 = state_15714__$1;
(statearr_15732_15766[(2)] = null);

(statearr_15732_15766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (17))){
var inst_15680 = (state_15714[(7)]);
var inst_15684 = cljs.core.chunk_first.call(null,inst_15680);
var inst_15685 = cljs.core.chunk_rest.call(null,inst_15680);
var inst_15686 = cljs.core.count.call(null,inst_15684);
var inst_15666 = inst_15685;
var inst_15667 = inst_15684;
var inst_15668 = inst_15686;
var inst_15669 = (0);
var state_15714__$1 = (function (){var statearr_15733 = state_15714;
(statearr_15733[(9)] = inst_15668);

(statearr_15733[(10)] = inst_15667);

(statearr_15733[(11)] = inst_15666);

(statearr_15733[(12)] = inst_15669);

return statearr_15733;
})();
var statearr_15734_15767 = state_15714__$1;
(statearr_15734_15767[(2)] = null);

(statearr_15734_15767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (3))){
var inst_15712 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15714__$1,inst_15712);
} else {
if((state_val_15715 === (12))){
var inst_15700 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15735_15768 = state_15714__$1;
(statearr_15735_15768[(2)] = inst_15700);

(statearr_15735_15768[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (2))){
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15714__$1,(4),in$);
} else {
if((state_val_15715 === (23))){
var inst_15708 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15736_15769 = state_15714__$1;
(statearr_15736_15769[(2)] = inst_15708);

(statearr_15736_15769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (19))){
var inst_15695 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15737_15770 = state_15714__$1;
(statearr_15737_15770[(2)] = inst_15695);

(statearr_15737_15770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (11))){
var inst_15680 = (state_15714[(7)]);
var inst_15666 = (state_15714[(11)]);
var inst_15680__$1 = cljs.core.seq.call(null,inst_15666);
var state_15714__$1 = (function (){var statearr_15738 = state_15714;
(statearr_15738[(7)] = inst_15680__$1);

return statearr_15738;
})();
if(inst_15680__$1){
var statearr_15739_15771 = state_15714__$1;
(statearr_15739_15771[(1)] = (14));

} else {
var statearr_15740_15772 = state_15714__$1;
(statearr_15740_15772[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (9))){
var inst_15702 = (state_15714[(2)]);
var inst_15703 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15714__$1 = (function (){var statearr_15741 = state_15714;
(statearr_15741[(15)] = inst_15702);

return statearr_15741;
})();
if(cljs.core.truth_(inst_15703)){
var statearr_15742_15773 = state_15714__$1;
(statearr_15742_15773[(1)] = (21));

} else {
var statearr_15743_15774 = state_15714__$1;
(statearr_15743_15774[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (5))){
var inst_15658 = cljs.core.async.close_BANG_.call(null,out);
var state_15714__$1 = state_15714;
var statearr_15744_15775 = state_15714__$1;
(statearr_15744_15775[(2)] = inst_15658);

(statearr_15744_15775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (14))){
var inst_15680 = (state_15714[(7)]);
var inst_15682 = cljs.core.chunked_seq_QMARK_.call(null,inst_15680);
var state_15714__$1 = state_15714;
if(inst_15682){
var statearr_15745_15776 = state_15714__$1;
(statearr_15745_15776[(1)] = (17));

} else {
var statearr_15746_15777 = state_15714__$1;
(statearr_15746_15777[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (16))){
var inst_15698 = (state_15714[(2)]);
var state_15714__$1 = state_15714;
var statearr_15747_15778 = state_15714__$1;
(statearr_15747_15778[(2)] = inst_15698);

(statearr_15747_15778[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15715 === (10))){
var inst_15667 = (state_15714[(10)]);
var inst_15669 = (state_15714[(12)]);
var inst_15674 = cljs.core._nth.call(null,inst_15667,inst_15669);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15714__$1,(13),out,inst_15674);
} else {
if((state_val_15715 === (18))){
var inst_15680 = (state_15714[(7)]);
var inst_15689 = cljs.core.first.call(null,inst_15680);
var state_15714__$1 = state_15714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15714__$1,(20),out,inst_15689);
} else {
if((state_val_15715 === (8))){
var inst_15668 = (state_15714[(9)]);
var inst_15669 = (state_15714[(12)]);
var inst_15671 = (inst_15669 < inst_15668);
var inst_15672 = inst_15671;
var state_15714__$1 = state_15714;
if(cljs.core.truth_(inst_15672)){
var statearr_15748_15779 = state_15714__$1;
(statearr_15748_15779[(1)] = (10));

} else {
var statearr_15749_15780 = state_15714__$1;
(statearr_15749_15780[(1)] = (11));

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
});})(c__13279__auto__))
;
return ((function (switch__13167__auto__,c__13279__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13168__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13168__auto____0 = (function (){
var statearr_15753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15753[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13168__auto__);

(statearr_15753[(1)] = (1));

return statearr_15753;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13168__auto____1 = (function (state_15714){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15754){if((e15754 instanceof Object)){
var ex__13171__auto__ = e15754;
var statearr_15755_15781 = state_15714;
(statearr_15755_15781[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15782 = state_15714;
state_15714 = G__15782;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13168__auto__ = function(state_15714){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13168__auto____1.call(this,state_15714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13168__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13168__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__))
})();
var state__13281__auto__ = (function (){var statearr_15756 = f__13280__auto__.call(null);
(statearr_15756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_15756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__))
);

return c__13279__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15783 = [];
var len__7214__auto___15786 = arguments.length;
var i__7215__auto___15787 = (0);
while(true){
if((i__7215__auto___15787 < len__7214__auto___15786)){
args15783.push((arguments[i__7215__auto___15787]));

var G__15788 = (i__7215__auto___15787 + (1));
i__7215__auto___15787 = G__15788;
continue;
} else {
}
break;
}

var G__15785 = args15783.length;
switch (G__15785) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15783.length)].join('')));

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
var args15790 = [];
var len__7214__auto___15793 = arguments.length;
var i__7215__auto___15794 = (0);
while(true){
if((i__7215__auto___15794 < len__7214__auto___15793)){
args15790.push((arguments[i__7215__auto___15794]));

var G__15795 = (i__7215__auto___15794 + (1));
i__7215__auto___15794 = G__15795;
continue;
} else {
}
break;
}

var G__15792 = args15790.length;
switch (G__15792) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15790.length)].join('')));

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
var args15797 = [];
var len__7214__auto___15848 = arguments.length;
var i__7215__auto___15849 = (0);
while(true){
if((i__7215__auto___15849 < len__7214__auto___15848)){
args15797.push((arguments[i__7215__auto___15849]));

var G__15850 = (i__7215__auto___15849 + (1));
i__7215__auto___15849 = G__15850;
continue;
} else {
}
break;
}

var G__15799 = args15797.length;
switch (G__15799) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15797.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15852,out){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15852,out){
return (function (state_15823){
var state_val_15824 = (state_15823[(1)]);
if((state_val_15824 === (7))){
var inst_15818 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15825_15853 = state_15823__$1;
(statearr_15825_15853[(2)] = inst_15818);

(statearr_15825_15853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (1))){
var inst_15800 = null;
var state_15823__$1 = (function (){var statearr_15826 = state_15823;
(statearr_15826[(7)] = inst_15800);

return statearr_15826;
})();
var statearr_15827_15854 = state_15823__$1;
(statearr_15827_15854[(2)] = null);

(statearr_15827_15854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (4))){
var inst_15803 = (state_15823[(8)]);
var inst_15803__$1 = (state_15823[(2)]);
var inst_15804 = (inst_15803__$1 == null);
var inst_15805 = cljs.core.not.call(null,inst_15804);
var state_15823__$1 = (function (){var statearr_15828 = state_15823;
(statearr_15828[(8)] = inst_15803__$1);

return statearr_15828;
})();
if(inst_15805){
var statearr_15829_15855 = state_15823__$1;
(statearr_15829_15855[(1)] = (5));

} else {
var statearr_15830_15856 = state_15823__$1;
(statearr_15830_15856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (6))){
var state_15823__$1 = state_15823;
var statearr_15831_15857 = state_15823__$1;
(statearr_15831_15857[(2)] = null);

(statearr_15831_15857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (3))){
var inst_15820 = (state_15823[(2)]);
var inst_15821 = cljs.core.async.close_BANG_.call(null,out);
var state_15823__$1 = (function (){var statearr_15832 = state_15823;
(statearr_15832[(9)] = inst_15820);

return statearr_15832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15823__$1,inst_15821);
} else {
if((state_val_15824 === (2))){
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15823__$1,(4),ch);
} else {
if((state_val_15824 === (11))){
var inst_15803 = (state_15823[(8)]);
var inst_15812 = (state_15823[(2)]);
var inst_15800 = inst_15803;
var state_15823__$1 = (function (){var statearr_15833 = state_15823;
(statearr_15833[(7)] = inst_15800);

(statearr_15833[(10)] = inst_15812);

return statearr_15833;
})();
var statearr_15834_15858 = state_15823__$1;
(statearr_15834_15858[(2)] = null);

(statearr_15834_15858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (9))){
var inst_15803 = (state_15823[(8)]);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15823__$1,(11),out,inst_15803);
} else {
if((state_val_15824 === (5))){
var inst_15800 = (state_15823[(7)]);
var inst_15803 = (state_15823[(8)]);
var inst_15807 = cljs.core._EQ_.call(null,inst_15803,inst_15800);
var state_15823__$1 = state_15823;
if(inst_15807){
var statearr_15836_15859 = state_15823__$1;
(statearr_15836_15859[(1)] = (8));

} else {
var statearr_15837_15860 = state_15823__$1;
(statearr_15837_15860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (10))){
var inst_15815 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15838_15861 = state_15823__$1;
(statearr_15838_15861[(2)] = inst_15815);

(statearr_15838_15861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (8))){
var inst_15800 = (state_15823[(7)]);
var tmp15835 = inst_15800;
var inst_15800__$1 = tmp15835;
var state_15823__$1 = (function (){var statearr_15839 = state_15823;
(statearr_15839[(7)] = inst_15800__$1);

return statearr_15839;
})();
var statearr_15840_15862 = state_15823__$1;
(statearr_15840_15862[(2)] = null);

(statearr_15840_15862[(1)] = (2));


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
});})(c__13279__auto___15852,out))
;
return ((function (switch__13167__auto__,c__13279__auto___15852,out){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15844 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15844[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15844[(1)] = (1));

return statearr_15844;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15823){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15845){if((e15845 instanceof Object)){
var ex__13171__auto__ = e15845;
var statearr_15846_15863 = state_15823;
(statearr_15846_15863[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15864 = state_15823;
state_15823 = G__15864;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15852,out))
})();
var state__13281__auto__ = (function (){var statearr_15847 = f__13280__auto__.call(null);
(statearr_15847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15852);

return statearr_15847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15852,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15865 = [];
var len__7214__auto___15935 = arguments.length;
var i__7215__auto___15936 = (0);
while(true){
if((i__7215__auto___15936 < len__7214__auto___15935)){
args15865.push((arguments[i__7215__auto___15936]));

var G__15937 = (i__7215__auto___15936 + (1));
i__7215__auto___15936 = G__15937;
continue;
} else {
}
break;
}

var G__15867 = args15865.length;
switch (G__15867) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15865.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___15939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___15939,out){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___15939,out){
return (function (state_15905){
var state_val_15906 = (state_15905[(1)]);
if((state_val_15906 === (7))){
var inst_15901 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15907_15940 = state_15905__$1;
(statearr_15907_15940[(2)] = inst_15901);

(statearr_15907_15940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (1))){
var inst_15868 = (new Array(n));
var inst_15869 = inst_15868;
var inst_15870 = (0);
var state_15905__$1 = (function (){var statearr_15908 = state_15905;
(statearr_15908[(7)] = inst_15869);

(statearr_15908[(8)] = inst_15870);

return statearr_15908;
})();
var statearr_15909_15941 = state_15905__$1;
(statearr_15909_15941[(2)] = null);

(statearr_15909_15941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (4))){
var inst_15873 = (state_15905[(9)]);
var inst_15873__$1 = (state_15905[(2)]);
var inst_15874 = (inst_15873__$1 == null);
var inst_15875 = cljs.core.not.call(null,inst_15874);
var state_15905__$1 = (function (){var statearr_15910 = state_15905;
(statearr_15910[(9)] = inst_15873__$1);

return statearr_15910;
})();
if(inst_15875){
var statearr_15911_15942 = state_15905__$1;
(statearr_15911_15942[(1)] = (5));

} else {
var statearr_15912_15943 = state_15905__$1;
(statearr_15912_15943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (15))){
var inst_15895 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15913_15944 = state_15905__$1;
(statearr_15913_15944[(2)] = inst_15895);

(statearr_15913_15944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (13))){
var state_15905__$1 = state_15905;
var statearr_15914_15945 = state_15905__$1;
(statearr_15914_15945[(2)] = null);

(statearr_15914_15945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (6))){
var inst_15870 = (state_15905[(8)]);
var inst_15891 = (inst_15870 > (0));
var state_15905__$1 = state_15905;
if(cljs.core.truth_(inst_15891)){
var statearr_15915_15946 = state_15905__$1;
(statearr_15915_15946[(1)] = (12));

} else {
var statearr_15916_15947 = state_15905__$1;
(statearr_15916_15947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (3))){
var inst_15903 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15905__$1,inst_15903);
} else {
if((state_val_15906 === (12))){
var inst_15869 = (state_15905[(7)]);
var inst_15893 = cljs.core.vec.call(null,inst_15869);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15905__$1,(15),out,inst_15893);
} else {
if((state_val_15906 === (2))){
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15905__$1,(4),ch);
} else {
if((state_val_15906 === (11))){
var inst_15885 = (state_15905[(2)]);
var inst_15886 = (new Array(n));
var inst_15869 = inst_15886;
var inst_15870 = (0);
var state_15905__$1 = (function (){var statearr_15917 = state_15905;
(statearr_15917[(7)] = inst_15869);

(statearr_15917[(10)] = inst_15885);

(statearr_15917[(8)] = inst_15870);

return statearr_15917;
})();
var statearr_15918_15948 = state_15905__$1;
(statearr_15918_15948[(2)] = null);

(statearr_15918_15948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (9))){
var inst_15869 = (state_15905[(7)]);
var inst_15883 = cljs.core.vec.call(null,inst_15869);
var state_15905__$1 = state_15905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15905__$1,(11),out,inst_15883);
} else {
if((state_val_15906 === (5))){
var inst_15878 = (state_15905[(11)]);
var inst_15873 = (state_15905[(9)]);
var inst_15869 = (state_15905[(7)]);
var inst_15870 = (state_15905[(8)]);
var inst_15877 = (inst_15869[inst_15870] = inst_15873);
var inst_15878__$1 = (inst_15870 + (1));
var inst_15879 = (inst_15878__$1 < n);
var state_15905__$1 = (function (){var statearr_15919 = state_15905;
(statearr_15919[(11)] = inst_15878__$1);

(statearr_15919[(12)] = inst_15877);

return statearr_15919;
})();
if(cljs.core.truth_(inst_15879)){
var statearr_15920_15949 = state_15905__$1;
(statearr_15920_15949[(1)] = (8));

} else {
var statearr_15921_15950 = state_15905__$1;
(statearr_15921_15950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (14))){
var inst_15898 = (state_15905[(2)]);
var inst_15899 = cljs.core.async.close_BANG_.call(null,out);
var state_15905__$1 = (function (){var statearr_15923 = state_15905;
(statearr_15923[(13)] = inst_15898);

return statearr_15923;
})();
var statearr_15924_15951 = state_15905__$1;
(statearr_15924_15951[(2)] = inst_15899);

(statearr_15924_15951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (10))){
var inst_15889 = (state_15905[(2)]);
var state_15905__$1 = state_15905;
var statearr_15925_15952 = state_15905__$1;
(statearr_15925_15952[(2)] = inst_15889);

(statearr_15925_15952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15906 === (8))){
var inst_15878 = (state_15905[(11)]);
var inst_15869 = (state_15905[(7)]);
var tmp15922 = inst_15869;
var inst_15869__$1 = tmp15922;
var inst_15870 = inst_15878;
var state_15905__$1 = (function (){var statearr_15926 = state_15905;
(statearr_15926[(7)] = inst_15869__$1);

(statearr_15926[(8)] = inst_15870);

return statearr_15926;
})();
var statearr_15927_15953 = state_15905__$1;
(statearr_15927_15953[(2)] = null);

(statearr_15927_15953[(1)] = (2));


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
});})(c__13279__auto___15939,out))
;
return ((function (switch__13167__auto__,c__13279__auto___15939,out){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_15931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15931[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_15931[(1)] = (1));

return statearr_15931;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_15905){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_15905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e15932){if((e15932 instanceof Object)){
var ex__13171__auto__ = e15932;
var statearr_15933_15954 = state_15905;
(statearr_15933_15954[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15955 = state_15905;
state_15905 = G__15955;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_15905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_15905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___15939,out))
})();
var state__13281__auto__ = (function (){var statearr_15934 = f__13280__auto__.call(null);
(statearr_15934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___15939);

return statearr_15934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___15939,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15956 = [];
var len__7214__auto___16030 = arguments.length;
var i__7215__auto___16031 = (0);
while(true){
if((i__7215__auto___16031 < len__7214__auto___16030)){
args15956.push((arguments[i__7215__auto___16031]));

var G__16032 = (i__7215__auto___16031 + (1));
i__7215__auto___16031 = G__16032;
continue;
} else {
}
break;
}

var G__15958 = args15956.length;
switch (G__15958) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15956.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13279__auto___16034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto___16034,out){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto___16034,out){
return (function (state_16000){
var state_val_16001 = (state_16000[(1)]);
if((state_val_16001 === (7))){
var inst_15996 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16002_16035 = state_16000__$1;
(statearr_16002_16035[(2)] = inst_15996);

(statearr_16002_16035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (1))){
var inst_15959 = [];
var inst_15960 = inst_15959;
var inst_15961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16000__$1 = (function (){var statearr_16003 = state_16000;
(statearr_16003[(7)] = inst_15960);

(statearr_16003[(8)] = inst_15961);

return statearr_16003;
})();
var statearr_16004_16036 = state_16000__$1;
(statearr_16004_16036[(2)] = null);

(statearr_16004_16036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (4))){
var inst_15964 = (state_16000[(9)]);
var inst_15964__$1 = (state_16000[(2)]);
var inst_15965 = (inst_15964__$1 == null);
var inst_15966 = cljs.core.not.call(null,inst_15965);
var state_16000__$1 = (function (){var statearr_16005 = state_16000;
(statearr_16005[(9)] = inst_15964__$1);

return statearr_16005;
})();
if(inst_15966){
var statearr_16006_16037 = state_16000__$1;
(statearr_16006_16037[(1)] = (5));

} else {
var statearr_16007_16038 = state_16000__$1;
(statearr_16007_16038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (15))){
var inst_15990 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16008_16039 = state_16000__$1;
(statearr_16008_16039[(2)] = inst_15990);

(statearr_16008_16039[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (13))){
var state_16000__$1 = state_16000;
var statearr_16009_16040 = state_16000__$1;
(statearr_16009_16040[(2)] = null);

(statearr_16009_16040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (6))){
var inst_15960 = (state_16000[(7)]);
var inst_15985 = inst_15960.length;
var inst_15986 = (inst_15985 > (0));
var state_16000__$1 = state_16000;
if(cljs.core.truth_(inst_15986)){
var statearr_16010_16041 = state_16000__$1;
(statearr_16010_16041[(1)] = (12));

} else {
var statearr_16011_16042 = state_16000__$1;
(statearr_16011_16042[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (3))){
var inst_15998 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16000__$1,inst_15998);
} else {
if((state_val_16001 === (12))){
var inst_15960 = (state_16000[(7)]);
var inst_15988 = cljs.core.vec.call(null,inst_15960);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16000__$1,(15),out,inst_15988);
} else {
if((state_val_16001 === (2))){
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16000__$1,(4),ch);
} else {
if((state_val_16001 === (11))){
var inst_15964 = (state_16000[(9)]);
var inst_15968 = (state_16000[(10)]);
var inst_15978 = (state_16000[(2)]);
var inst_15979 = [];
var inst_15980 = inst_15979.push(inst_15964);
var inst_15960 = inst_15979;
var inst_15961 = inst_15968;
var state_16000__$1 = (function (){var statearr_16012 = state_16000;
(statearr_16012[(11)] = inst_15978);

(statearr_16012[(12)] = inst_15980);

(statearr_16012[(7)] = inst_15960);

(statearr_16012[(8)] = inst_15961);

return statearr_16012;
})();
var statearr_16013_16043 = state_16000__$1;
(statearr_16013_16043[(2)] = null);

(statearr_16013_16043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (9))){
var inst_15960 = (state_16000[(7)]);
var inst_15976 = cljs.core.vec.call(null,inst_15960);
var state_16000__$1 = state_16000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16000__$1,(11),out,inst_15976);
} else {
if((state_val_16001 === (5))){
var inst_15964 = (state_16000[(9)]);
var inst_15968 = (state_16000[(10)]);
var inst_15961 = (state_16000[(8)]);
var inst_15968__$1 = f.call(null,inst_15964);
var inst_15969 = cljs.core._EQ_.call(null,inst_15968__$1,inst_15961);
var inst_15970 = cljs.core.keyword_identical_QMARK_.call(null,inst_15961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15971 = (inst_15969) || (inst_15970);
var state_16000__$1 = (function (){var statearr_16014 = state_16000;
(statearr_16014[(10)] = inst_15968__$1);

return statearr_16014;
})();
if(cljs.core.truth_(inst_15971)){
var statearr_16015_16044 = state_16000__$1;
(statearr_16015_16044[(1)] = (8));

} else {
var statearr_16016_16045 = state_16000__$1;
(statearr_16016_16045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (14))){
var inst_15993 = (state_16000[(2)]);
var inst_15994 = cljs.core.async.close_BANG_.call(null,out);
var state_16000__$1 = (function (){var statearr_16018 = state_16000;
(statearr_16018[(13)] = inst_15993);

return statearr_16018;
})();
var statearr_16019_16046 = state_16000__$1;
(statearr_16019_16046[(2)] = inst_15994);

(statearr_16019_16046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (10))){
var inst_15983 = (state_16000[(2)]);
var state_16000__$1 = state_16000;
var statearr_16020_16047 = state_16000__$1;
(statearr_16020_16047[(2)] = inst_15983);

(statearr_16020_16047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16001 === (8))){
var inst_15964 = (state_16000[(9)]);
var inst_15960 = (state_16000[(7)]);
var inst_15968 = (state_16000[(10)]);
var inst_15973 = inst_15960.push(inst_15964);
var tmp16017 = inst_15960;
var inst_15960__$1 = tmp16017;
var inst_15961 = inst_15968;
var state_16000__$1 = (function (){var statearr_16021 = state_16000;
(statearr_16021[(14)] = inst_15973);

(statearr_16021[(7)] = inst_15960__$1);

(statearr_16021[(8)] = inst_15961);

return statearr_16021;
})();
var statearr_16022_16048 = state_16000__$1;
(statearr_16022_16048[(2)] = null);

(statearr_16022_16048[(1)] = (2));


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
});})(c__13279__auto___16034,out))
;
return ((function (switch__13167__auto__,c__13279__auto___16034,out){
return (function() {
var cljs$core$async$state_machine__13168__auto__ = null;
var cljs$core$async$state_machine__13168__auto____0 = (function (){
var statearr_16026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16026[(0)] = cljs$core$async$state_machine__13168__auto__);

(statearr_16026[(1)] = (1));

return statearr_16026;
});
var cljs$core$async$state_machine__13168__auto____1 = (function (state_16000){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_16000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e16027){if((e16027 instanceof Object)){
var ex__13171__auto__ = e16027;
var statearr_16028_16049 = state_16000;
(statearr_16028_16049[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16050 = state_16000;
state_16000 = G__16050;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
cljs$core$async$state_machine__13168__auto__ = function(state_16000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13168__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13168__auto____1.call(this,state_16000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13168__auto____0;
cljs$core$async$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13168__auto____1;
return cljs$core$async$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto___16034,out))
})();
var state__13281__auto__ = (function (){var statearr_16029 = f__13280__auto__.call(null);
(statearr_16029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto___16034);

return statearr_16029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto___16034,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

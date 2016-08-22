// Compiled by ClojureScript 1.9.225 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args10655 = [];
var len__7487__auto___10661 = arguments.length;
var i__7488__auto___10662 = (0);
while(true){
if((i__7488__auto___10662 < len__7487__auto___10661)){
args10655.push((arguments[i__7488__auto___10662]));

var G__10663 = (i__7488__auto___10662 + (1));
i__7488__auto___10662 = G__10663;
continue;
} else {
}
break;
}

var G__10657 = args10655.length;
switch (G__10657) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10655.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async10658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10658 = (function (f,blockable,meta10659){
this.f = f;
this.blockable = blockable;
this.meta10659 = meta10659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10660,meta10659__$1){
var self__ = this;
var _10660__$1 = this;
return (new cljs.core.async.t_cljs$core$async10658(self__.f,self__.blockable,meta10659__$1));
});

cljs.core.async.t_cljs$core$async10658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10660){
var self__ = this;
var _10660__$1 = this;
return self__.meta10659;
});

cljs.core.async.t_cljs$core$async10658.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10658.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10658.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async10658.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async10658.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta10659","meta10659",1860046316,null)], null);
});

cljs.core.async.t_cljs$core$async10658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10658";

cljs.core.async.t_cljs$core$async10658.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async10658");
});

cljs.core.async.__GT_t_cljs$core$async10658 = (function cljs$core$async$__GT_t_cljs$core$async10658(f__$1,blockable__$1,meta10659){
return (new cljs.core.async.t_cljs$core$async10658(f__$1,blockable__$1,meta10659));
});

}

return (new cljs.core.async.t_cljs$core$async10658(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args10667 = [];
var len__7487__auto___10670 = arguments.length;
var i__7488__auto___10671 = (0);
while(true){
if((i__7488__auto___10671 < len__7487__auto___10670)){
args10667.push((arguments[i__7488__auto___10671]));

var G__10672 = (i__7488__auto___10671 + (1));
i__7488__auto___10671 = G__10672;
continue;
} else {
}
break;
}

var G__10669 = args10667.length;
switch (G__10669) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10667.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args10674 = [];
var len__7487__auto___10677 = arguments.length;
var i__7488__auto___10678 = (0);
while(true){
if((i__7488__auto___10678 < len__7487__auto___10677)){
args10674.push((arguments[i__7488__auto___10678]));

var G__10679 = (i__7488__auto___10678 + (1));
i__7488__auto___10678 = G__10679;
continue;
} else {
}
break;
}

var G__10676 = args10674.length;
switch (G__10676) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10674.length)].join('')));

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
var args10681 = [];
var len__7487__auto___10684 = arguments.length;
var i__7488__auto___10685 = (0);
while(true){
if((i__7488__auto___10685 < len__7487__auto___10684)){
args10681.push((arguments[i__7488__auto___10685]));

var G__10686 = (i__7488__auto___10685 + (1));
i__7488__auto___10685 = G__10686;
continue;
} else {
}
break;
}

var G__10683 = args10681.length;
switch (G__10683) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10681.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_10688 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_10688);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_10688,ret){
return (function (){
return fn1.call(null,val_10688);
});})(val_10688,ret))
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
var args10689 = [];
var len__7487__auto___10692 = arguments.length;
var i__7488__auto___10693 = (0);
while(true){
if((i__7488__auto___10693 < len__7487__auto___10692)){
args10689.push((arguments[i__7488__auto___10693]));

var G__10694 = (i__7488__auto___10693 + (1));
i__7488__auto___10693 = G__10694;
continue;
} else {
}
break;
}

var G__10691 = args10689.length;
switch (G__10691) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10689.length)].join('')));

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
var n__7327__auto___10696 = n;
var x_10697 = (0);
while(true){
if((x_10697 < n__7327__auto___10696)){
(a[x_10697] = (0));

var G__10698 = (x_10697 + (1));
x_10697 = G__10698;
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

var G__10699 = (i + (1));
i = G__10699;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async10703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10703 = (function (alt_flag,flag,meta10704){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta10704 = meta10704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10705,meta10704__$1){
var self__ = this;
var _10705__$1 = this;
return (new cljs.core.async.t_cljs$core$async10703(self__.alt_flag,self__.flag,meta10704__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async10703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10705){
var self__ = this;
var _10705__$1 = this;
return self__.meta10704;
});})(flag))
;

cljs.core.async.t_cljs$core$async10703.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async10703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async10703.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta10704","meta10704",1269634186,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async10703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10703";

cljs.core.async.t_cljs$core$async10703.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async10703");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async10703 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async10703(alt_flag__$1,flag__$1,meta10704){
return (new cljs.core.async.t_cljs$core$async10703(alt_flag__$1,flag__$1,meta10704));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async10703(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async10709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10709 = (function (alt_handler,flag,cb,meta10710){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta10710 = meta10710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10711,meta10710__$1){
var self__ = this;
var _10711__$1 = this;
return (new cljs.core.async.t_cljs$core$async10709(self__.alt_handler,self__.flag,self__.cb,meta10710__$1));
});

cljs.core.async.t_cljs$core$async10709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10711){
var self__ = this;
var _10711__$1 = this;
return self__.meta10710;
});

cljs.core.async.t_cljs$core$async10709.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async10709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async10709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async10709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta10710","meta10710",992187339,null)], null);
});

cljs.core.async.t_cljs$core$async10709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10709";

cljs.core.async.t_cljs$core$async10709.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async10709");
});

cljs.core.async.__GT_t_cljs$core$async10709 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async10709(alt_handler__$1,flag__$1,cb__$1,meta10710){
return (new cljs.core.async.t_cljs$core$async10709(alt_handler__$1,flag__$1,cb__$1,meta10710));
});

}

return (new cljs.core.async.t_cljs$core$async10709(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__10712_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10712_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10713_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10713_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6412__auto__ = wport;
if(cljs.core.truth_(or__6412__auto__)){
return or__6412__auto__;
} else {
return port;
}
})()], null));
} else {
var G__10714 = (i + (1));
i = G__10714;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6412__auto__ = ret;
if(cljs.core.truth_(or__6412__auto__)){
return or__6412__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6400__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6400__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6400__auto__;
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
var args__7494__auto__ = [];
var len__7487__auto___10720 = arguments.length;
var i__7488__auto___10721 = (0);
while(true){
if((i__7488__auto___10721 < len__7487__auto___10720)){
args__7494__auto__.push((arguments[i__7488__auto___10721]));

var G__10722 = (i__7488__auto___10721 + (1));
i__7488__auto___10721 = G__10722;
continue;
} else {
}
break;
}

var argseq__7495__auto__ = ((((1) < args__7494__auto__.length))?(new cljs.core.IndexedSeq(args__7494__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7495__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__10717){
var map__10718 = p__10717;
var map__10718__$1 = ((((!((map__10718 == null)))?((((map__10718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10718):map__10718);
var opts = map__10718__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq10715){
var G__10716 = cljs.core.first.call(null,seq10715);
var seq10715__$1 = cljs.core.next.call(null,seq10715);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10716,seq10715__$1);
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
var args10723 = [];
var len__7487__auto___10773 = arguments.length;
var i__7488__auto___10774 = (0);
while(true){
if((i__7488__auto___10774 < len__7487__auto___10773)){
args10723.push((arguments[i__7488__auto___10774]));

var G__10775 = (i__7488__auto___10774 + (1));
i__7488__auto___10774 = G__10775;
continue;
} else {
}
break;
}

var G__10725 = args10723.length;
switch (G__10725) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10723.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10610__auto___10777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___10777){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___10777){
return (function (state_10749){
var state_val_10750 = (state_10749[(1)]);
if((state_val_10750 === (7))){
var inst_10745 = (state_10749[(2)]);
var state_10749__$1 = state_10749;
var statearr_10751_10778 = state_10749__$1;
(statearr_10751_10778[(2)] = inst_10745);

(statearr_10751_10778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (1))){
var state_10749__$1 = state_10749;
var statearr_10752_10779 = state_10749__$1;
(statearr_10752_10779[(2)] = null);

(statearr_10752_10779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (4))){
var inst_10728 = (state_10749[(7)]);
var inst_10728__$1 = (state_10749[(2)]);
var inst_10729 = (inst_10728__$1 == null);
var state_10749__$1 = (function (){var statearr_10753 = state_10749;
(statearr_10753[(7)] = inst_10728__$1);

return statearr_10753;
})();
if(cljs.core.truth_(inst_10729)){
var statearr_10754_10780 = state_10749__$1;
(statearr_10754_10780[(1)] = (5));

} else {
var statearr_10755_10781 = state_10749__$1;
(statearr_10755_10781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (13))){
var state_10749__$1 = state_10749;
var statearr_10756_10782 = state_10749__$1;
(statearr_10756_10782[(2)] = null);

(statearr_10756_10782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (6))){
var inst_10728 = (state_10749[(7)]);
var state_10749__$1 = state_10749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10749__$1,(11),to,inst_10728);
} else {
if((state_val_10750 === (3))){
var inst_10747 = (state_10749[(2)]);
var state_10749__$1 = state_10749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10749__$1,inst_10747);
} else {
if((state_val_10750 === (12))){
var state_10749__$1 = state_10749;
var statearr_10757_10783 = state_10749__$1;
(statearr_10757_10783[(2)] = null);

(statearr_10757_10783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (2))){
var state_10749__$1 = state_10749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10749__$1,(4),from);
} else {
if((state_val_10750 === (11))){
var inst_10738 = (state_10749[(2)]);
var state_10749__$1 = state_10749;
if(cljs.core.truth_(inst_10738)){
var statearr_10758_10784 = state_10749__$1;
(statearr_10758_10784[(1)] = (12));

} else {
var statearr_10759_10785 = state_10749__$1;
(statearr_10759_10785[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (9))){
var state_10749__$1 = state_10749;
var statearr_10760_10786 = state_10749__$1;
(statearr_10760_10786[(2)] = null);

(statearr_10760_10786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (5))){
var state_10749__$1 = state_10749;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10761_10787 = state_10749__$1;
(statearr_10761_10787[(1)] = (8));

} else {
var statearr_10762_10788 = state_10749__$1;
(statearr_10762_10788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (14))){
var inst_10743 = (state_10749[(2)]);
var state_10749__$1 = state_10749;
var statearr_10763_10789 = state_10749__$1;
(statearr_10763_10789[(2)] = inst_10743);

(statearr_10763_10789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (10))){
var inst_10735 = (state_10749[(2)]);
var state_10749__$1 = state_10749;
var statearr_10764_10790 = state_10749__$1;
(statearr_10764_10790[(2)] = inst_10735);

(statearr_10764_10790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10750 === (8))){
var inst_10732 = cljs.core.async.close_BANG_.call(null,to);
var state_10749__$1 = state_10749;
var statearr_10765_10791 = state_10749__$1;
(statearr_10765_10791[(2)] = inst_10732);

(statearr_10765_10791[(1)] = (10));


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
});})(c__10610__auto___10777))
;
return ((function (switch__10545__auto__,c__10610__auto___10777){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_10769 = [null,null,null,null,null,null,null,null];
(statearr_10769[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_10769[(1)] = (1));

return statearr_10769;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_10749){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_10749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10770){if((e10770 instanceof Object)){
var ex__10549__auto__ = e10770;
var statearr_10771_10792 = state_10749;
(statearr_10771_10792[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10793 = state_10749;
state_10749 = G__10793;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_10749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_10749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___10777))
})();
var state__10612__auto__ = (function (){var statearr_10772 = f__10611__auto__.call(null);
(statearr_10772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___10777);

return statearr_10772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___10777))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__10981){
var vec__10982 = p__10981;
var v = cljs.core.nth.call(null,vec__10982,(0),null);
var p = cljs.core.nth.call(null,vec__10982,(1),null);
var job = vec__10982;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10610__auto___11168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___11168,res,vec__10982,v,p,job,jobs,results){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___11168,res,vec__10982,v,p,job,jobs,results){
return (function (state_10989){
var state_val_10990 = (state_10989[(1)]);
if((state_val_10990 === (1))){
var state_10989__$1 = state_10989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10989__$1,(2),res,v);
} else {
if((state_val_10990 === (2))){
var inst_10986 = (state_10989[(2)]);
var inst_10987 = cljs.core.async.close_BANG_.call(null,res);
var state_10989__$1 = (function (){var statearr_10991 = state_10989;
(statearr_10991[(7)] = inst_10986);

return statearr_10991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10989__$1,inst_10987);
} else {
return null;
}
}
});})(c__10610__auto___11168,res,vec__10982,v,p,job,jobs,results))
;
return ((function (switch__10545__auto__,c__10610__auto___11168,res,vec__10982,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_10995 = [null,null,null,null,null,null,null,null];
(statearr_10995[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_10995[(1)] = (1));

return statearr_10995;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_10989){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_10989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e10996){if((e10996 instanceof Object)){
var ex__10549__auto__ = e10996;
var statearr_10997_11169 = state_10989;
(statearr_10997_11169[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11170 = state_10989;
state_10989 = G__11170;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_10989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_10989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___11168,res,vec__10982,v,p,job,jobs,results))
})();
var state__10612__auto__ = (function (){var statearr_10998 = f__10611__auto__.call(null);
(statearr_10998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___11168);

return statearr_10998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___11168,res,vec__10982,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10999){
var vec__11000 = p__10999;
var v = cljs.core.nth.call(null,vec__11000,(0),null);
var p = cljs.core.nth.call(null,vec__11000,(1),null);
var job = vec__11000;
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
var n__7327__auto___11171 = n;
var __11172 = (0);
while(true){
if((__11172 < n__7327__auto___11171)){
var G__11003_11173 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11003_11173) {
case "compute":
var c__10610__auto___11175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11172,c__10610__auto___11175,G__11003_11173,n__7327__auto___11171,jobs,results,process,async){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (__11172,c__10610__auto___11175,G__11003_11173,n__7327__auto___11171,jobs,results,process,async){
return (function (state_11016){
var state_val_11017 = (state_11016[(1)]);
if((state_val_11017 === (1))){
var state_11016__$1 = state_11016;
var statearr_11018_11176 = state_11016__$1;
(statearr_11018_11176[(2)] = null);

(statearr_11018_11176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11017 === (2))){
var state_11016__$1 = state_11016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11016__$1,(4),jobs);
} else {
if((state_val_11017 === (3))){
var inst_11014 = (state_11016[(2)]);
var state_11016__$1 = state_11016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11016__$1,inst_11014);
} else {
if((state_val_11017 === (4))){
var inst_11006 = (state_11016[(2)]);
var inst_11007 = process.call(null,inst_11006);
var state_11016__$1 = state_11016;
if(cljs.core.truth_(inst_11007)){
var statearr_11019_11177 = state_11016__$1;
(statearr_11019_11177[(1)] = (5));

} else {
var statearr_11020_11178 = state_11016__$1;
(statearr_11020_11178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11017 === (5))){
var state_11016__$1 = state_11016;
var statearr_11021_11179 = state_11016__$1;
(statearr_11021_11179[(2)] = null);

(statearr_11021_11179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11017 === (6))){
var state_11016__$1 = state_11016;
var statearr_11022_11180 = state_11016__$1;
(statearr_11022_11180[(2)] = null);

(statearr_11022_11180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11017 === (7))){
var inst_11012 = (state_11016[(2)]);
var state_11016__$1 = state_11016;
var statearr_11023_11181 = state_11016__$1;
(statearr_11023_11181[(2)] = inst_11012);

(statearr_11023_11181[(1)] = (3));


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
});})(__11172,c__10610__auto___11175,G__11003_11173,n__7327__auto___11171,jobs,results,process,async))
;
return ((function (__11172,switch__10545__auto__,c__10610__auto___11175,G__11003_11173,n__7327__auto___11171,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_11027 = [null,null,null,null,null,null,null];
(statearr_11027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_11027[(1)] = (1));

return statearr_11027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_11016){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11028){if((e11028 instanceof Object)){
var ex__10549__auto__ = e11028;
var statearr_11029_11182 = state_11016;
(statearr_11029_11182[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11183 = state_11016;
state_11016 = G__11183;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_11016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_11016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(__11172,switch__10545__auto__,c__10610__auto___11175,G__11003_11173,n__7327__auto___11171,jobs,results,process,async))
})();
var state__10612__auto__ = (function (){var statearr_11030 = f__10611__auto__.call(null);
(statearr_11030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___11175);

return statearr_11030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(__11172,c__10610__auto___11175,G__11003_11173,n__7327__auto___11171,jobs,results,process,async))
);


break;
case "async":
var c__10610__auto___11184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11172,c__10610__auto___11184,G__11003_11173,n__7327__auto___11171,jobs,results,process,async){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (__11172,c__10610__auto___11184,G__11003_11173,n__7327__auto___11171,jobs,results,process,async){
return (function (state_11043){
var state_val_11044 = (state_11043[(1)]);
if((state_val_11044 === (1))){
var state_11043__$1 = state_11043;
var statearr_11045_11185 = state_11043__$1;
(statearr_11045_11185[(2)] = null);

(statearr_11045_11185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (2))){
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11043__$1,(4),jobs);
} else {
if((state_val_11044 === (3))){
var inst_11041 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11043__$1,inst_11041);
} else {
if((state_val_11044 === (4))){
var inst_11033 = (state_11043[(2)]);
var inst_11034 = async.call(null,inst_11033);
var state_11043__$1 = state_11043;
if(cljs.core.truth_(inst_11034)){
var statearr_11046_11186 = state_11043__$1;
(statearr_11046_11186[(1)] = (5));

} else {
var statearr_11047_11187 = state_11043__$1;
(statearr_11047_11187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (5))){
var state_11043__$1 = state_11043;
var statearr_11048_11188 = state_11043__$1;
(statearr_11048_11188[(2)] = null);

(statearr_11048_11188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (6))){
var state_11043__$1 = state_11043;
var statearr_11049_11189 = state_11043__$1;
(statearr_11049_11189[(2)] = null);

(statearr_11049_11189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11044 === (7))){
var inst_11039 = (state_11043[(2)]);
var state_11043__$1 = state_11043;
var statearr_11050_11190 = state_11043__$1;
(statearr_11050_11190[(2)] = inst_11039);

(statearr_11050_11190[(1)] = (3));


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
});})(__11172,c__10610__auto___11184,G__11003_11173,n__7327__auto___11171,jobs,results,process,async))
;
return ((function (__11172,switch__10545__auto__,c__10610__auto___11184,G__11003_11173,n__7327__auto___11171,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_11054 = [null,null,null,null,null,null,null];
(statearr_11054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_11054[(1)] = (1));

return statearr_11054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_11043){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11055){if((e11055 instanceof Object)){
var ex__10549__auto__ = e11055;
var statearr_11056_11191 = state_11043;
(statearr_11056_11191[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11192 = state_11043;
state_11043 = G__11192;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_11043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_11043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(__11172,switch__10545__auto__,c__10610__auto___11184,G__11003_11173,n__7327__auto___11171,jobs,results,process,async))
})();
var state__10612__auto__ = (function (){var statearr_11057 = f__10611__auto__.call(null);
(statearr_11057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___11184);

return statearr_11057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(__11172,c__10610__auto___11184,G__11003_11173,n__7327__auto___11171,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11193 = (__11172 + (1));
__11172 = G__11193;
continue;
} else {
}
break;
}

var c__10610__auto___11194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___11194,jobs,results,process,async){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___11194,jobs,results,process,async){
return (function (state_11079){
var state_val_11080 = (state_11079[(1)]);
if((state_val_11080 === (1))){
var state_11079__$1 = state_11079;
var statearr_11081_11195 = state_11079__$1;
(statearr_11081_11195[(2)] = null);

(statearr_11081_11195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11080 === (2))){
var state_11079__$1 = state_11079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11079__$1,(4),from);
} else {
if((state_val_11080 === (3))){
var inst_11077 = (state_11079[(2)]);
var state_11079__$1 = state_11079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11079__$1,inst_11077);
} else {
if((state_val_11080 === (4))){
var inst_11060 = (state_11079[(7)]);
var inst_11060__$1 = (state_11079[(2)]);
var inst_11061 = (inst_11060__$1 == null);
var state_11079__$1 = (function (){var statearr_11082 = state_11079;
(statearr_11082[(7)] = inst_11060__$1);

return statearr_11082;
})();
if(cljs.core.truth_(inst_11061)){
var statearr_11083_11196 = state_11079__$1;
(statearr_11083_11196[(1)] = (5));

} else {
var statearr_11084_11197 = state_11079__$1;
(statearr_11084_11197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11080 === (5))){
var inst_11063 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11079__$1 = state_11079;
var statearr_11085_11198 = state_11079__$1;
(statearr_11085_11198[(2)] = inst_11063);

(statearr_11085_11198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11080 === (6))){
var inst_11065 = (state_11079[(8)]);
var inst_11060 = (state_11079[(7)]);
var inst_11065__$1 = cljs.core.async.chan.call(null,(1));
var inst_11066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11067 = [inst_11060,inst_11065__$1];
var inst_11068 = (new cljs.core.PersistentVector(null,2,(5),inst_11066,inst_11067,null));
var state_11079__$1 = (function (){var statearr_11086 = state_11079;
(statearr_11086[(8)] = inst_11065__$1);

return statearr_11086;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11079__$1,(8),jobs,inst_11068);
} else {
if((state_val_11080 === (7))){
var inst_11075 = (state_11079[(2)]);
var state_11079__$1 = state_11079;
var statearr_11087_11199 = state_11079__$1;
(statearr_11087_11199[(2)] = inst_11075);

(statearr_11087_11199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11080 === (8))){
var inst_11065 = (state_11079[(8)]);
var inst_11070 = (state_11079[(2)]);
var state_11079__$1 = (function (){var statearr_11088 = state_11079;
(statearr_11088[(9)] = inst_11070);

return statearr_11088;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11079__$1,(9),results,inst_11065);
} else {
if((state_val_11080 === (9))){
var inst_11072 = (state_11079[(2)]);
var state_11079__$1 = (function (){var statearr_11089 = state_11079;
(statearr_11089[(10)] = inst_11072);

return statearr_11089;
})();
var statearr_11090_11200 = state_11079__$1;
(statearr_11090_11200[(2)] = null);

(statearr_11090_11200[(1)] = (2));


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
});})(c__10610__auto___11194,jobs,results,process,async))
;
return ((function (switch__10545__auto__,c__10610__auto___11194,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_11094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_11094[(1)] = (1));

return statearr_11094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_11079){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11095){if((e11095 instanceof Object)){
var ex__10549__auto__ = e11095;
var statearr_11096_11201 = state_11079;
(statearr_11096_11201[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11202 = state_11079;
state_11079 = G__11202;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_11079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_11079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___11194,jobs,results,process,async))
})();
var state__10612__auto__ = (function (){var statearr_11097 = f__10611__auto__.call(null);
(statearr_11097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___11194);

return statearr_11097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___11194,jobs,results,process,async))
);


var c__10610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto__,jobs,results,process,async){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto__,jobs,results,process,async){
return (function (state_11135){
var state_val_11136 = (state_11135[(1)]);
if((state_val_11136 === (7))){
var inst_11131 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11137_11203 = state_11135__$1;
(statearr_11137_11203[(2)] = inst_11131);

(statearr_11137_11203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (20))){
var state_11135__$1 = state_11135;
var statearr_11138_11204 = state_11135__$1;
(statearr_11138_11204[(2)] = null);

(statearr_11138_11204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (1))){
var state_11135__$1 = state_11135;
var statearr_11139_11205 = state_11135__$1;
(statearr_11139_11205[(2)] = null);

(statearr_11139_11205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (4))){
var inst_11100 = (state_11135[(7)]);
var inst_11100__$1 = (state_11135[(2)]);
var inst_11101 = (inst_11100__$1 == null);
var state_11135__$1 = (function (){var statearr_11140 = state_11135;
(statearr_11140[(7)] = inst_11100__$1);

return statearr_11140;
})();
if(cljs.core.truth_(inst_11101)){
var statearr_11141_11206 = state_11135__$1;
(statearr_11141_11206[(1)] = (5));

} else {
var statearr_11142_11207 = state_11135__$1;
(statearr_11142_11207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (15))){
var inst_11113 = (state_11135[(8)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11135__$1,(18),to,inst_11113);
} else {
if((state_val_11136 === (21))){
var inst_11126 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11143_11208 = state_11135__$1;
(statearr_11143_11208[(2)] = inst_11126);

(statearr_11143_11208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (13))){
var inst_11128 = (state_11135[(2)]);
var state_11135__$1 = (function (){var statearr_11144 = state_11135;
(statearr_11144[(9)] = inst_11128);

return statearr_11144;
})();
var statearr_11145_11209 = state_11135__$1;
(statearr_11145_11209[(2)] = null);

(statearr_11145_11209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (6))){
var inst_11100 = (state_11135[(7)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11135__$1,(11),inst_11100);
} else {
if((state_val_11136 === (17))){
var inst_11121 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
if(cljs.core.truth_(inst_11121)){
var statearr_11146_11210 = state_11135__$1;
(statearr_11146_11210[(1)] = (19));

} else {
var statearr_11147_11211 = state_11135__$1;
(statearr_11147_11211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (3))){
var inst_11133 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11135__$1,inst_11133);
} else {
if((state_val_11136 === (12))){
var inst_11110 = (state_11135[(10)]);
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11135__$1,(14),inst_11110);
} else {
if((state_val_11136 === (2))){
var state_11135__$1 = state_11135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11135__$1,(4),results);
} else {
if((state_val_11136 === (19))){
var state_11135__$1 = state_11135;
var statearr_11148_11212 = state_11135__$1;
(statearr_11148_11212[(2)] = null);

(statearr_11148_11212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (11))){
var inst_11110 = (state_11135[(2)]);
var state_11135__$1 = (function (){var statearr_11149 = state_11135;
(statearr_11149[(10)] = inst_11110);

return statearr_11149;
})();
var statearr_11150_11213 = state_11135__$1;
(statearr_11150_11213[(2)] = null);

(statearr_11150_11213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (9))){
var state_11135__$1 = state_11135;
var statearr_11151_11214 = state_11135__$1;
(statearr_11151_11214[(2)] = null);

(statearr_11151_11214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (5))){
var state_11135__$1 = state_11135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11152_11215 = state_11135__$1;
(statearr_11152_11215[(1)] = (8));

} else {
var statearr_11153_11216 = state_11135__$1;
(statearr_11153_11216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (14))){
var inst_11115 = (state_11135[(11)]);
var inst_11113 = (state_11135[(8)]);
var inst_11113__$1 = (state_11135[(2)]);
var inst_11114 = (inst_11113__$1 == null);
var inst_11115__$1 = cljs.core.not.call(null,inst_11114);
var state_11135__$1 = (function (){var statearr_11154 = state_11135;
(statearr_11154[(11)] = inst_11115__$1);

(statearr_11154[(8)] = inst_11113__$1);

return statearr_11154;
})();
if(inst_11115__$1){
var statearr_11155_11217 = state_11135__$1;
(statearr_11155_11217[(1)] = (15));

} else {
var statearr_11156_11218 = state_11135__$1;
(statearr_11156_11218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (16))){
var inst_11115 = (state_11135[(11)]);
var state_11135__$1 = state_11135;
var statearr_11157_11219 = state_11135__$1;
(statearr_11157_11219[(2)] = inst_11115);

(statearr_11157_11219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (10))){
var inst_11107 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11158_11220 = state_11135__$1;
(statearr_11158_11220[(2)] = inst_11107);

(statearr_11158_11220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (18))){
var inst_11118 = (state_11135[(2)]);
var state_11135__$1 = state_11135;
var statearr_11159_11221 = state_11135__$1;
(statearr_11159_11221[(2)] = inst_11118);

(statearr_11159_11221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11136 === (8))){
var inst_11104 = cljs.core.async.close_BANG_.call(null,to);
var state_11135__$1 = state_11135;
var statearr_11160_11222 = state_11135__$1;
(statearr_11160_11222[(2)] = inst_11104);

(statearr_11160_11222[(1)] = (10));


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
});})(c__10610__auto__,jobs,results,process,async))
;
return ((function (switch__10545__auto__,c__10610__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_11164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__);

(statearr_11164[(1)] = (1));

return statearr_11164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1 = (function (state_11135){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11165){if((e11165 instanceof Object)){
var ex__10549__auto__ = e11165;
var statearr_11166_11223 = state_11135;
(statearr_11166_11223[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11224 = state_11135;
state_11135 = G__11224;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__ = function(state_11135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1.call(this,state_11135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto__,jobs,results,process,async))
})();
var state__10612__auto__ = (function (){var statearr_11167 = f__10611__auto__.call(null);
(statearr_11167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto__);

return statearr_11167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto__,jobs,results,process,async))
);

return c__10610__auto__;
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
var args11225 = [];
var len__7487__auto___11228 = arguments.length;
var i__7488__auto___11229 = (0);
while(true){
if((i__7488__auto___11229 < len__7487__auto___11228)){
args11225.push((arguments[i__7488__auto___11229]));

var G__11230 = (i__7488__auto___11229 + (1));
i__7488__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var G__11227 = args11225.length;
switch (G__11227) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11225.length)].join('')));

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
var args11232 = [];
var len__7487__auto___11235 = arguments.length;
var i__7488__auto___11236 = (0);
while(true){
if((i__7488__auto___11236 < len__7487__auto___11235)){
args11232.push((arguments[i__7488__auto___11236]));

var G__11237 = (i__7488__auto___11236 + (1));
i__7488__auto___11236 = G__11237;
continue;
} else {
}
break;
}

var G__11234 = args11232.length;
switch (G__11234) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11232.length)].join('')));

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
var args11239 = [];
var len__7487__auto___11292 = arguments.length;
var i__7488__auto___11293 = (0);
while(true){
if((i__7488__auto___11293 < len__7487__auto___11292)){
args11239.push((arguments[i__7488__auto___11293]));

var G__11294 = (i__7488__auto___11293 + (1));
i__7488__auto___11293 = G__11294;
continue;
} else {
}
break;
}

var G__11241 = args11239.length;
switch (G__11241) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11239.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10610__auto___11296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___11296,tc,fc){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___11296,tc,fc){
return (function (state_11267){
var state_val_11268 = (state_11267[(1)]);
if((state_val_11268 === (7))){
var inst_11263 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
var statearr_11269_11297 = state_11267__$1;
(statearr_11269_11297[(2)] = inst_11263);

(statearr_11269_11297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (1))){
var state_11267__$1 = state_11267;
var statearr_11270_11298 = state_11267__$1;
(statearr_11270_11298[(2)] = null);

(statearr_11270_11298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (4))){
var inst_11244 = (state_11267[(7)]);
var inst_11244__$1 = (state_11267[(2)]);
var inst_11245 = (inst_11244__$1 == null);
var state_11267__$1 = (function (){var statearr_11271 = state_11267;
(statearr_11271[(7)] = inst_11244__$1);

return statearr_11271;
})();
if(cljs.core.truth_(inst_11245)){
var statearr_11272_11299 = state_11267__$1;
(statearr_11272_11299[(1)] = (5));

} else {
var statearr_11273_11300 = state_11267__$1;
(statearr_11273_11300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (13))){
var state_11267__$1 = state_11267;
var statearr_11274_11301 = state_11267__$1;
(statearr_11274_11301[(2)] = null);

(statearr_11274_11301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (6))){
var inst_11244 = (state_11267[(7)]);
var inst_11250 = p.call(null,inst_11244);
var state_11267__$1 = state_11267;
if(cljs.core.truth_(inst_11250)){
var statearr_11275_11302 = state_11267__$1;
(statearr_11275_11302[(1)] = (9));

} else {
var statearr_11276_11303 = state_11267__$1;
(statearr_11276_11303[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (3))){
var inst_11265 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11267__$1,inst_11265);
} else {
if((state_val_11268 === (12))){
var state_11267__$1 = state_11267;
var statearr_11277_11304 = state_11267__$1;
(statearr_11277_11304[(2)] = null);

(statearr_11277_11304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (2))){
var state_11267__$1 = state_11267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11267__$1,(4),ch);
} else {
if((state_val_11268 === (11))){
var inst_11244 = (state_11267[(7)]);
var inst_11254 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11267__$1,(8),inst_11254,inst_11244);
} else {
if((state_val_11268 === (9))){
var state_11267__$1 = state_11267;
var statearr_11278_11305 = state_11267__$1;
(statearr_11278_11305[(2)] = tc);

(statearr_11278_11305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (5))){
var inst_11247 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11248 = cljs.core.async.close_BANG_.call(null,fc);
var state_11267__$1 = (function (){var statearr_11279 = state_11267;
(statearr_11279[(8)] = inst_11247);

return statearr_11279;
})();
var statearr_11280_11306 = state_11267__$1;
(statearr_11280_11306[(2)] = inst_11248);

(statearr_11280_11306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (14))){
var inst_11261 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
var statearr_11281_11307 = state_11267__$1;
(statearr_11281_11307[(2)] = inst_11261);

(statearr_11281_11307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (10))){
var state_11267__$1 = state_11267;
var statearr_11282_11308 = state_11267__$1;
(statearr_11282_11308[(2)] = fc);

(statearr_11282_11308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11268 === (8))){
var inst_11256 = (state_11267[(2)]);
var state_11267__$1 = state_11267;
if(cljs.core.truth_(inst_11256)){
var statearr_11283_11309 = state_11267__$1;
(statearr_11283_11309[(1)] = (12));

} else {
var statearr_11284_11310 = state_11267__$1;
(statearr_11284_11310[(1)] = (13));

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
});})(c__10610__auto___11296,tc,fc))
;
return ((function (switch__10545__auto__,c__10610__auto___11296,tc,fc){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_11288 = [null,null,null,null,null,null,null,null,null];
(statearr_11288[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_11288[(1)] = (1));

return statearr_11288;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_11267){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11289){if((e11289 instanceof Object)){
var ex__10549__auto__ = e11289;
var statearr_11290_11311 = state_11267;
(statearr_11290_11311[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11312 = state_11267;
state_11267 = G__11312;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_11267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_11267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___11296,tc,fc))
})();
var state__10612__auto__ = (function (){var statearr_11291 = f__10611__auto__.call(null);
(statearr_11291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___11296);

return statearr_11291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___11296,tc,fc))
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
var c__10610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto__){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto__){
return (function (state_11376){
var state_val_11377 = (state_11376[(1)]);
if((state_val_11377 === (7))){
var inst_11372 = (state_11376[(2)]);
var state_11376__$1 = state_11376;
var statearr_11378_11399 = state_11376__$1;
(statearr_11378_11399[(2)] = inst_11372);

(statearr_11378_11399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (1))){
var inst_11356 = init;
var state_11376__$1 = (function (){var statearr_11379 = state_11376;
(statearr_11379[(7)] = inst_11356);

return statearr_11379;
})();
var statearr_11380_11400 = state_11376__$1;
(statearr_11380_11400[(2)] = null);

(statearr_11380_11400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (4))){
var inst_11359 = (state_11376[(8)]);
var inst_11359__$1 = (state_11376[(2)]);
var inst_11360 = (inst_11359__$1 == null);
var state_11376__$1 = (function (){var statearr_11381 = state_11376;
(statearr_11381[(8)] = inst_11359__$1);

return statearr_11381;
})();
if(cljs.core.truth_(inst_11360)){
var statearr_11382_11401 = state_11376__$1;
(statearr_11382_11401[(1)] = (5));

} else {
var statearr_11383_11402 = state_11376__$1;
(statearr_11383_11402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (6))){
var inst_11359 = (state_11376[(8)]);
var inst_11363 = (state_11376[(9)]);
var inst_11356 = (state_11376[(7)]);
var inst_11363__$1 = f.call(null,inst_11356,inst_11359);
var inst_11364 = cljs.core.reduced_QMARK_.call(null,inst_11363__$1);
var state_11376__$1 = (function (){var statearr_11384 = state_11376;
(statearr_11384[(9)] = inst_11363__$1);

return statearr_11384;
})();
if(inst_11364){
var statearr_11385_11403 = state_11376__$1;
(statearr_11385_11403[(1)] = (8));

} else {
var statearr_11386_11404 = state_11376__$1;
(statearr_11386_11404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (3))){
var inst_11374 = (state_11376[(2)]);
var state_11376__$1 = state_11376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11376__$1,inst_11374);
} else {
if((state_val_11377 === (2))){
var state_11376__$1 = state_11376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11376__$1,(4),ch);
} else {
if((state_val_11377 === (9))){
var inst_11363 = (state_11376[(9)]);
var inst_11356 = inst_11363;
var state_11376__$1 = (function (){var statearr_11387 = state_11376;
(statearr_11387[(7)] = inst_11356);

return statearr_11387;
})();
var statearr_11388_11405 = state_11376__$1;
(statearr_11388_11405[(2)] = null);

(statearr_11388_11405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (5))){
var inst_11356 = (state_11376[(7)]);
var state_11376__$1 = state_11376;
var statearr_11389_11406 = state_11376__$1;
(statearr_11389_11406[(2)] = inst_11356);

(statearr_11389_11406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (10))){
var inst_11370 = (state_11376[(2)]);
var state_11376__$1 = state_11376;
var statearr_11390_11407 = state_11376__$1;
(statearr_11390_11407[(2)] = inst_11370);

(statearr_11390_11407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11377 === (8))){
var inst_11363 = (state_11376[(9)]);
var inst_11366 = cljs.core.deref.call(null,inst_11363);
var state_11376__$1 = state_11376;
var statearr_11391_11408 = state_11376__$1;
(statearr_11391_11408[(2)] = inst_11366);

(statearr_11391_11408[(1)] = (10));


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
});})(c__10610__auto__))
;
return ((function (switch__10545__auto__,c__10610__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10546__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10546__auto____0 = (function (){
var statearr_11395 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11395[(0)] = cljs$core$async$reduce_$_state_machine__10546__auto__);

(statearr_11395[(1)] = (1));

return statearr_11395;
});
var cljs$core$async$reduce_$_state_machine__10546__auto____1 = (function (state_11376){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11396){if((e11396 instanceof Object)){
var ex__10549__auto__ = e11396;
var statearr_11397_11409 = state_11376;
(statearr_11397_11409[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11410 = state_11376;
state_11376 = G__11410;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10546__auto__ = function(state_11376){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10546__auto____1.call(this,state_11376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10546__auto____0;
cljs$core$async$reduce_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10546__auto____1;
return cljs$core$async$reduce_$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto__))
})();
var state__10612__auto__ = (function (){var statearr_11398 = f__10611__auto__.call(null);
(statearr_11398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto__);

return statearr_11398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto__))
);

return c__10610__auto__;
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
var args11411 = [];
var len__7487__auto___11463 = arguments.length;
var i__7488__auto___11464 = (0);
while(true){
if((i__7488__auto___11464 < len__7487__auto___11463)){
args11411.push((arguments[i__7488__auto___11464]));

var G__11465 = (i__7488__auto___11464 + (1));
i__7488__auto___11464 = G__11465;
continue;
} else {
}
break;
}

var G__11413 = args11411.length;
switch (G__11413) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11411.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto__){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto__){
return (function (state_11438){
var state_val_11439 = (state_11438[(1)]);
if((state_val_11439 === (7))){
var inst_11420 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
var statearr_11440_11467 = state_11438__$1;
(statearr_11440_11467[(2)] = inst_11420);

(statearr_11440_11467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (1))){
var inst_11414 = cljs.core.seq.call(null,coll);
var inst_11415 = inst_11414;
var state_11438__$1 = (function (){var statearr_11441 = state_11438;
(statearr_11441[(7)] = inst_11415);

return statearr_11441;
})();
var statearr_11442_11468 = state_11438__$1;
(statearr_11442_11468[(2)] = null);

(statearr_11442_11468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (4))){
var inst_11415 = (state_11438[(7)]);
var inst_11418 = cljs.core.first.call(null,inst_11415);
var state_11438__$1 = state_11438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11438__$1,(7),ch,inst_11418);
} else {
if((state_val_11439 === (13))){
var inst_11432 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
var statearr_11443_11469 = state_11438__$1;
(statearr_11443_11469[(2)] = inst_11432);

(statearr_11443_11469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (6))){
var inst_11423 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
if(cljs.core.truth_(inst_11423)){
var statearr_11444_11470 = state_11438__$1;
(statearr_11444_11470[(1)] = (8));

} else {
var statearr_11445_11471 = state_11438__$1;
(statearr_11445_11471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (3))){
var inst_11436 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11438__$1,inst_11436);
} else {
if((state_val_11439 === (12))){
var state_11438__$1 = state_11438;
var statearr_11446_11472 = state_11438__$1;
(statearr_11446_11472[(2)] = null);

(statearr_11446_11472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (2))){
var inst_11415 = (state_11438[(7)]);
var state_11438__$1 = state_11438;
if(cljs.core.truth_(inst_11415)){
var statearr_11447_11473 = state_11438__$1;
(statearr_11447_11473[(1)] = (4));

} else {
var statearr_11448_11474 = state_11438__$1;
(statearr_11448_11474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (11))){
var inst_11429 = cljs.core.async.close_BANG_.call(null,ch);
var state_11438__$1 = state_11438;
var statearr_11449_11475 = state_11438__$1;
(statearr_11449_11475[(2)] = inst_11429);

(statearr_11449_11475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (9))){
var state_11438__$1 = state_11438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11450_11476 = state_11438__$1;
(statearr_11450_11476[(1)] = (11));

} else {
var statearr_11451_11477 = state_11438__$1;
(statearr_11451_11477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (5))){
var inst_11415 = (state_11438[(7)]);
var state_11438__$1 = state_11438;
var statearr_11452_11478 = state_11438__$1;
(statearr_11452_11478[(2)] = inst_11415);

(statearr_11452_11478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (10))){
var inst_11434 = (state_11438[(2)]);
var state_11438__$1 = state_11438;
var statearr_11453_11479 = state_11438__$1;
(statearr_11453_11479[(2)] = inst_11434);

(statearr_11453_11479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11439 === (8))){
var inst_11415 = (state_11438[(7)]);
var inst_11425 = cljs.core.next.call(null,inst_11415);
var inst_11415__$1 = inst_11425;
var state_11438__$1 = (function (){var statearr_11454 = state_11438;
(statearr_11454[(7)] = inst_11415__$1);

return statearr_11454;
})();
var statearr_11455_11480 = state_11438__$1;
(statearr_11455_11480[(2)] = null);

(statearr_11455_11480[(1)] = (2));


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
});})(c__10610__auto__))
;
return ((function (switch__10545__auto__,c__10610__auto__){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_11459 = [null,null,null,null,null,null,null,null];
(statearr_11459[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_11459[(1)] = (1));

return statearr_11459;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_11438){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11460){if((e11460 instanceof Object)){
var ex__10549__auto__ = e11460;
var statearr_11461_11481 = state_11438;
(statearr_11461_11481[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11482 = state_11438;
state_11438 = G__11482;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_11438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_11438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto__))
})();
var state__10612__auto__ = (function (){var statearr_11462 = f__10611__auto__.call(null);
(statearr_11462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto__);

return statearr_11462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto__))
);

return c__10610__auto__;
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
var x__7075__auto__ = (((_ == null))?null:_);
var m__7076__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,_);
} else {
var m__7076__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,_);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7076__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m,ch);
} else {
var m__7076__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m,ch);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m);
} else {
var m__7076__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async11708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11708 = (function (mult,ch,cs,meta11709){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta11709 = meta11709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11710,meta11709__$1){
var self__ = this;
var _11710__$1 = this;
return (new cljs.core.async.t_cljs$core$async11708(self__.mult,self__.ch,self__.cs,meta11709__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11710){
var self__ = this;
var _11710__$1 = this;
return self__.meta11709;
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta11709","meta11709",13708308,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async11708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11708";

cljs.core.async.t_cljs$core$async11708.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async11708");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async11708 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async11708(mult__$1,ch__$1,cs__$1,meta11709){
return (new cljs.core.async.t_cljs$core$async11708(mult__$1,ch__$1,cs__$1,meta11709));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async11708(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10610__auto___11933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___11933,cs,m,dchan,dctr,done){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___11933,cs,m,dchan,dctr,done){
return (function (state_11845){
var state_val_11846 = (state_11845[(1)]);
if((state_val_11846 === (7))){
var inst_11841 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11847_11934 = state_11845__$1;
(statearr_11847_11934[(2)] = inst_11841);

(statearr_11847_11934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (20))){
var inst_11744 = (state_11845[(7)]);
var inst_11756 = cljs.core.first.call(null,inst_11744);
var inst_11757 = cljs.core.nth.call(null,inst_11756,(0),null);
var inst_11758 = cljs.core.nth.call(null,inst_11756,(1),null);
var state_11845__$1 = (function (){var statearr_11848 = state_11845;
(statearr_11848[(8)] = inst_11757);

return statearr_11848;
})();
if(cljs.core.truth_(inst_11758)){
var statearr_11849_11935 = state_11845__$1;
(statearr_11849_11935[(1)] = (22));

} else {
var statearr_11850_11936 = state_11845__$1;
(statearr_11850_11936[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (27))){
var inst_11788 = (state_11845[(9)]);
var inst_11713 = (state_11845[(10)]);
var inst_11793 = (state_11845[(11)]);
var inst_11786 = (state_11845[(12)]);
var inst_11793__$1 = cljs.core._nth.call(null,inst_11786,inst_11788);
var inst_11794 = cljs.core.async.put_BANG_.call(null,inst_11793__$1,inst_11713,done);
var state_11845__$1 = (function (){var statearr_11851 = state_11845;
(statearr_11851[(11)] = inst_11793__$1);

return statearr_11851;
})();
if(cljs.core.truth_(inst_11794)){
var statearr_11852_11937 = state_11845__$1;
(statearr_11852_11937[(1)] = (30));

} else {
var statearr_11853_11938 = state_11845__$1;
(statearr_11853_11938[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (1))){
var state_11845__$1 = state_11845;
var statearr_11854_11939 = state_11845__$1;
(statearr_11854_11939[(2)] = null);

(statearr_11854_11939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (24))){
var inst_11744 = (state_11845[(7)]);
var inst_11763 = (state_11845[(2)]);
var inst_11764 = cljs.core.next.call(null,inst_11744);
var inst_11722 = inst_11764;
var inst_11723 = null;
var inst_11724 = (0);
var inst_11725 = (0);
var state_11845__$1 = (function (){var statearr_11855 = state_11845;
(statearr_11855[(13)] = inst_11722);

(statearr_11855[(14)] = inst_11723);

(statearr_11855[(15)] = inst_11725);

(statearr_11855[(16)] = inst_11763);

(statearr_11855[(17)] = inst_11724);

return statearr_11855;
})();
var statearr_11856_11940 = state_11845__$1;
(statearr_11856_11940[(2)] = null);

(statearr_11856_11940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (39))){
var state_11845__$1 = state_11845;
var statearr_11860_11941 = state_11845__$1;
(statearr_11860_11941[(2)] = null);

(statearr_11860_11941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (4))){
var inst_11713 = (state_11845[(10)]);
var inst_11713__$1 = (state_11845[(2)]);
var inst_11714 = (inst_11713__$1 == null);
var state_11845__$1 = (function (){var statearr_11861 = state_11845;
(statearr_11861[(10)] = inst_11713__$1);

return statearr_11861;
})();
if(cljs.core.truth_(inst_11714)){
var statearr_11862_11942 = state_11845__$1;
(statearr_11862_11942[(1)] = (5));

} else {
var statearr_11863_11943 = state_11845__$1;
(statearr_11863_11943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (15))){
var inst_11722 = (state_11845[(13)]);
var inst_11723 = (state_11845[(14)]);
var inst_11725 = (state_11845[(15)]);
var inst_11724 = (state_11845[(17)]);
var inst_11740 = (state_11845[(2)]);
var inst_11741 = (inst_11725 + (1));
var tmp11857 = inst_11722;
var tmp11858 = inst_11723;
var tmp11859 = inst_11724;
var inst_11722__$1 = tmp11857;
var inst_11723__$1 = tmp11858;
var inst_11724__$1 = tmp11859;
var inst_11725__$1 = inst_11741;
var state_11845__$1 = (function (){var statearr_11864 = state_11845;
(statearr_11864[(13)] = inst_11722__$1);

(statearr_11864[(14)] = inst_11723__$1);

(statearr_11864[(15)] = inst_11725__$1);

(statearr_11864[(18)] = inst_11740);

(statearr_11864[(17)] = inst_11724__$1);

return statearr_11864;
})();
var statearr_11865_11944 = state_11845__$1;
(statearr_11865_11944[(2)] = null);

(statearr_11865_11944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (21))){
var inst_11767 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11869_11945 = state_11845__$1;
(statearr_11869_11945[(2)] = inst_11767);

(statearr_11869_11945[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (31))){
var inst_11793 = (state_11845[(11)]);
var inst_11797 = done.call(null,null);
var inst_11798 = cljs.core.async.untap_STAR_.call(null,m,inst_11793);
var state_11845__$1 = (function (){var statearr_11870 = state_11845;
(statearr_11870[(19)] = inst_11797);

return statearr_11870;
})();
var statearr_11871_11946 = state_11845__$1;
(statearr_11871_11946[(2)] = inst_11798);

(statearr_11871_11946[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (32))){
var inst_11788 = (state_11845[(9)]);
var inst_11785 = (state_11845[(20)]);
var inst_11787 = (state_11845[(21)]);
var inst_11786 = (state_11845[(12)]);
var inst_11800 = (state_11845[(2)]);
var inst_11801 = (inst_11788 + (1));
var tmp11866 = inst_11785;
var tmp11867 = inst_11787;
var tmp11868 = inst_11786;
var inst_11785__$1 = tmp11866;
var inst_11786__$1 = tmp11868;
var inst_11787__$1 = tmp11867;
var inst_11788__$1 = inst_11801;
var state_11845__$1 = (function (){var statearr_11872 = state_11845;
(statearr_11872[(9)] = inst_11788__$1);

(statearr_11872[(20)] = inst_11785__$1);

(statearr_11872[(21)] = inst_11787__$1);

(statearr_11872[(22)] = inst_11800);

(statearr_11872[(12)] = inst_11786__$1);

return statearr_11872;
})();
var statearr_11873_11947 = state_11845__$1;
(statearr_11873_11947[(2)] = null);

(statearr_11873_11947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (40))){
var inst_11813 = (state_11845[(23)]);
var inst_11817 = done.call(null,null);
var inst_11818 = cljs.core.async.untap_STAR_.call(null,m,inst_11813);
var state_11845__$1 = (function (){var statearr_11874 = state_11845;
(statearr_11874[(24)] = inst_11817);

return statearr_11874;
})();
var statearr_11875_11948 = state_11845__$1;
(statearr_11875_11948[(2)] = inst_11818);

(statearr_11875_11948[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (33))){
var inst_11804 = (state_11845[(25)]);
var inst_11806 = cljs.core.chunked_seq_QMARK_.call(null,inst_11804);
var state_11845__$1 = state_11845;
if(inst_11806){
var statearr_11876_11949 = state_11845__$1;
(statearr_11876_11949[(1)] = (36));

} else {
var statearr_11877_11950 = state_11845__$1;
(statearr_11877_11950[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (13))){
var inst_11734 = (state_11845[(26)]);
var inst_11737 = cljs.core.async.close_BANG_.call(null,inst_11734);
var state_11845__$1 = state_11845;
var statearr_11878_11951 = state_11845__$1;
(statearr_11878_11951[(2)] = inst_11737);

(statearr_11878_11951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (22))){
var inst_11757 = (state_11845[(8)]);
var inst_11760 = cljs.core.async.close_BANG_.call(null,inst_11757);
var state_11845__$1 = state_11845;
var statearr_11879_11952 = state_11845__$1;
(statearr_11879_11952[(2)] = inst_11760);

(statearr_11879_11952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (36))){
var inst_11804 = (state_11845[(25)]);
var inst_11808 = cljs.core.chunk_first.call(null,inst_11804);
var inst_11809 = cljs.core.chunk_rest.call(null,inst_11804);
var inst_11810 = cljs.core.count.call(null,inst_11808);
var inst_11785 = inst_11809;
var inst_11786 = inst_11808;
var inst_11787 = inst_11810;
var inst_11788 = (0);
var state_11845__$1 = (function (){var statearr_11880 = state_11845;
(statearr_11880[(9)] = inst_11788);

(statearr_11880[(20)] = inst_11785);

(statearr_11880[(21)] = inst_11787);

(statearr_11880[(12)] = inst_11786);

return statearr_11880;
})();
var statearr_11881_11953 = state_11845__$1;
(statearr_11881_11953[(2)] = null);

(statearr_11881_11953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (41))){
var inst_11804 = (state_11845[(25)]);
var inst_11820 = (state_11845[(2)]);
var inst_11821 = cljs.core.next.call(null,inst_11804);
var inst_11785 = inst_11821;
var inst_11786 = null;
var inst_11787 = (0);
var inst_11788 = (0);
var state_11845__$1 = (function (){var statearr_11882 = state_11845;
(statearr_11882[(9)] = inst_11788);

(statearr_11882[(20)] = inst_11785);

(statearr_11882[(21)] = inst_11787);

(statearr_11882[(27)] = inst_11820);

(statearr_11882[(12)] = inst_11786);

return statearr_11882;
})();
var statearr_11883_11954 = state_11845__$1;
(statearr_11883_11954[(2)] = null);

(statearr_11883_11954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (43))){
var state_11845__$1 = state_11845;
var statearr_11884_11955 = state_11845__$1;
(statearr_11884_11955[(2)] = null);

(statearr_11884_11955[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (29))){
var inst_11829 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11885_11956 = state_11845__$1;
(statearr_11885_11956[(2)] = inst_11829);

(statearr_11885_11956[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (44))){
var inst_11838 = (state_11845[(2)]);
var state_11845__$1 = (function (){var statearr_11886 = state_11845;
(statearr_11886[(28)] = inst_11838);

return statearr_11886;
})();
var statearr_11887_11957 = state_11845__$1;
(statearr_11887_11957[(2)] = null);

(statearr_11887_11957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (6))){
var inst_11777 = (state_11845[(29)]);
var inst_11776 = cljs.core.deref.call(null,cs);
var inst_11777__$1 = cljs.core.keys.call(null,inst_11776);
var inst_11778 = cljs.core.count.call(null,inst_11777__$1);
var inst_11779 = cljs.core.reset_BANG_.call(null,dctr,inst_11778);
var inst_11784 = cljs.core.seq.call(null,inst_11777__$1);
var inst_11785 = inst_11784;
var inst_11786 = null;
var inst_11787 = (0);
var inst_11788 = (0);
var state_11845__$1 = (function (){var statearr_11888 = state_11845;
(statearr_11888[(9)] = inst_11788);

(statearr_11888[(20)] = inst_11785);

(statearr_11888[(30)] = inst_11779);

(statearr_11888[(21)] = inst_11787);

(statearr_11888[(29)] = inst_11777__$1);

(statearr_11888[(12)] = inst_11786);

return statearr_11888;
})();
var statearr_11889_11958 = state_11845__$1;
(statearr_11889_11958[(2)] = null);

(statearr_11889_11958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (28))){
var inst_11785 = (state_11845[(20)]);
var inst_11804 = (state_11845[(25)]);
var inst_11804__$1 = cljs.core.seq.call(null,inst_11785);
var state_11845__$1 = (function (){var statearr_11890 = state_11845;
(statearr_11890[(25)] = inst_11804__$1);

return statearr_11890;
})();
if(inst_11804__$1){
var statearr_11891_11959 = state_11845__$1;
(statearr_11891_11959[(1)] = (33));

} else {
var statearr_11892_11960 = state_11845__$1;
(statearr_11892_11960[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (25))){
var inst_11788 = (state_11845[(9)]);
var inst_11787 = (state_11845[(21)]);
var inst_11790 = (inst_11788 < inst_11787);
var inst_11791 = inst_11790;
var state_11845__$1 = state_11845;
if(cljs.core.truth_(inst_11791)){
var statearr_11893_11961 = state_11845__$1;
(statearr_11893_11961[(1)] = (27));

} else {
var statearr_11894_11962 = state_11845__$1;
(statearr_11894_11962[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (34))){
var state_11845__$1 = state_11845;
var statearr_11895_11963 = state_11845__$1;
(statearr_11895_11963[(2)] = null);

(statearr_11895_11963[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (17))){
var state_11845__$1 = state_11845;
var statearr_11896_11964 = state_11845__$1;
(statearr_11896_11964[(2)] = null);

(statearr_11896_11964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (3))){
var inst_11843 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else {
if((state_val_11846 === (12))){
var inst_11772 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11897_11965 = state_11845__$1;
(statearr_11897_11965[(2)] = inst_11772);

(statearr_11897_11965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (2))){
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,(4),ch);
} else {
if((state_val_11846 === (23))){
var state_11845__$1 = state_11845;
var statearr_11898_11966 = state_11845__$1;
(statearr_11898_11966[(2)] = null);

(statearr_11898_11966[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (35))){
var inst_11827 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11899_11967 = state_11845__$1;
(statearr_11899_11967[(2)] = inst_11827);

(statearr_11899_11967[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (19))){
var inst_11744 = (state_11845[(7)]);
var inst_11748 = cljs.core.chunk_first.call(null,inst_11744);
var inst_11749 = cljs.core.chunk_rest.call(null,inst_11744);
var inst_11750 = cljs.core.count.call(null,inst_11748);
var inst_11722 = inst_11749;
var inst_11723 = inst_11748;
var inst_11724 = inst_11750;
var inst_11725 = (0);
var state_11845__$1 = (function (){var statearr_11900 = state_11845;
(statearr_11900[(13)] = inst_11722);

(statearr_11900[(14)] = inst_11723);

(statearr_11900[(15)] = inst_11725);

(statearr_11900[(17)] = inst_11724);

return statearr_11900;
})();
var statearr_11901_11968 = state_11845__$1;
(statearr_11901_11968[(2)] = null);

(statearr_11901_11968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (11))){
var inst_11722 = (state_11845[(13)]);
var inst_11744 = (state_11845[(7)]);
var inst_11744__$1 = cljs.core.seq.call(null,inst_11722);
var state_11845__$1 = (function (){var statearr_11902 = state_11845;
(statearr_11902[(7)] = inst_11744__$1);

return statearr_11902;
})();
if(inst_11744__$1){
var statearr_11903_11969 = state_11845__$1;
(statearr_11903_11969[(1)] = (16));

} else {
var statearr_11904_11970 = state_11845__$1;
(statearr_11904_11970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (9))){
var inst_11774 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11905_11971 = state_11845__$1;
(statearr_11905_11971[(2)] = inst_11774);

(statearr_11905_11971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (5))){
var inst_11720 = cljs.core.deref.call(null,cs);
var inst_11721 = cljs.core.seq.call(null,inst_11720);
var inst_11722 = inst_11721;
var inst_11723 = null;
var inst_11724 = (0);
var inst_11725 = (0);
var state_11845__$1 = (function (){var statearr_11906 = state_11845;
(statearr_11906[(13)] = inst_11722);

(statearr_11906[(14)] = inst_11723);

(statearr_11906[(15)] = inst_11725);

(statearr_11906[(17)] = inst_11724);

return statearr_11906;
})();
var statearr_11907_11972 = state_11845__$1;
(statearr_11907_11972[(2)] = null);

(statearr_11907_11972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (14))){
var state_11845__$1 = state_11845;
var statearr_11908_11973 = state_11845__$1;
(statearr_11908_11973[(2)] = null);

(statearr_11908_11973[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (45))){
var inst_11835 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11909_11974 = state_11845__$1;
(statearr_11909_11974[(2)] = inst_11835);

(statearr_11909_11974[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (26))){
var inst_11777 = (state_11845[(29)]);
var inst_11831 = (state_11845[(2)]);
var inst_11832 = cljs.core.seq.call(null,inst_11777);
var state_11845__$1 = (function (){var statearr_11910 = state_11845;
(statearr_11910[(31)] = inst_11831);

return statearr_11910;
})();
if(inst_11832){
var statearr_11911_11975 = state_11845__$1;
(statearr_11911_11975[(1)] = (42));

} else {
var statearr_11912_11976 = state_11845__$1;
(statearr_11912_11976[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (16))){
var inst_11744 = (state_11845[(7)]);
var inst_11746 = cljs.core.chunked_seq_QMARK_.call(null,inst_11744);
var state_11845__$1 = state_11845;
if(inst_11746){
var statearr_11913_11977 = state_11845__$1;
(statearr_11913_11977[(1)] = (19));

} else {
var statearr_11914_11978 = state_11845__$1;
(statearr_11914_11978[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (38))){
var inst_11824 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11915_11979 = state_11845__$1;
(statearr_11915_11979[(2)] = inst_11824);

(statearr_11915_11979[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (30))){
var state_11845__$1 = state_11845;
var statearr_11916_11980 = state_11845__$1;
(statearr_11916_11980[(2)] = null);

(statearr_11916_11980[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (10))){
var inst_11723 = (state_11845[(14)]);
var inst_11725 = (state_11845[(15)]);
var inst_11733 = cljs.core._nth.call(null,inst_11723,inst_11725);
var inst_11734 = cljs.core.nth.call(null,inst_11733,(0),null);
var inst_11735 = cljs.core.nth.call(null,inst_11733,(1),null);
var state_11845__$1 = (function (){var statearr_11917 = state_11845;
(statearr_11917[(26)] = inst_11734);

return statearr_11917;
})();
if(cljs.core.truth_(inst_11735)){
var statearr_11918_11981 = state_11845__$1;
(statearr_11918_11981[(1)] = (13));

} else {
var statearr_11919_11982 = state_11845__$1;
(statearr_11919_11982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (18))){
var inst_11770 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11920_11983 = state_11845__$1;
(statearr_11920_11983[(2)] = inst_11770);

(statearr_11920_11983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (42))){
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,(45),dchan);
} else {
if((state_val_11846 === (37))){
var inst_11713 = (state_11845[(10)]);
var inst_11813 = (state_11845[(23)]);
var inst_11804 = (state_11845[(25)]);
var inst_11813__$1 = cljs.core.first.call(null,inst_11804);
var inst_11814 = cljs.core.async.put_BANG_.call(null,inst_11813__$1,inst_11713,done);
var state_11845__$1 = (function (){var statearr_11921 = state_11845;
(statearr_11921[(23)] = inst_11813__$1);

return statearr_11921;
})();
if(cljs.core.truth_(inst_11814)){
var statearr_11922_11984 = state_11845__$1;
(statearr_11922_11984[(1)] = (39));

} else {
var statearr_11923_11985 = state_11845__$1;
(statearr_11923_11985[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (8))){
var inst_11725 = (state_11845[(15)]);
var inst_11724 = (state_11845[(17)]);
var inst_11727 = (inst_11725 < inst_11724);
var inst_11728 = inst_11727;
var state_11845__$1 = state_11845;
if(cljs.core.truth_(inst_11728)){
var statearr_11924_11986 = state_11845__$1;
(statearr_11924_11986[(1)] = (10));

} else {
var statearr_11925_11987 = state_11845__$1;
(statearr_11925_11987[(1)] = (11));

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
});})(c__10610__auto___11933,cs,m,dchan,dctr,done))
;
return ((function (switch__10545__auto__,c__10610__auto___11933,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10546__auto__ = null;
var cljs$core$async$mult_$_state_machine__10546__auto____0 = (function (){
var statearr_11929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11929[(0)] = cljs$core$async$mult_$_state_machine__10546__auto__);

(statearr_11929[(1)] = (1));

return statearr_11929;
});
var cljs$core$async$mult_$_state_machine__10546__auto____1 = (function (state_11845){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_11845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e11930){if((e11930 instanceof Object)){
var ex__10549__auto__ = e11930;
var statearr_11931_11988 = state_11845;
(statearr_11931_11988[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11989 = state_11845;
state_11845 = G__11989;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10546__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10546__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10546__auto____0;
cljs$core$async$mult_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10546__auto____1;
return cljs$core$async$mult_$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___11933,cs,m,dchan,dctr,done))
})();
var state__10612__auto__ = (function (){var statearr_11932 = f__10611__auto__.call(null);
(statearr_11932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___11933);

return statearr_11932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___11933,cs,m,dchan,dctr,done))
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
var args11990 = [];
var len__7487__auto___11993 = arguments.length;
var i__7488__auto___11994 = (0);
while(true){
if((i__7488__auto___11994 < len__7487__auto___11993)){
args11990.push((arguments[i__7488__auto___11994]));

var G__11995 = (i__7488__auto___11994 + (1));
i__7488__auto___11994 = G__11995;
continue;
} else {
}
break;
}

var G__11992 = args11990.length;
switch (G__11992) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11990.length)].join('')));

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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m,ch);
} else {
var m__7076__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m,ch);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m,ch);
} else {
var m__7076__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m,ch);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m);
} else {
var m__7076__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m,state_map);
} else {
var m__7076__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m,state_map);
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
var x__7075__auto__ = (((m == null))?null:m);
var m__7076__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,m,mode);
} else {
var m__7076__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7494__auto__ = [];
var len__7487__auto___12007 = arguments.length;
var i__7488__auto___12008 = (0);
while(true){
if((i__7488__auto___12008 < len__7487__auto___12007)){
args__7494__auto__.push((arguments[i__7488__auto___12008]));

var G__12009 = (i__7488__auto___12008 + (1));
i__7488__auto___12008 = G__12009;
continue;
} else {
}
break;
}

var argseq__7495__auto__ = ((((3) < args__7494__auto__.length))?(new cljs.core.IndexedSeq(args__7494__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7495__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12001){
var map__12002 = p__12001;
var map__12002__$1 = ((((!((map__12002 == null)))?((((map__12002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12002):map__12002);
var opts = map__12002__$1;
var statearr_12004_12010 = state;
(statearr_12004_12010[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__12002,map__12002__$1,opts){
return (function (val){
var statearr_12005_12011 = state;
(statearr_12005_12011[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12002,map__12002__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_12006_12012 = state;
(statearr_12006_12012[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11997){
var G__11998 = cljs.core.first.call(null,seq11997);
var seq11997__$1 = cljs.core.next.call(null,seq11997);
var G__11999 = cljs.core.first.call(null,seq11997__$1);
var seq11997__$2 = cljs.core.next.call(null,seq11997__$1);
var G__12000 = cljs.core.first.call(null,seq11997__$2);
var seq11997__$3 = cljs.core.next.call(null,seq11997__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11998,G__11999,G__12000,seq11997__$3);
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
if(typeof cljs.core.async.t_cljs$core$async12178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12178 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12179){
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
this.meta12179 = meta12179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12180,meta12179__$1){
var self__ = this;
var _12180__$1 = this;
return (new cljs.core.async.t_cljs$core$async12178(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12179__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12180){
var self__ = this;
var _12180__$1 = this;
return self__.meta12179;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12179","meta12179",-1214674539,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12178";

cljs.core.async.t_cljs$core$async12178.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async12178");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12178 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12178(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12179){
return (new cljs.core.async.t_cljs$core$async12178(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12179));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12178(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10610__auto___12343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___12343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___12343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12280){
var state_val_12281 = (state_12280[(1)]);
if((state_val_12281 === (7))){
var inst_12196 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12282_12344 = state_12280__$1;
(statearr_12282_12344[(2)] = inst_12196);

(statearr_12282_12344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (20))){
var inst_12208 = (state_12280[(7)]);
var state_12280__$1 = state_12280;
var statearr_12283_12345 = state_12280__$1;
(statearr_12283_12345[(2)] = inst_12208);

(statearr_12283_12345[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (27))){
var state_12280__$1 = state_12280;
var statearr_12284_12346 = state_12280__$1;
(statearr_12284_12346[(2)] = null);

(statearr_12284_12346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (1))){
var inst_12184 = (state_12280[(8)]);
var inst_12184__$1 = calc_state.call(null);
var inst_12186 = (inst_12184__$1 == null);
var inst_12187 = cljs.core.not.call(null,inst_12186);
var state_12280__$1 = (function (){var statearr_12285 = state_12280;
(statearr_12285[(8)] = inst_12184__$1);

return statearr_12285;
})();
if(inst_12187){
var statearr_12286_12347 = state_12280__$1;
(statearr_12286_12347[(1)] = (2));

} else {
var statearr_12287_12348 = state_12280__$1;
(statearr_12287_12348[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (24))){
var inst_12240 = (state_12280[(9)]);
var inst_12254 = (state_12280[(10)]);
var inst_12231 = (state_12280[(11)]);
var inst_12254__$1 = inst_12231.call(null,inst_12240);
var state_12280__$1 = (function (){var statearr_12288 = state_12280;
(statearr_12288[(10)] = inst_12254__$1);

return statearr_12288;
})();
if(cljs.core.truth_(inst_12254__$1)){
var statearr_12289_12349 = state_12280__$1;
(statearr_12289_12349[(1)] = (29));

} else {
var statearr_12290_12350 = state_12280__$1;
(statearr_12290_12350[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (4))){
var inst_12199 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12199)){
var statearr_12291_12351 = state_12280__$1;
(statearr_12291_12351[(1)] = (8));

} else {
var statearr_12292_12352 = state_12280__$1;
(statearr_12292_12352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (15))){
var inst_12225 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12225)){
var statearr_12293_12353 = state_12280__$1;
(statearr_12293_12353[(1)] = (19));

} else {
var statearr_12294_12354 = state_12280__$1;
(statearr_12294_12354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (21))){
var inst_12230 = (state_12280[(12)]);
var inst_12230__$1 = (state_12280[(2)]);
var inst_12231 = cljs.core.get.call(null,inst_12230__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12232 = cljs.core.get.call(null,inst_12230__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12233 = cljs.core.get.call(null,inst_12230__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12280__$1 = (function (){var statearr_12295 = state_12280;
(statearr_12295[(13)] = inst_12232);

(statearr_12295[(12)] = inst_12230__$1);

(statearr_12295[(11)] = inst_12231);

return statearr_12295;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12280__$1,(22),inst_12233);
} else {
if((state_val_12281 === (31))){
var inst_12262 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12262)){
var statearr_12296_12355 = state_12280__$1;
(statearr_12296_12355[(1)] = (32));

} else {
var statearr_12297_12356 = state_12280__$1;
(statearr_12297_12356[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (32))){
var inst_12239 = (state_12280[(14)]);
var state_12280__$1 = state_12280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12280__$1,(35),out,inst_12239);
} else {
if((state_val_12281 === (33))){
var inst_12230 = (state_12280[(12)]);
var inst_12208 = inst_12230;
var state_12280__$1 = (function (){var statearr_12298 = state_12280;
(statearr_12298[(7)] = inst_12208);

return statearr_12298;
})();
var statearr_12299_12357 = state_12280__$1;
(statearr_12299_12357[(2)] = null);

(statearr_12299_12357[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (13))){
var inst_12208 = (state_12280[(7)]);
var inst_12215 = inst_12208.cljs$lang$protocol_mask$partition0$;
var inst_12216 = (inst_12215 & (64));
var inst_12217 = inst_12208.cljs$core$ISeq$;
var inst_12218 = (inst_12216) || (inst_12217);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12218)){
var statearr_12300_12358 = state_12280__$1;
(statearr_12300_12358[(1)] = (16));

} else {
var statearr_12301_12359 = state_12280__$1;
(statearr_12301_12359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (22))){
var inst_12240 = (state_12280[(9)]);
var inst_12239 = (state_12280[(14)]);
var inst_12238 = (state_12280[(2)]);
var inst_12239__$1 = cljs.core.nth.call(null,inst_12238,(0),null);
var inst_12240__$1 = cljs.core.nth.call(null,inst_12238,(1),null);
var inst_12241 = (inst_12239__$1 == null);
var inst_12242 = cljs.core._EQ_.call(null,inst_12240__$1,change);
var inst_12243 = (inst_12241) || (inst_12242);
var state_12280__$1 = (function (){var statearr_12302 = state_12280;
(statearr_12302[(9)] = inst_12240__$1);

(statearr_12302[(14)] = inst_12239__$1);

return statearr_12302;
})();
if(cljs.core.truth_(inst_12243)){
var statearr_12303_12360 = state_12280__$1;
(statearr_12303_12360[(1)] = (23));

} else {
var statearr_12304_12361 = state_12280__$1;
(statearr_12304_12361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (36))){
var inst_12230 = (state_12280[(12)]);
var inst_12208 = inst_12230;
var state_12280__$1 = (function (){var statearr_12305 = state_12280;
(statearr_12305[(7)] = inst_12208);

return statearr_12305;
})();
var statearr_12306_12362 = state_12280__$1;
(statearr_12306_12362[(2)] = null);

(statearr_12306_12362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (29))){
var inst_12254 = (state_12280[(10)]);
var state_12280__$1 = state_12280;
var statearr_12307_12363 = state_12280__$1;
(statearr_12307_12363[(2)] = inst_12254);

(statearr_12307_12363[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (6))){
var state_12280__$1 = state_12280;
var statearr_12308_12364 = state_12280__$1;
(statearr_12308_12364[(2)] = false);

(statearr_12308_12364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (28))){
var inst_12250 = (state_12280[(2)]);
var inst_12251 = calc_state.call(null);
var inst_12208 = inst_12251;
var state_12280__$1 = (function (){var statearr_12309 = state_12280;
(statearr_12309[(7)] = inst_12208);

(statearr_12309[(15)] = inst_12250);

return statearr_12309;
})();
var statearr_12310_12365 = state_12280__$1;
(statearr_12310_12365[(2)] = null);

(statearr_12310_12365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (25))){
var inst_12276 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12311_12366 = state_12280__$1;
(statearr_12311_12366[(2)] = inst_12276);

(statearr_12311_12366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (34))){
var inst_12274 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12312_12367 = state_12280__$1;
(statearr_12312_12367[(2)] = inst_12274);

(statearr_12312_12367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (17))){
var state_12280__$1 = state_12280;
var statearr_12313_12368 = state_12280__$1;
(statearr_12313_12368[(2)] = false);

(statearr_12313_12368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (3))){
var state_12280__$1 = state_12280;
var statearr_12314_12369 = state_12280__$1;
(statearr_12314_12369[(2)] = false);

(statearr_12314_12369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (12))){
var inst_12278 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12280__$1,inst_12278);
} else {
if((state_val_12281 === (2))){
var inst_12184 = (state_12280[(8)]);
var inst_12189 = inst_12184.cljs$lang$protocol_mask$partition0$;
var inst_12190 = (inst_12189 & (64));
var inst_12191 = inst_12184.cljs$core$ISeq$;
var inst_12192 = (inst_12190) || (inst_12191);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12192)){
var statearr_12315_12370 = state_12280__$1;
(statearr_12315_12370[(1)] = (5));

} else {
var statearr_12316_12371 = state_12280__$1;
(statearr_12316_12371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (23))){
var inst_12239 = (state_12280[(14)]);
var inst_12245 = (inst_12239 == null);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12245)){
var statearr_12317_12372 = state_12280__$1;
(statearr_12317_12372[(1)] = (26));

} else {
var statearr_12318_12373 = state_12280__$1;
(statearr_12318_12373[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (35))){
var inst_12265 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
if(cljs.core.truth_(inst_12265)){
var statearr_12319_12374 = state_12280__$1;
(statearr_12319_12374[(1)] = (36));

} else {
var statearr_12320_12375 = state_12280__$1;
(statearr_12320_12375[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (19))){
var inst_12208 = (state_12280[(7)]);
var inst_12227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12208);
var state_12280__$1 = state_12280;
var statearr_12321_12376 = state_12280__$1;
(statearr_12321_12376[(2)] = inst_12227);

(statearr_12321_12376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (11))){
var inst_12208 = (state_12280[(7)]);
var inst_12212 = (inst_12208 == null);
var inst_12213 = cljs.core.not.call(null,inst_12212);
var state_12280__$1 = state_12280;
if(inst_12213){
var statearr_12322_12377 = state_12280__$1;
(statearr_12322_12377[(1)] = (13));

} else {
var statearr_12323_12378 = state_12280__$1;
(statearr_12323_12378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (9))){
var inst_12184 = (state_12280[(8)]);
var state_12280__$1 = state_12280;
var statearr_12324_12379 = state_12280__$1;
(statearr_12324_12379[(2)] = inst_12184);

(statearr_12324_12379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (5))){
var state_12280__$1 = state_12280;
var statearr_12325_12380 = state_12280__$1;
(statearr_12325_12380[(2)] = true);

(statearr_12325_12380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (14))){
var state_12280__$1 = state_12280;
var statearr_12326_12381 = state_12280__$1;
(statearr_12326_12381[(2)] = false);

(statearr_12326_12381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (26))){
var inst_12240 = (state_12280[(9)]);
var inst_12247 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12240);
var state_12280__$1 = state_12280;
var statearr_12327_12382 = state_12280__$1;
(statearr_12327_12382[(2)] = inst_12247);

(statearr_12327_12382[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (16))){
var state_12280__$1 = state_12280;
var statearr_12328_12383 = state_12280__$1;
(statearr_12328_12383[(2)] = true);

(statearr_12328_12383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (38))){
var inst_12270 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12329_12384 = state_12280__$1;
(statearr_12329_12384[(2)] = inst_12270);

(statearr_12329_12384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (30))){
var inst_12240 = (state_12280[(9)]);
var inst_12232 = (state_12280[(13)]);
var inst_12231 = (state_12280[(11)]);
var inst_12257 = cljs.core.empty_QMARK_.call(null,inst_12231);
var inst_12258 = inst_12232.call(null,inst_12240);
var inst_12259 = cljs.core.not.call(null,inst_12258);
var inst_12260 = (inst_12257) && (inst_12259);
var state_12280__$1 = state_12280;
var statearr_12330_12385 = state_12280__$1;
(statearr_12330_12385[(2)] = inst_12260);

(statearr_12330_12385[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (10))){
var inst_12184 = (state_12280[(8)]);
var inst_12204 = (state_12280[(2)]);
var inst_12205 = cljs.core.get.call(null,inst_12204,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12206 = cljs.core.get.call(null,inst_12204,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12207 = cljs.core.get.call(null,inst_12204,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12208 = inst_12184;
var state_12280__$1 = (function (){var statearr_12331 = state_12280;
(statearr_12331[(7)] = inst_12208);

(statearr_12331[(16)] = inst_12206);

(statearr_12331[(17)] = inst_12205);

(statearr_12331[(18)] = inst_12207);

return statearr_12331;
})();
var statearr_12332_12386 = state_12280__$1;
(statearr_12332_12386[(2)] = null);

(statearr_12332_12386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (18))){
var inst_12222 = (state_12280[(2)]);
var state_12280__$1 = state_12280;
var statearr_12333_12387 = state_12280__$1;
(statearr_12333_12387[(2)] = inst_12222);

(statearr_12333_12387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (37))){
var state_12280__$1 = state_12280;
var statearr_12334_12388 = state_12280__$1;
(statearr_12334_12388[(2)] = null);

(statearr_12334_12388[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12281 === (8))){
var inst_12184 = (state_12280[(8)]);
var inst_12201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12184);
var state_12280__$1 = state_12280;
var statearr_12335_12389 = state_12280__$1;
(statearr_12335_12389[(2)] = inst_12201);

(statearr_12335_12389[(1)] = (10));


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
});})(c__10610__auto___12343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10545__auto__,c__10610__auto___12343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10546__auto__ = null;
var cljs$core$async$mix_$_state_machine__10546__auto____0 = (function (){
var statearr_12339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12339[(0)] = cljs$core$async$mix_$_state_machine__10546__auto__);

(statearr_12339[(1)] = (1));

return statearr_12339;
});
var cljs$core$async$mix_$_state_machine__10546__auto____1 = (function (state_12280){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_12280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12340){if((e12340 instanceof Object)){
var ex__10549__auto__ = e12340;
var statearr_12341_12390 = state_12280;
(statearr_12341_12390[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12391 = state_12280;
state_12280 = G__12391;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10546__auto__ = function(state_12280){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10546__auto____1.call(this,state_12280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10546__auto____0;
cljs$core$async$mix_$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10546__auto____1;
return cljs$core$async$mix_$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___12343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10612__auto__ = (function (){var statearr_12342 = f__10611__auto__.call(null);
(statearr_12342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___12343);

return statearr_12342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___12343,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7075__auto__ = (((p == null))?null:p);
var m__7076__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7076__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7075__auto__ = (((p == null))?null:p);
var m__7076__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,p,v,ch);
} else {
var m__7076__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12392 = [];
var len__7487__auto___12395 = arguments.length;
var i__7488__auto___12396 = (0);
while(true){
if((i__7488__auto___12396 < len__7487__auto___12395)){
args12392.push((arguments[i__7488__auto___12396]));

var G__12397 = (i__7488__auto___12396 + (1));
i__7488__auto___12396 = G__12397;
continue;
} else {
}
break;
}

var G__12394 = args12392.length;
switch (G__12394) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12392.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7075__auto__ = (((p == null))?null:p);
var m__7076__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,p);
} else {
var m__7076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,p);
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
var x__7075__auto__ = (((p == null))?null:p);
var m__7076__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7075__auto__)]);
if(!((m__7076__auto__ == null))){
return m__7076__auto__.call(null,p,v);
} else {
var m__7076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7076__auto____$1 == null))){
return m__7076__auto____$1.call(null,p,v);
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
var args12400 = [];
var len__7487__auto___12525 = arguments.length;
var i__7488__auto___12526 = (0);
while(true){
if((i__7488__auto___12526 < len__7487__auto___12525)){
args12400.push((arguments[i__7488__auto___12526]));

var G__12527 = (i__7488__auto___12526 + (1));
i__7488__auto___12526 = G__12527;
continue;
} else {
}
break;
}

var G__12402 = args12400.length;
switch (G__12402) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12400.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6412__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6412__auto__)){
return or__6412__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6412__auto__,mults){
return (function (p1__12399_SHARP_){
if(cljs.core.truth_(p1__12399_SHARP_.call(null,topic))){
return p1__12399_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12399_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6412__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12403 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12404){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12404 = meta12404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12405,meta12404__$1){
var self__ = this;
var _12405__$1 = this;
return (new cljs.core.async.t_cljs$core$async12403(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12404__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12405){
var self__ = this;
var _12405__$1 = this;
return self__.meta12404;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12404","meta12404",-1027437519,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12403";

cljs.core.async.t_cljs$core$async12403.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async12403");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12403 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12403(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12404){
return (new cljs.core.async.t_cljs$core$async12403(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12404));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12403(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10610__auto___12529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___12529,mults,ensure_mult,p){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___12529,mults,ensure_mult,p){
return (function (state_12477){
var state_val_12478 = (state_12477[(1)]);
if((state_val_12478 === (7))){
var inst_12473 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12479_12530 = state_12477__$1;
(statearr_12479_12530[(2)] = inst_12473);

(statearr_12479_12530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (20))){
var state_12477__$1 = state_12477;
var statearr_12480_12531 = state_12477__$1;
(statearr_12480_12531[(2)] = null);

(statearr_12480_12531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (1))){
var state_12477__$1 = state_12477;
var statearr_12481_12532 = state_12477__$1;
(statearr_12481_12532[(2)] = null);

(statearr_12481_12532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (24))){
var inst_12456 = (state_12477[(7)]);
var inst_12465 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12456);
var state_12477__$1 = state_12477;
var statearr_12482_12533 = state_12477__$1;
(statearr_12482_12533[(2)] = inst_12465);

(statearr_12482_12533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (4))){
var inst_12408 = (state_12477[(8)]);
var inst_12408__$1 = (state_12477[(2)]);
var inst_12409 = (inst_12408__$1 == null);
var state_12477__$1 = (function (){var statearr_12483 = state_12477;
(statearr_12483[(8)] = inst_12408__$1);

return statearr_12483;
})();
if(cljs.core.truth_(inst_12409)){
var statearr_12484_12534 = state_12477__$1;
(statearr_12484_12534[(1)] = (5));

} else {
var statearr_12485_12535 = state_12477__$1;
(statearr_12485_12535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (15))){
var inst_12450 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12486_12536 = state_12477__$1;
(statearr_12486_12536[(2)] = inst_12450);

(statearr_12486_12536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (21))){
var inst_12470 = (state_12477[(2)]);
var state_12477__$1 = (function (){var statearr_12487 = state_12477;
(statearr_12487[(9)] = inst_12470);

return statearr_12487;
})();
var statearr_12488_12537 = state_12477__$1;
(statearr_12488_12537[(2)] = null);

(statearr_12488_12537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (13))){
var inst_12432 = (state_12477[(10)]);
var inst_12434 = cljs.core.chunked_seq_QMARK_.call(null,inst_12432);
var state_12477__$1 = state_12477;
if(inst_12434){
var statearr_12489_12538 = state_12477__$1;
(statearr_12489_12538[(1)] = (16));

} else {
var statearr_12490_12539 = state_12477__$1;
(statearr_12490_12539[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (22))){
var inst_12462 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
if(cljs.core.truth_(inst_12462)){
var statearr_12491_12540 = state_12477__$1;
(statearr_12491_12540[(1)] = (23));

} else {
var statearr_12492_12541 = state_12477__$1;
(statearr_12492_12541[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (6))){
var inst_12456 = (state_12477[(7)]);
var inst_12408 = (state_12477[(8)]);
var inst_12458 = (state_12477[(11)]);
var inst_12456__$1 = topic_fn.call(null,inst_12408);
var inst_12457 = cljs.core.deref.call(null,mults);
var inst_12458__$1 = cljs.core.get.call(null,inst_12457,inst_12456__$1);
var state_12477__$1 = (function (){var statearr_12493 = state_12477;
(statearr_12493[(7)] = inst_12456__$1);

(statearr_12493[(11)] = inst_12458__$1);

return statearr_12493;
})();
if(cljs.core.truth_(inst_12458__$1)){
var statearr_12494_12542 = state_12477__$1;
(statearr_12494_12542[(1)] = (19));

} else {
var statearr_12495_12543 = state_12477__$1;
(statearr_12495_12543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (25))){
var inst_12467 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12496_12544 = state_12477__$1;
(statearr_12496_12544[(2)] = inst_12467);

(statearr_12496_12544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (17))){
var inst_12432 = (state_12477[(10)]);
var inst_12441 = cljs.core.first.call(null,inst_12432);
var inst_12442 = cljs.core.async.muxch_STAR_.call(null,inst_12441);
var inst_12443 = cljs.core.async.close_BANG_.call(null,inst_12442);
var inst_12444 = cljs.core.next.call(null,inst_12432);
var inst_12418 = inst_12444;
var inst_12419 = null;
var inst_12420 = (0);
var inst_12421 = (0);
var state_12477__$1 = (function (){var statearr_12497 = state_12477;
(statearr_12497[(12)] = inst_12419);

(statearr_12497[(13)] = inst_12421);

(statearr_12497[(14)] = inst_12443);

(statearr_12497[(15)] = inst_12418);

(statearr_12497[(16)] = inst_12420);

return statearr_12497;
})();
var statearr_12498_12545 = state_12477__$1;
(statearr_12498_12545[(2)] = null);

(statearr_12498_12545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (3))){
var inst_12475 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12477__$1,inst_12475);
} else {
if((state_val_12478 === (12))){
var inst_12452 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12499_12546 = state_12477__$1;
(statearr_12499_12546[(2)] = inst_12452);

(statearr_12499_12546[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (2))){
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12477__$1,(4),ch);
} else {
if((state_val_12478 === (23))){
var state_12477__$1 = state_12477;
var statearr_12500_12547 = state_12477__$1;
(statearr_12500_12547[(2)] = null);

(statearr_12500_12547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (19))){
var inst_12408 = (state_12477[(8)]);
var inst_12458 = (state_12477[(11)]);
var inst_12460 = cljs.core.async.muxch_STAR_.call(null,inst_12458);
var state_12477__$1 = state_12477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12477__$1,(22),inst_12460,inst_12408);
} else {
if((state_val_12478 === (11))){
var inst_12432 = (state_12477[(10)]);
var inst_12418 = (state_12477[(15)]);
var inst_12432__$1 = cljs.core.seq.call(null,inst_12418);
var state_12477__$1 = (function (){var statearr_12501 = state_12477;
(statearr_12501[(10)] = inst_12432__$1);

return statearr_12501;
})();
if(inst_12432__$1){
var statearr_12502_12548 = state_12477__$1;
(statearr_12502_12548[(1)] = (13));

} else {
var statearr_12503_12549 = state_12477__$1;
(statearr_12503_12549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (9))){
var inst_12454 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12504_12550 = state_12477__$1;
(statearr_12504_12550[(2)] = inst_12454);

(statearr_12504_12550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (5))){
var inst_12415 = cljs.core.deref.call(null,mults);
var inst_12416 = cljs.core.vals.call(null,inst_12415);
var inst_12417 = cljs.core.seq.call(null,inst_12416);
var inst_12418 = inst_12417;
var inst_12419 = null;
var inst_12420 = (0);
var inst_12421 = (0);
var state_12477__$1 = (function (){var statearr_12505 = state_12477;
(statearr_12505[(12)] = inst_12419);

(statearr_12505[(13)] = inst_12421);

(statearr_12505[(15)] = inst_12418);

(statearr_12505[(16)] = inst_12420);

return statearr_12505;
})();
var statearr_12506_12551 = state_12477__$1;
(statearr_12506_12551[(2)] = null);

(statearr_12506_12551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (14))){
var state_12477__$1 = state_12477;
var statearr_12510_12552 = state_12477__$1;
(statearr_12510_12552[(2)] = null);

(statearr_12510_12552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (16))){
var inst_12432 = (state_12477[(10)]);
var inst_12436 = cljs.core.chunk_first.call(null,inst_12432);
var inst_12437 = cljs.core.chunk_rest.call(null,inst_12432);
var inst_12438 = cljs.core.count.call(null,inst_12436);
var inst_12418 = inst_12437;
var inst_12419 = inst_12436;
var inst_12420 = inst_12438;
var inst_12421 = (0);
var state_12477__$1 = (function (){var statearr_12511 = state_12477;
(statearr_12511[(12)] = inst_12419);

(statearr_12511[(13)] = inst_12421);

(statearr_12511[(15)] = inst_12418);

(statearr_12511[(16)] = inst_12420);

return statearr_12511;
})();
var statearr_12512_12553 = state_12477__$1;
(statearr_12512_12553[(2)] = null);

(statearr_12512_12553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (10))){
var inst_12419 = (state_12477[(12)]);
var inst_12421 = (state_12477[(13)]);
var inst_12418 = (state_12477[(15)]);
var inst_12420 = (state_12477[(16)]);
var inst_12426 = cljs.core._nth.call(null,inst_12419,inst_12421);
var inst_12427 = cljs.core.async.muxch_STAR_.call(null,inst_12426);
var inst_12428 = cljs.core.async.close_BANG_.call(null,inst_12427);
var inst_12429 = (inst_12421 + (1));
var tmp12507 = inst_12419;
var tmp12508 = inst_12418;
var tmp12509 = inst_12420;
var inst_12418__$1 = tmp12508;
var inst_12419__$1 = tmp12507;
var inst_12420__$1 = tmp12509;
var inst_12421__$1 = inst_12429;
var state_12477__$1 = (function (){var statearr_12513 = state_12477;
(statearr_12513[(12)] = inst_12419__$1);

(statearr_12513[(13)] = inst_12421__$1);

(statearr_12513[(17)] = inst_12428);

(statearr_12513[(15)] = inst_12418__$1);

(statearr_12513[(16)] = inst_12420__$1);

return statearr_12513;
})();
var statearr_12514_12554 = state_12477__$1;
(statearr_12514_12554[(2)] = null);

(statearr_12514_12554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (18))){
var inst_12447 = (state_12477[(2)]);
var state_12477__$1 = state_12477;
var statearr_12515_12555 = state_12477__$1;
(statearr_12515_12555[(2)] = inst_12447);

(statearr_12515_12555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12478 === (8))){
var inst_12421 = (state_12477[(13)]);
var inst_12420 = (state_12477[(16)]);
var inst_12423 = (inst_12421 < inst_12420);
var inst_12424 = inst_12423;
var state_12477__$1 = state_12477;
if(cljs.core.truth_(inst_12424)){
var statearr_12516_12556 = state_12477__$1;
(statearr_12516_12556[(1)] = (10));

} else {
var statearr_12517_12557 = state_12477__$1;
(statearr_12517_12557[(1)] = (11));

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
});})(c__10610__auto___12529,mults,ensure_mult,p))
;
return ((function (switch__10545__auto__,c__10610__auto___12529,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12521[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12521[(1)] = (1));

return statearr_12521;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12477){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_12477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12522){if((e12522 instanceof Object)){
var ex__10549__auto__ = e12522;
var statearr_12523_12558 = state_12477;
(statearr_12523_12558[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12559 = state_12477;
state_12477 = G__12559;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___12529,mults,ensure_mult,p))
})();
var state__10612__auto__ = (function (){var statearr_12524 = f__10611__auto__.call(null);
(statearr_12524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___12529);

return statearr_12524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___12529,mults,ensure_mult,p))
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
var args12560 = [];
var len__7487__auto___12563 = arguments.length;
var i__7488__auto___12564 = (0);
while(true){
if((i__7488__auto___12564 < len__7487__auto___12563)){
args12560.push((arguments[i__7488__auto___12564]));

var G__12565 = (i__7488__auto___12564 + (1));
i__7488__auto___12564 = G__12565;
continue;
} else {
}
break;
}

var G__12562 = args12560.length;
switch (G__12562) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12560.length)].join('')));

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
var args12567 = [];
var len__7487__auto___12570 = arguments.length;
var i__7488__auto___12571 = (0);
while(true){
if((i__7488__auto___12571 < len__7487__auto___12570)){
args12567.push((arguments[i__7488__auto___12571]));

var G__12572 = (i__7488__auto___12571 + (1));
i__7488__auto___12571 = G__12572;
continue;
} else {
}
break;
}

var G__12569 = args12567.length;
switch (G__12569) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12567.length)].join('')));

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
var args12574 = [];
var len__7487__auto___12645 = arguments.length;
var i__7488__auto___12646 = (0);
while(true){
if((i__7488__auto___12646 < len__7487__auto___12645)){
args12574.push((arguments[i__7488__auto___12646]));

var G__12647 = (i__7488__auto___12646 + (1));
i__7488__auto___12646 = G__12647;
continue;
} else {
}
break;
}

var G__12576 = args12574.length;
switch (G__12576) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12574.length)].join('')));

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
var c__10610__auto___12649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___12649,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___12649,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12615){
var state_val_12616 = (state_12615[(1)]);
if((state_val_12616 === (7))){
var state_12615__$1 = state_12615;
var statearr_12617_12650 = state_12615__$1;
(statearr_12617_12650[(2)] = null);

(statearr_12617_12650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (1))){
var state_12615__$1 = state_12615;
var statearr_12618_12651 = state_12615__$1;
(statearr_12618_12651[(2)] = null);

(statearr_12618_12651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (4))){
var inst_12579 = (state_12615[(7)]);
var inst_12581 = (inst_12579 < cnt);
var state_12615__$1 = state_12615;
if(cljs.core.truth_(inst_12581)){
var statearr_12619_12652 = state_12615__$1;
(statearr_12619_12652[(1)] = (6));

} else {
var statearr_12620_12653 = state_12615__$1;
(statearr_12620_12653[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (15))){
var inst_12611 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
var statearr_12621_12654 = state_12615__$1;
(statearr_12621_12654[(2)] = inst_12611);

(statearr_12621_12654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (13))){
var inst_12604 = cljs.core.async.close_BANG_.call(null,out);
var state_12615__$1 = state_12615;
var statearr_12622_12655 = state_12615__$1;
(statearr_12622_12655[(2)] = inst_12604);

(statearr_12622_12655[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (6))){
var state_12615__$1 = state_12615;
var statearr_12623_12656 = state_12615__$1;
(statearr_12623_12656[(2)] = null);

(statearr_12623_12656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (3))){
var inst_12613 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12615__$1,inst_12613);
} else {
if((state_val_12616 === (12))){
var inst_12601 = (state_12615[(8)]);
var inst_12601__$1 = (state_12615[(2)]);
var inst_12602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12601__$1);
var state_12615__$1 = (function (){var statearr_12624 = state_12615;
(statearr_12624[(8)] = inst_12601__$1);

return statearr_12624;
})();
if(cljs.core.truth_(inst_12602)){
var statearr_12625_12657 = state_12615__$1;
(statearr_12625_12657[(1)] = (13));

} else {
var statearr_12626_12658 = state_12615__$1;
(statearr_12626_12658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (2))){
var inst_12578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_12579 = (0);
var state_12615__$1 = (function (){var statearr_12627 = state_12615;
(statearr_12627[(7)] = inst_12579);

(statearr_12627[(9)] = inst_12578);

return statearr_12627;
})();
var statearr_12628_12659 = state_12615__$1;
(statearr_12628_12659[(2)] = null);

(statearr_12628_12659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (11))){
var inst_12579 = (state_12615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12615,(10),Object,null,(9));
var inst_12588 = chs__$1.call(null,inst_12579);
var inst_12589 = done.call(null,inst_12579);
var inst_12590 = cljs.core.async.take_BANG_.call(null,inst_12588,inst_12589);
var state_12615__$1 = state_12615;
var statearr_12629_12660 = state_12615__$1;
(statearr_12629_12660[(2)] = inst_12590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (9))){
var inst_12579 = (state_12615[(7)]);
var inst_12592 = (state_12615[(2)]);
var inst_12593 = (inst_12579 + (1));
var inst_12579__$1 = inst_12593;
var state_12615__$1 = (function (){var statearr_12630 = state_12615;
(statearr_12630[(7)] = inst_12579__$1);

(statearr_12630[(10)] = inst_12592);

return statearr_12630;
})();
var statearr_12631_12661 = state_12615__$1;
(statearr_12631_12661[(2)] = null);

(statearr_12631_12661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (5))){
var inst_12599 = (state_12615[(2)]);
var state_12615__$1 = (function (){var statearr_12632 = state_12615;
(statearr_12632[(11)] = inst_12599);

return statearr_12632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12615__$1,(12),dchan);
} else {
if((state_val_12616 === (14))){
var inst_12601 = (state_12615[(8)]);
var inst_12606 = cljs.core.apply.call(null,f,inst_12601);
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12615__$1,(16),out,inst_12606);
} else {
if((state_val_12616 === (16))){
var inst_12608 = (state_12615[(2)]);
var state_12615__$1 = (function (){var statearr_12633 = state_12615;
(statearr_12633[(12)] = inst_12608);

return statearr_12633;
})();
var statearr_12634_12662 = state_12615__$1;
(statearr_12634_12662[(2)] = null);

(statearr_12634_12662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (10))){
var inst_12583 = (state_12615[(2)]);
var inst_12584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_12615__$1 = (function (){var statearr_12635 = state_12615;
(statearr_12635[(13)] = inst_12583);

return statearr_12635;
})();
var statearr_12636_12663 = state_12615__$1;
(statearr_12636_12663[(2)] = inst_12584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12616 === (8))){
var inst_12597 = (state_12615[(2)]);
var state_12615__$1 = state_12615;
var statearr_12637_12664 = state_12615__$1;
(statearr_12637_12664[(2)] = inst_12597);

(statearr_12637_12664[(1)] = (5));


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
});})(c__10610__auto___12649,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10545__auto__,c__10610__auto___12649,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12641[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12641[(1)] = (1));

return statearr_12641;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12615){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_12615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12642){if((e12642 instanceof Object)){
var ex__10549__auto__ = e12642;
var statearr_12643_12665 = state_12615;
(statearr_12643_12665[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12666 = state_12615;
state_12615 = G__12666;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___12649,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10612__auto__ = (function (){var statearr_12644 = f__10611__auto__.call(null);
(statearr_12644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___12649);

return statearr_12644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___12649,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args12668 = [];
var len__7487__auto___12726 = arguments.length;
var i__7488__auto___12727 = (0);
while(true){
if((i__7488__auto___12727 < len__7487__auto___12726)){
args12668.push((arguments[i__7488__auto___12727]));

var G__12728 = (i__7488__auto___12727 + (1));
i__7488__auto___12727 = G__12728;
continue;
} else {
}
break;
}

var G__12670 = args12668.length;
switch (G__12670) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12668.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10610__auto___12730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___12730,out){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___12730,out){
return (function (state_12702){
var state_val_12703 = (state_12702[(1)]);
if((state_val_12703 === (7))){
var inst_12682 = (state_12702[(7)]);
var inst_12681 = (state_12702[(8)]);
var inst_12681__$1 = (state_12702[(2)]);
var inst_12682__$1 = cljs.core.nth.call(null,inst_12681__$1,(0),null);
var inst_12683 = cljs.core.nth.call(null,inst_12681__$1,(1),null);
var inst_12684 = (inst_12682__$1 == null);
var state_12702__$1 = (function (){var statearr_12704 = state_12702;
(statearr_12704[(9)] = inst_12683);

(statearr_12704[(7)] = inst_12682__$1);

(statearr_12704[(8)] = inst_12681__$1);

return statearr_12704;
})();
if(cljs.core.truth_(inst_12684)){
var statearr_12705_12731 = state_12702__$1;
(statearr_12705_12731[(1)] = (8));

} else {
var statearr_12706_12732 = state_12702__$1;
(statearr_12706_12732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (1))){
var inst_12671 = cljs.core.vec.call(null,chs);
var inst_12672 = inst_12671;
var state_12702__$1 = (function (){var statearr_12707 = state_12702;
(statearr_12707[(10)] = inst_12672);

return statearr_12707;
})();
var statearr_12708_12733 = state_12702__$1;
(statearr_12708_12733[(2)] = null);

(statearr_12708_12733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (4))){
var inst_12672 = (state_12702[(10)]);
var state_12702__$1 = state_12702;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12702__$1,(7),inst_12672);
} else {
if((state_val_12703 === (6))){
var inst_12698 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
var statearr_12709_12734 = state_12702__$1;
(statearr_12709_12734[(2)] = inst_12698);

(statearr_12709_12734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (3))){
var inst_12700 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12702__$1,inst_12700);
} else {
if((state_val_12703 === (2))){
var inst_12672 = (state_12702[(10)]);
var inst_12674 = cljs.core.count.call(null,inst_12672);
var inst_12675 = (inst_12674 > (0));
var state_12702__$1 = state_12702;
if(cljs.core.truth_(inst_12675)){
var statearr_12711_12735 = state_12702__$1;
(statearr_12711_12735[(1)] = (4));

} else {
var statearr_12712_12736 = state_12702__$1;
(statearr_12712_12736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (11))){
var inst_12672 = (state_12702[(10)]);
var inst_12691 = (state_12702[(2)]);
var tmp12710 = inst_12672;
var inst_12672__$1 = tmp12710;
var state_12702__$1 = (function (){var statearr_12713 = state_12702;
(statearr_12713[(10)] = inst_12672__$1);

(statearr_12713[(11)] = inst_12691);

return statearr_12713;
})();
var statearr_12714_12737 = state_12702__$1;
(statearr_12714_12737[(2)] = null);

(statearr_12714_12737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (9))){
var inst_12682 = (state_12702[(7)]);
var state_12702__$1 = state_12702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12702__$1,(11),out,inst_12682);
} else {
if((state_val_12703 === (5))){
var inst_12696 = cljs.core.async.close_BANG_.call(null,out);
var state_12702__$1 = state_12702;
var statearr_12715_12738 = state_12702__$1;
(statearr_12715_12738[(2)] = inst_12696);

(statearr_12715_12738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (10))){
var inst_12694 = (state_12702[(2)]);
var state_12702__$1 = state_12702;
var statearr_12716_12739 = state_12702__$1;
(statearr_12716_12739[(2)] = inst_12694);

(statearr_12716_12739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12703 === (8))){
var inst_12683 = (state_12702[(9)]);
var inst_12672 = (state_12702[(10)]);
var inst_12682 = (state_12702[(7)]);
var inst_12681 = (state_12702[(8)]);
var inst_12686 = (function (){var cs = inst_12672;
var vec__12677 = inst_12681;
var v = inst_12682;
var c = inst_12683;
return ((function (cs,vec__12677,v,c,inst_12683,inst_12672,inst_12682,inst_12681,state_val_12703,c__10610__auto___12730,out){
return (function (p1__12667_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__12667_SHARP_);
});
;})(cs,vec__12677,v,c,inst_12683,inst_12672,inst_12682,inst_12681,state_val_12703,c__10610__auto___12730,out))
})();
var inst_12687 = cljs.core.filterv.call(null,inst_12686,inst_12672);
var inst_12672__$1 = inst_12687;
var state_12702__$1 = (function (){var statearr_12717 = state_12702;
(statearr_12717[(10)] = inst_12672__$1);

return statearr_12717;
})();
var statearr_12718_12740 = state_12702__$1;
(statearr_12718_12740[(2)] = null);

(statearr_12718_12740[(1)] = (2));


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
});})(c__10610__auto___12730,out))
;
return ((function (switch__10545__auto__,c__10610__auto___12730,out){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12722 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12722[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12722[(1)] = (1));

return statearr_12722;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12702){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_12702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12723){if((e12723 instanceof Object)){
var ex__10549__auto__ = e12723;
var statearr_12724_12741 = state_12702;
(statearr_12724_12741[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12742 = state_12702;
state_12702 = G__12742;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___12730,out))
})();
var state__10612__auto__ = (function (){var statearr_12725 = f__10611__auto__.call(null);
(statearr_12725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___12730);

return statearr_12725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___12730,out))
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
var args12743 = [];
var len__7487__auto___12792 = arguments.length;
var i__7488__auto___12793 = (0);
while(true){
if((i__7488__auto___12793 < len__7487__auto___12792)){
args12743.push((arguments[i__7488__auto___12793]));

var G__12794 = (i__7488__auto___12793 + (1));
i__7488__auto___12793 = G__12794;
continue;
} else {
}
break;
}

var G__12745 = args12743.length;
switch (G__12745) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12743.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10610__auto___12796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___12796,out){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___12796,out){
return (function (state_12769){
var state_val_12770 = (state_12769[(1)]);
if((state_val_12770 === (7))){
var inst_12751 = (state_12769[(7)]);
var inst_12751__$1 = (state_12769[(2)]);
var inst_12752 = (inst_12751__$1 == null);
var inst_12753 = cljs.core.not.call(null,inst_12752);
var state_12769__$1 = (function (){var statearr_12771 = state_12769;
(statearr_12771[(7)] = inst_12751__$1);

return statearr_12771;
})();
if(inst_12753){
var statearr_12772_12797 = state_12769__$1;
(statearr_12772_12797[(1)] = (8));

} else {
var statearr_12773_12798 = state_12769__$1;
(statearr_12773_12798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (1))){
var inst_12746 = (0);
var state_12769__$1 = (function (){var statearr_12774 = state_12769;
(statearr_12774[(8)] = inst_12746);

return statearr_12774;
})();
var statearr_12775_12799 = state_12769__$1;
(statearr_12775_12799[(2)] = null);

(statearr_12775_12799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (4))){
var state_12769__$1 = state_12769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12769__$1,(7),ch);
} else {
if((state_val_12770 === (6))){
var inst_12764 = (state_12769[(2)]);
var state_12769__$1 = state_12769;
var statearr_12776_12800 = state_12769__$1;
(statearr_12776_12800[(2)] = inst_12764);

(statearr_12776_12800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (3))){
var inst_12766 = (state_12769[(2)]);
var inst_12767 = cljs.core.async.close_BANG_.call(null,out);
var state_12769__$1 = (function (){var statearr_12777 = state_12769;
(statearr_12777[(9)] = inst_12766);

return statearr_12777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12769__$1,inst_12767);
} else {
if((state_val_12770 === (2))){
var inst_12746 = (state_12769[(8)]);
var inst_12748 = (inst_12746 < n);
var state_12769__$1 = state_12769;
if(cljs.core.truth_(inst_12748)){
var statearr_12778_12801 = state_12769__$1;
(statearr_12778_12801[(1)] = (4));

} else {
var statearr_12779_12802 = state_12769__$1;
(statearr_12779_12802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (11))){
var inst_12746 = (state_12769[(8)]);
var inst_12756 = (state_12769[(2)]);
var inst_12757 = (inst_12746 + (1));
var inst_12746__$1 = inst_12757;
var state_12769__$1 = (function (){var statearr_12780 = state_12769;
(statearr_12780[(8)] = inst_12746__$1);

(statearr_12780[(10)] = inst_12756);

return statearr_12780;
})();
var statearr_12781_12803 = state_12769__$1;
(statearr_12781_12803[(2)] = null);

(statearr_12781_12803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (9))){
var state_12769__$1 = state_12769;
var statearr_12782_12804 = state_12769__$1;
(statearr_12782_12804[(2)] = null);

(statearr_12782_12804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (5))){
var state_12769__$1 = state_12769;
var statearr_12783_12805 = state_12769__$1;
(statearr_12783_12805[(2)] = null);

(statearr_12783_12805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (10))){
var inst_12761 = (state_12769[(2)]);
var state_12769__$1 = state_12769;
var statearr_12784_12806 = state_12769__$1;
(statearr_12784_12806[(2)] = inst_12761);

(statearr_12784_12806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12770 === (8))){
var inst_12751 = (state_12769[(7)]);
var state_12769__$1 = state_12769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12769__$1,(11),out,inst_12751);
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
});})(c__10610__auto___12796,out))
;
return ((function (switch__10545__auto__,c__10610__auto___12796,out){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12788[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12788[(1)] = (1));

return statearr_12788;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12769){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_12769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12789){if((e12789 instanceof Object)){
var ex__10549__auto__ = e12789;
var statearr_12790_12807 = state_12769;
(statearr_12790_12807[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12808 = state_12769;
state_12769 = G__12808;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___12796,out))
})();
var state__10612__auto__ = (function (){var statearr_12791 = f__10611__auto__.call(null);
(statearr_12791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___12796);

return statearr_12791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___12796,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12816 = (function (map_LT_,f,ch,meta12817){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12817 = meta12817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12818,meta12817__$1){
var self__ = this;
var _12818__$1 = this;
return (new cljs.core.async.t_cljs$core$async12816(self__.map_LT_,self__.f,self__.ch,meta12817__$1));
});

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12818){
var self__ = this;
var _12818__$1 = this;
return self__.meta12817;
});

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async12819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12819 = (function (map_LT_,f,ch,meta12817,_,fn1,meta12820){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta12817 = meta12817;
this._ = _;
this.fn1 = fn1;
this.meta12820 = meta12820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12821,meta12820__$1){
var self__ = this;
var _12821__$1 = this;
return (new cljs.core.async.t_cljs$core$async12819(self__.map_LT_,self__.f,self__.ch,self__.meta12817,self__._,self__.fn1,meta12820__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async12819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12821){
var self__ = this;
var _12821__$1 = this;
return self__.meta12820;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12819.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async12819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__12809_SHARP_){
return f1.call(null,(((p1__12809_SHARP_ == null))?null:self__.f.call(null,p1__12809_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async12819.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12817","meta12817",1253344164,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async12816","cljs.core.async/t_cljs$core$async12816",-1040726138,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta12820","meta12820",-1109955916,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async12819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12819";

cljs.core.async.t_cljs$core$async12819.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async12819");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async12819 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12819(map_LT___$1,f__$1,ch__$1,meta12817__$1,___$2,fn1__$1,meta12820){
return (new cljs.core.async.t_cljs$core$async12819(map_LT___$1,f__$1,ch__$1,meta12817__$1,___$2,fn1__$1,meta12820));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async12819(self__.map_LT_,self__.f,self__.ch,self__.meta12817,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6400__auto__ = ret;
if(cljs.core.truth_(and__6400__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6400__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12816.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async12816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12817","meta12817",1253344164,null)], null);
});

cljs.core.async.t_cljs$core$async12816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12816";

cljs.core.async.t_cljs$core$async12816.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async12816");
});

cljs.core.async.__GT_t_cljs$core$async12816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async12816(map_LT___$1,f__$1,ch__$1,meta12817){
return (new cljs.core.async.t_cljs$core$async12816(map_LT___$1,f__$1,ch__$1,meta12817));
});

}

return (new cljs.core.async.t_cljs$core$async12816(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async12825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12825 = (function (map_GT_,f,ch,meta12826){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta12826 = meta12826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12827,meta12826__$1){
var self__ = this;
var _12827__$1 = this;
return (new cljs.core.async.t_cljs$core$async12825(self__.map_GT_,self__.f,self__.ch,meta12826__$1));
});

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12827){
var self__ = this;
var _12827__$1 = this;
return self__.meta12826;
});

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async12825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12826","meta12826",-1215130290,null)], null);
});

cljs.core.async.t_cljs$core$async12825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12825";

cljs.core.async.t_cljs$core$async12825.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async12825");
});

cljs.core.async.__GT_t_cljs$core$async12825 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async12825(map_GT___$1,f__$1,ch__$1,meta12826){
return (new cljs.core.async.t_cljs$core$async12825(map_GT___$1,f__$1,ch__$1,meta12826));
});

}

return (new cljs.core.async.t_cljs$core$async12825(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async12831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12831 = (function (filter_GT_,p,ch,meta12832){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta12832 = meta12832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12833,meta12832__$1){
var self__ = this;
var _12833__$1 = this;
return (new cljs.core.async.t_cljs$core$async12831(self__.filter_GT_,self__.p,self__.ch,meta12832__$1));
});

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12833){
var self__ = this;
var _12833__$1 = this;
return self__.meta12832;
});

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async12831.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async12831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta12832","meta12832",893799258,null)], null);
});

cljs.core.async.t_cljs$core$async12831.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12831.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12831";

cljs.core.async.t_cljs$core$async12831.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cljs.core.async/t_cljs$core$async12831");
});

cljs.core.async.__GT_t_cljs$core$async12831 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async12831(filter_GT___$1,p__$1,ch__$1,meta12832){
return (new cljs.core.async.t_cljs$core$async12831(filter_GT___$1,p__$1,ch__$1,meta12832));
});

}

return (new cljs.core.async.t_cljs$core$async12831(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args12834 = [];
var len__7487__auto___12878 = arguments.length;
var i__7488__auto___12879 = (0);
while(true){
if((i__7488__auto___12879 < len__7487__auto___12878)){
args12834.push((arguments[i__7488__auto___12879]));

var G__12880 = (i__7488__auto___12879 + (1));
i__7488__auto___12879 = G__12880;
continue;
} else {
}
break;
}

var G__12836 = args12834.length;
switch (G__12836) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12834.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10610__auto___12882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___12882,out){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___12882,out){
return (function (state_12857){
var state_val_12858 = (state_12857[(1)]);
if((state_val_12858 === (7))){
var inst_12853 = (state_12857[(2)]);
var state_12857__$1 = state_12857;
var statearr_12859_12883 = state_12857__$1;
(statearr_12859_12883[(2)] = inst_12853);

(statearr_12859_12883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (1))){
var state_12857__$1 = state_12857;
var statearr_12860_12884 = state_12857__$1;
(statearr_12860_12884[(2)] = null);

(statearr_12860_12884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (4))){
var inst_12839 = (state_12857[(7)]);
var inst_12839__$1 = (state_12857[(2)]);
var inst_12840 = (inst_12839__$1 == null);
var state_12857__$1 = (function (){var statearr_12861 = state_12857;
(statearr_12861[(7)] = inst_12839__$1);

return statearr_12861;
})();
if(cljs.core.truth_(inst_12840)){
var statearr_12862_12885 = state_12857__$1;
(statearr_12862_12885[(1)] = (5));

} else {
var statearr_12863_12886 = state_12857__$1;
(statearr_12863_12886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (6))){
var inst_12839 = (state_12857[(7)]);
var inst_12844 = p.call(null,inst_12839);
var state_12857__$1 = state_12857;
if(cljs.core.truth_(inst_12844)){
var statearr_12864_12887 = state_12857__$1;
(statearr_12864_12887[(1)] = (8));

} else {
var statearr_12865_12888 = state_12857__$1;
(statearr_12865_12888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (3))){
var inst_12855 = (state_12857[(2)]);
var state_12857__$1 = state_12857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12857__$1,inst_12855);
} else {
if((state_val_12858 === (2))){
var state_12857__$1 = state_12857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12857__$1,(4),ch);
} else {
if((state_val_12858 === (11))){
var inst_12847 = (state_12857[(2)]);
var state_12857__$1 = state_12857;
var statearr_12866_12889 = state_12857__$1;
(statearr_12866_12889[(2)] = inst_12847);

(statearr_12866_12889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (9))){
var state_12857__$1 = state_12857;
var statearr_12867_12890 = state_12857__$1;
(statearr_12867_12890[(2)] = null);

(statearr_12867_12890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (5))){
var inst_12842 = cljs.core.async.close_BANG_.call(null,out);
var state_12857__$1 = state_12857;
var statearr_12868_12891 = state_12857__$1;
(statearr_12868_12891[(2)] = inst_12842);

(statearr_12868_12891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (10))){
var inst_12850 = (state_12857[(2)]);
var state_12857__$1 = (function (){var statearr_12869 = state_12857;
(statearr_12869[(8)] = inst_12850);

return statearr_12869;
})();
var statearr_12870_12892 = state_12857__$1;
(statearr_12870_12892[(2)] = null);

(statearr_12870_12892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12858 === (8))){
var inst_12839 = (state_12857[(7)]);
var state_12857__$1 = state_12857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12857__$1,(11),out,inst_12839);
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
});})(c__10610__auto___12882,out))
;
return ((function (switch__10545__auto__,c__10610__auto___12882,out){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_12874 = [null,null,null,null,null,null,null,null,null];
(statearr_12874[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_12874[(1)] = (1));

return statearr_12874;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_12857){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_12857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e12875){if((e12875 instanceof Object)){
var ex__10549__auto__ = e12875;
var statearr_12876_12893 = state_12857;
(statearr_12876_12893[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12894 = state_12857;
state_12857 = G__12894;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_12857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_12857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___12882,out))
})();
var state__10612__auto__ = (function (){var statearr_12877 = f__10611__auto__.call(null);
(statearr_12877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___12882);

return statearr_12877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___12882,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12895 = [];
var len__7487__auto___12898 = arguments.length;
var i__7488__auto___12899 = (0);
while(true){
if((i__7488__auto___12899 < len__7487__auto___12898)){
args12895.push((arguments[i__7488__auto___12899]));

var G__12900 = (i__7488__auto___12899 + (1));
i__7488__auto___12899 = G__12900;
continue;
} else {
}
break;
}

var G__12897 = args12895.length;
switch (G__12897) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12895.length)].join('')));

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
var c__10610__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto__){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto__){
return (function (state_13067){
var state_val_13068 = (state_13067[(1)]);
if((state_val_13068 === (7))){
var inst_13063 = (state_13067[(2)]);
var state_13067__$1 = state_13067;
var statearr_13069_13110 = state_13067__$1;
(statearr_13069_13110[(2)] = inst_13063);

(statearr_13069_13110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (20))){
var inst_13033 = (state_13067[(7)]);
var inst_13044 = (state_13067[(2)]);
var inst_13045 = cljs.core.next.call(null,inst_13033);
var inst_13019 = inst_13045;
var inst_13020 = null;
var inst_13021 = (0);
var inst_13022 = (0);
var state_13067__$1 = (function (){var statearr_13070 = state_13067;
(statearr_13070[(8)] = inst_13019);

(statearr_13070[(9)] = inst_13020);

(statearr_13070[(10)] = inst_13022);

(statearr_13070[(11)] = inst_13021);

(statearr_13070[(12)] = inst_13044);

return statearr_13070;
})();
var statearr_13071_13111 = state_13067__$1;
(statearr_13071_13111[(2)] = null);

(statearr_13071_13111[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (1))){
var state_13067__$1 = state_13067;
var statearr_13072_13112 = state_13067__$1;
(statearr_13072_13112[(2)] = null);

(statearr_13072_13112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (4))){
var inst_13008 = (state_13067[(13)]);
var inst_13008__$1 = (state_13067[(2)]);
var inst_13009 = (inst_13008__$1 == null);
var state_13067__$1 = (function (){var statearr_13073 = state_13067;
(statearr_13073[(13)] = inst_13008__$1);

return statearr_13073;
})();
if(cljs.core.truth_(inst_13009)){
var statearr_13074_13113 = state_13067__$1;
(statearr_13074_13113[(1)] = (5));

} else {
var statearr_13075_13114 = state_13067__$1;
(statearr_13075_13114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (15))){
var state_13067__$1 = state_13067;
var statearr_13079_13115 = state_13067__$1;
(statearr_13079_13115[(2)] = null);

(statearr_13079_13115[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (21))){
var state_13067__$1 = state_13067;
var statearr_13080_13116 = state_13067__$1;
(statearr_13080_13116[(2)] = null);

(statearr_13080_13116[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (13))){
var inst_13019 = (state_13067[(8)]);
var inst_13020 = (state_13067[(9)]);
var inst_13022 = (state_13067[(10)]);
var inst_13021 = (state_13067[(11)]);
var inst_13029 = (state_13067[(2)]);
var inst_13030 = (inst_13022 + (1));
var tmp13076 = inst_13019;
var tmp13077 = inst_13020;
var tmp13078 = inst_13021;
var inst_13019__$1 = tmp13076;
var inst_13020__$1 = tmp13077;
var inst_13021__$1 = tmp13078;
var inst_13022__$1 = inst_13030;
var state_13067__$1 = (function (){var statearr_13081 = state_13067;
(statearr_13081[(8)] = inst_13019__$1);

(statearr_13081[(9)] = inst_13020__$1);

(statearr_13081[(14)] = inst_13029);

(statearr_13081[(10)] = inst_13022__$1);

(statearr_13081[(11)] = inst_13021__$1);

return statearr_13081;
})();
var statearr_13082_13117 = state_13067__$1;
(statearr_13082_13117[(2)] = null);

(statearr_13082_13117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (22))){
var state_13067__$1 = state_13067;
var statearr_13083_13118 = state_13067__$1;
(statearr_13083_13118[(2)] = null);

(statearr_13083_13118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (6))){
var inst_13008 = (state_13067[(13)]);
var inst_13017 = f.call(null,inst_13008);
var inst_13018 = cljs.core.seq.call(null,inst_13017);
var inst_13019 = inst_13018;
var inst_13020 = null;
var inst_13021 = (0);
var inst_13022 = (0);
var state_13067__$1 = (function (){var statearr_13084 = state_13067;
(statearr_13084[(8)] = inst_13019);

(statearr_13084[(9)] = inst_13020);

(statearr_13084[(10)] = inst_13022);

(statearr_13084[(11)] = inst_13021);

return statearr_13084;
})();
var statearr_13085_13119 = state_13067__$1;
(statearr_13085_13119[(2)] = null);

(statearr_13085_13119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (17))){
var inst_13033 = (state_13067[(7)]);
var inst_13037 = cljs.core.chunk_first.call(null,inst_13033);
var inst_13038 = cljs.core.chunk_rest.call(null,inst_13033);
var inst_13039 = cljs.core.count.call(null,inst_13037);
var inst_13019 = inst_13038;
var inst_13020 = inst_13037;
var inst_13021 = inst_13039;
var inst_13022 = (0);
var state_13067__$1 = (function (){var statearr_13086 = state_13067;
(statearr_13086[(8)] = inst_13019);

(statearr_13086[(9)] = inst_13020);

(statearr_13086[(10)] = inst_13022);

(statearr_13086[(11)] = inst_13021);

return statearr_13086;
})();
var statearr_13087_13120 = state_13067__$1;
(statearr_13087_13120[(2)] = null);

(statearr_13087_13120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (3))){
var inst_13065 = (state_13067[(2)]);
var state_13067__$1 = state_13067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13067__$1,inst_13065);
} else {
if((state_val_13068 === (12))){
var inst_13053 = (state_13067[(2)]);
var state_13067__$1 = state_13067;
var statearr_13088_13121 = state_13067__$1;
(statearr_13088_13121[(2)] = inst_13053);

(statearr_13088_13121[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (2))){
var state_13067__$1 = state_13067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13067__$1,(4),in$);
} else {
if((state_val_13068 === (23))){
var inst_13061 = (state_13067[(2)]);
var state_13067__$1 = state_13067;
var statearr_13089_13122 = state_13067__$1;
(statearr_13089_13122[(2)] = inst_13061);

(statearr_13089_13122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (19))){
var inst_13048 = (state_13067[(2)]);
var state_13067__$1 = state_13067;
var statearr_13090_13123 = state_13067__$1;
(statearr_13090_13123[(2)] = inst_13048);

(statearr_13090_13123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (11))){
var inst_13019 = (state_13067[(8)]);
var inst_13033 = (state_13067[(7)]);
var inst_13033__$1 = cljs.core.seq.call(null,inst_13019);
var state_13067__$1 = (function (){var statearr_13091 = state_13067;
(statearr_13091[(7)] = inst_13033__$1);

return statearr_13091;
})();
if(inst_13033__$1){
var statearr_13092_13124 = state_13067__$1;
(statearr_13092_13124[(1)] = (14));

} else {
var statearr_13093_13125 = state_13067__$1;
(statearr_13093_13125[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (9))){
var inst_13055 = (state_13067[(2)]);
var inst_13056 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13067__$1 = (function (){var statearr_13094 = state_13067;
(statearr_13094[(15)] = inst_13055);

return statearr_13094;
})();
if(cljs.core.truth_(inst_13056)){
var statearr_13095_13126 = state_13067__$1;
(statearr_13095_13126[(1)] = (21));

} else {
var statearr_13096_13127 = state_13067__$1;
(statearr_13096_13127[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (5))){
var inst_13011 = cljs.core.async.close_BANG_.call(null,out);
var state_13067__$1 = state_13067;
var statearr_13097_13128 = state_13067__$1;
(statearr_13097_13128[(2)] = inst_13011);

(statearr_13097_13128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (14))){
var inst_13033 = (state_13067[(7)]);
var inst_13035 = cljs.core.chunked_seq_QMARK_.call(null,inst_13033);
var state_13067__$1 = state_13067;
if(inst_13035){
var statearr_13098_13129 = state_13067__$1;
(statearr_13098_13129[(1)] = (17));

} else {
var statearr_13099_13130 = state_13067__$1;
(statearr_13099_13130[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (16))){
var inst_13051 = (state_13067[(2)]);
var state_13067__$1 = state_13067;
var statearr_13100_13131 = state_13067__$1;
(statearr_13100_13131[(2)] = inst_13051);

(statearr_13100_13131[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13068 === (10))){
var inst_13020 = (state_13067[(9)]);
var inst_13022 = (state_13067[(10)]);
var inst_13027 = cljs.core._nth.call(null,inst_13020,inst_13022);
var state_13067__$1 = state_13067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13067__$1,(13),out,inst_13027);
} else {
if((state_val_13068 === (18))){
var inst_13033 = (state_13067[(7)]);
var inst_13042 = cljs.core.first.call(null,inst_13033);
var state_13067__$1 = state_13067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13067__$1,(20),out,inst_13042);
} else {
if((state_val_13068 === (8))){
var inst_13022 = (state_13067[(10)]);
var inst_13021 = (state_13067[(11)]);
var inst_13024 = (inst_13022 < inst_13021);
var inst_13025 = inst_13024;
var state_13067__$1 = state_13067;
if(cljs.core.truth_(inst_13025)){
var statearr_13101_13132 = state_13067__$1;
(statearr_13101_13132[(1)] = (10));

} else {
var statearr_13102_13133 = state_13067__$1;
(statearr_13102_13133[(1)] = (11));

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
});})(c__10610__auto__))
;
return ((function (switch__10545__auto__,c__10610__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____0 = (function (){
var statearr_13106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13106[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__);

(statearr_13106[(1)] = (1));

return statearr_13106;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____1 = (function (state_13067){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_13067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e13107){if((e13107 instanceof Object)){
var ex__10549__auto__ = e13107;
var statearr_13108_13134 = state_13067;
(statearr_13108_13134[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13135 = state_13067;
state_13067 = G__13135;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__ = function(state_13067){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____1.call(this,state_13067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10546__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto__))
})();
var state__10612__auto__ = (function (){var statearr_13109 = f__10611__auto__.call(null);
(statearr_13109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto__);

return statearr_13109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto__))
);

return c__10610__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13136 = [];
var len__7487__auto___13139 = arguments.length;
var i__7488__auto___13140 = (0);
while(true){
if((i__7488__auto___13140 < len__7487__auto___13139)){
args13136.push((arguments[i__7488__auto___13140]));

var G__13141 = (i__7488__auto___13140 + (1));
i__7488__auto___13140 = G__13141;
continue;
} else {
}
break;
}

var G__13138 = args13136.length;
switch (G__13138) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13136.length)].join('')));

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
var args13143 = [];
var len__7487__auto___13146 = arguments.length;
var i__7488__auto___13147 = (0);
while(true){
if((i__7488__auto___13147 < len__7487__auto___13146)){
args13143.push((arguments[i__7488__auto___13147]));

var G__13148 = (i__7488__auto___13147 + (1));
i__7488__auto___13147 = G__13148;
continue;
} else {
}
break;
}

var G__13145 = args13143.length;
switch (G__13145) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13143.length)].join('')));

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
var args13150 = [];
var len__7487__auto___13201 = arguments.length;
var i__7488__auto___13202 = (0);
while(true){
if((i__7488__auto___13202 < len__7487__auto___13201)){
args13150.push((arguments[i__7488__auto___13202]));

var G__13203 = (i__7488__auto___13202 + (1));
i__7488__auto___13202 = G__13203;
continue;
} else {
}
break;
}

var G__13152 = args13150.length;
switch (G__13152) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13150.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10610__auto___13205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___13205,out){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___13205,out){
return (function (state_13176){
var state_val_13177 = (state_13176[(1)]);
if((state_val_13177 === (7))){
var inst_13171 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13178_13206 = state_13176__$1;
(statearr_13178_13206[(2)] = inst_13171);

(statearr_13178_13206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (1))){
var inst_13153 = null;
var state_13176__$1 = (function (){var statearr_13179 = state_13176;
(statearr_13179[(7)] = inst_13153);

return statearr_13179;
})();
var statearr_13180_13207 = state_13176__$1;
(statearr_13180_13207[(2)] = null);

(statearr_13180_13207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (4))){
var inst_13156 = (state_13176[(8)]);
var inst_13156__$1 = (state_13176[(2)]);
var inst_13157 = (inst_13156__$1 == null);
var inst_13158 = cljs.core.not.call(null,inst_13157);
var state_13176__$1 = (function (){var statearr_13181 = state_13176;
(statearr_13181[(8)] = inst_13156__$1);

return statearr_13181;
})();
if(inst_13158){
var statearr_13182_13208 = state_13176__$1;
(statearr_13182_13208[(1)] = (5));

} else {
var statearr_13183_13209 = state_13176__$1;
(statearr_13183_13209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (6))){
var state_13176__$1 = state_13176;
var statearr_13184_13210 = state_13176__$1;
(statearr_13184_13210[(2)] = null);

(statearr_13184_13210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (3))){
var inst_13173 = (state_13176[(2)]);
var inst_13174 = cljs.core.async.close_BANG_.call(null,out);
var state_13176__$1 = (function (){var statearr_13185 = state_13176;
(statearr_13185[(9)] = inst_13173);

return statearr_13185;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13176__$1,inst_13174);
} else {
if((state_val_13177 === (2))){
var state_13176__$1 = state_13176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13176__$1,(4),ch);
} else {
if((state_val_13177 === (11))){
var inst_13156 = (state_13176[(8)]);
var inst_13165 = (state_13176[(2)]);
var inst_13153 = inst_13156;
var state_13176__$1 = (function (){var statearr_13186 = state_13176;
(statearr_13186[(10)] = inst_13165);

(statearr_13186[(7)] = inst_13153);

return statearr_13186;
})();
var statearr_13187_13211 = state_13176__$1;
(statearr_13187_13211[(2)] = null);

(statearr_13187_13211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (9))){
var inst_13156 = (state_13176[(8)]);
var state_13176__$1 = state_13176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13176__$1,(11),out,inst_13156);
} else {
if((state_val_13177 === (5))){
var inst_13153 = (state_13176[(7)]);
var inst_13156 = (state_13176[(8)]);
var inst_13160 = cljs.core._EQ_.call(null,inst_13156,inst_13153);
var state_13176__$1 = state_13176;
if(inst_13160){
var statearr_13189_13212 = state_13176__$1;
(statearr_13189_13212[(1)] = (8));

} else {
var statearr_13190_13213 = state_13176__$1;
(statearr_13190_13213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (10))){
var inst_13168 = (state_13176[(2)]);
var state_13176__$1 = state_13176;
var statearr_13191_13214 = state_13176__$1;
(statearr_13191_13214[(2)] = inst_13168);

(statearr_13191_13214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13177 === (8))){
var inst_13153 = (state_13176[(7)]);
var tmp13188 = inst_13153;
var inst_13153__$1 = tmp13188;
var state_13176__$1 = (function (){var statearr_13192 = state_13176;
(statearr_13192[(7)] = inst_13153__$1);

return statearr_13192;
})();
var statearr_13193_13215 = state_13176__$1;
(statearr_13193_13215[(2)] = null);

(statearr_13193_13215[(1)] = (2));


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
});})(c__10610__auto___13205,out))
;
return ((function (switch__10545__auto__,c__10610__auto___13205,out){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_13197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13197[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_13197[(1)] = (1));

return statearr_13197;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_13176){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_13176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e13198){if((e13198 instanceof Object)){
var ex__10549__auto__ = e13198;
var statearr_13199_13216 = state_13176;
(statearr_13199_13216[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13217 = state_13176;
state_13176 = G__13217;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_13176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_13176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___13205,out))
})();
var state__10612__auto__ = (function (){var statearr_13200 = f__10611__auto__.call(null);
(statearr_13200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___13205);

return statearr_13200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___13205,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13218 = [];
var len__7487__auto___13288 = arguments.length;
var i__7488__auto___13289 = (0);
while(true){
if((i__7488__auto___13289 < len__7487__auto___13288)){
args13218.push((arguments[i__7488__auto___13289]));

var G__13290 = (i__7488__auto___13289 + (1));
i__7488__auto___13289 = G__13290;
continue;
} else {
}
break;
}

var G__13220 = args13218.length;
switch (G__13220) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13218.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10610__auto___13292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___13292,out){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___13292,out){
return (function (state_13258){
var state_val_13259 = (state_13258[(1)]);
if((state_val_13259 === (7))){
var inst_13254 = (state_13258[(2)]);
var state_13258__$1 = state_13258;
var statearr_13260_13293 = state_13258__$1;
(statearr_13260_13293[(2)] = inst_13254);

(statearr_13260_13293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (1))){
var inst_13221 = (new Array(n));
var inst_13222 = inst_13221;
var inst_13223 = (0);
var state_13258__$1 = (function (){var statearr_13261 = state_13258;
(statearr_13261[(7)] = inst_13223);

(statearr_13261[(8)] = inst_13222);

return statearr_13261;
})();
var statearr_13262_13294 = state_13258__$1;
(statearr_13262_13294[(2)] = null);

(statearr_13262_13294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (4))){
var inst_13226 = (state_13258[(9)]);
var inst_13226__$1 = (state_13258[(2)]);
var inst_13227 = (inst_13226__$1 == null);
var inst_13228 = cljs.core.not.call(null,inst_13227);
var state_13258__$1 = (function (){var statearr_13263 = state_13258;
(statearr_13263[(9)] = inst_13226__$1);

return statearr_13263;
})();
if(inst_13228){
var statearr_13264_13295 = state_13258__$1;
(statearr_13264_13295[(1)] = (5));

} else {
var statearr_13265_13296 = state_13258__$1;
(statearr_13265_13296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (15))){
var inst_13248 = (state_13258[(2)]);
var state_13258__$1 = state_13258;
var statearr_13266_13297 = state_13258__$1;
(statearr_13266_13297[(2)] = inst_13248);

(statearr_13266_13297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (13))){
var state_13258__$1 = state_13258;
var statearr_13267_13298 = state_13258__$1;
(statearr_13267_13298[(2)] = null);

(statearr_13267_13298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (6))){
var inst_13223 = (state_13258[(7)]);
var inst_13244 = (inst_13223 > (0));
var state_13258__$1 = state_13258;
if(cljs.core.truth_(inst_13244)){
var statearr_13268_13299 = state_13258__$1;
(statearr_13268_13299[(1)] = (12));

} else {
var statearr_13269_13300 = state_13258__$1;
(statearr_13269_13300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (3))){
var inst_13256 = (state_13258[(2)]);
var state_13258__$1 = state_13258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13258__$1,inst_13256);
} else {
if((state_val_13259 === (12))){
var inst_13222 = (state_13258[(8)]);
var inst_13246 = cljs.core.vec.call(null,inst_13222);
var state_13258__$1 = state_13258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13258__$1,(15),out,inst_13246);
} else {
if((state_val_13259 === (2))){
var state_13258__$1 = state_13258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13258__$1,(4),ch);
} else {
if((state_val_13259 === (11))){
var inst_13238 = (state_13258[(2)]);
var inst_13239 = (new Array(n));
var inst_13222 = inst_13239;
var inst_13223 = (0);
var state_13258__$1 = (function (){var statearr_13270 = state_13258;
(statearr_13270[(7)] = inst_13223);

(statearr_13270[(10)] = inst_13238);

(statearr_13270[(8)] = inst_13222);

return statearr_13270;
})();
var statearr_13271_13301 = state_13258__$1;
(statearr_13271_13301[(2)] = null);

(statearr_13271_13301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (9))){
var inst_13222 = (state_13258[(8)]);
var inst_13236 = cljs.core.vec.call(null,inst_13222);
var state_13258__$1 = state_13258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13258__$1,(11),out,inst_13236);
} else {
if((state_val_13259 === (5))){
var inst_13223 = (state_13258[(7)]);
var inst_13222 = (state_13258[(8)]);
var inst_13231 = (state_13258[(11)]);
var inst_13226 = (state_13258[(9)]);
var inst_13230 = (inst_13222[inst_13223] = inst_13226);
var inst_13231__$1 = (inst_13223 + (1));
var inst_13232 = (inst_13231__$1 < n);
var state_13258__$1 = (function (){var statearr_13272 = state_13258;
(statearr_13272[(11)] = inst_13231__$1);

(statearr_13272[(12)] = inst_13230);

return statearr_13272;
})();
if(cljs.core.truth_(inst_13232)){
var statearr_13273_13302 = state_13258__$1;
(statearr_13273_13302[(1)] = (8));

} else {
var statearr_13274_13303 = state_13258__$1;
(statearr_13274_13303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (14))){
var inst_13251 = (state_13258[(2)]);
var inst_13252 = cljs.core.async.close_BANG_.call(null,out);
var state_13258__$1 = (function (){var statearr_13276 = state_13258;
(statearr_13276[(13)] = inst_13251);

return statearr_13276;
})();
var statearr_13277_13304 = state_13258__$1;
(statearr_13277_13304[(2)] = inst_13252);

(statearr_13277_13304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (10))){
var inst_13242 = (state_13258[(2)]);
var state_13258__$1 = state_13258;
var statearr_13278_13305 = state_13258__$1;
(statearr_13278_13305[(2)] = inst_13242);

(statearr_13278_13305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13259 === (8))){
var inst_13222 = (state_13258[(8)]);
var inst_13231 = (state_13258[(11)]);
var tmp13275 = inst_13222;
var inst_13222__$1 = tmp13275;
var inst_13223 = inst_13231;
var state_13258__$1 = (function (){var statearr_13279 = state_13258;
(statearr_13279[(7)] = inst_13223);

(statearr_13279[(8)] = inst_13222__$1);

return statearr_13279;
})();
var statearr_13280_13306 = state_13258__$1;
(statearr_13280_13306[(2)] = null);

(statearr_13280_13306[(1)] = (2));


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
});})(c__10610__auto___13292,out))
;
return ((function (switch__10545__auto__,c__10610__auto___13292,out){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_13284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13284[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_13284[(1)] = (1));

return statearr_13284;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_13258){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_13258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e13285){if((e13285 instanceof Object)){
var ex__10549__auto__ = e13285;
var statearr_13286_13307 = state_13258;
(statearr_13286_13307[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13308 = state_13258;
state_13258 = G__13308;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_13258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_13258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___13292,out))
})();
var state__10612__auto__ = (function (){var statearr_13287 = f__10611__auto__.call(null);
(statearr_13287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___13292);

return statearr_13287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___13292,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13309 = [];
var len__7487__auto___13383 = arguments.length;
var i__7488__auto___13384 = (0);
while(true){
if((i__7488__auto___13384 < len__7487__auto___13383)){
args13309.push((arguments[i__7488__auto___13384]));

var G__13385 = (i__7488__auto___13384 + (1));
i__7488__auto___13384 = G__13385;
continue;
} else {
}
break;
}

var G__13311 = args13309.length;
switch (G__13311) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13309.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10610__auto___13387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10610__auto___13387,out){
return (function (){
var f__10611__auto__ = (function (){var switch__10545__auto__ = ((function (c__10610__auto___13387,out){
return (function (state_13353){
var state_val_13354 = (state_13353[(1)]);
if((state_val_13354 === (7))){
var inst_13349 = (state_13353[(2)]);
var state_13353__$1 = state_13353;
var statearr_13355_13388 = state_13353__$1;
(statearr_13355_13388[(2)] = inst_13349);

(statearr_13355_13388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (1))){
var inst_13312 = [];
var inst_13313 = inst_13312;
var inst_13314 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13353__$1 = (function (){var statearr_13356 = state_13353;
(statearr_13356[(7)] = inst_13313);

(statearr_13356[(8)] = inst_13314);

return statearr_13356;
})();
var statearr_13357_13389 = state_13353__$1;
(statearr_13357_13389[(2)] = null);

(statearr_13357_13389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (4))){
var inst_13317 = (state_13353[(9)]);
var inst_13317__$1 = (state_13353[(2)]);
var inst_13318 = (inst_13317__$1 == null);
var inst_13319 = cljs.core.not.call(null,inst_13318);
var state_13353__$1 = (function (){var statearr_13358 = state_13353;
(statearr_13358[(9)] = inst_13317__$1);

return statearr_13358;
})();
if(inst_13319){
var statearr_13359_13390 = state_13353__$1;
(statearr_13359_13390[(1)] = (5));

} else {
var statearr_13360_13391 = state_13353__$1;
(statearr_13360_13391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (15))){
var inst_13343 = (state_13353[(2)]);
var state_13353__$1 = state_13353;
var statearr_13361_13392 = state_13353__$1;
(statearr_13361_13392[(2)] = inst_13343);

(statearr_13361_13392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (13))){
var state_13353__$1 = state_13353;
var statearr_13362_13393 = state_13353__$1;
(statearr_13362_13393[(2)] = null);

(statearr_13362_13393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (6))){
var inst_13313 = (state_13353[(7)]);
var inst_13338 = inst_13313.length;
var inst_13339 = (inst_13338 > (0));
var state_13353__$1 = state_13353;
if(cljs.core.truth_(inst_13339)){
var statearr_13363_13394 = state_13353__$1;
(statearr_13363_13394[(1)] = (12));

} else {
var statearr_13364_13395 = state_13353__$1;
(statearr_13364_13395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (3))){
var inst_13351 = (state_13353[(2)]);
var state_13353__$1 = state_13353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13353__$1,inst_13351);
} else {
if((state_val_13354 === (12))){
var inst_13313 = (state_13353[(7)]);
var inst_13341 = cljs.core.vec.call(null,inst_13313);
var state_13353__$1 = state_13353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13353__$1,(15),out,inst_13341);
} else {
if((state_val_13354 === (2))){
var state_13353__$1 = state_13353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13353__$1,(4),ch);
} else {
if((state_val_13354 === (11))){
var inst_13317 = (state_13353[(9)]);
var inst_13321 = (state_13353[(10)]);
var inst_13331 = (state_13353[(2)]);
var inst_13332 = [];
var inst_13333 = inst_13332.push(inst_13317);
var inst_13313 = inst_13332;
var inst_13314 = inst_13321;
var state_13353__$1 = (function (){var statearr_13365 = state_13353;
(statearr_13365[(7)] = inst_13313);

(statearr_13365[(11)] = inst_13333);

(statearr_13365[(12)] = inst_13331);

(statearr_13365[(8)] = inst_13314);

return statearr_13365;
})();
var statearr_13366_13396 = state_13353__$1;
(statearr_13366_13396[(2)] = null);

(statearr_13366_13396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (9))){
var inst_13313 = (state_13353[(7)]);
var inst_13329 = cljs.core.vec.call(null,inst_13313);
var state_13353__$1 = state_13353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13353__$1,(11),out,inst_13329);
} else {
if((state_val_13354 === (5))){
var inst_13317 = (state_13353[(9)]);
var inst_13321 = (state_13353[(10)]);
var inst_13314 = (state_13353[(8)]);
var inst_13321__$1 = f.call(null,inst_13317);
var inst_13322 = cljs.core._EQ_.call(null,inst_13321__$1,inst_13314);
var inst_13323 = cljs.core.keyword_identical_QMARK_.call(null,inst_13314,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13324 = (inst_13322) || (inst_13323);
var state_13353__$1 = (function (){var statearr_13367 = state_13353;
(statearr_13367[(10)] = inst_13321__$1);

return statearr_13367;
})();
if(cljs.core.truth_(inst_13324)){
var statearr_13368_13397 = state_13353__$1;
(statearr_13368_13397[(1)] = (8));

} else {
var statearr_13369_13398 = state_13353__$1;
(statearr_13369_13398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (14))){
var inst_13346 = (state_13353[(2)]);
var inst_13347 = cljs.core.async.close_BANG_.call(null,out);
var state_13353__$1 = (function (){var statearr_13371 = state_13353;
(statearr_13371[(13)] = inst_13346);

return statearr_13371;
})();
var statearr_13372_13399 = state_13353__$1;
(statearr_13372_13399[(2)] = inst_13347);

(statearr_13372_13399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (10))){
var inst_13336 = (state_13353[(2)]);
var state_13353__$1 = state_13353;
var statearr_13373_13400 = state_13353__$1;
(statearr_13373_13400[(2)] = inst_13336);

(statearr_13373_13400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13354 === (8))){
var inst_13313 = (state_13353[(7)]);
var inst_13317 = (state_13353[(9)]);
var inst_13321 = (state_13353[(10)]);
var inst_13326 = inst_13313.push(inst_13317);
var tmp13370 = inst_13313;
var inst_13313__$1 = tmp13370;
var inst_13314 = inst_13321;
var state_13353__$1 = (function (){var statearr_13374 = state_13353;
(statearr_13374[(7)] = inst_13313__$1);

(statearr_13374[(8)] = inst_13314);

(statearr_13374[(14)] = inst_13326);

return statearr_13374;
})();
var statearr_13375_13401 = state_13353__$1;
(statearr_13375_13401[(2)] = null);

(statearr_13375_13401[(1)] = (2));


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
});})(c__10610__auto___13387,out))
;
return ((function (switch__10545__auto__,c__10610__auto___13387,out){
return (function() {
var cljs$core$async$state_machine__10546__auto__ = null;
var cljs$core$async$state_machine__10546__auto____0 = (function (){
var statearr_13379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13379[(0)] = cljs$core$async$state_machine__10546__auto__);

(statearr_13379[(1)] = (1));

return statearr_13379;
});
var cljs$core$async$state_machine__10546__auto____1 = (function (state_13353){
while(true){
var ret_value__10547__auto__ = (function (){try{while(true){
var result__10548__auto__ = switch__10545__auto__.call(null,state_13353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10548__auto__;
}
break;
}
}catch (e13380){if((e13380 instanceof Object)){
var ex__10549__auto__ = e13380;
var statearr_13381_13402 = state_13353;
(statearr_13381_13402[(5)] = ex__10549__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10547__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13403 = state_13353;
state_13353 = G__13403;
continue;
} else {
return ret_value__10547__auto__;
}
break;
}
});
cljs$core$async$state_machine__10546__auto__ = function(state_13353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10546__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10546__auto____1.call(this,state_13353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10546__auto____0;
cljs$core$async$state_machine__10546__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10546__auto____1;
return cljs$core$async$state_machine__10546__auto__;
})()
;})(switch__10545__auto__,c__10610__auto___13387,out))
})();
var state__10612__auto__ = (function (){var statearr_13382 = f__10611__auto__.call(null);
(statearr_13382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10610__auto___13387);

return statearr_13382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10612__auto__);
});})(c__10610__auto___13387,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


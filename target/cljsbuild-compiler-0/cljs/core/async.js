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
var args9606 = [];
var len__7214__auto___9612 = arguments.length;
var i__7215__auto___9613 = (0);
while(true){
if((i__7215__auto___9613 < len__7214__auto___9612)){
args9606.push((arguments[i__7215__auto___9613]));

var G__9614 = (i__7215__auto___9613 + (1));
i__7215__auto___9613 = G__9614;
continue;
} else {
}
break;
}

var G__9608 = args9606.length;
switch (G__9608) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9606.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9609 = (function (f,blockable,meta9610){
this.f = f;
this.blockable = blockable;
this.meta9610 = meta9610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9611,meta9610__$1){
var self__ = this;
var _9611__$1 = this;
return (new cljs.core.async.t_cljs$core$async9609(self__.f,self__.blockable,meta9610__$1));
});

cljs.core.async.t_cljs$core$async9609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9611){
var self__ = this;
var _9611__$1 = this;
return self__.meta9610;
});

cljs.core.async.t_cljs$core$async9609.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9610","meta9610",1280073027,null)], null);
});

cljs.core.async.t_cljs$core$async9609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9609";

cljs.core.async.t_cljs$core$async9609.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9609");
});

cljs.core.async.__GT_t_cljs$core$async9609 = (function cljs$core$async$__GT_t_cljs$core$async9609(f__$1,blockable__$1,meta9610){
return (new cljs.core.async.t_cljs$core$async9609(f__$1,blockable__$1,meta9610));
});

}

return (new cljs.core.async.t_cljs$core$async9609(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args9618 = [];
var len__7214__auto___9621 = arguments.length;
var i__7215__auto___9622 = (0);
while(true){
if((i__7215__auto___9622 < len__7214__auto___9621)){
args9618.push((arguments[i__7215__auto___9622]));

var G__9623 = (i__7215__auto___9622 + (1));
i__7215__auto___9622 = G__9623;
continue;
} else {
}
break;
}

var G__9620 = args9618.length;
switch (G__9620) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9618.length)].join('')));

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
var args9625 = [];
var len__7214__auto___9628 = arguments.length;
var i__7215__auto___9629 = (0);
while(true){
if((i__7215__auto___9629 < len__7214__auto___9628)){
args9625.push((arguments[i__7215__auto___9629]));

var G__9630 = (i__7215__auto___9629 + (1));
i__7215__auto___9629 = G__9630;
continue;
} else {
}
break;
}

var G__9627 = args9625.length;
switch (G__9627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9625.length)].join('')));

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
var args9632 = [];
var len__7214__auto___9635 = arguments.length;
var i__7215__auto___9636 = (0);
while(true){
if((i__7215__auto___9636 < len__7214__auto___9635)){
args9632.push((arguments[i__7215__auto___9636]));

var G__9637 = (i__7215__auto___9636 + (1));
i__7215__auto___9636 = G__9637;
continue;
} else {
}
break;
}

var G__9634 = args9632.length;
switch (G__9634) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9632.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9639 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9639);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9639,ret){
return (function (){
return fn1.call(null,val_9639);
});})(val_9639,ret))
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
var args9640 = [];
var len__7214__auto___9643 = arguments.length;
var i__7215__auto___9644 = (0);
while(true){
if((i__7215__auto___9644 < len__7214__auto___9643)){
args9640.push((arguments[i__7215__auto___9644]));

var G__9645 = (i__7215__auto___9644 + (1));
i__7215__auto___9644 = G__9645;
continue;
} else {
}
break;
}

var G__9642 = args9640.length;
switch (G__9642) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9640.length)].join('')));

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
var n__7059__auto___9647 = n;
var x_9648 = (0);
while(true){
if((x_9648 < n__7059__auto___9647)){
(a[x_9648] = (0));

var G__9649 = (x_9648 + (1));
x_9648 = G__9649;
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

var G__9650 = (i + (1));
i = G__9650;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9654 = (function (alt_flag,flag,meta9655){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9655 = meta9655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9656,meta9655__$1){
var self__ = this;
var _9656__$1 = this;
return (new cljs.core.async.t_cljs$core$async9654(self__.alt_flag,self__.flag,meta9655__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9656){
var self__ = this;
var _9656__$1 = this;
return self__.meta9655;
});})(flag))
;

cljs.core.async.t_cljs$core$async9654.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9654.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9655","meta9655",1243284618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9654";

cljs.core.async.t_cljs$core$async9654.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9654");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9654 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9654(alt_flag__$1,flag__$1,meta9655){
return (new cljs.core.async.t_cljs$core$async9654(alt_flag__$1,flag__$1,meta9655));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9654(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9660 = (function (alt_handler,flag,cb,meta9661){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9661 = meta9661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9662,meta9661__$1){
var self__ = this;
var _9662__$1 = this;
return (new cljs.core.async.t_cljs$core$async9660(self__.alt_handler,self__.flag,self__.cb,meta9661__$1));
});

cljs.core.async.t_cljs$core$async9660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9662){
var self__ = this;
var _9662__$1 = this;
return self__.meta9661;
});

cljs.core.async.t_cljs$core$async9660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9661","meta9661",-1803265159,null)], null);
});

cljs.core.async.t_cljs$core$async9660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9660";

cljs.core.async.t_cljs$core$async9660.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async9660");
});

cljs.core.async.__GT_t_cljs$core$async9660 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9660(alt_handler__$1,flag__$1,cb__$1,meta9661){
return (new cljs.core.async.t_cljs$core$async9660(alt_handler__$1,flag__$1,cb__$1,meta9661));
});

}

return (new cljs.core.async.t_cljs$core$async9660(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9663_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9664_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9664_SHARP_,port], null));
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
var G__9665 = (i + (1));
i = G__9665;
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
var len__7214__auto___9671 = arguments.length;
var i__7215__auto___9672 = (0);
while(true){
if((i__7215__auto___9672 < len__7214__auto___9671)){
args__7221__auto__.push((arguments[i__7215__auto___9672]));

var G__9673 = (i__7215__auto___9672 + (1));
i__7215__auto___9672 = G__9673;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9668){
var map__9669 = p__9668;
var map__9669__$1 = ((((!((map__9669 == null)))?((((map__9669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9669):map__9669);
var opts = map__9669__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9666){
var G__9667 = cljs.core.first.call(null,seq9666);
var seq9666__$1 = cljs.core.next.call(null,seq9666);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9667,seq9666__$1);
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
var args9674 = [];
var len__7214__auto___9724 = arguments.length;
var i__7215__auto___9725 = (0);
while(true){
if((i__7215__auto___9725 < len__7214__auto___9724)){
args9674.push((arguments[i__7215__auto___9725]));

var G__9726 = (i__7215__auto___9725 + (1));
i__7215__auto___9725 = G__9726;
continue;
} else {
}
break;
}

var G__9676 = args9674.length;
switch (G__9676) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9674.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9561__auto___9728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___9728){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___9728){
return (function (state_9700){
var state_val_9701 = (state_9700[(1)]);
if((state_val_9701 === (7))){
var inst_9696 = (state_9700[(2)]);
var state_9700__$1 = state_9700;
var statearr_9702_9729 = state_9700__$1;
(statearr_9702_9729[(2)] = inst_9696);

(statearr_9702_9729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (1))){
var state_9700__$1 = state_9700;
var statearr_9703_9730 = state_9700__$1;
(statearr_9703_9730[(2)] = null);

(statearr_9703_9730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (4))){
var inst_9679 = (state_9700[(7)]);
var inst_9679__$1 = (state_9700[(2)]);
var inst_9680 = (inst_9679__$1 == null);
var state_9700__$1 = (function (){var statearr_9704 = state_9700;
(statearr_9704[(7)] = inst_9679__$1);

return statearr_9704;
})();
if(cljs.core.truth_(inst_9680)){
var statearr_9705_9731 = state_9700__$1;
(statearr_9705_9731[(1)] = (5));

} else {
var statearr_9706_9732 = state_9700__$1;
(statearr_9706_9732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (13))){
var state_9700__$1 = state_9700;
var statearr_9707_9733 = state_9700__$1;
(statearr_9707_9733[(2)] = null);

(statearr_9707_9733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (6))){
var inst_9679 = (state_9700[(7)]);
var state_9700__$1 = state_9700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9700__$1,(11),to,inst_9679);
} else {
if((state_val_9701 === (3))){
var inst_9698 = (state_9700[(2)]);
var state_9700__$1 = state_9700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9700__$1,inst_9698);
} else {
if((state_val_9701 === (12))){
var state_9700__$1 = state_9700;
var statearr_9708_9734 = state_9700__$1;
(statearr_9708_9734[(2)] = null);

(statearr_9708_9734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (2))){
var state_9700__$1 = state_9700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9700__$1,(4),from);
} else {
if((state_val_9701 === (11))){
var inst_9689 = (state_9700[(2)]);
var state_9700__$1 = state_9700;
if(cljs.core.truth_(inst_9689)){
var statearr_9709_9735 = state_9700__$1;
(statearr_9709_9735[(1)] = (12));

} else {
var statearr_9710_9736 = state_9700__$1;
(statearr_9710_9736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (9))){
var state_9700__$1 = state_9700;
var statearr_9711_9737 = state_9700__$1;
(statearr_9711_9737[(2)] = null);

(statearr_9711_9737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (5))){
var state_9700__$1 = state_9700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9712_9738 = state_9700__$1;
(statearr_9712_9738[(1)] = (8));

} else {
var statearr_9713_9739 = state_9700__$1;
(statearr_9713_9739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (14))){
var inst_9694 = (state_9700[(2)]);
var state_9700__$1 = state_9700;
var statearr_9714_9740 = state_9700__$1;
(statearr_9714_9740[(2)] = inst_9694);

(statearr_9714_9740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (10))){
var inst_9686 = (state_9700[(2)]);
var state_9700__$1 = state_9700;
var statearr_9715_9741 = state_9700__$1;
(statearr_9715_9741[(2)] = inst_9686);

(statearr_9715_9741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9701 === (8))){
var inst_9683 = cljs.core.async.close_BANG_.call(null,to);
var state_9700__$1 = state_9700;
var statearr_9716_9742 = state_9700__$1;
(statearr_9716_9742[(2)] = inst_9683);

(statearr_9716_9742[(1)] = (10));


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
});})(c__9561__auto___9728))
;
return ((function (switch__9496__auto__,c__9561__auto___9728){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_9720 = [null,null,null,null,null,null,null,null];
(statearr_9720[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_9720[(1)] = (1));

return statearr_9720;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_9700){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_9700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e9721){if((e9721 instanceof Object)){
var ex__9500__auto__ = e9721;
var statearr_9722_9743 = state_9700;
(statearr_9722_9743[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9744 = state_9700;
state_9700 = G__9744;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_9700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_9700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___9728))
})();
var state__9563__auto__ = (function (){var statearr_9723 = f__9562__auto__.call(null);
(statearr_9723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___9728);

return statearr_9723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___9728))
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
return (function (p__9928){
var vec__9929 = p__9928;
var v = cljs.core.nth.call(null,vec__9929,(0),null);
var p = cljs.core.nth.call(null,vec__9929,(1),null);
var job = vec__9929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9561__auto___10111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___10111,res,vec__9929,v,p,job,jobs,results){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___10111,res,vec__9929,v,p,job,jobs,results){
return (function (state_9934){
var state_val_9935 = (state_9934[(1)]);
if((state_val_9935 === (1))){
var state_9934__$1 = state_9934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9934__$1,(2),res,v);
} else {
if((state_val_9935 === (2))){
var inst_9931 = (state_9934[(2)]);
var inst_9932 = cljs.core.async.close_BANG_.call(null,res);
var state_9934__$1 = (function (){var statearr_9936 = state_9934;
(statearr_9936[(7)] = inst_9931);

return statearr_9936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9934__$1,inst_9932);
} else {
return null;
}
}
});})(c__9561__auto___10111,res,vec__9929,v,p,job,jobs,results))
;
return ((function (switch__9496__auto__,c__9561__auto___10111,res,vec__9929,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0 = (function (){
var statearr_9940 = [null,null,null,null,null,null,null,null];
(statearr_9940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__);

(statearr_9940[(1)] = (1));

return statearr_9940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1 = (function (state_9934){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_9934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e9941){if((e9941 instanceof Object)){
var ex__9500__auto__ = e9941;
var statearr_9942_10112 = state_9934;
(statearr_9942_10112[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10113 = state_9934;
state_9934 = G__10113;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = function(state_9934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1.call(this,state_9934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___10111,res,vec__9929,v,p,job,jobs,results))
})();
var state__9563__auto__ = (function (){var statearr_9943 = f__9562__auto__.call(null);
(statearr_9943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___10111);

return statearr_9943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___10111,res,vec__9929,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9944){
var vec__9945 = p__9944;
var v = cljs.core.nth.call(null,vec__9945,(0),null);
var p = cljs.core.nth.call(null,vec__9945,(1),null);
var job = vec__9945;
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
var n__7059__auto___10114 = n;
var __10115 = (0);
while(true){
if((__10115 < n__7059__auto___10114)){
var G__9946_10116 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9946_10116) {
case "compute":
var c__9561__auto___10118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10115,c__9561__auto___10118,G__9946_10116,n__7059__auto___10114,jobs,results,process,async){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (__10115,c__9561__auto___10118,G__9946_10116,n__7059__auto___10114,jobs,results,process,async){
return (function (state_9959){
var state_val_9960 = (state_9959[(1)]);
if((state_val_9960 === (1))){
var state_9959__$1 = state_9959;
var statearr_9961_10119 = state_9959__$1;
(statearr_9961_10119[(2)] = null);

(statearr_9961_10119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9960 === (2))){
var state_9959__$1 = state_9959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9959__$1,(4),jobs);
} else {
if((state_val_9960 === (3))){
var inst_9957 = (state_9959[(2)]);
var state_9959__$1 = state_9959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9959__$1,inst_9957);
} else {
if((state_val_9960 === (4))){
var inst_9949 = (state_9959[(2)]);
var inst_9950 = process.call(null,inst_9949);
var state_9959__$1 = state_9959;
if(cljs.core.truth_(inst_9950)){
var statearr_9962_10120 = state_9959__$1;
(statearr_9962_10120[(1)] = (5));

} else {
var statearr_9963_10121 = state_9959__$1;
(statearr_9963_10121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9960 === (5))){
var state_9959__$1 = state_9959;
var statearr_9964_10122 = state_9959__$1;
(statearr_9964_10122[(2)] = null);

(statearr_9964_10122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9960 === (6))){
var state_9959__$1 = state_9959;
var statearr_9965_10123 = state_9959__$1;
(statearr_9965_10123[(2)] = null);

(statearr_9965_10123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9960 === (7))){
var inst_9955 = (state_9959[(2)]);
var state_9959__$1 = state_9959;
var statearr_9966_10124 = state_9959__$1;
(statearr_9966_10124[(2)] = inst_9955);

(statearr_9966_10124[(1)] = (3));


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
});})(__10115,c__9561__auto___10118,G__9946_10116,n__7059__auto___10114,jobs,results,process,async))
;
return ((function (__10115,switch__9496__auto__,c__9561__auto___10118,G__9946_10116,n__7059__auto___10114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0 = (function (){
var statearr_9970 = [null,null,null,null,null,null,null];
(statearr_9970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__);

(statearr_9970[(1)] = (1));

return statearr_9970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1 = (function (state_9959){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_9959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e9971){if((e9971 instanceof Object)){
var ex__9500__auto__ = e9971;
var statearr_9972_10125 = state_9959;
(statearr_9972_10125[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10126 = state_9959;
state_9959 = G__10126;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = function(state_9959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1.call(this,state_9959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__;
})()
;})(__10115,switch__9496__auto__,c__9561__auto___10118,G__9946_10116,n__7059__auto___10114,jobs,results,process,async))
})();
var state__9563__auto__ = (function (){var statearr_9973 = f__9562__auto__.call(null);
(statearr_9973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___10118);

return statearr_9973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(__10115,c__9561__auto___10118,G__9946_10116,n__7059__auto___10114,jobs,results,process,async))
);


break;
case "async":
var c__9561__auto___10127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10115,c__9561__auto___10127,G__9946_10116,n__7059__auto___10114,jobs,results,process,async){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (__10115,c__9561__auto___10127,G__9946_10116,n__7059__auto___10114,jobs,results,process,async){
return (function (state_9986){
var state_val_9987 = (state_9986[(1)]);
if((state_val_9987 === (1))){
var state_9986__$1 = state_9986;
var statearr_9988_10128 = state_9986__$1;
(statearr_9988_10128[(2)] = null);

(statearr_9988_10128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (2))){
var state_9986__$1 = state_9986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9986__$1,(4),jobs);
} else {
if((state_val_9987 === (3))){
var inst_9984 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9986__$1,inst_9984);
} else {
if((state_val_9987 === (4))){
var inst_9976 = (state_9986[(2)]);
var inst_9977 = async.call(null,inst_9976);
var state_9986__$1 = state_9986;
if(cljs.core.truth_(inst_9977)){
var statearr_9989_10129 = state_9986__$1;
(statearr_9989_10129[(1)] = (5));

} else {
var statearr_9990_10130 = state_9986__$1;
(statearr_9990_10130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (5))){
var state_9986__$1 = state_9986;
var statearr_9991_10131 = state_9986__$1;
(statearr_9991_10131[(2)] = null);

(statearr_9991_10131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (6))){
var state_9986__$1 = state_9986;
var statearr_9992_10132 = state_9986__$1;
(statearr_9992_10132[(2)] = null);

(statearr_9992_10132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9987 === (7))){
var inst_9982 = (state_9986[(2)]);
var state_9986__$1 = state_9986;
var statearr_9993_10133 = state_9986__$1;
(statearr_9993_10133[(2)] = inst_9982);

(statearr_9993_10133[(1)] = (3));


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
});})(__10115,c__9561__auto___10127,G__9946_10116,n__7059__auto___10114,jobs,results,process,async))
;
return ((function (__10115,switch__9496__auto__,c__9561__auto___10127,G__9946_10116,n__7059__auto___10114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0 = (function (){
var statearr_9997 = [null,null,null,null,null,null,null];
(statearr_9997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__);

(statearr_9997[(1)] = (1));

return statearr_9997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1 = (function (state_9986){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_9986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e9998){if((e9998 instanceof Object)){
var ex__9500__auto__ = e9998;
var statearr_9999_10134 = state_9986;
(statearr_9999_10134[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10135 = state_9986;
state_9986 = G__10135;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = function(state_9986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1.call(this,state_9986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__;
})()
;})(__10115,switch__9496__auto__,c__9561__auto___10127,G__9946_10116,n__7059__auto___10114,jobs,results,process,async))
})();
var state__9563__auto__ = (function (){var statearr_10000 = f__9562__auto__.call(null);
(statearr_10000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___10127);

return statearr_10000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(__10115,c__9561__auto___10127,G__9946_10116,n__7059__auto___10114,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10136 = (__10115 + (1));
__10115 = G__10136;
continue;
} else {
}
break;
}

var c__9561__auto___10137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___10137,jobs,results,process,async){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___10137,jobs,results,process,async){
return (function (state_10022){
var state_val_10023 = (state_10022[(1)]);
if((state_val_10023 === (1))){
var state_10022__$1 = state_10022;
var statearr_10024_10138 = state_10022__$1;
(statearr_10024_10138[(2)] = null);

(statearr_10024_10138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10023 === (2))){
var state_10022__$1 = state_10022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10022__$1,(4),from);
} else {
if((state_val_10023 === (3))){
var inst_10020 = (state_10022[(2)]);
var state_10022__$1 = state_10022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10022__$1,inst_10020);
} else {
if((state_val_10023 === (4))){
var inst_10003 = (state_10022[(7)]);
var inst_10003__$1 = (state_10022[(2)]);
var inst_10004 = (inst_10003__$1 == null);
var state_10022__$1 = (function (){var statearr_10025 = state_10022;
(statearr_10025[(7)] = inst_10003__$1);

return statearr_10025;
})();
if(cljs.core.truth_(inst_10004)){
var statearr_10026_10139 = state_10022__$1;
(statearr_10026_10139[(1)] = (5));

} else {
var statearr_10027_10140 = state_10022__$1;
(statearr_10027_10140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10023 === (5))){
var inst_10006 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10022__$1 = state_10022;
var statearr_10028_10141 = state_10022__$1;
(statearr_10028_10141[(2)] = inst_10006);

(statearr_10028_10141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10023 === (6))){
var inst_10008 = (state_10022[(8)]);
var inst_10003 = (state_10022[(7)]);
var inst_10008__$1 = cljs.core.async.chan.call(null,(1));
var inst_10009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10010 = [inst_10003,inst_10008__$1];
var inst_10011 = (new cljs.core.PersistentVector(null,2,(5),inst_10009,inst_10010,null));
var state_10022__$1 = (function (){var statearr_10029 = state_10022;
(statearr_10029[(8)] = inst_10008__$1);

return statearr_10029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10022__$1,(8),jobs,inst_10011);
} else {
if((state_val_10023 === (7))){
var inst_10018 = (state_10022[(2)]);
var state_10022__$1 = state_10022;
var statearr_10030_10142 = state_10022__$1;
(statearr_10030_10142[(2)] = inst_10018);

(statearr_10030_10142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10023 === (8))){
var inst_10008 = (state_10022[(8)]);
var inst_10013 = (state_10022[(2)]);
var state_10022__$1 = (function (){var statearr_10031 = state_10022;
(statearr_10031[(9)] = inst_10013);

return statearr_10031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10022__$1,(9),results,inst_10008);
} else {
if((state_val_10023 === (9))){
var inst_10015 = (state_10022[(2)]);
var state_10022__$1 = (function (){var statearr_10032 = state_10022;
(statearr_10032[(10)] = inst_10015);

return statearr_10032;
})();
var statearr_10033_10143 = state_10022__$1;
(statearr_10033_10143[(2)] = null);

(statearr_10033_10143[(1)] = (2));


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
});})(c__9561__auto___10137,jobs,results,process,async))
;
return ((function (switch__9496__auto__,c__9561__auto___10137,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0 = (function (){
var statearr_10037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__);

(statearr_10037[(1)] = (1));

return statearr_10037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1 = (function (state_10022){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_10022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e10038){if((e10038 instanceof Object)){
var ex__9500__auto__ = e10038;
var statearr_10039_10144 = state_10022;
(statearr_10039_10144[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10145 = state_10022;
state_10022 = G__10145;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = function(state_10022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1.call(this,state_10022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___10137,jobs,results,process,async))
})();
var state__9563__auto__ = (function (){var statearr_10040 = f__9562__auto__.call(null);
(statearr_10040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___10137);

return statearr_10040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___10137,jobs,results,process,async))
);


var c__9561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto__,jobs,results,process,async){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto__,jobs,results,process,async){
return (function (state_10078){
var state_val_10079 = (state_10078[(1)]);
if((state_val_10079 === (7))){
var inst_10074 = (state_10078[(2)]);
var state_10078__$1 = state_10078;
var statearr_10080_10146 = state_10078__$1;
(statearr_10080_10146[(2)] = inst_10074);

(statearr_10080_10146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (20))){
var state_10078__$1 = state_10078;
var statearr_10081_10147 = state_10078__$1;
(statearr_10081_10147[(2)] = null);

(statearr_10081_10147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (1))){
var state_10078__$1 = state_10078;
var statearr_10082_10148 = state_10078__$1;
(statearr_10082_10148[(2)] = null);

(statearr_10082_10148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (4))){
var inst_10043 = (state_10078[(7)]);
var inst_10043__$1 = (state_10078[(2)]);
var inst_10044 = (inst_10043__$1 == null);
var state_10078__$1 = (function (){var statearr_10083 = state_10078;
(statearr_10083[(7)] = inst_10043__$1);

return statearr_10083;
})();
if(cljs.core.truth_(inst_10044)){
var statearr_10084_10149 = state_10078__$1;
(statearr_10084_10149[(1)] = (5));

} else {
var statearr_10085_10150 = state_10078__$1;
(statearr_10085_10150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (15))){
var inst_10056 = (state_10078[(8)]);
var state_10078__$1 = state_10078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10078__$1,(18),to,inst_10056);
} else {
if((state_val_10079 === (21))){
var inst_10069 = (state_10078[(2)]);
var state_10078__$1 = state_10078;
var statearr_10086_10151 = state_10078__$1;
(statearr_10086_10151[(2)] = inst_10069);

(statearr_10086_10151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (13))){
var inst_10071 = (state_10078[(2)]);
var state_10078__$1 = (function (){var statearr_10087 = state_10078;
(statearr_10087[(9)] = inst_10071);

return statearr_10087;
})();
var statearr_10088_10152 = state_10078__$1;
(statearr_10088_10152[(2)] = null);

(statearr_10088_10152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (6))){
var inst_10043 = (state_10078[(7)]);
var state_10078__$1 = state_10078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10078__$1,(11),inst_10043);
} else {
if((state_val_10079 === (17))){
var inst_10064 = (state_10078[(2)]);
var state_10078__$1 = state_10078;
if(cljs.core.truth_(inst_10064)){
var statearr_10089_10153 = state_10078__$1;
(statearr_10089_10153[(1)] = (19));

} else {
var statearr_10090_10154 = state_10078__$1;
(statearr_10090_10154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (3))){
var inst_10076 = (state_10078[(2)]);
var state_10078__$1 = state_10078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10078__$1,inst_10076);
} else {
if((state_val_10079 === (12))){
var inst_10053 = (state_10078[(10)]);
var state_10078__$1 = state_10078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10078__$1,(14),inst_10053);
} else {
if((state_val_10079 === (2))){
var state_10078__$1 = state_10078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10078__$1,(4),results);
} else {
if((state_val_10079 === (19))){
var state_10078__$1 = state_10078;
var statearr_10091_10155 = state_10078__$1;
(statearr_10091_10155[(2)] = null);

(statearr_10091_10155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (11))){
var inst_10053 = (state_10078[(2)]);
var state_10078__$1 = (function (){var statearr_10092 = state_10078;
(statearr_10092[(10)] = inst_10053);

return statearr_10092;
})();
var statearr_10093_10156 = state_10078__$1;
(statearr_10093_10156[(2)] = null);

(statearr_10093_10156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (9))){
var state_10078__$1 = state_10078;
var statearr_10094_10157 = state_10078__$1;
(statearr_10094_10157[(2)] = null);

(statearr_10094_10157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (5))){
var state_10078__$1 = state_10078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10095_10158 = state_10078__$1;
(statearr_10095_10158[(1)] = (8));

} else {
var statearr_10096_10159 = state_10078__$1;
(statearr_10096_10159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (14))){
var inst_10058 = (state_10078[(11)]);
var inst_10056 = (state_10078[(8)]);
var inst_10056__$1 = (state_10078[(2)]);
var inst_10057 = (inst_10056__$1 == null);
var inst_10058__$1 = cljs.core.not.call(null,inst_10057);
var state_10078__$1 = (function (){var statearr_10097 = state_10078;
(statearr_10097[(11)] = inst_10058__$1);

(statearr_10097[(8)] = inst_10056__$1);

return statearr_10097;
})();
if(inst_10058__$1){
var statearr_10098_10160 = state_10078__$1;
(statearr_10098_10160[(1)] = (15));

} else {
var statearr_10099_10161 = state_10078__$1;
(statearr_10099_10161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (16))){
var inst_10058 = (state_10078[(11)]);
var state_10078__$1 = state_10078;
var statearr_10100_10162 = state_10078__$1;
(statearr_10100_10162[(2)] = inst_10058);

(statearr_10100_10162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (10))){
var inst_10050 = (state_10078[(2)]);
var state_10078__$1 = state_10078;
var statearr_10101_10163 = state_10078__$1;
(statearr_10101_10163[(2)] = inst_10050);

(statearr_10101_10163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (18))){
var inst_10061 = (state_10078[(2)]);
var state_10078__$1 = state_10078;
var statearr_10102_10164 = state_10078__$1;
(statearr_10102_10164[(2)] = inst_10061);

(statearr_10102_10164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10079 === (8))){
var inst_10047 = cljs.core.async.close_BANG_.call(null,to);
var state_10078__$1 = state_10078;
var statearr_10103_10165 = state_10078__$1;
(statearr_10103_10165[(2)] = inst_10047);

(statearr_10103_10165[(1)] = (10));


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
});})(c__9561__auto__,jobs,results,process,async))
;
return ((function (switch__9496__auto__,c__9561__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0 = (function (){
var statearr_10107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__);

(statearr_10107[(1)] = (1));

return statearr_10107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1 = (function (state_10078){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_10078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e10108){if((e10108 instanceof Object)){
var ex__9500__auto__ = e10108;
var statearr_10109_10166 = state_10078;
(statearr_10109_10166[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10167 = state_10078;
state_10078 = G__10167;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__ = function(state_10078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1.call(this,state_10078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9497__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto__,jobs,results,process,async))
})();
var state__9563__auto__ = (function (){var statearr_10110 = f__9562__auto__.call(null);
(statearr_10110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto__);

return statearr_10110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto__,jobs,results,process,async))
);

return c__9561__auto__;
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
var args10168 = [];
var len__7214__auto___10171 = arguments.length;
var i__7215__auto___10172 = (0);
while(true){
if((i__7215__auto___10172 < len__7214__auto___10171)){
args10168.push((arguments[i__7215__auto___10172]));

var G__10173 = (i__7215__auto___10172 + (1));
i__7215__auto___10172 = G__10173;
continue;
} else {
}
break;
}

var G__10170 = args10168.length;
switch (G__10170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10168.length)].join('')));

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
var args10175 = [];
var len__7214__auto___10178 = arguments.length;
var i__7215__auto___10179 = (0);
while(true){
if((i__7215__auto___10179 < len__7214__auto___10178)){
args10175.push((arguments[i__7215__auto___10179]));

var G__10180 = (i__7215__auto___10179 + (1));
i__7215__auto___10179 = G__10180;
continue;
} else {
}
break;
}

var G__10177 = args10175.length;
switch (G__10177) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10175.length)].join('')));

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
var args10182 = [];
var len__7214__auto___10235 = arguments.length;
var i__7215__auto___10236 = (0);
while(true){
if((i__7215__auto___10236 < len__7214__auto___10235)){
args10182.push((arguments[i__7215__auto___10236]));

var G__10237 = (i__7215__auto___10236 + (1));
i__7215__auto___10236 = G__10237;
continue;
} else {
}
break;
}

var G__10184 = args10182.length;
switch (G__10184) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10182.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9561__auto___10239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___10239,tc,fc){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___10239,tc,fc){
return (function (state_10210){
var state_val_10211 = (state_10210[(1)]);
if((state_val_10211 === (7))){
var inst_10206 = (state_10210[(2)]);
var state_10210__$1 = state_10210;
var statearr_10212_10240 = state_10210__$1;
(statearr_10212_10240[(2)] = inst_10206);

(statearr_10212_10240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (1))){
var state_10210__$1 = state_10210;
var statearr_10213_10241 = state_10210__$1;
(statearr_10213_10241[(2)] = null);

(statearr_10213_10241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (4))){
var inst_10187 = (state_10210[(7)]);
var inst_10187__$1 = (state_10210[(2)]);
var inst_10188 = (inst_10187__$1 == null);
var state_10210__$1 = (function (){var statearr_10214 = state_10210;
(statearr_10214[(7)] = inst_10187__$1);

return statearr_10214;
})();
if(cljs.core.truth_(inst_10188)){
var statearr_10215_10242 = state_10210__$1;
(statearr_10215_10242[(1)] = (5));

} else {
var statearr_10216_10243 = state_10210__$1;
(statearr_10216_10243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (13))){
var state_10210__$1 = state_10210;
var statearr_10217_10244 = state_10210__$1;
(statearr_10217_10244[(2)] = null);

(statearr_10217_10244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (6))){
var inst_10187 = (state_10210[(7)]);
var inst_10193 = p.call(null,inst_10187);
var state_10210__$1 = state_10210;
if(cljs.core.truth_(inst_10193)){
var statearr_10218_10245 = state_10210__$1;
(statearr_10218_10245[(1)] = (9));

} else {
var statearr_10219_10246 = state_10210__$1;
(statearr_10219_10246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (3))){
var inst_10208 = (state_10210[(2)]);
var state_10210__$1 = state_10210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10210__$1,inst_10208);
} else {
if((state_val_10211 === (12))){
var state_10210__$1 = state_10210;
var statearr_10220_10247 = state_10210__$1;
(statearr_10220_10247[(2)] = null);

(statearr_10220_10247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (2))){
var state_10210__$1 = state_10210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10210__$1,(4),ch);
} else {
if((state_val_10211 === (11))){
var inst_10187 = (state_10210[(7)]);
var inst_10197 = (state_10210[(2)]);
var state_10210__$1 = state_10210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10210__$1,(8),inst_10197,inst_10187);
} else {
if((state_val_10211 === (9))){
var state_10210__$1 = state_10210;
var statearr_10221_10248 = state_10210__$1;
(statearr_10221_10248[(2)] = tc);

(statearr_10221_10248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (5))){
var inst_10190 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10191 = cljs.core.async.close_BANG_.call(null,fc);
var state_10210__$1 = (function (){var statearr_10222 = state_10210;
(statearr_10222[(8)] = inst_10190);

return statearr_10222;
})();
var statearr_10223_10249 = state_10210__$1;
(statearr_10223_10249[(2)] = inst_10191);

(statearr_10223_10249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (14))){
var inst_10204 = (state_10210[(2)]);
var state_10210__$1 = state_10210;
var statearr_10224_10250 = state_10210__$1;
(statearr_10224_10250[(2)] = inst_10204);

(statearr_10224_10250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (10))){
var state_10210__$1 = state_10210;
var statearr_10225_10251 = state_10210__$1;
(statearr_10225_10251[(2)] = fc);

(statearr_10225_10251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10211 === (8))){
var inst_10199 = (state_10210[(2)]);
var state_10210__$1 = state_10210;
if(cljs.core.truth_(inst_10199)){
var statearr_10226_10252 = state_10210__$1;
(statearr_10226_10252[(1)] = (12));

} else {
var statearr_10227_10253 = state_10210__$1;
(statearr_10227_10253[(1)] = (13));

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
});})(c__9561__auto___10239,tc,fc))
;
return ((function (switch__9496__auto__,c__9561__auto___10239,tc,fc){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_10231 = [null,null,null,null,null,null,null,null,null];
(statearr_10231[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_10231[(1)] = (1));

return statearr_10231;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_10210){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_10210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e10232){if((e10232 instanceof Object)){
var ex__9500__auto__ = e10232;
var statearr_10233_10254 = state_10210;
(statearr_10233_10254[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10255 = state_10210;
state_10210 = G__10255;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_10210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_10210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___10239,tc,fc))
})();
var state__9563__auto__ = (function (){var statearr_10234 = f__9562__auto__.call(null);
(statearr_10234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___10239);

return statearr_10234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___10239,tc,fc))
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
var c__9561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto__){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto__){
return (function (state_10319){
var state_val_10320 = (state_10319[(1)]);
if((state_val_10320 === (7))){
var inst_10315 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10321_10342 = state_10319__$1;
(statearr_10321_10342[(2)] = inst_10315);

(statearr_10321_10342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (1))){
var inst_10299 = init;
var state_10319__$1 = (function (){var statearr_10322 = state_10319;
(statearr_10322[(7)] = inst_10299);

return statearr_10322;
})();
var statearr_10323_10343 = state_10319__$1;
(statearr_10323_10343[(2)] = null);

(statearr_10323_10343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (4))){
var inst_10302 = (state_10319[(8)]);
var inst_10302__$1 = (state_10319[(2)]);
var inst_10303 = (inst_10302__$1 == null);
var state_10319__$1 = (function (){var statearr_10324 = state_10319;
(statearr_10324[(8)] = inst_10302__$1);

return statearr_10324;
})();
if(cljs.core.truth_(inst_10303)){
var statearr_10325_10344 = state_10319__$1;
(statearr_10325_10344[(1)] = (5));

} else {
var statearr_10326_10345 = state_10319__$1;
(statearr_10326_10345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (6))){
var inst_10306 = (state_10319[(9)]);
var inst_10299 = (state_10319[(7)]);
var inst_10302 = (state_10319[(8)]);
var inst_10306__$1 = f.call(null,inst_10299,inst_10302);
var inst_10307 = cljs.core.reduced_QMARK_.call(null,inst_10306__$1);
var state_10319__$1 = (function (){var statearr_10327 = state_10319;
(statearr_10327[(9)] = inst_10306__$1);

return statearr_10327;
})();
if(inst_10307){
var statearr_10328_10346 = state_10319__$1;
(statearr_10328_10346[(1)] = (8));

} else {
var statearr_10329_10347 = state_10319__$1;
(statearr_10329_10347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (3))){
var inst_10317 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10319__$1,inst_10317);
} else {
if((state_val_10320 === (2))){
var state_10319__$1 = state_10319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10319__$1,(4),ch);
} else {
if((state_val_10320 === (9))){
var inst_10306 = (state_10319[(9)]);
var inst_10299 = inst_10306;
var state_10319__$1 = (function (){var statearr_10330 = state_10319;
(statearr_10330[(7)] = inst_10299);

return statearr_10330;
})();
var statearr_10331_10348 = state_10319__$1;
(statearr_10331_10348[(2)] = null);

(statearr_10331_10348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (5))){
var inst_10299 = (state_10319[(7)]);
var state_10319__$1 = state_10319;
var statearr_10332_10349 = state_10319__$1;
(statearr_10332_10349[(2)] = inst_10299);

(statearr_10332_10349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (10))){
var inst_10313 = (state_10319[(2)]);
var state_10319__$1 = state_10319;
var statearr_10333_10350 = state_10319__$1;
(statearr_10333_10350[(2)] = inst_10313);

(statearr_10333_10350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10320 === (8))){
var inst_10306 = (state_10319[(9)]);
var inst_10309 = cljs.core.deref.call(null,inst_10306);
var state_10319__$1 = state_10319;
var statearr_10334_10351 = state_10319__$1;
(statearr_10334_10351[(2)] = inst_10309);

(statearr_10334_10351[(1)] = (10));


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
});})(c__9561__auto__))
;
return ((function (switch__9496__auto__,c__9561__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9497__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9497__auto____0 = (function (){
var statearr_10338 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10338[(0)] = cljs$core$async$reduce_$_state_machine__9497__auto__);

(statearr_10338[(1)] = (1));

return statearr_10338;
});
var cljs$core$async$reduce_$_state_machine__9497__auto____1 = (function (state_10319){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_10319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e10339){if((e10339 instanceof Object)){
var ex__9500__auto__ = e10339;
var statearr_10340_10352 = state_10319;
(statearr_10340_10352[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10353 = state_10319;
state_10319 = G__10353;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9497__auto__ = function(state_10319){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9497__auto____1.call(this,state_10319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9497__auto____0;
cljs$core$async$reduce_$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9497__auto____1;
return cljs$core$async$reduce_$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto__))
})();
var state__9563__auto__ = (function (){var statearr_10341 = f__9562__auto__.call(null);
(statearr_10341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto__);

return statearr_10341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto__))
);

return c__9561__auto__;
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
var args10354 = [];
var len__7214__auto___10406 = arguments.length;
var i__7215__auto___10407 = (0);
while(true){
if((i__7215__auto___10407 < len__7214__auto___10406)){
args10354.push((arguments[i__7215__auto___10407]));

var G__10408 = (i__7215__auto___10407 + (1));
i__7215__auto___10407 = G__10408;
continue;
} else {
}
break;
}

var G__10356 = args10354.length;
switch (G__10356) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10354.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto__){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto__){
return (function (state_10381){
var state_val_10382 = (state_10381[(1)]);
if((state_val_10382 === (7))){
var inst_10363 = (state_10381[(2)]);
var state_10381__$1 = state_10381;
var statearr_10383_10410 = state_10381__$1;
(statearr_10383_10410[(2)] = inst_10363);

(statearr_10383_10410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (1))){
var inst_10357 = cljs.core.seq.call(null,coll);
var inst_10358 = inst_10357;
var state_10381__$1 = (function (){var statearr_10384 = state_10381;
(statearr_10384[(7)] = inst_10358);

return statearr_10384;
})();
var statearr_10385_10411 = state_10381__$1;
(statearr_10385_10411[(2)] = null);

(statearr_10385_10411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (4))){
var inst_10358 = (state_10381[(7)]);
var inst_10361 = cljs.core.first.call(null,inst_10358);
var state_10381__$1 = state_10381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10381__$1,(7),ch,inst_10361);
} else {
if((state_val_10382 === (13))){
var inst_10375 = (state_10381[(2)]);
var state_10381__$1 = state_10381;
var statearr_10386_10412 = state_10381__$1;
(statearr_10386_10412[(2)] = inst_10375);

(statearr_10386_10412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (6))){
var inst_10366 = (state_10381[(2)]);
var state_10381__$1 = state_10381;
if(cljs.core.truth_(inst_10366)){
var statearr_10387_10413 = state_10381__$1;
(statearr_10387_10413[(1)] = (8));

} else {
var statearr_10388_10414 = state_10381__$1;
(statearr_10388_10414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (3))){
var inst_10379 = (state_10381[(2)]);
var state_10381__$1 = state_10381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10381__$1,inst_10379);
} else {
if((state_val_10382 === (12))){
var state_10381__$1 = state_10381;
var statearr_10389_10415 = state_10381__$1;
(statearr_10389_10415[(2)] = null);

(statearr_10389_10415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (2))){
var inst_10358 = (state_10381[(7)]);
var state_10381__$1 = state_10381;
if(cljs.core.truth_(inst_10358)){
var statearr_10390_10416 = state_10381__$1;
(statearr_10390_10416[(1)] = (4));

} else {
var statearr_10391_10417 = state_10381__$1;
(statearr_10391_10417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (11))){
var inst_10372 = cljs.core.async.close_BANG_.call(null,ch);
var state_10381__$1 = state_10381;
var statearr_10392_10418 = state_10381__$1;
(statearr_10392_10418[(2)] = inst_10372);

(statearr_10392_10418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (9))){
var state_10381__$1 = state_10381;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10393_10419 = state_10381__$1;
(statearr_10393_10419[(1)] = (11));

} else {
var statearr_10394_10420 = state_10381__$1;
(statearr_10394_10420[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (5))){
var inst_10358 = (state_10381[(7)]);
var state_10381__$1 = state_10381;
var statearr_10395_10421 = state_10381__$1;
(statearr_10395_10421[(2)] = inst_10358);

(statearr_10395_10421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (10))){
var inst_10377 = (state_10381[(2)]);
var state_10381__$1 = state_10381;
var statearr_10396_10422 = state_10381__$1;
(statearr_10396_10422[(2)] = inst_10377);

(statearr_10396_10422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10382 === (8))){
var inst_10358 = (state_10381[(7)]);
var inst_10368 = cljs.core.next.call(null,inst_10358);
var inst_10358__$1 = inst_10368;
var state_10381__$1 = (function (){var statearr_10397 = state_10381;
(statearr_10397[(7)] = inst_10358__$1);

return statearr_10397;
})();
var statearr_10398_10423 = state_10381__$1;
(statearr_10398_10423[(2)] = null);

(statearr_10398_10423[(1)] = (2));


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
});})(c__9561__auto__))
;
return ((function (switch__9496__auto__,c__9561__auto__){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_10402 = [null,null,null,null,null,null,null,null];
(statearr_10402[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_10402[(1)] = (1));

return statearr_10402;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_10381){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_10381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e10403){if((e10403 instanceof Object)){
var ex__9500__auto__ = e10403;
var statearr_10404_10424 = state_10381;
(statearr_10404_10424[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10425 = state_10381;
state_10381 = G__10425;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_10381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_10381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto__))
})();
var state__9563__auto__ = (function (){var statearr_10405 = f__9562__auto__.call(null);
(statearr_10405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto__);

return statearr_10405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto__))
);

return c__9561__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async10647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10647 = (function (mult,ch,cs,meta10648){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10648 = meta10648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10649,meta10648__$1){
var self__ = this;
var _10649__$1 = this;
return (new cljs.core.async.t_cljs$core$async10647(self__.mult,self__.ch,self__.cs,meta10648__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10649){
var self__ = this;
var _10649__$1 = this;
return self__.meta10648;
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10648","meta10648",-858919950,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10647";

cljs.core.async.t_cljs$core$async10647.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async10647");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10647 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10647(mult__$1,ch__$1,cs__$1,meta10648){
return (new cljs.core.async.t_cljs$core$async10647(mult__$1,ch__$1,cs__$1,meta10648));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10647(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9561__auto___10868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___10868,cs,m,dchan,dctr,done){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___10868,cs,m,dchan,dctr,done){
return (function (state_10780){
var state_val_10781 = (state_10780[(1)]);
if((state_val_10781 === (7))){
var inst_10776 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10782_10869 = state_10780__$1;
(statearr_10782_10869[(2)] = inst_10776);

(statearr_10782_10869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (20))){
var inst_10681 = (state_10780[(7)]);
var inst_10691 = cljs.core.first.call(null,inst_10681);
var inst_10692 = cljs.core.nth.call(null,inst_10691,(0),null);
var inst_10693 = cljs.core.nth.call(null,inst_10691,(1),null);
var state_10780__$1 = (function (){var statearr_10783 = state_10780;
(statearr_10783[(8)] = inst_10692);

return statearr_10783;
})();
if(cljs.core.truth_(inst_10693)){
var statearr_10784_10870 = state_10780__$1;
(statearr_10784_10870[(1)] = (22));

} else {
var statearr_10785_10871 = state_10780__$1;
(statearr_10785_10871[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (27))){
var inst_10652 = (state_10780[(9)]);
var inst_10723 = (state_10780[(10)]);
var inst_10728 = (state_10780[(11)]);
var inst_10721 = (state_10780[(12)]);
var inst_10728__$1 = cljs.core._nth.call(null,inst_10721,inst_10723);
var inst_10729 = cljs.core.async.put_BANG_.call(null,inst_10728__$1,inst_10652,done);
var state_10780__$1 = (function (){var statearr_10786 = state_10780;
(statearr_10786[(11)] = inst_10728__$1);

return statearr_10786;
})();
if(cljs.core.truth_(inst_10729)){
var statearr_10787_10872 = state_10780__$1;
(statearr_10787_10872[(1)] = (30));

} else {
var statearr_10788_10873 = state_10780__$1;
(statearr_10788_10873[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (1))){
var state_10780__$1 = state_10780;
var statearr_10789_10874 = state_10780__$1;
(statearr_10789_10874[(2)] = null);

(statearr_10789_10874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (24))){
var inst_10681 = (state_10780[(7)]);
var inst_10698 = (state_10780[(2)]);
var inst_10699 = cljs.core.next.call(null,inst_10681);
var inst_10661 = inst_10699;
var inst_10662 = null;
var inst_10663 = (0);
var inst_10664 = (0);
var state_10780__$1 = (function (){var statearr_10790 = state_10780;
(statearr_10790[(13)] = inst_10663);

(statearr_10790[(14)] = inst_10661);

(statearr_10790[(15)] = inst_10662);

(statearr_10790[(16)] = inst_10698);

(statearr_10790[(17)] = inst_10664);

return statearr_10790;
})();
var statearr_10791_10875 = state_10780__$1;
(statearr_10791_10875[(2)] = null);

(statearr_10791_10875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (39))){
var state_10780__$1 = state_10780;
var statearr_10795_10876 = state_10780__$1;
(statearr_10795_10876[(2)] = null);

(statearr_10795_10876[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (4))){
var inst_10652 = (state_10780[(9)]);
var inst_10652__$1 = (state_10780[(2)]);
var inst_10653 = (inst_10652__$1 == null);
var state_10780__$1 = (function (){var statearr_10796 = state_10780;
(statearr_10796[(9)] = inst_10652__$1);

return statearr_10796;
})();
if(cljs.core.truth_(inst_10653)){
var statearr_10797_10877 = state_10780__$1;
(statearr_10797_10877[(1)] = (5));

} else {
var statearr_10798_10878 = state_10780__$1;
(statearr_10798_10878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (15))){
var inst_10663 = (state_10780[(13)]);
var inst_10661 = (state_10780[(14)]);
var inst_10662 = (state_10780[(15)]);
var inst_10664 = (state_10780[(17)]);
var inst_10677 = (state_10780[(2)]);
var inst_10678 = (inst_10664 + (1));
var tmp10792 = inst_10663;
var tmp10793 = inst_10661;
var tmp10794 = inst_10662;
var inst_10661__$1 = tmp10793;
var inst_10662__$1 = tmp10794;
var inst_10663__$1 = tmp10792;
var inst_10664__$1 = inst_10678;
var state_10780__$1 = (function (){var statearr_10799 = state_10780;
(statearr_10799[(13)] = inst_10663__$1);

(statearr_10799[(14)] = inst_10661__$1);

(statearr_10799[(15)] = inst_10662__$1);

(statearr_10799[(18)] = inst_10677);

(statearr_10799[(17)] = inst_10664__$1);

return statearr_10799;
})();
var statearr_10800_10879 = state_10780__$1;
(statearr_10800_10879[(2)] = null);

(statearr_10800_10879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (21))){
var inst_10702 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10804_10880 = state_10780__$1;
(statearr_10804_10880[(2)] = inst_10702);

(statearr_10804_10880[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (31))){
var inst_10728 = (state_10780[(11)]);
var inst_10732 = done.call(null,null);
var inst_10733 = cljs.core.async.untap_STAR_.call(null,m,inst_10728);
var state_10780__$1 = (function (){var statearr_10805 = state_10780;
(statearr_10805[(19)] = inst_10732);

return statearr_10805;
})();
var statearr_10806_10881 = state_10780__$1;
(statearr_10806_10881[(2)] = inst_10733);

(statearr_10806_10881[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (32))){
var inst_10720 = (state_10780[(20)]);
var inst_10723 = (state_10780[(10)]);
var inst_10721 = (state_10780[(12)]);
var inst_10722 = (state_10780[(21)]);
var inst_10735 = (state_10780[(2)]);
var inst_10736 = (inst_10723 + (1));
var tmp10801 = inst_10720;
var tmp10802 = inst_10721;
var tmp10803 = inst_10722;
var inst_10720__$1 = tmp10801;
var inst_10721__$1 = tmp10802;
var inst_10722__$1 = tmp10803;
var inst_10723__$1 = inst_10736;
var state_10780__$1 = (function (){var statearr_10807 = state_10780;
(statearr_10807[(20)] = inst_10720__$1);

(statearr_10807[(10)] = inst_10723__$1);

(statearr_10807[(22)] = inst_10735);

(statearr_10807[(12)] = inst_10721__$1);

(statearr_10807[(21)] = inst_10722__$1);

return statearr_10807;
})();
var statearr_10808_10882 = state_10780__$1;
(statearr_10808_10882[(2)] = null);

(statearr_10808_10882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (40))){
var inst_10748 = (state_10780[(23)]);
var inst_10752 = done.call(null,null);
var inst_10753 = cljs.core.async.untap_STAR_.call(null,m,inst_10748);
var state_10780__$1 = (function (){var statearr_10809 = state_10780;
(statearr_10809[(24)] = inst_10752);

return statearr_10809;
})();
var statearr_10810_10883 = state_10780__$1;
(statearr_10810_10883[(2)] = inst_10753);

(statearr_10810_10883[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (33))){
var inst_10739 = (state_10780[(25)]);
var inst_10741 = cljs.core.chunked_seq_QMARK_.call(null,inst_10739);
var state_10780__$1 = state_10780;
if(inst_10741){
var statearr_10811_10884 = state_10780__$1;
(statearr_10811_10884[(1)] = (36));

} else {
var statearr_10812_10885 = state_10780__$1;
(statearr_10812_10885[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (13))){
var inst_10671 = (state_10780[(26)]);
var inst_10674 = cljs.core.async.close_BANG_.call(null,inst_10671);
var state_10780__$1 = state_10780;
var statearr_10813_10886 = state_10780__$1;
(statearr_10813_10886[(2)] = inst_10674);

(statearr_10813_10886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (22))){
var inst_10692 = (state_10780[(8)]);
var inst_10695 = cljs.core.async.close_BANG_.call(null,inst_10692);
var state_10780__$1 = state_10780;
var statearr_10814_10887 = state_10780__$1;
(statearr_10814_10887[(2)] = inst_10695);

(statearr_10814_10887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (36))){
var inst_10739 = (state_10780[(25)]);
var inst_10743 = cljs.core.chunk_first.call(null,inst_10739);
var inst_10744 = cljs.core.chunk_rest.call(null,inst_10739);
var inst_10745 = cljs.core.count.call(null,inst_10743);
var inst_10720 = inst_10744;
var inst_10721 = inst_10743;
var inst_10722 = inst_10745;
var inst_10723 = (0);
var state_10780__$1 = (function (){var statearr_10815 = state_10780;
(statearr_10815[(20)] = inst_10720);

(statearr_10815[(10)] = inst_10723);

(statearr_10815[(12)] = inst_10721);

(statearr_10815[(21)] = inst_10722);

return statearr_10815;
})();
var statearr_10816_10888 = state_10780__$1;
(statearr_10816_10888[(2)] = null);

(statearr_10816_10888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (41))){
var inst_10739 = (state_10780[(25)]);
var inst_10755 = (state_10780[(2)]);
var inst_10756 = cljs.core.next.call(null,inst_10739);
var inst_10720 = inst_10756;
var inst_10721 = null;
var inst_10722 = (0);
var inst_10723 = (0);
var state_10780__$1 = (function (){var statearr_10817 = state_10780;
(statearr_10817[(20)] = inst_10720);

(statearr_10817[(10)] = inst_10723);

(statearr_10817[(27)] = inst_10755);

(statearr_10817[(12)] = inst_10721);

(statearr_10817[(21)] = inst_10722);

return statearr_10817;
})();
var statearr_10818_10889 = state_10780__$1;
(statearr_10818_10889[(2)] = null);

(statearr_10818_10889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (43))){
var state_10780__$1 = state_10780;
var statearr_10819_10890 = state_10780__$1;
(statearr_10819_10890[(2)] = null);

(statearr_10819_10890[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (29))){
var inst_10764 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10820_10891 = state_10780__$1;
(statearr_10820_10891[(2)] = inst_10764);

(statearr_10820_10891[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (44))){
var inst_10773 = (state_10780[(2)]);
var state_10780__$1 = (function (){var statearr_10821 = state_10780;
(statearr_10821[(28)] = inst_10773);

return statearr_10821;
})();
var statearr_10822_10892 = state_10780__$1;
(statearr_10822_10892[(2)] = null);

(statearr_10822_10892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (6))){
var inst_10712 = (state_10780[(29)]);
var inst_10711 = cljs.core.deref.call(null,cs);
var inst_10712__$1 = cljs.core.keys.call(null,inst_10711);
var inst_10713 = cljs.core.count.call(null,inst_10712__$1);
var inst_10714 = cljs.core.reset_BANG_.call(null,dctr,inst_10713);
var inst_10719 = cljs.core.seq.call(null,inst_10712__$1);
var inst_10720 = inst_10719;
var inst_10721 = null;
var inst_10722 = (0);
var inst_10723 = (0);
var state_10780__$1 = (function (){var statearr_10823 = state_10780;
(statearr_10823[(20)] = inst_10720);

(statearr_10823[(10)] = inst_10723);

(statearr_10823[(12)] = inst_10721);

(statearr_10823[(21)] = inst_10722);

(statearr_10823[(29)] = inst_10712__$1);

(statearr_10823[(30)] = inst_10714);

return statearr_10823;
})();
var statearr_10824_10893 = state_10780__$1;
(statearr_10824_10893[(2)] = null);

(statearr_10824_10893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (28))){
var inst_10720 = (state_10780[(20)]);
var inst_10739 = (state_10780[(25)]);
var inst_10739__$1 = cljs.core.seq.call(null,inst_10720);
var state_10780__$1 = (function (){var statearr_10825 = state_10780;
(statearr_10825[(25)] = inst_10739__$1);

return statearr_10825;
})();
if(inst_10739__$1){
var statearr_10826_10894 = state_10780__$1;
(statearr_10826_10894[(1)] = (33));

} else {
var statearr_10827_10895 = state_10780__$1;
(statearr_10827_10895[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (25))){
var inst_10723 = (state_10780[(10)]);
var inst_10722 = (state_10780[(21)]);
var inst_10725 = (inst_10723 < inst_10722);
var inst_10726 = inst_10725;
var state_10780__$1 = state_10780;
if(cljs.core.truth_(inst_10726)){
var statearr_10828_10896 = state_10780__$1;
(statearr_10828_10896[(1)] = (27));

} else {
var statearr_10829_10897 = state_10780__$1;
(statearr_10829_10897[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (34))){
var state_10780__$1 = state_10780;
var statearr_10830_10898 = state_10780__$1;
(statearr_10830_10898[(2)] = null);

(statearr_10830_10898[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (17))){
var state_10780__$1 = state_10780;
var statearr_10831_10899 = state_10780__$1;
(statearr_10831_10899[(2)] = null);

(statearr_10831_10899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (3))){
var inst_10778 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10780__$1,inst_10778);
} else {
if((state_val_10781 === (12))){
var inst_10707 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10832_10900 = state_10780__$1;
(statearr_10832_10900[(2)] = inst_10707);

(statearr_10832_10900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (2))){
var state_10780__$1 = state_10780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10780__$1,(4),ch);
} else {
if((state_val_10781 === (23))){
var state_10780__$1 = state_10780;
var statearr_10833_10901 = state_10780__$1;
(statearr_10833_10901[(2)] = null);

(statearr_10833_10901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (35))){
var inst_10762 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10834_10902 = state_10780__$1;
(statearr_10834_10902[(2)] = inst_10762);

(statearr_10834_10902[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (19))){
var inst_10681 = (state_10780[(7)]);
var inst_10685 = cljs.core.chunk_first.call(null,inst_10681);
var inst_10686 = cljs.core.chunk_rest.call(null,inst_10681);
var inst_10687 = cljs.core.count.call(null,inst_10685);
var inst_10661 = inst_10686;
var inst_10662 = inst_10685;
var inst_10663 = inst_10687;
var inst_10664 = (0);
var state_10780__$1 = (function (){var statearr_10835 = state_10780;
(statearr_10835[(13)] = inst_10663);

(statearr_10835[(14)] = inst_10661);

(statearr_10835[(15)] = inst_10662);

(statearr_10835[(17)] = inst_10664);

return statearr_10835;
})();
var statearr_10836_10903 = state_10780__$1;
(statearr_10836_10903[(2)] = null);

(statearr_10836_10903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (11))){
var inst_10661 = (state_10780[(14)]);
var inst_10681 = (state_10780[(7)]);
var inst_10681__$1 = cljs.core.seq.call(null,inst_10661);
var state_10780__$1 = (function (){var statearr_10837 = state_10780;
(statearr_10837[(7)] = inst_10681__$1);

return statearr_10837;
})();
if(inst_10681__$1){
var statearr_10838_10904 = state_10780__$1;
(statearr_10838_10904[(1)] = (16));

} else {
var statearr_10839_10905 = state_10780__$1;
(statearr_10839_10905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (9))){
var inst_10709 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10840_10906 = state_10780__$1;
(statearr_10840_10906[(2)] = inst_10709);

(statearr_10840_10906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (5))){
var inst_10659 = cljs.core.deref.call(null,cs);
var inst_10660 = cljs.core.seq.call(null,inst_10659);
var inst_10661 = inst_10660;
var inst_10662 = null;
var inst_10663 = (0);
var inst_10664 = (0);
var state_10780__$1 = (function (){var statearr_10841 = state_10780;
(statearr_10841[(13)] = inst_10663);

(statearr_10841[(14)] = inst_10661);

(statearr_10841[(15)] = inst_10662);

(statearr_10841[(17)] = inst_10664);

return statearr_10841;
})();
var statearr_10842_10907 = state_10780__$1;
(statearr_10842_10907[(2)] = null);

(statearr_10842_10907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (14))){
var state_10780__$1 = state_10780;
var statearr_10843_10908 = state_10780__$1;
(statearr_10843_10908[(2)] = null);

(statearr_10843_10908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (45))){
var inst_10770 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10844_10909 = state_10780__$1;
(statearr_10844_10909[(2)] = inst_10770);

(statearr_10844_10909[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (26))){
var inst_10712 = (state_10780[(29)]);
var inst_10766 = (state_10780[(2)]);
var inst_10767 = cljs.core.seq.call(null,inst_10712);
var state_10780__$1 = (function (){var statearr_10845 = state_10780;
(statearr_10845[(31)] = inst_10766);

return statearr_10845;
})();
if(inst_10767){
var statearr_10846_10910 = state_10780__$1;
(statearr_10846_10910[(1)] = (42));

} else {
var statearr_10847_10911 = state_10780__$1;
(statearr_10847_10911[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (16))){
var inst_10681 = (state_10780[(7)]);
var inst_10683 = cljs.core.chunked_seq_QMARK_.call(null,inst_10681);
var state_10780__$1 = state_10780;
if(inst_10683){
var statearr_10848_10912 = state_10780__$1;
(statearr_10848_10912[(1)] = (19));

} else {
var statearr_10849_10913 = state_10780__$1;
(statearr_10849_10913[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (38))){
var inst_10759 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10850_10914 = state_10780__$1;
(statearr_10850_10914[(2)] = inst_10759);

(statearr_10850_10914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (30))){
var state_10780__$1 = state_10780;
var statearr_10851_10915 = state_10780__$1;
(statearr_10851_10915[(2)] = null);

(statearr_10851_10915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (10))){
var inst_10662 = (state_10780[(15)]);
var inst_10664 = (state_10780[(17)]);
var inst_10670 = cljs.core._nth.call(null,inst_10662,inst_10664);
var inst_10671 = cljs.core.nth.call(null,inst_10670,(0),null);
var inst_10672 = cljs.core.nth.call(null,inst_10670,(1),null);
var state_10780__$1 = (function (){var statearr_10852 = state_10780;
(statearr_10852[(26)] = inst_10671);

return statearr_10852;
})();
if(cljs.core.truth_(inst_10672)){
var statearr_10853_10916 = state_10780__$1;
(statearr_10853_10916[(1)] = (13));

} else {
var statearr_10854_10917 = state_10780__$1;
(statearr_10854_10917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (18))){
var inst_10705 = (state_10780[(2)]);
var state_10780__$1 = state_10780;
var statearr_10855_10918 = state_10780__$1;
(statearr_10855_10918[(2)] = inst_10705);

(statearr_10855_10918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (42))){
var state_10780__$1 = state_10780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10780__$1,(45),dchan);
} else {
if((state_val_10781 === (37))){
var inst_10652 = (state_10780[(9)]);
var inst_10739 = (state_10780[(25)]);
var inst_10748 = (state_10780[(23)]);
var inst_10748__$1 = cljs.core.first.call(null,inst_10739);
var inst_10749 = cljs.core.async.put_BANG_.call(null,inst_10748__$1,inst_10652,done);
var state_10780__$1 = (function (){var statearr_10856 = state_10780;
(statearr_10856[(23)] = inst_10748__$1);

return statearr_10856;
})();
if(cljs.core.truth_(inst_10749)){
var statearr_10857_10919 = state_10780__$1;
(statearr_10857_10919[(1)] = (39));

} else {
var statearr_10858_10920 = state_10780__$1;
(statearr_10858_10920[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10781 === (8))){
var inst_10663 = (state_10780[(13)]);
var inst_10664 = (state_10780[(17)]);
var inst_10666 = (inst_10664 < inst_10663);
var inst_10667 = inst_10666;
var state_10780__$1 = state_10780;
if(cljs.core.truth_(inst_10667)){
var statearr_10859_10921 = state_10780__$1;
(statearr_10859_10921[(1)] = (10));

} else {
var statearr_10860_10922 = state_10780__$1;
(statearr_10860_10922[(1)] = (11));

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
});})(c__9561__auto___10868,cs,m,dchan,dctr,done))
;
return ((function (switch__9496__auto__,c__9561__auto___10868,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9497__auto__ = null;
var cljs$core$async$mult_$_state_machine__9497__auto____0 = (function (){
var statearr_10864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10864[(0)] = cljs$core$async$mult_$_state_machine__9497__auto__);

(statearr_10864[(1)] = (1));

return statearr_10864;
});
var cljs$core$async$mult_$_state_machine__9497__auto____1 = (function (state_10780){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_10780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e10865){if((e10865 instanceof Object)){
var ex__9500__auto__ = e10865;
var statearr_10866_10923 = state_10780;
(statearr_10866_10923[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10924 = state_10780;
state_10780 = G__10924;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9497__auto__ = function(state_10780){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9497__auto____1.call(this,state_10780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9497__auto____0;
cljs$core$async$mult_$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9497__auto____1;
return cljs$core$async$mult_$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___10868,cs,m,dchan,dctr,done))
})();
var state__9563__auto__ = (function (){var statearr_10867 = f__9562__auto__.call(null);
(statearr_10867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___10868);

return statearr_10867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___10868,cs,m,dchan,dctr,done))
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
var args10925 = [];
var len__7214__auto___10928 = arguments.length;
var i__7215__auto___10929 = (0);
while(true){
if((i__7215__auto___10929 < len__7214__auto___10928)){
args10925.push((arguments[i__7215__auto___10929]));

var G__10930 = (i__7215__auto___10929 + (1));
i__7215__auto___10929 = G__10930;
continue;
} else {
}
break;
}

var G__10927 = args10925.length;
switch (G__10927) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10925.length)].join('')));

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
var len__7214__auto___10942 = arguments.length;
var i__7215__auto___10943 = (0);
while(true){
if((i__7215__auto___10943 < len__7214__auto___10942)){
args__7221__auto__.push((arguments[i__7215__auto___10943]));

var G__10944 = (i__7215__auto___10943 + (1));
i__7215__auto___10943 = G__10944;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10936){
var map__10937 = p__10936;
var map__10937__$1 = ((((!((map__10937 == null)))?((((map__10937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10937):map__10937);
var opts = map__10937__$1;
var statearr_10939_10945 = state;
(statearr_10939_10945[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10937,map__10937__$1,opts){
return (function (val){
var statearr_10940_10946 = state;
(statearr_10940_10946[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10937,map__10937__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10941_10947 = state;
(statearr_10941_10947[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10932){
var G__10933 = cljs.core.first.call(null,seq10932);
var seq10932__$1 = cljs.core.next.call(null,seq10932);
var G__10934 = cljs.core.first.call(null,seq10932__$1);
var seq10932__$2 = cljs.core.next.call(null,seq10932__$1);
var G__10935 = cljs.core.first.call(null,seq10932__$2);
var seq10932__$3 = cljs.core.next.call(null,seq10932__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10933,G__10934,G__10935,seq10932__$3);
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
if(typeof cljs.core.async.t_cljs$core$async11111 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11111 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11112){
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
this.meta11112 = meta11112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11113,meta11112__$1){
var self__ = this;
var _11113__$1 = this;
return (new cljs.core.async.t_cljs$core$async11111(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11112__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11113){
var self__ = this;
var _11113__$1 = this;
return self__.meta11112;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async11111.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta11112","meta11112",1797975334,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11111.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11111";

cljs.core.async.t_cljs$core$async11111.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11111");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11111 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11111(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11112){
return (new cljs.core.async.t_cljs$core$async11111(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11112));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11111(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9561__auto___11274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___11274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___11274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11211){
var state_val_11212 = (state_11211[(1)]);
if((state_val_11212 === (7))){
var inst_11129 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
var statearr_11213_11275 = state_11211__$1;
(statearr_11213_11275[(2)] = inst_11129);

(statearr_11213_11275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (20))){
var inst_11141 = (state_11211[(7)]);
var state_11211__$1 = state_11211;
var statearr_11214_11276 = state_11211__$1;
(statearr_11214_11276[(2)] = inst_11141);

(statearr_11214_11276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (27))){
var state_11211__$1 = state_11211;
var statearr_11215_11277 = state_11211__$1;
(statearr_11215_11277[(2)] = null);

(statearr_11215_11277[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (1))){
var inst_11117 = (state_11211[(8)]);
var inst_11117__$1 = calc_state.call(null);
var inst_11119 = (inst_11117__$1 == null);
var inst_11120 = cljs.core.not.call(null,inst_11119);
var state_11211__$1 = (function (){var statearr_11216 = state_11211;
(statearr_11216[(8)] = inst_11117__$1);

return statearr_11216;
})();
if(inst_11120){
var statearr_11217_11278 = state_11211__$1;
(statearr_11217_11278[(1)] = (2));

} else {
var statearr_11218_11279 = state_11211__$1;
(statearr_11218_11279[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (24))){
var inst_11164 = (state_11211[(9)]);
var inst_11171 = (state_11211[(10)]);
var inst_11185 = (state_11211[(11)]);
var inst_11185__$1 = inst_11164.call(null,inst_11171);
var state_11211__$1 = (function (){var statearr_11219 = state_11211;
(statearr_11219[(11)] = inst_11185__$1);

return statearr_11219;
})();
if(cljs.core.truth_(inst_11185__$1)){
var statearr_11220_11280 = state_11211__$1;
(statearr_11220_11280[(1)] = (29));

} else {
var statearr_11221_11281 = state_11211__$1;
(statearr_11221_11281[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (4))){
var inst_11132 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11132)){
var statearr_11222_11282 = state_11211__$1;
(statearr_11222_11282[(1)] = (8));

} else {
var statearr_11223_11283 = state_11211__$1;
(statearr_11223_11283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (15))){
var inst_11158 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11158)){
var statearr_11224_11284 = state_11211__$1;
(statearr_11224_11284[(1)] = (19));

} else {
var statearr_11225_11285 = state_11211__$1;
(statearr_11225_11285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (21))){
var inst_11163 = (state_11211[(12)]);
var inst_11163__$1 = (state_11211[(2)]);
var inst_11164 = cljs.core.get.call(null,inst_11163__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11165 = cljs.core.get.call(null,inst_11163__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11166 = cljs.core.get.call(null,inst_11163__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11211__$1 = (function (){var statearr_11226 = state_11211;
(statearr_11226[(12)] = inst_11163__$1);

(statearr_11226[(9)] = inst_11164);

(statearr_11226[(13)] = inst_11165);

return statearr_11226;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11211__$1,(22),inst_11166);
} else {
if((state_val_11212 === (31))){
var inst_11193 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11193)){
var statearr_11227_11286 = state_11211__$1;
(statearr_11227_11286[(1)] = (32));

} else {
var statearr_11228_11287 = state_11211__$1;
(statearr_11228_11287[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (32))){
var inst_11170 = (state_11211[(14)]);
var state_11211__$1 = state_11211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11211__$1,(35),out,inst_11170);
} else {
if((state_val_11212 === (33))){
var inst_11163 = (state_11211[(12)]);
var inst_11141 = inst_11163;
var state_11211__$1 = (function (){var statearr_11229 = state_11211;
(statearr_11229[(7)] = inst_11141);

return statearr_11229;
})();
var statearr_11230_11288 = state_11211__$1;
(statearr_11230_11288[(2)] = null);

(statearr_11230_11288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (13))){
var inst_11141 = (state_11211[(7)]);
var inst_11148 = inst_11141.cljs$lang$protocol_mask$partition0$;
var inst_11149 = (inst_11148 & (64));
var inst_11150 = inst_11141.cljs$core$ISeq$;
var inst_11151 = (inst_11149) || (inst_11150);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11151)){
var statearr_11231_11289 = state_11211__$1;
(statearr_11231_11289[(1)] = (16));

} else {
var statearr_11232_11290 = state_11211__$1;
(statearr_11232_11290[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (22))){
var inst_11171 = (state_11211[(10)]);
var inst_11170 = (state_11211[(14)]);
var inst_11169 = (state_11211[(2)]);
var inst_11170__$1 = cljs.core.nth.call(null,inst_11169,(0),null);
var inst_11171__$1 = cljs.core.nth.call(null,inst_11169,(1),null);
var inst_11172 = (inst_11170__$1 == null);
var inst_11173 = cljs.core._EQ_.call(null,inst_11171__$1,change);
var inst_11174 = (inst_11172) || (inst_11173);
var state_11211__$1 = (function (){var statearr_11233 = state_11211;
(statearr_11233[(10)] = inst_11171__$1);

(statearr_11233[(14)] = inst_11170__$1);

return statearr_11233;
})();
if(cljs.core.truth_(inst_11174)){
var statearr_11234_11291 = state_11211__$1;
(statearr_11234_11291[(1)] = (23));

} else {
var statearr_11235_11292 = state_11211__$1;
(statearr_11235_11292[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (36))){
var inst_11163 = (state_11211[(12)]);
var inst_11141 = inst_11163;
var state_11211__$1 = (function (){var statearr_11236 = state_11211;
(statearr_11236[(7)] = inst_11141);

return statearr_11236;
})();
var statearr_11237_11293 = state_11211__$1;
(statearr_11237_11293[(2)] = null);

(statearr_11237_11293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (29))){
var inst_11185 = (state_11211[(11)]);
var state_11211__$1 = state_11211;
var statearr_11238_11294 = state_11211__$1;
(statearr_11238_11294[(2)] = inst_11185);

(statearr_11238_11294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (6))){
var state_11211__$1 = state_11211;
var statearr_11239_11295 = state_11211__$1;
(statearr_11239_11295[(2)] = false);

(statearr_11239_11295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (28))){
var inst_11181 = (state_11211[(2)]);
var inst_11182 = calc_state.call(null);
var inst_11141 = inst_11182;
var state_11211__$1 = (function (){var statearr_11240 = state_11211;
(statearr_11240[(7)] = inst_11141);

(statearr_11240[(15)] = inst_11181);

return statearr_11240;
})();
var statearr_11241_11296 = state_11211__$1;
(statearr_11241_11296[(2)] = null);

(statearr_11241_11296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (25))){
var inst_11207 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
var statearr_11242_11297 = state_11211__$1;
(statearr_11242_11297[(2)] = inst_11207);

(statearr_11242_11297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (34))){
var inst_11205 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
var statearr_11243_11298 = state_11211__$1;
(statearr_11243_11298[(2)] = inst_11205);

(statearr_11243_11298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (17))){
var state_11211__$1 = state_11211;
var statearr_11244_11299 = state_11211__$1;
(statearr_11244_11299[(2)] = false);

(statearr_11244_11299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (3))){
var state_11211__$1 = state_11211;
var statearr_11245_11300 = state_11211__$1;
(statearr_11245_11300[(2)] = false);

(statearr_11245_11300[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (12))){
var inst_11209 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11211__$1,inst_11209);
} else {
if((state_val_11212 === (2))){
var inst_11117 = (state_11211[(8)]);
var inst_11122 = inst_11117.cljs$lang$protocol_mask$partition0$;
var inst_11123 = (inst_11122 & (64));
var inst_11124 = inst_11117.cljs$core$ISeq$;
var inst_11125 = (inst_11123) || (inst_11124);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11125)){
var statearr_11246_11301 = state_11211__$1;
(statearr_11246_11301[(1)] = (5));

} else {
var statearr_11247_11302 = state_11211__$1;
(statearr_11247_11302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (23))){
var inst_11170 = (state_11211[(14)]);
var inst_11176 = (inst_11170 == null);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11176)){
var statearr_11248_11303 = state_11211__$1;
(statearr_11248_11303[(1)] = (26));

} else {
var statearr_11249_11304 = state_11211__$1;
(statearr_11249_11304[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (35))){
var inst_11196 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
if(cljs.core.truth_(inst_11196)){
var statearr_11250_11305 = state_11211__$1;
(statearr_11250_11305[(1)] = (36));

} else {
var statearr_11251_11306 = state_11211__$1;
(statearr_11251_11306[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (19))){
var inst_11141 = (state_11211[(7)]);
var inst_11160 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11141);
var state_11211__$1 = state_11211;
var statearr_11252_11307 = state_11211__$1;
(statearr_11252_11307[(2)] = inst_11160);

(statearr_11252_11307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (11))){
var inst_11141 = (state_11211[(7)]);
var inst_11145 = (inst_11141 == null);
var inst_11146 = cljs.core.not.call(null,inst_11145);
var state_11211__$1 = state_11211;
if(inst_11146){
var statearr_11253_11308 = state_11211__$1;
(statearr_11253_11308[(1)] = (13));

} else {
var statearr_11254_11309 = state_11211__$1;
(statearr_11254_11309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (9))){
var inst_11117 = (state_11211[(8)]);
var state_11211__$1 = state_11211;
var statearr_11255_11310 = state_11211__$1;
(statearr_11255_11310[(2)] = inst_11117);

(statearr_11255_11310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (5))){
var state_11211__$1 = state_11211;
var statearr_11256_11311 = state_11211__$1;
(statearr_11256_11311[(2)] = true);

(statearr_11256_11311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (14))){
var state_11211__$1 = state_11211;
var statearr_11257_11312 = state_11211__$1;
(statearr_11257_11312[(2)] = false);

(statearr_11257_11312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (26))){
var inst_11171 = (state_11211[(10)]);
var inst_11178 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11171);
var state_11211__$1 = state_11211;
var statearr_11258_11313 = state_11211__$1;
(statearr_11258_11313[(2)] = inst_11178);

(statearr_11258_11313[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (16))){
var state_11211__$1 = state_11211;
var statearr_11259_11314 = state_11211__$1;
(statearr_11259_11314[(2)] = true);

(statearr_11259_11314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (38))){
var inst_11201 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
var statearr_11260_11315 = state_11211__$1;
(statearr_11260_11315[(2)] = inst_11201);

(statearr_11260_11315[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (30))){
var inst_11164 = (state_11211[(9)]);
var inst_11165 = (state_11211[(13)]);
var inst_11171 = (state_11211[(10)]);
var inst_11188 = cljs.core.empty_QMARK_.call(null,inst_11164);
var inst_11189 = inst_11165.call(null,inst_11171);
var inst_11190 = cljs.core.not.call(null,inst_11189);
var inst_11191 = (inst_11188) && (inst_11190);
var state_11211__$1 = state_11211;
var statearr_11261_11316 = state_11211__$1;
(statearr_11261_11316[(2)] = inst_11191);

(statearr_11261_11316[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (10))){
var inst_11117 = (state_11211[(8)]);
var inst_11137 = (state_11211[(2)]);
var inst_11138 = cljs.core.get.call(null,inst_11137,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11139 = cljs.core.get.call(null,inst_11137,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11140 = cljs.core.get.call(null,inst_11137,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11141 = inst_11117;
var state_11211__$1 = (function (){var statearr_11262 = state_11211;
(statearr_11262[(16)] = inst_11139);

(statearr_11262[(17)] = inst_11138);

(statearr_11262[(18)] = inst_11140);

(statearr_11262[(7)] = inst_11141);

return statearr_11262;
})();
var statearr_11263_11317 = state_11211__$1;
(statearr_11263_11317[(2)] = null);

(statearr_11263_11317[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (18))){
var inst_11155 = (state_11211[(2)]);
var state_11211__$1 = state_11211;
var statearr_11264_11318 = state_11211__$1;
(statearr_11264_11318[(2)] = inst_11155);

(statearr_11264_11318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (37))){
var state_11211__$1 = state_11211;
var statearr_11265_11319 = state_11211__$1;
(statearr_11265_11319[(2)] = null);

(statearr_11265_11319[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11212 === (8))){
var inst_11117 = (state_11211[(8)]);
var inst_11134 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11117);
var state_11211__$1 = state_11211;
var statearr_11266_11320 = state_11211__$1;
(statearr_11266_11320[(2)] = inst_11134);

(statearr_11266_11320[(1)] = (10));


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
});})(c__9561__auto___11274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9496__auto__,c__9561__auto___11274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9497__auto__ = null;
var cljs$core$async$mix_$_state_machine__9497__auto____0 = (function (){
var statearr_11270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11270[(0)] = cljs$core$async$mix_$_state_machine__9497__auto__);

(statearr_11270[(1)] = (1));

return statearr_11270;
});
var cljs$core$async$mix_$_state_machine__9497__auto____1 = (function (state_11211){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e11271){if((e11271 instanceof Object)){
var ex__9500__auto__ = e11271;
var statearr_11272_11321 = state_11211;
(statearr_11272_11321[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11322 = state_11211;
state_11211 = G__11322;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9497__auto__ = function(state_11211){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9497__auto____1.call(this,state_11211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9497__auto____0;
cljs$core$async$mix_$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9497__auto____1;
return cljs$core$async$mix_$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___11274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9563__auto__ = (function (){var statearr_11273 = f__9562__auto__.call(null);
(statearr_11273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___11274);

return statearr_11273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___11274,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args11323 = [];
var len__7214__auto___11326 = arguments.length;
var i__7215__auto___11327 = (0);
while(true){
if((i__7215__auto___11327 < len__7214__auto___11326)){
args11323.push((arguments[i__7215__auto___11327]));

var G__11328 = (i__7215__auto___11327 + (1));
i__7215__auto___11327 = G__11328;
continue;
} else {
}
break;
}

var G__11325 = args11323.length;
switch (G__11325) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11323.length)].join('')));

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
var args11331 = [];
var len__7214__auto___11456 = arguments.length;
var i__7215__auto___11457 = (0);
while(true){
if((i__7215__auto___11457 < len__7214__auto___11456)){
args11331.push((arguments[i__7215__auto___11457]));

var G__11458 = (i__7215__auto___11457 + (1));
i__7215__auto___11457 = G__11458;
continue;
} else {
}
break;
}

var G__11333 = args11331.length;
switch (G__11333) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11331.length)].join('')));

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
return (function (p1__11330_SHARP_){
if(cljs.core.truth_(p1__11330_SHARP_.call(null,topic))){
return p1__11330_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11330_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6156__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11334 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11335){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11335 = meta11335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11336,meta11335__$1){
var self__ = this;
var _11336__$1 = this;
return (new cljs.core.async.t_cljs$core$async11334(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11335__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11336){
var self__ = this;
var _11336__$1 = this;
return self__.meta11335;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11335","meta11335",258173501,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11334";

cljs.core.async.t_cljs$core$async11334.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11334");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11334 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11335){
return (new cljs.core.async.t_cljs$core$async11334(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11335));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11334(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9561__auto___11460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___11460,mults,ensure_mult,p){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___11460,mults,ensure_mult,p){
return (function (state_11408){
var state_val_11409 = (state_11408[(1)]);
if((state_val_11409 === (7))){
var inst_11404 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
var statearr_11410_11461 = state_11408__$1;
(statearr_11410_11461[(2)] = inst_11404);

(statearr_11410_11461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (20))){
var state_11408__$1 = state_11408;
var statearr_11411_11462 = state_11408__$1;
(statearr_11411_11462[(2)] = null);

(statearr_11411_11462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (1))){
var state_11408__$1 = state_11408;
var statearr_11412_11463 = state_11408__$1;
(statearr_11412_11463[(2)] = null);

(statearr_11412_11463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (24))){
var inst_11387 = (state_11408[(7)]);
var inst_11396 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11387);
var state_11408__$1 = state_11408;
var statearr_11413_11464 = state_11408__$1;
(statearr_11413_11464[(2)] = inst_11396);

(statearr_11413_11464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (4))){
var inst_11339 = (state_11408[(8)]);
var inst_11339__$1 = (state_11408[(2)]);
var inst_11340 = (inst_11339__$1 == null);
var state_11408__$1 = (function (){var statearr_11414 = state_11408;
(statearr_11414[(8)] = inst_11339__$1);

return statearr_11414;
})();
if(cljs.core.truth_(inst_11340)){
var statearr_11415_11465 = state_11408__$1;
(statearr_11415_11465[(1)] = (5));

} else {
var statearr_11416_11466 = state_11408__$1;
(statearr_11416_11466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (15))){
var inst_11381 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
var statearr_11417_11467 = state_11408__$1;
(statearr_11417_11467[(2)] = inst_11381);

(statearr_11417_11467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (21))){
var inst_11401 = (state_11408[(2)]);
var state_11408__$1 = (function (){var statearr_11418 = state_11408;
(statearr_11418[(9)] = inst_11401);

return statearr_11418;
})();
var statearr_11419_11468 = state_11408__$1;
(statearr_11419_11468[(2)] = null);

(statearr_11419_11468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (13))){
var inst_11363 = (state_11408[(10)]);
var inst_11365 = cljs.core.chunked_seq_QMARK_.call(null,inst_11363);
var state_11408__$1 = state_11408;
if(inst_11365){
var statearr_11420_11469 = state_11408__$1;
(statearr_11420_11469[(1)] = (16));

} else {
var statearr_11421_11470 = state_11408__$1;
(statearr_11421_11470[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (22))){
var inst_11393 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
if(cljs.core.truth_(inst_11393)){
var statearr_11422_11471 = state_11408__$1;
(statearr_11422_11471[(1)] = (23));

} else {
var statearr_11423_11472 = state_11408__$1;
(statearr_11423_11472[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (6))){
var inst_11339 = (state_11408[(8)]);
var inst_11389 = (state_11408[(11)]);
var inst_11387 = (state_11408[(7)]);
var inst_11387__$1 = topic_fn.call(null,inst_11339);
var inst_11388 = cljs.core.deref.call(null,mults);
var inst_11389__$1 = cljs.core.get.call(null,inst_11388,inst_11387__$1);
var state_11408__$1 = (function (){var statearr_11424 = state_11408;
(statearr_11424[(11)] = inst_11389__$1);

(statearr_11424[(7)] = inst_11387__$1);

return statearr_11424;
})();
if(cljs.core.truth_(inst_11389__$1)){
var statearr_11425_11473 = state_11408__$1;
(statearr_11425_11473[(1)] = (19));

} else {
var statearr_11426_11474 = state_11408__$1;
(statearr_11426_11474[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (25))){
var inst_11398 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
var statearr_11427_11475 = state_11408__$1;
(statearr_11427_11475[(2)] = inst_11398);

(statearr_11427_11475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (17))){
var inst_11363 = (state_11408[(10)]);
var inst_11372 = cljs.core.first.call(null,inst_11363);
var inst_11373 = cljs.core.async.muxch_STAR_.call(null,inst_11372);
var inst_11374 = cljs.core.async.close_BANG_.call(null,inst_11373);
var inst_11375 = cljs.core.next.call(null,inst_11363);
var inst_11349 = inst_11375;
var inst_11350 = null;
var inst_11351 = (0);
var inst_11352 = (0);
var state_11408__$1 = (function (){var statearr_11428 = state_11408;
(statearr_11428[(12)] = inst_11352);

(statearr_11428[(13)] = inst_11374);

(statearr_11428[(14)] = inst_11349);

(statearr_11428[(15)] = inst_11351);

(statearr_11428[(16)] = inst_11350);

return statearr_11428;
})();
var statearr_11429_11476 = state_11408__$1;
(statearr_11429_11476[(2)] = null);

(statearr_11429_11476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (3))){
var inst_11406 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11408__$1,inst_11406);
} else {
if((state_val_11409 === (12))){
var inst_11383 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
var statearr_11430_11477 = state_11408__$1;
(statearr_11430_11477[(2)] = inst_11383);

(statearr_11430_11477[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (2))){
var state_11408__$1 = state_11408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11408__$1,(4),ch);
} else {
if((state_val_11409 === (23))){
var state_11408__$1 = state_11408;
var statearr_11431_11478 = state_11408__$1;
(statearr_11431_11478[(2)] = null);

(statearr_11431_11478[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (19))){
var inst_11339 = (state_11408[(8)]);
var inst_11389 = (state_11408[(11)]);
var inst_11391 = cljs.core.async.muxch_STAR_.call(null,inst_11389);
var state_11408__$1 = state_11408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11408__$1,(22),inst_11391,inst_11339);
} else {
if((state_val_11409 === (11))){
var inst_11349 = (state_11408[(14)]);
var inst_11363 = (state_11408[(10)]);
var inst_11363__$1 = cljs.core.seq.call(null,inst_11349);
var state_11408__$1 = (function (){var statearr_11432 = state_11408;
(statearr_11432[(10)] = inst_11363__$1);

return statearr_11432;
})();
if(inst_11363__$1){
var statearr_11433_11479 = state_11408__$1;
(statearr_11433_11479[(1)] = (13));

} else {
var statearr_11434_11480 = state_11408__$1;
(statearr_11434_11480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (9))){
var inst_11385 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
var statearr_11435_11481 = state_11408__$1;
(statearr_11435_11481[(2)] = inst_11385);

(statearr_11435_11481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (5))){
var inst_11346 = cljs.core.deref.call(null,mults);
var inst_11347 = cljs.core.vals.call(null,inst_11346);
var inst_11348 = cljs.core.seq.call(null,inst_11347);
var inst_11349 = inst_11348;
var inst_11350 = null;
var inst_11351 = (0);
var inst_11352 = (0);
var state_11408__$1 = (function (){var statearr_11436 = state_11408;
(statearr_11436[(12)] = inst_11352);

(statearr_11436[(14)] = inst_11349);

(statearr_11436[(15)] = inst_11351);

(statearr_11436[(16)] = inst_11350);

return statearr_11436;
})();
var statearr_11437_11482 = state_11408__$1;
(statearr_11437_11482[(2)] = null);

(statearr_11437_11482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (14))){
var state_11408__$1 = state_11408;
var statearr_11441_11483 = state_11408__$1;
(statearr_11441_11483[(2)] = null);

(statearr_11441_11483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (16))){
var inst_11363 = (state_11408[(10)]);
var inst_11367 = cljs.core.chunk_first.call(null,inst_11363);
var inst_11368 = cljs.core.chunk_rest.call(null,inst_11363);
var inst_11369 = cljs.core.count.call(null,inst_11367);
var inst_11349 = inst_11368;
var inst_11350 = inst_11367;
var inst_11351 = inst_11369;
var inst_11352 = (0);
var state_11408__$1 = (function (){var statearr_11442 = state_11408;
(statearr_11442[(12)] = inst_11352);

(statearr_11442[(14)] = inst_11349);

(statearr_11442[(15)] = inst_11351);

(statearr_11442[(16)] = inst_11350);

return statearr_11442;
})();
var statearr_11443_11484 = state_11408__$1;
(statearr_11443_11484[(2)] = null);

(statearr_11443_11484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (10))){
var inst_11352 = (state_11408[(12)]);
var inst_11349 = (state_11408[(14)]);
var inst_11351 = (state_11408[(15)]);
var inst_11350 = (state_11408[(16)]);
var inst_11357 = cljs.core._nth.call(null,inst_11350,inst_11352);
var inst_11358 = cljs.core.async.muxch_STAR_.call(null,inst_11357);
var inst_11359 = cljs.core.async.close_BANG_.call(null,inst_11358);
var inst_11360 = (inst_11352 + (1));
var tmp11438 = inst_11349;
var tmp11439 = inst_11351;
var tmp11440 = inst_11350;
var inst_11349__$1 = tmp11438;
var inst_11350__$1 = tmp11440;
var inst_11351__$1 = tmp11439;
var inst_11352__$1 = inst_11360;
var state_11408__$1 = (function (){var statearr_11444 = state_11408;
(statearr_11444[(12)] = inst_11352__$1);

(statearr_11444[(17)] = inst_11359);

(statearr_11444[(14)] = inst_11349__$1);

(statearr_11444[(15)] = inst_11351__$1);

(statearr_11444[(16)] = inst_11350__$1);

return statearr_11444;
})();
var statearr_11445_11485 = state_11408__$1;
(statearr_11445_11485[(2)] = null);

(statearr_11445_11485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (18))){
var inst_11378 = (state_11408[(2)]);
var state_11408__$1 = state_11408;
var statearr_11446_11486 = state_11408__$1;
(statearr_11446_11486[(2)] = inst_11378);

(statearr_11446_11486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11409 === (8))){
var inst_11352 = (state_11408[(12)]);
var inst_11351 = (state_11408[(15)]);
var inst_11354 = (inst_11352 < inst_11351);
var inst_11355 = inst_11354;
var state_11408__$1 = state_11408;
if(cljs.core.truth_(inst_11355)){
var statearr_11447_11487 = state_11408__$1;
(statearr_11447_11487[(1)] = (10));

} else {
var statearr_11448_11488 = state_11408__$1;
(statearr_11448_11488[(1)] = (11));

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
});})(c__9561__auto___11460,mults,ensure_mult,p))
;
return ((function (switch__9496__auto__,c__9561__auto___11460,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_11452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11452[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_11452[(1)] = (1));

return statearr_11452;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_11408){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e11453){if((e11453 instanceof Object)){
var ex__9500__auto__ = e11453;
var statearr_11454_11489 = state_11408;
(statearr_11454_11489[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11490 = state_11408;
state_11408 = G__11490;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_11408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_11408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___11460,mults,ensure_mult,p))
})();
var state__9563__auto__ = (function (){var statearr_11455 = f__9562__auto__.call(null);
(statearr_11455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___11460);

return statearr_11455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___11460,mults,ensure_mult,p))
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
var args11491 = [];
var len__7214__auto___11494 = arguments.length;
var i__7215__auto___11495 = (0);
while(true){
if((i__7215__auto___11495 < len__7214__auto___11494)){
args11491.push((arguments[i__7215__auto___11495]));

var G__11496 = (i__7215__auto___11495 + (1));
i__7215__auto___11495 = G__11496;
continue;
} else {
}
break;
}

var G__11493 = args11491.length;
switch (G__11493) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11491.length)].join('')));

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
var args11498 = [];
var len__7214__auto___11501 = arguments.length;
var i__7215__auto___11502 = (0);
while(true){
if((i__7215__auto___11502 < len__7214__auto___11501)){
args11498.push((arguments[i__7215__auto___11502]));

var G__11503 = (i__7215__auto___11502 + (1));
i__7215__auto___11502 = G__11503;
continue;
} else {
}
break;
}

var G__11500 = args11498.length;
switch (G__11500) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11498.length)].join('')));

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
var args11505 = [];
var len__7214__auto___11576 = arguments.length;
var i__7215__auto___11577 = (0);
while(true){
if((i__7215__auto___11577 < len__7214__auto___11576)){
args11505.push((arguments[i__7215__auto___11577]));

var G__11578 = (i__7215__auto___11577 + (1));
i__7215__auto___11577 = G__11578;
continue;
} else {
}
break;
}

var G__11507 = args11505.length;
switch (G__11507) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11505.length)].join('')));

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
var c__9561__auto___11580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___11580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___11580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11546){
var state_val_11547 = (state_11546[(1)]);
if((state_val_11547 === (7))){
var state_11546__$1 = state_11546;
var statearr_11548_11581 = state_11546__$1;
(statearr_11548_11581[(2)] = null);

(statearr_11548_11581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (1))){
var state_11546__$1 = state_11546;
var statearr_11549_11582 = state_11546__$1;
(statearr_11549_11582[(2)] = null);

(statearr_11549_11582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (4))){
var inst_11510 = (state_11546[(7)]);
var inst_11512 = (inst_11510 < cnt);
var state_11546__$1 = state_11546;
if(cljs.core.truth_(inst_11512)){
var statearr_11550_11583 = state_11546__$1;
(statearr_11550_11583[(1)] = (6));

} else {
var statearr_11551_11584 = state_11546__$1;
(statearr_11551_11584[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (15))){
var inst_11542 = (state_11546[(2)]);
var state_11546__$1 = state_11546;
var statearr_11552_11585 = state_11546__$1;
(statearr_11552_11585[(2)] = inst_11542);

(statearr_11552_11585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (13))){
var inst_11535 = cljs.core.async.close_BANG_.call(null,out);
var state_11546__$1 = state_11546;
var statearr_11553_11586 = state_11546__$1;
(statearr_11553_11586[(2)] = inst_11535);

(statearr_11553_11586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (6))){
var state_11546__$1 = state_11546;
var statearr_11554_11587 = state_11546__$1;
(statearr_11554_11587[(2)] = null);

(statearr_11554_11587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (3))){
var inst_11544 = (state_11546[(2)]);
var state_11546__$1 = state_11546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11546__$1,inst_11544);
} else {
if((state_val_11547 === (12))){
var inst_11532 = (state_11546[(8)]);
var inst_11532__$1 = (state_11546[(2)]);
var inst_11533 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11532__$1);
var state_11546__$1 = (function (){var statearr_11555 = state_11546;
(statearr_11555[(8)] = inst_11532__$1);

return statearr_11555;
})();
if(cljs.core.truth_(inst_11533)){
var statearr_11556_11588 = state_11546__$1;
(statearr_11556_11588[(1)] = (13));

} else {
var statearr_11557_11589 = state_11546__$1;
(statearr_11557_11589[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (2))){
var inst_11509 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11510 = (0);
var state_11546__$1 = (function (){var statearr_11558 = state_11546;
(statearr_11558[(9)] = inst_11509);

(statearr_11558[(7)] = inst_11510);

return statearr_11558;
})();
var statearr_11559_11590 = state_11546__$1;
(statearr_11559_11590[(2)] = null);

(statearr_11559_11590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (11))){
var inst_11510 = (state_11546[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11546,(10),Object,null,(9));
var inst_11519 = chs__$1.call(null,inst_11510);
var inst_11520 = done.call(null,inst_11510);
var inst_11521 = cljs.core.async.take_BANG_.call(null,inst_11519,inst_11520);
var state_11546__$1 = state_11546;
var statearr_11560_11591 = state_11546__$1;
(statearr_11560_11591[(2)] = inst_11521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11546__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (9))){
var inst_11510 = (state_11546[(7)]);
var inst_11523 = (state_11546[(2)]);
var inst_11524 = (inst_11510 + (1));
var inst_11510__$1 = inst_11524;
var state_11546__$1 = (function (){var statearr_11561 = state_11546;
(statearr_11561[(10)] = inst_11523);

(statearr_11561[(7)] = inst_11510__$1);

return statearr_11561;
})();
var statearr_11562_11592 = state_11546__$1;
(statearr_11562_11592[(2)] = null);

(statearr_11562_11592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (5))){
var inst_11530 = (state_11546[(2)]);
var state_11546__$1 = (function (){var statearr_11563 = state_11546;
(statearr_11563[(11)] = inst_11530);

return statearr_11563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11546__$1,(12),dchan);
} else {
if((state_val_11547 === (14))){
var inst_11532 = (state_11546[(8)]);
var inst_11537 = cljs.core.apply.call(null,f,inst_11532);
var state_11546__$1 = state_11546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11546__$1,(16),out,inst_11537);
} else {
if((state_val_11547 === (16))){
var inst_11539 = (state_11546[(2)]);
var state_11546__$1 = (function (){var statearr_11564 = state_11546;
(statearr_11564[(12)] = inst_11539);

return statearr_11564;
})();
var statearr_11565_11593 = state_11546__$1;
(statearr_11565_11593[(2)] = null);

(statearr_11565_11593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (10))){
var inst_11514 = (state_11546[(2)]);
var inst_11515 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11546__$1 = (function (){var statearr_11566 = state_11546;
(statearr_11566[(13)] = inst_11514);

return statearr_11566;
})();
var statearr_11567_11594 = state_11546__$1;
(statearr_11567_11594[(2)] = inst_11515);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11546__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11547 === (8))){
var inst_11528 = (state_11546[(2)]);
var state_11546__$1 = state_11546;
var statearr_11568_11595 = state_11546__$1;
(statearr_11568_11595[(2)] = inst_11528);

(statearr_11568_11595[(1)] = (5));


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
});})(c__9561__auto___11580,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9496__auto__,c__9561__auto___11580,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_11572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11572[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_11572[(1)] = (1));

return statearr_11572;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_11546){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e11573){if((e11573 instanceof Object)){
var ex__9500__auto__ = e11573;
var statearr_11574_11596 = state_11546;
(statearr_11574_11596[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11597 = state_11546;
state_11546 = G__11597;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_11546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_11546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___11580,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9563__auto__ = (function (){var statearr_11575 = f__9562__auto__.call(null);
(statearr_11575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___11580);

return statearr_11575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___11580,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11599 = [];
var len__7214__auto___11655 = arguments.length;
var i__7215__auto___11656 = (0);
while(true){
if((i__7215__auto___11656 < len__7214__auto___11655)){
args11599.push((arguments[i__7215__auto___11656]));

var G__11657 = (i__7215__auto___11656 + (1));
i__7215__auto___11656 = G__11657;
continue;
} else {
}
break;
}

var G__11601 = args11599.length;
switch (G__11601) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11599.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9561__auto___11659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___11659,out){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___11659,out){
return (function (state_11631){
var state_val_11632 = (state_11631[(1)]);
if((state_val_11632 === (7))){
var inst_11611 = (state_11631[(7)]);
var inst_11610 = (state_11631[(8)]);
var inst_11610__$1 = (state_11631[(2)]);
var inst_11611__$1 = cljs.core.nth.call(null,inst_11610__$1,(0),null);
var inst_11612 = cljs.core.nth.call(null,inst_11610__$1,(1),null);
var inst_11613 = (inst_11611__$1 == null);
var state_11631__$1 = (function (){var statearr_11633 = state_11631;
(statearr_11633[(7)] = inst_11611__$1);

(statearr_11633[(8)] = inst_11610__$1);

(statearr_11633[(9)] = inst_11612);

return statearr_11633;
})();
if(cljs.core.truth_(inst_11613)){
var statearr_11634_11660 = state_11631__$1;
(statearr_11634_11660[(1)] = (8));

} else {
var statearr_11635_11661 = state_11631__$1;
(statearr_11635_11661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (1))){
var inst_11602 = cljs.core.vec.call(null,chs);
var inst_11603 = inst_11602;
var state_11631__$1 = (function (){var statearr_11636 = state_11631;
(statearr_11636[(10)] = inst_11603);

return statearr_11636;
})();
var statearr_11637_11662 = state_11631__$1;
(statearr_11637_11662[(2)] = null);

(statearr_11637_11662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (4))){
var inst_11603 = (state_11631[(10)]);
var state_11631__$1 = state_11631;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11631__$1,(7),inst_11603);
} else {
if((state_val_11632 === (6))){
var inst_11627 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11638_11663 = state_11631__$1;
(statearr_11638_11663[(2)] = inst_11627);

(statearr_11638_11663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (3))){
var inst_11629 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11631__$1,inst_11629);
} else {
if((state_val_11632 === (2))){
var inst_11603 = (state_11631[(10)]);
var inst_11605 = cljs.core.count.call(null,inst_11603);
var inst_11606 = (inst_11605 > (0));
var state_11631__$1 = state_11631;
if(cljs.core.truth_(inst_11606)){
var statearr_11640_11664 = state_11631__$1;
(statearr_11640_11664[(1)] = (4));

} else {
var statearr_11641_11665 = state_11631__$1;
(statearr_11641_11665[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (11))){
var inst_11603 = (state_11631[(10)]);
var inst_11620 = (state_11631[(2)]);
var tmp11639 = inst_11603;
var inst_11603__$1 = tmp11639;
var state_11631__$1 = (function (){var statearr_11642 = state_11631;
(statearr_11642[(11)] = inst_11620);

(statearr_11642[(10)] = inst_11603__$1);

return statearr_11642;
})();
var statearr_11643_11666 = state_11631__$1;
(statearr_11643_11666[(2)] = null);

(statearr_11643_11666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (9))){
var inst_11611 = (state_11631[(7)]);
var state_11631__$1 = state_11631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11631__$1,(11),out,inst_11611);
} else {
if((state_val_11632 === (5))){
var inst_11625 = cljs.core.async.close_BANG_.call(null,out);
var state_11631__$1 = state_11631;
var statearr_11644_11667 = state_11631__$1;
(statearr_11644_11667[(2)] = inst_11625);

(statearr_11644_11667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (10))){
var inst_11623 = (state_11631[(2)]);
var state_11631__$1 = state_11631;
var statearr_11645_11668 = state_11631__$1;
(statearr_11645_11668[(2)] = inst_11623);

(statearr_11645_11668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11632 === (8))){
var inst_11611 = (state_11631[(7)]);
var inst_11610 = (state_11631[(8)]);
var inst_11603 = (state_11631[(10)]);
var inst_11612 = (state_11631[(9)]);
var inst_11615 = (function (){var cs = inst_11603;
var vec__11608 = inst_11610;
var v = inst_11611;
var c = inst_11612;
return ((function (cs,vec__11608,v,c,inst_11611,inst_11610,inst_11603,inst_11612,state_val_11632,c__9561__auto___11659,out){
return (function (p1__11598_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11598_SHARP_);
});
;})(cs,vec__11608,v,c,inst_11611,inst_11610,inst_11603,inst_11612,state_val_11632,c__9561__auto___11659,out))
})();
var inst_11616 = cljs.core.filterv.call(null,inst_11615,inst_11603);
var inst_11603__$1 = inst_11616;
var state_11631__$1 = (function (){var statearr_11646 = state_11631;
(statearr_11646[(10)] = inst_11603__$1);

return statearr_11646;
})();
var statearr_11647_11669 = state_11631__$1;
(statearr_11647_11669[(2)] = null);

(statearr_11647_11669[(1)] = (2));


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
});})(c__9561__auto___11659,out))
;
return ((function (switch__9496__auto__,c__9561__auto___11659,out){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_11651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11651[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_11651[(1)] = (1));

return statearr_11651;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_11631){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e11652){if((e11652 instanceof Object)){
var ex__9500__auto__ = e11652;
var statearr_11653_11670 = state_11631;
(statearr_11653_11670[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11671 = state_11631;
state_11631 = G__11671;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_11631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_11631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___11659,out))
})();
var state__9563__auto__ = (function (){var statearr_11654 = f__9562__auto__.call(null);
(statearr_11654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___11659);

return statearr_11654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___11659,out))
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
var args11672 = [];
var len__7214__auto___11721 = arguments.length;
var i__7215__auto___11722 = (0);
while(true){
if((i__7215__auto___11722 < len__7214__auto___11721)){
args11672.push((arguments[i__7215__auto___11722]));

var G__11723 = (i__7215__auto___11722 + (1));
i__7215__auto___11722 = G__11723;
continue;
} else {
}
break;
}

var G__11674 = args11672.length;
switch (G__11674) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11672.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9561__auto___11725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___11725,out){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___11725,out){
return (function (state_11698){
var state_val_11699 = (state_11698[(1)]);
if((state_val_11699 === (7))){
var inst_11680 = (state_11698[(7)]);
var inst_11680__$1 = (state_11698[(2)]);
var inst_11681 = (inst_11680__$1 == null);
var inst_11682 = cljs.core.not.call(null,inst_11681);
var state_11698__$1 = (function (){var statearr_11700 = state_11698;
(statearr_11700[(7)] = inst_11680__$1);

return statearr_11700;
})();
if(inst_11682){
var statearr_11701_11726 = state_11698__$1;
(statearr_11701_11726[(1)] = (8));

} else {
var statearr_11702_11727 = state_11698__$1;
(statearr_11702_11727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (1))){
var inst_11675 = (0);
var state_11698__$1 = (function (){var statearr_11703 = state_11698;
(statearr_11703[(8)] = inst_11675);

return statearr_11703;
})();
var statearr_11704_11728 = state_11698__$1;
(statearr_11704_11728[(2)] = null);

(statearr_11704_11728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (4))){
var state_11698__$1 = state_11698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11698__$1,(7),ch);
} else {
if((state_val_11699 === (6))){
var inst_11693 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
var statearr_11705_11729 = state_11698__$1;
(statearr_11705_11729[(2)] = inst_11693);

(statearr_11705_11729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (3))){
var inst_11695 = (state_11698[(2)]);
var inst_11696 = cljs.core.async.close_BANG_.call(null,out);
var state_11698__$1 = (function (){var statearr_11706 = state_11698;
(statearr_11706[(9)] = inst_11695);

return statearr_11706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11698__$1,inst_11696);
} else {
if((state_val_11699 === (2))){
var inst_11675 = (state_11698[(8)]);
var inst_11677 = (inst_11675 < n);
var state_11698__$1 = state_11698;
if(cljs.core.truth_(inst_11677)){
var statearr_11707_11730 = state_11698__$1;
(statearr_11707_11730[(1)] = (4));

} else {
var statearr_11708_11731 = state_11698__$1;
(statearr_11708_11731[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (11))){
var inst_11675 = (state_11698[(8)]);
var inst_11685 = (state_11698[(2)]);
var inst_11686 = (inst_11675 + (1));
var inst_11675__$1 = inst_11686;
var state_11698__$1 = (function (){var statearr_11709 = state_11698;
(statearr_11709[(8)] = inst_11675__$1);

(statearr_11709[(10)] = inst_11685);

return statearr_11709;
})();
var statearr_11710_11732 = state_11698__$1;
(statearr_11710_11732[(2)] = null);

(statearr_11710_11732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (9))){
var state_11698__$1 = state_11698;
var statearr_11711_11733 = state_11698__$1;
(statearr_11711_11733[(2)] = null);

(statearr_11711_11733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (5))){
var state_11698__$1 = state_11698;
var statearr_11712_11734 = state_11698__$1;
(statearr_11712_11734[(2)] = null);

(statearr_11712_11734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (10))){
var inst_11690 = (state_11698[(2)]);
var state_11698__$1 = state_11698;
var statearr_11713_11735 = state_11698__$1;
(statearr_11713_11735[(2)] = inst_11690);

(statearr_11713_11735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11699 === (8))){
var inst_11680 = (state_11698[(7)]);
var state_11698__$1 = state_11698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11698__$1,(11),out,inst_11680);
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
});})(c__9561__auto___11725,out))
;
return ((function (switch__9496__auto__,c__9561__auto___11725,out){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_11717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11717[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_11717[(1)] = (1));

return statearr_11717;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_11698){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e11718){if((e11718 instanceof Object)){
var ex__9500__auto__ = e11718;
var statearr_11719_11736 = state_11698;
(statearr_11719_11736[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11737 = state_11698;
state_11698 = G__11737;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_11698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_11698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___11725,out))
})();
var state__9563__auto__ = (function (){var statearr_11720 = f__9562__auto__.call(null);
(statearr_11720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___11725);

return statearr_11720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___11725,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11745 = (function (map_LT_,f,ch,meta11746){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11746 = meta11746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11747,meta11746__$1){
var self__ = this;
var _11747__$1 = this;
return (new cljs.core.async.t_cljs$core$async11745(self__.map_LT_,self__.f,self__.ch,meta11746__$1));
});

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11747){
var self__ = this;
var _11747__$1 = this;
return self__.meta11746;
});

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11748 = (function (map_LT_,f,ch,meta11746,_,fn1,meta11749){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11746 = meta11746;
this._ = _;
this.fn1 = fn1;
this.meta11749 = meta11749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11750,meta11749__$1){
var self__ = this;
var _11750__$1 = this;
return (new cljs.core.async.t_cljs$core$async11748(self__.map_LT_,self__.f,self__.ch,self__.meta11746,self__._,self__.fn1,meta11749__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11750){
var self__ = this;
var _11750__$1 = this;
return self__.meta11749;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11738_SHARP_){
return f1.call(null,(((p1__11738_SHARP_ == null))?null:self__.f.call(null,p1__11738_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11748.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11746","meta11746",495297079,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11745","cljs.core.async/t_cljs$core$async11745",-1633173144,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11749","meta11749",-108651184,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11748";

cljs.core.async.t_cljs$core$async11748.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11748");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11748 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11748(map_LT___$1,f__$1,ch__$1,meta11746__$1,___$2,fn1__$1,meta11749){
return (new cljs.core.async.t_cljs$core$async11748(map_LT___$1,f__$1,ch__$1,meta11746__$1,___$2,fn1__$1,meta11749));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11748(self__.map_LT_,self__.f,self__.ch,self__.meta11746,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11746","meta11746",495297079,null)], null);
});

cljs.core.async.t_cljs$core$async11745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11745";

cljs.core.async.t_cljs$core$async11745.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11745");
});

cljs.core.async.__GT_t_cljs$core$async11745 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11745(map_LT___$1,f__$1,ch__$1,meta11746){
return (new cljs.core.async.t_cljs$core$async11745(map_LT___$1,f__$1,ch__$1,meta11746));
});

}

return (new cljs.core.async.t_cljs$core$async11745(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11754 = (function (map_GT_,f,ch,meta11755){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11755 = meta11755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11756,meta11755__$1){
var self__ = this;
var _11756__$1 = this;
return (new cljs.core.async.t_cljs$core$async11754(self__.map_GT_,self__.f,self__.ch,meta11755__$1));
});

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11756){
var self__ = this;
var _11756__$1 = this;
return self__.meta11755;
});

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11755","meta11755",-1970108590,null)], null);
});

cljs.core.async.t_cljs$core$async11754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11754";

cljs.core.async.t_cljs$core$async11754.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11754");
});

cljs.core.async.__GT_t_cljs$core$async11754 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11754(map_GT___$1,f__$1,ch__$1,meta11755){
return (new cljs.core.async.t_cljs$core$async11754(map_GT___$1,f__$1,ch__$1,meta11755));
});

}

return (new cljs.core.async.t_cljs$core$async11754(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11760 = (function (filter_GT_,p,ch,meta11761){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11761 = meta11761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11762,meta11761__$1){
var self__ = this;
var _11762__$1 = this;
return (new cljs.core.async.t_cljs$core$async11760(self__.filter_GT_,self__.p,self__.ch,meta11761__$1));
});

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11762){
var self__ = this;
var _11762__$1 = this;
return self__.meta11761;
});

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11760.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11761","meta11761",830711190,null)], null);
});

cljs.core.async.t_cljs$core$async11760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11760";

cljs.core.async.t_cljs$core$async11760.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cljs.core.async/t_cljs$core$async11760");
});

cljs.core.async.__GT_t_cljs$core$async11760 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11760(filter_GT___$1,p__$1,ch__$1,meta11761){
return (new cljs.core.async.t_cljs$core$async11760(filter_GT___$1,p__$1,ch__$1,meta11761));
});

}

return (new cljs.core.async.t_cljs$core$async11760(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11763 = [];
var len__7214__auto___11807 = arguments.length;
var i__7215__auto___11808 = (0);
while(true){
if((i__7215__auto___11808 < len__7214__auto___11807)){
args11763.push((arguments[i__7215__auto___11808]));

var G__11809 = (i__7215__auto___11808 + (1));
i__7215__auto___11808 = G__11809;
continue;
} else {
}
break;
}

var G__11765 = args11763.length;
switch (G__11765) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11763.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9561__auto___11811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___11811,out){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___11811,out){
return (function (state_11786){
var state_val_11787 = (state_11786[(1)]);
if((state_val_11787 === (7))){
var inst_11782 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11788_11812 = state_11786__$1;
(statearr_11788_11812[(2)] = inst_11782);

(statearr_11788_11812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (1))){
var state_11786__$1 = state_11786;
var statearr_11789_11813 = state_11786__$1;
(statearr_11789_11813[(2)] = null);

(statearr_11789_11813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (4))){
var inst_11768 = (state_11786[(7)]);
var inst_11768__$1 = (state_11786[(2)]);
var inst_11769 = (inst_11768__$1 == null);
var state_11786__$1 = (function (){var statearr_11790 = state_11786;
(statearr_11790[(7)] = inst_11768__$1);

return statearr_11790;
})();
if(cljs.core.truth_(inst_11769)){
var statearr_11791_11814 = state_11786__$1;
(statearr_11791_11814[(1)] = (5));

} else {
var statearr_11792_11815 = state_11786__$1;
(statearr_11792_11815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (6))){
var inst_11768 = (state_11786[(7)]);
var inst_11773 = p.call(null,inst_11768);
var state_11786__$1 = state_11786;
if(cljs.core.truth_(inst_11773)){
var statearr_11793_11816 = state_11786__$1;
(statearr_11793_11816[(1)] = (8));

} else {
var statearr_11794_11817 = state_11786__$1;
(statearr_11794_11817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (3))){
var inst_11784 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11786__$1,inst_11784);
} else {
if((state_val_11787 === (2))){
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11786__$1,(4),ch);
} else {
if((state_val_11787 === (11))){
var inst_11776 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
var statearr_11795_11818 = state_11786__$1;
(statearr_11795_11818[(2)] = inst_11776);

(statearr_11795_11818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (9))){
var state_11786__$1 = state_11786;
var statearr_11796_11819 = state_11786__$1;
(statearr_11796_11819[(2)] = null);

(statearr_11796_11819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (5))){
var inst_11771 = cljs.core.async.close_BANG_.call(null,out);
var state_11786__$1 = state_11786;
var statearr_11797_11820 = state_11786__$1;
(statearr_11797_11820[(2)] = inst_11771);

(statearr_11797_11820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (10))){
var inst_11779 = (state_11786[(2)]);
var state_11786__$1 = (function (){var statearr_11798 = state_11786;
(statearr_11798[(8)] = inst_11779);

return statearr_11798;
})();
var statearr_11799_11821 = state_11786__$1;
(statearr_11799_11821[(2)] = null);

(statearr_11799_11821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11787 === (8))){
var inst_11768 = (state_11786[(7)]);
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11786__$1,(11),out,inst_11768);
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
});})(c__9561__auto___11811,out))
;
return ((function (switch__9496__auto__,c__9561__auto___11811,out){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_11803 = [null,null,null,null,null,null,null,null,null];
(statearr_11803[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_11803[(1)] = (1));

return statearr_11803;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_11786){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e11804){if((e11804 instanceof Object)){
var ex__9500__auto__ = e11804;
var statearr_11805_11822 = state_11786;
(statearr_11805_11822[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11823 = state_11786;
state_11786 = G__11823;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_11786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_11786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___11811,out))
})();
var state__9563__auto__ = (function (){var statearr_11806 = f__9562__auto__.call(null);
(statearr_11806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___11811);

return statearr_11806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___11811,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11824 = [];
var len__7214__auto___11827 = arguments.length;
var i__7215__auto___11828 = (0);
while(true){
if((i__7215__auto___11828 < len__7214__auto___11827)){
args11824.push((arguments[i__7215__auto___11828]));

var G__11829 = (i__7215__auto___11828 + (1));
i__7215__auto___11828 = G__11829;
continue;
} else {
}
break;
}

var G__11826 = args11824.length;
switch (G__11826) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11824.length)].join('')));

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
var c__9561__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto__){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto__){
return (function (state_11996){
var state_val_11997 = (state_11996[(1)]);
if((state_val_11997 === (7))){
var inst_11992 = (state_11996[(2)]);
var state_11996__$1 = state_11996;
var statearr_11998_12039 = state_11996__$1;
(statearr_11998_12039[(2)] = inst_11992);

(statearr_11998_12039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (20))){
var inst_11962 = (state_11996[(7)]);
var inst_11973 = (state_11996[(2)]);
var inst_11974 = cljs.core.next.call(null,inst_11962);
var inst_11948 = inst_11974;
var inst_11949 = null;
var inst_11950 = (0);
var inst_11951 = (0);
var state_11996__$1 = (function (){var statearr_11999 = state_11996;
(statearr_11999[(8)] = inst_11949);

(statearr_11999[(9)] = inst_11950);

(statearr_11999[(10)] = inst_11951);

(statearr_11999[(11)] = inst_11973);

(statearr_11999[(12)] = inst_11948);

return statearr_11999;
})();
var statearr_12000_12040 = state_11996__$1;
(statearr_12000_12040[(2)] = null);

(statearr_12000_12040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (1))){
var state_11996__$1 = state_11996;
var statearr_12001_12041 = state_11996__$1;
(statearr_12001_12041[(2)] = null);

(statearr_12001_12041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (4))){
var inst_11937 = (state_11996[(13)]);
var inst_11937__$1 = (state_11996[(2)]);
var inst_11938 = (inst_11937__$1 == null);
var state_11996__$1 = (function (){var statearr_12002 = state_11996;
(statearr_12002[(13)] = inst_11937__$1);

return statearr_12002;
})();
if(cljs.core.truth_(inst_11938)){
var statearr_12003_12042 = state_11996__$1;
(statearr_12003_12042[(1)] = (5));

} else {
var statearr_12004_12043 = state_11996__$1;
(statearr_12004_12043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (15))){
var state_11996__$1 = state_11996;
var statearr_12008_12044 = state_11996__$1;
(statearr_12008_12044[(2)] = null);

(statearr_12008_12044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (21))){
var state_11996__$1 = state_11996;
var statearr_12009_12045 = state_11996__$1;
(statearr_12009_12045[(2)] = null);

(statearr_12009_12045[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (13))){
var inst_11949 = (state_11996[(8)]);
var inst_11950 = (state_11996[(9)]);
var inst_11951 = (state_11996[(10)]);
var inst_11948 = (state_11996[(12)]);
var inst_11958 = (state_11996[(2)]);
var inst_11959 = (inst_11951 + (1));
var tmp12005 = inst_11949;
var tmp12006 = inst_11950;
var tmp12007 = inst_11948;
var inst_11948__$1 = tmp12007;
var inst_11949__$1 = tmp12005;
var inst_11950__$1 = tmp12006;
var inst_11951__$1 = inst_11959;
var state_11996__$1 = (function (){var statearr_12010 = state_11996;
(statearr_12010[(8)] = inst_11949__$1);

(statearr_12010[(9)] = inst_11950__$1);

(statearr_12010[(10)] = inst_11951__$1);

(statearr_12010[(14)] = inst_11958);

(statearr_12010[(12)] = inst_11948__$1);

return statearr_12010;
})();
var statearr_12011_12046 = state_11996__$1;
(statearr_12011_12046[(2)] = null);

(statearr_12011_12046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (22))){
var state_11996__$1 = state_11996;
var statearr_12012_12047 = state_11996__$1;
(statearr_12012_12047[(2)] = null);

(statearr_12012_12047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (6))){
var inst_11937 = (state_11996[(13)]);
var inst_11946 = f.call(null,inst_11937);
var inst_11947 = cljs.core.seq.call(null,inst_11946);
var inst_11948 = inst_11947;
var inst_11949 = null;
var inst_11950 = (0);
var inst_11951 = (0);
var state_11996__$1 = (function (){var statearr_12013 = state_11996;
(statearr_12013[(8)] = inst_11949);

(statearr_12013[(9)] = inst_11950);

(statearr_12013[(10)] = inst_11951);

(statearr_12013[(12)] = inst_11948);

return statearr_12013;
})();
var statearr_12014_12048 = state_11996__$1;
(statearr_12014_12048[(2)] = null);

(statearr_12014_12048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (17))){
var inst_11962 = (state_11996[(7)]);
var inst_11966 = cljs.core.chunk_first.call(null,inst_11962);
var inst_11967 = cljs.core.chunk_rest.call(null,inst_11962);
var inst_11968 = cljs.core.count.call(null,inst_11966);
var inst_11948 = inst_11967;
var inst_11949 = inst_11966;
var inst_11950 = inst_11968;
var inst_11951 = (0);
var state_11996__$1 = (function (){var statearr_12015 = state_11996;
(statearr_12015[(8)] = inst_11949);

(statearr_12015[(9)] = inst_11950);

(statearr_12015[(10)] = inst_11951);

(statearr_12015[(12)] = inst_11948);

return statearr_12015;
})();
var statearr_12016_12049 = state_11996__$1;
(statearr_12016_12049[(2)] = null);

(statearr_12016_12049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (3))){
var inst_11994 = (state_11996[(2)]);
var state_11996__$1 = state_11996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11996__$1,inst_11994);
} else {
if((state_val_11997 === (12))){
var inst_11982 = (state_11996[(2)]);
var state_11996__$1 = state_11996;
var statearr_12017_12050 = state_11996__$1;
(statearr_12017_12050[(2)] = inst_11982);

(statearr_12017_12050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (2))){
var state_11996__$1 = state_11996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11996__$1,(4),in$);
} else {
if((state_val_11997 === (23))){
var inst_11990 = (state_11996[(2)]);
var state_11996__$1 = state_11996;
var statearr_12018_12051 = state_11996__$1;
(statearr_12018_12051[(2)] = inst_11990);

(statearr_12018_12051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (19))){
var inst_11977 = (state_11996[(2)]);
var state_11996__$1 = state_11996;
var statearr_12019_12052 = state_11996__$1;
(statearr_12019_12052[(2)] = inst_11977);

(statearr_12019_12052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (11))){
var inst_11962 = (state_11996[(7)]);
var inst_11948 = (state_11996[(12)]);
var inst_11962__$1 = cljs.core.seq.call(null,inst_11948);
var state_11996__$1 = (function (){var statearr_12020 = state_11996;
(statearr_12020[(7)] = inst_11962__$1);

return statearr_12020;
})();
if(inst_11962__$1){
var statearr_12021_12053 = state_11996__$1;
(statearr_12021_12053[(1)] = (14));

} else {
var statearr_12022_12054 = state_11996__$1;
(statearr_12022_12054[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (9))){
var inst_11984 = (state_11996[(2)]);
var inst_11985 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11996__$1 = (function (){var statearr_12023 = state_11996;
(statearr_12023[(15)] = inst_11984);

return statearr_12023;
})();
if(cljs.core.truth_(inst_11985)){
var statearr_12024_12055 = state_11996__$1;
(statearr_12024_12055[(1)] = (21));

} else {
var statearr_12025_12056 = state_11996__$1;
(statearr_12025_12056[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (5))){
var inst_11940 = cljs.core.async.close_BANG_.call(null,out);
var state_11996__$1 = state_11996;
var statearr_12026_12057 = state_11996__$1;
(statearr_12026_12057[(2)] = inst_11940);

(statearr_12026_12057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (14))){
var inst_11962 = (state_11996[(7)]);
var inst_11964 = cljs.core.chunked_seq_QMARK_.call(null,inst_11962);
var state_11996__$1 = state_11996;
if(inst_11964){
var statearr_12027_12058 = state_11996__$1;
(statearr_12027_12058[(1)] = (17));

} else {
var statearr_12028_12059 = state_11996__$1;
(statearr_12028_12059[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (16))){
var inst_11980 = (state_11996[(2)]);
var state_11996__$1 = state_11996;
var statearr_12029_12060 = state_11996__$1;
(statearr_12029_12060[(2)] = inst_11980);

(statearr_12029_12060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11997 === (10))){
var inst_11949 = (state_11996[(8)]);
var inst_11951 = (state_11996[(10)]);
var inst_11956 = cljs.core._nth.call(null,inst_11949,inst_11951);
var state_11996__$1 = state_11996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11996__$1,(13),out,inst_11956);
} else {
if((state_val_11997 === (18))){
var inst_11962 = (state_11996[(7)]);
var inst_11971 = cljs.core.first.call(null,inst_11962);
var state_11996__$1 = state_11996;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11996__$1,(20),out,inst_11971);
} else {
if((state_val_11997 === (8))){
var inst_11950 = (state_11996[(9)]);
var inst_11951 = (state_11996[(10)]);
var inst_11953 = (inst_11951 < inst_11950);
var inst_11954 = inst_11953;
var state_11996__$1 = state_11996;
if(cljs.core.truth_(inst_11954)){
var statearr_12030_12061 = state_11996__$1;
(statearr_12030_12061[(1)] = (10));

} else {
var statearr_12031_12062 = state_11996__$1;
(statearr_12031_12062[(1)] = (11));

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
});})(c__9561__auto__))
;
return ((function (switch__9496__auto__,c__9561__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9497__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9497__auto____0 = (function (){
var statearr_12035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12035[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9497__auto__);

(statearr_12035[(1)] = (1));

return statearr_12035;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9497__auto____1 = (function (state_11996){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_11996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e12036){if((e12036 instanceof Object)){
var ex__9500__auto__ = e12036;
var statearr_12037_12063 = state_11996;
(statearr_12037_12063[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12064 = state_11996;
state_11996 = G__12064;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9497__auto__ = function(state_11996){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9497__auto____1.call(this,state_11996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9497__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9497__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto__))
})();
var state__9563__auto__ = (function (){var statearr_12038 = f__9562__auto__.call(null);
(statearr_12038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto__);

return statearr_12038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto__))
);

return c__9561__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12065 = [];
var len__7214__auto___12068 = arguments.length;
var i__7215__auto___12069 = (0);
while(true){
if((i__7215__auto___12069 < len__7214__auto___12068)){
args12065.push((arguments[i__7215__auto___12069]));

var G__12070 = (i__7215__auto___12069 + (1));
i__7215__auto___12069 = G__12070;
continue;
} else {
}
break;
}

var G__12067 = args12065.length;
switch (G__12067) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12065.length)].join('')));

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
var args12072 = [];
var len__7214__auto___12075 = arguments.length;
var i__7215__auto___12076 = (0);
while(true){
if((i__7215__auto___12076 < len__7214__auto___12075)){
args12072.push((arguments[i__7215__auto___12076]));

var G__12077 = (i__7215__auto___12076 + (1));
i__7215__auto___12076 = G__12077;
continue;
} else {
}
break;
}

var G__12074 = args12072.length;
switch (G__12074) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12072.length)].join('')));

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
var args12079 = [];
var len__7214__auto___12130 = arguments.length;
var i__7215__auto___12131 = (0);
while(true){
if((i__7215__auto___12131 < len__7214__auto___12130)){
args12079.push((arguments[i__7215__auto___12131]));

var G__12132 = (i__7215__auto___12131 + (1));
i__7215__auto___12131 = G__12132;
continue;
} else {
}
break;
}

var G__12081 = args12079.length;
switch (G__12081) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12079.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9561__auto___12134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___12134,out){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___12134,out){
return (function (state_12105){
var state_val_12106 = (state_12105[(1)]);
if((state_val_12106 === (7))){
var inst_12100 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12107_12135 = state_12105__$1;
(statearr_12107_12135[(2)] = inst_12100);

(statearr_12107_12135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (1))){
var inst_12082 = null;
var state_12105__$1 = (function (){var statearr_12108 = state_12105;
(statearr_12108[(7)] = inst_12082);

return statearr_12108;
})();
var statearr_12109_12136 = state_12105__$1;
(statearr_12109_12136[(2)] = null);

(statearr_12109_12136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (4))){
var inst_12085 = (state_12105[(8)]);
var inst_12085__$1 = (state_12105[(2)]);
var inst_12086 = (inst_12085__$1 == null);
var inst_12087 = cljs.core.not.call(null,inst_12086);
var state_12105__$1 = (function (){var statearr_12110 = state_12105;
(statearr_12110[(8)] = inst_12085__$1);

return statearr_12110;
})();
if(inst_12087){
var statearr_12111_12137 = state_12105__$1;
(statearr_12111_12137[(1)] = (5));

} else {
var statearr_12112_12138 = state_12105__$1;
(statearr_12112_12138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (6))){
var state_12105__$1 = state_12105;
var statearr_12113_12139 = state_12105__$1;
(statearr_12113_12139[(2)] = null);

(statearr_12113_12139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (3))){
var inst_12102 = (state_12105[(2)]);
var inst_12103 = cljs.core.async.close_BANG_.call(null,out);
var state_12105__$1 = (function (){var statearr_12114 = state_12105;
(statearr_12114[(9)] = inst_12102);

return statearr_12114;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12105__$1,inst_12103);
} else {
if((state_val_12106 === (2))){
var state_12105__$1 = state_12105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12105__$1,(4),ch);
} else {
if((state_val_12106 === (11))){
var inst_12085 = (state_12105[(8)]);
var inst_12094 = (state_12105[(2)]);
var inst_12082 = inst_12085;
var state_12105__$1 = (function (){var statearr_12115 = state_12105;
(statearr_12115[(7)] = inst_12082);

(statearr_12115[(10)] = inst_12094);

return statearr_12115;
})();
var statearr_12116_12140 = state_12105__$1;
(statearr_12116_12140[(2)] = null);

(statearr_12116_12140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (9))){
var inst_12085 = (state_12105[(8)]);
var state_12105__$1 = state_12105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12105__$1,(11),out,inst_12085);
} else {
if((state_val_12106 === (5))){
var inst_12082 = (state_12105[(7)]);
var inst_12085 = (state_12105[(8)]);
var inst_12089 = cljs.core._EQ_.call(null,inst_12085,inst_12082);
var state_12105__$1 = state_12105;
if(inst_12089){
var statearr_12118_12141 = state_12105__$1;
(statearr_12118_12141[(1)] = (8));

} else {
var statearr_12119_12142 = state_12105__$1;
(statearr_12119_12142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (10))){
var inst_12097 = (state_12105[(2)]);
var state_12105__$1 = state_12105;
var statearr_12120_12143 = state_12105__$1;
(statearr_12120_12143[(2)] = inst_12097);

(statearr_12120_12143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12106 === (8))){
var inst_12082 = (state_12105[(7)]);
var tmp12117 = inst_12082;
var inst_12082__$1 = tmp12117;
var state_12105__$1 = (function (){var statearr_12121 = state_12105;
(statearr_12121[(7)] = inst_12082__$1);

return statearr_12121;
})();
var statearr_12122_12144 = state_12105__$1;
(statearr_12122_12144[(2)] = null);

(statearr_12122_12144[(1)] = (2));


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
});})(c__9561__auto___12134,out))
;
return ((function (switch__9496__auto__,c__9561__auto___12134,out){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_12126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12126[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_12126[(1)] = (1));

return statearr_12126;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_12105){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_12105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object)){
var ex__9500__auto__ = e12127;
var statearr_12128_12145 = state_12105;
(statearr_12128_12145[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12146 = state_12105;
state_12105 = G__12146;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_12105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_12105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___12134,out))
})();
var state__9563__auto__ = (function (){var statearr_12129 = f__9562__auto__.call(null);
(statearr_12129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___12134);

return statearr_12129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___12134,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12147 = [];
var len__7214__auto___12217 = arguments.length;
var i__7215__auto___12218 = (0);
while(true){
if((i__7215__auto___12218 < len__7214__auto___12217)){
args12147.push((arguments[i__7215__auto___12218]));

var G__12219 = (i__7215__auto___12218 + (1));
i__7215__auto___12218 = G__12219;
continue;
} else {
}
break;
}

var G__12149 = args12147.length;
switch (G__12149) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12147.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9561__auto___12221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___12221,out){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___12221,out){
return (function (state_12187){
var state_val_12188 = (state_12187[(1)]);
if((state_val_12188 === (7))){
var inst_12183 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12189_12222 = state_12187__$1;
(statearr_12189_12222[(2)] = inst_12183);

(statearr_12189_12222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (1))){
var inst_12150 = (new Array(n));
var inst_12151 = inst_12150;
var inst_12152 = (0);
var state_12187__$1 = (function (){var statearr_12190 = state_12187;
(statearr_12190[(7)] = inst_12152);

(statearr_12190[(8)] = inst_12151);

return statearr_12190;
})();
var statearr_12191_12223 = state_12187__$1;
(statearr_12191_12223[(2)] = null);

(statearr_12191_12223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (4))){
var inst_12155 = (state_12187[(9)]);
var inst_12155__$1 = (state_12187[(2)]);
var inst_12156 = (inst_12155__$1 == null);
var inst_12157 = cljs.core.not.call(null,inst_12156);
var state_12187__$1 = (function (){var statearr_12192 = state_12187;
(statearr_12192[(9)] = inst_12155__$1);

return statearr_12192;
})();
if(inst_12157){
var statearr_12193_12224 = state_12187__$1;
(statearr_12193_12224[(1)] = (5));

} else {
var statearr_12194_12225 = state_12187__$1;
(statearr_12194_12225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (15))){
var inst_12177 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12195_12226 = state_12187__$1;
(statearr_12195_12226[(2)] = inst_12177);

(statearr_12195_12226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (13))){
var state_12187__$1 = state_12187;
var statearr_12196_12227 = state_12187__$1;
(statearr_12196_12227[(2)] = null);

(statearr_12196_12227[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (6))){
var inst_12152 = (state_12187[(7)]);
var inst_12173 = (inst_12152 > (0));
var state_12187__$1 = state_12187;
if(cljs.core.truth_(inst_12173)){
var statearr_12197_12228 = state_12187__$1;
(statearr_12197_12228[(1)] = (12));

} else {
var statearr_12198_12229 = state_12187__$1;
(statearr_12198_12229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (3))){
var inst_12185 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12187__$1,inst_12185);
} else {
if((state_val_12188 === (12))){
var inst_12151 = (state_12187[(8)]);
var inst_12175 = cljs.core.vec.call(null,inst_12151);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12187__$1,(15),out,inst_12175);
} else {
if((state_val_12188 === (2))){
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12187__$1,(4),ch);
} else {
if((state_val_12188 === (11))){
var inst_12167 = (state_12187[(2)]);
var inst_12168 = (new Array(n));
var inst_12151 = inst_12168;
var inst_12152 = (0);
var state_12187__$1 = (function (){var statearr_12199 = state_12187;
(statearr_12199[(7)] = inst_12152);

(statearr_12199[(10)] = inst_12167);

(statearr_12199[(8)] = inst_12151);

return statearr_12199;
})();
var statearr_12200_12230 = state_12187__$1;
(statearr_12200_12230[(2)] = null);

(statearr_12200_12230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (9))){
var inst_12151 = (state_12187[(8)]);
var inst_12165 = cljs.core.vec.call(null,inst_12151);
var state_12187__$1 = state_12187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12187__$1,(11),out,inst_12165);
} else {
if((state_val_12188 === (5))){
var inst_12160 = (state_12187[(11)]);
var inst_12152 = (state_12187[(7)]);
var inst_12155 = (state_12187[(9)]);
var inst_12151 = (state_12187[(8)]);
var inst_12159 = (inst_12151[inst_12152] = inst_12155);
var inst_12160__$1 = (inst_12152 + (1));
var inst_12161 = (inst_12160__$1 < n);
var state_12187__$1 = (function (){var statearr_12201 = state_12187;
(statearr_12201[(11)] = inst_12160__$1);

(statearr_12201[(12)] = inst_12159);

return statearr_12201;
})();
if(cljs.core.truth_(inst_12161)){
var statearr_12202_12231 = state_12187__$1;
(statearr_12202_12231[(1)] = (8));

} else {
var statearr_12203_12232 = state_12187__$1;
(statearr_12203_12232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (14))){
var inst_12180 = (state_12187[(2)]);
var inst_12181 = cljs.core.async.close_BANG_.call(null,out);
var state_12187__$1 = (function (){var statearr_12205 = state_12187;
(statearr_12205[(13)] = inst_12180);

return statearr_12205;
})();
var statearr_12206_12233 = state_12187__$1;
(statearr_12206_12233[(2)] = inst_12181);

(statearr_12206_12233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (10))){
var inst_12171 = (state_12187[(2)]);
var state_12187__$1 = state_12187;
var statearr_12207_12234 = state_12187__$1;
(statearr_12207_12234[(2)] = inst_12171);

(statearr_12207_12234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12188 === (8))){
var inst_12160 = (state_12187[(11)]);
var inst_12151 = (state_12187[(8)]);
var tmp12204 = inst_12151;
var inst_12151__$1 = tmp12204;
var inst_12152 = inst_12160;
var state_12187__$1 = (function (){var statearr_12208 = state_12187;
(statearr_12208[(7)] = inst_12152);

(statearr_12208[(8)] = inst_12151__$1);

return statearr_12208;
})();
var statearr_12209_12235 = state_12187__$1;
(statearr_12209_12235[(2)] = null);

(statearr_12209_12235[(1)] = (2));


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
});})(c__9561__auto___12221,out))
;
return ((function (switch__9496__auto__,c__9561__auto___12221,out){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_12213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12213[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_12213[(1)] = (1));

return statearr_12213;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_12187){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_12187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e12214){if((e12214 instanceof Object)){
var ex__9500__auto__ = e12214;
var statearr_12215_12236 = state_12187;
(statearr_12215_12236[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12237 = state_12187;
state_12187 = G__12237;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_12187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_12187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___12221,out))
})();
var state__9563__auto__ = (function (){var statearr_12216 = f__9562__auto__.call(null);
(statearr_12216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___12221);

return statearr_12216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___12221,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12238 = [];
var len__7214__auto___12312 = arguments.length;
var i__7215__auto___12313 = (0);
while(true){
if((i__7215__auto___12313 < len__7214__auto___12312)){
args12238.push((arguments[i__7215__auto___12313]));

var G__12314 = (i__7215__auto___12313 + (1));
i__7215__auto___12313 = G__12314;
continue;
} else {
}
break;
}

var G__12240 = args12238.length;
switch (G__12240) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12238.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9561__auto___12316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9561__auto___12316,out){
return (function (){
var f__9562__auto__ = (function (){var switch__9496__auto__ = ((function (c__9561__auto___12316,out){
return (function (state_12282){
var state_val_12283 = (state_12282[(1)]);
if((state_val_12283 === (7))){
var inst_12278 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
var statearr_12284_12317 = state_12282__$1;
(statearr_12284_12317[(2)] = inst_12278);

(statearr_12284_12317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (1))){
var inst_12241 = [];
var inst_12242 = inst_12241;
var inst_12243 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12282__$1 = (function (){var statearr_12285 = state_12282;
(statearr_12285[(7)] = inst_12242);

(statearr_12285[(8)] = inst_12243);

return statearr_12285;
})();
var statearr_12286_12318 = state_12282__$1;
(statearr_12286_12318[(2)] = null);

(statearr_12286_12318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (4))){
var inst_12246 = (state_12282[(9)]);
var inst_12246__$1 = (state_12282[(2)]);
var inst_12247 = (inst_12246__$1 == null);
var inst_12248 = cljs.core.not.call(null,inst_12247);
var state_12282__$1 = (function (){var statearr_12287 = state_12282;
(statearr_12287[(9)] = inst_12246__$1);

return statearr_12287;
})();
if(inst_12248){
var statearr_12288_12319 = state_12282__$1;
(statearr_12288_12319[(1)] = (5));

} else {
var statearr_12289_12320 = state_12282__$1;
(statearr_12289_12320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (15))){
var inst_12272 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
var statearr_12290_12321 = state_12282__$1;
(statearr_12290_12321[(2)] = inst_12272);

(statearr_12290_12321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (13))){
var state_12282__$1 = state_12282;
var statearr_12291_12322 = state_12282__$1;
(statearr_12291_12322[(2)] = null);

(statearr_12291_12322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (6))){
var inst_12242 = (state_12282[(7)]);
var inst_12267 = inst_12242.length;
var inst_12268 = (inst_12267 > (0));
var state_12282__$1 = state_12282;
if(cljs.core.truth_(inst_12268)){
var statearr_12292_12323 = state_12282__$1;
(statearr_12292_12323[(1)] = (12));

} else {
var statearr_12293_12324 = state_12282__$1;
(statearr_12293_12324[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (3))){
var inst_12280 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12282__$1,inst_12280);
} else {
if((state_val_12283 === (12))){
var inst_12242 = (state_12282[(7)]);
var inst_12270 = cljs.core.vec.call(null,inst_12242);
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12282__$1,(15),out,inst_12270);
} else {
if((state_val_12283 === (2))){
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12282__$1,(4),ch);
} else {
if((state_val_12283 === (11))){
var inst_12246 = (state_12282[(9)]);
var inst_12250 = (state_12282[(10)]);
var inst_12260 = (state_12282[(2)]);
var inst_12261 = [];
var inst_12262 = inst_12261.push(inst_12246);
var inst_12242 = inst_12261;
var inst_12243 = inst_12250;
var state_12282__$1 = (function (){var statearr_12294 = state_12282;
(statearr_12294[(11)] = inst_12262);

(statearr_12294[(7)] = inst_12242);

(statearr_12294[(8)] = inst_12243);

(statearr_12294[(12)] = inst_12260);

return statearr_12294;
})();
var statearr_12295_12325 = state_12282__$1;
(statearr_12295_12325[(2)] = null);

(statearr_12295_12325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (9))){
var inst_12242 = (state_12282[(7)]);
var inst_12258 = cljs.core.vec.call(null,inst_12242);
var state_12282__$1 = state_12282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12282__$1,(11),out,inst_12258);
} else {
if((state_val_12283 === (5))){
var inst_12246 = (state_12282[(9)]);
var inst_12250 = (state_12282[(10)]);
var inst_12243 = (state_12282[(8)]);
var inst_12250__$1 = f.call(null,inst_12246);
var inst_12251 = cljs.core._EQ_.call(null,inst_12250__$1,inst_12243);
var inst_12252 = cljs.core.keyword_identical_QMARK_.call(null,inst_12243,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12253 = (inst_12251) || (inst_12252);
var state_12282__$1 = (function (){var statearr_12296 = state_12282;
(statearr_12296[(10)] = inst_12250__$1);

return statearr_12296;
})();
if(cljs.core.truth_(inst_12253)){
var statearr_12297_12326 = state_12282__$1;
(statearr_12297_12326[(1)] = (8));

} else {
var statearr_12298_12327 = state_12282__$1;
(statearr_12298_12327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (14))){
var inst_12275 = (state_12282[(2)]);
var inst_12276 = cljs.core.async.close_BANG_.call(null,out);
var state_12282__$1 = (function (){var statearr_12300 = state_12282;
(statearr_12300[(13)] = inst_12275);

return statearr_12300;
})();
var statearr_12301_12328 = state_12282__$1;
(statearr_12301_12328[(2)] = inst_12276);

(statearr_12301_12328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (10))){
var inst_12265 = (state_12282[(2)]);
var state_12282__$1 = state_12282;
var statearr_12302_12329 = state_12282__$1;
(statearr_12302_12329[(2)] = inst_12265);

(statearr_12302_12329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12283 === (8))){
var inst_12246 = (state_12282[(9)]);
var inst_12242 = (state_12282[(7)]);
var inst_12250 = (state_12282[(10)]);
var inst_12255 = inst_12242.push(inst_12246);
var tmp12299 = inst_12242;
var inst_12242__$1 = tmp12299;
var inst_12243 = inst_12250;
var state_12282__$1 = (function (){var statearr_12303 = state_12282;
(statearr_12303[(7)] = inst_12242__$1);

(statearr_12303[(14)] = inst_12255);

(statearr_12303[(8)] = inst_12243);

return statearr_12303;
})();
var statearr_12304_12330 = state_12282__$1;
(statearr_12304_12330[(2)] = null);

(statearr_12304_12330[(1)] = (2));


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
});})(c__9561__auto___12316,out))
;
return ((function (switch__9496__auto__,c__9561__auto___12316,out){
return (function() {
var cljs$core$async$state_machine__9497__auto__ = null;
var cljs$core$async$state_machine__9497__auto____0 = (function (){
var statearr_12308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12308[(0)] = cljs$core$async$state_machine__9497__auto__);

(statearr_12308[(1)] = (1));

return statearr_12308;
});
var cljs$core$async$state_machine__9497__auto____1 = (function (state_12282){
while(true){
var ret_value__9498__auto__ = (function (){try{while(true){
var result__9499__auto__ = switch__9496__auto__.call(null,state_12282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9499__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9499__auto__;
}
break;
}
}catch (e12309){if((e12309 instanceof Object)){
var ex__9500__auto__ = e12309;
var statearr_12310_12331 = state_12282;
(statearr_12310_12331[(5)] = ex__9500__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12332 = state_12282;
state_12282 = G__12332;
continue;
} else {
return ret_value__9498__auto__;
}
break;
}
});
cljs$core$async$state_machine__9497__auto__ = function(state_12282){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9497__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9497__auto____1.call(this,state_12282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9497__auto____0;
cljs$core$async$state_machine__9497__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9497__auto____1;
return cljs$core$async$state_machine__9497__auto__;
})()
;})(switch__9496__auto__,c__9561__auto___12316,out))
})();
var state__9563__auto__ = (function (){var statearr_12311 = f__9562__auto__.call(null);
(statearr_12311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9561__auto___12316);

return statearr_12311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9563__auto__);
});})(c__9561__auto___12316,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

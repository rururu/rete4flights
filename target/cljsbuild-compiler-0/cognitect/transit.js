// Compiled by ClojureScript 1.9.225 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8636_8640 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__8637_8641 = null;
var count__8638_8642 = (0);
var i__8639_8643 = (0);
while(true){
if((i__8639_8643 < count__8638_8642)){
var k_8644 = cljs.core._nth.call(null,chunk__8637_8641,i__8639_8643);
var v_8645 = (b[k_8644]);
(a[k_8644] = v_8645);

var G__8646 = seq__8636_8640;
var G__8647 = chunk__8637_8641;
var G__8648 = count__8638_8642;
var G__8649 = (i__8639_8643 + (1));
seq__8636_8640 = G__8646;
chunk__8637_8641 = G__8647;
count__8638_8642 = G__8648;
i__8639_8643 = G__8649;
continue;
} else {
var temp__4657__auto___8650 = cljs.core.seq.call(null,seq__8636_8640);
if(temp__4657__auto___8650){
var seq__8636_8651__$1 = temp__4657__auto___8650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8636_8651__$1)){
var c__7223__auto___8652 = cljs.core.chunk_first.call(null,seq__8636_8651__$1);
var G__8653 = cljs.core.chunk_rest.call(null,seq__8636_8651__$1);
var G__8654 = c__7223__auto___8652;
var G__8655 = cljs.core.count.call(null,c__7223__auto___8652);
var G__8656 = (0);
seq__8636_8640 = G__8653;
chunk__8637_8641 = G__8654;
count__8638_8642 = G__8655;
i__8639_8643 = G__8656;
continue;
} else {
var k_8657 = cljs.core.first.call(null,seq__8636_8651__$1);
var v_8658 = (b[k_8657]);
(a[k_8657] = v_8658);

var G__8659 = cljs.core.next.call(null,seq__8636_8651__$1);
var G__8660 = null;
var G__8661 = (0);
var G__8662 = (0);
seq__8636_8640 = G__8659;
chunk__8637_8641 = G__8660;
count__8638_8642 = G__8661;
i__8639_8643 = G__8662;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args8663 = [];
var len__7487__auto___8666 = arguments.length;
var i__7488__auto___8667 = (0);
while(true){
if((i__7488__auto___8667 < len__7487__auto___8666)){
args8663.push((arguments[i__7488__auto___8667]));

var G__8668 = (i__7488__auto___8667 + (1));
i__7488__auto___8667 = G__8668;
continue;
} else {
}
break;
}

var G__8665 = args8663.length;
switch (G__8665) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8663.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8670 = (i + (2));
var G__8671 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__8670;
ret = G__8671;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8672_8676 = cljs.core.seq.call(null,v);
var chunk__8673_8677 = null;
var count__8674_8678 = (0);
var i__8675_8679 = (0);
while(true){
if((i__8675_8679 < count__8674_8678)){
var x_8680 = cljs.core._nth.call(null,chunk__8673_8677,i__8675_8679);
ret.push(x_8680);

var G__8681 = seq__8672_8676;
var G__8682 = chunk__8673_8677;
var G__8683 = count__8674_8678;
var G__8684 = (i__8675_8679 + (1));
seq__8672_8676 = G__8681;
chunk__8673_8677 = G__8682;
count__8674_8678 = G__8683;
i__8675_8679 = G__8684;
continue;
} else {
var temp__4657__auto___8685 = cljs.core.seq.call(null,seq__8672_8676);
if(temp__4657__auto___8685){
var seq__8672_8686__$1 = temp__4657__auto___8685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8672_8686__$1)){
var c__7223__auto___8687 = cljs.core.chunk_first.call(null,seq__8672_8686__$1);
var G__8688 = cljs.core.chunk_rest.call(null,seq__8672_8686__$1);
var G__8689 = c__7223__auto___8687;
var G__8690 = cljs.core.count.call(null,c__7223__auto___8687);
var G__8691 = (0);
seq__8672_8676 = G__8688;
chunk__8673_8677 = G__8689;
count__8674_8678 = G__8690;
i__8675_8679 = G__8691;
continue;
} else {
var x_8692 = cljs.core.first.call(null,seq__8672_8686__$1);
ret.push(x_8692);

var G__8693 = cljs.core.next.call(null,seq__8672_8686__$1);
var G__8694 = null;
var G__8695 = (0);
var G__8696 = (0);
seq__8672_8676 = G__8693;
chunk__8673_8677 = G__8694;
count__8674_8678 = G__8695;
i__8675_8679 = G__8696;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8697_8701 = cljs.core.seq.call(null,v);
var chunk__8698_8702 = null;
var count__8699_8703 = (0);
var i__8700_8704 = (0);
while(true){
if((i__8700_8704 < count__8699_8703)){
var x_8705 = cljs.core._nth.call(null,chunk__8698_8702,i__8700_8704);
ret.push(x_8705);

var G__8706 = seq__8697_8701;
var G__8707 = chunk__8698_8702;
var G__8708 = count__8699_8703;
var G__8709 = (i__8700_8704 + (1));
seq__8697_8701 = G__8706;
chunk__8698_8702 = G__8707;
count__8699_8703 = G__8708;
i__8700_8704 = G__8709;
continue;
} else {
var temp__4657__auto___8710 = cljs.core.seq.call(null,seq__8697_8701);
if(temp__4657__auto___8710){
var seq__8697_8711__$1 = temp__4657__auto___8710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8697_8711__$1)){
var c__7223__auto___8712 = cljs.core.chunk_first.call(null,seq__8697_8711__$1);
var G__8713 = cljs.core.chunk_rest.call(null,seq__8697_8711__$1);
var G__8714 = c__7223__auto___8712;
var G__8715 = cljs.core.count.call(null,c__7223__auto___8712);
var G__8716 = (0);
seq__8697_8701 = G__8713;
chunk__8698_8702 = G__8714;
count__8699_8703 = G__8715;
i__8700_8704 = G__8716;
continue;
} else {
var x_8717 = cljs.core.first.call(null,seq__8697_8711__$1);
ret.push(x_8717);

var G__8718 = cljs.core.next.call(null,seq__8697_8711__$1);
var G__8719 = null;
var G__8720 = (0);
var G__8721 = (0);
seq__8697_8701 = G__8718;
chunk__8698_8702 = G__8719;
count__8699_8703 = G__8720;
i__8700_8704 = G__8721;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8722_8726 = cljs.core.seq.call(null,v);
var chunk__8723_8727 = null;
var count__8724_8728 = (0);
var i__8725_8729 = (0);
while(true){
if((i__8725_8729 < count__8724_8728)){
var x_8730 = cljs.core._nth.call(null,chunk__8723_8727,i__8725_8729);
ret.push(x_8730);

var G__8731 = seq__8722_8726;
var G__8732 = chunk__8723_8727;
var G__8733 = count__8724_8728;
var G__8734 = (i__8725_8729 + (1));
seq__8722_8726 = G__8731;
chunk__8723_8727 = G__8732;
count__8724_8728 = G__8733;
i__8725_8729 = G__8734;
continue;
} else {
var temp__4657__auto___8735 = cljs.core.seq.call(null,seq__8722_8726);
if(temp__4657__auto___8735){
var seq__8722_8736__$1 = temp__4657__auto___8735;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8722_8736__$1)){
var c__7223__auto___8737 = cljs.core.chunk_first.call(null,seq__8722_8736__$1);
var G__8738 = cljs.core.chunk_rest.call(null,seq__8722_8736__$1);
var G__8739 = c__7223__auto___8737;
var G__8740 = cljs.core.count.call(null,c__7223__auto___8737);
var G__8741 = (0);
seq__8722_8726 = G__8738;
chunk__8723_8727 = G__8739;
count__8724_8728 = G__8740;
i__8725_8729 = G__8741;
continue;
} else {
var x_8742 = cljs.core.first.call(null,seq__8722_8736__$1);
ret.push(x_8742);

var G__8743 = cljs.core.next.call(null,seq__8722_8736__$1);
var G__8744 = null;
var G__8745 = (0);
var G__8746 = (0);
seq__8722_8726 = G__8743;
chunk__8723_8727 = G__8744;
count__8724_8728 = G__8745;
i__8725_8729 = G__8746;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args8747 = [];
var len__7487__auto___8762 = arguments.length;
var i__7488__auto___8763 = (0);
while(true){
if((i__7488__auto___8763 < len__7487__auto___8762)){
args8747.push((arguments[i__7488__auto___8763]));

var G__8764 = (i__7488__auto___8763 + (1));
i__7488__auto___8763 = G__8764;
continue;
} else {
}
break;
}

var G__8749 = args8747.length;
switch (G__8749) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8747.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8750 = obj;
G__8750.push(kfn.call(null,k),vfn.call(null,v));

return G__8750;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8751 = cljs.core.clone.call(null,handlers);
x8751.forEach = ((function (x8751,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8752 = cljs.core.seq.call(null,coll);
var chunk__8753 = null;
var count__8754 = (0);
var i__8755 = (0);
while(true){
if((i__8755 < count__8754)){
var vec__8756 = cljs.core._nth.call(null,chunk__8753,i__8755);
var k = cljs.core.nth.call(null,vec__8756,(0),null);
var v = cljs.core.nth.call(null,vec__8756,(1),null);
f.call(null,v,k);

var G__8766 = seq__8752;
var G__8767 = chunk__8753;
var G__8768 = count__8754;
var G__8769 = (i__8755 + (1));
seq__8752 = G__8766;
chunk__8753 = G__8767;
count__8754 = G__8768;
i__8755 = G__8769;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8752);
if(temp__4657__auto__){
var seq__8752__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8752__$1)){
var c__7223__auto__ = cljs.core.chunk_first.call(null,seq__8752__$1);
var G__8770 = cljs.core.chunk_rest.call(null,seq__8752__$1);
var G__8771 = c__7223__auto__;
var G__8772 = cljs.core.count.call(null,c__7223__auto__);
var G__8773 = (0);
seq__8752 = G__8770;
chunk__8753 = G__8771;
count__8754 = G__8772;
i__8755 = G__8773;
continue;
} else {
var vec__8759 = cljs.core.first.call(null,seq__8752__$1);
var k = cljs.core.nth.call(null,vec__8759,(0),null);
var v = cljs.core.nth.call(null,vec__8759,(1),null);
f.call(null,v,k);

var G__8774 = cljs.core.next.call(null,seq__8752__$1);
var G__8775 = null;
var G__8776 = (0);
var G__8777 = (0);
seq__8752 = G__8774;
chunk__8753 = G__8775;
count__8754 = G__8776;
i__8755 = G__8777;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8751,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8751;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args8778 = [];
var len__7487__auto___8784 = arguments.length;
var i__7488__auto___8785 = (0);
while(true){
if((i__7488__auto___8785 < len__7487__auto___8784)){
args8778.push((arguments[i__7488__auto___8785]));

var G__8786 = (i__7488__auto___8785 + (1));
i__7488__auto___8785 = G__8786;
continue;
} else {
}
break;
}

var G__8780 = args8778.length;
switch (G__8780) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8778.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit8781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit8781 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8782){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8782 = meta8782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit8781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8783,meta8782__$1){
var self__ = this;
var _8783__$1 = this;
return (new cognitect.transit.t_cognitect$transit8781(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8782__$1));
});

cognitect.transit.t_cognitect$transit8781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8783){
var self__ = this;
var _8783__$1 = this;
return self__.meta8782;
});

cognitect.transit.t_cognitect$transit8781.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8781.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit8781.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8781.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit8781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8782","meta8782",-173584855,null)], null);
});

cognitect.transit.t_cognitect$transit8781.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit8781.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit8781";

cognitect.transit.t_cognitect$transit8781.cljs$lang$ctorPrWriter = (function (this__7018__auto__,writer__7019__auto__,opt__7020__auto__){
return cljs.core._write.call(null,writer__7019__auto__,"cognitect.transit/t_cognitect$transit8781");
});

cognitect.transit.__GT_t_cognitect$transit8781 = (function cognitect$transit$__GT_t_cognitect$transit8781(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8782){
return (new cognitect.transit.t_cognitect$transit8781(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8782));
});

}

return (new cognitect.transit.t_cognitect$transit8781(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6412__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6412__auto__)){
return or__6412__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

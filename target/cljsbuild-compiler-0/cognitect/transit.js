// Compiled by ClojureScript 1.7.228 {}
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
var seq__11281_11285 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__11282_11286 = null;
var count__11283_11287 = (0);
var i__11284_11288 = (0);
while(true){
if((i__11284_11288 < count__11283_11287)){
var k_11289 = cljs.core._nth.call(null,chunk__11282_11286,i__11284_11288);
var v_11290 = (b[k_11289]);
(a[k_11289] = v_11290);

var G__11291 = seq__11281_11285;
var G__11292 = chunk__11282_11286;
var G__11293 = count__11283_11287;
var G__11294 = (i__11284_11288 + (1));
seq__11281_11285 = G__11291;
chunk__11282_11286 = G__11292;
count__11283_11287 = G__11293;
i__11284_11288 = G__11294;
continue;
} else {
var temp__4657__auto___11295 = cljs.core.seq.call(null,seq__11281_11285);
if(temp__4657__auto___11295){
var seq__11281_11296__$1 = temp__4657__auto___11295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11281_11296__$1)){
var c__6959__auto___11297 = cljs.core.chunk_first.call(null,seq__11281_11296__$1);
var G__11298 = cljs.core.chunk_rest.call(null,seq__11281_11296__$1);
var G__11299 = c__6959__auto___11297;
var G__11300 = cljs.core.count.call(null,c__6959__auto___11297);
var G__11301 = (0);
seq__11281_11285 = G__11298;
chunk__11282_11286 = G__11299;
count__11283_11287 = G__11300;
i__11284_11288 = G__11301;
continue;
} else {
var k_11302 = cljs.core.first.call(null,seq__11281_11296__$1);
var v_11303 = (b[k_11302]);
(a[k_11302] = v_11303);

var G__11304 = cljs.core.next.call(null,seq__11281_11296__$1);
var G__11305 = null;
var G__11306 = (0);
var G__11307 = (0);
seq__11281_11285 = G__11304;
chunk__11282_11286 = G__11305;
count__11283_11287 = G__11306;
i__11284_11288 = G__11307;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/VectorBuilder");
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
var args11308 = [];
var len__7214__auto___11311 = arguments.length;
var i__7215__auto___11312 = (0);
while(true){
if((i__7215__auto___11312 < len__7214__auto___11311)){
args11308.push((arguments[i__7215__auto___11312]));

var G__11313 = (i__7215__auto___11312 + (1));
i__7215__auto___11312 = G__11313;
continue;
} else {
}
break;
}

var G__11310 = args11308.length;
switch (G__11310) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11308.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
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
var G__11315 = (i + (2));
var G__11316 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11315;
ret = G__11316;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/SymbolHandler");
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
var seq__11317_11321 = cljs.core.seq.call(null,v);
var chunk__11318_11322 = null;
var count__11319_11323 = (0);
var i__11320_11324 = (0);
while(true){
if((i__11320_11324 < count__11319_11323)){
var x_11325 = cljs.core._nth.call(null,chunk__11318_11322,i__11320_11324);
ret.push(x_11325);

var G__11326 = seq__11317_11321;
var G__11327 = chunk__11318_11322;
var G__11328 = count__11319_11323;
var G__11329 = (i__11320_11324 + (1));
seq__11317_11321 = G__11326;
chunk__11318_11322 = G__11327;
count__11319_11323 = G__11328;
i__11320_11324 = G__11329;
continue;
} else {
var temp__4657__auto___11330 = cljs.core.seq.call(null,seq__11317_11321);
if(temp__4657__auto___11330){
var seq__11317_11331__$1 = temp__4657__auto___11330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11317_11331__$1)){
var c__6959__auto___11332 = cljs.core.chunk_first.call(null,seq__11317_11331__$1);
var G__11333 = cljs.core.chunk_rest.call(null,seq__11317_11331__$1);
var G__11334 = c__6959__auto___11332;
var G__11335 = cljs.core.count.call(null,c__6959__auto___11332);
var G__11336 = (0);
seq__11317_11321 = G__11333;
chunk__11318_11322 = G__11334;
count__11319_11323 = G__11335;
i__11320_11324 = G__11336;
continue;
} else {
var x_11337 = cljs.core.first.call(null,seq__11317_11331__$1);
ret.push(x_11337);

var G__11338 = cljs.core.next.call(null,seq__11317_11331__$1);
var G__11339 = null;
var G__11340 = (0);
var G__11341 = (0);
seq__11317_11321 = G__11338;
chunk__11318_11322 = G__11339;
count__11319_11323 = G__11340;
i__11320_11324 = G__11341;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/MapHandler");
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
var seq__11342_11346 = cljs.core.seq.call(null,v);
var chunk__11343_11347 = null;
var count__11344_11348 = (0);
var i__11345_11349 = (0);
while(true){
if((i__11345_11349 < count__11344_11348)){
var x_11350 = cljs.core._nth.call(null,chunk__11343_11347,i__11345_11349);
ret.push(x_11350);

var G__11351 = seq__11342_11346;
var G__11352 = chunk__11343_11347;
var G__11353 = count__11344_11348;
var G__11354 = (i__11345_11349 + (1));
seq__11342_11346 = G__11351;
chunk__11343_11347 = G__11352;
count__11344_11348 = G__11353;
i__11345_11349 = G__11354;
continue;
} else {
var temp__4657__auto___11355 = cljs.core.seq.call(null,seq__11342_11346);
if(temp__4657__auto___11355){
var seq__11342_11356__$1 = temp__4657__auto___11355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11342_11356__$1)){
var c__6959__auto___11357 = cljs.core.chunk_first.call(null,seq__11342_11356__$1);
var G__11358 = cljs.core.chunk_rest.call(null,seq__11342_11356__$1);
var G__11359 = c__6959__auto___11357;
var G__11360 = cljs.core.count.call(null,c__6959__auto___11357);
var G__11361 = (0);
seq__11342_11346 = G__11358;
chunk__11343_11347 = G__11359;
count__11344_11348 = G__11360;
i__11345_11349 = G__11361;
continue;
} else {
var x_11362 = cljs.core.first.call(null,seq__11342_11356__$1);
ret.push(x_11362);

var G__11363 = cljs.core.next.call(null,seq__11342_11356__$1);
var G__11364 = null;
var G__11365 = (0);
var G__11366 = (0);
seq__11342_11346 = G__11363;
chunk__11343_11347 = G__11364;
count__11344_11348 = G__11365;
i__11345_11349 = G__11366;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/SetHandler");
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
var seq__11367_11371 = cljs.core.seq.call(null,v);
var chunk__11368_11372 = null;
var count__11369_11373 = (0);
var i__11370_11374 = (0);
while(true){
if((i__11370_11374 < count__11369_11373)){
var x_11375 = cljs.core._nth.call(null,chunk__11368_11372,i__11370_11374);
ret.push(x_11375);

var G__11376 = seq__11367_11371;
var G__11377 = chunk__11368_11372;
var G__11378 = count__11369_11373;
var G__11379 = (i__11370_11374 + (1));
seq__11367_11371 = G__11376;
chunk__11368_11372 = G__11377;
count__11369_11373 = G__11378;
i__11370_11374 = G__11379;
continue;
} else {
var temp__4657__auto___11380 = cljs.core.seq.call(null,seq__11367_11371);
if(temp__4657__auto___11380){
var seq__11367_11381__$1 = temp__4657__auto___11380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11367_11381__$1)){
var c__6959__auto___11382 = cljs.core.chunk_first.call(null,seq__11367_11381__$1);
var G__11383 = cljs.core.chunk_rest.call(null,seq__11367_11381__$1);
var G__11384 = c__6959__auto___11382;
var G__11385 = cljs.core.count.call(null,c__6959__auto___11382);
var G__11386 = (0);
seq__11367_11371 = G__11383;
chunk__11368_11372 = G__11384;
count__11369_11373 = G__11385;
i__11370_11374 = G__11386;
continue;
} else {
var x_11387 = cljs.core.first.call(null,seq__11367_11381__$1);
ret.push(x_11387);

var G__11388 = cljs.core.next.call(null,seq__11367_11381__$1);
var G__11389 = null;
var G__11390 = (0);
var G__11391 = (0);
seq__11367_11371 = G__11388;
chunk__11368_11372 = G__11389;
count__11369_11373 = G__11390;
i__11370_11374 = G__11391;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/UUIDHandler");
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
var args11392 = [];
var len__7214__auto___11403 = arguments.length;
var i__7215__auto___11404 = (0);
while(true){
if((i__7215__auto___11404 < len__7214__auto___11403)){
args11392.push((arguments[i__7215__auto___11404]));

var G__11405 = (i__7215__auto___11404 + (1));
i__7215__auto___11404 = G__11405;
continue;
} else {
}
break;
}

var G__11394 = args11392.length;
switch (G__11394) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11392.length)].join('')));

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
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__11395 = obj;
G__11395.push(kfn.call(null,k),vfn.call(null,v));

return G__11395;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x11396 = cljs.core.clone.call(null,handlers);
x11396.forEach = ((function (x11396,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__11397 = cljs.core.seq.call(null,coll);
var chunk__11398 = null;
var count__11399 = (0);
var i__11400 = (0);
while(true){
if((i__11400 < count__11399)){
var vec__11401 = cljs.core._nth.call(null,chunk__11398,i__11400);
var k = cljs.core.nth.call(null,vec__11401,(0),null);
var v = cljs.core.nth.call(null,vec__11401,(1),null);
f.call(null,v,k);

var G__11407 = seq__11397;
var G__11408 = chunk__11398;
var G__11409 = count__11399;
var G__11410 = (i__11400 + (1));
seq__11397 = G__11407;
chunk__11398 = G__11408;
count__11399 = G__11409;
i__11400 = G__11410;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11397);
if(temp__4657__auto__){
var seq__11397__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11397__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__11397__$1);
var G__11411 = cljs.core.chunk_rest.call(null,seq__11397__$1);
var G__11412 = c__6959__auto__;
var G__11413 = cljs.core.count.call(null,c__6959__auto__);
var G__11414 = (0);
seq__11397 = G__11411;
chunk__11398 = G__11412;
count__11399 = G__11413;
i__11400 = G__11414;
continue;
} else {
var vec__11402 = cljs.core.first.call(null,seq__11397__$1);
var k = cljs.core.nth.call(null,vec__11402,(0),null);
var v = cljs.core.nth.call(null,vec__11402,(1),null);
f.call(null,v,k);

var G__11415 = cljs.core.next.call(null,seq__11397__$1);
var G__11416 = null;
var G__11417 = (0);
var G__11418 = (0);
seq__11397 = G__11415;
chunk__11398 = G__11416;
count__11399 = G__11417;
i__11400 = G__11418;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11396,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x11396;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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
var args11419 = [];
var len__7214__auto___11425 = arguments.length;
var i__7215__auto___11426 = (0);
while(true){
if((i__7215__auto___11426 < len__7214__auto___11425)){
args11419.push((arguments[i__7215__auto___11426]));

var G__11427 = (i__7215__auto___11426 + (1));
i__7215__auto___11426 = G__11427;
continue;
} else {
}
break;
}

var G__11421 = args11419.length;
switch (G__11421) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11419.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit11422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit11422 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta11423){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta11423 = meta11423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit11422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11424,meta11423__$1){
var self__ = this;
var _11424__$1 = this;
return (new cognitect.transit.t_cognitect$transit11422(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta11423__$1));
});

cognitect.transit.t_cognitect$transit11422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11424){
var self__ = this;
var _11424__$1 = this;
return self__.meta11423;
});

cognitect.transit.t_cognitect$transit11422.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit11422.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit11422.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit11422.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit11422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta11423","meta11423",-871415702,null)], null);
});

cognitect.transit.t_cognitect$transit11422.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit11422.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit11422";

cognitect.transit.t_cognitect$transit11422.cljs$lang$ctorPrWriter = (function (this__6754__auto__,writer__6755__auto__,opt__6756__auto__){
return cljs.core._write.call(null,writer__6755__auto__,"cognitect.transit/t_cognitect$transit11422");
});

cognitect.transit.__GT_t_cognitect$transit11422 = (function cognitect$transit$__GT_t_cognitect$transit11422(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11423){
return (new cognitect.transit.t_cognitect$transit11422(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11423));
});

}

return (new cognitect.transit.t_cognitect$transit11422(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__6156__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
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

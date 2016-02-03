// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('clojure.string');
goog.require('goog.json.Serializer');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response.call(null,interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request.call(null,interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k11642,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__11644 = (((k11642 instanceof cljs.core.Keyword))?k11642.fqn:null);
switch (G__11644) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11642,else__6773__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__11645,opts){
var self__ = this;
var map__11646 = p__11645;
var map__11646__$1 = ((((!((map__11646 == null)))?((((map__11646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11646):map__11646);
var request__$1 = cljs.core.get.call(null,map__11646__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__11648 = this;
var map__11648__$1 = ((((!((map__11648 == null)))?((((map__11648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11648):map__11648);
var request__$2 = cljs.core.get.call(null,map__11648__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__11650,xhrio){
var self__ = this;
var map__11651 = p__11650;
var map__11651__$1 = ((((!((map__11651 == null)))?((((map__11651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11651):map__11651);
var response__$1 = cljs.core.get.call(null,map__11651__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__11653 = this;
var map__11653__$1 = ((((!((map__11653 == null)))?((((map__11653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11653):map__11653);
var response__$2 = cljs.core.get.call(null,map__11653__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$ = true;

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11641){
var self__ = this;
var G__11641__$1 = this;
return (new cljs.core.RecordIter((0),G__11641__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap.call(null,this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map.call(null,this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__11641){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__11655 = cljs.core.keyword_identical_QMARK_;
var expr__11656 = k__6778__auto__;
if(cljs.core.truth_(pred__11655.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__11656))){
return (new ajax.core.StandardInterceptor(G__11641,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11655.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__11656))){
return (new ajax.core.StandardInterceptor(self__.name,G__11641,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11655.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__11656))){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__11641,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__11641),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__11641){
var self__ = this;
var this__6769__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__11641,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__11643){
return (new ajax.core.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__11643),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__11643),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__11643),null,cljs.core.dissoc.call(null,G__11643,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__6156__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__11659,xhrio){
var map__11662 = p__11659;
var map__11662__$1 = ((((!((map__11662 == null)))?((((map__11662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11662):map__11662);
var description = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(ajax.core.exception_message.call(null,e)),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11668 = arguments.length;
var i__7215__auto___11669 = (0);
while(true){
if((i__7215__auto___11669 < len__7214__auto___11668)){
args__7221__auto__.push((arguments[i__7215__auto___11669]));

var G__11670 = (i__7215__auto___11669 + (1));
i__7215__auto___11669 = G__11670;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((3) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7222__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq11664){
var G__11665 = cljs.core.first.call(null,seq11664);
var seq11664__$1 = cljs.core.next.call(null,seq11664);
var G__11666 = cljs.core.first.call(null,seq11664__$1);
var seq11664__$2 = cljs.core.next.call(null,seq11664__$1);
var G__11667 = cljs.core.first.call(null,seq11664__$2);
var seq11664__$3 = cljs.core.next.call(null,seq11664__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__11665,G__11666,G__11667,seq11664__$3);
});
ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,(function (p1__11671_SHARP_){
return [cljs.core.str(p1__11671_SHARP_),cljs.core.str("; charset=utf-8")].join('');
}),((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k11674,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__11676 = (((k11674 instanceof cljs.core.Keyword))?k11674.fqn:null);
switch (G__11676) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11674,else__6773__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__11677,request){
var self__ = this;
var map__11678 = p__11677;
var map__11678__$1 = ((((!((map__11678 == null)))?((((map__11678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11678):map__11678);
var content_type__$1 = cljs.core.get.call(null,map__11678__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__11680 = this;
var map__11680__$1 = ((((!((map__11680 == null)))?((((map__11680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11680):map__11680);
var content_type__$2 = cljs.core.get.call(null,map__11680__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__11680,map__11680__$1,content_type__$2,map__11678,map__11678__$1,content_type__$1){
return (function (p1__11672_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__6156__auto__ = p1__11672_SHARP_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__11680,map__11680__$1,content_type__$2,map__11678,map__11678__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__11682,xhrio){
var self__ = this;
var map__11683 = p__11682;
var map__11683__$1 = ((((!((map__11683 == null)))?((((map__11683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11683):map__11683);
var format = map__11683__$1;
var read__$1 = cljs.core.get.call(null,map__11683__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__11685 = this;
var map__11685__$1 = ((((!((map__11685 == null)))?((((map__11685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11685):map__11685);
var format__$1 = map__11685__$1;
var read__$2 = cljs.core.get.call(null,map__11685__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__11688 = status;
switch (G__11688) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e11689){if((e11689 instanceof Object)){
var e = e11689;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e11689;

}
}
}
}catch (e11687){if((e11687 instanceof Object)){
var e = e11687;
var message = e.message;
return ajax.core.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e11687;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11673){
var self__ = this;
var G__11673__$1 = this;
return (new cljs.core.RecordIter((0),G__11673__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap.call(null,this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map.call(null,this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__11673){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__11690 = cljs.core.keyword_identical_QMARK_;
var expr__11691 = k__6778__auto__;
if(cljs.core.truth_(pred__11690.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__11691))){
return (new ajax.core.ResponseFormat(G__11673,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11690.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__11691))){
return (new ajax.core.ResponseFormat(self__.read,G__11673,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11690.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__11691))){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__11673,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__11673),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__11673){
var self__ = this;
var this__6769__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__11673,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__11675){
return (new ajax.core.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__11675),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__11675),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__11675),null,cljs.core.dissoc.call(null,G__11675,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var args11695 = [];
var len__7214__auto___11698 = arguments.length;
var i__7215__auto___11699 = (0);
while(true){
if((i__7215__auto___11699 < len__7214__auto___11698)){
args11695.push((arguments[i__7215__auto___11699]));

var G__11700 = (i__7215__auto___11699 + (1));
i__7215__auto___11699 = G__11700;
continue;
} else {
}
break;
}

var G__11697 = args11695.length;
switch (G__11697) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11695.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
return ajax.core.param_to_str.call(null,prefix,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;
ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var args11702 = [];
var len__7214__auto___11709 = arguments.length;
var i__7215__auto___11710 = (0);
while(true){
if((i__7215__auto___11710 < len__7214__auto___11709)){
args11702.push((arguments[i__7215__auto___11710]));

var G__11711 = (i__7215__auto___11710 + (1));
i__7215__auto___11710 = G__11711;
continue;
} else {
}
break;
}

var G__11704 = args11702.length;
switch (G__11704) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11702.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__11705){
var vec__11706 = p__11705;
var key = cljs.core.nth.call(null,vec__11706,(0),null);
var value = cljs.core.nth.call(null,vec__11706,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__11707){
var vec__11708 = p__11707;
var key = cljs.core.nth.call(null,vec__11708,(0),null);
var value = cljs.core.nth.call(null,vec__11708,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name.call(null,key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str(prefix),cljs.core.str("["),cljs.core.str(k1),cljs.core.str("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_.call(null,value)){
return cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,new_key),cljs.core.seq.call(null,value));
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,ajax.core.vec_param_to_str.call(null,new_key),cljs.core.seq.call(null,value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;
ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__11715){
var vec__11716 = p__11715;
var k = cljs.core.nth.call(null,vec__11716,(0),null);
var v = cljs.core.nth.call(null,vec__11716,(1),null);
return [cljs.core.str(k),cljs.core.str("="),cljs.core.str(v)].join('');
}),cljs.core.mapcat.call(null,ajax.core.param_to_str.call(null,null),cljs.core.seq.call(null,params))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var args11717 = [];
var len__7214__auto___11720 = arguments.length;
var i__7215__auto___11721 = (0);
while(true){
if((i__7215__auto___11721 < len__7214__auto___11720)){
args11717.push((arguments[i__7215__auto___11721]));

var G__11722 = (i__7215__auto___11721 + (1));
i__7215__auto___11721 = G__11722;
continue;
} else {
}
break;
}

var G__11719 = args11717.length;
switch (G__11719) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11717.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k11725,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__11727 = (((k11725 instanceof cljs.core.Keyword))?k11725.fqn:null);
switch (G__11727) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11725,else__6773__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__11728){
var self__ = this;
var map__11729 = p__11728;
var map__11729__$1 = ((((!((map__11729 == null)))?((((map__11729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11729):map__11729);
var request = map__11729__$1;
var method = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.core.uri_with_params.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#ajax.core.ProcessGet{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$ = true;

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11724){
var self__ = this;
var G__11724__$1 = this;
return (new cljs.core.RecordIter((0),G__11724__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap.call(null,this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map.call(null,this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),null], null), null),k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__11724){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__11731 = cljs.core.keyword_identical_QMARK_;
var expr__11732 = k__6778__auto__;
if(cljs.core.truth_(pred__11731.call(null,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),expr__11732))){
return (new ajax.core.ProcessGet(G__11724,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__11724),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108),self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__11724){
var self__ = this;
var this__6769__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__11724,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-to-str","params-to-str",705662419,null)], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__11726){
return (new ajax.core.ProcessGet(new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108).cljs$core$IFn$_invoke$arity$1(G__11726),null,cljs.core.dissoc.call(null,G__11726,new cljs.core.Keyword(null,"params-to-str","params-to-str",-934869108)),null));
});

ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str(args)].join('')));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k11736,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__11738 = k11736;
switch (G__11738) {
default:
return cljs.core.get.call(null,self__.__extmap,k11736,else__6773__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__11739){
var self__ = this;
var map__11740 = p__11739;
var map__11740__$1 = ((((!((map__11740 == null)))?((((map__11740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11740):map__11740);
var request = map__11740__$1;
var body = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var params = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"params","params",710516235));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$ = true;

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11735){
var self__ = this;
var G__11735__$1 = this;
return (new cljs.core.RecordIter((0),G__11735__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap.call(null,this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map.call(null,this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__11735){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__11742 = cljs.core.keyword_identical_QMARK_;
var expr__11743 = k__6778__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__11735),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__11735){
var self__ = this;
var this__6769__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__11735,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__11737){
return (new ajax.core.DirectSubmission(null,cljs.core.dissoc.call(null,G__11737),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6770__auto__,k__6771__auto__){
var self__ = this;
var this__6770__auto____$1 = this;
return cljs.core._lookup.call(null,this__6770__auto____$1,k__6771__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6772__auto__,k11747,else__6773__auto__){
var self__ = this;
var this__6772__auto____$1 = this;
var G__11749 = k11747;
switch (G__11749) {
default:
return cljs.core.get.call(null,self__.__extmap,k11747,else__6773__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = true;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__11750){
var self__ = this;
var map__11751 = p__11750;
var map__11751__$1 = ((((!((map__11751 == null)))?((((map__11751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11751):map__11751);
var request = map__11751__$1;
var uri = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__11751__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__11753 = ajax.core.get_request_format.call(null,format);
var map__11753__$1 = ((((!((map__11753 == null)))?((((map__11753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11753):map__11753);
var write = cljs.core.get.call(null,map__11753__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__11753__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.core.apply_request_format.call(null,write,params):ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__6156__auto__ = headers;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.core.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6784__auto__,writer__6785__auto__,opts__6786__auto__){
var self__ = this;
var this__6784__auto____$1 = this;
var pr_pair__6787__auto__ = ((function (this__6784__auto____$1){
return (function (keyval__6788__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,cljs.core.pr_writer,""," ","",opts__6786__auto__,keyval__6788__auto__);
});})(this__6784__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__6785__auto__,pr_pair__6787__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__6786__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$ = true;

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11746){
var self__ = this;
var G__11746__$1 = this;
return (new cljs.core.RecordIter((0),G__11746__$1,0,cljs.core.PersistentVector.EMPTY,cljs.core._iterator.call(null,self__.__extmap)));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6768__auto__){
var self__ = this;
var this__6768__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6764__auto__){
var self__ = this;
var this__6764__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6774__auto__){
var self__ = this;
var this__6774__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6765__auto__){
var self__ = this;
var this__6765__auto____$1 = this;
var h__6591__auto__ = self__.__hash;
if(!((h__6591__auto__ == null))){
return h__6591__auto__;
} else {
var h__6591__auto____$1 = cljs.core.hash_imap.call(null,this__6765__auto____$1);
self__.__hash = h__6591__auto____$1;

return h__6591__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6766__auto__,other__6767__auto__){
var self__ = this;
var this__6766__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6144__auto__ = other__6767__auto__;
if(cljs.core.truth_(and__6144__auto__)){
var and__6144__auto____$1 = (this__6766__auto____$1.constructor === other__6767__auto__.constructor);
if(and__6144__auto____$1){
return cljs.core.equiv_map.call(null,this__6766__auto____$1,other__6767__auto__);
} else {
return and__6144__auto____$1;
}
} else {
return and__6144__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6779__auto__,k__6780__auto__){
var self__ = this;
var this__6779__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__6780__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__6779__auto____$1),self__.__meta),k__6780__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__6780__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6777__auto__,k__6778__auto__,G__11746){
var self__ = this;
var this__6777__auto____$1 = this;
var pred__11755 = cljs.core.keyword_identical_QMARK_;
var expr__11756 = k__6778__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__6778__auto__,G__11746),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6782__auto__){
var self__ = this;
var this__6782__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6769__auto__,G__11746){
var self__ = this;
var this__6769__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__11746,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6775__auto__,entry__6776__auto__){
var self__ = this;
var this__6775__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__6776__auto__)){
return cljs.core._assoc.call(null,this__6775__auto____$1,cljs.core._nth.call(null,entry__6776__auto__,(0)),cljs.core._nth.call(null,entry__6776__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__6775__auto____$1,entry__6776__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__6804__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__6804__auto__,writer__6805__auto__){
return cljs.core._write.call(null,writer__6805__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__11748){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.dissoc.call(null,G__11748),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__11759){
var map__11762 = p__11759;
var map__11762__$1 = ((((!((map__11762 == null)))?((((map__11762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11762):map__11762);
var type = cljs.core.get.call(null,map__11762__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var or__6156__auto__ = type;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"writer","writer",-277568236).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cognitect.transit.writer.call(null,type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write.call(null,writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args11764 = [];
var len__7214__auto___11767 = arguments.length;
var i__7215__auto___11768 = (0);
while(true){
if((i__7215__auto___11768 < len__7214__auto___11767)){
args11764.push((arguments[i__7215__auto___11768]));

var G__11769 = (i__7215__auto___11768 + (1));
i__7215__auto___11768 = G__11769;
continue;
} else {
}
break;
}

var G__11766 = args11764.length;
switch (G__11766) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11764.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type.call(null,request);
var mime_type = ((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write_fn.call(null,type,request),new cljs.core.Keyword(null,"content-type","content-type",-508222634),[cljs.core.str("application/transit+"),cljs.core.str(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"reader","reader",169660853).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570),request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
var data = cognitect.transit.read.call(null,reader,ajax.protocols._body.call(null,response));
if(cljs.core.truth_(new cljs.core.Keyword(null,"raw","raw",1604651272).cljs$core$IFn$_invoke$arity$1(request))){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args11771 = [];
var len__7214__auto___11774 = arguments.length;
var i__7215__auto___11775 = (0);
while(true){
if((i__7215__auto___11775 < len__7214__auto___11774)){
args11771.push((arguments[i__7215__auto___11775]));

var G__11776 = (i__7215__auto___11775 + (1));
i__7215__auto___11775 = G__11776;
continue;
} else {
}
break;
}

var G__11773 = args11771.length;
switch (G__11773) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11771.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.call(null,ajax.core.transit_type.call(null,request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read_fn.call(null,request),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,ajax.core.params_to_str),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args11778 = [];
var len__7214__auto___11781 = arguments.length;
var i__7215__auto___11782 = (0);
while(true){
if((i__7215__auto___11782 < len__7214__auto___11781)){
args11778.push((arguments[i__7215__auto___11782]));

var G__11783 = (i__7215__auto___11782 + (1));
i__7215__auto___11782 = G__11783;
continue;
} else {
}
break;
}

var G__11780 = args11778.length;
switch (G__11780) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11778.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.protocols._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.to_utf8_writer.call(null,cljs.core.identity),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__6144__auto__ = prefix;
if(cljs.core.truth_(and__6144__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__6144__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args11785 = [];
var len__7214__auto___11788 = arguments.length;
var i__7215__auto___11789 = (0);
while(true){
if((i__7215__auto___11789 < len__7214__auto___11788)){
args11785.push((arguments[i__7215__auto___11789]));

var G__11790 = (i__7215__auto___11789 + (1));
i__7215__auto___11789 = G__11790;
continue;
} else {
}
break;
}

var G__11787 = args11785.length;
switch (G__11787) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11785.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix.call(null,prefix,ajax.protocols._body.call(null,xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args11792 = [];
var len__7214__auto___11798 = arguments.length;
var i__7215__auto___11799 = (0);
while(true){
if((i__7215__auto___11799 < len__7214__auto___11798)){
args11792.push((arguments[i__7215__auto___11799]));

var G__11800 = (i__7215__auto___11799 + (1));
i__7215__auto___11799 = G__11800;
continue;
} else {
}
break;
}

var G__11794 = args11792.length;
switch (G__11794) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11792.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__11795){
var map__11796 = p__11795;
var map__11796__$1 = ((((!((map__11796 == null)))?((((map__11796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11796):map__11796);
var prefix = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__11796__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args11802 = [];
var len__7214__auto___11805 = arguments.length;
var i__7215__auto___11806 = (0);
while(true){
if((i__7215__auto___11806 < len__7214__auto___11805)){
args11802.push((arguments[i__7215__auto___11806]));

var G__11807 = (i__7215__auto___11806 + (1));
i__7215__auto___11806 = G__11807;
continue;
} else {
}
break;
}

var G__11804 = args11802.length;
switch (G__11804) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11802.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_.call(null,format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,request,cljs.core.second.call(null,format_entry));
} else {
return format_entry.call(null,request);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var args11809 = [];
var len__7214__auto___11812 = arguments.length;
var i__7215__auto___11813 = (0);
while(true){
if((i__7215__auto___11813 < len__7214__auto___11812)){
args11809.push((arguments[i__7215__auto___11813]));

var G__11814 = (i__7215__auto___11813 + (1));
i__7215__auto___11813 = G__11814;
continue;
} else {
}
break;
}

var G__11811 = args11809.length;
switch (G__11811) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11809.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;
ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var args11816 = [];
var len__7214__auto___11819 = arguments.length;
var i__7215__auto___11820 = (0);
while(true){
if((i__7215__auto___11820 < len__7214__auto___11819)){
args11816.push((arguments[i__7215__auto___11820]));

var G__11821 = (i__7215__auto___11820 + (1));
i__7215__auto___11820 = G__11821;
continue;
} else {
}
break;
}

var G__11818 = args11816.length;
switch (G__11818) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11816.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args11823 = [];
var len__7214__auto___11826 = arguments.length;
var i__7215__auto___11827 = (0);
while(true){
if((i__7215__auto___11827 < len__7214__auto___11826)){
args11823.push((arguments[i__7215__auto___11827]));

var G__11828 = (i__7215__auto___11827 + (1));
i__7215__auto___11827 = G__11828;
continue;
} else {
}
break;
}

var G__11825 = args11823.length;
switch (G__11825) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11823.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.call(null,request,format_entry);
return cljs.core.some.call(null,ajax.core.content_type_matches.call(null,content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__11830){
var map__11833 = p__11830;
var map__11833__$1 = ((((!((map__11833 == null)))?((((map__11833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11833):map__11833);
var request = map__11833__$1;
var response_format = cljs.core.get.call(null,map__11833__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,ajax.core.get_content_type.call(null,response),request);
return ajax.core.get_format.call(null,request,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args11835 = [];
var len__7214__auto___11838 = arguments.length;
var i__7215__auto___11839 = (0);
while(true){
if((i__7215__auto___11839 < len__7214__auto___11838)){
args11835.push((arguments[i__7215__auto___11839]));

var G__11840 = (i__7215__auto___11839 + (1));
i__7215__auto___11839 = G__11840;
continue;
} else {
}
break;
}

var G__11837 = args11835.length;
switch (G__11837) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11835.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format.call(null,response,request);
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(format).call(null,response);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__11842){
var map__11845 = p__11842;
var map__11845__$1 = ((((!((map__11845 == null)))?((((map__11845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11845):map__11845);
var request = map__11845__$1;
var response_format = cljs.core.get.call(null,map__11845__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return cljs.core.mapcat.call(null,ajax.core.get_accept_entries.call(null,request),response_format);
} else {
return ajax.core.get_accept_entries.call(null,request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args11847 = [];
var len__7214__auto___11850 = arguments.length;
var i__7215__auto___11851 = (0);
while(true){
if((i__7215__auto___11851 < len__7214__auto___11850)){
args11847.push((arguments[i__7215__auto___11851]));

var G__11852 = (i__7215__auto___11851 + (1));
i__7215__auto___11851 = G__11852;
continue;
} else {
}
break;
}

var G__11849 = args11847.length;
switch (G__11849) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11847.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__11854){
var map__11857 = p__11854;
var map__11857__$1 = ((((!((map__11857 == null)))?((((map__11857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11857):map__11857);
var opts = map__11857__$1;
var response_format = cljs.core.get.call(null,map__11857__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,response_format);
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.core.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.core.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args11859 = [];
var len__7214__auto___11862 = arguments.length;
var i__7215__auto___11863 = (0);
while(true){
if((i__7215__auto___11863 < len__7214__auto___11862)){
args11859.push((arguments[i__7215__auto___11863]));

var G__11864 = (i__7215__auto___11863 + (1));
i__7215__auto___11863 = G__11864;
continue;
} else {
}
break;
}

var G__11861 = args11859.length;
switch (G__11861) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11859.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response.call(null,interceptor,response__$1);
});
var processed = cljs.core.reduce.call(null,process,response,interceptors);
return handler.call(null,processed);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__11866){
var map__11869 = p__11866;
var map__11869__$1 = ((((!((map__11869 == null)))?((((map__11869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11869):map__11869);
var handler = cljs.core.get.call(null,map__11869__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,handler,interceptors);
} else {
return ajax.core.throw_error.call(null,"No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format.call(null,request);
return cljs.core.update.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"method","method",55703592),ajax.core.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),((function (response_format){
return (function (p1__11871_SHARP_){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__6156__auto__ = p1__11871_SHARP_;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return cljs.core.deref.call(null,ajax.core.default_interceptors);
}
})(),ajax.core.request_interceptors);
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__11872){
var map__11875 = p__11872;
var map__11875__$1 = ((((!((map__11875 == null)))?((((map__11875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11875):map__11875);
var request = map__11875__$1;
var interceptors = cljs.core.get.call(null,map__11875__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.call(null,ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler.call(null,cljs.core.reverse.call(null,interceptors),request__$1);
var api = (function (){var or__6156__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return ajax.core.new_default_api.call(null);
}
})();
return ajax.protocols._js_ajax_request.call(null,api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request.call(null,ajax.core.normalize_request.call(null,request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__11878 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__11878) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "text":
return ajax.core.text_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_element.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__11881 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__11881) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "text":
return ajax.core.text_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__11883_SHARP_){
return ajax.core.keyword_response_format_element.call(null,p1__11883_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args11884 = [];
var len__7214__auto___11897 = arguments.length;
var i__7215__auto___11898 = (0);
while(true){
if((i__7215__auto___11898 < len__7214__auto___11897)){
args11884.push((arguments[i__7215__auto___11898]));

var G__11899 = (i__7215__auto___11898 + (1));
i__7215__auto___11898 = G__11899;
continue;
} else {
}
break;
}

var G__11886 = args11884.length;
switch (G__11886) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11884.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__11887,p__11888){
var map__11889 = p__11887;
var map__11889__$1 = ((((!((map__11889 == null)))?((((map__11889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11889):map__11889);
var handler = cljs.core.get.call(null,map__11889__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__11889__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__11889__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__11890 = p__11888;
var ok = cljs.core.nth.call(null,vec__11890,(0),null);
var result = cljs.core.nth.call(null,vec__11890,(1),null);
var temp__4655__auto___11901 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___11901)){
var h_11902 = temp__4655__auto___11901;
h_11902.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__11892){
var map__11893 = p__11892;
var map__11893__$1 = ((((!((map__11893 == null)))?((((map__11893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11893):map__11893);
var handler = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__11893,map__11893__$1,handler,error_handler,finally$){
return (function (p__11895){
var vec__11896 = p__11895;
var ok = cljs.core.nth.call(null,vec__11896,(0),null);
var result = cljs.core.nth.call(null,vec__11896,(1),null);
var temp__4655__auto___11903 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4655__auto___11903)){
var h_11904 = temp__4655__auto___11903;
h_11904.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__11893,map__11893__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__11905){
var map__11908 = p__11905;
var map__11908__$1 = ((((!((map__11908 == null)))?((((map__11908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11908):map__11908);
var opts = map__11908__$1;
var method = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"params","params",710516235));
var body = cljs.core.get.call(null,map__11908__$1,new cljs.core.Keyword(null,"body","body",-2049205669));

var needs_format = ((body == null)) && (cljs.core.not_EQ_.call(null,method,"GET"));
var rf = (cljs.core.truth_((function (){var or__6156__auto__ = format;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11912 = arguments.length;
var i__7215__auto___11913 = (0);
while(true){
if((i__7215__auto___11913 < len__7214__auto___11912)){
args__7221__auto__.push((arguments[i__7215__auto___11913]));

var G__11914 = (i__7215__auto___11913 + (1));
i__7215__auto___11913 = G__11914;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq11910){
var G__11911 = cljs.core.first.call(null,seq11910);
var seq11910__$1 = cljs.core.next.call(null,seq11910);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__11911,seq11910__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11917 = arguments.length;
var i__7215__auto___11918 = (0);
while(true){
if((i__7215__auto___11918 < len__7214__auto___11917)){
args__7221__auto__.push((arguments[i__7215__auto___11918]));

var G__11919 = (i__7215__auto___11918 + (1));
i__7215__auto___11918 = G__11919;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq11915){
var G__11916 = cljs.core.first.call(null,seq11915);
var seq11915__$1 = cljs.core.next.call(null,seq11915);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__11916,seq11915__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11922 = arguments.length;
var i__7215__auto___11923 = (0);
while(true){
if((i__7215__auto___11923 < len__7214__auto___11922)){
args__7221__auto__.push((arguments[i__7215__auto___11923]));

var G__11924 = (i__7215__auto___11923 + (1));
i__7215__auto___11923 = G__11924;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq11920){
var G__11921 = cljs.core.first.call(null,seq11920);
var seq11920__$1 = cljs.core.next.call(null,seq11920);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__11921,seq11920__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11927 = arguments.length;
var i__7215__auto___11928 = (0);
while(true){
if((i__7215__auto___11928 < len__7214__auto___11927)){
args__7221__auto__.push((arguments[i__7215__auto___11928]));

var G__11929 = (i__7215__auto___11928 + (1));
i__7215__auto___11928 = G__11929;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq11925){
var G__11926 = cljs.core.first.call(null,seq11925);
var seq11925__$1 = cljs.core.next.call(null,seq11925);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__11926,seq11925__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11932 = arguments.length;
var i__7215__auto___11933 = (0);
while(true){
if((i__7215__auto___11933 < len__7214__auto___11932)){
args__7221__auto__.push((arguments[i__7215__auto___11933]));

var G__11934 = (i__7215__auto___11933 + (1));
i__7215__auto___11933 = G__11934;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq11930){
var G__11931 = cljs.core.first.call(null,seq11930);
var seq11930__$1 = cljs.core.next.call(null,seq11930);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__11931,seq11930__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11937 = arguments.length;
var i__7215__auto___11938 = (0);
while(true){
if((i__7215__auto___11938 < len__7214__auto___11937)){
args__7221__auto__.push((arguments[i__7215__auto___11938]));

var G__11939 = (i__7215__auto___11938 + (1));
i__7215__auto___11938 = G__11939;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq11935){
var G__11936 = cljs.core.first.call(null,seq11935);
var seq11935__$1 = cljs.core.next.call(null,seq11935);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__11936,seq11935__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11942 = arguments.length;
var i__7215__auto___11943 = (0);
while(true){
if((i__7215__auto___11943 < len__7214__auto___11942)){
args__7221__auto__.push((arguments[i__7215__auto___11943]));

var G__11944 = (i__7215__auto___11943 + (1));
i__7215__auto___11943 = G__11944;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq11940){
var G__11941 = cljs.core.first.call(null,seq11940);
var seq11940__$1 = cljs.core.next.call(null,seq11940);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__11941,seq11940__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__7221__auto__ = [];
var len__7214__auto___11947 = arguments.length;
var i__7215__auto___11948 = (0);
while(true){
if((i__7215__auto___11948 < len__7214__auto___11947)){
args__7221__auto__.push((arguments[i__7215__auto___11948]));

var G__11949 = (i__7215__auto___11948 + (1));
i__7215__auto___11948 = G__11949;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__11506__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__11506__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__11506__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq11945){
var G__11946 = cljs.core.first.call(null,seq11945);
var seq11945__$1 = cljs.core.next.call(null,seq11945);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__11946,seq11945__$1);
});

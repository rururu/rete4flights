// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11239,handler){
var map__11240 = p__11239;
var map__11240__$1 = ((((!((map__11240 == null)))?((((map__11240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11240):map__11240);
var uri = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11240__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11240,map__11240__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11238_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11238_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__11240,map__11240__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___11248 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___11248)){
var response_type_11249 = temp__4657__auto___11248;
this$__$1.responseType = cljs.core.name.call(null,response_type_11249);
} else {
}

var seq__11242_11250 = cljs.core.seq.call(null,headers);
var chunk__11243_11251 = null;
var count__11244_11252 = (0);
var i__11245_11253 = (0);
while(true){
if((i__11245_11253 < count__11244_11252)){
var vec__11246_11254 = cljs.core._nth.call(null,chunk__11243_11251,i__11245_11253);
var k_11255 = cljs.core.nth.call(null,vec__11246_11254,(0),null);
var v_11256 = cljs.core.nth.call(null,vec__11246_11254,(1),null);
this$__$1.setRequestHeader(k_11255,v_11256);

var G__11257 = seq__11242_11250;
var G__11258 = chunk__11243_11251;
var G__11259 = count__11244_11252;
var G__11260 = (i__11245_11253 + (1));
seq__11242_11250 = G__11257;
chunk__11243_11251 = G__11258;
count__11244_11252 = G__11259;
i__11245_11253 = G__11260;
continue;
} else {
var temp__4657__auto___11261 = cljs.core.seq.call(null,seq__11242_11250);
if(temp__4657__auto___11261){
var seq__11242_11262__$1 = temp__4657__auto___11261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11242_11262__$1)){
var c__6959__auto___11263 = cljs.core.chunk_first.call(null,seq__11242_11262__$1);
var G__11264 = cljs.core.chunk_rest.call(null,seq__11242_11262__$1);
var G__11265 = c__6959__auto___11263;
var G__11266 = cljs.core.count.call(null,c__6959__auto___11263);
var G__11267 = (0);
seq__11242_11250 = G__11264;
chunk__11243_11251 = G__11265;
count__11244_11252 = G__11266;
i__11245_11253 = G__11267;
continue;
} else {
var vec__11247_11268 = cljs.core.first.call(null,seq__11242_11262__$1);
var k_11269 = cljs.core.nth.call(null,vec__11247_11268,(0),null);
var v_11270 = cljs.core.nth.call(null,vec__11247_11268,(1),null);
this$__$1.setRequestHeader(k_11269,v_11270);

var G__11271 = cljs.core.next.call(null,seq__11242_11262__$1);
var G__11272 = null;
var G__11273 = (0);
var G__11274 = (0);
seq__11242_11250 = G__11271;
chunk__11243_11251 = G__11272;
count__11244_11252 = G__11273;
i__11245_11253 = G__11274;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6156__auto__ = body;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

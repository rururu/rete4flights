// Compiled by ClojureScript 1.9.225 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__8741,handler){
var map__8742 = p__8741;
var map__8742__$1 = ((((!((map__8742 == null)))?((((map__8742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8742):map__8742);
var uri = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__8742__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__8742,map__8742__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__8740_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__8740_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__8742,map__8742__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___8754 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___8754)){
var response_type_8755 = temp__4657__auto___8754;
this$__$1.responseType = cljs.core.name.call(null,response_type_8755);
} else {
}

var seq__8744_8756 = cljs.core.seq.call(null,headers);
var chunk__8745_8757 = null;
var count__8746_8758 = (0);
var i__8747_8759 = (0);
while(true){
if((i__8747_8759 < count__8746_8758)){
var vec__8748_8760 = cljs.core._nth.call(null,chunk__8745_8757,i__8747_8759);
var k_8761 = cljs.core.nth.call(null,vec__8748_8760,(0),null);
var v_8762 = cljs.core.nth.call(null,vec__8748_8760,(1),null);
this$__$1.setRequestHeader(k_8761,v_8762);

var G__8763 = seq__8744_8756;
var G__8764 = chunk__8745_8757;
var G__8765 = count__8746_8758;
var G__8766 = (i__8747_8759 + (1));
seq__8744_8756 = G__8763;
chunk__8745_8757 = G__8764;
count__8746_8758 = G__8765;
i__8747_8759 = G__8766;
continue;
} else {
var temp__4657__auto___8767 = cljs.core.seq.call(null,seq__8744_8756);
if(temp__4657__auto___8767){
var seq__8744_8768__$1 = temp__4657__auto___8767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8744_8768__$1)){
var c__7223__auto___8769 = cljs.core.chunk_first.call(null,seq__8744_8768__$1);
var G__8770 = cljs.core.chunk_rest.call(null,seq__8744_8768__$1);
var G__8771 = c__7223__auto___8769;
var G__8772 = cljs.core.count.call(null,c__7223__auto___8769);
var G__8773 = (0);
seq__8744_8756 = G__8770;
chunk__8745_8757 = G__8771;
count__8746_8758 = G__8772;
i__8747_8759 = G__8773;
continue;
} else {
var vec__8751_8774 = cljs.core.first.call(null,seq__8744_8768__$1);
var k_8775 = cljs.core.nth.call(null,vec__8751_8774,(0),null);
var v_8776 = cljs.core.nth.call(null,vec__8751_8774,(1),null);
this$__$1.setRequestHeader(k_8775,v_8776);

var G__8777 = cljs.core.next.call(null,seq__8744_8768__$1);
var G__8778 = null;
var G__8779 = (0);
var G__8780 = (0);
seq__8744_8756 = G__8777;
chunk__8745_8757 = G__8778;
count__8746_8758 = G__8779;
i__8747_8759 = G__8780;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6412__auto__ = body;
if(cljs.core.truth_(or__6412__auto__)){
return or__6412__auto__;
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

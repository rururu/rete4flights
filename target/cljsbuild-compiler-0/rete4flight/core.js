// Compiled by ClojureScript 1.7.228 {}
goog.provide('rete4flight.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('ajax.core');
cljs.core.enable_console_print_BANG_.call(null);
rete4flight.core.pid180 = (Math.PI / (180));
rete4flight.core.nmrad = (Math.PI / (10800));
rete4flight.core.chart = cljs.core.atom.call(null,null);
rete4flight.core.clock = cljs.core.atom.call(null,0.0);
rete4flight.core.mapobs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.links = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.trails = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.CLK_STP = (100);
rete4flight.core.CLS_HRS = (rete4flight.core.CLK_STP / (3600000));
rete4flight.core.DLT_EVT = (1000);
rete4flight.core.DLT_MOV = (200);
rete4flight.core.DLT_LKS = (300);
rete4flight.core.URL_EVT = "http://localhost:3000/events/";
rete4flight.core.URL_WVI = "http://localhost:3000/watch-visible/";
rete4flight.core.URL_FLS = "http://localhost:3000/flight-states/";
rete4flight.core.URL_INT = "http://localhost:3000/intersect/";
rete4flight.core.URL_INF = "http://localhost:3000/info/";
rete4flight.core.URL_TRL = "http://localhost:3000/trail/";
rete4flight.core.URL_FLW = "http://localhost:3000/follow/";
rete4flight.core.URL_SFW = "http://localhost:3000/stopfollow/";
rete4flight.core.URL_OSM = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
rete4flight.core.URL_MQO = "http://otile1.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png";
rete4flight.core.URL_ICO = new cljs.core.PersistentArrayMap(null, 5, ["INTERSECT","http://localhost:3000/img/redpln32.png","DESCEND","http://localhost:3000/img/greenpln32.png","CLIMB","http://localhost:3000/img/bluepln32.png","LEVEL","http://localhost:3000/img/purplepln32.png","GROUND","http://localhost:3000/img/greypln32.png"], null);
rete4flight.core.by_id = (function rete4flight$core$by_id(id){
return document.getElementById(id);
});
rete4flight.core.get_html = (function rete4flight$core$get_html(id){
return rete4flight.core.by_id.call(null,id).innerHTML;
});
rete4flight.core.set_html_BANG_ = (function rete4flight$core$set_html_BANG_(id,msg){
return rete4flight.core.by_id.call(null,id).innerHTML = msg;
});
/**
 * Formats a string using goog.string.format.
 */
rete4flight.core.format = (function rete4flight$core$format(var_args){
var args__7221__auto__ = [];
var len__7214__auto___12266 = arguments.length;
var i__7215__auto___12267 = (0);
while(true){
if((i__7215__auto___12267 < len__7214__auto___12266)){
args__7221__auto__.push((arguments[i__7215__auto___12267]));

var G__12268 = (i__7215__auto___12267 + (1));
i__7215__auto___12267 = G__12268;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((1) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((1)),(0))):null);
return rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7222__auto__);
});

rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

rete4flight.core.format.cljs$lang$maxFixedArity = (1);

rete4flight.core.format.cljs$lang$applyTo = (function (seq12264){
var G__12265 = cljs.core.first.call(null,seq12264);
var seq12264__$1 = cljs.core.next.call(null,seq12264);
return rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic(G__12265,seq12264__$1);
});
rete4flight.core.mouse_move = (function rete4flight$core$mouse_move(lat,lng){
return rete4flight.core.set_html_BANG_.call(null,"mousepos",[cljs.core.str("lat "),cljs.core.str(rete4flight.core.format.call(null,"%.4f",lat)),cljs.core.str(" lon "),cljs.core.str(rete4flight.core.format.call(null,"%.4f",lng))].join(''));
});
rete4flight.core.read_transit = (function rete4flight$core$read_transit(x){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
rete4flight.core.write_transit = (function rete4flight$core$write_transit(x){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),x);
});
rete4flight.core.clock_step = (function rete4flight$core$clock_step(){
return cljs.core.swap_BANG_.call(null,rete4flight.core.clock,cljs.core._PLUS_,rete4flight.core.CLS_HRS);
});
rete4flight.core.repeater = (function rete4flight$core$repeater(task,timo){

var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__){
return (function (state_12312){
var state_val_12313 = (state_12312[(1)]);
if((state_val_12313 === (1))){
var state_12312__$1 = state_12312;
var statearr_12314_12329 = state_12312__$1;
(statearr_12314_12329[(2)] = null);

(statearr_12314_12329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (2))){
var state_12312__$1 = state_12312;
var statearr_12315_12330 = state_12312__$1;
(statearr_12315_12330[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (3))){
var inst_12310 = (state_12312[(2)]);
var state_12312__$1 = state_12312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12312__$1,inst_12310);
} else {
if((state_val_12313 === (4))){
var inst_12301 = task.call(null);
var inst_12302 = cljs.core.async.timeout.call(null,timo);
var state_12312__$1 = (function (){var statearr_12317 = state_12312;
(statearr_12317[(7)] = inst_12301);

return statearr_12317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12312__$1,(7),inst_12302);
} else {
if((state_val_12313 === (5))){
var state_12312__$1 = state_12312;
var statearr_12318_12331 = state_12312__$1;
(statearr_12318_12331[(2)] = null);

(statearr_12318_12331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (6))){
var inst_12308 = (state_12312[(2)]);
var state_12312__$1 = state_12312;
var statearr_12319_12332 = state_12312__$1;
(statearr_12319_12332[(2)] = inst_12308);

(statearr_12319_12332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12313 === (7))){
var inst_12304 = (state_12312[(2)]);
var state_12312__$1 = (function (){var statearr_12320 = state_12312;
(statearr_12320[(8)] = inst_12304);

return statearr_12320;
})();
var statearr_12321_12333 = state_12312__$1;
(statearr_12321_12333[(2)] = null);

(statearr_12321_12333[(1)] = (2));


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
});})(c__9993__auto__))
;
return ((function (switch__9928__auto__,c__9993__auto__){
return (function() {
var rete4flight$core$repeater_$_state_machine__9929__auto__ = null;
var rete4flight$core$repeater_$_state_machine__9929__auto____0 = (function (){
var statearr_12325 = [null,null,null,null,null,null,null,null,null];
(statearr_12325[(0)] = rete4flight$core$repeater_$_state_machine__9929__auto__);

(statearr_12325[(1)] = (1));

return statearr_12325;
});
var rete4flight$core$repeater_$_state_machine__9929__auto____1 = (function (state_12312){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12326){if((e12326 instanceof Object)){
var ex__9932__auto__ = e12326;
var statearr_12327_12334 = state_12312;
(statearr_12327_12334[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12335 = state_12312;
state_12312 = G__12335;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$repeater_$_state_machine__9929__auto__ = function(state_12312){
switch(arguments.length){
case 0:
return rete4flight$core$repeater_$_state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$repeater_$_state_machine__9929__auto____1.call(this,state_12312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$repeater_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$repeater_$_state_machine__9929__auto____0;
rete4flight$core$repeater_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$repeater_$_state_machine__9929__auto____1;
return rete4flight$core$repeater_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__))
})();
var state__9995__auto__ = (function (){var statearr_12328 = f__9994__auto__.call(null);
(statearr_12328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__))
);

return c__9993__auto__;
});
rete4flight.core.create_marker = (function rete4flight$core$create_marker(lat,lon,sta){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon({"iconUrl": rete4flight.core.URL_ICO.call(null,sta), "iconSize": [(32),(32)]});
var opt = {"icon": ico, "draggable": true};
var mk = L.rotatedMarker(pos,opt);
return mk;
});
rete4flight.core.spherical_between = (function rete4flight$core$spherical_between(phi1,lambda0,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi2,lam2], null);
});
rete4flight.core.move = (function rete4flight$core$move(id){
var temp__4655__auto__ = cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var mob = temp__4655__auto__;
var rdh = mob.call(null,new cljs.core.Keyword(null,"anc-rdh","anc-rdh",-795860055));
if((rdh > (0))){
var cur = cljs.core.deref.call(null,rete4flight.core.clock);
var dir = mob.call(null,new cljs.core.Keyword(null,"anc-dir","anc-dir",-977205314));
var phi = mob.call(null,new cljs.core.Keyword(null,"anc-phi","anc-phi",-1798530216));
var lam = mob.call(null,new cljs.core.Keyword(null,"anc-lam","anc-lam",1982230128));
var tim = (cur - mob.call(null,new cljs.core.Keyword(null,"anc-clk","anc-clk",-2031582930)));
var way = (rdh * tim);
var vec__12337 = rete4flight.core.spherical_between.call(null,phi,lam,way,dir);
var phi2 = cljs.core.nth.call(null,vec__12337,(0),null);
var lam2 = cljs.core.nth.call(null,vec__12337,(1),null);
var lat = (phi2 / rete4flight.core.pid180);
var lon = (lam2 / rete4flight.core.pid180);
var pos = (new L.LatLng(lat,lon));
var mrk = mob.call(null,new cljs.core.Keyword(null,"marker","marker",865118313));
mrk.setLatLng(pos);

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-phi","anc-phi",-1798530216)], null),phi2);

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-lam","anc-lam",1982230128)], null),lam2);

return cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-clk","anc-clk",-2031582930)], null),cur);
} else {
return null;
}
} else {
return null;
}
});
rete4flight.core.set_anchor = (function rete4flight$core$set_anchor(id,lat,lon,crs,spd){
cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-phi","anc-phi",-1798530216)], null),(lat * rete4flight.core.pid180));

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-lam","anc-lam",1982230128)], null),(lon * rete4flight.core.pid180));

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-dir","anc-dir",-977205314)], null),(crs * rete4flight.core.pid180));

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-rdh","anc-rdh",-795860055)], null),(spd * rete4flight.core.nmrad));

return cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-clk","anc-clk",-2031582930)], null),cljs.core.deref.call(null,rete4flight.core.clock));
});
rete4flight.core.mapobPopup = (function rete4flight$core$mapobPopup(id,callsign,alt,lat,lon,crs,spd,sta){
return [cljs.core.str("<h3>"),cljs.core.str(callsign),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>id</td><td>"),cljs.core.str(id),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>altitude</td><td>"),cljs.core.str(alt),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>latitude</td><td>"),cljs.core.str(lat),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>longitude</td><td>"),cljs.core.str(lon),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>course</td><td>"),cljs.core.str(crs),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>speed</td><td>"),cljs.core.str(spd),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>state</td><td>"),cljs.core.str(sta),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:green' value='Inform'\n                 onclick='rete4flight.core.info(\""),cljs.core.str(id),cljs.core.str("\")' ></td>\n            <td><input type='button' style='color:purple' value='Trail'\n                 onclick='rete4flight.core.trail(\""),cljs.core.str(id),cljs.core.str("\")' ></td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:blue' value='Follow'\n                 onclick='rete4flight.core.follow(\""),cljs.core.str(id),cljs.core.str("\")' ></td>\n            <td><input type='button' style='color:red' value='Stop'\n                 onclick='rete4flight.core.stopfollow(\""),cljs.core.str(id),cljs.core.str("\")' ></td></tr>"),cljs.core.str("</table>")].join('');
});
rete4flight.core.delete_mapob = (function rete4flight$core$delete_mapob(id){
var temp__4657__auto__ = cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var mob = temp__4657__auto__;
var temp__4655__auto___12338 = mob.call(null,new cljs.core.Keyword(null,"mover","mover",935114769));
if(cljs.core.truth_(temp__4655__auto___12338)){
var mvr_12339 = temp__4655__auto___12338;
cljs.core.async.close_BANG_.call(null,mvr_12339);
} else {
}

cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mob.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)));

return cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.dissoc,id);
} else {
return null;
}
});
rete4flight.core.create_mapob = (function rete4flight$core$create_mapob(id,callsign,lat,lon,crs,spd,alt,sta){
if(cljs.core.truth_(cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,id))){
rete4flight.core.delete_mapob.call(null,id);
} else {
}

var mrk = rete4flight.core.create_marker.call(null,lat,lon,sta);
cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"marker","marker",865118313)], null),mrk);

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"radhrs","radhrs",-1542336081)], null),(spd * rete4flight.core.nmrad));

cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"altitude","altitude",463588637)], null),alt);

mrk.addTo(cljs.core.deref.call(null,rete4flight.core.chart));

mrk.options.angle = crs;

mrk.bindPopup(rete4flight.core.mapobPopup.call(null,id,callsign,alt,lat,lon,crs,spd,sta));

rete4flight.core.set_anchor.call(null,id,lat,lon,crs,spd);

return cljs.core.swap_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"mover","mover",935114769)], null),rete4flight.core.repeater.call(null,((function (mrk){
return (function (){
return rete4flight.core.move.call(null,id);
});})(mrk))
,rete4flight.core.DLT_MOV));
});
rete4flight.core.clear_mapobs = (function rete4flight$core$clear_mapobs(){
var seq__12344 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs)));
var chunk__12345 = null;
var count__12346 = (0);
var i__12347 = (0);
while(true){
if((i__12347 < count__12346)){
var id = cljs.core._nth.call(null,chunk__12345,i__12347);
rete4flight.core.delete_mapob.call(null,id);

var G__12348 = seq__12344;
var G__12349 = chunk__12345;
var G__12350 = count__12346;
var G__12351 = (i__12347 + (1));
seq__12344 = G__12348;
chunk__12345 = G__12349;
count__12346 = G__12350;
i__12347 = G__12351;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12344);
if(temp__4657__auto__){
var seq__12344__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12344__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12344__$1);
var G__12352 = cljs.core.chunk_rest.call(null,seq__12344__$1);
var G__12353 = c__6959__auto__;
var G__12354 = cljs.core.count.call(null,c__6959__auto__);
var G__12355 = (0);
seq__12344 = G__12352;
chunk__12345 = G__12353;
count__12346 = G__12354;
i__12347 = G__12355;
continue;
} else {
var id = cljs.core.first.call(null,seq__12344__$1);
rete4flight.core.delete_mapob.call(null,id);

var G__12356 = cljs.core.next.call(null,seq__12344__$1);
var G__12357 = null;
var G__12358 = (0);
var G__12359 = (0);
seq__12344 = G__12356;
chunk__12345 = G__12357;
count__12346 = G__12358;
i__12347 = G__12359;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.set_map_view = (function rete4flight$core$set_map_view(lat,lon){
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,rete4flight.core.chart).getZoom();
cljs.core.deref.call(null,rete4flight.core.chart).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return rete4flight.core.watch_visible.call(null);
});
rete4flight.core.add_trail = (function rete4flight$core$add_trail(id,lla,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var llg = cljs.core.map.call(null,((function (ops){
return (function (p1__12360_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__12360_SHARP_),cljs.core.second.call(null,p1__12360_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),lla));
var lle = cljs.core.clj__GT_js.call(null,llg);
var trl = L.polyline(lle,ops);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(trl);

cljs.core.swap_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"id","id",-1388402092)], null),id);

cljs.core.swap_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"trail","trail",-272340561)], null),trl);

cljs.core.swap_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"options","options",99638489)], null),options);

if((time > (0))){
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__,ops,llg,lle,trl){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__,ops,llg,lle,trl){
return (function (state_12385){
var state_val_12386 = (state_12385[(1)]);
if((state_val_12386 === (1))){
var inst_12378 = cljs.core.async.timeout.call(null,time);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12385__$1,(2),inst_12378);
} else {
if((state_val_12386 === (2))){
var inst_12380 = (state_12385[(2)]);
var inst_12381 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_12382 = inst_12381.removeLayer(trl);
var inst_12383 = cljs.core.swap_BANG_.call(null,rete4flight.core.trails,cljs.core.dissoc,id);
var state_12385__$1 = (function (){var statearr_12387 = state_12385;
(statearr_12387[(7)] = inst_12382);

(statearr_12387[(8)] = inst_12380);

return statearr_12387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12385__$1,inst_12383);
} else {
return null;
}
}
});})(c__9993__auto__,ops,llg,lle,trl))
;
return ((function (switch__9928__auto__,c__9993__auto__,ops,llg,lle,trl){
return (function() {
var rete4flight$core$add_trail_$_state_machine__9929__auto__ = null;
var rete4flight$core$add_trail_$_state_machine__9929__auto____0 = (function (){
var statearr_12391 = [null,null,null,null,null,null,null,null,null];
(statearr_12391[(0)] = rete4flight$core$add_trail_$_state_machine__9929__auto__);

(statearr_12391[(1)] = (1));

return statearr_12391;
});
var rete4flight$core$add_trail_$_state_machine__9929__auto____1 = (function (state_12385){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12392){if((e12392 instanceof Object)){
var ex__9932__auto__ = e12392;
var statearr_12393_12395 = state_12385;
(statearr_12393_12395[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12396 = state_12385;
state_12385 = G__12396;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9929__auto__ = function(state_12385){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9929__auto____1.call(this,state_12385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9929__auto____0;
rete4flight$core$add_trail_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9929__auto____1;
return rete4flight$core$add_trail_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,ops,llg,lle,trl))
})();
var state__9995__auto__ = (function (){var statearr_12394 = f__9994__auto__.call(null);
(statearr_12394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__,ops,llg,lle,trl))
);

return c__9993__auto__;
} else {
return null;
}
});
rete4flight.core.collect_llga = (function rete4flight$core$collect_llga(ids){
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__12397_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__12397_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__12398_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__12398_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__12399_SHARP_){
return p1__12399_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__12400,ops){
var vec__12402 = p__12400;
var id1 = cljs.core.nth.call(null,vec__12402,(0),null);
var id2 = cljs.core.nth.call(null,vec__12402,(1),null);
var alt1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id1,new cljs.core.Keyword(null,"altitude","altitude",463588637)], null));
var alt2 = cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id2,new cljs.core.Keyword(null,"altitude","altitude",463588637)], null));
var adif = (alt1 - alt2);
var titl = cljs.core.get.call(null,ops,new cljs.core.Keyword(null,"title","title",636505583));
var dmin = cljs.core.get.call(null,ops,new cljs.core.Keyword(null,"dmin","dmin",-2049903789));
var tmin = cljs.core.get.call(null,ops,new cljs.core.Keyword(null,"tmin","tmin",-39508962));
return [cljs.core.str("<h3>"),cljs.core.str(titl),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>Dmin</td><td>"),cljs.core.str(((typeof dmin === 'number')?(((1852) * dmin) | (0)):null)),cljs.core.str(" m</td></tr>"),cljs.core.str("<tr><td>Tmin</td><td>"),cljs.core.str(((typeof tmin === 'number')?(((60) * tmin) | (0)):null)),cljs.core.str(" min</td></tr>"),cljs.core.str("<tr><td>Alt-diff</td><td>"),cljs.core.str(adif),cljs.core.str(" ft</td></tr>"),cljs.core.str("</table>")].join('');
});
rete4flight.core.add_link = (function rete4flight$core$add_link(ids,options){
var ops = cljs.core.clj__GT_js.call(null,options);
var tmin = cljs.core.get.call(null,options,new cljs.core.Keyword(null,"tmin","tmin",-39508962));
var del = ((typeof tmin === 'number')?(((3600000) * tmin) | (0)):(30000));
var llg = rete4flight.core.collect_llga.call(null,ids);
var lnk = L.polyline(llg,ops);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(lnk);

lnk.bindPopup(rete4flight.core.linkPopup.call(null,ids,options));

cljs.core.swap_BANG_.call(null,rete4flight.core.links,cljs.core.assoc,ids,lnk);

if((del > (0))){
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__,ops,tmin,del,llg,lnk){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__,ops,tmin,del,llg,lnk){
return (function (state_12427){
var state_val_12428 = (state_12427[(1)]);
if((state_val_12428 === (1))){
var inst_12420 = cljs.core.async.timeout.call(null,del);
var state_12427__$1 = state_12427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12427__$1,(2),inst_12420);
} else {
if((state_val_12428 === (2))){
var inst_12422 = (state_12427[(2)]);
var inst_12423 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_12424 = inst_12423.removeLayer(lnk);
var inst_12425 = cljs.core.swap_BANG_.call(null,rete4flight.core.links,cljs.core.dissoc,ids);
var state_12427__$1 = (function (){var statearr_12429 = state_12427;
(statearr_12429[(7)] = inst_12424);

(statearr_12429[(8)] = inst_12422);

return statearr_12429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12427__$1,inst_12425);
} else {
return null;
}
}
});})(c__9993__auto__,ops,tmin,del,llg,lnk))
;
return ((function (switch__9928__auto__,c__9993__auto__,ops,tmin,del,llg,lnk){
return (function() {
var rete4flight$core$add_link_$_state_machine__9929__auto__ = null;
var rete4flight$core$add_link_$_state_machine__9929__auto____0 = (function (){
var statearr_12433 = [null,null,null,null,null,null,null,null,null];
(statearr_12433[(0)] = rete4flight$core$add_link_$_state_machine__9929__auto__);

(statearr_12433[(1)] = (1));

return statearr_12433;
});
var rete4flight$core$add_link_$_state_machine__9929__auto____1 = (function (state_12427){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12434){if((e12434 instanceof Object)){
var ex__9932__auto__ = e12434;
var statearr_12435_12437 = state_12427;
(statearr_12435_12437[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12438 = state_12427;
state_12427 = G__12438;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9929__auto__ = function(state_12427){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9929__auto____1.call(this,state_12427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9929__auto____0;
rete4flight$core$add_link_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9929__auto____1;
return rete4flight$core$add_link_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,ops,tmin,del,llg,lnk))
})();
var state__9995__auto__ = (function (){var statearr_12436 = f__9994__auto__.call(null);
(statearr_12436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__,ops,tmin,del,llg,lnk))
);

return c__9993__auto__;
} else {
return null;
}
});
rete4flight.core.delete_link = (function rete4flight$core$delete_link(ids){
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,rete4flight.core.links),ids);
if(cljs.core.truth_(temp__4657__auto__)){
var lnk = temp__4657__auto__;
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(lnk);

return cljs.core.swap_BANG_.call(null,rete4flight.core.links,cljs.core.dissoc,ids);
} else {
return null;
}
});
rete4flight.core.shift_links = (function rete4flight$core$shift_links(){
var seq__12445 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__12446 = null;
var count__12447 = (0);
var i__12448 = (0);
while(true){
if((i__12448 < count__12447)){
var vec__12449 = cljs.core._nth.call(null,chunk__12446,i__12448);
var ids = cljs.core.nth.call(null,vec__12449,(0),null);
var lnk = cljs.core.nth.call(null,vec__12449,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__12451 = seq__12445;
var G__12452 = chunk__12446;
var G__12453 = count__12447;
var G__12454 = (i__12448 + (1));
seq__12445 = G__12451;
chunk__12446 = G__12452;
count__12447 = G__12453;
i__12448 = G__12454;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12445);
if(temp__4657__auto__){
var seq__12445__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12445__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12445__$1);
var G__12455 = cljs.core.chunk_rest.call(null,seq__12445__$1);
var G__12456 = c__6959__auto__;
var G__12457 = cljs.core.count.call(null,c__6959__auto__);
var G__12458 = (0);
seq__12445 = G__12455;
chunk__12446 = G__12456;
count__12447 = G__12457;
i__12448 = G__12458;
continue;
} else {
var vec__12450 = cljs.core.first.call(null,seq__12445__$1);
var ids = cljs.core.nth.call(null,vec__12450,(0),null);
var lnk = cljs.core.nth.call(null,vec__12450,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__12459 = cljs.core.next.call(null,seq__12445__$1);
var G__12460 = null;
var G__12461 = (0);
var G__12462 = (0);
seq__12445 = G__12459;
chunk__12446 = G__12460;
count__12447 = G__12461;
i__12448 = G__12462;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.clear_links = (function rete4flight$core$clear_links(){
var seq__12467 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__12468 = null;
var count__12469 = (0);
var i__12470 = (0);
while(true){
if((i__12470 < count__12469)){
var ids = cljs.core._nth.call(null,chunk__12468,i__12470);
rete4flight.core.delete_link.call(null,ids);

var G__12471 = seq__12467;
var G__12472 = chunk__12468;
var G__12473 = count__12469;
var G__12474 = (i__12470 + (1));
seq__12467 = G__12471;
chunk__12468 = G__12472;
count__12469 = G__12473;
i__12470 = G__12474;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12467);
if(temp__4657__auto__){
var seq__12467__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12467__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12467__$1);
var G__12475 = cljs.core.chunk_rest.call(null,seq__12467__$1);
var G__12476 = c__6959__auto__;
var G__12477 = cljs.core.count.call(null,c__6959__auto__);
var G__12478 = (0);
seq__12467 = G__12475;
chunk__12468 = G__12476;
count__12469 = G__12477;
i__12470 = G__12478;
continue;
} else {
var ids = cljs.core.first.call(null,seq__12467__$1);
rete4flight.core.delete_link.call(null,ids);

var G__12479 = cljs.core.next.call(null,seq__12467__$1);
var G__12480 = null;
var G__12481 = (0);
var G__12482 = (0);
seq__12467 = G__12479;
chunk__12468 = G__12480;
count__12469 = G__12481;
i__12470 = G__12482;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.get_pos = (function rete4flight$core$get_pos(id){
var temp__4655__auto__ = cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,id);
if(cljs.core.truth_(temp__4655__auto__)){
var mob = temp__4655__auto__;
var mrk = mob.call(null,new cljs.core.Keyword(null,"marker","marker",865118313));
var pos = mrk.getLatLng();
var lat = pos.lat;
var lon = pos.lng;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon], null);
} else {
return null;
}
});
rete4flight.core.get_map_center = (function rete4flight$core$get_map_center(){
var cen = cljs.core.deref.call(null,rete4flight.core.chart).getCenter();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cen.lat,cen.lng], null);
});
rete4flight.core.add_popup = (function rete4flight$core$add_popup(var_args){
var args12483 = [];
var len__7214__auto___12503 = arguments.length;
var i__7215__auto___12504 = (0);
while(true){
if((i__7215__auto___12504 < len__7214__auto___12503)){
args12483.push((arguments[i__7215__auto___12504]));

var G__12505 = (i__7215__auto___12504 + (1));
i__7215__auto___12504 = G__12505;
continue;
} else {
}
break;
}

var G__12485 = args12483.length;
switch (G__12485) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12483.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__12486 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__12486,(0),null);
var lon = cljs.core.nth.call(null,vec__12486,(1),null);
return rete4flight.core.add_popup.call(null,lat,lon,html,time);
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(600),new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(800)], null)).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(pop);

if((time > (0))){
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__,pop){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__,pop){
return (function (state_12493){
var state_val_12494 = (state_12493[(1)]);
if((state_val_12494 === (1))){
var inst_12487 = cljs.core.async.timeout.call(null,time);
var state_12493__$1 = state_12493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12493__$1,(2),inst_12487);
} else {
if((state_val_12494 === (2))){
var inst_12489 = (state_12493[(2)]);
var inst_12490 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_12491 = inst_12490.removeLayer(pop);
var state_12493__$1 = (function (){var statearr_12495 = state_12493;
(statearr_12495[(7)] = inst_12489);

return statearr_12495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12493__$1,inst_12491);
} else {
return null;
}
}
});})(c__9993__auto__,pop))
;
return ((function (switch__9928__auto__,c__9993__auto__,pop){
return (function() {
var rete4flight$core$state_machine__9929__auto__ = null;
var rete4flight$core$state_machine__9929__auto____0 = (function (){
var statearr_12499 = [null,null,null,null,null,null,null,null];
(statearr_12499[(0)] = rete4flight$core$state_machine__9929__auto__);

(statearr_12499[(1)] = (1));

return statearr_12499;
});
var rete4flight$core$state_machine__9929__auto____1 = (function (state_12493){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12500){if((e12500 instanceof Object)){
var ex__9932__auto__ = e12500;
var statearr_12501_12507 = state_12493;
(statearr_12501_12507[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12508 = state_12493;
state_12493 = G__12508;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$state_machine__9929__auto__ = function(state_12493){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9929__auto____1.call(this,state_12493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9929__auto____0;
rete4flight$core$state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9929__auto____1;
return rete4flight$core$state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,pop))
})();
var state__9995__auto__ = (function (){var statearr_12502 = f__9994__auto__.call(null);
(statearr_12502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__,pop))
);

return c__9993__auto__;
} else {
return null;
}
});

rete4flight.core.add_popup.cljs$lang$maxFixedArity = 4;
rete4flight.core.event_handler = (function rete4flight$core$event_handler(response){
var seq__12551 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12552 = null;
var count__12553 = (0);
var i__12554 = (0);
while(true){
if((i__12554 < count__12553)){
var map__12555 = cljs.core._nth.call(null,chunk__12552,i__12554);
var map__12555__$1 = ((((!((map__12555 == null)))?((((map__12555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12555):map__12555);
var evt = map__12555__$1;
var event = cljs.core.get.call(null,map__12555__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12557_12593 = cljs.core._EQ_;
var expr__12558_12594 = event;
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12558_12594))){
var map__12560_12595 = evt;
var map__12560_12596__$1 = ((((!((map__12560_12595 == null)))?((((map__12560_12595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12560_12595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12560_12595):map__12560_12595);
var id_12597 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12598 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12599 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12600 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12601 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12602 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12603 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12604 = cljs.core.get.call(null,map__12560_12596__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12597,callsign_12598,lat_12599,lon_12600,crs_12601,spd_12602,alt_12603,state_12604);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12558_12594))){
var map__12562_12605 = evt;
var map__12562_12606__$1 = ((((!((map__12562_12605 == null)))?((((map__12562_12605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12562_12605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12562_12605):map__12562_12605);
var id_12607 = cljs.core.get.call(null,map__12562_12606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12607);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12558_12594))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12558_12594))){
var map__12564_12608 = evt;
var map__12564_12609__$1 = ((((!((map__12564_12608 == null)))?((((map__12564_12608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12564_12608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12564_12608):map__12564_12608);
var ids_12610 = cljs.core.get.call(null,map__12564_12609__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12611 = cljs.core.get.call(null,map__12564_12609__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12610,options_12611);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12558_12594))){
var map__12566_12612 = evt;
var map__12566_12613__$1 = ((((!((map__12566_12612 == null)))?((((map__12566_12612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12566_12612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12566_12612):map__12566_12612);
var ids_12614 = cljs.core.get.call(null,map__12566_12613__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12614);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12558_12594))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12558_12594))){
var map__12568_12615 = evt;
var map__12568_12616__$1 = ((((!((map__12568_12615 == null)))?((((map__12568_12615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12568_12615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568_12615):map__12568_12615);
var id_12617 = cljs.core.get.call(null,map__12568_12616__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12618 = cljs.core.get.call(null,map__12568_12616__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12619 = cljs.core.get.call(null,map__12568_12616__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12620 = cljs.core.get.call(null,map__12568_12616__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12621 = cljs.core.get.call(null,map__12568_12616__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12617)){
rete4flight.core.add_popup.call(null,id_12617,html_12620,time_12621);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_12618;
if(cljs.core.truth_(and__6144__auto__)){
return lon_12619;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12618,lon_12619,html_12620,time_12621);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12558_12594))){
var map__12570_12622 = evt;
var map__12570_12623__$1 = ((((!((map__12570_12622 == null)))?((((map__12570_12622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12570_12622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12570_12622):map__12570_12622);
var id_12624 = cljs.core.get.call(null,map__12570_12623__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12625 = cljs.core.get.call(null,map__12570_12623__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12626 = cljs.core.get.call(null,map__12570_12623__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12627 = cljs.core.get.call(null,map__12570_12623__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12624,lla_12625,options_12626,time_12627);
} else {
if(cljs.core.truth_(pred__12557_12593.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12558_12594))){
var map__12572_12628 = evt;
var map__12572_12629__$1 = ((((!((map__12572_12628 == null)))?((((map__12572_12628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12572_12628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572_12628):map__12572_12628);
var lat_12630 = cljs.core.get.call(null,map__12572_12629__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12631 = cljs.core.get.call(null,map__12572_12629__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12630,lon_12631);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown event: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__12632 = seq__12551;
var G__12633 = chunk__12552;
var G__12634 = count__12553;
var G__12635 = (i__12554 + (1));
seq__12551 = G__12632;
chunk__12552 = G__12633;
count__12553 = G__12634;
i__12554 = G__12635;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12551);
if(temp__4657__auto__){
var seq__12551__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12551__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12551__$1);
var G__12636 = cljs.core.chunk_rest.call(null,seq__12551__$1);
var G__12637 = c__6959__auto__;
var G__12638 = cljs.core.count.call(null,c__6959__auto__);
var G__12639 = (0);
seq__12551 = G__12636;
chunk__12552 = G__12637;
count__12553 = G__12638;
i__12554 = G__12639;
continue;
} else {
var map__12574 = cljs.core.first.call(null,seq__12551__$1);
var map__12574__$1 = ((((!((map__12574 == null)))?((((map__12574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12574):map__12574);
var evt = map__12574__$1;
var event = cljs.core.get.call(null,map__12574__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12576_12640 = cljs.core._EQ_;
var expr__12577_12641 = event;
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12577_12641))){
var map__12579_12642 = evt;
var map__12579_12643__$1 = ((((!((map__12579_12642 == null)))?((((map__12579_12642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12579_12642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12579_12642):map__12579_12642);
var id_12644 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12645 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12646 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12647 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12648 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12649 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12650 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12651 = cljs.core.get.call(null,map__12579_12643__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12644,callsign_12645,lat_12646,lon_12647,crs_12648,spd_12649,alt_12650,state_12651);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12577_12641))){
var map__12581_12652 = evt;
var map__12581_12653__$1 = ((((!((map__12581_12652 == null)))?((((map__12581_12652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12581_12652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12581_12652):map__12581_12652);
var id_12654 = cljs.core.get.call(null,map__12581_12653__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12654);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12577_12641))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12577_12641))){
var map__12583_12655 = evt;
var map__12583_12656__$1 = ((((!((map__12583_12655 == null)))?((((map__12583_12655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12583_12655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12583_12655):map__12583_12655);
var ids_12657 = cljs.core.get.call(null,map__12583_12656__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12658 = cljs.core.get.call(null,map__12583_12656__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12657,options_12658);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12577_12641))){
var map__12585_12659 = evt;
var map__12585_12660__$1 = ((((!((map__12585_12659 == null)))?((((map__12585_12659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12585_12659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12585_12659):map__12585_12659);
var ids_12661 = cljs.core.get.call(null,map__12585_12660__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12661);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12577_12641))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12577_12641))){
var map__12587_12662 = evt;
var map__12587_12663__$1 = ((((!((map__12587_12662 == null)))?((((map__12587_12662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12587_12662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12587_12662):map__12587_12662);
var id_12664 = cljs.core.get.call(null,map__12587_12663__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12665 = cljs.core.get.call(null,map__12587_12663__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12666 = cljs.core.get.call(null,map__12587_12663__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12667 = cljs.core.get.call(null,map__12587_12663__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12668 = cljs.core.get.call(null,map__12587_12663__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12664)){
rete4flight.core.add_popup.call(null,id_12664,html_12667,time_12668);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_12665;
if(cljs.core.truth_(and__6144__auto__)){
return lon_12666;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12665,lon_12666,html_12667,time_12668);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12577_12641))){
var map__12589_12669 = evt;
var map__12589_12670__$1 = ((((!((map__12589_12669 == null)))?((((map__12589_12669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12589_12669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12589_12669):map__12589_12669);
var id_12671 = cljs.core.get.call(null,map__12589_12670__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12672 = cljs.core.get.call(null,map__12589_12670__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12673 = cljs.core.get.call(null,map__12589_12670__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12674 = cljs.core.get.call(null,map__12589_12670__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12671,lla_12672,options_12673,time_12674);
} else {
if(cljs.core.truth_(pred__12576_12640.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12577_12641))){
var map__12591_12675 = evt;
var map__12591_12676__$1 = ((((!((map__12591_12675 == null)))?((((map__12591_12675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12591_12675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12591_12675):map__12591_12675);
var lat_12677 = cljs.core.get.call(null,map__12591_12676__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12678 = cljs.core.get.call(null,map__12591_12676__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12677,lon_12678);
} else {
cljs.core.println.call(null,[cljs.core.str("Unknown event: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,evt], null))].join(''));
}
}
}
}
}
}
}
}
}

var G__12679 = cljs.core.next.call(null,seq__12551__$1);
var G__12680 = null;
var G__12681 = (0);
var G__12682 = (0);
seq__12551 = G__12679;
chunk__12552 = G__12680;
count__12553 = G__12681;
i__12554 = G__12682;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12683){
var map__12686 = p__12683;
var map__12686__$1 = ((((!((map__12686 == null)))?((((map__12686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12686):map__12686);
var status = cljs.core.get.call(null,map__12686__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12686__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
rete4flight.core.check_events = (function rete4flight$core$check_events(){
return ajax.core.GET.call(null,rete4flight.core.URL_EVT,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.event_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.no_handler = (function rete4flight$core$no_handler(response){
return null;
});
rete4flight.core.info = (function rete4flight$core$info(id){
var url = [cljs.core.str(rete4flight.core.URL_INF),cljs.core.str("?id="),cljs.core.str(id)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.trail = (function rete4flight$core$trail(id){
var url = [cljs.core.str(rete4flight.core.URL_TRL),cljs.core.str("?id="),cljs.core.str(id)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.follow = (function rete4flight$core$follow(id){
var url = [cljs.core.str(rete4flight.core.URL_FLW),cljs.core.str("?id="),cljs.core.str(id)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.stopfollow = (function rete4flight$core$stopfollow(id){
var url = [cljs.core.str(rete4flight.core.URL_SFW),cljs.core.str("?id="),cljs.core.str(id)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.COMMANDS = "<select onchange='javascript:rete4flight.core.commands(this.value)'>\n  \t\t\t<option value='commands'>Commands</option>\n  \t\t\t<option value='watch-visible'>Watch visible area</option>\n  \t\t\t<option value='flight-states'>State of flights</option>\n  \t\t\t<option value='intersect'>Intersections</option>\n  \t\t\t<option value='clear'>Clear</option>\n\t\t</select>";
rete4flight.core.PARAMETERS = "<input type='text' id='params' style='width:240px'>";
rete4flight.core.clear_all = (function rete4flight$core$clear_all(){
rete4flight.core.clear_links.call(null);

return rete4flight.core.clear_mapobs.call(null);
});
rete4flight.core.visible_map = (function rete4flight$core$visible_map(){
var bnd = cljs.core.deref.call(null,rete4flight.core.chart).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12689 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12689,(0),null);
var s = cljs.core.nth.call(null,vec__12689,(1),null);
var w = cljs.core.nth.call(null,vec__12689,(2),null);
var e = cljs.core.nth.call(null,vec__12689,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_WVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
rete4flight.core.clear_all.call(null);

return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.flight_states = (function rete4flight$core$flight_states(){
return ajax.core.GET.call(null,rete4flight.core.URL_FLS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.intersect = (function rete4flight$core$intersect(){
return ajax.core.GET.call(null,rete4flight.core.URL_INT,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.commands = (function rete4flight$core$commands(func){
var pred__12693_12696 = cljs.core._EQ_;
var expr__12694_12697 = func;
if(cljs.core.truth_(pred__12693_12696.call(null,"watch-visible",expr__12694_12697))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12693_12696.call(null,"flight-states",expr__12694_12697))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12693_12696.call(null,"intersect",expr__12694_12697))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12693_12696.call(null,"clear",expr__12694_12697))){
rete4flight.core.clear_all.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12694_12697)].join('')));
}
}
}
}

return rete4flight.core.set_html_BANG_.call(null,"commands",rete4flight.core.COMMANDS);
});
rete4flight.core.init = (function rete4flight$core$init(){
var m = L.map("map").setView([40.8,-74.0],(9));
var tile1 = L.tileLayer(rete4flight.core.URL_OSM,{"maxZoom": (16), "attribution": "OOGIS RL &copy;"});
var tile2 = L.tileLayer(rete4flight.core.URL_MQO,{"type": "sat", "attribution": "OOGIS RL &copy;"});
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["osm",tile1,"sat",tile2], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,base,ctrl){
return (function (e){
return rete4flight.core.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,base,ctrl))
);

cljs.core.reset_BANG_.call(null,rete4flight.core.chart,m);

rete4flight.core.set_html_BANG_.call(null,"commands",rete4flight.core.COMMANDS);

rete4flight.core.set_html_BANG_.call(null,"parameters",rete4flight.core.PARAMETERS);

rete4flight.core.repeater.call(null,((function (m,tile1,tile2,base,ctrl){
return (function (){
return rete4flight.core.check_events.call(null);
});})(m,tile1,tile2,base,ctrl))
,rete4flight.core.DLT_EVT);

rete4flight.core.repeater.call(null,((function (m,tile1,tile2,base,ctrl){
return (function (){
return rete4flight.core.shift_links.call(null);
});})(m,tile1,tile2,base,ctrl))
,rete4flight.core.DLT_LKS);

return window.setInterval(((function (m,tile1,tile2,base,ctrl){
return (function (){
return rete4flight.core.clock_step.call(null);
});})(m,tile1,tile2,base,ctrl))
,rete4flight.core.CLK_STP);
});
window.onload = rete4flight.core.init.call(null);

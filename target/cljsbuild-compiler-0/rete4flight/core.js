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
rete4flight.core.chart = cljs.core.volatile_BANG_.call(null,null);
rete4flight.core.clock = cljs.core.volatile_BANG_.call(null,0.0);
rete4flight.core.mapobs = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.links = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.trails = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.CLK_STP = (100);
rete4flight.core.CLS_HRS = (rete4flight.core.CLK_STP / (3600000));
rete4flight.core.DLT_EVT = (1000);
rete4flight.core.DLT_MOV = (200);
rete4flight.core.DLT_LKS = (300);
rete4flight.core.REM_CAL = cljs.core.volatile_BANG_.call(null,"");
rete4flight.core.URL_CAL = "http://localhost:3000/call/";
rete4flight.core.URL_EVT = "http://localhost:3000/events/";
rete4flight.core.URL_NVI = "http://localhost:3000/new-visible/";
rete4flight.core.URL_WVI = "http://localhost:3000/watch-visible/";
rete4flight.core.URL_FLS = "http://localhost:3000/flight-states/";
rete4flight.core.URL_INT = "http://localhost:3000/intersect/";
rete4flight.core.URL_INF = "http://localhost:3000/info/";
rete4flight.core.URL_TRL = "http://localhost:3000/trail/";
rete4flight.core.URL_FLW = "http://localhost:3000/follow/";
rete4flight.core.URL_SFW = "http://localhost:3000/stopfollow/";
rete4flight.core.URL_CNS = "http://localhost:3000/contries/";
rete4flight.core.URL_APS = "http://localhost:3000/airports/";
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
return cljs.core._vreset_BANG_.call(null,rete4flight.core.clock,(cljs.core._deref.call(null,rete4flight.core.clock) + rete4flight.core.CLS_HRS));
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

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-phi","anc-phi",-1798530216)], null),phi2));

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-lam","anc-lam",1982230128)], null),lam2));

return cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-clk","anc-clk",-2031582930)], null),cur));
} else {
return null;
}
} else {
return null;
}
});
rete4flight.core.set_anchor = (function rete4flight$core$set_anchor(id,lat,lon,crs,spd){
cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-phi","anc-phi",-1798530216)], null),(lat * rete4flight.core.pid180)));

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-lam","anc-lam",1982230128)], null),(lon * rete4flight.core.pid180)));

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-dir","anc-dir",-977205314)], null),(crs * rete4flight.core.pid180)));

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-rdh","anc-rdh",-795860055)], null),(spd * rete4flight.core.nmrad)));

return cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-clk","anc-clk",-2031582930)], null),cljs.core.deref.call(null,rete4flight.core.clock)));
});
rete4flight.core.mapobPopup = (function rete4flight$core$mapobPopup(id,callsign,alt,lat,lon,crs,spd,sta){
return [cljs.core.str("<h3>"),cljs.core.str(callsign),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>id</td><td>"),cljs.core.str(id),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>altitude</td><td>"),cljs.core.str(alt),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>latitude</td><td>"),cljs.core.str(lat),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>longitude</td><td>"),cljs.core.str(lon),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>course</td><td>"),cljs.core.str(crs),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>speed</td><td>"),cljs.core.str(spd),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>state</td><td>"),cljs.core.str(sta),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:green' value='Inform'\n                 onclick='rete4flight.core.info(\""),cljs.core.str(id),cljs.core.str("\")' ></td>\n            <td><input type='button' style='color:purple' value='Trail'\n                 onclick='rete4flight.core.trail(\""),cljs.core.str(id),cljs.core.str("\")' ></td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:blue' value='Follow'\n                 onclick='rete4flight.core.follow(\""),cljs.core.str(id),cljs.core.str("\")' ></td>\n            <td><input type='button' style='color:red' value='Stop'\n                 onclick='rete4flight.core.stopfollow()' ></td></tr>"),cljs.core.str("</table>")].join('');
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

return cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.dissoc.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),id));
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
cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"marker","marker",865118313)], null),mrk));

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"radhrs","radhrs",-1542336081)], null),(spd * rete4flight.core.nmrad)));

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"altitude","altitude",463588637)], null),alt));

mrk.addTo(cljs.core.deref.call(null,rete4flight.core.chart));

mrk.options.angle = crs;

mrk.bindPopup(rete4flight.core.mapobPopup.call(null,id,callsign,alt,lat,lon,crs,spd,sta));

rete4flight.core.set_anchor.call(null,id,lat,lon,crs,spd);

return cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"mover","mover",935114769)], null),rete4flight.core.repeater.call(null,((function (mrk){
return (function (){
return rete4flight.core.move.call(null,id);
});})(mrk))
,rete4flight.core.DLT_MOV)));
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

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"id","id",-1388402092)], null),id));

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"trail","trail",-272340561)], null),trl));

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"options","options",99638489)], null),options));

if((time > (0))){
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__,ops,llg,lle,trl){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__,ops,llg,lle,trl){
return (function (state_12389){
var state_val_12390 = (state_12389[(1)]);
if((state_val_12390 === (1))){
var inst_12380 = cljs.core.async.timeout.call(null,time);
var state_12389__$1 = state_12389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12389__$1,(2),inst_12380);
} else {
if((state_val_12390 === (2))){
var inst_12382 = (state_12389[(2)]);
var inst_12383 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_12384 = inst_12383.removeLayer(trl);
var inst_12385 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_12386 = cljs.core.dissoc.call(null,inst_12385,id);
var inst_12387 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_12386);
var state_12389__$1 = (function (){var statearr_12391 = state_12389;
(statearr_12391[(7)] = inst_12382);

(statearr_12391[(8)] = inst_12384);

return statearr_12391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12389__$1,inst_12387);
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
var statearr_12395 = [null,null,null,null,null,null,null,null,null];
(statearr_12395[(0)] = rete4flight$core$add_trail_$_state_machine__9929__auto__);

(statearr_12395[(1)] = (1));

return statearr_12395;
});
var rete4flight$core$add_trail_$_state_machine__9929__auto____1 = (function (state_12389){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12396){if((e12396 instanceof Object)){
var ex__9932__auto__ = e12396;
var statearr_12397_12399 = state_12389;
(statearr_12397_12399[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12400 = state_12389;
state_12389 = G__12400;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9929__auto__ = function(state_12389){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9929__auto____1.call(this,state_12389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9929__auto____0;
rete4flight$core$add_trail_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9929__auto____1;
return rete4flight$core$add_trail_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,ops,llg,lle,trl))
})();
var state__9995__auto__ = (function (){var statearr_12398 = f__9994__auto__.call(null);
(statearr_12398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12398;
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
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__12401_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__12401_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__12402_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__12402_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__12403_SHARP_){
return p1__12403_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__12404,ops){
var vec__12406 = p__12404;
var id1 = cljs.core.nth.call(null,vec__12406,(0),null);
var id2 = cljs.core.nth.call(null,vec__12406,(1),null);
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

cljs.core._vreset_BANG_.call(null,rete4flight.core.links,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.links),ids,lnk));

if((del > (0))){
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__,ops,tmin,del,llg,lnk){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__,ops,tmin,del,llg,lnk){
return (function (state_12435){
var state_val_12436 = (state_12435[(1)]);
if((state_val_12436 === (1))){
var inst_12426 = cljs.core.async.timeout.call(null,del);
var state_12435__$1 = state_12435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12435__$1,(2),inst_12426);
} else {
if((state_val_12436 === (2))){
var inst_12428 = (state_12435[(2)]);
var inst_12429 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_12430 = inst_12429.removeLayer(lnk);
var inst_12431 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_12432 = cljs.core.dissoc.call(null,inst_12431,ids);
var inst_12433 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_12432);
var state_12435__$1 = (function (){var statearr_12437 = state_12435;
(statearr_12437[(7)] = inst_12428);

(statearr_12437[(8)] = inst_12430);

return statearr_12437;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12435__$1,inst_12433);
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
var statearr_12441 = [null,null,null,null,null,null,null,null,null];
(statearr_12441[(0)] = rete4flight$core$add_link_$_state_machine__9929__auto__);

(statearr_12441[(1)] = (1));

return statearr_12441;
});
var rete4flight$core$add_link_$_state_machine__9929__auto____1 = (function (state_12435){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12442){if((e12442 instanceof Object)){
var ex__9932__auto__ = e12442;
var statearr_12443_12445 = state_12435;
(statearr_12443_12445[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12446 = state_12435;
state_12435 = G__12446;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9929__auto__ = function(state_12435){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9929__auto____1.call(this,state_12435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9929__auto____0;
rete4flight$core$add_link_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9929__auto____1;
return rete4flight$core$add_link_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,ops,tmin,del,llg,lnk))
})();
var state__9995__auto__ = (function (){var statearr_12444 = f__9994__auto__.call(null);
(statearr_12444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12444;
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

return cljs.core._vreset_BANG_.call(null,rete4flight.core.links,cljs.core.dissoc.call(null,cljs.core._deref.call(null,rete4flight.core.links),ids));
} else {
return null;
}
});
rete4flight.core.shift_links = (function rete4flight$core$shift_links(){
var seq__12453 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__12454 = null;
var count__12455 = (0);
var i__12456 = (0);
while(true){
if((i__12456 < count__12455)){
var vec__12457 = cljs.core._nth.call(null,chunk__12454,i__12456);
var ids = cljs.core.nth.call(null,vec__12457,(0),null);
var lnk = cljs.core.nth.call(null,vec__12457,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__12459 = seq__12453;
var G__12460 = chunk__12454;
var G__12461 = count__12455;
var G__12462 = (i__12456 + (1));
seq__12453 = G__12459;
chunk__12454 = G__12460;
count__12455 = G__12461;
i__12456 = G__12462;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12453);
if(temp__4657__auto__){
var seq__12453__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12453__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12453__$1);
var G__12463 = cljs.core.chunk_rest.call(null,seq__12453__$1);
var G__12464 = c__6959__auto__;
var G__12465 = cljs.core.count.call(null,c__6959__auto__);
var G__12466 = (0);
seq__12453 = G__12463;
chunk__12454 = G__12464;
count__12455 = G__12465;
i__12456 = G__12466;
continue;
} else {
var vec__12458 = cljs.core.first.call(null,seq__12453__$1);
var ids = cljs.core.nth.call(null,vec__12458,(0),null);
var lnk = cljs.core.nth.call(null,vec__12458,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__12467 = cljs.core.next.call(null,seq__12453__$1);
var G__12468 = null;
var G__12469 = (0);
var G__12470 = (0);
seq__12453 = G__12467;
chunk__12454 = G__12468;
count__12455 = G__12469;
i__12456 = G__12470;
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
var seq__12475 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__12476 = null;
var count__12477 = (0);
var i__12478 = (0);
while(true){
if((i__12478 < count__12477)){
var ids = cljs.core._nth.call(null,chunk__12476,i__12478);
rete4flight.core.delete_link.call(null,ids);

var G__12479 = seq__12475;
var G__12480 = chunk__12476;
var G__12481 = count__12477;
var G__12482 = (i__12478 + (1));
seq__12475 = G__12479;
chunk__12476 = G__12480;
count__12477 = G__12481;
i__12478 = G__12482;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12475);
if(temp__4657__auto__){
var seq__12475__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12475__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12475__$1);
var G__12483 = cljs.core.chunk_rest.call(null,seq__12475__$1);
var G__12484 = c__6959__auto__;
var G__12485 = cljs.core.count.call(null,c__6959__auto__);
var G__12486 = (0);
seq__12475 = G__12483;
chunk__12476 = G__12484;
count__12477 = G__12485;
i__12478 = G__12486;
continue;
} else {
var ids = cljs.core.first.call(null,seq__12475__$1);
rete4flight.core.delete_link.call(null,ids);

var G__12487 = cljs.core.next.call(null,seq__12475__$1);
var G__12488 = null;
var G__12489 = (0);
var G__12490 = (0);
seq__12475 = G__12487;
chunk__12476 = G__12488;
count__12477 = G__12489;
i__12478 = G__12490;
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
rete4flight.core.add_popup = (function rete4flight$core$add_popup(var_args){
var args12491 = [];
var len__7214__auto___12511 = arguments.length;
var i__7215__auto___12512 = (0);
while(true){
if((i__7215__auto___12512 < len__7214__auto___12511)){
args12491.push((arguments[i__7215__auto___12512]));

var G__12513 = (i__7215__auto___12512 + (1));
i__7215__auto___12512 = G__12513;
continue;
} else {
}
break;
}

var G__12493 = args12491.length;
switch (G__12493) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12491.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__12494 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__12494,(0),null);
var lon = cljs.core.nth.call(null,vec__12494,(1),null);
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
return (function (state_12501){
var state_val_12502 = (state_12501[(1)]);
if((state_val_12502 === (1))){
var inst_12495 = cljs.core.async.timeout.call(null,time);
var state_12501__$1 = state_12501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12501__$1,(2),inst_12495);
} else {
if((state_val_12502 === (2))){
var inst_12497 = (state_12501[(2)]);
var inst_12498 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_12499 = inst_12498.removeLayer(pop);
var state_12501__$1 = (function (){var statearr_12503 = state_12501;
(statearr_12503[(7)] = inst_12497);

return statearr_12503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12501__$1,inst_12499);
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
var statearr_12507 = [null,null,null,null,null,null,null,null];
(statearr_12507[(0)] = rete4flight$core$state_machine__9929__auto__);

(statearr_12507[(1)] = (1));

return statearr_12507;
});
var rete4flight$core$state_machine__9929__auto____1 = (function (state_12501){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12508){if((e12508 instanceof Object)){
var ex__9932__auto__ = e12508;
var statearr_12509_12515 = state_12501;
(statearr_12509_12515[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12516 = state_12501;
state_12501 = G__12516;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$state_machine__9929__auto__ = function(state_12501){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9929__auto____1.call(this,state_12501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9929__auto____0;
rete4flight$core$state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9929__auto____1;
return rete4flight$core$state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,pop))
})();
var state__9995__auto__ = (function (){var statearr_12510 = f__9994__auto__.call(null);
(statearr_12510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12510;
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
rete4flight.core.set_map_view = (function rete4flight$core$set_map_view(lat,lon){
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,rete4flight.core.chart).getZoom();
cljs.core.deref.call(null,rete4flight.core.chart).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);

return rete4flight.core.new_visible.call(null);
});
rete4flight.core.clear_dialog = (function rete4flight$core$clear_dialog(){
rete4flight.core.set_html_BANG_.call(null,"callsign","");

rete4flight.core.set_html_BANG_.call(null,"hour","");

rete4flight.core.set_html_BANG_.call(null,"minute","");

rete4flight.core.set_html_BANG_.call(null,"from-country","");

rete4flight.core.set_html_BANG_.call(null,"from-airport","");

rete4flight.core.set_html_BANG_.call(null,"to-country","");

return rete4flight.core.set_html_BANG_.call(null,"to-airport","");
});
rete4flight.core.event_handler = (function rete4flight$core$event_handler(response){
var seq__12559 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12560 = null;
var count__12561 = (0);
var i__12562 = (0);
while(true){
if((i__12562 < count__12561)){
var map__12563 = cljs.core._nth.call(null,chunk__12560,i__12562);
var map__12563__$1 = ((((!((map__12563 == null)))?((((map__12563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12563):map__12563);
var evt = map__12563__$1;
var event = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12565_12601 = cljs.core._EQ_;
var expr__12566_12602 = event;
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12566_12602))){
var map__12568_12603 = evt;
var map__12568_12604__$1 = ((((!((map__12568_12603 == null)))?((((map__12568_12603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12568_12603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568_12603):map__12568_12603);
var id_12605 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12606 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12607 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12608 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12609 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12610 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12611 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12612 = cljs.core.get.call(null,map__12568_12604__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12605,callsign_12606,lat_12607,lon_12608,crs_12609,spd_12610,alt_12611,state_12612);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12566_12602))){
var map__12570_12613 = evt;
var map__12570_12614__$1 = ((((!((map__12570_12613 == null)))?((((map__12570_12613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12570_12613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12570_12613):map__12570_12613);
var id_12615 = cljs.core.get.call(null,map__12570_12614__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12615);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12566_12602))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12566_12602))){
var map__12572_12616 = evt;
var map__12572_12617__$1 = ((((!((map__12572_12616 == null)))?((((map__12572_12616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12572_12616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572_12616):map__12572_12616);
var ids_12618 = cljs.core.get.call(null,map__12572_12617__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12619 = cljs.core.get.call(null,map__12572_12617__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12618,options_12619);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12566_12602))){
var map__12574_12620 = evt;
var map__12574_12621__$1 = ((((!((map__12574_12620 == null)))?((((map__12574_12620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12574_12620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12574_12620):map__12574_12620);
var ids_12622 = cljs.core.get.call(null,map__12574_12621__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12622);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12566_12602))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12566_12602))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12566_12602))){
var map__12576_12623 = evt;
var map__12576_12624__$1 = ((((!((map__12576_12623 == null)))?((((map__12576_12623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12576_12623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12576_12623):map__12576_12623);
var id_12625 = cljs.core.get.call(null,map__12576_12624__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12626 = cljs.core.get.call(null,map__12576_12624__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12627 = cljs.core.get.call(null,map__12576_12624__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12628 = cljs.core.get.call(null,map__12576_12624__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12629 = cljs.core.get.call(null,map__12576_12624__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12625)){
rete4flight.core.add_popup.call(null,id_12625,html_12628,time_12629);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_12626;
if(cljs.core.truth_(and__6144__auto__)){
return lon_12627;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12626,lon_12627,html_12628,time_12629);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12566_12602))){
var map__12578_12630 = evt;
var map__12578_12631__$1 = ((((!((map__12578_12630 == null)))?((((map__12578_12630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12578_12630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12578_12630):map__12578_12630);
var id_12632 = cljs.core.get.call(null,map__12578_12631__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12633 = cljs.core.get.call(null,map__12578_12631__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12634 = cljs.core.get.call(null,map__12578_12631__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12635 = cljs.core.get.call(null,map__12578_12631__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12632,lla_12633,options_12634,time_12635);
} else {
if(cljs.core.truth_(pred__12565_12601.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12566_12602))){
var map__12580_12636 = evt;
var map__12580_12637__$1 = ((((!((map__12580_12636 == null)))?((((map__12580_12636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12580_12636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12580_12636):map__12580_12636);
var lat_12638 = cljs.core.get.call(null,map__12580_12637__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12639 = cljs.core.get.call(null,map__12580_12637__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12638,lon_12639);
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
}

var G__12640 = seq__12559;
var G__12641 = chunk__12560;
var G__12642 = count__12561;
var G__12643 = (i__12562 + (1));
seq__12559 = G__12640;
chunk__12560 = G__12641;
count__12561 = G__12642;
i__12562 = G__12643;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12559);
if(temp__4657__auto__){
var seq__12559__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12559__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12559__$1);
var G__12644 = cljs.core.chunk_rest.call(null,seq__12559__$1);
var G__12645 = c__6959__auto__;
var G__12646 = cljs.core.count.call(null,c__6959__auto__);
var G__12647 = (0);
seq__12559 = G__12644;
chunk__12560 = G__12645;
count__12561 = G__12646;
i__12562 = G__12647;
continue;
} else {
var map__12582 = cljs.core.first.call(null,seq__12559__$1);
var map__12582__$1 = ((((!((map__12582 == null)))?((((map__12582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12582):map__12582);
var evt = map__12582__$1;
var event = cljs.core.get.call(null,map__12582__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12584_12648 = cljs.core._EQ_;
var expr__12585_12649 = event;
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12585_12649))){
var map__12587_12650 = evt;
var map__12587_12651__$1 = ((((!((map__12587_12650 == null)))?((((map__12587_12650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12587_12650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12587_12650):map__12587_12650);
var id_12652 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12653 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12654 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12655 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12656 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12657 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12658 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12659 = cljs.core.get.call(null,map__12587_12651__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12652,callsign_12653,lat_12654,lon_12655,crs_12656,spd_12657,alt_12658,state_12659);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12585_12649))){
var map__12589_12660 = evt;
var map__12589_12661__$1 = ((((!((map__12589_12660 == null)))?((((map__12589_12660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12589_12660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12589_12660):map__12589_12660);
var id_12662 = cljs.core.get.call(null,map__12589_12661__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12662);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12585_12649))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12585_12649))){
var map__12591_12663 = evt;
var map__12591_12664__$1 = ((((!((map__12591_12663 == null)))?((((map__12591_12663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12591_12663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12591_12663):map__12591_12663);
var ids_12665 = cljs.core.get.call(null,map__12591_12664__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12666 = cljs.core.get.call(null,map__12591_12664__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12665,options_12666);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12585_12649))){
var map__12593_12667 = evt;
var map__12593_12668__$1 = ((((!((map__12593_12667 == null)))?((((map__12593_12667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12593_12667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12593_12667):map__12593_12667);
var ids_12669 = cljs.core.get.call(null,map__12593_12668__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12669);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12585_12649))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12585_12649))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12585_12649))){
var map__12595_12670 = evt;
var map__12595_12671__$1 = ((((!((map__12595_12670 == null)))?((((map__12595_12670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12595_12670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12595_12670):map__12595_12670);
var id_12672 = cljs.core.get.call(null,map__12595_12671__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12673 = cljs.core.get.call(null,map__12595_12671__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12674 = cljs.core.get.call(null,map__12595_12671__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12675 = cljs.core.get.call(null,map__12595_12671__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12676 = cljs.core.get.call(null,map__12595_12671__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12672)){
rete4flight.core.add_popup.call(null,id_12672,html_12675,time_12676);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_12673;
if(cljs.core.truth_(and__6144__auto__)){
return lon_12674;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12673,lon_12674,html_12675,time_12676);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12585_12649))){
var map__12597_12677 = evt;
var map__12597_12678__$1 = ((((!((map__12597_12677 == null)))?((((map__12597_12677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12597_12677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12597_12677):map__12597_12677);
var id_12679 = cljs.core.get.call(null,map__12597_12678__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12680 = cljs.core.get.call(null,map__12597_12678__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12681 = cljs.core.get.call(null,map__12597_12678__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12682 = cljs.core.get.call(null,map__12597_12678__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12679,lla_12680,options_12681,time_12682);
} else {
if(cljs.core.truth_(pred__12584_12648.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12585_12649))){
var map__12599_12683 = evt;
var map__12599_12684__$1 = ((((!((map__12599_12683 == null)))?((((map__12599_12683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12599_12683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12599_12683):map__12599_12683);
var lat_12685 = cljs.core.get.call(null,map__12599_12684__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12686 = cljs.core.get.call(null,map__12599_12684__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12685,lon_12686);
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
}

var G__12687 = cljs.core.next.call(null,seq__12559__$1);
var G__12688 = null;
var G__12689 = (0);
var G__12690 = (0);
seq__12559 = G__12687;
chunk__12560 = G__12688;
count__12561 = G__12689;
i__12562 = G__12690;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12691){
var map__12694 = p__12691;
var map__12694__$1 = ((((!((map__12694 == null)))?((((map__12694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12694):map__12694);
var status = cljs.core.get.call(null,map__12694__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12694__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
rete4flight.core.stopfollow = (function rete4flight$core$stopfollow(){
return ajax.core.GET.call(null,rete4flight.core.URL_SFW,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.schedule = (function rete4flight$core$schedule(){
var inp = [cljs.core.str("<input type='text' id='callsign' style='width:100px' value='callsign'"),cljs.core.str(" onchange='javascript:rete4flight.core.selcallsgn(this.value)'>")].join('');
rete4flight.core.set_html_BANG_.call(null,"callsign",inp);

return cljs.core.vreset_BANG_.call(null,rete4flight.core.REM_CAL,"?func=schedule");
});
rete4flight.core.sel_hour = (function rete4flight$core$sel_hour(){
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_hour_$_iter__12700(s__12701){
return (new cljs.core.LazySeq(null,(function (){
var s__12701__$1 = s__12701;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12701__$1);
if(temp__4657__auto__){
var s__12701__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12701__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12701__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12703 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12702 = (0);
while(true){
if((i__12702 < size__6927__auto__)){
var hour = cljs.core._nth.call(null,c__6926__auto__,i__12702);
cljs.core.chunk_append.call(null,b__12703,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12704 = (i__12702 + (1));
i__12702 = G__12704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12703),rete4flight$core$sel_hour_$_iter__12700.call(null,cljs.core.chunk_rest.call(null,s__12701__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12703),null);
}
} else {
var hour = cljs.core.first.call(null,s__12701__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12700.call(null,cljs.core.rest.call(null,s__12701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,cljs.core.range.call(null,(24)));
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"hour",slh);
});
rete4flight.core.sel_minute = (function rete4flight$core$sel_minute(){
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_minute_$_iter__12709(s__12710){
return (new cljs.core.LazySeq(null,(function (){
var s__12710__$1 = s__12710;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12710__$1);
if(temp__4657__auto__){
var s__12710__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12710__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12710__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12712 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12711 = (0);
while(true){
if((i__12711 < size__6927__auto__)){
var min = cljs.core._nth.call(null,c__6926__auto__,i__12711);
cljs.core.chunk_append.call(null,b__12712,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12713 = (i__12711 + (1));
i__12711 = G__12713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12712),rete4flight$core$sel_minute_$_iter__12709.call(null,cljs.core.chunk_rest.call(null,s__12710__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12712),null);
}
} else {
var min = cljs.core.first.call(null,s__12710__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12709.call(null,cljs.core.rest.call(null,s__12710__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,cljs.core.range.call(null,(60)));
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"minute",slm);
});
rete4flight.core.sel_from_country = (function rete4flight$core$sel_from_country(contries){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_from_country_$_iter__12718(s__12719){
return (new cljs.core.LazySeq(null,(function (){
var s__12719__$1 = s__12719;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12719__$1);
if(temp__4657__auto__){
var s__12719__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12719__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12719__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12721 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12720 = (0);
while(true){
if((i__12720 < size__6927__auto__)){
var contry = cljs.core._nth.call(null,c__6926__auto__,i__12720);
cljs.core.chunk_append.call(null,b__12721,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12722 = (i__12720 + (1));
i__12720 = G__12722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12721),rete4flight$core$sel_from_country_$_iter__12718.call(null,cljs.core.chunk_rest.call(null,s__12719__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12721),null);
}
} else {
var contry = cljs.core.first.call(null,s__12719__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12718.call(null,cljs.core.rest.call(null,s__12719__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,contries);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"from-country",sel);
});
rete4flight.core.sel_from_airport = (function rete4flight$core$sel_from_airport(airports){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12727(s__12728){
return (new cljs.core.LazySeq(null,(function (){
var s__12728__$1 = s__12728;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12728__$1);
if(temp__4657__auto__){
var s__12728__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12728__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12728__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12730 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12729 = (0);
while(true){
if((i__12729 < size__6927__auto__)){
var airport = cljs.core._nth.call(null,c__6926__auto__,i__12729);
cljs.core.chunk_append.call(null,b__12730,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12731 = (i__12729 + (1));
i__12729 = G__12731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12730),rete4flight$core$sel_from_airport_$_iter__12727.call(null,cljs.core.chunk_rest.call(null,s__12728__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12730),null);
}
} else {
var airport = cljs.core.first.call(null,s__12728__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12727.call(null,cljs.core.rest.call(null,s__12728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,airports);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"from-airport",sel);
});
rete4flight.core.sel_to_country = (function rete4flight$core$sel_to_country(contries){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_to_country_$_iter__12736(s__12737){
return (new cljs.core.LazySeq(null,(function (){
var s__12737__$1 = s__12737;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12737__$1);
if(temp__4657__auto__){
var s__12737__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12737__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12737__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12739 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12738 = (0);
while(true){
if((i__12738 < size__6927__auto__)){
var contry = cljs.core._nth.call(null,c__6926__auto__,i__12738);
cljs.core.chunk_append.call(null,b__12739,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12740 = (i__12738 + (1));
i__12738 = G__12740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12739),rete4flight$core$sel_to_country_$_iter__12736.call(null,cljs.core.chunk_rest.call(null,s__12737__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12739),null);
}
} else {
var contry = cljs.core.first.call(null,s__12737__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12736.call(null,cljs.core.rest.call(null,s__12737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,contries);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"to-country",sel);
});
rete4flight.core.move_to = (function rete4flight$core$move_to(){
cljs.core.vreset_BANG_.call(null,rete4flight.core.REM_CAL,"?func=move-to");

rete4flight.core.sel_to_country.call(null,cljs.core.PersistentVector.EMPTY);

return ajax.core.GET.call(null,rete4flight.core.URL_CNS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return rete4flight.core.sel_to_country.call(null,rete4flight.core.read_transit.call(null,r));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.sel_to_airport = (function rete4flight$core$sel_to_airport(airports){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12745(s__12746){
return (new cljs.core.LazySeq(null,(function (){
var s__12746__$1 = s__12746;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12746__$1);
if(temp__4657__auto__){
var s__12746__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12746__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12746__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12748 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12747 = (0);
while(true){
if((i__12747 < size__6927__auto__)){
var airport = cljs.core._nth.call(null,c__6926__auto__,i__12747);
cljs.core.chunk_append.call(null,b__12748,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12749 = (i__12747 + (1));
i__12747 = G__12749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12748),rete4flight$core$sel_to_airport_$_iter__12745.call(null,cljs.core.chunk_rest.call(null,s__12746__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12748),null);
}
} else {
var airport = cljs.core.first.call(null,s__12746__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12745.call(null,cljs.core.rest.call(null,s__12746__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6928__auto__.call(null,airports);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"to-airport",sel);
});
rete4flight.core.selcallsgn = (function rete4flight$core$selcallsgn(csn){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&callsign="),cljs.core.str(csn)].join(''));

return rete4flight.core.sel_hour.call(null);
});
rete4flight.core.selhour = (function rete4flight$core$selhour(hour){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&hour="),cljs.core.str(hour)].join(''));

return rete4flight.core.sel_minute.call(null);
});
rete4flight.core.selmin = (function rete4flight$core$selmin(min){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&minute="),cljs.core.str(min)].join(''));

rete4flight.core.sel_from_country.call(null,cljs.core.PersistentVector.EMPTY);

return ajax.core.GET.call(null,rete4flight.core.URL_CNS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return rete4flight.core.sel_from_country.call(null,rete4flight.core.read_transit.call(null,r));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.selfromcnt = (function rete4flight$core$selfromcnt(country){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&from-country="),cljs.core.str(country)].join(''));

rete4flight.core.sel_from_airport.call(null,cljs.core.PersistentVector.EMPTY);

var url = [cljs.core.str(rete4flight.core.URL_APS),cljs.core.str("?contry="),cljs.core.str(country)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (url){
return (function (r){
return rete4flight.core.sel_from_airport.call(null,rete4flight.core.read_transit.call(null,r));
});})(url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.selfromapt = (function rete4flight$core$selfromapt(airport){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&from-airport="),cljs.core.str(airport)].join(''));

rete4flight.core.sel_to_country.call(null,cljs.core.PersistentVector.EMPTY);

return ajax.core.GET.call(null,rete4flight.core.URL_CNS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return rete4flight.core.sel_to_country.call(null,rete4flight.core.read_transit.call(null,r));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.seltocnt = (function rete4flight$core$seltocnt(country){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&to-country="),cljs.core.str(country)].join(''));

rete4flight.core.sel_to_airport.call(null,cljs.core.PersistentVector.EMPTY);

var url = [cljs.core.str(rete4flight.core.URL_APS),cljs.core.str("?contry="),cljs.core.str(country)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (url){
return (function (r){
return rete4flight.core.sel_to_airport.call(null,rete4flight.core.read_transit.call(null,r));
});})(url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.seltoapt = (function rete4flight$core$seltoapt(airport){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,[cljs.core.str(cljs.core._deref.call(null,rete4flight.core.REM_CAL)),cljs.core.str("&to-airport="),cljs.core.str(airport)].join(''));

return rete4flight.core.remote_call.call(null);
});
rete4flight.core.clear_all = (function rete4flight$core$clear_all(){
rete4flight.core.clear_links.call(null);

return rete4flight.core.clear_mapobs.call(null);
});
rete4flight.core.visible_map = (function rete4flight$core$visible_map(){
var bnd = cljs.core.deref.call(null,rete4flight.core.chart).getBounds();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bnd.getNorth(),bnd.getSouth(),bnd.getWest(),bnd.getEast()], null);
});
rete4flight.core.get_map_center = (function rete4flight$core$get_map_center(){
var cen = cljs.core.deref.call(null,rete4flight.core.chart).getCenter();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cen.lat,cen.lng], null);
});
rete4flight.core.new_visible = (function rete4flight$core$new_visible(){
var vec__12751 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12751,(0),null);
var s = cljs.core.nth.call(null,vec__12751,(1),null);
var w = cljs.core.nth.call(null,vec__12751,(2),null);
var e = cljs.core.nth.call(null,vec__12751,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12753 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12753,(0),null);
var s = cljs.core.nth.call(null,vec__12753,(1),null);
var w = cljs.core.nth.call(null,vec__12753,(2),null);
var e = cljs.core.nth.call(null,vec__12753,(3),null);
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
rete4flight.core.COMMANDS = "<select onchange='javascript:rete4flight.core.commands(this.value)'>\n  \t\t\t<option value='commands'>Commands</option>\n  \t\t\t<option value='watch-visible'>Watch visible area</option>\n  \t\t\t<option value='flight-states'>State of flights</option>\n  \t\t\t<option value='intersect'>Intersections</option>\n  \t\t\t<option value='move-to'>Move to Airport</option>\n  \t\t\t<option value='schedule'>Schedule Flight</option>\n  \t\t\t<option value='clear'>Clear</option>\n\t\t</select>";
rete4flight.core.commands = (function rete4flight$core$commands(func){
var pred__12757_12760 = cljs.core._EQ_;
var expr__12758_12761 = func;
if(cljs.core.truth_(pred__12757_12760.call(null,"watch-visible",expr__12758_12761))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12757_12760.call(null,"flight-states",expr__12758_12761))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12757_12760.call(null,"intersect",expr__12758_12761))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12757_12760.call(null,"clear",expr__12758_12761))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12757_12760.call(null,"move-to",expr__12758_12761))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12757_12760.call(null,"schedule",expr__12758_12761))){
rete4flight.core.schedule.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12758_12761)].join('')));
}
}
}
}
}
}

return rete4flight.core.set_html_BANG_.call(null,"commands",rete4flight.core.COMMANDS);
});
rete4flight.core.remote_call = (function rete4flight$core$remote_call(){
return ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_CAL),cljs.core.str(cljs.core.deref.call(null,rete4flight.core.REM_CAL))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
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

cljs.core.vreset_BANG_.call(null,rete4flight.core.chart,m);

rete4flight.core.set_html_BANG_.call(null,"commands",rete4flight.core.COMMANDS);

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

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
rete4flight.core.REM_CAL = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY);
rete4flight.core.MYFS_INTL = (1000);
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
rete4flight.core.URL_CAM = "http://localhost:3000/camera/";
rete4flight.core.URL_AUT = "http://localhost:3000/manual/";
rete4flight.core.URL_OSM = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
rete4flight.core.URL_GST = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
rete4flight.core.URL_GHB = "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}";
rete4flight.core.URL_GTR = "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}";
rete4flight.core.URL_GSA = "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}";
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

cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callsign,new cljs.core.Keyword(null,"laloalcs","laloalcs",1578251860)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon,alt,crs,spd], null)));

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
rete4flight.core.course = (function rete4flight$core$course(id){
return ((cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-dir","anc-dir",-977205314)], null)) / rete4flight.core.pid180) | (0));
});
rete4flight.core.set_course_BANG_ = (function rete4flight$core$set_course_BANG_(id,crs){
var crs__$1 = (((crs >= (360)))?(crs - (360)):(((crs < (0)))?(crs + (360)):crs
));
var dir = (crs__$1 * rete4flight.core.pid180);
var mrk = cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"marker","marker",865118313)], null));
cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"anc-dir","anc-dir",-977205314)], null),dir));

return mrk.options.angle = crs__$1;
});
rete4flight.core.turn = (function rete4flight$core$turn(id,on_course){

var crs = rete4flight.core.course.call(null,id);
if(cljs.core.not_EQ_.call(null,crs,on_course)){
var side = (((on_course > crs))?((((on_course - crs) < (180)))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937)):((((crs - on_course) < (180)))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)));
var c__9993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9993__auto__,side,crs){
return (function (){
var f__9994__auto__ = (function (){var switch__9928__auto__ = ((function (c__9993__auto__,side,crs){
return (function (state_12593){
var state_val_12594 = (state_12593[(1)]);
if((state_val_12594 === (7))){
var inst_12566 = (state_12593[(7)]);
var inst_12576 = (inst_12566 - (4));
var inst_12577 = rete4flight.core.set_course_BANG_.call(null,id,inst_12576);
var state_12593__$1 = state_12593;
var statearr_12595_12615 = state_12593__$1;
(statearr_12595_12615[(2)] = inst_12577);

(statearr_12595_12615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (1))){
var inst_12566 = crs;
var state_12593__$1 = (function (){var statearr_12596 = state_12593;
(statearr_12596[(7)] = inst_12566);

return statearr_12596;
})();
var statearr_12597_12616 = state_12593__$1;
(statearr_12597_12616[(2)] = null);

(statearr_12597_12616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (4))){
var inst_12572 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_12593__$1 = state_12593;
var statearr_12598_12617 = state_12593__$1;
(statearr_12598_12617[(2)] = inst_12572);

(statearr_12598_12617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (6))){
var inst_12589 = (state_12593[(2)]);
var state_12593__$1 = state_12593;
var statearr_12599_12618 = state_12593__$1;
(statearr_12599_12618[(2)] = inst_12589);

(statearr_12599_12618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (3))){
var inst_12591 = (state_12593[(2)]);
var state_12593__$1 = state_12593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12593__$1,inst_12591);
} else {
if((state_val_12594 === (2))){
var inst_12566 = (state_12593[(7)]);
var inst_12568 = (inst_12566 - on_course);
var inst_12569 = Math.abs(inst_12568);
var inst_12570 = (inst_12569 < (4));
var state_12593__$1 = state_12593;
if(cljs.core.truth_(inst_12570)){
var statearr_12600_12619 = state_12593__$1;
(statearr_12600_12619[(1)] = (4));

} else {
var statearr_12601_12620 = state_12593__$1;
(statearr_12601_12620[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (9))){
var inst_12582 = (state_12593[(2)]);
var inst_12583 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_12593__$1 = (function (){var statearr_12602 = state_12593;
(statearr_12602[(8)] = inst_12582);

return statearr_12602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12593__$1,(10),inst_12583);
} else {
if((state_val_12594 === (5))){
var inst_12574 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_12593__$1 = state_12593;
if(inst_12574){
var statearr_12603_12621 = state_12593__$1;
(statearr_12603_12621[(1)] = (7));

} else {
var statearr_12604_12622 = state_12593__$1;
(statearr_12604_12622[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (10))){
var inst_12585 = (state_12593[(2)]);
var inst_12586 = rete4flight.core.course.call(null,id);
var inst_12566 = inst_12586;
var state_12593__$1 = (function (){var statearr_12605 = state_12593;
(statearr_12605[(7)] = inst_12566);

(statearr_12605[(9)] = inst_12585);

return statearr_12605;
})();
var statearr_12606_12623 = state_12593__$1;
(statearr_12606_12623[(2)] = null);

(statearr_12606_12623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12594 === (8))){
var inst_12566 = (state_12593[(7)]);
var inst_12579 = (inst_12566 + (4));
var inst_12580 = rete4flight.core.set_course_BANG_.call(null,id,inst_12579);
var state_12593__$1 = state_12593;
var statearr_12607_12624 = state_12593__$1;
(statearr_12607_12624[(2)] = inst_12580);

(statearr_12607_12624[(1)] = (9));


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
});})(c__9993__auto__,side,crs))
;
return ((function (switch__9928__auto__,c__9993__auto__,side,crs){
return (function() {
var rete4flight$core$turn_$_state_machine__9929__auto__ = null;
var rete4flight$core$turn_$_state_machine__9929__auto____0 = (function (){
var statearr_12611 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12611[(0)] = rete4flight$core$turn_$_state_machine__9929__auto__);

(statearr_12611[(1)] = (1));

return statearr_12611;
});
var rete4flight$core$turn_$_state_machine__9929__auto____1 = (function (state_12593){
while(true){
var ret_value__9930__auto__ = (function (){try{while(true){
var result__9931__auto__ = switch__9928__auto__.call(null,state_12593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9931__auto__;
}
break;
}
}catch (e12612){if((e12612 instanceof Object)){
var ex__9932__auto__ = e12612;
var statearr_12613_12625 = state_12593;
(statearr_12613_12625[(5)] = ex__9932__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12626 = state_12593;
state_12593 = G__12626;
continue;
} else {
return ret_value__9930__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__9929__auto__ = function(state_12593){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__9929__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__9929__auto____1.call(this,state_12593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__9929__auto____0;
rete4flight$core$turn_$_state_machine__9929__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__9929__auto____1;
return rete4flight$core$turn_$_state_machine__9929__auto__;
})()
;})(switch__9928__auto__,c__9993__auto__,side,crs))
})();
var state__9995__auto__ = (function (){var statearr_12614 = f__9994__auto__.call(null);
(statearr_12614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9993__auto__);

return statearr_12614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9995__auto__);
});})(c__9993__auto__,side,crs))
);

return c__9993__auto__;
} else {
return null;
}
});
rete4flight.core.CAMERA = new cljs.core.Keyword(null,"off","off",606440789);
rete4flight.core.ONBOARD = null;
rete4flight.core.display_flight_data = (function rete4flight$core$display_flight_data(){
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"on","on",173873944))){
var temp__4657__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rete4flight.core.ONBOARD,new cljs.core.Keyword(null,"laloalcs","laloalcs",1578251860)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__12628 = temp__4657__auto__;
var lat = cljs.core.nth.call(null,vec__12628,(0),null);
var lon = cljs.core.nth.call(null,vec__12628,(1),null);
var alt = cljs.core.nth.call(null,vec__12628,(2),null);
var crs = cljs.core.nth.call(null,vec__12628,(3),null);
var spd = cljs.core.nth.call(null,vec__12628,(4),null);
rete4flight.core.set_html_BANG_.call(null,"course",[cljs.core.str("Course: "),cljs.core.str(crs)].join(''));

rete4flight.core.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: "),cljs.core.str(spd)].join(''));

rete4flight.core.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: "),cljs.core.str(alt)].join(''));

rete4flight.core.set_html_BANG_.call(null,"lat",[cljs.core.str("Latitude: "),cljs.core.str(rete4flight.core.format.call(null,"%.4f",lat))].join(''));

return rete4flight.core.set_html_BANG_.call(null,"lon",[cljs.core.str("Longitude: "),cljs.core.str(rete4flight.core.format.call(null,"%.4f",lon))].join(''));
} else {
return null;
}
} else {
return null;
}
});
rete4flight.core.event_handler = (function rete4flight$core$event_handler(response){
var seq__12675 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12676 = null;
var count__12677 = (0);
var i__12678 = (0);
while(true){
if((i__12678 < count__12677)){
var map__12679 = cljs.core._nth.call(null,chunk__12676,i__12678);
var map__12679__$1 = ((((!((map__12679 == null)))?((((map__12679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12679):map__12679);
var evt = map__12679__$1;
var event = cljs.core.get.call(null,map__12679__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12681_12721 = cljs.core._EQ_;
var expr__12682_12722 = event;
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12682_12722))){
var map__12684_12723 = evt;
var map__12684_12724__$1 = ((((!((map__12684_12723 == null)))?((((map__12684_12723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12684_12723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684_12723):map__12684_12723);
var id_12725 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12726 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12727 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12728 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12729 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12730 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12731 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12732 = cljs.core.get.call(null,map__12684_12724__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12725,callsign_12726,lat_12727,lon_12728,crs_12729,spd_12730,alt_12731,state_12732);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12682_12722))){
var map__12686_12733 = evt;
var map__12686_12734__$1 = ((((!((map__12686_12733 == null)))?((((map__12686_12733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12686_12733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12686_12733):map__12686_12733);
var id_12735 = cljs.core.get.call(null,map__12686_12734__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12735);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12682_12722))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12682_12722))){
var map__12688_12736 = evt;
var map__12688_12737__$1 = ((((!((map__12688_12736 == null)))?((((map__12688_12736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12688_12736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12688_12736):map__12688_12736);
var ids_12738 = cljs.core.get.call(null,map__12688_12737__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12739 = cljs.core.get.call(null,map__12688_12737__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12738,options_12739);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12682_12722))){
var map__12690_12740 = evt;
var map__12690_12741__$1 = ((((!((map__12690_12740 == null)))?((((map__12690_12740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12690_12740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12690_12740):map__12690_12740);
var ids_12742 = cljs.core.get.call(null,map__12690_12741__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12742);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12682_12722))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12682_12722))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12682_12722))){
var map__12692_12743 = evt;
var map__12692_12744__$1 = ((((!((map__12692_12743 == null)))?((((map__12692_12743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12692_12743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12692_12743):map__12692_12743);
var id_12745 = cljs.core.get.call(null,map__12692_12744__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12746 = cljs.core.get.call(null,map__12692_12744__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12747 = cljs.core.get.call(null,map__12692_12744__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12748 = cljs.core.get.call(null,map__12692_12744__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12749 = cljs.core.get.call(null,map__12692_12744__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12745)){
rete4flight.core.add_popup.call(null,id_12745,html_12748,time_12749);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_12746;
if(cljs.core.truth_(and__6144__auto__)){
return lon_12747;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12746,lon_12747,html_12748,time_12749);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12682_12722))){
var map__12694_12750 = evt;
var map__12694_12751__$1 = ((((!((map__12694_12750 == null)))?((((map__12694_12750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12694_12750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12694_12750):map__12694_12750);
var id_12752 = cljs.core.get.call(null,map__12694_12751__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12753 = cljs.core.get.call(null,map__12694_12751__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12754 = cljs.core.get.call(null,map__12694_12751__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12755 = cljs.core.get.call(null,map__12694_12751__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12752,lla_12753,options_12754,time_12755);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12682_12722))){
var map__12696_12756 = evt;
var map__12696_12757__$1 = ((((!((map__12696_12756 == null)))?((((map__12696_12756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12696_12756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12696_12756):map__12696_12756);
var lat_12758 = cljs.core.get.call(null,map__12696_12757__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12759 = cljs.core.get.call(null,map__12696_12757__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12758,lon_12759);
} else {
if(cljs.core.truth_(pred__12681_12721.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12682_12722))){
var map__12698_12760 = evt;
var map__12698_12761__$1 = ((((!((map__12698_12760 == null)))?((((map__12698_12760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12698_12760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12698_12760):map__12698_12760);
var id_12762 = cljs.core.get.call(null,map__12698_12761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12763 = cljs.core.get.call(null,map__12698_12761__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12762,on_course_12763);
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
}

var G__12764 = seq__12675;
var G__12765 = chunk__12676;
var G__12766 = count__12677;
var G__12767 = (i__12678 + (1));
seq__12675 = G__12764;
chunk__12676 = G__12765;
count__12677 = G__12766;
i__12678 = G__12767;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12675);
if(temp__4657__auto__){
var seq__12675__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12675__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__12675__$1);
var G__12768 = cljs.core.chunk_rest.call(null,seq__12675__$1);
var G__12769 = c__6959__auto__;
var G__12770 = cljs.core.count.call(null,c__6959__auto__);
var G__12771 = (0);
seq__12675 = G__12768;
chunk__12676 = G__12769;
count__12677 = G__12770;
i__12678 = G__12771;
continue;
} else {
var map__12700 = cljs.core.first.call(null,seq__12675__$1);
var map__12700__$1 = ((((!((map__12700 == null)))?((((map__12700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12700):map__12700);
var evt = map__12700__$1;
var event = cljs.core.get.call(null,map__12700__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12702_12772 = cljs.core._EQ_;
var expr__12703_12773 = event;
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12703_12773))){
var map__12705_12774 = evt;
var map__12705_12775__$1 = ((((!((map__12705_12774 == null)))?((((map__12705_12774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12705_12774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12705_12774):map__12705_12774);
var id_12776 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12777 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12778 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12779 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12780 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12781 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12782 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12783 = cljs.core.get.call(null,map__12705_12775__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12776,callsign_12777,lat_12778,lon_12779,crs_12780,spd_12781,alt_12782,state_12783);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12703_12773))){
var map__12707_12784 = evt;
var map__12707_12785__$1 = ((((!((map__12707_12784 == null)))?((((map__12707_12784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12707_12784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707_12784):map__12707_12784);
var id_12786 = cljs.core.get.call(null,map__12707_12785__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12786);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12703_12773))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12703_12773))){
var map__12709_12787 = evt;
var map__12709_12788__$1 = ((((!((map__12709_12787 == null)))?((((map__12709_12787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12709_12787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12709_12787):map__12709_12787);
var ids_12789 = cljs.core.get.call(null,map__12709_12788__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12790 = cljs.core.get.call(null,map__12709_12788__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12789,options_12790);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12703_12773))){
var map__12711_12791 = evt;
var map__12711_12792__$1 = ((((!((map__12711_12791 == null)))?((((map__12711_12791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12711_12791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12711_12791):map__12711_12791);
var ids_12793 = cljs.core.get.call(null,map__12711_12792__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12793);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12703_12773))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12703_12773))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12703_12773))){
var map__12713_12794 = evt;
var map__12713_12795__$1 = ((((!((map__12713_12794 == null)))?((((map__12713_12794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12713_12794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12713_12794):map__12713_12794);
var id_12796 = cljs.core.get.call(null,map__12713_12795__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12797 = cljs.core.get.call(null,map__12713_12795__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12798 = cljs.core.get.call(null,map__12713_12795__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12799 = cljs.core.get.call(null,map__12713_12795__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12800 = cljs.core.get.call(null,map__12713_12795__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12796)){
rete4flight.core.add_popup.call(null,id_12796,html_12799,time_12800);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_12797;
if(cljs.core.truth_(and__6144__auto__)){
return lon_12798;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12797,lon_12798,html_12799,time_12800);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12703_12773))){
var map__12715_12801 = evt;
var map__12715_12802__$1 = ((((!((map__12715_12801 == null)))?((((map__12715_12801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12715_12801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12715_12801):map__12715_12801);
var id_12803 = cljs.core.get.call(null,map__12715_12802__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12804 = cljs.core.get.call(null,map__12715_12802__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12805 = cljs.core.get.call(null,map__12715_12802__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12806 = cljs.core.get.call(null,map__12715_12802__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12803,lla_12804,options_12805,time_12806);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12703_12773))){
var map__12717_12807 = evt;
var map__12717_12808__$1 = ((((!((map__12717_12807 == null)))?((((map__12717_12807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12717_12807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12717_12807):map__12717_12807);
var lat_12809 = cljs.core.get.call(null,map__12717_12808__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12810 = cljs.core.get.call(null,map__12717_12808__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12809,lon_12810);
} else {
if(cljs.core.truth_(pred__12702_12772.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12703_12773))){
var map__12719_12811 = evt;
var map__12719_12812__$1 = ((((!((map__12719_12811 == null)))?((((map__12719_12811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12719_12811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12719_12811):map__12719_12811);
var id_12813 = cljs.core.get.call(null,map__12719_12812__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12814 = cljs.core.get.call(null,map__12719_12812__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12813,on_course_12814);
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
}

var G__12815 = cljs.core.next.call(null,seq__12675__$1);
var G__12816 = null;
var G__12817 = (0);
var G__12818 = (0);
seq__12675 = G__12815;
chunk__12676 = G__12816;
count__12677 = G__12817;
i__12678 = G__12818;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12819){
var map__12822 = p__12819;
var map__12822__$1 = ((((!((map__12822 == null)))?((((map__12822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12822):map__12822);
var status = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
rete4flight.core.check_events = (function rete4flight$core$check_events(){
ajax.core.GET.call(null,rete4flight.core.URL_EVT,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.event_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

return rete4flight.core.display_flight_data.call(null);
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
rete4flight.core.MANUAL = new cljs.core.Keyword(null,"off","off",606440789);
rete4flight.core.manual_show = (function rete4flight$core$manual_show(){
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"on","on",173873944))){
rete4flight.core.set_html_BANG_.call(null,"course-fld",[cljs.core.str("<input value='0' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualcrs(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"speed-fld",[cljs.core.str("<input value='0' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualspd(this.value)'>")].join(''));

return rete4flight.core.set_html_BANG_.call(null,"altitude-fld",[cljs.core.str("<input value='0' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualalt(this.value)'>")].join(''));
} else {
return null;
}
});
rete4flight.core.manual_hide = (function rete4flight$core$manual_hide(){
rete4flight.core.set_html_BANG_.call(null,"course-fld","");

rete4flight.core.set_html_BANG_.call(null,"speed-fld","");

return rete4flight.core.set_html_BANG_.call(null,"altitude-fld","");
});
rete4flight.core.manual = (function rete4flight$core$manual(){
if(cljs.core._EQ_.call(null,rete4flight.core.MANUAL,new cljs.core.Keyword(null,"off","off",606440789))){
rete4flight.core.manual_show.call(null);

ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_AUT),cljs.core.str("?manual=on")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

rete4flight.core.MANUAL = new cljs.core.Keyword(null,"on","on",173873944);
} else {
if(cljs.core._EQ_.call(null,rete4flight.core.MANUAL,new cljs.core.Keyword(null,"on","on",173873944))){
rete4flight.core.manual_hide.call(null);

ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_AUT),cljs.core.str("?manual=off")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

rete4flight.core.MANUAL = new cljs.core.Keyword(null,"off","off",606440789);
} else {
return null;
}
}
});
rete4flight.core.manualcrs = (function rete4flight$core$manualcrs(crs){
var url = [cljs.core.str(rete4flight.core.URL_AUT),cljs.core.str("?course="),cljs.core.str(crs)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.manualspd = (function rete4flight$core$manualspd(spd){
var url = [cljs.core.str(rete4flight.core.URL_AUT),cljs.core.str("?speed="),cljs.core.str(spd)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.manualalt = (function rete4flight$core$manualalt(alt){
var url = [cljs.core.str(rete4flight.core.URL_AUT),cljs.core.str("?altitude="),cljs.core.str(alt)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.camera_show = (function rete4flight$core$camera_show(){
rete4flight.core.set_html_BANG_.call(null,"autopilot","<h4>Autopilot</h4>");

rete4flight.core.set_html_BANG_.call(null,"course","Course: 000");

rete4flight.core.set_html_BANG_.call(null,"speed","Speed: 000");

rete4flight.core.set_html_BANG_.call(null,"altitude","Altitude: 00000");

rete4flight.core.set_html_BANG_.call(null,"lat","Latitude: 00.0000");

rete4flight.core.set_html_BANG_.call(null,"lon","Longitude: 00.0000");

rete4flight.core.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

rete4flight.core.set_html_BANG_.call(null,"onboard","Onboard:");

rete4flight.core.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str("<input value='callsign' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.camonb(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"heading","Heading:");

rete4flight.core.set_html_BANG_.call(null,"heading-fld","<select onchange='javascript:rete4flight.core.camhea(this.value)' style='width:96px'>\n             <option value='FORWARD'>FORWARD</option>\n             <option value='BACKWARD'>BACKWARD</option>\n             <option value='RIGHT'>RIGHT</option>\n             <option value='LEFT'>LEFT</option>\n             <option value='UP'>UP</option>\n             <option value='DOWN'>DOWN</option>\n             </select>");

rete4flight.core.set_html_BANG_.call(null,"pitch","Pitch:");

rete4flight.core.set_html_BANG_.call(null,"pitch-fld",[cljs.core.str("<input value='-10' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.campit(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"roll","Roll:");

return rete4flight.core.set_html_BANG_.call(null,"roll-fld",[cljs.core.str("<input value='0' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.camrol(this.value)'>")].join(''));
});
rete4flight.core.camera_hide = (function rete4flight$core$camera_hide(){
rete4flight.core.set_html_BANG_.call(null,"autopilot","");

rete4flight.core.set_html_BANG_.call(null,"course","");

rete4flight.core.set_html_BANG_.call(null,"speed","");

rete4flight.core.set_html_BANG_.call(null,"altitude","");

rete4flight.core.set_html_BANG_.call(null,"lat","");

rete4flight.core.set_html_BANG_.call(null,"lon","");

rete4flight.core.set_html_BANG_.call(null,"camera","");

rete4flight.core.set_html_BANG_.call(null,"onboard","");

rete4flight.core.set_html_BANG_.call(null,"onboard-fld","");

rete4flight.core.set_html_BANG_.call(null,"heading","");

rete4flight.core.set_html_BANG_.call(null,"heading-fld","");

rete4flight.core.set_html_BANG_.call(null,"pitch","");

rete4flight.core.set_html_BANG_.call(null,"pitch-fld","");

rete4flight.core.set_html_BANG_.call(null,"roll","");

rete4flight.core.set_html_BANG_.call(null,"roll-fld","");

return rete4flight.core.manual_hide.call(null);
});
rete4flight.core.camera = (function rete4flight$core$camera(){
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"off","off",606440789))){
rete4flight.core.camera_show.call(null);

ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?camera=on")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

rete4flight.core.CAMERA = new cljs.core.Keyword(null,"on","on",173873944);
} else {
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"on","on",173873944))){
rete4flight.core.camera_hide.call(null);

ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?camera=off")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

rete4flight.core.CAMERA = new cljs.core.Keyword(null,"off","off",606440789);
} else {
return null;
}
}
});
rete4flight.core.camonb = (function rete4flight$core$camonb(obj){
var url = [cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?onboard="),cljs.core.str(obj)].join('');
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

rete4flight.core.ONBOARD = obj;
});
rete4flight.core.camhea = (function rete4flight$core$camhea(hea){
var url = [cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?heading="),cljs.core.str(hea)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.campit = (function rete4flight$core$campit(pit){
var url = [cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?pitch="),cljs.core.str(pit)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.camrol = (function rete4flight$core$camrol(rol){
var url = [cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?roll="),cljs.core.str(rol)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.schedule = (function rete4flight$core$schedule(){
var inp = [cljs.core.str("<input type='text' id='callsign' style='width:80px' value='callsign'"),cljs.core.str(" onchange='javascript:rete4flight.core.selcallsgn(this.value)'>")].join('');
rete4flight.core.set_html_BANG_.call(null,"callsign",inp);

return cljs.core.vreset_BANG_.call(null,rete4flight.core.REM_CAL,new cljs.core.PersistentArrayMap(null, 1, ["?func=","schedule"], null));
});
rete4flight.core.sel_hour = (function rete4flight$core$sel_hour(){
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_hour_$_iter__12828(s__12829){
return (new cljs.core.LazySeq(null,(function (){
var s__12829__$1 = s__12829;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12829__$1);
if(temp__4657__auto__){
var s__12829__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12829__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12829__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12831 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12830 = (0);
while(true){
if((i__12830 < size__6927__auto__)){
var hour = cljs.core._nth.call(null,c__6926__auto__,i__12830);
cljs.core.chunk_append.call(null,b__12831,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12832 = (i__12830 + (1));
i__12830 = G__12832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12831),rete4flight$core$sel_hour_$_iter__12828.call(null,cljs.core.chunk_rest.call(null,s__12829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12831),null);
}
} else {
var hour = cljs.core.first.call(null,s__12829__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12828.call(null,cljs.core.rest.call(null,s__12829__$2)));
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
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_minute_$_iter__12837(s__12838){
return (new cljs.core.LazySeq(null,(function (){
var s__12838__$1 = s__12838;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12838__$1);
if(temp__4657__auto__){
var s__12838__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12838__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12838__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12840 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12839 = (0);
while(true){
if((i__12839 < size__6927__auto__)){
var min = cljs.core._nth.call(null,c__6926__auto__,i__12839);
cljs.core.chunk_append.call(null,b__12840,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12841 = (i__12839 + (1));
i__12839 = G__12841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12840),rete4flight$core$sel_minute_$_iter__12837.call(null,cljs.core.chunk_rest.call(null,s__12838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12840),null);
}
} else {
var min = cljs.core.first.call(null,s__12838__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12837.call(null,cljs.core.rest.call(null,s__12838__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_from_country_$_iter__12846(s__12847){
return (new cljs.core.LazySeq(null,(function (){
var s__12847__$1 = s__12847;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12847__$1);
if(temp__4657__auto__){
var s__12847__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12847__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12847__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12849 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12848 = (0);
while(true){
if((i__12848 < size__6927__auto__)){
var contry = cljs.core._nth.call(null,c__6926__auto__,i__12848);
cljs.core.chunk_append.call(null,b__12849,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12850 = (i__12848 + (1));
i__12848 = G__12850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12849),rete4flight$core$sel_from_country_$_iter__12846.call(null,cljs.core.chunk_rest.call(null,s__12847__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12849),null);
}
} else {
var contry = cljs.core.first.call(null,s__12847__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12846.call(null,cljs.core.rest.call(null,s__12847__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12855(s__12856){
return (new cljs.core.LazySeq(null,(function (){
var s__12856__$1 = s__12856;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12856__$1);
if(temp__4657__auto__){
var s__12856__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12856__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12856__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12858 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12857 = (0);
while(true){
if((i__12857 < size__6927__auto__)){
var airport = cljs.core._nth.call(null,c__6926__auto__,i__12857);
cljs.core.chunk_append.call(null,b__12858,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12859 = (i__12857 + (1));
i__12857 = G__12859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12858),rete4flight$core$sel_from_airport_$_iter__12855.call(null,cljs.core.chunk_rest.call(null,s__12856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12858),null);
}
} else {
var airport = cljs.core.first.call(null,s__12856__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12855.call(null,cljs.core.rest.call(null,s__12856__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_to_country_$_iter__12864(s__12865){
return (new cljs.core.LazySeq(null,(function (){
var s__12865__$1 = s__12865;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12865__$1);
if(temp__4657__auto__){
var s__12865__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12865__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12865__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12867 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12866 = (0);
while(true){
if((i__12866 < size__6927__auto__)){
var contry = cljs.core._nth.call(null,c__6926__auto__,i__12866);
cljs.core.chunk_append.call(null,b__12867,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12868 = (i__12866 + (1));
i__12866 = G__12868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12867),rete4flight$core$sel_to_country_$_iter__12864.call(null,cljs.core.chunk_rest.call(null,s__12865__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12867),null);
}
} else {
var contry = cljs.core.first.call(null,s__12865__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12864.call(null,cljs.core.rest.call(null,s__12865__$2)));
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
cljs.core.vreset_BANG_.call(null,rete4flight.core.REM_CAL,new cljs.core.PersistentArrayMap(null, 1, ["?func=","move-to"], null));

rete4flight.core.sel_to_country.call(null,cljs.core.PersistentVector.EMPTY);

return ajax.core.GET.call(null,rete4flight.core.URL_CNS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return rete4flight.core.sel_to_country.call(null,rete4flight.core.read_transit.call(null,r));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.sel_to_airport = (function rete4flight$core$sel_to_airport(airports){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12873(s__12874){
return (new cljs.core.LazySeq(null,(function (){
var s__12874__$1 = s__12874;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12874__$1);
if(temp__4657__auto__){
var s__12874__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12874__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12874__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12876 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12875 = (0);
while(true){
if((i__12875 < size__6927__auto__)){
var airport = cljs.core._nth.call(null,c__6926__auto__,i__12875);
cljs.core.chunk_append.call(null,b__12876,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12877 = (i__12875 + (1));
i__12875 = G__12877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12876),rete4flight$core$sel_to_airport_$_iter__12873.call(null,cljs.core.chunk_rest.call(null,s__12874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12876),null);
}
} else {
var airport = cljs.core.first.call(null,s__12874__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12873.call(null,cljs.core.rest.call(null,s__12874__$2)));
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
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&callsign=",csn));

return rete4flight.core.sel_hour.call(null);
});
rete4flight.core.selhour = (function rete4flight$core$selhour(hour){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&hour=",hour));

return rete4flight.core.sel_minute.call(null);
});
rete4flight.core.selmin = (function rete4flight$core$selmin(min){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&minute=",min));

rete4flight.core.sel_from_country.call(null,cljs.core.PersistentVector.EMPTY);

return ajax.core.GET.call(null,rete4flight.core.URL_CNS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return rete4flight.core.sel_from_country.call(null,rete4flight.core.read_transit.call(null,r));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.selfromcnt = (function rete4flight$core$selfromcnt(country){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&from-country=",country));

rete4flight.core.sel_from_airport.call(null,cljs.core.PersistentVector.EMPTY);

var url = [cljs.core.str(rete4flight.core.URL_APS),cljs.core.str("?contry="),cljs.core.str(country)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (url){
return (function (r){
return rete4flight.core.sel_from_airport.call(null,rete4flight.core.read_transit.call(null,r));
});})(url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.selfromapt = (function rete4flight$core$selfromapt(airport){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&from-airport=",airport));

rete4flight.core.sel_to_country.call(null,cljs.core.PersistentVector.EMPTY);

return ajax.core.GET.call(null,rete4flight.core.URL_CNS,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return rete4flight.core.sel_to_country.call(null,rete4flight.core.read_transit.call(null,r));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.seltocnt = (function rete4flight$core$seltocnt(country){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&to-country=",country));

rete4flight.core.sel_to_airport.call(null,cljs.core.PersistentVector.EMPTY);

var url = [cljs.core.str(rete4flight.core.URL_APS),cljs.core.str("?contry="),cljs.core.str(country)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (url){
return (function (r){
return rete4flight.core.sel_to_airport.call(null,rete4flight.core.read_transit.call(null,r));
});})(url))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.seltoapt = (function rete4flight$core$seltoapt(airport){
cljs.core._vreset_BANG_.call(null,rete4flight.core.REM_CAL,cljs.core.assoc.call(null,cljs.core._deref.call(null,rete4flight.core.REM_CAL),"&to-airport=",airport));

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
var vec__12879 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12879,(0),null);
var s = cljs.core.nth.call(null,vec__12879,(1),null);
var w = cljs.core.nth.call(null,vec__12879,(2),null);
var e = cljs.core.nth.call(null,vec__12879,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12881 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12881,(0),null);
var s = cljs.core.nth.call(null,vec__12881,(1),null);
var w = cljs.core.nth.call(null,vec__12881,(2),null);
var e = cljs.core.nth.call(null,vec__12881,(3),null);
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
rete4flight.core.COMMANDS = "<select onchange='javascript:rete4flight.core.commands(this.value)'>\n  \t\t\t<option value='commands'>Commands</option>\n  \t\t\t<option value='watch-visible'>Watch visible area</option>\n  \t\t\t<option value='flight-states'>State of flights</option>\n  \t\t\t<option value='intersect'>Intersections</option>\n  \t\t\t<option value='move-to'>Move to Airport</option>\n  \t\t\t<option value='schedule'>Schedule Flight</option>\n  \t\t\t<option value='camera'>Camera</option>\n  \t\t\t<option value='manual'>Manual Control</option>\n  \t\t\t<option value='clear'>Clear</option>\n\t\t</select>";
rete4flight.core.commands = (function rete4flight$core$commands(func){
var pred__12885_12888 = cljs.core._EQ_;
var expr__12886_12889 = func;
if(cljs.core.truth_(pred__12885_12888.call(null,"watch-visible",expr__12886_12889))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"flight-states",expr__12886_12889))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"intersect",expr__12886_12889))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"clear",expr__12886_12889))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"move-to",expr__12886_12889))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"schedule",expr__12886_12889))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"camera",expr__12886_12889))){
rete4flight.core.camera.call(null);
} else {
if(cljs.core.truth_(pred__12885_12888.call(null,"manual",expr__12886_12889))){
rete4flight.core.manual.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12886_12889)].join('')));
}
}
}
}
}
}
}
}

return rete4flight.core.set_html_BANG_.call(null,"commands",rete4flight.core.COMMANDS);
});
rete4flight.core.remote_call = (function rete4flight$core$remote_call(){
var fkey = "?func=";
var temp__4655__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,rete4flight.core.REM_CAL),fkey);
if(cljs.core.truth_(temp__4655__auto__)){
var func = temp__4655__auto__;
var head = [cljs.core.str(fkey),cljs.core.str(func)].join('');
var tail = (function (){var iter__6928__auto__ = ((function (head,func,temp__4655__auto__,fkey){
return (function rete4flight$core$remote_call_$_iter__12898(s__12899){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__12899__$1 = s__12899;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12899__$1);
if(temp__4657__auto__){
var s__12899__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12899__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__12899__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__12901 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__12900 = (0);
while(true){
if((i__12900 < size__6927__auto__)){
var vec__12904 = cljs.core._nth.call(null,c__6926__auto__,i__12900);
var f = cljs.core.nth.call(null,vec__12904,(0),null);
var k = cljs.core.nth.call(null,vec__12904,(1),null);
cljs.core.chunk_append.call(null,b__12901,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__12906 = (i__12900 + (1));
i__12900 = G__12906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12901),rete4flight$core$remote_call_$_iter__12898.call(null,cljs.core.chunk_rest.call(null,s__12899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12901),null);
}
} else {
var vec__12905 = cljs.core.first.call(null,s__12899__$2);
var f = cljs.core.nth.call(null,vec__12905,(0),null);
var k = cljs.core.nth.call(null,vec__12905,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__12898.call(null,cljs.core.rest.call(null,s__12899__$2)));
}
} else {
return null;
}
break;
}
});})(head,func,temp__4655__auto__,fkey))
,null,null));
});})(head,func,temp__4655__auto__,fkey))
;
return iter__6928__auto__.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,rete4flight.core.REM_CAL),fkey)));
})();
var plis = [cljs.core.str(head),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,tail))].join('');
return ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_CAL),cljs.core.str(plis)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
} else {
return null;
}
});
rete4flight.core.init = (function rete4flight$core$init(){
var m = L.map("map").setView([40.8,-74.0],(9));
var tile1 = L.tileLayer(rete4flight.core.URL_OSM,{"maxZoom": (16), "attribution": "OOGIS RL, OpenStreetMap &copy;"});
var tile2 = L.tileLayer(rete4flight.core.URL_GSA,{"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"});
var tile3 = L.tileLayer(rete4flight.core.URL_GST,{"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"});
var tile4 = L.tileLayer(rete4flight.core.URL_GHB,{"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"});
var tile5 = L.tileLayer(rete4flight.core.URL_GTR,{"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"});
var base = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, ["OpenStreetMap",tile1,"Google Satellite",tile2,"Google Streets",tile3,"Google Hybrid",tile4,"Google Terrain",tile5], null));
var ctrl = L.control.layers(base,null);
tile1.addTo(m);

ctrl.addTo(m);

m.on("mousemove",((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (e){
return rete4flight.core.mouse_move.call(null,e.latlng.lat,e.latlng.lng);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
);

cljs.core.vreset_BANG_.call(null,rete4flight.core.chart,m);

rete4flight.core.set_html_BANG_.call(null,"commands",rete4flight.core.COMMANDS);

rete4flight.core.repeater.call(null,((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (){
return rete4flight.core.check_events.call(null);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
,rete4flight.core.DLT_EVT);

rete4flight.core.repeater.call(null,((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (){
return rete4flight.core.shift_links.call(null);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
,rete4flight.core.DLT_LKS);

return window.setInterval(((function (m,tile1,tile2,tile3,tile4,tile5,base,ctrl){
return (function (){
return rete4flight.core.clock_step.call(null);
});})(m,tile1,tile2,tile3,tile4,tile5,base,ctrl))
,rete4flight.core.CLK_STP);
});
window.onload = rete4flight.core.init.call(null);

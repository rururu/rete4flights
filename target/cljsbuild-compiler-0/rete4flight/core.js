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
var len__7214__auto___16055 = arguments.length;
var i__7215__auto___16056 = (0);
while(true){
if((i__7215__auto___16056 < len__7214__auto___16055)){
args__7221__auto__.push((arguments[i__7215__auto___16056]));

var G__16057 = (i__7215__auto___16056 + (1));
i__7215__auto___16056 = G__16057;
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

rete4flight.core.format.cljs$lang$applyTo = (function (seq16053){
var G__16054 = cljs.core.first.call(null,seq16053);
var seq16053__$1 = cljs.core.next.call(null,seq16053);
return rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic(G__16054,seq16053__$1);
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

var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__){
return (function (state_16101){
var state_val_16102 = (state_16101[(1)]);
if((state_val_16102 === (1))){
var state_16101__$1 = state_16101;
var statearr_16103_16118 = state_16101__$1;
(statearr_16103_16118[(2)] = null);

(statearr_16103_16118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (2))){
var state_16101__$1 = state_16101;
var statearr_16104_16119 = state_16101__$1;
(statearr_16104_16119[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (3))){
var inst_16099 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16101__$1,inst_16099);
} else {
if((state_val_16102 === (4))){
var inst_16090 = task.call(null);
var inst_16091 = cljs.core.async.timeout.call(null,timo);
var state_16101__$1 = (function (){var statearr_16106 = state_16101;
(statearr_16106[(7)] = inst_16090);

return statearr_16106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16101__$1,(7),inst_16091);
} else {
if((state_val_16102 === (5))){
var state_16101__$1 = state_16101;
var statearr_16107_16120 = state_16101__$1;
(statearr_16107_16120[(2)] = null);

(statearr_16107_16120[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (6))){
var inst_16097 = (state_16101[(2)]);
var state_16101__$1 = state_16101;
var statearr_16108_16121 = state_16101__$1;
(statearr_16108_16121[(2)] = inst_16097);

(statearr_16108_16121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16102 === (7))){
var inst_16093 = (state_16101[(2)]);
var state_16101__$1 = (function (){var statearr_16109 = state_16101;
(statearr_16109[(8)] = inst_16093);

return statearr_16109;
})();
var statearr_16110_16122 = state_16101__$1;
(statearr_16110_16122[(2)] = null);

(statearr_16110_16122[(1)] = (2));


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
});})(c__13279__auto__))
;
return ((function (switch__13167__auto__,c__13279__auto__){
return (function() {
var rete4flight$core$repeater_$_state_machine__13168__auto__ = null;
var rete4flight$core$repeater_$_state_machine__13168__auto____0 = (function (){
var statearr_16114 = [null,null,null,null,null,null,null,null,null];
(statearr_16114[(0)] = rete4flight$core$repeater_$_state_machine__13168__auto__);

(statearr_16114[(1)] = (1));

return statearr_16114;
});
var rete4flight$core$repeater_$_state_machine__13168__auto____1 = (function (state_16101){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_16101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e16115){if((e16115 instanceof Object)){
var ex__13171__auto__ = e16115;
var statearr_16116_16123 = state_16101;
(statearr_16116_16123[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16124 = state_16101;
state_16101 = G__16124;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
rete4flight$core$repeater_$_state_machine__13168__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return rete4flight$core$repeater_$_state_machine__13168__auto____0.call(this);
case 1:
return rete4flight$core$repeater_$_state_machine__13168__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$repeater_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$repeater_$_state_machine__13168__auto____0;
rete4flight$core$repeater_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$repeater_$_state_machine__13168__auto____1;
return rete4flight$core$repeater_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__))
})();
var state__13281__auto__ = (function (){var statearr_16117 = f__13280__auto__.call(null);
(statearr_16117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_16117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__))
);

return c__13279__auto__;
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
var vec__16126 = rete4flight.core.spherical_between.call(null,phi,lam,way,dir);
var phi2 = cljs.core.nth.call(null,vec__16126,(0),null);
var lam2 = cljs.core.nth.call(null,vec__16126,(1),null);
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
var temp__4655__auto___16127 = mob.call(null,new cljs.core.Keyword(null,"mover","mover",935114769));
if(cljs.core.truth_(temp__4655__auto___16127)){
var mvr_16128 = temp__4655__auto___16127;
cljs.core.async.close_BANG_.call(null,mvr_16128);
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
var seq__16133 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs)));
var chunk__16134 = null;
var count__16135 = (0);
var i__16136 = (0);
while(true){
if((i__16136 < count__16135)){
var id = cljs.core._nth.call(null,chunk__16134,i__16136);
rete4flight.core.delete_mapob.call(null,id);

var G__16137 = seq__16133;
var G__16138 = chunk__16134;
var G__16139 = count__16135;
var G__16140 = (i__16136 + (1));
seq__16133 = G__16137;
chunk__16134 = G__16138;
count__16135 = G__16139;
i__16136 = G__16140;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16133);
if(temp__4657__auto__){
var seq__16133__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16133__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__16133__$1);
var G__16141 = cljs.core.chunk_rest.call(null,seq__16133__$1);
var G__16142 = c__6959__auto__;
var G__16143 = cljs.core.count.call(null,c__6959__auto__);
var G__16144 = (0);
seq__16133 = G__16141;
chunk__16134 = G__16142;
count__16135 = G__16143;
i__16136 = G__16144;
continue;
} else {
var id = cljs.core.first.call(null,seq__16133__$1);
rete4flight.core.delete_mapob.call(null,id);

var G__16145 = cljs.core.next.call(null,seq__16133__$1);
var G__16146 = null;
var G__16147 = (0);
var G__16148 = (0);
seq__16133 = G__16145;
chunk__16134 = G__16146;
count__16135 = G__16147;
i__16136 = G__16148;
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
return (function (p1__16149_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__16149_SHARP_),cljs.core.second.call(null,p1__16149_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),lla));
var lle = cljs.core.clj__GT_js.call(null,llg);
var trl = L.polyline(lle,ops);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(trl);

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"id","id",-1388402092)], null),id));

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"trail","trail",-272340561)], null),trl));

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"options","options",99638489)], null),options));

if((time > (0))){
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__,ops,llg,lle,trl){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__,ops,llg,lle,trl){
return (function (state_16178){
var state_val_16179 = (state_16178[(1)]);
if((state_val_16179 === (1))){
var inst_16169 = cljs.core.async.timeout.call(null,time);
var state_16178__$1 = state_16178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16178__$1,(2),inst_16169);
} else {
if((state_val_16179 === (2))){
var inst_16171 = (state_16178[(2)]);
var inst_16172 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_16173 = inst_16172.removeLayer(trl);
var inst_16174 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_16175 = cljs.core.dissoc.call(null,inst_16174,id);
var inst_16176 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_16175);
var state_16178__$1 = (function (){var statearr_16180 = state_16178;
(statearr_16180[(7)] = inst_16173);

(statearr_16180[(8)] = inst_16171);

return statearr_16180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16178__$1,inst_16176);
} else {
return null;
}
}
});})(c__13279__auto__,ops,llg,lle,trl))
;
return ((function (switch__13167__auto__,c__13279__auto__,ops,llg,lle,trl){
return (function() {
var rete4flight$core$add_trail_$_state_machine__13168__auto__ = null;
var rete4flight$core$add_trail_$_state_machine__13168__auto____0 = (function (){
var statearr_16184 = [null,null,null,null,null,null,null,null,null];
(statearr_16184[(0)] = rete4flight$core$add_trail_$_state_machine__13168__auto__);

(statearr_16184[(1)] = (1));

return statearr_16184;
});
var rete4flight$core$add_trail_$_state_machine__13168__auto____1 = (function (state_16178){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_16178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e16185){if((e16185 instanceof Object)){
var ex__13171__auto__ = e16185;
var statearr_16186_16188 = state_16178;
(statearr_16186_16188[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16189 = state_16178;
state_16178 = G__16189;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__13168__auto__ = function(state_16178){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__13168__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__13168__auto____1.call(this,state_16178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__13168__auto____0;
rete4flight$core$add_trail_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__13168__auto____1;
return rete4flight$core$add_trail_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__,ops,llg,lle,trl))
})();
var state__13281__auto__ = (function (){var statearr_16187 = f__13280__auto__.call(null);
(statearr_16187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_16187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__,ops,llg,lle,trl))
);

return c__13279__auto__;
} else {
return null;
}
});
rete4flight.core.collect_llga = (function rete4flight$core$collect_llga(ids){
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__16190_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__16190_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__16191_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__16191_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__16192_SHARP_){
return p1__16192_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__16193,ops){
var vec__16195 = p__16193;
var id1 = cljs.core.nth.call(null,vec__16195,(0),null);
var id2 = cljs.core.nth.call(null,vec__16195,(1),null);
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
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__,ops,tmin,del,llg,lnk){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__,ops,tmin,del,llg,lnk){
return (function (state_16224){
var state_val_16225 = (state_16224[(1)]);
if((state_val_16225 === (1))){
var inst_16215 = cljs.core.async.timeout.call(null,del);
var state_16224__$1 = state_16224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16224__$1,(2),inst_16215);
} else {
if((state_val_16225 === (2))){
var inst_16217 = (state_16224[(2)]);
var inst_16218 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_16219 = inst_16218.removeLayer(lnk);
var inst_16220 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_16221 = cljs.core.dissoc.call(null,inst_16220,ids);
var inst_16222 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_16221);
var state_16224__$1 = (function (){var statearr_16226 = state_16224;
(statearr_16226[(7)] = inst_16219);

(statearr_16226[(8)] = inst_16217);

return statearr_16226;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16224__$1,inst_16222);
} else {
return null;
}
}
});})(c__13279__auto__,ops,tmin,del,llg,lnk))
;
return ((function (switch__13167__auto__,c__13279__auto__,ops,tmin,del,llg,lnk){
return (function() {
var rete4flight$core$add_link_$_state_machine__13168__auto__ = null;
var rete4flight$core$add_link_$_state_machine__13168__auto____0 = (function (){
var statearr_16230 = [null,null,null,null,null,null,null,null,null];
(statearr_16230[(0)] = rete4flight$core$add_link_$_state_machine__13168__auto__);

(statearr_16230[(1)] = (1));

return statearr_16230;
});
var rete4flight$core$add_link_$_state_machine__13168__auto____1 = (function (state_16224){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_16224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e16231){if((e16231 instanceof Object)){
var ex__13171__auto__ = e16231;
var statearr_16232_16234 = state_16224;
(statearr_16232_16234[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16235 = state_16224;
state_16224 = G__16235;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__13168__auto__ = function(state_16224){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__13168__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__13168__auto____1.call(this,state_16224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__13168__auto____0;
rete4flight$core$add_link_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__13168__auto____1;
return rete4flight$core$add_link_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__,ops,tmin,del,llg,lnk))
})();
var state__13281__auto__ = (function (){var statearr_16233 = f__13280__auto__.call(null);
(statearr_16233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_16233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__,ops,tmin,del,llg,lnk))
);

return c__13279__auto__;
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
var seq__16242 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__16243 = null;
var count__16244 = (0);
var i__16245 = (0);
while(true){
if((i__16245 < count__16244)){
var vec__16246 = cljs.core._nth.call(null,chunk__16243,i__16245);
var ids = cljs.core.nth.call(null,vec__16246,(0),null);
var lnk = cljs.core.nth.call(null,vec__16246,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__16248 = seq__16242;
var G__16249 = chunk__16243;
var G__16250 = count__16244;
var G__16251 = (i__16245 + (1));
seq__16242 = G__16248;
chunk__16243 = G__16249;
count__16244 = G__16250;
i__16245 = G__16251;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16242);
if(temp__4657__auto__){
var seq__16242__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16242__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__16242__$1);
var G__16252 = cljs.core.chunk_rest.call(null,seq__16242__$1);
var G__16253 = c__6959__auto__;
var G__16254 = cljs.core.count.call(null,c__6959__auto__);
var G__16255 = (0);
seq__16242 = G__16252;
chunk__16243 = G__16253;
count__16244 = G__16254;
i__16245 = G__16255;
continue;
} else {
var vec__16247 = cljs.core.first.call(null,seq__16242__$1);
var ids = cljs.core.nth.call(null,vec__16247,(0),null);
var lnk = cljs.core.nth.call(null,vec__16247,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__16256 = cljs.core.next.call(null,seq__16242__$1);
var G__16257 = null;
var G__16258 = (0);
var G__16259 = (0);
seq__16242 = G__16256;
chunk__16243 = G__16257;
count__16244 = G__16258;
i__16245 = G__16259;
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
var seq__16264 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__16265 = null;
var count__16266 = (0);
var i__16267 = (0);
while(true){
if((i__16267 < count__16266)){
var ids = cljs.core._nth.call(null,chunk__16265,i__16267);
rete4flight.core.delete_link.call(null,ids);

var G__16268 = seq__16264;
var G__16269 = chunk__16265;
var G__16270 = count__16266;
var G__16271 = (i__16267 + (1));
seq__16264 = G__16268;
chunk__16265 = G__16269;
count__16266 = G__16270;
i__16267 = G__16271;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16264);
if(temp__4657__auto__){
var seq__16264__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16264__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__16264__$1);
var G__16272 = cljs.core.chunk_rest.call(null,seq__16264__$1);
var G__16273 = c__6959__auto__;
var G__16274 = cljs.core.count.call(null,c__6959__auto__);
var G__16275 = (0);
seq__16264 = G__16272;
chunk__16265 = G__16273;
count__16266 = G__16274;
i__16267 = G__16275;
continue;
} else {
var ids = cljs.core.first.call(null,seq__16264__$1);
rete4flight.core.delete_link.call(null,ids);

var G__16276 = cljs.core.next.call(null,seq__16264__$1);
var G__16277 = null;
var G__16278 = (0);
var G__16279 = (0);
seq__16264 = G__16276;
chunk__16265 = G__16277;
count__16266 = G__16278;
i__16267 = G__16279;
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
var args16280 = [];
var len__7214__auto___16300 = arguments.length;
var i__7215__auto___16301 = (0);
while(true){
if((i__7215__auto___16301 < len__7214__auto___16300)){
args16280.push((arguments[i__7215__auto___16301]));

var G__16302 = (i__7215__auto___16301 + (1));
i__7215__auto___16301 = G__16302;
continue;
} else {
}
break;
}

var G__16282 = args16280.length;
switch (G__16282) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16280.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__16283 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__16283,(0),null);
var lon = cljs.core.nth.call(null,vec__16283,(1),null);
return rete4flight.core.add_popup.call(null,lat,lon,html,time);
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(600),new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(800)], null)).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(pop);

if((time > (0))){
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__,pop){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__,pop){
return (function (state_16290){
var state_val_16291 = (state_16290[(1)]);
if((state_val_16291 === (1))){
var inst_16284 = cljs.core.async.timeout.call(null,time);
var state_16290__$1 = state_16290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16290__$1,(2),inst_16284);
} else {
if((state_val_16291 === (2))){
var inst_16286 = (state_16290[(2)]);
var inst_16287 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_16288 = inst_16287.removeLayer(pop);
var state_16290__$1 = (function (){var statearr_16292 = state_16290;
(statearr_16292[(7)] = inst_16286);

return statearr_16292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16290__$1,inst_16288);
} else {
return null;
}
}
});})(c__13279__auto__,pop))
;
return ((function (switch__13167__auto__,c__13279__auto__,pop){
return (function() {
var rete4flight$core$state_machine__13168__auto__ = null;
var rete4flight$core$state_machine__13168__auto____0 = (function (){
var statearr_16296 = [null,null,null,null,null,null,null,null];
(statearr_16296[(0)] = rete4flight$core$state_machine__13168__auto__);

(statearr_16296[(1)] = (1));

return statearr_16296;
});
var rete4flight$core$state_machine__13168__auto____1 = (function (state_16290){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_16290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e16297){if((e16297 instanceof Object)){
var ex__13171__auto__ = e16297;
var statearr_16298_16304 = state_16290;
(statearr_16298_16304[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16305 = state_16290;
state_16290 = G__16305;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
rete4flight$core$state_machine__13168__auto__ = function(state_16290){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__13168__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__13168__auto____1.call(this,state_16290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__13168__auto____0;
rete4flight$core$state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__13168__auto____1;
return rete4flight$core$state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__,pop))
})();
var state__13281__auto__ = (function (){var statearr_16299 = f__13280__auto__.call(null);
(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_16299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__,pop))
);

return c__13279__auto__;
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
var c__13279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13279__auto__,side,crs){
return (function (){
var f__13280__auto__ = (function (){var switch__13167__auto__ = ((function (c__13279__auto__,side,crs){
return (function (state_16382){
var state_val_16383 = (state_16382[(1)]);
if((state_val_16383 === (7))){
var inst_16355 = (state_16382[(7)]);
var inst_16365 = (inst_16355 - (4));
var inst_16366 = rete4flight.core.set_course_BANG_.call(null,id,inst_16365);
var state_16382__$1 = state_16382;
var statearr_16384_16404 = state_16382__$1;
(statearr_16384_16404[(2)] = inst_16366);

(statearr_16384_16404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (1))){
var inst_16355 = crs;
var state_16382__$1 = (function (){var statearr_16385 = state_16382;
(statearr_16385[(7)] = inst_16355);

return statearr_16385;
})();
var statearr_16386_16405 = state_16382__$1;
(statearr_16386_16405[(2)] = null);

(statearr_16386_16405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (4))){
var inst_16361 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_16382__$1 = state_16382;
var statearr_16387_16406 = state_16382__$1;
(statearr_16387_16406[(2)] = inst_16361);

(statearr_16387_16406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (6))){
var inst_16378 = (state_16382[(2)]);
var state_16382__$1 = state_16382;
var statearr_16388_16407 = state_16382__$1;
(statearr_16388_16407[(2)] = inst_16378);

(statearr_16388_16407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (3))){
var inst_16380 = (state_16382[(2)]);
var state_16382__$1 = state_16382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16382__$1,inst_16380);
} else {
if((state_val_16383 === (2))){
var inst_16355 = (state_16382[(7)]);
var inst_16357 = (inst_16355 - on_course);
var inst_16358 = Math.abs(inst_16357);
var inst_16359 = (inst_16358 < (4));
var state_16382__$1 = state_16382;
if(cljs.core.truth_(inst_16359)){
var statearr_16389_16408 = state_16382__$1;
(statearr_16389_16408[(1)] = (4));

} else {
var statearr_16390_16409 = state_16382__$1;
(statearr_16390_16409[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (9))){
var inst_16371 = (state_16382[(2)]);
var inst_16372 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_16382__$1 = (function (){var statearr_16391 = state_16382;
(statearr_16391[(8)] = inst_16371);

return statearr_16391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16382__$1,(10),inst_16372);
} else {
if((state_val_16383 === (5))){
var inst_16363 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_16382__$1 = state_16382;
if(inst_16363){
var statearr_16392_16410 = state_16382__$1;
(statearr_16392_16410[(1)] = (7));

} else {
var statearr_16393_16411 = state_16382__$1;
(statearr_16393_16411[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (10))){
var inst_16374 = (state_16382[(2)]);
var inst_16375 = rete4flight.core.course.call(null,id);
var inst_16355 = inst_16375;
var state_16382__$1 = (function (){var statearr_16394 = state_16382;
(statearr_16394[(7)] = inst_16355);

(statearr_16394[(9)] = inst_16374);

return statearr_16394;
})();
var statearr_16395_16412 = state_16382__$1;
(statearr_16395_16412[(2)] = null);

(statearr_16395_16412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16383 === (8))){
var inst_16355 = (state_16382[(7)]);
var inst_16368 = (inst_16355 + (4));
var inst_16369 = rete4flight.core.set_course_BANG_.call(null,id,inst_16368);
var state_16382__$1 = state_16382;
var statearr_16396_16413 = state_16382__$1;
(statearr_16396_16413[(2)] = inst_16369);

(statearr_16396_16413[(1)] = (9));


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
});})(c__13279__auto__,side,crs))
;
return ((function (switch__13167__auto__,c__13279__auto__,side,crs){
return (function() {
var rete4flight$core$turn_$_state_machine__13168__auto__ = null;
var rete4flight$core$turn_$_state_machine__13168__auto____0 = (function (){
var statearr_16400 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16400[(0)] = rete4flight$core$turn_$_state_machine__13168__auto__);

(statearr_16400[(1)] = (1));

return statearr_16400;
});
var rete4flight$core$turn_$_state_machine__13168__auto____1 = (function (state_16382){
while(true){
var ret_value__13169__auto__ = (function (){try{while(true){
var result__13170__auto__ = switch__13167__auto__.call(null,state_16382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13170__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13170__auto__;
}
break;
}
}catch (e16401){if((e16401 instanceof Object)){
var ex__13171__auto__ = e16401;
var statearr_16402_16414 = state_16382;
(statearr_16402_16414[(5)] = ex__13171__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13169__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16415 = state_16382;
state_16382 = G__16415;
continue;
} else {
return ret_value__13169__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__13168__auto__ = function(state_16382){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__13168__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__13168__auto____1.call(this,state_16382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__13168__auto____0;
rete4flight$core$turn_$_state_machine__13168__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__13168__auto____1;
return rete4flight$core$turn_$_state_machine__13168__auto__;
})()
;})(switch__13167__auto__,c__13279__auto__,side,crs))
})();
var state__13281__auto__ = (function (){var statearr_16403 = f__13280__auto__.call(null);
(statearr_16403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13279__auto__);

return statearr_16403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13281__auto__);
});})(c__13279__auto__,side,crs))
);

return c__13279__auto__;
} else {
return null;
}
});
rete4flight.core.event_handler = (function rete4flight$core$event_handler(response){
var seq__16462 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__16463 = null;
var count__16464 = (0);
var i__16465 = (0);
while(true){
if((i__16465 < count__16464)){
var map__16466 = cljs.core._nth.call(null,chunk__16463,i__16465);
var map__16466__$1 = ((((!((map__16466 == null)))?((((map__16466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16466):map__16466);
var evt = map__16466__$1;
var event = cljs.core.get.call(null,map__16466__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__16468_16508 = cljs.core._EQ_;
var expr__16469_16509 = event;
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__16469_16509))){
var map__16471_16510 = evt;
var map__16471_16511__$1 = ((((!((map__16471_16510 == null)))?((((map__16471_16510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16471_16510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16471_16510):map__16471_16510);
var id_16512 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_16513 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_16514 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_16515 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_16516 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_16517 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_16518 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_16519 = cljs.core.get.call(null,map__16471_16511__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_16512,callsign_16513,lat_16514,lon_16515,crs_16516,spd_16517,alt_16518,state_16519);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__16469_16509))){
var map__16473_16520 = evt;
var map__16473_16521__$1 = ((((!((map__16473_16520 == null)))?((((map__16473_16520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16473_16520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16473_16520):map__16473_16520);
var id_16522 = cljs.core.get.call(null,map__16473_16521__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_16522);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__16469_16509))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__16469_16509))){
var map__16475_16523 = evt;
var map__16475_16524__$1 = ((((!((map__16475_16523 == null)))?((((map__16475_16523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16475_16523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16475_16523):map__16475_16523);
var ids_16525 = cljs.core.get.call(null,map__16475_16524__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_16526 = cljs.core.get.call(null,map__16475_16524__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_16525,options_16526);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__16469_16509))){
var map__16477_16527 = evt;
var map__16477_16528__$1 = ((((!((map__16477_16527 == null)))?((((map__16477_16527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16477_16527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16477_16527):map__16477_16527);
var ids_16529 = cljs.core.get.call(null,map__16477_16528__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_16529);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__16469_16509))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__16469_16509))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__16469_16509))){
var map__16479_16530 = evt;
var map__16479_16531__$1 = ((((!((map__16479_16530 == null)))?((((map__16479_16530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16479_16530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16479_16530):map__16479_16530);
var id_16532 = cljs.core.get.call(null,map__16479_16531__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_16533 = cljs.core.get.call(null,map__16479_16531__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_16534 = cljs.core.get.call(null,map__16479_16531__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_16535 = cljs.core.get.call(null,map__16479_16531__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_16536 = cljs.core.get.call(null,map__16479_16531__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_16532)){
rete4flight.core.add_popup.call(null,id_16532,html_16535,time_16536);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_16533;
if(cljs.core.truth_(and__6144__auto__)){
return lon_16534;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_16533,lon_16534,html_16535,time_16536);
} else {
}
}
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__16469_16509))){
var map__16481_16537 = evt;
var map__16481_16538__$1 = ((((!((map__16481_16537 == null)))?((((map__16481_16537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16481_16537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16481_16537):map__16481_16537);
var id_16539 = cljs.core.get.call(null,map__16481_16538__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_16540 = cljs.core.get.call(null,map__16481_16538__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_16541 = cljs.core.get.call(null,map__16481_16538__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_16542 = cljs.core.get.call(null,map__16481_16538__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_16539,lla_16540,options_16541,time_16542);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__16469_16509))){
var map__16483_16543 = evt;
var map__16483_16544__$1 = ((((!((map__16483_16543 == null)))?((((map__16483_16543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16483_16543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16483_16543):map__16483_16543);
var lat_16545 = cljs.core.get.call(null,map__16483_16544__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_16546 = cljs.core.get.call(null,map__16483_16544__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_16545,lon_16546);
} else {
if(cljs.core.truth_(pred__16468_16508.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__16469_16509))){
var map__16485_16547 = evt;
var map__16485_16548__$1 = ((((!((map__16485_16547 == null)))?((((map__16485_16547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16485_16547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16485_16547):map__16485_16547);
var id_16549 = cljs.core.get.call(null,map__16485_16548__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_16550 = cljs.core.get.call(null,map__16485_16548__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_16549,on_course_16550);
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

var G__16551 = seq__16462;
var G__16552 = chunk__16463;
var G__16553 = count__16464;
var G__16554 = (i__16465 + (1));
seq__16462 = G__16551;
chunk__16463 = G__16552;
count__16464 = G__16553;
i__16465 = G__16554;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16462);
if(temp__4657__auto__){
var seq__16462__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16462__$1)){
var c__6959__auto__ = cljs.core.chunk_first.call(null,seq__16462__$1);
var G__16555 = cljs.core.chunk_rest.call(null,seq__16462__$1);
var G__16556 = c__6959__auto__;
var G__16557 = cljs.core.count.call(null,c__6959__auto__);
var G__16558 = (0);
seq__16462 = G__16555;
chunk__16463 = G__16556;
count__16464 = G__16557;
i__16465 = G__16558;
continue;
} else {
var map__16487 = cljs.core.first.call(null,seq__16462__$1);
var map__16487__$1 = ((((!((map__16487 == null)))?((((map__16487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16487):map__16487);
var evt = map__16487__$1;
var event = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__16489_16559 = cljs.core._EQ_;
var expr__16490_16560 = event;
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__16490_16560))){
var map__16492_16561 = evt;
var map__16492_16562__$1 = ((((!((map__16492_16561 == null)))?((((map__16492_16561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16492_16561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16492_16561):map__16492_16561);
var id_16563 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_16564 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_16565 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_16566 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_16567 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_16568 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_16569 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_16570 = cljs.core.get.call(null,map__16492_16562__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_16563,callsign_16564,lat_16565,lon_16566,crs_16567,spd_16568,alt_16569,state_16570);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__16490_16560))){
var map__16494_16571 = evt;
var map__16494_16572__$1 = ((((!((map__16494_16571 == null)))?((((map__16494_16571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16494_16571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16494_16571):map__16494_16571);
var id_16573 = cljs.core.get.call(null,map__16494_16572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_16573);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__16490_16560))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__16490_16560))){
var map__16496_16574 = evt;
var map__16496_16575__$1 = ((((!((map__16496_16574 == null)))?((((map__16496_16574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16496_16574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16496_16574):map__16496_16574);
var ids_16576 = cljs.core.get.call(null,map__16496_16575__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_16577 = cljs.core.get.call(null,map__16496_16575__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_16576,options_16577);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__16490_16560))){
var map__16498_16578 = evt;
var map__16498_16579__$1 = ((((!((map__16498_16578 == null)))?((((map__16498_16578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16498_16578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16498_16578):map__16498_16578);
var ids_16580 = cljs.core.get.call(null,map__16498_16579__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_16580);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__16490_16560))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__16490_16560))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__16490_16560))){
var map__16500_16581 = evt;
var map__16500_16582__$1 = ((((!((map__16500_16581 == null)))?((((map__16500_16581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16500_16581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16500_16581):map__16500_16581);
var id_16583 = cljs.core.get.call(null,map__16500_16582__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_16584 = cljs.core.get.call(null,map__16500_16582__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_16585 = cljs.core.get.call(null,map__16500_16582__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_16586 = cljs.core.get.call(null,map__16500_16582__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_16587 = cljs.core.get.call(null,map__16500_16582__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_16583)){
rete4flight.core.add_popup.call(null,id_16583,html_16586,time_16587);
} else {
if(cljs.core.truth_((function (){var and__6144__auto__ = lat_16584;
if(cljs.core.truth_(and__6144__auto__)){
return lon_16585;
} else {
return and__6144__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_16584,lon_16585,html_16586,time_16587);
} else {
}
}
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__16490_16560))){
var map__16502_16588 = evt;
var map__16502_16589__$1 = ((((!((map__16502_16588 == null)))?((((map__16502_16588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16502_16588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16502_16588):map__16502_16588);
var id_16590 = cljs.core.get.call(null,map__16502_16589__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_16591 = cljs.core.get.call(null,map__16502_16589__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_16592 = cljs.core.get.call(null,map__16502_16589__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_16593 = cljs.core.get.call(null,map__16502_16589__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_16590,lla_16591,options_16592,time_16593);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__16490_16560))){
var map__16504_16594 = evt;
var map__16504_16595__$1 = ((((!((map__16504_16594 == null)))?((((map__16504_16594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16504_16594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16504_16594):map__16504_16594);
var lat_16596 = cljs.core.get.call(null,map__16504_16595__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_16597 = cljs.core.get.call(null,map__16504_16595__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_16596,lon_16597);
} else {
if(cljs.core.truth_(pred__16489_16559.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__16490_16560))){
var map__16506_16598 = evt;
var map__16506_16599__$1 = ((((!((map__16506_16598 == null)))?((((map__16506_16598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16506_16598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16506_16598):map__16506_16598);
var id_16600 = cljs.core.get.call(null,map__16506_16599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_16601 = cljs.core.get.call(null,map__16506_16599__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_16600,on_course_16601);
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

var G__16602 = cljs.core.next.call(null,seq__16462__$1);
var G__16603 = null;
var G__16604 = (0);
var G__16605 = (0);
seq__16462 = G__16602;
chunk__16463 = G__16603;
count__16464 = G__16604;
i__16465 = G__16605;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__16606){
var map__16609 = p__16606;
var map__16609__$1 = ((((!((map__16609 == null)))?((((map__16609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16609):map__16609);
var status = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
rete4flight.core.CAMERA = new cljs.core.Keyword(null,"off","off",606440789);
rete4flight.core.camera_show = (function rete4flight$core$camera_show(){
rete4flight.core.set_html_BANG_.call(null,"camera","<h4>Camera</h4>");

rete4flight.core.set_html_BANG_.call(null,"onboard","Onboard:");

rete4flight.core.set_html_BANG_.call(null,"onboard-fld",[cljs.core.str("<input value='callsign' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.camonb(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"heading","Heading:");

rete4flight.core.set_html_BANG_.call(null,"heading-fld","<select onchange='javascript:rete4flight.core.camhea(this.value)'>\n             <option value='FORWARD'>FORWARD</option>\n             <option value='BACKWARD'>BACKWARD</option>\n             <option value='RIGHT'>RIGHT</option>\n             <option value='LEFT'>LEFT</option>\n             <option value='UP'>UP</option>\n             <option value='DOWN'>DOWN</option>\n             </select>");

rete4flight.core.set_html_BANG_.call(null,"pitch","Pitch:");

rete4flight.core.set_html_BANG_.call(null,"pitch-fld",[cljs.core.str("<input value='-15' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.campit(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"roll","Roll:");

return rete4flight.core.set_html_BANG_.call(null,"roll-fld",[cljs.core.str("<input value='0' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.camrol(this.value)'>")].join(''));
});
rete4flight.core.camera_hide = (function rete4flight$core$camera_hide(){
rete4flight.core.set_html_BANG_.call(null,"camera","");

rete4flight.core.set_html_BANG_.call(null,"onboard","");

rete4flight.core.set_html_BANG_.call(null,"onboard-fld","");

rete4flight.core.set_html_BANG_.call(null,"heading","");

rete4flight.core.set_html_BANG_.call(null,"heading-fld","");

rete4flight.core.set_html_BANG_.call(null,"pitch","");

rete4flight.core.set_html_BANG_.call(null,"pitch-fld","");

rete4flight.core.set_html_BANG_.call(null,"roll","");

return rete4flight.core.set_html_BANG_.call(null,"roll-fld","");
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
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
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
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_hour_$_iter__16615(s__16616){
return (new cljs.core.LazySeq(null,(function (){
var s__16616__$1 = s__16616;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16616__$1);
if(temp__4657__auto__){
var s__16616__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16616__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16616__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16618 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16617 = (0);
while(true){
if((i__16617 < size__6927__auto__)){
var hour = cljs.core._nth.call(null,c__6926__auto__,i__16617);
cljs.core.chunk_append.call(null,b__16618,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__16619 = (i__16617 + (1));
i__16617 = G__16619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16618),rete4flight$core$sel_hour_$_iter__16615.call(null,cljs.core.chunk_rest.call(null,s__16616__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16618),null);
}
} else {
var hour = cljs.core.first.call(null,s__16616__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__16615.call(null,cljs.core.rest.call(null,s__16616__$2)));
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
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_minute_$_iter__16624(s__16625){
return (new cljs.core.LazySeq(null,(function (){
var s__16625__$1 = s__16625;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16625__$1);
if(temp__4657__auto__){
var s__16625__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16625__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16625__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16627 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16626 = (0);
while(true){
if((i__16626 < size__6927__auto__)){
var min = cljs.core._nth.call(null,c__6926__auto__,i__16626);
cljs.core.chunk_append.call(null,b__16627,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__16628 = (i__16626 + (1));
i__16626 = G__16628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16627),rete4flight$core$sel_minute_$_iter__16624.call(null,cljs.core.chunk_rest.call(null,s__16625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16627),null);
}
} else {
var min = cljs.core.first.call(null,s__16625__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__16624.call(null,cljs.core.rest.call(null,s__16625__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_from_country_$_iter__16633(s__16634){
return (new cljs.core.LazySeq(null,(function (){
var s__16634__$1 = s__16634;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16634__$1);
if(temp__4657__auto__){
var s__16634__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16634__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16634__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16636 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16635 = (0);
while(true){
if((i__16635 < size__6927__auto__)){
var contry = cljs.core._nth.call(null,c__6926__auto__,i__16635);
cljs.core.chunk_append.call(null,b__16636,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__16637 = (i__16635 + (1));
i__16635 = G__16637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16636),rete4flight$core$sel_from_country_$_iter__16633.call(null,cljs.core.chunk_rest.call(null,s__16634__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16636),null);
}
} else {
var contry = cljs.core.first.call(null,s__16634__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__16633.call(null,cljs.core.rest.call(null,s__16634__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_from_airport_$_iter__16642(s__16643){
return (new cljs.core.LazySeq(null,(function (){
var s__16643__$1 = s__16643;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16643__$1);
if(temp__4657__auto__){
var s__16643__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16643__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16643__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16645 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16644 = (0);
while(true){
if((i__16644 < size__6927__auto__)){
var airport = cljs.core._nth.call(null,c__6926__auto__,i__16644);
cljs.core.chunk_append.call(null,b__16645,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__16646 = (i__16644 + (1));
i__16644 = G__16646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16645),rete4flight$core$sel_from_airport_$_iter__16642.call(null,cljs.core.chunk_rest.call(null,s__16643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16645),null);
}
} else {
var airport = cljs.core.first.call(null,s__16643__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__16642.call(null,cljs.core.rest.call(null,s__16643__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_to_country_$_iter__16651(s__16652){
return (new cljs.core.LazySeq(null,(function (){
var s__16652__$1 = s__16652;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16652__$1);
if(temp__4657__auto__){
var s__16652__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16652__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16652__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16654 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16653 = (0);
while(true){
if((i__16653 < size__6927__auto__)){
var contry = cljs.core._nth.call(null,c__6926__auto__,i__16653);
cljs.core.chunk_append.call(null,b__16654,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__16655 = (i__16653 + (1));
i__16653 = G__16655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16654),rete4flight$core$sel_to_country_$_iter__16651.call(null,cljs.core.chunk_rest.call(null,s__16652__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16654),null);
}
} else {
var contry = cljs.core.first.call(null,s__16652__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__16651.call(null,cljs.core.rest.call(null,s__16652__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6928__auto__ = (function rete4flight$core$sel_to_airport_$_iter__16660(s__16661){
return (new cljs.core.LazySeq(null,(function (){
var s__16661__$1 = s__16661;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16661__$1);
if(temp__4657__auto__){
var s__16661__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16661__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16661__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16663 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16662 = (0);
while(true){
if((i__16662 < size__6927__auto__)){
var airport = cljs.core._nth.call(null,c__6926__auto__,i__16662);
cljs.core.chunk_append.call(null,b__16663,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__16664 = (i__16662 + (1));
i__16662 = G__16664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16663),rete4flight$core$sel_to_airport_$_iter__16660.call(null,cljs.core.chunk_rest.call(null,s__16661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16663),null);
}
} else {
var airport = cljs.core.first.call(null,s__16661__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__16660.call(null,cljs.core.rest.call(null,s__16661__$2)));
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
var vec__16666 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__16666,(0),null);
var s = cljs.core.nth.call(null,vec__16666,(1),null);
var w = cljs.core.nth.call(null,vec__16666,(2),null);
var e = cljs.core.nth.call(null,vec__16666,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__16668 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__16668,(0),null);
var s = cljs.core.nth.call(null,vec__16668,(1),null);
var w = cljs.core.nth.call(null,vec__16668,(2),null);
var e = cljs.core.nth.call(null,vec__16668,(3),null);
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
rete4flight.core.COMMANDS = "<select onchange='javascript:rete4flight.core.commands(this.value)'>\n  \t\t\t<option value='commands'>Commands</option>\n  \t\t\t<option value='watch-visible'>Watch visible area</option>\n  \t\t\t<option value='flight-states'>State of flights</option>\n  \t\t\t<option value='intersect'>Intersections</option>\n  \t\t\t<option value='move-to'>Move to Airport</option>\n  \t\t\t<option value='schedule'>Schedule Flight</option>\n  \t\t\t<option value='camera'>Camera</option>\n  \t\t\t<option value='clear'>Clear</option>\n\t\t</select>";
rete4flight.core.commands = (function rete4flight$core$commands(func){
var pred__16672_16675 = cljs.core._EQ_;
var expr__16673_16676 = func;
if(cljs.core.truth_(pred__16672_16675.call(null,"watch-visible",expr__16673_16676))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__16672_16675.call(null,"flight-states",expr__16673_16676))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__16672_16675.call(null,"intersect",expr__16673_16676))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__16672_16675.call(null,"clear",expr__16673_16676))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__16672_16675.call(null,"move-to",expr__16673_16676))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__16672_16675.call(null,"schedule",expr__16673_16676))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__16672_16675.call(null,"camera",expr__16673_16676))){
rete4flight.core.camera.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__16673_16676)].join('')));
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
return (function rete4flight$core$remote_call_$_iter__16685(s__16686){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__16686__$1 = s__16686;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__16686__$1);
if(temp__4657__auto__){
var s__16686__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16686__$2)){
var c__6926__auto__ = cljs.core.chunk_first.call(null,s__16686__$2);
var size__6927__auto__ = cljs.core.count.call(null,c__6926__auto__);
var b__16688 = cljs.core.chunk_buffer.call(null,size__6927__auto__);
if((function (){var i__16687 = (0);
while(true){
if((i__16687 < size__6927__auto__)){
var vec__16691 = cljs.core._nth.call(null,c__6926__auto__,i__16687);
var f = cljs.core.nth.call(null,vec__16691,(0),null);
var k = cljs.core.nth.call(null,vec__16691,(1),null);
cljs.core.chunk_append.call(null,b__16688,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__16693 = (i__16687 + (1));
i__16687 = G__16693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16688),rete4flight$core$remote_call_$_iter__16685.call(null,cljs.core.chunk_rest.call(null,s__16686__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16688),null);
}
} else {
var vec__16692 = cljs.core.first.call(null,s__16686__$2);
var f = cljs.core.nth.call(null,vec__16692,(0),null);
var k = cljs.core.nth.call(null,vec__16692,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__16685.call(null,cljs.core.rest.call(null,s__16686__$2)));
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

// Compiled by ClojureScript 1.9.225 {}
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
rete4flight.core.placemarks = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentVector.EMPTY);
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
rete4flight.core.URL_ICO = new cljs.core.PersistentArrayMap(null, 7, ["INTERSECT","http://localhost:3000/img/redpln32.png","DESCEND","http://localhost:3000/img/greenpln32.png","CLIMB","http://localhost:3000/img/bluepln32.png","LEVEL","http://localhost:3000/img/purplepln32.png","GROUND","http://localhost:3000/img/greypln32.png","landmark","http://localhost:3000/img/landmark.png","city","http://localhost:3000/img/city.png"], null);
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
var args__6826__auto__ = [];
var len__6819__auto___11671 = arguments.length;
var i__6820__auto___11672 = (0);
while(true){
if((i__6820__auto___11672 < len__6819__auto___11671)){
args__6826__auto__.push((arguments[i__6820__auto___11672]));

var G__11673 = (i__6820__auto___11672 + (1));
i__6820__auto___11672 = G__11673;
continue;
} else {
}
break;
}

var argseq__6827__auto__ = ((((1) < args__6826__auto__.length))?(new cljs.core.IndexedSeq(args__6826__auto__.slice((1)),(0),null)):null);
return rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6827__auto__);
});

rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

rete4flight.core.format.cljs$lang$maxFixedArity = (1);

rete4flight.core.format.cljs$lang$applyTo = (function (seq11669){
var G__11670 = cljs.core.first.call(null,seq11669);
var seq11669__$1 = cljs.core.next.call(null,seq11669);
return rete4flight.core.format.cljs$core$IFn$_invoke$arity$variadic(G__11670,seq11669__$1);
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

var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__){
return (function (){
var f__9377__auto__ = (function (){var switch__9311__auto__ = ((function (c__9376__auto__){
return (function (state_11717){
var state_val_11718 = (state_11717[(1)]);
if((state_val_11718 === (1))){
var state_11717__$1 = state_11717;
var statearr_11719_11734 = state_11717__$1;
(statearr_11719_11734[(2)] = null);

(statearr_11719_11734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (2))){
var state_11717__$1 = state_11717;
var statearr_11720_11735 = state_11717__$1;
(statearr_11720_11735[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (3))){
var inst_11715 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11717__$1,inst_11715);
} else {
if((state_val_11718 === (4))){
var inst_11706 = task.call(null);
var inst_11707 = cljs.core.async.timeout.call(null,timo);
var state_11717__$1 = (function (){var statearr_11722 = state_11717;
(statearr_11722[(7)] = inst_11706);

return statearr_11722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11717__$1,(7),inst_11707);
} else {
if((state_val_11718 === (5))){
var state_11717__$1 = state_11717;
var statearr_11723_11736 = state_11717__$1;
(statearr_11723_11736[(2)] = null);

(statearr_11723_11736[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (6))){
var inst_11713 = (state_11717[(2)]);
var state_11717__$1 = state_11717;
var statearr_11724_11737 = state_11717__$1;
(statearr_11724_11737[(2)] = inst_11713);

(statearr_11724_11737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11718 === (7))){
var inst_11709 = (state_11717[(2)]);
var state_11717__$1 = (function (){var statearr_11725 = state_11717;
(statearr_11725[(8)] = inst_11709);

return statearr_11725;
})();
var statearr_11726_11738 = state_11717__$1;
(statearr_11726_11738[(2)] = null);

(statearr_11726_11738[(1)] = (2));


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
});})(c__9376__auto__))
;
return ((function (switch__9311__auto__,c__9376__auto__){
return (function() {
var rete4flight$core$repeater_$_state_machine__9312__auto__ = null;
var rete4flight$core$repeater_$_state_machine__9312__auto____0 = (function (){
var statearr_11730 = [null,null,null,null,null,null,null,null,null];
(statearr_11730[(0)] = rete4flight$core$repeater_$_state_machine__9312__auto__);

(statearr_11730[(1)] = (1));

return statearr_11730;
});
var rete4flight$core$repeater_$_state_machine__9312__auto____1 = (function (state_11717){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11731){if((e11731 instanceof Object)){
var ex__9315__auto__ = e11731;
var statearr_11732_11739 = state_11717;
(statearr_11732_11739[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11740 = state_11717;
state_11717 = G__11740;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$repeater_$_state_machine__9312__auto__ = function(state_11717){
switch(arguments.length){
case 0:
return rete4flight$core$repeater_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$repeater_$_state_machine__9312__auto____1.call(this,state_11717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$repeater_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$repeater_$_state_machine__9312__auto____0;
rete4flight$core$repeater_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$repeater_$_state_machine__9312__auto____1;
return rete4flight$core$repeater_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__))
})();
var state__9378__auto__ = (function (){var statearr_11733 = f__9377__auto__.call(null);
(statearr_11733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__))
);

return c__9376__auto__;
});
rete4flight.core.create_marker = (function rete4flight$core$create_marker(lat,lon,sta){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": rete4flight.core.URL_ICO.call(null,sta), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
return mk;
});
rete4flight.core.create_pm_marker = (function rete4flight$core$create_pm_marker(lat,lon,sta){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": rete4flight.core.URL_ICO.call(null,sta), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
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
var vec__11744 = rete4flight.core.spherical_between.call(null,phi,lam,way,dir);
var phi2 = cljs.core.nth.call(null,vec__11744,(0),null);
var lam2 = cljs.core.nth.call(null,vec__11744,(1),null);
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
rete4flight.core.placemarkPopup = (function rete4flight$core$placemarkPopup(id,title,alt,lat,lon,sta){
return [cljs.core.str("<h3>"),cljs.core.str(title),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>altitude</td><td>"),cljs.core.str(alt),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>latitude</td><td>"),cljs.core.str(lat),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>longitude</td><td>"),cljs.core.str(lon),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>state</td><td>"),cljs.core.str(sta),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:green' value='Inform'\n                 onclick='rete4flight.core.info(\""),cljs.core.str(id),cljs.core.str("\")' ></td>"),cljs.core.str("</table>")].join('');
});
rete4flight.core.mapobPopup = (function rete4flight$core$mapobPopup(id,callsign,alt,lat,lon,crs,spd,sta){
return [cljs.core.str("<h3>"),cljs.core.str(callsign),cljs.core.str("</h3>"),cljs.core.str("<table>"),cljs.core.str("<tr><td>id</td><td>"),cljs.core.str(id),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>altitude</td><td>"),cljs.core.str(alt),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>latitude</td><td>"),cljs.core.str(lat),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>longitude</td><td>"),cljs.core.str(lon),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>course</td><td>"),cljs.core.str(crs),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>speed</td><td>"),cljs.core.str(spd),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td>state</td><td>"),cljs.core.str(sta),cljs.core.str("</td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:green' value='Inform'\n                 onclick='rete4flight.core.info(\""),cljs.core.str(id),cljs.core.str("\")' ></td>\n            <td><input type='button' style='color:purple' value='Trail'\n                 onclick='rete4flight.core.trail(\""),cljs.core.str(id),cljs.core.str("\")' ></td></tr>"),cljs.core.str("<tr><td><input type='button' style='color:blue' value='Follow'\n                 onclick='rete4flight.core.follow(\""),cljs.core.str(id),cljs.core.str("\")' ></td>\n            <td><input type='button' style='color:red' value='Stop'\n                 onclick='rete4flight.core.stopfollow()' ></td></tr>"),cljs.core.str("</table>")].join('');
});
rete4flight.core.delete_mapob = (function rete4flight$core$delete_mapob(id){
var temp__4657__auto__ = cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var mob = temp__4657__auto__;
var temp__4655__auto___11747 = mob.call(null,new cljs.core.Keyword(null,"mover","mover",935114769));
if(cljs.core.truth_(temp__4655__auto___11747)){
var mvr_11748 = temp__4655__auto___11747;
cljs.core.async.close_BANG_.call(null,mvr_11748);
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
var seq__11753 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs)));
var chunk__11754 = null;
var count__11755 = (0);
var i__11756 = (0);
while(true){
if((i__11756 < count__11755)){
var id = cljs.core._nth.call(null,chunk__11754,i__11756);
rete4flight.core.delete_mapob.call(null,id);

var G__11757 = seq__11753;
var G__11758 = chunk__11754;
var G__11759 = count__11755;
var G__11760 = (i__11756 + (1));
seq__11753 = G__11757;
chunk__11754 = G__11758;
count__11755 = G__11759;
i__11756 = G__11760;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11753);
if(temp__4657__auto__){
var seq__11753__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11753__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11753__$1);
var G__11761 = cljs.core.chunk_rest.call(null,seq__11753__$1);
var G__11762 = c__6555__auto__;
var G__11763 = cljs.core.count.call(null,c__6555__auto__);
var G__11764 = (0);
seq__11753 = G__11761;
chunk__11754 = G__11762;
count__11755 = G__11763;
i__11756 = G__11764;
continue;
} else {
var id = cljs.core.first.call(null,seq__11753__$1);
rete4flight.core.delete_mapob.call(null,id);

var G__11765 = cljs.core.next.call(null,seq__11753__$1);
var G__11766 = null;
var G__11767 = (0);
var G__11768 = (0);
seq__11753 = G__11765;
chunk__11754 = G__11766;
count__11755 = G__11767;
i__11756 = G__11768;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.create_placemark = (function rete4flight$core$create_placemark(id,title,lat,lon,alt,sta){
var mrk = rete4flight.core.create_pm_marker.call(null,lat,lon,sta);
mrk.addTo(cljs.core.deref.call(null,rete4flight.core.chart));

mrk.bindPopup(rete4flight.core.placemarkPopup.call(null,id,title,alt,lat,lon,sta));

return cljs.core._vreset_BANG_.call(null,rete4flight.core.placemarks,cljs.core.conj.call(null,cljs.core._deref.call(null,rete4flight.core.placemarks),mrk));
});
rete4flight.core.clear_placemarks = (function rete4flight$core$clear_placemarks(){
var seq__11773 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.placemarks));
var chunk__11774 = null;
var count__11775 = (0);
var i__11776 = (0);
while(true){
if((i__11776 < count__11775)){
var mrk = cljs.core._nth.call(null,chunk__11774,i__11776);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk);

var G__11777 = seq__11773;
var G__11778 = chunk__11774;
var G__11779 = count__11775;
var G__11780 = (i__11776 + (1));
seq__11773 = G__11777;
chunk__11774 = G__11778;
count__11775 = G__11779;
i__11776 = G__11780;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11773);
if(temp__4657__auto__){
var seq__11773__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11773__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11773__$1);
var G__11781 = cljs.core.chunk_rest.call(null,seq__11773__$1);
var G__11782 = c__6555__auto__;
var G__11783 = cljs.core.count.call(null,c__6555__auto__);
var G__11784 = (0);
seq__11773 = G__11781;
chunk__11774 = G__11782;
count__11775 = G__11783;
i__11776 = G__11784;
continue;
} else {
var mrk = cljs.core.first.call(null,seq__11773__$1);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk);

var G__11785 = cljs.core.next.call(null,seq__11773__$1);
var G__11786 = null;
var G__11787 = (0);
var G__11788 = (0);
seq__11773 = G__11785;
chunk__11774 = G__11786;
count__11775 = G__11787;
i__11776 = G__11788;
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
return (function (p1__11789_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11789_SHARP_),cljs.core.second.call(null,p1__11789_SHARP_)));
});})(ops))
,cljs.core.partition.call(null,(3),lla));
var lle = cljs.core.clj__GT_js.call(null,llg);
var trl = L.polyline(lle,ops);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(trl);

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"id","id",-1388402092)], null),id));

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"trail","trail",-272340561)], null),trl));

cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.trails),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"options","options",99638489)], null),options));

if((time > (0))){
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__,ops,llg,lle,trl){
return (function (){
var f__9377__auto__ = (function (){var switch__9311__auto__ = ((function (c__9376__auto__,ops,llg,lle,trl){
return (function (state_11818){
var state_val_11819 = (state_11818[(1)]);
if((state_val_11819 === (1))){
var inst_11809 = cljs.core.async.timeout.call(null,time);
var state_11818__$1 = state_11818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11818__$1,(2),inst_11809);
} else {
if((state_val_11819 === (2))){
var inst_11811 = (state_11818[(2)]);
var inst_11812 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11813 = inst_11812.removeLayer(trl);
var inst_11814 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_11815 = cljs.core.dissoc.call(null,inst_11814,id);
var inst_11816 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_11815);
var state_11818__$1 = (function (){var statearr_11820 = state_11818;
(statearr_11820[(7)] = inst_11813);

(statearr_11820[(8)] = inst_11811);

return statearr_11820;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11818__$1,inst_11816);
} else {
return null;
}
}
});})(c__9376__auto__,ops,llg,lle,trl))
;
return ((function (switch__9311__auto__,c__9376__auto__,ops,llg,lle,trl){
return (function() {
var rete4flight$core$add_trail_$_state_machine__9312__auto__ = null;
var rete4flight$core$add_trail_$_state_machine__9312__auto____0 = (function (){
var statearr_11824 = [null,null,null,null,null,null,null,null,null];
(statearr_11824[(0)] = rete4flight$core$add_trail_$_state_machine__9312__auto__);

(statearr_11824[(1)] = (1));

return statearr_11824;
});
var rete4flight$core$add_trail_$_state_machine__9312__auto____1 = (function (state_11818){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11825){if((e11825 instanceof Object)){
var ex__9315__auto__ = e11825;
var statearr_11826_11828 = state_11818;
(statearr_11826_11828[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11829 = state_11818;
state_11818 = G__11829;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9312__auto__ = function(state_11818){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9312__auto____1.call(this,state_11818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9312__auto____0;
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9312__auto____1;
return rete4flight$core$add_trail_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,llg,lle,trl))
})();
var state__9378__auto__ = (function (){var statearr_11827 = f__9377__auto__.call(null);
(statearr_11827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__,ops,llg,lle,trl))
);

return c__9376__auto__;
} else {
return null;
}
});
rete4flight.core.collect_llga = (function rete4flight$core$collect_llga(ids){
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__11830_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__11830_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__11831_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__11831_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__11832_SHARP_){
return p1__11832_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__11833,ops){
var vec__11837 = p__11833;
var id1 = cljs.core.nth.call(null,vec__11837,(0),null);
var id2 = cljs.core.nth.call(null,vec__11837,(1),null);
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
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__,ops,tmin,del,llg,lnk){
return (function (){
var f__9377__auto__ = (function (){var switch__9311__auto__ = ((function (c__9376__auto__,ops,tmin,del,llg,lnk){
return (function (state_11868){
var state_val_11869 = (state_11868[(1)]);
if((state_val_11869 === (1))){
var inst_11859 = cljs.core.async.timeout.call(null,del);
var state_11868__$1 = state_11868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11868__$1,(2),inst_11859);
} else {
if((state_val_11869 === (2))){
var inst_11861 = (state_11868[(2)]);
var inst_11862 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11863 = inst_11862.removeLayer(lnk);
var inst_11864 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_11865 = cljs.core.dissoc.call(null,inst_11864,ids);
var inst_11866 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_11865);
var state_11868__$1 = (function (){var statearr_11870 = state_11868;
(statearr_11870[(7)] = inst_11861);

(statearr_11870[(8)] = inst_11863);

return statearr_11870;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11868__$1,inst_11866);
} else {
return null;
}
}
});})(c__9376__auto__,ops,tmin,del,llg,lnk))
;
return ((function (switch__9311__auto__,c__9376__auto__,ops,tmin,del,llg,lnk){
return (function() {
var rete4flight$core$add_link_$_state_machine__9312__auto__ = null;
var rete4flight$core$add_link_$_state_machine__9312__auto____0 = (function (){
var statearr_11874 = [null,null,null,null,null,null,null,null,null];
(statearr_11874[(0)] = rete4flight$core$add_link_$_state_machine__9312__auto__);

(statearr_11874[(1)] = (1));

return statearr_11874;
});
var rete4flight$core$add_link_$_state_machine__9312__auto____1 = (function (state_11868){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11875){if((e11875 instanceof Object)){
var ex__9315__auto__ = e11875;
var statearr_11876_11878 = state_11868;
(statearr_11876_11878[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11879 = state_11868;
state_11868 = G__11879;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9312__auto__ = function(state_11868){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9312__auto____1.call(this,state_11868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9312__auto____0;
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9312__auto____1;
return rete4flight$core$add_link_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,tmin,del,llg,lnk))
})();
var state__9378__auto__ = (function (){var statearr_11877 = f__9377__auto__.call(null);
(statearr_11877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__,ops,tmin,del,llg,lnk))
);

return c__9376__auto__;
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
var seq__11890 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__11891 = null;
var count__11892 = (0);
var i__11893 = (0);
while(true){
if((i__11893 < count__11892)){
var vec__11894 = cljs.core._nth.call(null,chunk__11891,i__11893);
var ids = cljs.core.nth.call(null,vec__11894,(0),null);
var lnk = cljs.core.nth.call(null,vec__11894,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11900 = seq__11890;
var G__11901 = chunk__11891;
var G__11902 = count__11892;
var G__11903 = (i__11893 + (1));
seq__11890 = G__11900;
chunk__11891 = G__11901;
count__11892 = G__11902;
i__11893 = G__11903;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11890);
if(temp__4657__auto__){
var seq__11890__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11890__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11890__$1);
var G__11904 = cljs.core.chunk_rest.call(null,seq__11890__$1);
var G__11905 = c__6555__auto__;
var G__11906 = cljs.core.count.call(null,c__6555__auto__);
var G__11907 = (0);
seq__11890 = G__11904;
chunk__11891 = G__11905;
count__11892 = G__11906;
i__11893 = G__11907;
continue;
} else {
var vec__11897 = cljs.core.first.call(null,seq__11890__$1);
var ids = cljs.core.nth.call(null,vec__11897,(0),null);
var lnk = cljs.core.nth.call(null,vec__11897,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11908 = cljs.core.next.call(null,seq__11890__$1);
var G__11909 = null;
var G__11910 = (0);
var G__11911 = (0);
seq__11890 = G__11908;
chunk__11891 = G__11909;
count__11892 = G__11910;
i__11893 = G__11911;
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
var seq__11916 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__11917 = null;
var count__11918 = (0);
var i__11919 = (0);
while(true){
if((i__11919 < count__11918)){
var ids = cljs.core._nth.call(null,chunk__11917,i__11919);
rete4flight.core.delete_link.call(null,ids);

var G__11920 = seq__11916;
var G__11921 = chunk__11917;
var G__11922 = count__11918;
var G__11923 = (i__11919 + (1));
seq__11916 = G__11920;
chunk__11917 = G__11921;
count__11918 = G__11922;
i__11919 = G__11923;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11916);
if(temp__4657__auto__){
var seq__11916__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11916__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11916__$1);
var G__11924 = cljs.core.chunk_rest.call(null,seq__11916__$1);
var G__11925 = c__6555__auto__;
var G__11926 = cljs.core.count.call(null,c__6555__auto__);
var G__11927 = (0);
seq__11916 = G__11924;
chunk__11917 = G__11925;
count__11918 = G__11926;
i__11919 = G__11927;
continue;
} else {
var ids = cljs.core.first.call(null,seq__11916__$1);
rete4flight.core.delete_link.call(null,ids);

var G__11928 = cljs.core.next.call(null,seq__11916__$1);
var G__11929 = null;
var G__11930 = (0);
var G__11931 = (0);
seq__11916 = G__11928;
chunk__11917 = G__11929;
count__11918 = G__11930;
i__11919 = G__11931;
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
var args11932 = [];
var len__6819__auto___11954 = arguments.length;
var i__6820__auto___11955 = (0);
while(true){
if((i__6820__auto___11955 < len__6819__auto___11954)){
args11932.push((arguments[i__6820__auto___11955]));

var G__11956 = (i__6820__auto___11955 + (1));
i__6820__auto___11955 = G__11956;
continue;
} else {
}
break;
}

var G__11934 = args11932.length;
switch (G__11934) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11932.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__11935 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__11935,(0),null);
var lon = cljs.core.nth.call(null,vec__11935,(1),null);
return rete4flight.core.add_popup.call(null,lat,lon,html,time);
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4 = (function (lat,lon,html,time){
var pop = L.popup(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(600),new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(800)], null)).setLatLng([lat,lon]).setContent(html);
cljs.core.deref.call(null,rete4flight.core.chart).addLayer(pop);

if((time > (0))){
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__,pop){
return (function (){
var f__9377__auto__ = (function (){var switch__9311__auto__ = ((function (c__9376__auto__,pop){
return (function (state_11944){
var state_val_11945 = (state_11944[(1)]);
if((state_val_11945 === (1))){
var inst_11938 = cljs.core.async.timeout.call(null,time);
var state_11944__$1 = state_11944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11944__$1,(2),inst_11938);
} else {
if((state_val_11945 === (2))){
var inst_11940 = (state_11944[(2)]);
var inst_11941 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11942 = inst_11941.removeLayer(pop);
var state_11944__$1 = (function (){var statearr_11946 = state_11944;
(statearr_11946[(7)] = inst_11940);

return statearr_11946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11944__$1,inst_11942);
} else {
return null;
}
}
});})(c__9376__auto__,pop))
;
return ((function (switch__9311__auto__,c__9376__auto__,pop){
return (function() {
var rete4flight$core$state_machine__9312__auto__ = null;
var rete4flight$core$state_machine__9312__auto____0 = (function (){
var statearr_11950 = [null,null,null,null,null,null,null,null];
(statearr_11950[(0)] = rete4flight$core$state_machine__9312__auto__);

(statearr_11950[(1)] = (1));

return statearr_11950;
});
var rete4flight$core$state_machine__9312__auto____1 = (function (state_11944){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11951){if((e11951 instanceof Object)){
var ex__9315__auto__ = e11951;
var statearr_11952_11958 = state_11944;
(statearr_11952_11958[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11959 = state_11944;
state_11944 = G__11959;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$state_machine__9312__auto__ = function(state_11944){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9312__auto____1.call(this,state_11944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9312__auto____0;
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9312__auto____1;
return rete4flight$core$state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,pop))
})();
var state__9378__auto__ = (function (){var statearr_11953 = f__9377__auto__.call(null);
(statearr_11953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__,pop))
);

return c__9376__auto__;
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
var c__9376__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9376__auto__,side,crs){
return (function (){
var f__9377__auto__ = (function (){var switch__9311__auto__ = ((function (c__9376__auto__,side,crs){
return (function (state_12036){
var state_val_12037 = (state_12036[(1)]);
if((state_val_12037 === (7))){
var inst_12009 = (state_12036[(7)]);
var inst_12019 = (inst_12009 - (4));
var inst_12020 = rete4flight.core.set_course_BANG_.call(null,id,inst_12019);
var state_12036__$1 = state_12036;
var statearr_12038_12058 = state_12036__$1;
(statearr_12038_12058[(2)] = inst_12020);

(statearr_12038_12058[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (1))){
var inst_12009 = crs;
var state_12036__$1 = (function (){var statearr_12039 = state_12036;
(statearr_12039[(7)] = inst_12009);

return statearr_12039;
})();
var statearr_12040_12059 = state_12036__$1;
(statearr_12040_12059[(2)] = null);

(statearr_12040_12059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (4))){
var inst_12015 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_12036__$1 = state_12036;
var statearr_12041_12060 = state_12036__$1;
(statearr_12041_12060[(2)] = inst_12015);

(statearr_12041_12060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (6))){
var inst_12032 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
var statearr_12042_12061 = state_12036__$1;
(statearr_12042_12061[(2)] = inst_12032);

(statearr_12042_12061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (3))){
var inst_12034 = (state_12036[(2)]);
var state_12036__$1 = state_12036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12036__$1,inst_12034);
} else {
if((state_val_12037 === (2))){
var inst_12009 = (state_12036[(7)]);
var inst_12011 = (inst_12009 - on_course);
var inst_12012 = Math.abs(inst_12011);
var inst_12013 = (inst_12012 < (4));
var state_12036__$1 = state_12036;
if(cljs.core.truth_(inst_12013)){
var statearr_12043_12062 = state_12036__$1;
(statearr_12043_12062[(1)] = (4));

} else {
var statearr_12044_12063 = state_12036__$1;
(statearr_12044_12063[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (9))){
var inst_12025 = (state_12036[(2)]);
var inst_12026 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_12036__$1 = (function (){var statearr_12045 = state_12036;
(statearr_12045[(8)] = inst_12025);

return statearr_12045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12036__$1,(10),inst_12026);
} else {
if((state_val_12037 === (5))){
var inst_12017 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_12036__$1 = state_12036;
if(inst_12017){
var statearr_12046_12064 = state_12036__$1;
(statearr_12046_12064[(1)] = (7));

} else {
var statearr_12047_12065 = state_12036__$1;
(statearr_12047_12065[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (10))){
var inst_12028 = (state_12036[(2)]);
var inst_12029 = rete4flight.core.course.call(null,id);
var inst_12009 = inst_12029;
var state_12036__$1 = (function (){var statearr_12048 = state_12036;
(statearr_12048[(7)] = inst_12009);

(statearr_12048[(9)] = inst_12028);

return statearr_12048;
})();
var statearr_12049_12066 = state_12036__$1;
(statearr_12049_12066[(2)] = null);

(statearr_12049_12066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12037 === (8))){
var inst_12009 = (state_12036[(7)]);
var inst_12022 = (inst_12009 + (4));
var inst_12023 = rete4flight.core.set_course_BANG_.call(null,id,inst_12022);
var state_12036__$1 = state_12036;
var statearr_12050_12067 = state_12036__$1;
(statearr_12050_12067[(2)] = inst_12023);

(statearr_12050_12067[(1)] = (9));


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
});})(c__9376__auto__,side,crs))
;
return ((function (switch__9311__auto__,c__9376__auto__,side,crs){
return (function() {
var rete4flight$core$turn_$_state_machine__9312__auto__ = null;
var rete4flight$core$turn_$_state_machine__9312__auto____0 = (function (){
var statearr_12054 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12054[(0)] = rete4flight$core$turn_$_state_machine__9312__auto__);

(statearr_12054[(1)] = (1));

return statearr_12054;
});
var rete4flight$core$turn_$_state_machine__9312__auto____1 = (function (state_12036){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_12036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e12055){if((e12055 instanceof Object)){
var ex__9315__auto__ = e12055;
var statearr_12056_12068 = state_12036;
(statearr_12056_12068[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12069 = state_12036;
state_12036 = G__12069;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__9312__auto__ = function(state_12036){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__9312__auto____1.call(this,state_12036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__9312__auto____0;
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__9312__auto____1;
return rete4flight$core$turn_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,side,crs))
})();
var state__9378__auto__ = (function (){var statearr_12057 = f__9377__auto__.call(null);
(statearr_12057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_12057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__,side,crs))
);

return c__9376__auto__;
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
var vec__12073 = temp__4657__auto__;
var lat = cljs.core.nth.call(null,vec__12073,(0),null);
var lon = cljs.core.nth.call(null,vec__12073,(1),null);
var alt = cljs.core.nth.call(null,vec__12073,(2),null);
var crs = cljs.core.nth.call(null,vec__12073,(3),null);
var spd = cljs.core.nth.call(null,vec__12073,(4),null);
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
var seq__12126 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12127 = null;
var count__12128 = (0);
var i__12129 = (0);
while(true){
if((i__12129 < count__12128)){
var map__12130 = cljs.core._nth.call(null,chunk__12127,i__12129);
var map__12130__$1 = ((((!((map__12130 == null)))?((((map__12130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12130):map__12130);
var evt = map__12130__$1;
var event = cljs.core.get.call(null,map__12130__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENT","EVENT",449814061),evt], null));

var pred__12132_12176 = cljs.core._EQ_;
var expr__12133_12177 = event;
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12133_12177))){
var map__12135_12178 = evt;
var map__12135_12179__$1 = ((((!((map__12135_12178 == null)))?((((map__12135_12178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12135_12178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12135_12178):map__12135_12178);
var id_12180 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12181 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12182 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12183 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12184 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12185 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12186 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12187 = cljs.core.get.call(null,map__12135_12179__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12180,callsign_12181,lat_12182,lon_12183,crs_12184,spd_12185,alt_12186,state_12187);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12133_12177))){
var map__12137_12188 = evt;
var map__12137_12189__$1 = ((((!((map__12137_12188 == null)))?((((map__12137_12188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12137_12188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12137_12188):map__12137_12188);
var id_12190 = cljs.core.get.call(null,map__12137_12189__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12190);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12133_12177))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12133_12177))){
var map__12139_12191 = evt;
var map__12139_12192__$1 = ((((!((map__12139_12191 == null)))?((((map__12139_12191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12139_12191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12139_12191):map__12139_12191);
var ids_12193 = cljs.core.get.call(null,map__12139_12192__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12194 = cljs.core.get.call(null,map__12139_12192__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12193,options_12194);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12133_12177))){
var map__12141_12195 = evt;
var map__12141_12196__$1 = ((((!((map__12141_12195 == null)))?((((map__12141_12195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12141_12195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12141_12195):map__12141_12195);
var ids_12197 = cljs.core.get.call(null,map__12141_12196__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12197);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12133_12177))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12133_12177))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12133_12177))){
var map__12143_12198 = evt;
var map__12143_12199__$1 = ((((!((map__12143_12198 == null)))?((((map__12143_12198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12143_12198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12143_12198):map__12143_12198);
var id_12200 = cljs.core.get.call(null,map__12143_12199__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12201 = cljs.core.get.call(null,map__12143_12199__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12202 = cljs.core.get.call(null,map__12143_12199__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12203 = cljs.core.get.call(null,map__12143_12199__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12204 = cljs.core.get.call(null,map__12143_12199__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12200)){
rete4flight.core.add_popup.call(null,id_12200,html_12203,time_12204);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12201;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12202;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12201,lon_12202,html_12203,time_12204);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12133_12177))){
var map__12145_12205 = evt;
var map__12145_12206__$1 = ((((!((map__12145_12205 == null)))?((((map__12145_12205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12145_12205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12145_12205):map__12145_12205);
var id_12207 = cljs.core.get.call(null,map__12145_12206__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12208 = cljs.core.get.call(null,map__12145_12206__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12209 = cljs.core.get.call(null,map__12145_12206__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12210 = cljs.core.get.call(null,map__12145_12206__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12207,lla_12208,options_12209,time_12210);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12133_12177))){
var map__12147_12211 = evt;
var map__12147_12212__$1 = ((((!((map__12147_12211 == null)))?((((map__12147_12211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12147_12211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12147_12211):map__12147_12211);
var lat_12213 = cljs.core.get.call(null,map__12147_12212__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12214 = cljs.core.get.call(null,map__12147_12212__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12213,lon_12214);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12133_12177))){
var map__12149_12215 = evt;
var map__12149_12216__$1 = ((((!((map__12149_12215 == null)))?((((map__12149_12215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12149_12215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12149_12215):map__12149_12215);
var id_12217 = cljs.core.get.call(null,map__12149_12216__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12218 = cljs.core.get.call(null,map__12149_12216__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12217,on_course_12218);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12133_12177))){
var map__12151_12219 = evt;
var map__12151_12220__$1 = ((((!((map__12151_12219 == null)))?((((map__12151_12219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12151_12219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12151_12219):map__12151_12219);
var id_12221 = cljs.core.get.call(null,map__12151_12220__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title_12222 = cljs.core.get.call(null,map__12151_12220__$1,new cljs.core.Keyword(null,"title","title",636505583));
var lat_12223 = cljs.core.get.call(null,map__12151_12220__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12224 = cljs.core.get.call(null,map__12151_12220__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var alt_12225 = cljs.core.get.call(null,map__12151_12220__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12226 = cljs.core.get.call(null,map__12151_12220__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,id_12221,title_12222,lat_12223,lon_12224,alt_12225,state_12226);
} else {
if(cljs.core.truth_(pred__12132_12176.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12133_12177))){
rete4flight.core.clear_placemarks.call(null);
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
}
}

var G__12227 = seq__12126;
var G__12228 = chunk__12127;
var G__12229 = count__12128;
var G__12230 = (i__12129 + (1));
seq__12126 = G__12227;
chunk__12127 = G__12228;
count__12128 = G__12229;
i__12129 = G__12230;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12126);
if(temp__4657__auto__){
var seq__12126__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12126__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__12126__$1);
var G__12231 = cljs.core.chunk_rest.call(null,seq__12126__$1);
var G__12232 = c__6555__auto__;
var G__12233 = cljs.core.count.call(null,c__6555__auto__);
var G__12234 = (0);
seq__12126 = G__12231;
chunk__12127 = G__12232;
count__12128 = G__12233;
i__12129 = G__12234;
continue;
} else {
var map__12153 = cljs.core.first.call(null,seq__12126__$1);
var map__12153__$1 = ((((!((map__12153 == null)))?((((map__12153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12153):map__12153);
var evt = map__12153__$1;
var event = cljs.core.get.call(null,map__12153__$1,new cljs.core.Keyword(null,"event","event",301435442));
cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"EVENT","EVENT",449814061),evt], null));

var pred__12155_12235 = cljs.core._EQ_;
var expr__12156_12236 = event;
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12156_12236))){
var map__12158_12237 = evt;
var map__12158_12238__$1 = ((((!((map__12158_12237 == null)))?((((map__12158_12237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12158_12237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12158_12237):map__12158_12237);
var id_12239 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12240 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12241 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12242 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12243 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12244 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12245 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12246 = cljs.core.get.call(null,map__12158_12238__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12239,callsign_12240,lat_12241,lon_12242,crs_12243,spd_12244,alt_12245,state_12246);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12156_12236))){
var map__12160_12247 = evt;
var map__12160_12248__$1 = ((((!((map__12160_12247 == null)))?((((map__12160_12247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12160_12247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12160_12247):map__12160_12247);
var id_12249 = cljs.core.get.call(null,map__12160_12248__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12249);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12156_12236))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12156_12236))){
var map__12162_12250 = evt;
var map__12162_12251__$1 = ((((!((map__12162_12250 == null)))?((((map__12162_12250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12162_12250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12162_12250):map__12162_12250);
var ids_12252 = cljs.core.get.call(null,map__12162_12251__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12253 = cljs.core.get.call(null,map__12162_12251__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12252,options_12253);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12156_12236))){
var map__12164_12254 = evt;
var map__12164_12255__$1 = ((((!((map__12164_12254 == null)))?((((map__12164_12254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12164_12254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164_12254):map__12164_12254);
var ids_12256 = cljs.core.get.call(null,map__12164_12255__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12256);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12156_12236))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12156_12236))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12156_12236))){
var map__12166_12257 = evt;
var map__12166_12258__$1 = ((((!((map__12166_12257 == null)))?((((map__12166_12257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12166_12257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12166_12257):map__12166_12257);
var id_12259 = cljs.core.get.call(null,map__12166_12258__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12260 = cljs.core.get.call(null,map__12166_12258__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12261 = cljs.core.get.call(null,map__12166_12258__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12262 = cljs.core.get.call(null,map__12166_12258__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12263 = cljs.core.get.call(null,map__12166_12258__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12259)){
rete4flight.core.add_popup.call(null,id_12259,html_12262,time_12263);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12260;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12261;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12260,lon_12261,html_12262,time_12263);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12156_12236))){
var map__12168_12264 = evt;
var map__12168_12265__$1 = ((((!((map__12168_12264 == null)))?((((map__12168_12264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12168_12264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12168_12264):map__12168_12264);
var id_12266 = cljs.core.get.call(null,map__12168_12265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12267 = cljs.core.get.call(null,map__12168_12265__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12268 = cljs.core.get.call(null,map__12168_12265__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12269 = cljs.core.get.call(null,map__12168_12265__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12266,lla_12267,options_12268,time_12269);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12156_12236))){
var map__12170_12270 = evt;
var map__12170_12271__$1 = ((((!((map__12170_12270 == null)))?((((map__12170_12270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12170_12270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12170_12270):map__12170_12270);
var lat_12272 = cljs.core.get.call(null,map__12170_12271__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12273 = cljs.core.get.call(null,map__12170_12271__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12272,lon_12273);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12156_12236))){
var map__12172_12274 = evt;
var map__12172_12275__$1 = ((((!((map__12172_12274 == null)))?((((map__12172_12274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12172_12274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12172_12274):map__12172_12274);
var id_12276 = cljs.core.get.call(null,map__12172_12275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12277 = cljs.core.get.call(null,map__12172_12275__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12276,on_course_12277);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12156_12236))){
var map__12174_12278 = evt;
var map__12174_12279__$1 = ((((!((map__12174_12278 == null)))?((((map__12174_12278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12174_12278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12174_12278):map__12174_12278);
var id_12280 = cljs.core.get.call(null,map__12174_12279__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title_12281 = cljs.core.get.call(null,map__12174_12279__$1,new cljs.core.Keyword(null,"title","title",636505583));
var lat_12282 = cljs.core.get.call(null,map__12174_12279__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12283 = cljs.core.get.call(null,map__12174_12279__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var alt_12284 = cljs.core.get.call(null,map__12174_12279__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12285 = cljs.core.get.call(null,map__12174_12279__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,id_12280,title_12281,lat_12282,lon_12283,alt_12284,state_12285);
} else {
if(cljs.core.truth_(pred__12155_12235.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12156_12236))){
rete4flight.core.clear_placemarks.call(null);
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
}
}

var G__12286 = cljs.core.next.call(null,seq__12126__$1);
var G__12287 = null;
var G__12288 = (0);
var G__12289 = (0);
seq__12126 = G__12286;
chunk__12127 = G__12287;
count__12128 = G__12288;
i__12129 = G__12289;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12290){
var map__12293 = p__12290;
var map__12293__$1 = ((((!((map__12293 == null)))?((((map__12293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12293):map__12293);
var status = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
rete4flight.core.set_html_BANG_.call(null,"course",[cljs.core.str("Course: <input value='0' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualcrs(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"speed",[cljs.core.str("Speed: <input value='0' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualspd(this.value)'>")].join(''));

return rete4flight.core.set_html_BANG_.call(null,"altitude",[cljs.core.str("Altitude: <input value='0' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualalt(this.value)'>")].join(''));
} else {
return null;
}
});
rete4flight.core.manual_hide = (function rete4flight$core$manual_hide(){
rete4flight.core.set_html_BANG_.call(null,"course","");

rete4flight.core.set_html_BANG_.call(null,"speed","");

return rete4flight.core.set_html_BANG_.call(null,"altitude","");
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

rete4flight.core.set_html_BANG_.call(null,"roll-fld",[cljs.core.str("<input value='0' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.camrol(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"hud","HUD:");

return rete4flight.core.set_html_BANG_.call(null,"hud-fld","<select id='hud-val' style='width:96px'>\n             <option value='2D'>flat terrain</option>\n             <option value='3D'>3D terrain</option>\n             </select>");
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

rete4flight.core.set_html_BANG_.call(null,"hud","");

rete4flight.core.set_html_BANG_.call(null,"hud-fld","");

return rete4flight.core.manual_hide.call(null);
});
rete4flight.core.camera_on_handler = (function rete4flight$core$camera_on_handler(response){
var callsigns = rete4flight.core.read_transit.call(null,response);
var _ = cljs.core.println.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"CSS","CSS",135559744),callsigns], null));
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.camonb(this.value)' style='width:96px'>"),cljs.core.str("<option value='0'/>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = ((function (callsigns,_){
return (function rete4flight$core$camera_on_handler_$_iter__12299(s__12300){
return (new cljs.core.LazySeq(null,((function (callsigns,_){
return (function (){
var s__12300__$1 = s__12300;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12300__$1);
if(temp__4657__auto__){
var s__12300__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12300__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12300__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12302 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12301 = (0);
while(true){
if((i__12301 < size__6523__auto__)){
var e = cljs.core._nth.call(null,c__6522__auto__,i__12301);
cljs.core.chunk_append.call(null,b__12302,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__12303 = (i__12301 + (1));
i__12301 = G__12303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12302),rete4flight$core$camera_on_handler_$_iter__12299.call(null,cljs.core.chunk_rest.call(null,s__12300__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12302),null);
}
} else {
var e = cljs.core.first.call(null,s__12300__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),rete4flight$core$camera_on_handler_$_iter__12299.call(null,cljs.core.rest.call(null,s__12300__$2)));
}
} else {
return null;
}
break;
}
});})(callsigns,_))
,null,null));
});})(callsigns,_))
;
return iter__6524__auto__.call(null,callsigns);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"onboard-fld",sel);
});
rete4flight.core.camera = (function rete4flight$core$camera(){
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"off","off",606440789))){
rete4flight.core.camera_show.call(null);

ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?camera=on")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.camera_on_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

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
rete4flight.core.selection = (function rete4flight$core$selection(id){
var e = rete4flight.core.by_id.call(null,id);
return (e.options[e.selectedIndex]).value;
});
rete4flight.core.camonb = (function rete4flight$core$camonb(obj){
var url = [cljs.core.str(rete4flight.core.URL_CAM),cljs.core.str("?onboard="),cljs.core.str(obj),cljs.core.str("&hud="),cljs.core.str(rete4flight.core.selection.call(null,"hud-val"))].join('');
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
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_hour_$_iter__12308(s__12309){
return (new cljs.core.LazySeq(null,(function (){
var s__12309__$1 = s__12309;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12309__$1);
if(temp__4657__auto__){
var s__12309__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12309__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12309__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12311 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12310 = (0);
while(true){
if((i__12310 < size__6523__auto__)){
var hour = cljs.core._nth.call(null,c__6522__auto__,i__12310);
cljs.core.chunk_append.call(null,b__12311,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12312 = (i__12310 + (1));
i__12310 = G__12312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12311),rete4flight$core$sel_hour_$_iter__12308.call(null,cljs.core.chunk_rest.call(null,s__12309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12311),null);
}
} else {
var hour = cljs.core.first.call(null,s__12309__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12308.call(null,cljs.core.rest.call(null,s__12309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6524__auto__.call(null,cljs.core.range.call(null,(24)));
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"hour",slh);
});
rete4flight.core.sel_minute = (function rete4flight$core$sel_minute(){
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_minute_$_iter__12317(s__12318){
return (new cljs.core.LazySeq(null,(function (){
var s__12318__$1 = s__12318;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12318__$1);
if(temp__4657__auto__){
var s__12318__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12318__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12318__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12320 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12319 = (0);
while(true){
if((i__12319 < size__6523__auto__)){
var min = cljs.core._nth.call(null,c__6522__auto__,i__12319);
cljs.core.chunk_append.call(null,b__12320,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12321 = (i__12319 + (1));
i__12319 = G__12321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12320),rete4flight$core$sel_minute_$_iter__12317.call(null,cljs.core.chunk_rest.call(null,s__12318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12320),null);
}
} else {
var min = cljs.core.first.call(null,s__12318__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12317.call(null,cljs.core.rest.call(null,s__12318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6524__auto__.call(null,cljs.core.range.call(null,(60)));
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"minute",slm);
});
rete4flight.core.sel_from_country = (function rete4flight$core$sel_from_country(contries){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_country_$_iter__12326(s__12327){
return (new cljs.core.LazySeq(null,(function (){
var s__12327__$1 = s__12327;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12327__$1);
if(temp__4657__auto__){
var s__12327__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12327__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12327__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12329 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12328 = (0);
while(true){
if((i__12328 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12328);
cljs.core.chunk_append.call(null,b__12329,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12330 = (i__12328 + (1));
i__12328 = G__12330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12329),rete4flight$core$sel_from_country_$_iter__12326.call(null,cljs.core.chunk_rest.call(null,s__12327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12329),null);
}
} else {
var contry = cljs.core.first.call(null,s__12327__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12326.call(null,cljs.core.rest.call(null,s__12327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6524__auto__.call(null,contries);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"from-country",sel);
});
rete4flight.core.sel_from_airport = (function rete4flight$core$sel_from_airport(airports){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12335(s__12336){
return (new cljs.core.LazySeq(null,(function (){
var s__12336__$1 = s__12336;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12336__$1);
if(temp__4657__auto__){
var s__12336__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12336__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12336__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12338 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12337 = (0);
while(true){
if((i__12337 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12337);
cljs.core.chunk_append.call(null,b__12338,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12339 = (i__12337 + (1));
i__12337 = G__12339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12338),rete4flight$core$sel_from_airport_$_iter__12335.call(null,cljs.core.chunk_rest.call(null,s__12336__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12338),null);
}
} else {
var airport = cljs.core.first.call(null,s__12336__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12335.call(null,cljs.core.rest.call(null,s__12336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6524__auto__.call(null,airports);
})())),cljs.core.str("</select>")].join('');
return rete4flight.core.set_html_BANG_.call(null,"from-airport",sel);
});
rete4flight.core.sel_to_country = (function rete4flight$core$sel_to_country(contries){
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_country_$_iter__12344(s__12345){
return (new cljs.core.LazySeq(null,(function (){
var s__12345__$1 = s__12345;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12345__$1);
if(temp__4657__auto__){
var s__12345__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12345__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12345__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12347 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12346 = (0);
while(true){
if((i__12346 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12346);
cljs.core.chunk_append.call(null,b__12347,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12348 = (i__12346 + (1));
i__12346 = G__12348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12347),rete4flight$core$sel_to_country_$_iter__12344.call(null,cljs.core.chunk_rest.call(null,s__12345__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12347),null);
}
} else {
var contry = cljs.core.first.call(null,s__12345__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12344.call(null,cljs.core.rest.call(null,s__12345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6524__auto__.call(null,contries);
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12353(s__12354){
return (new cljs.core.LazySeq(null,(function (){
var s__12354__$1 = s__12354;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12354__$1);
if(temp__4657__auto__){
var s__12354__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12354__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12354__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12356 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12355 = (0);
while(true){
if((i__12355 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12355);
cljs.core.chunk_append.call(null,b__12356,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12357 = (i__12355 + (1));
i__12355 = G__12357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12356),rete4flight$core$sel_to_airport_$_iter__12353.call(null,cljs.core.chunk_rest.call(null,s__12354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12356),null);
}
} else {
var airport = cljs.core.first.call(null,s__12354__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12353.call(null,cljs.core.rest.call(null,s__12354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6524__auto__.call(null,airports);
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
var vec__12361 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12361,(0),null);
var s = cljs.core.nth.call(null,vec__12361,(1),null);
var w = cljs.core.nth.call(null,vec__12361,(2),null);
var e = cljs.core.nth.call(null,vec__12361,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12367 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12367,(0),null);
var s = cljs.core.nth.call(null,vec__12367,(1),null);
var w = cljs.core.nth.call(null,vec__12367,(2),null);
var e = cljs.core.nth.call(null,vec__12367,(3),null);
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
var pred__12373_12376 = cljs.core._EQ_;
var expr__12374_12377 = func;
if(cljs.core.truth_(pred__12373_12376.call(null,"watch-visible",expr__12374_12377))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"flight-states",expr__12374_12377))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"intersect",expr__12374_12377))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"clear",expr__12374_12377))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"move-to",expr__12374_12377))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"schedule",expr__12374_12377))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"camera",expr__12374_12377))){
rete4flight.core.camera.call(null);
} else {
if(cljs.core.truth_(pred__12373_12376.call(null,"manual",expr__12374_12377))){
rete4flight.core.manual.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12374_12377)].join('')));
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
var tail = (function (){var iter__6524__auto__ = ((function (head,func,temp__4655__auto__,fkey){
return (function rete4flight$core$remote_call_$_iter__12394(s__12395){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__12395__$1 = s__12395;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12395__$1);
if(temp__4657__auto__){
var s__12395__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12395__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12395__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12397 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12396 = (0);
while(true){
if((i__12396 < size__6523__auto__)){
var vec__12404 = cljs.core._nth.call(null,c__6522__auto__,i__12396);
var f = cljs.core.nth.call(null,vec__12404,(0),null);
var k = cljs.core.nth.call(null,vec__12404,(1),null);
cljs.core.chunk_append.call(null,b__12397,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__12410 = (i__12396 + (1));
i__12396 = G__12410;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12397),rete4flight$core$remote_call_$_iter__12394.call(null,cljs.core.chunk_rest.call(null,s__12395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12397),null);
}
} else {
var vec__12407 = cljs.core.first.call(null,s__12395__$2);
var f = cljs.core.nth.call(null,vec__12407,(0),null);
var k = cljs.core.nth.call(null,vec__12407,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__12394.call(null,cljs.core.rest.call(null,s__12395__$2)));
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
return iter__6524__auto__.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.deref.call(null,rete4flight.core.REM_CAL),fkey)));
})();
var plis = [cljs.core.str(head),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,tail))].join('');
return ajax.core.GET.call(null,[cljs.core.str(rete4flight.core.URL_CAL),cljs.core.str(plis)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
} else {
return null;
}
});
rete4flight.core.init = (function rete4flight$core$init(){
cljs.core.println.call(null,new cljs.core.Keyword(null,"INIT","INIT",-581100519));

var m = L.map("map").setView([40.8,-74.0],(10));
var tile1 = L.tileLayer(rete4flight.core.URL_OSM,({"maxZoom": (16), "attribution": "OOGIS RL, OpenStreetMap &copy;"}));
var tile2 = L.tileLayer(rete4flight.core.URL_GSA,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"}));
var tile3 = L.tileLayer(rete4flight.core.URL_GST,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"}));
var tile4 = L.tileLayer(rete4flight.core.URL_GHB,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"}));
var tile5 = L.tileLayer(rete4flight.core.URL_GTR,({"maxZoom": (20), "subdomains": ["mt0","mt1","mt2","mt3"], "attribution": "OOGIS RL, Google &copy;"}));
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

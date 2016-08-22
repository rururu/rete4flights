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
rete4flight.core.add_trail = (function rete4flight$core$add_trail(id,lla,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var llg = cljs.core.map.call(null,((function (ops){
return (function (p1__11769_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11769_SHARP_),cljs.core.second.call(null,p1__11769_SHARP_)));
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
return (function (state_11798){
var state_val_11799 = (state_11798[(1)]);
if((state_val_11799 === (1))){
var inst_11789 = cljs.core.async.timeout.call(null,time);
var state_11798__$1 = state_11798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11798__$1,(2),inst_11789);
} else {
if((state_val_11799 === (2))){
var inst_11791 = (state_11798[(2)]);
var inst_11792 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11793 = inst_11792.removeLayer(trl);
var inst_11794 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_11795 = cljs.core.dissoc.call(null,inst_11794,id);
var inst_11796 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_11795);
var state_11798__$1 = (function (){var statearr_11800 = state_11798;
(statearr_11800[(7)] = inst_11791);

(statearr_11800[(8)] = inst_11793);

return statearr_11800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11798__$1,inst_11796);
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
var statearr_11804 = [null,null,null,null,null,null,null,null,null];
(statearr_11804[(0)] = rete4flight$core$add_trail_$_state_machine__9312__auto__);

(statearr_11804[(1)] = (1));

return statearr_11804;
});
var rete4flight$core$add_trail_$_state_machine__9312__auto____1 = (function (state_11798){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11805){if((e11805 instanceof Object)){
var ex__9315__auto__ = e11805;
var statearr_11806_11808 = state_11798;
(statearr_11806_11808[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11809 = state_11798;
state_11798 = G__11809;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9312__auto__ = function(state_11798){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9312__auto____1.call(this,state_11798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9312__auto____0;
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9312__auto____1;
return rete4flight$core$add_trail_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,llg,lle,trl))
})();
var state__9378__auto__ = (function (){var statearr_11807 = f__9377__auto__.call(null);
(statearr_11807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11807;
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
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__11810_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__11810_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__11811_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__11811_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__11812_SHARP_){
return p1__11812_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__11813,ops){
var vec__11817 = p__11813;
var id1 = cljs.core.nth.call(null,vec__11817,(0),null);
var id2 = cljs.core.nth.call(null,vec__11817,(1),null);
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
return (function (state_11848){
var state_val_11849 = (state_11848[(1)]);
if((state_val_11849 === (1))){
var inst_11839 = cljs.core.async.timeout.call(null,del);
var state_11848__$1 = state_11848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11848__$1,(2),inst_11839);
} else {
if((state_val_11849 === (2))){
var inst_11841 = (state_11848[(2)]);
var inst_11842 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11843 = inst_11842.removeLayer(lnk);
var inst_11844 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_11845 = cljs.core.dissoc.call(null,inst_11844,ids);
var inst_11846 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_11845);
var state_11848__$1 = (function (){var statearr_11850 = state_11848;
(statearr_11850[(7)] = inst_11843);

(statearr_11850[(8)] = inst_11841);

return statearr_11850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11848__$1,inst_11846);
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
var statearr_11854 = [null,null,null,null,null,null,null,null,null];
(statearr_11854[(0)] = rete4flight$core$add_link_$_state_machine__9312__auto__);

(statearr_11854[(1)] = (1));

return statearr_11854;
});
var rete4flight$core$add_link_$_state_machine__9312__auto____1 = (function (state_11848){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11855){if((e11855 instanceof Object)){
var ex__9315__auto__ = e11855;
var statearr_11856_11858 = state_11848;
(statearr_11856_11858[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11859 = state_11848;
state_11848 = G__11859;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9312__auto__ = function(state_11848){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9312__auto____1.call(this,state_11848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9312__auto____0;
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9312__auto____1;
return rete4flight$core$add_link_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,tmin,del,llg,lnk))
})();
var state__9378__auto__ = (function (){var statearr_11857 = f__9377__auto__.call(null);
(statearr_11857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11857;
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
var seq__11870 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__11871 = null;
var count__11872 = (0);
var i__11873 = (0);
while(true){
if((i__11873 < count__11872)){
var vec__11874 = cljs.core._nth.call(null,chunk__11871,i__11873);
var ids = cljs.core.nth.call(null,vec__11874,(0),null);
var lnk = cljs.core.nth.call(null,vec__11874,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11880 = seq__11870;
var G__11881 = chunk__11871;
var G__11882 = count__11872;
var G__11883 = (i__11873 + (1));
seq__11870 = G__11880;
chunk__11871 = G__11881;
count__11872 = G__11882;
i__11873 = G__11883;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11870);
if(temp__4657__auto__){
var seq__11870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11870__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11870__$1);
var G__11884 = cljs.core.chunk_rest.call(null,seq__11870__$1);
var G__11885 = c__6555__auto__;
var G__11886 = cljs.core.count.call(null,c__6555__auto__);
var G__11887 = (0);
seq__11870 = G__11884;
chunk__11871 = G__11885;
count__11872 = G__11886;
i__11873 = G__11887;
continue;
} else {
var vec__11877 = cljs.core.first.call(null,seq__11870__$1);
var ids = cljs.core.nth.call(null,vec__11877,(0),null);
var lnk = cljs.core.nth.call(null,vec__11877,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11888 = cljs.core.next.call(null,seq__11870__$1);
var G__11889 = null;
var G__11890 = (0);
var G__11891 = (0);
seq__11870 = G__11888;
chunk__11871 = G__11889;
count__11872 = G__11890;
i__11873 = G__11891;
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
var seq__11896 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__11897 = null;
var count__11898 = (0);
var i__11899 = (0);
while(true){
if((i__11899 < count__11898)){
var ids = cljs.core._nth.call(null,chunk__11897,i__11899);
rete4flight.core.delete_link.call(null,ids);

var G__11900 = seq__11896;
var G__11901 = chunk__11897;
var G__11902 = count__11898;
var G__11903 = (i__11899 + (1));
seq__11896 = G__11900;
chunk__11897 = G__11901;
count__11898 = G__11902;
i__11899 = G__11903;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11896);
if(temp__4657__auto__){
var seq__11896__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11896__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11896__$1);
var G__11904 = cljs.core.chunk_rest.call(null,seq__11896__$1);
var G__11905 = c__6555__auto__;
var G__11906 = cljs.core.count.call(null,c__6555__auto__);
var G__11907 = (0);
seq__11896 = G__11904;
chunk__11897 = G__11905;
count__11898 = G__11906;
i__11899 = G__11907;
continue;
} else {
var ids = cljs.core.first.call(null,seq__11896__$1);
rete4flight.core.delete_link.call(null,ids);

var G__11908 = cljs.core.next.call(null,seq__11896__$1);
var G__11909 = null;
var G__11910 = (0);
var G__11911 = (0);
seq__11896 = G__11908;
chunk__11897 = G__11909;
count__11898 = G__11910;
i__11899 = G__11911;
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
var args11912 = [];
var len__6819__auto___11934 = arguments.length;
var i__6820__auto___11935 = (0);
while(true){
if((i__6820__auto___11935 < len__6819__auto___11934)){
args11912.push((arguments[i__6820__auto___11935]));

var G__11936 = (i__6820__auto___11935 + (1));
i__6820__auto___11935 = G__11936;
continue;
} else {
}
break;
}

var G__11914 = args11912.length;
switch (G__11914) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11912.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__11915 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__11915,(0),null);
var lon = cljs.core.nth.call(null,vec__11915,(1),null);
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
return (function (state_11924){
var state_val_11925 = (state_11924[(1)]);
if((state_val_11925 === (1))){
var inst_11918 = cljs.core.async.timeout.call(null,time);
var state_11924__$1 = state_11924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11924__$1,(2),inst_11918);
} else {
if((state_val_11925 === (2))){
var inst_11920 = (state_11924[(2)]);
var inst_11921 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11922 = inst_11921.removeLayer(pop);
var state_11924__$1 = (function (){var statearr_11926 = state_11924;
(statearr_11926[(7)] = inst_11920);

return statearr_11926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11924__$1,inst_11922);
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
var statearr_11930 = [null,null,null,null,null,null,null,null];
(statearr_11930[(0)] = rete4flight$core$state_machine__9312__auto__);

(statearr_11930[(1)] = (1));

return statearr_11930;
});
var rete4flight$core$state_machine__9312__auto____1 = (function (state_11924){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11931){if((e11931 instanceof Object)){
var ex__9315__auto__ = e11931;
var statearr_11932_11938 = state_11924;
(statearr_11932_11938[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11939 = state_11924;
state_11924 = G__11939;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$state_machine__9312__auto__ = function(state_11924){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9312__auto____1.call(this,state_11924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9312__auto____0;
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9312__auto____1;
return rete4flight$core$state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,pop))
})();
var state__9378__auto__ = (function (){var statearr_11933 = f__9377__auto__.call(null);
(statearr_11933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11933;
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
return (function (state_12016){
var state_val_12017 = (state_12016[(1)]);
if((state_val_12017 === (7))){
var inst_11989 = (state_12016[(7)]);
var inst_11999 = (inst_11989 - (4));
var inst_12000 = rete4flight.core.set_course_BANG_.call(null,id,inst_11999);
var state_12016__$1 = state_12016;
var statearr_12018_12038 = state_12016__$1;
(statearr_12018_12038[(2)] = inst_12000);

(statearr_12018_12038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (1))){
var inst_11989 = crs;
var state_12016__$1 = (function (){var statearr_12019 = state_12016;
(statearr_12019[(7)] = inst_11989);

return statearr_12019;
})();
var statearr_12020_12039 = state_12016__$1;
(statearr_12020_12039[(2)] = null);

(statearr_12020_12039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (4))){
var inst_11995 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_12016__$1 = state_12016;
var statearr_12021_12040 = state_12016__$1;
(statearr_12021_12040[(2)] = inst_11995);

(statearr_12021_12040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (6))){
var inst_12012 = (state_12016[(2)]);
var state_12016__$1 = state_12016;
var statearr_12022_12041 = state_12016__$1;
(statearr_12022_12041[(2)] = inst_12012);

(statearr_12022_12041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (3))){
var inst_12014 = (state_12016[(2)]);
var state_12016__$1 = state_12016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12016__$1,inst_12014);
} else {
if((state_val_12017 === (2))){
var inst_11989 = (state_12016[(7)]);
var inst_11991 = (inst_11989 - on_course);
var inst_11992 = Math.abs(inst_11991);
var inst_11993 = (inst_11992 < (4));
var state_12016__$1 = state_12016;
if(cljs.core.truth_(inst_11993)){
var statearr_12023_12042 = state_12016__$1;
(statearr_12023_12042[(1)] = (4));

} else {
var statearr_12024_12043 = state_12016__$1;
(statearr_12024_12043[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (9))){
var inst_12005 = (state_12016[(2)]);
var inst_12006 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_12016__$1 = (function (){var statearr_12025 = state_12016;
(statearr_12025[(8)] = inst_12005);

return statearr_12025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12016__$1,(10),inst_12006);
} else {
if((state_val_12017 === (5))){
var inst_11997 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_12016__$1 = state_12016;
if(inst_11997){
var statearr_12026_12044 = state_12016__$1;
(statearr_12026_12044[(1)] = (7));

} else {
var statearr_12027_12045 = state_12016__$1;
(statearr_12027_12045[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (10))){
var inst_12008 = (state_12016[(2)]);
var inst_12009 = rete4flight.core.course.call(null,id);
var inst_11989 = inst_12009;
var state_12016__$1 = (function (){var statearr_12028 = state_12016;
(statearr_12028[(7)] = inst_11989);

(statearr_12028[(9)] = inst_12008);

return statearr_12028;
})();
var statearr_12029_12046 = state_12016__$1;
(statearr_12029_12046[(2)] = null);

(statearr_12029_12046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12017 === (8))){
var inst_11989 = (state_12016[(7)]);
var inst_12002 = (inst_11989 + (4));
var inst_12003 = rete4flight.core.set_course_BANG_.call(null,id,inst_12002);
var state_12016__$1 = state_12016;
var statearr_12030_12047 = state_12016__$1;
(statearr_12030_12047[(2)] = inst_12003);

(statearr_12030_12047[(1)] = (9));


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
var statearr_12034 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12034[(0)] = rete4flight$core$turn_$_state_machine__9312__auto__);

(statearr_12034[(1)] = (1));

return statearr_12034;
});
var rete4flight$core$turn_$_state_machine__9312__auto____1 = (function (state_12016){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_12016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e12035){if((e12035 instanceof Object)){
var ex__9315__auto__ = e12035;
var statearr_12036_12048 = state_12016;
(statearr_12036_12048[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12049 = state_12016;
state_12016 = G__12049;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__9312__auto__ = function(state_12016){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__9312__auto____1.call(this,state_12016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__9312__auto____0;
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__9312__auto____1;
return rete4flight$core$turn_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,side,crs))
})();
var state__9378__auto__ = (function (){var statearr_12037 = f__9377__auto__.call(null);
(statearr_12037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_12037;
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
var vec__12053 = temp__4657__auto__;
var lat = cljs.core.nth.call(null,vec__12053,(0),null);
var lon = cljs.core.nth.call(null,vec__12053,(1),null);
var alt = cljs.core.nth.call(null,vec__12053,(2),null);
var crs = cljs.core.nth.call(null,vec__12053,(3),null);
var spd = cljs.core.nth.call(null,vec__12053,(4),null);
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
var seq__12102 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12103 = null;
var count__12104 = (0);
var i__12105 = (0);
while(true){
if((i__12105 < count__12104)){
var map__12106 = cljs.core._nth.call(null,chunk__12103,i__12105);
var map__12106__$1 = ((((!((map__12106 == null)))?((((map__12106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12106):map__12106);
var evt = map__12106__$1;
var event = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12108_12148 = cljs.core._EQ_;
var expr__12109_12149 = event;
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12109_12149))){
var map__12111_12150 = evt;
var map__12111_12151__$1 = ((((!((map__12111_12150 == null)))?((((map__12111_12150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12111_12150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12111_12150):map__12111_12150);
var id_12152 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12153 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12154 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12155 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12156 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12157 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12158 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12159 = cljs.core.get.call(null,map__12111_12151__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12152,callsign_12153,lat_12154,lon_12155,crs_12156,spd_12157,alt_12158,state_12159);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12109_12149))){
var map__12113_12160 = evt;
var map__12113_12161__$1 = ((((!((map__12113_12160 == null)))?((((map__12113_12160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12113_12160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12113_12160):map__12113_12160);
var id_12162 = cljs.core.get.call(null,map__12113_12161__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12162);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12109_12149))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12109_12149))){
var map__12115_12163 = evt;
var map__12115_12164__$1 = ((((!((map__12115_12163 == null)))?((((map__12115_12163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12115_12163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12115_12163):map__12115_12163);
var ids_12165 = cljs.core.get.call(null,map__12115_12164__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12166 = cljs.core.get.call(null,map__12115_12164__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12165,options_12166);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12109_12149))){
var map__12117_12167 = evt;
var map__12117_12168__$1 = ((((!((map__12117_12167 == null)))?((((map__12117_12167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12117_12167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12117_12167):map__12117_12167);
var ids_12169 = cljs.core.get.call(null,map__12117_12168__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12169);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12109_12149))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12109_12149))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12109_12149))){
var map__12119_12170 = evt;
var map__12119_12171__$1 = ((((!((map__12119_12170 == null)))?((((map__12119_12170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12119_12170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12119_12170):map__12119_12170);
var id_12172 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12173 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12174 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12175 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12176 = cljs.core.get.call(null,map__12119_12171__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12172)){
rete4flight.core.add_popup.call(null,id_12172,html_12175,time_12176);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12173;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12174;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12173,lon_12174,html_12175,time_12176);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12109_12149))){
var map__12121_12177 = evt;
var map__12121_12178__$1 = ((((!((map__12121_12177 == null)))?((((map__12121_12177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12121_12177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12121_12177):map__12121_12177);
var id_12179 = cljs.core.get.call(null,map__12121_12178__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12180 = cljs.core.get.call(null,map__12121_12178__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12181 = cljs.core.get.call(null,map__12121_12178__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12182 = cljs.core.get.call(null,map__12121_12178__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12179,lla_12180,options_12181,time_12182);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12109_12149))){
var map__12123_12183 = evt;
var map__12123_12184__$1 = ((((!((map__12123_12183 == null)))?((((map__12123_12183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12123_12183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12123_12183):map__12123_12183);
var lat_12185 = cljs.core.get.call(null,map__12123_12184__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12186 = cljs.core.get.call(null,map__12123_12184__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12185,lon_12186);
} else {
if(cljs.core.truth_(pred__12108_12148.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12109_12149))){
var map__12125_12187 = evt;
var map__12125_12188__$1 = ((((!((map__12125_12187 == null)))?((((map__12125_12187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12125_12187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12125_12187):map__12125_12187);
var id_12189 = cljs.core.get.call(null,map__12125_12188__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12190 = cljs.core.get.call(null,map__12125_12188__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12189,on_course_12190);
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

var G__12191 = seq__12102;
var G__12192 = chunk__12103;
var G__12193 = count__12104;
var G__12194 = (i__12105 + (1));
seq__12102 = G__12191;
chunk__12103 = G__12192;
count__12104 = G__12193;
i__12105 = G__12194;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12102);
if(temp__4657__auto__){
var seq__12102__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12102__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__12102__$1);
var G__12195 = cljs.core.chunk_rest.call(null,seq__12102__$1);
var G__12196 = c__6555__auto__;
var G__12197 = cljs.core.count.call(null,c__6555__auto__);
var G__12198 = (0);
seq__12102 = G__12195;
chunk__12103 = G__12196;
count__12104 = G__12197;
i__12105 = G__12198;
continue;
} else {
var map__12127 = cljs.core.first.call(null,seq__12102__$1);
var map__12127__$1 = ((((!((map__12127 == null)))?((((map__12127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12127):map__12127);
var evt = map__12127__$1;
var event = cljs.core.get.call(null,map__12127__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12129_12199 = cljs.core._EQ_;
var expr__12130_12200 = event;
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12130_12200))){
var map__12132_12201 = evt;
var map__12132_12202__$1 = ((((!((map__12132_12201 == null)))?((((map__12132_12201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12132_12201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12132_12201):map__12132_12201);
var id_12203 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12204 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12205 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12206 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12207 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12208 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12209 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12210 = cljs.core.get.call(null,map__12132_12202__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12203,callsign_12204,lat_12205,lon_12206,crs_12207,spd_12208,alt_12209,state_12210);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12130_12200))){
var map__12134_12211 = evt;
var map__12134_12212__$1 = ((((!((map__12134_12211 == null)))?((((map__12134_12211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12134_12211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12134_12211):map__12134_12211);
var id_12213 = cljs.core.get.call(null,map__12134_12212__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12213);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12130_12200))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12130_12200))){
var map__12136_12214 = evt;
var map__12136_12215__$1 = ((((!((map__12136_12214 == null)))?((((map__12136_12214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12136_12214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12136_12214):map__12136_12214);
var ids_12216 = cljs.core.get.call(null,map__12136_12215__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12217 = cljs.core.get.call(null,map__12136_12215__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12216,options_12217);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12130_12200))){
var map__12138_12218 = evt;
var map__12138_12219__$1 = ((((!((map__12138_12218 == null)))?((((map__12138_12218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12138_12218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12138_12218):map__12138_12218);
var ids_12220 = cljs.core.get.call(null,map__12138_12219__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12220);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12130_12200))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12130_12200))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12130_12200))){
var map__12140_12221 = evt;
var map__12140_12222__$1 = ((((!((map__12140_12221 == null)))?((((map__12140_12221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12140_12221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12140_12221):map__12140_12221);
var id_12223 = cljs.core.get.call(null,map__12140_12222__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12224 = cljs.core.get.call(null,map__12140_12222__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12225 = cljs.core.get.call(null,map__12140_12222__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12226 = cljs.core.get.call(null,map__12140_12222__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12227 = cljs.core.get.call(null,map__12140_12222__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12223)){
rete4flight.core.add_popup.call(null,id_12223,html_12226,time_12227);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12224;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12225;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12224,lon_12225,html_12226,time_12227);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12130_12200))){
var map__12142_12228 = evt;
var map__12142_12229__$1 = ((((!((map__12142_12228 == null)))?((((map__12142_12228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12142_12228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12142_12228):map__12142_12228);
var id_12230 = cljs.core.get.call(null,map__12142_12229__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12231 = cljs.core.get.call(null,map__12142_12229__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12232 = cljs.core.get.call(null,map__12142_12229__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12233 = cljs.core.get.call(null,map__12142_12229__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12230,lla_12231,options_12232,time_12233);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12130_12200))){
var map__12144_12234 = evt;
var map__12144_12235__$1 = ((((!((map__12144_12234 == null)))?((((map__12144_12234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12144_12234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144_12234):map__12144_12234);
var lat_12236 = cljs.core.get.call(null,map__12144_12235__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12237 = cljs.core.get.call(null,map__12144_12235__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12236,lon_12237);
} else {
if(cljs.core.truth_(pred__12129_12199.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12130_12200))){
var map__12146_12238 = evt;
var map__12146_12239__$1 = ((((!((map__12146_12238 == null)))?((((map__12146_12238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12146_12238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12146_12238):map__12146_12238);
var id_12240 = cljs.core.get.call(null,map__12146_12239__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12241 = cljs.core.get.call(null,map__12146_12239__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12240,on_course_12241);
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

var G__12242 = cljs.core.next.call(null,seq__12102__$1);
var G__12243 = null;
var G__12244 = (0);
var G__12245 = (0);
seq__12102 = G__12242;
chunk__12103 = G__12243;
count__12104 = G__12244;
i__12105 = G__12245;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12246){
var map__12249 = p__12246;
var map__12249__$1 = ((((!((map__12249 == null)))?((((map__12249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12249):map__12249);
var status = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12249__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
return (function rete4flight$core$camera_on_handler_$_iter__12255(s__12256){
return (new cljs.core.LazySeq(null,((function (callsigns,_){
return (function (){
var s__12256__$1 = s__12256;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12256__$1);
if(temp__4657__auto__){
var s__12256__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12256__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12256__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12258 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12257 = (0);
while(true){
if((i__12257 < size__6523__auto__)){
var e = cljs.core._nth.call(null,c__6522__auto__,i__12257);
cljs.core.chunk_append.call(null,b__12258,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__12259 = (i__12257 + (1));
i__12257 = G__12259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12258),rete4flight$core$camera_on_handler_$_iter__12255.call(null,cljs.core.chunk_rest.call(null,s__12256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12258),null);
}
} else {
var e = cljs.core.first.call(null,s__12256__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),rete4flight$core$camera_on_handler_$_iter__12255.call(null,cljs.core.rest.call(null,s__12256__$2)));
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
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_hour_$_iter__12264(s__12265){
return (new cljs.core.LazySeq(null,(function (){
var s__12265__$1 = s__12265;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12265__$1);
if(temp__4657__auto__){
var s__12265__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12265__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12265__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12267 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12266 = (0);
while(true){
if((i__12266 < size__6523__auto__)){
var hour = cljs.core._nth.call(null,c__6522__auto__,i__12266);
cljs.core.chunk_append.call(null,b__12267,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12268 = (i__12266 + (1));
i__12266 = G__12268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12267),rete4flight$core$sel_hour_$_iter__12264.call(null,cljs.core.chunk_rest.call(null,s__12265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12267),null);
}
} else {
var hour = cljs.core.first.call(null,s__12265__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12264.call(null,cljs.core.rest.call(null,s__12265__$2)));
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
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_minute_$_iter__12273(s__12274){
return (new cljs.core.LazySeq(null,(function (){
var s__12274__$1 = s__12274;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12274__$1);
if(temp__4657__auto__){
var s__12274__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12274__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12274__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12276 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12275 = (0);
while(true){
if((i__12275 < size__6523__auto__)){
var min = cljs.core._nth.call(null,c__6522__auto__,i__12275);
cljs.core.chunk_append.call(null,b__12276,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12277 = (i__12275 + (1));
i__12275 = G__12277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12276),rete4flight$core$sel_minute_$_iter__12273.call(null,cljs.core.chunk_rest.call(null,s__12274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12276),null);
}
} else {
var min = cljs.core.first.call(null,s__12274__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12273.call(null,cljs.core.rest.call(null,s__12274__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_country_$_iter__12282(s__12283){
return (new cljs.core.LazySeq(null,(function (){
var s__12283__$1 = s__12283;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12283__$1);
if(temp__4657__auto__){
var s__12283__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12283__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12283__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12285 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12284 = (0);
while(true){
if((i__12284 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12284);
cljs.core.chunk_append.call(null,b__12285,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12286 = (i__12284 + (1));
i__12284 = G__12286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12285),rete4flight$core$sel_from_country_$_iter__12282.call(null,cljs.core.chunk_rest.call(null,s__12283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12285),null);
}
} else {
var contry = cljs.core.first.call(null,s__12283__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12282.call(null,cljs.core.rest.call(null,s__12283__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12291(s__12292){
return (new cljs.core.LazySeq(null,(function (){
var s__12292__$1 = s__12292;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12292__$1);
if(temp__4657__auto__){
var s__12292__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12292__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12292__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12294 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12293 = (0);
while(true){
if((i__12293 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12293);
cljs.core.chunk_append.call(null,b__12294,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12295 = (i__12293 + (1));
i__12293 = G__12295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12294),rete4flight$core$sel_from_airport_$_iter__12291.call(null,cljs.core.chunk_rest.call(null,s__12292__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12294),null);
}
} else {
var airport = cljs.core.first.call(null,s__12292__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12291.call(null,cljs.core.rest.call(null,s__12292__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_country_$_iter__12300(s__12301){
return (new cljs.core.LazySeq(null,(function (){
var s__12301__$1 = s__12301;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12301__$1);
if(temp__4657__auto__){
var s__12301__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12301__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12301__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12303 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12302 = (0);
while(true){
if((i__12302 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12302);
cljs.core.chunk_append.call(null,b__12303,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12304 = (i__12302 + (1));
i__12302 = G__12304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12303),rete4flight$core$sel_to_country_$_iter__12300.call(null,cljs.core.chunk_rest.call(null,s__12301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12303),null);
}
} else {
var contry = cljs.core.first.call(null,s__12301__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12300.call(null,cljs.core.rest.call(null,s__12301__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12309(s__12310){
return (new cljs.core.LazySeq(null,(function (){
var s__12310__$1 = s__12310;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12310__$1);
if(temp__4657__auto__){
var s__12310__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12310__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12310__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12312 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12311 = (0);
while(true){
if((i__12311 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12311);
cljs.core.chunk_append.call(null,b__12312,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12313 = (i__12311 + (1));
i__12311 = G__12313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12312),rete4flight$core$sel_to_airport_$_iter__12309.call(null,cljs.core.chunk_rest.call(null,s__12310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12312),null);
}
} else {
var airport = cljs.core.first.call(null,s__12310__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12309.call(null,cljs.core.rest.call(null,s__12310__$2)));
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
var vec__12317 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12317,(0),null);
var s = cljs.core.nth.call(null,vec__12317,(1),null);
var w = cljs.core.nth.call(null,vec__12317,(2),null);
var e = cljs.core.nth.call(null,vec__12317,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12323 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12323,(0),null);
var s = cljs.core.nth.call(null,vec__12323,(1),null);
var w = cljs.core.nth.call(null,vec__12323,(2),null);
var e = cljs.core.nth.call(null,vec__12323,(3),null);
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
var pred__12329_12332 = cljs.core._EQ_;
var expr__12330_12333 = func;
if(cljs.core.truth_(pred__12329_12332.call(null,"watch-visible",expr__12330_12333))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"flight-states",expr__12330_12333))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"intersect",expr__12330_12333))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"clear",expr__12330_12333))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"move-to",expr__12330_12333))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"schedule",expr__12330_12333))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"camera",expr__12330_12333))){
rete4flight.core.camera.call(null);
} else {
if(cljs.core.truth_(pred__12329_12332.call(null,"manual",expr__12330_12333))){
rete4flight.core.manual.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12330_12333)].join('')));
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
return (function rete4flight$core$remote_call_$_iter__12350(s__12351){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__12351__$1 = s__12351;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12351__$1);
if(temp__4657__auto__){
var s__12351__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12351__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12351__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12353 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12352 = (0);
while(true){
if((i__12352 < size__6523__auto__)){
var vec__12360 = cljs.core._nth.call(null,c__6522__auto__,i__12352);
var f = cljs.core.nth.call(null,vec__12360,(0),null);
var k = cljs.core.nth.call(null,vec__12360,(1),null);
cljs.core.chunk_append.call(null,b__12353,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__12366 = (i__12352 + (1));
i__12352 = G__12366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12353),rete4flight$core$remote_call_$_iter__12350.call(null,cljs.core.chunk_rest.call(null,s__12351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12353),null);
}
} else {
var vec__12363 = cljs.core.first.call(null,s__12351__$2);
var f = cljs.core.nth.call(null,vec__12363,(0),null);
var k = cljs.core.nth.call(null,vec__12363,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__12350.call(null,cljs.core.rest.call(null,s__12351__$2)));
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

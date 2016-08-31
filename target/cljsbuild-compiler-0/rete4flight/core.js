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
rete4flight.core.TRN_STP = (3);
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
rete4flight.core.URL_EXD = "http://localhost:3000/ext-data/";
rete4flight.core.URL_OSM = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
rete4flight.core.URL_GST = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
rete4flight.core.URL_GHB = "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}";
rete4flight.core.URL_GTR = "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}";
rete4flight.core.URL_GSA = "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}";
rete4flight.core.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","waterbody","isle","railwaystation","mountain","CLIMB","airport","LEVEL","INTERSECT"],["http://localhost:3000/img/greenpln32.png","http://localhost:3000/img/river.png","http://localhost:3000/img/edu.png","http://localhost:3000/img/landmark.png","http://localhost:3000/img/city.png","http://localhost:3000/img/greypln32.png","http://localhost:3000/img/event.png","http://localhost:3000/img/waterbody.png","http://localhost:3000/img/isle.png","http://localhost:3000/img/railwaystation.png","http://localhost:3000/img/mountain.png","http://localhost:3000/img/bluepln32.png","http://localhost:3000/img/airport.png","http://localhost:3000/img/purplepln32.png","http://localhost:3000/img/redpln32.png"]);
rete4flight.core.CAMERA = new cljs.core.Keyword(null,"off","off",606440789);
rete4flight.core.ONBOARD = null;
rete4flight.core.MANUAL = new cljs.core.Keyword(null,"off","off",606440789);
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
rete4flight.core.map_view = (function rete4flight$core$map_view(lat,lon){
var cen = (new L.LatLng(lat,lon));
var zom = cljs.core.deref.call(null,rete4flight.core.chart).getZoom();
return cljs.core.deref.call(null,rete4flight.core.chart).setView(cen,zom,cljs.core.PersistentArrayMap.EMPTY);
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
rete4flight.core.create_marker = (function rete4flight$core$create_marker(lat,lon,sta){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": rete4flight.core.URL_ICO.call(null,sta), "iconSize": [(32),(32)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (pos,ico,opt,mk){
return (function (e){
return rete4flight.core.info.call(null,cljs.core.ffirst.call(null,cljs.core.filter.call(null,((function (pos,ico,opt,mk){
return (function (p1__11747_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__11747_SHARP_)),e.target);
});})(pos,ico,opt,mk))
,cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs)))));
});})(pos,ico,opt,mk))
);

return mk;
});
rete4flight.core.delete_mapob = (function rete4flight$core$delete_mapob(id){
var temp__4657__auto__ = cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var mob = temp__4657__auto__;
var temp__4655__auto___11748 = mob.call(null,new cljs.core.Keyword(null,"mover","mover",935114769));
if(cljs.core.truth_(temp__4655__auto___11748)){
var mvr_11749 = temp__4655__auto___11748;
cljs.core.async.close_BANG_.call(null,mvr_11749);
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

rete4flight.core.set_anchor.call(null,id,lat,lon,crs,spd);

return cljs.core._vreset_BANG_.call(null,rete4flight.core.mapobs,cljs.core.assoc_in.call(null,cljs.core._deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"mover","mover",935114769)], null),rete4flight.core.repeater.call(null,((function (mrk){
return (function (){
return rete4flight.core.move.call(null,id);
});})(mrk))
,rete4flight.core.DLT_MOV)));
});
rete4flight.core.clear_mapobs = (function rete4flight$core$clear_mapobs(){
var seq__11754 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs)));
var chunk__11755 = null;
var count__11756 = (0);
var i__11757 = (0);
while(true){
if((i__11757 < count__11756)){
var id = cljs.core._nth.call(null,chunk__11755,i__11757);
rete4flight.core.delete_mapob.call(null,id);

var G__11758 = seq__11754;
var G__11759 = chunk__11755;
var G__11760 = count__11756;
var G__11761 = (i__11757 + (1));
seq__11754 = G__11758;
chunk__11755 = G__11759;
count__11756 = G__11760;
i__11757 = G__11761;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11754);
if(temp__4657__auto__){
var seq__11754__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11754__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11754__$1);
var G__11762 = cljs.core.chunk_rest.call(null,seq__11754__$1);
var G__11763 = c__6555__auto__;
var G__11764 = cljs.core.count.call(null,c__6555__auto__);
var G__11765 = (0);
seq__11754 = G__11762;
chunk__11755 = G__11763;
count__11756 = G__11764;
i__11757 = G__11765;
continue;
} else {
var id = cljs.core.first.call(null,seq__11754__$1);
rete4flight.core.delete_mapob.call(null,id);

var G__11766 = cljs.core.next.call(null,seq__11754__$1);
var G__11767 = null;
var G__11768 = (0);
var G__11769 = (0);
seq__11754 = G__11766;
chunk__11755 = G__11767;
count__11756 = G__11768;
i__11757 = G__11769;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.index = (function rete4flight$core$index(var_args){
var args11770 = [];
var len__6819__auto___11777 = arguments.length;
var i__6820__auto___11778 = (0);
while(true){
if((i__6820__auto___11778 < len__6819__auto___11777)){
args11770.push((arguments[i__6820__auto___11778]));

var G__11779 = (i__6820__auto___11778 + (1));
i__6820__auto___11778 = G__11779;
continue;
} else {
}
break;
}

var G__11772 = args11770.length;
switch (G__11772) {
case 2:
return rete4flight.core.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return rete4flight.core.index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11770.length)].join('')));

}
});

rete4flight.core.index.cljs$core$IFn$_invoke$arity$2 = (function (e,p__11773){
var vec__11774 = p__11773;
var seq__11775 = cljs.core.seq.call(null,vec__11774);
var first__11776 = cljs.core.first.call(null,seq__11775);
var seq__11775__$1 = cljs.core.next.call(null,seq__11775);
var f = first__11776;
var r = seq__11775__$1;
return rete4flight.core.index.call(null,(0),e,f,r);
});

rete4flight.core.index.cljs$core$IFn$_invoke$arity$4 = (function (i,e,f,r){
if(cljs.core._EQ_.call(null,e,f)){
return i;
} else {
if(cljs.core.empty_QMARK_.call(null,r)){
return (-1);
} else {
return rete4flight.core.index.call(null,(i + (1)),e,cljs.core.first.call(null,r),cljs.core.rest.call(null,r));

}
}
});

rete4flight.core.index.cljs$lang$maxFixedArity = 4;

rete4flight.core.create_pm_marker = (function rete4flight$core$create_pm_marker(lat,lon,sta){
var pos = (new L.LatLng(lat,lon));
var ico = L.icon(({"iconUrl": rete4flight.core.URL_ICO.call(null,sta), "iconSize": [(24),(24)]}));
var opt = ({"icon": ico, "draggable": true});
var mk = L.rotatedMarker(pos,opt);
mk.on("click",((function (pos,ico,opt,mk){
return (function (e){
return rete4flight.core.info.call(null,[cljs.core.str("pm"),cljs.core.str(rete4flight.core.index.call(null,e.target,cljs.core.deref.call(null,rete4flight.core.placemarks)))].join(''));
});})(pos,ico,opt,mk))
);

return mk;
});
rete4flight.core.create_placemark = (function rete4flight$core$create_placemark(lat,lon,sta){
var mrk = rete4flight.core.create_pm_marker.call(null,lat,lon,sta);
mrk.addTo(cljs.core.deref.call(null,rete4flight.core.chart));

return cljs.core._vreset_BANG_.call(null,rete4flight.core.placemarks,cljs.core.conj.call(null,cljs.core._deref.call(null,rete4flight.core.placemarks),mrk));
});
rete4flight.core.clear_placemarks = (function rete4flight$core$clear_placemarks(){
var seq__11785_11789 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.placemarks));
var chunk__11786_11790 = null;
var count__11787_11791 = (0);
var i__11788_11792 = (0);
while(true){
if((i__11788_11792 < count__11787_11791)){
var mrk_11793 = cljs.core._nth.call(null,chunk__11786_11790,i__11788_11792);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk_11793);

var G__11794 = seq__11785_11789;
var G__11795 = chunk__11786_11790;
var G__11796 = count__11787_11791;
var G__11797 = (i__11788_11792 + (1));
seq__11785_11789 = G__11794;
chunk__11786_11790 = G__11795;
count__11787_11791 = G__11796;
i__11788_11792 = G__11797;
continue;
} else {
var temp__4657__auto___11798 = cljs.core.seq.call(null,seq__11785_11789);
if(temp__4657__auto___11798){
var seq__11785_11799__$1 = temp__4657__auto___11798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11785_11799__$1)){
var c__6555__auto___11800 = cljs.core.chunk_first.call(null,seq__11785_11799__$1);
var G__11801 = cljs.core.chunk_rest.call(null,seq__11785_11799__$1);
var G__11802 = c__6555__auto___11800;
var G__11803 = cljs.core.count.call(null,c__6555__auto___11800);
var G__11804 = (0);
seq__11785_11789 = G__11801;
chunk__11786_11790 = G__11802;
count__11787_11791 = G__11803;
i__11788_11792 = G__11804;
continue;
} else {
var mrk_11805 = cljs.core.first.call(null,seq__11785_11799__$1);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk_11805);

var G__11806 = cljs.core.next.call(null,seq__11785_11799__$1);
var G__11807 = null;
var G__11808 = (0);
var G__11809 = (0);
seq__11785_11789 = G__11806;
chunk__11786_11790 = G__11807;
count__11787_11791 = G__11808;
i__11788_11792 = G__11809;
continue;
}
} else {
}
}
break;
}

return cljs.core.vreset_BANG_.call(null,rete4flight.core.placemarks,cljs.core.PersistentVector.EMPTY);
});
rete4flight.core.add_trail = (function rete4flight$core$add_trail(id,lla,options,time){
var ops = cljs.core.clj__GT_js.call(null,options);
var llg = cljs.core.map.call(null,((function (ops){
return (function (p1__11810_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11810_SHARP_),cljs.core.second.call(null,p1__11810_SHARP_)));
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
return (function (state_11839){
var state_val_11840 = (state_11839[(1)]);
if((state_val_11840 === (1))){
var inst_11830 = cljs.core.async.timeout.call(null,time);
var state_11839__$1 = state_11839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11839__$1,(2),inst_11830);
} else {
if((state_val_11840 === (2))){
var inst_11832 = (state_11839[(2)]);
var inst_11833 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11834 = inst_11833.removeLayer(trl);
var inst_11835 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_11836 = cljs.core.dissoc.call(null,inst_11835,id);
var inst_11837 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_11836);
var state_11839__$1 = (function (){var statearr_11841 = state_11839;
(statearr_11841[(7)] = inst_11834);

(statearr_11841[(8)] = inst_11832);

return statearr_11841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11839__$1,inst_11837);
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
var statearr_11845 = [null,null,null,null,null,null,null,null,null];
(statearr_11845[(0)] = rete4flight$core$add_trail_$_state_machine__9312__auto__);

(statearr_11845[(1)] = (1));

return statearr_11845;
});
var rete4flight$core$add_trail_$_state_machine__9312__auto____1 = (function (state_11839){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11846){if((e11846 instanceof Object)){
var ex__9315__auto__ = e11846;
var statearr_11847_11849 = state_11839;
(statearr_11847_11849[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11850 = state_11839;
state_11839 = G__11850;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9312__auto__ = function(state_11839){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9312__auto____1.call(this,state_11839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9312__auto____0;
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9312__auto____1;
return rete4flight$core$add_trail_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,llg,lle,trl))
})();
var state__9378__auto__ = (function (){var statearr_11848 = f__9377__auto__.call(null);
(statearr_11848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11848;
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
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__11851_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__11851_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__11852_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__11852_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__11853_SHARP_){
return p1__11853_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__11854,ops){
var vec__11858 = p__11854;
var id1 = cljs.core.nth.call(null,vec__11858,(0),null);
var id2 = cljs.core.nth.call(null,vec__11858,(1),null);
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
return (function (state_11889){
var state_val_11890 = (state_11889[(1)]);
if((state_val_11890 === (1))){
var inst_11880 = cljs.core.async.timeout.call(null,del);
var state_11889__$1 = state_11889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11889__$1,(2),inst_11880);
} else {
if((state_val_11890 === (2))){
var inst_11882 = (state_11889[(2)]);
var inst_11883 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11884 = inst_11883.removeLayer(lnk);
var inst_11885 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_11886 = cljs.core.dissoc.call(null,inst_11885,ids);
var inst_11887 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_11886);
var state_11889__$1 = (function (){var statearr_11891 = state_11889;
(statearr_11891[(7)] = inst_11884);

(statearr_11891[(8)] = inst_11882);

return statearr_11891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11889__$1,inst_11887);
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
var statearr_11895 = [null,null,null,null,null,null,null,null,null];
(statearr_11895[(0)] = rete4flight$core$add_link_$_state_machine__9312__auto__);

(statearr_11895[(1)] = (1));

return statearr_11895;
});
var rete4flight$core$add_link_$_state_machine__9312__auto____1 = (function (state_11889){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11896){if((e11896 instanceof Object)){
var ex__9315__auto__ = e11896;
var statearr_11897_11899 = state_11889;
(statearr_11897_11899[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11900 = state_11889;
state_11889 = G__11900;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9312__auto__ = function(state_11889){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9312__auto____1.call(this,state_11889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9312__auto____0;
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9312__auto____1;
return rete4flight$core$add_link_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,tmin,del,llg,lnk))
})();
var state__9378__auto__ = (function (){var statearr_11898 = f__9377__auto__.call(null);
(statearr_11898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11898;
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
var seq__11911 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__11912 = null;
var count__11913 = (0);
var i__11914 = (0);
while(true){
if((i__11914 < count__11913)){
var vec__11915 = cljs.core._nth.call(null,chunk__11912,i__11914);
var ids = cljs.core.nth.call(null,vec__11915,(0),null);
var lnk = cljs.core.nth.call(null,vec__11915,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11921 = seq__11911;
var G__11922 = chunk__11912;
var G__11923 = count__11913;
var G__11924 = (i__11914 + (1));
seq__11911 = G__11921;
chunk__11912 = G__11922;
count__11913 = G__11923;
i__11914 = G__11924;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11911);
if(temp__4657__auto__){
var seq__11911__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11911__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11911__$1);
var G__11925 = cljs.core.chunk_rest.call(null,seq__11911__$1);
var G__11926 = c__6555__auto__;
var G__11927 = cljs.core.count.call(null,c__6555__auto__);
var G__11928 = (0);
seq__11911 = G__11925;
chunk__11912 = G__11926;
count__11913 = G__11927;
i__11914 = G__11928;
continue;
} else {
var vec__11918 = cljs.core.first.call(null,seq__11911__$1);
var ids = cljs.core.nth.call(null,vec__11918,(0),null);
var lnk = cljs.core.nth.call(null,vec__11918,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11929 = cljs.core.next.call(null,seq__11911__$1);
var G__11930 = null;
var G__11931 = (0);
var G__11932 = (0);
seq__11911 = G__11929;
chunk__11912 = G__11930;
count__11913 = G__11931;
i__11914 = G__11932;
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
var seq__11937 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__11938 = null;
var count__11939 = (0);
var i__11940 = (0);
while(true){
if((i__11940 < count__11939)){
var ids = cljs.core._nth.call(null,chunk__11938,i__11940);
rete4flight.core.delete_link.call(null,ids);

var G__11941 = seq__11937;
var G__11942 = chunk__11938;
var G__11943 = count__11939;
var G__11944 = (i__11940 + (1));
seq__11937 = G__11941;
chunk__11938 = G__11942;
count__11939 = G__11943;
i__11940 = G__11944;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11937);
if(temp__4657__auto__){
var seq__11937__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11937__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11937__$1);
var G__11945 = cljs.core.chunk_rest.call(null,seq__11937__$1);
var G__11946 = c__6555__auto__;
var G__11947 = cljs.core.count.call(null,c__6555__auto__);
var G__11948 = (0);
seq__11937 = G__11945;
chunk__11938 = G__11946;
count__11939 = G__11947;
i__11940 = G__11948;
continue;
} else {
var ids = cljs.core.first.call(null,seq__11937__$1);
rete4flight.core.delete_link.call(null,ids);

var G__11949 = cljs.core.next.call(null,seq__11937__$1);
var G__11950 = null;
var G__11951 = (0);
var G__11952 = (0);
seq__11937 = G__11949;
chunk__11938 = G__11950;
count__11939 = G__11951;
i__11940 = G__11952;
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
var args11953 = [];
var len__6819__auto___11975 = arguments.length;
var i__6820__auto___11976 = (0);
while(true){
if((i__6820__auto___11976 < len__6819__auto___11975)){
args11953.push((arguments[i__6820__auto___11976]));

var G__11977 = (i__6820__auto___11976 + (1));
i__6820__auto___11976 = G__11977;
continue;
} else {
}
break;
}

var G__11955 = args11953.length;
switch (G__11955) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11953.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__11956 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__11956,(0),null);
var lon = cljs.core.nth.call(null,vec__11956,(1),null);
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
return (function (state_11965){
var state_val_11966 = (state_11965[(1)]);
if((state_val_11966 === (1))){
var inst_11959 = cljs.core.async.timeout.call(null,time);
var state_11965__$1 = state_11965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11965__$1,(2),inst_11959);
} else {
if((state_val_11966 === (2))){
var inst_11961 = (state_11965[(2)]);
var inst_11962 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11963 = inst_11962.removeLayer(pop);
var state_11965__$1 = (function (){var statearr_11967 = state_11965;
(statearr_11967[(7)] = inst_11961);

return statearr_11967;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11965__$1,inst_11963);
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
var statearr_11971 = [null,null,null,null,null,null,null,null];
(statearr_11971[(0)] = rete4flight$core$state_machine__9312__auto__);

(statearr_11971[(1)] = (1));

return statearr_11971;
});
var rete4flight$core$state_machine__9312__auto____1 = (function (state_11965){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11972){if((e11972 instanceof Object)){
var ex__9315__auto__ = e11972;
var statearr_11973_11979 = state_11965;
(statearr_11973_11979[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11980 = state_11965;
state_11965 = G__11980;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$state_machine__9312__auto__ = function(state_11965){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9312__auto____1.call(this,state_11965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9312__auto____0;
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9312__auto____1;
return rete4flight$core$state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,pop))
})();
var state__9378__auto__ = (function (){var statearr_11974 = f__9377__auto__.call(null);
(statearr_11974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11974;
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
rete4flight.core.map_view.call(null,lat,lon);

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
return (function (state_12057){
var state_val_12058 = (state_12057[(1)]);
if((state_val_12058 === (7))){
var inst_12030 = (state_12057[(7)]);
var inst_12040 = (inst_12030 - rete4flight.core.TRN_STP);
var inst_12041 = rete4flight.core.set_course_BANG_.call(null,id,inst_12040);
var state_12057__$1 = state_12057;
var statearr_12059_12079 = state_12057__$1;
(statearr_12059_12079[(2)] = inst_12041);

(statearr_12059_12079[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (1))){
var inst_12030 = crs;
var state_12057__$1 = (function (){var statearr_12060 = state_12057;
(statearr_12060[(7)] = inst_12030);

return statearr_12060;
})();
var statearr_12061_12080 = state_12057__$1;
(statearr_12061_12080[(2)] = null);

(statearr_12061_12080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (4))){
var inst_12036 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_12057__$1 = state_12057;
var statearr_12062_12081 = state_12057__$1;
(statearr_12062_12081[(2)] = inst_12036);

(statearr_12062_12081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (6))){
var inst_12053 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
var statearr_12063_12082 = state_12057__$1;
(statearr_12063_12082[(2)] = inst_12053);

(statearr_12063_12082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (3))){
var inst_12055 = (state_12057[(2)]);
var state_12057__$1 = state_12057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12057__$1,inst_12055);
} else {
if((state_val_12058 === (2))){
var inst_12030 = (state_12057[(7)]);
var inst_12032 = (inst_12030 - on_course);
var inst_12033 = Math.abs(inst_12032);
var inst_12034 = (inst_12033 < rete4flight.core.TRN_STP);
var state_12057__$1 = state_12057;
if(cljs.core.truth_(inst_12034)){
var statearr_12064_12083 = state_12057__$1;
(statearr_12064_12083[(1)] = (4));

} else {
var statearr_12065_12084 = state_12057__$1;
(statearr_12065_12084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (9))){
var inst_12046 = (state_12057[(2)]);
var inst_12047 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_12057__$1 = (function (){var statearr_12066 = state_12057;
(statearr_12066[(8)] = inst_12046);

return statearr_12066;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12057__$1,(10),inst_12047);
} else {
if((state_val_12058 === (5))){
var inst_12038 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_12057__$1 = state_12057;
if(inst_12038){
var statearr_12067_12085 = state_12057__$1;
(statearr_12067_12085[(1)] = (7));

} else {
var statearr_12068_12086 = state_12057__$1;
(statearr_12068_12086[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (10))){
var inst_12049 = (state_12057[(2)]);
var inst_12050 = rete4flight.core.course.call(null,id);
var inst_12030 = inst_12050;
var state_12057__$1 = (function (){var statearr_12069 = state_12057;
(statearr_12069[(9)] = inst_12049);

(statearr_12069[(7)] = inst_12030);

return statearr_12069;
})();
var statearr_12070_12087 = state_12057__$1;
(statearr_12070_12087[(2)] = null);

(statearr_12070_12087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12058 === (8))){
var inst_12030 = (state_12057[(7)]);
var inst_12043 = (inst_12030 + rete4flight.core.TRN_STP);
var inst_12044 = rete4flight.core.set_course_BANG_.call(null,id,inst_12043);
var state_12057__$1 = state_12057;
var statearr_12071_12088 = state_12057__$1;
(statearr_12071_12088[(2)] = inst_12044);

(statearr_12071_12088[(1)] = (9));


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
var statearr_12075 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12075[(0)] = rete4flight$core$turn_$_state_machine__9312__auto__);

(statearr_12075[(1)] = (1));

return statearr_12075;
});
var rete4flight$core$turn_$_state_machine__9312__auto____1 = (function (state_12057){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_12057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e12076){if((e12076 instanceof Object)){
var ex__9315__auto__ = e12076;
var statearr_12077_12089 = state_12057;
(statearr_12077_12089[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12090 = state_12057;
state_12057 = G__12090;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__9312__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__9312__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__9312__auto____0;
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__9312__auto____1;
return rete4flight$core$turn_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,side,crs))
})();
var state__9378__auto__ = (function (){var statearr_12078 = f__9377__auto__.call(null);
(statearr_12078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_12078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9378__auto__);
});})(c__9376__auto__,side,crs))
);

return c__9376__auto__;
} else {
return null;
}
});
rete4flight.core.event_handler = (function rete4flight$core$event_handler(response){
var seq__12141 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12142 = null;
var count__12143 = (0);
var i__12144 = (0);
while(true){
if((i__12144 < count__12143)){
var map__12145 = cljs.core._nth.call(null,chunk__12142,i__12144);
var map__12145__$1 = ((((!((map__12145 == null)))?((((map__12145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12145):map__12145);
var evt = map__12145__$1;
var event = cljs.core.get.call(null,map__12145__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12147_12191 = cljs.core._EQ_;
var expr__12148_12192 = event;
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12148_12192))){
var map__12150_12193 = evt;
var map__12150_12194__$1 = ((((!((map__12150_12193 == null)))?((((map__12150_12193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12150_12193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12150_12193):map__12150_12193);
var id_12195 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12196 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12197 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12198 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12199 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12200 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12201 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12202 = cljs.core.get.call(null,map__12150_12194__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12195,callsign_12196,lat_12197,lon_12198,crs_12199,spd_12200,alt_12201,state_12202);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12148_12192))){
var map__12152_12203 = evt;
var map__12152_12204__$1 = ((((!((map__12152_12203 == null)))?((((map__12152_12203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12152_12203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12152_12203):map__12152_12203);
var id_12205 = cljs.core.get.call(null,map__12152_12204__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12205);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12148_12192))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12148_12192))){
var map__12154_12206 = evt;
var map__12154_12207__$1 = ((((!((map__12154_12206 == null)))?((((map__12154_12206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12154_12206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12154_12206):map__12154_12206);
var ids_12208 = cljs.core.get.call(null,map__12154_12207__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12209 = cljs.core.get.call(null,map__12154_12207__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12208,options_12209);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12148_12192))){
var map__12156_12210 = evt;
var map__12156_12211__$1 = ((((!((map__12156_12210 == null)))?((((map__12156_12210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12156_12210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12156_12210):map__12156_12210);
var ids_12212 = cljs.core.get.call(null,map__12156_12211__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12212);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12148_12192))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12148_12192))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12148_12192))){
var map__12158_12213 = evt;
var map__12158_12214__$1 = ((((!((map__12158_12213 == null)))?((((map__12158_12213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12158_12213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12158_12213):map__12158_12213);
var id_12215 = cljs.core.get.call(null,map__12158_12214__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12216 = cljs.core.get.call(null,map__12158_12214__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12217 = cljs.core.get.call(null,map__12158_12214__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12218 = cljs.core.get.call(null,map__12158_12214__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12219 = cljs.core.get.call(null,map__12158_12214__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12215)){
rete4flight.core.add_popup.call(null,id_12215,html_12218,time_12219);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12216;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12217;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12216,lon_12217,html_12218,time_12219);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12148_12192))){
var map__12160_12220 = evt;
var map__12160_12221__$1 = ((((!((map__12160_12220 == null)))?((((map__12160_12220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12160_12220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12160_12220):map__12160_12220);
var id_12222 = cljs.core.get.call(null,map__12160_12221__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12223 = cljs.core.get.call(null,map__12160_12221__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12224 = cljs.core.get.call(null,map__12160_12221__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12225 = cljs.core.get.call(null,map__12160_12221__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12222,lla_12223,options_12224,time_12225);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12148_12192))){
var map__12162_12226 = evt;
var map__12162_12227__$1 = ((((!((map__12162_12226 == null)))?((((map__12162_12226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12162_12226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12162_12226):map__12162_12226);
var lat_12228 = cljs.core.get.call(null,map__12162_12227__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12229 = cljs.core.get.call(null,map__12162_12227__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12228,lon_12229);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12148_12192))){
var map__12164_12230 = evt;
var map__12164_12231__$1 = ((((!((map__12164_12230 == null)))?((((map__12164_12230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12164_12230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164_12230):map__12164_12230);
var id_12232 = cljs.core.get.call(null,map__12164_12231__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12233 = cljs.core.get.call(null,map__12164_12231__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12232,on_course_12233);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12148_12192))){
var map__12166_12234 = evt;
var map__12166_12235__$1 = ((((!((map__12166_12234 == null)))?((((map__12166_12234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12166_12234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12166_12234):map__12166_12234);
var lat_12236 = cljs.core.get.call(null,map__12166_12235__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12237 = cljs.core.get.call(null,map__12166_12235__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var state_12238 = cljs.core.get.call(null,map__12166_12235__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,lat_12236,lon_12237,state_12238);
} else {
if(cljs.core.truth_(pred__12147_12191.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12148_12192))){
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

var G__12239 = seq__12141;
var G__12240 = chunk__12142;
var G__12241 = count__12143;
var G__12242 = (i__12144 + (1));
seq__12141 = G__12239;
chunk__12142 = G__12240;
count__12143 = G__12241;
i__12144 = G__12242;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12141);
if(temp__4657__auto__){
var seq__12141__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12141__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__12141__$1);
var G__12243 = cljs.core.chunk_rest.call(null,seq__12141__$1);
var G__12244 = c__6555__auto__;
var G__12245 = cljs.core.count.call(null,c__6555__auto__);
var G__12246 = (0);
seq__12141 = G__12243;
chunk__12142 = G__12244;
count__12143 = G__12245;
i__12144 = G__12246;
continue;
} else {
var map__12168 = cljs.core.first.call(null,seq__12141__$1);
var map__12168__$1 = ((((!((map__12168 == null)))?((((map__12168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12168):map__12168);
var evt = map__12168__$1;
var event = cljs.core.get.call(null,map__12168__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12170_12247 = cljs.core._EQ_;
var expr__12171_12248 = event;
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12171_12248))){
var map__12173_12249 = evt;
var map__12173_12250__$1 = ((((!((map__12173_12249 == null)))?((((map__12173_12249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12173_12249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12173_12249):map__12173_12249);
var id_12251 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12252 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12253 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12254 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12255 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12256 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12257 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12258 = cljs.core.get.call(null,map__12173_12250__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12251,callsign_12252,lat_12253,lon_12254,crs_12255,spd_12256,alt_12257,state_12258);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12171_12248))){
var map__12175_12259 = evt;
var map__12175_12260__$1 = ((((!((map__12175_12259 == null)))?((((map__12175_12259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12175_12259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12175_12259):map__12175_12259);
var id_12261 = cljs.core.get.call(null,map__12175_12260__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12261);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12171_12248))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12171_12248))){
var map__12177_12262 = evt;
var map__12177_12263__$1 = ((((!((map__12177_12262 == null)))?((((map__12177_12262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12177_12262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12177_12262):map__12177_12262);
var ids_12264 = cljs.core.get.call(null,map__12177_12263__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12265 = cljs.core.get.call(null,map__12177_12263__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12264,options_12265);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12171_12248))){
var map__12179_12266 = evt;
var map__12179_12267__$1 = ((((!((map__12179_12266 == null)))?((((map__12179_12266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12179_12266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12179_12266):map__12179_12266);
var ids_12268 = cljs.core.get.call(null,map__12179_12267__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12268);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12171_12248))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12171_12248))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12171_12248))){
var map__12181_12269 = evt;
var map__12181_12270__$1 = ((((!((map__12181_12269 == null)))?((((map__12181_12269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12181_12269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12181_12269):map__12181_12269);
var id_12271 = cljs.core.get.call(null,map__12181_12270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12272 = cljs.core.get.call(null,map__12181_12270__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12273 = cljs.core.get.call(null,map__12181_12270__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12274 = cljs.core.get.call(null,map__12181_12270__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12275 = cljs.core.get.call(null,map__12181_12270__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12271)){
rete4flight.core.add_popup.call(null,id_12271,html_12274,time_12275);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12272;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12273;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12272,lon_12273,html_12274,time_12275);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12171_12248))){
var map__12183_12276 = evt;
var map__12183_12277__$1 = ((((!((map__12183_12276 == null)))?((((map__12183_12276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12183_12276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12183_12276):map__12183_12276);
var id_12278 = cljs.core.get.call(null,map__12183_12277__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12279 = cljs.core.get.call(null,map__12183_12277__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12280 = cljs.core.get.call(null,map__12183_12277__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12281 = cljs.core.get.call(null,map__12183_12277__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12278,lla_12279,options_12280,time_12281);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12171_12248))){
var map__12185_12282 = evt;
var map__12185_12283__$1 = ((((!((map__12185_12282 == null)))?((((map__12185_12282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12185_12282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12185_12282):map__12185_12282);
var lat_12284 = cljs.core.get.call(null,map__12185_12283__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12285 = cljs.core.get.call(null,map__12185_12283__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12284,lon_12285);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12171_12248))){
var map__12187_12286 = evt;
var map__12187_12287__$1 = ((((!((map__12187_12286 == null)))?((((map__12187_12286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12187_12286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12187_12286):map__12187_12286);
var id_12288 = cljs.core.get.call(null,map__12187_12287__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12289 = cljs.core.get.call(null,map__12187_12287__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12288,on_course_12289);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12171_12248))){
var map__12189_12290 = evt;
var map__12189_12291__$1 = ((((!((map__12189_12290 == null)))?((((map__12189_12290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12189_12290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12189_12290):map__12189_12290);
var lat_12292 = cljs.core.get.call(null,map__12189_12291__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12293 = cljs.core.get.call(null,map__12189_12291__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var state_12294 = cljs.core.get.call(null,map__12189_12291__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,lat_12292,lon_12293,state_12294);
} else {
if(cljs.core.truth_(pred__12170_12247.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12171_12248))){
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

var G__12295 = cljs.core.next.call(null,seq__12141__$1);
var G__12296 = null;
var G__12297 = (0);
var G__12298 = (0);
seq__12141 = G__12295;
chunk__12142 = G__12296;
count__12143 = G__12297;
i__12144 = G__12298;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12299){
var map__12302 = p__12299;
var map__12302__$1 = ((((!((map__12302 == null)))?((((map__12302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12302):map__12302);
var status = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12302__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return cljs.core.println.call(null,[cljs.core.str("AJAX ERROR: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
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
rete4flight.core.manual_show = (function rete4flight$core$manual_show(crs,spd,alt){
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"on","on",173873944))){
rete4flight.core.set_html_BANG_.call(null,"course-fld",[cljs.core.str("<input value='"),cljs.core.str(crs),cljs.core.str("' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualcrs(this.value)'>")].join(''));

rete4flight.core.set_html_BANG_.call(null,"speed-fld",[cljs.core.str("<input value='"),cljs.core.str(spd),cljs.core.str("' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualspd(this.value)'>")].join(''));

return rete4flight.core.set_html_BANG_.call(null,"altitude-fld",[cljs.core.str("<input value='"),cljs.core.str(alt),cljs.core.str("' style='width:40px' "),cljs.core.str("onchange='javascript:rete4flight.core.manualalt(this.value)'>")].join(''));
} else {
return null;
}
});
rete4flight.core.manual_hide = (function rete4flight$core$manual_hide(){
rete4flight.core.set_html_BANG_.call(null,"course-fld","");

rete4flight.core.set_html_BANG_.call(null,"speed-fld","");

return rete4flight.core.set_html_BANG_.call(null,"altitude-fld","");
});
rete4flight.core.display_flight_data = (function rete4flight$core$display_flight_data(){
if(cljs.core._EQ_.call(null,rete4flight.core.CAMERA,new cljs.core.Keyword(null,"on","on",173873944))){
var temp__4657__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rete4flight.core.ONBOARD,new cljs.core.Keyword(null,"laloalcs","laloalcs",1578251860)], null));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__12307 = temp__4657__auto__;
var lat = cljs.core.nth.call(null,vec__12307,(0),null);
var lon = cljs.core.nth.call(null,vec__12307,(1),null);
var alt = cljs.core.nth.call(null,vec__12307,(2),null);
var crs = cljs.core.nth.call(null,vec__12307,(3),null);
var spd = cljs.core.nth.call(null,vec__12307,(4),null);
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
rete4flight.core.manual = (function rete4flight$core$manual(){
var temp__4655__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rete4flight.core.ONBOARD,new cljs.core.Keyword(null,"laloalcs","laloalcs",1578251860)], null));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__12313 = temp__4655__auto__;
var lat = cljs.core.nth.call(null,vec__12313,(0),null);
var lon = cljs.core.nth.call(null,vec__12313,(1),null);
var alt = cljs.core.nth.call(null,vec__12313,(2),null);
var crs = cljs.core.nth.call(null,vec__12313,(3),null);
var spd = cljs.core.nth.call(null,vec__12313,(4),null);
if(cljs.core._EQ_.call(null,rete4flight.core.MANUAL,new cljs.core.Keyword(null,"off","off",606440789))){
rete4flight.core.manual_show.call(null,crs,spd,alt);

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
} else {
return null;
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

rete4flight.core.set_html_BANG_.call(null,"pitch-fld",[cljs.core.str("<input value='-20' style='width:90px' "),cljs.core.str("onchange='javascript:rete4flight.core.campit(this.value)'>")].join(''));

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
rete4flight.core.camera_on_handler = (function rete4flight$core$camera_on_handler(response){
var callsigns = rete4flight.core.read_transit.call(null,response);
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.camonb(this.value)' style='width:96px'>"),cljs.core.str("<option value='0'/>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = ((function (callsigns){
return (function rete4flight$core$camera_on_handler_$_iter__12320(s__12321){
return (new cljs.core.LazySeq(null,((function (callsigns){
return (function (){
var s__12321__$1 = s__12321;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12321__$1);
if(temp__4657__auto__){
var s__12321__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12321__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12321__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12323 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12322 = (0);
while(true){
if((i__12322 < size__6523__auto__)){
var e = cljs.core._nth.call(null,c__6522__auto__,i__12322);
cljs.core.chunk_append.call(null,b__12323,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__12324 = (i__12322 + (1));
i__12322 = G__12324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12323),rete4flight$core$camera_on_handler_$_iter__12320.call(null,cljs.core.chunk_rest.call(null,s__12321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12323),null);
}
} else {
var e = cljs.core.first.call(null,s__12321__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),rete4flight$core$camera_on_handler_$_iter__12320.call(null,cljs.core.rest.call(null,s__12321__$2)));
}
} else {
return null;
}
break;
}
});})(callsigns))
,null,null));
});})(callsigns))
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
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_hour_$_iter__12329(s__12330){
return (new cljs.core.LazySeq(null,(function (){
var s__12330__$1 = s__12330;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12330__$1);
if(temp__4657__auto__){
var s__12330__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12330__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12330__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12332 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12331 = (0);
while(true){
if((i__12331 < size__6523__auto__)){
var hour = cljs.core._nth.call(null,c__6522__auto__,i__12331);
cljs.core.chunk_append.call(null,b__12332,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12333 = (i__12331 + (1));
i__12331 = G__12333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12332),rete4flight$core$sel_hour_$_iter__12329.call(null,cljs.core.chunk_rest.call(null,s__12330__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12332),null);
}
} else {
var hour = cljs.core.first.call(null,s__12330__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12329.call(null,cljs.core.rest.call(null,s__12330__$2)));
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
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_minute_$_iter__12338(s__12339){
return (new cljs.core.LazySeq(null,(function (){
var s__12339__$1 = s__12339;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12339__$1);
if(temp__4657__auto__){
var s__12339__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12339__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12339__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12341 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12340 = (0);
while(true){
if((i__12340 < size__6523__auto__)){
var min = cljs.core._nth.call(null,c__6522__auto__,i__12340);
cljs.core.chunk_append.call(null,b__12341,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12342 = (i__12340 + (1));
i__12340 = G__12342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12341),rete4flight$core$sel_minute_$_iter__12338.call(null,cljs.core.chunk_rest.call(null,s__12339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12341),null);
}
} else {
var min = cljs.core.first.call(null,s__12339__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12338.call(null,cljs.core.rest.call(null,s__12339__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_country_$_iter__12347(s__12348){
return (new cljs.core.LazySeq(null,(function (){
var s__12348__$1 = s__12348;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12348__$1);
if(temp__4657__auto__){
var s__12348__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12348__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12348__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12350 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12349 = (0);
while(true){
if((i__12349 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12349);
cljs.core.chunk_append.call(null,b__12350,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12351 = (i__12349 + (1));
i__12349 = G__12351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12350),rete4flight$core$sel_from_country_$_iter__12347.call(null,cljs.core.chunk_rest.call(null,s__12348__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12350),null);
}
} else {
var contry = cljs.core.first.call(null,s__12348__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12347.call(null,cljs.core.rest.call(null,s__12348__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12356(s__12357){
return (new cljs.core.LazySeq(null,(function (){
var s__12357__$1 = s__12357;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12357__$1);
if(temp__4657__auto__){
var s__12357__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12357__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12357__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12359 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12358 = (0);
while(true){
if((i__12358 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12358);
cljs.core.chunk_append.call(null,b__12359,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12360 = (i__12358 + (1));
i__12358 = G__12360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12359),rete4flight$core$sel_from_airport_$_iter__12356.call(null,cljs.core.chunk_rest.call(null,s__12357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12359),null);
}
} else {
var airport = cljs.core.first.call(null,s__12357__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12356.call(null,cljs.core.rest.call(null,s__12357__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_country_$_iter__12365(s__12366){
return (new cljs.core.LazySeq(null,(function (){
var s__12366__$1 = s__12366;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12366__$1);
if(temp__4657__auto__){
var s__12366__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12366__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12366__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12368 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12367 = (0);
while(true){
if((i__12367 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12367);
cljs.core.chunk_append.call(null,b__12368,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12369 = (i__12367 + (1));
i__12367 = G__12369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12368),rete4flight$core$sel_to_country_$_iter__12365.call(null,cljs.core.chunk_rest.call(null,s__12366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12368),null);
}
} else {
var contry = cljs.core.first.call(null,s__12366__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12365.call(null,cljs.core.rest.call(null,s__12366__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12374(s__12375){
return (new cljs.core.LazySeq(null,(function (){
var s__12375__$1 = s__12375;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12375__$1);
if(temp__4657__auto__){
var s__12375__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12375__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12375__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12377 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12376 = (0);
while(true){
if((i__12376 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12376);
cljs.core.chunk_append.call(null,b__12377,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12378 = (i__12376 + (1));
i__12376 = G__12378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12377),rete4flight$core$sel_to_airport_$_iter__12374.call(null,cljs.core.chunk_rest.call(null,s__12375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12377),null);
}
} else {
var airport = cljs.core.first.call(null,s__12375__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12374.call(null,cljs.core.rest.call(null,s__12375__$2)));
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
var vec__12382 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12382,(0),null);
var s = cljs.core.nth.call(null,vec__12382,(1),null);
var w = cljs.core.nth.call(null,vec__12382,(2),null);
var e = cljs.core.nth.call(null,vec__12382,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12388 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12388,(0),null);
var s = cljs.core.nth.call(null,vec__12388,(1),null);
var w = cljs.core.nth.call(null,vec__12388,(2),null);
var e = cljs.core.nth.call(null,vec__12388,(3),null);
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
rete4flight.core.ext_data = (function rete4flight$core$ext_data(){
return ajax.core.GET.call(null,rete4flight.core.URL_EXD,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.COMMANDS = "<select onchange='javascript:rete4flight.core.commands(this.value)'>\n  \t\t\t<option value='commands'>Commands</option>\n  \t\t\t<option value='watch-visible'>Watch visible area</option>\n  \t\t\t<option value='flight-states'>State of flights</option>\n  \t\t\t<option value='intersect'>Intersections</option>\n  \t\t\t<option value='move-to'>Move to Airport</option>\n  \t\t\t<option value='schedule'>Schedule Flight</option>\n  \t\t\t<option value='camera'>Camera</option>\n  \t\t\t<option value='manual'>Manual Control</option>\n  \t\t\t<option value='ext-data'>Wikipedia</option>\n  \t\t\t<option value='clear'>Clear</option>\n\t\t</select>";
rete4flight.core.commands = (function rete4flight$core$commands(func){
var pred__12394_12397 = cljs.core._EQ_;
var expr__12395_12398 = func;
if(cljs.core.truth_(pred__12394_12397.call(null,"watch-visible",expr__12395_12398))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"flight-states",expr__12395_12398))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"intersect",expr__12395_12398))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"clear",expr__12395_12398))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"move-to",expr__12395_12398))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"schedule",expr__12395_12398))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"camera",expr__12395_12398))){
rete4flight.core.camera.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"manual",expr__12395_12398))){
rete4flight.core.manual.call(null);
} else {
if(cljs.core.truth_(pred__12394_12397.call(null,"ext-data",expr__12395_12398))){
rete4flight.core.ext_data.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12395_12398)].join('')));
}
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
return (function rete4flight$core$remote_call_$_iter__12415(s__12416){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__12416__$1 = s__12416;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12416__$1);
if(temp__4657__auto__){
var s__12416__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12416__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12416__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12418 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12417 = (0);
while(true){
if((i__12417 < size__6523__auto__)){
var vec__12425 = cljs.core._nth.call(null,c__6522__auto__,i__12417);
var f = cljs.core.nth.call(null,vec__12425,(0),null);
var k = cljs.core.nth.call(null,vec__12425,(1),null);
cljs.core.chunk_append.call(null,b__12418,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__12431 = (i__12417 + (1));
i__12417 = G__12431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12418),rete4flight$core$remote_call_$_iter__12415.call(null,cljs.core.chunk_rest.call(null,s__12416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12418),null);
}
} else {
var vec__12428 = cljs.core.first.call(null,s__12416__$2);
var f = cljs.core.nth.call(null,vec__12428,(0),null);
var k = cljs.core.nth.call(null,vec__12428,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__12415.call(null,cljs.core.rest.call(null,s__12416__$2)));
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
rete4flight.core.check_events = (function rete4flight$core$check_events(){
ajax.core.GET.call(null,rete4flight.core.URL_EVT,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.event_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));

return rete4flight.core.display_flight_data.call(null);
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

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
rete4flight.core.URL_EXD = "http://localhost:3000/ext-data/";
rete4flight.core.URL_OSM = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
rete4flight.core.URL_GST = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";
rete4flight.core.URL_GHB = "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}";
rete4flight.core.URL_GTR = "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}";
rete4flight.core.URL_GSA = "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}";
rete4flight.core.URL_ICO = cljs.core.PersistentHashMap.fromArrays(["DESCEND","river","edu","landmark","city","GROUND","event","railwaystation","mountain","CLIMB","LEVEL","INTERSECT"],["http://localhost:3000/img/greenpln32.png","http://localhost:3000/img/river.png","http://localhost:3000/img/edu.png","http://localhost:3000/img/landmark.png","http://localhost:3000/img/city.png","http://localhost:3000/img/greypln32.png","http://localhost:3000/img/event.png","http://localhost:3000/img/railwaystation.png","http://localhost:3000/img/mountain.png","http://localhost:3000/img/bluepln32.png","http://localhost:3000/img/purplepln32.png","http://localhost:3000/img/redpln32.png"]);
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
rete4flight.core.index = (function rete4flight$core$index(var_args){
var args11741 = [];
var len__6819__auto___11748 = arguments.length;
var i__6820__auto___11749 = (0);
while(true){
if((i__6820__auto___11749 < len__6819__auto___11748)){
args11741.push((arguments[i__6820__auto___11749]));

var G__11750 = (i__6820__auto___11749 + (1));
i__6820__auto___11749 = G__11750;
continue;
} else {
}
break;
}

var G__11743 = args11741.length;
switch (G__11743) {
case 2:
return rete4flight.core.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return rete4flight.core.index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11741.length)].join('')));

}
});

rete4flight.core.index.cljs$core$IFn$_invoke$arity$2 = (function (e,p__11744){
var vec__11745 = p__11744;
var seq__11746 = cljs.core.seq.call(null,vec__11745);
var first__11747 = cljs.core.first.call(null,seq__11746);
var seq__11746__$1 = cljs.core.next.call(null,seq__11746);
var f = first__11747;
var r = seq__11746__$1;
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
var vec__11755 = rete4flight.core.spherical_between.call(null,phi,lam,way,dir);
var phi2 = cljs.core.nth.call(null,vec__11755,(0),null);
var lam2 = cljs.core.nth.call(null,vec__11755,(1),null);
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
var temp__4655__auto___11758 = mob.call(null,new cljs.core.Keyword(null,"mover","mover",935114769));
if(cljs.core.truth_(temp__4655__auto___11758)){
var mvr_11759 = temp__4655__auto___11758;
cljs.core.async.close_BANG_.call(null,mvr_11759);
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
var seq__11764 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.mapobs)));
var chunk__11765 = null;
var count__11766 = (0);
var i__11767 = (0);
while(true){
if((i__11767 < count__11766)){
var id = cljs.core._nth.call(null,chunk__11765,i__11767);
rete4flight.core.delete_mapob.call(null,id);

var G__11768 = seq__11764;
var G__11769 = chunk__11765;
var G__11770 = count__11766;
var G__11771 = (i__11767 + (1));
seq__11764 = G__11768;
chunk__11765 = G__11769;
count__11766 = G__11770;
i__11767 = G__11771;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11764);
if(temp__4657__auto__){
var seq__11764__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11764__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11764__$1);
var G__11772 = cljs.core.chunk_rest.call(null,seq__11764__$1);
var G__11773 = c__6555__auto__;
var G__11774 = cljs.core.count.call(null,c__6555__auto__);
var G__11775 = (0);
seq__11764 = G__11772;
chunk__11765 = G__11773;
count__11766 = G__11774;
i__11767 = G__11775;
continue;
} else {
var id = cljs.core.first.call(null,seq__11764__$1);
rete4flight.core.delete_mapob.call(null,id);

var G__11776 = cljs.core.next.call(null,seq__11764__$1);
var G__11777 = null;
var G__11778 = (0);
var G__11779 = (0);
seq__11764 = G__11776;
chunk__11765 = G__11777;
count__11766 = G__11778;
i__11767 = G__11779;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.create_placemark = (function rete4flight$core$create_placemark(lat,lon,sta){
var mrk = rete4flight.core.create_pm_marker.call(null,lat,lon,sta);
mrk.addTo(cljs.core.deref.call(null,rete4flight.core.chart));

return cljs.core._vreset_BANG_.call(null,rete4flight.core.placemarks,cljs.core.conj.call(null,cljs.core._deref.call(null,rete4flight.core.placemarks),mrk));
});
rete4flight.core.clear_placemarks = (function rete4flight$core$clear_placemarks(){
var seq__11784_11788 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.placemarks));
var chunk__11785_11789 = null;
var count__11786_11790 = (0);
var i__11787_11791 = (0);
while(true){
if((i__11787_11791 < count__11786_11790)){
var mrk_11792 = cljs.core._nth.call(null,chunk__11785_11789,i__11787_11791);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk_11792);

var G__11793 = seq__11784_11788;
var G__11794 = chunk__11785_11789;
var G__11795 = count__11786_11790;
var G__11796 = (i__11787_11791 + (1));
seq__11784_11788 = G__11793;
chunk__11785_11789 = G__11794;
count__11786_11790 = G__11795;
i__11787_11791 = G__11796;
continue;
} else {
var temp__4657__auto___11797 = cljs.core.seq.call(null,seq__11784_11788);
if(temp__4657__auto___11797){
var seq__11784_11798__$1 = temp__4657__auto___11797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11784_11798__$1)){
var c__6555__auto___11799 = cljs.core.chunk_first.call(null,seq__11784_11798__$1);
var G__11800 = cljs.core.chunk_rest.call(null,seq__11784_11798__$1);
var G__11801 = c__6555__auto___11799;
var G__11802 = cljs.core.count.call(null,c__6555__auto___11799);
var G__11803 = (0);
seq__11784_11788 = G__11800;
chunk__11785_11789 = G__11801;
count__11786_11790 = G__11802;
i__11787_11791 = G__11803;
continue;
} else {
var mrk_11804 = cljs.core.first.call(null,seq__11784_11798__$1);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk_11804);

var G__11805 = cljs.core.next.call(null,seq__11784_11798__$1);
var G__11806 = null;
var G__11807 = (0);
var G__11808 = (0);
seq__11784_11788 = G__11805;
chunk__11785_11789 = G__11806;
count__11786_11790 = G__11807;
i__11787_11791 = G__11808;
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
return (function (p1__11809_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11809_SHARP_),cljs.core.second.call(null,p1__11809_SHARP_)));
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
return (function (state_11838){
var state_val_11839 = (state_11838[(1)]);
if((state_val_11839 === (1))){
var inst_11829 = cljs.core.async.timeout.call(null,time);
var state_11838__$1 = state_11838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11838__$1,(2),inst_11829);
} else {
if((state_val_11839 === (2))){
var inst_11831 = (state_11838[(2)]);
var inst_11832 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11833 = inst_11832.removeLayer(trl);
var inst_11834 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_11835 = cljs.core.dissoc.call(null,inst_11834,id);
var inst_11836 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_11835);
var state_11838__$1 = (function (){var statearr_11840 = state_11838;
(statearr_11840[(7)] = inst_11833);

(statearr_11840[(8)] = inst_11831);

return statearr_11840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11838__$1,inst_11836);
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
var statearr_11844 = [null,null,null,null,null,null,null,null,null];
(statearr_11844[(0)] = rete4flight$core$add_trail_$_state_machine__9312__auto__);

(statearr_11844[(1)] = (1));

return statearr_11844;
});
var rete4flight$core$add_trail_$_state_machine__9312__auto____1 = (function (state_11838){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11845){if((e11845 instanceof Object)){
var ex__9315__auto__ = e11845;
var statearr_11846_11848 = state_11838;
(statearr_11846_11848[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11849 = state_11838;
state_11838 = G__11849;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9312__auto__ = function(state_11838){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9312__auto____1.call(this,state_11838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9312__auto____0;
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9312__auto____1;
return rete4flight$core$add_trail_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,llg,lle,trl))
})();
var state__9378__auto__ = (function (){var statearr_11847 = f__9377__auto__.call(null);
(statearr_11847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11847;
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
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__11850_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__11850_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__11851_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__11851_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__11852_SHARP_){
return p1__11852_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__11853,ops){
var vec__11857 = p__11853;
var id1 = cljs.core.nth.call(null,vec__11857,(0),null);
var id2 = cljs.core.nth.call(null,vec__11857,(1),null);
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
return (function (state_11888){
var state_val_11889 = (state_11888[(1)]);
if((state_val_11889 === (1))){
var inst_11879 = cljs.core.async.timeout.call(null,del);
var state_11888__$1 = state_11888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11888__$1,(2),inst_11879);
} else {
if((state_val_11889 === (2))){
var inst_11881 = (state_11888[(2)]);
var inst_11882 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11883 = inst_11882.removeLayer(lnk);
var inst_11884 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_11885 = cljs.core.dissoc.call(null,inst_11884,ids);
var inst_11886 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_11885);
var state_11888__$1 = (function (){var statearr_11890 = state_11888;
(statearr_11890[(7)] = inst_11881);

(statearr_11890[(8)] = inst_11883);

return statearr_11890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11888__$1,inst_11886);
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
var statearr_11894 = [null,null,null,null,null,null,null,null,null];
(statearr_11894[(0)] = rete4flight$core$add_link_$_state_machine__9312__auto__);

(statearr_11894[(1)] = (1));

return statearr_11894;
});
var rete4flight$core$add_link_$_state_machine__9312__auto____1 = (function (state_11888){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11895){if((e11895 instanceof Object)){
var ex__9315__auto__ = e11895;
var statearr_11896_11898 = state_11888;
(statearr_11896_11898[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11899 = state_11888;
state_11888 = G__11899;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9312__auto__ = function(state_11888){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9312__auto____1.call(this,state_11888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9312__auto____0;
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9312__auto____1;
return rete4flight$core$add_link_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,tmin,del,llg,lnk))
})();
var state__9378__auto__ = (function (){var statearr_11897 = f__9377__auto__.call(null);
(statearr_11897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11897;
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
var seq__11910 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__11911 = null;
var count__11912 = (0);
var i__11913 = (0);
while(true){
if((i__11913 < count__11912)){
var vec__11914 = cljs.core._nth.call(null,chunk__11911,i__11913);
var ids = cljs.core.nth.call(null,vec__11914,(0),null);
var lnk = cljs.core.nth.call(null,vec__11914,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11920 = seq__11910;
var G__11921 = chunk__11911;
var G__11922 = count__11912;
var G__11923 = (i__11913 + (1));
seq__11910 = G__11920;
chunk__11911 = G__11921;
count__11912 = G__11922;
i__11913 = G__11923;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11910);
if(temp__4657__auto__){
var seq__11910__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11910__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11910__$1);
var G__11924 = cljs.core.chunk_rest.call(null,seq__11910__$1);
var G__11925 = c__6555__auto__;
var G__11926 = cljs.core.count.call(null,c__6555__auto__);
var G__11927 = (0);
seq__11910 = G__11924;
chunk__11911 = G__11925;
count__11912 = G__11926;
i__11913 = G__11927;
continue;
} else {
var vec__11917 = cljs.core.first.call(null,seq__11910__$1);
var ids = cljs.core.nth.call(null,vec__11917,(0),null);
var lnk = cljs.core.nth.call(null,vec__11917,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11928 = cljs.core.next.call(null,seq__11910__$1);
var G__11929 = null;
var G__11930 = (0);
var G__11931 = (0);
seq__11910 = G__11928;
chunk__11911 = G__11929;
count__11912 = G__11930;
i__11913 = G__11931;
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
var seq__11936 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__11937 = null;
var count__11938 = (0);
var i__11939 = (0);
while(true){
if((i__11939 < count__11938)){
var ids = cljs.core._nth.call(null,chunk__11937,i__11939);
rete4flight.core.delete_link.call(null,ids);

var G__11940 = seq__11936;
var G__11941 = chunk__11937;
var G__11942 = count__11938;
var G__11943 = (i__11939 + (1));
seq__11936 = G__11940;
chunk__11937 = G__11941;
count__11938 = G__11942;
i__11939 = G__11943;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11936);
if(temp__4657__auto__){
var seq__11936__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11936__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11936__$1);
var G__11944 = cljs.core.chunk_rest.call(null,seq__11936__$1);
var G__11945 = c__6555__auto__;
var G__11946 = cljs.core.count.call(null,c__6555__auto__);
var G__11947 = (0);
seq__11936 = G__11944;
chunk__11937 = G__11945;
count__11938 = G__11946;
i__11939 = G__11947;
continue;
} else {
var ids = cljs.core.first.call(null,seq__11936__$1);
rete4flight.core.delete_link.call(null,ids);

var G__11948 = cljs.core.next.call(null,seq__11936__$1);
var G__11949 = null;
var G__11950 = (0);
var G__11951 = (0);
seq__11936 = G__11948;
chunk__11937 = G__11949;
count__11938 = G__11950;
i__11939 = G__11951;
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
var args11952 = [];
var len__6819__auto___11974 = arguments.length;
var i__6820__auto___11975 = (0);
while(true){
if((i__6820__auto___11975 < len__6819__auto___11974)){
args11952.push((arguments[i__6820__auto___11975]));

var G__11976 = (i__6820__auto___11975 + (1));
i__6820__auto___11975 = G__11976;
continue;
} else {
}
break;
}

var G__11954 = args11952.length;
switch (G__11954) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11952.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__11955 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__11955,(0),null);
var lon = cljs.core.nth.call(null,vec__11955,(1),null);
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
return (function (state_11964){
var state_val_11965 = (state_11964[(1)]);
if((state_val_11965 === (1))){
var inst_11958 = cljs.core.async.timeout.call(null,time);
var state_11964__$1 = state_11964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11964__$1,(2),inst_11958);
} else {
if((state_val_11965 === (2))){
var inst_11960 = (state_11964[(2)]);
var inst_11961 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11962 = inst_11961.removeLayer(pop);
var state_11964__$1 = (function (){var statearr_11966 = state_11964;
(statearr_11966[(7)] = inst_11960);

return statearr_11966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11964__$1,inst_11962);
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
var statearr_11970 = [null,null,null,null,null,null,null,null];
(statearr_11970[(0)] = rete4flight$core$state_machine__9312__auto__);

(statearr_11970[(1)] = (1));

return statearr_11970;
});
var rete4flight$core$state_machine__9312__auto____1 = (function (state_11964){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11971){if((e11971 instanceof Object)){
var ex__9315__auto__ = e11971;
var statearr_11972_11978 = state_11964;
(statearr_11972_11978[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11979 = state_11964;
state_11964 = G__11979;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$state_machine__9312__auto__ = function(state_11964){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9312__auto____1.call(this,state_11964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9312__auto____0;
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9312__auto____1;
return rete4flight$core$state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,pop))
})();
var state__9378__auto__ = (function (){var statearr_11973 = f__9377__auto__.call(null);
(statearr_11973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11973;
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
return (function (state_12056){
var state_val_12057 = (state_12056[(1)]);
if((state_val_12057 === (7))){
var inst_12029 = (state_12056[(7)]);
var inst_12039 = (inst_12029 - (4));
var inst_12040 = rete4flight.core.set_course_BANG_.call(null,id,inst_12039);
var state_12056__$1 = state_12056;
var statearr_12058_12078 = state_12056__$1;
(statearr_12058_12078[(2)] = inst_12040);

(statearr_12058_12078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (1))){
var inst_12029 = crs;
var state_12056__$1 = (function (){var statearr_12059 = state_12056;
(statearr_12059[(7)] = inst_12029);

return statearr_12059;
})();
var statearr_12060_12079 = state_12056__$1;
(statearr_12060_12079[(2)] = null);

(statearr_12060_12079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (4))){
var inst_12035 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_12056__$1 = state_12056;
var statearr_12061_12080 = state_12056__$1;
(statearr_12061_12080[(2)] = inst_12035);

(statearr_12061_12080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (6))){
var inst_12052 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
var statearr_12062_12081 = state_12056__$1;
(statearr_12062_12081[(2)] = inst_12052);

(statearr_12062_12081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (3))){
var inst_12054 = (state_12056[(2)]);
var state_12056__$1 = state_12056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12056__$1,inst_12054);
} else {
if((state_val_12057 === (2))){
var inst_12029 = (state_12056[(7)]);
var inst_12031 = (inst_12029 - on_course);
var inst_12032 = Math.abs(inst_12031);
var inst_12033 = (inst_12032 < (4));
var state_12056__$1 = state_12056;
if(cljs.core.truth_(inst_12033)){
var statearr_12063_12082 = state_12056__$1;
(statearr_12063_12082[(1)] = (4));

} else {
var statearr_12064_12083 = state_12056__$1;
(statearr_12064_12083[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (9))){
var inst_12045 = (state_12056[(2)]);
var inst_12046 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_12056__$1 = (function (){var statearr_12065 = state_12056;
(statearr_12065[(8)] = inst_12045);

return statearr_12065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12056__$1,(10),inst_12046);
} else {
if((state_val_12057 === (5))){
var inst_12037 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_12056__$1 = state_12056;
if(inst_12037){
var statearr_12066_12084 = state_12056__$1;
(statearr_12066_12084[(1)] = (7));

} else {
var statearr_12067_12085 = state_12056__$1;
(statearr_12067_12085[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (10))){
var inst_12048 = (state_12056[(2)]);
var inst_12049 = rete4flight.core.course.call(null,id);
var inst_12029 = inst_12049;
var state_12056__$1 = (function (){var statearr_12068 = state_12056;
(statearr_12068[(7)] = inst_12029);

(statearr_12068[(9)] = inst_12048);

return statearr_12068;
})();
var statearr_12069_12086 = state_12056__$1;
(statearr_12069_12086[(2)] = null);

(statearr_12069_12086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12057 === (8))){
var inst_12029 = (state_12056[(7)]);
var inst_12042 = (inst_12029 + (4));
var inst_12043 = rete4flight.core.set_course_BANG_.call(null,id,inst_12042);
var state_12056__$1 = state_12056;
var statearr_12070_12087 = state_12056__$1;
(statearr_12070_12087[(2)] = inst_12043);

(statearr_12070_12087[(1)] = (9));


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
var statearr_12074 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12074[(0)] = rete4flight$core$turn_$_state_machine__9312__auto__);

(statearr_12074[(1)] = (1));

return statearr_12074;
});
var rete4flight$core$turn_$_state_machine__9312__auto____1 = (function (state_12056){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_12056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e12075){if((e12075 instanceof Object)){
var ex__9315__auto__ = e12075;
var statearr_12076_12088 = state_12056;
(statearr_12076_12088[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12089 = state_12056;
state_12056 = G__12089;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__9312__auto__ = function(state_12056){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__9312__auto____1.call(this,state_12056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__9312__auto____0;
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__9312__auto____1;
return rete4flight$core$turn_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,side,crs))
})();
var state__9378__auto__ = (function (){var statearr_12077 = f__9377__auto__.call(null);
(statearr_12077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_12077;
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
var vec__12093 = temp__4657__auto__;
var lat = cljs.core.nth.call(null,vec__12093,(0),null);
var lon = cljs.core.nth.call(null,vec__12093,(1),null);
var alt = cljs.core.nth.call(null,vec__12093,(2),null);
var crs = cljs.core.nth.call(null,vec__12093,(3),null);
var spd = cljs.core.nth.call(null,vec__12093,(4),null);
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
var seq__12146 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12147 = null;
var count__12148 = (0);
var i__12149 = (0);
while(true){
if((i__12149 < count__12148)){
var map__12150 = cljs.core._nth.call(null,chunk__12147,i__12149);
var map__12150__$1 = ((((!((map__12150 == null)))?((((map__12150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12150):map__12150);
var evt = map__12150__$1;
var event = cljs.core.get.call(null,map__12150__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12152_12196 = cljs.core._EQ_;
var expr__12153_12197 = event;
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12153_12197))){
var map__12155_12198 = evt;
var map__12155_12199__$1 = ((((!((map__12155_12198 == null)))?((((map__12155_12198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12155_12198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12155_12198):map__12155_12198);
var id_12200 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12201 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12202 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12203 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12204 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12205 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12206 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12207 = cljs.core.get.call(null,map__12155_12199__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12200,callsign_12201,lat_12202,lon_12203,crs_12204,spd_12205,alt_12206,state_12207);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12153_12197))){
var map__12157_12208 = evt;
var map__12157_12209__$1 = ((((!((map__12157_12208 == null)))?((((map__12157_12208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12157_12208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12157_12208):map__12157_12208);
var id_12210 = cljs.core.get.call(null,map__12157_12209__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12210);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12153_12197))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12153_12197))){
var map__12159_12211 = evt;
var map__12159_12212__$1 = ((((!((map__12159_12211 == null)))?((((map__12159_12211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12159_12211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12159_12211):map__12159_12211);
var ids_12213 = cljs.core.get.call(null,map__12159_12212__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12214 = cljs.core.get.call(null,map__12159_12212__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12213,options_12214);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12153_12197))){
var map__12161_12215 = evt;
var map__12161_12216__$1 = ((((!((map__12161_12215 == null)))?((((map__12161_12215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12161_12215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12161_12215):map__12161_12215);
var ids_12217 = cljs.core.get.call(null,map__12161_12216__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12217);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12153_12197))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12153_12197))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12153_12197))){
var map__12163_12218 = evt;
var map__12163_12219__$1 = ((((!((map__12163_12218 == null)))?((((map__12163_12218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12163_12218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12163_12218):map__12163_12218);
var id_12220 = cljs.core.get.call(null,map__12163_12219__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12221 = cljs.core.get.call(null,map__12163_12219__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12222 = cljs.core.get.call(null,map__12163_12219__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12223 = cljs.core.get.call(null,map__12163_12219__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12224 = cljs.core.get.call(null,map__12163_12219__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12220)){
rete4flight.core.add_popup.call(null,id_12220,html_12223,time_12224);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12221;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12222;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12221,lon_12222,html_12223,time_12224);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12153_12197))){
var map__12165_12225 = evt;
var map__12165_12226__$1 = ((((!((map__12165_12225 == null)))?((((map__12165_12225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12165_12225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12165_12225):map__12165_12225);
var id_12227 = cljs.core.get.call(null,map__12165_12226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12228 = cljs.core.get.call(null,map__12165_12226__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12229 = cljs.core.get.call(null,map__12165_12226__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12230 = cljs.core.get.call(null,map__12165_12226__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12227,lla_12228,options_12229,time_12230);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12153_12197))){
var map__12167_12231 = evt;
var map__12167_12232__$1 = ((((!((map__12167_12231 == null)))?((((map__12167_12231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12167_12231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12167_12231):map__12167_12231);
var lat_12233 = cljs.core.get.call(null,map__12167_12232__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12234 = cljs.core.get.call(null,map__12167_12232__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12233,lon_12234);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12153_12197))){
var map__12169_12235 = evt;
var map__12169_12236__$1 = ((((!((map__12169_12235 == null)))?((((map__12169_12235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12169_12235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12169_12235):map__12169_12235);
var id_12237 = cljs.core.get.call(null,map__12169_12236__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12238 = cljs.core.get.call(null,map__12169_12236__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12237,on_course_12238);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12153_12197))){
var map__12171_12239 = evt;
var map__12171_12240__$1 = ((((!((map__12171_12239 == null)))?((((map__12171_12239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12171_12239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12171_12239):map__12171_12239);
var lat_12241 = cljs.core.get.call(null,map__12171_12240__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12242 = cljs.core.get.call(null,map__12171_12240__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var state_12243 = cljs.core.get.call(null,map__12171_12240__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,lat_12241,lon_12242,state_12243);
} else {
if(cljs.core.truth_(pred__12152_12196.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12153_12197))){
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

var G__12244 = seq__12146;
var G__12245 = chunk__12147;
var G__12246 = count__12148;
var G__12247 = (i__12149 + (1));
seq__12146 = G__12244;
chunk__12147 = G__12245;
count__12148 = G__12246;
i__12149 = G__12247;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12146);
if(temp__4657__auto__){
var seq__12146__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12146__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__12146__$1);
var G__12248 = cljs.core.chunk_rest.call(null,seq__12146__$1);
var G__12249 = c__6555__auto__;
var G__12250 = cljs.core.count.call(null,c__6555__auto__);
var G__12251 = (0);
seq__12146 = G__12248;
chunk__12147 = G__12249;
count__12148 = G__12250;
i__12149 = G__12251;
continue;
} else {
var map__12173 = cljs.core.first.call(null,seq__12146__$1);
var map__12173__$1 = ((((!((map__12173 == null)))?((((map__12173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12173):map__12173);
var evt = map__12173__$1;
var event = cljs.core.get.call(null,map__12173__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12175_12252 = cljs.core._EQ_;
var expr__12176_12253 = event;
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12176_12253))){
var map__12178_12254 = evt;
var map__12178_12255__$1 = ((((!((map__12178_12254 == null)))?((((map__12178_12254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12178_12254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12178_12254):map__12178_12254);
var id_12256 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12257 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12258 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12259 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12260 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12261 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12262 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12263 = cljs.core.get.call(null,map__12178_12255__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12256,callsign_12257,lat_12258,lon_12259,crs_12260,spd_12261,alt_12262,state_12263);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12176_12253))){
var map__12180_12264 = evt;
var map__12180_12265__$1 = ((((!((map__12180_12264 == null)))?((((map__12180_12264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12180_12264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12180_12264):map__12180_12264);
var id_12266 = cljs.core.get.call(null,map__12180_12265__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12266);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12176_12253))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12176_12253))){
var map__12182_12267 = evt;
var map__12182_12268__$1 = ((((!((map__12182_12267 == null)))?((((map__12182_12267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12182_12267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12182_12267):map__12182_12267);
var ids_12269 = cljs.core.get.call(null,map__12182_12268__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12270 = cljs.core.get.call(null,map__12182_12268__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12269,options_12270);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12176_12253))){
var map__12184_12271 = evt;
var map__12184_12272__$1 = ((((!((map__12184_12271 == null)))?((((map__12184_12271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12184_12271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12184_12271):map__12184_12271);
var ids_12273 = cljs.core.get.call(null,map__12184_12272__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12273);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12176_12253))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12176_12253))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12176_12253))){
var map__12186_12274 = evt;
var map__12186_12275__$1 = ((((!((map__12186_12274 == null)))?((((map__12186_12274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12186_12274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12186_12274):map__12186_12274);
var id_12276 = cljs.core.get.call(null,map__12186_12275__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12277 = cljs.core.get.call(null,map__12186_12275__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12278 = cljs.core.get.call(null,map__12186_12275__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12279 = cljs.core.get.call(null,map__12186_12275__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12280 = cljs.core.get.call(null,map__12186_12275__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12276)){
rete4flight.core.add_popup.call(null,id_12276,html_12279,time_12280);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12277;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12278;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12277,lon_12278,html_12279,time_12280);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12176_12253))){
var map__12188_12281 = evt;
var map__12188_12282__$1 = ((((!((map__12188_12281 == null)))?((((map__12188_12281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12188_12281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12188_12281):map__12188_12281);
var id_12283 = cljs.core.get.call(null,map__12188_12282__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12284 = cljs.core.get.call(null,map__12188_12282__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12285 = cljs.core.get.call(null,map__12188_12282__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12286 = cljs.core.get.call(null,map__12188_12282__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12283,lla_12284,options_12285,time_12286);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12176_12253))){
var map__12190_12287 = evt;
var map__12190_12288__$1 = ((((!((map__12190_12287 == null)))?((((map__12190_12287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12190_12287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12190_12287):map__12190_12287);
var lat_12289 = cljs.core.get.call(null,map__12190_12288__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12290 = cljs.core.get.call(null,map__12190_12288__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12289,lon_12290);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12176_12253))){
var map__12192_12291 = evt;
var map__12192_12292__$1 = ((((!((map__12192_12291 == null)))?((((map__12192_12291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12192_12291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12192_12291):map__12192_12291);
var id_12293 = cljs.core.get.call(null,map__12192_12292__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12294 = cljs.core.get.call(null,map__12192_12292__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12293,on_course_12294);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12176_12253))){
var map__12194_12295 = evt;
var map__12194_12296__$1 = ((((!((map__12194_12295 == null)))?((((map__12194_12295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12194_12295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12194_12295):map__12194_12295);
var lat_12297 = cljs.core.get.call(null,map__12194_12296__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12298 = cljs.core.get.call(null,map__12194_12296__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var state_12299 = cljs.core.get.call(null,map__12194_12296__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,lat_12297,lon_12298,state_12299);
} else {
if(cljs.core.truth_(pred__12175_12252.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12176_12253))){
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

var G__12300 = cljs.core.next.call(null,seq__12146__$1);
var G__12301 = null;
var G__12302 = (0);
var G__12303 = (0);
seq__12146 = G__12300;
chunk__12147 = G__12301;
count__12148 = G__12302;
i__12149 = G__12303;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12304){
var map__12307 = p__12304;
var map__12307__$1 = ((((!((map__12307 == null)))?((((map__12307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12307):map__12307);
var status = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12307__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
return (function rete4flight$core$camera_on_handler_$_iter__12313(s__12314){
return (new cljs.core.LazySeq(null,((function (callsigns){
return (function (){
var s__12314__$1 = s__12314;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12314__$1);
if(temp__4657__auto__){
var s__12314__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12314__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12314__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12316 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12315 = (0);
while(true){
if((i__12315 < size__6523__auto__)){
var e = cljs.core._nth.call(null,c__6522__auto__,i__12315);
cljs.core.chunk_append.call(null,b__12316,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__12317 = (i__12315 + (1));
i__12315 = G__12317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12316),rete4flight$core$camera_on_handler_$_iter__12313.call(null,cljs.core.chunk_rest.call(null,s__12314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12316),null);
}
} else {
var e = cljs.core.first.call(null,s__12314__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),rete4flight$core$camera_on_handler_$_iter__12313.call(null,cljs.core.rest.call(null,s__12314__$2)));
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
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_hour_$_iter__12322(s__12323){
return (new cljs.core.LazySeq(null,(function (){
var s__12323__$1 = s__12323;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12323__$1);
if(temp__4657__auto__){
var s__12323__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12323__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12323__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12325 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12324 = (0);
while(true){
if((i__12324 < size__6523__auto__)){
var hour = cljs.core._nth.call(null,c__6522__auto__,i__12324);
cljs.core.chunk_append.call(null,b__12325,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12326 = (i__12324 + (1));
i__12324 = G__12326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12325),rete4flight$core$sel_hour_$_iter__12322.call(null,cljs.core.chunk_rest.call(null,s__12323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12325),null);
}
} else {
var hour = cljs.core.first.call(null,s__12323__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12322.call(null,cljs.core.rest.call(null,s__12323__$2)));
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
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_minute_$_iter__12331(s__12332){
return (new cljs.core.LazySeq(null,(function (){
var s__12332__$1 = s__12332;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12332__$1);
if(temp__4657__auto__){
var s__12332__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12332__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12332__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12334 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12333 = (0);
while(true){
if((i__12333 < size__6523__auto__)){
var min = cljs.core._nth.call(null,c__6522__auto__,i__12333);
cljs.core.chunk_append.call(null,b__12334,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12335 = (i__12333 + (1));
i__12333 = G__12335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),rete4flight$core$sel_minute_$_iter__12331.call(null,cljs.core.chunk_rest.call(null,s__12332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),null);
}
} else {
var min = cljs.core.first.call(null,s__12332__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12331.call(null,cljs.core.rest.call(null,s__12332__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_country_$_iter__12340(s__12341){
return (new cljs.core.LazySeq(null,(function (){
var s__12341__$1 = s__12341;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12341__$1);
if(temp__4657__auto__){
var s__12341__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12341__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12341__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12343 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12342 = (0);
while(true){
if((i__12342 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12342);
cljs.core.chunk_append.call(null,b__12343,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12344 = (i__12342 + (1));
i__12342 = G__12344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12343),rete4flight$core$sel_from_country_$_iter__12340.call(null,cljs.core.chunk_rest.call(null,s__12341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12343),null);
}
} else {
var contry = cljs.core.first.call(null,s__12341__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12340.call(null,cljs.core.rest.call(null,s__12341__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12349(s__12350){
return (new cljs.core.LazySeq(null,(function (){
var s__12350__$1 = s__12350;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12350__$1);
if(temp__4657__auto__){
var s__12350__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12350__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12350__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12352 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12351 = (0);
while(true){
if((i__12351 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12351);
cljs.core.chunk_append.call(null,b__12352,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12353 = (i__12351 + (1));
i__12351 = G__12353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12352),rete4flight$core$sel_from_airport_$_iter__12349.call(null,cljs.core.chunk_rest.call(null,s__12350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12352),null);
}
} else {
var airport = cljs.core.first.call(null,s__12350__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12349.call(null,cljs.core.rest.call(null,s__12350__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_country_$_iter__12358(s__12359){
return (new cljs.core.LazySeq(null,(function (){
var s__12359__$1 = s__12359;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12359__$1);
if(temp__4657__auto__){
var s__12359__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12359__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12359__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12361 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12360 = (0);
while(true){
if((i__12360 < size__6523__auto__)){
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12360);
cljs.core.chunk_append.call(null,b__12361,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12362 = (i__12360 + (1));
i__12360 = G__12362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),rete4flight$core$sel_to_country_$_iter__12358.call(null,cljs.core.chunk_rest.call(null,s__12359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),null);
}
} else {
var contry = cljs.core.first.call(null,s__12359__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12358.call(null,cljs.core.rest.call(null,s__12359__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12367(s__12368){
return (new cljs.core.LazySeq(null,(function (){
var s__12368__$1 = s__12368;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12368__$1);
if(temp__4657__auto__){
var s__12368__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12368__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12368__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12370 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12369 = (0);
while(true){
if((i__12369 < size__6523__auto__)){
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12369);
cljs.core.chunk_append.call(null,b__12370,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12371 = (i__12369 + (1));
i__12369 = G__12371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12370),rete4flight$core$sel_to_airport_$_iter__12367.call(null,cljs.core.chunk_rest.call(null,s__12368__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12370),null);
}
} else {
var airport = cljs.core.first.call(null,s__12368__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12367.call(null,cljs.core.rest.call(null,s__12368__$2)));
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
var vec__12375 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12375,(0),null);
var s = cljs.core.nth.call(null,vec__12375,(1),null);
var w = cljs.core.nth.call(null,vec__12375,(2),null);
var e = cljs.core.nth.call(null,vec__12375,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12381 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12381,(0),null);
var s = cljs.core.nth.call(null,vec__12381,(1),null);
var w = cljs.core.nth.call(null,vec__12381,(2),null);
var e = cljs.core.nth.call(null,vec__12381,(3),null);
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
var pred__12387_12390 = cljs.core._EQ_;
var expr__12388_12391 = func;
if(cljs.core.truth_(pred__12387_12390.call(null,"watch-visible",expr__12388_12391))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"flight-states",expr__12388_12391))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"intersect",expr__12388_12391))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"clear",expr__12388_12391))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"move-to",expr__12388_12391))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"schedule",expr__12388_12391))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"camera",expr__12388_12391))){
rete4flight.core.camera.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"manual",expr__12388_12391))){
rete4flight.core.manual.call(null);
} else {
if(cljs.core.truth_(pred__12387_12390.call(null,"ext-data",expr__12388_12391))){
rete4flight.core.ext_data.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12388_12391)].join('')));
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
return (function rete4flight$core$remote_call_$_iter__12408(s__12409){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__12409__$1 = s__12409;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12409__$1);
if(temp__4657__auto__){
var s__12409__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12409__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12409__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12411 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12410 = (0);
while(true){
if((i__12410 < size__6523__auto__)){
var vec__12418 = cljs.core._nth.call(null,c__6522__auto__,i__12410);
var f = cljs.core.nth.call(null,vec__12418,(0),null);
var k = cljs.core.nth.call(null,vec__12418,(1),null);
cljs.core.chunk_append.call(null,b__12411,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__12424 = (i__12410 + (1));
i__12410 = G__12424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12411),rete4flight$core$remote_call_$_iter__12408.call(null,cljs.core.chunk_rest.call(null,s__12409__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12411),null);
}
} else {
var vec__12421 = cljs.core.first.call(null,s__12409__$2);
var f = cljs.core.nth.call(null,vec__12421,(0),null);
var k = cljs.core.nth.call(null,vec__12421,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__12408.call(null,cljs.core.rest.call(null,s__12409__$2)));
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

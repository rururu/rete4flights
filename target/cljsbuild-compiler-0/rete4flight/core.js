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
var seq__11784 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.placemarks));
var chunk__11785 = null;
var count__11786 = (0);
var i__11787 = (0);
while(true){
if((i__11787 < count__11786)){
var mrk = cljs.core._nth.call(null,chunk__11785,i__11787);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk);

var G__11788 = seq__11784;
var G__11789 = chunk__11785;
var G__11790 = count__11786;
var G__11791 = (i__11787 + (1));
seq__11784 = G__11788;
chunk__11785 = G__11789;
count__11786 = G__11790;
i__11787 = G__11791;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11784);
if(temp__4657__auto__){
var seq__11784__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11784__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11784__$1);
var G__11792 = cljs.core.chunk_rest.call(null,seq__11784__$1);
var G__11793 = c__6555__auto__;
var G__11794 = cljs.core.count.call(null,c__6555__auto__);
var G__11795 = (0);
seq__11784 = G__11792;
chunk__11785 = G__11793;
count__11786 = G__11794;
i__11787 = G__11795;
continue;
} else {
var mrk = cljs.core.first.call(null,seq__11784__$1);
cljs.core.deref.call(null,rete4flight.core.chart).removeLayer(mrk);

var G__11796 = cljs.core.next.call(null,seq__11784__$1);
var G__11797 = null;
var G__11798 = (0);
var G__11799 = (0);
seq__11784 = G__11796;
chunk__11785 = G__11797;
count__11786 = G__11798;
i__11787 = G__11799;
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
return (function (p1__11800_SHARP_){
return (new L.LatLng(cljs.core.first.call(null,p1__11800_SHARP_),cljs.core.second.call(null,p1__11800_SHARP_)));
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
return (function (state_11829){
var state_val_11830 = (state_11829[(1)]);
if((state_val_11830 === (1))){
var inst_11820 = cljs.core.async.timeout.call(null,time);
var state_11829__$1 = state_11829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11829__$1,(2),inst_11820);
} else {
if((state_val_11830 === (2))){
var inst_11822 = (state_11829[(2)]);
var inst_11823 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11824 = inst_11823.removeLayer(trl);
var inst_11825 = cljs.core._deref.call(null,rete4flight.core.trails);
var inst_11826 = cljs.core.dissoc.call(null,inst_11825,id);
var inst_11827 = cljs.core._vreset_BANG_.call(null,rete4flight.core.trails,inst_11826);
var state_11829__$1 = (function (){var statearr_11831 = state_11829;
(statearr_11831[(7)] = inst_11824);

(statearr_11831[(8)] = inst_11822);

return statearr_11831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11829__$1,inst_11827);
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
var statearr_11835 = [null,null,null,null,null,null,null,null,null];
(statearr_11835[(0)] = rete4flight$core$add_trail_$_state_machine__9312__auto__);

(statearr_11835[(1)] = (1));

return statearr_11835;
});
var rete4flight$core$add_trail_$_state_machine__9312__auto____1 = (function (state_11829){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11836){if((e11836 instanceof Object)){
var ex__9315__auto__ = e11836;
var statearr_11837_11839 = state_11829;
(statearr_11837_11839[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11840 = state_11829;
state_11829 = G__11840;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_trail_$_state_machine__9312__auto__ = function(state_11829){
switch(arguments.length){
case 0:
return rete4flight$core$add_trail_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_trail_$_state_machine__9312__auto____1.call(this,state_11829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_trail_$_state_machine__9312__auto____0;
rete4flight$core$add_trail_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_trail_$_state_machine__9312__auto____1;
return rete4flight$core$add_trail_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,llg,lle,trl))
})();
var state__9378__auto__ = (function (){var statearr_11838 = f__9377__auto__.call(null);
(statearr_11838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11838;
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
var mobs = cljs.core.filter.call(null,cljs.core.some_QMARK_,cljs.core.map.call(null,(function (p1__11841_SHARP_){
return cljs.core.deref.call(null,rete4flight.core.mapobs).call(null,p1__11841_SHARP_);
}),ids));
var mrks = cljs.core.map.call(null,((function (mobs){
return (function (p1__11842_SHARP_){
return new cljs.core.Keyword(null,"marker","marker",865118313).cljs$core$IFn$_invoke$arity$1(p1__11842_SHARP_);
});})(mobs))
,mobs);
var llgs = cljs.core.map.call(null,((function (mobs,mrks){
return (function (p1__11843_SHARP_){
return p1__11843_SHARP_.getLatLng();
});})(mobs,mrks))
,mrks);
return cljs.core.clj__GT_js.call(null,llgs);
});
rete4flight.core.linkPopup = (function rete4flight$core$linkPopup(p__11844,ops){
var vec__11848 = p__11844;
var id1 = cljs.core.nth.call(null,vec__11848,(0),null);
var id2 = cljs.core.nth.call(null,vec__11848,(1),null);
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
return (function (state_11879){
var state_val_11880 = (state_11879[(1)]);
if((state_val_11880 === (1))){
var inst_11870 = cljs.core.async.timeout.call(null,del);
var state_11879__$1 = state_11879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(2),inst_11870);
} else {
if((state_val_11880 === (2))){
var inst_11872 = (state_11879[(2)]);
var inst_11873 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11874 = inst_11873.removeLayer(lnk);
var inst_11875 = cljs.core._deref.call(null,rete4flight.core.links);
var inst_11876 = cljs.core.dissoc.call(null,inst_11875,ids);
var inst_11877 = cljs.core._vreset_BANG_.call(null,rete4flight.core.links,inst_11876);
var state_11879__$1 = (function (){var statearr_11881 = state_11879;
(statearr_11881[(7)] = inst_11874);

(statearr_11881[(8)] = inst_11872);

return statearr_11881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11879__$1,inst_11877);
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
var statearr_11885 = [null,null,null,null,null,null,null,null,null];
(statearr_11885[(0)] = rete4flight$core$add_link_$_state_machine__9312__auto__);

(statearr_11885[(1)] = (1));

return statearr_11885;
});
var rete4flight$core$add_link_$_state_machine__9312__auto____1 = (function (state_11879){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11886){if((e11886 instanceof Object)){
var ex__9315__auto__ = e11886;
var statearr_11887_11889 = state_11879;
(statearr_11887_11889[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11890 = state_11879;
state_11879 = G__11890;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$add_link_$_state_machine__9312__auto__ = function(state_11879){
switch(arguments.length){
case 0:
return rete4flight$core$add_link_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$add_link_$_state_machine__9312__auto____1.call(this,state_11879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$add_link_$_state_machine__9312__auto____0;
rete4flight$core$add_link_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$add_link_$_state_machine__9312__auto____1;
return rete4flight$core$add_link_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,ops,tmin,del,llg,lnk))
})();
var state__9378__auto__ = (function (){var statearr_11888 = f__9377__auto__.call(null);
(statearr_11888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11888;
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
var seq__11901 = cljs.core.seq.call(null,cljs.core.deref.call(null,rete4flight.core.links));
var chunk__11902 = null;
var count__11903 = (0);
var i__11904 = (0);
while(true){
if((i__11904 < count__11903)){
var vec__11905 = cljs.core._nth.call(null,chunk__11902,i__11904);
var ids = cljs.core.nth.call(null,vec__11905,(0),null);
var lnk = cljs.core.nth.call(null,vec__11905,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11911 = seq__11901;
var G__11912 = chunk__11902;
var G__11913 = count__11903;
var G__11914 = (i__11904 + (1));
seq__11901 = G__11911;
chunk__11902 = G__11912;
count__11903 = G__11913;
i__11904 = G__11914;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11901);
if(temp__4657__auto__){
var seq__11901__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11901__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11901__$1);
var G__11915 = cljs.core.chunk_rest.call(null,seq__11901__$1);
var G__11916 = c__6555__auto__;
var G__11917 = cljs.core.count.call(null,c__6555__auto__);
var G__11918 = (0);
seq__11901 = G__11915;
chunk__11902 = G__11916;
count__11903 = G__11917;
i__11904 = G__11918;
continue;
} else {
var vec__11908 = cljs.core.first.call(null,seq__11901__$1);
var ids = cljs.core.nth.call(null,vec__11908,(0),null);
var lnk = cljs.core.nth.call(null,vec__11908,(1),null);
lnk.setLatLngs(rete4flight.core.collect_llga.call(null,ids));

var G__11919 = cljs.core.next.call(null,seq__11901__$1);
var G__11920 = null;
var G__11921 = (0);
var G__11922 = (0);
seq__11901 = G__11919;
chunk__11902 = G__11920;
count__11903 = G__11921;
i__11904 = G__11922;
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
var seq__11927 = cljs.core.seq.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,rete4flight.core.links)));
var chunk__11928 = null;
var count__11929 = (0);
var i__11930 = (0);
while(true){
if((i__11930 < count__11929)){
var ids = cljs.core._nth.call(null,chunk__11928,i__11930);
rete4flight.core.delete_link.call(null,ids);

var G__11931 = seq__11927;
var G__11932 = chunk__11928;
var G__11933 = count__11929;
var G__11934 = (i__11930 + (1));
seq__11927 = G__11931;
chunk__11928 = G__11932;
count__11929 = G__11933;
i__11930 = G__11934;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11927);
if(temp__4657__auto__){
var seq__11927__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11927__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__11927__$1);
var G__11935 = cljs.core.chunk_rest.call(null,seq__11927__$1);
var G__11936 = c__6555__auto__;
var G__11937 = cljs.core.count.call(null,c__6555__auto__);
var G__11938 = (0);
seq__11927 = G__11935;
chunk__11928 = G__11936;
count__11929 = G__11937;
i__11930 = G__11938;
continue;
} else {
var ids = cljs.core.first.call(null,seq__11927__$1);
rete4flight.core.delete_link.call(null,ids);

var G__11939 = cljs.core.next.call(null,seq__11927__$1);
var G__11940 = null;
var G__11941 = (0);
var G__11942 = (0);
seq__11927 = G__11939;
chunk__11928 = G__11940;
count__11929 = G__11941;
i__11930 = G__11942;
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
var args11943 = [];
var len__6819__auto___11965 = arguments.length;
var i__6820__auto___11966 = (0);
while(true){
if((i__6820__auto___11966 < len__6819__auto___11965)){
args11943.push((arguments[i__6820__auto___11966]));

var G__11967 = (i__6820__auto___11966 + (1));
i__6820__auto___11966 = G__11967;
continue;
} else {
}
break;
}

var G__11945 = args11943.length;
switch (G__11945) {
case 3:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11943.length)].join('')));

}
});

rete4flight.core.add_popup.cljs$core$IFn$_invoke$arity$3 = (function (id,html,time){
var vec__11946 = rete4flight.core.get_pos.call(null,id);
var lat = cljs.core.nth.call(null,vec__11946,(0),null);
var lon = cljs.core.nth.call(null,vec__11946,(1),null);
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
return (function (state_11955){
var state_val_11956 = (state_11955[(1)]);
if((state_val_11956 === (1))){
var inst_11949 = cljs.core.async.timeout.call(null,time);
var state_11955__$1 = state_11955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11955__$1,(2),inst_11949);
} else {
if((state_val_11956 === (2))){
var inst_11951 = (state_11955[(2)]);
var inst_11952 = cljs.core.deref.call(null,rete4flight.core.chart);
var inst_11953 = inst_11952.removeLayer(pop);
var state_11955__$1 = (function (){var statearr_11957 = state_11955;
(statearr_11957[(7)] = inst_11951);

return statearr_11957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11955__$1,inst_11953);
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
var statearr_11961 = [null,null,null,null,null,null,null,null];
(statearr_11961[(0)] = rete4flight$core$state_machine__9312__auto__);

(statearr_11961[(1)] = (1));

return statearr_11961;
});
var rete4flight$core$state_machine__9312__auto____1 = (function (state_11955){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_11955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e11962){if((e11962 instanceof Object)){
var ex__9315__auto__ = e11962;
var statearr_11963_11969 = state_11955;
(statearr_11963_11969[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11970 = state_11955;
state_11955 = G__11970;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$state_machine__9312__auto__ = function(state_11955){
switch(arguments.length){
case 0:
return rete4flight$core$state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$state_machine__9312__auto____1.call(this,state_11955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$state_machine__9312__auto____0;
rete4flight$core$state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$state_machine__9312__auto____1;
return rete4flight$core$state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,pop))
})();
var state__9378__auto__ = (function (){var statearr_11964 = f__9377__auto__.call(null);
(statearr_11964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_11964;
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
return (function (state_12047){
var state_val_12048 = (state_12047[(1)]);
if((state_val_12048 === (7))){
var inst_12020 = (state_12047[(7)]);
var inst_12030 = (inst_12020 - (4));
var inst_12031 = rete4flight.core.set_course_BANG_.call(null,id,inst_12030);
var state_12047__$1 = state_12047;
var statearr_12049_12069 = state_12047__$1;
(statearr_12049_12069[(2)] = inst_12031);

(statearr_12049_12069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (1))){
var inst_12020 = crs;
var state_12047__$1 = (function (){var statearr_12050 = state_12047;
(statearr_12050[(7)] = inst_12020);

return statearr_12050;
})();
var statearr_12051_12070 = state_12047__$1;
(statearr_12051_12070[(2)] = null);

(statearr_12051_12070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (4))){
var inst_12026 = rete4flight.core.set_course_BANG_.call(null,id,on_course);
var state_12047__$1 = state_12047;
var statearr_12052_12071 = state_12047__$1;
(statearr_12052_12071[(2)] = inst_12026);

(statearr_12052_12071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (6))){
var inst_12043 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
var statearr_12053_12072 = state_12047__$1;
(statearr_12053_12072[(2)] = inst_12043);

(statearr_12053_12072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (3))){
var inst_12045 = (state_12047[(2)]);
var state_12047__$1 = state_12047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12047__$1,inst_12045);
} else {
if((state_val_12048 === (2))){
var inst_12020 = (state_12047[(7)]);
var inst_12022 = (inst_12020 - on_course);
var inst_12023 = Math.abs(inst_12022);
var inst_12024 = (inst_12023 < (4));
var state_12047__$1 = state_12047;
if(cljs.core.truth_(inst_12024)){
var statearr_12054_12073 = state_12047__$1;
(statearr_12054_12073[(1)] = (4));

} else {
var statearr_12055_12074 = state_12047__$1;
(statearr_12055_12074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (9))){
var inst_12036 = (state_12047[(2)]);
var inst_12037 = cljs.core.async.timeout.call(null,rete4flight.core.MYFS_INTL);
var state_12047__$1 = (function (){var statearr_12056 = state_12047;
(statearr_12056[(8)] = inst_12036);

return statearr_12056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12047__$1,(10),inst_12037);
} else {
if((state_val_12048 === (5))){
var inst_12028 = cljs.core._EQ_.call(null,side,new cljs.core.Keyword(null,"left","left",-399115937));
var state_12047__$1 = state_12047;
if(inst_12028){
var statearr_12057_12075 = state_12047__$1;
(statearr_12057_12075[(1)] = (7));

} else {
var statearr_12058_12076 = state_12047__$1;
(statearr_12058_12076[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (10))){
var inst_12039 = (state_12047[(2)]);
var inst_12040 = rete4flight.core.course.call(null,id);
var inst_12020 = inst_12040;
var state_12047__$1 = (function (){var statearr_12059 = state_12047;
(statearr_12059[(7)] = inst_12020);

(statearr_12059[(9)] = inst_12039);

return statearr_12059;
})();
var statearr_12060_12077 = state_12047__$1;
(statearr_12060_12077[(2)] = null);

(statearr_12060_12077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12048 === (8))){
var inst_12020 = (state_12047[(7)]);
var inst_12033 = (inst_12020 + (4));
var inst_12034 = rete4flight.core.set_course_BANG_.call(null,id,inst_12033);
var state_12047__$1 = state_12047;
var statearr_12061_12078 = state_12047__$1;
(statearr_12061_12078[(2)] = inst_12034);

(statearr_12061_12078[(1)] = (9));


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
var statearr_12065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12065[(0)] = rete4flight$core$turn_$_state_machine__9312__auto__);

(statearr_12065[(1)] = (1));

return statearr_12065;
});
var rete4flight$core$turn_$_state_machine__9312__auto____1 = (function (state_12047){
while(true){
var ret_value__9313__auto__ = (function (){try{while(true){
var result__9314__auto__ = switch__9311__auto__.call(null,state_12047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9314__auto__;
}
break;
}
}catch (e12066){if((e12066 instanceof Object)){
var ex__9315__auto__ = e12066;
var statearr_12067_12079 = state_12047;
(statearr_12067_12079[(5)] = ex__9315__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12080 = state_12047;
state_12047 = G__12080;
continue;
} else {
return ret_value__9313__auto__;
}
break;
}
});
rete4flight$core$turn_$_state_machine__9312__auto__ = function(state_12047){
switch(arguments.length){
case 0:
return rete4flight$core$turn_$_state_machine__9312__auto____0.call(this);
case 1:
return rete4flight$core$turn_$_state_machine__9312__auto____1.call(this,state_12047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$0 = rete4flight$core$turn_$_state_machine__9312__auto____0;
rete4flight$core$turn_$_state_machine__9312__auto__.cljs$core$IFn$_invoke$arity$1 = rete4flight$core$turn_$_state_machine__9312__auto____1;
return rete4flight$core$turn_$_state_machine__9312__auto__;
})()
;})(switch__9311__auto__,c__9376__auto__,side,crs))
})();
var state__9378__auto__ = (function (){var statearr_12068 = f__9377__auto__.call(null);
(statearr_12068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9376__auto__);

return statearr_12068;
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
var vec__12084 = temp__4657__auto__;
var lat = cljs.core.nth.call(null,vec__12084,(0),null);
var lon = cljs.core.nth.call(null,vec__12084,(1),null);
var alt = cljs.core.nth.call(null,vec__12084,(2),null);
var crs = cljs.core.nth.call(null,vec__12084,(3),null);
var spd = cljs.core.nth.call(null,vec__12084,(4),null);
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
var seq__12137 = cljs.core.seq.call(null,rete4flight.core.read_transit.call(null,response));
var chunk__12138 = null;
var count__12139 = (0);
var i__12140 = (0);
while(true){
if((i__12140 < count__12139)){
var map__12141 = cljs.core._nth.call(null,chunk__12138,i__12140);
var map__12141__$1 = ((((!((map__12141 == null)))?((((map__12141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12141):map__12141);
var evt = map__12141__$1;
var event = cljs.core.get.call(null,map__12141__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12143_12187 = cljs.core._EQ_;
var expr__12144_12188 = event;
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12144_12188))){
var map__12146_12189 = evt;
var map__12146_12190__$1 = ((((!((map__12146_12189 == null)))?((((map__12146_12189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12146_12189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12146_12189):map__12146_12189);
var id_12191 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12192 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12193 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12194 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12195 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12196 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12197 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12198 = cljs.core.get.call(null,map__12146_12190__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12191,callsign_12192,lat_12193,lon_12194,crs_12195,spd_12196,alt_12197,state_12198);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12144_12188))){
var map__12148_12199 = evt;
var map__12148_12200__$1 = ((((!((map__12148_12199 == null)))?((((map__12148_12199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12148_12199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12148_12199):map__12148_12199);
var id_12201 = cljs.core.get.call(null,map__12148_12200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12201);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12144_12188))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12144_12188))){
var map__12150_12202 = evt;
var map__12150_12203__$1 = ((((!((map__12150_12202 == null)))?((((map__12150_12202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12150_12202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12150_12202):map__12150_12202);
var ids_12204 = cljs.core.get.call(null,map__12150_12203__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12205 = cljs.core.get.call(null,map__12150_12203__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12204,options_12205);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12144_12188))){
var map__12152_12206 = evt;
var map__12152_12207__$1 = ((((!((map__12152_12206 == null)))?((((map__12152_12206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12152_12206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12152_12206):map__12152_12206);
var ids_12208 = cljs.core.get.call(null,map__12152_12207__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12208);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12144_12188))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12144_12188))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12144_12188))){
var map__12154_12209 = evt;
var map__12154_12210__$1 = ((((!((map__12154_12209 == null)))?((((map__12154_12209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12154_12209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12154_12209):map__12154_12209);
var id_12211 = cljs.core.get.call(null,map__12154_12210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12212 = cljs.core.get.call(null,map__12154_12210__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12213 = cljs.core.get.call(null,map__12154_12210__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12214 = cljs.core.get.call(null,map__12154_12210__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12215 = cljs.core.get.call(null,map__12154_12210__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12211)){
rete4flight.core.add_popup.call(null,id_12211,html_12214,time_12215);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12212;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12213;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12212,lon_12213,html_12214,time_12215);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12144_12188))){
var map__12156_12216 = evt;
var map__12156_12217__$1 = ((((!((map__12156_12216 == null)))?((((map__12156_12216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12156_12216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12156_12216):map__12156_12216);
var id_12218 = cljs.core.get.call(null,map__12156_12217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12219 = cljs.core.get.call(null,map__12156_12217__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12220 = cljs.core.get.call(null,map__12156_12217__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12221 = cljs.core.get.call(null,map__12156_12217__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12218,lla_12219,options_12220,time_12221);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12144_12188))){
var map__12158_12222 = evt;
var map__12158_12223__$1 = ((((!((map__12158_12222 == null)))?((((map__12158_12222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12158_12222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12158_12222):map__12158_12222);
var lat_12224 = cljs.core.get.call(null,map__12158_12223__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12225 = cljs.core.get.call(null,map__12158_12223__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12224,lon_12225);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12144_12188))){
var map__12160_12226 = evt;
var map__12160_12227__$1 = ((((!((map__12160_12226 == null)))?((((map__12160_12226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12160_12226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12160_12226):map__12160_12226);
var id_12228 = cljs.core.get.call(null,map__12160_12227__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12229 = cljs.core.get.call(null,map__12160_12227__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12228,on_course_12229);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12144_12188))){
var map__12162_12230 = evt;
var map__12162_12231__$1 = ((((!((map__12162_12230 == null)))?((((map__12162_12230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12162_12230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12162_12230):map__12162_12230);
var lat_12232 = cljs.core.get.call(null,map__12162_12231__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12233 = cljs.core.get.call(null,map__12162_12231__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var state_12234 = cljs.core.get.call(null,map__12162_12231__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,lat_12232,lon_12233,state_12234);
} else {
if(cljs.core.truth_(pred__12143_12187.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12144_12188))){
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

var G__12235 = seq__12137;
var G__12236 = chunk__12138;
var G__12237 = count__12139;
var G__12238 = (i__12140 + (1));
seq__12137 = G__12235;
chunk__12138 = G__12236;
count__12139 = G__12237;
i__12140 = G__12238;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12137);
if(temp__4657__auto__){
var seq__12137__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12137__$1)){
var c__6555__auto__ = cljs.core.chunk_first.call(null,seq__12137__$1);
var G__12239 = cljs.core.chunk_rest.call(null,seq__12137__$1);
var G__12240 = c__6555__auto__;
var G__12241 = cljs.core.count.call(null,c__6555__auto__);
var G__12242 = (0);
seq__12137 = G__12239;
chunk__12138 = G__12240;
count__12139 = G__12241;
i__12140 = G__12242;
continue;
} else {
var map__12164 = cljs.core.first.call(null,seq__12137__$1);
var map__12164__$1 = ((((!((map__12164 == null)))?((((map__12164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12164):map__12164);
var evt = map__12164__$1;
var event = cljs.core.get.call(null,map__12164__$1,new cljs.core.Keyword(null,"event","event",301435442));
var pred__12166_12243 = cljs.core._EQ_;
var expr__12167_12244 = event;
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"create-mapob","create-mapob",-753652975),expr__12167_12244))){
var map__12169_12245 = evt;
var map__12169_12246__$1 = ((((!((map__12169_12245 == null)))?((((map__12169_12245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12169_12245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12169_12245):map__12169_12245);
var id_12247 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callsign_12248 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"callsign","callsign",1222385874));
var lat_12249 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12250 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var crs_12251 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"crs","crs",-1720579893));
var spd_12252 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"spd","spd",-1470869929));
var alt_12253 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"alt","alt",-3214426));
var state_12254 = cljs.core.get.call(null,map__12169_12246__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_mapob.call(null,id_12247,callsign_12248,lat_12249,lon_12250,crs_12251,spd_12252,alt_12253,state_12254);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"delete-mapob","delete-mapob",1102932089),expr__12167_12244))){
var map__12171_12255 = evt;
var map__12171_12256__$1 = ((((!((map__12171_12255 == null)))?((((map__12171_12255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12171_12255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12171_12255):map__12171_12255);
var id_12257 = cljs.core.get.call(null,map__12171_12256__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
rete4flight.core.delete_mapob.call(null,id_12257);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"clear-mapobs","clear-mapobs",757467894),expr__12167_12244))){
rete4flight.core.clear_mapobs.call(null);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"add-link","add-link",1776480037),expr__12167_12244))){
var map__12173_12258 = evt;
var map__12173_12259__$1 = ((((!((map__12173_12258 == null)))?((((map__12173_12258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12173_12258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12173_12258):map__12173_12258);
var ids_12260 = cljs.core.get.call(null,map__12173_12259__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var options_12261 = cljs.core.get.call(null,map__12173_12259__$1,new cljs.core.Keyword(null,"options","options",99638489));
rete4flight.core.add_link.call(null,ids_12260,options_12261);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"delete-link","delete-link",502528294),expr__12167_12244))){
var map__12175_12262 = evt;
var map__12175_12263__$1 = ((((!((map__12175_12262 == null)))?((((map__12175_12262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12175_12262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12175_12262):map__12175_12262);
var ids_12264 = cljs.core.get.call(null,map__12175_12263__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
rete4flight.core.delete_link.call(null,ids_12264);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"clear-links","clear-links",1802286633),expr__12167_12244))){
rete4flight.core.clear_links.call(null);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"clear-dialog","clear-dialog",-16690725),expr__12167_12244))){
rete4flight.core.clear_dialog.call(null);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"add-popup","add-popup",1875872141),expr__12167_12244))){
var map__12177_12265 = evt;
var map__12177_12266__$1 = ((((!((map__12177_12265 == null)))?((((map__12177_12265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12177_12265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12177_12265):map__12177_12265);
var id_12267 = cljs.core.get.call(null,map__12177_12266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lat_12268 = cljs.core.get.call(null,map__12177_12266__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12269 = cljs.core.get.call(null,map__12177_12266__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var html_12270 = cljs.core.get.call(null,map__12177_12266__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var time_12271 = cljs.core.get.call(null,map__12177_12266__$1,new cljs.core.Keyword(null,"time","time",1385887882));
if(cljs.core.truth_(id_12267)){
rete4flight.core.add_popup.call(null,id_12267,html_12270,time_12271);
} else {
if(cljs.core.truth_((function (){var and__5732__auto__ = lat_12268;
if(cljs.core.truth_(and__5732__auto__)){
return lon_12269;
} else {
return and__5732__auto__;
}
})())){
rete4flight.core.add_popup.call(null,lat_12268,lon_12269,html_12270,time_12271);
} else {
}
}
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"add-trail","add-trail",-1077552998),expr__12167_12244))){
var map__12179_12272 = evt;
var map__12179_12273__$1 = ((((!((map__12179_12272 == null)))?((((map__12179_12272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12179_12272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12179_12272):map__12179_12272);
var id_12274 = cljs.core.get.call(null,map__12179_12273__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var lla_12275 = cljs.core.get.call(null,map__12179_12273__$1,new cljs.core.Keyword(null,"lla","lla",-1447025450));
var options_12276 = cljs.core.get.call(null,map__12179_12273__$1,new cljs.core.Keyword(null,"options","options",99638489));
var time_12277 = cljs.core.get.call(null,map__12179_12273__$1,new cljs.core.Keyword(null,"time","time",1385887882));
rete4flight.core.add_trail.call(null,id_12274,lla_12275,options_12276,time_12277);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"set-map-view","set-map-view",1346225660),expr__12167_12244))){
var map__12181_12278 = evt;
var map__12181_12279__$1 = ((((!((map__12181_12278 == null)))?((((map__12181_12278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12181_12278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12181_12278):map__12181_12278);
var lat_12280 = cljs.core.get.call(null,map__12181_12279__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12281 = cljs.core.get.call(null,map__12181_12279__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
rete4flight.core.set_map_view.call(null,lat_12280,lon_12281);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"turn","turn",75759344),expr__12167_12244))){
var map__12183_12282 = evt;
var map__12183_12283__$1 = ((((!((map__12183_12282 == null)))?((((map__12183_12282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12183_12282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12183_12282):map__12183_12282);
var id_12284 = cljs.core.get.call(null,map__12183_12283__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_course_12285 = cljs.core.get.call(null,map__12183_12283__$1,new cljs.core.Keyword(null,"on-course","on-course",-276445359));
rete4flight.core.turn.call(null,id_12284,on_course_12285);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"create-placemark","create-placemark",-1706112738),expr__12167_12244))){
var map__12185_12286 = evt;
var map__12185_12287__$1 = ((((!((map__12185_12286 == null)))?((((map__12185_12286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12185_12286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12185_12286):map__12185_12286);
var lat_12288 = cljs.core.get.call(null,map__12185_12287__$1,new cljs.core.Keyword(null,"lat","lat",-580793929));
var lon_12289 = cljs.core.get.call(null,map__12185_12287__$1,new cljs.core.Keyword(null,"lon","lon",522068437));
var state_12290 = cljs.core.get.call(null,map__12185_12287__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
rete4flight.core.create_placemark.call(null,lat_12288,lon_12289,state_12290);
} else {
if(cljs.core.truth_(pred__12166_12243.call(null,new cljs.core.Keyword(null,"clear-placemarks","clear-placemarks",-1671077158),expr__12167_12244))){
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

var G__12291 = cljs.core.next.call(null,seq__12137__$1);
var G__12292 = null;
var G__12293 = (0);
var G__12294 = (0);
seq__12137 = G__12291;
chunk__12138 = G__12292;
count__12139 = G__12293;
i__12140 = G__12294;
continue;
}
} else {
return null;
}
}
break;
}
});
rete4flight.core.error_handler = (function rete4flight$core$error_handler(p__12295){
var map__12298 = p__12295;
var map__12298__$1 = ((((!((map__12298 == null)))?((((map__12298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12298):map__12298);
var status = cljs.core.get.call(null,map__12298__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__12298__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
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
return (function rete4flight$core$camera_on_handler_$_iter__12304(s__12305){
return (new cljs.core.LazySeq(null,((function (callsigns,_){
return (function (){
var s__12305__$1 = s__12305;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12305__$1);
if(temp__4657__auto__){
var s__12305__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12305__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12305__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12307 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12306 = (0);
while(true){
if((i__12306 < size__6523__auto__)){
var e = cljs.core._nth.call(null,c__6522__auto__,i__12306);
cljs.core.chunk_append.call(null,b__12307,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''));

var G__12308 = (i__12306 + (1));
i__12306 = G__12308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12307),rete4flight$core$camera_on_handler_$_iter__12304.call(null,cljs.core.chunk_rest.call(null,s__12305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12307),null);
}
} else {
var e = cljs.core.first.call(null,s__12305__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(e),cljs.core.str("'>"),cljs.core.str(e),cljs.core.str("</option>")].join(''),rete4flight$core$camera_on_handler_$_iter__12304.call(null,cljs.core.rest.call(null,s__12305__$2)));
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
var slh = [cljs.core.str("<select onchange='javascript:rete4flight.core.selhour(this.value)'>"),cljs.core.str("<option value='select'>hh</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_hour_$_iter__12313(s__12314){
return (new cljs.core.LazySeq(null,(function (){
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
var hour = cljs.core._nth.call(null,c__6522__auto__,i__12315);
cljs.core.chunk_append.call(null,b__12316,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''));

var G__12317 = (i__12315 + (1));
i__12315 = G__12317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12316),rete4flight$core$sel_hour_$_iter__12313.call(null,cljs.core.chunk_rest.call(null,s__12314__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12316),null);
}
} else {
var hour = cljs.core.first.call(null,s__12314__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(hour),cljs.core.str("'>"),cljs.core.str(hour),cljs.core.str("</option>")].join(''),rete4flight$core$sel_hour_$_iter__12313.call(null,cljs.core.rest.call(null,s__12314__$2)));
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
var slm = [cljs.core.str("<select onchange='javascript:rete4flight.core.selmin(this.value)'>"),cljs.core.str("<option value='select'>mm</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_minute_$_iter__12322(s__12323){
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
var min = cljs.core._nth.call(null,c__6522__auto__,i__12324);
cljs.core.chunk_append.call(null,b__12325,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''));

var G__12326 = (i__12324 + (1));
i__12324 = G__12326;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12325),rete4flight$core$sel_minute_$_iter__12322.call(null,cljs.core.chunk_rest.call(null,s__12323__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12325),null);
}
} else {
var min = cljs.core.first.call(null,s__12323__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(min),cljs.core.str("'>"),cljs.core.str(min),cljs.core.str("</option>")].join(''),rete4flight$core$sel_minute_$_iter__12322.call(null,cljs.core.rest.call(null,s__12323__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromcnt(this.value)'>"),cljs.core.str("<option value='select'>from country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_country_$_iter__12331(s__12332){
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
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12333);
cljs.core.chunk_append.call(null,b__12334,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12335 = (i__12333 + (1));
i__12333 = G__12335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),rete4flight$core$sel_from_country_$_iter__12331.call(null,cljs.core.chunk_rest.call(null,s__12332__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),null);
}
} else {
var contry = cljs.core.first.call(null,s__12332__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_country_$_iter__12331.call(null,cljs.core.rest.call(null,s__12332__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.selfromapt(this.value)'>"),cljs.core.str("<option value='select'>from airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_from_airport_$_iter__12340(s__12341){
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
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12342);
cljs.core.chunk_append.call(null,b__12343,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12344 = (i__12342 + (1));
i__12342 = G__12344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12343),rete4flight$core$sel_from_airport_$_iter__12340.call(null,cljs.core.chunk_rest.call(null,s__12341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12343),null);
}
} else {
var airport = cljs.core.first.call(null,s__12341__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_from_airport_$_iter__12340.call(null,cljs.core.rest.call(null,s__12341__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltocnt(this.value)'>"),cljs.core.str("<option value='select'>to country</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_country_$_iter__12349(s__12350){
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
var contry = cljs.core._nth.call(null,c__6522__auto__,i__12351);
cljs.core.chunk_append.call(null,b__12352,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''));

var G__12353 = (i__12351 + (1));
i__12351 = G__12353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12352),rete4flight$core$sel_to_country_$_iter__12349.call(null,cljs.core.chunk_rest.call(null,s__12350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12352),null);
}
} else {
var contry = cljs.core.first.call(null,s__12350__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(contry),cljs.core.str("'>"),cljs.core.str(contry),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_country_$_iter__12349.call(null,cljs.core.rest.call(null,s__12350__$2)));
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
var sel = [cljs.core.str("<select onchange='javascript:rete4flight.core.seltoapt(this.value)'>"),cljs.core.str("<option value='select'>to airport</option>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__6524__auto__ = (function rete4flight$core$sel_to_airport_$_iter__12358(s__12359){
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
var airport = cljs.core._nth.call(null,c__6522__auto__,i__12360);
cljs.core.chunk_append.call(null,b__12361,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''));

var G__12362 = (i__12360 + (1));
i__12360 = G__12362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),rete4flight$core$sel_to_airport_$_iter__12358.call(null,cljs.core.chunk_rest.call(null,s__12359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12361),null);
}
} else {
var airport = cljs.core.first.call(null,s__12359__$2);
return cljs.core.cons.call(null,[cljs.core.str("<option value='"),cljs.core.str(airport),cljs.core.str("'>"),cljs.core.str(airport),cljs.core.str("</option>")].join(''),rete4flight$core$sel_to_airport_$_iter__12358.call(null,cljs.core.rest.call(null,s__12359__$2)));
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
var vec__12366 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12366,(0),null);
var s = cljs.core.nth.call(null,vec__12366,(1),null);
var w = cljs.core.nth.call(null,vec__12366,(2),null);
var e = cljs.core.nth.call(null,vec__12366,(3),null);
var center = rete4flight.core.get_map_center.call(null);
var url = [cljs.core.str(rete4flight.core.URL_NVI),cljs.core.str("?n="),cljs.core.str(n),cljs.core.str("&s="),cljs.core.str(s),cljs.core.str("&w="),cljs.core.str(w),cljs.core.str("&e="),cljs.core.str(e),cljs.core.str("&c="),cljs.core.str(center)].join('');
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),rete4flight.core.no_handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),rete4flight.core.error_handler], null));
});
rete4flight.core.watch_visible = (function rete4flight$core$watch_visible(){
var vec__12372 = rete4flight.core.visible_map.call(null);
var n = cljs.core.nth.call(null,vec__12372,(0),null);
var s = cljs.core.nth.call(null,vec__12372,(1),null);
var w = cljs.core.nth.call(null,vec__12372,(2),null);
var e = cljs.core.nth.call(null,vec__12372,(3),null);
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
var pred__12378_12381 = cljs.core._EQ_;
var expr__12379_12382 = func;
if(cljs.core.truth_(pred__12378_12381.call(null,"watch-visible",expr__12379_12382))){
rete4flight.core.watch_visible.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"flight-states",expr__12379_12382))){
rete4flight.core.flight_states.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"intersect",expr__12379_12382))){
rete4flight.core.intersect.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"clear",expr__12379_12382))){
rete4flight.core.clear_all.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"move-to",expr__12379_12382))){
rete4flight.core.move_to.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"schedule",expr__12379_12382))){
rete4flight.core.schedule.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"camera",expr__12379_12382))){
rete4flight.core.camera.call(null);
} else {
if(cljs.core.truth_(pred__12378_12381.call(null,"manual",expr__12379_12382))){
rete4flight.core.manual.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12379_12382)].join('')));
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
return (function rete4flight$core$remote_call_$_iter__12399(s__12400){
return (new cljs.core.LazySeq(null,((function (head,func,temp__4655__auto__,fkey){
return (function (){
var s__12400__$1 = s__12400;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__12400__$1);
if(temp__4657__auto__){
var s__12400__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12400__$2)){
var c__6522__auto__ = cljs.core.chunk_first.call(null,s__12400__$2);
var size__6523__auto__ = cljs.core.count.call(null,c__6522__auto__);
var b__12402 = cljs.core.chunk_buffer.call(null,size__6523__auto__);
if((function (){var i__12401 = (0);
while(true){
if((i__12401 < size__6523__auto__)){
var vec__12409 = cljs.core._nth.call(null,c__6522__auto__,i__12401);
var f = cljs.core.nth.call(null,vec__12409,(0),null);
var k = cljs.core.nth.call(null,vec__12409,(1),null);
cljs.core.chunk_append.call(null,b__12402,[cljs.core.str(f),cljs.core.str(k)].join(''));

var G__12415 = (i__12401 + (1));
i__12401 = G__12415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),rete4flight$core$remote_call_$_iter__12399.call(null,cljs.core.chunk_rest.call(null,s__12400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),null);
}
} else {
var vec__12412 = cljs.core.first.call(null,s__12400__$2);
var f = cljs.core.nth.call(null,vec__12412,(0),null);
var k = cljs.core.nth.call(null,vec__12412,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(f),cljs.core.str(k)].join(''),rete4flight$core$remote_call_$_iter__12399.call(null,cljs.core.rest.call(null,s__12400__$2)));
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

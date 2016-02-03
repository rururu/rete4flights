// Compiled by ClojureScript 1.7.228 {}
goog.provide('rete4flight.geomath');
goog.require('cljs.core');
rete4flight.geomath.pid180 = (Math.PI / (180));
rete4flight.geomath.nmrad = (Math.PI / (10800));
rete4flight.geomath.spherica_between = (function rete4flight$geomath$spherica_between(phi1,lambda0,c,az){
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

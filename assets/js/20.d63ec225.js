(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{626:function(e,t,r){"use strict";r.r(t),r.d(t,"register",(function(){return s}));var n=r(415),i=r(553),o=r(469);function s(e){var t,r,s=Object.keys(e.defs),a=s.length;for(t=0;t<a;++t){var c=s[t];if(!Object(n.get)(c)){var d=e.defs(c);Object(n.addProjection)(new o.default({code:c,axisOrientation:d.axis,metersPerUnit:d.to_meter,units:d.units}))}}for(t=0;t<a;++t){var f=s[t],b=Object(n.get)(f);for(r=0;r<a;++r){var j=s[r],u=Object(n.get)(j);if(!Object(i.c)(f,j))if(e.defs[f]===e.defs[j])Object(n.addEquivalentProjections)([b,u]);else{var v=e(f,j);Object(n.addCoordinateTransforms)(b,u,v.forward,v.inverse)}}}}}}]);
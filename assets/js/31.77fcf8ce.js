(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{534:function(t,e,r){"use strict";function i(t,e,r,i){for(var o=t[e],n=t[e+1],s=0,a=e+i;a<r;a+=i){var h=t[a],c=t[a+1];s+=Math.sqrt((h-o)*(h-o)+(c-n)*(c-n)),o=h,n=c}return s}r.d(e,"a",(function(){return i}))},536:function(t,e,r){"use strict";e.a={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}},636:function(t,e,r){"use strict";r.r(e);var i=r(395),o=r(392),n=r(388),s=r(400);var a=function(t){function e(e){if(t.call(this),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,Object(o.a)(this,Object(s.b)(this.geometryName_),this.handleGeometryChanged_,this),e)if("function"==typeof e.getSimplifiedGeometry){var r=e;this.setGeometry(r)}else{var i=e;this.setProperties(i)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e(this.getProperties());t.setGeometryName(this.getGeometryName());var r=this.getGeometry();r&&t.setGeometry(r.clone());var i=this.getStyle();return i&&t.setStyle(i),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(o.e)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(o.a)(t,n.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(i.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){Object(o.c)(this,Object(s.b)(this.geometryName_),this.handleGeometryChanged_,this),this.geometryName_=t,Object(o.a)(this,Object(s.b)(this.geometryName_),this.handleGeometryChanged_,this),this.handleGeometryChanged_()},e}(s.a),h=r(387),c=r(385),u=r(415),l=function(){this.dataProjection=null,this.defaultFeatureProjection=null};l.prototype.getReadOptions=function(t,e){var r;return e&&(r={dataProjection:e.dataProjection?e.dataProjection:this.readProjection(t),featureProjection:e.featureProjection}),this.adaptOptions(r)},l.prototype.adaptOptions=function(t){return Object(h.a)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},t)},l.prototype.getLastExtent=function(){return null},l.prototype.getType=function(){return Object(c.b)()},l.prototype.readFeature=function(t,e){return Object(c.b)()},l.prototype.readFeatures=function(t,e){return Object(c.b)()},l.prototype.readGeometry=function(t,e){return Object(c.b)()},l.prototype.readProjection=function(t){return Object(c.b)()},l.prototype.writeFeature=function(t,e){return Object(c.b)()},l.prototype.writeFeatures=function(t,e){return Object(c.b)()},l.prototype.writeGeometry=function(t,e){return Object(c.b)()};var p=l;function d(t,e,r){var i,o=r?Object(u.get)(r.featureProjection):null,n=r?Object(u.get)(r.dataProjection):null;if(i=o&&n&&!Object(u.equivalent)(o,n)?Array.isArray(t)?Object(u.transformExtent)(t,n,o):(e?t.clone():t).transform(e?o:n,e?n:o):t,e&&r&&void 0!==r.decimals&&!Array.isArray(i)){var s=Math.pow(10,r.decimals);i===t&&(i=t.clone()),i.applyTransform((function(t){for(var e=0,r=t.length;e<r;++e)t[e]=Math.round(t[e]*s)/s;return t}))}return i}var f=r(536);function y(t){if("string"==typeof t){var e=JSON.parse(t);return e||null}return null!==t?t:null}var g=function(t){function e(){t.call(this)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getType=function(){return f.a.JSON},e.prototype.readFeature=function(t,e){return this.readFeatureFromObject(y(t),this.getReadOptions(t,e))},e.prototype.readFeatures=function(t,e){return this.readFeaturesFromObject(y(t),this.getReadOptions(t,e))},e.prototype.readFeatureFromObject=function(t,e){return Object(c.b)()},e.prototype.readFeaturesFromObject=function(t,e){return Object(c.b)()},e.prototype.readGeometry=function(t,e){return this.readGeometryFromObject(y(t),this.getReadOptions(t,e))},e.prototype.readGeometryFromObject=function(t,e){return Object(c.b)()},e.prototype.readProjection=function(t){return this.readProjectionFromObject(y(t))},e.prototype.readProjectionFromObject=function(t){return Object(c.b)()},e.prototype.writeFeature=function(t,e){return JSON.stringify(this.writeFeatureObject(t,e))},e.prototype.writeFeatureObject=function(t,e){return Object(c.b)()},e.prototype.writeFeatures=function(t,e){return JSON.stringify(this.writeFeaturesObject(t,e))},e.prototype.writeFeaturesObject=function(t,e){return Object(c.b)()},e.prototype.writeGeometry=function(t,e){return JSON.stringify(this.writeGeometryObject(t,e))},e.prototype.writeGeometryObject=function(t,e){return Object(c.b)()},e}(p),m=r(386),_=r(552),O=r(406);function b(t){for(var e=[],r=0,i=t.length;r<i;++r)e.push(t[r].clone());return e}var C=function(t){function e(e){t.call(this),this.geometries_=e||null,this.listenGeometriesChange_()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.unlistenGeometriesChange_=function(){if(this.geometries_)for(var t=0,e=this.geometries_.length;t<e;++t)Object(o.c)(this.geometries_[t],n.a.CHANGE,this.changed,this)},e.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var t=0,e=this.geometries_.length;t<e;++t)Object(o.a)(this.geometries_[t],n.a.CHANGE,this.changed,this)},e.prototype.clone=function(){var t=new e(null);return t.setGeometries(this.geometries_),t},e.prototype.closestPointXY=function(t,e,r,i){if(i<Object(m.e)(this.getExtent(),t,e))return i;for(var o=this.geometries_,n=0,s=o.length;n<s;++n)i=o[n].closestPointXY(t,e,r,i);return i},e.prototype.containsXY=function(t,e){for(var r=this.geometries_,i=0,o=r.length;i<o;++i)if(r[i].containsXY(t,e))return!0;return!1},e.prototype.computeExtent=function(t){Object(m.l)(t);for(var e=this.geometries_,r=0,i=e.length;r<i;++r)Object(m.q)(t,e[r].getExtent());return t},e.prototype.getGeometries=function(){return b(this.geometries_)},e.prototype.getGeometriesArray=function(){return this.geometries_},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!=this.getRevision()&&(Object(h.b)(this.simplifiedGeometryCache),this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;var r=t.toString();if(this.simplifiedGeometryCache.hasOwnProperty(r))return this.simplifiedGeometryCache[r];for(var i=[],o=this.geometries_,n=!1,s=0,a=o.length;s<a;++s){var c=o[s],u=c.getSimplifiedGeometry(t);i.push(u),u!==c&&(n=!0)}if(n){var l=new e(null);return l.setGeometriesArray(i),this.simplifiedGeometryCache[r]=l,l}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this},e.prototype.getType=function(){return O.a.GEOMETRY_COLLECTION},e.prototype.intersectsExtent=function(t){for(var e=this.geometries_,r=0,i=e.length;r<i;++r)if(e[r].intersectsExtent(t))return!0;return!1},e.prototype.isEmpty=function(){return 0===this.geometries_.length},e.prototype.rotate=function(t,e){for(var r=this.geometries_,i=0,o=r.length;i<o;++i)r[i].rotate(t,e);this.changed()},e.prototype.scale=function(t,e,r){var i=r;i||(i=Object(m.x)(this.getExtent()));for(var o=this.geometries_,n=0,s=o.length;n<s;++n)o[n].scale(t,e,i);this.changed()},e.prototype.setGeometries=function(t){this.setGeometriesArray(b(t))},e.prototype.setGeometriesArray=function(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()},e.prototype.applyTransform=function(t){for(var e=this.geometries_,r=0,i=e.length;r<i;++r)e[r].applyTransform(t);this.changed()},e.prototype.translate=function(t,e){for(var r=this.geometries_,i=0,o=r.length;i<o;++i)r[i].translate(t,e);this.changed()},e.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),t.prototype.disposeInternal.call(this)},e}(_.a),v=r(403),j=r(468),G=r(441),F=r(481),P=r(451),N=r(450),w=r(393);function R(t,e,r,i,o,n){var s=NaN,a=NaN,h=(r-e)/i;if(1===h)s=t[e],a=t[e+1];else if(2==h)s=(1-o)*t[e]+o*t[e+i],a=(1-o)*t[e+1]+o*t[e+i+1];else if(0!==h){for(var c=t[e],u=t[e+1],l=0,p=[0],d=e+i;d<r;d+=i){var f=t[d],y=t[d+1];l+=Math.sqrt((f-c)*(f-c)+(y-u)*(y-u)),p.push(l),c=f,u=y}var g=o*l,m=Object(v.a)(p,g);if(m<0){var _=(g-p[-m-2])/(p[-m-1]-p[-m-2]),O=e+(-m-2)*i;s=Object(w.c)(t[O],t[O+i],_),a=Object(w.c)(t[O+1],t[O+i+1],_)}else s=t[e+m*i],a=t[e+m*i+1]}return n?(n[0]=s,n[1]=a,n):[s,a]}function I(t,e,r,i,o,n){if(r==e)return null;var s;if(o<t[e+i-1])return n?((s=t.slice(e,e+i))[i-1]=o,s):null;if(t[r-1]<o)return n?((s=t.slice(r-i,r))[i-1]=o,s):null;if(o==t[e+i-1])return t.slice(e,e+i);for(var a=e/i,h=r/i;a<h;){var c=a+h>>1;o<t[(c+1)*i-1]?h=c:a=c+1}var u=t[a*i-1];if(o==u)return t.slice((a-1)*i,(a-1)*i+i);var l=(o-u)/(t[(a+1)*i-1]-u);s=[];for(var p=0;p<i-1;++p)s.push(Object(w.c)(t[(a-1)*i+p],t[a*i+p],l));return s.push(o),s}var M=r(493),E=r(534),x=r(555),L=r(470),T=function(t){function e(e,r){t.call(this),this.flatMidpoint_=null,this.flatMidpointRevision_=-1,this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===r||Array.isArray(e[0])?this.setCoordinates(e,r):this.setFlatCoordinates(r,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendCoordinate=function(t){this.flatCoordinates?Object(v.c)(this.flatCoordinates,t):this.flatCoordinates=t.slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,r,i){return i<Object(m.e)(this.getExtent(),t,e)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Object(F.e)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Object(F.d)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!1,t,e,r,i))},e.prototype.forEachSegment=function(t){return Object(x.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinateAtM=function(t,e){if(this.layout!=j.a.XYM&&this.layout!=j.a.XYZM)return null;var r=void 0!==e&&e;return I(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,r)},e.prototype.getCoordinates=function(){return Object(N.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinateAt=function(t,e){return R(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e)},e.prototype.getLength=function(){return Object(E.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getFlatMidpoint=function(){return this.flatMidpointRevision_!=this.getRevision()&&(this.flatMidpoint_=this.getCoordinateAt(.5,this.flatMidpoint_),this.flatMidpointRevision_=this.getRevision()),this.flatMidpoint_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[];return r.length=Object(L.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,r,0),new e(r,j.a.XY)},e.prototype.getType=function(){return O.a.LINE_STRING},e.prototype.intersectsExtent=function(t){return Object(M.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(P.b)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(G.a),S=function(t){function e(e,r,i){if(t.call(this),this.ends_=[],this.maxDelta_=-1,this.maxDeltaRevision_=-1,Array.isArray(e[0]))this.setCoordinates(e,r);else if(void 0!==r&&i)this.setFlatCoordinates(r,e),this.ends_=i;else{for(var o=this.getLayout(),n=e,s=[],a=[],h=0,c=n.length;h<c;++h){var u=n[h];0===h&&(o=u.getLayout()),Object(v.c)(s,u.getFlatCoordinates()),a.push(s.length)}this.setFlatCoordinates(o,s),this.ends_=a}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendLineString=function(t){this.flatCoordinates?Object(v.c)(this.flatCoordinates,t.getFlatCoordinates().slice()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},e.prototype.closestPointXY=function(t,e,r,i){return i<Object(m.e)(this.getExtent(),t,e)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Object(F.a)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Object(F.b)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!1,t,e,r,i))},e.prototype.getCoordinateAtM=function(t,e,r){if(this.layout!=j.a.XYM&&this.layout!=j.a.XYZM||0===this.flatCoordinates.length)return null;var i=void 0!==e&&e,o=void 0!==r&&r;return function(t,e,r,i,o,n,s){if(s)return I(t,e,r[r.length-1],i,o,n);var a;if(o<t[i-1])return n?((a=t.slice(0,i))[i-1]=o,a):null;if(t[t.length-1]<o)return n?((a=t.slice(t.length-i))[i-1]=o,a):null;for(var h=0,c=r.length;h<c;++h){var u=r[h];if(e!=u){if(o<t[e+i-1])return null;if(o<=t[u-1])return I(t,e,u,i,o,!1);e=u}}return null}(this.flatCoordinates,0,this.ends_,this.stride,t,i,o)},e.prototype.getCoordinates=function(){return Object(N.b)(this.flatCoordinates,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getLineString=function(t){return t<0||this.ends_.length<=t?null:new T(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLineStrings=function(){for(var t=this.flatCoordinates,e=this.ends_,r=this.layout,i=[],o=0,n=0,s=e.length;n<s;++n){var a=e[n],h=new T(t.slice(o,a),r);i.push(h),o=a}return i},e.prototype.getFlatMidpoints=function(){for(var t=[],e=this.flatCoordinates,r=0,i=this.ends_,o=this.stride,n=0,s=i.length;n<s;++n){var a=i[n],h=R(e,r,a,o,.5);Object(v.c)(t,h),r=a}return t},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],i=[];return r.length=Object(L.b)(this.flatCoordinates,0,this.ends_,this.stride,t,r,0,i),new e(r,j.a.XY,i)},e.prototype.getType=function(){return O.a.MULTI_LINE_STRING},e.prototype.intersectsExtent=function(t){return Object(M.b)(this.flatCoordinates,0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var r=Object(P.c)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===r.length?0:r[r.length-1],this.changed()},e}(G.a),A=r(530),Y=function(t){function e(e,r){t.call(this),r&&!Array.isArray(e[0])?this.setFlatCoordinates(r,e):this.setCoordinates(e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPoint=function(t){this.flatCoordinates?Object(v.c)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,r,i){if(i<Object(m.e)(this.getExtent(),t,e))return i;for(var o=this.flatCoordinates,n=this.stride,s=0,a=o.length;s<a;s+=n){var h=Object(w.f)(t,e,o[s],o[s+1]);if(h<i){i=h;for(var c=0;c<n;++c)r[c]=o[s+c];r.length=n}}return i},e.prototype.getCoordinates=function(){return Object(N.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getPoint=function(t){var e=this.flatCoordinates?this.flatCoordinates.length/this.stride:0;return t<0||e<=t?null:new A.a(this.flatCoordinates.slice(t*this.stride,(t+1)*this.stride),this.layout)},e.prototype.getPoints=function(){for(var t=this.flatCoordinates,e=this.layout,r=this.stride,i=[],o=0,n=t.length;o<n;o+=r){var s=new A.a(t.slice(o,o+r),e);i.push(s)}return i},e.prototype.getType=function(){return O.a.MULTI_POINT},e.prototype.intersectsExtent=function(t){for(var e=this.flatCoordinates,r=this.stride,i=0,o=e.length;i<o;i+=r){var n=e[i],s=e[i+1];if(Object(m.h)(t,n,s))return!0}return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(P.b)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(G.a),X=r(497),D=r(529);var k=r(492),q=r(551),U=r(559),J=function(t){function e(e,r,i){if(t.call(this),this.endss_=[],this.flatInteriorPointsRevision_=-1,this.flatInteriorPoints_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,!i&&!Array.isArray(e[0])){for(var o=this.getLayout(),n=e,s=[],a=[],h=0,c=n.length;h<c;++h){var u=n[h];0===h&&(o=u.getLayout());for(var l=s.length,p=u.getEnds(),d=0,f=p.length;d<f;++d)p[d]+=l;Object(v.c)(s,u.getFlatCoordinates()),a.push(p)}r=o,e=s,i=a}void 0!==r&&i?(this.setFlatCoordinates(r,e),this.endss_=i):this.setCoordinates(e,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendPolygon=function(t){var e;if(this.flatCoordinates){var r=this.flatCoordinates.length;Object(v.c)(this.flatCoordinates,t.getFlatCoordinates());for(var i=0,o=(e=t.getEnds().slice()).length;i<o;++i)e[i]+=r}else this.flatCoordinates=t.getFlatCoordinates().slice(),e=t.getEnds().slice(),this.endss_.push();this.endss_.push(e),this.changed()},e.prototype.clone=function(){for(var t=this.endss_.length,r=new Array(t),i=0;i<t;++i)r[i]=this.endss_[i].slice();return new e(this.flatCoordinates.slice(),this.layout,r)},e.prototype.closestPointXY=function(t,e,r,i){return i<Object(m.e)(this.getExtent(),t,e)?i:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Object(F.f)(this.flatCoordinates,0,this.endss_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Object(F.c)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,this.maxDelta_,!0,t,e,r,i))},e.prototype.containsXY=function(t,e){return Object(k.d)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t,e)},e.prototype.getArea=function(){return Object(D.c)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),Object(U.d)(e,0,this.endss_,this.stride,t)):e=this.flatCoordinates,Object(N.c)(e,0,this.endss_,this.stride)},e.prototype.getEndss=function(){return this.endss_},e.prototype.getFlatInteriorPoints=function(){if(this.flatInteriorPointsRevision_!=this.getRevision()){var t=function(t,e,r,i){for(var o=[],n=Object(m.j)(),s=0,a=r.length;s<a;++s){var h=r[s];n=Object(m.o)(t,e,h[0],i),o.push((n[0]+n[2])/2,(n[1]+n[3])/2),e=h[h.length-1]}return o}(this.flatCoordinates,0,this.endss_,this.stride);this.flatInteriorPoints_=Object(q.b)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t),this.flatInteriorPointsRevision_=this.getRevision()}return this.flatInteriorPoints_},e.prototype.getInteriorPoints=function(){return new Y(this.getFlatInteriorPoints().slice(),j.a.XYM)},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;Object(U.b)(t,0,this.endss_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=Object(U.d)(this.orientedFlatCoordinates_,0,this.endss_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var r=[],i=[];return r.length=Object(L.d)(this.flatCoordinates,0,this.endss_,this.stride,Math.sqrt(t),r,0,i),new e(r,j.a.XY,i)},e.prototype.getPolygon=function(t){if(t<0||this.endss_.length<=t)return null;var e;if(0===t)e=0;else{var r=this.endss_[t-1];e=r[r.length-1]}var i=this.endss_[t].slice(),o=i[i.length-1];if(0!==e)for(var n=0,s=i.length;n<s;++n)i[n]-=e;return new X.a(this.flatCoordinates.slice(e,o),this.layout,i)},e.prototype.getPolygons=function(){for(var t=this.layout,e=this.flatCoordinates,r=this.endss_,i=[],o=0,n=0,s=r.length;n<s;++n){var a=r[n].slice(),h=a[a.length-1];if(0!==o)for(var c=0,u=a.length;c<u;++c)a[c]-=o;var l=new X.a(e.slice(o,h),t,a);i.push(l),o=h}return i},e.prototype.getType=function(){return O.a.MULTI_POLYGON},e.prototype.intersectsExtent=function(t){return Object(M.d)(this.getOrientedFlatCoordinates(),0,this.endss_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,3),this.flatCoordinates||(this.flatCoordinates=[]);var r=Object(P.d)(this.flatCoordinates,0,t,this.stride,this.endss_);if(0===r.length)this.flatCoordinates.length=0;else{var i=r[r.length-1];this.flatCoordinates.length=0===i.length?0:i[i.length-1]}this.changed()},e}(G.a),H=function(t){function e(e){var r=e||{};t.call(this),this.dataProjection=Object(u.get)(r.dataProjection?r.dataProjection:"EPSG:4326"),r.featureProjection&&(this.defaultFeatureProjection=Object(u.get)(r.featureProjection)),this.geometryName_=r.geometryName,this.extractGeometryName_=r.extractGeometryName}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readFeatureFromObject=function(t,e){var r=null,i=K((r="Feature"===t.type?t:{type:"Feature",geometry:t,properties:null}).geometry,e),o=new a;return this.geometryName_?o.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&o.setGeometryName(r.geometry_name),o.setGeometry(i),"id"in r&&o.setId(r.id),r.properties&&o.setProperties(r.properties),o},e.prototype.readFeaturesFromObject=function(t,e){var r=null;if("FeatureCollection"===t.type){r=[];for(var i=t.features,o=0,n=i.length;o<n;++o)r.push(this.readFeatureFromObject(i[o],e))}else r=[this.readFeatureFromObject(t,e)];return r},e.prototype.readGeometryFromObject=function(t,e){return K(t,e)},e.prototype.readProjectionFromObject=function(t){var e,r=t.crs;return r?"name"==r.type?e=Object(u.get)(r.properties.name):Object(i.a)(!1,36):e=this.dataProjection,e},e.prototype.writeFeatureObject=function(t,e){e=this.adaptOptions(e);var r={type:"Feature",geometry:null,properties:null},i=t.getId();void 0!==i&&(r.id=i);var o=t.getGeometry();o&&(r.geometry=Z(o,e));var n=t.getProperties();return delete n[t.getGeometryName()],Object(h.d)(n)||(r.properties=n),r},e.prototype.writeFeaturesObject=function(t,e){e=this.adaptOptions(e);for(var r=[],i=0,o=t.length;i<o;++i)r.push(this.writeFeatureObject(t[i],e));return{type:"FeatureCollection",features:r}},e.prototype.writeGeometryObject=function(t,e){return Z(t,this.adaptOptions(e))},e}(g);function K(t,e){if(!t)return null;var r;switch(t.type){case O.a.POINT:r=function(t){return new A.a(t.coordinates)}(t);break;case O.a.LINE_STRING:r=function(t){return new T(t.coordinates)}(t);break;case O.a.POLYGON:r=function(t){return new X.a(t.coordinates)}(t);break;case O.a.MULTI_POINT:r=function(t){return new Y(t.coordinates)}(t);break;case O.a.MULTI_LINE_STRING:r=function(t){return new S(t.coordinates)}(t);break;case O.a.MULTI_POLYGON:r=function(t){return new J(t.coordinates)}(t);break;case O.a.GEOMETRY_COLLECTION:r=function(t,e){var r=t.geometries.map((function(t){return K(t,e)}));return new C(r)}(t);break;default:throw new Error("Unsupported GeoJSON type: "+t.type)}return(d(r,!1,e))}function Z(t,e){var r,i=(t=d(t,!0,e)).getType();switch(i){case O.a.POINT:r=function(t,e){return{type:"Point",coordinates:t.getCoordinates()}}(t);break;case O.a.LINE_STRING:r=function(t,e){return{type:"LineString",coordinates:t.getCoordinates()}}(t);break;case O.a.POLYGON:r=function(t,e){var r;e&&(r=e.rightHanded);return{type:"Polygon",coordinates:t.getCoordinates(r)}}(t,e);break;case O.a.MULTI_POINT:r=function(t,e){return{type:"MultiPoint",coordinates:t.getCoordinates()}}(t);break;case O.a.MULTI_LINE_STRING:r=function(t,e){return{type:"MultiLineString",coordinates:t.getCoordinates()}}(t);break;case O.a.MULTI_POLYGON:r=function(t,e){var r;e&&(r=e.rightHanded);return{type:"MultiPolygon",coordinates:t.getCoordinates(r)}}(t,e);break;case O.a.GEOMETRY_COLLECTION:r=function(t,e){return{type:"GeometryCollection",geometries:t.getGeometriesArray().map((function(t){var r=Object(h.a)({},e);return delete r.featureProjection,Z(t,r)}))}}(t,e);break;case O.a.CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+i)}return r}e.default=H}}]);
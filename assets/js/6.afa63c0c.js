(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{411:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return f})),n.d(e,"f",(function(){return h})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return p}));var r=n(395),i=new Array(6);function o(){return[1,0,0,1,0,0]}function s(t){return u(t,1,0,0,1,0,0)}function a(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],s=t[4],a=t[5],u=e[0],c=e[1],f=e[2],h=e[3],l=e[4],d=e[5];return t[0]=n*u+i*c,t[1]=r*u+o*c,t[2]=n*f+i*h,t[3]=r*f+o*h,t[4]=n*l+i*d+s,t[5]=r*l+o*d+a,t}function u(t,e,n,r,i,o,s){return t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=o,t[5]=s,t}function c(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function f(t,e){var n=e[0],r=e[1];return e[0]=t[0]*n+t[2]*r+t[4],e[1]=t[1]*n+t[3]*r+t[5],e}function h(t,e,n){return a(t,u(i,e,0,0,n,0,0))}function l(t,e,n){return a(t,u(i,1,0,0,1,e,n))}function d(t,e,n,r,i,o,s,a){var u=Math.sin(o),c=Math.cos(o);return t[0]=r*c,t[1]=i*u,t[2]=-r*u,t[3]=i*c,t[4]=s*r*c-a*r*u+e,t[5]=s*i*u+a*i*c+n,t}function p(t){var e,n=(e=t)[0]*e[3]-e[1]*e[2];Object(r.a)(0!==n,32);var i=t[0],o=t[1],s=t[2],a=t[3],u=t[4],c=t[5];return t[0]=a/n,t[1]=-o/n,t[2]=-s/n,t[3]=i/n,t[4]=(s*c-a*u)/n,t[5]=-(i*c-o*u)/n,t}},441:function(t,e,n){"use strict";n.d(e,"b",(function(){return h}));var r=n(385),i=n(386),o=n(552),s=n(468),a=n(482),u=n(387),c=function(t){function e(){t.call(this),this.layout=s.a.XY,this.stride=2,this.flatCoordinates=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.computeExtent=function(t){return Object(i.o)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)},e.prototype.getCoordinates=function(){return Object(r.b)()},e.prototype.getFirstCoordinate=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.getFlatCoordinates=function(){return this.flatCoordinates},e.prototype.getLastCoordinate=function(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)},e.prototype.getLayout=function(){return this.layout},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!=this.getRevision()&&(Object(u.b)(this.simplifiedGeometryCache),this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;var e=t.toString();if(this.simplifiedGeometryCache.hasOwnProperty(e))return this.simplifiedGeometryCache[e];var n=this.getSimplifiedGeometryInternal(t);return n.getFlatCoordinates().length<this.flatCoordinates.length?(this.simplifiedGeometryCache[e]=n,n):(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)},e.prototype.getSimplifiedGeometryInternal=function(t){return this},e.prototype.getStride=function(){return this.stride},e.prototype.setFlatCoordinates=function(t,e){this.stride=f(t),this.layout=t,this.flatCoordinates=e},e.prototype.setCoordinates=function(t,e){Object(r.b)()},e.prototype.setLayout=function(t,e,n){var r;if(t)r=f(t);else{for(var i=0;i<n;++i){if(0===e.length)return this.layout=s.a.XY,void(this.stride=2);e=e[0]}t=function(t){var e;2==t?e=s.a.XY:3==t?e=s.a.XYZ:4==t&&(e=s.a.XYZM);return(e)}(r=e.length)}this.layout=t,this.stride=r},e.prototype.applyTransform=function(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())},e.prototype.rotate=function(t,e){var n=this.getFlatCoordinates();if(n){var r=this.getStride();Object(a.a)(n,0,n.length,r,t,e,n),this.changed()}},e.prototype.scale=function(t,e,n){var r=e;void 0===r&&(r=t);var o=n;o||(o=Object(i.x)(this.getExtent()));var s=this.getFlatCoordinates();if(s){var u=this.getStride();Object(a.b)(s,0,s.length,u,t,r,o,s),this.changed()}},e.prototype.translate=function(t,e){var n=this.getFlatCoordinates();if(n){var r=this.getStride();Object(a.d)(n,0,n.length,r,t,e,n),this.changed()}},e}(o.a);function f(t){var e;return t==s.a.XY?e=2:t==s.a.XYZ||t==s.a.XYM?e=3:t==s.a.XYZM&&(e=4),e}function h(t,e,n){var r=t.getFlatCoordinates();if(r){var i=t.getStride();return Object(a.c)(r,0,r.length,i,e,n)}return null}e.a=c},450:function(t,e,n){"use strict";function r(t,e,n,r,i){for(var o=void 0!==i?i:[],s=0,a=e;a<n;a+=r)o[s++]=t.slice(a,a+r);return o.length=s,o}function i(t,e,n,i,o){for(var s=void 0!==o?o:[],a=0,u=0,c=n.length;u<c;++u){var f=n[u];s[a++]=r(t,e,f,i,s[a]),e=f}return s.length=a,s}function o(t,e,n,r,o){for(var s=void 0!==o?o:[],a=0,u=0,c=n.length;u<c;++u){var f=n[u];s[a++]=i(t,e,f,r,s[a]),e=f[f.length-1]}return s.length=a,s}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}))},451:function(t,e,n){"use strict";function r(t,e,n,r){for(var i=0,o=n.length;i<o;++i)t[e++]=n[i];return e}function i(t,e,n,r){for(var i=0,o=n.length;i<o;++i)for(var s=n[i],a=0;a<r;++a)t[e++]=s[a];return e}function o(t,e,n,r,o){for(var s=o||[],a=0,u=0,c=n.length;u<c;++u){var f=i(t,e,n[u],r);s[a++]=f,e=f}return s.length=a,s}function s(t,e,n,r,i){for(var s=i||[],a=0,u=0,c=n.length;u<c;++u){var f=o(t,e,n[u],r,s[a]);s[a++]=f,e=f[f.length-1]}return s.length=a,s}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return s}))},468:function(t,e,n){"use strict";e.a={XY:"XY",XYZ:"XYZ",XYM:"XYM",XYZM:"XYZM"}},470:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return c}));var r=n(393);function i(t,e,n,i,o,s,a){var u=(n-e)/i;if(u<3){for(;e<n;e+=i)s[a++]=t[e],s[a++]=t[e+1];return a}var c=new Array(u);c[0]=1,c[u-1]=1;for(var f=[e,n-i],h=0;f.length>0;){for(var l=f.pop(),d=f.pop(),p=0,g=t[d],v=t[d+1],y=t[l],b=t[l+1],C=d+i;C<l;C+=i){var O=t[C],j=t[C+1],_=Object(r.g)(O,j,g,v,y,b);_>p&&(h=C,p=_)}p>o&&(c[(h-e)/i]=1,d+i<h&&f.push(d,h),h+i<l&&f.push(h,l))}for(var m=0;m<u;++m)c[m]&&(s[a++]=t[e+m*i],s[a++]=t[e+m*i+1]);return a}function o(t,e,n,r,o,s,a,u){for(var c=0,f=n.length;c<f;++c){var h=n[c];a=i(t,e,h,r,o,s,a),u.push(a),e=h}return a}function s(t,e){return e*Math.round(t/e)}function a(t,e,n,r,i,o,a){if(e==n)return a;var u,c,f=s(t[e],i),h=s(t[e+1],i);e+=r,o[a++]=f,o[a++]=h;do{if(u=s(t[e],i),c=s(t[e+1],i),(e+=r)==n)return o[a++]=u,o[a++]=c,a}while(u==f&&c==h);for(;e<n;){var l=s(t[e],i),d=s(t[e+1],i);if(e+=r,l!=u||d!=c){var p=u-f,g=c-h,v=l-f,y=d-h;p*y==g*v&&(p<0&&v<p||p==v||p>0&&v>p)&&(g<0&&y<g||g==y||g>0&&y>g)?(u=l,c=d):(o[a++]=u,o[a++]=c,f=u,h=c,u=l,c=d)}}return o[a++]=u,o[a++]=c,a}function u(t,e,n,r,i,o,s,u){for(var c=0,f=n.length;c<f;++c){var h=n[c];s=a(t,e,h,r,i,o,s),u.push(s),e=h}return s}function c(t,e,n,r,i,o,s,a){for(var c=0,f=n.length;c<f;++c){var h=n[c],l=[];s=u(t,e,h,r,i,o,s,l),a.push(l),e=h[h.length-1]}return s}},481:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f}));var r=n(393);function i(t,e,n,i,o,s,a){var u,c=t[e],f=t[e+1],h=t[n]-c,l=t[n+1]-f;if(0===h&&0===l)u=e;else{var d=((o-c)*h+(s-f)*l)/(h*h+l*l);if(d>1)u=n;else{if(d>0){for(var p=0;p<i;++p)a[p]=Object(r.c)(t[e+p],t[n+p],d);return void(a.length=i)}u=e}}for(var g=0;g<i;++g)a[g]=t[u+g];a.length=i}function o(t,e,n,i,o){var s=t[e],a=t[e+1];for(e+=i;e<n;e+=i){var u=t[e],c=t[e+1],f=Object(r.f)(s,a,u,c);f>o&&(o=f),s=u,a=c}return o}function s(t,e,n,r,i){for(var s=0,a=n.length;s<a;++s){var u=n[s];i=o(t,e,u,r,i),e=u}return i}function a(t,e,n,r,i){for(var o=0,a=n.length;o<a;++o){var u=n[o];i=s(t,e,u,r,i),e=u[u.length-1]}return i}function u(t,e,n,o,s,a,u,c,f,h,l){if(e==n)return h;var d,p;if(0===s){if((p=Object(r.f)(u,c,t[e],t[e+1]))<h){for(d=0;d<o;++d)f[d]=t[e+d];return f.length=o,p}return h}for(var g=l||[NaN,NaN],v=e+o;v<n;)if(i(t,v-o,v,o,u,c,g),(p=Object(r.f)(u,c,g[0],g[1]))<h){for(h=p,d=0;d<o;++d)f[d]=g[d];f.length=o,v+=o}else v+=o*Math.max((Math.sqrt(p)-Math.sqrt(h))/s|0,1);if(a&&(i(t,n-o,e,o,u,c,g),(p=Object(r.f)(u,c,g[0],g[1]))<h)){for(h=p,d=0;d<o;++d)f[d]=g[d];f.length=o}return h}function c(t,e,n,r,i,o,s,a,c,f,h){for(var l=h||[NaN,NaN],d=0,p=n.length;d<p;++d){var g=n[d];f=u(t,e,g,r,i,o,s,a,c,f,l),e=g}return f}function f(t,e,n,r,i,o,s,a,u,f,h){for(var l=h||[NaN,NaN],d=0,p=n.length;d<p;++d){var g=n[d];f=c(t,e,g,r,i,o,s,a,u,f,l),e=g[g.length-1]}return f}},482:function(t,e,n){"use strict";function r(t,e,n,r,i,o){for(var s=o||[],a=0,u=e;u<n;u+=r){var c=t[u],f=t[u+1];s[a++]=i[0]*c+i[2]*f+i[4],s[a++]=i[1]*c+i[3]*f+i[5]}return o&&s.length!=a&&(s.length=a),s}function i(t,e,n,r,i,o,s){for(var a=s||[],u=Math.cos(i),c=Math.sin(i),f=o[0],h=o[1],l=0,d=e;d<n;d+=r){var p=t[d]-f,g=t[d+1]-h;a[l++]=f+p*u-g*c,a[l++]=h+p*c+g*u;for(var v=d+2;v<d+r;++v)a[l++]=t[v]}return s&&a.length!=l&&(a.length=l),a}function o(t,e,n,r,i,o,s,a){for(var u=a||[],c=s[0],f=s[1],h=0,l=e;l<n;l+=r){var d=t[l]-c,p=t[l+1]-f;u[h++]=c+i*d,u[h++]=f+o*p;for(var g=l+2;g<l+r;++g)u[h++]=t[g]}return a&&u.length!=h&&(u.length=h),u}function s(t,e,n,r,i,o,s){for(var a=s||[],u=0,c=e;c<n;c+=r){a[u++]=t[c]+i,a[u++]=t[c+1]+o;for(var f=c+2;f<c+r;++f)a[u++]=t[f]}return s&&a.length!=u&&(a.length=u),a}n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return s}))},492:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a}));var r=n(386);function i(t,e,n,i,s){return!Object(r.t)(s,(function(r){return!o(t,e,n,i,r[0],r[1])}))}function o(t,e,n,r,i,o){for(var s=0,a=t[n-r],u=t[n-r+1];e<n;e+=r){var c=t[e],f=t[e+1];u<=o?f>o&&(c-a)*(o-u)-(i-a)*(f-u)>0&&s++:f<=o&&(c-a)*(o-u)-(i-a)*(f-u)<0&&s--,a=c,u=f}return 0!==s}function s(t,e,n,r,i,s){if(0===n.length)return!1;if(!o(t,e,n[0],r,i,s))return!1;for(var a=1,u=n.length;a<u;++a)if(o(t,n[a-1],n[a],r,i,s))return!1;return!0}function a(t,e,n,r,i,o){if(0===n.length)return!1;for(var a=0,u=n.length;a<u;++a){var c=n[a];if(s(t,e,c,r,i,o))return!0;e=c[c.length-1]}return!1}},493:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return c}));var r=n(386),i=n(492),o=n(555);function s(t,e,n,i,s){var a=Object(r.s)(Object(r.j)(),t,e,n,i);return!!Object(r.F)(s,a)&&(!!Object(r.g)(s,a)||(a[0]>=s[0]&&a[2]<=s[2]||(a[1]>=s[1]&&a[3]<=s[3]||Object(o.a)(t,e,n,i,(function(t,e){return Object(r.G)(s,t,e)})))))}function a(t,e,n,r,i){for(var o=0,a=n.length;o<a;++o){if(s(t,e,n[o],r,i))return!0;e=n[o]}return!1}function u(t,e,n,r,o){if(!function(t,e,n,r,o){return!!s(t,e,n,r,o)||(!!Object(i.b)(t,e,n,r,o[0],o[1])||(!!Object(i.b)(t,e,n,r,o[0],o[3])||(!!Object(i.b)(t,e,n,r,o[2],o[1])||!!Object(i.b)(t,e,n,r,o[2],o[3]))))}(t,e,n[0],r,o))return!1;if(1===n.length)return!0;for(var a=1,u=n.length;a<u;++a)if(Object(i.a)(t,n[a-1],n[a],r,o)&&!s(t,n[a-1],n[a],r,o))return!1;return!0}function c(t,e,n,r,i){for(var o=0,s=n.length;o<s;++o){var a=n[o];if(u(t,e,a,r,i))return!0;e=a[a.length-1]}return!1}},497:function(t,e,n){"use strict";var r=n(403),i=n(386),o=n(468),s=n(406),a=n(441),u=n(529),c=n(481),f=n(451),h=n(450),l=n(470),d=function(t){function e(e,n){t.call(this),this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===n||Array.isArray(e[0])?this.setCoordinates(e,n):this.setFlatCoordinates(n,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,n,r){return r<Object(i.e)(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Object(c.e)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Object(c.d)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,n,r))},e.prototype.getArea=function(){return Object(u.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getCoordinates=function(){return Object(h.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)},e.prototype.getSimplifiedGeometryInternal=function(t){var n=[];return n.length=Object(l.a)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,n,0),new e(n,o.a.XY)},e.prototype.getType=function(){return s.a.LINEAR_RING},e.prototype.intersectsExtent=function(t){return!1},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(f.b)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(a.a),p=n(530),g=(n(554),n(492)),v=n(551),y=n(493),b=n(559);n(393);n.d(e,"b",(function(){return O}));var C=function(t){function e(e,n,r){t.call(this),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,void 0!==n&&r?(this.setFlatCoordinates(n,e),this.ends_=r):this.setCoordinates(e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.appendLinearRing=function(t){this.flatCoordinates?Object(r.c)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()},e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout,this.ends_.slice())},e.prototype.closestPointXY=function(t,e,n,r){return r<Object(i.e)(this.getExtent(),t,e)?r:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt(Object(c.a)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),Object(c.b)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,n,r))},e.prototype.containsXY=function(t,e){return Object(g.c)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)},e.prototype.getArea=function(){return Object(u.b)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)},e.prototype.getCoordinates=function(t){var e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),Object(b.c)(e,0,this.ends_,this.stride,t)):e=this.flatCoordinates,Object(h.b)(e,0,this.ends_,this.stride)},e.prototype.getEnds=function(){return this.ends_},e.prototype.getFlatInteriorPoint=function(){if(this.flatInteriorPointRevision_!=this.getRevision()){var t=Object(i.x)(this.getExtent());this.flatInteriorPoint_=Object(v.a)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_},e.prototype.getInteriorPoint=function(){return new p.a(this.getFlatInteriorPoint(),o.a.XYM)},e.prototype.getLinearRingCount=function(){return this.ends_.length},e.prototype.getLinearRing=function(t){return t<0||this.ends_.length<=t?null:new d(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)},e.prototype.getLinearRings=function(){for(var t=this.layout,e=this.flatCoordinates,n=this.ends_,r=[],i=0,o=0,s=n.length;o<s;++o){var a=n[o],u=new d(e.slice(i,a),t);r.push(u),i=a}return r},e.prototype.getOrientedFlatCoordinates=function(){if(this.orientedRevision_!=this.getRevision()){var t=this.flatCoordinates;Object(b.a)(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=Object(b.c)(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_},e.prototype.getSimplifiedGeometryInternal=function(t){var n=[],r=[];return n.length=Object(l.c)(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),n,0,r),new e(n,o.a.XY,r)},e.prototype.getType=function(){return s.a.POLYGON},e.prototype.intersectsExtent=function(t){return Object(y.c)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);var n=Object(f.c)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===n.length?0:n[n.length-1],this.changed()},e}(a.a);e.a=C;function O(t){var e=t[0],n=t[1],r=t[2],i=t[3],s=[e,n,e,i,r,i,r,n,e,n];return new C(s,o.a.XY,[s.length])}},529:function(t,e,n){"use strict";function r(t,e,n,r){for(var i=0,o=t[n-r],s=t[n-r+1];e<n;e+=r){var a=t[e],u=t[e+1];i+=s*a-o*u,o=a,s=u}return i/2}function i(t,e,n,i){for(var o=0,s=0,a=n.length;s<a;++s){var u=n[s];o+=r(t,e,u,i),e=u}return o}function o(t,e,n,r){for(var o=0,s=0,a=n.length;s<a;++s){var u=n[s];o+=i(t,e,u,r),e=u[u.length-1]}return o}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o}))},530:function(t,e,n){"use strict";var r=n(386),i=n(406),o=n(441),s=n(451),a=n(393),u=function(t){function e(e,n){t.call(this),this.setCoordinates(e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),this.layout)},e.prototype.closestPointXY=function(t,e,n,r){var i=this.flatCoordinates,o=Object(a.f)(t,e,i[0],i[1]);if(o<r){for(var s=this.stride,u=0;u<s;++u)n[u]=i[u];return n.length=s,o}return r},e.prototype.getCoordinates=function(){return this.flatCoordinates?this.flatCoordinates.slice():[]},e.prototype.computeExtent=function(t){return Object(r.m)(this.flatCoordinates,t)},e.prototype.getType=function(){return i.a.POINT},e.prototype.intersectsExtent=function(t){return Object(r.h)(t,this.flatCoordinates[0],this.flatCoordinates[1])},e.prototype.setCoordinates=function(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=Object(s.a)(this.flatCoordinates,0,t,this.stride),this.changed()},e}(o.a);e.a=u},551:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(403),i=n(492);function o(t,e,n,o,s,a,u){for(var c,f,h,l,d,p,g,v=s[a+1],y=[],b=0,C=n.length;b<C;++b){var O=n[b];for(l=t[O-o],p=t[O-o+1],c=e;c<O;c+=o)d=t[c],g=t[c+1],(v<=p&&g<=v||p<=v&&v<=g)&&(h=(v-p)/(g-p)*(d-l)+l,y.push(h)),l=d,p=g}var j=NaN,_=-1/0;for(y.sort(r.g),l=y[0],c=1,f=y.length;c<f;++c){d=y[c];var m=Math.abs(d-l);m>_&&(h=(l+d)/2,Object(i.c)(t,e,n,o,h,v)&&(j=h,_=m)),l=d}return isNaN(j)&&(j=s[a]),u?(u.push(j,v,_),u):[j,v,_]}function s(t,e,n,r,i){for(var s=[],a=0,u=n.length;a<u;++a){var c=n[a];s=o(t,e,c,r,i,2*a,s),e=c[c.length-1]}return s}},552:function(t,e,n){"use strict";var r=n(385),i=n(400),o=n(386),s=n(482),a=n(415),u=n(423),c=n(411),f=Object(c.c)(),h=function(t){function e(){t.call(this),this.extent_=Object(o.j)(),this.extentRevision_=-1,this.simplifiedGeometryCache={},this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return Object(r.b)()},e.prototype.closestPointXY=function(t,e,n,i){return Object(r.b)()},e.prototype.containsXY=function(t,e){return!1},e.prototype.getClosestPoint=function(t,e){var n=e||[NaN,NaN];return this.closestPointXY(t[0],t[1],n,1/0),n},e.prototype.intersectsCoordinate=function(t){return this.containsXY(t[0],t[1])},e.prototype.computeExtent=function(t){return Object(r.b)()},e.prototype.getExtent=function(t){return this.extentRevision_!=this.getRevision()&&(this.extent_=this.computeExtent(this.extent_),this.extentRevision_=this.getRevision()),Object(o.I)(this.extent_,t)},e.prototype.rotate=function(t,e){Object(r.b)()},e.prototype.scale=function(t,e,n){Object(r.b)()},e.prototype.simplify=function(t){return this.getSimplifiedGeometry(t*t)},e.prototype.getSimplifiedGeometry=function(t){return Object(r.b)()},e.prototype.getType=function(){return Object(r.b)()},e.prototype.applyTransform=function(t){Object(r.b)()},e.prototype.intersectsExtent=function(t){return Object(r.b)()},e.prototype.translate=function(t,e){Object(r.b)()},e.prototype.transform=function(t,e){var n=Object(a.get)(t),r=n.getUnits()==u.b.TILE_PIXELS?function(t,r,i){var u=n.getExtent(),h=n.getWorldExtent(),l=Object(o.A)(h)/Object(o.A)(u);return Object(c.b)(f,h[0],h[3],l,-l,0,0,0),Object(s.c)(t,0,t.length,i,f,r),Object(a.getTransform)(n,e)(t,r,i)}:Object(a.getTransform)(n,e);return this.applyTransform(r),this},e}(i.a);e.a=h},555:function(t,e,n){"use strict";function r(t,e,n,r,i,o){for(var s,a=[t[e],t[e+1]],u=[];e+r<n;e+=r){if(u[0]=t[e+r],u[1]=t[e+r+1],s=i.call(o,a,u))return s;a[0]=u[0],a[1]=u[1]}return!1}n.d(e,"a",(function(){return r}))},559:function(t,e,n){"use strict";function r(t,e,n,r){for(;e<n-r;){for(var i=0;i<r;++i){var o=t[e+i];t[e+i]=t[n-r+i],t[n-r+i]=o}e+=r,n-=r}}function i(t,e,n,r){for(var i=0,o=t[n-r],s=t[n-r+1];e<n;e+=r){var a=t[e],u=t[e+1];i+=(a-o)*(u+s),o=a,s=u}return i>0}function o(t,e,n,r,o){for(var s=void 0!==o&&o,a=0,u=n.length;a<u;++a){var c=n[a],f=i(t,e,c,r);if(0===a){if(s&&f||!s&&!f)return!1}else if(s&&!f||!s&&f)return!1;e=c}return!0}function s(t,e,n,r,i){for(var s=0,a=n.length;s<a;++s)if(!o(t,e,n[s],r,i))return!1;return!0}function a(t,e,n,o,s){for(var a=void 0!==s&&s,u=0,c=n.length;u<c;++u){var f=n[u],h=i(t,e,f,o);(0===u?a&&h||!a&&!h:a&&!h||!a&&h)&&r(t,e,f,o),e=f}return e}function u(t,e,n,r,i){for(var o=0,s=n.length;o<s;++o)e=a(t,e,n[o],r,i);return e}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u}))}}]);
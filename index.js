// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,f){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof f||null===f||"[object Array]"===n.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((c="value"in f)&&(u.call(e,r)||a.call(e,r)?(l=e.__proto__,e.__proto__=t,delete e[r],e[r]=f.value,e.__proto__=l):e[r]=f.value),_="get"in f,p="set"in f,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,f.get),p&&i&&i.call(e,r,f.set),e};function l(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e,r,t){var n,o,i,u;if(i=0,e<=0)return i;if(1===e||0===t)return r[0];if(1===t){if((o=e%6)>0)for(u=0;u<o;u++)i+=r[u];if(e<6)return i;for(u=o;u<e;u+=6)i+=r[u]+r[u+1]+r[u+2]+r[u+3]+r[u+4]+r[u+5];return i}for(n=t<0?(1-e)*t:0,u=0;u<e;u++)i+=r[n],n+=t;return i}function _(e,r,t,n){var o,i,u,a;if(u=0,e<=0)return u;if(1===e||0===t)return r[n];if(o=n,1===t){if((i=e%6)>0)for(a=0;a<i;a++)u+=r[o],o+=t;if(e<6)return u;for(a=i;a<e;a+=6)u+=r[o]+r[o+1]+r[o+2]+r[o+3]+r[o+4]+r[o+5],o+=6;return u}for(a=0;a<e;a++)u+=r[o],o+=t;return u}function p(e,r,t){return e<=0?NaN:1===e||0===t?r[0]:c(e,r,t)/e}return l(c,"ndarray",_),l(p,"ndarray",(function(e,r,t,n){return e<=0?NaN:1===e||0===t?r[n]:_(e,r,t,n)/e})),p},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).meanors=r();
//# sourceMappingURL=index.js.map

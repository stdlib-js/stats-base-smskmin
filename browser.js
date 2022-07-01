// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__,l=e,c=function(t,r,e){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t},y=r()?l:c,p=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},b=function(t){return t!=t},d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),_=Object.prototype.toString,s=_,m=function(t){return s.call(t)},v=Object.prototype.hasOwnProperty,w=function(t,r){return null!=t&&v.call(t,r)},A="function"==typeof Symbol?Symbol.toStringTag:"",g=w,j=A,h=_,S=function(t){var r,e,n;if(null==t)return h.call(t);e=t[j],r=g(t,j);try{t[j]=void 0}catch(r){return h.call(t)}return n=h.call(t),r?t[j]=e:delete t[j],n},N=m,F=S,O=d&&"symbol"==typeof Symbol.toStringTag?F:N,T=O,U="function"==typeof Float32Array,E=function(t){return U&&t instanceof Float32Array||"[object Float32Array]"===T(t)},P=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,k=E,x=P,V=I,G="function"==typeof Float32Array?Float32Array:void 0,C=function(){throw new Error("not implemented")},Y=function(){var t,r;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,5e40]),t=k(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===x}catch(r){t=!1}return t}()?G:C,q=O,z="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D=function(t){return z&&t instanceof Uint32Array||"[object Uint32Array]"===q(t)},H=B,J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},L=function(){var t,r;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,4294967296,4294967297]),t=D(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?J:K,M=new Y(1);new L(M.buffer)[0]=4286578688;var Q=M[0],R=function(t){return 0===t&&1/t===Q};function W(t,r,e,n,o){var i,u,a,f,l;if(t<=0)return NaN;for(u=e<0?(1-t)*e:0,a=o<0?(1-t)*o:0,l=0;l<t&&0!==n[a];l++)u+=e,a+=o;if(l===t)return NaN;if(i=r[u],b(i))return i;for(l+=1;l<t;l++)if(u+=e,!n[a+=o]){if(f=r[u],b(f))return f;(f<i||f===i&&R(f))&&(i=f)}return i}return p(W,"ndarray",(function(t,r,e,n,o,i,u){var a,f,l,c,y;if(t<=0)return NaN;for(f=n,l=u,y=0;y<t&&0!==o[l];y++)f+=e,l+=i;if(y===t)return NaN;if(a=r[f],b(a))return a;for(y+=1;y<t;y++)if(f+=e,!o[l+=i]){if(c=r[f],b(c))return c;(c<a||c===a&&R(c))&&(a=c)}return a})),W},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).smskmin=r();
//# sourceMappingURL=browser.js.map

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var l,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(r,t)||f.call(r,t)?(l=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=l):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var l=t;function c(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var b,_="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return p.call(r);e=r[_],a=_,t=null!=(o=r)&&v.call(o,a);try{r[_]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[_]=e:delete r[_],n}:function(r){return p.call(r)};var d=b,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null;var A,j="function"==typeof Float32Array?Float32Array:void 0;A=function(){var r,t,e;if("function"!=typeof w)return!1;try{t=new w([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g=A,S="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var N,F="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(S&&e instanceof Uint32Array||"[object Uint32Array]"===d(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O=N,U=new g(1);new O(U.buffer)[0]=4286578688;var E=U[0];function P(r){return 0===r&&1/r===E}function T(r,t,e,n,o){var a,i,u,f,l;if(r<=0)return NaN;for(i=e<0?(1-r)*e:0,u=o<0?(1-r)*o:0,l=0;l<r&&0!==n[u];l++)i+=e,u+=o;if(l===r)return NaN;if(c(a=t[i]))return a;for(l+=1;l<r;l++)if(i+=e,!n[u+=o]){if(c(f=t[i]))return f;(f<a||f===a&&P(f))&&(a=f)}return a}function I(r,t,e,n,o,a,i){var u,f,l,y,p;if(r<=0)return NaN;for(f=n,l=i,p=0;p<r&&0!==o[l];p++)f+=e,l+=a;if(p===r)return NaN;if(c(u=t[f]))return u;for(p+=1;p<r;p++)if(f+=e,!o[l+=a]){if(c(y=t[f]))return y;(y<u||y===u&&P(y))&&(u=y)}return u}l(T,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:I});export{T as default,I as ndarray};
//# sourceMappingURL=mod.js.map

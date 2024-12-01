// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,b,"e"),i=p.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=p.call(i,u,"e+0$1"),i=p.call(i,g,"e-0$1"),r.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,y,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===f.call(r.specifier)?f.call(i):l.call(i)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function A(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,i,a,o,s,l,f,p,u,g,d,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if("string"==typeof(i=r[f]))s+=i;else{if(e=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,A(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,A(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!A(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=A(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,g=i.width,d=i.padRight,y=void 0,(y=g-u.length)<0?u:u=d?u+m(y):m(y)+u)),s+=i.arg||"",l+=1}return s}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,i,n;for(t=[],n=0,i=x.exec(r);i;)(e=r.slice(n,x.lastIndex-i[0].length)).length&&t.push(e),t.push(F(i)),n=x.lastIndex,i=x.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function T(r){var e,t;if("string"!=typeof r)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var I,V=Object.prototype,N=V.toString,$=V.__defineGetter__,O=V.__defineSetter__,U=V.__lookupGetter__,C=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(U.call(r,e)||C.call(r,e)?(i=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};var P=I;function R(r){return r!=r}var Z,G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),W=Object.prototype.toString,L=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";Z=G&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i,n,a;if(null==r)return W.call(r);t=r[z],a=z,e=null!=(n=r)&&L.call(n,a);try{r[z]=void 0}catch(e){return W.call(r)}return i=W.call(r),e?r[z]=t:delete r[z],i}:function(r){return W.call(r)};var M,Y=Z,q="function"==typeof Float32Array,B=Number.POSITIVE_INFINITY,D="function"==typeof Float32Array?Float32Array:null,H="function"==typeof Float32Array?Float32Array:void 0;M=function(){var r,e,t;if("function"!=typeof D)return!1;try{e=new D([1,3.14,-3.14,5e40]),t=e,r=(q&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===B}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")};var J,K=M,Q="function"==typeof Uint32Array,rr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,t;if("function"!=typeof rr)return!1;try{e=new rr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Q&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=J,ir=new K(1);new tr(ir.buffer)[0]=4286578688;var nr,ar=ir[0];function or(r){return 0===r&&1/r===ar}function cr(r,e,t,i,n){var a,o,c,s,l;if(r<=0)return NaN;for(o=t<0?(1-r)*t:0,c=n<0?(1-r)*n:0,l=0;l<r&&0!==i[c];l++)o+=t,c+=n;if(l===r)return NaN;if(R(a=e[o]))return a;for(l+=1;l<r;l++)if(o+=t,!i[c+=n]){if(R(s=e[o]))return s;(s<a||s===a&&or(s))&&(a=s)}return a}return nr=function(r,e,t,i,n,a,o){var c,s,l,f,p;if(r<=0)return NaN;for(s=i,l=o,p=0;p<r&&0!==n[l];p++)s+=t,l+=a;if(p===r)return NaN;if(R(c=e[s]))return c;for(p+=1;p<r;p++)if(s+=t,!n[l+=a]){if(R(f=e[s]))return f;(f<c||f===c&&or(f))&&(c=f)}return c},P(cr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:nr}),cr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).smskmin=e();
//# sourceMappingURL=browser.js.map

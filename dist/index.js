"use strict";var q=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var x=q(function(F,l){
var p=require('@stdlib/math-base-assert-is-nanf/dist'),_=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(i,a,t,m,o){var u,v,r,n,e;if(i<=0)return NaN;for(t<0?v=(1-i)*t:v=0,o<0?r=(1-i)*o:r=0,e=0;e<i&&m[r]!==0;e++)v+=t,r+=o;if(e===i)return NaN;if(u=a[v],p(u))return u;for(e+=1,e;e<i;e++)if(v+=t,r+=o,!m[r]){if(n=a[v],p(n))return n;(n<u||n===u&&_(n))&&(u=n)}return u}l.exports=E
});var b=q(function(G,j){
var y=require('@stdlib/math-base-assert-is-nanf/dist'),O=require('@stdlib/math-base-assert-is-negative-zerof/dist');function h(i,a,t,m,o,u,v){var r,n,e,s,f;if(i<=0)return NaN;for(n=m,e=v,f=0;f<i&&o[e]!==0;f++)n+=t,e+=u;if(f===i)return NaN;if(r=a[n],y(r))return r;for(f+=1,f;f<i;f++)if(n+=t,e+=u,!o[e]){if(s=a[n],y(s))return s;(s<r||s===r&&O(s))&&(r=s)}return r}j.exports=h
});var R=q(function(H,N){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=x(),w=b();k(g,"ndarray",w);N.exports=g
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),c,Z=A(z(__dirname,"./native.js"));B(Z)?c=C:c=Z;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

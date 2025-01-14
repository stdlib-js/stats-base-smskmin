"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=q(function(F,y){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-negative-zerof/dist');function E(r,e,u,o,t,f,m){var a,v,s,n,i;if(r<=0)return NaN;for(v=o,s=m,i=0;i<r&&t[s]!==0;i++)v+=u,s+=f;if(i===r)return NaN;if(a=e[v],x(a))return a;for(i+=1,i;i<r;i++)if(v+=u,s+=f,!t[s]){if(n=e[v],x(n))return n;(n<a||n===a&&g(n))&&(a=n)}return a}y.exports=E
});var k=q(function(G,d){
var j=require('@stdlib/strided-base-stride2offset/dist'),O=c();function Z(r,e,u,o,t){var f=j(r,u),m=j(r,t);return O(r,e,u,f,o,t,m)}d.exports=Z
});var _=q(function(H,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=k(),w=c();h(l,"ndarray",w);R.exports=l
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=_(),p,b=A(z(__dirname,"./native.js"));B(b)?p=C:p=b;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

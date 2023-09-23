// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@esm/index.mjs";function n(r,n,i,s,a){var f,d,o,m,u;if(r<=0)return NaN;for(d=i<0?(1-r)*i:0,o=a<0?(1-r)*a:0,u=0;u<r&&0!==s[o];u++)d+=i,o+=a;if(u===r)return NaN;if(f=n[d],e(f))return f;for(u+=1;u<r;u++)if(d+=i,!s[o+=a]){if(m=n[d],e(m))return m;(m<f||m===f&&t(m))&&(f=m)}return f}function i(r,n,i,s,a,f,d){var o,m,u,l,j;if(r<=0)return NaN;for(m=s,u=d,j=0;j<r&&0!==a[u];j++)m+=i,u+=f;if(j===r)return NaN;if(o=n[m],e(o))return o;for(j+=1;j<r;j++)if(m+=i,!a[u+=f]){if(l=n[m],e(l))return l;(l<o||l===o&&t(l))&&(o=l)}return o}r(n,"ndarray",i);export{n as default,i as ndarray};
//# sourceMappingURL=index.mjs.map

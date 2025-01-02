// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.3-esm/index.mjs";function n(e,r,n,i,d,a,f){var m,o,j,l,p;if(e<=0)return NaN;for(o=i,j=f,p=0;p<e&&0!==d[j];p++)o+=n,j+=a;if(p===e)return NaN;if(m=r[o],t(m))return m;for(p+=1;p<e;p++)if(o+=n,!d[j+=a]){if(l=r[o],t(l))return l;(l<m||l===m&&s(l))&&(m=l)}return m}function i(e,t,s,i,d){return n(e,t,s,r(e,s),i,d,r(e,d))}e(i,"ndarray",n);export{i as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
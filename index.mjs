// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gsumors@v0.2.2-esm/index.mjs";function s(r,n,s){return r<=0?NaN:1===r||0===s?n[0]:e(r,n,s)/r}r(s,"ndarray",(function(r,e,s,t){return r<=0?NaN:1===r||0===s?e[t]:n(r,e,s,t)/r}));const{ndarray:t}=s;export{s as default,t as ndarray};
//# sourceMappingURL=index.mjs.map

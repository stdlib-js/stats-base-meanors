"use strict";var a=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=a(function(O,s){
var v=require('@stdlib/blas-ext-base-gsumors/dist');function f(r,e,u){return r<=0?NaN:r===1||u===0?e[0]:v(r,e,u)/r}s.exports=f
});var o=a(function(R,i){
var p=require('@stdlib/blas-ext-base-gsumors/dist').ndarray;function y(r,e,u,n){return r<=0?NaN:r===1||u===0?e[n]:p(r,e,u,n)/r}i.exports=y
});var q=a(function(b,m){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=t(),g=o();d(c,"ndarray",g);m.exports=c
});var x=q();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

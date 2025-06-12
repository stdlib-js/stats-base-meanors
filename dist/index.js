"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=s(function(R,u){
var d=require('@stdlib/blas-ext-base-gsumors/dist').ndarray;function f(r,e,a,c){return r<=0?NaN:d(r,e,a,c)/r}u.exports=f
});var i=s(function(b,n){
var m=require('@stdlib/strided-base-stride2offset/dist'),y=t();function p(r,e,a){return y(r,e,a,m(r,a))}n.exports=p
});var v=s(function(h,q){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=i(),g=t();x(o,"ndarray",g);q.exports=o
});var l=v();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

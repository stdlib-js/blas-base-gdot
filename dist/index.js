"use strict";var p=function(f,a){return function(){return a||f((a={exports:{}}).exports,a),a.exports}};var g=p(function(z,q){
var m=5;function b(f,a,v,u,n){var t,c,i,e,r;if(t=0,f<=0)return t;if(v===1&&n===1){if(e=f%m,e>0)for(r=0;r<e;r++)t+=a[r]*u[r];if(f<m)return t;for(r=e;r<f;r+=m)t+=a[r]*u[r]+a[r+1]*u[r+1]+a[r+2]*u[r+2]+a[r+3]*u[r+3]+a[r+4]*u[r+4];return t}for(v<0?c=(1-f)*v:c=0,n<0?i=(1-f)*n:i=0,r=0;r<f;r++)t+=a[c]*u[i],c+=v,i+=n;return t}q.exports=b
});var O=p(function(A,M){
var s=5;function h(f,a,v,u,n,t,c){var i,e,r,l,o;if(i=0,f<=0)return i;if(e=u,r=c,v===1&&t===1){if(l=f%s,l>0)for(o=0;o<l;o++)i+=a[e]*n[r],e+=1,r+=1;if(f<s)return i;for(o=l;o<f;o+=s)i+=a[e]*n[r]+a[e+1]*n[r+1]+a[e+2]*n[r+2]+a[e+3]*n[r+3]+a[e+4]*n[r+4],e+=s,r+=s;return i}for(o=0;o<f;o++)i+=a[e]*n[r],e+=v,r+=t;return i}M.exports=h
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=g(),k=O();j(R,"ndarray",k);module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

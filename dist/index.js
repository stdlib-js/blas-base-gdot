"use strict";var m=function(t,o){return function(){return o||t((o={exports:{}}).exports,o),o.exports}};var P=m(function(G,M){
var d=5;function w(t,o,s,q,i,g,p){var u,a,e,c,n,v,r,b,f;if(u=o.data,a=i.data,e=o.accessors[0],c=i.accessors[0],n=0,v=q,r=p,s===1&&g===1){if(b=t%d,b>0)for(f=0;f<b;f++)n+=e(u,v)*c(a,r),v+=1,r+=1;if(t<d)return n;for(f=b;f<t;f+=d)n+=e(u,v)*c(a,r)+e(u,v+1)*c(a,r+1)+e(u,v+2)*c(a,r+2)+e(u,v+3)*c(a,r+3)+e(u,v+4)*c(a,r+4),v+=d,r+=d;return n}for(f=0;f<t;f++)n+=e(u,v)*c(a,r),v+=s,r+=g;return n}M.exports=w
});var y=m(function(H,k){
var j=require('@stdlib/array-base-arraylike2object/dist'),z=P(),l=5;function A(t,o,s,q,i,g,p){var u,a,e,c,n,v,r;if(u=0,t<=0)return u;if(c=j(o),n=j(i),c.accessorProtocol||n.accessorProtocol)return z(t,c,s,q,n,g,p);if(a=q,e=p,s===1&&g===1){if(v=t%l,v>0)for(r=0;r<v;r++)u+=o[a]*i[e],a+=1,e+=1;if(t<l)return u;for(r=v;r<t;r+=l)u+=o[a]*i[e]+o[a+1]*i[e+1]+o[a+2]*i[e+2]+o[a+3]*i[e+3]+o[a+4]*i[e+4],a+=l,e+=l;return u}for(r=0;r<t;r++)u+=o[a]*i[e],a+=s,e+=g;return u}k.exports=A
});var R=m(function(I,O){
var x=require('@stdlib/strided-base-stride2offset/dist'),B=y();function C(t,o,s,q,i){return B(t,o,s,x(t,s),q,i,x(t,i))}O.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),E=y();D(h,"ndarray",E);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

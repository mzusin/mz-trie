/*
https://github.com/mzusin/mz-trie
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var l=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var a=(t,r)=>{for(var o in r)l(t,o,{get:r[o],enumerable:!0})},g=(t,r,o,d)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of c(r))!h.call(t,e)&&e!==o&&l(t,e,{get:()=>r[e],enumerable:!(d=f(r,e))||d.enumerable});return t};var I=t=>g(l({},"__esModule",{value:!0}),t);var u={};a(u,{trie:()=>p});module.exports=I(u);var p=t=>{let r={children:new Map,isEndOfWord:!1},o=e=>{let n=r;for(let i=0;i<e.length;i++){let s=e[i];n.children.has(s)||n.children.set(s,{children:new Map,isEndOfWord:!1}),n=n.children.get(s)}n.isEndOfWord=!0},d=e=>{let n=r;for(let i=0;i<e.length;i++){let s=e[i];if(!n.children.has(s))return!1;n=n.children.get(s)}return n.isEndOfWord};return(()=>{if(t)for(let e of t)o(e)})(),{insert:o,search:d}};0&&(module.exports={trie});

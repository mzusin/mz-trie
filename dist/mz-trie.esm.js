/*
https://github.com/mzusin/mz-trie
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var I=c=>{let i={children:new Map,isEndOfWord:!1},f=r=>{let e=i;for(let t=0;t<r.length;t++){let n=r[t];e.children.has(n)||e.children.set(n,{children:new Map,isEndOfWord:!1}),e=e.children.get(n)}e.isEndOfWord=!0},l=r=>{let e=(t,n)=>{if(!t)return!1;if(n===r.length&&t.isEndOfWord)return t.isEndOfWord=!1,t.children.size===0;let s=r[n],o=t.children.get(s);return e(o,n+1)?(t.children.delete(s),t.children.size===0):!1};e(i,0)},d=r=>{let e=i;for(let t=0;t<r.length;t++){let n=r[t];if(!e.children.has(n))return!1;e=e.children.get(n)}return e.isEndOfWord},h=r=>(r=r||i,(r==null?void 0:r.children.size)<=0),a=()=>JSON.stringify(i,(r,e)=>e instanceof Map?[...e]:e,4),g=()=>{let r=[],e=(t,n,s)=>{t.isEndOfWord&&r.push(s.slice(0,n).join(""));for(let[o,u]of t.children)s[n]=o,e(u,n+1,s)};return e(i,0,[]),r};return(()=>{if(c)for(let r of c)f(r)})(),{insert:f,remove:l,search:d,isEmpty:h,logTree:a,getWords:g}};export{I as trie};

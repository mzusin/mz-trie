/*
https://github.com/mzusin/mz-trie
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var u=s=>{let i={children:new Map,isEndOfWord:!1},o=r=>{let e=i;for(let t=0;t<r.length;t++){let n=r[t];e.children.has(n)||e.children.set(n,{children:new Map,isEndOfWord:!1}),e=e.children.get(n)}e.isEndOfWord=!0},c=r=>{let e=(t,n)=>{if(!t)return!1;if(n===r.length&&t.isEndOfWord)return t.isEndOfWord=!1,t.children.size===0;let l=r[n],h=t.children.get(l);return e(h,n+1)?(t.children.delete(l),t.children.size===0):!1};e(i,0)},f=r=>{let e=i;for(let t=0;t<r.length;t++){let n=r[t];if(!e.children.has(n))return!1;e=e.children.get(n)}return e.isEndOfWord},d=r=>(r=r||i,(r==null?void 0:r.children.size)<=0),a=()=>JSON.stringify(i,(r,e)=>e instanceof Map?[...e]:e,4);return(()=>{if(s)for(let r of s)o(r)})(),{insert:o,remove:c,search:f,isEmpty:d,printTrie:a}};export{u as trie};

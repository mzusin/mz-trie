/*
https://github.com/mzusin/mz-trie
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var l=o=>{let i={children:new Map,isEndOfWord:!1},s=r=>{let e=i;for(let t=0;t<r.length;t++){let n=r[t];e.children.has(n)||e.children.set(n,{children:new Map,isEndOfWord:!1}),e=e.children.get(n)}e.isEndOfWord=!0},d=r=>{let e=i;for(let t=0;t<r.length;t++){let n=r[t];if(!e.children.has(n))return!1;e=e.children.get(n)}return e.isEndOfWord};return(()=>{if(o)for(let r of o)s(r)})(),{insert:s,search:d}};export{l as trie};

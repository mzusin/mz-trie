/*
https://github.com/mzusin/mz-trie
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var p=h=>{let o={children:new Map,isEndOfWord:!1},d=e=>{let n=o;for(let r=0;r<e.length;r++){let t=e[r];n.children.has(t)||n.children.set(t,{children:new Map,isEndOfWord:!1}),n=n.children.get(t)}n.isEndOfWord=!0},g=e=>{let n=(r,t)=>{if(!r)return!1;if(t===e.length&&r.isEndOfWord)return r.isEndOfWord=!1,r.children.size===0;let c=e[t],u=r.children.get(c);return n(u,t+1)?(r.children.delete(c),r.children.size===0):!1};n(o,0)},W=e=>{let n=o;for(let r=0;r<e.length;r++){let t=e[r];if(!n.children.has(t))return!1;n=n.children.get(t)}return n.isEndOfWord},E=e=>(e=e||o,(e==null?void 0:e.children.size)<=0),O=()=>JSON.stringify(o,(e,n)=>n instanceof Map?[...n]:n,4),x=()=>{let e=[],n=(r,t,c)=>{r.isEndOfWord&&e.push(c.slice(0,t).join(""));for(let[u,l]of r.children)c[t]=u,n(l,t+1,c)};return n(o,0,[]),e},a=e=>(r=>{if(!r)return 0;let t=0;r.isEndOfWord&&t++;for(let c of r.children.values())t+=a(c);return t})(e!=null?e:o),b=e=>{let n=0,r=(t,c)=>{n=Math.max(n,c);for(let u of t.children.values())r(u,c+1)};return r(e!=null?e:o,0),n},T=()=>{var I;if(o.children.size<=0)return"";let e=b(o),n=[],r=0;for(let s of o.children.values())n[r]=a(s),r++;let t=[];for(let s=0;s<e;s++)t.push([]);let c=s=>{let f=0;for(let i=0;i<s;i++)f+=n[i];return f},u=(s,f,i,N)=>{let m=0,v=c(i);for(let[w,z]of s.children)t[f][v+N+m]=w,u(z,f+1,i,N+m),m++};r=0;for(let[s,f]of o.children)t[0][c(r)]=s,u(f,1,r,0),r++;let l="";for(let s=0;s<t.length;s++){let f=t[s];for(let i=0;i<f.length;i++)l+=((I=f[i])!=null?I:" ")+" ";l+=`
`;for(let i=0;i<f.length;i++)f[i]===void 0||!t[s+1]||t[s+1][i]===void 0?l+="  ":f[i+1]===void 0&&t[s+1]&&t[s+1][i+1]!==void 0?l+="|\\":l+="| ";l+=`
`}return l.trim()};return(()=>{if(h)for(let e of h)d(e)})(),{insert:d,remove:g,search:W,isEmpty:E,getLeavesCount:a,getHeight:b,log:O,getWords:x,printTrie:T}};var L=h=>{let o=p();for(let d=0;d<h.length;d++){let g=h.substring(d);o.insert(g)}return o};export{L as suffixTree,p as trie};

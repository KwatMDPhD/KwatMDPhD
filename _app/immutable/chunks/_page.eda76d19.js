import{_ as l}from"./preload-helper.41c905a7.js";const s=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((n,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function u({params:o}){const e=await s(Object.assign({"../1.md":()=>l(()=>import("./1.91c95d66.js"),["./1.91c95d66.js","./index.24047b01.js"],import.meta.url)}),`../${o.slug}.md`);console.log(e);const{date:t,title:n,cover:r,tag:a}=e.metadata,i=e.default;return{date:t,title:n,cover:r,tag:a,Content:i}}const m=Object.freeze(Object.defineProperty({__proto__:null,load:u},Symbol.toStringTag,{value:"Module"}));export{m as _,u as l};

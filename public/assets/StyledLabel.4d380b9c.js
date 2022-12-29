var o=Object.defineProperty,s=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var n=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,r=(t,e)=>{for(var a in e||(e={}))f.call(e,a)&&n(t,a,e[a]);if(i)for(var a of i(e))m.call(e,a)&&n(t,a,e[a]);return t},l=(t,e)=>s(t,c(e));import{a as $,s as d}from"./index.f52781a9.js";const g=t=>$(p,l(r({},t),{children:t.children})),p=d.h4`
  color: ${t=>t.color||"#888888"};
  z-index: ${t=>t.z_index};
  margin: ${t=>t.m};
  text-align: ${t=>t.center?"center":"left"};
  font-size: ${t=>t.size};
  font-style: ${t=>t.italic?"italic":"normal"};
  font-weight: bolder;
  font-family: ${t=>t.fam};
  text-transform: ${t=>t.capit?"capitalize":"normal"};
  text-transform: ${t=>t.upper&&"uppercase"};
  letter-spacing: ${t=>t.space};
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
  }
`;var h=g;export{h as S};

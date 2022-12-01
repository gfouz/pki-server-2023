var h=Object.defineProperty;var d=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&l(e,n,t[n]);if(d)for(var n of d(t))g.call(t,n)&&l(e,n,t[n]);return e};import{r as a,s as o,u as m,a as i,j as r,G as u,T as p}from"./index.e9e99ba7.js";function x(e){return a.exports.createElement("svg",s({viewBox:"0 0 192 512",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}))}function E({children:e}){const t=m();function n(){t(-1)}return i(b,{children:[r("header",{children:i("div",{className:"backwards",onClick:n,children:[r(x,{fontSize:"10px",color:"blue"})," ",r("span",{children:"REGRESAR"})]})}),r("main",{children:e}),r("footer",{})]})}const b=o.div`
  display: grid;
  width: 100%;
  min-height: 100vh;

  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  header {
    text-align: center;
    grid-area: header;
    color: #372381;
    font-weight: bolder;
    line-height: 60px;
  }
  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  footer {
    grid-area: footer;
    text-align: center;
    line-height: 60px;
    font-weight: bolder;
  }

  .backwards {
    position: fixed;
    top: -1em;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 1em;
    span {
      position: relative;
      left: 1rem;
      color: #999999;
    }
  }
`;function k(e){const{buttonstate:t}=e,[n,c]=a.exports.useState(!1);return a.exports.useEffect(()=>{c(t)},[t]),r(v,{children:r(w,{children:n?i("div",{children:[r(u,{size:"sm"}),r(p,{children:"Loading..."})]}):r("span",{children:"Enviar"})})})}const v=o.div`
  button:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`,w=o.button`
  padding: 0.5em 1.3em;
  color: #23023f;
  font-weight: bolder;
  border: none;
  border-radius: 10px;
  outline: none;
  margin: 2em;
  background-color: #ab8ffe;
`;export{E as D,k as S};

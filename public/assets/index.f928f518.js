var p=Object.defineProperty;var r=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&m(e,i,t[i]);if(r)for(var i of r(t))g.call(t,i)&&m(e,i,t[i]);return e};import{r as l,u as h,a as o,F as y,j as c,S as b,s as S}from"./index.9a3ab491.js";import{u as _,S as v}from"./StatusHandler.4ef7e4a9.js";import{b as w,d as E}from"./constants.d0510e6a.js";import{B as j}from"./chakra-ui-button.esm.4424dc5b.js";function k(e){return l.exports.createElement("svg",d({viewBox:"0 0 192 512",width:e.width||"1em",length:e.height||"auto"},e),l.exports.createElement("path",{fill:e.color,d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}))}function T(){const e="condiciones",[t,i]=l.exports.useState(""),{data:s,isLoading:N,isError:z}=_("full-policy",()=>E(e)),a=localStorage.getItem("jwt");l.exports.useEffect(()=>{a&&(w.defaults.headers.common.jwt=a)},[]);const n=s==null?void 0:s.message;l.exports.useEffect(()=>{n&&i(n)},[n]);const f=h();function u(){f(-1)}return o(y,{children:c(L,{children:[c("article",{className:"policy",children:[o("div",{className:"policy__button",children:c(j,{onClick:u,children:[o(k,{fontSize:"10px"}),o("span",{className:"policy__button-text",children:"regresar"})]})}),o(b,{m:"2em 0",children:" T\xE9rminos y condiciones de Segurm\xE1tica "}),o("p",{children:s==null?void 0:s.data})]}),t&&o(v,{message:t})]})})}const L=S.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .policy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    max-width: 600px;
    background-color: #f1f1f1;
  }
  .policy__title {
    color: #888888;
    font-size: 20px;
  }
  .policy__button {
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    align-self: flex-start;
  }
  .policy__button-text {
    margin: 0 0.5em;
  }
  p {
    color: #444444;
    font-family: calibri;
  }
`;export{T as default};

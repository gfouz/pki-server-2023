var p=Object.defineProperty;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,t,i)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))x.call(t,i)&&m(e,i,t[i]);if(a)for(var i of a(t))g.call(t,i)&&m(e,i,t[i]);return e};import{r as l,u as h,a as o,F as y,j as c,s as b}from"./index.f52781a9.js";import{u as S,S as _}from"./StatusHandler.ec046620.js";import{b as v,d as w}from"./constants.f2e04d14.js";import{S as E}from"./StyledLabel.4d380b9c.js";import{B as j}from"./chakra-ui-button.esm.19477a37.js";function k(e){return l.exports.createElement("svg",d({viewBox:"0 0 192 512",width:e.width||"1em",length:e.height||"auto"},e),l.exports.createElement("path",{fill:e.color,d:"M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"}))}function q(){const e="condiciones",[t,i]=l.exports.useState(""),{data:s,isLoading:N,isError:z}=S("full-policy",()=>w(e)),r=localStorage.getItem("jwt");l.exports.useEffect(()=>{r&&(v.defaults.headers.common.jwt=r)},[]);const n=s==null?void 0:s.message;l.exports.useEffect(()=>{n&&i(n)},[n]);let f=h();function u(){f(-1)}return o(y,{children:c(L,{children:[c("article",{className:"policy",children:[o("div",{className:"policy__button",children:c(j,{onClick:u,children:[o(k,{fontSize:"10px"}),o("span",{className:"policy__button-text",children:"regresar"})]})}),o(E,{m:"2em 0",children:" T\xE9rminos y condiciones de Segurm\xE1tica "}),o("p",{children:s==null?void 0:s.data})]}),t&&o(_,{message:t})]})})}const L=b.div`
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
`;export{q as default};

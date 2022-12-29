import{s as c,r as m,R as u,j as r,F as S,a as s,G as x,a1 as v}from"./index.f52781a9.js";import{S as w,u as R}from"./StatusHandler.ec046620.js";import{c as y,d as E}from"./constants.f2e04d14.js";import{u as L,b as j,A as C,R as F}from"./SearchPlus.35f7143c.js";import{S as b}from"./StyledLabel.4d380b9c.js";function T(a){var g,f;const[o,i]=m.exports.useState(""),{url:l}=a,[e,t,d,h,n]=L(l),[D,A]=u.useState(e==null?void 0:e.result),p=((f=(g=e==null?void 0:e.response)==null?void 0:g.data)==null?void 0:f.message)||(e==null?void 0:e.message);return u.useEffect(()=>{y(p,i)},[p]),u.useEffect(()=>{A(e==null?void 0:e.result)},[t,e==null?void 0:e.result]),console.log(e&&(e==null?void 0:e.result)),r(S,{children:[s(z,{children:s(j,{onChange:G=>{d(G.target.checked)},size:"sm",checked:!0,colorScheme:"red",defaultChecked:t})}),s(q,{children:s(b,{color:t?"#c40550":"#999999",children:t?"Datos habilitados":"Datos desabilitados"})}),r(k,{children:[n&&s("div",{children:"An error ocurred..."}),h&&r("div",{children:[s(x,{size:"sm",color:"white"}),s(v,{color:"white",children:"Loading..."})]}),s(C,{data:e==null?void 0:e.result}),o&&s(w,{message:o})]})]})}const k=c.div`
  width: 100%;
  min-height: 200px;
`,z=c.div`
  position: absolute;
  top: 10px;
  left: 20px;
`,q=c.div`
  position: absolute;
  top: 4em;
  left: 50%;
  white-space: nowrap;
  transform: translateX(-50%);
`;function X(a){const{allnames:o}=a,[i,l]=m.exports.useState(""),{data:e,isError:t,isLoading:d}=R("all-names",()=>E(o)),h=e==null?void 0:e.result,n=(e==null?void 0:e.message)||e;return m.exports.useEffect(()=>{y(n,l)},[n]),s(S,{children:r(B,{children:[s(b,{color:"#222222",children:"B\xFAsqueda por nombre."}),s(F,{data:h}),t&&s("div",{children:"An error ocurred..."}),d&&r("div",{children:[s(x,{size:"sm",color:"white"}),s(v,{color:"white",children:"Loading..."})]}),i&&s(w,{message:i})]})})}const B=c.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 320px;
  min-height: 250px;
`;export{T as G,X as a};

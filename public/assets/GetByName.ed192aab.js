import{s as c,r as m,R as u,j as r,F as S,a as s,S as x,H as v}from"./index.9a3ab491.js";import{S as w,u as E}from"./StatusHandler.4ef7e4a9.js";import{c as y,d as G}from"./constants.d0510e6a.js";import{u as L,b as j,A as C,R as F}from"./SearchPlus.0e08da50.js";import{H as b}from"./SubmitButton.1ee02988.js";function T(a){var g,f;const[o,i]=m.exports.useState(""),{url:l}=a,[e,t,d,h,n]=L(l),[B,A]=u.useState(e==null?void 0:e.result),p=((f=(g=e==null?void 0:e.response)==null?void 0:g.data)==null?void 0:f.message)||(e==null?void 0:e.message);return u.useEffect(()=>{y(p,i)},[p]),u.useEffect(()=>{A(e==null?void 0:e.result)},[t,e==null?void 0:e.result]),r(S,{children:[s(k,{children:s(j,{onChange:R=>{d(R.target.checked)},size:"sm",checked:!0,colorScheme:"red",defaultChecked:t})}),s(z,{children:s(x,{color:t?"#c40550":"#999999",children:t?"Datos habilitados":"Datos desabilitados"})}),r(H,{children:[n&&s("div",{children:"An error ocurred..."}),h&&r("div",{children:[s(v,{size:"sm",color:"white"}),s(b,{color:"white",children:"Loading..."})]}),s(C,{data:e==null?void 0:e.result}),o&&s(w,{message:o})]})]})}const H=c.div`
  width: 100%;
  min-height: 200px;
`,k=c.div`
  position: absolute;
  top: 10px;
  left: 20px;
`,z=c.div`
  position: absolute;
  top: 4em;
  left: 50%;
  white-space: nowrap;
  transform: translateX(-50%);
`;function X(a){const{allnames:o}=a,[i,l]=m.exports.useState(""),{data:e,isError:t,isLoading:d}=E("all-names",()=>G(o)),h=e==null?void 0:e.result,n=(e==null?void 0:e.message)||e;return m.exports.useEffect(()=>{y(n,l)},[n]),s(S,{children:r(q,{children:[s(x,{color:"#222222",children:"B\xFAsqueda por nombre."}),s(F,{data:h}),t&&s("div",{children:"An error ocurred..."}),d&&r("div",{children:[s(v,{size:"sm",color:"white"}),s(b,{color:"white",children:"Loading..."})]}),i&&s(w,{message:i})]})})}const q=c.div`
  width: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 320px;
  min-height: 250px;
`;export{T as G,X as a};

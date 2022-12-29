var R=Object.defineProperty,T=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(o,t,s)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,v=(o,t)=>{for(var s in t||(t={}))N.call(t,s)&&C(o,s,t[s]);if(F)for(var s of F(t))V.call(t,s)&&C(o,s,t[s]);return o},j=(o,t)=>T(o,D(t));import{s as w,r as c,a as e,F as A,j as k,a1 as q}from"./index.f52781a9.js";import{u as f,c as B,s as L}from"./store.e96f2609.js";import{u as z,a as H,F as G,S as U}from"./SubmitButton.96350b2a.js";import{S as E}from"./StatusHandler.ec046620.js";import{p as J,e as K}from"./constants.f2e04d14.js";import{T as I}from"./TextInput.3f5f054c.js";import{S as M}from"./StyledLabel.4d380b9c.js";import{b as P}from"./SearchPlus.35f7143c.js";function ot(o){var y;const t="se requiere nombres compuestos sin n\xFAmeros",s=f(B),x=f(L),{stack:r}=s,{url:b,msg:g}=o,[d,S]=c.exports.useState(""),[u,n]=c.exports.useState(Boolean(r.enabled)),{register:l,handleSubmit:i,formState:{errors:p}}=z(),a=H(m=>J(m,b,r.id)),O=async m=>{a.mutateAsync(m)},h=((y=a==null?void 0:a.data)==null?void 0:y.message)||(a==null?void 0:a.data);return c.exports.useEffect(()=>{h&&S(h),h==="updated"&&x.setOption("mostrar")},[h]),e(A,{children:e("form",{onSubmit:i(O),children:k(Q,{children:[e(q,{size:"md",color:"#777777",children:r.name}),e(M,{color:"#222222",children:"Modificar nombre"}),e(I,{info:t,required:!0,label:"name",errors:p,register:l,defaultValue:r.name}),e(G,{htmlFor:"enabled",m:"0",color:"#333333",children:e(q,{size:"sm",color:u?"#e2023d":"#99999970",children:u?"Habilitado":"Deshabilitado"})}),e(P,j(v({},l("enabled",{onChange:m=>{n(m.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(r.enabled)})),e(U,{buttonstate:a==null?void 0:a.isLoading}),d&&e(E,{message:d})]})})})}const Q=w.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 300px;
  min-height: 300px;
  @media (min-width: 700px) {
    min-width: 400px;
  }
`;function nt(o){var p;const t="se permiten nombres compuestos sin n\xFAmeros",{url:s,msg:x}=o,[r,b]=c.exports.useState("");f(B);const g=f(L),{register:d,handleSubmit:S,formState:{errors:u}}=z(),n=H(a=>K(s,a)),l=async a=>{n.mutateAsync(a)},i=((p=n==null?void 0:n.data)==null?void 0:p.message)||(n==null?void 0:n.data);return c.exports.useEffect(()=>{i&&b(i),i==="created"&&g.setOption("mostrar")},[i]),e(A,{children:e("form",{onSubmit:S(l),children:k(W,{children:[e(M,{color:"#222222",children:"Nombre"}),e(I,{label:"name",register:d,errors:u,required:!0,info:t}),e(U,{buttonstate:n==null?void 0:n.isLoading}),r&&e(E,{message:r})]})})})}const W=w.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 250px;
`;export{nt as C,ot as U};

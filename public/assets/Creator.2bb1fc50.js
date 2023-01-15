var R=Object.defineProperty,T=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var F=(o,t,s)=>t in o?R(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,v=(o,t)=>{for(var s in t||(t={}))N.call(t,s)&&F(o,s,t[s]);if(C)for(var s of C(t))V.call(t,s)&&F(o,s,t[s]);return o},j=(o,t)=>T(o,D(t));import{s as w,r as m,a as e,F as A,j as k,S as B}from"./index.9a3ab491.js";import{u as f,c as H,s as L}from"./store.a90ba17a.js";import{u as z,a as U,H as q,c as G,S as E}from"./SubmitButton.1ee02988.js";import{S as I}from"./StatusHandler.4ef7e4a9.js";import{p as J,e as K}from"./constants.d0510e6a.js";import{T as M}from"./TextInput.6529562e.js";import{b as P}from"./SearchPlus.0e08da50.js";function at(o){var y;const t="se requiere nombres compuestos sin n\xFAmeros",s=f(H),x=f(L),{stack:r}=s,{url:b,msg:g}=o,[d,S]=m.exports.useState(""),[u,n]=m.exports.useState(Boolean(r.enabled)),{register:l,handleSubmit:i,formState:{errors:h}}=z(),a=U(c=>J(c,b,r.id)),O=async c=>{a.mutateAsync(c)},p=((y=a==null?void 0:a.data)==null?void 0:y.message)||(a==null?void 0:a.data);return m.exports.useEffect(()=>{p&&S(p),p==="updated"&&x.setOption("mostrar")},[p]),e(A,{children:e("form",{onSubmit:i(O),children:k(Q,{children:[e(q,{size:"md",color:"#777777",children:r.name}),e(B,{color:"#222222",children:"Modificar nombre"}),e(M,{info:t,required:!0,label:"name",errors:h,register:l,defaultValue:r.name}),e(G,{htmlFor:"enabled",m:"0",color:"#333333",children:e(q,{size:"sm",color:u?"#e2023d":"#99999970",children:u?"Habilitado":"Deshabilitado"})}),e(P,j(v({},l("enabled",{onChange:c=>{n(c.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(r.enabled)})),e(E,{buttonstate:a==null?void 0:a.isLoading}),d&&e(I,{message:d})]})})})}const Q=w.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 300px;
  min-height: 300px;
  @media (min-width: 700px) {
    min-width: 400px;
  }
`;function ot(o){var h;const t="se permiten nombres compuestos sin n\xFAmeros",{url:s,msg:x}=o,[r,b]=m.exports.useState("");f(H);const g=f(L),{register:d,handleSubmit:S,formState:{errors:u}}=z(),n=U(a=>K(s,a)),l=async a=>{n.mutateAsync(a)},i=((h=n==null?void 0:n.data)==null?void 0:h.message)||(n==null?void 0:n.data);return m.exports.useEffect(()=>{i&&b(i),i==="created"&&g.setOption("mostrar")},[i]),e(A,{children:e("form",{onSubmit:S(l),children:k(W,{children:[e(B,{color:"#222222",children:"Nombre"}),e(M,{label:"name",register:d,errors:u,required:!0,info:t}),e(E,{buttonstate:n==null?void 0:n.isLoading}),r&&e(I,{message:r})]})})})}const W=w.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 250px;
`;export{ot as C,at as U};

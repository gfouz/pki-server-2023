var V=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(t,r,i)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,L=(t,r)=>{for(var i in r||(r={}))O.call(r,i)&&k(t,i,r[i]);if(I)for(var i of I(r))P.call(r,i)&&k(t,i,r[i]);return t},A=(t,r)=>K(t,M(r));import{s as E,r as f,a as e,F as v,j as a}from"./index.9a3ab491.js";import{t as Q,D as U}from"./Dashboard.b4fb76d1.js";import{C as J}from"./Toast.cdc41de7.js";import{C as W,F as X}from"./Card.db03a57e.js";import{R as Y,G as Z}from"./Rocket.503d0db3.js";import{G as ee,a as te}from"./GetByName.ed192aab.js";import{u as C,c as re,s as ie}from"./store.a90ba17a.js";import{u as D,S as G}from"./StatusHandler.4ef7e4a9.js";import{u as H,a as N,e as s,H as oe,C as h,c as ae,S as _}from"./SubmitButton.1ee02988.js";import{T as B}from"./TextInput.6529562e.js";import{A as T}from"./AlphaNumericInput.8eeb2d13.js";import{d as $,p as se,i as g,e as ne,b as le}from"./constants.d0510e6a.js";import{S as z}from"./Select.6fafb4a4.js";import{b as de,E as j,S as ce,a as me}from"./SearchPlus.0e08da50.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./ErrorWarning.3d53457e.js";import"./chakra-ui-select.esm.5205b0a4.js";import"./chakra-ui-checkbox.esm.9abc3503.js";function ue(t){var p;const[r,i]=f.exports.useState(""),S=C(re),b=C(ie),{stack:m}=S,{register:n,handleSubmit:y,formState:{errors:d}}=H(),o="/municipios/enabled/true",{data:u}=D("all-enabled-rolls",()=>$(o)),l=N(q=>se(q,t.url,m.id),{retry:2}),c=(p=l==null?void 0:l.data)==null?void 0:p.message;return f.exports.useEffect(()=>{c&&i(c),c==="updated"&&b.setOption("mostrar")},[c]),e(v,{children:a("form",{onSubmit:y(async q=>{l.mutateAsync(q)}),children:[e(s,{p:"2em",children:e(oe,{size:"md",color:"#009966",children:m.name})}),e(s,{children:a(h,{children:[e(F,{children:"Nombre de la Entidad de registro"}),e(B,{info:g.name,required:!0,label:"name",errors:d,register:n,defaultValue:m.name})]})}),e(s,{children:a(h,{children:[e(F,{children:"Direcci\xF3n de la entidad de registro"}),e(T,{info:g.alpha,required:!0,label:"address",errors:d,register:n,defaultValue:m.address})]})}),e(s,{p:"1em",children:a(h,{children:[e(F,{children:"Seleccione municipio de entidad de registro"}),e(z,{list:u==null?void 0:u.result,label:"municipioId",register:n,required:!0}),d.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(s,{children:a(s,{m:"2em 0",children:[e(ae,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(de,A(L({},n("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]})}),e(_,{buttonstate:l==null?void 0:l.isLoading}),r&&e(G,{message:r})]})})}const F=E.h4`
  color: ${t=>t.color||"#888888"};
  font-weight: bolder;
`;function pe(t){var c,x;const{path:r}=t,[i,S]=f.exports.useState("");f.exports.useState([]);const{register:b,handleSubmit:m,formState:{errors:n}}=H(),y="/municipios/enabled/true",{data:d}=D("all-enabled-rolls",()=>$(y)),o=N(p=>ne(r,p)),u=(c=o==null?void 0:o.data)==null?void 0:c.message;return(x=o==null?void 0:o.data)==null||x.message,f.exports.useEffect(()=>{S(u)},[u]),e(v,{children:a("form",{onSubmit:m(async p=>{o==null||o.mutateAsync(p)}),children:[e(s,{p:"1em",children:a(h,{children:[e(w,{children:"Nombre de la Entidad de registro"}),e(B,{required:!0,label:"name",errors:n,info:g.name,register:b})]})}),e(s,{p:"1em",children:a(h,{children:[e(w,{children:"Direcci\xF3n de la entidad de registro"}),e(T,{info:g.alpha,required:!0,label:"address",errors:n,register:b})]})}),e(s,{p:"1em",children:a(h,{children:[e(w,{children:"Seleccione el municipio de la entidad de registro"}),e(z,{list:d==null?void 0:d.result,label:"municipioId",register:b,required:!0}),n.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(_,{buttonstate:o==null?void 0:o.isLoading}),i&&e(G,{message:i})]})})}const w=E.h4`
  color: ${t=>t.color||"#888888"};
  font-weight: bolder;
`,R=[{option:"crear",icon:e(j,{}),comp:e(pe,{path:"entidades-registro"})},{option:"mostrar",icon:e(ce,{}),comp:e(ee,{url:"entidades-registro"})},{option:"buscar",icon:e(me,{}),comp:e(te,{allnames:"entidades-registro"})},{option:"habilitados",icon:e(Y,{}),comp:e(Z,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"modificar",icon:e(j,{}),comp:e(ue,{url:"entidades-registro"})}];function He(){const t=localStorage.getItem("jwt");return f.exports.useEffect(()=>{t&&(le.defaults.headers.common.jwt=t)},[]),e(v,{children:a(fe,{children:[e(J,{linear:Q.green,color:"#ffffff"}),e(U,{children:e(W,{name:"Entidad registro",options:R,children:e(X,{options:R})})})]})})}const fe=E.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;export{He as default};

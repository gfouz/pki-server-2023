var V=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var k=(t,r,i)=>r in t?V(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,L=(t,r)=>{for(var i in r||(r={}))O.call(r,i)&&k(t,i,r[i]);if(I)for(var i of I(r))P.call(r,i)&&k(t,i,r[i]);return t},j=(t,r)=>K(t,M(r));import{s as E,r as f,a as e,F as v,j as a,ai as s,a1 as Q,aj as h}from"./index.f52781a9.js";import{t as U,D as J}from"./Dashboard.fd18947c.js";import{C as W}from"./Toast.0ae85c90.js";import{C as X,F as Y}from"./Card.ee8d3258.js";import{R as Z,G as ee}from"./Rocket.5ccd8086.js";import{G as te,a as re}from"./GetByName.cc5377d5.js";import{u as A,c as ie,s as oe}from"./store.e96f2609.js";import{u as D,S as G}from"./StatusHandler.ec046620.js";import{u as N,a as _,F as ae,S as B}from"./SubmitButton.96350b2a.js";import{T as H}from"./TextInput.3f5f054c.js";import{A as T}from"./AlphaNumericInput.07c9fd81.js";import{d as $,p as se,i as g,e as ne,b as le}from"./constants.f2e04d14.js";import{S as z}from"./Select.762a742d.js";import{b as de,E as C,S as ce,a as me}from"./SearchPlus.35f7143c.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./chakra-ui-button.esm.19477a37.js";import"./StyledLabel.4d380b9c.js";import"./ErrorWarning.4750ca61.js";import"./chakra-ui-select.esm.a9f625b2.js";import"./chakra-ui-checkbox.esm.77685af8.js";function ue(t){var p;const[r,i]=f.exports.useState(""),S=A(ie),b=A(oe),{stack:m}=S,{register:n,handleSubmit:y,formState:{errors:d}}=N(),o="/municipios/enabled/true",{data:u}=D("all-enabled-rolls",()=>$(o)),l=_(F=>se(F,t.url,m.id),{retry:2}),c=(p=l==null?void 0:l.data)==null?void 0:p.message;return f.exports.useEffect(()=>{c&&i(c),c==="updated"&&b.setOption("mostrar")},[c]),e(v,{children:a("form",{onSubmit:y(async F=>{l.mutateAsync(F)}),children:[e(s,{p:"2em",children:e(Q,{size:"md",color:"#009966",children:m.name})}),e(s,{children:a(h,{children:[e(q,{children:"Nombre de la Entidad de registro"}),e(H,{info:g.name,required:!0,label:"name",errors:d,register:n,defaultValue:m.name})]})}),e(s,{children:a(h,{children:[e(q,{children:"Direcci\xF3n de la entidad de registro"}),e(T,{info:g.alpha,required:!0,label:"address",errors:d,register:n,defaultValue:m.address})]})}),e(s,{p:"1em",children:a(h,{children:[e(q,{children:"Seleccione municipio de entidad de registro"}),e(z,{list:u==null?void 0:u.result,label:"municipioId",register:n,required:!0}),d.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(s,{children:a(s,{m:"2em 0",children:[e(ae,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(de,j(L({},n("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]})}),e(B,{buttonstate:l==null?void 0:l.isLoading}),r&&e(G,{message:r})]})})}const q=E.h4`
  color: ${t=>t.color||"#888888"};
  font-weight: bolder;
`;function pe(t){var c,x;const{path:r}=t,[i,S]=f.exports.useState("");f.exports.useState([]);const{register:b,handleSubmit:m,formState:{errors:n}}=N(),y="/municipios/enabled/true",{data:d}=D("all-enabled-rolls",()=>$(y)),o=_(p=>ne(r,p)),u=(c=o==null?void 0:o.data)==null?void 0:c.message;return(x=o==null?void 0:o.data)==null||x.message,f.exports.useEffect(()=>{S(u)},[u]),e(v,{children:a("form",{onSubmit:m(async p=>{o==null||o.mutateAsync(p)}),children:[e(s,{p:"1em",children:a(h,{children:[e(w,{children:"Nombre de la Entidad de registro"}),e(H,{required:!0,label:"name",errors:n,info:g.name,register:b})]})}),e(s,{p:"1em",children:a(h,{children:[e(w,{children:"Direcci\xF3n de la entidad de registro"}),e(T,{info:g.alpha,required:!0,label:"address",errors:n,register:b})]})}),e(s,{p:"1em",children:a(h,{children:[e(w,{children:"Seleccione el municipio de la entidad de registro"}),e(z,{list:d==null?void 0:d.result,label:"municipioId",register:b,required:!0}),n.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(B,{buttonstate:o==null?void 0:o.isLoading}),i&&e(G,{message:i})]})})}const w=E.h4`
  color: ${t=>t.color||"#888888"};
  font-weight: bolder;
`,R=[{option:"crear",icon:e(C,{}),comp:e(pe,{path:"entidades-registro"})},{option:"mostrar",icon:e(ce,{}),comp:e(te,{url:"entidades-registro"})},{option:"buscar",icon:e(me,{}),comp:e(re,{allnames:"entidades-registro"})},{option:"habilitados",icon:e(Z,{}),comp:e(ee,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"modificar",icon:e(C,{}),comp:e(ue,{url:"entidades-registro"})}];function _e(){const t=localStorage.getItem("jwt");return f.exports.useEffect(()=>{t&&(le.defaults.headers.common.jwt=t)},[]),e(v,{children:a(fe,{children:[e(W,{linear:U.green,color:"#ffffff"}),e(J,{children:e(X,{name:"Entidad registro",options:R,children:e(Y,{options:R})})})]})})}const fe=E.div`
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
`;export{_e as default};

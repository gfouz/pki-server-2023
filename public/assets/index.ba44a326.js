var $=Object.defineProperty,K=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var j=(r,a,t)=>a in r?$(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,F=(r,a)=>{for(var t in a||(a={}))Q.call(a,t)&&j(r,t,a[t]);if(R)for(var t of R(a))V.call(a,t)&&j(r,t,a[t]);return r},v=(r,a)=>K(r,M(a));import{a as e,F as y,r as x,j as i,ai as p,aj as f,s as W}from"./index.f52781a9.js";import{t as J,D as X}from"./Dashboard.fd18947c.js";import{C as Y}from"./Toast.0ae85c90.js";import{C as Z,F as ee}from"./Card.ee8d3258.js";import{R as te,G as ae}from"./Rocket.5ccd8086.js";import{G as re,a as oe}from"./GetByName.cc5377d5.js";import{u as B,a as D,F as se,S as G}from"./SubmitButton.96350b2a.js";import{u as _,S as T}from"./StatusHandler.ec046620.js";import{u as C,s as z,c as ie}from"./store.e96f2609.js";import{S as N}from"./chakra-ui-select.esm.a9f625b2.js";import{a as ne,d as le,p as ce,g as de,e as me,b as ue}from"./constants.f2e04d14.js";import{S as h}from"./StyledLabel.4d380b9c.js";import{T as H}from"./TextInput.3f5f054c.js";import{E}from"./ErrorWarning.4750ca61.js";import{b as pe,E as I,S as fe,a as he}from"./SearchPlus.35f7143c.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./chakra-ui-button.esm.19477a37.js";import"./chakra-ui-checkbox.esm.77685af8.js";function O(r){const{label:a,list:t,register:n,required:s}=r;return e(y,{children:e(N,v(F({m:"2em 0",size:"xm",variant:"outline",placeholder:"Seleccione rol"},n(a,{required:s})),{children:Array.isArray(t)&&t.map((l,o)=>e("option",{value:l.id,children:l.name},o))}))})}const be="http://localhost:4000",Se=ne.create({baseURL:be,withCredentials:!1});Se.defaults.headers.common["Content-Type"]="application/json";const b={name:"se permiten nombres compuestos sin n\xFAmeros",id:"solo numeros requeridos",select:"esta selecci\xF3n es requerida"},P=["/provincias","/municipios","/organismos","/empresas-instituciones","/representante","/entidades-registro","/users","/funcionario-registro","/funcionalidades","/rols","/estados","/generacion","/tarifas","/solicitudes"];function U(r){const{label:a,list:t,register:n,required:s}=r;return e(y,{children:e(N,v(F({m:"2em 0",size:"xm",variant:"outline",placeholder:"Seleccione un dato"},n(a,{required:s})),{children:Array.isArray(t)&&t.map((l,o)=>e("option",{value:l,children:l.slice(1)},o))}))})}function ge(r){var k;const a=C(z),t=C(ie),{stack:n}=t,[s,l]=x.exports.useState(""),{register:o,handleSubmit:A,formState:{errors:S}}=B(),g="funcionalidades",c="/rols",{data:d}=_("allrols",()=>le(c)),m=D(w=>ce(w,g,n.id)),u=(k=m==null?void 0:m.data)==null?void 0:k.message;return x.exports.useEffect(()=>{u&&l(u),u==="updated"&&a.setOption("mostrar")},[u]),e(y,{children:i("form",{onSubmit:A(async w=>{m.mutateAsync(w)}),children:[e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Nombre de Funcionalidad"}),e(H,{label:"name",register:o,errors:S,required:!0,info:b.name,defaultValue:n.name})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Esta funcionalidad est\xE1 v\xEDnculada a:"}),e(U,{list:P,label:"path",register:o,required:!0}),e(E,{label:"path",errors:S,info:b.select})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Rol de esta funcionalidad"}),e(O,{list:d==null?void 0:d.result,label:"rolId",register:o,required:!0}),e(E,{label:"rolId",errors:S,info:b.select})]})}),i(p,{m:"2em 0",children:[e(se,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(pe,v(F({},o("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(n.enabled)}))]}),e(G,{buttonstate:m==null?void 0:m.isLoading}),s&&e(T,{message:s})]})})}function xe(r){var u;const a=C(z),[t,n]=x.exports.useState(""),{register:s,handleSubmit:l,formState:{errors:o}}=B(),A="funcionalidades",S="/rols/enabled/true",{data:g}=_("allrols",()=>de(S)),c=D(q=>me(A,q)),d=(u=c==null?void 0:c.data)==null?void 0:u.message;return x.exports.useEffect(()=>{d&&n(d),d==="created"&&a.setOption("mostrar")},[d]),e(y,{children:i("form",{onSubmit:l(async q=>{c.mutateAsync(q)}),children:[e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Nombre de Funcionalidad"}),e(H,{label:"name",register:s,errors:o,required:!0,info:b.name})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{m:"0 0 -1em 0",children:"Seleccione el dato al que se v\xEDncula"}),e(U,{list:P,label:"path",register:s,required:!0}),e(E,{label:"path",errors:o,info:b.select})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{m:"0 0 -1em 0",children:"seleccione rol a que pertenece"}),e(O,{list:g==null?void 0:g.result,label:"rolId",register:s,required:!0}),e(E,{label:"rolId",errors:o,info:b.select})]})}),e(G,{buttonstate:c==null?void 0:c.isLoading}),t&&e(T,{message:t})]})})}const L=[{option:"crear",icon:e(I,{}),comp:e(xe,{url:"funcionalidades"})},{option:"mostrar",icon:e(fe,{}),comp:e(re,{url:"funcionalidades"})},{option:"buscar",icon:e(he,{}),comp:e(oe,{allnames:"funcionalidades"})},{option:"habilitados",icon:e(te,{}),comp:e(ae,{queryKey:"funcionalidades-enabled",url:"funcionalidades/enabled/true"})},{option:"modificar",icon:e(I,{}),comp:e(ge,{url:"funcionalidades"})}];function He(){const r=localStorage.getItem("jwt");return x.exports.useEffect(()=>{r&&(ue.defaults.headers.common.jwt=r)},[]),e(y,{children:i(ye,{children:[e(Y,{linear:J.green,color:"#ffffff"}),e(X,{children:e(Z,{name:"Functionalidad",options:L,children:e(ee,{options:L})})})]})})}const ye=W.div`
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

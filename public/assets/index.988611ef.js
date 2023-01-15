var K=Object.defineProperty,M=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var j=(o,a,t)=>a in o?K(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,F=(o,a)=>{for(var t in a||(a={}))V.call(a,t)&&j(o,t,a[t]);if(L)for(var t of L(a))W.call(a,t)&&j(o,t,a[t]);return o},v=(o,a)=>M(o,Q(a));import{a as e,F as y,r as x,j as i,S as f,s as J}from"./index.9a3ab491.js";import{t as X,D as Y}from"./Dashboard.b4fb76d1.js";import{C as Z}from"./Toast.cdc41de7.js";import{C as ee,F as te}from"./Card.db03a57e.js";import{R as ae,G as oe}from"./Rocket.503d0db3.js";import{G as re,a as se}from"./GetByName.ed192aab.js";import{u as D,a as G,e as p,C as h,c as ne,S as _}from"./SubmitButton.1ee02988.js";import{u as T,S as z}from"./StatusHandler.4ef7e4a9.js";import{u as w,s as N,c as ie}from"./store.a90ba17a.js";import{S as H}from"./chakra-ui-select.esm.5205b0a4.js";import{a as le,d as ce,p as de,g as me,e as ue,b as pe}from"./constants.d0510e6a.js";import{T as O}from"./TextInput.6529562e.js";import{E}from"./ErrorWarning.3d53457e.js";import{b as fe,E as k,S as he,a as be}from"./SearchPlus.0e08da50.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./chakra-ui-checkbox.esm.9abc3503.js";function P(o){const{label:a,list:t,register:r,required:n}=o;return e(y,{children:e(H,v(F({m:"2em 0",size:"xm",variant:"outline",placeholder:"Seleccione rol"},r(a,{required:n})),{children:Array.isArray(t)&&t.map((l,s)=>e("option",{value:l.id,children:l.name},s))}))})}const Se="http://localhost:4000",ge=le.create({baseURL:Se,withCredentials:!1});ge.defaults.headers.common["Content-Type"]="application/json";const b={name:"se permiten nombres compuestos sin n\xFAmeros",id:"solo numeros requeridos",select:"esta selecci\xF3n es requerida"},U=["/provincias","/municipios","/organismos","/empresas-instituciones","/representante","/entidades-registro","/users","/funcionario-registro","/funcionalidades","/rols","/estados","/generacion","/tarifas","/solicitudes"];function $(o){const{label:a,list:t,register:r,required:n}=o;return e(y,{children:e(H,v(F({m:"2em 0",size:"xm",variant:"outline",placeholder:"Seleccione un dato"},r(a,{required:n})),{children:Array.isArray(t)&&t.map((l,s)=>e("option",{value:l,children:l.slice(1)},s))}))})}function xe(o){var R,I;const a=w(N),t=w(ie),{stack:r}=t,[n,l]=x.exports.useState(""),{register:s,handleSubmit:A,formState:{errors:S}}=D(),g="funcionalidades",c="/rols",{data:d}=T("allrols",()=>ce(c)),m=G(C=>de(C,g,r.id)),u=(R=m==null?void 0:m.data)==null?void 0:R.message;return x.exports.useEffect(()=>{u&&l(u),u==="updated"&&a.setOption("mostrar")},[u]),e(y,{children:i("form",{onSubmit:A(async C=>{m.mutateAsync(C)}),children:[e(p,{p:"1em",children:i(h,{children:[e(f,{children:"Nombre de Funcionalidad"}),e(O,{label:"name",register:s,errors:S,required:!0,info:b.name,defaultValue:r.name})]})}),e(p,{p:"1em",children:i(h,{children:[e(f,{children:"Esta funcionalidad est\xE1 v\xEDnculada a:"}),e($,{list:U,label:"path",register:s,required:!0}),e(E,{label:"path",errors:S,info:b.select})]})}),e(p,{p:"1em",children:i(h,{children:["Rol actual(",e("span",{style:{color:"#e2023d"},children:(I=r==null?void 0:r.Rol)==null?void 0:I.name}),")",e(f,{m:"0.5em 0 -20px 0",children:"Seleccione rol"}),e(P,{list:d==null?void 0:d.result,label:"rolId",register:s,required:!0}),e(E,{label:"rolId",errors:S,info:b.select})]})}),i(p,{m:"2em 0",children:[e(ne,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(fe,v(F({},s("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(r.enabled)}))]}),e(_,{buttonstate:m==null?void 0:m.isLoading}),n&&e(z,{message:n})]})})}function ye(o){var u;const a=w(N),[t,r]=x.exports.useState(""),{register:n,handleSubmit:l,formState:{errors:s}}=D(),A="funcionalidades",S="/rols/enabled/true",{data:g}=T("allrols",()=>me(S)),c=G(q=>ue(A,q)),d=(u=c==null?void 0:c.data)==null?void 0:u.message;return x.exports.useEffect(()=>{d&&r(d),d==="created"&&a.setOption("mostrar")},[d]),e(y,{children:i("form",{onSubmit:l(async q=>{c.mutateAsync(q)}),children:[e(p,{p:"1em",children:i(h,{children:[e(f,{children:"Nombre de Funcionalidad"}),e(O,{label:"name",register:n,errors:s,required:!0,info:b.name})]})}),e(p,{p:"1em",children:i(h,{children:[e(f,{m:"0 0 -1em 0",children:"Seleccione el dato al que se v\xEDncula"}),e($,{list:U,label:"path",register:n,required:!0}),e(E,{label:"path",errors:s,info:b.select})]})}),e(p,{p:"1em",children:i(h,{children:[e(f,{m:"0 0 -1em 0",children:"seleccione rol a que pertenece"}),e(P,{list:g==null?void 0:g.result,label:"rolId",register:n,required:!0}),e(E,{label:"rolId",errors:s,info:b.select})]})}),e(_,{buttonstate:c==null?void 0:c.isLoading}),t&&e(z,{message:t})]})})}const B=[{option:"crear",icon:e(k,{}),comp:e(ye,{url:"funcionalidades"})},{option:"mostrar",icon:e(he,{}),comp:e(re,{url:"funcionalidades"})},{option:"buscar",icon:e(be,{}),comp:e(se,{allnames:"funcionalidades"})},{option:"habilitados",icon:e(ae,{}),comp:e(oe,{queryKey:"funcionalidades-enabled",url:"funcionalidades/enabled/true"})},{option:"modificar",icon:e(k,{}),comp:e(xe,{url:"funcionalidades"})}];function He(){const o=localStorage.getItem("jwt");return x.exports.useEffect(()=>{o&&(pe.defaults.headers.common.jwt=o)},[]),e(y,{children:i(qe,{children:[e(Z,{linear:X.green,color:"#ffffff"}),e(Y,{children:e(ee,{name:"Functionalidad",options:B,children:e(te,{options:B})})})]})})}const qe=J.div`
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

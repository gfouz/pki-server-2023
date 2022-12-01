var U=Object.defineProperty,$=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var I=(o,a,t)=>a in o?U(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,q=(o,a)=>{for(var t in a||(a={}))Q.call(a,t)&&I(o,t,a[t]);if(R)for(var t of R(a))V.call(a,t)&&I(o,t,a[t]);return o},E=(o,a)=>$(o,M(a));import{j as e,F as y,r as x,a as i,a2 as p,a3 as f,s as W}from"./index.e9e99ba7.js";import{t as J}from"./constants.c1eecf01.js";import{C as X}from"./Toast.e4de0c17.js";import{S as G,D as Y}from"./SubmitButton.2fd5e6eb.js";import{C as Z,F as ee}from"./Card.7290142e.js";import{R as te,G as ae}from"./Rocket.c6cdf64d.js";import{G as oe}from"./Getter.c2d4cc05.js";import{u as B,a as D,F as re}from"./index.esm.bdaf8ba0.js";import{u as _,S as z}from"./StatusHandler.420984fb.js";import{u as C,s as N,c as se}from"./store.d9601167.js";import{S as T}from"./chakra-ui-select.esm.f5c0e0bb.js";import{a as ie,d as ne,p as le,S as h,g as ce,e as de,b as ue}from"./StyledLabel.e15bdfe8.js";import{T as H}from"./TextInput.00583772.js";import{E as v}from"./ErrorWarning.55d4a20f.js";import{b as me,E as L,S as pe,a as fe,G as he}from"./SearchPlus.c7e6ddc6.js";import"./chakra-ui-button.esm.d8ba8687.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";function K(o){const{label:a,list:t,register:n,required:s}=o;return e(y,{children:e(T,E(q({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},n(a,{required:s})),{children:Array.isArray(t)&&t.map((l,r)=>e("option",{value:l.id,children:l.name},r))}))})}const be="http://localhost:4000",ge=ie.create({baseURL:be,withCredentials:!1});ge.defaults.headers.common["Content-Type"]="application/json";const b={name:"se permiten nombres compuestos sin n\xFAmeros",id:"solo numeros requeridos",select:"esta selecci\xF3n es requerida"},O=["/provincias","/municipios","/organismos","/empresas-instituciones","/representantes","/entidades-registro","/usuarios","/funcionario-registro","/funcionalidades","/rols","/estados","/generacion","/tarifas"];function P(o){const{label:a,list:t,register:n,required:s}=o;return e(y,{children:e(T,E(q({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},n(a,{required:s})),{children:Array.isArray(t)&&t.map((l,r)=>e("option",{value:l,children:l.slice(1)},r))}))})}function Se(o){var k;const a=C(N),t=C(se),{stack:n}=t,[s,l]=x.exports.useState(""),{register:r,handleSubmit:A,formState:{errors:g}}=B(),S="funcionalidades",c="/rols",{data:d}=_("allrols",()=>ne(c)),u=D(w=>le(w,S,n.id)),m=(k=u==null?void 0:u.data)==null?void 0:k.message;return x.exports.useEffect(()=>{m&&l(m),m==="updated"&&a.setOption("mostrar")},[m]),e(y,{children:i("form",{onSubmit:A(async w=>{u.mutateAsync(w)}),children:[e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Nombre de Funcionalidad"}),e(H,{label:"name",register:r,errors:g,required:!0,info:b.name,defaultValue:n.name})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Esta funcionalidad est\xE1 v\xEDnculada a:"}),e(P,{list:O,label:"path",register:r,required:!0}),e(v,{label:"path",errors:g,info:b.select})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Rol de esta funcionalidad"}),e(K,{list:d==null?void 0:d.result,label:"rolId",register:r,required:!0}),e(v,{label:"rolId",errors:g,info:b.select})]})}),i(p,{m:"2em 0",children:[e(re,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(me,E(q({},r("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(n.enabled)}))]}),e(G,{buttonstate:u==null?void 0:u.isLoading}),s&&e(z,{message:s})]})})}function xe(o){var m;const a=C(N),[t,n]=x.exports.useState(""),{register:s,handleSubmit:l,formState:{errors:r}}=B(),A="funcionalidades",g="/rols/enabled/true",{data:S}=_("allrols",()=>ce(g)),c=D(F=>de(A,F)),d=(m=c==null?void 0:c.data)==null?void 0:m.message;return x.exports.useEffect(()=>{d&&n(d),d==="created"&&a.setOption("mostrar")},[d]),e(y,{children:i("form",{onSubmit:l(async F=>{c.mutateAsync(F)}),children:[e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Nombre de Funcionalidad"}),e(H,{label:"name",register:s,errors:r,required:!0,info:b.name})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{children:"Nombre que identif\xEDca a esta funcionalidad"}),e(P,{list:O,label:"path",register:s,required:!0}),e(v,{label:"path",errors:r,info:b.select})]})}),e(p,{p:"1em",children:i(f,{children:[e(h,{children:"seleccione rol relacionado"}),e(K,{list:S==null?void 0:S.result,label:"rolId",register:s,required:!0}),e(v,{label:"rolId",errors:r,info:b.select})]})}),e(G,{buttonstate:c==null?void 0:c.isLoading}),t&&e(z,{message:t})]})})}const j=[{option:"a\xF1adir",icon:e(L,{}),comp:e(xe,{url:"funcionalidades"})},{option:"mostrar",icon:e(pe,{}),comp:e(oe,{url:"funcionalidades",queryKey:"all-functionalities"})},{option:"buscar",icon:e(fe,{}),comp:e(he,{allnames:"funcionalidades"})},{option:"habilitados",icon:e(te,{}),comp:e(ae,{queryKey:"funcionalidades-enabled",url:"funcionalidades/enabled/true"})},{option:"actualizar",icon:e(L,{}),comp:e(Se,{url:"funcionalidades"})}];function Te(){const o=localStorage.getItem("jwt");return x.exports.useEffect(()=>{o&&(ue.defaults.headers.common.jwt=o)},[]),e(y,{children:i(ye,{children:[e(X,{linear:J.green,color:"#ffffff"}),e(Y,{children:e(Z,{name:"Functionalidad",options:j,children:e(ee,{options:j})})})]})})}const ye=W.div`
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
`;export{Te as default};

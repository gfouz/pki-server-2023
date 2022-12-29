var V=Object.defineProperty,H=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var C=(r,a,i)=>a in r?V(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,x=(r,a)=>{for(var i in a||(a={}))K.call(a,i)&&C(r,i,a[i]);if(F)for(var i of F(a))M.call(a,i)&&C(r,i,a[i]);return r},A=(r,a)=>H(r,Q(a));import{a as e,F as g,j as u,r as S,Q as I,ai as G,s as O}from"./index.f52781a9.js";import{t as U,D as W}from"./Dashboard.fd18947c.js";import{C as $}from"./Toast.0ae85c90.js";import{C as J,F as X}from"./Card.ee8d3258.js";import{R as Y,G as Z}from"./Rocket.5ccd8086.js";import{G as ee,a as re}from"./GetByName.cc5377d5.js";import{u as T,c as te,s as ae}from"./store.e96f2609.js";import{u as L,S as R}from"./StatusHandler.ec046620.js";import{u as B,a as P,S as _}from"./SubmitButton.96350b2a.js";import{S as ie}from"./chakra-ui-select.esm.a9f625b2.js";import{d as k,p as oe,i as p,e as ne,b as se}from"./constants.f2e04d14.js";import{I as le,E as ce}from"./ErrorWarning.4750ca61.js";import{T as de}from"./chakra-ui-tooltip.esm.eb698682.js";import{A as D}from"./AlphaNumericInput.07c9fd81.js";import{S as n}from"./StyledLabel.4d380b9c.js";import{b as me,E as j,S as ue,a as fe}from"./SearchPlus.35f7143c.js";import"./chakra-ui-button.esm.19477a37.js";import"./chakra-ui-checkbox.esm.77685af8.js";function N({list:r,register:a,label:i,required:c}){return e(g,{children:e(ie,A(x({},a(i,{required:c})),{placeholder:"Seleccionar finalidad",size:"xm",variant:"outline",children:Array.isArray(r)&&r.map((t,l)=>e("option",{value:t.id,children:t.name},l))}))})}const q=({label:r,register:a,required:i,errors:c,defaultValue:t,info:l})=>u(g,{children:[e(de,{label:l,hasArrow:!0,arrowSize:15,children:e(le,x({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^\d*(\.\d+)?$/,required:i})))}),e(ce,{label:r,errors:c,info:l})]});function pe(r){var E;const{url:a}=r,i=T(te),c=T(ae),{stack:t}=i,[l,f]=S.exports.useState(""),{register:d,handleSubmit:h,formState:{errors:o}}=B(),v="/finalidades",{data:m}=L("all-finalidades",()=>k(v)),s=P(w=>oe(w,a,t.id)),b=async w=>{s.mutateAsync(w)},y=(E=s==null?void 0:s.data)==null?void 0:E.message;return S.exports.useEffect(()=>{y&&f(y),y==="updated"&&c.setOption("mostrar")},[y]),e(g,{children:e("form",{onSubmit:h(b),children:u(I,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(q,{label:"time",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t.time}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(q,{label:"price",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t==null?void 0:t.price}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:d,errors:o,required:!0,info:p.alpha,defaultValue:t==null?void 0:t.range}),e(n,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),u(I,{p:"1em",direction:"column",children:[e(N,{list:m==null?void 0:m.result,label:"finalidadId",register:d,required:!0}),o.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),u(G,{children:[e(n,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(me,A(x({},d("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(t==null?void 0:t.enabled)}))]}),e(_,{buttonstate:s==null?void 0:s.isLoading}),l&&e(R,{message:l})]})})})}function he(r){var s;const{url:a}=r,[i,c]=S.exports.useState(""),{register:t,handleSubmit:l,formState:{errors:f}}=B(),d="/finalidades",{data:h}=L("all-finalidades",()=>k(d)),o=P(b=>ne(a,b)),v=async b=>{o.mutateAsync(b)},m=(s=o==null?void 0:o.data)==null?void 0:s.message;return S.exports.useEffect(()=>{m&&c(m)},[m]),e(g,{children:e("form",{onSubmit:l(v),children:u(I,{p:"1em ",direction:"column",children:[e(n,{m:"0 0 2em 0",color:"#009966",center:!0,children:"Crear tarifa"}),e(n,{m:"1em 0 0 0",children:"Tiempo"}),e(q,{label:"time",register:t,errors:f,required:!0,info:p.numeric}),e(n,{m:"1em 0 0 0",children:"Precio de tarifa"}),e(q,{label:"price",register:t,errors:f,required:!0,info:p.numeric}),e(n,{m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:t,errors:f,required:!0,info:p.alpha}),e(n,{color:"#444444",m:"1em 0 0 0",children:"Seleccione finalidad"}),u(G,{children:[e(N,{list:h==null?void 0:h.result,label:"finalidadId",register:t,required:!0}),f.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(_,{buttonstate:o==null?void 0:o.isLoading}),i&&e(R,{message:i})]})})})}const z=[{option:"crear",icon:e(j,{}),comp:e(he,{url:"tarifas"})},{option:"mostrar",icon:e(ue,{}),comp:e(ee,{url:"tarifas"})},{option:"buscar",icon:e(fe,{}),comp:e(re,{allnames:"tarifas"})},{option:"habilitados",icon:e(Y,{}),comp:e(Z,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"modificar",icon:e(j,{}),comp:e(pe,{url:"tarifas"})}];function Pe(){const r=localStorage.getItem("jwt");return S.exports.useEffect(()=>{r&&(se.defaults.headers.common.jwt=r)},[]),e(g,{children:u(be,{children:[e($,{linear:U.green,color:"#ffffff"}),e(W,{children:e(J,{name:"tarifas",options:z,children:e(X,{options:z})})})]})})}const be=O.div`
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
`;export{Pe as default};

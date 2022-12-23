var N=Object.defineProperty,V=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(r,a,i)=>a in r?N(r,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[a]=i,x=(r,a)=>{for(var i in a||(a={}))M.call(a,i)&&T(r,i,a[i]);if(E)for(var i of E(a))O.call(a,i)&&T(r,i,a[i]);return r},w=(r,a)=>V(r,K(a));import{j as e,F as g,a as u,r as S,H as F,a2 as G,s as Q}from"./index.5758997f.js";import{t as U}from"./constants.c1eecf01.js";import{C as W}from"./Toast.b6137537.js";import{S as L,D as $}from"./SubmitButton.88641c71.js";import{C as J,F as X}from"./Card.4ae134fc.js";import{R as Y,G as Z}from"./Rocket.cee1406e.js";import{G as ee}from"./Getter.a26d04f7.js";import{u as j,c as re,s as te}from"./store.93784534.js";import{u as R,S as B}from"./StatusHandler.62057e2e.js";import{u as P,a as _}from"./index.esm.c821f254.js";import{S as ae}from"./chakra-ui-select.esm.a2f79340.js";import{d as k,p as ie,S as n,i as p,e as oe,b as ne}from"./StyledLabel.e157ff4c.js";import{T as se,I as le,E as ce}from"./ErrorWarning.eba98df7.js";import{A as D}from"./AlphaNumericInput.065e8169.js";import{b as de,E as z,S as me,a as ue,G as fe}from"./SearchPlus.225589f0.js";import"./chakra-ui-button.esm.904d835a.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";function H({list:r,register:a,label:i,required:c}){return e(g,{children:e(ae,w(x({},a(i,{required:c})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(r)&&r.map((t,l)=>e("option",{value:t.id,children:t.name},l))}))})}const q=({label:r,register:a,required:i,errors:c,defaultValue:t,info:l})=>u(g,{children:[e(se,{label:l,hasArrow:!0,arrowSize:15,children:e(le,x({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:t},a(r,{pattern:/^\d*(\.\d+)?$/,required:i})))}),e(ce,{label:r,errors:c,info:l})]});function pe(r){var I;const{url:a}=r,i=j(re),c=j(te),{stack:t}=i,[l,f]=S.exports.useState(""),{register:d,handleSubmit:h,formState:{errors:o}}=P(),v="/finalidades",{data:m}=R("all-finalidades",()=>k(v)),s=_(A=>ie(A,a,t.id)),b=async A=>{s.mutateAsync(A)},y=(I=s==null?void 0:s.data)==null?void 0:I.message;return S.exports.useEffect(()=>{y&&f(y),y==="updated"&&c.setOption("mostrar")},[y]),e(g,{children:e("form",{onSubmit:h(b),children:u(F,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",capit:!0,color:"#009966",center:!0,children:"Actualizar tarifa"}),e(n,{capit:!0,m:"1em 0 0 0",children:"Tiempo"}),e(q,{label:"time",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t.time}),e(n,{capit:!0,m:"1em 0 0 0",children:"Precio de Tarifa"}),e(q,{label:"price",register:d,errors:o,required:!0,info:p.numeric,defaultValue:t==null?void 0:t.price}),e(n,{capit:!0,m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:d,errors:o,required:!0,info:p.alpha,defaultValue:t==null?void 0:t.range}),e(n,{m:"2em 0 0 0",capit:!0,color:"#009966",children:"Seleccione finalidad"}),u(F,{p:"1em",direction:"column",children:[e(H,{list:m==null?void 0:m.result,label:"finalidadId",register:d,required:!0}),o.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),u(G,{children:[e(n,{m:"0 1em",children:"Deshabilitar o habilitar"}),e(de,w(x({},d("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(t==null?void 0:t.enabled)}))]}),e(L,{buttonstate:s==null?void 0:s.isLoading}),l&&e(B,{message:l})]})})})}function he(r){var s;const{url:a}=r,[i,c]=S.exports.useState(""),{register:t,handleSubmit:l,formState:{errors:f}}=P(),d="/finalidades",{data:h}=R("all-finalidades",()=>k(d)),o=_(b=>oe(a,b)),v=async b=>{o.mutateAsync(b)},m=(s=o==null?void 0:o.data)==null?void 0:s.message;return S.exports.useEffect(()=>{m&&c(m)},[m]),e(g,{children:e("form",{onSubmit:l(v),children:u(F,{p:"1em",direction:"column",children:[e(n,{m:"0 0 2em 0",color:"#009966",center:!0,children:"A\xF1adir tarifa"}),e(n,{m:"1em 0 0 0",children:"Tiempo"}),e(q,{label:"time",register:t,errors:f,required:!0,info:p.numeric}),e(n,{m:"1em 0 0 0",children:"Precio de tarifa"}),e(q,{label:"price",register:t,errors:f,required:!0,info:p.numeric}),e(n,{m:"1em 0 0 0",children:"Estimar rango"}),e(D,{label:"range",register:t,errors:f,required:!0,info:p.alpha}),e(n,{color:"#009966",m:"1em 0 0 0",children:"Seleccione finalidad"}),u(G,{p:"1em",children:[e(H,{list:h==null?void 0:h.result,label:"finalidadId",register:t,required:!0}),f.finalidadId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(L,{buttonstate:o==null?void 0:o.isLoading}),i&&e(B,{message:i})]})})})}const C=[{option:"a\xF1adir",icon:e(z,{}),comp:e(he,{url:"tarifas"})},{option:"mostrar",icon:e(me,{}),comp:e(ee,{url:"tarifas",queryKey:"all-tarifas"})},{option:"buscar",icon:e(ue,{}),comp:e(fe,{allnames:"tarifas"})},{option:"habilitados",icon:e(Y,{}),comp:e(Z,{url:"tarifas/enabled/true",queryKey:"tarifas-active"})},{option:"actualizar",icon:e(z,{}),comp:e(pe,{url:"tarifas"})}];function Be(){const r=localStorage.getItem("jwt");return S.exports.useEffect(()=>{r&&(ne.defaults.headers.common.jwt=r)},[]),e(g,{children:u(be,{children:[e(W,{linear:U.green,color:"#ffffff"}),e($,{children:e(J,{name:"tarifas",options:C,children:e(X,{options:C})})})]})})}const be=Q.div`
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
`;export{Be as default};

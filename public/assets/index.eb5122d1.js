var Q=Object.defineProperty,V=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var U=(s,t,o)=>t in s?Q(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,F=(s,t)=>{for(var o in t||(t={}))J.call(t,o)&&U(s,o,t[o]);if(_)for(var o of _(t))X.call(t,o)&&U(s,o,t[o]);return s},k=(s,t)=>V(s,W(t));import{a as e,F as w,s as A,r as p,j as g,ai as B,aj as L,a1 as Y}from"./index.f52781a9.js";import{t as Z,D as ee}from"./Dashboard.fd18947c.js";import{C as te}from"./Toast.0ae85c90.js";import{C as se,F as oe}from"./Card.ee8d3258.js";import{R as ie,G as re}from"./Rocket.5ccd8086.js";import{G as ne,a as ae}from"./GetByName.cc5377d5.js";import{u as D,a as $,F as ce,S as N}from"./SubmitButton.96350b2a.js";import{u as x,S as G}from"./StatusHandler.ec046620.js";import{u as v,c as le,s as O}from"./store.e96f2609.js";import{S as me}from"./chakra-ui-select.esm.a9f625b2.js";import{a as de,d as R,p as ue,g as z,e as pe,b as fe}from"./constants.f2e04d14.js";import{S as y}from"./StyledLabel.4d380b9c.js";import{T as K}from"./TextInput.3f5f054c.js";import{E as q}from"./ErrorWarning.4750ca61.js";import{b as he,A as be,E as H,S as ge,a as Se}from"./SearchPlus.35f7143c.js";import{C as xe}from"./CodeBranch.e409172e.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./chakra-ui-button.esm.19477a37.js";import"./chakra-ui-checkbox.esm.77685af8.js";function I(s){const{label:t,list:o,register:r,required:h,setId:m}=s;return e(w,{children:e(me,k(F({m:"2em 0",size:"xm",color:"#000000",placeholder:"Selecci\xF3n requerida"},r(t,{required:h,onChange:i=>{var n;m&&m((n=i==null?void 0:i.target)==null?void 0:n.value)}})),{children:Array.isArray(o)&&o.map((i,n)=>e("option",{value:i.id,children:i.name},n))}))})}const ye="http://localhost:4000",P=de.create({baseURL:ye,withCredentials:!1});P.defaults.headers.common["Content-Type"]="application/json";const S={name:"se permiten nombres compuestos sin n\xFAmeros",id:"solo numeros requeridos",select:"esta selecci\xF3n es requerida"};async function Ie(s){try{return(await P.get(`/empresas-instituciones/municipio/${s}`)).data}catch(t){return t.message}}function we(s){var T;const t=v(le),o=v(O),{stack:r}=t,h="/municipios",m="/organismos",{data:i}=x("municipios",()=>R(h)),{data:n}=x("organismos",()=>R(m)),[f,a]=p.exports.useState(""),{register:d,handleSubmit:l,formState:{errors:c}}=D(),u=$(C=>ue(C,s.url,r.id),{retry:2}),b=(T=u==null?void 0:u.data)==null?void 0:T.message;return p.exports.useEffect(()=>{b&&a(b),b==="updated"&&o.setOption("mostrar")},[b]),e(w,{children:e("form",{onSubmit:l(async C=>{u.mutateAsync(C)}),children:g(Ee,{children:[e(y,{color:"#222222",center:!0,upper:!0,children:"Modificar empresa o instituci\xF3n"}),e(y,{color:"#666666",m:"2em 0 0 0",children:"Modificar nombre"}),e(K,{info:S.name,required:!0,label:"name",errors:c,register:d,defaultValue:r.name}),e(y,{color:"#666666",m:"1em 0 0 0",children:"Seleccione organismo"}),e(I,{list:n==null?void 0:n.result,label:"organismoId",register:d,required:!0}),e(q,{label:"organismoId",errors:c,info:S.select}),e(y,{color:"#666666",children:"Seleccione munic\xEDpio"}),e(I,{list:i==null?void 0:i.result,label:"municipioId",register:d,required:!0}),e(q,{label:"municipioId",errors:c,info:S.select}),e(ce,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(he,k(F({},d("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(r.enabled)})),e(N,{buttonstate:u==null?void 0:u.isLoading}),f&&e(G,{message:f})]})})})}const Ee=A.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  @media (min-width: 700px) {
    min-width: 650px;
    padding: 2em;
  }
`;function qe(){var b;const s=v(O),[t,o]=p.exports.useState(""),{register:r,handleSubmit:h,formState:{errors:m}}=D(),i="/empresas-instituciones",n="/organismos/enabled/true",f="/municipios/enabled/true",{data:a}=x("org-all",()=>z(n)),{data:d}=x("users-act",()=>z(f)),l=$(E=>pe(i,E)),c=(b=l==null?void 0:l.data)==null?void 0:b.message;return p.exports.useEffect(()=>{c&&o(c),c==="updated"&&s.setOption("mostrar")},[c]),e(w,{children:g("form",{onSubmit:h(async E=>{l.mutateAsync(E)}),children:[e(B,{p:"1em",children:g(L,{children:[e(j,{children:"Nombre de empresa o instit..."}),e(K,{label:"name",register:r,errors:m,required:!0,info:S.name})]})}),e(B,{p:"1em",children:g(L,{children:[e(j,{children:"seleccione organismo"}),e(I,{list:a==null?void 0:a.result,label:"organismoId",register:r,required:!0}),e(q,{label:"organismoId",errors:m,info:S.select})]})}),e(B,{p:"1em",children:g(L,{children:[e(j,{children:"seleccione municipio"}),e(I,{list:d==null?void 0:d.result,label:"municipioId",register:r,required:!0}),e(q,{label:"municipioId",errors:m,info:S.select})]})}),e(N,{buttonstate:l==null?void 0:l.isLoading}),t&&e(G,{message:t})]})})}const j=A.h4`
  color: #888888;
  font-weight: bolder;
`;function Ae(){const[s,t]=p.exports.useState(""),[o,r]=p.exports.useState("0"),{register:h,handleSubmit:m,formState:{errors:i}}=D(),n="municipios",{data:f}=x("all-mun",()=>R(n)),{data:a,refetch:d}=x("all-empInst",()=>Ie(o)),l=async u=>{r(u.id)};p.exports.useEffect(()=>{d()},[o]);const c=a==null?void 0:a.message;return p.exports.useEffect(()=>{c&&t(c)},[c]),e(w,{children:e("form",{onSubmit:m(l),children:g(Ce,{children:[e(y,{center:!0,upper:!0,children:"Buscar por municipios."}),e(Y,{size:"sm",m:"0.5em 0",children:"Seleccione munic\xEDpio."}),e(I,{label:"id",list:f==null?void 0:f.result,register:h,required:!0,setId:r}),e(be,{data:a==null?void 0:a.result}),s&&e(G,{message:s})]})})})}const Ce=A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  @media (min-width: 700px) {
    min-width: 650px;
  }
`,M=[{option:"crear",icon:e(H,{}),comp:e(qe,{})},{option:"mostrar",icon:e(ge,{}),comp:e(ne,{url:"empresas-instituciones"})},{option:"buscar",icon:e(Se,{}),comp:e(ae,{allnames:"empresas-instituciones"})},{option:"asociado",icon:e(xe,{}),comp:e(Ae,{})},{option:"habilitados",icon:e(ie,{}),comp:e(re,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"modificar",icon:e(H,{}),comp:e(we,{url:"empresas-instituciones"})}];function Ve(){const s=localStorage.getItem("jwt");return p.exports.useEffect(()=>{s&&(fe.defaults.headers.common.jwt=s)},[]),e(w,{children:g(Fe,{children:[e(te,{linear:Z.green,color:"#ffffff"}),e(ee,{children:e(se,{name:"Empresa-inst...",options:M,children:e(oe,{options:M})})})]})})}const Fe=A.div`
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
`;export{Ve as default};

var W=Object.defineProperty,J=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var O=(o,t,s)=>t in o?W(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s,F=(o,t)=>{for(var s in t||(t={}))Y.call(t,s)&&O(o,s,t[s]);if(H)for(var s of H(t))Z.call(t,s)&&O(o,s,t[s]);return o},v=(o,t)=>J(o,X(t));import{a as e,F as I,s as C,r as p,j as f,S}from"./index.9a3ab491.js";import{t as ee,D as te}from"./Dashboard.b4fb76d1.js";import{C as oe}from"./Toast.cdc41de7.js";import{C as se,F as ie}from"./Card.db03a57e.js";import{R as re,G as ne}from"./Rocket.503d0db3.js";import{G as ae,a as ce}from"./GetByName.ed192aab.js";import{u as G,a as N,c as le,S as K,e as B,C as L,H as me}from"./SubmitButton.1ee02988.js";import{u as y,S as k}from"./StatusHandler.4ef7e4a9.js";import{u as j,c as de,s as P}from"./store.a90ba17a.js";import{S as ue}from"./chakra-ui-select.esm.5205b0a4.js";import{a as pe,d as D,p as fe,g as U,e as he,b as be}from"./constants.d0510e6a.js";import{T as Q}from"./TextInput.6529562e.js";import{E as q}from"./ErrorWarning.3d53457e.js";import{b as ge,A as Se,E as z,S as xe,a as ye}from"./SearchPlus.0e08da50.js";import{C as Ee}from"./CodeBranch.c380e8d5.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./chakra-ui-checkbox.esm.9abc3503.js";function E(o){const{label:t,list:s,register:i,required:b,setId:m}=o;return e(I,{children:e(ue,v(F({m:"2em 0",size:"xm",color:"#000000",placeholder:"Selecci\xF3n requerida"},i(t,{required:b,onChange:r=>{var n;m&&m((n=r==null?void 0:r.target)==null?void 0:n.value)}})),{children:Array.isArray(s)&&s.map((r,n)=>e("option",{value:r.id,children:r.name},n))}))})}const Ie="http://localhost:4000",V=pe.create({baseURL:Ie,withCredentials:!1});V.defaults.headers.common["Content-Type"]="application/json";const x={name:"se permiten nombres compuestos sin n\xFAmeros",id:"solo numeros requeridos",select:"esta selecci\xF3n es requerida"};async function we(o){try{return(await V.get(`/empresas-instituciones/municipio/${o}`)).data}catch(t){return t.message}}function qe(o){var M,T,_;const t=j(de),s=j(P),{stack:i}=t,b="/municipios",m="/organismos",{data:r}=y("municipios",()=>D(b)),{data:n}=y("organismos",()=>D(m)),[h,a]=p.exports.useState(""),{register:d,handleSubmit:l,formState:{errors:c}}=G(),u=N(A=>fe(A,o.url,i.id),{retry:2}),g=(M=u==null?void 0:u.data)==null?void 0:M.message;return p.exports.useEffect(()=>{g&&a(g),g==="updated"&&s.setOption("mostrar")},[g]),e(I,{children:e("form",{onSubmit:l(async A=>{u.mutateAsync(A)}),children:f(Ce,{children:[e(S,{color:"#222222",center:!0,upper:!0,children:"Modificar empresa o instituci\xF3n"}),e(S,{color:"#666666",m:"2em 0 0 0",children:"Modificar nombre"}),e(Q,{info:x.name,required:!0,label:"name",errors:c,register:d,defaultValue:i.name}),e(S,{color:"#666666",m:"1em 0 0 0",children:"Seleccione organismo"}),f(S,{children:["Organismo actual: ( ",e("b",{style:{color:"var(--rose-red)"},children:(T=i==null?void 0:i.Organismo)==null?void 0:T.name}),")"]}),e(E,{list:n==null?void 0:n.result,label:"organismoId",register:d,required:!0}),e(q,{label:"organismoId",errors:c,info:x.select}),e(S,{color:"#666666",children:"Seleccione munic\xEDpio"}),f(S,{children:["Munic\xEDpio actual: ( ",e("b",{style:{color:"var(--rose-red)"},children:(_=i==null?void 0:i.Municipio)==null?void 0:_.name}),")"]}),e(E,{list:r==null?void 0:r.result,label:"municipioId",register:d,required:!0}),e(q,{label:"municipioId",errors:c,info:x.select}),e(le,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(ge,v(F({},d("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)})),e(K,{buttonstate:u==null?void 0:u.isLoading}),h&&e(k,{message:h})]})})})}const Ce=C.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  @media (min-width: 700px) {
    min-width: 650px;
    padding: 2em;
  }
`;function Ae(){var g;const o=j(P),[t,s]=p.exports.useState(""),{register:i,handleSubmit:b,formState:{errors:m}}=G(),r="/empresas-instituciones",n="/organismos/enabled/true",h="/municipios/enabled/true",{data:a}=y("org-all",()=>U(n)),{data:d}=y("users-act",()=>U(h)),l=N(w=>he(r,w)),c=(g=l==null?void 0:l.data)==null?void 0:g.message;return p.exports.useEffect(()=>{c&&s(c),c==="updated"&&o.setOption("mostrar")},[c]),e(I,{children:f("form",{onSubmit:b(async w=>{l.mutateAsync(w)}),children:[e(B,{p:"1em",children:f(L,{children:[e(R,{children:"Nombre de empresa o instit..."}),e(Q,{label:"name",register:i,errors:m,required:!0,info:x.name})]})}),e(B,{p:"1em",children:f(L,{children:[e(R,{children:"seleccione organismo"}),e(E,{list:a==null?void 0:a.result,label:"organismoId",register:i,required:!0}),e(q,{label:"organismoId",errors:m,info:x.select})]})}),e(B,{p:"1em",children:f(L,{children:[e(R,{children:"seleccione municipio"}),e(E,{list:d==null?void 0:d.result,label:"municipioId",register:i,required:!0}),e(q,{label:"municipioId",errors:m,info:x.select})]})}),e(K,{buttonstate:l==null?void 0:l.isLoading}),t&&e(k,{message:t})]})})}const R=C.h4`
  color: #888888;
  font-weight: bolder;
`;function Fe(){const[o,t]=p.exports.useState(""),[s,i]=p.exports.useState("0"),{register:b,handleSubmit:m,formState:{errors:r}}=G(),n="municipios",{data:h}=y("all-mun",()=>D(n)),{data:a,refetch:d}=y("all-empInst",()=>we(s)),l=async u=>{i(u.id)};p.exports.useEffect(()=>{d()},[s]);const c=a==null?void 0:a.message;return p.exports.useEffect(()=>{c&&t(c)},[c]),e(I,{children:e("form",{onSubmit:m(l),children:f(ve,{children:[e(S,{center:!0,upper:!0,children:"Buscar por municipios."}),e(me,{size:"sm",m:"0.5em 0",children:"Seleccione munic\xEDpio."}),e(E,{label:"id",list:h==null?void 0:h.result,register:b,required:!0,setId:i}),e(Se,{data:a==null?void 0:a.result}),o&&e(k,{message:o})]})})})}const ve=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  @media (min-width: 700px) {
    min-width: 650px;
  }
`,$=[{option:"crear",icon:e(z,{}),comp:e(Ae,{})},{option:"mostrar",icon:e(xe,{}),comp:e(ae,{url:"empresas-instituciones"})},{option:"buscar",icon:e(ye,{}),comp:e(ce,{allnames:"empresas-instituciones"})},{option:"asociado",icon:e(Ee,{}),comp:e(Fe,{})},{option:"habilitados",icon:e(re,{}),comp:e(ne,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"modificar",icon:e(z,{}),comp:e(qe,{url:"empresas-instituciones"})}];function We(){const o=localStorage.getItem("jwt");return p.exports.useEffect(()=>{o&&(be.defaults.headers.common.jwt=o)},[]),e(I,{children:f(Be,{children:[e(oe,{linear:ee.green,color:"#ffffff"}),e(te,{children:e(se,{name:"Empresa-inst...",options:$,children:e(ie,{options:$})})})]})})}const Be=C.div`
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
`;export{We as default};

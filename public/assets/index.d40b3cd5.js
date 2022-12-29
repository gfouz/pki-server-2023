var N=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var E=(r,o,t)=>o in r?N(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,w=(r,o)=>{for(var t in o||(o={}))O.call(o,t)&&E(r,t,o[t]);if(L)for(var t of L(o))Q.call(o,t)&&E(r,t,o[t]);return r},I=(r,o)=>T(r,V(o));import{a as e,F as x,s as A,r as l,j as g,a1 as W,ai as R,aj as $,am as J}from"./index.f52781a9.js";import{t as K,D as X}from"./Dashboard.fd18947c.js";import{C as Y}from"./Toast.0ae85c90.js";import{C as Z,F as ee}from"./Card.ee8d3258.js";import{G as te,a as re}from"./GetByName.cc5377d5.js";import{u as F,a as D,F as oe,S as G}from"./SubmitButton.96350b2a.js";import{u as y,S as k}from"./StatusHandler.ec046620.js";import{u as M,c as se,s as ie}from"./store.e96f2609.js";import{S as ne}from"./chakra-ui-select.esm.a9f625b2.js";import{a as ae,i as H,d as ce,e as le,b as ue}from"./constants.f2e04d14.js";import{T as U}from"./TextInput.3f5f054c.js";import{S}from"./StyledLabel.4d380b9c.js";import{b as de,A as me,E as P,S as pe,a as fe}from"./SearchPlus.35f7143c.js";import{C as he}from"./CodeBranch.e409172e.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./ErrorWarning.4750ca61.js";import"./chakra-ui-checkbox.esm.77685af8.js";function j({list:r,label:o,required:t,onChange:u,register:i,setId:d}){return e(x,{children:e(ne,I(w({},i(o,{required:t,onChange:c=>{d&&d(c.target.value)}})),{placeholder:"Seleccione provincia",size:"sm",variant:"flushed",children:r&&r.map((c,p)=>e("option",{value:c.id,children:c.name},p))}))})}const ge="http://localhost:4000",v=ae.create({baseURL:ge,withCredentials:!1});v.defaults.headers.common["Content-Type"]="application/json";async function z(r){try{return(await v.get(r)).data}catch(o){return o}}async function be(r,o){try{return(await v.get(`/${r}/${o}`)).data}catch(t){return t.message}}async function Se(r,o,t){try{return(await v.put(`/${o}/${t}`,r)).data}catch(u){return u.message}}function ye(r){var B;const o=M(se),{stack:t}=o,u=M(ie),{data:i}=y("provincias-all",()=>z("/provincias"));l.exports.useState("");const[d,c]=l.exports.useState(""),[p,b]=l.exports.useState(Boolean(t.enabled)),{register:s,handleSubmit:m,formState:{errors:f}}=F(),a=D(h=>Se(h,r.url,t.id),{retry:2}),n=(B=a==null?void 0:a.data)==null?void 0:B.message,C=i&&(i==null?void 0:i.result),q=C==null?void 0:C.find(h=>h.id==t.ProvinciaId);return l.exports.useEffect(()=>{n&&c(n),n==="updated"&&u.setOption("mostrar")},[n]),e(x,{children:e("form",{onSubmit:m(async h=>{a.mutateAsync(h)}),children:g(xe,{children:[e(S,{children:"Nombre de Municipio"}),e(U,{info:H.name,required:!0,label:"name",errors:f,register:s,defaultValue:t.name}),e(S,{m:"1em 0 0 0",children:"Provincia a que pertenece"}),g(S,{color:"#222222",children:["Dato actual: (",e("span",{style:{color:"#ff0000"},children:q==null?void 0:q.name}),")"]}),e(j,{list:i==null?void 0:i.result,label:"provinciaId",register:s,required:!0}),f.provinciaId&&e("span",{style:{color:"red",fontWeight:"bolder"},children:"Selecci\xF3n requerida!"}),e(oe,{htmlFor:"enabled",m:"0 0 -10px 0",color:"#333333",children:e(W,{m:"0.7em 0",size:"sm",color:p?"#e2023d":"#999999",children:p?"Habilitado":"Deshabilitado"})}),e(de,I(w({},s("enabled",{onChange:h=>{b(h.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(t.enabled)})),e(G,{buttonstate:a==null?void 0:a.isLoading}),d&&e(k,{message:d})]})})})}const xe=A.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
`;function ve(r){var a;const{url:o}=r,[t,u]=l.exports.useState(""),i="/provincias",{data:d}=y("council",()=>ce(i)),{register:c,handleSubmit:p,formState:{errors:b}}=F(),s=D(n=>le(o,n)),m=async n=>{console.log(n),s.mutateAsync(n)},f=(a=s==null?void 0:s.data)==null?void 0:a.message;return l.exports.useEffect(()=>{f&&u(f)},[f]),e(x,{children:g("form",{onSubmit:p(m),children:[e(R,{p:"1em",children:g($,{children:[e(S,{children:"Nombre de Municipio"}),e(U,{info:H.name,required:!0,label:"name",errors:b,register:c})]})}),e(R,{p:"1em",children:e($,{children:g(J,{align:"left",children:[e(S,{children:"Provincia a que pertenece"}),e(j,{list:d==null?void 0:d.result,label:"provinciaId",register:c,required:!0}),b.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})})}),e(G,{buttonstate:s==null?void 0:s.isLoading}),t&&e(k,{message:t})]})})}function Ce(){const[r,o]=l.exports.useState(""),[t,u]=l.exports.useState(""),{register:i,handleSubmit:d,formState:{errors:c}}=F(),p="provincias",b="municipios/provincia",{data:s}=y("provincias",()=>z(p)),{data:m,isLoading:f,refetch:a}=y("mun-by-prov",()=>be(b,r)),n=m==null?void 0:m.message;return l.exports.useEffect(()=>{a()},[r]),l.exports.useEffect(()=>{n&&u(n)},[n]),g(qe,{children:[e(S,{upper:!0,m:"1em 0",center:!0,children:"Municipios por Provincias"}),e(j,{register:i,list:s==null?void 0:s.result,label:"provinciaId",required:!0,setId:o}),c.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"}),e(me,{data:m==null?void 0:m.result}),t&&e(k,{message:t})]})}const qe=A.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
`,_=[{option:"crear",icon:e(P,{}),comp:e(ve,{url:"municipios"})},{option:"mostrar",icon:e(pe,{}),comp:e(te,{url:"municipios"})},{option:"buscar",icon:e(fe,{}),comp:e(re,{allnames:"municipios"})},{option:"por provincia",icon:e(he,{}),comp:e(Ce,{})},{option:"modificar",icon:e(P,{}),comp:e(ye,{url:"municipios"})}];function Te(){const r=localStorage.getItem("jwt");return l.exports.useEffect(()=>{r&&(ue.defaults.headers.common.jwt=r)},[]),e(x,{children:g(we,{children:[e(Y,{linear:K.green,color:"#ffffff"}),e(X,{children:e(Z,{name:"Municipios",options:_,children:e(ee,{options:_})})})]})})}const we=A.div`
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

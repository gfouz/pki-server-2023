var M=Object.defineProperty,N=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var A=(r,o,t)=>o in r?M(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,v=(r,o)=>{for(var t in o||(o={}))K.call(o,t)&&A(r,t,o[t]);if(C)for(var t of C(o))U.call(o,t)&&A(r,t,o[t]);return r},F=(r,o)=>N(r,$(o));import{j as e,F as x,r as h,a as l,am as p,s as V}from"./index.e9e99ba7.js";import{t as H}from"./constants.c1eecf01.js";import{C as Q}from"./Toast.e4de0c17.js";import{S as E,D as J}from"./SubmitButton.2fd5e6eb.js";import{C as W,F as X}from"./Card.7290142e.js";import{R as Y,G as Z}from"./Rocket.c6cdf64d.js";import{G as ee}from"./Getter.c2d4cc05.js";import{u as I,a as L}from"./index.esm.bdaf8ba0.js";import{u as R,S as G}from"./StatusHandler.420984fb.js";import{u as y,c as B,s as _}from"./store.d9601167.js";import{a as te,S as f,i as P,b as re}from"./StyledLabel.e15bdfe8.js";import{T}from"./TextInput.00583772.js";import{S as oe}from"./chakra-ui-select.esm.f5c0e0bb.js";import{b as ae,E as O,S as se,a as ne,G as ie}from"./SearchPlus.c7e6ddc6.js";import"./chakra-ui-button.esm.d8ba8687.js";import"./ErrorWarning.55d4a20f.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";const ce="http://localhost:4000",q=te.create({baseURL:ce,withCredentials:!1});q.defaults.headers.common["Content-Type"]="application/json";async function z(r){try{return(await q.get(r)).data}catch(o){return o}}async function le(r,o,t){try{return(await q.put(`/${o}/${t}`,r)).data}catch(a){return a.message}}async function me(r,o){try{const t=await q.post(r,o),{data:a}=t;return a}catch(t){return t==null?void 0:t.message}}function D({list:r,label:o,required:t,onChange:a,register:m,setId:i}){return e(x,{children:e(oe,F(v({},m(o,{required:t,onChange:s=>{i&&i(s.target.value)}})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:r&&r.map((s,b)=>e("option",{value:s.id,children:s.name},b))}))})}function ue(r){var k;const o=y(B),{stack:t}=o,a=y(_),m="/municipios",{data:i}=R("councils-update",()=>z(m));h.exports.useState("");const[s,b]=h.exports.useState(""),{register:g,handleSubmit:n,formState:{errors:u}}=I(),c=L(w=>le(w,r.url,t.id),{retry:2}),d=(k=c==null?void 0:c.data)==null?void 0:k.message;return h.exports.useEffect(()=>{d&&b(d),d==="updated"&&a.setOption("mostrar")},[d]),e(x,{children:l("form",{onSubmit:n(async w=>{c.mutateAsync(w)}),children:[e(p,{m:"1em 0",align:"left",children:e(f,{color:"#009966",capit:!0,children:t.name})}),l(p,{align:"left",children:[e(f,{children:"Nombre de Organismo"}),e(T,{info:P.name,required:!0,label:"name",errors:u,register:g,defaultValue:t.name})]}),l(p,{align:"left",children:[e(f,{children:"Municipio a que pertenece"}),e(D,{list:i==null?void 0:i.result,label:"municipioId",register:g,required:!0}),u.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]}),l(p,{align:"left",children:[e(f,{children:"Deshabilitar o habilitar"}),e(ae,F(v({},g("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(t.enabled)}))]}),e(E,{buttonstate:c==null?void 0:c.isLoading}),s&&e(G,{message:s})]})})}function de(r){var d;y(B);const o=y(_),t="/municipios",{data:a}=R("councils",()=>z(t));h.exports.useState("");const[m,i]=h.exports.useState(""),{register:s,handleSubmit:b,formState:{errors:g}}=I(),n=L(S=>me(r.url,S)),u=(d=n==null?void 0:n.data)==null?void 0:d.message;return h.exports.useEffect(()=>{u&&i(u),u==="created"&&o.setOption("mostrar")},[u]),e(x,{children:l("form",{onSubmit:b(async S=>{n.mutateAsync(S),console.log(S)}),children:[e(p,{m:"1em 0",align:"left",children:e(f,{color:"#009966",capit:!0,children:"A\xF1adir organismo."})}),l(p,{align:"left",children:[e(f,{children:"Nombre de Organismo"}),e(T,{info:P.name,required:!0,label:"name",errors:g,register:s})]}),l(p,{align:"left",children:[e(f,{children:"Municipio a que pertenece"}),e(D,{list:a==null?void 0:a.result,label:"municipioId",register:s,required:!0}),g.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]}),e(E,{buttonstate:n==null?void 0:n.isLoading}),m&&e(G,{message:m})]})})}const j=[{option:"a\xF1adir",icon:e(O,{}),comp:e(de,{url:"organismos"})},{option:"mostrar",icon:e(se,{}),comp:e(ee,{url:"organismos",queryKey:"all-organism"})},{option:"buscar",icon:e(ne,{}),comp:e(ie,{allnames:"organismos"})},{option:"habilitados",icon:e(Y,{}),comp:e(Z,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"actualizar",icon:e(O,{}),comp:e(ue,{url:"organismos"})}];function Le(){const r=localStorage.getItem("jwt");return h.exports.useEffect(()=>{r&&(re.defaults.headers.common.jwt=r)},[]),e(x,{children:l(pe,{children:[e(Q,{linear:H.green,color:"#ffffff"}),e(J,{children:e(W,{name:"Organismos",options:j,children:e(X,{options:j})})})]})})}const pe=V.div`
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
`;export{Le as default};

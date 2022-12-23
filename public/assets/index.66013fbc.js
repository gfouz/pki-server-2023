var V=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var $=(o,r,t)=>r in o?V(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,v=(o,r)=>{for(var t in r||(r={}))X.call(r,t)&&$(o,t,r[t]);if(_)for(var t of _(r))Y.call(r,t)&&$(o,t,r[t]);return o},L=(o,r)=>W(o,J(r));import{j as e,F as w,r as d,a,a2 as g,a3 as y,s as G,H as Z,a1 as D}from"./index.5758997f.js";import{t as ee}from"./constants.c1eecf01.js";import{C as te}from"./Toast.b6137537.js";import{S as N,D as se}from"./SubmitButton.88641c71.js";import{C as oe,F as re}from"./Card.4ae134fc.js";import{R as ie,G as ne}from"./Rocket.cee1406e.js";import{G as ae}from"./Getter.a26d04f7.js";import{u as z,a as O,F as ce}from"./index.esm.c821f254.js";import{u as S,S as T}from"./StatusHandler.62057e2e.js";import{u as j,c as le,s as M}from"./store.93784534.js";import{S as me}from"./chakra-ui-select.esm.a2f79340.js";import{a as ue,d as C,p as de,S as B,g as H,e as pe,b as fe}from"./StyledLabel.e157ff4c.js";import{T as P}from"./TextInput.0039b7b4.js";import{E as k}from"./ErrorWarning.eba98df7.js";import{b as be,A as he,E as U,S as ge,a as Se,G as xe}from"./SearchPlus.225589f0.js";import{S as ye}from"./SubmitButton.a81cf260.js";import{C as qe}from"./CodeBranch.20a69124.js";import"./chakra-ui-button.esm.904d835a.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";function E(o){const{label:r,list:t,register:c,required:l}=o;return e(w,{children:e(me,L(v({m:"2em 0",size:"xm",bg:"#999999",color:"#000000",placeholder:"Select option"},c(r,{required:l})),{children:Array.isArray(t)&&t.map((f,n)=>e("option",{value:f.id,children:f.name},n))}))})}const Ee="http://localhost:4000",Q=ue.create({baseURL:Ee,withCredentials:!1});Q.defaults.headers.common["Content-Type"]="application/json";const q={name:"se permiten nombres compuestos sin n\xFAmeros",id:"solo numeros requeridos",select:"esta selecci\xF3n es requerida"};async function Ie(o,r){try{return(await Q.get(`/empresas-instituciones/municipio/${o}/organismo/${r}`)).data}catch(t){return t.message}}function Ae(o){var u;const r=j(le),t=j(M),{stack:c}=r,l="/municipios",f="/organismos",{data:n}=S("municipios",()=>C(l)),{data:b}=S("organismos",()=>C(f)),[I,A]=d.exports.useState(""),{register:m,handleSubmit:p,formState:{errors:i}}=z(),s=O(x=>de(x,o.url,c.id),{retry:2}),h=(u=s==null?void 0:s.data)==null?void 0:u.message;return d.exports.useEffect(()=>{h&&A(h),h==="updated"&&t.setOption("mostrar")},[h]),e(w,{children:a("form",{onSubmit:p(async x=>{s.mutateAsync(x)}),children:[e(g,{m:"0 1em",children:a(y,{children:[e(B,{color:"#009966",children:"Actualice nombre"}),e(P,{info:q.name,required:!0,label:"name",errors:i,register:m,defaultValue:c.name})]})}),e(g,{m:"0 1em",children:a(y,{children:[e(B,{color:"#009966",m:"1em 0 0 0",children:"Seleccione organismo"}),e(E,{list:b==null?void 0:b.result,label:"organismoId",register:m,required:!0}),e(k,{label:"organismoId",errors:i,info:q.select})]})}),e(g,{m:"0 1em",children:a(y,{children:[e(B,{color:"#009966",children:"Seleccione municipio"}),e(E,{list:n==null?void 0:n.result,label:"municipioId",register:m,required:!0}),e(k,{label:"municipioId",errors:i,info:q.select})]})}),a(g,{m:"2em 0",children:[e(ce,{htmlFor:"enabled",m:"0 0 0 2em",color:"#ab8ffe",children:"Deshabilitar o habilitar"}),e(be,L(v({},m("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(c.enabled)}))]}),e(N,{buttonstate:s==null?void 0:s.isLoading}),I&&e(T,{message:I})]})})}function Fe(o){var F;const r=j(M),[t,c]=d.exports.useState(""),{register:l,handleSubmit:f,formState:{errors:n}}=z(),b="/empresas-instituciones",I="/organismos/enabled/true",A="/municipios/enabled/true",{data:m}=S("org-all",()=>H(I)),{data:p}=S("users-act",()=>H(A)),i=O(u=>pe(b,u)),s=(F=i==null?void 0:i.data)==null?void 0:F.message;return d.exports.useEffect(()=>{s&&c(s),s==="updated"&&r.setOption("mostrar")},[s]),e(w,{children:a("form",{onSubmit:f(async u=>{i.mutateAsync(u)}),children:[e(g,{p:"1em",children:a(y,{children:[e(R,{children:"Nombre de empresa o instit..."}),e(P,{label:"name",register:l,errors:n,required:!0,info:q.name})]})}),e(g,{p:"1em",children:a(y,{children:[e(R,{children:"seleccione organismo"}),e(E,{list:m==null?void 0:m.result,label:"organismoId",register:l,required:!0}),e(k,{label:"organismoId",errors:n,info:q.select})]})}),e(g,{p:"1em",children:a(y,{children:[e(R,{children:"seleccione municipio"}),e(E,{list:p==null?void 0:p.result,label:"municipioId",register:l,required:!0}),e(k,{label:"municipioId",errors:n,info:q.select})]})}),e(N,{buttonstate:i==null?void 0:i.isLoading}),t&&e(T,{message:t})]})})}const R=G.h4`
  color: #888888;
  font-weight: bolder;
`;function we(){const[o,r]=d.exports.useState(""),[t,c]=d.exports.useState(""),[l,f]=d.exports.useState(""),{register:n,handleSubmit:b,formState:{errors:I}}=z(),A="municipios",m="organismos",{data:p}=S("all-mun",()=>C(A)),{data:i}=S("all-org",()=>C(m)),{data:s,refetch:h}=S("some-emp",()=>Ie(t,l)),F=async x=>{console.log(s),c(x.id),f(x.id2)};d.exports.useEffect(()=>{h()},[t,l]);const u=s==null?void 0:s.message;return d.exports.useEffect(()=>{u&&r(u)},[u]),e(w,{children:e("form",{onSubmit:b(F),children:a(Z,{direction:"column",p:"0.5em",children:[e(D,{size:"sm",m:"0.5em 0",children:"Empresa e instituci\xF3n por municipio."}),e(E,{label:"id",list:p==null?void 0:p.result,register:n,required:!0}),e(D,{size:"sm",m:"0.5em 0",children:"Empresa o instituci\xF3n por organismo."}),e(E,{label:"id2",list:i==null?void 0:i.result,register:n,required:!0}),e(ye,{buttonstate:s==null?void 0:s.isLoading}),e(he,{data:s==null?void 0:s.result}),o&&e(T,{message:o})]})})})}G.div`
  margin: 2em 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid #ab8ffe;
  border-radius: 10px;
  color: #222222;
  background-color: #ab8ffe;
`;const K=[{option:"a\xF1adir",icon:e(U,{}),comp:e(Fe,{url:"empresas-instituciones"})},{option:"mostrar",icon:e(ge,{}),comp:e(ae,{url:"empresas-instituciones",queryKey:"emp-inst-all"})},{option:"buscar",icon:e(Se,{}),comp:e(xe,{allnames:"empresas-instituciones"})},{option:"habilitados",icon:e(ie,{}),comp:e(ne,{queryKey:"emp-inst-act",url:"empresas-instituciones/enabled/true"})},{option:"actualizar",icon:e(U,{}),comp:e(Ae,{url:"empresas-instituciones"})},{option:"asociado",icon:e(qe,{}),comp:e(we,{})}];function Ve(){const o=localStorage.getItem("jwt");return d.exports.useEffect(()=>{o&&(fe.defaults.headers.common.jwt=o)},[]),e(w,{children:a(Ce,{children:[e(te,{linear:ee.green,color:"#ffffff"}),e(se,{children:e(oe,{name:"Empresa-inst...",options:K,children:e(re,{options:K})})})]})})}const Ce=G.div`
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

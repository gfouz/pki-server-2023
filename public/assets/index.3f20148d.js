var se=Object.defineProperty,ie=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var P=(t,r,n)=>r in t?se(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,I=(t,r)=>{for(var n in r||(r={}))ce.call(r,n)&&P(t,n,r[n]);if(O)for(var n of O(r))de.call(r,n)&&P(t,n,r[n]);return t},N=(t,r)=>ie(t,le(r));import{j as l,F as x,a as e,s as U,r as f,S as i}from"./index.9a3ab491.js";import{t as ue,D as me}from"./Dashboard.b4fb76d1.js";import{C as pe}from"./Toast.cdc41de7.js";import{C as he,F as fe}from"./Card.db03a57e.js";import{R as be,G as ge}from"./Rocket.503d0db3.js";import{G as xe,a as Se}from"./GetByName.ed192aab.js";import{u as $,s as X,c as ye}from"./store.a90ba17a.js";import{a as G,S as V,u as ee,c as qe,H as we,e as y,C as q}from"./SubmitButton.1ee02988.js";import{u as j,S as re}from"./StatusHandler.4ef7e4a9.js";import{a as te,i as h,b as Fe}from"./constants.d0510e6a.js";import{E,I as R}from"./ErrorWarning.3d53457e.js";import{S as Ie}from"./chakra-ui-select.esm.5205b0a4.js";import{T as z}from"./chakra-ui-tooltip.esm.4067af7f.js";import{b as Ce,E as Q,S as ve,a as Ae}from"./SearchPlus.0e08da50.js";import{G as Ee}from"./GetByParams.0c3f901a.js";import{C as ze}from"./CodeBranch.c380e8d5.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const Le="http://localhost:4000",H=te.create({baseURL:Le,withCredentials:!1});async function _e(t,r){try{const n=await H.post(t,r),{data:s}=n;return s}catch(n){return n==null?void 0:n.message}}async function Ue(t,r,n){try{return(await H.put(`/${r}/${n}`,t)).data}catch(s){return s.message}}async function k(t){try{return(await H.get(t)).data}catch(r){return r.message}}const Re=async(t,r)=>{const n="http://localhost:4000/representantes";try{const s=await te.post(n,t,{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{r(o)}).catch(o=>{r(o)})}catch(s){console.log(s)}};function D(t){const{list:r,register:n,label:s,required:o,info:a,errors:c}=t;return l(x,{children:[e(Ie,N(I({},n(s,{required:o})),{placeholder:"Seleccione opci\xF3n",size:"xm",color:"#000000",children:r&&r.map((b,u)=>e("option",{value:b.id,children:b.email&&b.email||b.name&&b.name},u))})),e(E,{label:s,errors:c,info:a})]})}const Y=({label:t,register:r,required:n,errors:s,defaultValue:o,info:a})=>l(x,{children:[e(z,{label:a,hasArrow:!0,arrowSize:15,children:e(R,I({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:o},r(t,{pattern:/^\d+$/,required:n,maxLength:3,minLength:3})))}),e(E,{label:t,errors:s,info:a})]}),A=({label:t,register:r,required:n,errors:s,defaultValue:o,info:a})=>l(x,{children:[e(z,{label:a,hasArrow:!0,arrowSize:15,children:e(R,I({size:"sm",type:"text",cursor:"pointer",variant:"flushed",defaultValue:o},r(t,{pattern:/^[a-zA-Z\u00C0-\u017F\s]+$/,required:n})))}),e(E,{label:t,errors:s,info:a})]}),ne=({label:t,register:r,required:n,errors:s,defaultValue:o,info:a})=>l(x,{children:[e(z,{label:a,hasArrow:!0,arrowSize:15,children:e(R,I({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:o},r(t,{required:n,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(E,{label:t,errors:s,info:a})]});let v=new Date().getFullYear();const Te=new Date().getMonth()+1;v=parseInt(v.toString().substring(2,4));const ae=({register:t,errors:r,defaultValue:n,info:s,setFilename:o})=>l(x,{children:[e(z,{label:"campo requerido de 11 d\xEDgitos",hasArrow:!0,arrowSize:15,children:e(R,I({size:"sm",type:"number",cursor:"pointer",variant:"flushed",defaultValue:n},t("ci",{required:!0,onChange:a=>o(a.target.value),validate:{isOlder:a=>v-parseInt(a.substring(0,2))==18&&Te>parseInt(a.substring(2,4))||v>parseInt(a.substring(0,2))&&v-parseInt(a.substring(0,2))>18||v<parseInt(a.substring(0,2))&&parseInt(a.substring(0,2))<99,min_month:a=>parseInt(a.substring(2,4))>=1,max_month:a=>parseInt(a.substring(2,4))<=12,min_day:a=>parseInt(a.substring(4,6))>=1,max_day:a=>parseInt(a.substring(4,6))<=31},minLength:11,maxLength:11})))}),e(E,{label:"ci",errors:r,info:s})]}),oe=({filename:t})=>{var p;const r=$(X),[n,s]=f.exports.useState(""),[o,a]=f.exports.useState(""),c=G(m=>Re(m,a)),b={color:"red",fontWeight:"bolder",padding:"1em",margin:"0 0 2em 0",borderRadius:"10px",boxShadow:"1px 1px 10px #444444"};function u(m){m.preventDefault();const d=new FormData;d.append("file",n,t),c.mutateAsync(d)}const L=m=>{var w;const d=(w=m==null?void 0:m.target)==null?void 0:w.files[0];s(d)};return f.exports.useEffect(()=>{var m;((m=o==null?void 0:o.data)==null?void 0:m.message)==="documento-guardado"&&r.setOption("mostrar")},[o]),e("form",{onSubmit:u,children:e(je,{children:l(ke,{children:[e(i,{m:"2em 0",upper:!0,children:"Adjunte el documento del nombramiento"}),e("input",{id:"file-type",type:"file",style:b,onChange:m=>L(m)}),e(V,{buttonstate:c==null?void 0:c.isLoading}),e(i,{m:"1em",color:"green",children:(p=o==null?void 0:o.data)==null?void 0:p.message}),e(i,{m:"1em",color:"var(--rose-red)",children:o==null?void 0:o.message})]})})})},je=U.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
`,ke=U.div`
  min-width: 320px;
  min-height: 320px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  }
`;U.label.attrs({htmlFor:"file-type"})`
  display: block;
  position: relative;
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background: linear-gradient(40deg, #ff6ec4, #7873f5);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease-out;
`;function De(){var M,W,K;const t=$(ye),{stack:r}=t;$(X);const[n,s]=f.exports.useState(""),[o,a]=f.exports.useState(Boolean(r.enabled)),[c,b]=f.exports.useState(String(r.ci)),[u,L]=f.exports.useState(!1),{register:p,handleSubmit:m,formState:{errors:d}}=ee(),w="/users/enabled/true",S="/empresas-instituciones/",B="representantes",{data:F}=j("users-enabled",()=>k(w)),{data:C}=j("companies",()=>k(S)),g=G(_=>Ue(_,B,r.id)),T=(M=g==null?void 0:g.data)==null?void 0:M.message;return f.exports.useEffect(()=>{T&&s(T),T==="updated"&&L(!0)},[T]),e(x,{children:e(Be,{children:u===!1?l("form",{onSubmit:m(async _=>{g.mutateAsync(_)}),children:[e(i,{color:"#000000",center:!0,m:"0 0 1.5em 0",children:"Modificar representante:"}),e(i,{color:"#222222",children:"Seleccione empresa o instituci\xF3n"}),l(i,{children:["Empresa actual: ("," ",e("b",{style:{color:"var(--rose-red)"},children:(W=r==null?void 0:r.EmpresasInstitucione)==null?void 0:W.name}),")"]}),e(D,{info:"Selecci\xF3n requerida!",list:C==null?void 0:C.result,label:"eiId",register:p,required:!0,errors:d}),e(i,{children:"Nro de Carnet del representante"}),c,e(ae,{required:!0,info:h.ci,errors:d,register:p,defaultValue:r.ci,setFilename:b}),e(i,{children:"Tomo del representante"}),e(Y,{info:h.tome,required:!0,label:"tome",errors:d,register:p,defaultValue:r.tome}),e(i,{children:"Folio del representante"}),e(Y,{info:h.folio,required:!0,label:"folio",register:p,errors:d,defaultValue:r.folio}),e(i,{children:"Nombre y apellidos de representante"}),e(A,{info:h.name,label:"name",register:p,errors:d,required:!0,defaultValue:r.name}),e(i,{children:"Tel\xE9fono del representante"}),e(ne,{info:h.tel,label:"phone",register:p,errors:d,required:!0,defaultValue:r.phone}),e(i,{children:"Nombre y apellidos de quien lo nombra"}),e(A,{info:h.name,label:"namer",register:p,errors:d,required:!0,defaultValue:r.namer}),e(i,{children:"Cargo del que lo nombra"}),e(A,{info:h.occupancy,label:"namerCharge",register:p,errors:d,required:!0,defaultValue:r.namerCharge}),e(i,{m:"1em 0 0 0",color:"#222222",children:"Seleccione usuario al que se vincula"}),l(i,{children:["Usuario actual: ( ",e("b",{style:{color:"var(--rose-red)"},children:(K=r==null?void 0:r.User)==null?void 0:K.email}),")"]}),e(D,{info:"Selecci\xF3n requerida!",list:F==null?void 0:F.result,label:"userId",register:p,required:!0,errors:d}),e(qe,{htmlFor:"enabled",m:"1em 0 0.3em 0",color:"#333333",children:e(we,{size:"sm",color:o?"#e2023d":"#999999",children:o?"Habilitado":"Deshabilitado"})}),e(Ce,N(I({},p("enabled",{onChange:_=>{a(_.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(r.enabled)})),e(V,{buttonstate:g==null?void 0:g.isLoading}),n&&e(re,{message:n})]}):e(oe,{filename:c})})})}const Be=U.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    min-width: 500px;
  }
`;function Ne({message:t,children:r}){return e(x,{children:e(z,{label:t,hasArrow:!0,arrowSize:15,children:r})})}const Z=({label:t,register:r,required:n,errors:s,defaultValue:o,info:a})=>l(x,{children:[e(z,{label:a,hasArrow:!0,arrowSize:15,children:e(R,I({size:"sm",type:"number",cursor:"pointer",variant:"flushed",defaultValue:o},r(t,{pattern:/^\d+$/,required:n,minLength:3,maxLength:3})))}),e(E,{label:t,errors:s,info:a})]});function $e(){var C;const[t,r]=f.exports.useState(""),[n,s]=f.exports.useState(""),[o,a]=f.exports.useState(!1),{register:c,handleSubmit:b,formState:{errors:u}}=ee(),L="/users/enabled/true",p="/empresas-instituciones/",m="/representantes",{data:d}=j("users-enabled",()=>k(L)),{data:w}=j("companies",()=>k(p)),S=G(g=>_e(m,g)),B=async g=>{S.mutateAsync(g)},F=(C=S==null?void 0:S.data)==null?void 0:C.message;return f.exports.useEffect(()=>{F&&r(F),F==="creado"&&a(!0)},[F]),e(x,{children:o===!1?l("form",{onSubmit:b(B),children:[e(i,{center:!0,color:"#222222",children:"Crear representante"}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Seleccione empresa o instituci\xF3n"}),e(D,{list:w==null?void 0:w.result,label:"eiId",register:c,required:!0,info:"Selecci\xF3n requerida",errors:u}),u.eiId&&e("span",{style:{color:"#c40550"},children:"campo requerido"})]})}),e(y,{p:"1em",children:l(q,{children:[n,e(i,{children:"Nro de Carnet del representante"}),e(ae,{register:c,errors:u,required:!0,info:h.ci,setFilename:s})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Tomo del representante"}),e(Z,{label:"tome",register:c,errors:u,required:!0,info:h.tome})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Folio del representante"}),e(Z,{label:"folio",register:c,errors:u,required:!0,info:h.folio})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Nombre y apellidos de representante"}),e(Ne,{message:h.name,children:e(A,{label:"name",register:c,errors:u,required:!0,info:h.name})})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Tel\xE9fono del representante"}),e(ne,{label:"phone",register:c,errors:u,required:!0,info:h.tel})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Nombre y apellidos de quien lo nombra"}),e(A,{label:"namer",register:c,errors:u,required:!0,info:h.tutor})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Cargo del que lo nombra"}),e(A,{label:"namerCharge",register:c,errors:u,required:!0,info:h.occupancy})]})}),e(y,{p:"1em",children:l(q,{children:[e(i,{children:"Seleccione usuario al que se vincula"}),e(D,{list:d==null?void 0:d.result,label:"userId",register:c,required:!0,info:"Selecci\xF3n requerida",errors:u}),u.userId&&e("span",{style:{color:"#c40550"},children:"campo requerido"})]})}),e(V,{buttonstate:S==null?void 0:S.isLoading}),e(re,{message:t})]}):e(oe,{filename:n})})}const J=[{option:"crear",icon:e(Q,{}),comp:e($e,{})},{option:"mostrar",icon:e(ve,{}),comp:e(xe,{url:"representantes"})},{option:"buscar",icon:e(Ae,{}),comp:e(Se,{allnames:"representantes"})},{option:"asociado",icon:e(ze,{}),comp:e(Ee,{path:"representantes/empresa-institucion",attached:"empresas-instituciones",queryKey:"func-reg"})},{option:"habilitados",icon:e(be,{}),comp:e(ge,{queryKey:"agent-enabled",url:"representantes/enabled/true"})},{option:"modificar",icon:e(Q,{}),comp:e(De,{})}];function lr(){const t=localStorage.getItem("jwt");return f.exports.useEffect(()=>{t&&(Fe.defaults.headers.common.jwt=t)},[]),e(x,{children:l(Ge,{children:[e(pe,{linear:ue.green,color:"#ffffff"}),e(me,{children:e(he,{name:"representante",options:J,children:e(fe,{options:J})})})]})})}const Ge=U.div`
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
`;export{lr as default};

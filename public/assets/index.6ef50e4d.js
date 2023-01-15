var $=Object.defineProperty,z=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var j=(s,o,e)=>o in s?$(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,A=(s,o)=>{for(var e in o||(o={}))N.call(o,e)&&j(s,e,o[e]);if(C)for(var e of C(o))U.call(o,e)&&j(s,e,o[e]);return s},F=(s,o)=>z(s,D(o));import{a as t,F as b,s as S,r as i,j as v,S as h}from"./index.9a3ab491.js";import{t as M,D as K}from"./Dashboard.b4fb76d1.js";import{C as Q}from"./Toast.cdc41de7.js";import{C as V,F as J}from"./Card.db03a57e.js";import{R as W,G as X}from"./Rocket.503d0db3.js";import{G as Y,a as Z}from"./GetByName.ed192aab.js";import{u as E,a as R,c as tt,H as et,S as q}from"./SubmitButton.1ee02988.js";import{u as B,S as G}from"./StatusHandler.4ef7e4a9.js";import{u as g,c as H,s as P}from"./store.a90ba17a.js";import{a as ot,i as _,b as st}from"./constants.d0510e6a.js";import{T as I}from"./TextInput.6529562e.js";import{b as at,E as L,S as rt,a as nt}from"./SearchPlus.0e08da50.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./ErrorWarning.3d53457e.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const it=({color:s,m:o})=>t(b,{children:t("div",{style:{height:"1px",border:`1px solid ${s||"#222222"}`,margin:o}})}),ct="http://localhost:4000",x=ot.create({baseURL:ct,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function T(s){try{return(await x.get(s)).data}catch(o){return o}}async function lt(s,o,e){try{return(await x.put(`/${o}/${e}`,s)).data}catch(r){return r.message}}async function mt(s,o){try{const e=await x.post(s,o),{data:r}=e;return r}catch(e){return e==null?void 0:e.message}}function dt(s){var k;const o=g(H),{stack:e}=o,r=g(P),m="/municipios";B("councils-update",()=>T(m)),i.exports.useState("");const[d,y]=i.exports.useState(""),[u,n]=i.exports.useState(Boolean(e.enabled)),{register:c,handleSubmit:w,formState:{errors:p}}=E(),a=R(l=>lt(l,s.url,e.id),{retry:2}),f=(k=a==null?void 0:a.data)==null?void 0:k.message;return i.exports.useEffect(()=>{f&&y(f),f==="updated"&&r.setOption("mostrar")},[f]),t(b,{children:t("form",{onSubmit:w(async l=>{a.mutateAsync(l)}),children:v(ut,{children:[t(h,{color:"#222222",children:"Modificar"}),t(it,{m:"0 0 1em 0",color:"#999999"}),t(h,{children:"Nombre de Organismo"}),t(I,{info:_.name,required:!0,label:"name",errors:p,register:c,defaultValue:e.name}),t(tt,{htmlFor:"enabled",m:"1em 0",color:"#333333",children:t(et,{size:"sm",color:u?"#e2023d":"#999999",children:u?"Habilitado":"Deshabilitado"})}),t(at,F(A({},c("enabled",{onChange:l=>{n(l.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(e.enabled)})),t(q,{buttonstate:a==null?void 0:a.isLoading}),d&&t(G,{message:d})]})})})}const ut=S.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
`;function pt(s){var p;g(H);const o=g(P),e="/municipios";B("councils",()=>T(e)),i.exports.useState("");const[r,m]=i.exports.useState(""),{register:d,handleSubmit:y,formState:{errors:u}}=E(),n=R(a=>mt(s.url,a)),c=(p=n==null?void 0:n.data)==null?void 0:p.message;return i.exports.useEffect(()=>{c&&m(c),c==="created"&&o.setOption("mostrar")},[c]),t(b,{children:t("form",{onSubmit:y(async a=>{n.mutateAsync(a),console.log(a)}),children:v(ft,{children:[t(h,{color:"#009966",capit:!0,children:"A\xF1adir organismo."}),t(h,{children:"Nombre de Organismo"}),t(I,{info:_.name,required:!0,label:"name",errors:u,register:d}),t(q,{buttonstate:n==null?void 0:n.isLoading}),r&&t(G,{message:r})]})})})}const ft=S.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
`,O=[{option:"crear",icon:t(L,{}),comp:t(pt,{url:"organismos"})},{option:"mostrar",icon:t(rt,{}),comp:t(Y,{url:"organismos"})},{option:"buscar",icon:t(nt,{}),comp:t(Z,{allnames:"organismos"})},{option:"habilitados",icon:t(W,{}),comp:t(X,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"modificar",icon:t(L,{}),comp:t(dt,{url:"organismos"})}];function Gt(){const s=localStorage.getItem("jwt");return i.exports.useEffect(()=>{s&&(st.defaults.headers.common.jwt=s)},[]),t(b,{children:v(ht,{children:[t(Q,{linear:M.green,color:"#ffffff"}),t(K,{children:t(V,{name:"Organismos",options:O,children:t(J,{options:O})})})]})})}const ht=S.div`
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
`;export{Gt as default};

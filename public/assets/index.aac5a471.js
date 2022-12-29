var $=Object.defineProperty,z=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var F=(s,o,e)=>o in s?$(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,j=(s,o)=>{for(var e in o||(o={}))N.call(o,e)&&F(s,e,o[e]);if(C)for(var e of C(o))U.call(o,e)&&F(s,e,o[e]);return s},A=(s,o)=>z(s,D(o));import{a as t,F as b,s as S,r as i,j as v,a1 as M}from"./index.f52781a9.js";import{t as K,D as Q}from"./Dashboard.fd18947c.js";import{C as V}from"./Toast.0ae85c90.js";import{C as J,F as W}from"./Card.ee8d3258.js";import{R as X,G as Y}from"./Rocket.5ccd8086.js";import{G as Z,a as tt}from"./GetByName.cc5377d5.js";import{u as E,a as R,F as et,S as q}from"./SubmitButton.96350b2a.js";import{u as B,S as G}from"./StatusHandler.ec046620.js";import{u as h,c as P,s as _}from"./store.e96f2609.js";import{a as ot,i as H,b as st}from"./constants.f2e04d14.js";import{T as I}from"./TextInput.3f5f054c.js";import{S as g}from"./StyledLabel.4d380b9c.js";import{b as at,E as L,S as rt,a as nt}from"./SearchPlus.35f7143c.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./chakra-ui-button.esm.19477a37.js";import"./ErrorWarning.4750ca61.js";import"./chakra-ui-checkbox.esm.77685af8.js";const it=({color:s,m:o})=>t(b,{children:t("div",{style:{height:"1px",border:`1px solid ${s||"#222222"}`,margin:o}})}),ct="http://localhost:4000",x=ot.create({baseURL:ct,withCredentials:!1});x.defaults.headers.common["Content-Type"]="application/json";async function T(s){try{return(await x.get(s)).data}catch(o){return o}}async function mt(s,o,e){try{return(await x.put(`/${o}/${e}`,s)).data}catch(r){return r.message}}async function lt(s,o){try{const e=await x.post(s,o),{data:r}=e;return r}catch(e){return e==null?void 0:e.message}}function dt(s){var k;const o=h(P),{stack:e}=o,r=h(_),l="/municipios";B("councils-update",()=>T(l)),i.exports.useState("");const[d,y]=i.exports.useState(""),[u,n]=i.exports.useState(Boolean(e.enabled)),{register:c,handleSubmit:w,formState:{errors:p}}=E(),a=R(m=>mt(m,s.url,e.id),{retry:2}),f=(k=a==null?void 0:a.data)==null?void 0:k.message;return i.exports.useEffect(()=>{f&&y(f),f==="updated"&&r.setOption("mostrar")},[f]),t(b,{children:t("form",{onSubmit:w(async m=>{a.mutateAsync(m)}),children:v(ut,{children:[t(g,{color:"#222222",children:"Modificar"}),t(it,{m:"0 0 1em 0",color:"#999999"}),t(g,{children:"Nombre de Organismo"}),t(I,{info:H.name,required:!0,label:"name",errors:p,register:c,defaultValue:e.name}),t(et,{htmlFor:"enabled",m:"1em 0",color:"#333333",children:t(M,{size:"sm",color:u?"#e2023d":"#999999",children:u?"Habilitado":"Deshabilitado"})}),t(at,A(j({},c("enabled",{onChange:m=>{n(m.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(e.enabled)})),t(q,{buttonstate:a==null?void 0:a.isLoading}),d&&t(G,{message:d})]})})})}const ut=S.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
`;function pt(s){var p;h(P);const o=h(_),e="/municipios";B("councils",()=>T(e)),i.exports.useState("");const[r,l]=i.exports.useState(""),{register:d,handleSubmit:y,formState:{errors:u}}=E(),n=R(a=>lt(s.url,a)),c=(p=n==null?void 0:n.data)==null?void 0:p.message;return i.exports.useEffect(()=>{c&&l(c),c==="created"&&o.setOption("mostrar")},[c]),t(b,{children:t("form",{onSubmit:y(async a=>{n.mutateAsync(a),console.log(a)}),children:v(ft,{children:[t(g,{color:"#009966",capit:!0,children:"A\xF1adir organismo."}),t(g,{children:"Nombre de Organismo"}),t(I,{info:H.name,required:!0,label:"name",errors:u,register:d}),t(q,{buttonstate:n==null?void 0:n.isLoading}),r&&t(G,{message:r})]})})})}const ft=S.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
`,O=[{option:"crear",icon:t(L,{}),comp:t(pt,{url:"organismos"})},{option:"mostrar",icon:t(rt,{}),comp:t(Z,{url:"organismos"})},{option:"buscar",icon:t(nt,{}),comp:t(tt,{allnames:"organismos"})},{option:"habilitados",icon:t(X,{}),comp:t(Y,{queryKey:"organismos-enabled",url:"organismos/enabled/true"})},{option:"modificar",icon:t(L,{}),comp:t(dt,{url:"organismos"})}];function Pt(){const s=localStorage.getItem("jwt");return i.exports.useEffect(()=>{s&&(st.defaults.headers.common.jwt=s)},[]),t(b,{children:v(ht,{children:[t(V,{linear:K.green,color:"#ffffff"}),t(Q,{children:t(J,{name:"Organismos",options:O,children:t(W,{options:O})})})]})})}const ht=S.div`
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
`;export{Pt as default};

var K=Object.defineProperty,O=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var G=(t,r,o)=>r in t?K(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,B=(t,r)=>{for(var o in r||(r={}))V.call(r,o)&&G(t,o,r[o]);if(R)for(var o of R(r))J.call(r,o)&&G(t,o,r[o]);return t},F=(t,r)=>O(t,Q(r));import{j as e,F as C,r as m,a as i,am as x,a2 as v,a3 as y,s as I}from"./index.5758997f.js";import{t as W}from"./constants.c1eecf01.js";import{C as X}from"./Toast.b6137537.js";import{S as j,D as Y}from"./SubmitButton.88641c71.js";import{C as Z,F as ee}from"./Card.4ae134fc.js";import{R as te,G as re}from"./Rocket.cee1406e.js";import{G as oe}from"./Getter.a26d04f7.js";import{u as A,a as z}from"./index.esm.c821f254.js";import{u as w,S as E}from"./StatusHandler.62057e2e.js";import{u as $,c as ie,s as ne}from"./store.93784534.js";import{S as se}from"./chakra-ui-select.esm.a2f79340.js";import{a as ae,S as g,i as T,d as D,e as ce,b as le}from"./StyledLabel.e157ff4c.js";import{T as N}from"./TextInput.0039b7b4.js";import{b as ue,A as U,E as M,S as de,a as me,G as pe}from"./SearchPlus.225589f0.js";import{C as P}from"./CodeBranch.20a69124.js";import"./chakra-ui-button.esm.904d835a.js";import"./ErrorWarning.eba98df7.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";function L({list:t,label:r,required:o,onChange:u,register:d,setId:s}){return e(C,{children:e(se,F(B({},d(r,{required:o,onChange:a=>{s&&s(a.target.value)}})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:t&&t.map((a,h)=>e("option",{value:a.id,children:a.name},h))}))})}const fe="http://localhost:4000",k=ae.create({baseURL:fe,withCredentials:!1});k.defaults.headers.common["Content-Type"]="application/json";async function H(t){try{return(await k.get(t)).data}catch(r){return r}}async function he(t,r){try{return(await k.get(`/${t}/${r}`)).data}catch(o){return o.message}}async function be(t,r,o){try{return(await k.put(`/${r}/${o}`,t)).data}catch(u){return u.message}}function ge(t){var S;const r=$(ie),{stack:o}=r,u=$(ne),d="/provincias",{data:s}=w("council",()=>H(d));m.exports.useState("");const[a,h]=m.exports.useState(""),{register:f,handleSubmit:c,formState:{errors:n}}=A(),l=z(q=>be(q,t.url,o.id),{retry:2}),p=(S=l==null?void 0:l.data)==null?void 0:S.message;return m.exports.useEffect(()=>{p&&h(p),p==="updated"&&u.setOption("mostrar")},[p]),e(C,{children:i("form",{onSubmit:c(async q=>{l.mutateAsync(q)}),children:[e(x,{m:"1em 0",align:"left",children:e(g,{color:"#009966",capit:!0,children:o.name})}),i(x,{align:"left",children:[e(g,{children:"Nombre de Municipio"}),e(N,{info:T.name,required:!0,label:"name",errors:n,register:f})]}),i(x,{align:"left",children:[e(g,{children:"Provincia a que pertenece"}),e(L,{list:s==null?void 0:s.result,label:"provinciaId",register:f,required:!0}),n.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]}),i(x,{align:"left",children:[e(g,{children:"Deshabilitar o habilitar"}),e(ue,F(B({},f("enabled")),{size:"sm",colorScheme:"red",defaultChecked:Boolean(o.enabled)}))]}),e(j,{buttonstate:l==null?void 0:l.isLoading}),a&&e(E,{message:a})]})})}function Se(t){var p;const{url:r}=t,[o,u]=m.exports.useState(""),d="/provincias",{data:s}=w("council",()=>D(d)),{register:a,handleSubmit:h,formState:{errors:f}}=A(),c=z(b=>ce(r,b)),n=async b=>{console.log(b),c.mutateAsync(b)},l=(p=c==null?void 0:c.data)==null?void 0:p.message;return m.exports.useEffect(()=>{l&&u(l)},[l]),e(C,{children:i("form",{onSubmit:h(n),children:[e(v,{p:"1em",children:i(y,{children:[e(g,{children:"Nombre de Municipio"}),e(N,{info:T.name,required:!0,label:"name",errors:f,register:a})]})}),e(v,{p:"1em",children:e(y,{children:i(x,{align:"left",children:[e(g,{children:"Provincia a que pertenece"}),e(L,{list:s==null?void 0:s.result,label:"provinciaId",register:a,required:!0}),f.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})})}),e(j,{buttonstate:c==null?void 0:c.isLoading}),o&&e(E,{message:o})]})})}function ye(){const[t,r]=m.exports.useState(""),[o,u]=m.exports.useState(""),{register:d,handleSubmit:s,formState:{errors:a}}=A(),h="provincias",f="municipios/provincia",{data:c}=w("provincias",()=>H(h)),{data:n,isLoading:l,refetch:p}=w("municipiosby",()=>he(f,t)),b=async q=>{r(n==null?void 0:n.provinciaId)},S=n==null?void 0:n.message;return m.exports.useEffect(()=>{p()},[t]),m.exports.useEffect(()=>{S&&u(S)},[S]),i(xe,{children:[e("form",{onSubmit:s(b),children:i(y,{children:[e(v,{p:"1em",children:i(y,{children:[e(g,{upper:!0,m:"1em 0",children:"Municipios por Provincias"}),e(L,{register:d,list:c==null?void 0:c.result,label:"provinciaId",required:!0,setId:r}),a.provinciaId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),i(v,{children:[e("p",{style:{color:"red"},children:t}),e(j,{buttonstate:l})]})]})}),i(y,{children:[e(U,{data:n==null?void 0:n.result}),o&&e(E,{message:o})]})]})}const xe=I.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;function ve(){const{register:t,handleSubmit:r,formState:{errors:o}}=A(),u="municipios/provincia/enabled/true",{data:d}=w("munByProvEnabled",()=>D(u));return i(qe,{children:[e("form",{onSubmit:r(async a=>{}),children:e(v,{p:"1em",children:i(y,{children:[e(we,{children:"Municipios por provincias habilitadas"}),status&&e(E,{message:status})]})})}),e(U,{data:d==null?void 0:d.result})]})}const we=I.div`
  color: #444444;
  white-space: nowrap;
  font-size: 1.1em;
  font-weight: bolder;
`,qe=I.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,_=[{option:"a\xF1adir",icon:e(M,{}),comp:e(Se,{url:"municipios"})},{option:"mostrar",icon:e(de,{}),comp:e(oe,{url:"municipios",queryKey:"all-municipios"})},{option:"buscar",icon:e(me,{}),comp:e(pe,{allnames:"municipios"})},{option:"habilitados",icon:e(te,{}),comp:e(re,{queryKey:"mun-enabled",url:"municipios/enabled/true"})},{option:"asociado",icon:e(P,{}),comp:e(ye,{})},{option:"asociado habilitado",icon:e(P,{}),comp:e(ve,{})},{option:"actualizar",icon:e(M,{}),comp:e(ge,{url:"municipios"})}];function He(){const t=localStorage.getItem("jwt");return m.exports.useEffect(()=>{t&&(le.defaults.headers.common.jwt=t)},[]),e(C,{children:i(Ce,{children:[e(X,{linear:W.green,color:"#ffffff"}),e(Y,{children:e(Z,{name:"Municipios",options:_,children:e(ee,{options:_})})})]})})}const Ce=I.div`
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
`;export{He as default};

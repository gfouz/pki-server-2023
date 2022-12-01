var ee=Object.defineProperty,te=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var R=(t,s,r)=>s in t?ee(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,y=(t,s)=>{for(var r in s||(s={}))oe.call(s,r)&&R(t,r,s[r]);if(B)for(var r of B(s))se.call(s,r)&&R(t,r,s[r]);return t},F=(t,s)=>te(t,re(s));import{s as q,r as n,R as I,a as x,j as e,G as j,a1 as N,F as A,H as P,a2 as T,a3 as ae}from"./index.e9e99ba7.js";import{t as ne}from"./constants.c1eecf01.js";import{C as ie}from"./Toast.e4de0c17.js";import{S as H,D as ce}from"./SubmitButton.2fd5e6eb.js";import{C as le,F as de}from"./Card.7290142e.js";import{R as ue,G as me}from"./Rocket.c6cdf64d.js";import{A as M,b as pe,E as G,S as he,a as fe,G as be}from"./SearchPlus.c7e6ddc6.js";import{u as E,S as _}from"./StatusHandler.420984fb.js";import{c as Se,d as z,p as ge,S,i as v,a as xe,e as we,f as ye,b as Ae}from"./StyledLabel.e15bdfe8.js";import{u as k,c as Ee,s as $}from"./store.d9601167.js";import{S as D}from"./chakra-ui-select.esm.f5c0e0bb.js";import{u as W,a as Z}from"./index.esm.bdaf8ba0.js";import{T as K}from"./TextInput.00583772.js";import{T as O,I as V,E as L}from"./ErrorWarning.55d4a20f.js";import{C as ve}from"./CodeBranch.a0150e68.js";import"./chakra-ui-button.esm.d8ba8687.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";function ze(){var l,m;const[t,s]=n.exports.useState(""),{data:r,isLoading:a,isError:p}=E("users",()=>z("users")),{data:i}=E("rols",()=>z("rols")),u=((m=(l=r==null?void 0:r.response)==null?void 0:l.data)==null?void 0:m.message)||(r==null?void 0:r.message),o=r==null?void 0:r.result,g=i==null?void 0:i.result,[f,c]=n.exports.useState([]);return I.useEffect(()=>{Se(u,s)},[u]),I.useEffect(()=>{c(o==null?void 0:o.map(d=>{let b=g==null?void 0:g.find(w=>(w==null?void 0:w.id)===(d==null?void 0:d.rolId));return b?F(y({},d),{rol:b==null?void 0:b.name}):y({},d)}))}),x(Ce,{children:[p&&e("div",{children:"An error ocurred..."}),a&&x("div",{children:[e(j,{size:"sm",color:"white"}),e(N,{color:"white",children:"Loading..."})]}),e(M,{data:f}),t&&e(_,{message:t})]})}const Ce=q.div`
  width: 100%;
`;function Q({list:t,register:s,label:r,required:a}){return e(A,{children:e(D,F(y({},s(r,{required:a})),{placeholder:"Select option",size:"xm",bg:"#999999",color:"#000000",children:Array.isArray(t)&&t.map((p,i)=>e("option",{value:p.id,children:p.name},i))}))})}const Fe=["ok","updated","enabled","associated","created","accepted","not-authorized","bad-request","Bad Request","Forbidden","Network Error","unprocessable","Unprocessable-data","not-found","Not Found","found by id","gotten-by-id"];function J({message:t}){const[s,r]=n.exports.useState("");return n.exports.useEffect(()=>{Fe.map(a=>{switch(t){case a:r(a);break;default:{r(t);break}}})},[t]),e(A,{children:e(qe,{children:e("p",{className:t,children:s})})})}const qe=q.div`
  margin: 2em;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  p {
    font-size: 0.7em;
  }
  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: #222222;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
  .enabled {
    color: #446344;
  }
`;function Ie(t){return n.exports.createElement("svg",y({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),n.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function ke(t){return n.exports.createElement("svg",y({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),n.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const X=({label:t,register:s,required:r,errors:a,defaultValue:p,info:i})=>{const[u,o]=I.useState(!1),g=()=>o(!u);return x(A,{children:[e(O,{label:i,hasArrow:!0,arrowSize:15,children:e(V,y({size:"sm",type:u?"text":"password",cursor:"pointer",variant:"flushed",defaultValue:p},s(t,{required:r})))}),e("div",{style:{margin:"1em 0"},onClick:g,children:u?e(Ie,{}):e(ke,{})}),e(L,{label:t,errors:a,info:i})]})},Y=({register:t,errors:s,defaultValue:r,info:a})=>x(A,{children:[e(O,{label:a,hasArrow:!0,arrowSize:15,children:e(V,y({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(L,{label:"email",errors:s,m:"0 2em",info:a})]});function Le(t){var w;const s=k(Ee),r=k($),{stack:a}=s,{setOption:p}=r;n.exports.useState("");const[i,u]=n.exports.useState(""),{register:o,handleSubmit:g,formState:{errors:f}}=W(),c="/rols/enabled/true",{data:l}=E("enabled-rolls",()=>z(c)),m=Z(h=>ge(h,t.url,a.id),{retry:2}),d=(w=m==null?void 0:m.data)==null?void 0:w.message;return n.exports.useEffect(()=>{d&&u(d),d==="updated"&&p("mostrar")},[d]),e(A,{children:e("form",{onSubmit:g(async h=>{m.mutateAsync(h)}),children:x(P,{direction:"column",p:"1em",minW:"320px",children:[e(S,{color:"#000000",m:"1em 0 2em 0",upper:!0,center:!0,children:"Actualizar usuario"}),e(S,{color:"#009966",children:"Nombre de usuario"}),e(K,{info:v.name,required:!0,label:"name",errors:f,register:o,defaultValue:a.name}),e(S,{color:"#009966",children:"Correo electr\xF3nico."}),e(Y,{info:v.email,register:o,errors:f,defaultValue:a.email}),e(S,{color:"#009966",children:"Escriba una contrase\xF1a."}),e(X,{label:"password",register:o,errors:f,required:!0}),e(S,{color:"#009966",children:"Seleccione un rol"}),e(Q,{list:l==null?void 0:l.result,label:"rolId",register:o,required:!0}),e(L,{label:"rolId",errors:f,info:v.select}),x(T,{m:"2em 0",children:[e(S,{capit:!0,color:"#444444",children:"Deshabilitar o habilitar."}),e(pe,F(y({defaultChecked:Boolean(a.enabled)},o("enabled")),{id:"enabled",size:"sm",colorScheme:"red"}))]}),e(H,{buttonstate:m==null?void 0:m.isLoading}),i&&e(J,{message:i})]})})})}const Be="http://localhost:5000",Re=xe.create({baseURL:Be,withCredentials:!1});Re.defaults.headers.common["Content-Type"]="application/json";function Ge(t){var d;const s=k($),{path:r}=t,[a,p]=n.exports.useState("");n.exports.useState([]);const{register:i,handleSubmit:u,formState:{errors:o}}=W(),g="/rols/enabled/true",{data:f}=E("all-enabled-rolls",()=>z(g)),c=Z(b=>we(r,b)),l=(d=c==null?void 0:c.data)==null?void 0:d.message;return n.exports.useEffect(()=>{l&&p(l),l==="created"&&s.setOption("mostrar")},[l]),e(A,{children:e("form",{onSubmit:u(async b=>{c==null||c.mutateAsync(b)}),children:x(P,{direction:"column",p:"1em",minW:"320px",children:[e(S,{color:"#000000",m:"1em 0 2em 0",upper:!0,center:!0,children:"A\xF1adir usuario"}),e(S,{color:"#009966",children:"Nombre de usuario"}),e(K,{info:v.name,required:!0,label:"name",errors:o,register:i}),e(S,{m:"1em 0",color:"#009966",children:"Correo electr\xF3nico."}),e(Y,{register:i,errors:o,info:v.email}),e(S,{color:"#009966",children:"Escriba contrase\xF1a."}),e(X,{label:"password",register:i,errors:o,required:!0}),e(S,{color:"#009966",children:"Seleccione rol de usuario."}),e(Q,{list:f==null?void 0:f.result,label:"rolId",register:i,required:!0}),o.rolId&&e("span",{style:{color:"red"},children:"Field is required"}),e(H,{buttonstate:c==null?void 0:c.isLoading}),a&&e(J,{message:a})]})})})}function Ue(){var b,w;const t="users/rol",s="rols",[r,a]=n.exports.useState(""),[p,i]=n.exports.useState("1"),{data:u}=E("rols-all",()=>z(s)),{data:o,isLoading:g,isError:f,refetch:c}=E("users-by-rols",()=>ye(t,p));o==null||o.result;const l=u==null?void 0:u.result,m=((w=(b=o==null?void 0:o.response)==null?void 0:b.data)==null?void 0:w.message)||(o==null?void 0:o.message);n.exports.useEffect(()=>{a(m)},[m]);const d=h=>{var C;i((C=h==null?void 0:h.target)==null?void 0:C.value)};return n.exports.useEffect(()=>{c()},[p]),e(A,{children:e(T,{p:"1em",children:x(ae,{children:[e("label",{htmlFor:"association",children:e(S,{m:"2em 0",color:"#009966",children:"Buscar usuario por rols:"})}),e(D,{placeholder:"Select option",size:"xm",color:"#000000",onChange:h=>d(h),children:l==null?void 0:l.map((h,C)=>e("option",{value:h.id,children:h.email||h.name},C))}),x(je,{children:[f&&e("div",{children:"An error ocurred..."}),g&&x("div",{children:[e(j,{size:"sm",color:"white"}),e(N,{color:"white",children:"Loading..."})]}),e(M,{data:o==null?void 0:o.result}),r&&e(_,{message:r})]})]})})})}const je=q.div`
  width: 100%;
`,U=[{option:"a\xF1adir",icon:e(G,{}),comp:e(Ge,{path:"users"})},{option:"mostrar",icon:e(he,{}),comp:e(ze,{})},{option:"buscar",icon:e(fe,{}),comp:e(be,{allnames:"users"})},{option:"habilitados",icon:e(ue,{}),comp:e(me,{queryKey:"users-enabled",url:"users/enabled/true"})},{option:"asociado",icon:e(ve,{}),comp:e(Ue,{})},{option:"actualizar",icon:e(G,{}),comp:e(Le,{queryKey:"user-update",url:"users"})}];function rt(){const t=localStorage.getItem("jwt");return n.exports.useEffect(()=>{t&&(Ae.defaults.headers.common.jwt=t)},[]),e(A,{children:x(Ne,{children:[e(ie,{linear:ne.green,color:"#ffffff"}),e(ce,{children:e(le,{name:"usuarios",options:U,children:e(de,{options:U})})})]})})}const Ne=q.div`
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
`;export{rt as default};

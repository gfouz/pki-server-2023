var re=Object.defineProperty,oe=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var T=(t,s,r)=>s in t?re(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,E=(t,s)=>{for(var r in s||(s={}))ae.call(s,r)&&T(t,r,s[r]);if(P)for(var r of P(s))ne.call(s,r)&&T(t,r,s[r]);return t},k=(t,s)=>oe(t,se(s));import{R as I,s as C,r as i,a as e,F as w,j as g,S as b,H as U}from"./index.9a3ab491.js";import{t as ie,D as ce}from"./Dashboard.b4fb76d1.js";import{C as le}from"./Toast.cdc41de7.js";import{C as de,F as ue}from"./Card.db03a57e.js";import{u as A,S as j}from"./StatusHandler.4ef7e4a9.js";import{R as me,u as he,b as N,A as Z,E as M,S as pe,a as fe}from"./SearchPlus.0e08da50.js";import{d as z,c as ge,p as be,i as F,a as Se,e as xe,f as we,b as ye}from"./constants.d0510e6a.js";import{H as q,u as $,a as D,c as ve,S as V,F as Ee,e as Ae,C as Ce}from"./SubmitButton.1ee02988.js";import{u as R,c as ze,s as _}from"./store.a90ba17a.js";import{S as O}from"./chakra-ui-select.esm.5205b0a4.js";import{T as W}from"./TextInput.6529562e.js";import{I as K,E as B}from"./ErrorWarning.3d53457e.js";import{T as Q}from"./chakra-ui-tooltip.esm.4067af7f.js";import{C as Fe}from"./CodeBranch.c380e8d5.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const Ie=()=>{const{data:t,isLoading:s,isError:r}=A("users-data",()=>z("users")),{data:o}=A("rols",()=>z("rols")),{data:n}=A("all-functs",()=>z("funcionalidades")),u=(t==null?void 0:t.message)||t,[m,a]=I.useState(t==null?void 0:t.result);return I.useEffect(()=>{a(t==null?void 0:t.result.map(l=>{const d=o==null?void 0:o.result.find(c=>(c==null?void 0:c.id)===(l==null?void 0:l.rolId)),h=n==null?void 0:n.result.filter(c=>(c==null?void 0:c.rolId)===(l==null?void 0:l.rolId));return d?k(E({},l),{rol:d==null?void 0:d.name,funct:h}):E({},l)}))},[t,o,n]),[m,s,r,u]};function ke(){const[t,s]=i.exports.useState(""),[r,o,n,u]=Ie(),m=r&&r;return i.exports.useEffect(()=>{s(u)},[u]),e(w,{children:g(Le,{children:[e(b,{color:"#222222",children:"B\xFAsqueda por nombre."}),e(me,{data:m}),n&&e("div",{children:"An error ocurred..."}),o&&g("div",{children:[e(U,{size:"sm",color:"white"}),e(q,{color:"white",children:"Loading..."})]}),t&&e(j,{message:t})]})})}const Le=C.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 250px;
`;function qe(){var x,f;const[t,s]=i.exports.useState(""),[r,o,n,u,m]=he("users"),{data:a}=A("rols",()=>z("rols")),{data:l}=A("all-functs",()=>z("funcionalidades")),d=((f=(x=r==null?void 0:r.response)==null?void 0:x.data)==null?void 0:f.message)||(r==null?void 0:r.message);a==null||a.result,l==null||l.result,i.exports.useState([]);const[h,c]=I.useState(r==null?void 0:r.result);return I.useEffect(()=>{ge(d,s)},[d]),I.useEffect(()=>{c(r==null?void 0:r.result)},[r==null?void 0:r.result,o]),g(w,{children:[e(Re,{children:e(N,{onChange:S=>{n(S.target.checked)},size:"sm",checked:!0,colorScheme:"red",defaultChecked:o})}),e(Ue,{children:e(b,{color:o?"#c40550":"#999999",children:o?"Usuarios Habilitados":"Usuarios Desabilitados"})}),g(Be,{children:[m&&e("div",{children:"An error ocurred..."}),u&&g("div",{children:[e(U,{size:"sm",color:"white"}),e(q,{color:"white",children:"Loading..."})]}),e(Z,{data:h}),t&&e(j,{message:t})]})]})}const Be=C.div`
  width: 100%;
  min-height: 200px;
`,Re=C.div`
  position: absolute;
  top: 10px;
  left: 20px;
`,Ue=C.div`
  position: absolute;
  top: 4em;
  left: 50%;
  white-space: nowrap;
  transform: translateX(-50%);
`;function X({list:t,register:s,label:r,required:o}){return e(w,{children:e(O,k(E({},s(r,{required:o})),{size:"xm",variant:"outline",placeholder:"Seleccione un rol",children:Array.isArray(t)&&t.map(n=>e("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.name},n.id))}))})}const je=["ok","updated","enabled","associated","created","accepted","not-authorized","bad-request","Bad Request","Forbidden","Network Error","unprocessable","Unprocessable-data","not-found","Not Found","found by id","gotten-by-id"];function J({message:t}){const[s,r]=i.exports.useState("");return i.exports.useEffect(()=>{je.map(o=>{switch(t){case o:r(o);break;default:{r(t);break}}})},[t]),e(w,{children:e(He,{children:e("p",{className:t,children:s})})})}const He=C.div`
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
`;function Pe(t){return i.exports.createElement("svg",E({viewBox:"0 0 576 512",width:t.width||"1em",length:t.height||"auto"},t),i.exports.createElement("path",{fill:t.color,d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}))}function Te(t){return i.exports.createElement("svg",E({viewBox:"0 0 640 512",width:t.width||"1em",length:t.height||"auto"},t),i.exports.createElement("path",{fill:t.color,d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}))}const Y=({label:t,register:s,required:r,errors:o,defaultValue:n,info:u})=>{const[m,a]=I.useState(!1),l=()=>a(!m);return g(w,{children:[e(Q,{label:u,hasArrow:!0,arrowSize:15,children:e(K,k(E({},s(t,{required:!0,pattern:/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/})),{cursor:"pointer",size:"sm",type:m?"text":"password",variant:"flushed",placeholder:"Ejemplo-123"}))}),e(B,{label:t,errors:o,info:"Para ver instrucciones pase el cursor!"}),e("div",{style:{margin:"1em 0"},onClick:l,children:m?e(Pe,{}):e(Te,{})})]})},ee=({register:t,errors:s,defaultValue:r,info:o})=>g(w,{children:[e(Q,{label:o,hasArrow:!0,arrowSize:15,children:e(K,E({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:r},t("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),e(B,{label:"email",errors:s,info:o})]});function Me(t){var H;const s=R(ze),r=R(_),{stack:o}=s,{setOption:n}=r,[u,m]=i.exports.useState(""),[a,l]=i.exports.useState(Boolean(o.enabled)),{register:d,handleSubmit:h,formState:{errors:c}}=$(),{data:x}=A("enabled-rolls",()=>z("rols")),f=x==null?void 0:x.result,[S,L]=i.exports.useState(f==null?void 0:f.find(v=>v.id===o.RolId)),p=D(v=>be(v,t.url,o.id),{retry:2}),y=(H=p==null?void 0:p.data)==null?void 0:H.message;i.exports.useEffect(()=>{y&&m(y),y==="updated"&&n("mostrar")},[y]),i.exports.useEffect(()=>{L(f==null?void 0:f.find(v=>v.id===o.RolId))},[f]);const te=async v=>{p.mutateAsync(v)};return i.exports.useEffect(()=>{},[o.id]),e(w,{children:e(Ge,{onSubmit:h(te),children:g(Ne,{children:[e(b,{color:"#000000",m:"0 0 1em 0",upper:!0,center:!0,children:"Modificar usuario"}),e(b,{color:"#222222",children:"Nombre de usuario"}),e(W,{info:F.name,required:!0,label:"name",errors:c,register:d,defaultValue:o.name}),e(b,{color:"#222222",children:"Correo electr\xF3nico."}),e(ee,{info:F.email,register:d,errors:c,defaultValue:o.email}),e(b,{color:"#222222",children:"Escriba una contrase\xF1a."}),e(Y,{label:"password",register:d,errors:c,required:!0,info:F.password}),g(b,{color:"#666666",children:["Rol actual(",e("span",{style:{color:"#e2023d"},children:S==null?void 0:S.name}),")"]}),e(X,{list:f,label:"rolId",register:d,required:!0}),e(B,{label:"rolId",errors:c,info:F.select}),e(ve,{htmlFor:"enabled",m:"1em 0 0.3em 0",color:"#333333",children:e(q,{size:"sm",color:a?"#e2023d":"#999999",children:a?"Habilitado":"Deshabilitado"})}),e(N,k(E({},d("enabled",{onChange:v=>{l(v.target.checked)}})),{id:"enabled",size:"sm",checked:!0,colorScheme:"red",defaultChecked:Boolean(o.enabled)})),e(V,{buttonstate:p==null?void 0:p.isLoading}),u&&e(J,{message:u})]})})})}const Ge=C.form``,Ne=C.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-width: 270px;
  min-height: 270px;
`,Ze="http://localhost:5000",$e=Se.create({baseURL:Ze,withCredentials:!1});$e.defaults.headers.common["Content-Type"]="application/json";function De(t){var f;const s=R(_),{path:r}=t,[o,n]=i.exports.useState("");i.exports.useState([]);const{register:u,handleSubmit:m,formState:{errors:a}}=$(),l="/rols/enabled/true",{data:d}=A("all-enabled-rolls",()=>z(l)),h=D(S=>xe(r,S)),c=(f=h==null?void 0:h.data)==null?void 0:f.message;return i.exports.useEffect(()=>{c&&n(c),c==="created"&&s.setOption("mostrar")},[c]),e(w,{children:e("form",{onSubmit:m(async S=>{h==null||h.mutateAsync(S)}),children:g(Ee,{direction:"column",p:"1em",minW:"320px",children:[e(b,{color:"#666666",m:"1em 0 2em 0",upper:!0,center:!0,children:"A\xF1adir usuario"}),e(b,{color:"#666666",children:"Nombre de usuario"}),e(W,{info:F.name,required:!0,label:"name",errors:a,register:u}),e(b,{m:"1em 0 0 0",color:"#666666",children:"Correo electr\xF3nico."}),e(ee,{register:u,errors:a,info:F.email}),e(b,{m:"1em 0 0 0",color:"#666666",children:"Escriba contrase\xF1a."}),e(Y,{info:F.password,label:"password",register:u,errors:a,required:!0}),e(b,{color:"#666666",children:"Seleccione rol de usuario."}),e(X,{list:d==null?void 0:d.result,label:"rolId",register:u,required:!0}),e(B,{label:"rolId",errors:a,info:"Seleccione un rol, es requerido!"}),e(V,{buttonstate:h==null?void 0:h.isLoading}),o&&e(J,{message:o})]})})})}function Ve(){var S,L;const t="users/rol",s="rols",[r,o]=i.exports.useState(""),[n,u]=i.exports.useState("1"),{data:m}=A("rols-all",()=>z(s)),{data:a,isLoading:l,isError:d,refetch:h}=A("users-by-rols",()=>we(t,n));a==null||a.result;const c=m==null?void 0:m.result,x=((L=(S=a==null?void 0:a.response)==null?void 0:S.data)==null?void 0:L.message)||(a==null?void 0:a.message);i.exports.useEffect(()=>{o(x)},[x]);const f=p=>{var y;u((y=p==null?void 0:p.target)==null?void 0:y.value)};return i.exports.useEffect(()=>{h()},[n]),e(w,{children:e(Ae,{p:"1em",children:g(Ce,{children:[e("label",{htmlFor:"association",children:e(b,{m:"2em 0",color:"#009966",children:"Buscar usuario por rols:"})}),e(O,{placeholder:"Select option",size:"xm",color:"#000000",onChange:p=>f(p),children:c==null?void 0:c.map((p,y)=>e("option",{value:p.id,children:p.email||p.name},y))}),g(_e,{children:[d&&e("div",{children:"An error ocurred..."}),l&&g("div",{children:[e(U,{size:"sm",color:"white"}),e(q,{color:"white",children:"Loading..."})]}),e(Z,{data:a==null?void 0:a.result}),r&&e(j,{message:r})]})]})})})}const _e=C.div`
  width: 100%;
`,G=[{option:"crear",icon:e(M,{}),comp:e(De,{path:"users"})},{option:"mostrar",icon:e(pe,{}),comp:e(qe,{})},{option:"buscar",icon:e(fe,{}),comp:e(ke,{})},{option:"asociado",icon:e(Fe,{}),comp:e(Ve,{})},{option:"modificar",icon:e(M,{}),comp:e(Me,{queryKey:"user-update",url:"users"})}];function dt(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(ye.defaults.headers.common.jwt=t)},[]),e(w,{children:g(Oe,{children:[e(le,{linear:ie.green,color:"#ffffff"}),e(ce,{children:e(de,{name:"usuarios",options:G,children:e(ue,{options:G})})})]})})}const Oe=C.div`
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
`;export{dt as default};

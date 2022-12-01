var M=Object.defineProperty;var w=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))q.call(r,t)&&S(e,t,r[t]);if(w)for(var t of w(r))A.call(r,t)&&S(e,t,r[t]);return e};import{h as P,y as R,z as O,W as B,r as a,d as G,c as K,s as h,R as I,a as d,j as s,G as N,a1 as D,F as E,H as W,a2 as Q}from"./index.e9e99ba7.js";import{t as U}from"./constants.c1eecf01.js";import{C as V}from"./Toast.e4de0c17.js";import{S as $,D as J}from"./SubmitButton.2fd5e6eb.js";import{C as X,F as Y}from"./Card.7290142e.js";import{u as j,S as L}from"./StatusHandler.420984fb.js";import{a as Z,S as T,b as ee}from"./StyledLabel.e15bdfe8.js";import{u as te,s as re}from"./store.d9601167.js";import{b as se,u as oe,a as ne}from"./index.esm.bdaf8ba0.js";function x(){return x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},x.apply(this,arguments)}function ae(e,r){if(e==null)return{};var t={},o=Object.keys(e),i,n;for(n=0;n<o.length;n++)i=o[n],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var ie=["className","rows"],ce=["h","minH","height","minHeight"],le=P(function(e,r){var t=R("Textarea",e),o=O(e),i=o.className,n=o.rows,m=ae(o,ie),u=se(m),c=n?B(t,ce):t;return a.exports.createElement(G.textarea,x({ref:r,rows:n},u,{className:K("chakra-textarea",i),__css:c}))});const de="http://localhost:4000",y=Z.create({baseURL:de,withCredentials:!1});y.defaults.headers.common["Content-Type"]="application/json";async function _(e){try{return(await y.get(e)).data}catch(r){return r}}async function me(e,r){try{const t=await y.post(e,r),{data:o}=t;return o}catch(t){return t==null?void 0:t.message}}function ue(e){const{url:r,queryKey:t}=e;a.exports.useState(()=>localStorage.getItem("jwt"));const[o,i]=a.exports.useState(""),{data:n,isLoading:m,isError:u}=j(t,()=>_(r)),c=n==null?void 0:n.message;return I.useEffect(()=>{c&&i(c)},[c]),d(fe,{children:[u&&s("div",{children:"An error ocurred..."}),m&&d("div",{children:[s(N,{size:"sm",color:"red"}),s(D,{color:"#444444",children:"Loading..."})]}),d(he,{children:[s(T,{color:"#009966",m:"2em 0",children:"Terminos y condiciones."}),s(pe,{children:n==null?void 0:n.data}),o&&s(L,{message:o})]})]})}const fe=h.div`
  width: 100%;
`,he=h.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,pe=h.p`
  color: #666666;
  text-align: left;
`,ge=e=>{const[r,t]=a.exports.useState(!1);return a.exports.useEffect(()=>{const o=window.matchMedia(e);o.matches!==r&&t(o.matches);const i=()=>t(o.matches);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[r,e]),r};function xe(e){var v;const{url:r,queryKey:t}=e,{register:o,handleSubmit:i,formState:{errors:n}}=oe();let[m,u]=a.exports.useState("");const{data:c,isLoading:be,isError:Ee}=j(t,()=>_(r)),[z,C]=a.exports.useState("");a.exports.useState("");const F=te(re);c==null||c.result,a.exports.useEffect(()=>{C(c==null?void 0:c.data)});const l=ne(g=>me(r,g)),k=async g=>{l.mutateAsync(g)},f=(v=l==null?void 0:l.data)==null?void 0:v.message;a.exports.useEffect(()=>{f&&u(f),f==="modified"&&F.setOption("leer")},[f]);const H=ge("(min-width: 600px)");return console.log(f),s(E,{children:d(ye,{children:[d("form",{onSubmit:i(k),children:[d(W,{direction:"column",children:[s(T,{upper:!0,center:!0,color:"#009966",m:"1em 0",children:"Editar condiciones."}),s(le,p({width:H?"595px":"320px",minWidth:"320px",minHeight:"400px",defaultValue:z,placeholder:"Terminos y condiciones"},o("conditions",{required:!0}))),s($,{buttonstate:l==null?void 0:l.isLoading})]}),n.conditions&&s("span",{style:{color:"red"},children:"Field is required"})]}),s(Q,{children:m&&s(L,{message:m})})]})})}const ye=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;function ve(e){return a.exports.createElement("svg",p({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 00-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21.92 18.67l-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 00-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 00-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 000 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 11.001-2.701 1.35 1.35 0 01-.001 2.701z"}))}function we(e){return a.exports.createElement("svg",p({viewBox:"0 0 20 20",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z"}))}const b=[{option:"editar",icon:s(ve,{}),comp:s(xe,{url:"condiciones",queryKey:"terms-to-change"})},{option:"leer",icon:s(we,{}),comp:s(ue,{url:"condiciones",queryKey:"fullterms"})}];function qe(){const e=localStorage.getItem("jwt");return a.exports.useEffect(()=>{e&&(ee.defaults.headers.common.jwt=e)},[]),s(E,{children:d(Se,{children:[s(V,{linear:U.green,color:"#ffffff"}),s(J,{children:s(X,{name:"Terminos y...",options:b,children:s(Y,{options:b})})})]})})}const Se=h.div`
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
`;export{qe as default};

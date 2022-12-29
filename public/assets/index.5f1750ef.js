var R=Object.defineProperty;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var b=(e,s,t)=>s in e?R(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,p=(e,s)=>{for(var t in s||(s={}))A.call(s,t)&&b(e,t,s[t]);if(S)for(var t of S(s))P.call(s,t)&&b(e,t,s[t]);return e};import{h as O,y as q,z as B,J as G,r as a,d as K,c as N,s as h,R as I,j as d,a as r,G as Q,a1 as D,F as E,Q as U,ai as V}from"./index.f52781a9.js";import{t as W,D as $}from"./Dashboard.fd18947c.js";import{C as J}from"./Toast.0ae85c90.js";import{C as X,F as Y}from"./Card.ee8d3258.js";import{u as j,S as T}from"./StatusHandler.ec046620.js";import{a as Z,b as ee}from"./constants.f2e04d14.js";import{S as L}from"./StyledLabel.4d380b9c.js";import{u as te,s as se}from"./store.e96f2609.js";import{b as re,u as oe,a as ne,S as ae}from"./SubmitButton.96350b2a.js";import"./chakra-ui-tooltip.esm.eb698682.js";function x(){return x=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},x.apply(this,arguments)}function ce(e,s){if(e==null)return{};var t={},o=Object.keys(e),c,n;for(n=0;n<o.length;n++)c=o[n],!(s.indexOf(c)>=0)&&(t[c]=e[c]);return t}var ie=["className","rows"],le=["h","minH","height","minHeight"],me=O(function(e,s){var t=q("Textarea",e),o=B(e),c=o.className,n=o.rows,m=ce(o,ie),u=re(m),i=n?G(t,le):t;return a.exports.createElement(K.textarea,x({ref:s,rows:n},u,{className:N("chakra-textarea",c),__css:i}))});const de="http://localhost:4000",y=Z.create({baseURL:de,withCredentials:!1});y.defaults.headers.common["Content-Type"]="application/json";async function _(e){try{return(await y.get(e)).data}catch(s){return s}}async function ue(e,s){try{const t=await y.post(e,s),{data:o}=t;return o}catch(t){return t==null?void 0:t.message}}function fe(e){const{url:s,queryKey:t}=e;a.exports.useState(()=>localStorage.getItem("jwt"));const[o,c]=a.exports.useState(""),{data:n,isLoading:m,isError:u}=j(t,()=>_(s)),i=n==null?void 0:n.message,v=n==null?void 0:n.data;return I.useEffect(()=>{i&&c(i)},[i]),d(he,{children:[u&&r("div",{children:"An error ocurred..."}),m&&d("div",{children:[r(Q,{size:"sm",color:"red"}),r(D,{color:"#444444",children:"Loading..."})]}),d(pe,{children:[r(L,{color:"#444444",m:"2em 0",children:"T\xE9rminos y condiciones."}),v?r(ge,{children:n==null?void 0:n.data}):r("p",{className:"default-message",children:"Sin datos disponibles"}),o&&r(T,{message:o})]})]})}const he=h.div`
  width: 100%;
  .default-message {
    color: red;
    font-weight: bolder;
    text-transform: uppercase;
  }
`,pe=h.div`
  padding: 1em 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ge=h.p`
  color: #666666;
  text-align: left;
`,xe=e=>{const[s,t]=a.exports.useState(!1);return a.exports.useEffect(()=>{const o=window.matchMedia(e);o.matches!==s&&t(o.matches);const c=()=>t(o.matches);return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[s,e]),s};function ye(e){var w;const{url:s,queryKey:t}=e,{register:o,handleSubmit:c,formState:{errors:n}}=oe();let[m,u]=a.exports.useState("");const{data:i,isLoading:v,isError:ze}=j(t,()=>_(s)),[C,H]=a.exports.useState("");a.exports.useState("");const k=te(se);i==null||i.result,a.exports.useEffect(()=>{H(i==null?void 0:i.data)});const l=ne(g=>ue(s,g)),F=async g=>{l.mutateAsync(g)},f=(w=l==null?void 0:l.data)==null?void 0:w.message;a.exports.useEffect(()=>{f&&u(f),f==="modified"&&k.setOption(" ")},[f]);const M=xe("(min-width: 600px)");return console.log(f),r(E,{children:d(ve,{children:[r("form",{onSubmit:c(F),children:d(U,{direction:"column",children:[r(L,{upper:!0,center:!0,color:"#444444",m:"1em 0",children:"Editar condiciones."}),r(me,p({width:M?"595px":"320px",minWidth:"320px",minHeight:"400px",defaultValue:C,placeholder:"Terminos y condiciones"},o("conditions"))),r(ae,{buttonstate:l==null?void 0:l.isLoading})]})}),r(V,{children:m&&r(T,{message:m})})]})})}const ve=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;function we(e){return a.exports.createElement("svg",p({viewBox:"0 0 22 22",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color,d:"M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45l-1.48-1.16c.03-.22.05-.45.05-.68s-.02-.46-.05-.69l1.48-1.16c.13-.11.17-.3.08-.45l-1.4-2.42c-.09-.15-.27-.21-.43-.15l-1.74.7c-.36-.28-.75-.51-1.18-.69l-.26-1.85a.364.364 0 00-.35-.29h-2.8c-.17 0-.32.13-.35.3L6.8 4.15c-.42.18-.82.41-1.18.69l-1.74-.7c-.16-.06-.34 0-.43.15l-1.4 2.42c-.09.15-.05.34.08.45l1.48 1.16c-.03.22-.05.45-.05.68s.02.46.05.69l-1.48 1.16c-.13.11-.17.3-.08.45l1.4 2.42c.09.15.27.21.43.15l1.74-.7c.36.28.75.51 1.18.69l.26 1.85c.03.16.18.29.35.29h2.8c.17 0 .32-.13.35-.3l.26-1.85c.42-.18.82-.41 1.18-.69l1.74.7c.16.06.34 0 .43-.15zM8.81 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM21.92 18.67l-.96-.74c.02-.14.04-.29.04-.44 0-.15-.01-.3-.04-.44l.95-.74c.08-.07.11-.19.05-.29l-.9-1.55c-.05-.1-.17-.13-.28-.1l-1.11.45c-.23-.18-.48-.33-.76-.44l-.17-1.18a.216.216 0 00-.21-.2h-1.79c-.11 0-.21.08-.22.19l-.17 1.18c-.27.12-.53.26-.76.44l-1.11-.45a.23.23 0 00-.28.1l-.9 1.55c-.05.1-.04.22.05.29l.95.74a3.145 3.145 0 000 .88l-.95.74c-.08.07-.11.19-.05.29l.9 1.55c.05.1.17.13.28.1l1.11-.45c.23.18.48.33.76.44l.17 1.18c.02.11.11.19.22.19h1.79c.11 0 .21-.08.22-.19l.17-1.18c.27-.12.53-.26.75-.44l1.12.45c.1.04.22 0 .28-.1l.9-1.55c.06-.09.03-.21-.05-.28zm-4.29.16a1.35 1.35 0 11.001-2.701 1.35 1.35 0 01-.001 2.701z"}))}function Se(e){return a.exports.createElement("svg",p({viewBox:"0 0 512 512",width:e.width||"1em",length:e.height||"auto"},e),a.exports.createElement("path",{fill:e.color||"#666666",fillRule:"evenodd",d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}))}const z=[{option:"mostrar",icon:r(Se,{}),comp:r(fe,{url:"condiciones",queryKey:"fullterms"})},{option:"editar",icon:r(we,{}),comp:r(ye,{url:"condiciones",queryKey:"terms-to-change"})}];function Ae(){const e=localStorage.getItem("jwt");return a.exports.useEffect(()=>{e&&(ee.defaults.headers.common.jwt=e)},[]),r(E,{children:d(be,{children:[r(J,{linear:W.green,color:"#ffffff"}),r($,{children:r(X,{name:"Terminos y...",options:z,children:r(Y,{options:z})})})]})})}const be=h.div`
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
`;export{Ae as default};

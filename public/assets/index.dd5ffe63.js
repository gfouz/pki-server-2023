import{s as x,r as i,j as e,F as y,a as o,a2 as d,a3 as c}from"./index.5758997f.js";import{t as q}from"./constants.c1eecf01.js";import{C as k}from"./Toast.b6137537.js";import{S as j,D as A}from"./SubmitButton.88641c71.js";import{C,F as G}from"./Card.4ae134fc.js";import{R as I,G as L}from"./Rocket.cee1406e.js";import{G as R}from"./Getter.a26d04f7.js";import{U as _}from"./Updater.da3dff73.js";import{u as D,S as N}from"./StatusHandler.62057e2e.js";import{u as T,a as B}from"./index.esm.c821f254.js";import{d as H,e as K,i as h,b as U}from"./StyledLabel.e157ff4c.js";import{T as z}from"./TextInput.0039b7b4.js";import{A as M}from"./AlphaNumericInput.065e8169.js";import{S as P}from"./Select.0b600880.js";import{E as b,S as Q,a as $,G as J}from"./SearchPlus.225589f0.js";import"./store.93784534.js";import"./chakra-ui-button.esm.904d835a.js";import"./ErrorWarning.eba98df7.js";import"./chakra-ui-select.esm.a2f79340.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";function O(r){var f,g;const{path:v}=r,[p,w]=i.exports.useState("");i.exports.useState([]);const{register:a,handleSubmit:E,formState:{errors:s}}=T(),F="/municipios/enabled/true",{data:n}=D("all-enabled-rolls",()=>H(F)),t=B(l=>K(v,l)),u=(f=t==null?void 0:t.data)==null?void 0:f.message;return(g=t==null?void 0:t.data)==null||g.message,i.exports.useEffect(()=>{w(u)},[u]),e(y,{children:o("form",{onSubmit:E(async l=>{t==null||t.mutateAsync(l)}),children:[e(d,{p:"1em",children:o(c,{children:[e(m,{children:"Nombre de la Entidad de registro"}),e(z,{required:!0,label:"name",errors:s,info:h.name,register:a})]})}),e(d,{p:"1em",children:o(c,{children:[e(m,{children:"Direcci\xF3n de la entidad de registro"}),e(M,{info:h.alpha,required:!0,label:"address",errors:s,register:a})]})}),e(d,{p:"1em",children:o(c,{children:[e(m,{children:"Seleccione el municipio de la entidad de registro"}),e(P,{list:n==null?void 0:n.result,label:"municipioId",register:a,required:!0}),s.municipioId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(j,{buttonstate:t==null?void 0:t.isLoading}),p&&e(N,{message:p})]})})}const m=x.h4`
  color: ${r=>r.color||"#888888"};
  font-weight: bolder;
`,S=[{option:"a\xF1adir",icon:e(b,{}),comp:e(O,{path:"entidades-registro"})},{option:"mostrar",icon:e(Q,{}),comp:e(R,{url:"entidades-registro",queryKey:"entidad-reg-all"})},{option:"buscar",icon:e($,{}),comp:e(J,{allnames:"entidades-registro"})},{option:"habilitados",icon:e(I,{}),comp:e(L,{queryKey:"ent-reg-active",url:"entidades-registro/enabled/true"})},{option:"actualizar",icon:e(b,{}),comp:e(_,{url:"entidades-registro"})}];function be(){const r=localStorage.getItem("jwt");return i.exports.useEffect(()=>{r&&(U.defaults.headers.common.jwt=r)},[]),e(y,{children:o(V,{children:[e(k,{linear:q.green,color:"#ffffff"}),e(A,{children:e(C,{name:"Entidad registro",options:S,children:e(G,{options:S})})})]})})}const V=x.div`
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
`;export{be as default};

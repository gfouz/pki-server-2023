var N=Object.defineProperty,P=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var R=(o,r,t)=>r in o?N(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,L=(o,r)=>{for(var t in r||(r={}))M.call(r,t)&&R(o,t,r[t]);if(A)for(var t of A(r))O.call(r,t)&&R(o,t,r[t]);return o},j=(o,r)=>P(o,V(r));import{j as a,F as E,a as e,r as q,S as s,s as Q}from"./index.9a3ab491.js";import{t as W,D as J}from"./Dashboard.b4fb76d1.js";import{C as X}from"./Toast.cdc41de7.js";import{C as Y,F as Z}from"./Card.db03a57e.js";import{R as ee,G as te}from"./Rocket.503d0db3.js";import{G as re,a as oe}from"./GetByName.ed192aab.js";import{u as B,c as ae,s as ie}from"./store.a90ba17a.js";import{u as $,a as z,e as c,C as u,S as D}from"./SubmitButton.1ee02988.js";import{u as w,S as U}from"./StatusHandler.4ef7e4a9.js";import{a as ne,i as I,b as se}from"./constants.d0510e6a.js";import{S as v}from"./Select.6fafb4a4.js";import{T as H}from"./TextInput.6529562e.js";import{I as ce,E as le}from"./ErrorWarning.3d53457e.js";import{T as ue}from"./chakra-ui-tooltip.esm.4067af7f.js";import{b as de,E as G,S as me,a as pe}from"./SearchPlus.0e08da50.js";import{G as fe}from"./GetByParams.0c3f901a.js";import{C as he}from"./CodeBranch.c380e8d5.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./chakra-ui-select.esm.5205b0a4.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const be="http://localhost:4000",F=ne.create({baseURL:be,withCredentials:!1});F.defaults.headers.common["Content-Type"]="application/json";async function ge(o,r){try{const t=await F.post(o,r);return t==null?void 0:t.data}catch(t){return t}}async function Se(o,r,t){try{return(await F.put(`/${r}/${t}`,o)).data}catch(i){return i}}async function C(o){try{const r=await F.get(o),{data:t}=r;return t}catch(r){return r}}const K=({label:o,register:r,required:t,errors:i,defaultValue:n,info:d})=>a(E,{children:[e(ue,{label:d,hasArrow:!0,arrowSize:15,children:e(ce,L({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:n},r(o,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(le,{label:o,errors:i,info:d})]});function ye(o){var T;const r=B(ae),t=B(ie),{stack:i}=r,{setOption:n}=t,[d,h]=q.exports.useState(""),{register:m,handleSubmit:k,formState:{errors:l}}=$(),g="/users/enabled/true",b="/entidades-registro/enabled/true",{data:S}=w("entidad-actived",()=>C(b)),{data:p}=w("users-act",()=>C(g)),f=z(x=>Se(x,o.url,i.id)),y=(T=f==null?void 0:f.data)==null?void 0:T.message;return q.exports.useEffect(()=>{y&&h(y),y==="updated"&&n("mostrar")},[y]),a(E,{children:[a("form",{onSubmit:k(async x=>{f.mutateAsync(x),console.log(x)}),children:[e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Actualice nombre"}),e(H,{info:I.name,required:!0,label:"name",register:m,errors:l,defaultValue:i.name})]})}),e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Tel\xE9fono del funcionario de registro."}),e(K,{required:!0,info:I.tel,label:"phone",errors:l,register:m,defaultValue:i.phone})]})}),e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(v,{list:S==null?void 0:S.result,label:"erId",register:m,required:!0}),l.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(v,{list:p==null?void 0:p.result,label:"userId",register:m,required:!0}),l.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),a(c,{m:"1em 2em",children:[e(s,{capit:!0,children:"Deshabilitar o habilitar"}),e(de,j(L({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)}))]}),e(D,{buttonstate:f==null?void 0:f.isLoading})]}),d&&e(U,{message:d})]})}function xe(o){const{url:r}=o,[t,i]=q.exports.useState(""),{register:n,handleSubmit:d,formState:{errors:h}}=$(),m="/users/enabled/true",k="/entidades-registro/enabled/true",{data:l}=w("entidad-actived",()=>C(k)),{data:g}=w("users-act",()=>C(m)),b=z(p=>ge(r,p));return a(E,{children:[a("form",{onSubmit:d(async p=>{b.mutateAsync(p)}),children:[e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Nombre del funcionario"}),e(H,{info:I.name,required:!0,label:"name",register:n,errors:h})]})}),e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Tel\xE9fono del funcionario"}),e(K,{required:!0,info:I.tel,label:"phone",errors:h,register:n})]})}),e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(v,{list:l==null?void 0:l.result,label:"erId",register:n,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(c,{p:"1em",children:a(u,{children:[e(s,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(v,{list:g==null?void 0:g.result,label:"userId",register:n,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(D,{buttonstate:b==null?void 0:b.isLoading})]}),t&&e(U,{message:t})]})}const _=[{option:"crear",icon:e(G,{}),comp:e(xe,{url:"funcionarios-registro"})},{option:"mostrar",icon:e(me,{}),comp:e(re,{url:"funcionarios-registro"})},{option:"buscar",icon:e(pe,{}),comp:e(oe,{allnames:"funcionarios-registro"})},{option:"habilitados",icon:e(ee,{}),comp:e(te,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"asociado",icon:e(he,{}),comp:e(fe,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"modificar",icon:e(G,{}),comp:e(ye,{url:"funcionarios-registro"})}];function Pe(){const o=localStorage.getItem("jwt");return q.exports.useEffect(()=>{o&&(se.defaults.headers.common.jwt=o)},[]),e(E,{children:a(qe,{children:[e(X,{linear:W.green,color:"#ffffff"}),e(J,{children:e(Y,{name:"Funcinario..regist",options:_,children:e(Z,{options:_})})})]})})}const qe=Q.div`
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
`;export{Pe as default};

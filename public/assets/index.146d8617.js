var N=Object.defineProperty,P=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var A=(o,r,t)=>r in o?N(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,L=(o,r)=>{for(var t in r||(r={}))M.call(r,t)&&A(o,t,r[t]);if(T)for(var t of T(r))O.call(r,t)&&A(o,t,r[t]);return o},G=(o,r)=>P(o,V(r));import{a,F as C,j as e,r as q,a2 as s,a3 as u,s as Q}from"./index.e9e99ba7.js";import{t as W}from"./constants.c1eecf01.js";import{C as J}from"./Toast.e4de0c17.js";import{S as z,D as X}from"./SubmitButton.2fd5e6eb.js";import{C as Y,F as Z}from"./Card.7290142e.js";import{R as ee,G as te}from"./Rocket.c6cdf64d.js";import{G as re}from"./Getter.c2d4cc05.js";import{u as j,c as oe,s as ae}from"./store.d9601167.js";import{u as $,a as D}from"./index.esm.bdaf8ba0.js";import{u as w,S as K}from"./StatusHandler.420984fb.js";import{a as ie,S as c,i as I,b as ne}from"./StyledLabel.e15bdfe8.js";import{S as v}from"./Select.ca697ddf.js";import{T as U}from"./TextInput.00583772.js";import{T as se,I as ce,E as le}from"./ErrorWarning.55d4a20f.js";import{b as ue,E as B,S as de,a as me,G as pe}from"./SearchPlus.c7e6ddc6.js";import{G as fe}from"./GetByParams.a5856b95.js";import{C as he}from"./CodeBranch.a0150e68.js";import"./chakra-ui-button.esm.d8ba8687.js";import"./chakra-ui-select.esm.f5c0e0bb.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";const be="http://localhost:4000",E=ie.create({baseURL:be,withCredentials:!1});E.defaults.headers.common["Content-Type"]="application/json";async function ge(o,r){try{const t=await E.post(o,r);return t==null?void 0:t.data}catch(t){return t}}async function Se(o,r,t){try{return(await E.put(`/${r}/${t}`,o)).data}catch(i){return i}}async function F(o){try{const r=await E.get(o),{data:t}=r;return t}catch(r){return r}}const H=({label:o,register:r,required:t,errors:i,defaultValue:n,info:d})=>a(C,{children:[e(se,{label:d,hasArrow:!0,arrowSize:15,children:e(ce,L({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:n},r(o,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),e(le,{label:o,errors:i,info:d})]});function ye(o){var R;const r=j(oe),t=j(ae),{stack:i}=r,{setOption:n}=t,[d,h]=q.exports.useState(""),{register:m,handleSubmit:k,formState:{errors:l}}=$(),g="/users/enabled/true",b="/entidades-registro/enabled/true",{data:S}=w("entidad-actived",()=>F(b)),{data:p}=w("users-act",()=>F(g)),f=D(x=>Se(x,o.url,i.id)),y=(R=f==null?void 0:f.data)==null?void 0:R.message;return q.exports.useEffect(()=>{y&&h(y),y==="updated"&&n("mostrar")},[y]),a(C,{children:[a("form",{onSubmit:k(async x=>{f.mutateAsync(x),console.log(x)}),children:[e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Actualice nombre"}),e(U,{info:I.name,required:!0,label:"name",register:m,errors:l,defaultValue:i.name})]})}),e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Tel\xE9fono del funcionario de registro."}),e(H,{required:!0,info:I.tel,label:"phone",errors:l,register:m,defaultValue:i.phone})]})}),e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(v,{list:S==null?void 0:S.result,label:"erId",register:m,required:!0}),l.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(v,{list:p==null?void 0:p.result,label:"userId",register:m,required:!0}),l.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),a(s,{m:"1em 2em",children:[e(c,{capit:!0,children:"Deshabilitar o habilitar"}),e(ue,G(L({},m("enabled")),{id:"enabled",size:"sm",colorScheme:"red",defaultChecked:Boolean(i.enabled)}))]}),e(z,{buttonstate:f==null?void 0:f.isLoading})]}),d&&e(K,{message:d})]})}function xe(o){const{url:r}=o,[t,i]=q.exports.useState(""),{register:n,handleSubmit:d,formState:{errors:h}}=$(),m="/users/enabled/true",k="/entidades-registro/enabled/true",{data:l}=w("entidad-actived",()=>F(k)),{data:g}=w("users-act",()=>F(m)),b=D(p=>ge(r,p));return a(C,{children:[a("form",{onSubmit:d(async p=>{b.mutateAsync(p)}),children:[e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Nombre del funcionario"}),e(U,{info:I.name,required:!0,label:"name",register:n,errors:h})]})}),e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Tel\xE9fono del funcionario"}),e(H,{required:!0,info:I.tel,label:"phone",errors:h,register:n})]})}),e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Seleccione entidad de registro a la que pertenece"}),e(v,{list:l==null?void 0:l.result,label:"erId",register:n,required:!0}),h.erId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(s,{p:"1em",children:a(u,{children:[e(c,{capit:!0,children:"Seleccione usuario al que se vincula"}),e(v,{list:g==null?void 0:g.result,label:"userId",register:n,required:!0}),h.userId&&e("span",{style:{color:"red"},children:"Field is required"})]})}),e(z,{buttonstate:b==null?void 0:b.isLoading})]}),t&&e(K,{message:t})]})}const _=[{option:"a\xF1adir",icon:e(B,{}),comp:e(xe,{url:"funcionarios-registro"})},{option:"mostrar",icon:e(de,{}),comp:e(re,{url:"funcionarios-registro",queryKey:"funcReg-all"})},{option:"buscar",icon:e(me,{}),comp:e(pe,{allnames:"funcionarios-registro"})},{option:"habilitados",icon:e(ee,{}),comp:e(te,{queryKey:"funcReg-act",url:"funcionarios-registro/enabled/true"})},{option:"asociado",icon:e(he,{}),comp:e(fe,{path:"funcionarios-registro/entidad-registro",attached:"entidades-registro",queryKey:"func-reg"})},{option:"actualizar",icon:e(B,{}),comp:e(ye,{url:"funcionarios-registro"})}];function Pe(){const o=localStorage.getItem("jwt");return q.exports.useEffect(()=>{o&&(ne.defaults.headers.common.jwt=o)},[]),e(C,{children:a(qe,{children:[e(J,{linear:W.green,color:"#ffffff"}),e(X,{children:e(Y,{name:"Funcinario..regist",options:_,children:e(Z,{options:_})})})]})})}const qe=Q.div`
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

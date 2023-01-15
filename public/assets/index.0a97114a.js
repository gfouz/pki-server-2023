import{a as o,r as a,F as s,j as n,s as m}from"./index.9a3ab491.js";import{b as c}from"./constants.d0510e6a.js";import{t as p,D as l}from"./Dashboard.b4fb76d1.js";import{C as f}from"./Toast.cdc41de7.js";import{C as d,F as g}from"./Card.db03a57e.js";import{G as u,a as b}from"./GetByName.ed192aab.js";import{C as v,U as x}from"./Creator.2bb1fc50.js";import{E as t,S as h,a as w}from"./SearchPlus.0e08da50.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./store.a90ba17a.js";import"./StatusHandler.4ef7e4a9.js";import"./SubmitButton.1ee02988.js";import"./TextInput.6529562e.js";import"./ErrorWarning.3d53457e.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const i={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"crear",icon:o(t,{}),comp:o(v,{url:"provincias",msg:i.name})},{option:"mostrar",icon:o(h,{}),comp:o(u,{url:"provincias"})},{option:"buscar",icon:o(w,{}),comp:o(b,{allnames:"provincias"})},{option:"modificar",icon:o(t,{}),comp:o(x,{url:"provincias",msg:i.name})}];function N(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(y,{children:[o(f,{linear:p.green,color:"#ffffff"}),o(l,{children:o(d,{name:"provincia",options:e,children:o(g,{options:e})})})]})})}const y=m.div`
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
`;export{N as default};

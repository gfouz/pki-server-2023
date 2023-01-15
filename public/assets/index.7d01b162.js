import{a as o,r as i,F as a,j as s,s as n}from"./index.9a3ab491.js";import{t as l,D as m}from"./Dashboard.b4fb76d1.js";import{C as f}from"./Toast.cdc41de7.js";import{C as p,F as c}from"./Card.db03a57e.js";import{G as d,a as u}from"./GetByName.ed192aab.js";import{C as g,U as x}from"./Creator.2bb1fc50.js";import{E as r,S as b,a as h}from"./SearchPlus.0e08da50.js";import{b as v}from"./constants.d0510e6a.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./store.a90ba17a.js";import"./StatusHandler.4ef7e4a9.js";import"./SubmitButton.1ee02988.js";import"./TextInput.6529562e.js";import"./ErrorWarning.3d53457e.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const e=[{option:"crear",icon:o(r,{}),comp:o(g,{url:"finalidades"})},{option:"mostrar",icon:o(b,{}),comp:o(d,{url:"finalidades"})},{option:"buscar",icon:o(h,{}),comp:o(u,{allnames:"finalidades"})},{option:"modificar",icon:o(r,{}),comp:o(x,{url:"finalidades"})}];function L(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(v.defaults.headers.common.jwt=t)},[]),o(a,{children:s(w,{children:[o(f,{linear:l.green,color:"#ffffff"}),o(m,{children:o(p,{name:"finalidades",options:e,children:o(c,{options:e})})})]})})}const w=n.div`
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
`;export{L as default};

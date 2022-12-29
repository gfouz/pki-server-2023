import{a as o,r as a,F as s,j as n,s as m}from"./index.f52781a9.js";import{b as c}from"./constants.f2e04d14.js";import{t as p,D as l}from"./Dashboard.fd18947c.js";import{C as f}from"./Toast.0ae85c90.js";import{C as d,F as g}from"./Card.ee8d3258.js";import{G as u,a as b}from"./GetByName.cc5377d5.js";import{C as v,U as x}from"./Creator.07c79fd9.js";import{E as t,S as h,a as w}from"./SearchPlus.35f7143c.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./store.e96f2609.js";import"./StatusHandler.ec046620.js";import"./StyledLabel.4d380b9c.js";import"./SubmitButton.96350b2a.js";import"./TextInput.3f5f054c.js";import"./ErrorWarning.4750ca61.js";import"./chakra-ui-checkbox.esm.77685af8.js";const i={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"crear",icon:o(t,{}),comp:o(v,{url:"provincias",msg:i.name})},{option:"mostrar",icon:o(h,{}),comp:o(u,{url:"provincias"})},{option:"buscar",icon:o(w,{}),comp:o(b,{allnames:"provincias"})},{option:"modificar",icon:o(t,{}),comp:o(x,{url:"provincias",msg:i.name})}];function T(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(y,{children:[o(f,{linear:p.green,color:"#ffffff"}),o(l,{children:o(d,{name:"provincia",options:e,children:o(g,{options:e})})})]})})}const y=m.div`
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
`;export{T as default};

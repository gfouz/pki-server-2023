import{a as o,r as i,F as a,j as s,s as n}from"./index.f52781a9.js";import{t as m,D as l}from"./Dashboard.fd18947c.js";import{C as f}from"./Toast.0ae85c90.js";import{C as p,F as c}from"./Card.ee8d3258.js";import{G as d,a as u}from"./GetByName.cc5377d5.js";import{C as g,U as x}from"./Creator.07c79fd9.js";import{E as r,S as b,a as h}from"./SearchPlus.35f7143c.js";import{b as v}from"./constants.f2e04d14.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./store.e96f2609.js";import"./StatusHandler.ec046620.js";import"./StyledLabel.4d380b9c.js";import"./SubmitButton.96350b2a.js";import"./TextInput.3f5f054c.js";import"./ErrorWarning.4750ca61.js";import"./chakra-ui-checkbox.esm.77685af8.js";const e=[{option:"crear",icon:o(r,{}),comp:o(g,{url:"finalidades"})},{option:"mostrar",icon:o(b,{}),comp:o(d,{url:"finalidades"})},{option:"buscar",icon:o(h,{}),comp:o(u,{allnames:"finalidades"})},{option:"modificar",icon:o(r,{}),comp:o(x,{url:"finalidades"})}];function N(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(v.defaults.headers.common.jwt=t)},[]),o(a,{children:s(w,{children:[o(f,{linear:m.green,color:"#ffffff"}),o(l,{children:o(p,{name:"finalidades",options:e,children:o(c,{options:e})})})]})})}const w=n.div`
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

import{a as o,r as i,F as a,j as s,s as n}from"./index.f52781a9.js";import{t as l,D as m}from"./Dashboard.fd18947c.js";import{C as p}from"./Toast.0ae85c90.js";import{C as c,F as f}from"./Card.ee8d3258.js";import{R as d,G as u}from"./Rocket.5ccd8086.js";import{G as b,a as g}from"./GetByName.cc5377d5.js";import{C as h,U as x}from"./Creator.07c79fd9.js";import{E as t,S as y,a as v}from"./SearchPlus.35f7143c.js";import{b as w}from"./constants.f2e04d14.js";import"./chakra-ui-tooltip.esm.eb698682.js";import"./store.e96f2609.js";import"./StatusHandler.ec046620.js";import"./chakra-ui-button.esm.19477a37.js";import"./StyledLabel.4d380b9c.js";import"./SubmitButton.96350b2a.js";import"./TextInput.3f5f054c.js";import"./ErrorWarning.4750ca61.js";import"./chakra-ui-checkbox.esm.77685af8.js";const e=[{option:"crear",icon:o(t,{}),comp:o(h,{url:"rols"})},{option:"mostrar",icon:o(y,{}),comp:o(b,{url:"rols"})},{option:"buscar",icon:o(v,{}),comp:o(g,{allnames:"rols"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"rols-enabled",url:"rols/enabled/true"})},{option:"modificar",icon:o(t,{}),comp:o(x,{url:"rols"})}];function T(){const r=localStorage.getItem("jwt");return i.exports.useEffect(()=>{r&&(w.defaults.headers.common.jwt=r)},[]),o(a,{children:s(j,{children:[o(p,{linear:l.green,color:"#ffffff"}),o(m,{children:o(c,{name:"rol",options:e,children:o(f,{options:e})})})]})})}const j=n.div`
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

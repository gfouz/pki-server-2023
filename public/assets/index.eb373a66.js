import{a as o,r as i,F as s,j as a,s as p}from"./index.9a3ab491.js";import{t as n,D as m}from"./Dashboard.b4fb76d1.js";import{C as l}from"./Toast.cdc41de7.js";import{C as c,F as f}from"./Card.db03a57e.js";import{R as d,G as u}from"./Rocket.503d0db3.js";import{G as b,a as g}from"./GetByName.ed192aab.js";import{C as h,U as x}from"./Creator.2bb1fc50.js";import{E as r,S as y,a as v}from"./SearchPlus.0e08da50.js";import{b as w}from"./constants.d0510e6a.js";import"./chakra-ui-tooltip.esm.4067af7f.js";import"./store.a90ba17a.js";import"./StatusHandler.4ef7e4a9.js";import"./SubmitButton.1ee02988.js";import"./chakra-ui-button.esm.4424dc5b.js";import"./TextInput.6529562e.js";import"./ErrorWarning.3d53457e.js";import"./chakra-ui-checkbox.esm.9abc3503.js";const e=[{option:"crear",icon:o(r,{}),comp:o(h,{url:"propositos"})},{option:"mostrar",icon:o(y,{}),comp:o(b,{url:"propositos"})},{option:"buscar",icon:o(v,{}),comp:o(g,{allnames:"propositos"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"modificar",icon:o(r,{}),comp:o(x,{url:"propositos"})}];function N(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:a(j,{children:[o(l,{linear:n.green,color:"#ffffff"}),o(m,{children:o(c,{name:"provincia",options:e,children:o(f,{options:e})})})]})})}const j=p.div`
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

import{j as o,r as i,F as s,a,s as p}from"./index.e9e99ba7.js";import{t as n}from"./constants.c1eecf01.js";import{C as m}from"./Toast.e4de0c17.js";import{D as l}from"./SubmitButton.2fd5e6eb.js";import{C as c,F as f}from"./Card.7290142e.js";import{R as d,G as u}from"./Rocket.c6cdf64d.js";import{G as b}from"./Getter.c2d4cc05.js";import{U as x}from"./Updater.0f4a6bb6.js";import{C as g}from"./Creator.fce801a0.js";import{E as r,S as h,a as y,G as v}from"./SearchPlus.c7e6ddc6.js";import{b as w}from"./StyledLabel.e15bdfe8.js";import"./store.d9601167.js";import"./StatusHandler.420984fb.js";import"./chakra-ui-button.esm.d8ba8687.js";import"./index.esm.bdaf8ba0.js";import"./TextInput.00583772.js";import"./ErrorWarning.55d4a20f.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(g,{url:"propositos"})},{option:"mostrar",icon:o(h,{}),comp:o(b,{url:"propositos",queryKey:"propositos"})},{option:"buscar",icon:o(y,{}),comp:o(v,{allnames:"propositos"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",icon:o(r,{}),comp:o(x,{url:"propositos"})}];function N(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:a(j,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(l,{children:o(c,{name:"provincia",options:e,children:o(f,{options:e})})})]})})}const j=p.div`
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

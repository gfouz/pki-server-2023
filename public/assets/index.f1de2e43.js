import{j as o,r as a,F as s,a as n,s as m}from"./index.e9e99ba7.js";import{b as c}from"./StyledLabel.e15bdfe8.js";import{t as p}from"./constants.c1eecf01.js";import{C as l}from"./Toast.e4de0c17.js";import{D as f}from"./SubmitButton.2fd5e6eb.js";import{C as d,F as u}from"./Card.7290142e.js";import{R as b,G as v}from"./Rocket.c6cdf64d.js";import{G as g}from"./Getter.c2d4cc05.js";import{U as x}from"./Updater.0f4a6bb6.js";import{C as h}from"./Creator.fce801a0.js";import{E as i,S as y,a as w,G as j}from"./SearchPlus.c7e6ddc6.js";import"./store.d9601167.js";import"./StatusHandler.420984fb.js";import"./chakra-ui-button.esm.d8ba8687.js";import"./index.esm.bdaf8ba0.js";import"./TextInput.00583772.js";import"./ErrorWarning.55d4a20f.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";const t={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"a\xF1adir",icon:o(i,{}),comp:o(h,{url:"provincias",msg:t.name})},{option:"mostrar",icon:o(y,{}),comp:o(g,{url:"provincias",queryKey:"provincias"})},{option:"buscar",icon:o(w,{}),comp:o(j,{allnames:"provincias"})},{option:"habilitados",icon:o(b,{}),comp:o(v,{queryKey:"provincias-enabled",url:"provincias/enabled/true"})},{option:"actualizar",icon:o(i,{}),comp:o(x,{url:"provincias",msg:t.name})}];function T(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(k,{children:[o(l,{linear:p.green,color:"#ffffff"}),o(f,{children:o(d,{name:"provincia",options:e,children:o(u,{options:e})})})]})})}const k=m.div`
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

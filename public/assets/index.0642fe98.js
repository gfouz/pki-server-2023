import{j as o,r as i,F as a,a as s,s as n}from"./index.e9e99ba7.js";import{t as l}from"./constants.c1eecf01.js";import{C as m}from"./Toast.e4de0c17.js";import{D as f}from"./SubmitButton.2fd5e6eb.js";import{C as p,F as d}from"./Card.7290142e.js";import{G as c}from"./Getter.c2d4cc05.js";import{U as u}from"./Updater.0f4a6bb6.js";import{C as x}from"./Creator.fce801a0.js";import{E as r,S as g,a as b,G as h}from"./SearchPlus.c7e6ddc6.js";import{b as y}from"./StyledLabel.e15bdfe8.js";import"./store.d9601167.js";import"./StatusHandler.420984fb.js";import"./index.esm.bdaf8ba0.js";import"./TextInput.00583772.js";import"./ErrorWarning.55d4a20f.js";import"./chakra-ui-checkbox.esm.05c83cdb.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(x,{url:"finalidades"})},{option:"mostrar",icon:o(g,{}),comp:o(c,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",icon:o(b,{}),comp:o(h,{allnames:"finalidades"})},{option:"actualizar",icon:o(r,{}),comp:o(u,{url:"finalidades"})}];function B(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(y.defaults.headers.common.jwt=t)},[]),o(a,{children:s(v,{children:[o(m,{linear:l.green,color:"#ffffff"}),o(f,{children:o(p,{name:"finalidades",options:e,children:o(d,{options:e})})})]})})}const v=n.div`
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
`;export{B as default};

import{j as o,r as i,F as a,a as s,s as n}from"./index.5758997f.js";import{t as l}from"./constants.c1eecf01.js";import{C as m}from"./Toast.b6137537.js";import{D as f}from"./SubmitButton.88641c71.js";import{C as p,F as d}from"./Card.4ae134fc.js";import{G as c}from"./Getter.a26d04f7.js";import{U as u}from"./Updater.da3dff73.js";import{C as x}from"./Creator.d4ff1d81.js";import{E as r,S as g,a as b,G as h}from"./SearchPlus.225589f0.js";import{b as y}from"./StyledLabel.e157ff4c.js";import"./store.93784534.js";import"./StatusHandler.62057e2e.js";import"./index.esm.c821f254.js";import"./TextInput.0039b7b4.js";import"./ErrorWarning.eba98df7.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(x,{url:"finalidades"})},{option:"mostrar",icon:o(g,{}),comp:o(c,{url:"finalidades",queryKey:"finalidades-all"})},{option:"buscar",icon:o(b,{}),comp:o(h,{allnames:"finalidades"})},{option:"actualizar",icon:o(r,{}),comp:o(u,{url:"finalidades"})}];function B(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(y.defaults.headers.common.jwt=t)},[]),o(a,{children:s(v,{children:[o(m,{linear:l.green,color:"#ffffff"}),o(f,{children:o(p,{name:"finalidades",options:e,children:o(d,{options:e})})})]})})}const v=n.div`
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

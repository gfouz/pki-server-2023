import{j as o,r as a,F as s,a as n,s as m}from"./index.5758997f.js";import{b as c}from"./StyledLabel.e157ff4c.js";import{t as p}from"./constants.c1eecf01.js";import{C as l}from"./Toast.b6137537.js";import{D as f}from"./SubmitButton.88641c71.js";import{C as d,F as u}from"./Card.4ae134fc.js";import{R as b,G as v}from"./Rocket.cee1406e.js";import{G as g}from"./Getter.a26d04f7.js";import{U as x}from"./Updater.da3dff73.js";import{C as h}from"./Creator.d4ff1d81.js";import{E as i,S as y,a as w,G as j}from"./SearchPlus.225589f0.js";import"./store.93784534.js";import"./StatusHandler.62057e2e.js";import"./chakra-ui-button.esm.904d835a.js";import"./index.esm.c821f254.js";import"./TextInput.0039b7b4.js";import"./ErrorWarning.eba98df7.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";const t={id:"Escriba nro de Id",name:"Escriba un nombre de provincia."},e=[{option:"a\xF1adir",icon:o(i,{}),comp:o(h,{url:"provincias",msg:t.name})},{option:"mostrar",icon:o(y,{}),comp:o(g,{url:"provincias",queryKey:"provincias"})},{option:"buscar",icon:o(w,{}),comp:o(j,{allnames:"provincias"})},{option:"habilitados",icon:o(b,{}),comp:o(v,{queryKey:"provincias-enabled",url:"provincias/enabled/true"})},{option:"actualizar",icon:o(i,{}),comp:o(x,{url:"provincias",msg:t.name})}];function T(){const r=localStorage.getItem("jwt");return a.exports.useEffect(()=>{r&&(c.defaults.headers.common.jwt=r)},[]),o(s,{children:n(k,{children:[o(l,{linear:p.green,color:"#ffffff"}),o(f,{children:o(d,{name:"provincia",options:e,children:o(u,{options:e})})})]})})}const k=m.div`
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

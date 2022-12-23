import{j as o,r as i,F as s,a,s as p}from"./index.5758997f.js";import{t as n}from"./constants.c1eecf01.js";import{C as m}from"./Toast.b6137537.js";import{D as l}from"./SubmitButton.88641c71.js";import{C as c,F as f}from"./Card.4ae134fc.js";import{R as d,G as u}from"./Rocket.cee1406e.js";import{G as b}from"./Getter.a26d04f7.js";import{U as x}from"./Updater.da3dff73.js";import{C as g}from"./Creator.d4ff1d81.js";import{E as r,S as h,a as y,G as v}from"./SearchPlus.225589f0.js";import{b as w}from"./StyledLabel.e157ff4c.js";import"./store.93784534.js";import"./StatusHandler.62057e2e.js";import"./chakra-ui-button.esm.904d835a.js";import"./index.esm.c821f254.js";import"./TextInput.0039b7b4.js";import"./ErrorWarning.eba98df7.js";import"./chakra-ui-checkbox.esm.ce6c1245.js";const e=[{option:"a\xF1adir",icon:o(r,{}),comp:o(g,{url:"propositos"})},{option:"mostrar",icon:o(h,{}),comp:o(b,{url:"propositos",queryKey:"propositos"})},{option:"buscar",icon:o(y,{}),comp:o(v,{allnames:"propositos"})},{option:"habilitados",icon:o(d,{}),comp:o(u,{queryKey:"propositos-enabled",url:"propositos/enabled/true"})},{option:"actualizar",icon:o(r,{}),comp:o(x,{url:"propositos"})}];function N(){const t=localStorage.getItem("jwt");return i.exports.useEffect(()=>{t&&(w.defaults.headers.common.jwt=t)},[]),o(s,{children:a(j,{children:[o(m,{linear:n.green,color:"#ffffff"}),o(l,{children:o(c,{name:"provincia",options:e,children:o(f,{options:e})})})]})})}const j=p.div`
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

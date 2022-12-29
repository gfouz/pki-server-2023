import{u as r,j as t,F as a,a as e,s as o}from"./index.f52781a9.js";import{S as s}from"./StyledLabel.4d380b9c.js";import{T as c}from"./chakra-ui-tooltip.esm.eb698682.js";function p(){const n=r();function i(){n(-1)}return t(a,{children:[e(c,{label:"Close",children:e(f,{className:"backwards",onClick:i,children:"X"})}),t(d,{children:[e(s,{color:"#ffffff",upper:!0,m:"2em 0",size:"2em",children:"P\xE1gina aun no ex\xEDste."}),e(l,{})]})]})}const d=o.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-image: linear-gradient(90deg, #304352 0%, #d7d2cc 100%);
 background-image: linear-gradient(90deg, #ba8b02 0%, #181818 100%);
`,l=o.img.attrs({src:"./images/icon.png",alt:"logo"})`
  width: 90px;
  height: auto;
`,f=o.button`
  position: fixed;
  top: 9px;
  right: 1em;
  width: 30px;
  height: 30px;
  color: #ff0000;
  display: flex;
  justify-content: center;
  line-height: 26px;
  font-weight: bolder;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 10px #777777;
  &:hover {
    color: white;
    background-color: red;
  }
`;export{p as default};

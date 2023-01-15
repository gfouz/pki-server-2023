import{u as i,j as r,F as s,a as o,s as t}from"./index.9a3ab491.js";import{T as a}from"./chakra-ui-tooltip.esm.4067af7f.js";function h(){const e=i();function n(){e(-1)}return r(s,{children:[o(a,{label:"Close",children:o(d,{className:"backwards",onClick:n,children:"X"})}),o(l,{children:o(c,{})})]})}const l=t.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #23074a;
`,c=t.img.attrs({src:"./images/notfound.jpg",alt:"logo"})`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: fill;
`,d=t.button`
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
`;export{h as default};

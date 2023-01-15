import{s as r,u as l,j as i,F as s,a as e}from"./index.9a3ab491.js";import{T as c}from"./chakra-ui-tooltip.esm.4067af7f.js";function g(t,a,o){return parseInt(t.toString().substring(a,o))}let n=new Date().getFullYear();new Date().getMonth()+1;n=g(n,2,4);const x={green:"linear-gradient(to right, #222222, #9900FF );",rainbow:"linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);"};function b({children:t}){const a=l();function o(){a("/admin")}return i(s,{children:[e(c,{label:"Close",children:e(p,{className:"backwards",onClick:o,children:"X"})}),i(h,{children:[e(d,{children:"Administrar"}),e("main",{children:t}),i(f,{children:["Segurm\xE1tica pki ",e("b",{children:" \xA9"})," ",new Date().getFullYear()]})]})]})}const h=r.div`
  display: grid;
  width: 100%;
  min-height: 100vh;

  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;

  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dashboard__footer {
    grid-area: footer;
    text-align: center;
    line-height: 60px;
    font-weight: bolder;
    background-color: #99999920;
  }
`,d=r.div`
  text-align: center;
  line-height: 60px;
  text-transform: uppercase;
  grid-area: header;
  color: #372381;
  font-weight: bolder;
  background-image: linear-gradient(90deg, #a1ffce 0%, #faffd1 100%);
`,f=r(d)`
  grid-area: footer;
`,p=r.button`
  position: fixed;
  top: 15px;
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
`;export{b as D,x as t};

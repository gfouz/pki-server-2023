import{u,r as x,j as o,F as b,a as e,L as k,s as t}from"./index.f52781a9.js";import{u as c,a as y,s as w}from"./store.e96f2609.js";import{S as l}from"./StyledLabel.4d380b9c.js";import{T as C}from"./chakra-ui-tooltip.esm.eb698682.js";function R(){var r,s;const g=c(y),{user:i}=g,m=c(w),a=u(),p=localStorage.getItem("jwt");x.exports.useEffect(()=>{setTimeout(()=>{!p&&a("/login")},1e3)});function h(){a("/")}return o(b,{children:[e(C,{label:"Close",children:e(T,{className:"backwards",onClick:h,children:"X"})}),o(L,{children:[o(d,{children:[e(A,{}),"Administrar funcionalidades."]}),e(l,{m:"1em 0",center:!0,size:"2em",children:"PKI-SEGURM\xC1TICA"}),e(f,{}),o(S,{children:[e(l,{color:"#444444",size:"1.2em",upper:!0,children:"Lista de funcionalidades"}),e(j,{}),i?(s=(r=i==null?void 0:i.Rol)==null?void 0:r.Funcionalidades)==null?void 0:s.map(n=>e(I,{children:e(F,{children:e(k,{to:n==null?void 0:n.path,onClick:()=>m.setOption("mostrar"),children:n==null?void 0:n.name})})},n.id)):e(z,{children:"Sin datos disponibles, o in\xEDcio de seci\xF3n requerido"})]}),o(v,{children:[" PKI-SEGURM\xC1TICA \xA9 ",new Date().getFullYear()," "]})]})]})}const L=t.div.attrs({className:"admin"})`
  min-height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('./images/admin.jpg');
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`,d=t.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #265728;
  text-transform: uppercase;
  font-family: calibri;
  background-image: linear-gradient(90deg, #a1ffce 0%, #faffd1 100%);
`,v=t(d)`
  justify-content: center;
`,j=t.div`
  height: 1px;
  border: 1px solid red;
`,f=t.img.attrs({src:"./images/icon.png",alt:"logo"})`
  width: 70px;
  height: auto;
`,A=t(f)`
  display: block-inline;
  width: 30px;
  margin: 0 1em;
`,S=t.div`
  padding: 2em 1em;
  margin: 2em 0;
  min-height: 400px;
  border-radius: 10px;
  background-color: #f1f1f1;
`,I=t.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,F=t.li`
  color: #222222;
  margin: 0.5em 0;
  font-weight: bolder;
  text-align: left;
  list-style-type: none;
`,z=t.div.attrs({className:"default-message"})`
  color: #999999;
  margin: 2em 0;
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
`,T=t.button`
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
`;export{R as default};

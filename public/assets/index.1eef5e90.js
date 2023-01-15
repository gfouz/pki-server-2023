import{u as d,r as l,j as t,a as e,S as i,s as a}from"./index.9a3ab491.js";import{L as m}from"./Layout.7c907c31.js";import"./Toast.cdc41de7.js";import"./chakra-ui-button.esm.4424dc5b.js";const o=[{title:"Certificado de autoridad de certificaci\xF3n",text:`La tecnolog\xEDa de clave p\xFAblica (PKI, Public Key 
    Infrastructure o Infraestructura de
    Clave P\xFAblica) se usa para aumentar 
    el nivel de confianza en los intercambios de
    informaci\xF3n con sus usuarios a trav\xE9s 
    de medios telem\xE1ticos.`},{title:"Declaraci\xF3n de pr\xE1cticas de certificaci\xF3n",text:`Documento donde Segurm\xE1tica, manifiesta pol\xEDticas 
    y procedimientos para el ejercicio de su autoridad, 
    el uso de los certificados digitales bajo su jurisdicci\xF3n 
    y tr\xE1mites asociados, basados en los preceptos 
    generales del \u201CReglamento para la Criptograf\xEDa 
    y con Servicio Cifrado en Cuba y el exterior con referencias
    internacionales`},{title:"C\xF3digo de \xE9tica",text:`C\xF3digo de \xE9tica que regula el comportamiento de los 
    trabajadores de la empresa Segurm\xE1tica relacionados con la 
    prestaci\xF3n de los Servicios de Certificaci\xF3n.`}];function k(){const n=d(),c=localStorage.getItem("token");return l.exports.useEffect(()=>{setTimeout(()=>{!c&&n("/login")},2e3)}),t(m,{children:[e(g,{}),e(p,{children:t(x,{children:[e(i,{center:!0,size:"1.2em",m:"3em 0 0.5em 0",color:"#304352",upper:!0,space:"7px",children:"Servicio de Llave P\xFAblica (PKI) de Segurm\xE1tica"}),e(f,{children:e(h,{})}),e(b,{children:o==null?void 0:o.map((r,s)=>t(y,{children:[e(i,{size:"0.8em",children:r.title}),e(i,{fam:"signika",size:"14px",color:"#222222",m:"0",children:r.text})]},s))}),e(i,{center:!0,upper:!0,p:"2em 0",children:"M\xE1s de 25 a\xF1os, trabajando con la seguridad inform\xE1tica"}),e("button",{onClick:()=>{localStorage.clear()},children:"clear localStorage"}),"*/"]})})]})}const p=a.div`
  width: 100%;
  height: 100%;
  background-image: url('./images/modern.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`,x=a.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 500px) {
      font-size: 1.5em;
    }
`,u=a.img.attrs({src:"./images/icon.png",alt:"logo"})`
  width: 70px;
  height: auto;
`,g=a(u)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
`,f=a.div`
 padding: 2em;
 display: flex;
 justify-content: center;
`,h=a.img.attrs({src:"./images/home.jpg",alt:"team"})`
  max-width: 70%;
  height: auto;
`,b=a.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`,y=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  padding: 1em;
  box-shadow: 1px 1px 10px #222222;
  border-radius: 10px;
  margin: 5px;
`;export{k as default};

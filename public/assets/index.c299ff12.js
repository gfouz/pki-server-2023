import{u as m,r as s,j as o,a as t,s as i}from"./index.f52781a9.js";import{L as l}from"./Layout.20eaf5e2.js";import{S as a}from"./StyledLabel.4d380b9c.js";import"./Toast.0ae85c90.js";import"./chakra-ui-button.esm.19477a37.js";function x(){const n=m(),r=localStorage.getItem("jwt");return s.exports.useEffect(()=>{setTimeout(()=>{!r&&n("/login")},2e3)}),o(l,{children:[t(g,{}),t(c,{children:o("section",{className:"homepage",children:[t(a,{size:"2em",m:"3em 0 0.5em 0",color:"#490a60",fam:"signika",space:"7px",children:"Segurm\xE1tica pki"}),t(e,{}),t("button",{onClick:()=>{localStorage.clear()},children:"clear localStorage"}),t(a,{fam:"signika",size:"14px",color:"#222222",m:"4em 0",children:"M\xE1s de 25 a\xF1os de experiencia en seguridad inform\xE1tica."})]})})]})}const c=i.div`
  width: 100%;
  height: 100%;
  background-image: url('./images/modern.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  section {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 500px) {
      font-size: 1.5em;
    }
  }
  .homepage__logo {
    width: 120px;
    height: auto;
    position: absolute;
    top: -20px;
    left: 0;
  }
  .homepage__image {
    max-width: 100%;
    height: auto;
    margin: 4em 0 0 0;
  }
  article {
    position: relative;
    top: 3em;
    width: 100%;
    text-align: center;
    img {
      margin: 0 2em;
      opacity: 0;
      animation: logo;
      animation-delay: 0.2s;
      animation-duration: 1s;
      animation-direction: normal;
      animation-fill-mode: forwards;
    }
  }
  .article__title {
    opacity: 0;
    color: #0099ff;
    font-size: 3.2em;
    font-weight: bolder;
    font-family: calibri;
    animation: pki;
    animation-delay: 0.2s;
    animation-duration: 1.5s;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }
  .article__subtitle {
    fontsize: 20px;
    margin: 2em 0 2em 0;
    color: #000000;
    whitespace: nowrap;
    fontfamily: calibri;
  }
  @keyframes logo {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes pki {
    from {
      opacity: 0;
      transform: rotateY(180deg);
    }
    to {
      opacity: 1;
      transform: rotateY(0);
    }
  }
  @font-face {
    font-family: 'signika';
    src: local('signika'), url('./fonts/signika.ttf') format('truetype');
    font-weight: bolder;
    font-display: block;
  }
`,e=i.img.attrs({src:"./images/icon.png",alt:"logo"})`
  width: 70px;
  height: auto;
`,g=i(e)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
`;export{x as default};

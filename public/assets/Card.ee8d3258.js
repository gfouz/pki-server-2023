var y=Object.defineProperty,_=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(n,o,a)=>o in n?y(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a,f=(n,o)=>{for(var a in o||(o={}))w.call(o,a)&&v(n,a,o[a]);if(m)for(var a of m(o))N.call(o,a)&&v(n,a,o[a]);return n},p=(n,o)=>_(n,k(o));import{s as c,r as x,a as t,F as b,v as h,j as d}from"./index.f52781a9.js";import{u as r,s as u,b as g}from"./store.e96f2609.js";function I({options:n}){let a=r(u).opt;const[i,s]=x.exports.useState("");return x.exports.useEffect(()=>{s(a)},[a]),t(b,{children:n&&n.map((e,l)=>i==e.option&&t(S,{children:e.comp},l))})}const S=c.div`
  display: flex;
  justify-content: center;
  margin: 3em 0;
`,j=c.div`
  width: 100%;
  background-color: ${n=>n.bg};
  margin: ${n=>n.margin};
  padding: ${n=>n.padding||"1em 0"};

  .nav {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    &__list {
      padding: 1em 0;
    }
    &__item {
      display: flex;
      padding: 0.5em;
    }
    &__item:hover {
      color: violet;
    }
    .nav__icon {
      position: relative;
      top: 2px;
      margin: 0 0.5em 0 0;
    }

    .nav__link {
      color: #222222;
      font-weight: bolder;
      font-size: 0.8em;
      text-transform: uppercase;
    }
    .nav__link:hover {
      color: green;
    }
  }

  .nav__button {
    color: #555555;
    text-transform: uppercase;
  }
  .nav__button:focus {
    color: #000000;
    font-weight: bolder;
  }

  .hidden {
    display: none;
  }
  .visible {
    font-family: inherit;
  }

  ${n=>n.mixed&&h`
      background-image: linear-gradient(#808080, #000000);
      .navbar-links {
        a {
          color: #ffffff;
        }
      }
    `}

  ${n=>n.dark&&h`
      background-color: #666666;
      .nav__item {
        color: #ffffff;
      }
    `}

  ${n=>n.column&&h`
      .nav {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    `}
`;function C(n){const o=r(u),a=r(g),{setOption:i}=o,{reverse:s}=a;return t(b,{children:t(j,p(f({},n),{children:t("div",{className:"nav",children:Array.isArray(n.options)&&n.options.map((e,l)=>d("div",{className:"nav__item",children:[t("div",{className:"nav__icon",style:{display:(e==null?void 0:e.option)==="modificar"||(e==null?void 0:e.option)==="habilitados"?"none":"block"},children:e==null?void 0:e.icon}),t("div",{children:t("button",{className:"nav__button",onClick:()=>{i(e.option),s()},children:t("a",{className:"nav__link",children:t("span",{style:{display:(e==null?void 0:e.option)==="modificar"||(e==null?void 0:e.option)==="habilitados"?"none":"inline"},children:e==null?void 0:e.option})})})})]},l))})}))})}function $(n){const o=r(g),{st:a}=o;return t(F,{children:t("div",{className:a?"opened":"closed",children:t(C,{column:!0,options:n.options})})})}const F=c.nav`
  .opened {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #ffffff;
    transition: all 1s;
    transform: translateX(0);
    width: 60%;
    z-index: 10;
  }
  .closed {
    display: none;
    transform: translateX(-40%);
  }
`,z=({st:n,reverse:o})=>t(X,{children:d("button",{onClick:()=>o(),children:[t("div",{className:n?"opened":"closed"}),t("div",{className:n?"opened":"closed"}),t("div",{className:n?"opened":"closed"})]})}),X=c.div`
  button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 200px;
    height: 30px;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;

    &:focus {
      outline: none;
    }
  }
  .opened {
    width: 1.5rem;
    height: 0.2rem;
    background: #009966;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: -0.5px;

    :first-child {
      transform: rotate(30deg);
    }

    :nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }

    :nth-child(3) {
      transform: rotate(-30deg);
    }
  }

  .closed {
    width: 1.5rem;
    height: 0.2rem;
    background: #ffffff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    left: -15px;
    top: 10px;

    transform-origin: 0;

    :first-child {
      transform: rotate(0);
    }

    :nth-child(2) {
      opacity: 1;
      transform: translateX(0);
    }

    :nth-child(3) {
      transform: rotate(0);
    }
  }
`;function q(n){const o=r(u),a=r(g),{opt:i}=o,{st:s,reverse:e,setFalse:l}=a;return d(A,p(f({},n),{children:[d("header",{children:[d("h2",{className:"header__title",children:["Admin...",n.name]}),t(z,{st:s,reverse:e})]}),t($,{options:n.options}),t("main",{onClick:l,children:n.children}),t("footer",{children:i})]}))}const A=c.div`
  box-shadow: 2px 2px 10px #999999;
  background-color: #ffffff;
  margin: 4em 0;
  position: relative;
  display: grid;
  min-width: 320px;
  min-height: 400px;

  grid-template-areas:
    'header header'
    'main  main'
    'footer  footer';
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr;

  header {
    grid-area: header;
    line-height: 50px;
    text-align: center;
    color: #fff4a3;
    background-color: #444444;
  }
  .header__title {
    text-transform: uppercase;
    font-family: calibri;
  }
  main {
    grid-area: main;
  }
  .option {
    font-size: 2em;
    font-weight: bolder;
    color: red;
  }

  footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    text-transform: uppercase;
    color: #999999;
  }
`;export{q as C,I as F};

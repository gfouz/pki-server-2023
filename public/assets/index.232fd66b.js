var s=Object.defineProperty,d=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var e=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var r=(i,o,t)=>o in i?s(i,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[o]=t,n=(i,o)=>{for(var t in o||(o={}))p.call(o,t)&&r(i,t,o[t]);if(e)for(var t of e(o))g.call(o,t)&&r(i,t,o[t]);return i},l=(i,o)=>d(i,f(o));import{j as a,s as c,a as m}from"./index.5758997f.js";import{L as h}from"./Layout.83808c17.js";import"./Toast.b6137537.js";import"./chakra-ui-button.esm.904d835a.js";function u(i){return a(y,l(n({},i),{children:a("div",{className:"line"})}))}const y=c.div`
  width: 100%;
  margin: 0 0 2em 0;
  .line {
    position: relative;
    left: 5%;
    right: 5%;
    height: 5px;
    border-radius: 2px;
    animation: line 2s;
    animation-fill-mode: forwards;
    background-color: ${i=>i.color};
  }
  @keyframes line {
    from {
      width: 0;
      background-color: #ffffff;
    }
    to {
      width: 90%;
      background-color: ${i=>i.color};
    }
  }
`;function v(){return localStorage.getItem("jwt"),a(h,{children:a(w,{children:m("section",{className:"homepage",children:[m("article",{children:[a("p",{className:"article__title",children:"PKI"}),a(u,{color:"#1799ff"})]}),a("img",{src:"./images/homepage.png",alt:"man",className:"homepage__image"}),a("button",{onClick:()=>{localStorage.clear()},children:"clear localStorage"}),a("h2",{className:"article__subtitle",children:"M\xC1S DE 25 A\xD1OS DE EXPERIENCIA."})]})})})}const w=c.div`
  width: 100%;

  section {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;export{v as default};

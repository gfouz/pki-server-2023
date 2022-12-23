var j=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var P=(s,l,n)=>l in s?j(s,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[l]=n,v=(s,l)=>{for(var n in l||(l={}))A.call(l,n)&&P(s,n,l[n]);if(N)for(var n of N(l))I.call(l,n)&&P(s,n,l[n]);return s};import{u as H}from"./chakra-ui-checkbox.esm.ce6c1245.js";import{h as F,n as O,y as T,r as o,d as b,c as B,D as z,s as y,j as c,F as M,a,a2 as R,a3 as V,E as q,a1 as D}from"./index.5758997f.js";import{u as L,c as G,s as K}from"./store.93784534.js";import{d as Q,c as W,S as J}from"./StyledLabel.e157ff4c.js";import{u as U,S as X}from"./StatusHandler.62057e2e.js";import{I as Y}from"./ErrorWarning.eba98df7.js";function p(){return p=Object.assign||function(s){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(s[t]=n[t])}return s},p.apply(this,arguments)}function Z(s,l){if(s==null)return{};var n={},t=Object.keys(s),e,d;for(d=0;d<t.length;d++)e=t[d],!(l.indexOf(e)>=0)&&(n[e]=s[e]);return n}var m=["spacing","children"],pe=F(function(s,l){var n=O("Switch",s),t=T(s),e=t.spacing,d=e===void 0?"0.5rem":e,f=t.children,u=Z(t,m),i=H(u),g=i.state,r=i.getInputProps,S=i.getCheckboxProps,w=i.getRootProps,_=i.getLabelProps,k=o.exports.useMemo(function(){return p({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},n.container)},[n.container]),C=o.exports.useMemo(function(){return p({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},n.track)},[n.track]),h=o.exports.useMemo(function(){return p({userSelect:"none",marginStart:d},n.label)},[d,n.label]);return o.exports.createElement(b.label,p({},w(),{className:B("chakra-switch",s.className),__css:k}),o.exports.createElement("input",p({className:"chakra-switch__input"},r({},l))),o.exports.createElement(b.span,p({},S(),{className:"chakra-switch__track",__css:C}),o.exports.createElement(b.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":z(g.isChecked),"data-hover":z(g.isHovered)})),f&&o.exports.createElement(b.span,p({className:"chakra-switch__label"},_(),{__css:h}),f))});function ue({data:s}){const l=L(G),n=L(K),t=e=>{l.setStack(e),n.setOption("actualizar")};return c(M,{children:c(ee,{children:Array.isArray(s)?s==null?void 0:s.map((e,d)=>c("ul",{className:"list",onClick:()=>t(e),children:a("li",{className:e!=null&&e.enabled?"list__item":"disabled",children:[a("p",{children:[" ",e!=null&&e.name?e==null?void 0:e.name:null]}),a("p",{children:[" ",(e==null?void 0:e.ci)&&`dni: ${e==null?void 0:e.ci}`]}),a("p",{children:[" ",(e==null?void 0:e.tome)&&`tomo: ${e==null?void 0:e.tome}`]}),a("p",{children:[" ",(e==null?void 0:e.folio)&&`folio: ${e==null?void 0:e.folio}`]}),a("p",{children:[" ",(e==null?void 0:e.email)&&`correo: ${e==null?void 0:e.email}`," "]}),a("p",{children:[" ",(e==null?void 0:e.rol)&&`rol: ${e==null?void 0:e.rol}`," "]}),a("p",{children:[" ",(e==null?void 0:e.price)&&`precio: ${e==null?void 0:e.price}`]}),a("p",{children:[" ",(e==null?void 0:e.range)&&`rango: ${e==null?void 0:e.range}`]}),a("p",{children:[" ",(e==null?void 0:e.phone)&&`tel: ${e==null?void 0:e.phone}`]}),a("p",{children:[" ",(e==null?void 0:e.id)&&`id: ${e==null?void 0:e.id}`]}),a("p",{children:[" ",(e==null?void 0:e.enabled)===!0?"Estado: habilitado":"Estado: desabilitado"]})]})},d)):c("p",{className:"default-message",children:"no data available"})})})}const ee=y.div`
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .default-message {
    color: #ff0000;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
  }

  .list {
    cursor: pointer;
    width: 320px;
    padding: 1em;
    margin: 0.1em;
    border-radius: 10px;
    background-color: #e7e9eb;
  }
  .list__item {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #009966;
    text-align: left;
    list-style-type: none;
  }
  .disabled {
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 0.7em;

    padding: 0.7em;
    color: #999999;
    text-align: left;
    list-style-type: none;
  }

  .list:hover {
    animation: jello-horizontal 0.9s both;
  }

  @keyframes jello-horizontal {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(1.05, 0.9, 1);
    }
    40% {
      transform: scale3d(0.85, 1.05, 1);
    }
    50% {
      transform: scale3d(1.05, 0.9, 1);
    }
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }
`,re=({data:s})=>{const l=s==null?void 0:s.map(h=>h.name),[n,t]=o.exports.useState([""]),[e,d]=o.exports.useState(0),[f,u]=o.exports.useState(!1),[i,g]=o.exports.useState(""),[r,S]=o.exports.useState(),w=h=>{const x=h.target.value.toLowerCase();if(g(x),x.length>1){const E=l==null?void 0:l.filter($=>($==null?void 0:$.toLowerCase().indexOf(x))>-1);t(E),u(!0)}else u(!1)},_=h=>{t([]),g(h.target.innerHTML),u(!1)},k=h=>{if(h.keyCode===38){if(e===0)return;d(e-1)}else if(h.keyCode===40){if(e-1===n.length)return;d(e+1)}else h.keyCode===13&&(g(n[e]),d(0),u(!1))},C=()=>c("ul",{className:"suggestions",children:n==null?void 0:n.map((h,x)=>c("li",{className:x===e?"active":"",onClick:E=>_(E),style:{listStyleType:"none",cursor:"pointer"},children:h},x))});return o.exports.useEffect(()=>{S(s==null?void 0:s.find(h=>h.name===i))},[i]),a(se,{children:[c(Y,{className:"searchbox__input",type:"text",value:i,variant:"flushed",onChange:w,onKeyDown:k}),f&&c(C,{}),!f&&c(ne,{children:c("ul",{className:"list",children:a("li",{className:"list__item",children:[a("span",{children:[" ",(r==null?void 0:r.name)&&`Nombre: ${r==null?void 0:r.name}`]}),a("span",{children:[" ",(r==null?void 0:r.ci)&&`Carnet: ${r==null?void 0:r.ci}`]}),a("span",{children:[" ",(r==null?void 0:r.tome)&&`Tomo: ${r==null?void 0:r.tome}`]}),a("span",{children:[" ",(r==null?void 0:r.folio)&&`Folio: ${r==null?void 0:r.folio}`]}),a("span",{children:[" ",(r==null?void 0:r.email)&&`Correo: ${r==null?void 0:r.email}`," "]}),a("span",{children:[" ",(r==null?void 0:r.price)&&`Precio: ${r==null?void 0:r.price}`]}),a("span",{children:[" ",(r==null?void 0:r.range)&&`Rango: ${r==null?void 0:r.range}`]}),a("span",{children:[" ",(r==null?void 0:r.phone)&&`Tel: ${r==null?void 0:r.phone}`]}),a("span",{children:[" ",(r==null?void 0:r.address)&&`domicilio: ${r==null?void 0:r.address}`]}),a("span",{children:[" ",(r==null?void 0:r.enabled)&&(r==null?void 0:r.enabled)===!0&&"Estado: habilitado"]})]})})})]})},se=y.div`
.suggestions {
  color: #0F5BFF;
  font-weight: bolder;
}
`,ne=y.div`
  margin: 1em 0;
  .list {
    display: flex;
    flex-direction: column;
  }
  .list__item {
    list-style-type: none;
    span {
      display: block;
    }
    font-style: italic;
    font-weight: bolder;
  }
`;function fe(s){const{allnames:l}=s,[n,t]=o.exports.useState(""),{data:e,isError:d,isLoading:f}=U("all-names",()=>Q(l)),u=e==null?void 0:e.result,i=(e==null?void 0:e.message)||e;return o.exports.useEffect(()=>{W(i,t)},[i]),c(M,{children:c(R,{p:"1em",children:a(V,{children:[c(J,{m:"0.5em 0",color:"#009966",upper:!0,children:"B\xFAsqueda por nombre."}),c(re,{data:u}),a(ae,{children:[d&&c("div",{children:"An error ocurred..."}),f&&a("div",{children:[c(q,{size:"sm",color:"white"}),c(D,{color:"white",children:"Loading..."})]}),n&&c(X,{message:n})]})]})})})}const ae=y.div`
  width: 100%;
`;function ge(s){return o.exports.createElement("svg",v({viewBox:"0 0 576 512",width:s.width||"1em",length:s.height||"auto"},s),o.exports.createElement("path",{fill:s.color,d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}))}function xe(s){return o.exports.createElement("svg",v({viewBox:"0 0 512 512",width:s.width||"1em",length:s.height||"auto"},s),o.exports.createElement("path",{fill:s.color,d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))}function ve(s){return o.exports.createElement("svg",v({viewBox:"0 0 512 512",width:s.width||"1em",length:s.height||"auto"},s),o.exports.createElement("path",{fill:s.color,d:"M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"}))}export{ue as A,ge as E,fe as G,ve as S,xe as a,pe as b};

var m=Object.defineProperty;var D=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,ln=Object.prototype.propertyIsEnumerable;var K=(r,e,a)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a,k=(r,e)=>{for(var a in e||(e={}))nn.call(e,a)&&K(r,a,e[a]);if(D)for(var a of D(e))ln.call(e,a)&&K(r,a,e[a]);return r};import{u as rn}from"./chakra-ui-checkbox.esm.9abc3503.js";import{h as sn,o as on,B as an,r as d,d as C,c as cn,G as q,s as h,a as s,F as en,j as o,S as y}from"./index.9a3ab491.js";import{u as _,c as G,s as Q}from"./store.a90ba17a.js";import{T as W}from"./chakra-ui-tooltip.esm.4067af7f.js";import{u as dn}from"./StatusHandler.4ef7e4a9.js";import{g as pn}from"./constants.d0510e6a.js";import{I as un}from"./ErrorWarning.3d53457e.js";function b(){return b=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var p in a)Object.prototype.hasOwnProperty.call(a,p)&&(r[p]=a[p])}return r},b.apply(this,arguments)}function hn(r,e){if(r==null)return{};var a={},p=Object.keys(r),n,i;for(i=0;i<p.length;i++)n=p[i],!(e.indexOf(n)>=0)&&(a[n]=r[n]);return a}var tn=["spacing","children"],An=sn(function(r,e){var a=on("Switch",r),p=an(r),n=p.spacing,i=n===void 0?"0.5rem":n,t=p.children,f=hn(p,tn),g=rn(f),x=g.state,v=g.getInputProps,S=g.getCheckboxProps,l=g.getRootProps,$=g.getLabelProps,u=d.exports.useMemo(function(){return b({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},a.container)},[a.container]),P=d.exports.useMemo(function(){return b({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},a.track)},[a.track]),M=d.exports.useMemo(function(){return b({userSelect:"none",marginStart:i},a.label)},[i,a.label]);return d.exports.createElement(C.label,b({},l(),{className:cn("chakra-switch",r.className),__css:u}),d.exports.createElement("input",b({className:"chakra-switch__input"},v({},e))),d.exports.createElement(C.span,b({},S(),{className:"chakra-switch__track",__css:P}),d.exports.createElement(C.span,{__css:a.thumb,className:"chakra-switch__thumb","data-checked":q(x.isChecked),"data-hover":q(x.isHovered)})),t&&d.exports.createElement(C.span,b({className:"chakra-switch__label"},$(),{__css:M}),t))});function Nn({data:r}){const e=_(G),a=_(Q),p=n=>{e.setStack(n),a.setOption("modificar")};return s(en,{children:s(gn,{children:Array.isArray(r)?r==null?void 0:r.map(n=>{var i,t,f,g,x,v,S,l,$;return s(bn,{onClick:()=>p(n),children:s(W,{label:"Haga clic para modificar!",children:s(vn,{children:o(yn,{className:n!=null&&n.enabled?"list__item":"disabled",children:[o(fn,{children:[s(xn,{}),s(y,{color:"#009688",fam:"signika",size:"1.1em",space:"5px",m:"0 0.5em",capit:!0,children:n==null?void 0:n.type})]}),o("p",{style:{textTransform:"uppercase"},children:[" ",n!=null&&n.name?n==null?void 0:n.name:null]}),o("p",{children:[" ",n!=null&&n.ci?`Carnet: ${n==null?void 0:n.ci}`:null]}),o("p",{children:[" ",n!=null&&n.tome?`Tomo: ${n==null?void 0:n.tome}`:null]}),o("p",{children:[" ",n!=null&&n.folio?`Folio: ${n==null?void 0:n.folio}`:null]}),o("p",{children:[" ",n!=null&&n.email?`Correo: ${n==null?void 0:n.email}`:null," "]}),o("p",{children:[" ",n!=null&&n.Rol?`Rol: ${(i=n==null?void 0:n.Rol)==null?void 0:i.name}`:null," "]}),o("p",{children:[" ",n!=null&&n.User?`Usuario: ${(t=n==null?void 0:n.User)==null?void 0:t.name}`:null," "]}),o("p",{children:[" ",n!=null&&n.User?`Correo: ${(f=n==null?void 0:n.User)==null?void 0:f.email}`:null," "]}),o("p",{children:[" ",n!=null&&n.EntidadesRegistro?`Oficina: ${n==null?void 0:n.EntidadesRegistro.name}`:null," "]}),o("p",{children:[" ",n!=null&&n.Organismo?`Organismo: ${(g=n==null?void 0:n.Organismo)==null?void 0:g.name}`:null," "]}),o("p",{children:[" ",n!=null&&n.price?`Precio: ${n==null?void 0:n.price}`:null]}),o("p",{children:[" ",n!=null&&n.range?`Rango: ${n==null?void 0:n.range}`:null]}),o("p",{children:[" ",n!=null&&n.phone?`Tel: ${n==null?void 0:n.phone}`:null]}),o("p",{children:[" ",n!=null&&n.Provincia?`Pertenece a: ${(x=n==null?void 0:n.Provincia)==null?void 0:x.name}`:null]}),o("p",{children:[" ",n!=null&&n.Municipio?`Pertenece a municipio: ${(v=n==null?void 0:n.Municipio)==null?void 0:v.name}`:null]}),o("p",{children:[" ",n!=null&&n.address?`Domicilio: ${n==null?void 0:n.address}`:null]}),s("p",{style:{color:n!=null&&n.enabled?"#ff0000":"#999999"},children:(n==null?void 0:n.enabled)===!0?"Estado: habilitado":"Estado: desabilitado"}),o(Sn,{children:[n!=null&&n.Municipios?s(y,{color:"#333333",space:"5px",children:"Municipios:"}):null,(S=n==null?void 0:n.Rol)!=null&&S.Funcionalidades?s(y,{color:"#333333",space:"5px",children:"Funcionalidades:"}):null,n!=null&&n.Funcionalidades?s(y,{color:"#333333",space:"5px",children:"Funcionalidades:"}):null,n!=null&&n.EmpresasInstituciones?s(y,{color:"",space:"5px",children:"Empresas o instituciones:"}):null,n!=null&&n.Municipios?n.Municipios.map(u=>s("ul",{children:s(E,{children:u.name})},String(u.id))):null,n!=null&&n.Funcionalidades?n.Funcionalidades.map(u=>s("ul",{children:s(E,{children:u.name})},String(u.id))):null,(l=n==null?void 0:n.Rol)!=null&&l.Funcionalidades?($=n==null?void 0:n.Rol)==null?void 0:$.Funcionalidades.map(u=>s("ul",{children:s(E,{children:u.name})},String(u.id))):null,n!=null&&n.EntidadesRegistros?n.EntidadesRegistros.map(u=>s("ul",{children:s(E,{children:u.name})},String(u.id))):null,n!=null&&n.EmpresasInstituciones?n.EmpresasInstituciones.map(u=>s("ul",{children:s(E,{children:u.name})},String(u.id))):null]})]})})})},n.id)}):s("p",{className:"default-message",children:"Sin datos aun!"})})})}const gn=h.div`
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .default-message {
    color: #e91e63;
    text-align: center;
    font-weight: bolder;
    text-transform: uppercase;
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
`,fn=h.div`
  height: 50px;
  display: flex;
  align-items: center;
`,xn=h.img.attrs({src:"./images/icon.png",alt:"logo"})`
  width: 25px;
  height: auto;
`,vn=h.div`
  cursor: pointer;

  min-height: 300px;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #222222;
  &:hover {
    color: #222222;
    letter-spacing: 1.2px;
    font-size: 1.2em;
  }
`,bn=h.ul`
  margin: 0.2em;
`,yn=h.li`
  font-weight: bolder;
  font-size: 0.7em;
  padding: 0.7em;
  color: #777777;
  text-align: left;
  list-style-type: none;
  width: 320px;
`,Sn=h.div`
  margin: 1em 0;
`,E=h.li`
  margin: 0.2em 0;
  color: #777777;
  list-style-type: none;
`,Un=r=>{const[e,a]=d.exports.useState(!0),p=d.exports.useCallback(()=>a(g=>!g),[]),{data:n,isLoading:i,isError:t,refetch:f}=dn("some-data",()=>pn(`${r}/enabled/${String(e)}`));return d.exports.useEffect(()=>{f()},[e]),[n,e,p,i,t]},Hn=({data:r})=>{var F,O,z,T,A,N,U,H,j,V,B;const e=_(G),a=_(Q),p=r==null?void 0:r.map(c=>c.name),[n,i]=d.exports.useState([""]),[t,f]=d.exports.useState(0),[g,x]=d.exports.useState(!1),[v,S]=d.exports.useState(""),[l,$]=d.exports.useState(r==null?void 0:r.find(c=>(c==null?void 0:c.name)===v)),[u,P]=d.exports.useState(!1),M=c=>{const w=c.target.value.toLowerCase();if(S(w),w.length>1){const I=p==null?void 0:p.filter(L=>(L==null?void 0:L.toLowerCase().indexOf(w))>-1);i(I),x(!0)}else x(!1)},J=c=>{i([]),S(c.target.innerHTML),x(!1),P(!0)},X=c=>{if(c.keyCode===38){if(t===0)return;f(t-1)}else if(c.keyCode===40){if(t-1===n.length)return;f(t+1)}else c.keyCode===13&&(S(n[t]),f(0),x(!1))},Y=()=>s("ul",{className:"suggestions",children:n==null?void 0:n.map((c,w)=>s("li",{className:w===t?"active":"",onClick:I=>J(I),style:{listStyleType:"none",cursor:"pointer"},children:c},w))});d.exports.useEffect(()=>{$(r==null?void 0:r.find(c=>c.name===v))},[v]);const Z=c=>{e.setStack(c),a.setOption("modificar")};return o($n,{children:[s(un,{className:"searchbox__input",type:"text",value:v,variant:"outline",onChange:M,onKeyDown:X}),g&&s(Y,{}),!g&&u?s(Cn,{onClick:()=>Z(l),children:s(W,{label:"Haga clic para modificar!",children:s(kn,{children:o(Rn,{className:l!=null&&l.enabled?"list__item":"disabled",children:[o(wn,{children:[s(En,{}),s(y,{color:"#009688",fam:"signika",size:"1.1em",space:"5px",m:"0 0.5em",capit:!0,children:l==null?void 0:l.type})]}),o("p",{style:{textTransform:"uppercase"},children:[" ",l!=null&&l.name?l==null?void 0:l.name:null]}),o("p",{children:[" ",l!=null&&l.ci?`Carnet: ${l==null?void 0:l.ci}`:null]}),o("p",{children:[" ",l!=null&&l.tome?`Tomo: ${l==null?void 0:l.tome}`:null]}),o("p",{children:[" ",l!=null&&l.folio?`Folio: ${l==null?void 0:l.folio}`:null]}),o("p",{children:[" ",l!=null&&l.email?`Correo: ${l==null?void 0:l.email}`:null," "]}),o("p",{children:[" ",l!=null&&l.Rol?`Rol: ${(F=l==null?void 0:l.Rol)==null?void 0:F.name}`:null," "]}),o("p",{children:[" ",(l==null?void 0:l.type)==="funcionalidad:"?`Pertenece a: ${(O=l==null?void 0:l.Rol)==null?void 0:O.name}`:null," "]}),o("p",{children:[" ",l!=null&&l.User?`Usuario: ${(z=l==null?void 0:l.User)==null?void 0:z.name}`:null," "]}),o("p",{children:[" ",l!=null&&l.User?`Correo: ${(T=l==null?void 0:l.User)==null?void 0:T.email}`:null," "]}),o("p",{children:[" ",l!=null&&l.EntidadesRegistro?`Oficina: ${l==null?void 0:l.EntidadesRegistro.name}`:null," "]}),o("p",{children:[" ",l!=null&&l.Organismo?`Organismo: ${(A=l==null?void 0:l.Organismo)==null?void 0:A.name}`:null," "]}),o("p",{children:[" ",l!=null&&l.price?`Precio: ${l==null?void 0:l.price}`:null]}),o("p",{children:[" ",l!=null&&l.range?`Rango: ${l==null?void 0:l.range}`:null]}),o("p",{children:[" ",l!=null&&l.phone?`Tel: ${l==null?void 0:l.phone}`:null]}),o("p",{children:[" ",l!=null&&l.Provincia?`Pertenece a: ${(N=l==null?void 0:l.Provincia)==null?void 0:N.name}`:null]}),o("p",{children:[" ",l!=null&&l.Municipio?`Pertenece a municipio: ${(U=l==null?void 0:l.Municipio)==null?void 0:U.name}`:null]}),o("p",{children:[" ",l!=null&&l.Municipio?`municipios: ${(H=l==null?void 0:l.Municipio)==null?void 0:H.name}`:null]}),o("p",{children:[" ",l!=null&&l.address?`Domicilio: ${l==null?void 0:l.address}`:null]}),s("p",{style:{color:l!=null&&l.enabled?"#ff0000":"#999999"},children:(l==null?void 0:l.enabled)===!0?"Estado: habilitado":"Estado: desabilitado"}),o(_n,{children:[l!=null&&l.Municipios?s(y,{color:"orange",space:"5px",children:"Municipios:"}):null,(j=l==null?void 0:l.Rol)!=null&&j.Funcionalidades?s(y,{color:"orange",space:"5px",children:"Funcionalidades:"}):null,l!=null&&l.EmpresasInstituciones?s(y,{color:"orange",space:"5px",children:"Empresas o instituciones:"}):null,l!=null&&l.Municipios?l.Municipios.map(c=>s("ul",{children:s(R,{children:c.name})},String(c.id))):null,(V=l==null?void 0:l.Rol)!=null&&V.Funcionalidades?(B=l==null?void 0:l.Rol)==null?void 0:B.Funcionalidades.map(c=>s("ul",{children:s(R,{children:c.name})},String(c.id))):null,l!=null&&l.EntidadesRegistros?l.EntidadesRegistros.map(c=>s("ul",{children:s(R,{children:c.name})},String(c.id))):null,l!=null&&l.EmpresasInstituciones?l.EmpresasInstituciones.map(c=>s("ul",{children:s(R,{children:c.name})},String(c.id))):null]})]})})})}):null]})},$n=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .suggestions {
    color: #0f5bff;
    font-weight: bolder;
  }
`,wn=h.div`
  height: 50px;
  display: flex;
  align-items: center;
`,En=h.img.attrs({src:"./images/icon.png",alt:"logo"})`
  width: 25px;
  height: auto;
`,kn=h.div`
  cursor: pointer;

  min-height: 300px;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #222222;
  &:hover {
    color: #222222;
    letter-spacing: 1.2px;
    font-size: 1.2em;
  }
`,Cn=h.ul`
  margin: 0.2em;
`,Rn=h.li`
  font-weight: bolder;
  font-size: 0.7em;
  padding: 0.7em;
  color: #777777;
  text-align: left;
  list-style-type: none;
  width: 320px;
`,_n=h.div`
  margin: 1em 0;
`,R=h.li`
  margin: 0.2em 0;
  color: #777777;
  list-style-type: none;
`;function jn(r){return d.exports.createElement("svg",k({viewBox:"0 0 576 512",width:r.width||"1em",length:r.height||"auto"},r),d.exports.createElement("path",{fill:r.color,d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}))}function Vn(r){return d.exports.createElement("svg",k({viewBox:"0 0 512 512",width:r.width||"1em",length:r.height||"auto"},r),d.exports.createElement("path",{fill:r.color,d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))}function Bn(r){return d.exports.createElement("svg",k({viewBox:"0 0 512 512",width:r.width||"1em",length:r.height||"auto"},r),d.exports.createElement("path",{fill:r.color,d:"M304 192v32c0 6.6-5.4 12-12 12h-56v56c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-56h-56c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h56v-56c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v56h56c6.6 0 12 5.4 12 12zm201 284.7L476.7 505c-9.4 9.4-24.6 9.4-33.9 0L343 405.3c-4.5-4.5-7-10.6-7-17V372c-35.3 27.6-79.7 44-128 44C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7l99.7 99.7c9.3 9.4 9.3 24.6 0 34zM344 208c0-75.2-60.8-136-136-136S72 132.8 72 208s60.8 136 136 136 136-60.8 136-136z"}))}export{Nn as A,jn as E,Hn as R,Bn as S,Vn as a,An as b,Un as u};

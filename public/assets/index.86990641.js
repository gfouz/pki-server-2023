var Le=Object.defineProperty,Me=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var xe=(a,e,t)=>e in a?Le(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,B=(a,e)=>{for(var t in e||(e={}))Oe.call(e,t)&&xe(a,t,e[t]);if(ge)for(var t of ge(e))$e.call(e,t)&&xe(a,t,e[t]);return a},re=(a,e)=>Me(a,Be(e));import{e as Ge,h as Se,r as m,c as Te,d as oe,o as Ke,z as He,ab as Ue,ak as Ve,M as _e,an as We,t as Ze,ad as se,E as F,l as N,$ as le,ag as Qe,al as Ye,ah as we,j as v,F as M,a as r,s as Q,Q as te,ao as ye,L as Je}from"./index.f52781a9.js";import{t as Xe,D as ea}from"./Dashboard.fd18947c.js";import{C as aa}from"./Toast.0ae85c90.js";import{h as ra,i as T,g as ne,e as ta,b as na}from"./constants.f2e04d14.js";import{S as D}from"./StyledLabel.4d380b9c.js";import{I as Y,E as O}from"./ErrorWarning.4750ca61.js";import{T as J}from"./chakra-ui-tooltip.esm.eb698682.js";import{d as oa,u as ia,a as sa,S as la}from"./SubmitButton.96350b2a.js";import{u as Z,S as da}from"./StatusHandler.ec046620.js";import{S as Re}from"./chakra-ui-select.esm.a9f625b2.js";import{C as ua}from"./chakra-ui-checkbox.esm.77685af8.js";function ie(a,e){if(a==null)return{};var t={},n=Object.keys(a),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=a[i]);return t}function g(){return g=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},g.apply(this,arguments)}var ca=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];function ma(a){a===void 0&&(a={});var e=a,t=e.onChange,n=e.value,i=e.defaultValue,o=e.name,y=e.isDisabled,l=e.isFocusable,C=e.isNative,P=ie(e,ca),f=m.exports.useState(i||""),s=f[0],_=f[1],k=we(n,s),w=k[0],x=k[1],R=m.exports.useRef(null),d=m.exports.useCallback(function(){var c=R.current;if(!!c){var p="input:not(:disabled):checked",b=c.querySelector(p);if(b){b.focus();return}p="input:not(:disabled)";var j=c.querySelector(p);j==null||j.focus()}},[]),E=_e(void 0,"radio"),I=o||E,u=m.exports.useCallback(function(c){var p=We(c)?c.target.value:c;w||_(p),t==null||t(String(p))},[t,w]),q=m.exports.useCallback(function(c,p){return c===void 0&&(c={}),p===void 0&&(p=null),g({},c,{ref:Ze(p,R),role:"radiogroup"})},[]),A=m.exports.useCallback(function(c,p){var b;c===void 0&&(c={}),p===void 0&&(p=null);var j=C?"checked":"isChecked";return g({},c,(b={ref:p,name:I},b[j]=x!=null?c.value===x:void 0,b.onChange=u,b["data-radiogroup"]=!0,b))},[C,I,u,x]);return{getRootProps:q,getRadioProps:A,name:I,ref:R,focus:d,setValue:_,value:x,onChange:u,isDisabled:y,isFocusable:l,htmlProps:P}}var ha=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],Ie=Ge({name:"RadioGroupContext",strict:!1}),pa=Ie[0],Fe=Ie[1],va=Se(function(a,e){var t=a.colorScheme,n=a.size,i=a.variant,o=a.children,y=a.className,l=a.isDisabled,C=a.isFocusable,P=ie(a,ha),f=ma(P),s=f.value,_=f.onChange,k=f.getRootProps,w=f.name,x=f.htmlProps,R=m.exports.useMemo(function(){return{name:w,size:n,onChange:_,colorScheme:t,value:s,variant:i,isDisabled:l,isFocusable:C}},[w,n,_,t,s,i,l,C]),d=k(x,e),E=Te("chakra-radio-group",y);return m.exports.createElement(pa,{value:R},m.exports.createElement(oe.div,g({},d,{className:E}),o))}),fa=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"];function ba(a){a===void 0&&(a={});var e=a,t=e.defaultChecked,n=e.isChecked,i=e.isFocusable,o=e.isDisabled,y=e.isReadOnly,l=e.isRequired,C=e.onChange,P=e.isInvalid,f=e.name,s=e.value,_=e.id,k=e["data-radiogroup"],w=e["aria-describedby"],x=ie(e,fa),R=_e(void 0,"radio"),d=oa(),E=Fe(),I=!!E||!!k,u=!!d,q=u&&!I?d.id:R;q=_!=null?_:q;var A=o!=null?o:d==null?void 0:d.isDisabled,c=y!=null?y:d==null?void 0:d.isReadOnly,p=l!=null?l:d==null?void 0:d.isRequired,b=P!=null?P:d==null?void 0:d.isInvalid,j=se(),H=j[0],U=j[1],X=se(),V=X[0],G=X[1],ee=se(),W=ee[0],z=ee[1],ae=m.exports.useState(Boolean(t)),De=ae[0],Ee=ae[1],ue=we(n,De),ce=ue[0],$=ue[1],me=m.exports.useCallback(function(h){if(c||A){h.preventDefault();return}ce||Ee(h.target.checked),C==null||C(h)},[ce,A,c,C]),he=m.exports.useCallback(function(h){h.key===" "&&z.on()},[z]),pe=m.exports.useCallback(function(h){h.key===" "&&z.off()},[z]),qe=m.exports.useCallback(function(h,S){return h===void 0&&(h={}),S===void 0&&(S=null),g({},h,{ref:S,"data-active":F(W),"data-hover":F(V),"data-disabled":F(A),"data-invalid":F(b),"data-checked":F($),"data-focus":F(H),"data-readonly":F(c),"aria-hidden":!0,onMouseDown:N(h.onMouseDown,z.on),onMouseUp:N(h.onMouseUp,z.off),onMouseEnter:N(h.onMouseEnter,G.on),onMouseLeave:N(h.onMouseLeave,G.off)})},[W,V,A,b,$,H,c,z.on,z.off,G.on,G.off]),ve=d!=null?d:{},fe=ve.onFocus,be=ve.onBlur,Ae=m.exports.useCallback(function(h,S){h===void 0&&(h={}),S===void 0&&(S=null);var L=A&&!i;return g({},h,{id:q,ref:S,type:"radio",name:f,value:s,onChange:N(h.onChange,me),onBlur:N(be,h.onBlur,U.off),onFocus:N(fe,h.onFocus,U.on),onKeyDown:N(h.onKeyDown,he),onKeyUp:N(h.onKeyUp,pe),checked:$,disabled:L,readOnly:c,required:p,"aria-invalid":le(b),"aria-disabled":le(L),"aria-required":le(p),"data-readonly":F(c),"aria-describedby":w,style:Qe})},[A,i,q,f,s,me,be,U,fe,he,pe,$,c,p,b,w]),Ne=function(S,L){return S===void 0&&(S={}),L===void 0&&(L=null),g({},S,{ref:L,onMouseDown:N(S.onMouseDown,Ce),onTouchStart:N(S.onTouchStart,Ce),"data-disabled":F(A),"data-checked":F($),"data-invalid":F(b)})},je=function(S,L){return L===void 0&&(L=null),g({},S,{ref:L,"data-disabled":F(A),"data-checked":F($),"data-invalid":F(b)})},ze={isInvalid:b,isFocused:H,isChecked:$,isActive:W,isHovered:V,isDisabled:A,isReadOnly:c,isRequired:p};return{state:ze,getCheckboxProps:qe,getInputProps:Ae,getLabelProps:Ne,getRootProps:je,htmlProps:x}}function Ce(a){a.preventDefault(),a.stopPropagation()}var ga=["spacing","children","isDisabled","isFocusable","inputProps"],Pe=Se(function(a,e){var t,n=Fe(),i=a.onChange,o=a.value,y=Ke("Radio",g({},n,a)),l=He(a),C=l.spacing,P=C===void 0?"0.5rem":C,f=l.children,s=l.isDisabled,_=s===void 0?n==null?void 0:n.isDisabled:s,k=l.isFocusable,w=k===void 0?n==null?void 0:n.isFocusable:k,x=l.inputProps,R=ie(l,ga),d=a.isChecked;(n==null?void 0:n.value)!=null&&o!=null&&(d=n.value===o);var E=i;n!=null&&n.onChange&&o!=null&&(E=Ue(n.onChange,i));var I=(t=a==null?void 0:a.name)!=null?t:n==null?void 0:n.name,u=ba(g({},R,{isChecked:d,isFocusable:w,isDisabled:_,onChange:E,name:I})),q=u.getInputProps,A=u.getCheckboxProps,c=u.getLabelProps,p=u.getRootProps,b=u.htmlProps,j=Ve(b,Ye),H=j[0],U=j[1],X=A(U),V=q(x,e),G=c(),ee=Object.assign({},H,p()),W=g({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer"},y.container),z=g({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},y.control),ae=g({userSelect:"none",marginStart:P},y.label);return m.exports.createElement(oe.label,g({className:"chakra-radio"},ee,{__css:W}),m.exports.createElement("input",g({className:"chakra-radio__input"},V)),m.exports.createElement(oe.span,g({className:"chakra-radio__control"},X,{__css:z})),f&&m.exports.createElement(oe.span,g({className:"chakra-radio__label"},G,{__css:ae}),f))});const xa=({label:a,register:e,required:t,errors:n,defaultValue:i,info:o})=>v(M,{children:[r(J,{label:o,hasArrow:!0,arrowSize:15,children:r(Y,B({size:"sm",type:"tel",cursor:"pointer",variant:"flushed",defaultValue:i},e(a,{required:t,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/im})))}),r(O,{label:a,errors:n,info:o})]}),ke=({label:a,register:e,required:t,errors:n,defaultValue:i,info:o})=>v(M,{children:[r(J,{label:o,hasArrow:!0,arrowSize:15,children:r(Y,B({size:"sm",cursor:"pointer",variant:"flushed",defaultValue:i},e(a,{pattern:/^\d+$/,required:t,maxLength:3,minLength:3})))}),r(O,{label:a,errors:n,info:o})]});let K=new Date().getFullYear();const ya=new Date().getMonth()+1;K=parseInt(K.toString().substring(2,4));const Ca=({register:a,errors:e,defaultValue:t,info:n})=>v(M,{children:[r(J,{label:n,hasArrow:!0,arrowSize:15,children:r(Y,B({size:"sm",type:"number",cursor:"pointer",variant:"flushed",defaultValue:t},a("ci",{required:!0,validate:{isOlder:i=>K-parseInt(i.substring(0,2))==18&&ya>parseInt(i.substring(2,4))||K>parseInt(i.substring(0,2))&&K-parseInt(i.substring(0,2))>18||K<parseInt(i.substring(0,2))&&parseInt(i.substring(0,2))<99,min_month:i=>parseInt(i.substring(2,4))>=1,max_month:i=>parseInt(i.substring(2,4))<=12,min_day:i=>parseInt(i.substring(4,6))>=1,max_day:i=>parseInt(i.substring(4,6))<=31},minLength:11,maxLength:11})))}),r(O,{label:"ci",errors:e,info:n})]}),Pa=({register:a,errors:e,defaultValue:t,info:n})=>v(M,{children:[r(J,{label:n,hasArrow:!0,arrowSize:15,children:r(Y,B({size:"sm",type:"email",cursor:"pointer",variant:"flushed",defaultValue:t},a("email",{required:!0,pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})))}),r(O,{label:"email",errors:e,info:n})]}),ka=({label:a,register:e,required:t,errors:n,defaultValue:i,info:o})=>v(M,{children:[r(J,{label:o,hasArrow:!0,arrowSize:15,children:r(Y,B({size:"sm",type:"text",cursor:"pointer",variant:"flushed",defaultValue:i},e(a,{pattern:/^[a-zA-Z\u00C0-\u017F\s]+$/,required:t})))}),r(O,{label:a,errors:n,info:o})]});function de(a){const{list:e,register:t,label:n,required:i}=a;return r(M,{children:r(Re,re(B({},t(n,{required:i})),{placeholder:"Select option",size:"xm",color:"#000000",children:Array.isArray(e)&&(e==null?void 0:e.map((o,y)=>r("option",{value:o.id,children:o.email&&o.email||o.name&&o.name},y)))}))})}function Sa(a){var x,R,d,E,I;const{list:e,register1:t,label:n,required:i}=a,[o,y]=m.exports.useState(""),[l,C]=m.exports.useState(""),[P,f]=m.exports.useState(!1),{data:s,refetch:_}=Z("agent-id",()=>ra(o,l)),k=u=>{C(u.target.value)},w=()=>{f(u=>!u)};return m.exports.useEffect(()=>{y("representantes"),_()},[l]),v(_a,{children:[r(Re,re(B({},t(n,{required:i,onChange(u){k(u)}})),{placeholder:"Select option",size:"xm",color:"#000000",children:Array.isArray(e)&&(e==null?void 0:e.map((u,q)=>r("option",{value:u.id,children:u.email&&u.email||u.name&&u.name},u.id)))})),r("div",{className:"written-label",onClick:w,children:v(Ra,{size:"12px",upper:!0,color:"#009966",m:"2em  0",center:!0,children:[P?"Ocultar":"Mostrar"," informaci\xF3n del representante"]})}),P&&l&&v(wa,{children:[v("p",{children:["Nombre: ",(x=s==null?void 0:s.result)==null?void 0:x.name]}),v("p",{children:["Carnet: ",(R=s==null?void 0:s.result)==null?void 0:R.ci]}),v("p",{children:["Tomo: ",(d=s==null?void 0:s.result)==null?void 0:d.tome]}),v("p",{children:["Folio: ",(E=s==null?void 0:s.result)==null?void 0:E.folio]}),v("p",{children:["Tel: ",(I=s==null?void 0:s.result)==null?void 0:I.phone]})]})]})}const _a=Q.div`
  .written-label:hover {
    filter: drop-shadow(0 0 2em #009966);
    background-color: #000000;
    border-radius: 12px;
  }
`,wa=Q.div`
  box-shadow: 1px 1px 10px black;
  border-radius: 12px;
  padding: 1em;
  color: #555555;
  font-weight: bolder;
  font-size: 14px;
`,Ra=Q(D)`
  border: 1px solid #009966;
  padding: 1em;
  border-radius: 12px;
`;function Ia(){var u;const[a,e]=m.exports.useState(""),[t,n]=m.exports.useState("juridica"),{watch:i,register:o,handleSubmit:y,formState:{errors:l}}=ia(),C="/entidades-registro/enabled/true",{data:P}=Z("entities-all",()=>ne(C)),f="/representantes/enabled/true",{data:s}=Z("agents-all",()=>ne(f)),_="/organismos/enabled/true",{data:k}=Z("org-all",()=>ne(_)),w="/empresas-instituciones/",{data:x}=Z("companies",()=>ne(w)),R="",d=sa(q=>ta(R,q)),E=q=>console.log(q),I=(u=d==null?void 0:d.data)==null?void 0:u.message;return m.exports.useEffect(()=>{I&&e(I)},[I]),r(M,{children:r(Fa,{children:r("form",{onSubmit:y(E),children:v(te,{direction:"column",p:"1em",children:[r(D,{color:"#009966",upper:!0,center:!0,m:"1em 0 2em 0",children:"Generaci\xF3n"}),r(D,{m:"1em 0 0 0",children:"N\xFAmero de carnet de identidad"}),r(Ca,{register:o,errors:l,info:T.ci}),r(D,{m:"1em 0 0 0",children:"Tomo de documento"}),r(ke,{label:"tome",register:o,errors:l,info:T.tome,required:!0}),r(D,{m:"1em 0 0 0",children:"Folio de documento"}),r(ke,{label:"folio",register:o,errors:l,info:T.folio,required:!0}),r(D,{m:"1em 0 0 0",children:"Correo electr\xF3nico"}),r(Pa,{register:o,errors:l,info:T.email}),r(D,{m:"1em 0 0 0",children:"Tel\xE9fono"}),r(xa,{required:!0,label:"phone",register:o,errors:l,info:T.tel}),r(va,{onChange:n,value:t,w:"100%",children:r(ye,{p:"2em 0",w:"100%",children:v(te,{justifyContent:"flex-start",children:[r(Pe,{value:"juridica",colorScheme:"red",isChecked:t=="juridica",children:r("b",{children:"Persona jur\xEDdica"})}),r(Pe,{m:"0 0.5em",value:"natural",colorScheme:"red",isChecked:t=="natural",children:r("b",{children:"Persona Natural"})})]})})}),t=="juridica"&&v(M,{children:[r(D,{m:"1em 0",children:"Organismos"}),r(de,{list:k==null?void 0:k.result,label:"organismos",register:o,required:!0}),r(O,{label:"organismos",errors:l,m:"0 2em"}),r(D,{m:"1em 0",children:"Empresas o Instituci\xF3n"}),r(de,{list:x==null?void 0:x.result,label:"empresas",register:o,required:!0}),r(O,{label:"empresas",errors:l,m:"0 2em"}),r(D,{m:"1em 0",children:"Cargo"}),r(ka,{label:"cargo",register:o,errors:l,info:T.tome}),r(D,{m:"1em 0",children:"Representante"}),r(Sa,{register1:o,list:s==null?void 0:s.result,label:"representante",required:!0}),r(O,{label:"representante",errors:l,m:"0 2em"})]}),t=="natural"&&v(ye,{children:[r(D,{m:"1em 0",color:"#009966",children:"Entidad relacionada"}),r(de,{list:P==null?void 0:P.result,label:"entidades",register:o,required:!0}),r(O,{label:"entidades",errors:l,m:"0 2em"})]}),t=="natural"&&v(M,{children:[r(te,{justify:"center",m:"2em 0",children:r(Je,{to:"/terminos",children:r(D,{color:"#372381",children:"Lea t\xE9rminos y condiciones aqu\xED."})})}),r(te,{justifyContent:"flex-start",children:r(ua,re(B({m:"0 0.7em",colorScheme:"red"},o("condiciones")),{children:r(D,{m:"1em 0",children:"Acepto los terminos y condiciones."})}))})]}),r(la,{buttonstate:d==null?void 0:d.isLoading}),a&&r(da,{message:a})]})})})})}const Fa=Q.div`
  box-shadow: 1px 1px 10px black;
  background-color: #ffffff;
  border-radius: 15px;
  margin: 2em 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 600px) {
    padding: 3em;
  }
  .label__name {
    color: #777777;
    white-space: nowrap;
  }
  .agent-info {
    display: none;
  }
  .agent-info:hover {
    display: block;
  }
`;function Ta(){const a=localStorage.getItem("jwt");return m.exports.useEffect(()=>{a&&(na.defaults.headers.common.jwt=a)},[]),r(M,{children:v(Da,{children:[r(aa,{linear:Xe.green,color:"#ffffff"}),r(ea,{children:r(Ia,{})})]})})}const Da=Q.div`
  width: 100%;
  position: relative;
  background-color: #ffffff;
  .province {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .province__divider {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bg-grey {
    background-color: #3a3839;
  }
  .btn-backwards {
    align-self: flex-start;
    display: flex;
    text-transform: uppercase;
    font-weight: bolder;
    color: #0660b1;
    margin: 1em;
    span {
      position: relative;
      top: 0.5rem;
      left: 1rem;
      color: #009fff;
    }
  }
  .btn-backwards__text {
    font-weight: bolder;
    position: relative;
    top: 8px;
    left: 5px;
  }
`;export{Ta as default};

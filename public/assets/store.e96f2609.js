import{r as h}from"./index.f52781a9.js";const V=Symbol(),J=Symbol(),U=Symbol(),_=Object.getPrototypeOf,k=new WeakMap,C=e=>e&&(k.has(e)?k.get(e):_(e)===Object.prototype||_(e)===Array.prototype),A=e=>typeof e=="object"&&e!==null,Q=(e,n)=>{let c=!1;const s=(t,r,f)=>{if(!c){let S=t.a.get(e);S||(S=new Set,t.a.set(e,S)),f&&S.has(V)||S.add(r)}},i={f:n,get(t,r){return r===U?e:(s(this,r),H(t[r],this.a,this.c))},has(t,r){return r===J?(c=!0,this.a.delete(e),!0):(s(this,r),r in t)},getOwnPropertyDescriptor(t,r){return s(this,r,!0),Object.getOwnPropertyDescriptor(t,r)},ownKeys(t){return s(this,V),Reflect.ownKeys(t)}};return n&&(i.set=i.deleteProperty=()=>!1),i},x=e=>e[U]||e,H=(e,n,c)=>{if(!C(e))return e;const s=x(e),i=(r=>Object.isFrozen(r)||Object.values(Object.getOwnPropertyDescriptors(r)).some(f=>!f.writable))(s);let t=c&&c.get(s);return t&&t.f===i||(t=Q(s,i),t.p=new Proxy(i?(r=>{if(Array.isArray(r))return Array.from(r);const f=Object.getOwnPropertyDescriptors(r);return Object.values(f).forEach(S=>{S.configurable=!0}),Object.create(_(r),f)})(s):s,t),c&&c.set(s,t)),t.a=n,t.c=c,t.p},X=(e,n)=>{const c=Reflect.ownKeys(e),s=Reflect.ownKeys(n);return c.length!==s.length||c.some((i,t)=>i!==s[t])},F=(e,n,c,s)=>{if(Object.is(e,n))return!1;if(!A(e)||!A(n))return!0;const i=c.get(x(e));if(!i)return!0;if(s){const r=s.get(e);if(r&&r.n===n)return r.g;s.set(e,{n,g:!1})}let t=null;for(const r of i){const f=r===V?X(e,n):F(e[r],n[r],c,s);if(f!==!0&&f!==!1||(t=f),t)break}return t===null&&(t=!0),s&&s.set(e,{n,g:t}),t},Y=e=>C(e)&&e[U]||null,I=(e,n)=>{k.set(e,n)},Z=(e,n)=>{const c=[],s=new WeakSet,i=(t,r)=>{if(s.has(t))return;A(t)&&s.add(t);const f=A(t)&&n.get(x(t));f?f.forEach(S=>{i(t[S],r?[...r,S]:[S])}):r&&c.push(r)};return i(e),c};var q={exports:{}},z={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=h.exports;function ee(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var te=typeof Object.is=="function"?Object.is:ee,ne=m.useState,re=m.useEffect,se=m.useLayoutEffect,oe=m.useDebugValue;function ce(e,n){var c=n(),s=ne({inst:{value:c,getSnapshot:n}}),i=s[0].inst,t=s[1];return se(function(){i.value=c,i.getSnapshot=n,j(i)&&t({inst:i})},[e,c,n]),re(function(){return j(i)&&t({inst:i}),e(function(){j(i)&&t({inst:i})})},[e]),oe(c),c}function j(e){var n=e.getSnapshot;e=e.value;try{var c=n();return!te(e,c)}catch{return!0}}function ie(e,n){return n()}var ue=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?ie:ce;z.useSyncExternalStore=m.useSyncExternalStore!==void 0?m.useSyncExternalStore:ue;q.exports=z;var ae=q.exports;const fe=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("VERSION"):Symbol(),E=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("LISTENERS"):Symbol(),L=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("SNAPSHOT"):Symbol(),le=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("HANDLER"):Symbol(),P=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("PROMISE_RESULT"):Symbol(),W=({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?Symbol("PROMISE_ERROR"):Symbol(),G=new WeakSet,v=e=>typeof e=="object"&&e!==null,de=e=>v(e)&&!G.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),N=new WeakMap;let T=1;const $=new WeakMap;function w(e={}){if(!v(e))throw new Error("object required");const n=N.get(e);if(n)return n;let c=T;const s=new Set,i=(a,o=++T)=>{c!==o&&(c=o,s.forEach(u=>u(a,o)))},t=new Map,r=a=>{let o=t.get(a);return o||(o=(u,l)=>{const d=[...u];d[1]=[a,...d[1]],i(d,l)},t.set(a,o)),o},f=a=>{const o=t.get(a);return t.delete(a),o},S=(a,o)=>{const u=$.get(o);if((u==null?void 0:u[0])===c)return u[1];const l=Array.isArray(a)?[]:Object.create(Object.getPrototypeOf(a));return I(l,!0),$.set(o,[c,l]),Reflect.ownKeys(a).forEach(d=>{const p=Reflect.get(a,d,o);if(G.has(p))I(p,!1),l[d]=p;else if(p instanceof Promise)if(P in p)l[d]=p[P];else{const O=p[W]||p;Object.defineProperty(l,d,{get(){if(P in p)return p[P];throw O}})}else p!=null&&p[E]?l[d]=p[L]:l[d]=p}),Object.freeze(l),l},R=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e)),b={get(a,o,u){return o===fe?c:o===E?s:o===L?S(a,u):o===le?b:Reflect.get(a,o,u)},deleteProperty(a,o){const u=Reflect.get(a,o),l=u==null?void 0:u[E];l&&l.delete(f(o));const d=Reflect.deleteProperty(a,o);return d&&i(["delete",[o],u]),d},is:Object.is,canProxy:de,set(a,o,u,l){var d;const p=Reflect.has(a,o),O=Reflect.get(a,o,l);if(p&&this.is(O,u))return!0;const B=O==null?void 0:O[E];B&&B.delete(f(o)),v(u)&&(u=Y(u)||u);let y;return(d=Object.getOwnPropertyDescriptor(a,o))!=null&&d.set?y=u:u instanceof Promise?y=u.then(g=>(y[P]=g,i(["resolve",[o],g]),g)).catch(g=>{y[W]=g,i(["reject",[o],g])}):u!=null&&u[E]?(y=u,y[E].add(r(o))):this.canProxy(u)?(y=w(u),y[E].add(r(o))):y=u,Reflect.set(a,o,y,l),i(["set",[o],u,O]),!0}},M=new Proxy(R,b);return N.set(e,M),Reflect.ownKeys(e).forEach(a=>{const o=Object.getOwnPropertyDescriptor(e,a);o.get||o.set?Object.defineProperty(R,a,o):M[a]=e[a]}),M}function pe(e,n,c){({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[E])&&console.warn("Please use proxy object");let s;const i=[],t=r=>{if(i.push(r),c){n(i.splice(0));return}s||(s=Promise.resolve().then(()=>{s=void 0,n(i.splice(0))}))};return e[E].add(t),()=>{e[E].delete(t)}}function K(e){return({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!(e!=null&&e[L])&&console.warn("Please use proxy object"),e[L]}const{useSyncExternalStore:Se}=ae,ye=(e,n)=>{const c=h.exports.useRef();h.exports.useEffect(()=>{c.current=Z(e,n)}),h.exports.useDebugValue(c.current)};function Pe(e,n){const c=n==null?void 0:n.sync,s=h.exports.useRef(),i=h.exports.useRef();let t=!0;const r=Se(h.exports.useCallback(R=>{const b=pe(e,R,c);return R(),b},[e,c]),()=>{const R=K(e);try{if(!t&&s.current&&i.current&&!F(s.current,R,i.current,new WeakMap))return s.current}catch{}return R},()=>K(e));t=!1;const f=new WeakMap;h.exports.useEffect(()=>{s.current=r,i.current=f}),({BASE_URL:"/segurmatica-pki/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&ye(r,f);const S=h.exports.useMemo(()=>new WeakMap,[]);return H(r,f,S)}const Ee=w({stack:{},setStack:e=>Object.assign(Ee.stack,e)}),he={id:0,type:"",name:"",path:"",enabled:!1},Re={id:0,type:"",name:"",enabled:!1,Funcionalidades:[he]},Oe={id:"",email:"",password:"",RolId:0,enabled:!1,Rol:Re},ge=w({user:Oe,setUser:e=>Object.assign(ge.user,e)}),me=w({opt:"mostrar",setOption:e=>me.opt=e}),D=w({st:!1,setTrue:()=>D.st=!0,setFalse:()=>D.st=!1,reverse:()=>D.st=!D.st});export{ge as a,D as b,Ee as c,me as s,Pe as u};
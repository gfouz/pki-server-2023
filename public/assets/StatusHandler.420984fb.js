import{b as K,_ as P,O as $,a4 as w,a5 as _,a6 as W,a7 as q,a8 as k,a9 as A,aa as z,ab as V,J as S,K as H,R as b,N as J,ac as G,s as X,r as L,j as O,F as Y}from"./index.e9e99ba7.js";import{s as Z}from"./StyledLabel.e15bdfe8.js";var ee=function(u){K(o,u);function o(n,t){var e;return e=u.call(this)||this,e.client=n,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var s=o.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),M(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return E(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return E(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(t,e){var i=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled!="undefined"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();var c=this.hasListeners();c&&B(this.currentQuery,r,this.options,i)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();var a=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)},s.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),i=this.client.getQueryCache().build(this.client,e);return this.createResult(i,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(t,e){var i=this,r={},c=function(h){i.trackedProps.includes(h)||i.trackedProps.push(h)};return Object.keys(t).forEach(function(a){Object.defineProperty(r,a,{configurable:!1,enumerable:!0,get:function(){return c(a),t[a]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},s.getNextResult=function(t){var e=this;return new Promise(function(i,r){var c=e.subscribe(function(a){a.isFetching||(c(),a.isError&&(t==null?void 0:t.throwOnError)?r(a.error):i(a))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(t){return this.fetch(P({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},s.fetchOptimistic=function(t){var e=this,i=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,i);return r.fetch().then(function(){return e.createResult(r,i)})},s.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch($)),e},s.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(w||this.currentResult.isStale||!_(this.options.staleTime))){var e=W(this.currentResult.dataUpdatedAt,this.options.staleTime),i=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},i)}},s.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},s.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(w||this.options.enabled===!1||!_(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||q.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},s.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},s.createResult=function(t,e){var i=this.currentQuery,r=this.options,c=this.currentResult,a=this.currentResultState,h=this.currentResultOptions,f=t!==i,p=f?t.state:this.currentQueryInitialState,R=f?this.currentResult:this.previousQueryResult,l=t.state,m=l.dataUpdatedAt,C=l.error,T=l.errorUpdatedAt,Q=l.isFetching,d=l.status,F=!1,U=!1,v;if(e.optimisticResults){var x=this.hasListeners(),N=!x&&M(t,e),j=x&&B(t,i,e,r);(N||j)&&(Q=!0,m||(d="loading"))}if(e.keepPreviousData&&!l.dataUpdateCount&&(R==null?void 0:R.isSuccess)&&d!=="error")v=R.data,m=R.dataUpdatedAt,d=R.status,F=!0;else if(e.select&&typeof l.data!="undefined")if(c&&l.data===(a==null?void 0:a.data)&&e.select===this.selectFn)v=this.selectResult;else try{this.selectFn=e.select,v=e.select(l.data),e.structuralSharing!==!1&&(v=k(c==null?void 0:c.data,v)),this.selectResult=v,this.selectError=null}catch(g){A().error(g),this.selectError=g}else v=l.data;if(typeof e.placeholderData!="undefined"&&typeof v=="undefined"&&(d==="loading"||d==="idle")){var y;if((c==null?void 0:c.isPlaceholderData)&&e.placeholderData===(h==null?void 0:h.placeholderData))y=c.data;else if(y=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof y!="undefined")try{y=e.select(y),e.structuralSharing!==!1&&(y=k(c==null?void 0:c.data,y)),this.selectError=null}catch(g){A().error(g),this.selectError=g}typeof y!="undefined"&&(d="success",v=y,U=!0)}this.selectError&&(C=this.selectError,v=this.selectResult,T=Date.now(),d="error");var D={status:d,isLoading:d==="loading",isSuccess:d==="success",isError:d==="error",isIdle:d==="idle",data:v,dataUpdatedAt:m,error:C,errorUpdatedAt:T,failureCount:l.fetchFailureCount,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>p.dataUpdateCount||l.errorUpdateCount>p.errorUpdateCount,isFetching:Q,isRefetching:Q&&d!=="loading",isLoadingError:d==="error"&&l.dataUpdatedAt===0,isPlaceholderData:U,isPreviousData:F,isRefetchError:d==="error"&&l.dataUpdatedAt!==0,isStale:I(t,e),refetch:this.refetch,remove:this.remove};return D},s.shouldNotifyListeners=function(t,e){if(!e)return!0;var i=this.options,r=i.notifyOnChangeProps,c=i.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var a=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(h){var f=h,p=t[f]!==e[f],R=a==null?void 0:a.some(function(m){return m===h}),l=c==null?void 0:c.some(function(m){return m===h});return p&&!l&&(!a||R)})},s.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!z(this.currentResult,e)){var i={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(i.listeners=!0),this.notify(P({},i,t))}},s.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},s.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!V(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(t){var e=this;S.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(i){i(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},o}(H);function te(u,o){return o.enabled!==!1&&!u.state.dataUpdatedAt&&!(u.state.status==="error"&&o.retryOnMount===!1)}function M(u,o){return te(u,o)||u.state.dataUpdatedAt>0&&E(u,o,o.refetchOnMount)}function E(u,o,s){if(o.enabled!==!1){var n=typeof s=="function"?s(u):s;return n==="always"||n!==!1&&I(u,o)}return!1}function B(u,o,s,n){return s.enabled!==!1&&(u!==o||n.enabled===!1)&&(!s.suspense||u.state.status!=="error")&&I(u,s)}function I(u,o){return u.isStaleByTime(o.staleTime)}function re(){var u=!1;return{clearReset:function(){u=!1},reset:function(){u=!0},isReset:function(){return u}}}var se=b.createContext(re()),ne=function(){return b.useContext(se)};function ie(u,o){var s=b.useRef(!1),n=b.useState(0),t=n[1],e=J(),i=ne(),r=e.defaultQueryObserverOptions(u);r.optimisticResults=!0,r.onError&&(r.onError=S.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=S.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=S.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(i.isReset()||(r.retryOnMount=!1));var c=b.useState(function(){return new o(e,r)}),a=c[0],h=a.getOptimisticResult(r);if(b.useEffect(function(){s.current=!0,i.clearReset();var f=a.subscribe(S.batchCalls(function(){s.current&&t(function(p){return p+1})}));return a.updateResult(),function(){s.current=!1,f()}},[i,a]),b.useEffect(function(){a.setOptions(r,{listeners:!1})},[r,a]),r.suspense&&h.isLoading)throw a.fetchOptimistic(r).then(function(f){var p=f.data;r.onSuccess==null||r.onSuccess(p),r.onSettled==null||r.onSettled(p,null)}).catch(function(f){i.clearReset(),r.onError==null||r.onError(f),r.onSettled==null||r.onSettled(void 0,f)});if(h.isError&&!i.isReset()&&!h.isFetching&&Z(r.suspense,r.useErrorBoundary,[h.error,a.getCurrentQuery()]))throw h.error;return r.notifyOnChangeProps==="tracked"&&(h=a.trackResult(h,r)),h}function ce(u,o,s){var n=G(u,o,s);return ie(n,ee)}function le({message:u}){const[o,s]=L.exports.useState("");return L.exports.useEffect(()=>{s(u)},[u]),O(Y,{children:O(ue,{children:O("p",{className:o,children:o})})})}const ue=X.div`
  margin: 2em;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  p {
    font-size: 0.7em;
  }
  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: red;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
  .enabled {
    color: #446344;
  }
`;export{le as S,ce as u};

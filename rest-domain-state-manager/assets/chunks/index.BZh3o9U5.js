var ne=t=>{throw TypeError(t)};var re=(t,e,n)=>e.has(t)||ne("Cannot "+n);var E=(t,e,n)=>(re(t,e,"read from private field"),n?n.call(t):e.get(t)),M=(t,e,n)=>e.has(t)?ne("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),R=(t,e,n,s)=>(re(t,e,"write to private field"),s?s.call(t,n):e.set(t,n),n);const u="[DSM]",b=Object.freeze({URL_CONFLICT:(t,e)=>`${u} host("${t}")와 baseURL("${e}")이 충돌합니다. 둘 중 하나만 사용하세요.`,URL_MISSING:`${u} URL을 특정할 수 없습니다. save(path) 또는 baseURL/host를 설정하세요.`,PROTOCOL_INVALID:t=>`${u} 유효하지 않은 protocol 값: "${t}". HTTP | HTTPS | FILE | SSH 중 하나를 사용하세요.`,HANDLER_MISSING:t=>`${u} DomainState.${t}(): ApiHandler가 주입되지 않았습니다. fromJSON / fromForm / fromVO의 두 번째 인자로 api를 전달하세요.`,FROM_VO_TYPE:`${u} DomainState.fromVO(): DomainVO 인스턴스를 전달해야 합니다.`,FROM_FORM_TYPE:`${u} DomainState.fromForm(): HTMLFormElement 또는 form id 문자열을 전달해야 합니다.`,FORM_NOT_FOUND:t=>`${u} DomainState.fromForm(): id="${t}"인 form 요소를 찾을 수 없습니다.`,SAVE_ROLLBACK:t=>`${u} save() HTTP ${t} 오류 — 서버 동기화 실패. 도메인 상태를 save() 호출 이전으로 롤백합니다.`,VO_SCHEMA_MISSING_KEY:t=>`${u} DomainVO 정합성 오류: 응답 데이터에 VO 스키마의 "${t}" 필드가 없습니다.`,VO_SCHEMA_EXTRA_KEY:t=>`${u} DomainVO 정합성 경고: 응답 데이터에 VO 스키마에 없는 "${t}" 필드가 포함되어 있습니다.`,PLUGIN_NO_INSTALL:`${u} DomainState.use(): 플러그인은 install(DomainState) 메서드를 가져야 합니다.`,CSRF_TOKEN_MISSING:t=>`${u} ApiHandler._fetch(): ${t} 요청에 CSRF 토큰이 필요하지만 토큰을 찾을 수 없습니다. api.init({ csrfSelector })를 호출하여 토큰을 초기화하세요.`,CSRF_INIT_NO_TOKEN:t=>`${u} ApiHandler.init(): csrfSelector="${t}"로 meta 태그를 찾았으나 content 속성이 비어있습니다. 서버가 토큰을 HTML에 올바르게 삽입했는지 확인하세요.`,PIPELINE_ROLLBACK_WARN:`${u} DomainPipeline: 파이프라인 실패로 보상 트랜잭션을 실행합니다. 성공한 DomainState 인스턴스를 save() 이전 상태로 복원합니다. 서버에 이미 커밋된 데이터는 소비자가 직접 처리해야 합니다.`,PIPELINE_NOT_CONFIGURED:`${u} DomainState.all(): pipelineFactory가 주입되지 않았습니다. index.js 진입점을 통해 라이브러리를 import하거나, DomainState.configure({ pipelineFactory })를 직접 호출하세요.`,PIPELINE_INVALID_KEY:t=>`${u} DomainPipeline.after(): "${t}"는 등록되지 않은 리소스 키입니다. DomainState.all()에 전달한 키를 확인하세요.`,PIPELINE_HANDLER_TYPE:t=>`${u} DomainPipeline.after("${t}"): 핸들러는 함수여야 합니다.`,RENDERER_CONTAINER_NOT_FOUND:t=>`${u} renderTo(): id="${t}"인 컨테이너 요소를 찾을 수 없습니다.`,RENDERER_TYPE_UNKNOWN:t=>`${u} renderTo(): 지원하지 않는 type="${t}"입니다. select | radio | checkbox | button 중 하나를 사용하세요.`,RENDERER_VALUE_FIELD_MISSING:`${u} renderTo(): valueField는 필수 옵션입니다.`,RENDERER_LABEL_FIELD_MISSING:`${u} renderTo(): labelField는 필수 옵션입니다.`,RENDERER_DATA_NOT_ARRAY:t=>`${u} renderTo(): DomainState.data가 배열이 아닙니다. renderTo()는 배열 형태의 DomainState에서만 사용할 수 있습니다. (key: "${t}")`}),se=Object.freeze({URL_HOST_IGNORED:(t,e)=>`${u}[경고] host("${t}")를 무시하고 baseURL("${e}")을 우선 사용합니다.`,URL_BASE_PATH_FIXED:(t,e)=>`${u}[경고] baseURL("${t}")의 시작이 host와 같아 basePath("${e}")로 해석했습니다. 의도대로 동작했다면 다음부터는 basePath를 사용하세요.`}),_=Object.freeze({ADD:"add",REPLACE:"replace",REMOVE:"remove"}),O=Object.freeze({proxy:Object.freeze({[_.ADD]:"[DSM][Proxy][add]     path: {path} | newValue: {newValue}",[_.REPLACE]:"[DSM][Proxy][replace] path: {path} | oldValue: {oldValue} → {newValue}",[_.REMOVE]:"[DSM][Proxy][remove]  path: {path} | oldValue: {oldValue}",deepProxy:"[DSM][Proxy][get]     deep proxy 진입 | path: {path}"}),url:Object.freeze({resolved:"[DSM][URL] 최종 URL → {url}",hostIgnored:"[DSM][URL] host 무시, baseURL 우선 → {url}",basePathFixed:"[DSM][URL] baseURL → basePath 해석 | basePath: {basePath}"}),pipeline:Object.freeze({fetchStart:"[DSM][Pipeline] 병렬 fetch 시작 | keys: {keys}",fetchDone:"[DSM][Pipeline] 병렬 fetch 완료",afterStart:"[DSM][Pipeline] after 핸들러 실행 | key: {key}",afterDone:"[DSM][Pipeline] after 핸들러 완료 | key: {key}",afterError:"[DSM][Pipeline] after 핸들러 실패 | key: {key} | error: {error}"})});function P(t,e={}){return t.replace(/\{(\w+)\}/g,(n,s)=>{if(!(s in e))return`{${s}}`;const r=e[s];return r==null?String(r):typeof r=="object"?JSON.stringify(r):String(r)})}const ge="dsm_debug",$=Object.freeze({TAB_REGISTER:"TAB_REGISTER",TAB_UNREGISTER:"TAB_UNREGISTER",TAB_PING:"TAB_PING",DS_UPDATE:"DS_UPDATE",DS_ERROR:"DS_ERROR"}),pe="dsm_debugger",Ee="width=520,height=700,resizable=yes,scrollbars=yes",x=`dsm_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;let A=null,C=null;const J=new Map;function G(){return A||(typeof BroadcastChannel>"u"?null:(A=new BroadcastChannel(ge),A))}function _e(){return C||(typeof Worker>"u"?null:(C=new Worker(new URL("/rest-domain-state-manager/assets/serializer.worker-CDt7bSN9.js",import.meta.url),{type:"module"}),C))}function oe(){var e;const t=_e();t?t.postMessage({type:"REGISTER_TAB",tabId:x,tabUrl:location.href,payload:JSON.stringify(Object.fromEntries(J))}):(e=G())==null||e.postMessage({type:$.TAB_REGISTER,tabId:x,tabUrl:location.href,states:Object.fromEntries(J)})}let ie=!1;function ye(){var t;typeof window>"u"||ie||(ie=!0,(t=G())==null||t.addEventListener("message",({data:e})=>{(e==null?void 0:e.type)===$.TAB_PING&&oe()}),window.addEventListener("beforeunload",()=>{var e;(e=G())==null||e.postMessage({type:$.TAB_UNREGISTER,tabId:x})}),oe())}function Je(){A&&(A.postMessage({type:$.TAB_UNREGISTER,tabId:x}),A.close(),A=null,console.debug("[DSM] Debug BroadcastChannel closed.")),C&&(C.terminate(),C=null,console.debug("[DSM] Serialize Worker terminated."))}function me(t,e){var n;typeof window>"u"||(ye(),J.set(t,{label:t,...e}),(n=G())==null||n.postMessage({type:$.DS_UPDATE,tabId:x,tabUrl:location.href,label:t,snapshot:e}))}function ae(t,e){var n;typeof window>"u"||(n=G())==null||n.postMessage({type:$.DS_ERROR,tabId:x,tabUrl:location.href,key:t,error:String(e)})}function Te(){const t=window.open("",pe,Ee);if(!t){console.warn("[DSM] 팝업이 차단되었습니다. 브라우저 팝업 차단을 해제하세요.");return}if(t.document.getElementById("dsm-root")){t.focus();return}t.document.write(Se()),t.document.close(),t.addEventListener("load",()=>{})}function Se(){return`<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>DSM Debugger</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Consolas', 'D2Coding', monospace; font-size: 12px;
         background: #1e1e1e; color: #d4d4d4; height: 100vh; display: flex; flex-direction: column; }
  #header { background: #007acc; color: #fff; padding: 8px 12px;
            font-size: 13px; font-weight: bold; display: flex; align-items: center; gap: 8px; }
  #tab-bar { display: flex; background: #2d2d2d; border-bottom: 1px solid #444; overflow-x: auto; }
  .tab-btn { padding: 6px 12px; border: none; background: transparent; color: #aaa;
             cursor: pointer; border-bottom: 2px solid transparent; white-space: nowrap; font-size: 11px; }
  .tab-btn.active { color: #fff; border-bottom-color: #007acc; }
  .tab-btn:hover  { background: #3a3a3a; }
  #content { flex: 1; overflow-y: auto; padding: 10px; }
  .ds-block { margin-bottom: 12px; border: 1px solid #3a3a3a; border-radius: 4px; overflow: hidden; }
  .ds-header { background: #2d2d2d; padding: 6px 10px; font-weight: bold;
               display: flex; justify-content: space-between; align-items: center; }
  .ds-header .badge { font-size: 10px; padding: 2px 6px; border-radius: 10px; }
  .badge-new     { background: #16825d; color: #fff; }
  .badge-exist   { background: #0e639c; color: #fff; }
  .badge-error   { background: #c72e0f; color: #fff; }
  .ds-section    { padding: 6px 10px; border-top: 1px solid #3a3a3a; }
  .ds-section-title { color: #9cdcfe; font-size: 11px; margin-bottom: 4px; }
  pre { white-space: pre-wrap; word-break: break-all; color: #ce9178; font-size: 11px; line-height: 1.5; }
  .change-entry { color: #4ec9b0; }
  .error-entry  { color: #f48771; }
  #empty { color: #666; text-align: center; padding: 40px; }
</style>
</head>
<body>
<div id="header">
  🔍 DSM Debugger
  <span id="tab-count" style="font-size:11px;opacity:.8">탭 없음</span>
</div>
<div id="tab-bar"></div>
<div id="content"><div id="empty">탭 데이터를 기다리는 중...</div></div>
<script>
  const tabs    = new Map();
  let activeTab = null;
  const channel = new BroadcastChannel('dsm_debug');

  // 1. 팝업 초기화 직후 TAB_PING을 broadcast하여 현재 열린 탭들이 응답하도록 한다.
  //    BroadcastChannel은 자기 자신이 보낸 메시지를 수신하지 않으므로,
  //    팝업이 직접 PING을 보내고 각 탭이 TAB_REGISTER로 응답하는 구조를 사용한다.
  channel.postMessage({ type: 'TAB_PING' });

  channel.addEventListener('message', ({ data }) => {
    if (!data) return;
    const now = Date.now();

    if (data.type === 'TAB_REGISTER') {
      tabs.set(data.tabId, { url: data.tabUrl, states: data.states ?? {}, lastSeen: now });
      if (!activeTab) activeTab = data.tabId;
      render();
    }
    if (data.type === 'TAB_UNREGISTER') {
      tabs.delete(data.tabId);
      if (activeTab === data.tabId) activeTab = [...tabs.keys()][0] ?? null;
      render();
    }
    if (data.type === 'DS_UPDATE' && tabs.has(data.tabId)) {
      const tab = tabs.get(data.tabId);
      tab.states[data.label] = { label: data.label, ...data.snapshot };
      tab.lastSeen = now;
      render();
    }
    if (data.type === 'DS_ERROR' && tabs.has(data.tabId)) {
      const tab = tabs.get(data.tabId);
      (tab.errors ??= []).push({ key: data.key, error: data.error });
      tab.lastSeen = now;
      render();
    }
  });

  // 2. Heartbeat: 2초마다 TAB_PING을 broadcast하여 살아있는 탭의 응답을 유도한다.
  //    탭이 응답하면 lastSeen 타임스탬프가 갱신된다.
  setInterval(() => {
      channel.postMessage({ type: 'TAB_PING' });
  }, 2000);

  // 3. GC: 2초마다 lastSeen을 확인하여 5초 이상 무응답인 탭을 죽은 탭으로 판단하고 제거한다.
  //    beforeunload 이벤트가 발생하지 않는 모바일/강제 종료 환경을 대응한다.
  setInterval(() => {
      const now = Date.now();
      let isDeadFound = false;
      for (const [id, tab] of tabs.entries()) {
          if (now - tab.lastSeen > 5000) {
              tabs.delete(id);
              if (activeTab === id) activeTab = [...tabs.keys()][0] ?? null;
              isDeadFound = true;
          }
      }
      if (isDeadFound) render();
  }, 2000);

  function render() {
      document.getElementById('tab-count').textContent = \`활성 탭: \${tabs.size}개\`;
      const tabBar  = document.getElementById('tab-bar');
      const content = document.getElementById('content');

      if (tabs.size === 0) {
        tabBar.innerHTML  = '';
        content.innerHTML = '<div id="empty">대기 중...</div>';
        return;
      }

      tabBar.innerHTML = [...tabs.keys()].map(k => \`
        <button class="tab-btn \${k === activeTab ? 'active' : ''}" data-id="\${k}">
          \${k.split('_')[1]} (\${new URL(tabs.get(k).url).pathname})
        </button>
      \`).join('');

      if (!activeTab || !tabs.has(activeTab)) activeTab = [...tabs.keys()][0];
      const states = tabs.get(activeTab).states;
      const keys   = Object.keys(states);

      if (keys.length === 0) {
        content.innerHTML = '<div id="empty">생성된 DomainState 없음</div>';
      } else {
        content.innerHTML = keys.map(k => {
          const s          = states[k];
          const badgeClass = s.isNew ? 'badge-new' : 'badge-exist';
          const badgeText  = s.isNew ? 'NEW'       : 'EXIST';
          const hasError   = (s.errors?.length ?? 0) > 0;
          return \`<div class="ds-block">
            <div class="ds-header">
              <span>\${s.label ?? k}</span>
              <span>
                <span class="badge \${badgeClass}">\${badgeText}</span>
                \${hasError ? '<span class="badge badge-error">ERROR</span>' : ''}
              </span>
            </div>
            <div class="ds-section">
              <div class="ds-section-title">data (현재 상태)</div>
              <pre>\${JSON.stringify(s.data, null, 2)}</pre>
            </div>
            <div class="ds-section">
              <div class="ds-section-title">changeLog (\${(s.changeLog ?? []).length}건)</div>
              \${(s.changeLog ?? []).map(e =>
                \`<pre class="change-entry">\${JSON.stringify(e)}</pre>\`
              ).join('') || '<pre style="color:#666">변경 없음</pre>'}
            </div>
            \${hasError ? \`<div class="ds-section">
              <div class="ds-section-title">errors</div>
              \${s.errors.map(e => \`<pre class="error-entry">\${JSON.stringify(e)}</pre>\`).join('')}
            </div>\` : ''}
          </div>\`;
        }).join('');
      }

      tabBar.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => { activeTab = btn.dataset.id; render(); };
      });
  }
<\/script>
</body>
</html>`}class Re{constructor(e,{strict:n=!1,failurePolicy:s="ignore"}={}){this._resourceMap=e,this._strict=n,this._queue=[],this._failurePolicy=s}after(e,n){if(!(e in this._resourceMap))throw new Error(b.PIPELINE_INVALID_KEY(e));if(typeof n!="function")throw new TypeError(b.PIPELINE_HANDLER_TYPE(e));return this._queue.push({key:e,handler:n}),this}async run(){const e=Object.keys(this._resourceMap),n=[];console.debug(P(O.pipeline.fetchStart,{keys:e.join(", ")}));const s=await Promise.allSettled(e.map(i=>this._resourceMap[i])),r={};for(let i=0;i<e.length;i++){const d=e[i],a=s[i];if(a.status==="fulfilled")r[d]=a.value;else{if(n.push({key:d,error:a.reason}),this._strict)throw a.reason;ae(d,a.reason),console.error(`[DSM][Pipeline] fetch 실패 | key: ${d}`,a.reason)}}console.debug(O.pipeline.fetchDone);const o=[];for(const{key:i,handler:d}of this._queue){const a=r[i];if(!a){n.push({key:i,error:new Error(`fetch 실패로 인해 "${i}" 핸들러를 건너뜁니다.`)});continue}console.debug(P(O.pipeline.afterStart,{key:i}));try{await d(a),console.debug(P(O.pipeline.afterDone,{key:i})),o.push(i)}catch(l){if(n.push({key:i,error:l}),ae(i,l),console.error(P(O.pipeline.afterError,{key:i,error:String(l)}),l),this._failurePolicy==="fail-fast"){if(this._compensate(r,[...o].reverse()),this._dispatchPipelineRollback(n,r),this._strict)throw l;break}if(this._strict)throw l}}this._failurePolicy==="rollback-all"&&n.length>0&&(this._compensate(r,Object.keys(r)),this._dispatchPipelineRollback(n,r));const c={...r};return n.length>0&&(c._errors=n),c}_compensate(e,n){console.warn(b.PIPELINE_ROLLBACK_WARN);for(const s of n){const r=e[s];r&&typeof r.restore=="function"&&r.restore()}}_dispatchPipelineRollback(e,n){typeof window>"u"||window.dispatchEvent(new CustomEvent("dsm:pipeline-rollback",{detail:{errors:e,resolved:Object.fromEntries(Object.entries(n).map(([s,r])=>[s,r._label??s]))}}))}}const he=Object.freeze({UNDEFINED:"undefined",OBJECT:"object",BOOLEAN:"boolean",NUMBER:"number",BIGINT:"bigint",STRING:"string",SYMBOL:"symbol",FUNCTION:"function"}),Oe=Object.freeze({OBJECT:"[object Object]",ARRAY:"[object Array]",DATE:"[object Date]",REGEXP:"[object RegExp]",MAP:"[object Map]",SET:"[object Set]",PROMISE:"[object Promise]",FUNCTION:"[object Function]",NULL:"[object Null]",UNDEFINED:"[object Undefined]",NUMBER:"[object Number]",STRING:"[object String]",BOOLEAN:"[object Boolean]"}),De=t=>Object.prototype.toString.call(t),we=t=>Array.isArray(t),Ne=t=>{if(t===null||typeof t!==he.OBJECT||De(t)!==Oe.OBJECT)return!1;const e=Object.getPrototypeOf(t);return e===Object.prototype||e===null},Le=t=>typeof t===he.SYMBOL||t==="toJSON"||t==="then"||t==="valueOf";function X(t,e,n){let s=t;for(let r=0;r<e.length-1;r++)(s[e[r]]==null||typeof s[e[r]]!="object")&&(s[e[r]]={}),s=s[e[r]];s[e[e.length-1]]=n}function ee(t,e=null){const n=[],s=new WeakMap;let r=!1;const o=new Set,c=["shift","unshift","splice","sort","reverse"];function i(a,l,f,g){if(r)return;const p={op:a,path:l};a!==_.REMOVE&&(p.newValue=g),a!==_.ADD&&(p.oldValue=f),n.push(p);const h=l.split("/")[1];h&&o.add(h),console.debug(P(O.proxy[a],{path:l,oldValue:f,newValue:g})),e&&e()}function d(a){return{set(l,f,g,p){const h=Reflect.get(l,f,p);if(h===g)return!0;const y=`${a}/${String(f)}`,D=Object.prototype.hasOwnProperty.call(l,f),w=D?h:void 0,v=D?_.REPLACE:_.ADD;if(Array.isArray(l)&&f==="length")return Reflect.set(l,f,g,p);const N=Reflect.set(l,f,g,p);return N&&i(v,y,w,g),N},get(l,f,g){if(Le(f))return Reflect.get(l,f,g);if(Array.isArray(l)&&c.includes(f))return(...h)=>{const y=[...l];r=!0;const D=Array.prototype[f].apply(l,h);switch(r=!1,f){case"shift":i(_.REMOVE,`${a}/0`,y[0],void 0);break;case"unshift":h.forEach((w,v)=>{i(_.ADD,`${a}/${v}`,void 0,w)});break;case"splice":{const w=h[0]<0?Math.max(y.length+h[0],0):Math.min(h[0],y.length);D.forEach(N=>{i(_.REMOVE,`${a}/${w}`,N,void 0)}),h.slice(2).forEach((N,V)=>{i(_.ADD,`${a}/${w+V}`,void 0,N)});break}case"sort":case"reverse":i(_.REPLACE,a,y,[...l]);break}return D};const p=Reflect.get(l,f,g);if(Ne(p)||we(p)){if(s.has(p))return s.get(p);const h=`${a}/${String(f)}`;console.debug(P(O.proxy.deepProxy,{path:h}));const y=new Proxy(p,d(h));return s.set(p,y),y}return p},deleteProperty(l,f){if(!Object.prototype.hasOwnProperty.call(l,f))return!0;const g=`${a}/${String(f)}`,p=Reflect.get(l,f),h=Reflect.deleteProperty(l,f);return h&&i(_.REMOVE,g,p,void 0),h}}}return{proxy:new Proxy(t,d("")),getChangeLog:()=>[...n],getTarget:()=>t,clearChangeLog:()=>void(n.length=0),getDirtyFields:()=>new Set(o),clearDirtyFields:()=>o.clear(),restoreTarget:a=>{if(Array.isArray(t))t.splice(0),t.push(...a);else{for(const l of Object.keys(t))Reflect.deleteProperty(t,l);Object.assign(t,a)}},restoreChangeLog:a=>{n.length=0,n.push(...a)},restoreDirtyFields:a=>{o.clear(),a.forEach(l=>o.add(l))}}}function Ie(t,e=null){return ee(JSON.parse(t),e)}function le(t){return JSON.stringify(t())}function Pe(t){return t().map(({op:n,path:s,newValue:r})=>{const o={op:n,path:s};return n!==_.REMOVE&&(o.value=r),o})}const k=Object.freeze({HTTP:"http://",HTTPS:"https://",FILE:"file:///",SSH:"ssh://"}),W=Object.freeze({DEVELOPMENT:"development",PRODUCTION:"production"}),ce=Object.freeze({[W.DEVELOPMENT]:k.HTTP,[W.PRODUCTION]:k.HTTPS}),Ae=Object.freeze(Object.keys(k));function Z(t={}){let{protocol:e,host:n,basePath:s="",baseURL:r,env:o,debug:c=!1}=t;if(n&&r)if(r.startsWith(n)){const d=r.slice(n.length)||"/";console.warn(se.URL_BASE_PATH_FIXED(r,d)),s=d,r=void 0}else if(r.includes(n))console.warn(se.URL_HOST_IGNORED(n,r)),n=void 0;else throw new Error(b.URL_CONFLICT(n,r));if(r&&!n){const d=r.replace(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//,""),a=d.indexOf("/");a===-1?(n=d,s=""):(n=d.slice(0,a),s=d.slice(a))}return{protocol:Ce({protocol:e,env:o,debug:c}),host:n??"",basePath:q(s)}}function Ce({protocol:t,env:e,debug:n=!1}={}){if(t){const s=t.toUpperCase();if(!Ae.includes(s))throw new Error(b.PROTOCOL_INVALID(t));return k[s]}return e?ce[e]??ce[W.DEVELOPMENT]:n?k.HTTP:k.HTTPS}function be(t,e=""){const{protocol:n,host:s,basePath:r}=t;if(!s&&!e)throw new Error(b.URL_MISSING);if(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(e))return console.debug(P(O.url.resolved,{url:e})),e;const c=[n,s,q(r),q(e)].filter(Boolean).map((i,d)=>d===0?i.replace(/\/$/,""):i.replace(/^\//,"").replace(/\/$/,"")).filter(Boolean).join("/");return console.debug(P(O.url.resolved,{url:c})),c}function q(t=""){if(!t)return"";const e=t.startsWith("/")?t:`/${t}`;return e.endsWith("/")?e.slice(0,-1):e}const ve=.7;function Q(t){if(t===null)return null;if(typeof t!="object")return t;if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t.source,t.flags);if(Array.isArray(t))return t.map(Q);const e={};for(const n of Object.keys(t))e[n]=Q(t[n]);return e}function Me(t){return typeof structuredClone<"u"?structuredClone(t):Q(t)}let te=!1;function ke(t){te=!!t}function Fe(t){te||typeof process<"u"||console.warn(t)}function $e(t){te||console.error(t)}class de{toSkeleton(){const e=this.constructor.fields;return e?Object.fromEntries(Object.entries(e).map(([n,s])=>{const r=s.default??"";return[n,r!==null&&typeof r=="object"?Me(r):r]})):{...this}}getValidators(){const e=this.constructor.fields;return e?Object.fromEntries(Object.entries(e).filter(([,n])=>typeof n.validate=="function").map(([n,s])=>[n,s.validate])):{}}getTransformers(){const e=this.constructor.fields;return e?Object.fromEntries(Object.entries(e).filter(([,n])=>typeof n.transform=="function").map(([n,s])=>[n,s.transform])):{}}getBaseURL(){return this.constructor.baseURL??null}checkSchema(e){const n=this.constructor.fields;if(!n)return{valid:!0,missingKeys:[],extraKeys:[]};const s=Object.keys(n),r=Object.keys(e),o=s.filter(i=>!r.includes(i)),c=r.filter(i=>!s.includes(i));return o.forEach(i=>$e(b.VO_SCHEMA_MISSING_KEY(i))),c.forEach(i=>Fe(b.VO_SCHEMA_EXTRA_KEY(i))),{valid:o.length===0,missingKeys:o,extraKeys:c}}}let K=null;var H,L,I,F;const m=class m{constructor(e,n={}){M(this,L);M(this,I,null);M(this,F,new Set);this._proxy=e.proxy,this._getChangeLog=e.getChangeLog,this._getTarget=e.getTarget,this._clearChangeLog=e.clearChangeLog,this._pendingFlush=!1,this._getDirtyFields=e.getDirtyFields,this._clearDirtyFields=e.clearDirtyFields,this._restoreTarget=e.restoreTarget,this._restoreChangeLog=e.restoreChangeLog,this._restoreDirtyFields=e.restoreDirtyFields,this._handler=n.handler??null,this._urlConfig=n.urlConfig??null,this._isNew=n.isNew??!1,this._debug=n.debug??!1,this._label=n.label??`ds_${Date.now()}`,this._validators=n.validators??{},this._transformers=n.transformers??{},this._errors=[],R(this,I,this._buildSnapshot(this._getTarget(),null)),this._debug&&this._broadcast()}static use(e){if(typeof(e==null?void 0:e.install)!="function")throw new TypeError(b.PLUGIN_NO_INSTALL);return E(m,H).has(e)||(e.install(m),E(m,H).add(e)),m}static configure({pipelineFactory:e,silent:n}={}){if(e!==void 0){if(typeof e!="function")throw new TypeError("[DSM] DomainState.configure(): pipelineFactory는 함수여야 합니다.");K=e}return n!==void 0&&ke(n),m}static all(e,n={}){if(!K)throw new Error(b.PIPELINE_NOT_CONFIGURED);return K(e,n)}static fromJSON(e,n,{urlConfig:s=null,debug:r=!1,label:o=null,vo:c=null}={}){let i=null;const d=Ie(e,()=>{i==null||i._scheduleFlush()});if(i=new m(d,{handler:n,urlConfig:s,isNew:!1,debug:r,label:o??`json_${Date.now()}`}),c instanceof de){const{valid:a}=c.checkSchema(d.getTarget());a&&(i._validators=c.getValidators(),i._transformers=c.getTransformers())}return i}static fromVO(e,n,{urlConfig:s=null,debug:r=!1,label:o=null}={}){if(!(e instanceof de))throw new TypeError(b.FROM_VO_TYPE);const c=s??(e.getBaseURL()?Z({baseURL:e.getBaseURL()??void 0,debug:r}):null);let i=null;const d=ee(e.toSkeleton(),()=>{i==null||i._scheduleFlush()});return i=new m(d,{handler:n,urlConfig:c,isNew:!0,debug:r,label:o??e.constructor.name,validators:e.getValidators(),transformers:e.getTransformers()}),i}subscribe(e){return E(this,F).add(e),()=>E(this,F).delete(e)}getSnapshot(){return E(this,I)}get data(){return this._proxy}async save(e){const n=this._assertHandler("save"),s=this._resolveURL(e);R(this,L,{data:structuredClone(this._getTarget()),changeLog:this._getChangeLog(),dirtyFields:this._getDirtyFields(),isNew:this._isNew});try{if(this._isNew)await n._fetch(s,{method:"POST",body:le(this._getTarget)}),this._isNew=!1;else{const r=this._getDirtyFields(),o=Object.keys(this._getTarget()).length,c=o>0?r.size/o:0;r.size===0||c>=ve?await n._fetch(s,{method:"PUT",body:le(this._getTarget)}):await n._fetch(s,{method:"PATCH",body:JSON.stringify(Pe(this._getChangeLog))})}this._clearChangeLog(),this._clearDirtyFields(),this._debug&&this._broadcast()}catch(r){throw console.warn(b.SAVE_ROLLBACK((r==null?void 0:r.status)??0)),this._rollback(E(this,L)),r}}restore(){return E(this,L)===void 0?(console.warn(`[DSM][${this._label}] restore(): 스냅샷이 없습니다. save() 호출 없이 restore()를 호출했거나 이미 복원된 상태입니다.`),!1):(this._rollback(E(this,L)),R(this,L,void 0),typeof window<"u"&&window.dispatchEvent(new CustomEvent("dsm:rollback",{detail:{label:this._label}})),!0)}async remove(e){const n=this._assertHandler("remove"),s=this._resolveURL(e);await n._fetch(s,{method:"DELETE"})}log(){if(!this._debug)return;const e=this._getChangeLog();console.group(`[DSM][${this._label}] changeLog`),e.length?console.table(e):console.debug("(변경 이력 없음)"),console.groupEnd()}openDebugger(){this._debug&&Te()}_buildSnapshot(e,n){const s=this._getDirtyFields();if(n!==null&&s.size===0)return n;const r={};for(const o of Object.keys(e))if(n===null||s.has(o)){const i=e[o];Array.isArray(i)?r[o]=[...i]:i!==null&&typeof i=="object"?r[o]={...i}:r[o]=i}else r[o]=n[o];return r}_notifyListeners(){for(const e of E(this,F))try{e()}catch(n){console.error("[DSM] subscribe 리스너 실행 중 에러 발생:",n)}}_assertHandler(e){if(!this._handler)throw new Error(b.HANDLER_MISSING(e));return this._handler}_resolveURL(e){var s;const n=this._urlConfig??((s=this._handler)==null?void 0:s.getUrlConfig())??{};return be(n,e??"")}_rollback(e){this._restoreTarget(e.data),this._restoreChangeLog(e.changeLog),this._restoreDirtyFields(e.dirtyFields),this._isNew=e.isNew,this._debug&&this._broadcast()}_scheduleFlush(){this._pendingFlush||(this._pendingFlush=!0,queueMicrotask(()=>{this._pendingFlush=!1;const e=this._buildSnapshot(this._getTarget(),E(this,I));e!==E(this,I)&&(R(this,I,e),this._notifyListeners()),this._debug&&this._broadcast()}))}_broadcast(){me(this._label,{data:this._getTarget(),changeLog:this._getChangeLog(),isNew:this._isNew,errors:this._errors})}};H=new WeakMap,L=new WeakMap,I=new WeakMap,F=new WeakMap,M(m,H,new Set);let z=m;const xe=new Set(["POST","PUT","PATCH","DELETE"]);var T;class Xe{constructor(e={}){M(this,T);this._urlConfig=Z(e),this._debug=e.debug??!1,this._headers={"Content-Type":"application/json"}}init({csrfSelector:e,csrfCookieName:n,csrfToken:s}={}){if(typeof s=="string")return R(this,T,s),this;if(typeof document<"u"){const r=e??'meta[name="_csrf"]',o=document.querySelector(r);if(o&&o instanceof HTMLMetaElement){if(o.content)return R(this,T,o.content),this;console.warn(b.CSRF_INIT_NO_TOKEN(r))}if(n){const c=document.cookie.split(";").map(i=>i.trim()).find(i=>i.startsWith(`${n}=`));if(c)return R(this,T,decodeURIComponent(c.split("=")[1])),this}}return R(this,T,null),this}async get(e,{urlConfig:n}={}){const s=n?Z(n):this._urlConfig,r=be(s,e),o=await this._fetch(r,{method:"GET"});if(o===null)throw new Error("[DSM] GET 응답 본문이 비어있습니다");return z.fromJSON(o,this,{urlConfig:s,debug:this._debug})}async _fetch(e,n={}){const s=(n.method??"GET").toUpperCase(),r={...this._headers,...n.headers??{}};if(xe.has(s)){if(E(this,T)===null)throw new Error(b.CSRF_TOKEN_MISSING(s));typeof E(this,T)=="string"&&(r["X-CSRF-Token"]=E(this,T))}const o=await fetch(e,{...n,headers:r}),c=await o.text();if(!o.ok)throw{status:o.status,statusText:o.statusText,body:c};return c||null}getUrlConfig(){return this._urlConfig}isDebug(){return this._debug}}T=new WeakMap;function Ue(t,e,n){const{valueField:s,labelField:r,class:o="",css:c={},events:i={},placeholder:d,multiple:a=!1}=n,l=document.createElement("select");if(l.name=s,l.multiple=a,o&&(l.className=o),Be(l,c),d){const f=document.createElement("option");f.value="",f.textContent=d,f.disabled=!0,f.selected=!0,f.hidden=!0,l.appendChild(f)}for(const f of e){const g=document.createElement("option");g.value=String(f[s]??""),g.textContent=String(f[r]??""),l.appendChild(g)}return je(l,i),t.appendChild(l),l}function Be(t,e){Object.assign(t.style,e)}function je(t,e){for(const[n,s]of Object.entries(e))typeof s=="function"&&t.addEventListener(n,s)}function Ge(t,e,n){const{type:s,valueField:r,labelField:o,name:c=r,class:i="",css:d={},events:a={},containerClass:l="",containerCss:f={},labelClass:g="",labelCss:p={}}=n,h=[],y=t.id||`dsm_${Date.now()}_${Math.random().toString(36).slice(2)}`;return e.forEach((D,w)=>{const v=D[r]??"",N=D[o]??"",V=`${y}_${c}_${w}`,U=document.createElement("div");l&&(U.className=l),Y(U,f);const S=document.createElement("input");S.type=s,S.id=V,S.name=c,S.value=v,i&&(S.className=i),Y(S,d),He(S,a);const B=document.createElement("label");B.htmlFor=V,B.textContent=N,g&&(B.className=g),Y(B,p),U.appendChild(S),U.appendChild(B),t.appendChild(U),h.push(S)}),h}function Y(t,e){Object.assign(t.style,e)}function He(t,e){for(const[n,s]of Object.entries(e))typeof s=="function"&&t.addEventListener(n,s)}function Ve(t,e,n){const{valueField:s,labelField:r,class:o="",css:c={},events:i={}}=n;return e.map(d=>{const a=document.createElement("button");a.type="button",a.dataset.value=String(d[s]??""),a.textContent=String(d[r]??""),o&&(a.className=o),Object.assign(a.style,c);for(const[l,f]of Object.entries(i))typeof f=="function"&&a.addEventListener(l,f);return t.appendChild(a),a})}const j=Object.freeze({SELECT:"select",RADIO:"radio",CHECKBOX:"checkbox",BUTTON:"button"});Object.freeze(new Set(["text","email","password","number","tel","url","search","date","time","textarea"]));const We={install(t){t.prototype.renderTo=function(n,s){const r=n instanceof HTMLElement?n:document.getElementById(n.replace(/^#/,""));if(!r)throw new Error(b.RENDERER_CONTAINER_NOT_FOUND(String(n)));const{type:o,valueField:c,labelField:i}=s;if(!Object.values(j).includes(o))throw new Error(b.RENDERER_TYPE_UNKNOWN(o));if(!c)throw new Error(b.RENDERER_VALUE_FIELD_MISSING);if(!i)throw new Error(b.RENDERER_LABEL_FIELD_MISSING);const d=this._getTarget();if(!Array.isArray(d))throw new Error(b.RENDERER_DATA_NOT_ARRAY(this._label));switch(r.innerHTML="",o){case j.SELECT:return Ue(r,d,s);case j.RADIO:case j.CHECKBOX:return Ge(r,d,s);case j.BUTTON:return Ve(r,d,s)}}}},Ze={install(t){t.fromForm=function(e,n,s={}){const r=fe(e);if(!r)throw new Error("[DSM] 유효한 HTMLFormElement가 아닙니다.");let o=null;const c=ze(r),i=ee(c,()=>{o==null||o._scheduleFlush()});return o=new t(i,{handler:n,urlConfig:s.urlConfig,isNew:!0,debug:s.debug,label:s.label??r.id??"form_state"}),ue(r,i.getTarget(),i.proxy),o},t.prototype.bindForm=function(e){const n=fe(e);return n?(Ke(n,this._getTarget()),ue(n,this._getTarget(),this.data),this):this}}};function fe(t){return typeof t=="string"?document.getElementById(t):t instanceof HTMLFormElement?t:null}function ze(t){const e={},n=Array.from(t.elements);for(const s of n){if(!s.name)continue;const r=s.type==="checkbox"?s.checked:s.value;X(e,s.name.split("."),r)}return e}function Ke(t,e){const n=Array.from(t.elements);for(const s of n){if(!s.name)continue;const r=s.name.split(".");let o=e;for(const c of r){if(o==null)break;o=o[c]}o!=null&&(s.type==="checkbox"||s.type==="radio"?s.checked=s.value===String(o):s.value=o)}}function ue(t,e,n){t.addEventListener("input",s=>{const r=s.target;if(!r.name||["text","password","email","textarea"].includes(r.type))return;const o=r.type==="checkbox"?r.checked:r.value;X(n,r.name.split("."),o)}),t.addEventListener("focusout",s=>{const r=s.target;r.name&&["text","password","email","textarea"].includes(r.type)&&X(n,r.name.split("."),r.value)})}z.configure({pipelineFactory:(t,e)=>new Re(t,e)});export{Xe as ApiHandler,Re as DomainPipeline,We as DomainRenderer,z as DomainState,de as DomainVO,Ze as FormBinder,Je as closeDebugChannel};

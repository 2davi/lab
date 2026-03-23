var ae=Object.defineProperty;var z=t=>{throw TypeError(t)};var ie=(t,e,n)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Y=(t,e,n)=>ie(t,typeof e!="symbol"?e+"":e,n),le=(t,e,n)=>e.has(t)||z("Cannot "+n);var U=(t,e,n)=>(le(t,e,"read from private field"),n?n.call(t):e.get(t)),K=(t,e,n)=>e.has(t)?z("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);const h="[DSM]",E=Object.freeze({URL_CONFLICT:(t,e)=>`${h} host("${t}")와 baseURL("${e}")이 충돌합니다. 둘 중 하나만 사용하세요.`,URL_MISSING:`${h} URL을 특정할 수 없습니다. save(path) 또는 baseURL/host를 설정하세요.`,PROTOCOL_INVALID:t=>`${h} 유효하지 않은 protocol 값: "${t}". HTTP | HTTPS | FILE | SSH 중 하나를 사용하세요.`,HANDLER_MISSING:t=>`${h} DomainState.${t}(): ApiHandler가 주입되지 않았습니다. fromJSON / fromForm / fromVO의 두 번째 인자로 api를 전달하세요.`,FROM_VO_TYPE:`${h} DomainState.fromVO(): DomainVO 인스턴스를 전달해야 합니다.`,FROM_FORM_TYPE:`${h} DomainState.fromForm(): HTMLFormElement 또는 form id 문자열을 전달해야 합니다.`,FORM_NOT_FOUND:t=>`${h} DomainState.fromForm(): id="${t}"인 form 요소를 찾을 수 없습니다.`,SAVE_ROLLBACK:t=>`${h} save() HTTP ${t} 오류 — 서버 동기화 실패. 도메인 상태를 save() 호출 이전으로 롤백합니다.`,VO_SCHEMA_MISSING_KEY:t=>`${h} DomainVO 정합성 오류: 응답 데이터에 VO 스키마의 "${t}" 필드가 없습니다.`,VO_SCHEMA_EXTRA_KEY:t=>`${h} DomainVO 정합성 경고: 응답 데이터에 VO 스키마에 없는 "${t}" 필드가 포함되어 있습니다.`,PLUGIN_NO_INSTALL:`${h} DomainState.use(): 플러그인은 install(DomainState) 메서드를 가져야 합니다.`,PIPELINE_INVALID_KEY:t=>`${h} DomainPipeline.after(): "${t}"는 등록되지 않은 리소스 키입니다. DomainState.all()에 전달한 키를 확인하세요.`,PIPELINE_HANDLER_TYPE:t=>`${h} DomainPipeline.after("${t}"): 핸들러는 함수여야 합니다.`,RENDERER_CONTAINER_NOT_FOUND:t=>`${h} renderTo(): id="${t}"인 컨테이너 요소를 찾을 수 없습니다.`,RENDERER_TYPE_UNKNOWN:t=>`${h} renderTo(): 지원하지 않는 type="${t}"입니다. select | radio | checkbox | button 중 하나를 사용하세요.`,RENDERER_VALUE_FIELD_MISSING:`${h} renderTo(): valueField는 필수 옵션입니다.`,RENDERER_LABEL_FIELD_MISSING:`${h} renderTo(): labelField는 필수 옵션입니다.`,RENDERER_DATA_NOT_ARRAY:t=>`${h} renderTo(): DomainState.data가 배열이 아닙니다. renderTo()는 배열 형태의 DomainState에서만 사용할 수 있습니다. (key: "${t}")`}),J=Object.freeze({URL_HOST_IGNORED:(t,e)=>`${h}[경고] host("${t}")를 무시하고 baseURL("${e}")을 우선 사용합니다.`,URL_BASE_PATH_FIXED:(t,e)=>`${h}[경고] baseURL("${t}")의 시작이 host와 같아 basePath("${e}")로 해석했습니다. 의도대로 동작했다면 다음부터는 basePath를 사용하세요.`}),p=Object.freeze({ADD:"add",REPLACE:"replace",REMOVE:"remove"}),m=Object.freeze({proxy:Object.freeze({[p.ADD]:"[DSM][Proxy][add]     path: {path} | newValue: {newValue}",[p.REPLACE]:"[DSM][Proxy][replace] path: {path} | oldValue: {oldValue} → {newValue}",[p.REMOVE]:"[DSM][Proxy][remove]  path: {path} | oldValue: {oldValue}",deepProxy:"[DSM][Proxy][get]     deep proxy 진입 | path: {path}"}),url:Object.freeze({resolved:"[DSM][URL] 최종 URL → {url}",hostIgnored:"[DSM][URL] host 무시, baseURL 우선 → {url}",basePathFixed:"[DSM][URL] baseURL → basePath 해석 | basePath: {basePath}"}),pipeline:Object.freeze({fetchStart:"[DSM][Pipeline] 병렬 fetch 시작 | keys: {keys}",fetchDone:"[DSM][Pipeline] 병렬 fetch 완료",afterStart:"[DSM][Pipeline] after 핸들러 실행 | key: {key}",afterDone:"[DSM][Pipeline] after 핸들러 완료 | key: {key}",afterError:"[DSM][Pipeline] after 핸들러 실패 | key: {key} | error: {error}"})});function D(t,e={}){return t.replace(/\{(\w+)\}/g,(n,r)=>{if(!(r in e))return`{${r}}`;const s=e[r];return s==null?String(s):typeof s=="object"?JSON.stringify(s):String(s)})}const ce="dsm_debug",I=Object.freeze({TAB_REGISTER:"TAB_REGISTER",TAB_UNREGISTER:"TAB_UNREGISTER",TAB_PING:"TAB_PING",DS_UPDATE:"DS_UPDATE",DS_ERROR:"DS_ERROR"}),de="dsm_debugger",ue="width=520,height=700,resizable=yes,scrollbars=yes",x=`dsm_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;let N=null;const re=new Map;function C(){return N||(typeof BroadcastChannel>"u"?null:(N=new BroadcastChannel(ce),N))}function X(){var t;(t=C())==null||t.postMessage({type:I.TAB_REGISTER,tabId:x,tabUrl:location.href,states:Object.fromEntries(re)})}let Z=!1;function fe(){var t;typeof window>"u"||Z||(Z=!0,(t=C())==null||t.addEventListener("message",({data:e})=>{(e==null?void 0:e.type)===I.TAB_PING&&X()}),window.addEventListener("beforeunload",()=>{var e;(e=C())==null||e.postMessage({type:I.TAB_UNREGISTER,tabId:x})}),X())}function $e(){N&&(N.postMessage({type:I.TAB_UNREGISTER,tabId:x}),N.close(),N=null,console.debug("[DSM] Debug BroadcastChannel closed."))}function he(t,e){var n;typeof window>"u"||(fe(),re.set(t,{label:t,...e}),(n=C())==null||n.postMessage({type:I.DS_UPDATE,tabId:x,tabUrl:location.href,label:t,snapshot:e}))}function q(t,e){var n;typeof window>"u"||(n=C())==null||n.postMessage({type:I.DS_ERROR,tabId:x,tabUrl:location.href,key:t,error:String(e)})}function be(){const t=window.open("",de,ue);if(!t){console.warn("[DSM] 팝업이 차단되었습니다. 브라우저 팝업 차단을 해제하세요.");return}if(t.document.getElementById("dsm-root")){t.focus();return}t.document.write(ge()),t.document.close(),t.addEventListener("load",()=>{})}function ge(){return`<!DOCTYPE html>
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
</html>`}class Ee{constructor(e,{strict:n=!1}={}){this._resourceMap=e,this._strict=n,this._queue=[]}after(e,n){if(!(e in this._resourceMap))throw new Error(E.PIPELINE_INVALID_KEY(e));if(typeof n!="function")throw new TypeError(E.PIPELINE_HANDLER_TYPE(e));return this._queue.push({key:e,handler:n}),this}async run(){const e=Object.keys(this._resourceMap),n=[];console.debug(D(m.pipeline.fetchStart,{keys:e.join(", ")}));const r=await Promise.allSettled(e.map(i=>this._resourceMap[i])),s={};for(let i=0;i<e.length;i++){const a=e[i],c=r[i];if(c.status==="fulfilled")s[a]=c.value;else{if(n.push({key:a,error:c.reason}),this._strict)throw c.reason;q(a,c.reason),console.error(`[DSM][Pipeline] fetch 실패 | key: ${a}`,c.reason)}}console.debug(m.pipeline.fetchDone);for(const{key:i,handler:a}of this._queue){const c=s[i];if(!c){n.push({key:i,error:new Error(`fetch 실패로 인해 "${i}" 핸들러를 건너뜁니다.`)});continue}console.debug(D(m.pipeline.afterStart,{key:i}));try{await a(c),console.debug(D(m.pipeline.afterDone,{key:i}))}catch(l){if(n.push({key:i,error:l}),q(i,l),console.error(D(m.pipeline.afterError,{key:i,error:String(l)}),l),this._strict)throw l}}const o={...s};return n.length>0&&(o._errors=n),o}}const se=Object.freeze({UNDEFINED:"undefined",OBJECT:"object",BOOLEAN:"boolean",NUMBER:"number",BIGINT:"bigint",STRING:"string",SYMBOL:"symbol",FUNCTION:"function"}),pe=Object.freeze({OBJECT:"[object Object]",ARRAY:"[object Array]",DATE:"[object Date]",REGEXP:"[object RegExp]",MAP:"[object Map]",SET:"[object Set]",PROMISE:"[object Promise]",FUNCTION:"[object Function]",NULL:"[object Null]",UNDEFINED:"[object Undefined]",NUMBER:"[object Number]",STRING:"[object String]",BOOLEAN:"[object Boolean]"}),_e=t=>Object.prototype.toString.call(t),ye=t=>Array.isArray(t),Te=t=>{if(t===null||typeof t!==se.OBJECT||_e(t)!==pe.OBJECT)return!1;const e=Object.getPrototypeOf(t);return e===Object.prototype||e===null},me=t=>typeof t===se.SYMBOL||t==="toJSON"||t==="then"||t==="valueOf";function j(t,e,n){let r=t;for(let s=0;s<e.length-1;s++)(r[e[s]]==null||typeof r[e[s]]!="object")&&(r[e[s]]={}),r=r[e[s]];r[e[e.length-1]]=n}function G(t,e=null){const n=[],r=new WeakMap;let s=!1;const o=new Set,i=["shift","unshift","splice","sort","reverse"];function a(l,d,u,b){if(s)return;const g={op:l,path:d};l!==p.REMOVE&&(g.newValue=b),l!==p.ADD&&(g.oldValue=u),n.push(g);const f=d.split("/")[1];f&&o.add(f),console.debug(D(m.proxy[l],{path:d,oldValue:u,newValue:b})),e&&e()}function c(l){return{set(d,u,b,g){const f=Reflect.get(d,u,g);if(f===b)return!0;const y=`${l}/${String(u)}`,R=Object.prototype.hasOwnProperty.call(d,u),O=R?f:void 0,w=R?p.REPLACE:p.ADD;if(Array.isArray(d)&&u==="length")return Reflect.set(d,u,b,g);const S=Reflect.set(d,u,b,g);return S&&a(w,y,O,b),S},get(d,u,b){if(me(u))return Reflect.get(d,u,b);if(Array.isArray(d)&&i.includes(u))return(...f)=>{const y=[...d];s=!0;const R=Array.prototype[u].apply(d,f);switch(s=!1,u){case"shift":a(p.REMOVE,`${l}/0`,y[0],void 0);break;case"unshift":f.forEach((O,w)=>{a(p.ADD,`${l}/${w}`,void 0,O)});break;case"splice":{const O=f[0]<0?Math.max(y.length+f[0],0):Math.min(f[0],y.length);R.forEach(S=>{a(p.REMOVE,`${l}/${O}`,S,void 0)}),f.slice(2).forEach((S,$)=>{a(p.ADD,`${l}/${O+$}`,void 0,S)});break}case"sort":case"reverse":a(p.REPLACE,l,y,[...d]);break}return R};const g=Reflect.get(d,u,b);if(Te(g)||ye(g)){if(r.has(g))return r.get(g);const f=`${l}/${String(u)}`;console.debug(D(m.proxy.deepProxy,{path:f}));const y=new Proxy(g,c(f));return r.set(g,y),y}return g},deleteProperty(d,u){if(!Object.prototype.hasOwnProperty.call(d,u))return!0;const b=`${l}/${String(u)}`,g=Reflect.get(d,u),f=Reflect.deleteProperty(d,u);return f&&a(p.REMOVE,b,g,void 0),f}}}return{proxy:new Proxy(t,c("")),getChangeLog:()=>[...n],getTarget:()=>t,clearChangeLog:()=>void(n.length=0),getDirtyFields:()=>new Set(o),clearDirtyFields:()=>o.clear(),restoreTarget:l=>{if(Array.isArray(t))t.splice(0),t.push(...l);else{for(const d of Object.keys(t))Reflect.deleteProperty(t,d);Object.assign(t,l)}},restoreChangeLog:l=>{n.length=0,n.push(...l)},restoreDirtyFields:l=>{o.clear(),l.forEach(d=>o.add(d))}}}function Re(t,e=null){return G(JSON.parse(t),e)}function Q(t){return JSON.stringify(t())}function Oe(t){return t().map(({op:e,path:n,newValue:r})=>{const s={op:e,path:n};return e!==p.REMOVE&&(s.value=r),s})}const L=Object.freeze({HTTP:"http://",HTTPS:"https://",FILE:"file:///",SSH:"ssh://"}),B=Object.freeze({DEVELOPMENT:"development",PRODUCTION:"production"}),W=Object.freeze({[B.DEVELOPMENT]:L.HTTP,[B.PRODUCTION]:L.HTTPS}),Se=Object.freeze(Object.keys(L));function V(t={}){let{protocol:e,host:n,basePath:r="",baseURL:s,env:o,debug:i=!1}=t;if(n&&s)if(s.startsWith(n)){const c=s.slice(n.length)||"/";console.warn(J.URL_BASE_PATH_FIXED(s,c)),r=c,s=void 0}else if(s.includes(n))console.warn(J.URL_HOST_IGNORED(n,s)),n=void 0;else throw new Error(E.URL_CONFLICT(n,s));if(s&&!n){const c=s.replace(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//,""),l=c.indexOf("/");l===-1?(n=c,r=""):(n=c.slice(0,l),r=c.slice(l))}return{protocol:De({protocol:e,env:o,debug:i}),host:n??"",basePath:H(r)}}function De({protocol:t,env:e,debug:n=!1}={}){if(t){const r=t.toUpperCase();if(!Se.includes(r))throw new Error(E.PROTOCOL_INVALID(t));return L[r]}return e?W[e]??W[B.DEVELOPMENT]:n?L.HTTP:L.HTTPS}function oe(t,e=""){const{protocol:n,host:r,basePath:s}=t;if(!r&&!e)throw new Error(E.URL_MISSING);if(/^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(e))return console.debug(D(m.url.resolved,{url:e})),e;const i=[n,r,H(s),H(e)].filter(Boolean).map((a,c)=>c===0?a.replace(/\/$/,""):a.replace(/^\//,"").replace(/\/$/,"")).filter(Boolean).join("/");return console.debug(D(m.url.resolved,{url:i})),i}function H(t=""){if(!t)return"";const e=t.startsWith("/")?t:`/${t}`;return e.endsWith("/")?e.slice(0,-1):e}const Ne=.7;class ee{toSkeleton(){const e=this.constructor.fields;return e?Object.fromEntries(Object.entries(e).map(([n,r])=>{const s=r.default??"";return[n,s!==null&&typeof s=="object"?JSON.parse(JSON.stringify(s)):s]})):{...this}}getValidators(){const e=this.constructor.fields;return e?Object.fromEntries(Object.entries(e).filter(([,n])=>typeof n.validate=="function").map(([n,r])=>[n,r.validate])):{}}getTransformers(){const e=this.constructor.fields;return e?Object.fromEntries(Object.entries(e).filter(([,n])=>typeof n.transform=="function").map(([n,r])=>[n,r.transform])):{}}getBaseURL(){return this.constructor.baseURL??null}checkSchema(e){const n=this.constructor.fields;if(!n)return{valid:!0,missingKeys:[],extraKeys:[]};const r=Object.keys(n),s=Object.keys(e),o=r.filter(a=>!s.includes(a)),i=s.filter(a=>!r.includes(a));return o.forEach(a=>console.error(E.VO_SCHEMA_MISSING_KEY(a))),i.forEach(a=>console.warn(E.VO_SCHEMA_EXTRA_KEY(a))),{valid:o.length===0,missingKeys:o,extraKeys:i}}}var M;const _=class _{static use(e){if(typeof(e==null?void 0:e.install)!="function")throw new TypeError(E.PLUGIN_NO_INSTALL);return U(_,M).has(e)||(e.install(_),U(_,M).add(e)),_}static all(e,n={}){if(!_.PipelineConstructor)throw new Error("[DSM] DomainPipeline이 주입되지 않았습니다. rest-domain-state-manager.js 진입점을 사용하세요.");return new _.PipelineConstructor(e,n)}constructor(e,n={}){this._proxy=e.proxy,this._getChangeLog=e.getChangeLog,this._getTarget=e.getTarget,this._clearChangeLog=e.clearChangeLog,this._pendingFlush=!1,this._getDirtyFields=e.getDirtyFields,this._clearDirtyFields=e.clearDirtyFields,this._restoreTarget=e.restoreTarget,this._restoreChangeLog=e.restoreChangeLog,this._restoreDirtyFields=e.restoreDirtyFields,this._handler=n.handler??null,this._urlConfig=n.urlConfig??null,this._isNew=n.isNew??!1,this._debug=n.debug??!1,this._label=n.label??`ds_${Date.now()}`,this._validators=n.validators??{},this._transformers=n.transformers??{},this._errors=[],this._debug&&this._broadcast()}static fromJSON(e,n,{urlConfig:r=null,debug:s=!1,label:o=null,vo:i=null}={}){let a=null;const c=Re(e,()=>{a==null||a._scheduleFlush()});if(a=new _(c,{handler:n,urlConfig:r,isNew:!1,debug:s,label:o??`json_${Date.now()}`}),i instanceof ee){const{valid:l}=i.checkSchema(c.getTarget());l&&(a._validators=i.getValidators(),a._transformers=i.getTransformers())}return a}static fromVO(e,n,{urlConfig:r=null,debug:s=!1,label:o=null}={}){if(!(e instanceof ee))throw new TypeError(E.FROM_VO_TYPE);const i=r??(e.getBaseURL()?V({baseURL:e.getBaseURL()??void 0,debug:s}):null);let a=null;const c=G(e.toSkeleton(),()=>{a==null||a._scheduleFlush()});return a=new _(c,{handler:n,urlConfig:i,isNew:!0,debug:s,label:o??e.constructor.name,validators:e.getValidators(),transformers:e.getTransformers()}),a}get data(){return this._proxy}async save(e){const n=this._assertHandler("save"),r=this._resolveURL(e),s={data:structuredClone(this._getTarget()),changeLog:this._getChangeLog(),dirtyFields:this._getDirtyFields(),isNew:this._isNew};try{if(this._isNew)await n._fetch(r,{method:"POST",body:Q(this._getTarget)}),this._isNew=!1;else{const o=this._getDirtyFields(),i=Object.keys(this._getTarget()).length,a=i>0?o.size/i:0;o.size===0||a>=Ne?await n._fetch(r,{method:"PUT",body:Q(this._getTarget)}):await n._fetch(r,{method:"PATCH",body:JSON.stringify(Oe(this._getChangeLog))})}this._clearChangeLog(),this._clearDirtyFields(),this._debug&&this._broadcast()}catch(o){throw console.warn(E.SAVE_ROLLBACK((o==null?void 0:o.status)??0)),this._rollback(s),o}}async remove(e){const n=this._assertHandler("remove"),r=this._resolveURL(e);await n._fetch(r,{method:"DELETE"})}log(){if(!this._debug)return;const e=this._getChangeLog();console.group(`[DSM][${this._label}] changeLog`),e.length?console.table(e):console.debug("(변경 이력 없음)"),console.groupEnd()}openDebugger(){this._debug&&be()}_assertHandler(e){if(!this._handler)throw new Error(E.HANDLER_MISSING(e));return this._handler}_resolveURL(e){var r;const n=this._urlConfig??((r=this._handler)==null?void 0:r.getUrlConfig())??{};return oe(n,e??"")}_rollback(e){this._restoreTarget(e.data),this._restoreChangeLog(e.changeLog),this._restoreDirtyFields(e.dirtyFields),this._isNew=e.isNew,this._debug&&this._broadcast()}_scheduleFlush(){this._pendingFlush||(this._pendingFlush=!0,queueMicrotask(()=>{this._pendingFlush=!1,this._debug&&this._broadcast()}))}_broadcast(){he(this._label,{data:this._getTarget(),changeLog:this._getChangeLog(),isNew:this._isNew,errors:this._errors})}};M=new WeakMap,K(_,M,new Set),Y(_,"PipelineConstructor",null);let F=_;class Fe{constructor(e={}){this._urlConfig=V(e),this._debug=e.debug??!1,this._headers={"Content-Type":"application/json"}}async get(e,{urlConfig:n}={}){const r=n?V(n):this._urlConfig,s=oe(r,e),o=await this._fetch(s,{method:"GET"});if(o===null)throw new Error("[DSM] GET 응답 본문이 비어있습니다");return F.fromJSON(o,this,{urlConfig:r,debug:this._debug})}async _fetch(e,n={}){const r=await fetch(e,{...n,headers:{...this._headers,...n.headers??{}}}),s=await r.text();if(!r.ok)throw{status:r.status,statusText:r.statusText,body:s};return s||null}getUrlConfig(){return this._urlConfig}isDebug(){return this._debug}}function we(t,e,n){const{valueField:r,labelField:s,class:o="",css:i={},events:a={},placeholder:c,multiple:l=!1}=n,d=document.createElement("select");if(d.name=r,d.multiple=l,o&&(d.className=o),Le(d,i),c){const u=document.createElement("option");u.value="",u.textContent=c,u.disabled=!0,u.selected=!0,u.hidden=!0,d.appendChild(u)}for(const u of e){const b=document.createElement("option");b.value=String(u[r]??""),b.textContent=String(u[s]??""),d.appendChild(b)}return Ie(d,a),t.appendChild(d),d}function Le(t,e){Object.assign(t.style,e)}function Ie(t,e){for(const[n,r]of Object.entries(e))typeof r=="function"&&t.addEventListener(n,r)}function Pe(t,e,n){const{type:r,valueField:s,labelField:o,name:i=s,class:a="",css:c={},events:l={},containerClass:d="",containerCss:u={},labelClass:b="",labelCss:g={}}=n,f=[],y=t.id||`dsm_${Date.now()}_${Math.random().toString(36).slice(2)}`;return e.forEach((R,O)=>{const w=R[s]??"",S=R[o]??"",$=`${y}_${i}_${O}`,P=document.createElement("div");d&&(P.className=d),k(P,u);const T=document.createElement("input");T.type=r,T.id=$,T.name=i,T.value=w,a&&(T.className=a),k(T,c),ve(T,l);const v=document.createElement("label");v.htmlFor=$,v.textContent=S,b&&(v.className=b),k(v,g),P.appendChild(T),P.appendChild(v),t.appendChild(P),f.push(T)}),f}function k(t,e){Object.assign(t.style,e)}function ve(t,e){for(const[n,r]of Object.entries(e))typeof r=="function"&&t.addEventListener(n,r)}function Ae(t,e,n){const{valueField:r,labelField:s,class:o="",css:i={},events:a={}}=n;return e.map(c=>{const l=document.createElement("button");l.type="button",l.dataset.value=String(c[r]??""),l.textContent=String(c[s]??""),o&&(l.className=o),Object.assign(l.style,i);for(const[d,u]of Object.entries(a))typeof u=="function"&&l.addEventListener(d,u);return t.appendChild(l),l})}const A=Object.freeze({SELECT:"select",RADIO:"radio",CHECKBOX:"checkbox",BUTTON:"button"});Object.freeze(new Set(["text","email","password","number","tel","url","search","date","time","textarea"]));const Ue={install(t){t.prototype.renderTo=function(n,r){const s=n instanceof HTMLElement?n:document.getElementById(n.replace(/^#/,""));if(!s)throw new Error(E.RENDERER_CONTAINER_NOT_FOUND(String(n)));const{type:o,valueField:i,labelField:a}=r;if(!Object.values(A).includes(o))throw new Error(E.RENDERER_TYPE_UNKNOWN(o));if(!i)throw new Error(E.RENDERER_VALUE_FIELD_MISSING);if(!a)throw new Error(E.RENDERER_LABEL_FIELD_MISSING);const c=this._getTarget();if(!Array.isArray(c))throw new Error(E.RENDERER_DATA_NOT_ARRAY(this._label));switch(s.innerHTML="",o){case A.SELECT:return we(s,c,r);case A.RADIO:case A.CHECKBOX:return Pe(s,c,r);case A.BUTTON:return Ae(s,c,r)}}}},ke={install(t){t.fromForm=function(e,n,r={}){const s=te(e);if(!s)throw new Error("[DSM] 유효한 HTMLFormElement가 아닙니다.");let o=null;const i=Ce(s),a=G(i,()=>{o==null||o._scheduleFlush()});return o=new t(a,{handler:n,urlConfig:r.urlConfig,isNew:!0,debug:r.debug,label:r.label??s.id??"form_state"}),ne(s,a.getTarget(),a.proxy),o},t.prototype.bindForm=function(e){const n=te(e);return n?(Me(n,this._getTarget()),ne(n,this._getTarget(),this.data),this):this}}};function te(t){return typeof t=="string"?document.getElementById(t):t instanceof HTMLFormElement?t:null}function Ce(t){const e={},n=Array.from(t.elements);for(const r of n){if(!r.name)continue;const s=r.type==="checkbox"?r.checked:r.value;j(e,r.name.split("."),s)}return e}function Me(t,e){const n=Array.from(t.elements);for(const r of n){if(!r.name)continue;const s=r.name.split(".");let o=e;for(const i of s){if(o==null)break;o=o[i]}o!=null&&(r.type==="checkbox"||r.type==="radio"?r.checked=r.value===String(o):r.value=o)}}function ne(t,e,n){t.addEventListener("input",r=>{const s=r.target;if(!s.name||["text","password","email","textarea"].includes(s.type))return;const o=s.type==="checkbox"?s.checked:s.value;j(n,s.name.split("."),o)}),t.addEventListener("focusout",r=>{const s=r.target;s.name&&["text","password","email","textarea"].includes(s.type)&&j(n,s.name.split("."),s.value)})}F.PipelineConstructor=Ee;export{Fe as ApiHandler,Ee as DomainPipeline,Ue as DomainRenderer,F as DomainState,ee as DomainVO,ke as FormBinder,$e as closeDebugChannel};

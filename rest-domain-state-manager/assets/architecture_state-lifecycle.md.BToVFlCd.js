import{_ as n,C as e,o as p,c as l,a5 as c,E as t}from"./chunks/framework.BDsA2zRs.js";const b=JSON.parse('{"title":"상태 생명주기","description":"","frontmatter":{},"headers":[],"relativePath":"architecture/state-lifecycle.md","filePath":"architecture/state-lifecycle.md"}'),o={name:"architecture/state-lifecycle.md"};function i(r,s,d,h,u,_){const a=e("PlaygroundBatching");return p(),l("div",null,[s[0]||(s[0]=c(`<h1 id="상태-생명주기" tabindex="-1">상태 생명주기 <a class="header-anchor" href="#상태-생명주기" aria-label="Permalink to &quot;상태 생명주기&quot;">​</a></h1><p>이 문서는 <code>DomainState</code> 인스턴스가 생성되어 소멸하기까지의 상태 전이를 기술합니다.</p><h2 id="전체-생명주기" tabindex="-1">전체 생명주기 <a class="header-anchor" href="#전체-생명주기" aria-label="Permalink to &quot;전체 생명주기&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  생성 (Factory Method)                                          │</span></span>
<span class="line"><span>│                                                                 │</span></span>
<span class="line"><span>│  fromJSON(jsonText, handler)   → _isNew: false                  │</span></span>
<span class="line"><span>│  fromVO(vo, handler)           → _isNew: true                   │</span></span>
<span class="line"><span>│  fromForm(formId, handler)     → _isNew: true                   │</span></span>
<span class="line"><span>└────────────────────────────┬────────────────────────────────────┘</span></span>
<span class="line"><span>                             │</span></span>
<span class="line"><span>                             ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  활성 상태 (Active)                                             │</span></span>
<span class="line"><span>│                                                                 │</span></span>
<span class="line"><span>│  domainState.data.* = value                                     │</span></span>
<span class="line"><span>│    → set 트랩 → record() → changeLog.push() → dirtyFields.add() │</span></span>
<span class="line"><span>│    → onMutate() → _scheduleFlush()                              │</span></span>
<span class="line"><span>│    → [Microtask] _broadcast() (debug: true인 경우)              │</span></span>
<span class="line"><span>└────────────────────────────┬────────────────────────────────────┘</span></span>
<span class="line"><span>                             │</span></span>
<span class="line"><span>                             ▼</span></span>
<span class="line"><span>┌─────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  저장 시도 (save())                                             │</span></span>
<span class="line"><span>│                                                                 │</span></span>
<span class="line"><span>│  snapshot = { data: structuredClone(...), changeLog, dirtyFields, isNew }</span></span>
<span class="line"><span>│                                                                 │</span></span>
<span class="line"><span>│  ┌─ 성공 경로 ──────────────────────────────────────────────┐   │</span></span>
<span class="line"><span>│  │  _fetch() → 2xx                                          │   │</span></span>
<span class="line"><span>│  │  _clearChangeLog(), _clearDirtyFields()                  │   │</span></span>
<span class="line"><span>│  │  if POST: _isNew = false                                 │   │</span></span>
<span class="line"><span>│  │  if debug: _broadcast()                                  │   │</span></span>
<span class="line"><span>│  └──────────────────────────────────────────────────────────┘   │</span></span>
<span class="line"><span>│                                                                 │</span></span>
<span class="line"><span>│  ┌─ 실패 경로 ──────────────────────────────────────────────┐   │</span></span>
<span class="line"><span>│  │  _fetch() → 4xx/5xx/NetworkError                         │   │</span></span>
<span class="line"><span>│  │  _rollback(snapshot)                                     │   │</span></span>
<span class="line"><span>│  │    restoreTarget, restoreChangeLog, restoreDirtyFields   │   │</span></span>
<span class="line"><span>│  │    _isNew = snapshot.isNew                               │   │</span></span>
<span class="line"><span>│  │  throw err (re-throw)                                    │   │</span></span>
<span class="line"><span>│  └──────────────────────────────────────────────────────────┘   │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                             │</span></span>
<span class="line"><span>              (성공 후) 다시 활성 상태로 복귀</span></span>
<span class="line"><span>              (실패 후) 스냅샷 상태로 복귀</span></span></code></pre></div><h2 id="isnew-플래그-상태-전이" tabindex="-1">_isNew 플래그 상태 전이 <a class="header-anchor" href="#isnew-플래그-상태-전이" aria-label="Permalink to &quot;_isNew 플래그 상태 전이&quot;">​</a></h2><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>fromVO / fromForm 생성  →  _isNew: true</span></span>
<span class="line"><span>                              │</span></span>
<span class="line"><span>                        save() 호출</span></span>
<span class="line"><span>                              │</span></span>
<span class="line"><span>                    POST 요청 → 2xx 응답</span></span>
<span class="line"><span>                              │</span></span>
<span class="line"><span>                          _isNew: false  (자동 전환)</span></span>
<span class="line"><span>                              │</span></span>
<span class="line"><span>                    이후 save() → PUT / PATCH 분기</span></span></code></pre></div><p><code>_fetch()</code> 가 throw하면 <code>_isNew = false</code> 라인이 실행되지 않으므로 <code>_isNew: true</code> 가 유지됩니다. 롤백 시 스냅샷에서 명시적으로 <code>_isNew</code> 도 복원합니다.</p><h2 id="microtask-batching-—-디버그-채널-최적화" tabindex="-1">Microtask Batching — 디버그 채널 최적화 <a class="header-anchor" href="#microtask-batching-—-디버그-채널-최적화" aria-label="Permalink to &quot;Microtask Batching — 디버그 채널 최적화&quot;">​</a></h2><p>동일한 동기 블록에서 여러 필드를 연속으로 변경할 때, 매 변경마다 <code>BroadcastChannel.postMessage()</code> 를 호출하면 구조화 복제(Structured Clone) 알고리즘이 반복 실행되어 불필요한 직렬화 비용이 발생합니다.</p><p><code>_scheduleFlush()</code> 는 <code>queueMicrotask()</code> 를 사용하여 동기 블록이 완전히 끝난 후 단 한 번만 <code>_broadcast()</code> 를 실행합니다.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[동기 블록]</span></span>
<span class="line"><span>  proxy.name  = &#39;A&#39;  → onMutate() → _scheduleFlush()</span></span>
<span class="line"><span>                          _pendingFlush: false → true</span></span>
<span class="line"><span>                          queueMicrotask(flush) 예약 ──────────┐</span></span>
<span class="line"><span>  proxy.email = &#39;B&#39;  → onMutate() → _scheduleFlush()           │</span></span>
<span class="line"><span>                          _pendingFlush: true → skip           │</span></span>
<span class="line"><span>  proxy.role  = &#39;C&#39;  → onMutate() → _scheduleFlush()           │</span></span>
<span class="line"><span>                          _pendingFlush: true → skip           │</span></span>
<span class="line"><span>[동기 블록 종료, Call Stack 비워짐]                            │</span></span>
<span class="line"><span>                                                               │</span></span>
<span class="line"><span>[Microtask Queue] ←────────────────────────────────────────────┘</span></span>
<span class="line"><span>  _pendingFlush = false</span></span>
<span class="line"><span>  if debug: _broadcast()  → postMessage 1회</span></span></code></pre></div><p><code>await</code> 경계를 넘으면 각 블록이 독립적인 flush를 수행합니다. <code>await</code> 이전에 예약된 Microtask가 처리되기 때문입니다.</p><h2 id="배칭에서-제외되는-두-호출" tabindex="-1">배칭에서 제외되는 두 호출 <a class="header-anchor" href="#배칭에서-제외되는-두-호출" aria-label="Permalink to &quot;배칭에서 제외되는 두 호출&quot;">​</a></h2><p><code>_scheduleFlush()</code> 경로를 거치지 않고 <code>_broadcast()</code> 를 직접 호출하는 두 곳이 있습니다.</p><ol><li><strong>constructor 초기 <code>_broadcast()</code></strong> — 인스턴스 생성 직후 디버그 패널에 초기 스냅샷을 전송합니다. Proxy 변경이 아닌 초기화 이벤트이므로 즉시 실행이 옳습니다.</li><li><strong><code>save()</code> 성공 후 <code>_broadcast()</code></strong> — 서버 동기화 완료를 디버그 패널에 즉시 반영합니다. <code>await user.save()</code> 다음 줄이 실행되기 전에 &quot;저장 완료&quot; 상태가 표시되어야 합니다.</li></ol><h2 id="proxycache와-롤백-후-정합성" tabindex="-1">proxyCache와 롤백 후 정합성 <a class="header-anchor" href="#proxycache와-롤백-후-정합성" aria-label="Permalink to &quot;proxyCache와 롤백 후 정합성&quot;">​</a></h2><p><code>restoreTarget(snapshot.data)</code> 는 <code>structuredClone()</code> 으로 생성된 완전히 새로운 객체 참조를 <code>domainObject</code> 에 복사합니다. 이 시점에 <code>proxyCache</code> WeakMap에는 이전 중첩 객체를 가리키는 오래된 항목이 남습니다.</p><p>그러나 이것은 문제가 되지 않습니다. <code>structuredClone()</code> 은 새로운 객체 참조를 만들므로, 롤백 후 <code>proxy.address</code> 에 처음 접근하면 새 <code>address</code> 객체가 캐시에 없어 새로운 Proxy가 생성됩니다. 오래된 캐시 항목은 WeakMap 특성에 의해 원본 객체가 GC되면 자동으로 수거됩니다.</p>`,18)),t(a)])}const f=n(o,[["render",i]]);export{b as __pageData,f as default};

function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function A(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function P(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){L(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r?w(e):y(e)))}function k(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function H(t){return k(t," ")}function C(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function U(t){const e=C(t,"HTML_TAG_START",0),n=C(t,"HTML_TAG_END",e);if(e===n)return new B;L(t);const r=t.splice(e,n+1);$(r[0]),$(r[r.length-1]);const s=r.slice(1,r.length-1);for(const e of s)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new B(s)}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e){t.value=null==e?"":e}function j(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function D(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=j();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function q(t,e=document.body){return Array.from(e.querySelectorAll(t))}class B extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function W(t){h=t}function z(){if(!h)throw new Error("Function called outside component initialization");return h}function K(t){z().$$.on_mount.push(t)}function J(t){z().$$.after_update.push(t)}function V(t){z().$$.on_destroy.push(t)}const F=[],Y=[],X=[],Q=[],Z=Promise.resolve();let tt=!1;function et(t){X.push(t)}let nt=!1;const rt=new Set;function st(){if(!nt){nt=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];W(e),ot(e.$$)}for(W(null),F.length=0;Y.length;)Y.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];rt.has(e)||(rt.add(e),e())}X.length=0}while(F.length);for(;Q.length;)Q.pop()();tt=!1,nt=!1,rt.clear()}}function ot(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(et)}}const it=new Set;let at;function ct(){at={r:0,c:[],p:at}}function lt(){at.r||s(at.c),at=at.p}function ut(t,e){t&&t.i&&(it.delete(t),t.i(e))}function ft(t,e,n,r){if(t&&t.o){if(it.has(t))return;it.add(t),at.c.push((()=>{it.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function dt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function ht(t){return"object"==typeof t&&null!==t?t:{}}function pt(t){t&&t.c()}function mt(t,e){t&&t.l(e)}function gt(t,e,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),i||et((()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(et)}function bt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){-1===t.$$.dirty[0]&&(F.push(t),tt||(tt=!0,Z.then(st)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(e,n,o,i,a,c,l,u=[-1]){const f=h;W(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:n.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),m&&vt(e,t)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const t=P(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&ut(e.$$.fragment),gt(e,n.target,n.anchor,n.customElement),p=!1,st()}W(f)}class _t{$destroy(){bt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt=[];function wt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!yt.length;for(const t of s)t[1](),yt.push(t,e);if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Et={};var St={owner:"d0kify",repo:"upptime",sites:[{name:"Dokify",url:"https://dokify.net"},{name:"Homologation Web",url:"https://homologation.dokify.net"},{name:"Homologation Api",url:"https://homologation-api.dokify.net/health-check"},{name:"Homologation WebSocket",url:"https://homologation-api-nchan.dokify.net"},{name:"Auth Service",url:"$SECRET_SITE"},{name:"Staging Homologation Front",url:"$STAGING_FRONT"},{name:"Staging Homologation API",url:"$STAGING_HOMOLOGATION_API"},{name:"Staging Homologation WebSocket",url:"$STAGING_HOMOLOGATION_WEBSOCKET"},{name:"WebHook Site",url:"$WEBHOOK_SITE"}],"status-website":{baseUrl:"/upptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Upptime",introTitle:"**Upptime** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://d0kify.github.io/upptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function xt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Tt(e){let n,r,s,o=St["status-website"]&&!St["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=y("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=St["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}(),i=St["status-website"]&&!St["status-website"].hideNavTitle&&function(e){let n,r,s=St["status-website"].name+"";return{c(){n=y("div"),r=E(s)},l(t){n=O(t,"DIV",{});var e=P(n);r=k(e,s),e.forEach($)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=y("div"),r=y("a"),o&&o.c(),s=S(),i&&i.c(),this.h()},l(t){n=O(t,"DIV",{});var e=P(n);r=O(e,"A",{href:!0,class:!0});var a=P(r);o&&o.l(a),s=H(a),i&&i.l(a),a.forEach($),e.forEach($),this.h()},h(){N(r,"href",St["status-website"].logoHref||St.path),N(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){St["status-website"]&&!St["status-website"].hideNavLogo&&o.p(t,e),St["status-website"]&&!St["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&$(n),o&&o.d(),i&&i.d()}}}function At(t){let e,n,r,s,o,i,a=t[1].title+"";return{c(){e=y("li"),n=y("a"),r=E(a),i=S(),this.h()},l(t){e=O(t,"LI",{});var s=P(e);n=O(s,"A",{"aria-current":!0,href:!0,class:!0});var o=P(n);r=k(o,a),o.forEach($),i=H(s),s.forEach($),this.h()},h(){N(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",o=t[1].href.replace("$OWNER",St.owner).replace("$REPO",St.repo)),N(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,i)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(t){t&&$(e)}}}function Nt(e){let n,r,s,o,i,a=St["status-website"]&&St["status-website"].logoUrl&&Tt(),c=St["status-website"]&&St["status-website"].navbar&&function(t){let e,n=St["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=At(xt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let o;for(n=St["status-website"].navbar,o=0;o<n.length;o+=1){const i=xt(t,n,o);r[o]?r[o].p(i,s):(r[o]=At(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),l=St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&function(e){let n,r,s,o=St.i18n.navGitHub+"";return{c(){n=y("li"),r=y("a"),s=E(o),this.h()},l(t){n=O(t,"LI",{});var e=P(n);r=O(e,"A",{href:!0,class:!0});var i=P(r);s=k(i,o),i.forEach($),e.forEach($),this.h()},h(){N(r,"href",`https://github.com/${St.owner}/${St.repo}`),N(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=y("nav"),r=y("div"),a&&a.c(),s=S(),o=y("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=P(n);r=O(e,"DIV",{class:!0});var u=P(r);a&&a.l(u),s=H(u),o=O(u,"UL",{class:!0});var f=P(o);c&&c.l(f),i=H(f),l&&l.l(f),f.forEach($),u.forEach($),e.forEach($),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){St["status-website"]&&St["status-website"].logoUrl&&a.p(t,e),St["status-website"]&&St["status-website"].navbar&&c.p(t,e),St["status-website"]&&St["status-website"].navbarGitHub&&!St["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function It(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Pt extends _t{constructor(t){super(),$t(this,t,It,Nt,i,{segment:0})}}var Lt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Rt(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ot(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=Lt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Rt(Ot(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=kt(Rt(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ot(s[8])+'" alt="'+Ot(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ot(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+kt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ot(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Ht(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ct(t,e,n){const r=t.slice();return r[3]=e[n],r}function Ut(t,e,n){const r=t.slice();return r[8]=e[n],r}function Gt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${St.path}/themes/${(St["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Mt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(St["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function jt(e){let n,r;return{c(){n=y("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),P(n).forEach($),this.h()},h(){c(n.src,r=e[8].src)||N(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Dt(e){let n;return{c(){n=y("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function qt(e){let n;return{c(){n=y("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&$(n)}}}function Bt(e){let n,r,s,o,i,a,c,u,f,d,h,p,m,b,w,E,T,A,I=kt(St.i18n.footer.replace(/\$REPO/,`https://github.com/${St.owner}/${St.repo}`))+"",L=(St["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(St["status-website"]||{}).customHeadHtml+"";return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();let R=((St["status-website"]||{}).themeUrl?Mt:Gt)(e),k=(St["status-website"]||{}).scripts&&function(t){let e,n=(St["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=jt(Ut(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ut(t,n,o);r[o]?r[o].p(i,s):(r[o]=jt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),C=(St["status-website"]||{}).links&&function(t){let e,n=(St["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Dt(Ct(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ct(t,n,o);r[o]?r[o].p(i,s):(r[o]=Dt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),G=(St["status-website"]||{}).metaTags&&function(t){let e,n=(St["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Ht(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let o;for(n=(St["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Ht(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){_(r,t),t&&$(e)}}}(e),M=St["status-website"].css&&function(e){let n,r,s=`<style>${St["status-website"].css}</style>`;return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),j=St["status-website"].js&&function(e){let n,r,s=`<script>${St["status-website"].js}<\/script>`;return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),D=(St["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(St["status-website"]||{}).customBodyHtml+"";return{c(){n=new B,r=x(),this.h()},l(t){n=U(t),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();p=new Pt({props:{segment:e[0]}});const W=e[2].default,z=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(W,e,e[1],null);return{c(){L&&L.c(),n=x(),R.c(),r=y("link"),s=y("link"),o=y("link"),k&&k.c(),i=x(),C&&C.c(),a=x(),G&&G.c(),c=x(),M&&M.c(),u=x(),j&&j.c(),f=x(),d=S(),D&&D.c(),h=S(),pt(p.$$.fragment),m=S(),b=y("main"),z&&z.c(),w=S(),E=y("footer"),T=y("p"),this.h()},l(t){const e=q('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(e),n=x(),R.l(e),r=O(e,"LINK",{rel:!0,href:!0}),s=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(e),i=x(),C&&C.l(e),a=x(),G&&G.l(e),c=x(),M&&M.l(e),u=x(),j&&j.l(e),f=x(),e.forEach($),d=H(t),D&&D.l(t),h=H(t),mt(p.$$.fragment,t),m=H(t),b=O(t,"MAIN",{class:!0});var l=P(b);z&&z.l(l),l.forEach($),w=H(t),E=O(t,"FOOTER",{class:!0});var g=P(E);T=O(g,"P",{}),P(T).forEach($),g.forEach($),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${St.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(St["status-website"]||{}).faviconSvg||(St["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(St["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),G&&G.m(document.head,null),g(document.head,c),M&&M.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,f),v(t,d,e),D&&D.m(t,e),v(t,h,e),gt(p,t,e),v(t,m,e),v(t,b,e),z&&z.m(b,null),v(t,w,e),v(t,E,e),g(E,T),T.innerHTML=I,A=!0},p(t,[e]){(St["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(St["status-website"]||{}).scripts&&k.p(t,e),(St["status-website"]||{}).links&&C.p(t,e),(St["status-website"]||{}).metaTags&&G.p(t,e),St["status-website"].css&&M.p(t,e),St["status-website"].js&&j.p(t,e),(St["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),z&&z.p&&(!A||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(z,W,t,t[1],A?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(W,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){A||(ut(p.$$.fragment,t),ut(z,t),A=!0)},o(t){ft(p.$$.fragment,t),ft(z,t),A=!1},d(t){L&&L.d(t),$(n),R.d(t),$(r),$(s),$(o),k&&k.d(t),$(i),C&&C.d(t),$(a),G&&G.d(t),$(c),M&&M.d(t),$(u),j&&j.d(t),$(f),t&&$(d),D&&D.d(t),t&&$(h),bt(p,t),t&&$(m),t&&$(b),z&&z.d(t),t&&$(w),t&&$(E)}}}function Wt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class zt extends _t{constructor(t){super(),$t(this,t,Wt,Bt,i,{segment:0})}}function Kt(t){let e,n,r=t[1].stack+"";return{c(){e=y("pre"),n=E(r)},l(t){e=O(t,"PRE",{});var s=P(e);n=k(s,r),s.forEach($)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&G(n,r)},d(t){t&&$(e)}}}function Jt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Kt(e);return{c(){r=S(),s=y("h1"),o=E(e[0]),i=S(),a=y("p"),c=E(f),l=S(),d&&d.c(),u=x(),this.h()},l(t){q('[data-svelte="svelte-1moakz"]',document.head).forEach($),r=H(t),s=O(t,"H1",{class:!0});var n=P(s);o=k(n,e[0]),n.forEach($),i=H(t),a=O(t,"P",{class:!0});var h=P(a);c=k(h,f),h.forEach($),l=H(t),d&&d.l(t),u=x(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,o),v(t,i,e),v(t,a,e),g(a,c),v(t,l,e),d&&d.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&G(o,t[0]),2&e&&f!==(f=t[1].message+"")&&G(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Kt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&$(r),t&&$(s),t&&$(i),t&&$(a),t&&$(l),d&&d.d(t),t&&$(u)}}}function Vt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Ft extends _t{constructor(t){super(),$t(this,t,Vt,Jt,i,{status:0,error:1})}}function Yt(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=new i(a())),{c(){n&&pt(n.$$.fragment),r=x()},l(t){n&&mt(n.$$.fragment,t),r=x()},m(t,e){n&&gt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?dt(o,[ht(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){ct();const t=n;ft(t.$$.fragment,1,0,(()=>{bt(t,1)})),lt()}i?(n=new i(a()),pt(n.$$.fragment),ut(n.$$.fragment,1),gt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&ut(n.$$.fragment,t),s=!0)},o(t){n&&ft(n.$$.fragment,t),s=!1},d(t){t&&$(r),n&&bt(n,t)}}}function Xt(t){let e,n;return e=new Ft({props:{error:t[0],status:t[1]}}),{c(){pt(e.$$.fragment)},l(t){mt(e.$$.fragment,t)},m(t,r){gt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ut(e.$$.fragment,t),n=!0)},o(t){ft(e.$$.fragment,t),n=!1},d(t){bt(e,t)}}}function Qt(t){let e,n,r,s;const o=[Xt,Yt],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){i[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(ct(),ft(i[c],1,1,(()=>{i[c]=null})),lt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),ut(n,1),n.m(r.parentNode,r))},i(t){s||(ut(n),s=!0)},o(t){ft(n),s=!1},d(t){i[e].d(t),t&&$(r)}}}function Zt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Qt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new zt({props:o}),{c(){pt(n.$$.fragment)},l(t){mt(n.$$.fragment,t)},m(t,e){gt(n,t,e),r=!0},p(t,[e]){const r=12&e?dt(s,[4&e&&{segment:t[2][0]},8&e&&ht(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ut(n.$$.fragment,t),r=!0)},o(t){ft(n.$$.fragment,t),r=!1},d(t){bt(n,t)}}}function te(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return J(l),u=Et,f=r,z().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class ee extends _t{constructor(t){super(),$t(this,t,te,Zt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ne=[],re=[{js:()=>Promise.all([import("./index.b0392da6.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.26f13dac.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].e5134470.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].de19550c.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.f87052f1.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],se=(oe=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:oe(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:oe(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var oe;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ie(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ce,le=1;const ue="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},fe={};let de,he;function pe(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function me(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(de))return null;let e=t.pathname.slice(de.length);if(""===e&&(e="/"),!ne.some((t=>t.test(e))))for(let n=0;n<se.length;n+=1){const r=se[n],s=r.pattern.exec(e);if(s){const n=pe(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function ge(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=me(s);if(o){$e(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),ue.pushState({id:ce},"",s.href)}}function be(){return{x:pageXOffset,y:pageYOffset}}function ve(t){if(fe[ce]=be(),t.state){const e=me(new URL(location.href));e?$e(e,t.state.id):location.href=location.href}else!function(t){le=t}(le+1),function(t){ce=t}(le),ue.replaceState({id:ce},"",location.href)}function $e(t,e,n,r){return ie(this,void 0,void 0,(function*(){const s=!!e;if(s)ce=e;else{const t=be();fe[ce]=t,ce=e=++le,fe[ce]=n?t:{x:0,y:0}}if(yield he(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=fe[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),fe[ce]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function _e(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let ye,we=null;function Ee(t){const e=ae(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=me(new URL(t,_e(document)));if(e)we&&t===we.href||(we={href:t,promise:je(e)}),we.promise}(e.href)}function Se(t){clearTimeout(ye),ye=setTimeout((()=>{Ee(t)}),20)}function xe(t,e={noscroll:!1,replaceState:!1}){const n=me(new URL(t,_e(document)));if(n){const r=$e(n,null,e.noscroll);return ue[e.replaceState?"replaceState":"pushState"]({id:ce},"",t),r}return location.href=t,new Promise((()=>{}))}const Te="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ae,Ne,Ie,Pe=!1,Le=[],Re="{}";const Oe={page:function(t){const e=wt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:wt(null),session:wt(Te&&Te.session)};let ke,He,Ce;function Ue(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ge(t){return ie(this,void 0,void 0,(function*(){Ae&&Oe.preloading.set(!0);const e=function(t){return we&&we.href===t.href?we.promise:je(t)}(t),n=Ne={},r=yield e,{redirect:s}=r;if(n===Ne)if(s)yield xe(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Me(n,e,Ue(e,t.page))}}))}function Me(t,e,n){return ie(this,void 0,void 0,(function*(){Oe.page.set(n),Oe.preloading.set(!1),Ae?Ae.$set(e):(e.stores={page:{subscribe:Oe.page.subscribe},preloading:{subscribe:Oe.preloading.subscribe},session:Oe.session},e.level0={props:yield Ie},e.notify=Oe.page.notify,Ae=new ee({target:Ce,props:e,hydrate:!0})),Le=t,Re=JSON.stringify(n.query),Pe=!0,He=!1}))}function je(t){return ie(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Ie){const t=()=>({});Ie=Te.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},ke)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>ie(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Re)return!0;const s=Le[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const d=c++;let h;if(He||u||!Le[a]||Le[a].part!==e.i){u=!1;const{default:r,preload:s}=yield re[e.i].js();let o;o=Pe||!Te.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},ke):{}:Te.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:e.i}}else h=Le[a];return o[`level${d}`]=h})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var De,qe,Be;Oe.session.subscribe((t=>ie(void 0,void 0,void 0,(function*(){if(ke=t,!Pe)return;He=!0;const e=me(new URL(location.href)),n=Ne={},{redirect:r,props:s,branch:o}=yield je(e);n===Ne&&(r?yield xe(r.location,{replaceState:!0}):yield Me(o,s,Ue(s,e.page)))})))),De={target:document.querySelector("#sapper")},qe=De.target,Ce=qe,Be=Te.baseUrl,de=Be,he=Ge,"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ue.scrollRestoration="auto"})),addEventListener("load",(()=>{ue.scrollRestoration="manual"})),addEventListener("click",ge),addEventListener("popstate",ve),addEventListener("touchstart",Ee),addEventListener("mousemove",Se),Te.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Te;Ie||(Ie=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ie},level1:{props:{status:o,error:i},component:Ft},segments:s},c=pe(n);Me([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ue.replaceState({id:le},"",e);const n=me(new URL(location.href));if(n)return $e(n,le,!0,t)}));export{bt as A,T as B,s as C,Y as D,U as E,c as F,f as G,B as H,q as I,kt as J,w as K,xe as L,M,A as N,e as O,I as P,dt as Q,J as R,_t as S,V as T,u as U,ht as V,et as W,D as X,P as a,k as b,O as c,$ as d,y as e,N as f,v as g,g as h,$t as i,S as j,H as k,ct as l,ft as m,t as n,lt as o,ut as p,K as q,St as r,i as s,E as t,G as u,x as v,_ as w,pt as x,mt as y,gt as z};

import __inject_styles from './inject_styles.803b7e80.js';
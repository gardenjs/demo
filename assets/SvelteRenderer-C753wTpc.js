import{a3 as q,a4 as v,a5 as C,as as b,a8 as E,ao as _,au as R,an as m,aa as $,aB as S,at as H,aE as w,ap as p,aq as h,ar as g,aF as N}from"./garden.config-CVGlobYD.js";function j(s,e){const t={},a={},r={$$scope:1};let i=s.length;for(;i--;){const o=s[i],c=e[i];if(c){for(const n in o)n in c||(a[n]=1);for(const n in c)r[n]||(t[n]=c[n],r[n]=1);s[i]=c}else for(const n in o)r[n]=1}for(const o in a)o in t||(t[o]=void 0);return t}function k(s){return typeof s=="object"&&s!==null?s:{}}function B(s){var c;let e,t,a;const r=[(c=s[1])==null?void 0:c.input,s[5]];var i=s[0];function o(n,l){var u;let f={};for(let d=0;d<r.length;d+=1)f=N(f,r[d]);return l!==void 0&&l&34&&(f=N(f,j(r,[l&2&&k((u=n[1])==null?void 0:u.input),l&32&&k(n[5])]))),{props:f}}return i&&(e=w(i,o(s)),e.$on("out",s[6])),{c(){e&&p(e.$$.fragment),t=b()},m(n,l){e&&h(e,n,l),E(n,t,l),a=!0},p(n,l){var f;if(l&1&&i!==(i=n[0])){if(e){H();const u=e;_(u.$$.fragment,1,0,()=>{g(u,1)}),R()}i?(e=w(i,o(n,l)),e.$on("out",n[6]),p(e.$$.fragment),m(e.$$.fragment,1),h(e,t.parentNode,t)):e=null}else if(i){const u=l&34?j(r,[l&2&&k((f=n[1])==null?void 0:f.input),l&32&&k(n[5])]):{};e.$set(u)}},i(n){a||(e&&m(e.$$.fragment,n),a=!0)},o(n){e&&_(e.$$.fragment,n),a=!1},d(n){n&&$(t),e&&g(e,n)}}}function D(s){let e,t,a;var r=s[4][0];function i(o,c){return{props:{$$slots:{default:[F]},$$scope:{ctx:o}}}}return r&&(e=w(r,i(s))),{c(){e&&p(e.$$.fragment),t=b()},m(o,c){e&&h(e,o,c),E(o,t,c),a=!0},p(o,c){if(c&16&&r!==(r=o[4][0])){if(e){H();const n=e;_(n.$$.fragment,1,0,()=>{g(n,1)}),R()}r?(e=w(r,i(o)),p(e.$$.fragment),m(e.$$.fragment,1),h(e,t.parentNode,t)):e=null}else if(r){const n={};c&159&&(n.$$scope={dirty:c,ctx:o}),e.$set(n)}},i(o){a||(e&&m(e.$$.fragment,o),a=!0)},o(o){e&&_(e.$$.fragment,o),a=!1},d(o){o&&$(t),e&&g(e,o)}}}function F(s){let e,t;return e=new y({props:{component:s[0],selectedExample:s[1],das:s[2],afterRenderHook:s[3],decorators:s[4].slice(1)}}),{c(){p(e.$$.fragment)},m(a,r){h(e,a,r),t=!0},p(a,r){const i={};r&1&&(i.component=a[0]),r&2&&(i.selectedExample=a[1]),r&4&&(i.das=a[2]),r&8&&(i.afterRenderHook=a[3]),r&16&&(i.decorators=a[4].slice(1)),e.$set(i)},i(a){t||(m(e.$$.fragment,a),t=!0)},o(a){_(e.$$.fragment,a),t=!1},d(a){g(e,a)}}}function M(s){let e,t,a,r;const i=[D,B],o=[];function c(n,l){return n[4].length>0?0:1}return e=c(s),t=o[e]=i[e](s),{c(){t.c(),a=b()},m(n,l){o[e].m(n,l),E(n,a,l),r=!0},p(n,[l]){let f=e;e=c(n),e===f?o[e].p(n,l):(H(),_(o[f],1,1,()=>{o[f]=null}),R(),t=o[e],t?t.p(n,l):(t=o[e]=i[e](n),t.c()),m(t,1),t.m(a.parentNode,a))},i(n){r||(m(t),r=!0)},o(n){_(t),r=!1},d(n){n&&$(a),o[e].d(n)}}}function O(s,e,t){let{component:a}=e,{selectedExample:r}=e,{das:i}=e,{afterRenderHook:o=async()=>{}}=e,{decorators:c=[]}=e,n={};S(async()=>{c.length===0&&await o()});function l(f){i.out&&i.out.forEach(u=>{if(f.detail[u.name]&&r.redirect&&r.redirect[u.name]){const d=r.redirect[u.name];t(5,n[d]=f.detail[u.name],n)}})}return s.$$set=f=>{"component"in f&&t(0,a=f.component),"selectedExample"in f&&t(1,r=f.selectedExample),"das"in f&&t(2,i=f.das),"afterRenderHook"in f&&t(3,o=f.afterRenderHook),"decorators"in f&&t(4,c=f.decorators)},s.$$.update=()=>{s.$$.dirty&2&&r&&t(5,n={})},[a,r,i,o,c,n,l]}class y extends q{constructor(e){super(),v(this,e,O,M,C,{component:0,selectedExample:1,das:2,afterRenderHook:3,decorators:4})}}export{y as default};

import{a2 as j,a3 as q,a4 as v,ar as b,a7 as E,an as _,at as R,am as m,a9 as $,aB as D,as as H,aC as w,ao as p,ap as h,aq as g,aD as C}from"./garden.config-BNCG_7iz.js";function N(a,e){const t={},s={},r={$$scope:1};let i=a.length;for(;i--;){const o=a[i],c=e[i];if(c){for(const n in o)n in c||(s[n]=1);for(const n in c)r[n]||(t[n]=c[n],r[n]=1);a[i]=c}else for(const n in o)r[n]=1}for(const o in s)o in t||(t[o]=void 0);return t}function k(a){return typeof a=="object"&&a!==null?a:{}}function S(a){var c;let e,t,s;const r=[(c=a[1])==null?void 0:c.input,a[5]];var i=a[0];function o(n,l){var u;let f={};for(let d=0;d<r.length;d+=1)f=C(f,r[d]);return l!==void 0&&l&34&&(f=C(f,N(r,[l&2&&k((u=n[1])==null?void 0:u.input),l&32&&k(n[5])]))),{props:f}}return i&&(e=w(i,o(a)),e.$on("out",a[6])),{c(){e&&p(e.$$.fragment),t=b()},m(n,l){e&&h(e,n,l),E(n,t,l),s=!0},p(n,l){var f;if(l&1&&i!==(i=n[0])){if(e){H();const u=e;_(u.$$.fragment,1,0,()=>{g(u,1)}),R()}i?(e=w(i,o(n,l)),e.$on("out",n[6]),p(e.$$.fragment),m(e.$$.fragment,1),h(e,t.parentNode,t)):e=null}else if(i){const u=l&34?N(r,[l&2&&k((f=n[1])==null?void 0:f.input),l&32&&k(n[5])]):{};e.$set(u)}},i(n){s||(e&&m(e.$$.fragment,n),s=!0)},o(n){e&&_(e.$$.fragment,n),s=!1},d(n){n&&$(t),e&&g(e,n)}}}function B(a){let e,t,s;var r=a[4][0];function i(o,c){return{props:{$$slots:{default:[M]},$$scope:{ctx:o}}}}return r&&(e=w(r,i(a))),{c(){e&&p(e.$$.fragment),t=b()},m(o,c){e&&h(e,o,c),E(o,t,c),s=!0},p(o,c){if(c&16&&r!==(r=o[4][0])){if(e){H();const n=e;_(n.$$.fragment,1,0,()=>{g(n,1)}),R()}r?(e=w(r,i(o)),p(e.$$.fragment),m(e.$$.fragment,1),h(e,t.parentNode,t)):e=null}else if(r){const n={};c&159&&(n.$$scope={dirty:c,ctx:o}),e.$set(n)}},i(o){s||(e&&m(e.$$.fragment,o),s=!0)},o(o){e&&_(e.$$.fragment,o),s=!1},d(o){o&&$(t),e&&g(e,o)}}}function M(a){let e,t;return e=new z({props:{component:a[0],selectedExample:a[1],das:a[2],afterRenderHook:a[3],decorators:a[4].slice(1)}}),{c(){p(e.$$.fragment)},m(s,r){h(e,s,r),t=!0},p(s,r){const i={};r&1&&(i.component=s[0]),r&2&&(i.selectedExample=s[1]),r&4&&(i.das=s[2]),r&8&&(i.afterRenderHook=s[3]),r&16&&(i.decorators=s[4].slice(1)),e.$set(i)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){_(e.$$.fragment,s),t=!1},d(s){g(e,s)}}}function O(a){let e,t,s,r;const i=[B,S],o=[];function c(n,l){return n[4].length>0?0:1}return e=c(a),t=o[e]=i[e](a),{c(){t.c(),s=b()},m(n,l){o[e].m(n,l),E(n,s,l),r=!0},p(n,[l]){let f=e;e=c(n),e===f?o[e].p(n,l):(H(),_(o[f],1,1,()=>{o[f]=null}),R(),t=o[e],t?t.p(n,l):(t=o[e]=i[e](n),t.c()),m(t,1),t.m(s.parentNode,s))},i(n){r||(m(t),r=!0)},o(n){_(t),r=!1},d(n){n&&$(s),o[e].d(n)}}}function y(a,e,t){let{component:s}=e,{selectedExample:r}=e,{das:i}=e,{afterRenderHook:o=async()=>{}}=e,{decorators:c=[]}=e,n={};D(async()=>{c.length===0&&await o()});function l(f){i.out&&i.out.forEach(u=>{if(f.detail[u.name]&&r.redirect&&r.redirect[u.name]){const d=r.redirect[u.name];t(5,n[d]=f.detail[u.name],n)}})}return a.$$set=f=>{"component"in f&&t(0,s=f.component),"selectedExample"in f&&t(1,r=f.selectedExample),"das"in f&&t(2,i=f.das),"afterRenderHook"in f&&t(3,o=f.afterRenderHook),"decorators"in f&&t(4,c=f.decorators)},a.$$.update=()=>{a.$$.dirty&2&&r&&t(5,n={})},[s,r,i,o,c,n,l]}class z extends j{constructor(e){super(),q(this,e,y,O,v,{component:0,selectedExample:1,das:2,afterRenderHook:3,decorators:4})}}export{z as default};

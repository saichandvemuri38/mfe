var __webpack_modules__={7430:(o,v,u)=>{u.e(883).then(u.bind(u,1883)).catch(f=>console.error(f))}},__webpack_module_cache__={};function __webpack_require__(o){var v=__webpack_module_cache__[o];if(void 0!==v)return v.exports;var u=__webpack_module_cache__[o]={exports:{}};return __webpack_modules__[o](u,u.exports,__webpack_require__),u.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(o,v)=>{for(var u in v)__webpack_require__.o(v,u)&&!__webpack_require__.o(o,u)&&Object.defineProperty(o,u,{enumerable:!0,get:v[u]})},__webpack_require__.f={},__webpack_require__.e=o=>Promise.all(Object.keys(__webpack_require__.f).reduce((v,u)=>(__webpack_require__.f[u](o,v),v),[])),__webpack_require__.u=o=>o+"."+{181:"f83b69d92b55dc65",255:"b0a478b38d814a6e",284:"f2a6c119f78ce65e",481:"794fc20c1ad16a89",511:"901c2128c623969a",559:"a1cf8e2542721c42",650:"0f9c6023c58a0fd3",793:"cc4c4c2ba498ec80",883:"ce2323f1d27c2e54",895:"9b3f245eaa770e27"}[o]+".js",__webpack_require__.miniCssF=o=>{},__webpack_require__.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),(()=>{var o={},v="host-app:";__webpack_require__.l=(u,f,b,h)=>{if(o[u])o[u].push(f);else{var l,y;if(void 0!==b)for(var p=document.getElementsByTagName("script"),E=0;E<p.length;E++){var g=p[E];if(g.getAttribute("src")==u||g.getAttribute("data-webpack")==v+b){l=g;break}}l||(y=!0,(l=document.createElement("script")).type="module",l.charset="utf-8",l.timeout=120,__webpack_require__.nc&&l.setAttribute("nonce",__webpack_require__.nc),l.setAttribute("data-webpack",v+b),l.src=__webpack_require__.tu(u)),o[u]=[f];var m=(S,_)=>{l.onerror=l.onload=null,clearTimeout(s);var w=o[u];if(delete o[u],l.parentNode&&l.parentNode.removeChild(l),w&&w.forEach(d=>d(_)),S)return S(_)},s=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),y&&document.head.appendChild(l)}}})(),__webpack_require__.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={},v={};__webpack_require__.f.remotes=(u,f)=>{__webpack_require__.o(o,u)&&o[u].forEach(b=>{var h=__webpack_require__.R;h||(h=[]);var l=v[b];if(!(h.indexOf(l)>=0)){if(h.push(l),l.p)return f.push(l.p);var y=s=>{s||(s=new Error("Container missing")),"string"==typeof s.message&&(s.message+='\nwhile loading "'+l[1]+'" from '+l[2]),__webpack_require__.m[b]=()=>{throw s},l.p=0},p=(s,S,_,w,d,F)=>{try{var P=s(S,_);if(!P||!P.then)return d(P,w,F);var A=P.then(T=>d(T,w),y);if(!F)return A;f.push(l.p=A)}catch(T){y(T)}},g=(s,S,_)=>p(S.get,l[1],h,0,m,_),m=s=>{l.p=1,__webpack_require__.m[b]=S=>{S.exports=s()}};p(__webpack_require__,l[2],0,0,(s,S,_)=>s?p(__webpack_require__.I,l[0],0,s,g,_):y(),1)}})}})(),(()=>{__webpack_require__.S={};var o={},v={};__webpack_require__.I=(u,f)=>{f||(f=[]);var b=v[u];if(b||(b=v[u]={}),!(f.indexOf(b)>=0)){if(f.push(b),o[u])return o[u];__webpack_require__.o(__webpack_require__.S,u)||(__webpack_require__.S[u]={});var h=__webpack_require__.S[u],y="host-app",p=(m,s,S,_)=>{var w=h[m]=h[m]||{},d=w[s];(!d||!d.loaded&&(!_!=!d.eager?_:y>d.from))&&(w[s]={get:S,from:y,eager:!!_})},g=[];return"default"===u&&(p("@angular/common","15.1.0",()=>__webpack_require__.e(895).then(()=>()=>__webpack_require__(6895))),p("@angular/core","15.1.0",()=>__webpack_require__.e(650).then(()=>()=>__webpack_require__(4650))),p("@angular/platform-browser","15.1.0",()=>__webpack_require__.e(481).then(()=>()=>__webpack_require__(1481))),p("@angular/router","15.1.0",()=>__webpack_require__.e(511).then(()=>()=>__webpack_require__(4793))),p("rxjs/operators","7.8.0",()=>__webpack_require__.e(559).then(()=>()=>__webpack_require__(7559))),p("rxjs","7.8.0",()=>__webpack_require__.e(284).then(()=>()=>__webpack_require__(7284)))),o[u]=g.length?Promise.all(g).then(()=>o[u]=1):1}}})(),(()=>{var o;__webpack_require__.tt=()=>(void 0===o&&(o={createScriptURL:v=>v},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),__webpack_require__.tu=o=>__webpack_require__.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=o})(),(()=>{var o=e=>{var t=a=>a.split(".").map(i=>+i==i?+i:i),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=r[1]?t(r[1]):[];return r[2]&&(n.length++,n.push.apply(n,t(r[2]))),r[3]&&(n.push([]),n.push.apply(n,t(r[3]))),n},u=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var n=1,a=1;a<e.length;a++)n--,r+="u"==(typeof(c=e[a]))[0]?"-":(n>0?".":"")+(n=2,c);return r}var i=[];for(a=1;a<e.length;a++){var c=e[a];i.push(0===c?"not("+C()+")":1===c?"("+C()+" || "+C()+")":2===c?i.pop()+" "+i.pop():u(c))}return C();function C(){return i.pop().replace(/^\((.+)\)$/,"$1")}},f=(e,t)=>{if(0 in e){t=o(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var a=0,i=1,c=!0;;i++,a++){var C,M,V=i<e.length?(typeof e[i])[0]:"";if(a>=t.length||"o"==(M=(typeof(C=t[a]))[0]))return!c||("u"==V?i>r&&!n:""==V!=n);if("u"==M){if(!c||"u"!=V)return!1}else if(c)if(V==M)if(i<=r){if(C!=e[i])return!1}else{if(n?C>e[i]:C<e[i])return!1;C!=e[i]&&(c=!1)}else if("s"!=V&&"n"!=V){if(n||i<=r)return!1;c=!1,i--}else{if(i<=r||M<V!=n)return!1;c=!1}else"s"!=V&&"n"!=V&&(c=!1,i--)}}var $=[],j=$.pop.bind($);for(a=1;a<e.length;a++){var k=e[a];$.push(1==k?j()|j():2==k?j()&j():k?f(k,t):!j())}return!!j()},l=(e,t)=>{var r=e[t];return Object.keys(r).reduce((n,a)=>!n||!r[n].loaded&&((e,t)=>{e=o(e),t=o(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],a=(typeof n)[0];if(r>=t.length)return"u"==a;var i=t[r],c=(typeof i)[0];if(a!=c)return"o"==a&&"n"==c||"s"==c||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;r++}})(n,a)?a:n,0)},g=(e,t,r,n)=>{var a=l(e,r);if(!f(n,a))throw new Error(((e,t,r,n)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+u(n)+")")(e,r,a,n));return w(e[r][a])},w=e=>(e.loaded=1,e.get()),x=(e=>function(t,r,n,a){var i=__webpack_require__.I(t);return i&&i.then?i.then(e.bind(e,t,__webpack_require__.S[t],r,n,a)):e(t,__webpack_require__.S[t],r,n,a)})((e,t,r,n,a)=>t&&__webpack_require__.o(t,r)?g(t,0,r,n):a()),O={},U={3180:()=>x("default","@angular/platform-browser",[1,15,1,0],()=>__webpack_require__.e(255).then(()=>()=>__webpack_require__(1481))),5342:()=>x("default","@angular/core",[1,15,1,0],()=>__webpack_require__.e(650).then(()=>()=>__webpack_require__(4650))),7768:()=>x("default","@angular/router",[1,15,1,0],()=>__webpack_require__.e(793).then(()=>()=>__webpack_require__(4793))),3635:()=>x("default","rxjs",[2,7,8,0],()=>__webpack_require__.e(284).then(()=>()=>__webpack_require__(7284))),5893:()=>x("default","rxjs/operators",[2,7,8,0],()=>__webpack_require__.e(559).then(()=>()=>__webpack_require__(7559))),7391:()=>x("default","@angular/common",[1,15,1,0],()=>__webpack_require__.e(181).then(()=>()=>__webpack_require__(6895)))},L={255:[7391],481:[5342,7391],511:[3180,3635,5342,5893,7391],650:[3635,5893],793:[3635,5893,7391],883:[3180,5342,7768],895:[5342]};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(L,e)&&L[e].forEach(r=>{if(__webpack_require__.o(O,r))return t.push(O[r]);var n=c=>{O[r]=0,__webpack_require__.m[r]=C=>{delete __webpack_require__.c[r],C.exports=c()}},a=c=>{delete O[r],__webpack_require__.m[r]=C=>{throw delete __webpack_require__.c[r],c}};try{var i=U[r]();i.then?t.push(O[r]=i.then(n).catch(a)):n(i)}catch(c){a(c)}})}})(),(()=>{var o={179:0};__webpack_require__.f.j=(f,b)=>{var h=__webpack_require__.o(o,f)?o[f]:void 0;if(0!==h)if(h)b.push(h[2]);else{var l=new Promise((g,m)=>h=o[f]=[g,m]);b.push(h[2]=l);var y=__webpack_require__.p+__webpack_require__.u(f),p=new Error;__webpack_require__.l(y,g=>{if(__webpack_require__.o(o,f)&&(0!==(h=o[f])&&(o[f]=void 0),h)){var m=g&&("load"===g.type?"missing":g.type),s=g&&g.target&&g.target.src;p.message="Loading chunk "+f+" failed.\n("+m+": "+s+")",p.name="ChunkLoadError",p.type=m,p.request=s,h[1](p)}},"chunk-"+f,f)}};var v=(f,b)=>{var p,E,[h,l,y]=b,g=0;if(h.some(s=>0!==o[s])){for(p in l)__webpack_require__.o(l,p)&&(__webpack_require__.m[p]=l[p]);y&&y(__webpack_require__)}for(f&&f(b);g<h.length;g++)__webpack_require__.o(o,E=h[g])&&o[E]&&o[E][0](),o[E]=0},u=self.webpackChunkhost_app=self.webpackChunkhost_app||[];u.forEach(v.bind(null,0)),u.push=v.bind(null,u.push.bind(u))})();var __webpack_exports__=__webpack_require__(7430);
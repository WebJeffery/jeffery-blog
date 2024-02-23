import{w as ie,i as Ae,d as T,b as h,o as g,c as _,A as E,S as se,_ as R,s as Te,e as I,a as de,B as Oe,x as M,F as K,p as Ne,n as ne,t as X,y as ce,M as Ie,C as Me,u as le,a3 as N,K as G,a4 as Pe,h as $e,l as je,a5 as Be,a6 as De,a7 as Ve,a8 as Fe,a9 as Re,aa as Ze,ab as We,ac as qe,ad as Ue,ae as Ye,af as Ke,ag as Xe,H as Ge}from"./chunks/framework.69210375.js";import{t as oe}from"./chunks/theme.f05cc161.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t},V=function(e){return e.tagName==="IMG"},Je=function(e){return NodeList.prototype.isPrototypeOf(e)},F=function(e){return e&&e.nodeType===1},ae=function(e){var o=e.currentSrc||e.src;return o.substr(-4).toLowerCase()===".svg"},re=function(e){try{return Array.isArray(e)?e.filter(V):Je(e)?[].slice.call(e).filter(V):F(e)?[e].filter(V):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(V):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Qe=function(e){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=e,o},et=function(e){var o=e.getBoundingClientRect(),i=o.top,l=o.left,L=o.width,P=o.height,y=e.cloneNode(),Z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,$=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return y.removeAttribute("id"),y.style.position="absolute",y.style.top=i+Z+"px",y.style.left=l+$+"px",y.style.width=L+"px",y.style.height=P+"px",y.style.transform="",y},S=function(e,o){var i=x({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(e,i);var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,i.bubbles,i.cancelable,i.detail),l},tt=function t(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=window.Promise||function(a){function r(){}a(r,r)},l=function(a){var r=a.target;if(r===B){b();return}v.indexOf(r)!==-1&&Q({target:r})},L=function(){if(!(H||!n.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ee-a)>d.scrollOffset&&setTimeout(b,150)}},P=function(a){var r=a.key||a.keyCode;(r==="Escape"||r==="Esc"||r===27)&&b()},y=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a;if(a.background&&(B.style.background=a.background),a.container&&a.container instanceof Object&&(r.container=x({},d.container,a.container)),a.template){var c=F(a.template)?a.template:document.querySelector(a.template);r.template=c}return d=x({},d,r),v.forEach(function(m){m.dispatchEvent(S("medium-zoom:update",{detail:{zoom:u}}))}),u},Z=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t(x({},d,a))},$=function(){for(var a=arguments.length,r=Array(a),c=0;c<a;c++)r[c]=arguments[c];var m=r.reduce(function(s,p){return[].concat(s,re(p))},[]);return m.filter(function(s){return v.indexOf(s)===-1}).forEach(function(s){v.push(s),s.classList.add("medium-zoom-image")}),j.forEach(function(s){var p=s.type,z=s.listener,k=s.options;m.forEach(function(w){w.addEventListener(p,z,k)})}),u},fe=function(){for(var a=arguments.length,r=Array(a),c=0;c<a;c++)r[c]=arguments[c];n.zoomed&&b();var m=r.length>0?r.reduce(function(s,p){return[].concat(s,re(p))},[]):v;return m.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(S("medium-zoom:detach",{detail:{zoom:u}}))}),v=v.filter(function(s){return m.indexOf(s)===-1}),u},pe=function(a,r){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.addEventListener("medium-zoom:"+a,r,c)}),j.push({type:"medium-zoom:"+a,listener:r,options:c}),u},ge=function(a,r){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.removeEventListener("medium-zoom:"+a,r,c)}),j=j.filter(function(m){return!(m.type==="medium-zoom:"+a&&m.listener.toString()===r.toString())}),u},J=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.target,c=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,z=void 0;if(d.container)if(d.container instanceof Object)s=x({},s,d.container),p=s.width-s.left-s.right-d.margin*2,z=s.height-s.top-s.bottom-d.margin*2;else{var k=F(d.container)?d.container:document.querySelector(d.container),w=k.getBoundingClientRect(),W=w.width,_e=w.height,ze=w.left,be=w.top;s=x({},s,{width:W,height:_e,left:ze,top:be})}p=p||s.width-d.margin*2,z=z||s.height-d.margin*2;var O=n.zoomedHd||n.original,Ee=ae(O)?p:O.naturalWidth||p,we=ae(O)?z:O.naturalHeight||z,D=O.getBoundingClientRect(),Le=D.top,Ce=D.left,q=D.width,U=D.height,xe=Math.min(Math.max(q,Ee),p)/q,He=Math.min(Math.max(U,we),z)/U,Y=Math.min(xe,He),ke=(-Ce+(p-q)/2+d.margin+s.left)/Y,Se=(-Le+(z-U)/2+d.margin+s.top)/Y,te="scale("+Y+") translate3d("+ke+"px, "+Se+"px, 0)";n.zoomed.style.transform=te,n.zoomedHd&&(n.zoomedHd.style.transform=te)};return new i(function(m){if(r&&v.indexOf(r)===-1){m(u);return}var s=function W(){H=!1,n.zoomed.removeEventListener("transitionend",W),n.original.dispatchEvent(S("medium-zoom:opened",{detail:{zoom:u}})),m(u)};if(n.zoomed){m(u);return}if(r)n.original=r;else if(v.length>0){var p=v;n.original=p[0]}else{m(u);return}if(n.original.dispatchEvent(S("medium-zoom:open",{detail:{zoom:u}})),ee=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,n.zoomed=et(n.original),document.body.appendChild(B),d.template){var z=F(d.template)?d.template:document.querySelector(d.template);n.template=document.createElement("div"),n.template.appendChild(z.content.cloneNode(!0)),document.body.appendChild(n.template)}if(n.original.parentElement&&n.original.parentElement.tagName==="PICTURE"&&n.original.currentSrc&&(n.zoomed.src=n.original.currentSrc),document.body.appendChild(n.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),n.original.classList.add("medium-zoom-image--hidden"),n.zoomed.classList.add("medium-zoom-image--opened"),n.zoomed.addEventListener("click",b),n.zoomed.addEventListener("transitionend",s),n.original.getAttribute("data-zoom-src")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("srcset"),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading"),n.zoomedHd.src=n.zoomed.getAttribute("data-zoom-src"),n.zoomedHd.onerror=function(){clearInterval(k),console.warn("Unable to reach the zoom image target "+n.zoomedHd.src),n.zoomedHd=null,c()};var k=setInterval(function(){n.zoomedHd.complete&&(clearInterval(k),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",b),document.body.appendChild(n.zoomedHd),c())},10)}else if(n.original.hasAttribute("srcset")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading");var w=n.zoomedHd.addEventListener("load",function(){n.zoomedHd.removeEventListener("load",w),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",b),document.body.appendChild(n.zoomedHd),c()})}else c()})},b=function(){return new i(function(a){if(H||!n.original){a(u);return}var r=function c(){n.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(n.zoomed),n.zoomedHd&&document.body.removeChild(n.zoomedHd),document.body.removeChild(B),n.zoomed.classList.remove("medium-zoom-image--opened"),n.template&&document.body.removeChild(n.template),H=!1,n.zoomed.removeEventListener("transitionend",c),n.original.dispatchEvent(S("medium-zoom:closed",{detail:{zoom:u}})),n.original=null,n.zoomed=null,n.zoomedHd=null,n.template=null,a(u)};H=!0,document.body.classList.remove("medium-zoom--opened"),n.zoomed.style.transform="",n.zoomedHd&&(n.zoomedHd.style.transform=""),n.template&&(n.template.style.transition="opacity 150ms",n.template.style.opacity=0),n.original.dispatchEvent(S("medium-zoom:close",{detail:{zoom:u}})),n.zoomed.addEventListener("transitionend",r)})},Q=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.target;return n.original?b():J({target:r})},ve=function(){return d},he=function(){return v},ye=function(){return n.original},v=[],j=[],H=!1,ee=0,d=o,n={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?d=e:(e||typeof e=="string")&&$(e),d=x({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var B=Qe(d.background);document.addEventListener("click",l),document.addEventListener("keyup",P),document.addEventListener("scroll",L),window.addEventListener("resize",b);var u={open:J,close:b,toggle:Q,update:y,clone:Z,attach:$,detach:fe,on:pe,off:ge,getOptions:ve,getImages:he,getZoomedImage:ye};return u};function nt(t,e){e===void 0&&(e={});var o=e.insertAt;if(!(!t||typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var ot=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";nt(ot);const at=tt,rt=":not(a) > img:not(.image-src, .visitor, .vp-sponsor-grid-image)",it=Symbol("medium-zoom"),st=(t,e)=>{const o=at();o.refresh=(i=rt)=>{o.detach(),o.attach(i)},t.provide(it,o),ie(()=>e.route.path,()=>Ae(()=>o.refresh()))},dt={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=jeffery1996.notes",onerror:"this.style.display='none'"},ct=T({__name:"MNavVisitor",setup(t){const e=se("DEV");return(o,i)=>h(e)?E("",!0):(g(),_("img",dt))}});const lt=R(ct,[["__scopeId","data-v-faf9dcc6"]]),mt={class:"copyright"},ut=["src"],ft=T({__name:"MDocFooter",setup(t){const e=se("DEV"),o=Te(),i=I(()=>o.path.replace("/jeffery-blog",""));return(l,L)=>(g(),_("div",mt,[h(e)?E("",!0):(g(),_("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=jeffery1996.notes.${h(i)}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,ut)),de(" Copyright © 2019-present jeffery ")]))}});const pt=R(ft,[["__scopeId","data-v-13de7bf1"]]),gt=T({__name:"MAsideSponsors",setup(t){return(e,o)=>null}});const vt=/[\u0000-\u001f]/g,ht=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,yt=/[\u0300-\u036F]/g,me=t=>t.normalize("NFKD").replace(yt,"").replace(vt,"").replace(ht,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),_t=["href"],zt={class:"box-header"},bt=["innerHTML"],Et={key:1,class:"icon"},wt=["src","alt"],Lt=["id"],Ct={key:1,class:"desc"},xt=T({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:null,badge:null,title:null,desc:null,link:null},setup(t){const e=t,o=I(()=>e.title?me(e.title):""),i=I(()=>typeof e.icon=="object"?e.icon.svg:""),l=I(()=>typeof e.badge=="string"?{text:e.badge,type:"info"}:e.badge);return(L,P)=>{const y=Oe("Badge");return t.link?(g(),_("a",{key:0,class:"m-nav-link",href:t.link,target:"_blank",rel:"noreferrer"},[M("article",{class:ne(["box",{"has-badge":h(l)}])},[M("div",zt,[t.noIcon?E("",!0):(g(),_(K,{key:0},[h(i)?(g(),_("div",{key:0,class:"icon",innerHTML:h(i)},null,8,bt)):t.icon&&typeof t.icon=="string"?(g(),_("div",Et,[M("img",{src:h(Ne)(t.icon),alt:t.title,onerror:"this.parentElement.style.display='none'"},null,8,wt)])):E("",!0)],64)),t.title?(g(),_("h5",{key:1,id:h(o),class:ne(["title",{"no-icon":t.noIcon}])},X(t.title),11,Lt)):E("",!0)]),h(l)?(g(),ce(y,{key:0,class:"badge",type:h(l).type,text:h(l).text},null,8,["type","text"])):E("",!0),t.desc?(g(),_("p",Ct,X(t.desc),1)):E("",!0)],2)],8,_t)):E("",!0)}}});const Ht=R(xt,[["__scopeId","data-v-f6a1464b"]]),kt=["id"],St=["href"],At={class:"m-nav-links"},Tt=T({__name:"MNavLinks",props:{title:null,noIcon:{type:Boolean},items:null},setup(t){const e=t,o=I(()=>me(e.title));return(i,l)=>(g(),_(K,null,[t.title?(g(),_("h2",{key:0,id:h(o),tabindex:"-1"},[de(X(t.title)+" ",1),M("a",{class:"header-anchor",href:`#${h(o)}`,"aria-hidden":"true"},null,8,St)],8,kt)):E("",!0),M("div",At,[(g(!0),_(K,null,Ie(t.items,L=>(g(),ce(Ht,Me({noIcon:t.noIcon},L),null,16,["noIcon"]))),256))])],64))}});const Ot=R(Tt,[["__scopeId","data-v-3a009e39"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(t){for(let e of t)e.unregister()}),"caches"in window&&caches.keys().then(function(t){return Promise.all(t.map(function(e){return caches.delete(e)}))}));let C;const Nt={extends:oe,Layout:()=>{var o;const t={},{frontmatter:e}=le();return(o=e.value)!=null&&o.layoutClass&&(t.class=e.value.layoutClass),N(oe.Layout,t,{"nav-bar-title-after":()=>N(lt),"doc-after":()=>N(pt),"aside-bottom":()=>N(gt)})},enhanceApp({app:t,router:e}){st(t,e),t.component("MNavLinks",Ot),t.provide("DEV",!1),typeof window<"u"&&ie(()=>e.route.data.relativePath,()=>It(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const t=navigator.userAgent.toLowerCase();t.includes("chrome")?document.documentElement.classList.add("browser-chrome"):t.includes("firefox")?document.documentElement.classList.add("browser-firefox"):t.includes("safari")&&document.documentElement.classList.add("browser-safari")}function It(t){if(t){if(C)return;C=document.createElement("style"),C.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(C)}else{if(!C)return;C.remove(),C=void 0}}function ue(t){if(t.extends){const e=ue(t.extends);return{...e,...t,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),t.enhanceApp&&await t.enhanceApp(o)}}}return t}const A=ue(Nt),Mt=T({name:"VitePressApp",setup(){const{site:t}=le();return $e(()=>{je(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),Be(),De(),Ve(),A.setup&&A.setup(),()=>N(A.Layout)}});async function Pt(){const t=jt(),e=$t();e.provide(Fe,t);const o=Re(t.route);return e.provide(Ze,o),e.component("Content",We),e.component("ClientOnly",qe),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),A.enhanceApp&&await A.enhanceApp({app:e,router:t,siteData:Ue}),{app:e,router:t,data:o}}function $t(){return Ye(Mt)}function jt(){let t=G,e;return Ke(o=>{let i=Xe(o);return t&&(e=i),(t||e===i)&&(i=i.replace(/\.js$/,".lean.js")),G&&(t=!1),Ge(()=>import(i),[])},A.NotFound)}G&&Pt().then(({app:t,router:e,data:o})=>{e.go().then(()=>{Pe(e.route,o.site),t.mount("#app")})});export{Pt as createApp};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{85169:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return c}});var r=n(2265);let o=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:l},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(p,e),d=["light","dark"],p=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:l="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:p="data-theme",value:w,children:y,nonce:g})=>{let[b,E]=(0,r.useState)(()=>m(l,c)),[T,x]=(0,r.useState)(()=>m(l)),C=w?Object.values(w):u,S=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=h());let s=w?w[r]:r,i=t?v():null,l=document.documentElement;if("class"===p?(l.classList.remove(...C),s&&l.classList.add(s)):s?l.setAttribute(p,s):l.removeAttribute(p),a){let e=o.includes(c)?c:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==i||i()},[]),P=(0,r.useCallback)(e=>{E(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),k=(0,r.useCallback)(t=>{x(h(t)),"system"===b&&n&&!e&&S("system")},[b,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&P(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),(0,r.useEffect)(()=>{S(null!=e?e:b)},[e,b]);let L=(0,r.useMemo)(()=>({theme:b,setTheme:P,forcedTheme:e,resolvedTheme:"system"===b?T:b,themes:n?[...u,"system"]:u,systemTheme:n?T:void 0}),[b,P,e,T,n,u]);return r.createElement(i.Provider,{value:L},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:l,themes:u,defaultTheme:c,attribute:p,value:w,children:y,attrs:C,nonce:g}),y)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:u,attrs:c,nonce:d})=>{let p="system"===l,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,m=i?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let s=u?u[e]:e,a=t?e+"|| ''":`'${s}'`,l="";return i&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||s?`c.add(${a})`:"null":s&&(l+=`d[s](n,${a})`),l},h=e?`!function(){${f}${v(e)}}()`:a?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${p})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}${p?"":"else{"+v(l,!1,!1)+"}"}${m}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}else{${v(l,!1,!1)};}${m}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})},()=>!0),m=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},19593:function(e,t,n){"use strict";var r=Object.create,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,i=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,u=(e,t)=>o(e,"name",{value:t,configurable:!0}),c=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))l.call(e,i)||i===n||o(e,i,{get:()=>t[i],enumerable:!(r=s(t,i))||r.enumerable});return e},d=(e,t,n)=>(n=null!=e?r(i(e)):{},c(!t&&e&&e.__esModule?n:o(n,"default",{value:e,enumerable:!0}),e)),p={};((e,t)=>{for(var n in t)o(e,n,{get:t[n],enumerable:!0})})(p,{default:()=>w}),e.exports=c(o({},"__esModule",{value:!0}),p);var f=d(n(41448)),m=d(n(2265)),v=d(n(64278)),h=u(e=>{let{color:t,height:n,showSpinner:r,crawl:o,crawlSpeed:s,initialPosition:a,easing:i,speed:l,shadow:c,template:d,zIndex:p=1600,showAtBottom:f=!1}=e,h=null!=t?t:"#29d",w=c||void 0===c?c?"box-shadow:".concat(c):"box-shadow:0 0 10px ".concat(h,",0 0 5px ").concat(h):"",y=m.createElement("style",null,"#nprogress{pointer-events:none}#nprogress .bar{background:".concat(h,";position:fixed;z-index:").concat(p,";").concat(f?"bottom: 0;":"top: 0;","left:0;width:100%;height:").concat(null!=n?n:3,"px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;").concat(w,";opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:").concat(p,";").concat(f?"bottom: 15px;":"top: 15px;","right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:").concat(h,";border-left-color:").concat(h,";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}")),g=u(e=>new URL(e,window.location.href).href,"toAbsoluteURL"),b=u((e,t)=>{let n=new URL(g(e)),r=new URL(g(t));return n.href.split("#")[0]===r.href.split("#")[0]},"isHashAnchor"),E=u((e,t)=>{let n=new URL(g(e)),r=new URL(g(t));return n.hostname.replace(/^www\./,"")===r.hostname.replace(/^www\./,"")},"isSameHostName");return m.useEffect(()=>{let e,t;function n(e,t){let n=new URL(e),r=new URL(t);if(n.hostname===r.hostname&&n.pathname===r.pathname&&n.search===r.search){let e=n.hash,t=r.hash;return e!==t&&n.href.replace(e,"")===r.href.replace(t,"")}return!1}v.configure({showSpinner:null==r||r,trickle:null==o||o,trickleSpeed:null!=s?s:200,minimum:null!=a?a:.08,easing:null!=i?i:"ease",speed:null!=l?l:200,template:null!=d?d:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'}),u(n,"isAnchorOfCurrentUrl");var c,p,f=document.querySelectorAll("html");let m=u(()=>f.forEach(e=>e.classList.remove("nprogress-busy")),"removeNProgressClass");function h(e){for(;e&&"a"!==e.tagName.toLowerCase();)e=e.parentElement;return e}function w(e){try{let t=e.target,r=h(t),o=null==r?void 0:r.href;if(o){let t=window.location.href,s="_blank"===r.target,a=["tel:","mailto:","sms:","blob:","download:"].some(e=>o.startsWith(e)),i=n(t,o);if(!E(window.location.href,r.href))return;o===t||i||s||a||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||b(window.location.href,r.href)||!g(r.href).startsWith("http")?(v.start(),v.done(),m()):v.start()}}catch(e){v.start(),v.done()}}function y(){v.done(),m()}function T(){v.done()}return u(h,"findClosestAnchor"),u(w,"handleClick"),e=(c=window.history).pushState,c.pushState=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return v.done(),m(),e.apply(c,n)},t=(p=window.history).replaceState,p.replaceState=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return v.done(),m(),t.apply(p,n)},u(y,"handlePageHide"),u(T,"handleBackAndForth"),window.addEventListener("popstate",T),document.addEventListener("click",w),window.addEventListener("pagehide",y),()=>{document.removeEventListener("click",w),window.removeEventListener("pagehide",y),window.removeEventListener("popstate",T)}},[]),y},"NextTopLoader"),w=h;h.propTypes={color:f.string,height:f.number,showSpinner:f.bool,crawl:f.bool,crawlSpeed:f.number,initialPosition:f.number,easing:f.string,speed:f.number,template:f.string,shadow:f.oneOfType([f.string,f.bool]),zIndex:f.number,showAtBottom:f.bool}},64278:function(e,t,n){var r,o;void 0!==(o="function"==typeof(r=function(){var e,t,n,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(o[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=s(e,o.minimum,1),r.status=1===e?null:e;var n=r.render(!t),l=n.querySelector(o.barSelector),u=o.speed,c=o.easing;return n.offsetWidth,a(function(t){var s,a;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),i(l,(s=e,(a="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+u+"ms "+c,a)),1===e?(i(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){i(n,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},u)},u)):setTimeout(t,u)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var n,s=t.querySelector(o.barSelector),a=e?"-100":(-1+(r.status||0))*100,l=document.querySelector(o.parent);return i(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),!o.showSpinner&&(n=t.querySelector(o.spinnerSelector))&&p(n),l!=document.body&&u(l,"nprogress-custom-parent"),l.appendChild(t),t},r.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var s;r=t[s=(s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+s)in n)return r;return t}(s)),n.style[r]=o}return function(e,t){var r,o,s=arguments;if(2==s.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,s[1],s[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function u(e,t){var n=d(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=d(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?r.call(t,n,t,e):r)&&(e.exports=o)},99949:function(e,t,n){"use strict";var r=n(88877);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},41448:function(e,t,n){e.exports=n(99949)()},88877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},33480:function(){},73247:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}},40096:function(e,t,n){"use strict";let r;n.d(t,{aU:function(){return eo},x8:function(){return es},dk:function(){return er},zt:function(){return Q},fC:function(){return et},Dx:function(){return en},l_:function(){return ee}});var o=n(22988),s=n(2265),a=n(54887),i=n(78149),l=n(1584),u=n(921),c=n(98324),d=n(18676),p=n(75137),f=n(66486);let m="dismissableLayer.update",v=(0,s.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),h=(0,s.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:u,onPointerDownOutside:c,onFocusOutside:h,onInteractOutside:w,onDismiss:b,...E}=e,T=(0,s.useContext)(v),[x,C]=(0,s.useState)(null),S=null!==(n=null==x?void 0:x.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,P]=(0,s.useState)({}),k=(0,l.e)(t,e=>C(e)),L=Array.from(T.layers),[R]=[...T.layersWithOutsidePointerEventsDisabled].slice(-1),_=L.indexOf(R),O=x?L.indexOf(x):-1,D=T.layersWithOutsidePointerEventsDisabled.size>0,M=O>=_,F=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,p.W)(e),r=(0,s.useRef)(!1),o=(0,s.useRef)(()=>{});return(0,s.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function s(){g("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=s,t.addEventListener("click",o.current,{once:!0})):s()}else t.removeEventListener("click",o.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...T.branches].some(e=>e.contains(t));!M||n||(null==c||c(e),null==w||w(e),e.defaultPrevented||null==b||b())},S),W=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,p.W)(e),r=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{let e=e=>{e.target&&!r.current&&g("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...T.branches].some(e=>e.contains(t))||(null==h||h(e),null==w||w(e),e.defaultPrevented||null==b||b())},S);return(0,f.e)(e=>{O!==T.layers.size-1||(null==u||u(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},S),(0,s.useEffect)(()=>{if(x)return a&&(0===T.layersWithOutsidePointerEventsDisabled.size&&(r=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),T.layersWithOutsidePointerEventsDisabled.add(x)),T.layers.add(x),y(),()=>{a&&1===T.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=r)}},[x,S,a,T]),(0,s.useEffect)(()=>()=>{x&&(T.layers.delete(x),T.layersWithOutsidePointerEventsDisabled.delete(x),y())},[x,T]),(0,s.useEffect)(()=>{let e=()=>P({});return document.addEventListener(m,e),()=>document.removeEventListener(m,e)},[]),(0,s.createElement)(d.WV.div,(0,o.Z)({},E,{ref:k,style:{pointerEvents:D?M?"auto":"none":void 0,...e.style},onFocusCapture:(0,i.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,i.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,i.M)(e.onPointerDownCapture,F.onPointerDownCapture)}))}),w=(0,s.forwardRef)((e,t)=>{let n=(0,s.useContext)(v),r=(0,s.useRef)(null),a=(0,l.e)(t,r);return(0,s.useEffect)(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.createElement)(d.WV.div,(0,o.Z)({},e,{ref:a}))});function y(){let e=new CustomEvent(m);document.dispatchEvent(e)}function g(e,t,n,{discrete:r}){let o=n.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,d.jH)(o,s):o.dispatchEvent(s)}let b=(0,s.forwardRef)((e,t)=>{var n;let{container:r=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...i}=e;return r?a.createPortal((0,s.createElement)(d.WV.div,(0,o.Z)({},i,{ref:t})),r):null});var E=n(31383),T=n(91715),x=n(1336),C=n(31725);let S="ToastProvider",[P,k,L]=(0,u.B)("Toast"),[R,_]=(0,c.b)("Toast",[L]),[O,D]=R(S),M=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:o="right",swipeThreshold:a=50,children:i}=e,[l,u]=(0,s.useState)(null),[c,d]=(0,s.useState)(0),p=(0,s.useRef)(!1),f=(0,s.useRef)(!1);return(0,s.createElement)(P.Provider,{scope:t},(0,s.createElement)(O,{scope:t,label:n,duration:r,swipeDirection:o,swipeThreshold:a,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:(0,s.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,s.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f},i))};M.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${S}\`. Expected non-empty \`string\`.`):null};let F=["F8"],W="toast.viewportPause",I="toast.viewportResume",N=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,hotkey:r=F,label:a="Notifications ({hotkey})",...i}=e,u=D("ToastViewport",n),c=k(n),p=(0,s.useRef)(null),f=(0,s.useRef)(null),m=(0,s.useRef)(null),v=(0,s.useRef)(null),h=(0,l.e)(t,v,u.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=u.toastCount>0;(0,s.useEffect)(()=>{let e=e=>{var t;r.every(t=>e[t]||e.code===t)&&(null===(t=v.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),(0,s.useEffect)(()=>{let e=p.current,t=v.current;if(g&&e&&t){let n=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(W);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},r=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(I);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},s=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",s),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",s),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[g,u.isClosePausedRef]);let b=(0,s.useCallback)(({tabbingDirection:e})=>{let t=c().map(t=>{let n=t.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===e?r:r.reverse()});return("forwards"===e?t.reverse():t).flat()},[c]);return(0,s.useEffect)(()=>{let e=v.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,s;let n=document.activeElement,a=t.shiftKey;if(t.target===e&&a){null===(r=f.current)||void 0===r||r.focus();return}let i=b({tabbingDirection:a?"backwards":"forwards"}),l=i.findIndex(e=>e===n);G(i.slice(l+1))?t.preventDefault():a?null===(o=f.current)||void 0===o||o.focus():null===(s=m.current)||void 0===s||s.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,b]),(0,s.createElement)(w,{ref:p,role:"region","aria-label":a.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:g?void 0:"none"}},g&&(0,s.createElement)($,{ref:f,onFocusFromOutsideViewport:()=>{G(b({tabbingDirection:"forwards"}))}}),(0,s.createElement)(P.Slot,{scope:n},(0,s.createElement)(d.WV.ol,(0,o.Z)({tabIndex:-1},i,{ref:h}))),g&&(0,s.createElement)($,{ref:m,onFocusFromOutsideViewport:()=>{G(b({tabbingDirection:"backwards"}))}}))}),$=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...a}=e,i=D("ToastFocusProxy",n);return(0,s.createElement)(C.T,(0,o.Z)({"aria-hidden":!0,tabIndex:0},a,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;null!==(t=i.viewport)&&void 0!==t&&t.contains(n)||r()}}))}),A="Toast",K=(0,s.forwardRef)((e,t)=>{let{forceMount:n,open:r,defaultOpen:a,onOpenChange:l,...u}=e,[c=!0,d]=(0,T.T)({prop:r,defaultProp:a,onChange:l});return(0,s.createElement)(E.z,{present:n||c},(0,s.createElement)(z,(0,o.Z)({open:c},u,{ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,i.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,i.M)(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${n}px`)}),onSwipeCancel:(0,i.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,i.M)(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${n}px`),d(!1)})})))}),[U,V]=R(A,{onClose(){}}),z=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:u,open:c,onClose:f,onEscapeKeyDown:m,onPause:v,onResume:w,onSwipeStart:y,onSwipeMove:g,onSwipeCancel:b,onSwipeEnd:E,...T}=e,x=D(A,n),[C,S]=(0,s.useState)(null),k=(0,l.e)(t,e=>S(e)),L=(0,s.useRef)(null),R=(0,s.useRef)(null),_=u||x.duration,O=(0,s.useRef)(0),M=(0,s.useRef)(_),F=(0,s.useRef)(0),{onToastAdd:N,onToastRemove:$}=x,K=(0,p.W)(()=>{var e;(null==C?void 0:C.contains(document.activeElement))&&(null===(e=x.viewport)||void 0===e||e.focus()),f()}),V=(0,s.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(F.current),O.current=new Date().getTime(),F.current=window.setTimeout(K,e))},[K]);(0,s.useEffect)(()=>{let e=x.viewport;if(e){let t=()=>{V(M.current),null==w||w()},n=()=>{let e=new Date().getTime()-O.current;M.current=M.current-e,window.clearTimeout(F.current),null==v||v()};return e.addEventListener(W,n),e.addEventListener(I,t),()=>{e.removeEventListener(W,n),e.removeEventListener(I,t)}}},[x.viewport,_,v,w,V]),(0,s.useEffect)(()=>{c&&!x.isClosePausedRef.current&&V(_)},[c,_,x.isClosePausedRef,V]),(0,s.useEffect)(()=>(N(),()=>$()),[N,$]);let z=(0,s.useMemo)(()=>C?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(C):null,[C]);return x.viewport?(0,s.createElement)(s.Fragment,null,z&&(0,s.createElement)(j,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0},z),(0,s.createElement)(U,{scope:n,onClose:K},(0,a.createPortal)((0,s.createElement)(P.ItemSlot,{scope:n},(0,s.createElement)(h,{asChild:!0,onEscapeKeyDown:(0,i.M)(m,()=>{x.isFocusedToastEscapeKeyDownRef.current||K(),x.isFocusedToastEscapeKeyDownRef.current=!1})},(0,s.createElement)(d.WV.li,(0,o.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":x.swipeDirection},T,{ref:k,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==m||m(e.nativeEvent),e.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,K()))}),onPointerDown:(0,i.M)(e.onPointerDown,e=>{0===e.button&&(L.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,i.M)(e.onPointerMove,e=>{if(!L.current)return;let t=e.clientX-L.current.x,n=e.clientY-L.current.y,r=!!R.current,o=["left","right"].includes(x.swipeDirection),s=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,a=o?s(0,t):0,i=o?0:s(0,n),l="touch"===e.pointerType?10:2,u={x:a,y:i},c={originalEvent:e,delta:u};r?(R.current=u,Y("toast.swipeMove",g,c,{discrete:!1})):J(u,x.swipeDirection,l)?(R.current=u,Y("toast.swipeStart",y,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(n)>l)&&(L.current=null)}),onPointerUp:(0,i.M)(e.onPointerUp,e=>{let t=R.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),R.current=null,L.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};J(t,x.swipeDirection,x.swipeThreshold)?Y("toast.swipeEnd",E,r,{discrete:!0}):Y("toast.swipeCancel",b,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),x.viewport))):null});z.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${A}\`. Expected \`foreground | background\`.`):null};let j=e=>{let{__scopeToast:t,children:n,...r}=e,o=D(A,t),[a,i]=(0,s.useState)(!1),[l,u]=(0,s.useState)(!1);return function(e=()=>{}){let t=(0,p.W)(e);(0,x.b)(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>i(!0)),(0,s.useEffect)(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,s.createElement)(b,{asChild:!0},(0,s.createElement)(C.T,r,a&&(0,s.createElement)(s.Fragment,null,o.label," ",n)))},Z=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return(0,s.createElement)(d.WV.div,(0,o.Z)({},r,{ref:t}))}),B=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e;return(0,s.createElement)(d.WV.div,(0,o.Z)({},r,{ref:t}))}),H=(0,s.forwardRef)((e,t)=>{let{altText:n,...r}=e;return n?(0,s.createElement)(X,{altText:n,asChild:!0},(0,s.createElement)(q,(0,o.Z)({},r,{ref:t}))):null});H.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let q=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,...r}=e,a=V("ToastClose",n);return(0,s.createElement)(X,{asChild:!0},(0,s.createElement)(d.WV.button,(0,o.Z)({type:"button"},r,{ref:t,onClick:(0,i.M)(e.onClick,a.onClose)})))}),X=(0,s.forwardRef)((e,t)=>{let{__scopeToast:n,altText:r,...a}=e;return(0,s.createElement)(d.WV.div,(0,o.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},a,{ref:t}))});function Y(e,t,n,{discrete:r}){let o=n.originalEvent.currentTarget,s=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,d.jH)(o,s):o.dispatchEvent(s)}let J=(e,t,n=0)=>{let r=Math.abs(e.x),o=Math.abs(e.y),s=r>o;return"left"===t||"right"===t?s&&r>n:!s&&o>n};function G(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let Q=M,ee=N,et=K,en=Z,er=B,eo=H,es=q},31725:function(e,t,n){"use strict";n.d(t,{T:function(){return a},f:function(){return i}});var r=n(22988),o=n(2265),s=n(18676);let a=(0,o.forwardRef)((e,t)=>(0,o.createElement)(s.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=a}}]);
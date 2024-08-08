"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{42873:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(81066).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},85169:function(e,t,n){n.d(t,{F:function(){return l}});var r=n(2265);let o=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i}},16463:function(e,t,n){var r=n(71169);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},44458:function(e,t,n){n.d(t,{Ee:function(){return y},NY:function(){return w},fC:function(){return g}});var r=n(22988),o=n(2265),i=n(98324),l=n(75137),a=n(1336),u=n(18676);let s="Avatar",[d,c]=(0,i.b)(s),[p,f]=d(s),v=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,...i}=e,[l,a]=(0,o.useState)("idle");return(0,o.createElement)(p,{scope:n,imageLoadingStatus:l,onImageLoadingStatusChange:a},(0,o.createElement)(u.WV.span,(0,r.Z)({},i,{ref:t})))}),m=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,src:i,onLoadingStatusChange:s=()=>{},...d}=e,c=f("AvatarImage",n),p=function(e){let[t,n]=(0,o.useState)("idle");return(0,a.b)(()=>{if(!e){n("error");return}let t=!0,r=new window.Image,o=e=>()=>{t&&n(e)};return n("loading"),r.onload=o("loaded"),r.onerror=o("error"),r.src=e,()=>{t=!1}},[e]),t}(i),v=(0,l.W)(e=>{s(e),c.onImageLoadingStatusChange(e)});return(0,a.b)(()=>{"idle"!==p&&v(p)},[p,v]),"loaded"===p?(0,o.createElement)(u.WV.img,(0,r.Z)({},d,{ref:t,src:i})):null}),h=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:n,delayMs:i,...l}=e,a=f("AvatarFallback",n),[s,d]=(0,o.useState)(void 0===i);return(0,o.useEffect)(()=>{if(void 0!==i){let e=window.setTimeout(()=>d(!0),i);return()=>window.clearTimeout(e)}},[i]),s&&"loaded"!==a.imageLoadingStatus?(0,o.createElement)(u.WV.span,(0,r.Z)({},l,{ref:t})):null}),g=v,y=m,w=h},27453:function(e,t,n){let r;n.d(t,{VY:function(){return ev},zt:function(){return ec},fC:function(){return ep},xz:function(){return ef}});var o=n(22988),i=n(2265),l=n(78149),a=n(1584),u=n(98324),s=n(18676),d=n(75137),c=n(66486);let p="dismissableLayer.update",f=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),v=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:u=!1,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:w,onDismiss:E,...b}=e,x=(0,i.useContext)(f),[C,P]=(0,i.useState)(null),T=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,D]=(0,i.useState)({}),L=(0,a.e)(t,e=>P(e)),O=Array.from(x.layers),[R]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),_=O.indexOf(R),k=C?O.indexOf(C):-1,S=x.layersWithOutsidePointerEventsDisabled.size>0,M=k>=_,W=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){h("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!M||n||(null==g||g(e),null==w||w(e),e.defaultPrevented||null==E||E())},T),A=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,d.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&h("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(null==y||y(e),null==w||w(e),e.defaultPrevented||null==E||E())},T);return(0,c.e)(e=>{k!==x.layers.size-1||(null==v||v(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},T),(0,i.useEffect)(()=>{if(C)return u&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(C)),x.layers.add(C),m(),()=>{u&&1===x.layersWithOutsidePointerEventsDisabled.size&&(T.body.style.pointerEvents=r)}},[C,T,u,x]),(0,i.useEffect)(()=>()=>{C&&(x.layers.delete(C),x.layersWithOutsidePointerEventsDisabled.delete(C),m())},[C,x]),(0,i.useEffect)(()=>{let e=()=>D({});return document.addEventListener(p,e),()=>document.removeEventListener(p,e)},[]),(0,i.createElement)(s.WV.div,(0,o.Z)({},b,{ref:L,style:{pointerEvents:S?M?"auto":"none":void 0,...e.style},onFocusCapture:(0,l.M)(e.onFocusCapture,A.onFocusCapture),onBlurCapture:(0,l.M)(e.onBlurCapture,A.onBlurCapture),onPointerDownCapture:(0,l.M)(e.onPointerDownCapture,W.onPointerDownCapture)}))});function m(){let e=new CustomEvent(p);document.dispatchEvent(e)}function h(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,s.jH)(o,i):o.dispatchEvent(i)}var g=n(53201),y=n(94674),w=n(55497),E=n(20151),b=n(46441),x=n(1336),C=n(75238);let P="Popper",[T,D]=(0,u.b)(P),[L,O]=T(P),R=(0,i.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...l}=e,u=O("PopperAnchor",n),d=(0,i.useRef)(null),c=(0,a.e)(t,d);return(0,i.useEffect)(()=>{u.onAnchorChange((null==r?void 0:r.current)||d.current)}),r?null:(0,i.createElement)(s.WV.div,(0,o.Z)({},l,{ref:c}))}),_="PopperContent",[k,S]=T(_),M=(0,i.forwardRef)((e,t)=>{var n,r,l,u,c,p,f,v;let{__scopePopper:m,side:h="bottom",sideOffset:g=0,align:b="center",alignOffset:P=0,arrowPadding:T=0,avoidCollisions:D=!0,collisionBoundary:L=[],collisionPadding:R=0,sticky:S="partial",hideWhenDetached:M=!1,updatePositionStrategy:W="optimized",onPlaced:F,...H}=e,V=O(_,m),[$,z]=(0,i.useState)(null),B=(0,a.e)(t,e=>z(e)),[Y,N]=(0,i.useState)(null),j=(0,C.t)(Y),K=null!==(n=null==j?void 0:j.width)&&void 0!==n?n:0,X=null!==(r=null==j?void 0:j.height)&&void 0!==r?r:0,q="number"==typeof R?R:{top:0,right:0,bottom:0,left:0,...R},G=Array.isArray(L)?L:[L],J=G.length>0,Q={padding:q,boundary:G.filter(A),altBoundary:J},{refs:U,floatingStyles:ee,placement:et,isPositioned:en,middlewareData:er}=(0,y.YF)({strategy:"fixed",placement:h+("center"!==b?"-"+b:""),whileElementsMounted:(...e)=>(0,w.Me)(...e,{animationFrame:"always"===W}),elements:{reference:V.anchor},middleware:[(0,E.cv)({mainAxis:g+X,alignmentAxis:P}),D&&(0,E.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===S?(0,E.dr)():void 0,...Q}),D&&(0,E.RR)({...Q}),(0,E.dp)({...Q,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:o,height:i}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${o}px`),l.setProperty("--radix-popper-anchor-height",`${i}px`)}}),Y&&(0,y.x7)({element:Y,padding:T}),Z({arrowWidth:K,arrowHeight:X}),M&&(0,E.Cp)({strategy:"referenceHidden",...Q})]}),[eo,ei]=I(et),el=(0,d.W)(F);(0,x.b)(()=>{en&&(null==el||el())},[en,el]);let ea=null===(l=er.arrow)||void 0===l?void 0:l.x,eu=null===(u=er.arrow)||void 0===u?void 0:u.y,es=(null===(c=er.arrow)||void 0===c?void 0:c.centerOffset)!==0,[ed,ec]=(0,i.useState)();return(0,x.b)(()=>{$&&ec(window.getComputedStyle($).zIndex)},[$]),(0,i.createElement)("div",{ref:U.setFloating,"data-radix-popper-content-wrapper":"",style:{...ee,transform:en?ee.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ed,"--radix-popper-transform-origin":[null===(p=er.transformOrigin)||void 0===p?void 0:p.x,null===(f=er.transformOrigin)||void 0===f?void 0:f.y].join(" ")},dir:e.dir},(0,i.createElement)(k,{scope:m,placedSide:eo,onArrowChange:N,arrowX:ea,arrowY:eu,shouldHideArrow:es},(0,i.createElement)(s.WV.div,(0,o.Z)({"data-side":eo,"data-align":ei},H,{ref:B,style:{...H.style,animation:en?void 0:"none",opacity:null!==(v=er.hide)&&void 0!==v&&v.referenceHidden?0:void 0}}))))}),W={top:"bottom",right:"left",bottom:"top",left:"right"};function A(e){return null!==e}let Z=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,i,l;let{placement:a,rects:u,middlewareData:s}=t,d=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,c=d?0:e.arrowWidth,p=d?0:e.arrowHeight,[f,v]=I(a),m={start:"0%",center:"50%",end:"100%"}[v],h=(null!==(r=null===(o=s.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+c/2,g=(null!==(i=null===(l=s.arrow)||void 0===l?void 0:l.y)&&void 0!==i?i:0)+p/2,y="",w="";return"bottom"===f?(y=d?m:`${h}px`,w=`${-p}px`):"top"===f?(y=d?m:`${h}px`,w=`${u.floating.height+p}px`):"right"===f?(y=`${-p}px`,w=d?m:`${g}px`):"left"===f&&(y=`${u.floating.width+p}px`,w=d?m:`${g}px`),{data:{x:y,y:w}}}});function I(e){let[t,n="center"]=e.split("-");return[t,n]}let F=e=>{let{__scopePopper:t,children:n}=e,[r,o]=(0,i.useState)(null);return(0,i.createElement)(L,{scope:t,anchor:r,onAnchorChange:o},n)};var H=n(54887),V=n(31383);(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e,l=i.Children.toArray(n),a=l.find(B);if(a){let e=a.props.children,n=l.map(t=>t!==a?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)($,(0,o.Z)({},r,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)($,(0,o.Z)({},r,{ref:t}),n)}).displayName="Slot";let $=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,a.F)(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});$.displayName="SlotClone";let z=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function B(e){return(0,i.isValidElement)(e)&&e.type===z}var Y=n(91715),N=n(31725);let[j,K]=(0,u.b)("Tooltip",[D]),X=D(),q="tooltip.open",[G,J]=j("TooltipProvider"),Q="Tooltip",[U,ee]=j(Q),et="TooltipTrigger",en=(0,i.forwardRef)((e,t)=>{let{__scopeTooltip:n,...r}=e,u=ee(et,n),d=J(et,n),c=X(n),p=(0,i.useRef)(null),f=(0,a.e)(t,p,u.onTriggerChange),v=(0,i.useRef)(!1),m=(0,i.useRef)(!1),h=(0,i.useCallback)(()=>v.current=!1,[]);return(0,i.useEffect)(()=>()=>document.removeEventListener("pointerup",h),[h]),(0,i.createElement)(R,(0,o.Z)({asChild:!0},c),(0,i.createElement)(s.WV.button,(0,o.Z)({"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute},r,{ref:f,onPointerMove:(0,l.M)(e.onPointerMove,e=>{"touch"===e.pointerType||m.current||d.isPointerInTransitRef.current||(u.onTriggerEnter(),m.current=!0)}),onPointerLeave:(0,l.M)(e.onPointerLeave,()=>{u.onTriggerLeave(),m.current=!1}),onPointerDown:(0,l.M)(e.onPointerDown,()=>{v.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:(0,l.M)(e.onFocus,()=>{v.current||u.onOpen()}),onBlur:(0,l.M)(e.onBlur,u.onClose),onClick:(0,l.M)(e.onClick,u.onClose)})))}),[er,eo]=j("TooltipPortal",{forceMount:void 0}),ei="TooltipContent",el=(0,i.forwardRef)((e,t)=>{let n=eo(ei,e.__scopeTooltip),{forceMount:r=n.forceMount,side:l="top",...a}=e,u=ee(ei,e.__scopeTooltip);return(0,i.createElement)(V.z,{present:r||u.open},u.disableHoverableContent?(0,i.createElement)(ed,(0,o.Z)({side:l},a,{ref:t})):(0,i.createElement)(ea,(0,o.Z)({side:l},a,{ref:t})))}),ea=(0,i.forwardRef)((e,t)=>{let n=ee(ei,e.__scopeTooltip),r=J(ei,e.__scopeTooltip),l=(0,i.useRef)(null),u=(0,a.e)(t,l),[s,d]=(0,i.useState)(null),{trigger:c,onClose:p}=n,f=l.current,{onPointerInTransitChange:v}=r,m=(0,i.useCallback)(()=>{d(null),v(!1)},[v]),h=(0,i.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,o,i)){case i:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());d(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t,n=5){let r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),v(!0)},[v]);return(0,i.useEffect)(()=>()=>m(),[m]),(0,i.useEffect)(()=>{if(c&&f){let e=e=>h(e,f),t=e=>h(e,c);return c.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{c.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[c,f,h,m]),(0,i.useEffect)(()=>{if(s){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==c?void 0:c.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,i=t.length-1;e<t.length;i=e++){let l=t[e].x,a=t[e].y,u=t[i].x,s=t[i].y;a>r!=s>r&&n<(u-l)*(r-a)/(s-a)+l&&(o=!o)}return o}(n,s);r?m():o&&(m(),p())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[c,f,s,p,m]),(0,i.createElement)(ed,(0,o.Z)({},e,{ref:u}))}),[eu,es]=j(Q,{isInside:!1}),ed=(0,i.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:r,"aria-label":l,onEscapeKeyDown:a,onPointerDownOutside:u,...s}=e,d=ee(ei,n),c=X(n),{onClose:p}=d;return(0,i.useEffect)(()=>(document.addEventListener(q,p),()=>document.removeEventListener(q,p)),[p]),(0,i.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&p()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,p]),(0,i.createElement)(v,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:e=>e.preventDefault(),onDismiss:p},(0,i.createElement)(M,(0,o.Z)({"data-state":d.stateAttribute},c,s,{ref:t,style:{...s.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,i.createElement)(z,null,r),(0,i.createElement)(eu,{scope:n,isInside:!0},(0,i.createElement)(N.f,{id:d.contentId,role:"tooltip"},l||r))))}),ec=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:o=!1,children:l}=e,[a,u]=(0,i.useState)(!0),s=(0,i.useRef)(!1),d=(0,i.useRef)(0);return(0,i.useEffect)(()=>{let e=d.current;return()=>window.clearTimeout(e)},[]),(0,i.createElement)(G,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,i.useCallback)(()=>{window.clearTimeout(d.current),u(!1)},[]),onClose:(0,i.useCallback)(()=>{window.clearTimeout(d.current),d.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:(0,i.useCallback)(e=>{s.current=e},[]),disableHoverableContent:o},l)},ep=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:o=!1,onOpenChange:l,disableHoverableContent:a,delayDuration:u}=e,s=J(Q,e.__scopeTooltip),d=X(t),[c,p]=(0,i.useState)(null),f=(0,g.M)(),v=(0,i.useRef)(0),m=null!=a?a:s.disableHoverableContent,h=null!=u?u:s.delayDuration,y=(0,i.useRef)(!1),[w=!1,E]=(0,Y.T)({prop:r,defaultProp:o,onChange:e=>{e?(s.onOpen(),document.dispatchEvent(new CustomEvent(q))):s.onClose(),null==l||l(e)}}),b=(0,i.useMemo)(()=>w?y.current?"delayed-open":"instant-open":"closed",[w]),x=(0,i.useCallback)(()=>{window.clearTimeout(v.current),y.current=!1,E(!0)},[E]),C=(0,i.useCallback)(()=>{window.clearTimeout(v.current),E(!1)},[E]),P=(0,i.useCallback)(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{y.current=!0,E(!0)},h)},[h,E]);return(0,i.useEffect)(()=>()=>window.clearTimeout(v.current),[]),(0,i.createElement)(F,d,(0,i.createElement)(U,{scope:t,contentId:f,open:w,stateAttribute:b,trigger:c,onTriggerChange:p,onTriggerEnter:(0,i.useCallback)(()=>{s.isOpenDelayed?P():x()},[s.isOpenDelayed,P,x]),onTriggerLeave:(0,i.useCallback)(()=>{m?C():window.clearTimeout(v.current)},[C,m]),onOpen:x,onClose:C,disableHoverableContent:m},n))},ef=en,ev=el},31725:function(e,t,n){n.d(t,{T:function(){return l},f:function(){return a}});var r=n(22988),o=n(2265),i=n(18676);let l=(0,o.forwardRef)((e,t)=>(0,o.createElement)(i.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),a=l}}]);
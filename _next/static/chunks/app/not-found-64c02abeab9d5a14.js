(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{27233:function(e,t,n){Promise.resolve().then(n.bind(n,70618))},70618:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(57437),o=n(16463),i=n(50495);function s(){let e=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center",children:[(0,r.jsx)("span",{className:"bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent",children:"404"}),(0,r.jsx)("h2",{className:"font-heading my-2 text-2xl font-bold",children:"Something's missing"}),(0,r.jsx)("p",{children:"Sorry, the page you are looking for doesn't exist or has been moved."}),(0,r.jsxs)("div",{className:"mt-8 flex justify-center gap-2",children:[(0,r.jsx)(i.z,{onClick:()=>e.back(),variant:"default",size:"lg",children:"Go back"}),(0,r.jsx)(i.z,{onClick:()=>e.push("/dashboard"),variant:"ghost",size:"lg",children:"Back to Home"})]})]})}},50495:function(e,t,n){"use strict";n.d(t,{d:function(){return u},z:function(){return l}});var r=n(57437),o=n(2265),i=n(63355),s=n(13027),a=n(37440);let u=(0,s.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:n,variant:o,size:s,asChild:l=!1,...c}=e,d=l?i.g7:"button";return(0,r.jsx)(d,{className:(0,a.cn)(u({variant:o,size:s,className:n})),ref:t,...c})});l.displayName="Button"},37440:function(e,t,n){"use strict";n.d(t,{cn:function(){return i},u:function(){return s}});var r=n(44839),o=n(78077);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m)((0,r.W)(t))}function s(e){if(!e)return!1;let t=e.data.current;return(null==t?void 0:t.type)==="Column"||(null==t?void 0:t.type)==="Task"}},16463:function(e,t,n){"use strict";var r=n(71169);n.o(r,"useParams")&&n.d(t,{useParams:function(){return r.useParams}}),n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},63355:function(e,t,n){"use strict";n.d(t,{g7:function(){return i}});var r=n(2265),o=n(57437),i=r.forwardRef((e,t)=>{let{children:n,...i}=e,a=r.Children.toArray(n),l=a.find(u);if(l){let e=l.props.children,n=a.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,o.jsx)(s,{...i,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,o.jsx)(s,{...i,ref:t,children:n})});i.displayName="Slot";var s=r.forwardRef((e,t)=>{let{children:n,...o}=e;if(r.isValidElement(n)){let e,i;let s=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return r.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...e)=>{i(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...i}:"className"===r&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}(o,n.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,s):s})}return r.Children.count(n)>1?r.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,o.jsx)(o.Fragment,{children:e});function u(e){return r.isValidElement(e)&&e.type===a}}},function(e){e.O(0,[103,971,23,744],function(){return e(e.s=27233)}),_N_E=e.O()}]);
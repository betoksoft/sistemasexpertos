(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{82554:function(e,t,a){Promise.resolve().then(a.bind(a,30413))},30413:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return es}});var r=a(57437),n=a(2265),s=a(4867),l=a(63355),o=a(37440);let i=n.forwardRef((e,t)=>{let{...a}=e;return(0,r.jsx)("nav",{ref:t,"aria-label":"breadcrumb",...a})});i.displayName="Breadcrumb";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("ol",{ref:t,className:(0,o.cn)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...n})});d.displayName="BreadcrumbList";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("li",{ref:t,className:(0,o.cn)("inline-flex items-center gap-1.5",a),...n})});c.displayName="BreadcrumbItem";let u=n.forwardRef((e,t)=>{let{asChild:a,className:n,...s}=e,i=a?l.g7:"a";return(0,r.jsx)(i,{ref:t,className:(0,o.cn)("transition-colors hover:text-foreground",n),...s})});u.displayName="BreadcrumbLink";let f=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("span",{ref:t,role:"link","aria-disabled":"true","aria-current":"page",className:(0,o.cn)("font-normal text-foreground",a),...n})});f.displayName="BreadcrumbPage";let m=e=>{let{children:t,className:a,...n}=e;return(0,r.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,o.cn)("[&>svg]:size-3.5",a),...n,children:null!=t?t:(0,r.jsx)(s.XCv,{})})};m.displayName="BreadcrumbSeparator";var p=a(30357);function x(e){let{items:t}=e;return(0,r.jsx)(i,{children:(0,r.jsx)(d,{children:t.map((e,a)=>(0,r.jsxs)(n.Fragment,{children:[a!==t.length-1&&(0,r.jsx)(c,{children:(0,r.jsx)(u,{href:e.link,children:e.title})}),a<t.length-1&&(0,r.jsx)(m,{children:(0,r.jsx)(p.Z,{})}),a===t.length-1&&(0,r.jsx)(f,{children:e.title})]},e.title))})})}var g=a(54887),h=a(39099),v=a(20920),j=a(89291);let y=[{id:"TODO",title:"Asignar nuevos cursos"}],b=[{id:"task1",status:"TODO",title:"Si el empleado es nuevo, asignar curso de inducci\xf3n"},{id:"task2",status:"TODO",title:"Si el empleado ha fallado en las evaluaciones de desempe\xf1o en el \xe1rea t\xe9cnica, entonces asignar cursos de refuerzo en dicha \xe1rea."},{id:"task3",status:"TODO",title:"Si el empleado ha sido promovido a un puesto de liderazgo, entonces asignar cursos de gesti\xf3n y liderazgo."},{id:"task4",status:"TODO",title:"Si la normativa ha cambiado, entonces asignar un curso de actualizaci\xf3n sobre la nueva normativa."},{id:"task5",status:"TODO",title:"Si ha pasado un a\xf1o desde el \xfaltimo entrenamiento en TI, entonces asignar un curso de actualizaci\xf3n en tecnolog\xedas de la informaci\xf3n."},{id:"task6",status:"TODO",title:"Si el empleado no ha completado un curso dentro del tiempo establecido, entonces enviar\xe1 un recordatorio."}],N=(0,h.Ue)()((0,j.tJ)(e=>({tasks:b,columns:y,draggedTask:null,addTask:(t,a)=>e(e=>({tasks:[...e.tasks,{id:(0,v.Z)(),title:t,description:a,status:"TODO"}]})),updateCol:(t,a)=>e(e=>({columns:e.columns.map(e=>e.id===t?{...e,title:a}:e)})),addCol:t=>e(e=>({columns:[...e.columns,{title:t,id:e.columns.length?t.toUpperCase():"TODO"}]})),dragTask:t=>e({draggedTask:t}),removeTask:t=>e(e=>({tasks:e.tasks.filter(e=>e.id!==t)})),removeCol:t=>e(e=>({columns:e.columns.filter(e=>e.id!==t)})),setTasks:t=>e({tasks:t}),setCols:t=>e({columns:t})}),{name:"task-store",skipHydration:!0}));var w=a(75149),k=a(85392),T=a(15554),C=a(13027),z=a(71322),S=a(50495),D=a(36013),R=a(69546);let O=R.fC;R.xz;let Z=R.h_,A=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(R.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n,ref:t})});A.displayName=R.aV.displayName;let I=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsxs)(Z,{children:[(0,r.jsx)(A,{}),(0,r.jsx)(R.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n})]})});I.displayName=R.VY.displayName;let _=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};_.displayName="AlertDialogHeader";let E=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};E.displayName="AlertDialogFooter";let V=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(R.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold",a),...n})});V.displayName=R.Dx.displayName;let M=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(R.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...n})});M.displayName=R.dk.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(R.aU,{ref:t,className:(0,o.cn)((0,S.d)(),a),...n})}).displayName=R.aU.displayName;let B=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(R.$j,{ref:t,className:(0,o.cn)((0,S.d)({variant:"outline"}),"mt-2 sm:mt-0",a),onClick:()=>setTimeout(()=>document.body.style.pointerEvents="",100),...n})});B.displayName=R.$j.displayName;var F=a(46910),U=a(35657),P=a(83102);function X(e){let{title:t,id:a}=e,[l,o]=n.useState(!1),[i,d]=n.useState(t),c=N(e=>e.updateCol),u=N(e=>e.removeCol),[f,m]=n.useState(!0),[p,x]=n.useState(!1),g=n.useRef(null),{toast:h}=(0,U.pm)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),m(!f),c(a,i),h({title:"Name Updated",variant:"default",description:"".concat(t," updated to ").concat(i)})},children:(0,r.jsx)(P.I,{value:i,onChange:e=>d(e.target.value),className:"!mt-0 mr-auto text-base disabled:cursor-pointer disabled:border-none disabled:opacity-100",disabled:f,ref:g})}),(0,r.jsxs)(F.h_,{modal:!1,children:[(0,r.jsx)(F.$F,{asChild:!0,children:(0,r.jsxs)(S.z,{variant:"secondary",className:"ml-1",children:[(0,r.jsx)("span",{className:"sr-only",children:"Actions"}),(0,r.jsx)(s.nWS,{className:"h-4 w-4"})]})}),(0,r.jsxs)(F.AW,{align:"end",children:[(0,r.jsx)(F.Xi,{onSelect:()=>{m(!f),setTimeout(()=>{var e;g.current&&(null===(e=g.current)||void 0===e||e.focus())},500)},children:"Rename"}),(0,r.jsx)(F.VD,{}),(0,r.jsx)(F.Xi,{onSelect:()=>x(!0),className:"text-red-600",children:"Delete Section"})]})]}),(0,r.jsx)(O,{open:p,onOpenChange:x,children:(0,r.jsxs)(I,{children:[(0,r.jsxs)(_,{children:[(0,r.jsx)(V,{children:"Are you sure want to delete column?"}),(0,r.jsx)(M,{children:"NOTE: All tasks related to this category will also be deleted."})]}),(0,r.jsxs)(E,{children:[(0,r.jsx)(B,{children:"Cancel"}),(0,r.jsx)(S.z,{variant:"destructive",onClick:()=>{setTimeout(()=>document.body.style.pointerEvents="",100),x(!1),u(a),h({description:"This column has been deleted."})},children:"Delete"})]})]})})]})}let Y=(0,C.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function $(e){let{className:t,variant:a,...n}=e;return(0,r.jsx)("div",{className:(0,o.cn)(Y({variant:a}),t),...n})}var L=a(82695);function H(e){let{task:t,isOverlay:a}=e,n=N(e=>e.removeTask),{setNodeRef:s,attributes:l,listeners:o,transform:i,transition:d,isDragging:c}=(0,k.nB)({id:t.id,data:{type:"Task",task:t},attributes:{roleDescription:"Task"}}),u={transition:d,transform:T.ux.Translate.toString(i)},f=(0,C.j)("",{variants:{dragging:{over:"ring-2 opacity-30",overlay:"ring-2 ring-primary"}}});return(0,r.jsxs)(D.Zb,{ref:s,style:u,className:f({dragging:a?"overlay":c?"over":void 0}),children:[(0,r.jsxs)(D.Ol,{className:"space-between relative flex flex-row border-b-2 border-secondary px-3 py-3",children:[(0,r.jsxs)(S.z,{variant:"ghost",...l,...o,className:"-ml-2 h-auto cursor-grab p-1 text-secondary-foreground/50",children:[(0,r.jsx)("span",{className:"sr-only",children:"Move task"}),(0,r.jsx)(z.Z,{})]}),(0,r.jsx)($,{variant:"outline",className:"ml-auto font-semibold",children:"Regla"}),(0,r.jsx)(S.z,{onClick:()=>n(t.id),variant:"destructive",size:"sm",children:(0,r.jsx)(L.P.delete,{})})]}),(0,r.jsx)(D.aY,{className:"whitespace-pre-wrap px-3 pb-6 pt-3 text-left",children:t.title})]})}var W=a(94880);function q(e){let{column:t,tasks:a,isOverlay:s}=e,l=(0,n.useMemo)(()=>a.map(e=>e.id),[a]),{setNodeRef:o,attributes:i,listeners:d,transform:c,transition:u,isDragging:f}=(0,k.nB)({id:t.id,data:{type:"Column",column:t},attributes:{roleDescription:"Column: ".concat(t.title)}}),m={transition:u,transform:T.ux.Translate.toString(c)},p=(0,C.j)("h-[75vh] max-h-[75vh] w-[350px] max-w-full bg-secondary flex flex-col flex-shrink-0 snap-center",{variants:{dragging:{default:"border-2 border-transparent",over:"ring-2 opacity-30",overlay:"ring-2 ring-primary"}}});return(0,r.jsxs)(D.Zb,{ref:o,style:m,className:p({dragging:s?"overlay":f?"over":void 0}),children:[(0,r.jsxs)(D.Ol,{className:"space-between flex flex-row items-center border-b-2 p-4 text-left font-semibold",children:[(0,r.jsxs)(S.z,{variant:"ghost",...i,...d,className:" relative -ml-2 h-auto cursor-grab p-1 text-primary/50",children:[(0,r.jsx)("span",{className:"sr-only",children:"Move column: ".concat(t.title)}),(0,r.jsx)(z.Z,{})]}),(0,r.jsx)(X,{id:t.id,title:t.title})]}),(0,r.jsx)(D.aY,{className:"flex flex-grow flex-col gap-4 overflow-x-hidden p-2",children:(0,r.jsx)(W.ScrollArea,{className:"h-full",children:(0,r.jsx)(k.Fo,{items:l,children:a.map(e=>(0,r.jsx)(H,{task:e},e.id))})})})]})}function K(e){let{children:t}=e,a=(0,w.Cj)(),n=(0,C.j)("px-2  pb-4 md:px-0 flex lg:justify-start",{variants:{dragging:{default:"",active:"snap-none"}}});return(0,r.jsxs)(W.ScrollArea,{className:"w-full whitespace-nowrap rounded-md",children:[(0,r.jsx)("div",{className:n({dragging:a.active?"active":"default"}),children:(0,r.jsx)("div",{className:"flex flex-row items-start justify-center gap-4",children:t})}),(0,r.jsx)(W.B,{orientation:"horizontal"})]})}var J=a(90837);function Q(){let e=N(e=>e.addCol);return(0,r.jsxs)(J.Vq,{children:[(0,r.jsx)(J.hg,{asChild:!0,children:(0,r.jsx)(S.z,{variant:"secondary",size:"lg",className:"w-full",children:"＋ Agregar conjunto de reglas"})}),(0,r.jsxs)(J.cZ,{className:"sm:max-w-[425px]",children:[(0,r.jsxs)(J.fK,{children:[(0,r.jsx)(J.$N,{children:"Agregar conjunto de reglas"}),(0,r.jsx)(J.Be,{children:"Como se llamar\xe1 este conjunto de reglas?"})]}),(0,r.jsx)("form",{id:"todo-form",className:"grid gap-4 py-4",onSubmit:t=>{t.preventDefault();let{title:a}=Object.fromEntries(new FormData(t.currentTarget));"string"==typeof a&&e(a)},children:(0,r.jsx)("div",{className:"grid grid-cols-4 items-center gap-4",children:(0,r.jsx)(P.I,{id:"title",name:"title",placeholder:"Nombre del conjunto de reglas...",className:"col-span-4"})})}),(0,r.jsx)(J.cN,{children:(0,r.jsx)(J.hg,{asChild:!0,children:(0,r.jsx)(S.z,{type:"submit",size:"sm",form:"todo-form",children:"Agregar reglas"})})})]})]})}function G(){let e=N(e=>e.columns),t=N(e=>e.setCols),a=(0,n.useRef)(null),s=(0,n.useMemo)(()=>e.map(e=>e.id),[e]),l=N(e=>e.tasks),i=N(e=>e.setTasks),[d,c]=(0,n.useState)(null),[u,f]=(0,n.useState)(!1),[m,p]=(0,n.useState)(null),x=(0,w.Dy)((0,w.VT)(w.MA),(0,w.VT)(w.LO));if((0,n.useEffect)(()=>{f(!0)},[u]),(0,n.useEffect)(()=>{N.persist.rehydrate()},[]),u)return(0,r.jsxs)(w.LB,{accessibility:{announcements:{onDragStart(t){var r,n;let{active:l}=t;if((0,o.u)(l)){if((null===(r=l.data.current)||void 0===r?void 0:r.type)==="Column"){let t=s.findIndex(e=>e===l.id),a=e[t];return"Picked up Column ".concat(null==a?void 0:a.title," at position: ").concat(t+1," of ").concat(s.length)}if((null===(n=l.data.current)||void 0===n?void 0:n.type)==="Task"){a.current=l.data.current.task.status;let{tasksInColumn:e,taskPosition:t,column:r}=h(l.id,a.current);return"Picked up Task ".concat(l.data.current.task.title," at position: ").concat(t+1," of ").concat(e.length," in column ").concat(null==r?void 0:r.title)}}},onDragOver(e){var t,r,n,l;let{active:i,over:d}=e;if((0,o.u)(i)&&(0,o.u)(d)){if((null===(t=i.data.current)||void 0===t?void 0:t.type)==="Column"&&(null===(r=d.data.current)||void 0===r?void 0:r.type)==="Column"){let e=s.findIndex(e=>e===d.id);return"Column ".concat(i.data.current.column.title," was moved over ").concat(d.data.current.column.title," at position ").concat(e+1," of ").concat(s.length)}if((null===(n=i.data.current)||void 0===n?void 0:n.type)==="Task"&&(null===(l=d.data.current)||void 0===l?void 0:l.type)==="Task"){let{tasksInColumn:e,taskPosition:t,column:r}=h(d.id,d.data.current.task.status);return d.data.current.task.status!==a.current?"Task ".concat(i.data.current.task.title," was moved over column ").concat(null==r?void 0:r.title," in position ").concat(t+1," of ").concat(e.length):"Task was moved over position ".concat(t+1," of ").concat(e.length," in column ").concat(null==r?void 0:r.title)}}},onDragEnd(e){var t,r,n,l;let{active:i,over:d}=e;if(!(0,o.u)(i)||!(0,o.u)(d)){a.current=null;return}if((null===(t=i.data.current)||void 0===t?void 0:t.type)==="Column"&&(null===(r=d.data.current)||void 0===r?void 0:r.type)==="Column"){let e=s.findIndex(e=>e===d.id);return"Column ".concat(i.data.current.column.title," was dropped into position ").concat(e+1," of ").concat(s.length)}if((null===(n=i.data.current)||void 0===n?void 0:n.type)==="Task"&&(null===(l=d.data.current)||void 0===l?void 0:l.type)==="Task"){let{tasksInColumn:e,taskPosition:t,column:r}=h(d.id,d.data.current.task.status);return d.data.current.task.status!==a.current?"Task was dropped into column ".concat(null==r?void 0:r.title," in position ").concat(t+1," of ").concat(e.length):"Task was dropped into position ".concat(t+1," of ").concat(e.length," in column ").concat(null==r?void 0:r.title)}a.current=null},onDragCancel(e){var t;let{active:r}=e;if(a.current=null,(0,o.u)(r))return"Dragging ".concat(null===(t=r.data.current)||void 0===t?void 0:t.type," cancelled.")}}},sensors:x,onDragStart:function(e){if(!(0,o.u)(e.active))return;let t=e.active.data.current;if((null==t?void 0:t.type)==="Column"){c(t.column);return}if((null==t?void 0:t.type)==="Task"){p(t.task);return}},onDragEnd:function(a){c(null),p(null);let{active:r,over:n}=a;if(!n)return;let s=r.id,l=n.id;if(!(0,o.u)(r))return;let i=r.data.current;if(s===l||(null==i?void 0:i.type)!=="Column")return;let d=e.findIndex(e=>e.id===s),u=e.findIndex(e=>e.id===l);t((0,k.Rp)(e,d,u))},onDragOver:function(e){let{active:t,over:a}=e;if(!a)return;let r=t.id,n=a.id;if(r===n||!(0,o.u)(t)||!(0,o.u)(a))return;let s=t.data.current,d=a.data.current,c=(null==s?void 0:s.type)==="Task",u=(null==s?void 0:s.type)==="Task";if(!c)return;if(c&&u){let e=l.findIndex(e=>e.id===r),t=l.findIndex(e=>e.id===n),a=l[e],s=l[t];a&&s&&a.status!==s.status&&(a.status=s.status,i((0,k.Rp)(l,e,t-1))),i((0,k.Rp)(l,e,t))}let f=(null==d?void 0:d.type)==="Column";if(c&&f){let e=l.findIndex(e=>e.id===r),t=l[e];t&&(t.status=n,i((0,k.Rp)(l,e,e)))}},children:[(0,r.jsx)(K,{children:(0,r.jsxs)(k.Fo,{items:s,children:[null==e?void 0:e.map((t,a)=>(0,r.jsxs)(n.Fragment,{children:[(0,r.jsx)(q,{column:t,tasks:l.filter(e=>e.status===t.id)}),a===(null==e?void 0:e.length)-1&&(0,r.jsx)("div",{className:"w-[300px]",children:(0,r.jsx)(Q,{})})]},t.id)),!e.length&&(0,r.jsx)(Q,{})]})}),"document"in window&&(0,g.createPortal)((0,r.jsxs)(w.y9,{children:[d&&(0,r.jsx)(q,{isOverlay:!0,column:d,tasks:l.filter(e=>e.status===d.id)}),m&&(0,r.jsx)(H,{task:m,isOverlay:!0})]}),document.body)]});function h(t,a){let r=l.filter(e=>e.status===a),n=r.findIndex(e=>e.id===t);return{tasksInColumn:r,taskPosition:n,column:e.find(e=>e.id===a)}}}let ee=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("textarea",{className:(0,o.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});function et(){let e=N(e=>e.addTask);return(0,r.jsxs)(J.Vq,{children:[(0,r.jsx)(J.hg,{asChild:!0,children:(0,r.jsx)(S.z,{variant:"secondary",size:"sm",children:"＋ Agregar regla"})}),(0,r.jsxs)(J.cZ,{className:"sm:max-w-[425px]",children:[(0,r.jsxs)(J.fK,{children:[(0,r.jsx)(J.$N,{children:"Agregar nueva regla"}),(0,r.jsx)(J.Be,{children:"\xbfCu\xe1les son los detalles de la regla?"})]}),(0,r.jsxs)("form",{id:"todo-form",className:"grid gap-4 py-4",onSubmit:t=>{t.preventDefault();let{title:a,description:r}=Object.fromEntries(new FormData(t.currentTarget));"string"==typeof a&&"string"==typeof r&&e(a,r)},children:[(0,r.jsx)("div",{className:"grid grid-cols-4 items-center gap-4",children:(0,r.jsx)(P.I,{id:"title",name:"title",placeholder:"Nombre de la regla...",className:"col-span-4"})}),(0,r.jsx)("div",{className:"grid grid-cols-4 items-center gap-4",children:(0,r.jsx)(ee,{id:"description",name:"description",placeholder:"Descripci\xf3n...",className:"col-span-4"})})]}),(0,r.jsx)(J.cN,{children:(0,r.jsx)(J.hg,{asChild:!0,children:(0,r.jsx)(S.z,{type:"submit",size:"sm",form:"todo-form",children:"Agregar regla"})})})]})]})}function ea(e){let{children:t,scrollable:a=!1}=e;return(0,r.jsx)(r.Fragment,{children:a?(0,r.jsx)(W.ScrollArea,{className:"h-[calc(100dvh-52px)]",children:(0,r.jsx)("div",{className:"h-full  p-4 md:px-8",children:t})}):(0,r.jsx)("div",{className:"h-full  p-4 md:px-8",children:t})})}ee.displayName="Textarea";var er=a(47667);let en=[{title:"Dashboard",link:"/dashboard"},{title:"Reglas",link:"/dashboard/reglas"}];function es(){return(0,r.jsx)(ea,{children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)(x,{items:en}),(0,r.jsxs)("div",{className:"flex items-start justify-between",children:[(0,r.jsx)(er.X,{title:"Reglas",description:"Administrador de reglas"}),(0,r.jsx)(et,{})]}),(0,r.jsx)(G,{})]})})}},82695:function(e,t,a){"use strict";a.d(t,{P:function(){return A}});var r=a(57437),n=a(87140),s=a(45764),l=a(97905),o=a(74697),i=a(71268),d=a(74109),c=a(99116),u=a(70518),f=a(87592),m=a(90399),p=a(47718),x=a(22023),g=a(99827),h=a(18604),v=a(24258),j=a(88592),y=a(48137),b=a(92513),N=a(26032),w=a(52022),k=a(71976),T=a(74622),C=a(64552),z=a(95095),S=a(92699),D=a(32271),R=a(59799),O=a(22468),Z=a(24033);let A={dashboard:n.Z,logo:s.Z,login:l.Z,close:o.Z,profile:i.Z,spinner:d.Z,kanban:c.Z,chevronLeft:u.Z,chevronRight:f.Z,trash:m.Z,employee:p.Z,post:x.Z,page:g.Z,media:h.Z,settings:v.Z,billing:j.Z,ellipsis:y.Z,add:b.Z,warning:N.Z,user:w.Z,arrowRight:k.Z,help:T.Z,pizza:C.Z,sun:z.Z,moon:S.Z,laptop:D.Z,gitHub:e=>{let{...t}=e;return(0,r.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,r.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},twitter:R.Z,check:O.Z,delete:Z.Z}},50495:function(e,t,a){"use strict";a.d(t,{d:function(){return i},z:function(){return d}});var r=a(57437),n=a(2265),s=a(63355),l=a(13027),o=a(37440);let i=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:a,variant:n,size:l,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,r.jsx)(u,{className:(0,o.cn)(i({variant:n,size:l,className:a})),ref:t,...c})});d.displayName="Button"},36013:function(e,t,a){"use strict";a.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return i}});var r=a(57437),n=a(2265),s=a(37440);let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...n})});l.displayName="Card";let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",a),...n})});o.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",a),...n})});i.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",a),...n})});d.displayName="CardDescription";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",a),...n})});c.displayName="CardContent";let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",a),...n})});u.displayName="CardFooter"},90837:function(e,t,a){"use strict";a.d(t,{$N:function(){return x},Be:function(){return g},Vq:function(){return i},cN:function(){return p},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var r=a(57437),n=a(2265),s=a(30669),l=a(4867),o=a(37440);let i=s.fC,d=s.xz,c=s.h_;s.x8;let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(s.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n})});u.displayName=s.aV.displayName;let f=n.forwardRef((e,t)=>{let{className:a,children:n,...i}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(u,{}),(0,r.jsxs)(s.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",a),...i,children:[n,(0,r.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(l.Pxu,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=s.VY.displayName;let m=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};m.displayName="DialogHeader";let p=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};p.displayName="DialogFooter";let x=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(s.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})});x.displayName=s.Dx.displayName;let g=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(s.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...n})});g.displayName=s.dk.displayName},46910:function(e,t,a){"use strict";a.d(t,{$F:function(){return d},AW:function(){return u},Ju:function(){return m},KM:function(){return x},Qk:function(){return c},VD:function(){return p},Xi:function(){return f},h_:function(){return i}});var r=a(57437),n=a(2265),s=a(86610),l=a(4867),o=a(37440);let i=s.fC,d=s.xz,c=s.ZA;s.Uv,s.Tr,s.Ee,n.forwardRef((e,t)=>{let{className:a,inset:n,children:i,...d}=e;return(0,r.jsxs)(s.fF,{ref:t,className:(0,o.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",n&&"pl-8",a),...d,children:[i,(0,r.jsx)(l.XCv,{className:"ml-auto h-4 w-4"})]})}).displayName=s.fF.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(s.tu,{ref:t,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})}).displayName=s.tu.displayName;let u=n.forwardRef((e,t)=>{let{className:a,sideOffset:n=4,...l}=e;return(0,r.jsx)(s.Uv,{children:(0,r.jsx)(s.VY,{ref:t,sideOffset:n,className:(0,o.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})})});u.displayName=s.VY.displayName;let f=n.forwardRef((e,t)=>{let{className:a,inset:n,...l}=e;return(0,r.jsx)(s.ck,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",a),...l})});f.displayName=s.ck.displayName,n.forwardRef((e,t)=>{let{className:a,children:n,checked:i,...d}=e;return(0,r.jsxs)(s.oC,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:i,...d,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(l.nQG,{className:"h-4 w-4"})})}),n]})}).displayName=s.oC.displayName,n.forwardRef((e,t)=>{let{className:a,children:n,...i}=e;return(0,r.jsxs)(s.Rk,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...i,children:[(0,r.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,r.jsx)(s.wU,{children:(0,r.jsx)(l.jXb,{className:"h-4 w-4 fill-current"})})}),n]})}).displayName=s.Rk.displayName;let m=n.forwardRef((e,t)=>{let{className:a,inset:n,...l}=e;return(0,r.jsx)(s.__,{ref:t,className:(0,o.cn)("px-2 py-1.5 text-sm font-semibold",n&&"pl-8",a),...l})});m.displayName=s.__.displayName;let p=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)(s.Z0,{ref:t,className:(0,o.cn)("-mx-1 my-1 h-px bg-muted",a),...n})});p.displayName=s.Z0.displayName;let x=e=>{let{className:t,...a}=e;return(0,r.jsx)("span",{className:(0,o.cn)("ml-auto text-xs tracking-widest opacity-60",t),...a})};x.displayName="DropdownMenuShortcut"},47667:function(e,t,a){"use strict";a.d(t,{X:function(){return n}});var r=a(57437);let n=e=>{let{title:t,description:a}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-3xl font-bold tracking-tight",children:t}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:a})]})}},83102:function(e,t,a){"use strict";a.d(t,{I:function(){return l}});var r=a(57437),n=a(2265),s=a(37440);let l=n.forwardRef((e,t)=>{let{className:a,type:n,...l}=e;return(0,r.jsx)("input",{type:n,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...l})});l.displayName="Input"},94880:function(e,t,a){"use strict";a.d(t,{B:function(){return i},ScrollArea:function(){return o}});var r=a(57437),n=a(2265),s=a(80023),l=a(37440);let o=n.forwardRef((e,t)=>{let{className:a,children:n,...o}=e;return(0,r.jsxs)(s.fC,{ref:t,className:(0,l.cn)("relative",a),...o,children:[(0,r.jsx)(s.l_,{className:"h-full w-full rounded-[inherit]",children:n}),(0,r.jsx)(i,{}),(0,r.jsx)(s.Ns,{})]})});o.displayName=s.fC.displayName;let i=n.forwardRef((e,t)=>{let{className:a,orientation:n="vertical",...o}=e;return(0,r.jsx)(s.gb,{ref:t,orientation:n,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===n&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===n&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...o,children:(0,r.jsx)(s.q4,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=s.gb.displayName},35657:function(e,t,a){"use strict";a.d(t,{pm:function(){return f}});var r=a(2265);let n=0,s=new Map,l=e=>{if(s.has(e))return;let t=setTimeout(()=>{s.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);s.set(e,t)},o=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?l(a):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},i=[],d={toasts:[]};function c(e){d=o(d,e),i.forEach(e=>{e(d)})}function u(e){let{...t}=e,a=(n=(n+1)%Number.MAX_VALUE).toString(),r=()=>c({type:"DISMISS_TOAST",toastId:a});return c({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||r()}}}),{id:a,dismiss:r,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function f(){let[e,t]=r.useState(d);return r.useEffect(()=>(i.push(t),()=>{let e=i.indexOf(t);e>-1&&i.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},37440:function(e,t,a){"use strict";a.d(t,{cn:function(){return s},u:function(){return l}});var r=a(44839),n=a(78077);function s(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,n.m)((0,r.W)(t))}function l(e){if(!e)return!1;let t=e.data.current;return(null==t?void 0:t.type)==="Column"||(null==t?void 0:t.type)==="Task"}}},function(e){e.O(0,[310,103,572,582,178,770,907,795,529,971,23,744],function(){return e(e.s=82554)}),_N_E=e.O()}]);
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[361],{74361:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Qe}});var a=n(1413),o=n(70885),r=n(72791),i="Note_note__1zm-A",s="Note_title__yCf6+",l="Note_desc__NzxhC",c="Note_ftr__BNTLf",d=n(80184),u=function(e){var t=e.note,n=e.setOpenViewModal,a=e.setViewNote,o=t.title,u=t.codeid,p=t.desc,h=t.username,f=t.access,m=t.editable,v=t.edited,x=t.deleted;o=o||"Title",u=u||null,p=p||"Description",m=m||!1,h=h||"guest";return(0,d.jsxs)("div",{className:i,style:(v||x)&&{cursor:"default"},onClick:function(){!u||v||x||(a(t),n(!0))},children:[v||x?(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)("div",{style:{fontSize:"2.4rem",fontWeight:700,color:"hsl(0, 60%, 50%)"},children:x?"Deleted":"Edited"}),(0,d.jsx)("div",{style:{fontSize:"0.8rem",color:"hsla(0, 40%, 50%,0.8)",margin:"unset",lineHeight:"0.9rem"},children:x?"This note has been Removed !":"An Edit has been made to this note"}),(0,d.jsxs)("div",{style:{fontSize:"0.8rem",color:"hsla(0, 40%, 50%,0.8)",margin:"unset",lineHeight:"0.9rem"},children:[(0,d.jsx)("span",{style:{zIndex:100,position:"relative",color:"blue",textDecoration:"underline",fontWeight:500,cursor:"pointer"},onClick:function(){return window.location.reload()},children:"Refresh"}),"\xa0this page to see changes !"]})]}):(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)("h4",{className:s,children:o}),(0,d.jsx)("p",{className:l,children:p})]}),(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("span",{children:h}),(0,d.jsxs)("span",{children:[f," / ",m?"editable":"read-only"]})]})]})},p="Notes_head__PxwPV",h="Notes_noteList__vMwKp",f="Notes_addNoteFab__aHO+F",m="Notes_container__5IeH0",v="Notes_ncLabel__pnmDM",x="Notes_noNote__PQsTL",g="Notes_red__HdLv9",b=n(59434),Z=n(20068),j=n(48980),y=n(49877),w=n(76189),C=(0,w.Z)((0,d.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"}),"NoteAdd"),S=n(74165),k=n(15861),N=n(4942),M=n(63366),D=n(87462),P=n(28182),T=n(94419),W=n(96248),R=n(14036),z=n(58446),E=n(60627),L=n(10703),A=n(93736),_=n(47630),O=n(21217),I=n(75878);function B(e){return(0,O.Z)("MuiDialog",e)}var V=(0,I.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]);var F=(0,r.createContext)({}),H=n(52739),U=n(13967),J=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Y=(0,_.ZP)(H.Z,{name:"MuiDialog",slot:"Backdrop",overrides:function(e,t){return t.backdrop}})({zIndex:-1}),G=(0,_.ZP)(z.Z,{name:"MuiDialog",slot:"Root",overridesResolver:function(e,t){return t.root}})({"@media print":{position:"absolute !important"}}),X=(0,_.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver:function(e,t){var n=e.ownerState;return[t.container,t["scroll".concat((0,R.Z)(n.scroll))]]}})((function(e){var t=e.ownerState;return(0,D.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===t.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===t.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),q=(0,_.ZP)(L.Z,{name:"MuiDialog",slot:"Paper",overridesResolver:function(e,t){var n=e.ownerState;return[t.paper,t["scrollPaper".concat((0,R.Z)(n.scroll))],t["paperWidth".concat((0,R.Z)(String(n.maxWidth)))],n.fullWidth&&t.paperFullWidth,n.fullScreen&&t.paperFullScreen]}})((function(e){var t=e.theme,n=e.ownerState;return(0,D.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===n.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===n.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!n.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===n.maxWidth&&(0,N.Z)({maxWidth:"px"===t.breakpoints.unit?Math.max(t.breakpoints.values.xs,444):"".concat(t.breakpoints.values.xs).concat(t.breakpoints.unit)},"&.".concat(V.paperScrollBody),(0,N.Z)({},t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})),n.maxWidth&&"xs"!==n.maxWidth&&(0,N.Z)({maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)},"&.".concat(V.paperScrollBody),(0,N.Z)({},t.breakpoints.down(t.breakpoints.values[n.maxWidth]+64),{maxWidth:"calc(100% - 64px)"})),n.fullWidth&&{width:"calc(100% - 64px)"},n.fullScreen&&(0,N.Z)({margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0},"&.".concat(V.paperScrollBody),{margin:0,maxWidth:"100%"}))})),K=r.forwardRef((function(e,t){var n=(0,A.Z)({props:e,name:"MuiDialog"}),a=(0,U.Z)(),o={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},i=n["aria-describedby"],s=n["aria-labelledby"],l=n.BackdropComponent,c=n.BackdropProps,u=n.children,p=n.className,h=n.disableEscapeKeyDown,f=void 0!==h&&h,m=n.fullScreen,v=void 0!==m&&m,x=n.fullWidth,g=void 0!==x&&x,b=n.maxWidth,Z=void 0===b?"sm":b,j=n.onBackdropClick,y=n.onClose,w=n.open,C=n.PaperComponent,S=void 0===C?L.Z:C,k=n.PaperProps,N=void 0===k?{}:k,z=n.scroll,_=void 0===z?"paper":z,O=n.TransitionComponent,I=void 0===O?E.Z:O,V=n.transitionDuration,H=void 0===V?o:V,K=n.TransitionProps,Q=(0,M.Z)(n,J),$=(0,D.Z)({},n,{disableEscapeKeyDown:f,fullScreen:v,fullWidth:g,maxWidth:Z,scroll:_}),ee=function(e){var t=e.classes,n=e.scroll,a=e.maxWidth,o=e.fullWidth,r=e.fullScreen,i={root:["root"],container:["container","scroll".concat((0,R.Z)(n))],paper:["paper","paperScroll".concat((0,R.Z)(n)),"paperWidth".concat((0,R.Z)(String(a))),o&&"paperFullWidth",r&&"paperFullScreen"]};return(0,T.Z)(i,B,t)}($),te=r.useRef(),ne=(0,W.Z)(s),ae=r.useMemo((function(){return{titleId:ne}}),[ne]);return(0,d.jsx)(G,(0,D.Z)({className:(0,P.Z)(ee.root,p),closeAfterTransition:!0,components:{Backdrop:Y},componentsProps:{backdrop:(0,D.Z)({transitionDuration:H,as:l},c)},disableEscapeKeyDown:f,onClose:y,open:w,ref:t,onClick:function(e){te.current&&(te.current=null,j&&j(e),y&&y(e,"backdropClick"))},ownerState:$},Q,{children:(0,d.jsx)(I,(0,D.Z)({appear:!0,in:w,timeout:H,role:"presentation"},K,{children:(0,d.jsx)(X,{className:(0,P.Z)(ee.container),onMouseDown:function(e){te.current=e.target===e.currentTarget},ownerState:$,children:(0,d.jsx)(q,(0,D.Z)({as:S,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":ne},N,{className:(0,P.Z)(ee.paper,N.className),ownerState:$,children:(0,d.jsx)(F.Provider,{value:ae,children:u})}))})}))}))})),Q=n(20890);function $(e){return(0,O.Z)("MuiDialogTitle",e)}var ee=(0,I.Z)("MuiDialogTitle",["root"]),te=["className","id"],ne=(0,_.ZP)(Q.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),ae=r.forwardRef((function(e,t){var n=(0,A.Z)({props:e,name:"MuiDialogTitle"}),a=n.className,o=n.id,i=(0,M.Z)(n,te),s=n,l=function(e){var t=e.classes;return(0,T.Z)({root:["root"]},$,t)}(s),c=r.useContext(F).titleId,u=void 0===c?o:c;return(0,d.jsx)(ne,(0,D.Z)({component:"h2",className:(0,P.Z)(l.root,a),ownerState:s,ref:t,variant:"h6",id:u},i))}));function oe(e){return(0,O.Z)("MuiDialogContent",e)}(0,I.Z)("MuiDialogContent",["root","dividers"]);var re=["className","dividers"],ie=(0,_.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dividers&&t.dividers]}})((function(e){var t=e.theme,n=e.ownerState;return(0,D.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},n.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((t.vars||t).palette.divider),borderBottom:"1px solid ".concat((t.vars||t).palette.divider)}:(0,N.Z)({},".".concat(ee.root," + &"),{paddingTop:0}))})),se=r.forwardRef((function(e,t){var n=(0,A.Z)({props:e,name:"MuiDialogContent"}),a=n.className,o=n.dividers,r=void 0!==o&&o,i=(0,M.Z)(n,re),s=(0,D.Z)({},n,{dividers:r}),l=function(e){var t=e.classes,n={root:["root",e.dividers&&"dividers"]};return(0,T.Z)(n,oe,t)}(s);return(0,d.jsx)(ie,(0,D.Z)({className:(0,P.Z)(l.root,a),ownerState:s,ref:t},i))})),le=n(27391),ce=n(68096),de=n(30829),ue=n(99321),pe=n(84638),he=n(85523);function fe(e){return(0,O.Z)("MuiDialogActions",e)}(0,I.Z)("MuiDialogActions",["root","spacing"]);var me=["className","disableSpacing"],ve=(0,_.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,D.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),xe=r.forwardRef((function(e,t){var n=(0,A.Z)({props:e,name:"MuiDialogActions"}),a=n.className,o=n.disableSpacing,r=void 0!==o&&o,i=(0,M.Z)(n,me),s=(0,D.Z)({},n,{disableSpacing:r}),l=function(e){var t=e.classes,n={root:["root",!e.disableSpacing&&"spacing"]};return(0,T.Z)(n,fe,t)}(s);return(0,d.jsx)(ve,(0,D.Z)({className:(0,P.Z)(l.root,a),ownerState:s,ref:t},i))})),ge=n(36151),be=n(12065),Ze=n(97278);function je(e){return(0,O.Z)("MuiSwitch",e)}var ye=(0,I.Z)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),we=["className","color","edge","size","sx"],Ce=(0,_.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.edge&&t["edge".concat((0,R.Z)(n.edge))],t["size".concat((0,R.Z)(n.size))]]}})((function(e){var t,n=e.ownerState;return(0,D.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===n.edge&&{marginLeft:-8},"end"===n.edge&&{marginRight:-8},"small"===n.size&&(t={width:40,height:24,padding:7},(0,N.Z)(t,"& .".concat(ye.thumb),{width:16,height:16}),(0,N.Z)(t,"& .".concat(ye.switchBase),(0,N.Z)({padding:4},"&.".concat(ye.checked),{transform:"translateX(16px)"})),t))})),Se=(0,_.ZP)(Ze.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var n=e.ownerState;return[t.switchBase,(0,N.Z)({},"& .".concat(ye.input),t.input),"default"!==n.color&&t["color".concat((0,R.Z)(n.color))]]}})((function(e){var t,n=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:n.vars?n.vars.palette.Switch.defaultColor:"".concat("light"===n.palette.mode?n.palette.common.white:n.palette.grey[300]),transition:n.transitions.create(["left","transform"],{duration:n.transitions.duration.shortest})},(0,N.Z)(t,"&.".concat(ye.checked),{transform:"translateX(20px)"}),(0,N.Z)(t,"&.".concat(ye.disabled),{color:n.vars?n.vars.palette.Switch.defaultDisabledColor:"".concat("light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[600])}),(0,N.Z)(t,"&.".concat(ye.checked," + .").concat(ye.track),{opacity:.5}),(0,N.Z)(t,"&.".concat(ye.disabled," + .").concat(ye.track),{opacity:n.vars?n.vars.opacity.switchTrackDisabled:"".concat("light"===n.palette.mode?.12:.2)}),(0,N.Z)(t,"& .".concat(ye.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,n=e.theme,a=e.ownerState;return(0,D.Z)({"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.action.activeChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,be.Fq)(n.palette.action.active,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(t={},(0,N.Z)(t,"&.".concat(ye.checked),(0,N.Z)({color:(n.vars||n).palette[a.color].main,"&:hover":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[a.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,be.Fq)(n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(ye.disabled),{color:n.vars?n.vars.palette.Switch["".concat(a.color,"DisabledColor")]:"".concat("light"===n.palette.mode?(0,be.$n)(n.palette[a.color].main,.62):(0,be._j)(n.palette[a.color].main,.55))})),(0,N.Z)(t,"&.".concat(ye.checked," + .").concat(ye.track),{backgroundColor:(n.vars||n).palette[a.color].main}),t))})),ke=(0,_.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),Ne=(0,_.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),Me=r.forwardRef((function(e,t){var n=(0,A.Z)({props:e,name:"MuiSwitch"}),a=n.className,o=n.color,r=void 0===o?"primary":o,i=n.edge,s=void 0!==i&&i,l=n.size,c=void 0===l?"medium":l,u=n.sx,p=(0,M.Z)(n,we),h=(0,D.Z)({},n,{color:r,edge:s,size:c}),f=function(e){var t=e.classes,n=e.edge,a=e.size,o=e.color,r=e.checked,i=e.disabled,s={root:["root",n&&"edge".concat((0,R.Z)(n)),"size".concat((0,R.Z)(a))],switchBase:["switchBase","color".concat((0,R.Z)(o)),r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,T.Z)(s,je,t);return(0,D.Z)({},t,l)}(h),m=(0,d.jsx)(Ne,{className:f.thumb,ownerState:h});return(0,d.jsxs)(Ce,{className:(0,P.Z)(f.root,a),sx:u,ownerState:h,children:[(0,d.jsx)(Se,(0,D.Z)({type:"checkbox",icon:m,checkedIcon:m,ref:t,ownerState:h},p,{classes:(0,D.Z)({},f,{root:f.switchBase})})),(0,d.jsx)(ke,{className:f.track,ownerState:h})]})})),De=n(52791),Pe=n(33449),Te=n(88446),We=n(14277),Re=(0,_.ZP)(Me)((function(e){var t=e.theme;return{padding:8,"& .MuiSwitch-track":{borderRadius:11,"&:before, &:after":{content:'""',position:"absolute",top:"50%",transform:"translateY(-50%)",width:16,height:16},"&:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="'.concat(encodeURIComponent(t.palette.getContrastText(t.palette.primary.main)),'" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>\')'),left:12},"&:after":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="'.concat(encodeURIComponent(t.palette.getContrastText(t.palette.primary.main)),'" d="M19,13H5V11H19V13Z" /></svg>\')'),right:12}},"& .MuiSwitch-thumb":{boxShadow:"none",width:16,height:16,margin:2}}})),ze=function(e){var t=e.openModal,n=e.setOpenModal,a=e.isMobile,i=e.setReloadNeeded,s=(0,b.v9)((function(e){return e.auth})),l=s.username,c=s.isAdmin,p=(0,r.useState)(""),h=(0,o.Z)(p,2),f=h[0],m=h[1],v=(0,r.useState)(""),x=(0,o.Z)(v,2),g=x[0],Z=x[1],j=(0,r.useState)("public"),y=(0,o.Z)(j,2),w=y[0],C=y[1],N=(0,r.useState)(!1),M=(0,o.Z)(N,2),D=M[0],P=M[1],T=(0,r.useState)(""),W=(0,o.Z)(T,2),R=W[0],z=W[1],E=(0,r.useState)("c"),L=(0,o.Z)(E,2),A=L[0],_=L[1],O=(0,b.I0)(),I=function(){m(""),Z(""),C("public"),P(!1),z(""),n(!1)},B=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(t){var e=B.current;null!==e&&e.focus()}}),[t]),(0,d.jsxs)(K,{open:t,onClose:function(){return n(!1)},scroll:"paper","aria-labelledby":"Add-Note",fullWidth:!0,maxWidth:!a&&"sm",fullScreen:a,children:[(0,d.jsx)(ae,{style:{textTransform:"capitalize"},children:"Add Note"}),(0,d.jsxs)(se,{dividers:!0,ref:B,children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"relative"},children:[(0,d.jsx)("span",{style:{position:"absolute",top:"-0.8rem",left:"0",fontWeight:600,opacity:.6},children:"Preview :"}),(0,d.jsx)(u,{note:{title:f,desc:g,access:w,editable:D,username:l}})]}),(0,d.jsxs)(De.Z,{component:"form",sx:{"& .MuiTextField-root":{mb:1.3,width:"85%"}},noValidate:!0,autoComplete:"off",children:[(0,d.jsx)(le.Z,{required:!0,id:"title-textarea",label:"Title",placeholder:"Write max 20 characters",value:f,onChange:function(e){return m(e.target.value)}}),(0,d.jsx)(le.Z,{id:"desc-textarea",label:"Description",placeholder:"Write max 200 characters",multiline:!0,value:g,onChange:function(e){return Z(e.target.value)}}),(0,d.jsxs)(ce.Z,{sx:{width:"85%"},children:[(0,d.jsx)(de.Z,{id:"access-input-label",children:"Access"}),(0,d.jsxs)(ue.Z,{labelId:"access-input-label",id:"access-input",label:"Access",value:w,onChange:function(e){return C(e.target.value)},children:[c&&(0,d.jsx)(pe.Z,{value:"global",children:"Global"}),(0,d.jsx)(pe.Z,{value:"public",children:"Public"}),"guest"!==l&&(0,d.jsx)(pe.Z,{value:"private",children:"Private"})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(he.Z,{label:"Editable (By Anyone)",control:(0,d.jsx)(Re,{checked:D,onChange:function(e){return P(e.target.checked)}}),labelPlacement:"start"}),(0,d.jsxs)("span",{style:{marginLeft:"0.9rem",fontWeight:600,opacity:.6},children:[D?"Yes":"No"," "]})]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between"},children:[(0,d.jsx)("div",{style:{fontWeight:600,fontSize:"1.1rem",opacity:.7},children:"Enter Code : "}),(0,d.jsxs)(ce.Z,{children:[(0,d.jsx)(de.Z,{id:"changeLang-select-label",children:"Language"}),(0,d.jsxs)(ue.Z,{labelId:"changeLang-select-label",id:"changeLang-select",value:A,label:"Language",style:{width:"8em",height:"2.5em"},onChange:function(e){return _(e.target.value)},children:[(0,d.jsx)(pe.Z,{value:"c",children:"C"}),(0,d.jsx)(pe.Z,{value:"cpp",children:"Cpp"}),(0,d.jsx)(pe.Z,{value:"py",children:"Python"}),(0,d.jsx)(pe.Z,{value:"java",children:"JAVA"}),(0,d.jsx)(pe.Z,{value:"js",children:"JS"})]})]})]}),(0,d.jsx)(Pe.Z,{code:R,setCode:z,language:A,fontSize:13})]})]}),(0,d.jsxs)(xe,{children:[(0,d.jsx)(ge.Z,{onClick:function(){f&&g?(I(),O(We.o.set({type:"info",message:"Adding New Note..."})),fetch("".concat(Te.p,"/api/notes"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({title:f,desc:g,code:R,language:A,access:w,editable:D}),credentials:"include"}).then(function(){var e=(0,k.Z)((0,S.Z)().mark((function e(t){var n;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",Promise.reject(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){O(We.o.set({type:"success",message:"Added Note Successfully !",description:JSON.stringify(e)})),i(!0)})).catch((function(e){console.error(e),O(We.o.set({type:"error",message:"Adding Note Unsuccessful!",description:JSON.stringify(e)}))}))):O(We.o.set({type:"error",message:"title and description can't be empty",description:"title and description are required so please fill both !!!"}))},children:"Add"}),(0,d.jsx)(ge.Z,{onClick:I,children:"Cancel"})]})]})},Ee=n(13400);function Le(e){return(0,O.Z)("MuiDialogContentText",e)}(0,I.Z)("MuiDialogContentText",["root"]);var Ae=["children"],_e=(0,_.ZP)(Q.Z,{shouldForwardProp:function(e){return(0,_.FO)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Oe=r.forwardRef((function(e,t){var n=(0,A.Z)({props:e,name:"MuiDialogContentText"}),a=(0,M.Z)(n,Ae),o=function(e){var t=e.classes,n=(0,T.Z)({root:["root"]},Le,t);return(0,D.Z)({},t,n)}(a);return(0,d.jsx)(_e,(0,D.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:a},n,{classes:o}))})),Ie=(0,w.Z)((0,d.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit"),Be=(0,w.Z)((0,d.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),Ve=n(40318),Fe=n(35759),He=n(76998),Ue=n.n(He),Je=function(e){var t=e.open,n=e.setOpen,a=e.handleDeleteOperation,o=function(){n(!1)};return(0,d.jsxs)(K,{open:t,onClose:o,"aria-labelledby":"alert-dialog-delete-note",TransitionComponent:E.Z,children:[(0,d.jsx)(ae,{children:"Delete Note"}),(0,d.jsx)(se,{children:(0,d.jsxs)(Oe,{children:["Are you sure you want to delete this note ?",(0,d.jsx)("br",{}),"(Once Note is Delete can't be recovered !)"]})}),(0,d.jsxs)(xe,{children:[(0,d.jsx)(ge.Z,{onClick:a,children:"Delete"}),(0,d.jsx)(ge.Z,{onClick:o,autoFocus:!0,children:"Cancel"})]})]})},Ye=function(e){var t=e.openModal,n=e.setOpenModal,i=e.viewNote,s=e.setEditNote,l=e.setOpenEditModal,c=e.isMobile,p=e.markEditOrDelete,h=e.setReloadNeeded,f=i.username,m=i.title,v=i.desc,x=i.access,g=i.editable,w=i.codeid,C=i._id,N=(0,b.I0)(),M=(0,b.v9)((function(e){return e.auth})),D=M.username,P=M.isAdmin,T=(0,r.useState)(""),W=(0,o.Z)(T,2),R=W[0],z=W[1],E=(0,r.useState)("c"),L=(0,o.Z)(E,2),A=L[0],_=L[1],O=(0,r.useState)(!1),I=(0,o.Z)(O,2),B=I[0],V=I[1],F=(0,r.useState)(!1),H=(0,o.Z)(F,2),U=H[0],J=H[1];!0===U&&setTimeout((function(){return J(!1)}),2500);var Y=(0,r.useRef)(null);(0,r.useEffect)((function(){if(t){var e=Y.current;null!==e&&e.focus()}}),[t]);var G=(0,r.useState)(!0),X=(0,o.Z)(G,2),q=X[0],Q=X[1];(0,r.useEffect)((function(){w&&fetch("".concat(Te.p,"/api/notes/").concat(w),{headers:{"Content-Type":"application/json"},method:"GET",credentials:"include"}).then(function(){var e=(0,k.Z)((0,S.Z)().mark((function e(t){var n;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",Promise.reject(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){z(e.code),_(e.language)})).catch((function(e){z(JSON.stringify(e))})).finally((function(){return Q(!1)}))}),[w]);var $=!g&&!P&&D!==f,ee=!P&&D!==f;return(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)(Je,{open:B,setOpen:V,handleDeleteOperation:function(){V(!1),n(!1),fetch("".concat(Te.p,"/api/notes/").concat(C),{headers:{"Content-Type":"application/json"},method:"DELETE",credentials:"include"}).then(function(){var e=(0,k.Z)((0,S.Z)().mark((function e(t){var n;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(n=e.sent,!t.ok){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",Promise.reject(n));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){N(We.o.set({type:"success",message:"Deleted Note Successfully !",description:JSON.stringify(e)})),p(C,"deleted"),h(!0)})).catch((function(e){console.error(e),N(We.o.set({type:"error",message:"Deleting Note Unsuccessful!",description:JSON.stringify(e)}))}))}}),(0,d.jsxs)(K,{open:t,onClose:function(){return n(!1)},scroll:"paper","aria-labelledby":"View-Note",fullWidth:!0,maxWidth:!c&&"md",fullScreen:c,TransitionComponent:j.Z,children:[(0,d.jsx)(ae,{style:{textTransform:"capitalize"},children:(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsx)("span",{children:"View Note"}),(0,d.jsxs)("div",{style:{display:"flex"},children:[(0,d.jsx)(Z.Z,{TransitionComponent:j.Z,title:$?"Can't edit this note":"Edit",placement:"bottom",children:(0,d.jsx)(De.Z,{children:(0,d.jsx)(y.Z,{onClick:function(){s((0,a.Z)((0,a.Z)({},i),{},{code:R})),l(!0),n(!1)},size:"small",color:"info","aria-label":"edit",disabled:$,children:(0,d.jsx)(Ie,{})})})}),(0,d.jsx)(Z.Z,{TransitionComponent:j.Z,title:ee?"Can't delete this note":"Delete",placement:"bottom",children:(0,d.jsx)(De.Z,{children:(0,d.jsx)(y.Z,{onClick:function(){return V(!0)},size:"small",color:"warning","aria-label":"delete",sx:{ml:1},disabled:ee,children:(0,d.jsx)(Be,{})})})})]})]})}),(0,d.jsxs)(se,{dividers:!0,ref:Y,children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"relative"},children:[(0,d.jsx)("span",{style:{position:"absolute",top:"-0.8rem",left:"0",fontWeight:600,opacity:.6},children:"Preview :"}),(0,d.jsx)(u,{note:{title:m,desc:v,access:x,editable:g,username:f}})]}),(0,d.jsxs)(De.Z,{component:"form",sx:{"& .MuiTextField-root":{mb:1.3,width:"85%"}},noValidate:!0,autoComplete:"off",children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between"},children:[(0,d.jsx)("div",{children:(0,d.jsx)(Z.Z,{TransitionComponent:j.Z,title:U?"Copied":"Copy",placement:"right",children:(0,d.jsx)(Ee.Z,{onClick:function(){var e=Ue()(R),t=e?"success":"error",n=e?"Code copied successfully !":"There are some errors copying the code !";N(We.o.set({type:t,message:n})),J(!0)},"aria-label":U?"Copied":"Copy",children:U?(0,d.jsx)(Ve.Z,{}):(0,d.jsx)(Fe.Z,{})})})}),(0,d.jsxs)("div",{style:{fontWeight:600,fontSize:"1.1rem",opacity:.7},children:["Language : ",q?"...":A]})]}),(0,d.jsx)(Pe.Z,{code:R,setCode:z,language:A,fontSize:15,isReadOnly:!0,isLoading:q})]})]}),(0,d.jsx)(xe,{children:(0,d.jsx)(ge.Z,{onClick:function(){n(!1)},children:"Cancel"})})]})]})},Ge=(0,_.ZP)(Me)((function(e){var t=e.theme;return{padding:8,"& .MuiSwitch-track":{borderRadius:11,"&:before, &:after":{content:'""',position:"absolute",top:"50%",transform:"translateY(-50%)",width:16,height:16},"&:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="'.concat(encodeURIComponent(t.palette.getContrastText(t.palette.primary.main)),'" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>\')'),left:12},"&:after":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="'.concat(encodeURIComponent(t.palette.getContrastText(t.palette.primary.main)),'" d="M19,13H5V11H19V13Z" /></svg>\')'),right:12}},"& .MuiSwitch-thumb":{boxShadow:"none",width:16,height:16,margin:2}}})),Xe=function(e){var t=e.openModal,n=e.setOpenModal,a=e.editNote,i=e.isMobile,s=e.markEditOrDelete,l=e.setReloadNeeded,c=a.username,p=a.title,h=a.desc,f=a.access,m=a.editable,v=a.code,x=a.language,g=a._id,Z=(0,b.I0)(),j=(0,b.v9)((function(e){return e.auth})),y=j.username,w=j.isAdmin,C=(0,r.useState)(""),S=(0,o.Z)(C,2),k=S[0],N=S[1],M=(0,r.useState)(""),D=(0,o.Z)(M,2),P=D[0],T=D[1],W=(0,r.useState)("public"),R=(0,o.Z)(W,2),z=R[0],E=R[1],L=(0,r.useState)(!1),A=(0,o.Z)(L,2),_=A[0],O=A[1],I=(0,r.useState)("cpp"),B=(0,o.Z)(I,2),V=B[0],F=B[1],H=(0,r.useState)(""),U=(0,o.Z)(H,2),J=U[0],Y=U[1];(0,r.useEffect)((function(){p&&Z(We.o.set({type:"warning",message:"Edit feature is not available yet",description:"website is stil in development this feature will be available soon !"})),p&&N(p),h&&T(h),f&&E(f),m&&O(m),x&&F(x),v&&Y(v)}),[p,h,f,m,x,v,Z]);var G=function(){n(!1)},X=(0,r.useRef)(null);return(0,r.useEffect)((function(){if(t){var e=X.current;null!==e&&e.focus()}}),[t]),(0,d.jsxs)(K,{open:t,onClose:function(){return n(!1)},scroll:"paper","aria-labelledby":"Edit-Note",fullWidth:!0,maxWidth:!i&&"sm",fullScreen:i,children:[(0,d.jsx)(ae,{style:{textTransform:"capitalize"},children:"Edit Note"}),(0,d.jsxs)(se,{dividers:!0,ref:X,children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"relative"},children:[(0,d.jsx)("span",{style:{position:"absolute",top:"-0.8rem",left:"0",fontWeight:600,opacity:.6},children:"Preview :"}),(0,d.jsx)(u,{note:{title:k,desc:P,access:z,editable:_,username:c}})]}),(0,d.jsxs)(De.Z,{component:"form",sx:{"& .MuiTextField-root":{mb:1.3,width:"85%"}},noValidate:!0,autoComplete:"off",children:[(0,d.jsx)(le.Z,{required:!0,id:"title-textarea",label:"Title",placeholder:"Write max 20 characters",value:k,onChange:function(e){return N(e.target.value)}}),(0,d.jsx)(le.Z,{id:"desc-textarea",label:"Description",placeholder:"Write max 200 characters",multiline:!0,value:P,onChange:function(e){return T(e.target.value)}}),(w||y===c)&&(0,d.jsxs)(ce.Z,{sx:{width:"85%"},children:[(0,d.jsx)(de.Z,{id:"access-input-label",children:"Access"}),(0,d.jsxs)(ue.Z,{labelId:"access-input-label",id:"access-input",label:"Access",value:z,onChange:function(e){return E(e.target.value)},children:[w&&(0,d.jsx)(pe.Z,{value:"global",children:"Global"}),(0,d.jsx)(pe.Z,{value:"public",children:"Public"}),"guest"!==y&&(0,d.jsx)(pe.Z,{value:"private",children:"Private"})]})]}),(0,d.jsx)(he.Z,{label:"Editable (By Anyone)",control:(0,d.jsx)(Ge,{checked:_,onChange:function(e){return O(e.target.checked)}}),labelPlacement:"start"}),(0,d.jsxs)("span",{style:{marginLeft:"0.9rem",fontWeight:600,opacity:.6},children:[_?"Yes":"No"," "]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between"},children:[(0,d.jsx)("div",{style:{fontWeight:600,fontSize:"1.1rem",opacity:.7},children:"Enter Code : "}),(0,d.jsxs)(ce.Z,{children:[(0,d.jsx)(de.Z,{id:"changeLang-select-label",children:"Language"}),(0,d.jsxs)(ue.Z,{labelId:"changeLang-select-label",id:"changeLang-select",value:V,label:"Language",style:{width:"8em",height:"2.5em"},onChange:function(e){return F(e.target.value)},children:[(0,d.jsx)(pe.Z,{value:"c",children:"C"}),(0,d.jsx)(pe.Z,{value:"cpp",children:"Cpp"}),(0,d.jsx)(pe.Z,{value:"py",children:"Python"}),(0,d.jsx)(pe.Z,{value:"java",children:"JAVA"}),(0,d.jsx)(pe.Z,{value:"js",children:"JS"})]})]})]}),(0,d.jsx)(Pe.Z,{code:J,setCode:Y,language:V,fontSize:13})]})]}),(0,d.jsxs)(xe,{children:[(0,d.jsx)(ge.Z,{onClick:function(){G(),Z(We.o.set({type:"info",message:"Edit feature is not available yet",description:"website is stil in development this feature will be available soon !"})),s(g,"edited"),l(!0)},children:"Save"}),(0,d.jsx)(ge.Z,{onClick:G,children:"Cancel"})]})]})},qe=n(95193),Ke=n(7091),Qe=function(){var e=(0,r.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],s=(0,r.useState)(!1),l=(0,o.Z)(s,2),c=l[0],w=l[1],S=(0,r.useState)(!1),k=(0,o.Z)(S,2),N=k[0],M=k[1],D=(0,r.useState)(!1),P=(0,o.Z)(D,2),T=P[0],W=P[1],R=(0,r.useState)({}),z=(0,o.Z)(R,2),E=z[0],L=z[1],A=(0,r.useState)(!1),_=(0,o.Z)(A,2),O=_[0],I=_[1],B=(0,r.useState)({}),V=(0,o.Z)(B,2),F=V[0],H=V[1],U=(0,qe.Z)("(max-width:620px)"),J=(0,b.v9)((function(e){return e.auth})),Y=J.loggedIn,G=J.username,X=(0,r.useState)(!0),q=(0,o.Z)(X,2),K=q[0],Q=q[1],$=(0,r.useState)(void 0),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],ae=function(e,t){i((function(n){return n.map((function(n){if(n._id===e){var o=(0,a.Z)({},n);return o[t]=!0,o}return n}))}))};(0,r.useEffect)((function(){fetch("".concat(Te.p,"/api/notes/allNotes"),{headers:{"Content-Type":"application/json"},method:"GET",credentials:"include"}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){return i(e)})).catch(ne).finally((function(){return Q(!1)}))}),[]);var oe=function(){return M(!0)};return(0,d.jsxs)(r.Fragment,{children:[K&&(0,d.jsx)(Ke.Z,{}),!K&&te&&(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"errorTemplate",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Msg : "}),"Wasn't able to connect to server check if your are not offline or server might not be working !"]}),te&&(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"Error : "}),JSON.stringify(te)]})]})}),!te&&(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)(ze,{setReloadNeeded:w,isMobile:U,openModal:N,setOpenModal:M}),(0,d.jsx)(Ye,{setReloadNeeded:w,markEditOrDelete:ae,isMobile:U,openModal:T,setOpenModal:W,setEditNote:H,setOpenEditModal:I,viewNote:E}),(0,d.jsx)(Xe,{setReloadNeeded:w,markEditOrDelete:ae,isMobile:U,openModal:O,setOpenModal:I,editNote:F}),(0,d.jsx)(Z.Z,{TransitionComponent:j.Z,title:"Add Note",placement:"bottom",children:(0,d.jsx)(y.Z,{onClick:oe,className:f,"aria-label":"add-note",children:(0,d.jsx)(C,{sx:{fontSize:"1.8rem"}})})}),(0,d.jsx)("div",{className:p,children:"Notes"}),c&&(0,d.jsxs)("div",{style:{fontSize:"0.8rem",color:"hsla(0, 40%, 50%,0.8)",margin:"unset",position:"absolute",top:"2.6rem"},children:[(0,d.jsx)("span",{onClick:function(){return window.location.reload()},style:{zIndex:100,position:"relative",color:"blue",textDecoration:"underline",fontWeight:500,cursor:"pointer"},children:"Refresh"})," this page to see changes !"]}),!K&&(0,d.jsxs)(r.Fragment,{children:[(0,d.jsx)("div",{className:v,children:(0,d.jsx)("span",{children:"Global Notes by Admin"})}),(0,d.jsx)("div",{className:h,children:n.filter((function(e){return"global"===e.access})).map((function(e){return(0,d.jsx)(u,{note:e,setViewNote:L,setOpenViewModal:W},e._id)}))}),(0,d.jsx)("div",{className:v,children:(0,d.jsx)("span",{children:"Public Notes by Users/Guest"})}),(0,d.jsx)("div",{className:h,children:n.filter((function(e){return"public"===e.access})).map((function(e){return(0,d.jsx)(u,{note:e,setViewNote:L,setOpenViewModal:W},e._id)}))}),(0,d.jsx)("div",{className:v,children:Y?(0,d.jsxs)("span",{children:["Private Notes by ",G]}):(0,d.jsx)("span",{className:g,children:"To see Private Notes you must be Logged In !"})}),Y?(0,d.jsx)("div",{className:h,children:0===n.filter((function(e){return"private"===e.access})).length?(0,d.jsxs)("span",{className:g+" "+x,children:["You have not created any Private Note, ",(0,d.jsx)("button",{onClick:oe,children:"Make One"})]}):n.filter((function(e){return"private"===e.access})).map((function(e){return(0,d.jsx)(u,{note:e,setViewNote:L,setOpenViewModal:W},e._id)}))}):""]})]})]})}},33449:function(e,t,n){"use strict";var a=n(72791),o=n(38399),r=(n(25351),n(56339),n(25502),n(90262),n(73905),n(41941),n(30027),n(80184));t.Z=function(e){var t=e.code,n=e.setCode,i=e.language,s=e.fontSize,l=e.isReadOnly,c=void 0!==l&&l,d=e.isLoading,u=void 0!==d&&d,p="c_cpp";switch(i){case"cpp":default:p="c_cpp";break;case"java":p="java";break;case"py":p="python";break;case"js":p="javascript"}return(0,r.jsxs)(a.Fragment,{children:[u&&(0,r.jsxs)("div",{style:{position:"absolute",zIndex:10,display:"flex",alignItems:"center",pointerEvents:"none",translate:"0 1rem"},children:[(0,r.jsx)("div",{className:"spin"}),(0,r.jsx)("span",{style:{fontSize:"1.8rem",color:"rgba(128, 128, 128, 0.8)",fontWeight:500,marginLeft:"1rem"},children:"Loading Code..."})]}),(0,r.jsx)(o.ZP,{placeholder:"Enter your code here",mode:p,theme:"monokai",name:"editorv3",onLoad:function(){},onChange:function(e){return n(e)},fontSize:parseInt(s),showPrintMargin:!1,showGutter:!0,readOnly:c,highlightActiveLine:!0,value:t,width:"100%",setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!1,showLineNumbers:!0,tabSize:4}})]})}},40318:function(e,t,n){"use strict";var a=n(76189),o=n(80184);t.Z=(0,a.Z)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},35759:function(e,t,n){"use strict";var a=n(76189),o=n(80184);t.Z=(0,a.Z)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy")},76998:function(e,t,n){"use strict";var a=n(42458),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,r,i,s,l,c,d=!1;t||(t={}),n=t.debug||!1;try{if(i=a(),s=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(c),s.selectNodeContents(c),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(u){n&&console.error("unable to copy using execCommand: ",u),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(u){n&&console.error("unable to copy using clipboardData: ",u),n&&console.error("falling back to prompt"),r=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(r,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}},42458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=361.36486358.chunk.js.map
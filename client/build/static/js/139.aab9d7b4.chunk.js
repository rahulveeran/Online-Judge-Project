"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[139],{10139:function(e,r,a){a.r(r),a.d(r,{default:function(){return Ne}});var o=a(70885),n=a(72791),t=a(20501),i=a(16871),l=a(59434),s="Customform_bgImg__Ddjvo",d="Customform_Auth-form-container__m-f+Z",c="Customform_Auth-form__saddl",u="Customform_Auth-form-content__-xpDf",m="Customform_Auth-form-title__iOTCc",h="Customform_errormsg__lAE9B",p="Customform_validError__tA1du",v={value:"",isTouched:!1},f=function e(r,a){return"INPUT"===a.type?{value:a.value,isTouched:r.isTouched}:"BLUR"===a.type?{isTouched:!0,value:r.value}:"RESET"===a.type?{isTouched:!1,value:""}:e},g=function(e){var r=(0,n.useReducer)(f,v),a=(0,o.Z)(r,2),t=a[0],i=a[1],l=e(t.value),s=!l&&t.isTouched,d=(0,n.useCallback)((function(){i({type:"RESET"})}),[]);return{value:t.value,isValid:l,hasError:s,valueChangeHandler:function(e){i({type:"INPUT",value:e.target.value})},inputBlurHandler:function(e){i({type:"BLUR"})},reset:d}},x=a(87462),Z=a(63366),b=a(28182),C=a(94419),j=a(96248),w=a(47630),y=a(93736),S=a(37078),R=a(14527),N=a(28029),T=a(30829),k=a(68096),P=a(4942),z=a(76147),E=a(52930),F=a(14036),q=a(21217),B=a(75878);function _(e){return(0,q.Z)("MuiFormHelperText",e)}var H,I=(0,B.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),M=a(80184),U=["children","className","component","disabled","error","filled","focused","margin","required","variant"],V=(0,w.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,a.size&&r["size".concat((0,F.Z)(a.size))],a.contained&&r.contained,a.filled&&r.filled]}})((function(e){var r,a=e.theme,o=e.ownerState;return(0,x.Z)({color:(a.vars||a).palette.text.secondary},a.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,P.Z)(r,"&.".concat(I.disabled),{color:(a.vars||a).palette.text.disabled}),(0,P.Z)(r,"&.".concat(I.error),{color:(a.vars||a).palette.error.main}),r),"small"===o.size&&{marginTop:4},o.contained&&{marginLeft:14,marginRight:14})})),L=n.forwardRef((function(e,r){var a=(0,y.Z)({props:e,name:"MuiFormHelperText"}),o=a.children,n=a.className,t=a.component,i=void 0===t?"p":t,l=(0,Z.Z)(a,U),s=(0,E.Z)(),d=(0,z.Z)({props:a,muiFormControl:s,states:["variant","size","disabled","error","filled","focused","required"]}),c=(0,x.Z)({},a,{component:i,contained:"filled"===d.variant||"outlined"===d.variant,variant:d.variant,size:d.size,disabled:d.disabled,error:d.error,filled:d.filled,focused:d.focused,required:d.required}),u=function(e){var r=e.classes,a=e.contained,o=e.size,n=e.disabled,t=e.error,i=e.filled,l=e.focused,s=e.required,d={root:["root",n&&"disabled",t&&"error",o&&"size".concat((0,F.Z)(o)),a&&"contained",l&&"focused",i&&"filled",s&&"required"]};return(0,C.Z)(d,_,r)}(c);return(0,M.jsx)(V,(0,x.Z)({as:i,ownerState:c,className:(0,b.Z)(u.root,n),ref:r},l,{children:" "===o?H||(H=(0,M.jsx)("span",{className:"notranslate",children:"\u200b"})):o}))})),A=a(99321);function O(e){return(0,q.Z)("MuiTextField",e)}(0,B.Z)("MuiTextField",["root"]);var W=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],D={standard:S.Z,filled:R.Z,outlined:N.Z},Y=(0,w.ZP)(k.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),G=n.forwardRef((function(e,r){var a=(0,y.Z)({props:e,name:"MuiTextField"}),o=a.autoComplete,n=a.autoFocus,t=void 0!==n&&n,i=a.children,l=a.className,s=a.color,d=void 0===s?"primary":s,c=a.defaultValue,u=a.disabled,m=void 0!==u&&u,h=a.error,p=void 0!==h&&h,v=a.FormHelperTextProps,f=a.fullWidth,g=void 0!==f&&f,w=a.helperText,S=a.id,R=a.InputLabelProps,N=a.inputProps,k=a.InputProps,P=a.inputRef,z=a.label,E=a.maxRows,F=a.minRows,q=a.multiline,B=void 0!==q&&q,_=a.name,H=a.onBlur,I=a.onChange,U=a.onFocus,V=a.placeholder,G=a.required,$=void 0!==G&&G,J=a.rows,K=a.select,Q=void 0!==K&&K,X=a.SelectProps,ee=a.type,re=a.value,ae=a.variant,oe=void 0===ae?"outlined":ae,ne=(0,Z.Z)(a,W),te=(0,x.Z)({},a,{autoFocus:t,color:d,disabled:m,error:p,fullWidth:g,multiline:B,required:$,select:Q,variant:oe}),ie=function(e){var r=e.classes;return(0,C.Z)({root:["root"]},O,r)}(te);var le={};"outlined"===oe&&(R&&"undefined"!==typeof R.shrink&&(le.notched=R.shrink),le.label=z),Q&&(X&&X.native||(le.id=void 0),le["aria-describedby"]=void 0);var se=(0,j.Z)(S),de=w&&se?"".concat(se,"-helper-text"):void 0,ce=z&&se?"".concat(se,"-label"):void 0,ue=D[oe],me=(0,M.jsx)(ue,(0,x.Z)({"aria-describedby":de,autoComplete:o,autoFocus:t,defaultValue:c,fullWidth:g,multiline:B,name:_,rows:J,maxRows:E,minRows:F,type:ee,value:re,id:se,inputRef:P,onBlur:H,onChange:I,onFocus:U,placeholder:V,inputProps:N},le,k));return(0,M.jsxs)(Y,(0,x.Z)({className:(0,b.Z)(ie.root,l),disabled:m,error:p,fullWidth:g,ref:r,required:$,color:d,variant:oe,ownerState:te},ne,{children:[null!=z&&""!==z&&(0,M.jsx)(T.Z,(0,x.Z)({htmlFor:se,id:ce},R,{children:z})),Q?(0,M.jsx)(A.Z,(0,x.Z)({"aria-describedby":de,id:se,labelId:ce,value:re,input:me},X,{children:i})):me,w&&(0,M.jsx)(L,(0,x.Z)({id:de},v,{children:w}))]}))})),$=a(36151),J=a(21593),K=a(21156),Q=a(79012),X=a(42071),ee=a(98278);var re=n.createContext(void 0),ae=a(67384),oe=["actions","children","defaultValue","name","onChange","value"],ne=n.forwardRef((function(e,r){var a=e.actions,t=e.children,i=e.defaultValue,l=e.name,s=e.onChange,d=e.value,c=(0,Z.Z)(e,oe),u=n.useRef(null),m=(0,ee.Z)({controlled:d,default:i,name:"RadioGroup"}),h=(0,o.Z)(m,2),p=h[0],v=h[1];n.useImperativeHandle(a,(function(){return{focus:function(){var e=u.current.querySelector("input:not(:disabled):checked");e||(e=u.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var f=(0,X.Z)(r,u),g=(0,ae.Z)(l);return(0,M.jsx)(re.Provider,{value:{name:g,onChange:function(e){v(e.target.value),s&&s(e,e.target.value)},value:p},children:(0,M.jsx)(Q.Z,(0,x.Z)({role:"radiogroup",ref:f},c,{children:t}))})})),te=a(12065),ie=a(97278),le=a(76189),se=(0,le.Z)((0,M.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),de=(0,le.Z)((0,M.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),ce=(0,w.ZP)("span")({position:"relative",display:"flex"}),ue=(0,w.ZP)(se)({transform:"scale(1)"}),me=(0,w.ZP)(de)((function(e){var r=e.theme,a=e.ownerState;return(0,x.Z)({left:0,position:"absolute",transform:"scale(0)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeIn,duration:r.transitions.duration.shortest})},a.checked&&{transform:"scale(1)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.shortest})})}));var he=function(e){var r=e.checked,a=void 0!==r&&r,o=e.classes,n=void 0===o?{}:o,t=e.fontSize,i=(0,x.Z)({},e,{checked:a});return(0,M.jsxs)(ce,{className:n.root,ownerState:i,children:[(0,M.jsx)(ue,{fontSize:t,className:n.background,ownerState:i}),(0,M.jsx)(me,{fontSize:t,className:n.dot,ownerState:i})]})},pe=a(31260);function ve(e){return(0,q.Z)("MuiRadio",e)}var fe=(0,B.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),ge=["checked","checkedIcon","color","icon","name","onChange","size"],xe=(0,w.ZP)(ie.Z,{shouldForwardProp:function(e){return(0,w.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,r["color".concat((0,F.Z)(a.color))]]}})((function(e){var r=e.theme,a=e.ownerState;return(0,x.Z)({color:(r.vars||r).palette.text.secondary,"&:hover":{backgroundColor:r.vars?"rgba(".concat("default"===a.color?r.vars.palette.action.activeChannel:r.vars.palette[a.color].mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,te.Fq)("default"===a.color?r.palette.action.active:r.palette[a.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(0,P.Z)({},"&.".concat(fe.checked),{color:(r.vars||r).palette[a.color].main}),(0,P.Z)({},"&.".concat(fe.disabled),{color:(r.vars||r).palette.action.disabled}))}));var Ze=(0,M.jsx)(he,{checked:!0}),be=(0,M.jsx)(he,{}),Ce=n.forwardRef((function(e,r){var a,o,t,i,l=(0,y.Z)({props:e,name:"MuiRadio"}),s=l.checked,d=l.checkedIcon,c=void 0===d?Ze:d,u=l.color,m=void 0===u?"primary":u,h=l.icon,p=void 0===h?be:h,v=l.name,f=l.onChange,g=l.size,b=void 0===g?"medium":g,j=(0,Z.Z)(l,ge),w=(0,x.Z)({},l,{color:m,size:b}),S=function(e){var r=e.classes,a=e.color,o={root:["root","color".concat((0,F.Z)(a))]};return(0,x.Z)({},r,(0,C.Z)(o,ve,r))}(w),R=n.useContext(re),N=s,T=(0,pe.Z)(f,R&&R.onChange),k=v;return R&&("undefined"===typeof N&&(t=R.value,N="object"===typeof(i=l.value)&&null!==i?t===i:String(t)===String(i)),"undefined"===typeof k&&(k=R.name)),(0,M.jsx)(xe,(0,x.Z)({type:"radio",icon:n.cloneElement(p,{fontSize:null!=(a=be.props.fontSize)?a:b}),checkedIcon:n.cloneElement(c,{fontSize:null!=(o=Ze.props.fontSize)?o:b}),ownerState:w,classes:S,name:k,checked:N,onChange:T,ref:r},j))})),je=a(20068),we=a(48980),ye=a(17133),Se=a(85523),Re=a(95193),Ne=function(e){var r=e.pageType,a=(0,Re.Z)("(max-width:1000px)"),v="right",f=(0,l.I0)(),x=(0,i.s0)(),Z=(0,l.v9)((function(e){return e.auth}));Z.loggedIn&&(console.log("".concat("login"===r?"Logged In":"Registered"," Successfully")),f(K.Y.setError({error:void 0})),x("/questions")),(0,n.useEffect)((function(){return function(){return f(K.Y.setError({error:void 0}))}}),[f,r]);var b=g((function(e){return""!==e.trim()&&e.length<10})),C=b.value,j=b.isValid,w=b.hasError,y=b.valueChangeHandler,S=b.inputBlurHandler,R=b.reset,N="Name is necessary and should be less than 10 characters",T=g((function(e){return""!==e.trim()&&e.length>=4&&e.length<10})),P=T.value,z=T.isValid,E=T.hasError,F=T.valueChangeHandler,q=T.inputBlurHandler,B=T.reset,_="Username is necessary and should be Unique and less than 10 characters and greater than or equal to 4 characters",H=g((function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)})),I=H.value,U=H.isValid,V=H.hasError,L=H.valueChangeHandler,A=H.inputBlurHandler,O=H.reset,W="Email is necessary and should be an valid Email and Unique",D=g((function(e){return e.length>=6})),Y=D.value,Q=D.isValid,X=D.hasError,ee=D.valueChangeHandler,re=D.inputBlurHandler,ae=D.reset,oe="Password is necessary and should be greater than or equal to 6 characters",te=g((function(e){return e.length>=6&&e===Y})),ie=te.value,le=te.isValid,se=te.hasError,de=te.valueChangeHandler,ce=te.inputBlurHandler,ue=te.reset,me="Verify Password is necessary and should be same as Password",he=(0,n.useState)("username"),pe=(0,o.Z)(he,2),ve=pe[0],fe=pe[1];(0,n.useEffect)((function(){R(),B(),O(),ae(),ue()}),[r,R,B,O,ae,ue]);var ge="register"===r?j&&z&&U&&Q&&le:Q&&("username"===ve?z:U);return(0,M.jsxs)(n.Fragment,{children:[(0,M.jsx)("div",{className:s}),(0,M.jsx)("div",{className:d,children:(0,M.jsx)("form",{className:c,onSubmit:function(e){e.preventDefault(),ge&&("login"===r?("username"===ve&&f((0,J.x4)(P,void 0,Y)),"email"===ve&&f((0,J.x4)(void 0,I,Y))):"register"===r&&f((0,J.z2)(C,P,I,Y,ie)),ae(),ue())},children:(0,M.jsxs)("div",{className:u,children:[(0,M.jsx)("h3",{className:m,children:"login"===r?"Sign In":"Sign Up"}),(0,M.jsxs)("div",{className:"text-center",children:["login"===r?"Don't have an account? ":"Already have an account ",(0,M.jsx)(t.rU,{to:"login"===r?"/register":"/login",className:"link-primary",children:"login"===r?"Sign Up":"Sign In"})]}),"register"===r&&(0,M.jsxs)("div",{className:"form-group mt-4",children:[(0,M.jsx)(je.Z,{arrow:!0,placement:v,TransitionComponent:we.Z,title:N,open:!a&&w,children:(0,M.jsx)(G,{id:"name",type:"text",label:"Name",variant:"filled",placeholder:"Less than 10 characters",onChange:y,onBlur:S,value:C,sx:w?{backgroundColor:"#fddddd"}:{}})}),a&&w&&(0,M.jsx)("div",{className:p,children:N})]}),"login"===r&&(0,M.jsxs)(k.Z,{sx:{borderTop:"2px solid rgb(0,0,0,0.08)",borderBottom:"2px solid rgb(0,0,0,0.08)",marginTop:"0.5rem",padding:"0 0.7rem"},children:[(0,M.jsx)(ye.Z,{id:"login-mode",children:"Choose with what you want to login"}),(0,M.jsxs)(ne,{row:!0,"aria-labelledby":"login-mode",name:"login-mode",value:ve,onChange:function(e){return fe(e.target.value)},children:[(0,M.jsx)(Se.Z,{value:"username",control:(0,M.jsx)(Ce,{}),label:"Username"}),(0,M.jsx)(Se.Z,{value:"email",control:(0,M.jsx)(Ce,{}),label:"Email"})]})]}),("register"===r||"username"===ve)&&(0,M.jsxs)("div",{className:"form-group mt-4",children:[(0,M.jsx)(je.Z,{arrow:!0,placement:v,TransitionComponent:we.Z,title:_,open:!a&&E,children:(0,M.jsx)(G,{id:"username",type:"text",label:"Username",variant:"filled",placeholder:"4 <= username < 10",onChange:F,onBlur:q,value:P,sx:E?{backgroundColor:"#fddddd"}:{}})}),a&&E&&(0,M.jsx)("div",{className:p,children:_})]}),("register"===r||"email"===ve)&&(0,M.jsxs)("div",{className:"form-group mt-4",children:[(0,M.jsx)(je.Z,{arrow:!0,placement:v,TransitionComponent:we.Z,title:W,open:!a&&V,children:(0,M.jsx)(G,{id:"email",type:"email",label:"Email",placeholder:"Enter valid Email",variant:"filled",onBlur:A,onChange:L,value:I,sx:V?{backgroundColor:"#fddddd"}:{}})}),a&&V&&(0,M.jsx)("div",{className:p,children:W})]}),(0,M.jsxs)("div",{className:"form-group mt-3",children:[(0,M.jsx)(je.Z,{arrow:!0,placement:v,TransitionComponent:we.Z,title:oe,open:!a&&X,children:(0,M.jsx)(G,{id:"password",type:"password",label:"Password",placeholder:"Minimum Length 6",variant:"filled",onBlur:re,onChange:ee,value:Y,sx:X?{backgroundColor:"#fddddd"}:{}})}),a&&X&&(0,M.jsx)("div",{className:p,children:oe})]}),"register"===r&&(0,M.jsxs)("div",{className:"form-group mt-3",children:[(0,M.jsx)(je.Z,{arrow:!0,placement:v,TransitionComponent:we.Z,title:me,open:!a&&se,children:(0,M.jsx)(G,{id:"passwordVerify",type:"password",label:"Re-Enter Password",placeholder:"Same as password",variant:"filled",onBlur:ce,onChange:de,value:ie,sx:se?{backgroundColor:"#fddddd"}:{}})}),a&&se&&(0,M.jsx)("div",{className:p,children:me})]}),(0,M.jsx)("div",{className:"d-grid gap-2 mt-4 mb-3",children:(0,M.jsxs)($.Z,{type:"submit",color:"info",variant:"contained",disabled:!ge||Z.isLoading,style:{textTransform:"capitalize",letterSpacing:"0.15rem",fontSize:"1rem"},children:["login"===r?"Login":"Register",Z&&(Z.isLoading||Z.loggedIn)&&(0,M.jsx)("div",{className:"spin"})]})}),Z&&Z.error&&(0,M.jsx)("div",{className:h,children:Z.error}),(0,M.jsx)("div",{className:"text-muted",children:"Email/Username must be valid/Unique and Password length must be greater than or equal to 6 to submit."})]})})})]})}}}]);
//# sourceMappingURL=139.aab9d7b4.chunk.js.map
"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[819],{7537:(e,l,a)=>{a.r(l),a.d(l,{default:()=>E});a(9665);var s=a(9835),n=a(1957),t=a(499),i=a(6970),o=a(2057),r=a(6928),u=a(8339),c=a(3703),d=a(6950),m=a(9120);const p={class:"q-pa-md login_form"},g={class:"authentication-container"},v={class:"responsive-alighn"},b={class:"align-center-box"},h={class:"user_account_header"},_={class:"title"},q={class:"q-mb-md"},w=(0,s._)("label",{class:"lable-text"},"Email",-1),x={class:"q-mb-md"},f=(0,s._)("label",{class:"lable-text"},"Password",-1),I={class:"text-left"},U={class:"q-mb-md"},V={class:"text-dark"},Z=(0,s._)("div",{class:"q-pb-md text-center login-sec-txt"},null,-1),k=(0,s._)("div",{class:"text-center"},[(0,s._)("p",{class:"login-bottom-text"})],-1),S={__name:"LoginPage",setup(e){const l=(0,s.RC)((()=>Promise.all([a.e(64),a.e(865)]).then(a.bind(a,2865)))),{errors:S,serverValidationError:W}=(0,o.Z)(),y=(0,t.iH)(!0),H=(0,t.iH)(!0),$=(0,t.iH)(""),C=(0,t.iH)(""),T=(0,r.t)(),Q=(0,u.tv)();function P(e){console.log(e)}function E(){d.Z.show({message:"Loading...",spinner:m.Z}),c.Z.set("email",$.value);var e={email:$.value,password:C.value};T.signIn(e).then((e=>{e.success&&Q.push({name:"home"})})).finally((()=>{d.Z.hide()}))}return(e,a)=>{const o=(0,s.up)("Header"),r=(0,s.up)("q-icon"),u=(0,s.up)("q-input"),c=(0,s.up)("q-checkbox"),d=(0,s.up)("q-btn"),m=(0,s.up)("q-form");return(0,s.wg)(),(0,s.j4)(m,{onSubmit:a[5]||(a[5]=(0,n.iM)((e=>E()),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Wm)(o,{title:e.$q.lang.authentication.signIn.title,subTitle:e.$q.lang.authentication.signIn.subtitle1},null,8,["title","subTitle"]),(0,s._)("div",p,[(0,s._)("div",g,[(0,s.Wm)((0,t.SU)(l)),(0,s._)("div",v,[(0,s._)("div",b,[(0,s._)("div",h,[(0,s._)("h3",_,(0,i.zw)(e.$q.lang.authentication.signIn.title),1)]),(0,s._)("div",q,[w,(0,s.Wm)(u,{outlined:"","hide-bottom-space":"",modelValue:$.value,"onUpdate:modelValue":a[0]||(a[0]=e=>$.value=e),placeholder:e.$q.lang.authentication.signIn.email.placeHolder,dense:e.dense,icon:"las la-user",rules:[l=>e.required(l,"email"),l=>e.isEmail(l)],error:!!(0,t.SU)(S)["email"],"error-message":(0,t.SU)(W)((0,t.SU)(S),"email")},{append:(0,s.w5)((()=>[(0,s.Wm)(r,{name:"las la-user geet-icon"})])),_:1},8,["modelValue","placeholder","dense","rules","error","error-message"])]),(0,s._)("div",x,[f,(0,s.Wm)(u,{outlined:"","hide-bottom-space":"",modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=e=>C.value=e),placeholder:e.$q.lang.authentication.signIn.password.placeHolder,dense:e.dense,type:y.value?"password":"text",rules:[l=>e.required(l,"password")],error:!!(0,t.SU)(S)["password"],"error-message":(0,t.SU)(W)((0,t.SU)(S),"password")},{append:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(r,{class:"geet-icon",name:y.value?"visibility_off":"visibility",onClick:a[1]||(a[1]=e=>y.value=!y.value)},null,8,["name"])])])),_:1},8,["modelValue","placeholder","dense","type","rules","error","error-message"])]),(0,s._)("div",I,[(0,s._)("div",U,[(0,s.Wm)(c,{modelValue:H.value,"onUpdate:modelValue":a[3]||(a[3]=e=>H.value=e),onClick:a[4]||(a[4]=e=>P(H.value))},null,8,["modelValue"]),(0,s._)("b",V,(0,i.zw)(e.$q.lang.authentication.signIn.forgotPassword),1)])]),(0,s.Wm)(d,{color:"primary",label:e.$q.lang.authentication.signIn.btn1,type:"submit",class:"social_login_btn"},null,8,["label"]),Z,k])])])])])),_:1})}}};var W=a(8326),y=a(6611),H=a(2857),$=a(6937),C=a(4455),T=a(9984),Q=a.n(T);const P=S,E=P;Q()(S,"components",{QForm:W.Z,QInput:y.Z,QIcon:H.Z,QCheckbox:$.Z,QBtn:C.Z})}}]);
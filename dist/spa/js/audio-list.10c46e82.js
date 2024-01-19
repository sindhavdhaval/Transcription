"use strict";(globalThis["webpackChunkTranscription"]=globalThis["webpackChunkTranscription"]||[]).push([[343],{682:(a,l,e)=>{e.r(l),e.d(l,{default:()=>B});e(9665);var i=e(9835),s=e(499),o=e(6970),n=(e(826),e(4016)),t=e(8853),d=e(8339),u=e(5531),c=e(6950),r=e(9120),_=e(4170),m=e(3703),p=(e(3878),e(1410)),v=e(3508);const g={class:"q-pa-md main-wrapper"},f={class:"datefilter_box"},w=(0,i._)("div",{class:"audio_list_head"},[(0,i._)("div",{class:"col1"},[(0,i._)("div",{class:"td_col1"},"Audio Name"),(0,i._)("div",{class:"td_col2"},"Patient Name"),(0,i._)("div",{class:"td_col3"},"Hospital Name"),(0,i._)("div",{class:"td_col4"},"Service Date")]),(0,i._)("div",{class:"col2"},"Action")],-1),h={class:"audio_list_body"},y={class:"audio_list_item"},k={class:"audio_list_col1"},b={class:"audioplayer_col"},Z=(0,i._)("span",{class:"play_icon"},[(0,i._)("i",{class:"las la-play"})],-1),D={class:"audio_info"},q={class:"audio_heading"},C={class:"audio_meta"},S={class:"audio_meta_list"},L={class:"audo_patient_name"},H=["title"],P={class:"audo_hospital_name"},U={class:"audo_service_date"},Y={class:"audio_list_action"},j={class:"text-center"},W=(0,i._)("i",{class:"las la-exclamation-triangle"},null,-1),z=(0,i._)("h5",null,"Data Not Found",-1),A={class:"row justify-center q-my-md"},Q={style:{display:"none"}},V={__name:"audioList",setup(a){const l=(0,i.RC)((()=>Promise.all([e.e(64),e.e(202)]).then(e.bind(e,4051)))),V=(0,d.tv)(),T=(0,d.yj)(),x=(0,s.iH)(!1),F=(0,s.iH)(null),M=(0,u.b)();c.Z.show({spinner:r.Z,message:"Loading..."});const N=(0,i.Fl)((()=>M.getAudioList)),I=(0,s.iH)(null),E=(0,s.iH)(1),K=(0,s.iH)(6),R=(0,s.iH)(!0),$=(0,p.T)();function B(){const a={from_date:F.value?.from,to_date:F.value?.to,limit:K.value,page:E.value,userId:T.params.slug.split("/")[0],statusId:T.params.slug.split("/")[1]};return M.fetchAudioList(a)}function G(a,l){B().then((a=>{a.success&&a.data.data.length>0?(E.value=E.value+1,l()):(R.value=!1,l(!0))})).catch((a=>{l(!0)})).finally((()=>{c.Z.hide()}))}function J(a){M.draft=a.draft,M.data=a,m.Z.set("data",a),V.push({name:"write-script",params:{slug:a.id}})}function O(a){c.Z.show({spinner:r.Z,message:"Loading..."}),n.Z.post(n.Z.resolveApiUrl(t.jU.SAVE,{id:a.id}),{status_id:"4"}).then((l=>{N.value.forEach(((l,e,i)=>{l.id==a.id&&(l.name="Published")}))})).catch((a=>{console.log(a)})).finally((()=>{c.Z.hide()}))}const X=(0,s.iH)(!1);async function aa(a){c.Z.show({spinner:r.Z,spinnerSize:140,spinnerColor:"primary"});let l=a.hospital_name??a.hospitalname.name;$.pdfData=a,X.value=!0,"Kyabram District Hostpial"==l?setTimeout((()=>{c.Z.hide(),(0,v.$)("downloadPDF",`${a.patient_name}`)}),2e3):(V.push({name:"transcription-pdf"}),c.Z.hide())}function la(){c.Z.show({spinner:r.Z,message:"Loading..."}),E.value=1,R.value=!0,M.audioList=[],G()}function ea(){c.Z.show({spinner:r.Z,message:"Loading..."}),F.value=null,M.audioList=[],E.value=1,R.value=!0,I.value.reset(),I.value.resume(),I.value.trigger()}return(0,d.iS)(((a,l,e)=>{console.log("leave"),M.resetList(),e()})),(a,e)=>{const n=(0,i.up)("q-btn"),t=(0,i.up)("q-card"),d=(0,i.up)("q-spinner-dots"),u=(0,i.up)("q-infinite-scroll"),c=(0,i.up)("q-date"),r=(0,i.up)("q-dialog"),m=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",g,[(0,i._)("div",f,[(0,i.Wm)(n,{color:"primary",onClick:e[0]||(e[0]=a=>x.value=!0),label:F.value?.from?F.value.from+" to "+F.value.to:F.value??"Select Date"},null,8,["label"]),F.value?((0,i.wg)(),(0,i.j4)(n,{key:0,onClick:ea,icon:"la la-times"})):(0,i.kq)("",!0)]),(0,i.Wm)(u,{onLoad:G,offset:250,"scroll-target":"body",ref_key:"scrollList",ref:I},{loading:(0,i.w5)((()=>[(0,i._)("div",A,[(0,i.Wm)(d,{color:"primary",size:"40px"})])])),default:(0,i.w5)((()=>[0!==(0,s.SU)(N).length?((0,i.wg)(),(0,i.j4)(t,{key:0,class:"q-pa-lg"},{default:(0,i.w5)((()=>[w,(0,i._)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,s.SU)(N),(a=>((0,i.wg)(),(0,i.iD)("div",{class:"audio_list_bg caption",key:a},[(0,i._)("div",y,[(0,i._)("div",k,[(0,i._)("div",b,[Z,(0,i._)("div",D,[(0,i._)("p",q,(0,o.zw)(a.audio_name),1),(0,i._)("div",C,[(0,i._)("ul",S,[(0,i._)("li",null,[(0,i.Uk)(" Duration: "),(0,i._)("b",null,(0,o.zw)(a.audio_duration),1)]),(0,i._)("li",null,[(0,i.Uk)(" Created at: "),(0,i._)("b",null,(0,o.zw)((0,s.SU)(_.ZP).formatDate(a.created_at,"DD-MM-YYYY")),1)])])])]),(0,i._)("div",L,[(0,i._)("p",{title:a.patient_name},[(0,i._)("b",null,(0,o.zw)(a.patient_name),1)],8,H)]),(0,i._)("div",P,[(0,i._)("p",null,(0,o.zw)(a.hospital_name),1)]),(0,i._)("div",U,[(0,i._)("p",null,(0,o.zw)((0,s.SU)(_.ZP).formatDate(a.date_of_service,"DD-MM-YYYY")),1)])])]),(0,i._)("div",Y,["Published"==a.name?((0,i.wg)(),(0,i.j4)(n,{key:0,title:"Report Download",round:"",color:"primary",icon:"las la-download",class:"q-ml-sm",padding:"sm",onClick:l=>aa(a)},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(n,{round:"",color:"blue",icon:"las la-download",title:"Audio Download",class:"q-ml-sm",padding:"sm",href:a.audio_filepath,download:""},null,8,["href"]),"Confirmed"==a.name?((0,i.wg)(),(0,i.j4)(n,{key:1,color:"green",label:"Publish",class:"q-ml-sm",onClick:l=>O(a)},null,8,["onClick"])):(0,i.kq)("",!0),(0,i.Wm)(n,{round:"",color:"secondary",icon:"las la-edit",class:"q-ml-sm",padding:"sm",disable:"Pending"!==a.name,onClick:l=>J(a)},null,8,["disable","onClick"])])])])))),128))])])),_:1})):R.value?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(t,{key:1,class:"q-pa-lg"},{default:(0,i.w5)((()=>[(0,i._)("div",j,[(0,i.Wm)(n,{class:"not_found_icon",outline:"",color:"primary"},{default:(0,i.w5)((()=>[W])),_:1}),z])])),_:1}))])),_:1},512)]),(0,i.Wm)(r,{modelValue:x.value,"onUpdate:modelValue":e[2]||(e[2]=a=>x.value=a)},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{modelValue:F.value,"onUpdate:modelValue":e[1]||(e[1]=a=>F.value=a),range:""},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(n,{label:"Submit",onClick:la,type:"submit",color:"primary"},null,512),[[m]])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,i._)("div",Q,[X.value?((0,i.wg)(),(0,i.j4)((0,s.SU)(l),{key:0,id:"downloadPDF"})):(0,i.kq)("",!0)])],64)}}};var T=e(8879),x=e(6870),F=e(4458),M=e(7501),N=e(3706),I=e(6711),E=e(2146),K=e(9984),R=e.n(K);const $=V,B=$;R()(V,"components",{QBtn:T.Z,QInfiniteScroll:x.Z,QCard:F.Z,QSpinnerDots:M.Z,QDialog:N.Z,QDate:I.Z}),R()(V,"directives",{ClosePopup:E.Z})}}]);
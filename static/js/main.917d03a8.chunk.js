(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={message:"Message_message__1CuEF",avatar:"Message_avatar__1azdv",content:"Message_content__1lIYZ",time:"Message_time__13G41"}},,,function(e,a,t){e.exports={wrapper:"Greeting_wrapper__3TbCp",taskForm:"Greeting_taskForm__1Uk6I",inputError:"Greeting_inputError__OeUIb",btn:"Greeting_btn__1Bxro",totalUsers:"Greeting_totalUsers__3BhGo",error:"Greeting_error__1Jkl4"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2M3Md",errorInput:"SuperInputText_errorInput__3Fssc",error:"SuperInputText_error__1bL46",blue:"SuperInputText_blue__1O_8W"}},function(e,a,t){e.exports={wrapper:"Affairs_wrapper__1PYpV",affair:"Affairs_affair__1qVDQ"}},function(e,a,t){e.exports={default:"SuperButton_default__23rJ3",red:"SuperButton_red__2piwk"}},function(e,a,t){e.exports={blue:"HW4_blue__lFXC9",column:"HW4_column__25Ujo"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2tRRf",spanClassName:"SuperCheckbox_spanClassName__xwJhn"}},,,function(e,a,t){e.exports={App:"App_App__r0X09"}},function(e,a,t){e.exports={affairsWrapper:"HW2_affairsWrapper__1JTJB"}},function(e,a,t){e.exports={hw3Wrapper:"HW3_hw3Wrapper__2UBWF"}},,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(13),l=t.n(c),o=(t(23),t(14)),s=t.n(o),i=t(2),u=t.n(i);var m=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:u.a.message},n.a.createElement("div",{className:u.a.avatar},n.a.createElement("img",{src:e.avatar,alt:"#"})),n.a.createElement("div",{className:u.a.content},n.a.createElement("h4",{className:u.a.name},e.name),n.a.createElement("p",{className:u.a.text},e.message),n.a.createElement("span",{className:u.a.time},e.time))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",d="some text",_="22:00";var E=function(){return n.a.createElement("div",null,n.a.createElement("hr",null),n.a.createElement(m,{avatar:p,name:f,message:d,time:_}))},h=t(1),v=t(8),g=t.n(v),b=t(3),k=t(9),C=t.n(k),N=function(e){var a=e.red,t=e.className,r=Object(b.a)(e,["red","className"]),c="".concat(a?C.a.red:C.a.default," ").concat(t," ");return n.a.createElement("button",Object.assign({className:c},r))};var w=function(e){var a={backgroundColor:e.affair.priority?e.affair.color:"white"};return n.a.createElement("div",{className:g.a.wrapper},n.a.createElement("div",{style:a,className:g.a.affair},e.affair.name,n.a.createElement(N,{red:!0,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var x=function(e){var a=e.data.map((function(a){return n.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return n.a.createElement("div",null,a,n.a.createElement(N,{onClick:function(){return e.setFilter("all")}},"All"),n.a.createElement(N,{onClick:function(){return e.setFilter("high")}},"High"),n.a.createElement(N,{onClick:function(){return e.setFilter("middle")}},"Middle"),n.a.createElement(N,{onClick:function(){return e.setFilter("low")}},"Low"))},O=t(15),j=t.n(O),y=[{_id:1,name:"React",priority:"high",color:"#fc7979"},{_id:2,name:"anime",priority:"low",color:"#ffe9ad"},{_id:3,name:"games",priority:"low",color:"#ffe9ad"},{_id:4,name:"work",priority:"high",color:"#fc7979"},{_id:5,name:"html & css",priority:"middle",color:"#ffb68c"}];var S=function(){var e=Object(r.useState)(y),a=Object(h.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)("all"),o=Object(h.a)(l,2),s=o[0],i=o[1],u=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,s);return n.a.createElement("div",{className:j.a.affairsWrapper},"homeworks 2",n.a.createElement(x,{data:u,setFilter:i,deleteAffairCallback:function(e){return c(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}))},W=t(17),F=t(5),I=t.n(F),T=t(7),A=t.n(T),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,r=e.onKeyPress,c=e.onEnter,l=e.error,o=e.className,s=e.spanClassName,i=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(A.a.error," ").concat(s||""),m="".concat(l?" ".concat(A.a.errorInput," ").concat(o):A.a.superInput);return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&c&&c()},className:m},i)),l&&n.a.createElement("span",{className:u},l))},B=function(e){var a=e.name,t=e.setNameCallback,r=e.addUser,c=e.error,l=e.totalUsers;I.a.inputError;return n.a.createElement("div",{className:I.a.wrapper},n.a.createElement("div",{className:I.a.taskForm},n.a.createElement(U,{value:a,error:c,onChange:t}),n.a.createElement(N,{onClick:function(){r(a)}},"add")),n.a.createElement("span",{className:I.a.totalUsers},l))},G=function(e){var a=e.users,t=e.addUserCallback,c=Object(r.useState)(""),l=Object(h.a)(c,2),o=l[0],s=l[1],i=Object(r.useState)(""),u=Object(h.a)(i,2),m=u[0],p=u[1],f=a.length;return console.log(f),n.a.createElement(B,{name:o,setNameCallback:function(e){p&&p(""),s&&s(e.currentTarget.value)},addUser:function(e){""!==e.trim()?(t(e.trim()),alert("Hello  ".concat(e.trim(),"!")),s("")):""===e.trim()&&(p("Error"),console.log("wtf"))},error:m,totalUsers:f})},J=t(26),M=t(16),H=t.n(M);var P=function(){var e=Object(r.useState)([]),a=Object(h.a)(e,2),t=a[0],c=a[1];return n.a.createElement("div",{className:H.a.hw3Wrapper},n.a.createElement(G,{users:t,addUserCallback:function(e){var a={_id:Object(J.a)(),name:e};c([a].concat(Object(W.a)(t)))}}))},X=t(10),K=t.n(X),L=t(11),R=t.n(L),Y=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),l=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(R.a.checkbox," ").concat(r||"");return n.a.createElement("label",null,n.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},l)),c&&n.a.createElement("span",{className:R.a.spanClassName},c))};var q=function(){var e=Object(r.useState)(""),a=Object(h.a)(e,2),t=a[0],c=a[1],l=t?"":"error",o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(r.useState)(!1),i=Object(h.a)(s,2),u=i[0],m=i[1];return n.a.createElement("div",null,n.a.createElement("hr",null),"homeworks 4",n.a.createElement("div",{className:K.a.column},n.a.createElement(U,{value:t,onChangeText:c,onEnter:o,error:l,className:K.a.blue}),n.a.createElement(N,{red:!0,onClick:o},"delete "),n.a.createElement(Y,{checked:u,onChangeChecked:m},"some text "),n.a.createElement(Y,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),n.a.createElement("hr",null),n.a.createElement("hr",null))};var V=function(){return n.a.createElement("div",null,"// add NavLinks")};var Z=function(){return n.a.createElement("div",null,"// add routes")};var z=function(){return n.a.createElement("div",null,n.a.createElement(V,null),n.a.createElement(Z,null))};var D=function(){return n.a.createElement("div",{className:s.a.App},n.a.createElement("div",null,"react homeworks:"),n.a.createElement(E,null),n.a.createElement(S,null),n.a.createElement(P,null),n.a.createElement(q,null),n.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.917d03a8.chunk.js.map
(this["webpackJsonpmodern-bank"]=this["webpackJsonpmodern-bank"]||[]).push([[0],{107:function(e,c,t){},108:function(e,c,t){},109:function(e,c,t){},110:function(e,c,t){},117:function(e,c,t){},118:function(e,c,t){},119:function(e,c,t){},120:function(e,c,t){},121:function(e,c,t){},125:function(e,c,t){},245:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t.n(a),n=t(11),i=t.n(n),r=(t(107),t(6)),l=(t(108),t(109),t(110),t(1));var o=function(e){return Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsxs)("div",{className:"modal-page",children:[Object(l.jsx)("span",{className:"modal-title",children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438 \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),Object(l.jsxs)("div",{className:"modal-btns",children:[Object(l.jsx)("button",{className:"modal-button",onClick:function(){return document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.isLogin(!1),void e.isActive(!1)},children:"\u0414\u0430"}),Object(l.jsx)("button",{className:"modal-button",onClick:function(c){return document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),void e.isActive(!1)},children:"\u041d\u0435\u0442"})]})]}),Object(l.jsx)("div",{className:"black-screen"})]})},d=t(249),j=t(15),b=t(12);function u(e){var c=Object(a.useState)(0),t=Object(r.a)(c,2),s=(t[0],t[1]),n=Object(a.useState)(!1),i=Object(r.a)(n,2),u=i[0],m=i[1],O="settings",h="exit",x=[{icons:b.f,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},{icons:b.i,text:"\u041f\u043b\u0430\u0442\u0435\u0436\u0438"},{icons:b.g,text:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"},{icons:b.m,text:"\u041a\u043e\u0448\u0435\u043b\u0435\u043a"},{icons:b.k,text:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},{icons:b.b,text:"\u0426\u0435\u043b\u0438"}],v=function(e,c){document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.currentTarget.className="active","exit"===c&&m(!0)};return Object(a.useEffect)((function(){document.querySelectorAll("li")[0].classList.add("active")}),[]),Object(l.jsxs)("div",{className:"sidebar-block",children:[Object(l.jsx)(d.a,{in:u,timeout:300,unmountOnExit:!0,classNames:"alert",children:Object(l.jsx)(o,{isActive:function(e){m(e)},isLogin:function(c){e.statusLogin(c)}})}),Object(l.jsxs)("div",{className:"sidebar__top-block",children:[Object(l.jsx)("h1",{className:"sidebar-title",children:Object(l.jsxs)("a",{href:"/modern-bank",className:"sidebar-title",children:["Modern",Object(l.jsx)("span",{children:"bank"})]})}),Object(l.jsx)("nav",{className:"sidebar-menu",children:Object(l.jsx)("ul",{className:"sidebar-menu__inner",children:x.map((function(e,c){return Object(l.jsxs)("li",{onClick:function(e){return function(e,c){s(e),document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),c.currentTarget.className="active"}(c,e)},children:[Object(l.jsx)(j.a,{className:"icons-menu",icon:e.icons}),Object(l.jsx)("a",{children:e.text})]},c)}))})})]}),Object(l.jsx)("div",{className:"sidebar__bot-block",children:Object(l.jsx)("nav",{className:"sidebar__settings-menu",children:Object(l.jsxs)("ul",{className:"sidebar-menu__inner",children:[Object(l.jsxs)("li",{onClick:function(e){return v(e,O)},children:[Object(l.jsx)(j.a,{className:"icons-menu",icon:b.e}),Object(l.jsx)("a",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]},O),Object(l.jsxs)("li",{onClick:function(e){return v(e,h)},children:[Object(l.jsx)(j.a,{className:"icons-menu",icon:b.j}),Object(l.jsx)("a",{children:"\u0412\u044b\u0439\u0442\u0438"})]},h)]})})})]})}var m=s.a.memo(u),O=(t(117),t(118),function(e){var c=Object(a.useState)(""),t=Object(r.a)(c,2),s=t[0],n=t[1],i=Object(a.useState)(""),o=Object(r.a)(i,2),d=o[0],u=o[1],m=Object(a.useState)(!1),O=Object(r.a)(m,2),h=O[0],x=O[1];return Object(l.jsxs)("div",{className:"login-block",children:[Object(l.jsx)("h1",{className:"login-title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(l.jsxs)("div",{className:"login-form",children:[Object(l.jsx)("label",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return function(e){n(e.target.value)}(e)}}),Object(l.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(l.jsx)("input",{type:"password",onChange:function(e){return function(e){u(e.target.value)}(e)}}),Object(l.jsx)("button",{className:"login-btn",onClick:function(){""===s.trim()||""===d.trim()?x(!0):(x(!1),e.isClose(!1),e.isLogin(!0),e.changeLogin(!0),e.usernameAndPass(s,d))},children:"\u0412\u043e\u0439\u0442\u0438"}),h?Object(l.jsx)("span",{className:"error-text",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):null]}),Object(l.jsx)(j.a,{className:"icons-close",icon:b.l,onClick:function(){e.isClose(!1)}})]})}),h=(t(119),function(e){return Object(l.jsxs)("div",{className:"balance-block",children:[Object(l.jsx)("span",{className:"balance-title",children:"\u041e\u0431\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"}),Object(l.jsxs)("span",{className:"balance-value",children:[e.balance," \u0440\u0443\u0431."]})]})}),x=t(17),v=(t(120),t.p+"static/media/visa.1fae40ca.svg"),p=t.p+"static/media/mastercard.b720e3b5.svg",f=t(250),g=(t(121),t.p+"static/media/mir.59c0eb22.svg"),N=t(93),_=t.n(N),k=function(e){var c=[{id:1,logo:v,class:"pay-img active-card"},{id:2,logo:p,class:"pay-img"},{id:3,logo:g,class:"pay-img"}],t=Object(a.useState)(""),s=Object(r.a)(t,2),n=s[0],i=s[1],o=Object(a.useState)(""),d=Object(r.a)(o,2),u=d[0],m=d[1],O=Object(a.useState)(""),h=Object(r.a)(O,2),x=h[0],f=h[1],N=Object(a.useState)(""),k=Object(r.a)(N,2),C=k[0],S=k[1],y=Object(a.useState)(""),L=Object(r.a)(y,2),w=L[0],B=L[1],I=Object(a.useState)(!0),E=Object(r.a)(I,2),q=E[0],z=E[1],H=Object(a.useState)(v),A=Object(r.a)(H,2),R=A[0],T=A[1];Object(a.useEffect)((function(){var e=new Date,c={mm:e.getMonth()+1,dd:e.getDate(),yy:e.getFullYear().toString().slice(-2)},t=parseInt(c.yy)+4;B(c.mm+"/"+t)}),[]),Object(a.useEffect)((function(){""===n.trim()||""===u.trim()||""===x.trim()||19!==C.length?z(!0):z(!1)}));return Object(l.jsxs)("div",{className:"addCard-block",children:[Object(l.jsx)("h1",{className:"addCard-title",children:"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u0430\u0440\u0442\u044b"}),Object(l.jsxs)("div",{className:"addCard-paysystem",children:[Object(l.jsx)("span",{className:"paysystem-text",children:"\u041f\u043b\u0430\u0442\u0435\u0436\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430"}),c.map((function(e){return Object(l.jsx)("div",{className:e.class,onClick:function(c){return function(e,c){document.querySelector(".active-card")&&document.querySelector(".active-card").classList.remove("active-card"),e.currentTarget.classList.add("active-card"),T(1===c?v:2===c?p:g)}(c,e.id)},children:Object(l.jsx)("img",{src:e.logo,width:"60",alt:"visa"})},e.id)}))]}),Object(l.jsxs)("div",{className:"addCard-personal",children:[Object(l.jsx)("span",{className:"personal-title",children:"\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(l.jsxs)("div",{className:"personal-block",children:[Object(l.jsxs)("div",{className:"personal-fInputs",children:[Object(l.jsx)("label",{children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f*"}),Object(l.jsx)("input",{type:"text",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432",value:u,onChange:function(e){return m(e.target.value)},className:""===u.trim()?"error-input":""})]}),Object(l.jsxs)("div",{className:"personal-nInputs",children:[Object(l.jsx)("label",{children:"\u0418\u043c\u044f*"}),Object(l.jsx)("input",{type:"text",placeholder:"\u0418\u0432\u0430\u043d",value:n,onChange:function(e){return i(e.target.value)},className:""===n.trim()?"error-input":""})]}),Object(l.jsxs)("div",{className:"personal-mInputs",children:[Object(l.jsx)("label",{children:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e*"}),Object(l.jsx)("input",{type:"text",placeholder:"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",value:x,onChange:function(e){return f(e.target.value)},className:""===x.trim()?"error-input":""})]})]})]}),Object(l.jsxs)("div",{className:"addCard__card-data",children:[Object(l.jsx)("span",{className:"card-data__title",children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u044b"}),Object(l.jsxs)("div",{className:"card-data__number",children:[Object(l.jsx)("label",{children:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b*"}),Object(l.jsx)(_.a,{mask:"9999 9999 9999 9999",maskPlaceholder:"",placeholder:"4255 0102 0074 4345",value:C,onChange:function(e){return S(e.target.value)}})]}),Object(l.jsxs)("div",{className:"card-data__valid-thru",children:[Object(l.jsxs)("div",{className:"card-data__input",children:[Object(l.jsx)("label",{children:"\u0413\u043e\u0434\u0435\u043d \u0434\u043e*"}),Object(l.jsx)("input",{type:"text",placeholder:w,disabled:!0})]}),Object(l.jsx)("button",{className:"addCard-btn",onClick:function(){return function(){var c={id:e.countCards+1,balance:100,number:C,validThru:w,logo:R,zIndex:e.countZindex-1};e.formdata(c),e.checkClose()}()},disabled:q?"disabled":"",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]}),Object(l.jsx)(j.a,{className:"icons-card__close",icon:b.l,onClick:function(){return e.checkClose()}})]})},C=function(e){var c=[{id:1,balance:25e4,number:"4255 0102 0074 4345",validThru:"04/22",logo:v,zIndex:20},{id:2,balance:35e3,number:"4255 0102 0074 2376",validThru:"02/24",logo:p,zIndex:19},{id:3,balance:35e3,number:"4255 0102 0074 2376",validThru:"02/24",logo:p,zIndex:18}],t=[{arrow:b.c,sort:!0},{arrow:b.d,sort:!1}],s=Object(a.useState)(!0),n=Object(r.a)(s,2),i=n[0],o=n[1],u=Object(a.useState)(1),m=Object(r.a)(u,2),O=m[0],h=m[1],g=Object(a.useState)(c),N=Object(r.a)(g,2),_=N[0],C=N[1],S=Object(a.useState)(!1),y=Object(r.a)(S,2),L=y[0],w=y[1],B=_.find((function(e){return e.id===O})),I=_.filter((function(e){return e.id!==O})),E=_.reduce((function(e,c){return e+c.balance}),0);Object(a.useEffect)((function(){e.totalSum(E)})),Object(a.useEffect)((function(){e.getCards(_)}));return Object(l.jsxs)("div",{className:"cards-block",children:[Object(l.jsxs)("div",{className:"cards-block__options",children:[Object(l.jsxs)("div",{className:"cards-block__main",onClick:function(){o(!i)},children:[Object(l.jsx)("span",{className:"cards-block__title",children:"\u041a\u0430\u0440\u0442\u044b"}),t.filter((function(e){return e.sort===i})).map((function(e,c){return Object(l.jsx)(j.a,{className:"icons-card__arrow",icon:e.arrow},c)}))]}),Object(l.jsx)("span",{className:"cards-block__add-text",onClick:function(){return w(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e"})]}),Object(l.jsxs)("div",{className:"cards-block__list",children:[Object(l.jsxs)("div",{className:"cards-block__card",style:{zIndex:200},children:[Object(l.jsxs)("div",{className:"cards-block__header",children:[Object(l.jsx)("span",{className:"cards-block__name",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),Object(l.jsx)(j.a,{className:"icons-card__wifi",icon:b.n})]}),Object(l.jsxs)("span",{className:"cardBalance-value",children:[B.balance," \u0440\u0443\u0431."]}),Object(l.jsx)("span",{className:"number-card",children:B.number}),Object(l.jsxs)("div",{className:"ValidAndLogo-block",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{className:"valid-title",children:"\u0413\u043e\u0434\u0435\u043d \u0434\u043e"}),Object(l.jsx)("span",{className:"valid-text",children:B.validThru})]}),Object(l.jsx)("img",{src:B.logo,width:"60"})]})]}),Object(l.jsx)(d.a,{in:i,timeout:300,unmountOnExit:!0,classNames:"cardSort",children:Object(l.jsx)(f.a,{className:null,children:I.map((function(e,c){return Object(l.jsx)(d.a,{timeout:300,classNames:"item",children:Object(l.jsxs)("div",{className:"cards-block__card second-card",style:{zIndex:e.zIndex},onClick:function(c){return function(e,c){h(c)}(0,e.id)},children:[Object(l.jsxs)("span",{className:"cardBalance-value",children:[e.balance," \u0440\u0443\u0431."]}),Object(l.jsxs)("div",{className:"ValidAndLogo-block",children:[Object(l.jsx)("img",{src:e.logo,width:"40"}),Object(l.jsxs)("span",{className:"number-card",children:["\xb7\xb7",e.number.substr(e.number.length-4)]})]})]},e.id)},e.id)}))})})]}),Object(l.jsx)(d.a,{in:L,timeout:300,unmountOnExit:!0,classNames:"cardSort",children:Object(l.jsx)(k,{formdata:function(e){C([].concat(Object(x.a)(_),[e]))},countCards:_.length,countZindex:_[_.length-1].zIndex,checkClose:function(){w(!1)}})})]})},S=(t(70),t(14)),y=t(96),L=(t(125),t(97)),w=(t(244),function(){return Object(l.jsx)("div",{className:"graphStats-view",children:Object(l.jsx)(L.a,{data:{labels:["\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431","\u0412\u0441"],datasets:[{label:"\u0414\u043e\u0445\u043e\u0434",data:[1120,3400,1500,4500,8e3,5e3,15e3],borderWidth:1,backgroundColor:"#acecde",fill:!0,borderColor:"#acecde",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#acecde",pointBorderWidth:3,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10},{label:"\u0417\u0430\u0442\u0440\u0430\u0442\u044b",data:[15e3,4e3,7e3,14500,8500,9400,1080],borderWidth:1,backgroundColor:"rgba(252, 109, 144, 0.5)",fill:!0,borderColor:"#ffdae3",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#ffdae3",pointBorderWidth:3,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10}]},options:{plugins:{legend:{display:!1}},elements:{line:{tension:.3}},scales:{x:{grid:{display:!1}}}},className:"graphstyle",height:120})})}),B=function(e){var c={control:function(e,c){return Object(S.a)(Object(S.a)({},e),{},{cursor:"pointer",borderColor:"red",borderRadius:"4px",borderStyle:"none",borderWidth:"0px",color:"#5b72e0",transition:".2s linear",":hover *":{color:"#4b5ebe",transition:".2s linear"}})},placeholder:function(e,c){return Object(S.a)(Object(S.a)({},e),{},{color:"#5b72e0",letterSpacing:"3px",fontSize:"1.2em"})},singleValue:function(e,c){return Object(S.a)(Object(S.a)({},e),{},{transition:".2s linear",color:"#5b72e0",letterSpacing:"3px",fontSize:"1.2em"})},option:function(e,c,t){return Object(S.a)(Object(S.a)({},e),{},{cursor:"pointer",width:"150px",padding:"10px",letterSpacing:"3px",backgroundColor:"white",color:"#000",transition:".2s linear",":hover":{backgroundColor:"#5b72e0",color:"#fff",transition:".2s linear"}})},dropdownIndicator:function(e,c){return Object(S.a)(Object(S.a)({},e),{},{cursor:"pointer",color:"#5b72e0",paddingRight:"20px"})},indicatorSeparator:function(e,c){return Object(S.a)(Object(S.a)({},e),{},{display:"none"})}},t=Object(a.useState)([]),s=Object(r.a)(t,2),n=s[0],i=s[1],o=Object(a.useState)([]),d=Object(r.a)(o,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){if(e.getCards.length>n.length){for(var c=[],t=0;t<e.getCards.length;t++)c[t]={value:"\u2022\u2022\u2022\u2022"+e.getCards[t].number.substr(e.getCards[t].number.length-4),label:"\u2022\u2022\u2022\u2022"+e.getCards[t].number.substr(e.getCards[t].number.length-4)};i(c),b(c[0])}})),Object(l.jsxs)("div",{className:"graph-block",children:[Object(l.jsxs)("div",{className:"graph-block__header",children:[Object(l.jsxs)("div",{className:"graph-block__header-left",children:[Object(l.jsx)("h2",{className:"graph-block__title",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0434\u043b\u044f"}),Object(l.jsx)(y.a,{className:"select-block",onChange:b,styles:c,options:n,value:j})]}),Object(l.jsxs)("div",{className:"graph-block__header-right",children:[Object(l.jsx)("span",{className:"graph-block__filter",children:"\u0414\u0435\u043d\u044c"}),Object(l.jsx)("span",{className:"graph-block__filter",children:"\u041d\u0435\u0434\u0435\u043b\u044f"}),Object(l.jsx)("span",{className:"graph-block__filter",children:"\u041c\u0435\u0441\u044f\u0446"}),Object(l.jsx)("span",{className:"graph-block__filter",children:"\u0413\u043e\u0434"})]})]}),Object(l.jsxs)("div",{className:"card-info__block",children:[Object(l.jsxs)("div",{className:"card-info__balance",children:[Object(l.jsx)("span",{className:"card-info__text",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),Object(l.jsx)("span",{className:"card-info__balance-value",children:"45000 \u0440\u0443\u0431."})]}),Object(l.jsxs)("div",{className:"card-info__income",children:[Object(l.jsx)("span",{className:"card-info__text",children:"\u0414\u043e\u0445\u043e\u0434"}),Object(l.jsx)("span",{className:"card-info__income-value",children:"6000 \u0440\u0443\u0431."})]}),Object(l.jsxs)("div",{className:"card-info__expenses",children:[Object(l.jsx)("span",{className:"card-info__text",children:"\u0417\u0430\u0442\u0440\u0430\u0442\u044b"}),Object(l.jsx)("span",{className:"card-info__expenses-value",children:"1200 \u0440\u0443\u0431."})]})]}),Object(l.jsx)(w,{})]})},I=function(e){return Object(l.jsx)("div",{className:"stats-block",children:Object(l.jsx)(B,{getCards:e.listCards})})};var E=function(e){var c=Object(a.useState)(!1),t=Object(r.a)(c,2),s=t[0],n=t[1],i=Object(a.useState)(!0),o=Object(r.a)(i,2),u=o[0],m=o[1],x=Object(a.useState)("none"),v=Object(r.a)(x,2),p=v[0],f=v[1],g=Object(a.useState)(0),N=Object(r.a)(g,2),_=N[0],k=N[1],S=Object(a.useState)(null),y=Object(r.a)(S,2),L=y[0],w=y[1];return Object(a.useEffect)((function(){!1===e.statusLogin&&m(!1)})),Object(l.jsxs)("div",{className:"overview-block",children:[Object(l.jsxs)("div",{className:"overview-block__header",children:[Object(l.jsx)("h1",{className:"overview-title",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(l.jsxs)("div",{className:"user-panel",children:[Object(l.jsx)(j.a,{className:"icons-panel",icon:b.h}),Object(l.jsx)(j.a,{className:"icons-panel",icon:b.a}),u?Object(l.jsxs)("div",{className:"isLogin-block",children:[Object(l.jsx)("span",{className:"isLogin-name",children:p}),Object(l.jsx)("div",{className:"image-block",children:p[0]})]}):Object(l.jsx)("button",{className:"signIn-btn",onClick:function(){n(!0)},children:"\u0412\u0445\u043e\u0434"})]}),Object(l.jsx)(d.a,{in:s,timeout:300,unmountOnExit:!0,classNames:"alert",children:Object(l.jsx)(O,{isClose:function(e){n(e)},isLogin:function(e){m(e)},changeLogin:e.changeLogin,usernameAndPass:function(e,c){f(e)}})})]}),u?Object(l.jsxs)("div",{className:"content-block",children:[Object(l.jsxs)("div",{className:"balanceCard-block",children:[Object(l.jsx)(h,{balance:_}),Object(l.jsx)(C,{totalSum:function(e){k(e)},getCards:function(e){w(e)}})]}),null!==L?Object(l.jsx)(I,{listCards:L}):null]}):Object(l.jsx)("h1",{className:"notLogin-text",children:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u043e\u0439\u0442\u0438 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442!"})]})};var q=function(){var e=Object(a.useState)(!0),c=Object(r.a)(e,2),t=c[0],s=c[1],n=function(e){s(e)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{statusLogin:n}),Object(l.jsx)(E,{statusLogin:t,changeLogin:n})]})};i.a.render(Object(l.jsx)(q,{}),document.getElementById("root"))},70:function(e,c,t){}},[[245,1,2]]]);
//# sourceMappingURL=main.34879f68.chunk.js.map
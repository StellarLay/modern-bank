(this["webpackJsonpmodern-bank"]=this["webpackJsonpmodern-bank"]||[]).push([[0],{20:function(e,c,s){},21:function(e,c,s){},22:function(e,c,s){},23:function(e,c,s){},30:function(e,c,s){},31:function(e,c,s){},32:function(e,c,s){},33:function(e,c,s){},34:function(e,c,s){"use strict";s.r(c);var t=s(1),n=s.n(t),a=s(6),i=s.n(a),l=(s(20),s(4)),r=(s(21),s(22),s(23),s(0));var o=function(e){return Object(r.jsxs)(n.a.Fragment,{children:[Object(r.jsxs)("div",{className:"modal-page",children:[Object(r.jsx)("span",{className:"modal-title",children:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438 \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),Object(r.jsxs)("div",{className:"modal-btns",children:[Object(r.jsx)("button",{className:"modal-button",onClick:function(){return document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.isLogin(!1),void e.isActive(!1)},children:"\u0414\u0430"}),Object(r.jsx)("button",{className:"modal-button",onClick:function(c){return document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),void e.isActive(!1)},children:"\u041d\u0435\u0442"})]})]}),Object(r.jsx)("div",{className:"black-screen"})]})},j=s(35),d=s(5),b=s(3);function u(e){var c=Object(t.useState)(0),s=Object(l.a)(c,2),n=(s[0],s[1]),a=Object(t.useState)(!1),i=Object(l.a)(a,2),u=i[0],m=i[1],O="settings",x="exit",h=[{icons:b.f,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},{icons:b.i,text:"\u041f\u043b\u0430\u0442\u0435\u0436\u0438"},{icons:b.g,text:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"},{icons:b.m,text:"\u041a\u043e\u0448\u0435\u043b\u0435\u043a"},{icons:b.k,text:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},{icons:b.b,text:"\u0426\u0435\u043b\u0438"}],v=function(e,c){document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),e.currentTarget.className="active","exit"===c&&m(!0)};return Object(t.useEffect)((function(){document.querySelectorAll("li")[0].classList.add("active")}),[]),Object(r.jsxs)("div",{className:"sidebar-block",children:[Object(r.jsx)(j.a,{in:u,timeout:300,unmountOnExit:!0,classNames:"alert",children:Object(r.jsx)(o,{isActive:function(e){m(e)},isLogin:function(c){e.statusLogin(c)}})}),Object(r.jsxs)("div",{className:"sidebar__top-block",children:[Object(r.jsx)("h1",{className:"sidebar-title",children:Object(r.jsxs)("a",{href:"/",className:"sidebar-title",children:["Modern",Object(r.jsx)("span",{children:"bank"})]})}),Object(r.jsx)("nav",{className:"sidebar-menu",children:Object(r.jsx)("ul",{className:"sidebar-menu__inner",children:h.map((function(e,c){return Object(r.jsxs)("li",{onClick:function(e){return function(e,c){n(e),document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),c.currentTarget.className="active"}(c,e)},children:[Object(r.jsx)(d.a,{className:"icons-menu",icon:e.icons}),Object(r.jsx)("a",{children:e.text})]},c)}))})})]}),Object(r.jsx)("div",{className:"sidebar__bot-block",children:Object(r.jsx)("nav",{className:"sidebar__settings-menu",children:Object(r.jsxs)("ul",{className:"sidebar-menu__inner",children:[Object(r.jsxs)("li",{onClick:function(e){return v(e,O)},children:[Object(r.jsx)(d.a,{className:"icons-menu",icon:b.e}),Object(r.jsx)("a",{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})]},O),Object(r.jsxs)("li",{onClick:function(e){return v(e,x)},children:[Object(r.jsx)(d.a,{className:"icons-menu",icon:b.j}),Object(r.jsx)("a",{children:"\u0412\u044b\u0439\u0442\u0438"})]},x)]})})})]})}var m=n.a.memo(u),O=(s(30),s(31),function(e){var c=Object(t.useState)(""),s=Object(l.a)(c,2),n=s[0],a=s[1],i=Object(t.useState)(""),o=Object(l.a)(i,2),j=o[0],u=o[1],m=Object(t.useState)(!1),O=Object(l.a)(m,2),x=O[0],h=O[1];return Object(r.jsxs)("div",{className:"login-block",children:[Object(r.jsx)("h1",{className:"login-title",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(r.jsxs)("div",{className:"login-form",children:[Object(r.jsx)("label",{children:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"}),Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return function(e){a(e.target.value)}(e)}}),Object(r.jsx)("label",{children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(r.jsx)("input",{type:"password",onChange:function(e){return function(e){u(e.target.value)}(e)}}),Object(r.jsx)("button",{className:"login-btn",onClick:function(){""===n||""===j?h(!0):(h(!1),e.isClose(!1),e.isLogin(!0),e.changeLogin(!0),e.usernameAndPass(n,j))},children:"\u0412\u043e\u0439\u0442\u0438"}),x?Object(r.jsx)("span",{className:"error-text",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):null]}),Object(r.jsx)(d.a,{className:"icons-close",icon:b.l,onClick:function(){e.isClose(!1)}})]})}),x=(s(32),function(e){return Object(r.jsxs)("div",{className:"balance-block",children:[Object(r.jsx)("span",{className:"balance-title",children:"\u041e\u0431\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"}),Object(r.jsxs)("span",{className:"balance-value",children:[e.balance," \u0440\u0443\u0431."]})]})}),h=(s(33),s.p+"static/media/visa.1fae40ca.svg"),v=s.p+"static/media/mastercard.b720e3b5.svg",N=s(36),f=function(e){var c=[{id:1,balance:15e4,number:"4255 0102 0074 4345",validThru:"04/22",logo:h},{id:2,balance:35e3,number:"4255 0102 0074 2376",validThru:"02/24",logo:v},{id:3,balance:5e4,number:"4255 0102 0074 4345",validThru:"04/22",logo:h},{id:4,balance:23e4,number:"4255 0102 0074 4345",validThru:"04/22",logo:h},{id:5,balance:1e4,number:"4255 0102 0074 4345",validThru:"04/22",logo:v},{id:6,balance:23e4,number:"4255 0102 0074 4345",validThru:"04/22",logo:h}],s=[{zIndex:6},{zIndex:5},{zIndex:4},{zIndex:3},{zIndex:2},{zIndex:1}],n=[{arrow:b.c,sort:!0},{arrow:b.d,sort:!1}],a=Object(t.useState)(!0),i=Object(l.a)(a,2),o=i[0],u=i[1],m=Object(t.useState)(1),O=Object(l.a)(m,2),x=O[0],f=O[1],g=Object(t.useState)(c),k=Object(l.a)(g,2),p=k[0],_=(k[1],p.find((function(e){return e.id===x}))),S=p.filter((function(e){return e.id!==x})),L=c.reduce((function(e,c){return e+c.balance}),0);e.totalSum(L);return Object(r.jsxs)("div",{className:"cards-block",children:[Object(r.jsxs)("div",{className:"cards-block__options",children:[Object(r.jsxs)("div",{className:"cards-block__main",onClick:function(){u(!o)},children:[Object(r.jsx)("span",{className:"cards-block__title",children:"\u041a\u0430\u0440\u0442\u044b"}),n.filter((function(e){return e.sort===o})).map((function(e,c){return Object(r.jsx)(d.a,{className:"icons-card__arrow",icon:e.arrow},c)}))]}),Object(r.jsx)("span",{className:"cards-block__add-text",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e"})]}),Object(r.jsxs)("div",{className:"cards-block__list",children:[Object(r.jsxs)("div",{className:"cards-block__card",children:[Object(r.jsxs)("div",{className:"cards-block__header",children:[Object(r.jsx)("span",{className:"cards-block__name",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),Object(r.jsx)(d.a,{className:"icons-card__wifi",icon:b.n})]}),Object(r.jsxs)("span",{className:"cardBalance-value",children:[_.balance," \u0440\u0443\u0431."]}),Object(r.jsx)("span",{className:"number-card",children:_.number}),Object(r.jsxs)("div",{className:"ValidAndLogo-block",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"valid-title",children:"\u0413\u043e\u0434\u0435\u043d \u0434\u043e"}),Object(r.jsx)("span",{className:"valid-text",children:_.validThru})]}),Object(r.jsx)("img",{src:_.logo,width:"60"})]})]}),Object(r.jsx)(j.a,{in:o,timeout:300,unmountOnExit:!0,classNames:"cardSort",children:Object(r.jsx)(N.a,{className:null,children:S.map((function(e,c){return Object(r.jsx)(j.a,{timeout:300,classNames:"item",children:Object(r.jsxs)("div",{className:"cards-block__card second-card",style:s[c-1],onClick:function(c){return function(e,c){f(c)}(0,e.id)},children:[Object(r.jsxs)("span",{className:"cardBalance-value",children:[e.balance," \u0440\u0443\u0431."]}),Object(r.jsxs)("div",{className:"ValidAndLogo-block",children:[Object(r.jsx)("img",{src:e.logo,width:"40"}),Object(r.jsx)("span",{className:"number-card",children:"\xb7\xb7 4345"})]})]},e.id)},e.id)}))})})]})]})};var g=function(e){var c=Object(t.useState)(!1),s=Object(l.a)(c,2),n=s[0],a=s[1],i=Object(t.useState)(!1),o=Object(l.a)(i,2),u=o[0],m=o[1],h=Object(t.useState)("none"),v=Object(l.a)(h,2),N=v[0],g=v[1],k=Object(t.useState)(0),p=Object(l.a)(k,2),_=p[0],S=p[1];return Object(t.useEffect)((function(){!1===e.statusLogin&&m(!1)})),Object(r.jsxs)("div",{className:"overview-block",children:[Object(r.jsxs)("div",{className:"overview-block__header",children:[Object(r.jsx)("h1",{className:"overview-title",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(r.jsxs)("div",{className:"user-panel",children:[Object(r.jsx)(d.a,{className:"icons-panel",icon:b.h}),Object(r.jsx)(d.a,{className:"icons-panel",icon:b.a}),u?Object(r.jsxs)("div",{className:"isLogin-block",children:[Object(r.jsx)("span",{className:"isLogin-name",children:N}),Object(r.jsx)("div",{className:"image-block",children:N[0]})]}):Object(r.jsx)("button",{className:"signIn-btn",onClick:function(){a(!0)},children:"\u0412\u0445\u043e\u0434"})]}),Object(r.jsx)(j.a,{in:n,timeout:300,unmountOnExit:!0,classNames:"alert",children:Object(r.jsx)(O,{isClose:function(e){a(e)},isLogin:function(e){m(e)},changeLogin:e.changeLogin,usernameAndPass:function(e,c){g(e)}})})]}),Object(r.jsxs)("div",{className:"content-block",children:[Object(r.jsxs)("div",{className:"balanceCard-block",children:[Object(r.jsx)(x,{balance:_}),Object(r.jsx)(f,{totalSum:function(e){S(e)}})]}),Object(r.jsx)("div",{className:"stats-block"})]})]})};var k=function(){var e=Object(t.useState)(!0),c=Object(l.a)(e,2),s=c[0],n=c[1],a=function(e){n(e)};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{statusLogin:a}),Object(r.jsx)(g,{statusLogin:s,changeLogin:a})]})};i.a.render(Object(r.jsx)(k,{}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.7f4f49dc.chunk.js.map
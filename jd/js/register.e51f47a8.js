(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0eb4":function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));var s=a("7a23"),n=Object(s["I"])("data-v-76322f70");Object(s["t"])("data-v-76322f70");var r={class:"toast"};Object(s["r"])();var c=n((function(e,t,a,n,c,o){return Object(s["q"])(),Object(s["d"])("div",r,Object(s["z"])(a.message),1)})),o={props:["message"],setup:function(){}},i=function(){var e=Object(s["u"])({show:!1,toastMessage:""}),t=function(t){e.show=!0,e.toastMessage=t,setTimeout((function(){e.show=!1,e.toastMessage=t}),2e3)},a=Object(s["A"])(e),n=a.show,r=a.toastMessage;return{showToast:t,show:n,toastMessage:r}};a("8315");o.render=c,o.__scopeId="data-v-76322f70";t["a"]=o},"0f9e":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),n=Object(s["I"])("data-v-38048f37");Object(s["t"])("data-v-38048f37");var r={class:"wrapper"},c=Object(s["f"])('<img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" alt="" data-v-38048f37><div class="wrapper__input" data-v-38048f37><input placeholder="用户名" type="text" class="wrapper__input__content" data-v-38048f37></div><div class="wrapper__input" data-v-38048f37><input placeholder="密码" type="password" class="wrapper__input__content" data-v-38048f37></div><div class="wrapper__input" data-v-38048f37><input placeholder="确认密码" type="password" class="wrapper__input__content" data-v-38048f37></div>',4);Object(s["r"])();var o=n((function(e,t,a,n,o,i){var u=Object(s["x"])("Toast");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])("div",r,[c,Object(s["h"])("div",{class:"wrapper__register",onClick:t[1]||(t[1]=function(){return n.handleRegister&&n.handleRegister.apply(n,arguments)})},"注册"),Object(s["h"])("div",{class:"wrapper__links",onClick:t[2]||(t[2]=function(){return n.handleLoginClick&&n.handleLoginClick.apply(n,arguments)})},"已有账号去登录")]),n.show?(Object(s["q"])(),Object(s["d"])(u,{key:0,message:n.toastMessage},null,8,["message"])):Object(s["e"])("",!0)],64)})),i=a("1da1"),u=(a("96cf"),a("6c02")),p=a("0eb4"),d=a("b775"),l=function(e){var t=Object(u["d"])(),a=Object(s["u"])({username:"",password:"",ensurement:""}),n=function(){var s=Object(i["a"])(regeneratorRuntime.mark((function s(){var n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,Object(d["b"])("/api/user/register",{username:a.username,password:a.password});case 3:n=s.sent,0===n.errno?t.push({name:"Login"}):e("注册失败"),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),e("请求失败");case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}(),r=Object(s["A"])(a),c=r.username,o=r.password,p=r.ensurement;return{handleRegister:n,username:c,password:o,ensurement:p}},b={name:"Register",components:{Toast:p["a"]},setup:function(){var e=Object(u["d"])(),t=Object(p["b"])(),a=t.show,s=t.toastMessage,n=t.showToast,r=l(n),c=r.username,o=r.password,i=r.ensurement,d=r.handleRegister,b=function(){e.push({name:"Login"})};return{show:a,toastMessage:s,username:c,password:o,ensurement:i,handleLoginClick:b,handleRegister:d}}};a("4bb0");b.render=o,b.__scopeId="data-v-38048f37";t["default"]=b},"4bb0":function(e,t,a){"use strict";a("fddb")},8315:function(e,t,a){"use strict";a("a957")},a957:function(e,t,a){},fddb:function(e,t,a){}}]);
//# sourceMappingURL=register.e51f47a8.js.map
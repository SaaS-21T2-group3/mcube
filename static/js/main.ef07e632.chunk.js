(this.webpackJsonpmcube=this.webpackJsonpmcube||[]).push([[0],{146:function(e,t,a){},150:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(31),s=a.n(r),i=(a(146),a(29)),o=a(104),j=a(65),l=a(24),u=a(28),d=(a(150),{LOGIN:"LOGIN",LOGOUT:"LOGOUT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE"}),b=a(241),O=a(240),m=a(242),h=a(243),p=a(64),x=a(244),f=a(245),g=a(7);var v=function(){var e=Object(l.g)(),t=Object(u.c)((function(e){return e.authenticateReducer})).loader,a=Object(u.b)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{className:"site-page-header",title:"Login",subTitle:"Welcome back"}),Object(g.jsx)("div",{className:"container-login",children:Object(g.jsxs)(O.a,{name:"normal_login",className:"form",initialValues:{remember:!0},onFinish:function(){a({type:d.LOGIN,payload:{email:"eve.holt@reqres.in",password:"cityslicka"}})},children:[Object(g.jsx)(O.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(g.jsx)(m.a,{size:"large",prefix:Object(g.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username",autoComplete:"username"})}),Object(g.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(g.jsx)(m.a,{prefix:Object(g.jsx)(f.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",size:"large",autoComplete:"current-password"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(O.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(g.jsx)(h.a,{children:"Remember me"})})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(p.a,{loading:t,type:"primary",htmlType:"submit",className:"login-form-button",size:"large",children:"Log in"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(p.a,{type:"secondary",className:"login-form-button",size:"large",onClick:function(){e.push("/register")},children:"Sign Up"})})]})})]})};var I=function(){var e=Object(l.g)(),t=Object(u.c)((function(e){return e.authenticateReducer})).loader,a=Object(u.b)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{className:"site-page-header",title:"Registration",subTitle:"Welcome Onboard"}),Object(g.jsx)("div",{className:"container-login",children:Object(g.jsxs)(O.a,{name:"normal_login",className:"form",initialValues:{remember:!0},onFinish:function(){a({type:d.LOGIN,payload:{email:"eve.holt@reqres.in",password:"cityslicka"}})},children:[Object(g.jsx)(O.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(g.jsx)(m.a,{size:"large",prefix:Object(g.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username",autoComplete:"username"})}),Object(g.jsx)(O.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(g.jsx)(m.a,{prefix:Object(g.jsx)(f.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",size:"large",autoComplete:"current-password"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(O.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(g.jsx)(h.a,{children:"Remember me"})})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(p.a,{type:"secondary",onClick:function(){e.push("/login")},className:"login-form-button",size:"large",children:"Sign in"})}),Object(g.jsx)(O.a.Item,{children:Object(g.jsx)(p.a,{loading:t,type:"primary",className:"login-form-button",size:"large",htmlType:"submit",children:"Register"})})]})})]})},N=a(239),y=a(137),L=a(103),S=a(246),w=a(247),C=a(248),U=a.p+"static/media/logo.b709ff81.svg",G=L.a.SubMenu;function A(){var e=Object(l.g)(),t=Object(c.useState)(""),a=Object(y.a)(t,2),n=a[0],r=a[1],s=Object(u.b)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(L.a,{onClick:function(e){r(e.key)},selectedKeys:[n],mode:"horizontal",children:[Object(g.jsx)(L.a.Item,{className:"App-logo",children:Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:U,className:"logo",alt:"logo"},"logo")})},"applogo"),Object(g.jsx)(L.a.Item,{icon:Object(g.jsx)(S.a,{}),children:"Messages"},"messages"),Object(g.jsxs)(G,{icon:Object(g.jsx)(w.a,{}),title:"Settings",children:[Object(g.jsx)(L.a.ItemGroup,{children:Object(g.jsx)(L.a.Item,{icon:Object(g.jsx)(x.a,{}),children:"Profile"},"Profile")}),Object(g.jsx)(L.a.ItemGroup,{children:Object(g.jsx)(L.a.Item,{icon:Object(g.jsx)(C.a,{}),onClick:function(){return s({type:d.LOGOUT}),void e.push("/login")},children:"Logout"},"LogOut")})]},"SubMenu")]})})}var k=N.a.Header,R=N.a.Footer,F=N.a.Content;var P=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(N.a,{children:[Object(g.jsx)(k,{children:Object(g.jsx)(A,{})}),Object(g.jsx)(N.a,{className:"App-header",children:Object(g.jsx)(F,{children:"Content"})}),Object(g.jsx)(R,{children:"fOOOOTER"})]})})};var T=function(){return Object(g.jsx)("h1",{children:"Users"})},_=["children","isAuthenticated"],E=["children","isAuthenticated"];function z(e){var t=e.children,a=e.isAuthenticated,c=Object(o.a)(e,_);return Object(g.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){var c=e.location;return a?t:Object(g.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))}function q(e){var t=e.children,a=e.isAuthenticated,c=Object(o.a)(e,E);return Object(g.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){var c=e.location;return a?Object(g.jsx)(l.a,{to:{pathname:"/dashboard",state:{from:c}}}):t}}))}function M(){return Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{path:"/dashboard",children:Object(g.jsx)(P,{})}),Object(g.jsx)(l.b,{path:"/users",children:Object(g.jsx)(T,{})})]})}var H=function(){var e=Object(u.c)((function(e){return e.authenticateReducer})).isAuthenticated;return Object(g.jsx)(j.a,{children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(q,{path:"/login",isAuthenticated:e,children:Object(g.jsx)(v,{})}),Object(g.jsx)(q,{path:"/register",isAuthenticated:e,children:Object(g.jsx)(I,{})}),Object(g.jsx)(z,{path:"/",isAuthenticated:e,children:Object(g.jsx)(M,{})})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,249)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},J=a(135),V=a(102),W=a(136),D={isAuthenticated:!1,loader:!1};var K={authenticateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.LOGIN:return Object(i.a)(Object(i.a)({},e),{},{loader:!0});case d.LOGOUT:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,loader:!1});case d.LOGIN_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!!t.response.data.token,loader:!1});case d.LOGIN_FAILURE:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,loader:!1});default:return e}}},Q=a(49),X=a.n(Q),Y=a(50),Z=a(134),$={HOST_URL:"https://reqres.in/api/",headers:{"Content-Type":"application/json",Accept:"application/json"}},ee=a.n(Z).a.create();ee.defaults.baseURL=$.HOST_URL,ee.defaults.headers=$.headers,ee.defaults.withCredentials=!1;var te=X.a.mark(ce),ae=X.a.mark(ne);function ce(e){var t;return X.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Y.b)((function(){return t="login",a=e.payload,ee.post("/".concat(t),a).then((function(e){return e}));var t,a}));case 3:return t=a.sent,a.next=6,Object(Y.c)({type:d.LOGIN_SUCCESS,response:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(Y.c)({type:d.LOGIN_FAILURE});case 12:case"end":return a.stop()}}),te,null,[[0,8]])}function ne(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([Object(Y.d)(d.LOGIN,ce)]);case 2:case"end":return e.stop()}}),ae)}var re=X.a.mark(se);function se(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([ne()]);case 2:case"end":return e.stop()}}),re)}s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(u.a,{store:function(e){var t=Object(W.a)(),a=Object(V.a)({reducer:K,middleware:[].concat(Object(J.a)(Object(V.b)()),[t]),preloadedState:e});return t.run(se),a}(),children:Object(g.jsx)(H,{})})}),document.getElementById("root")),B()}},[[237,1,2]]]);
//# sourceMappingURL=main.ef07e632.chunk.js.map
(this.webpackJsonpmcube=this.webpackJsonpmcube||[]).push([[0],{161:function(e,t,a){},165:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(26),s=a.n(r),i=(a(161),a(25)),o=a(51),j=a(60),l=a(27),d=a(38),u=(a(165),{LOGIN:"LOGIN",LOGOUT:"LOGOUT",LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE"}),m=a(257),b=a(258),h=a(260),O=a(262),p=a(151),x=a(264),g=a(265),f=a(4);var v=function(){var e=Object(l.g)(),t=Object(d.c)((function(e){return e.authenticateReducer})).loader,a=Object(d.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container-login",children:Object(f.jsx)(m.a,{style:{margin:"auto",borderRadius:"8px"},children:Object(f.jsxs)(b.a,{name:"normal_login",className:"form",initialValues:{remember:!0},onFinish:function(){a({type:u.LOGIN,payload:{email:"eve.holt@reqres.in",password:"cityslicka"}})},children:[Object(f.jsx)(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(f.jsx)(h.a,{size:"large",prefix:Object(f.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username",autoComplete:"username"})}),Object(f.jsx)(b.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(f.jsx)(h.a,{prefix:Object(f.jsx)(g.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",size:"large",autoComplete:"current-password"})}),Object(f.jsx)(b.a.Item,{children:Object(f.jsx)(b.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(f.jsx)(O.a,{children:"Remember me"})})}),Object(f.jsx)(b.a.Item,{children:Object(f.jsx)(p.a,{loading:t,type:"primary",htmlType:"submit",className:"login-form-button",size:"large",children:"Log in"})}),Object(f.jsx)(b.a.Item,{children:Object(f.jsx)(p.a,{type:"secondary",className:"login-form-button",size:"large",onClick:function(){e.push("/register")},children:"Sign Up"})})]})})})})};var N=function(){var e=Object(l.g)(),t=Object(d.c)((function(e){return e.authenticateReducer})).loader,a=Object(d.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container-login",children:Object(f.jsx)(m.a,{style:{margin:"auto",borderRadius:"8px"},children:Object(f.jsxs)(b.a,{name:"normal_login",className:"form",initialValues:{remember:!0},onFinish:function(){a({type:u.LOGIN,payload:{email:"eve.holt@reqres.in",password:"cityslicka"}})},children:[Object(f.jsx)(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(f.jsx)(h.a,{size:"large",prefix:Object(f.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username",autoComplete:"username"})}),Object(f.jsx)(b.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(f.jsx)(h.a,{prefix:Object(f.jsx)(g.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",size:"large",autoComplete:"current-password"})}),Object(f.jsx)(b.a.Item,{children:Object(f.jsx)(b.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(f.jsx)(O.a,{children:"Remember me"})})}),Object(f.jsx)(b.a.Item,{children:Object(f.jsx)(p.a,{type:"secondary",onClick:function(){e.push("/login")},className:"login-form-button",size:"large",children:"Sign in"})}),Object(f.jsx)(b.a.Item,{children:Object(f.jsx)(p.a,{loading:t,type:"primary",className:"login-form-button",size:"large",htmlType:"submit",children:"Register"})})]})})})})},y=a(255);function w(e){var t=e.children;return Object(f.jsx)("div",{className:"site-layout-content",children:t})}var I=a(74),L=a(263),S=a(266),C=a(267),k=a(268),T=a.p+"static/media/logo.b709ff81.svg";function A(){var e=Object(l.g)(),t=Object(c.useState)(""),a=Object(I.a)(t,2),n=a[0],r=a[1],s=Object(d.b)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(L.a,{onClick:function(e){r(e.key)},selectedKeys:[n],mode:"horizontal",children:[Object(f.jsx)(L.a.Item,{className:"App-logo",children:Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:T,className:"logo",alt:"logo"},"logo")})},"applogo"),Object(f.jsx)(L.a.Item,{icon:Object(f.jsx)(S.a,{}),children:"Messages"},"messages"),Object(f.jsx)(L.a.Item,{icon:Object(f.jsx)(x.a,{}),children:"Profile"},"Profile"),Object(f.jsx)(L.a.Item,{icon:Object(f.jsx)(C.a,{}),children:"Forum"},"forum"),Object(f.jsx)(L.a.Item,{icon:Object(f.jsx)(k.a,{}),onClick:function(){return s({type:u.LOGOUT}),void e.push("/login")},children:"Logout"},"LogOut")]})})}var U=y.a.Header,F=y.a.Content;var R=function(e){var t=e.children;return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)(U,{children:Object(f.jsx)(A,{})}),Object(f.jsx)(y.a,{className:"App-header",children:Object(f.jsx)(F,{style:{},children:Object(f.jsx)(w,{children:t})})})]})})},G=a(78),z=a(49),E=a(259),P=["className","content"],_=E.a.Text;function D(e){var t=e.className,a=e.content,c=void 0===a?"":a,n=Object(o.a)(e,P);return Object(f.jsx)("div",{className:"app-titles",children:Object(f.jsx)(_,Object(i.a)(Object(i.a)({},n),{},{className:t,children:c}))})}var q=["className","content"],H=E.a.Text;function B(e){var t=e.className,a=e.content,c=void 0===a?"":a,n=Object(o.a)(e,q);return Object(f.jsx)("div",{className:"app-texts",children:Object(f.jsx)(H,Object(i.a)(Object(i.a)({},n),{},{className:t,children:c}))})}function J(e){var t=e.className,a=e.size,c=void 0===a?"medium":a,n=e.type,r=void 0===n?"":n,s=e.content,o=void 0===s?"":s,j=e.handleClick,l=e.rest;return Object(f.jsx)("div",{className:"app-button",children:Object(f.jsx)(p.a,Object(i.a)(Object(i.a)({},l),{},{onClick:j,className:t,type:r,size:c,children:o}))})}function K(e){var t=e.bannerTitle,a=e.bannerDescription,c=Object(l.g)();return Object(f.jsx)(G.a,{className:"home-page-section",justify:"space-between",align:"middle",children:Object(f.jsx)(z.a,{lg:24,md:24,sm:24,xs:24,justify:"space-between",align:"middle",children:Object(f.jsx)(G.a,{className:"",justify:"center",align:"middle",children:Object(f.jsxs)(z.a,{lg:20,md:20,sm:24,xs:24,children:[Object(f.jsx)(D,{className:"xlarge strong home-landing-title",content:t}),Object(f.jsx)("div",{className:"home-page-text-wrapper",children:Object(f.jsx)(B,{className:"medium",content:a})}),Object(f.jsx)(J,{handleClick:function(){c.push("/dashboard")},type:"primary",size:"",content:"Get Started"})]})})})})}var M=a(256),V=["content"];function W(e){var t=e.content,a=Object(o.a)(e,V);return Object(f.jsx)(M.a,Object(i.a)(Object(i.a)({},a),{},{children:t}))}function Q(e){var t=e.dividerText,a=void 0===t?"":t,n=e.featureImage,r=e.featureName,s=e.imageOrientation,i=void 0===s?"right":s,o=e.featureTitle,j=e.featureDescription,l=0;return function(){var e=Object(c.useState)({width:void 0,height:void 0}),t=Object(I.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}().width>768&&(l="left"===i?0:1),Object(f.jsxs)(G.a,{className:"home-page-section",justify:"space-between",align:"middle",children:[a?Object(f.jsx)(W,{content:Object(f.jsx)(B,{className:"xlarge feature-divider",content:a}),orientation:"center"}):null,Object(f.jsx)(z.a,{lg:12,md:12,sm:24,xs:24,justify:"space-between",align:"middle",order:1-l,children:Object(f.jsx)(G.a,{className:"",justify:"center",align:"middle",children:Object(f.jsxs)(z.a,{lg:24,md:24,sm:24,xs:24,children:[Object(f.jsx)(D,{className:"large strong",content:o}),Object(f.jsx)("div",{className:"home-page-text-wrapper",children:Object(f.jsx)(B,{className:"medium",content:j})})]})})}),Object(f.jsx)(z.a,{lg:12,md:12,sm:24,xs:24,justify:"space-between",align:"middle",order:l,className:"home-feature-sections",children:Object(f.jsx)(G.a,{className:"home-feature-image-wrapper",justify:"center",align:"middle",children:Object(f.jsx)(z.a,{lg:16,md:24,sm:12,xs:24,children:Object(f.jsx)("img",{src:n,className:"home-feature-image",alt:"Features images of ".concat(r)},r)})})})]})}var X=a.p+"static/media/forum.9a616d35.png",Y=a.p+"static/media/search.80bb57d2.png",Z=a.p+"static/media/recommendation.fd5d67ee.png",$=a.p+"static/media/chat.ef1a0e19.png";var ee=function(){return Object(f.jsxs)(w,{children:[Object(f.jsx)(K,{bannerTitle:"Explore Learn Share.",bannerDescription:"Explore the opportunities that lie ahead, Find out the people who can help you learn, Share knowlegde with other who seek advice"}),Object(f.jsx)(Q,{dividerText:"Explore what's inside the box",featureImage:X,featureName:"Forum",featureTitle:"Reach out to the community.",imageOrientation:"right",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing ."}),Object(f.jsx)(Q,{featureImage:Y,featureName:"Search",featureTitle:"Find the perfect opportunity",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing.",imageOrientation:"left"}),Object(f.jsx)(Q,{featureImage:Z,featureName:"Search",featureTitle:"We are here to help you with recommendations",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing.",imageOrientation:"right"}),Object(f.jsx)(Q,{featureImage:$,featureName:"Search",featureTitle:"Let's talk about it",featureDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing.",imageOrientation:"left"})]})};var te=function(){return Object(f.jsx)("h1",{children:"Users"})},ae=a(261),ce=a(269);function ne(){var e=Object(l.g)(),t=Object(c.useState)(""),a=Object(I.a)(t,2),n=a[0],r=a[1];return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(L.a,{onClick:function(e){r(e.key)},selectedKeys:[n],mode:"horizontal",children:[Object(f.jsx)(L.a.Item,{className:"App-logo",children:Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:T,className:"logo",alt:"logo"},"logo")})},"applogo"),Object(f.jsx)(L.a.Item,{icon:Object(f.jsx)(ce.a,{}),onClick:function(){e.push("/home")},children:"home"},"home"),Object(f.jsx)(L.a.Item,{onClick:function(){e.push("/login")},children:"LogIn/Register"},"loginRegister")]})})}var re=y.a.Header,se=y.a.Content,ie=y.a.Footer;var oe=function(e){var t=e.children;return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)(re,{children:Object(f.jsx)(ne,{})}),Object(f.jsxs)(y.a,{className:"App-header",children:[Object(f.jsx)(se,{style:{},children:t}),Object(f.jsxs)(ie,{children:["SaaS-Term2_group3 Copyrights Reserved :P ",Object(f.jsx)(ae.a,{})]})]})]})})},je=["children","isAuthenticated"],le=["children","isAuthenticated"];function de(e){var t=e.children,a=e.isAuthenticated,c=Object(o.a)(e,je);return Object(f.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){var c=e.location;return a?Object(f.jsx)(R,{children:t}):Object(f.jsx)(l.a,{to:{pathname:"/home",state:{from:c}}})}}))}function ue(e){var t=e.children,a=e.isAuthenticated,c=Object(o.a)(e,le);return Object(f.jsx)(l.b,Object(i.a)(Object(i.a)({},c),{},{render:function(e){var c=e.location;return a?Object(f.jsx)(l.a,{to:{pathname:"/dashboard",state:{from:c}}}):Object(f.jsx)(oe,{children:t})}}))}function me(){return Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{path:"/dashboard",children:Object(f.jsx)(te,{})}),Object(f.jsx)(l.b,{path:"/users",children:Object(f.jsx)(te,{})})]})}var be=function(){var e=Object(d.c)((function(e){return e.authenticateReducer})).isAuthenticated;return Object(f.jsx)(j.a,{children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(ue,{path:"/login",isAuthenticated:e,children:Object(f.jsx)(v,{})}),Object(f.jsx)(ue,{path:"/register",isAuthenticated:e,children:Object(f.jsx)(N,{})}),Object(f.jsx)(ue,{path:"/home",isAuthenticated:e,children:Object(f.jsx)(ee,{})}),Object(f.jsx)(de,{path:"/",isAuthenticated:e,children:Object(f.jsx)(me,{})})]})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,270)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},Oe=a(152),pe=a(120),xe=a(153),ge={isAuthenticated:!1,loader:!1};var fe={authenticateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.LOGIN:return Object(i.a)(Object(i.a)({},e),{},{loader:!0});case u.LOGOUT:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,loader:!1});case u.LOGIN_SUCCESS:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!!t.response.data.token,loader:!1});case u.LOGIN_FAILURE:return Object(i.a)(Object(i.a)({},e),{},{isAuthenticated:!1,loader:!1});default:return e}}},ve=a(58),Ne=a.n(ve),ye=a(59),we=a(150),Ie={HOST_URL:"https://reqres.in/api/",headers:{"Content-Type":"application/json",Accept:"application/json"}},Le=a.n(we).a.create();Le.defaults.baseURL=Ie.HOST_URL,Le.defaults.headers=Ie.headers,Le.defaults.withCredentials=!1;var Se=Ne.a.mark(ke),Ce=Ne.a.mark(Te);function ke(e){var t;return Ne.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(ye.b)((function(){return t="login",a=e.payload,Le.post("/".concat(t),a).then((function(e){return e}));var t,a}));case 3:return t=a.sent,a.next=6,Object(ye.c)({type:u.LOGIN_SUCCESS,response:t});case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(ye.c)({type:u.LOGIN_FAILURE});case 12:case"end":return a.stop()}}),Se,null,[[0,8]])}function Te(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.d)(u.LOGIN,ke)]);case 2:case"end":return e.stop()}}),Ce)}var Ae=Ne.a.mark(Ue);function Ue(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Te()]);case 2:case"end":return e.stop()}}),Ae)}s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(d.a,{store:function(e){var t=Object(xe.a)(),a=Object(pe.a)({reducer:fe,middleware:[].concat(Object(Oe.a)(Object(pe.b)()),[t]),preloadedState:e});return t.run(Ue),a}(),children:Object(f.jsx)(be,{})})}),document.getElementById("root")),he()}},[[253,1,2]]]);
//# sourceMappingURL=main.50e65839.chunk.js.map
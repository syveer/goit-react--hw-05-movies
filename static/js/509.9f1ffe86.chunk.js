"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{509:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,i,o,c,s,u,p=e(861),f=e(439),l=e(757),d=e.n(l),h=e(791),g=e(168),x=e(924),m=x.ZP.div(r||(r=(0,g.Z)(["\n  margin-top: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 20px;\n"]))),v=x.ZP.form(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  max-width: 320px;\n  height: 50px;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),y=x.ZP.input(i||(i=(0,g.Z)(["\n  flex: 1;\n  height: 30px;\n  font-family: 'Prompt', sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  color: #708090;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  outline: 2px solid #708090;\n  padding: 0 0 0 10px;\n  margin: 0;\n"]))),b=x.ZP.button(o||(o=(0,g.Z)(["\n  width: 70px;\n  height: 30px;\n  outline: 2.7px solid #708090;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: #708090;\n  font-family: 'Prompt', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 0;\n  cursor: pointer;\n  &:hover,\n  :focus {\n    background-color: #2F4F4F;\n  }\n\n  }\n"]))),w=x.ZP.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n"]))),Z=x.ZP.li(s||(s=(0,g.Z)(["\n  width: 100%;\n  max-width: 320px;\n  margin: 0;\n  padding: 0;\n"]))),k=x.ZP.p(u||(u=(0,g.Z)(["\n  font-family: 'Prompt', sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  color: #0e1841;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  &:hover,\n  :focus,\n  :active {\n    color: #28a8ad;\n  }\n"]))),j=e(877),P=e(87),_=e(689),S=e(245),z=e(184);function U(){var n=(0,P.lr)(),t=(0,f.Z)(n,2),e=t[0],r=t[1],a=e.get("query"),i=(0,_.TH)(),o=(0,h.useState)(!1),c=(0,f.Z)(o,2),s=c[0],u=c[1],l=(0,h.useState)(null),g=(0,f.Z)(l,2),x=g[0],U=g[1];(0,h.useEffect)((function(){if(a){var n=function(){var n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),n.next=4,(0,j.df)(a);case 4:t=n.sent,U(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),n.t0(n.t0.message);case 11:return n.prev=11,u(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[a]);var F=Array.isArray(x)&&x.length;return(0,z.jsxs)(m,{children:[(0,z.jsxs)(v,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.word.value;r({query:t}),n.currentTarget.reset()},children:[(0,z.jsx)(y,{type:"text",autoComplete:"off",autoFocus:!0,name:"word",placeholder:"Search..."}),(0,z.jsx)(b,{type:"submit"})]}),s&&(0,z.jsx)(S.g,{}),(0,z.jsx)(w,{children:F&&x.map((function(n){var t=n.id,e=n.title;return(0,z.jsx)(Z,{children:(0,z.jsx)(P.rU,{state:{from:i},to:"/movies/".concat(t),children:(0,z.jsx)(k,{children:e})})},t)}))})]})}},877:function(n,t,e){e.d(t,{Bt:function(){return x},Y5:function(){return l},d5:function(){return h},df:function(){return p},vw:function(){return s}});var r=e(861),a=e(757),i=e.n(a),o=e(340),c="9ac8dc50828ed4aa0cb37be4516a48d0";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{params:{api_key:c}});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{query:"".concat(t),include_adult:!1,language:"en-US",page:1,api_key:c}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),{params:{api_key:c,language:"en-US"}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}},245:function(n,t,e){e.d(t,{g:function(){return p}});e(791);var r,a,i=e(168),o=e(924),c=o.zo.div(r||(r=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 90;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(46, 47, 66, 0.4);\n"]))),s=o.zo.span(a||(a=(0,i.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 175px;\n  height: 80px;\n  background: #249fa3;\n  border-radius: 10px;\n  font-family: Arial, sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),u=e(184);function p(){return(0,u.jsx)(c,{children:(0,u.jsx)(s,{})})}}}]);
//# sourceMappingURL=509.9f1ffe86.chunk.js.map
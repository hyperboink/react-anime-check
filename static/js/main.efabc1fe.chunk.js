(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(24),i=n.n(a),o=(n(69),n(9)),u=n(7),s=(n(70),n(35)),d=n(2);function l(){return Object(d.jsx)("div",{id:"search",children:Object(d.jsxs)("form",{action:"#/search/anime?q=",children:[Object(d.jsx)("input",{type:"text",name:"q",placeholder:"Search anime here...",id:"search-field",className:"blink search-field"}),Object(d.jsx)("button",{type:"submit",className:"search-button",children:"GO!"})]})})}var j=n(34);function b(){var e=Object(c.useState)(window.pageYOffset),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(e){var t=Object(j.c)((function(e){return r(window.pageYOffset)}),150);return window.addEventListener("scroll",t),function(e){window.removeEventListener("scroll",t)}}),[]);var a=Object(c.useRef)(),i=n>=450?" show":"";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"go-top"+i,onClick:function(){return a.current.scrollIntoView({behavior:"smooth"})},children:Object(d.jsx)("i",{className:"fa fa-angle-up","aria-hidden":"true"})}),Object(d.jsxs)("div",{id:"header",children:[Object(d.jsxs)("div",{className:"header-top clear",children:[Object(d.jsx)("h1",{id:"logo",className:"left",children:Object(d.jsx)(o.b,{to:"/",children:"AnimeCheck"})}),Object(d.jsx)("div",{className:"header-right right",ref:a,children:Object(d.jsx)(l,{})})]}),Object(d.jsx)("div",{id:"navigation",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/",children:"LATEST"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/upcoming",children:"UPCOMING"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/top-rated",children:"TOP RATED"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/top-rated/characters",children:"CHARACTER RANKING"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/genres",children:"GENRES"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/top-rated/manga",children:"MANGA"})})]})})]})]})}function h(){return Object(d.jsx)("div",{id:"footer",children:Object(d.jsxs)("div",{className:"footer-con flex",children:[Object(d.jsx)("div",{className:"nav footer-nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/",children:"LATEST"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/upcoming",children:"UPCOMING"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/top-rated",children:"TOP RATED"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/top-rated/characters",children:"CHARACTER RANKING"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/genres",children:"GENRES"})}),Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/top-rated/manga",children:"MANGA"})})]})}),Object(d.jsxs)("div",{className:"copyright",children:["Copyright \xa9 2021 ",Object(d.jsx)("a",{href:"http://www.hyperboink.net",children:"Hyperboink"})," - All Rights Reserved"]})]})})}var f=n(36),p=r.a.lazy((function(){return n.e(3).then(n.bind(null,150))})),O=r.a.lazy((function(){return n.e(7).then(n.bind(null,151))})),x=r.a.lazy((function(){return n.e(6).then(n.bind(null,152))})),v=r.a.lazy((function(){return n.e(8).then(n.bind(null,145))})),m=r.a.lazy((function(){return n.e(4).then(n.bind(null,149))})),g=r.a.lazy((function(){return n.e(5).then(n.bind(null,146))})),w=r.a.lazy((function(){return n.e(10).then(n.bind(null,147))})),E=r.a.lazy((function(){return n.e(9).then(n.bind(null,148))}));var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)("div",{className:"wrap",children:[Object(d.jsx)(b,{}),Object(d.jsx)("div",{id:"main",children:Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(f.a,{}),children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(u.a,{path:"/upcoming",component:O}),Object(d.jsx)(u.a,{path:"/top-rated/:type",component:x}),Object(d.jsx)(u.a,{path:"/top-rated",component:x}),Object(d.jsx)(u.a,{path:"/genres",component:v}),Object(d.jsx)(u.a,{path:"/genre/anime/:id/:page",component:m}),Object(d.jsx)(u.a,{path:"/page/:type/:id",component:g}),Object(d.jsx)(u.a,{path:"/search",component:w}),Object(d.jsx)(u.a,{component:E})]})})}),Object(d.jsx)(h,{})]})})})},T=n(17),k=n(37),N=n(63),R=n(6),C=n.n(R),A=n(8),S=n(16),_=n(29),G=C.a.mark(H),D=C.a.mark(I);function H(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(A.b)(S.c);case 3:return e=t.sent,t.next=6,Object(A.c)(Object(_.c)(e.data));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),G,null,[[0,8]])}function I(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(_.a,H);case 2:case"end":return e.stop()}}),D)}var P=n(30),U=C.a.mark(z),L=C.a.mark(M);function z(){var e;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(A.b)(S.e);case 3:return e=t.sent,t.next=6,Object(A.c)(Object(P.c)(e.data));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),U,null,[[0,8]])}function M(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(P.a,z);case 2:case"end":return e.stop()}}),L)}var F=n(31),q=C.a.mark(K),J=C.a.mark(Y);function K(e){var t,n;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.source,c.prev=1,c.next=4,Object(A.b)(S.d,t);case 4:return n=c.sent,c.next=7,Object(A.c)(Object(F.c)(n.data));case 7:c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),console.log(c.t0);case 12:case"end":return c.stop()}}),q,null,[[1,9]])}function Y(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)(F.a,K);case 2:case"end":return e.stop()}}),J)}var $="FETCH_GENRE",B=C.a.mark(Q),V=C.a.mark(W);function Q(e){var t,n,c;return C.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,n=e.page,r.prev=1,r.next=4,Object(A.b)(S.b,t,n);case 4:return c=r.sent,r.next=7,Object(A.c)({type:"SET_GENRE",genre:c.data});case 7:r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:case"end":return r.stop()}}),B,null,[[1,9]])}function W(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)($,Q);case 2:case"end":return e.stop()}}),V)}var X=C.a.mark(Z);function Z(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([I(),M(),Y(),W()]);case 2:case"end":return e.stop()}}),X)}var ee=n(14),te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SCHEDULED":return Object(ee.a)(Object(ee.a)({},e),{},{scheduled:t.scheduled});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_UPCOMING":return Object(ee.a)(Object(ee.a)({},e),{},{upcoming:t.upcoming});default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOP_RATED":return Object(ee.a)(Object(ee.a)({},e),{},{topRated:t.topRated});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GENRE":return Object(ee.a)(Object(ee.a)({},e),{},{genre:t.genre});default:return e}},ae=Object(T.b)({scheduled:te,upcoming:ne,topRated:ce,genre:re}),ie=Object(N.a)(),oe=[ie],ue=Object(T.d)(ae,{},T.a.apply(void 0,oe));ie.run(Z),i.a.render(Object(d.jsx)(k.a,{store:ue,children:Object(d.jsx)(y,{})}),document.getElementById("root"))},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"f",(function(){return l}));var c=n(18),r=n.n(c),a="https://api.jikan.moe/v3",i=function(){return r.a.get("".concat(a,"/schedule"))},o=function(){return r.a.get("".concat(a,"/season/later"))},u=function(e){return r.a.get("".concat(a,"/top/").concat(e))},s=function(e,t){return r.a.get("".concat(a,"/genre/anime/").concat(e,"/").concat(t))},d=function(e,t){return r.a.get("https://api.jikan.moe/v3/".concat(e,"/").concat(t))},l=function(e,t){return r.a.get("https://api.jikan.moe/v3/search/anime?q="+e,{timeout:t})}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}));var c="FETCH_SCHEDULED",r=function(){return{type:c}},a=function(e){return{type:"SET_SCHEDULED",scheduled:e}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}));var c="FETCH_UPCOMING",r=function(){return{type:c}},a=function(e){return{type:"SET_UPCOMING",upcoming:e}}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a}));var c="FETCH_TOP_RATED",r=function(e){return{type:c,source:e}},a=function(e){return{type:"SET_TOP_RATED",topRated:e}}},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return d}));var c=n(61),r=n.n(c),a=(n(64),function(){return"/react-anime-check"+(/github/.test(window.location.href),"/")}),i=function(e,t){t||(t=window.location.href),t=t.toLowerCase(),e=e.replace(/[\[\]]/g,"\\$&").toLowerCase();var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},o=function(e,t){return e||t},u=function(e,t){for(var n=[],c=e;c<=t;c++)n.push(c);return n},s=function(e,t){return r()(e?e.map((function(e){var n=t.subType?"".concat(e.type,"/"):"";return t.link?'<a class="anime-link" href="'.concat(t.link||"").concat(n).concat(e.mal_id||"").concat(t.page||"",'">').concat(e.name||"","</a>"):e.name||""})).join(t.separator):"")},d=function(e,t){var n;return function(c){clearTimeout(n),n=setTimeout((function(t){n=null,e.apply(undefined,e)}),t)}}},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(1);var c=n(2);function r(){return Object(c.jsx)("div",{className:"anime-loader-wrap",children:Object(c.jsx)("div",{className:"anime-loader"})})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={baseUrl:"/",pagination:{navigation:{limit:10}}}},69:function(e,t,n){},70:function(e,t,n){},96:function(e,t){}},[[141,1,2]]]);
//# sourceMappingURL=main.efabc1fe.chunk.js.map
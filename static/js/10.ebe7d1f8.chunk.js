(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[10],{147:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return b}));var a=c(35),s=c(1),n=c(7),i=c(9),r=c(36),l=c(34),j=c(16),h=c(2);function b(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),c=t[0],b=t[1],d=Object(s.useState)(!0),u=Object(a.a)(d,2),m=u[0],o=u[1],O=new URLSearchParams(Object(n.g)().search),f=window.location.href,x=/github/.test(f)?Object(l.d)("q",f):O.get("q");return Object(s.useEffect)((function(){var e=!1;return Object(j.f)(x,6e3).then((function(t){e||(b(t.data),o(!1))})).catch((function(e){return o(!1)})),function(t){e=!0}}),[x]),Object(h.jsx)("div",{id:"content",className:"search-results",children:m?Object(h.jsx)(r.a,{}):c.results&&c.results.length?c.results.map((function(e){return Object(h.jsxs)("div",{className:"search-result flex",children:[Object(h.jsx)("div",{className:"search-left",children:Object(h.jsx)(i.b,{className:"anime-link",to:"/page/anime/"+e.mal_id,children:Object(h.jsx)("img",{src:e.image_url,alt:""})})}),Object(h.jsxs)("div",{className:"search-right",children:[Object(h.jsx)("h3",{children:Object(h.jsx)(i.b,{className:"anime-link",to:"/page/anime/"+e.mal_id,children:e.title})}),Object(h.jsx)("p",{className:"anime-excerpt",children:e.synopsis}),Object(h.jsx)(i.b,{className:"anime-btn",to:"/page/anime/"+e.mal_id,children:"Read More"})]})]},e.mal_id)})):Object(h.jsx)("div",{className:"no-result-content flex center-all",children:Object(h.jsx)("h3",{children:"Search again or try another?"})})})}}}]);
//# sourceMappingURL=10.ebe7d1f8.chunk.js.map
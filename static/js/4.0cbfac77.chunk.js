(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[4],{148:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));n(1);var i=n(41),t=n(9),c=n(2);function s(e){var a,n=e.detail,s=Object(t.h)().type,r=Object(t.f)(),l=s||"anime",d="anime"===l,o="manga"===l,j="characters"===l,b=function(e){e.preventDefault(),r.push("/page/"+l+"/"+n.mal_id)};return Object(c.jsxs)("div",{className:"anime anime-card",children:[Object(c.jsxs)("div",{className:"anime-image",children:[Object(c.jsxs)("a",{href:"page/"+l+"/"+n.mal_id,className:"anime-card-link",onClick:b,children:[Object(c.jsx)("img",{src:(null===n||void 0===n||null===(a=n.images)||void 0===a?void 0:a.webp.image_url)||n.image_url,alt:""}),d?Object(c.jsx)("span",{className:"anime-eps",children:n.episodes?"".concat(n.episodes," EPS"):"?? EPS"}):""]}),j?Object(c.jsxs)("span",{className:"character-rank-tag",children:["#",n.rank]}):"",Object(c.jsx)("div",{className:"card-title anime-title"+(j?" character-name":""),children:Object(c.jsx)("a",{className:"anime-link",href:"/page/"+l+"/"+n.mal_id,onClick:b,children:n.title})}),n.genres?Object(c.jsx)("div",{className:"anime-genre",children:Object(i.a)(n.genres,{separator:"",link:"#/genre/",page:"/1"})}):""]}),d||o?Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("i",{className:"fa fa-star-o","aria-hidden":"true"}),Object(c.jsx)("div",{className:"rating-score",children:n.score?n.score:"NA"})]}):""]})}},155:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return g}));var i=n(1),t=n(9),c=n(30),s=n(148),r=n(43),l=n(10),d=n(41),o=n(16),j=n(70),b=n(2);function m(e){var a=e.data,n=Object(i.useState)({width:window.innerWidth}),c=Object(r.a)(n,2),s=c[0],m=c[1];Object(i.useEffect)((function(e){var a=Object(d.c)((function(e){return m({width:window.innerWidth})}),200);return window.addEventListener("resize",a),function(e){window.removeEventListener("resize",a)}}),[]);var h=j.a.pagination,O=Object.entries(a.responsive||{}).find((function(e){var a=Object(r.a)(e,1)[0];return s.width<=o.b[a]}));O=(O?O[1]:null)||h.navigation.limit||10;var u=Object(t.h)(),g=u.id,v=u.pageId,p=parseInt(v),x=Math.ceil(a.total/100),f=Math.ceil(O/2),N=p+f;return Object(b.jsx)("div",{className:"anime-pagination",children:x?Object(b.jsxs)(b.Fragment,{children:[1!==p?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.b,{to:a.baseLink+"/"+g+"/1",className:"anime-pagination-link prev controls",children:"<<"}),Object(b.jsx)(l.b,{className:"anime-pagination-link prev controls",to:a.baseLink+"/"+g+"/"+(p-1),children:"<"})]}):"",function(){var e=p-(O-2),n=p+f;return p<f&&(e=1,n=O),p>=5&&(e=p+1-f,n=p+f),N>=x&&(e=x+1-O,n=x),O>x&&(e=1,n=x),Object(d.e)(e,n).map((function(e){return Object(b.jsx)(l.b,{to:(a.baseLink+"/"+g||"")+"/"+e,className:"anime-pagination-link"+(p===e?" current":""),children:e},e)}))}(),p<x?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.b,{className:"anime-pagination-link next controls",to:a.baseLink+"/"+g+"/"+(p+1),children:">"}),Object(b.jsx)(l.b,{to:a.baseLink+"/"+g+"/"+x,className:"anime-pagination-link prev controls",children:">>"})]}):""]}):""})}var h=n(42),O=n(19);function u(){var e=Object(c.b)(),a=Object(c.c)((function(e){return e})).genre,n=a.genre,r=a.loading,l=Object(t.h)(),o=l.name,j=l.id,u=l.pageId,g=Object(t.f)();return Object(i.useEffect)((function(){e(Object(O.d)(o,j,u,g))}),[e,o,j,u,g]),Object(b.jsxs)(b.Fragment,{children:[console.log(n),Object(b.jsxs)("div",{className:"head flex anime-pagination-head",children:[Object(b.jsxs)("h2",{className:"text-capitalize",children:["Genre: ",Object(d.g)(o)]}),Object(b.jsx)("div",{className:"anime-card-pagination",children:(null===n||void 0===n?void 0:n.data.length)?Object(b.jsx)(m,{data:{total:n.pagination.items.total,items:n.data,baseLink:"/genre/".concat(o),name:o,responsive:{mobile:3}}}):""})]}),Object(b.jsxs)("div",{className:"anime-pagination-body",children:[r?Object(b.jsx)(h.a,{}):"",Object(b.jsx)("div",{className:"anime-cards",children:(null===n||void 0===n?void 0:n.data.length)?n.data.map((function(e){return Object(b.jsx)(s.a,{detail:e},e.mal_id)})):""})]}),Object(b.jsx)("div",{className:"anime-card-pagination",children:(null===n||void 0===n?void 0:n.data.length)?Object(b.jsx)(m,{data:{total:n.pagination.items.total,items:n.data,baseLink:"/genre/".concat(o),responsive:{mobile:3}}}):""})]})}function g(){return Object(b.jsx)("div",{id:"content",children:Object(b.jsx)("div",{className:"box",children:Object(b.jsx)(u,{})})})}}}]);
//# sourceMappingURL=4.0cbfac77.chunk.js.map
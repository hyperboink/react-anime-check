(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[4],{144:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));n(1);var i=n(37),t=n(8),c=n(2);function s(e){var a=e.detail,n=Object(t.h)().type,s=Object(t.f)(),r=n||"anime",l="anime"===r,j="manga"===r,d="characters"===r,m=function(e){e.preventDefault(),s.push("/page/"+r+"/"+a.mal_id)};return Object(c.jsxs)("div",{className:"anime anime-card",children:[Object(c.jsxs)("div",{className:"anime-image",children:[Object(c.jsxs)("a",{href:"page/"+r+"/"+a.mal_id,className:"anime-card-link",onClick:m,children:[Object(c.jsx)("img",{src:a.image_url,alt:""}),l?Object(c.jsx)("span",{className:"anime-eps",children:a.episodes?"".concat(a.episodes," EPS"):"?? EPS"}):""]}),d?Object(c.jsxs)("span",{className:"character-rank-tag",children:["#",a.rank]}):"",Object(c.jsx)("div",{className:"card-title anime-title"+(d?" character-name":""),children:Object(c.jsx)("a",{className:"anime-link",href:"/page/"+r+"/"+a.mal_id,onClick:m,children:a.title})}),a.genres?Object(c.jsx)("div",{className:"anime-genre",children:Object(i.a)(a.genres,{separator:"",link:"#/genre/anime/",page:"/1"})}):""]}),l||j?Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("i",{className:"fa fa-star-o","aria-hidden":"true"}),Object(c.jsx)("div",{className:"rating-score",children:a.score?a.score:"NA"})]}):""]})}},151:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return O}));var i=n(1),t=n(38),c=n(8),s=n(144),r=n(9),l=n(37),j=n(22),d=n(66),m=n(2);function o(e){var a=e.data,n=Object(i.useState)({width:window.innerWidth}),s=Object(t.a)(n,2),o=s[0],b=s[1];Object(i.useEffect)((function(e){var a=Object(l.c)((function(e){return b({width:window.innerWidth})}),200);return window.addEventListener("resize",a),function(e){window.removeEventListener("resize",a)}}),[]);var h=d.a.pagination,u=Object.entries(a.responsive||{}).find((function(e){var a=Object(t.a)(e,1)[0];return o.width<=j.b[a]}));u=(u?u[1]:null)||h.navigation.limit||10;var O=Object(c.h)(),p=O.id,x=O.page,g=parseInt(x),v=Math.ceil(a.total/100),f=Math.ceil(u/2),k=g+f;return Object(m.jsx)("div",{className:"anime-pagination",children:v?Object(m.jsxs)(m.Fragment,{children:[1!==g?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r.b,{to:a.baseLink+p+"/1",className:"anime-pagination-link prev controls",children:"<<"}),Object(m.jsx)(r.b,{className:"anime-pagination-link prev controls",to:a.baseLink+p+"/"+(g-1),children:"<"})]}):"",function(){var e=g-(u-2),n=g+f;return g<f&&(e=1,n=u),g>=5&&(e=g+1-f,n=g+f),k>=v&&(e=v+1-u,n=v),u>v&&(e=1,n=v),Object(l.e)(e,n).map((function(e){return Object(m.jsx)(r.b,{to:(a.baseLink+p||"")+"/"+e,className:"anime-pagination-link"+(g===e?" current":""),children:e},e)}))}(),g<v?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(r.b,{className:"anime-pagination-link next controls",to:a.baseLink+p+"/"+(g+1),children:">"}),Object(m.jsx)(r.b,{to:a.baseLink+p+"/"+v,className:"anime-pagination-link prev controls",children:">>"})]}):""]}):""})}var b=n(39),h=n(16);function u(){var e=Object(i.useState)({}),a=Object(t.a)(e,2),n=a[0],r=a[1],l=Object(i.useState)(!0),j=Object(t.a)(l,2),d=j[0],u=j[1],O=Object(c.h)(),p=O.id,x=O.page,g=Object(c.f)();return Object(i.useEffect)((function(){var e=!1;return u(!0),Object(h.b)(p,x).then((function(a){e||(r(a.data),u(!1))})).catch((function(e){console.log(e),u(!1),g.goBack()})),function(a){e=!0}}),[p,x,g]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"head flex anime-pagination-head",children:[Object(m.jsx)("h2",{children:n.mal_url?"Genre: "+n.mal_url.name:""}),Object(m.jsx)("div",{className:"anime-card-pagination",children:n.item_count?Object(m.jsx)(o,{data:{total:n.item_count,items:n.anime,baseLink:"/genre/anime/",responsive:{mobile:3}}}):""})]}),Object(m.jsxs)("div",{className:"anime-pagination-body",children:[d?Object(m.jsx)(b.a,{}):"",Object(m.jsx)("div",{className:"anime-cards",children:n.anime?n.anime.map((function(e){return Object(m.jsx)(s.a,{detail:e},e.mal_id)})):""})]}),Object(m.jsx)("div",{className:"anime-card-pagination",children:n.item_count?Object(m.jsx)(o,{data:{total:n.item_count,items:n.anime,baseLink:"/genre/anime/",responsive:{mobile:3}}}):""})]})}function O(){return Object(m.jsx)("div",{id:"content",children:Object(m.jsx)("div",{className:"box",children:Object(m.jsx)(u,{})})})}}}]);
//# sourceMappingURL=4.3c112491.chunk.js.map
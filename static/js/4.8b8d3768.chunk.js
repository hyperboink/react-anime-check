(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[4],{142:function(e,a,n){"use strict";n.d(a,"a",(function(){return s}));n(1);var t=n(34),i=n(7),c=n(2);function s(e){var a=e.detail,n=Object(i.h)().type,s=Object(i.f)(),r=n||"anime",l="anime"===r,d="manga"===r,j="characters"===r,o=function(e){e.preventDefault(),s.push("/page/"+r+"/"+a.mal_id)};return Object(c.jsxs)("div",{className:"anime anime-card",children:[Object(c.jsxs)("div",{className:"anime-image",children:[Object(c.jsxs)("a",{href:"page/"+r+"/"+a.mal_id,className:"anime-card-link",onClick:o,children:[Object(c.jsx)("img",{src:a.image_url,alt:""}),l?Object(c.jsx)("span",{className:"anime-eps",children:a.episodes?"".concat(a.episodes," EPS"):"?? EPS"}):""]}),j?Object(c.jsxs)("span",{className:"character-rank-tag",children:["#",a.rank]}):"",Object(c.jsx)("div",{className:"card-title anime-title"+(j?" character-name":""),children:Object(c.jsx)("a",{className:"anime-link",href:"/page/"+r+"/"+a.mal_id,onClick:o,children:a.title})}),a.genres?Object(c.jsx)("div",{className:"anime-genre",children:Object(t.a)(a.genres,{separator:"",link:"#/genre/anime/",page:"/1"})}):""]}),l||d?Object(c.jsxs)("div",{className:"rating",children:[Object(c.jsx)("i",{className:"fa fa-star-o","aria-hidden":"true"}),Object(c.jsx)("div",{className:"rating-score",children:a.score?a.score:"NA"})]}):""]})}},143:function(e,a,n){"use strict";n.d(a,"b",(function(){return t})),n.d(a,"a",(function(){return i}));var t=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],i={desktop:1200,smallDesktop:979,tablet:767,mobile:480,smallMobile:320}},149:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return O}));var t=n(1),i=n(35),c=n(7),s=n(142),r=n(9),l=n(34),d=n(143),j=n(64),o=n(2);function m(e){var a=e.data,n=Object(t.useState)({width:window.innerWidth}),s=Object(i.a)(n,2),m=s[0],b=s[1];Object(t.useEffect)((function(e){var a=Object(l.c)((function(e){return b({width:window.innerWidth})}),200);return window.addEventListener("resize",a),function(e){window.removeEventListener("resize",a)}}),[]);var u=j.a.pagination,h=Object.entries(a.responsive||{}).find((function(e){var a=Object(i.a)(e,1)[0];return m.width<=d.a[a]}));h=(h?h[1]:null)||u.navigation.limit||10;var O=Object(c.h)(),p=O.id,f=O.page,v=parseInt(f),x=Math.ceil(a.total/100),g=Math.ceil(h/2),k=v+g;return Object(o.jsx)("div",{className:"anime-pagination",children:x?Object(o.jsxs)(o.Fragment,{children:[1!==v?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.b,{to:a.baseLink+p+"/1",className:"anime-pagination-link prev controls",children:"<<"}),Object(o.jsx)(r.b,{className:"anime-pagination-link prev controls",to:a.baseLink+p+"/"+(v-1),children:"<"})]}):"",function(){var e=v-(h-2),n=v+g;return v<g&&(e=1,n=h),v>=5&&(e=v+1-g,n=v+g),k>=x&&(e=x+1-h,n=x),h>x&&(e=1,n=x),Object(l.f)(e,n).map((function(e){return Object(o.jsx)(r.b,{to:(a.baseLink+p||"")+"/"+e,className:"anime-pagination-link"+(v===e?" current":""),children:e},e)}))}(),v<x?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.b,{className:"anime-pagination-link next controls",to:a.baseLink+p+"/"+(v+1),children:">"}),Object(o.jsx)(r.b,{to:a.baseLink+p+"/"+x,className:"anime-pagination-link prev controls",children:">>"})]}):""]}):""})}var b=n(36),u=n(16);function h(){var e=Object(t.useState)({}),a=Object(i.a)(e,2),n=a[0],r=a[1],l=Object(t.useState)(!0),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(c.h)(),p=O.id,f=O.page,v=Object(c.f)();return Object(t.useEffect)((function(){var e=!1;return h(!0),Object(u.b)(p,f).then((function(a){e||(r(a.data),h(!1))})).catch((function(e){console.log(e),h(!1),v.goBack()})),function(a){e=!0}}),[p,f,v]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"head flex anime-pagination-head",children:[Object(o.jsx)("h2",{children:n.mal_url?"Genre: "+n.mal_url.name:""}),Object(o.jsx)("div",{className:"anime-card-pagination",children:n.item_count?Object(o.jsx)(m,{data:{total:n.item_count,items:n.anime,baseLink:"/genre/anime/",responsive:{mobile:3}}}):""})]}),Object(o.jsxs)("div",{className:"anime-pagination-body",children:[j?Object(o.jsx)(b.a,{}):"",Object(o.jsx)("div",{className:"anime-cards",children:n.anime?n.anime.map((function(e){return Object(o.jsx)(s.a,{detail:e},e.mal_id)})):""})]}),Object(o.jsx)("div",{className:"anime-card-pagination",children:n.item_count?Object(o.jsx)(m,{data:{total:n.item_count,items:n.anime,baseLink:"/genre/anime/",responsive:{mobile:3}}}):""})]})}function O(){return Object(o.jsx)("div",{id:"content",children:Object(o.jsx)("div",{className:"box",children:Object(o.jsx)(h,{})})})}}}]);
//# sourceMappingURL=4.8b8d3768.chunk.js.map
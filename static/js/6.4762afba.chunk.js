(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[6],{142:function(e,a,c){"use strict";c.d(a,"a",(function(){return s}));c(1);var t=c(34),n=c(7),i=c(2);function s(e){var a=e.detail,c=Object(n.h)().type,s=Object(n.f)(),r=c||"anime",l="anime"===r,d="manga"===r,j="characters"===r,m=function(e){e.preventDefault(),s.push("/page/"+r+"/"+a.mal_id)};return Object(i.jsxs)("div",{className:"anime anime-card",children:[Object(i.jsxs)("div",{className:"anime-image",children:[Object(i.jsxs)("a",{href:"page/"+r+"/"+a.mal_id,className:"anime-card-link",onClick:m,children:[Object(i.jsx)("img",{src:a.image_url,alt:""}),l?Object(i.jsx)("span",{className:"anime-eps",children:a.episodes?"".concat(a.episodes," EPS"):"?? EPS"}):""]}),j?Object(i.jsxs)("span",{className:"character-rank-tag",children:["#",a.rank]}):"",Object(i.jsx)("div",{className:"card-title anime-title"+(j?" character-name":""),children:Object(i.jsx)("a",{className:"anime-link",href:"/page/"+r+"/"+a.mal_id,onClick:m,children:a.title})}),a.genres?Object(i.jsx)("div",{className:"anime-genre",children:Object(t.a)(a.genres,{separator:"",link:"#/genre/anime/",page:"/1"})}):""]}),l||d?Object(i.jsxs)("div",{className:"rating",children:[Object(i.jsx)("i",{className:"fa fa-star-o","aria-hidden":"true"}),Object(i.jsx)("div",{className:"rating-score",children:a.score?a.score:"NA"})]}):""]})}},152:function(e,a,c){"use strict";c.r(a),c.d(a,"default",(function(){return j}));var t=c(1),n=c(37),i=c(7),s=c(142),r=c(31),l=c(2);function d(){var e=Object(n.c)((function(e){return e.topRated})).topRated,a=Object(n.b)(),c=Object(i.h)().type||"anime";return Object(t.useEffect)((function(){a(Object(r.b)(c))}),[a,c]),Object(l.jsx)("div",{id:"content",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("div",{className:"head",children:Object(l.jsxs)("h2",{className:"text-capitalize",children:["Top Rated ",null===e||void 0===e?void 0:e.top.length," ",c]})}),Object(l.jsx)("div",{className:"anime-cards",children:(null===e||void 0===e?void 0:e.top)?e.top.map((function(e){return Object(l.jsx)(s.a,{detail:e,noEpsTag:"anime"!==c&&"manga"!==c},e.mal_id)})):""})]})})}function j(){return Object(l.jsx)(d,{})}}}]);
//# sourceMappingURL=6.4762afba.chunk.js.map
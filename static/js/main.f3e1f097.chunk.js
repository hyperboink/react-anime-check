(this["webpackJsonpreact-anime-checker"]=this["webpackJsonpreact-anime-checker"]||[]).push([[0],{129:function(e,n,c){"use strict";c.r(n);var a=c(1),i=c.n(a),t=c(18),r=c.n(t),s=(c(57),c(58),c(4)),l=c(3),j=c(50),d=c.n(j),h={navigation:{limit:10,byRouter:!0}},o=function(){return"/react-anime-checker"+(/github/.test(window.location.href),"/#/")},b=function(e,n){return e||n},m=function(e,n){return d()(e?e.map((function(e){var c=n.subType?"".concat(e.type,"/"):"";return n.link?'<a class="anime-link" href="'.concat(n.link||"").concat(c).concat(e.mal_id||"").concat(n.page||"",'">').concat(e.name||"","</a>"):e.name||""})).join(n.separator):"")},O=c(0);function x(){return Object(O.jsx)("div",{id:"search",children:Object(O.jsxs)("form",{action:o()+"search/anime?q=",children:[Object(O.jsx)("input",{type:"text",name:"q",placeholder:"Search anime here...",id:"search-field",className:"blink search-field"}),Object(O.jsx)("button",{type:"submit",className:"search-button",children:"GO!"})]})})}function u(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{id:"header",children:[Object(O.jsx)("h1",{id:"logo",children:Object(O.jsx)(s.b,{to:"/",children:"AnimeCheck"})}),Object(O.jsx)("div",{id:"navigation",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/",children:"HOME"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/upcoming",children:"ANIME"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/top-rated/manga",children:"MANGA"})})]})}),Object(O.jsxs)("div",{id:"sub-navigation",children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/",children:"LATEST"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/upcoming",children:"UPCOMING"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/top-rated",children:"TOP RATED"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/top-rated/characters",children:"CHARACTER RANKING"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/genres",children:"GENRES"})})]}),Object(O.jsx)(x,{})]})]})})}function f(){return Object(O.jsx)("div",{id:"footer",children:Object(O.jsxs)("div",{className:"footer-con flex",children:[Object(O.jsx)("div",{className:"nav footer-nav",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/",children:"LATEST"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/upcoming",children:"UPCOMING"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/top-rated",children:"TOP RATED"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/top-rated/characters",children:"CHARACTER RANKING"})}),Object(O.jsx)("li",{children:Object(O.jsx)(s.b,{to:"/top-rated/manga",children:"MANGA"})})]})}),Object(O.jsxs)("div",{className:"copyright",children:["Copyright \xa9 2021 ",Object(O.jsx)("a",{href:"/",children:"Hyperboink"})," - All Rights Reserved"]})]})})}var p=c(5),g=c(11),N=c.n(g);function v(e){var n=e.detail,c=Object(l.h)().type,a=c||"anime",i="anime"===a,t="manga"===a,r="characters"===a;return Object(O.jsxs)("div",{className:"anime anime-card",children:[Object(O.jsxs)("div",{className:"anime-image",children:[Object(O.jsxs)("a",{href:o()+"page/"+a+"/"+n.mal_id,className:"anime-card-link",children:[Object(O.jsx)("img",{src:n.image_url,alt:""}),i?Object(O.jsx)("span",{className:"anime-eps",children:n.episodes?"".concat(n.episodes," EPS"):"?? EPS"}):""]}),r?Object(O.jsxs)("span",{className:"character-rank-tag",children:["#",n.rank]}):"",Object(O.jsx)("div",{className:"card-title anime-title"+(r?" character-name":""),children:Object(O.jsx)("a",{className:"anime-link",href:"/page/"+a+"/"+n.mal_id,children:n.title})}),n.genres?Object(O.jsx)("div",{className:"anime-genre",children:m(n.genres,{separator:" / ",link:o()+"genre/anime/",page:"/1"})}):""]}),i||t?Object(O.jsxs)("div",{className:"rating",children:[Object(O.jsx)("p",{children:"RATING"}),Object(O.jsxs)("div",{className:"star",children:[Object(O.jsx)("div",{className:"rating-star"}),Object(O.jsx)("div",{className:"rating-score",children:n.score?n.score:"NA"})]})]}):""]})}var k=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],y=function(){return k[(new Date).getDay()]},E=function(e){return new Date(e).toLocaleDateString("en-US")};function A(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),c=n[0],i=n[1],t=k.concat(["other","unknown"]);return Object(a.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/schedule").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(O.jsxs)(O.Fragment,{children:[c[y()]?c[y()].map((function(e){return Object(O.jsx)(v,{detail:e},e.mal_id)})):"",c?Object.entries(c).map((function(e){var n=Object(p.a)(e,2),c=n[0],a=n[1];return t.includes(c)&&c!==y()?Object.entries(a).map((function(e){var n=Object(p.a)(e,2),c=(n[0],n[1]);return Object(O.jsx)(v,{detail:c},c.mal_id)})):""})):""]})}function S(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{id:"content",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"head",children:Object(O.jsx)("h2",{children:"NEW RELEASES"})}),Object(O.jsx)("div",{className:"anime-cards",children:Object(O.jsx)(A,{})})]})})})}function _(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/season/later").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(O.jsx)(O.Fragment,{children:c.anime?c.anime.map((function(e){return Object(O.jsx)(v,{detail:e},e.mal_id)})):""})}function R(){return Object(O.jsx)("div",{id:"content",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"head",children:Object(O.jsx)("h2",{children:"UPCOMING"})}),Object(O.jsx)("div",{className:"anime-cards",children:Object(O.jsx)(_,{})})]})})}function w(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),c=n[0],i=n[1],t=Object(l.h)().type,r=t||"anime",s=r.toUpperCase();return Object(a.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/top/"+r).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[r]),Object(O.jsx)("div",{id:"content",children:Object(O.jsxs)("div",{className:"box",children:[Object(O.jsx)("div",{className:"head",children:Object(O.jsxs)("h2",{children:["TOP RATED ",s]})}),Object(O.jsx)("div",{className:"anime-cards",children:c.top?c.top.map((function(e){return Object(O.jsx)(v,{detail:e,noEpsTag:"anime"!==r&&"manga"!==r},e.mal_id)})):""})]})})}function T(){return Object(O.jsx)(w,{})}function C(){return Object(O.jsxs)("div",{id:"content",className:"genres-content",children:[Object(O.jsx)("h2",{children:"Genres"}),Object(O.jsxs)("ul",{className:"anime-genre-list",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/1/1",children:"Action"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/2/1",children:"Adventure"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/3/1",children:"Cars"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/4/1",children:"Comedy"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/5/1",children:"Dementia"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/6/1",children:"Demons"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/7/1",children:"Drama"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/8/1",children:"Ecchi"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/9/1",children:"Fantasy"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/10/1",children:"Game"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/11/1",children:"Harem"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/12/1",children:"Hentai"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/13/1",children:"Historical"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/14/1",children:"Horror"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/15/1",children:"Josei"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/16/1",children:"Kids"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/17/1",children:"Magic"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/18/1",children:"Martial Arts"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/19/1",children:"Mecha"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/10/1",children:"Military"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/20/1",children:"Music"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/21/1",children:"Mystery"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/22/1",children:"Parody"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/23/1",children:"Police"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/24/1",children:"Psychological"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/25/1",children:"Romance"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/26/1",children:"Samurai"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/27/1",children:"School"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/28/1",children:"Sci-Fi"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/29/1",children:"Seinen"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/30/1",children:"Shoujo"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/31/1",children:"Shoujo Ai"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/32/1",children:"Shounen"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/33/1",children:"Shounen Ai"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/34/1",children:"Slice of Life"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/35/1",children:"Space"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/36/1",children:"Sports"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/37/1",children:"Super Power"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/38/1",children:"Supernatural"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/39/1",children:"Thriller"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/40/1",children:"Vampire"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/41/1",children:"Yaoi"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"anime-link",href:o()+"genre/anime/42/1",children:"Yuri"})})]})]})}var D=c(26),L=c.n(D),P=c(51),G=c(19);function M(e){var n=e.data,c=Object(l.f)(),a=Object(l.h)(),i=a.id,t=a.page,r=Object(G.b)(),s=h,j=parseInt(t),d=Math.ceil(n.total/100),b=s.navigation.limit,m=Math.ceil(b/2),x=j+m,u=function(e){r({type:"PAGINATE_NEXT",payload:n}),c.push("".concat(n.baseLink+i||"","/").concat(e))};return Object(O.jsx)("div",{className:"anime-pagination",children:d?Object(O.jsxs)(O.Fragment,{children:[1!==j?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("a",{href:o()+n.baseLink+i+"/1",className:"anime-pagination-link prev controls",onClick:function(e){s.navigation.byRouter&&(e.preventDefault(),u(1))},children:"<<"}),Object(O.jsx)("a",{className:"anime-pagination-link prev controls",href:o()+n.baseLink+i+"/"+(j-1),onClick:function(e){s.navigation.byRouter&&(e.preventDefault(),u(j-1))},children:"<"})]}):"",function(){var e=j-(b-2),c=j+m;return j<m&&(e=1,c=b),j>=5&&(e=j+1-m,c=j+m),x>=d&&(e=d+1-b,c=d),b>d&&(e=1,c=d),function(e,n){for(var c=[],a=e;a<=n;a++)c.push(a);return c}(e,c).map((function(e){return Object(O.jsx)("a",{href:o()+(n.baseLink+i||"")+"/"+e,className:"anime-pagination-link"+(j===e?" current":""),onClick:function(n){s.navigation.byRouter&&(n.preventDefault(),u(e))},children:e},e)}))}(),j<d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("a",{className:"anime-pagination-link next controls",href:o()+n.baseLink+i+"/"+(j+1),onClick:function(e){s.navigation.byRouter&&(e.preventDefault(),u(j+1))},children:">"}),Object(O.jsx)("a",{href:o()+n.baseLink+i+"/"+d,className:"anime-pagination-link prev controls",onClick:function(e){s.navigation.byRouter&&(e.preventDefault(),u(d))},children:">>"})]}):""]}):""})}function I(){return Object(O.jsx)("div",{className:"anime-loader-wrap",children:Object(O.jsx)("div",{className:"anime-loader"})})}function H(){var e=Object(a.useState)({}),n=Object(p.a)(e,2),c=n[0],i=n[1],t=Object(a.useState)(!0),r=Object(p.a)(t,2),s=r[0],j=r[1],d=Object(l.h)(),h=d.id,o=d.page,b=Object(l.f)();return Object(a.useEffect)((function(){(function(){var e=Object(P.a)(L.a.mark((function e(){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,N()("https://api.jikan.moe/v3/genre/anime/".concat(h,"/").concat(o));case 4:n=e.sent,i(n.data),j(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),j(!1),b.goBack();case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[h,o,b]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"head flex anime-pagination-head",children:[Object(O.jsx)("h1",{children:c.mal_url?"Genre: "+c.mal_url.name:""}),Object(O.jsx)("div",{className:"anime-card-pagination",children:c.item_count?Object(O.jsx)(M,{data:{total:c.item_count,items:c.anime,baseLink:"/genre/anime/",byRouter:!0}}):""})]}),Object(O.jsxs)("div",{className:"anime-pagination-body",children:[s?Object(O.jsx)(I,{}):"",Object(O.jsx)("div",{className:"anime-cards",children:c.anime?c.anime.map((function(e){return Object(O.jsx)(v,{detail:e},e.mal_id)})):""})]}),Object(O.jsx)("div",{className:"anime-card-pagination",children:c.item_count?Object(O.jsx)(M,{data:{total:c.item_count,items:c.anime,baseLink:"/genre/anime/",byRouter:!0}}):""})]})}function F(){return Object(O.jsx)("div",{id:"content",children:Object(O.jsx)("div",{className:"box",children:Object(O.jsx)(H,{})})})}function U(){var e=Object(l.h)(),n=e.id,c=e.type,i="characters"===c?"character":c,t=Object(a.useState)([]),r=Object(p.a)(t,2),s=r[0],j=r[1];return Object(a.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/".concat(i,"/").concat(n)).then((function(e){return j(e.data)})).catch((function(e){return console.log(e)}))}),[c,i,n]),Object(O.jsxs)("div",{className:"single-page flex",children:[Object(O.jsxs)("div",{className:"single-page-side",children:[Object(O.jsx)("div",{className:"featured-img",children:Object(O.jsx)("img",{src:s.image_url,alt:""})}),"character"!==i?Object(O.jsx)("div",{className:"single-page-side-info",children:Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:["Status: ",s.status]}),Object(O.jsxs)("li",{children:["Aired: ",s.aired?E(s.aired.from):"??"," - ",s.aired&&s.aired.to?E(s.aired.to):"??"]}),Object(O.jsxs)("li",{children:["Type: ",s.type]}),Object(O.jsxs)("li",{children:["Episodes: ",s.episodes||"??"]}),Object(O.jsxs)("li",{children:["Genre: ",m(s.genres,{separator:" / ",link:"/genre/anime/",page:"/1"})]}),Object(O.jsxs)("li",{children:["Producers: ",m(s.producers,{separator:", "})]}),Object(O.jsxs)("li",{children:["Studios: ",m(s.studios,{separator:", "})]}),Object(O.jsxs)("li",{children:["Licensors: ",s.licensors&&s.licensors.length?m(s.licensors,{separator:", "}):"NA"]}),Object(O.jsxs)("li",{children:["Duration: ",b(s.duration,"NA")]}),Object(O.jsxs)("li",{children:["Rating: ",s.rating]}),Object(O.jsxs)("li",{children:["Score: ",b(s.score,"NA")]}),Object(O.jsxs)("li",{children:["Rank: ",b(s.rank,"NA")]})]})}):""]}),Object(O.jsxs)("div",{className:"single-page-content",children:[Object(O.jsx)("h1",{className:"single-page-title page-title",children:s.title||s.name}),Object(O.jsx)("p",{children:s.synopsis||s.about}),s.trailer_url&&"anime"===c?Object(O.jsxs)("div",{className:"trailer",children:[Object(O.jsx)("h3",{children:"Trailer"}),Object(O.jsx)("iframe",{width:"100%",height:"400",src:s.trailer_url,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):"","character"!==i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{className:"related-title",children:"Other Information"}),Object(O.jsx)("div",{className:"related-info",children:s.related?Object.entries(s.related).map((function(e){var n=Object(p.a)(e,2),c=n[0],a=n[1];return Object(O.jsxs)("div",{className:"related-info-con",children:[Object(O.jsxs)("strong",{children:[c,": "]}),m(a,{separator:", ",link:"/page/",subType:!0})]})})):""})]}):""]})]})}function X(){var e=Object(a.useState)([]),n=Object(p.a)(e,2),c=n[0],i=n[1],t=Object(a.useState)(!0),r=Object(p.a)(t,2),s=r[0],j=r[1],d=new URLSearchParams(Object(l.g)().search),h=window.location.href,o=/github/.test(h)?function(e,n){n||(n=window.location.href),n=n.toLowerCase(),e=e.replace(/[\[\]]/g,"\\$&").toLowerCase();var c=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(n);return c?c[2]?decodeURIComponent(c[2].replace(/\+/g," ")):"":null}("q",h):d.get("q");return Object(a.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/search/anime?q="+o,{timeout:6e3}).then((function(e){i(e.data),j(!1)})).catch((function(e){return j(!1)}))}),[o]),Object(O.jsx)("div",{id:"content",className:"search-results",children:s?Object(O.jsx)(I,{}):c.results&&c.results.length?c.results.map((function(e){return Object(O.jsxs)("div",{className:"search-result flex",children:[Object(O.jsx)("div",{className:"search-left",children:Object(O.jsx)("a",{className:"anime-link",href:"//page/anime/"+e.mal_id,children:Object(O.jsx)("img",{src:e.image_url,alt:""})})}),Object(O.jsxs)("div",{className:"search-right",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("a",{className:"anime-link",href:"/page/anime/"+e.mal_id,children:e.title})}),Object(O.jsx)("p",{className:"anime-excerpt",children:e.synopsis}),Object(O.jsx)("a",{className:"anime-btn",href:"/page/anime/"+e.mal_id,children:"Read More"})]})]},e.mal_id)})):Object(O.jsx)("div",{className:"no-result-content flex center-all",children:Object(O.jsx)("h3",{children:"Search again or try another?"})})})}function q(){return Object(O.jsx)("div",{id:"content",className:"page-not-found center-all flex",children:Object(O.jsxs)("div",{className:"text-center",children:[Object(O.jsx)("h1",{children:"Error 404"}),Object(O.jsx)("p",{children:"You are lost! The page your are looking for could not be found."}),Object(O.jsx)("a",{className:"anime-link",href:"/",children:"Go to Home?"})]})})}var V=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{className:"wrap",children:[Object(O.jsx)(u,{}),Object(O.jsx)("div",{id:"main",children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(O.jsx)(l.a,{path:"/upcoming",component:R}),Object(O.jsx)(l.a,{path:"/top-rated/:type",component:T}),Object(O.jsx)(l.a,{path:"/top-rated",component:T}),Object(O.jsx)(l.a,{path:"/genres",component:C}),Object(O.jsx)(l.a,{path:"/genre/anime/:id/:page",component:F}),Object(O.jsx)(l.a,{path:"/page/:type/:id",component:U}),Object(O.jsx)(l.a,{path:"/search",component:X}),Object(O.jsx)(l.a,{component:q})]})}),Object(O.jsx)(f,{})]})})})},Y=c(20),B=c(7),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SEARCH_ANIME":case"SEARCH_MANGA":case"SEARCH_CHARACTER":case"SEARCH_PEOPLE":return Object(B.a)(Object(B.a)({},e),{},{action:n});default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"PAGINATE_NEXT":case"PAGINATE_PREV":return Object(B.a)(Object(B.a)({},e),{},{action:n});default:return e}},$=Object(Y.a)({searchReducer:J,paginateReducer:K}),W=Object(Y.b)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(G.a,{store:W,children:Object(O.jsx)(V,{})})}),document.getElementById("root"))},57:function(e,n,c){},58:function(e,n,c){},83:function(e,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.f3e1f097.chunk.js.map
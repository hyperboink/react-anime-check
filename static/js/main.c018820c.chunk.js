(this["webpackJsonpreact-anime-check"]=this["webpackJsonpreact-anime-check"]||[]).push([[0],{129:function(e,c,n){"use strict";n.r(c);var t=n(1),i=n.n(t),a=n(18),s=n.n(a),r=(n(57),n(58),n(2)),l=n(4),j=n(5),d=n(49),o=n.n(d),b={navigation:{limit:10}},m=function(e,c){return e||c},h=function(e,c){return o()(e?e.map((function(e){var n=c.subType?"".concat(e.type,"/"):"";return c.link?'<a class="anime-link" href="'.concat(c.link||"").concat(n).concat(e.mal_id||"").concat(c.page||"",'">').concat(e.name||"","</a>"):e.name||""})).join(c.separator):"")},O=function(e,c){var n;return function(t){clearTimeout(n),n=setTimeout((function(c){n=null,e.apply(undefined,e)}),c)}},x=n(0);function u(){return Object(x.jsx)("div",{id:"search",children:Object(x.jsxs)("form",{action:"/react-anime-checksearch/anime?q=",children:[Object(x.jsx)("input",{type:"text",name:"q",placeholder:"Search anime here...",id:"search-field",className:"blink search-field"}),Object(x.jsx)("button",{type:"submit",className:"search-button",children:"GO!"})]})})}function p(){var e=Object(t.useState)(window.pageYOffset),c=Object(j.a)(e,2),n=c[0],i=c[1];Object(t.useEffect)((function(e){var c=O((function(e){return i(window.pageYOffset)}),150);return window.addEventListener("scroll",c),function(e){window.removeEventListener("scroll",c)}}),[]);var a=Object(t.useRef)(),s=n>=450?" show":"";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"go-top"+s,onClick:function(){return a.current.scrollIntoView({behavior:"smooth"})},children:Object(x.jsx)("i",{className:"fa fa-angle-up","aria-hidden":"true"})}),Object(x.jsxs)("div",{id:"header",children:[Object(x.jsxs)("div",{className:"header-top clear",children:[Object(x.jsx)("h1",{id:"logo",className:"left",children:Object(x.jsx)(r.b,{to:"/react-anime-check",children:"AnimeCheck"})}),Object(x.jsx)("div",{className:"header-right right",ref:a,children:Object(x.jsx)(u,{})})]}),Object(x.jsx)("div",{id:"navigation",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-check",children:"LATEST"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-checkupcoming",children:"UPCOMING"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-checktop-rated",children:"TOP RATED"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-checktop-rated/characters",children:"CHARACTER RANKING"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-checkgenres",children:"GENRES"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-checktop-rated/manga",children:"MANGA"})})]})})]})]})}function g(){return Object(x.jsx)("div",{id:"footer",children:Object(x.jsxs)("div",{className:"footer-con flex",children:[Object(x.jsx)("div",{className:"nav footer-nav",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-check/",children:"LATEST"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-check/upcoming",children:"UPCOMING"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-checktop-rated",children:"TOP RATED"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-check/top-rated/characters",children:"CHARACTER RANKING"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/react-anime-check/top-rated/manga",children:"MANGA"})})]})}),Object(x.jsxs)("div",{className:"copyright",children:["Copyright \xa9 2021 ",Object(x.jsx)("a",{href:"http://www.hyperboink.net",children:"Hyperboink"})," - All Rights Reserved"]})]})})}var f=n(11),N=n.n(f);function v(e){var c=e.detail,n=Object(l.h)().type,t=n||"anime",i="anime"===t,a="manga"===t,s="characters"===t;return Object(x.jsxs)("div",{className:"anime anime-card",children:[Object(x.jsxs)("div",{className:"anime-image",children:[Object(x.jsxs)(r.b,{to:"/react-anime-checkpage/"+t+"/"+c.mal_id,className:"anime-card-link",children:[Object(x.jsx)("img",{src:c.image_url,alt:""}),i?Object(x.jsx)("span",{className:"anime-eps",children:c.episodes?"".concat(c.episodes," EPS"):"?? EPS"}):""]}),s?Object(x.jsxs)("span",{className:"character-rank-tag",children:["#",c.rank]}):"",Object(x.jsx)("div",{className:"card-title anime-title"+(s?" character-name":""),children:Object(x.jsx)(r.b,{className:"anime-link",to:"/page/"+t+"/"+c.mal_id,children:c.title})}),c.genres?Object(x.jsx)("div",{className:"anime-genre",children:h(c.genres,{separator:"",link:"/react-anime-checkgenre/anime/",page:"/1"})}):""]}),i||a?Object(x.jsxs)("div",{className:"rating",children:[Object(x.jsx)("i",{className:"fa fa-star-o","aria-hidden":"true"}),Object(x.jsx)("div",{className:"rating-score",children:c.score?c.score:"NA"})]}):""]})}var k=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],w={desktop:1200,smallDesktop:979,tablet:767,mobile:480,smallMobile:320},E=function(){return k[(new Date).getDay()]},S=function(e){return new Date(e).toLocaleDateString("en-US")};function y(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),n=c[0],i=c[1],a=k.concat(["other","unknown"]);return Object(t.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/schedule").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[n[E()]?n[E()].map((function(e){return Object(x.jsx)(v,{detail:e},e.mal_id)})):"",n?Object.entries(n).map((function(e){var c=Object(j.a)(e,2),n=c[0],t=c[1];return a.includes(n)&&n!==E()?Object.entries(t).map((function(e){var c=Object(j.a)(e,2),n=(c[0],c[1]);return Object(x.jsx)(v,{detail:n},n.mal_id)})):""})):""]})}function A(){return Object(x.jsx)("div",{id:"content",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"head",children:Object(x.jsx)("h2",{children:"New Releases"})}),Object(x.jsx)("div",{className:"anime-cards",children:Object(x.jsx)(y,{})})]})})}function _(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),n=c[0],i=c[1];return Object(t.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/season/later").then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(x.jsx)(x.Fragment,{children:n.anime?n.anime.map((function(e){return Object(x.jsx)(v,{detail:e},e.mal_id)})):""})}function R(){return Object(x.jsx)("div",{id:"content",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"head",children:Object(x.jsx)("h2",{children:"Upcoming"})}),Object(x.jsx)("div",{className:"anime-cards",children:Object(x.jsx)(_,{})})]})})}function T(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),n=c[0],i=c[1],a=Object(l.h)().type,s=a||"anime";return Object(t.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/top/"+s).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}),[s]),Object(x.jsx)("div",{id:"content",children:Object(x.jsxs)("div",{className:"box",children:[Object(x.jsx)("div",{className:"head",children:Object(x.jsxs)("h2",{className:"text-capitalize",children:["Top Rated 50 ",s]})}),Object(x.jsx)("div",{className:"anime-cards",children:n.top?n.top.map((function(e){return Object(x.jsx)(v,{detail:e,noEpsTag:"anime"!==s&&"manga"!==s},e.mal_id)})):""})]})})}function L(){return Object(x.jsx)(T,{})}function C(){return Object(x.jsxs)("div",{id:"content",className:"genres-content",children:[Object(x.jsx)("h2",{children:"Genres"}),Object(x.jsxs)("ul",{className:"anime-genre-list",children:[Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/1/1",children:"Action"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/2/1",children:"Adventure"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/3/1",children:"Cars"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/4/1",children:"Comedy"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/5/1",children:"Dementia"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/6/1",children:"Demons"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/7/1",children:"Drama"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/8/1",children:"Ecchi"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/9/1",children:"Fantasy"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/10/1",children:"Game"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/11/1",children:"Harem"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/12/1",children:"Hentai"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/13/1",children:"Historical"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/14/1",children:"Horror"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/15/1",children:"Josei"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/16/1",children:"Kids"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/17/1",children:"Magic"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/18/1",children:"Martial Arts"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/19/1",children:"Mecha"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/10/1",children:"Military"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/20/1",children:"Music"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/21/1",children:"Mystery"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/22/1",children:"Parody"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/23/1",children:"Police"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/24/1",children:"Psychological"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/25/1",children:"Romance"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/26/1",children:"Samurai"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/27/1",children:"School"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/28/1",children:"Sci-Fi"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/29/1",children:"Seinen"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/30/1",children:"Shoujo"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/31/1",children:"Shoujo Ai"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/32/1",children:"Shounen"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/33/1",children:"Shounen Ai"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/34/1",children:"Slice of Life"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/35/1",children:"Space"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/36/1",children:"Sports"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/37/1",children:"Super Power"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/38/1",children:"Supernatural"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/39/1",children:"Thriller"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/40/1",children:"Vampire"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/41/1",children:"Yaoi"})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{className:"anime-link",to:"/genre/anime/42/1",children:"Yuri"})})]})]})}var M=n(25),P=n.n(M),G=n(50);function D(e){var c=e.data,n=Object(t.useState)({width:window.innerWidth}),i=Object(j.a)(n,2),a=i[0],s=i[1];Object(t.useEffect)((function(e){var c=O((function(e){return s({width:window.innerWidth})}),200);return window.addEventListener("resize",c),function(e){window.removeEventListener("resize",c)}}),[]);var d=b,o=Object.entries(c.responsive||{}).find((function(e){var c=Object(j.a)(e,1)[0];return a.width<=w[c]}));o=(o?o[1]:null)||d.navigation.limit||10;var m=Object(l.h)(),h=m.id,u=m.page,p=parseInt(u),g=Math.ceil(c.total/100),f=Math.ceil(o/2),N=p+f;return Object(x.jsx)("div",{className:"anime-pagination",children:g?Object(x.jsxs)(x.Fragment,{children:[1!==p?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.b,{to:"/react-anime-check"+c.baseLink+h+"/1",className:"anime-pagination-link prev controls",children:"<<"}),Object(x.jsx)(r.b,{className:"anime-pagination-link prev controls",to:"/react-anime-check"+c.baseLink+h+"/"+(p-1),children:"<"})]}):"",function(){var e=p-(o-2),n=p+f;return p<f&&(e=1,n=o),p>=5&&(e=p+1-f,n=p+f),N>=g&&(e=g+1-o,n=g),o>g&&(e=1,n=g),function(e,c){for(var n=[],t=e;t<=c;t++)n.push(t);return n}(e,n).map((function(e){return Object(x.jsx)(r.b,{to:"/react-anime-check"+(c.baseLink+h||"")+"/"+e,className:"anime-pagination-link"+(p===e?" current":""),children:e},e)}))}(),p<g?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.b,{className:"anime-pagination-link next controls",to:"/react-anime-check"+c.baseLink+h+"/"+(p+1),children:">"}),Object(x.jsx)(r.b,{to:"/react-anime-check"+c.baseLink+h+"/"+g,className:"anime-pagination-link prev controls",children:">>"})]}):""]}):""})}function H(){return Object(x.jsx)("div",{className:"anime-loader-wrap",children:Object(x.jsx)("div",{className:"anime-loader"})})}function I(){var e=Object(t.useState)({}),c=Object(j.a)(e,2),n=c[0],i=c[1],a=Object(t.useState)(!0),s=Object(j.a)(a,2),r=s[0],d=s[1],o=Object(l.h)(),b=o.id,m=o.page,h=Object(l.f)();return Object(t.useEffect)((function(){(function(){var e=Object(G.a)(P.a.mark((function e(){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,N()("https://api.jikan.moe/v3/genre/anime/".concat(b,"/").concat(m));case 4:c=e.sent,i(c.data),d(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),d(!1),h.goBack();case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}})()()}),[b,m,h]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"head flex anime-pagination-head",children:[Object(x.jsx)("h2",{children:n.mal_url?"Genre: "+n.mal_url.name:""}),Object(x.jsx)("div",{className:"anime-card-pagination",children:n.item_count?Object(x.jsx)(D,{data:{total:n.item_count,items:n.anime,baseLink:"genre/anime/",responsive:{mobile:4}}}):""})]}),Object(x.jsxs)("div",{className:"anime-pagination-body",children:[r?Object(x.jsx)(H,{}):"",Object(x.jsx)("div",{className:"anime-cards",children:n.anime?n.anime.map((function(e){return Object(x.jsx)(v,{detail:e},e.mal_id)})):""})]}),Object(x.jsx)("div",{className:"anime-card-pagination",children:n.item_count?Object(x.jsx)(D,{data:{total:n.item_count,items:n.anime,baseLink:"genre/anime/"}}):""})]})}function F(){return Object(x.jsx)("div",{id:"content",children:Object(x.jsx)("div",{className:"box",children:Object(x.jsx)(I,{})})})}function U(){var e=Object(l.h)(),c=e.id,n=e.type,i="characters"===n?"character":n,a=Object(t.useState)([]),s=Object(j.a)(a,2),r=s[0],d=s[1];return Object(t.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/".concat(i,"/").concat(c)).then((function(e){return d(e.data)})).catch((function(e){return console.log(e)}))}),[n,i,c]),Object(x.jsxs)("div",{className:"single-page flex",children:[Object(x.jsxs)("div",{className:"single-page-side",children:[Object(x.jsx)("div",{className:"featured-img",children:Object(x.jsx)("img",{src:r.image_url,alt:""})}),"character"!==i?Object(x.jsx)("div",{className:"single-page-side-info",children:Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Status: ",r.status]}),Object(x.jsxs)("li",{children:["Aired: ",r.aired?S(r.aired.from):"??"," - ",r.aired&&r.aired.to?S(r.aired.to):"??"]}),Object(x.jsxs)("li",{children:["Type: ",r.type]}),Object(x.jsxs)("li",{children:["Episodes: ",r.episodes||"??"]}),Object(x.jsxs)("li",{children:["Genre: ",h(r.genres,{separator:" / ",link:"/genre/anime/",page:"/1"})]}),Object(x.jsxs)("li",{children:["Producers: ",h(r.producers,{separator:", "})]}),Object(x.jsxs)("li",{children:["Studios: ",h(r.studios,{separator:", "})]}),Object(x.jsxs)("li",{children:["Licensors: ",r.licensors&&r.licensors.length?h(r.licensors,{separator:", "}):"NA"]}),Object(x.jsxs)("li",{children:["Duration: ",m(r.duration,"NA")]}),Object(x.jsxs)("li",{children:["Rating: ",r.rating]}),Object(x.jsxs)("li",{children:["Score: ",m(r.score,"NA")]}),Object(x.jsxs)("li",{children:["Rank: ",m(r.rank,"NA")]})]})}):""]}),Object(x.jsxs)("div",{className:"single-page-content",children:[Object(x.jsx)("h1",{className:"single-page-title page-title",children:r.title||r.name}),Object(x.jsx)("p",{children:r.synopsis||r.about}),r.trailer_url&&"anime"===n?Object(x.jsxs)("div",{className:"trailer",children:[Object(x.jsx)("h3",{children:"Trailer"}),Object(x.jsx)("iframe",{width:"100%",height:"400",src:r.trailer_url,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}):"","character"!==i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{className:"related-title",children:"Other Information"}),Object(x.jsx)("div",{className:"related-info",children:r.related?Object.entries(r.related).map((function(e){var c=Object(j.a)(e,2),n=c[0],t=c[1];return Object(x.jsxs)("div",{className:"related-info-con",children:[Object(x.jsxs)("strong",{children:[n,": "]}),h(t,{separator:", ",link:"/page/",subType:!0})]})})):""})]}):""]})]})}function Y(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),n=c[0],i=c[1],a=Object(t.useState)(!0),s=Object(j.a)(a,2),r=s[0],d=s[1],o=new URLSearchParams(Object(l.g)().search).get("q");return Object(t.useEffect)((function(){N.a.get("https://api.jikan.moe/v3/search/anime?q="+o,{timeout:6e3}).then((function(e){i(e.data),d(!1)})).catch((function(e){return d(!1)}))}),[o]),Object(x.jsx)("div",{id:"content",className:"search-results",children:r?Object(x.jsx)(H,{}):n.results&&n.results.length?n.results.map((function(e){return Object(x.jsxs)("div",{className:"search-result flex",children:[Object(x.jsx)("div",{className:"search-left",children:Object(x.jsx)("a",{className:"anime-link",href:"//page/anime/"+e.mal_id,children:Object(x.jsx)("img",{src:e.image_url,alt:""})})}),Object(x.jsxs)("div",{className:"search-right",children:[Object(x.jsx)("h3",{children:Object(x.jsx)("a",{className:"anime-link",href:"/page/anime/"+e.mal_id,children:e.title})}),Object(x.jsx)("p",{className:"anime-excerpt",children:e.synopsis}),Object(x.jsx)("a",{className:"anime-btn",href:"/page/anime/"+e.mal_id,children:"Read More"})]})]},e.mal_id)})):Object(x.jsx)("div",{className:"no-result-content flex center-all",children:Object(x.jsx)("h3",{children:"Search again or try another?"})})})}function V(){return Object(x.jsx)("div",{id:"content",className:"page-not-found center-all flex",children:Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("h1",{children:"Error 404"}),Object(x.jsx)("p",{children:"You are lost! The page your are looking for could not be found."}),Object(x.jsx)("a",{className:"anime-link",href:"/",children:"Go to Home?"})]})})}var X=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(r.a,{basename:"/",children:Object(x.jsxs)("div",{className:"wrap",children:[Object(x.jsx)(p,{}),Object(x.jsx)("div",{id:"main",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",component:A}),Object(x.jsx)(l.a,{path:"/upcoming",component:R}),Object(x.jsx)(l.a,{path:"/top-rated/:type",component:L}),Object(x.jsx)(l.a,{path:"/top-rated",component:L}),Object(x.jsx)(l.a,{path:"/genres",component:C}),Object(x.jsx)(l.a,{path:"/genre/anime/:id/:page",component:F}),Object(x.jsx)(l.a,{path:"/page/:type/:id",component:U}),Object(x.jsx)(l.a,{path:"/search",component:Y}),Object(x.jsx)(l.a,{component:V})]})}),Object(x.jsx)(g,{})]})})})},q=n(19),z=n(52),B=n(7),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SEARCH_ANIME":case"SEARCH_MANGA":case"SEARCH_CHARACTER":case"SEARCH_PEOPLE":return Object(B.a)(Object(B.a)({},e),{},{action:c});default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"PAGINATE_NEXT":case"PAGINATE_PREV":return Object(B.a)(Object(B.a)({},e),{},{action:c});default:return e}},W=Object(q.a)({searchReducer:J,paginateReducer:K}),Q=Object(q.b)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(z.a,{store:Q,children:Object(x.jsx)(X,{})})}),document.getElementById("root"))},57:function(e,c,n){},58:function(e,c,n){},83:function(e,c){}},[[129,1,2]]]);
//# sourceMappingURL=main.c018820c.chunk.js.map
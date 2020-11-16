(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,a,t){e.exports=t(52)},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),i=t(5),o=t(1),m=t(7),s=t(12),u=t.n(s),d={apiKey:"AIzaSyAqvXOH1AyMLH6KU6v0Ixbwg-GW4A0Xw-U",authDomain:"eindwerk-webpgm3.firebaseapp.com",databaseURL:"https://eindwerk-webpgm3.firebaseio.com",projectId:"eindwerk-webpgm3",storageBucket:"eindwerk-webpgm3.appspot.com",messagingSenderId:"217833693824",appId:"1:217833693824:web:1595ddf35b7db27db13c65"},p=r.a.createContext(null),g=function(e){var a=e.children,t=Object(n.useState)(u.a.apps.length?u.a.app():u.a.initializeApp(d)),l=Object(m.a)(t,1)[0];return r.a.createElement(p.Provider,{value:{app:l}},a)},v=t(4),E=t.n(v),f=t(18),b=t(6),h=(t(35),r.a.createContext(null)),N=function(){return Object(n.useContext)(h)},w=function(e){var a=e.children,t=Object(n.useContext)(p).app.firestore(),l=function(){var e=Object(b.a)(E.a.mark((function e(){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.collection("villagers").orderBy("name.name-EUnl","asc"),e.next=3,a.get();case 3:return n=e.sent,r=n.docs.map((function(e){return Object(f.a)({uid:e.id},e.data())})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(b.a)(E.a.mark((function e(a){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.collection("villagers").doc(a);case 2:return n=e.sent,e.next=5,n.get();case 5:return r=e.sent,e.abrupt("return",Object(f.a)({uid:r.id},r.data()));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{getVillagers:l,getVillager:c}},a)},y=t(28),x=function(e){var a=e.component,t=e.layout,n=Object(y.a)(e,["component","layout"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return function(e,a,t){return a?r.a.createElement(a,t,r.a.createElement(e,t)):r.a.createElement(e,t)}(a,t,e)}}))},j=(t(42),function(e){e.children;return r.a.createElement("footer",{className:"app-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"footer__info d-flex flex-column align-items-center"},r.a.createElement("p",null,"An application for WebPGM3 made with React"),r.a.createElement("p",null,"By Mathieu DM - Studio97"))))))}),k=(t(24),t(43),t(9)),O=t.n(k),_=function(e){e.children;var a=Object(o.g)();return r.a.createElement("header",{className:"app-header"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navigation"},"/"===a.pathname?r.a.createElement("h1",{className:"navbar-brand"},r.a.createElement(i.b,{to:"/",className:"logo__link"},r.a.createElement("img",{src:O.a,href:"acnh logo",className:"navbar-img"}))):r.a.createElement("h1",{className:"navbar-brand","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement(i.b,{to:"/",className:"logo__link"},r.a.createElement("img",{src:O.a,href:"acnh logo",className:"navbar-img"}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto justify-content-end flex-grow-1"},r.a.createElement("li",{className:"nav-item","data-toggle":"collapse","data-target":"#navbarSupportedContent"},r.a.createElement(i.c,{to:"/villagers",className:"nav-link",activeClassName:"active"},"Villagers"))))))},C=function(e){var a=e.url,t=e.width,n=e.height;return r.a.createElement("div",{className:"youtube-movie"},r.a.createElement("iframe",{width:t,height:n,src:a,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},S=function(e){var a=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(_,null),r.a.createElement("main",{className:"app-main"},a),r.a.createElement(j,null))},U=(t(44),function(){return r.a.createElement("div",{className:"row py-5 hero"},r.a.createElement("div",{className:"col-12 col-lg-6 d-flex align-items-center hero__logo"},r.a.createElement("img",{src:O.a,alt:"acnh logo"})),r.a.createElement("div",{className:"col-12 col-lg-6 pl-lg-4 mt-4 mt-lg-0 d-flex flex-column justify-content-center hero__content"},r.a.createElement("h1",null,"Welkom op onze ACNH Villager viewer!"),r.a.createElement("p",null,"Speel jij Animal Crossing New Horizon? Heb je altijd meer willen leren over de villagers die op je eiland komen wonen? Het kan nu! In deze villager viewer app kan je zoeken op naam van de villagers in de game en kan je daarna enkele details bekijken als geslacht, verjaardag en persoonlijkheid. Ook zie je er een foto van je villager in zijn favoriete habitat.")))}),I=(t(45),function(e){e.children;return r.a.createElement("div",{className:"page page--home"},r.a.createElement("div",{className:"container"},r.a.createElement(U,null)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-5"},r.a.createElement(C,{url:"https://www.youtube.com/embed/8AkEFot5UF0",width:"100%",height:"500px"})))))}),V=(t(46),function(e){var a=e.searchVillager;return r.a.createElement("div",{className:"col-12"},r.a.createElement("form",{className:"todo-form",onChange:function(e){a(e.target.value)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Villager Searcher"),r.a.createElement("input",{className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",type:"text",required:!0,placeholder:"Search for a villager ..."}))))}),A=(t(47),function(){var e=Object(n.useState)(),a=Object(m.a)(e,2),t=a[0],l=a[1],c=N().getVillagers;Object(n.useEffect)((function(){(function(){var e=Object(b.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row pt-5"},r.a.createElement(V,{searchVillager:function(e){var a,t,n;console.log(e),a=e.toUpperCase();var r=document.querySelector(".villagers-list").getElementsByTagName("article");for(n=0;n<r.length;n++)t=r[n].getElementsByTagName("h5")[0],console.log(t),(t.textContent||t.isnnerText).toUpperCase().indexOf(a)>-1?r[n].style.display="":r[n].style.display="none"}})),r.a.createElement("div",{className:"villagers-list py-5"},r.a.createElement("div",{className:"row"},t?t.map((function(e){return r.a.createElement("article",{className:"col-12 col-md-6 col-lg-4 col-xl-3 villager-item",key:e.uid},r.a.createElement("div",{className:"card","data-id":e.uid},r.a.createElement("picture",{className:"card-img-top d-flex justify-content-center"},e.icon_uri?r.a.createElement("img",{src:e.icon_uri,alt:e.name["name-EUnl"]}):r.a.createElement(n.Fragment,null)),r.a.createElement("div",{className:"card-body d-flex flex-column align-items-center"},r.a.createElement("h5",{className:"card-title  text-truncate"},e.name["name-EUnl"]),r.a.createElement(i.b,{to:"/villagers/:id".replace(":id",e.uid),className:"btn btn-primary"},"Look at me!"))))})):r.a.createElement("div",{className:"col-12"},r.a.createElement("p",null,"No villagers")))))}),z=(t(48),function(e){var a=e.villager;return r.a.createElement("div",{className:"row justify-content-center villager"},a?r.a.createElement("div",{className:"col-12 col-lg-6 d-flex justify-content-center"},r.a.createElement("div",{className:"d-flex flex-column align-items-center w-100"},r.a.createElement("div",{className:"d-flex justify-content-center w-100"},r.a.createElement("img",{src:a.icon_uri,alt:a.name["name-EUnl"],className:"villager__image"}),r.a.createElement("h2",null,a.name["name-EUnl"])),r.a.createElement("div",{className:"villager__badges d-flex justify-content-center w-100"},r.a.createElement("span",{className:"badge badge-primary"},a.gender),r.a.createElement("span",{className:"badge badge-primary"},"Birthday: ",a.birthday),r.a.createElement("span",{className:"badge badge-primary"},"Personality: ",a.personality)),r.a.createElement("div",{className:"villager__fullImage"},r.a.createElement("h5",null,"Full Image of ",a.name["name-EUnl"]),r.a.createElement("img",{src:a.image_uri,alt:a.name["name-EUnl"]})),r.a.createElement("div",{className:"d-flex justify-content mt-3"},r.a.createElement(i.b,{to:"/villagers",className:"btn btn-primary"},"Go back!")))):r.a.createElement("p",null,"No villager."))}),B=function(e){e.children;return r.a.createElement("div",{className:"page page--villagers"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 pt-5"},r.a.createElement("h1",null,"Villagers"))),r.a.createElement(A,null)))},H=t(27),F=function(e){Object(H.a)(e);var a=Object(o.h)().id,t=Object(n.useState)(null),l=Object(m.a)(t,2),c=l[0],i=l[1],s=N().getVillager;return Object(n.useEffect)((function(){c||function(){var e=Object(b.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(a);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()()}),[]),r.a.createElement("div",{className:"page page--villager"},r.a.createElement("div",{className:"container"},r.a.createElement(z,{villager:c})))};t(49);var M=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(g,null,r.a.createElement(w,null,r.a.createElement(i.a,{basename:"/villager_viewer-react-firebase"},r.a.createElement(o.d,null,r.a.createElement(x,{exact:!0,path:"/",layout:S,component:I}),r.a.createElement(o.a,{from:"/home",to:"/"}),r.a.createElement(x,{exact:!0,path:"/villagers/:id",layout:S,component:F}),r.a.createElement(x,{exact:!0,path:"/villagers",layout:S,component:B}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(50),t(51);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/logo-acnh.835045b3.png"}},[[29,1,2]]]);
//# sourceMappingURL=main.da4de6aa.chunk.js.map
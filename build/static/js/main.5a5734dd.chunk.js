(this["webpackJsonpportfolio-2"]=this["webpackJsonpportfolio-2"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/close.f302c97d.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/logo.56ca8b86.svg"},function(e,t,a){e.exports=a.p+"static/media/github.612f8feb.svg"},,,function(e,t,a){e.exports=a.p+"static/media/scroll.3e83f85f.svg"},function(e,t,a){e.exports=a.p+"static/media/arrow-right.7a305ff4.svg"},function(e,t,a){e.exports=a.p+"static/media/hero.121b210c.svg"},function(e,t,a){e.exports=a.p+"static/media/hero-small.25d7c259.svg"},function(e,t,a){e.exports=a.p+"static/media/about.5384fc2c.svg"},function(e,t,a){e.exports=a.p+"static/media/about-small.e6310f78.svg"},function(e,t,a){e.exports=a.p+"static/media/Adam-Ostrowicki.04192b5a.pdf"},function(e,t,a){e.exports=a.p+"static/media/illustration.653b3f67.svg"},function(e,t,a){e.exports=a.p+"static/media/des.32b7979b.svg"},function(e,t,a){e.exports=a.p+"static/media/dev.d54258c0.svg"},function(e,t,a){e.exports=a.p+"static/media/outdo.a18c6961.png"},function(e,t,a){e.exports=a.p+"static/media/barb.f80f6fb0.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio.f9f0d23f.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio-2.075d68c1.png"},function(e,t,a){e.exports=a.p+"static/media/icons1.ece871a1.png"},function(e,t,a){e.exports=a.p+"static/media/icons2.0661a7d5.png"},function(e,t,a){e.exports=a.p+"static/media/icons3.8bd18a10.png"},function(e,t,a){e.exports=a.p+"static/media/illu1.f9ea7422.png"},function(e,t,a){e.exports=a.p+"static/media/illu2.3ce1d62a.png"},function(e,t,a){e.exports=a.p+"static/media/mail.68a47bff.svg"},function(e,t,a){e.exports=a.p+"static/media/mail-small.e8bce72e.svg"},function(e,t,a){e.exports=a.p+"static/media/contact.a6f2cd27.svg"},function(e,t,a){e.exports=a.p+"static/media/location.aa58ab9f.svg"},function(e,t,a){e.exports=a.p+"static/media/fiverr.9e82138b.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.01224f96.svg"},function(e,t,a){e.exports=a(45)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),l=a.n(r),i=(a(43),a(44),a(1)),s=Object(n.createContext)(null),o=a(9),m=a.n(o),u=a(13),f=a.n(u),d=a(2);function p(){var e=Object(n.useContext)(s),t=e.active,a=e.setActive,r=Object(n.useRef)(null),l=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(n.useEffect)((function(){d.a.set(r.current,{autoAlpha:0,transform:"translateX(-100%)"}),d.a.set(l.current.children,{autoAlpha:0,transform:"translateX(-20%)"}),d.a.set(i.current.children[0],{autoAlpha:0,transform:"translateX(-10px)"}),d.a.timeline({defaults:{ease:"power1.inOut"}}).to(r.current,{transform:"translateX(0)",autoAlpha:1,duration:.6}).to(i.current.children[0],{autoAlpha:1,transform:"translateX(0)",duration:.2},"-=0.1").to(l.current.children,{transform:"translateX(0)",autoAlpha:1,duration:.25,stagger:.05},"-=0.3")}),[]),c.a.createElement("div",{className:"sidebar",ref:r},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:m.a}))),c.a.createElement("div",{className:"menu",ref:i},c.a.createElement("span",null),c.a.createElement("ul",{ref:l},c.a.createElement("li",null,c.a.createElement("a",{href:"#hero",className:"home"===t?"link active":"link",onClick:function(){return a("home")}},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"#about",className:"about"===t?"link active":"link",onClick:function(){return a("about")}},"About me")),c.a.createElement("li",null,c.a.createElement("a",{href:"#what",className:"what"===t?"link active":"link",onClick:function(){return a("what")}},"What I do")),c.a.createElement("li",null,c.a.createElement("a",{href:"#work",className:"work"===t?"link active":"link",onClick:function(){return a("work")}},"My work")),c.a.createElement("li",null,c.a.createElement("a",{href:"#contact",className:"contact"===t?"link active":"link",onClick:function(){return a("contact")}},"Contact")))),c.a.createElement("div",{className:"scroll"},c.a.createElement("a",{href:"home"===t?"#about":"about"===t?"#what":"what"===t?"#work":"work"===t?"#contact":"contact"===t?"#footer":""},c.a.createElement("img",{src:f.a}),c.a.createElement("div",{className:"paragraph"},"Scroll down"))))}function E(e){var t=e.type,a=e.target,n=e.children,r=e.download;return c.a.createElement("a",{href:a,download:r,className:"btn".concat("right"===t?" right":""," ").concat("down"===t?" down":"")},n)}var g=a(14),h=a.n(g),b=a(15),v=a.n(b),w=a(16),k=a.n(w),N=a(3);function O(){var e=Object(n.useContext)(s),t=(e.active,e.setActive),a=Object(n.useRef)(null),r=Object(N.a)({threshold:.5}),l=Object(i.a)(r,3),o=l[0],m=l[1];l[2];return Object(n.useEffect)((function(){m&&t("home")}),[m]),Object(n.useEffect)((function(){d.a.set(a.current,{y:"-=10",autoAlpha:0}),d.a.timeline({defaults:{ease:"power1.inOut"}}).to(a.current,{y:"+=20",autoAlpha:1,duration:.5},"+=0.7")}),[]),c.a.createElement("section",{id:"hero",ref:o},c.a.createElement("div",{className:"container",ref:a},c.a.createElement("h4",{className:"subtitle"},c.a.createElement("span",{className:"break"},c.a.createElement("span",{className:"color"},"I'm Adam"),",")," Frontend Developer and UI Designer"),c.a.createElement("h1",{className:"header"},"I will create a modern website for you"),c.a.createElement(E,{target:"#work",type:"right"},"See my work ",c.a.createElement("img",{src:h.a})),c.a.createElement("div",{className:"img"},window.innerWidth>440?c.a.createElement("img",{src:v.a}):c.a.createElement("img",{src:k.a}))))}var x=a(17),j=a.n(x),y=a(18),A=a.n(y),C=a(19),I=a.n(C);function W(){var e=Object(n.useContext)(s),t=(e.active,e.setActive),a=Object(n.useRef)(null),r=Object(N.a)({threshold:.7}),l=Object(i.a)(r,3),o=l[0],m=l[1];l[2];return Object(n.useEffect)((function(){d.a.set(a.current.children,{autoAlpha:0,x:"-=50"})}),[]),Object(n.useEffect)((function(){m&&t("about"),m&&d.a.to(a.current.children,{autoAlpha:1,x:"0",duration:.8,ease:"power1.out",stagger:.2})}),[m]),c.a.createElement("section",{id:"about",ref:o},c.a.createElement("div",{className:"container",ref:a},c.a.createElement("div",{className:"left"},c.a.createElement("h1",{className:"header"},"About me"),c.a.createElement("p",{className:"paragraph"},"I'm young and passionate Front-end Developer from Poland. I have Bachelor's degree in IT. I have experience with programming in many languages, but since graduating I focused on coding and designing websites. Bellow you can see some of my recent works.",c.a.createElement("span",null,"Currently looking for a job as a Front-end Developer.")),c.a.createElement(E,{target:I.a,type:"down",download:"Adam-Ostrowicki"},"Get my CV",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",height:"18"},c.a.createElement("defs",null,c.a.createElement("style",null,".cls-1,.cls-2,.cls-3{fill:none;}.cls-2,.cls-3{stroke:#fff;stroke-linecap:round;stroke-width:1.5px;}.cls-2{stroke - linejoin:round;}.cls-3{stroke - miterlimit:10;}")),c.a.createElement("g",{id:"arrow-down"},c.a.createElement("rect",{className:"cls-1",width:"16",height:"16"}),c.a.createElement("g",{id:"arrow"},c.a.createElement("line",{className:"cls-2",x1:"8",y1:"9",x2:"8",y2:"1"}),c.a.createElement("polyline",{className:"cls-2",points:"12 5 8 9 4 5"})),c.a.createElement("line",{className:"cls-3",x1:"3",y1:"15",x2:"13",y2:"15"}))))),c.a.createElement("div",{className:"right"},window.innerWidth>440?c.a.createElement("img",{src:j.a}):c.a.createElement("img",{src:A.a}))))}var S=a(7);function D(e){var t=e.title,a=e.list,n=e.img;return c.a.createElement("div",{className:"feature"},c.a.createElement("div",{className:"img-circle"},c.a.createElement("img",{src:n})),c.a.createElement("div",{className:"text-container"},c.a.createElement("h4",{className:"subheader"},t),c.a.createElement("ul",null,a&&a.map((function(e){return c.a.createElement("li",{key:e,className:"paragraph"},e)})))))}var F=a(20),P=a.n(F),R=a(21),M=a.n(R),B=a(22),X=a.n(B),_=a(4);function Y(){var e,t,a=Object(_.useMediaQuery)({maxWidth:920}),r=Object(n.useContext)(s),l=(r.active,r.setActive),o=Object(n.useRef)(null),m=Object(n.useRef)(null),u=Object(N.a)({threshold:.5}),f=Object(i.a)(u,3),p=f[0],E=f[1];f[2];return Object(n.useEffect)((function(){d.a.set(o.current,{clipPath:"inset(0 0 100% 0)"}),e=Object(S.a)(m.current.children).map((function(e){return e.children[0]})),t=Object(S.a)(m.current.children).map((function(e){return e.children[1]})),d.a.set(t,{autoAlpha:0,x:"-=20"}),d.a.set(e,{clipPath:"inset(0 0 100% 0)"})}),[]),Object(n.useEffect)((function(){E&&l("what");var a=d.a.timeline();e=Object(S.a)(m.current.children).map((function(e){return e.children[0]})),t=Object(S.a)(m.current.children).map((function(e){return e.children[1]})),E&&a.to(o.current,{duration:2,clipPath:"inset(0% 0 -10% 0)",ease:"power1.easeOut"}).to(e,{duration:.15,clipPath:"inset(0% 0 0% 0)",ease:"power0.easeOut",stagger:.2},"-=1.7").to(t,{duration:.45,autoAlpha:1,x:"0",ease:"power1.easeOut",stagger:.2},"-=1.65")}),[E]),c.a.createElement("section",{id:"what",ref:p},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"circle",ref:o},c.a.createElement("svg",{viewBox:"0 0 1500 1500"},!a&&c.a.createElement("circle",{cx:"0",cy:"750",r:"750",fill:"none",stroke:"#232323",strokeWidth:"2px"}),a&&c.a.createElement("circle",{cx:"-555",cy:"1100",r:"750",fill:"none",stroke:"#232323",strokeWidth:"3.5px"}))),c.a.createElement("div",{className:"left"},c.a.createElement("h1",{className:"header"},"What I do...")),c.a.createElement("div",{className:"right",ref:m},c.a.createElement(D,{img:M.a,title:"Web Design",list:["Website Design","Landing Pages","Wireframing","Prototyping"]}),c.a.createElement(D,{img:X.a,title:"Web Development",list:["HTML/CSS","JavaScript","Animations","React.js"]}),c.a.createElement(D,{img:P.a,title:"Graphic Design",list:["Icons","Illustrations","Logos"]}))))}var L=a(10),T=a.n(L),q=a(5),H=a.n(q);function J(e){var t=e.title,a=e.img,r=e.href,l=e.githref,s=e.tools,o=e.work,m=(Object(_.useMediaQuery)({maxWidth:900}),Object(n.useState)(!1)),u=Object(i.a)(m,2),f=u[0],p=u[1],E=Object(n.useRef)(null);return Object(n.useEffect)((function(){document.querySelector("body").style.overflowY=f?"hidden":"auto",document.querySelector("body").style.marginRight=f?"12px":"0px",d.a.set(E.current,{autoAlpha:0}),f&&d.a.to(E.current,{autoAlpha:1,transform:"scale(1)",duration:.15,ease:"power1.inOut"})}),[f]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){return p(!0)},className:"websites-item",style:{backgroundImage:"url(".concat(a,")")}}),f&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"popup",ref:E},c.a.createElement("div",{className:"popup-container"},c.a.createElement("div",{className:"close-btn",onClick:function(){return p(!1)}},c.a.createElement("img",{src:H.a})),c.a.createElement("div",{className:"popup-img",style:{backgroundImage:"url(".concat(a,")")}}),c.a.createElement("div",{className:"popup-text"},c.a.createElement("h2",{className:"subheader"},t),c.a.createElement("h4",{className:"title"},"Responsible for:"),c.a.createElement("ul",null,o&&o.map((function(e){return c.a.createElement("li",{key:e,className:"paragraph",id:e},e)}))),c.a.createElement("h4",{className:"title"},"Tools used:"),c.a.createElement("ul",null,s&&s.map((function(e){return c.a.createElement("li",{key:e,className:"paragraph",id:e},e)}))),c.a.createElement("div",{className:"btn-container"},c.a.createElement("a",{href:r,target:"_blank",className:"btn"},"View Site"),l&&c.a.createElement("a",{href:l,target:"_blank",className:"btn nowidth"},c.a.createElement("img",{src:T.a})))))),c.a.createElement("div",{className:"popup-bg",onClick:function(){return p(!1)}})))}var Q=a(23),z=a.n(Q),G=a(24),U=a.n(G),V=a(25),K=a.n(V),Z=a(26),$=a.n(Z);function ee(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"websites-grid"},c.a.createElement(J,{href:"https://aostrowicki.com",githref:"https://github.com/aostrowicki/portfolio-2",img:$.a,title:"Portfolio",work:["Website Design","Implementing Design","Illustrations","Icons"],tools:["React","Adobe Illustrator","Adobe XD"]}),c.a.createElement(J,{href:"https://outdo.org.in",img:z.a,title:"OutDo",work:["Implementing Design","Assets Export","Animations Optimization","Design Improvements"],tools:["Adobe Illustrator","Adobe After Effects","Lottie"]}),c.a.createElement(J,{href:"https://hungry-leavitt-3367f0.netlify.app",githref:"https://github.com/aostrowicki/barber-shop",img:U.a,title:"BBarber",work:["Website Design","Implementing Design","Icons"],tools:["Figma","Adobe Illustrator"]}),c.a.createElement(J,{href:"https://eloquent-wing-0f7019.netlify.app",githref:"https://github.com/aostrowicki/portfolio-website",img:K.a,title:"Portfolio",work:["Website Design","Implementing Design","Illustrations"],tools:["Figma","Adobe Illustrator"]})))}function te(e){var t=e.title,a=e.img,r=Object(n.useState)(!1),l=Object(i.a)(r,2),s=l[0],o=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"icons-item",style:{backgroundImage:"url(".concat(a,")")},onClick:function(){return o(!0)}},c.a.createElement("h4",{className:"title"},t)),s&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"img-popup"},c.a.createElement("div",{className:"close-btn",onClick:function(){return o(!1)}},c.a.createElement("img",{src:H.a})),c.a.createElement("img",{src:a,alt:""})),c.a.createElement("div",{className:"popup-bg",onClick:function(){return o(!1)}})))}var ae=a(27),ne=a.n(ae),ce=a(28),re=a.n(ce),le=a(29),ie=a.n(le);function se(){return c.a.createElement("div",{className:"icons-grid"},c.a.createElement(te,{title:"test",img:ie.a}),c.a.createElement(te,{title:"test",img:re.a}),c.a.createElement(te,{title:"test",img:ne.a}),c.a.createElement(te,null))}function oe(e){var t=e.title,a=e.img,r=Object(n.useState)(!1),l=Object(i.a)(r,2),s=l[0],o=l[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"illustrations-item",style:{backgroundImage:"url(".concat(a,")")},onClick:function(){return o(!0)}},c.a.createElement("h4",{className:"title"},t)),s&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"img-popup"},c.a.createElement("div",{className:"close-btn",onClick:function(){return o(!1)}},c.a.createElement("img",{src:H.a})),c.a.createElement("img",{src:a,alt:""})),c.a.createElement("div",{className:"popup-bg",onClick:function(){return o(!1)}})))}var me=a(30),ue=a.n(me),fe=a(31),de=a.n(fe);function pe(){return c.a.createElement("div",{className:"illustrations-grid"},c.a.createElement(oe,{title:"test",img:ue.a}),c.a.createElement(oe,{title:"test",img:de.a}),c.a.createElement(oe,{title:"test"}))}function Ee(){var e=["Websites","Icons","Illustrations"],t=Object(n.useState)(e[0]),a=Object(i.a)(t,2),r=a[0],l=(a[1],Object(n.useContext)(s)),o=(l.active,l.setActive),m=Object(N.a)({threshold:.6}),u=Object(i.a)(m,3),f=u[0],d=u[1];u[2];return Object(n.useEffect)((function(){d&&o("work")}),[d]),c.a.createElement("section",{id:"work",ref:f},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"header"},"My work"),c.a.createElement("div",{className:"categories"},e.map((function(e){return c.a.createElement(c.a.Fragment,{key:e},c.a.createElement("span",{className:"link ".concat(r===e?"active":""),key:e},e),c.a.createElement("span",{className:"loader"}))}))),"Websites"===r&&c.a.createElement(ee,null),"Icons"===r&&c.a.createElement(se,null),"Illustrations"===r&&c.a.createElement(pe,null)))}var ge=a(32),he=a.n(ge),be=a(33),ve=a.n(be);function we(){return c.a.createElement("form",{method:"POST","data-netlify":"true",name:"contact"},c.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",name:"name",id:"name"}),c.a.createElement("label",{htmlFor:"email"},"E-mail"),c.a.createElement("input",{type:"email",name:"email",id:"email"}),c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{name:"message",id:"message",cols:"30",rows:"7"}),c.a.createElement("input",{type:"submit",value:"Send",className:"btn"}))}function ke(){var e=Object(n.useContext)(s),t=(e.active,e.setActive),a=Object(N.a)({threshold:.5}),r=Object(i.a)(a,3),l=r[0],o=r[1];r[2];return Object(n.useEffect)((function(){o&&t("contact")}),[o]),c.a.createElement("section",{id:"contact",ref:l},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"left"},c.a.createElement("h1",{className:"header"},"Contact me"),c.a.createElement("span",{className:"paragraph"},"Don't wanna use a form? Send me an ",c.a.createElement("a",{href:"mailto:a.ostrowicki10@gmail.com"},"e-mail")," "),c.a.createElement("div",{className:"img"},window.innerWidth>440?c.a.createElement("img",{src:he.a}):c.a.createElement("img",{src:ve.a}))),c.a.createElement("div",{className:"right"},c.a.createElement(we,null))))}var Ne=a(34),Oe=a.n(Ne),xe=a(35),je=a.n(xe);function ye(){return c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"info-item"},c.a.createElement("img",{src:je.a,alt:""}),c.a.createElement("p",{className:"paragraph"},"61-216, Poznan ",c.a.createElement("span",null,"Poland"))),c.a.createElement("div",{className:"info-item"},c.a.createElement("img",{src:Oe.a,alt:""}),c.a.createElement("p",{className:"paragraph"},"a.ostrowicki10@gmail.com")))}var Ae=a(36),Ce=a.n(Ae),Ie=a(37),We=a.n(Ie);function Se(){return c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"https://www.linkedin.com/in/aostrowicki/?locale=en_US",target:"_blank",className:"icon-btn"},c.a.createElement("img",{src:We.a,alt:""})),c.a.createElement("a",{href:"https://github.com/aostrowicki",target:"_blank",className:"icon-btn"},c.a.createElement("img",{src:T.a,alt:""})),c.a.createElement("a",{href:"https://www.fiverr.com/aostrowicki",target:"_blank",className:"icon-btn"},c.a.createElement("img",{src:Ce.a,alt:""})))}function De(){return c.a.createElement("div",{className:"divider"})}function Fe(){return c.a.createElement("footer",{className:"push",id:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"upper"},c.a.createElement(ye,null),c.a.createElement(Se,null)),c.a.createElement(De,null),c.a.createElement("div",{className:"lower"},c.a.createElement("span",null,"Copyright \xa9 2020 by Adam Ostrowicki"))))}function Pe(){var e=Object(n.useContext)(s),t=e.active,a=e.setActive,r=Object(n.useState)(!1),l=Object(i.a)(r,2),o=l[0],u=l[1],f=Object(n.useState)(!1),d=Object(i.a)(f,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){var e=window.pageYOffset;window.onscroll=function(){window.pageYOffset>e&&!o&&E(!0),window.pageYOffset<e&&!o&&window.innerWidth>750&&E(!1),e=window.pageYOffset}}),[o]),c.a.createElement("nav",{className:p?"navbar hidden":"navbar"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"logo"},c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:m.a}))),c.a.createElement("div",{className:o?"menu open":"menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#hero",className:"home"===t?"link active":"link",onClick:function(){a("home"),u(!1)}},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"#about",className:"about"===t?"link active":"link",onClick:function(){a("about"),u(!1)}},"About me")),c.a.createElement("li",null,c.a.createElement("a",{href:"#what",className:"what"===t?"link active":"link",onClick:function(){a("what"),u(!1)}},"What I do")),c.a.createElement("li",null,c.a.createElement("a",{href:"#work",className:"work"===t?"link active":"link",onClick:function(){a("work"),u(!1)}},"My work")),c.a.createElement("li",null,c.a.createElement("a",{href:"#contact",className:"contact"===t?"btn-2 link active":"btn-2 link",onClick:function(){a("contact"),u(!1)}},"Contact")))),c.a.createElement("div",{className:o?"hamburger open":"hamburger",onClick:function(){u(!o),E(!!o)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null))))}var Re=function(){var e=Object(n.useState)("home"),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(_.useMediaQuery)({maxWidth:1350});return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.Provider,{value:{active:a,setActive:r}},!l&&c.a.createElement(p,null),l&&c.a.createElement(Pe,null),c.a.createElement("main",{className:"push"},c.a.createElement(O,null),c.a.createElement(W,null),c.a.createElement(Y,null),c.a.createElement(Ee,null),c.a.createElement(ke,null))),c.a.createElement(Fe,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Re,null)),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.5a5734dd.chunk.js.map
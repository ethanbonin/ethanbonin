(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4728:function(e,t,n){"use strict";n.r(t),n.d(t,{WorkHistory:function(){return E},default:function(){return I}});var r=n(5893),o=n(5660),s=n.n(o),i=n(7294),a=n(3038),c=n(5781),l=n(9364),p=n.n(l),u=n(720),h=function(e){var t=e.project,n=e.callBack;return(0,r.jsxs)(u.Z,{bsPrefix:"project",className:p().project,style:{width:"18rem"},onClick:function(){n(t.project)},children:[t.image?(0,r.jsx)(u.Z.Img,{variant:"top",src:t.image}):null,t.website?(0,r.jsx)(u.Z.Body,{styles:{backgroundColor:"white"},children:(0,r.jsx)("a",{href:"/",children:t.website})}):null,(0,r.jsxs)(u.Z.Body,{children:[t.image?null:(0,r.jsx)(u.Z.Title,{children:t.project}),(0,r.jsx)(u.Z.Text,{children:t.description})]})]})};h.defaultProps={};var d=JSON.parse('[{"project":"Text Me That","description":"Text Me That is an iOS exclusive product. It sends reminders via text messages. It helps thousands of customers a month with staying on task. I built this app back in 2018 to personally help me to never miss reminders again.","image":"https://raw.githubusercontent.com/ethanbonin/ethanbonin/develop/public/tmtpw.png","website":"https://textmethat.io","frontend":{"languages":["Swift","Objective C","Javascript"],"frameworks":["UI Kit","SwiftUI","Apple Maps API","Twilio","React","Redux","Firebase"]},"backend":{"languages":["Javascript","Bash"],"frameworks":["Node.JS","Twilio","Postgres SQL","NoSQL","Heroku","Github Actions"]}},{"project":"Rallista","description":"Rallista is navigation for enthusiasts. The owner of this app has seem much success with his application and continues to expand it\'s network every year. I personally helped with some of the features of this application. Biggest achievement to date has been becoming the one of the official sponsors of Hagerty, May 2021.","image":"https://raw.githubusercontent.com/ethanbonin/ethanbonin/develop/public/rallistapw.png","website":"https://rallista.app","frontend":{"languages":["Swift","Javascript"],"frameworks":["UI Kit","React","Redux"]}},{"project":"Safe Spending","image":"https://raw.githubusercontent.com/ethanbonin/ethanbonin/develop/public/sspw.png","description":"A couple engineers and I saw a need in the fintech space. We rebuilt a banking application that was shut down from big corp because it was bought out. This app helps users stay on budget by creating envelopes and assigning transactions to those envelopes. We easily help the user connect their bank account so it can be completely automated.","website":null,"frontend":{"languages":["Swift","C#","Java"],"frameworks":["UI Kit","SwiftUI","React","Redux","Firebase Auth","Android Kit"]},"backend":{"languages":["C#"],"frameworks":["ASP.NET Core (.NET 5)","Fintech API (My secret)","PostgresSQL","Google Cloud App Engine","Google Cloud Build","Github Actions"]}},{"project":"This Website","description":"This website was built as a memento to myself. It\'s to remind me of the journey I have been on to get the place that I am now. I made this codebase open so it can reviewed at anytime by anybody.","image":null,"website":"https://github.com/ethanbonin/ethanbonin","frontend":{"languages":["Javascript"],"frameworks":["React","Next.JS","Contentful","Github Actions (CI/CD)","Github Pages (Hosting)"]}}]'),f=n(682),j=n(4051),g=n(1555),b=function(e){var t=e.callBack;return(0,r.jsx)(f.Z,{children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(g.Z,{children:(0,r.jsx)(h,{project:d[0],callBack:t})}),(0,r.jsx)(g.Z,{children:(0,r.jsx)(h,{project:d[1],callBack:t})}),(0,r.jsx)(g.Z,{children:(0,r.jsx)(h,{project:d[2],callBack:t})})]})})};b.defaultProps={};var x=n(6265),m=n(1337),w=n(6134),v=n.n(w);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,x.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.project,n=function(e){return(0,r.jsx)(m.Z,k(k({},e),{},{springConfig:o}))},o=function(e){return{from:{height:0,opacity:0,transform:"translate3d(20px,0,0)"},to:{height:e?"auto":0,opacity:e?1:0,transform:e?"translate3d(0,0,0)":"translate3d(20px,0,0)"}}};function s(e){var t=0;return e.map((function(e){return t+=1,(0,r.jsx)(n,{content:e},t)}))}return(0,r.jsx)(f.Z,{children:(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(g.Z,{children:(0,r.jsxs)(n,{content:"Frontend",className:v().treeview,open:!0,style:{},children:[(0,r.jsx)(n,{content:"Languages",open:!0,children:s(t.frontend.languages)}),(0,r.jsx)(n,{content:"Frameworks",open:!0,children:s(t.frontend.frameworks)})]})}),(0,r.jsx)(g.Z,{children:t.backend?(0,r.jsxs)(n,{content:"Backend (Server)",className:v().treeview,open:!0,children:[(0,r.jsx)(n,{content:"Languages",open:!0,children:s(t.backend.languages)}),(0,r.jsx)(n,{content:"Frameworks",open:!0,children:s(t.backend.frameworks)})]}):null})]})})};O.defaultProps={};var Z=d[0].project,P=d[1].project,_=d[2].project,S={SELECTED:0};var E=function(){var e=(0,i.useState)(S),t=e[0],n=e[1];return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)(c.h,{}),(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(j.Z,{children:(0,r.jsx)(g.Z,{children:(0,r.jsx)(b,{callBack:function(e){var t=function(e){switch(e){case Z:return 0;case P:return 1;case _:return 2;default:throw new Error("Not the correct convert options")}}(e);n({SELECTED:t})}})})}),(0,r.jsx)(j.Z,{className:s().projects,children:(0,r.jsx)(g.Z,{xs:12,sm:12,md:8,lg:8,xl:8,xxl:8,children:(0,r.jsx)(O,{project:d[t.SELECTED]})})})]}),(0,r.jsx)(a.$,{})]})};E.defaultProps={};var I=E},3038:function(e,t,n){"use strict";n.d(t,{$:function(){return g}});var r=n(6265),o=n(5893),s=(n(7294),n(3713)),i=n.n(s),a=[{src:"https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",alt:"next-logo",label:"I used Next.JS for a SUPER FAST statically built website rendering.",size:"50px"},{src:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",alt:"react-logo",label:"I used React because it's just plain easy. You either love or hate React. I love it.",size:"50px"}],c=n(633),l=n(3489),p=function(e){var t=e.src,n=e.alt,r=e.label,s=e.size;return(0,o.jsx)(c.Z,{placement:"top",overlay:(0,o.jsx)(l.Z,{id:"button-tooltip-2",children:r}),children:(0,o.jsx)("img",{src:t,alt:n,style:{width:s,height:s,objectFit:"contain"}})})};p.defaultProps={src:"https://seeklogo.com/images/C/contentful-logo-C395C545BF-seeklogo.com.png",alt:"next Logo",label:"This is a sample Footer Image",size:"50px"};var u=n(682),h=n(4051),d=n(1555);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){return(0,o.jsx)("footer",{className:i().footer,children:(0,o.jsx)(u.Z,{fluid:!0,children:(0,o.jsx)(h.Z,{children:a.map((function(e){return(0,o.jsx)(d.Z,{xs:3,sm:1,md:1,lg:1,xl:1,xxl:1,children:(0,o.jsx)(p,j({},e))},e.alt)}))})})})};g.defaultProps={}},5781:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(5893),o=(n(7294),n(103)),s=n(682),i=n(7217),a=function(){return(0,r.jsx)(o.Z,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z.Brand,{href:"/",children:"Ethan Bonin"}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(i.Z.Link,{href:"/",children:"Home"}),(0,r.jsx)(i.Z.Link,{href:"/history",children:"History"}),(0,r.jsx)(i.Z.Link,{href:"/projects",children:"Projects"}),(0,r.jsx)(i.Z.Link,{href:"/about",children:"About"})]})]})})};a.defaultProps={}},8947:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(4728)}])},3713:function(e){e.exports={footer:"footer_footer__A2QDl"}},9364:function(e){e.exports={project:"projectcard_project__1u_xR"}},5660:function(e){e.exports={container:"projects_container__3pak4",projects:"projects_projects__ZSBvb",treeview:"projects_treeview__3N5rk"}},6134:function(e){e.exports={treeview:"skilltree_treeview__2qojD"}}},function(e){e.O(0,[774,109,908,811,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
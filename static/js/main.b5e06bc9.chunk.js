(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),n=a(27),c=a.n(n),o=a(45),r=a.n(o),l=(a(56),a(57),a(28)),d=a(14),p=a(26),j=a(74),h=a(34),m=a(42);m.a.initializeApp({apiKey:"AIzaSyBnFBvjGdYPikrU4wC3ZrfiIbdbEnIOL5o",authDomain:"portfolio-900d3.firebaseapp.com",projectId:"portfolio-900d3",storageBucket:"portfolio-900d3.appspot.com",messagingSenderId:"174540997603",appId:"1:174540997603:web:0f89116385d1ef95c396d6"});var u=m.a.firestore(),b=a(3);var f=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(""),c=Object(p.a)(n,2),o=c[0],r=c[1],l=Object(s.useState)(""),d=Object(p.a)(l,2),m=d[0],f=d[1],g=Object(s.useState)(""),x=Object(p.a)(g,2),O=x[0],v=x[1];return Object(b.jsxs)("div",{id:"contact",children:[Object(b.jsx)(h.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:4}}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u.collection("contacts").add({name:a,email:o,msg:m}).catch((function(e){alert(e.message)})),v("Thanks for your message :)"),i(""),r(""),f("")},"data-aos":"fade-up","data-aos-offset":"0",children:[Object(b.jsxs)("h1",{children:["Let's Connect ",a,"!"]}),Object(b.jsx)("input",{maxLength:"36",onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Name",value:a,required:!0}),Object(b.jsx)("input",{type:"email",placeholder:"Email",required:!0,onChange:function(e){return r(e.target.value)},value:o}),Object(b.jsx)("textarea",{rows:"4",name:"comment",placeholder:"Your Message",required:!0,onChange:function(e){return f(e.target.value)},value:m}),Object(b.jsx)("p",{className:"submitted",children:O}),Object(b.jsx)(j.a,{variant:"outline-light",id:"action-btn",type:"submit",children:"Get In Touch"})]})]})},g=a(75),x=a(79),O=a.p+"static/media/accessMe.7beef7a8.jpg",v=a.p+"static/media/ansible.c4df2857.jpg",y=a.p+"static/media/ecoblock.63905f88.png",w=a.p+"static/media/gn.2e470be5.png",N=a.p+"static/media/location.83b2afda.png",k=a.p+"static/media/manulife2.72c511b1.png",S=a.p+"static/media/shell.173f23f1.jpg",A=a.p+"static/media/homeyBot.3e06b6a0.png",P=[{id:1,img:k,link:"https://www.manulife.com/",title:"Manulife",role:"Software Developer Intern",languages:["REST APIs","Java","Spring Boot","React","Golang","NodeJS","Docker","CI&CD"],status:"In Progress",date:"Aug 2021 - Present",description:["Developing audit tool using Golang and Github API with React frontend, estimated to save over 100 hours of work annually","Contibuting to open-source linting ruleset for REST API development using JSON:API specification","Architecting and implementing microservices using Spring Boot to create microservice standard for 1000s of engineering employees"],filters:["Software"]},{id:2,img:a.p+"static/media/utoronto.8de741e4.png",link:"https://www.utsc.utoronto.ca/cms/computer-science-mathematics-statistics",title:"University of Toronto",role:"Teaching Assistant",status:"In Progress",date:"Sept 2021 - Present",description:["CSCA67 - Discrete Mathematics","MATA31 - Calculus for Mathematical Sciences"]},{id:3,img:v,link:"https://www.indexexchange.com/",title:"Index Exchange",role:"Software Engineer Intern",languages:["Kubernetes","Docker","CI&CD","Ansible","Helm"],status:"Completed!",date:"Jan 2021 - Apr-2021",description:["Deployed a scalable UI dashboard to centralize automation and management of hundreds of weekly deployments for 250+ engineering employees"],filters:["Software"]},{id:4,img:w,link:"https://www.linkedin.com/company/giants-network-inc",title:"Giants Network Inc.",role:"Software Developer",languages:["React","MongoDB","NodeJS","Express","Figma","Firebase","Wordpress"],status:"In Progress",date:"Sept 2020 - Present",description:["Proposed, designed and implemented portal website that acts as primary platform for interaction between 20+ organizations and 300+ youth leaders"],filters:["Software"]}],I=[{id:1,img:A,title:"HomeyBot",date:"Nov 2021",type:"Hackathon Project",devpost:"https://devpost.com/software/friendly-guy-frank",description:"A Discord bot that provides a safe space for the community, as dictated by the community. Users collectively decide on and combat inappropriate content and graphic images.",languages:["Python","Google Cloud Natural Language AI","Google Cloud Vision API","Firebase","DictionaryApi"]},{id:2,img:O,title:"AccessMe",date:"Oct 2021",type:"Hackathon Project",github:"https://github.com/AnanyaPoddar/borderhacks",devpost:"https://devpost.com/software/accessme",description:"A chrome extension that provides an all-in-one solution to personalize your browsing experience, with the goal of taking us one step closer to universal accessibility on the web.",languages:["WebSpeechAPI","DictionaryAPI","HTML/CSS/JS","Figma"]},{id:3,img:y,title:"EcoBlock",date:"Mar 2021",type:"Hackathon Project",github:"https://github.com/Johnson-Su/EcoBlock",devpost:"https://devpost.com/software/ecoblock",description:"A sustainable proof-of-stake blockchain, accompanied by a built-in reward system for certified green energy sources and a wallet mobile application.",languages:["Flutter","Google Cloud Vision API","Python","Firebase","Figma"]},{id:4,img:S,title:"Mock Shell Application",date:"Jun 2020 - Jul 2020",type:"Group Project",project:!0,description:"A shell application that performs linux shell commands, mimicks file system management, and includes text-to-speech functionality.",languages:["Java","Java Speech API","Agile","TDD"]},{id:5,title:"Portfolio Site",img:N,date:"Ongoing",type:"Solo Project",github:"https://github.com/AnanyaPoddar/portfolio",description:"You are here!",languages:["React","Firebase","Figma"]}];function C(e){return Object(b.jsx)(g.a,{sm:12,children:Object(b.jsxs)("div",{className:"exp-card","data-aos":"fade-up","data-aos-offset":"-30px",children:[Object(b.jsx)("img",{className:"exp-img",src:e.img}),Object(b.jsxs)(x.a.Body,{className:"exp-card-body",children:[Object(b.jsx)("h4",{className:"exp-date",children:e.date}),Object(b.jsx)("h2",{className:"exp-role",children:e.role}),Object(b.jsx)("a",{className:"exp-title",href:e.link,target:"_blank",children:e.company}),e.desc&&e.desc.length>1?Object(b.jsx)("ul",{className:"exp-desc",children:e.desc.map((function(e){return Object(b.jsx)("li",{style:{marginBottom:"5px"},children:e})}))}):Object(b.jsx)("h6",{className:"exp-desc",children:e.desc}),Object(b.jsx)("ul",{className:"langs",children:e.langs&&e.langs.map((function(e){return Object(b.jsx)("li",{className:"lang",children:e})}))})]})]})})}var D=function(){return Object(b.jsxs)("div",{id:"experience",children:[Object(b.jsx)("h1",{className:"heading","data-aos":"fade-up","data-aos-offset":"-30px",children:Object(b.jsx)("span",{children:"Experience"})}),Object(b.jsx)("div",{className:"experience-cards",children:P&&P.map((function(e){return Object(b.jsx)(C,{id:e.id,img:e.img,link:e.link,company:e.company,role:e.role,desc:e.description,langs:e.languages,status:e.status,date:e.date},e.id)}))})]})},B=a(25);var E=function(){return Object(b.jsxs)("div",{id:"home",children:[Object(b.jsx)("div",{className:"wave-container",level:90,children:Object(b.jsx)(h.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:4}})}),Object(b.jsxs)("div",{className:"intro",children:[Object(b.jsxs)("h1",{"data-aos":"fade-up",children:["Hi, I'm ",Object(b.jsx)("em",{className:"highlight",children:"Ananya Poddar"}),"."]}),Object(b.jsxs)("h3",{"data-aos":"fade-up",children:["A ",Object(b.jsx)("em",{className:"highlight",children:"Software Developer"})," and Computer Science student at the University of Toronto."]}),Object(b.jsx)(B.b,{className:"getStarted",to:"/#experience",spy:!0,smooth:!0,scroll:function(e){return function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})}(e,75)},exact:!0,children:Object(b.jsx)(j.a,{variant:"outline-light",id:"action-btn","data-aos":"fade-up","data-aos-offset":"0",children:" Get Started!"})})]})]})},T=(a(44),a(77)),J=a(78),M=a.p+"static/media/favicon.c569a803.ico",G=a.p+"static/media/AnanyaPoddarJan2022.5f7e7172.pdf";function F(){var e=function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})};return Object(b.jsx)("div",{id:"navbar",children:Object(b.jsxs)(T.a,{collapseOnSelect:!0,expand:"sm",children:[Object(b.jsx)(T.a.Brand,{children:Object(b.jsx)(B.a,{id:"brand",activeClass:"active",to:"/",spy:!0,smooth:!0,scroll:function(t){return e(t,75)},exact:!0,children:Object(b.jsx)("img",{src:M})})}),Object(b.jsx)(T.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(T.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(J.a,{className:"ml-auto",children:[Object(b.jsx)("div",{className:"nav-link",children:Object(b.jsx)(B.a,{to:"/#experience",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,75)},exact:!0,children:"Experience"})}),Object(b.jsx)("div",{className:"nav-link",children:Object(b.jsx)(B.a,{activeClass:"active",to:"/#projects",spy:!0,smooth:!0,duration:500,exact:!0,children:"Projects"})}),Object(b.jsx)("div",{className:"nav-link",children:Object(b.jsx)(B.a,{activeClass:"active",to:"/#contact",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,-75)},exact:!0,children:"Contact"})}),Object(b.jsx)(j.a,{id:"nav-btn",variant:"outline-light",children:Object(b.jsx)("a",{style:{"text-decoration":"none",color:"white"},href:G,target:"_blank",children:"Resume"})})]})})]})})}var H=a(76);function R(e){return Object(b.jsx)(g.a,{lg:6,className:"proj-col",children:Object(b.jsxs)("div",{className:"proj-card","data-aos":"fade-up","data-aos-offset":"-30px",children:[Object(b.jsx)("img",{className:"proj-img",src:e.img}),Object(b.jsxs)(x.a.Body,{className:"proj-card-body",children:[Object(b.jsx)("h6",{className:"proj-type",children:e.type}),Object(b.jsx)("h4",{className:"proj-title",children:e.title}),Object(b.jsx)("p",{className:"proj-desc",children:e.desc}),Object(b.jsx)("ul",{className:"langs",children:e.langs&&e.langs.map((function(e){return Object(b.jsx)("li",{className:"lang",children:e})}))}),Object(b.jsxs)("div",{className:"proj-links",children:[e.github&&Object(b.jsx)("a",{target:"_blank",href:e.github,children:Object(b.jsx)("i",{className:"fab fa-github fa-lg"})}),e.devpost&&Object(b.jsx)("a",{target:"_blank",href:e.devpost,children:Object(b.jsx)("i",{className:"fas fa-external-link-alt fa-lg"})})]})]})]})})}var _=function(){return Object(b.jsxs)("div",{id:"projects",children:[Object(b.jsx)("h1",{className:"heading","data-aos":"fade-up","data-aos-offset":"-30px",children:Object(b.jsx)("span",{children:"Projects"})}),Object(b.jsx)(H.a,{className:"project-cards",children:I.map((function(e){return Object(b.jsx)(R,{id:e.id,img:e.img,date:e.date,title:e.title,type:e.type,desc:e.description,langs:e.languages,github:e.github,devpost:e.devpost},e.id)}))})]})},z=a(50),L=a(51);function U(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),a=t[0],i=t[1],n=function(){window.pageYOffset>20?i(!0):i(!1)};return Object(s.useEffect)((function(){window.addEventListener("scroll",n)}),[]),a&&Object(b.jsx)("div",{className:"scrollToTop",onClick:function(){return window.scroll({top:0,behavior:"smooth"})},children:Object(b.jsx)(z.a,{icon:L.a,size:"2x",color:"#ed003f",className:"scrollBtn"})})}function Y(){return Object(b.jsxs)("ul",{className:"socials",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/ananya-poddar1",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in fa-2x","data-aos":"fade-left","data-aos-offset":"-30px"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{target:"_blank",href:"mailto:ananya.poddar@mail.utoronto.ca",children:Object(b.jsx)("i",{className:"far fa-envelope fa-2x","data-aos":"fade-left","data-aos-offset":"-30px"})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{target:"_blank",href:"https://github.com/AnanyaPoddar",children:Object(b.jsx)("i",{className:"fab fa-github fa-2x","data-aos":"fade-left","data-aos-offset":"-30px"})})})]})}function q(e){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(E,{}),Object(b.jsx)(D,{}),Object(b.jsx)(_,{}),Object(b.jsx)(f,{}),Object(b.jsx)(Y,{})]})}function K(){return Object(s.useEffect)((function(){r.a.init({duration:1200})}),[]),Object(b.jsxs)(l.a,{basename:"/portfolio",children:[Object(b.jsx)(U,{}),Object(b.jsx)(F,{}),Object(b.jsx)(d.c,{children:Object(b.jsx)(d.a,{exact:!0,path:"/",component:q})})]})}c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(K,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b5e06bc9.chunk.js.map
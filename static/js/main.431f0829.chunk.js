(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(27),i=a.n(n),o=a(40),r=a.n(o),l=(a(57),a(58),a(28)),d=a(14),j=a(29),p=a(26),b=a(75),h=a.p+"static/media/github.96997ac2.png",m=a.p+"static/media/linkedin.d748a62d.png",u=a.p+"static/media/new-email.782d1871.png",g=a(3);function x(){return Object(g.jsxs)("ul",{className:"socials",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/ananya-poddar1",children:Object(g.jsx)("img",{src:m,alt:"Linkedin","data-aos":"fade-left","data-aos-offset":"-30px"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"mailto:ananya.poddar@mail.utoronto.ca",children:Object(g.jsx)("img",{src:u,alt:"Email","data-aos":"fade-left","data-aos-offset":"-30px"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://github.com/AnanyaPoddar",children:Object(g.jsx)("img",{src:h,alt:"Github","data-aos":"fade-left","data-aos-offset":"-30px"})})})]})}var f=a(35),O=a(44);O.a.initializeApp({apiKey:"AIzaSyBnFBvjGdYPikrU4wC3ZrfiIbdbEnIOL5o",authDomain:"portfolio-900d3.firebaseapp.com",projectId:"portfolio-900d3",storageBucket:"portfolio-900d3.appspot.com",messagingSenderId:"174540997603",appId:"1:174540997603:web:0f89116385d1ef95c396d6"});var v=O.a.firestore();var A=function(){var e,t=Object(s.useState)(""),a=Object(p.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(""),o=Object(p.a)(i,2),r=o[0],l=o[1],d=Object(s.useState)(""),h=Object(p.a)(d,2),m=h[0],u=h[1],x=Object(s.useState)(""),O=Object(p.a)(x,2),A=O[0],y=O[1];return Object(g.jsxs)("div",{id:"contact",children:[Object(g.jsx)(f.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:4}}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.collection("contacts").add({name:c,email:r,msg:m}).catch((function(e){alert(e.message)})),y("Thanks for your message :)"),n(""),l(""),u("")},"data-aos":"fade-up","data-aos-offset":"0",children:[Object(g.jsxs)("h1",{children:["Let's Connect ",c,"!"]}),Object(g.jsx)("input",{maxLength:"36",onChange:function(e){return n(e.target.value)},type:"text",placeholder:"Name",value:c,required:!0}),Object(g.jsx)("input",(e={type:"email",placeholder:"Email",required:!0,onChange:function(e){return l(e.target.value)}},Object(j.a)(e,"type","text"),Object(j.a)(e,"value",r),Object(j.a)(e,"required",!0),e)),Object(g.jsx)("textarea",Object(j.a)({rows:"4",name:"comment",placeholder:"Your Message",required:!0,onChange:function(e){return u(e.target.value)},type:"text",value:m},"required",!0)),Object(g.jsx)("p",{className:"submitted",children:A}),Object(g.jsx)(b.a,{variant:"outline-light",id:"action-btn",type:"submit",children:"Get In Touch"})]})]})},y=a(76),w=a(80),k=a.p+"static/media/accessMe.7beef7a8.jpg",N=a.p+"static/media/ansible.c4df2857.jpg",S=a.p+"static/media/ecoblock.63905f88.png",I=a.p+"static/media/gn3.6f1604bf.png",E=a.p+"static/media/location.83b2afda.png",C=a.p+"static/media/manulife2.72c511b1.png",J=a.p+"static/media/shell.173f23f1.jpg",M=[{id:1,img:C,link:"https://www.manulife.com/",title:"Manulife",role:"Software Developer Intern",languages:["Java","Spring Boot","React","Docker","CI&CD"],status:"In Progress",date:"Aug 2021 - Present",description:"Coming soon!"},{id:3,img:N,link:"https://www.indexexchange.com/",title:"Index Exchange",role:"Software Engineer Intern",languages:["Kubernetes","Docker","CI&CD","Ansible","Helm"],status:"Completed!",date:"Jan 2021 - Apr-2021",description:["Deployed a scalable UI dashboard to centralize automation and management of hundreds of weekly deployments for 250+ engineering employees"]},{id:4,img:I,link:"https://www.linkedin.com/company/giants-network-inc",title:"Giants Network Inc.",role:"Software Developer",languages:["React","NodeJS","Firebase","Wordpress"],status:"In Progress",date:"Sept 2020 - Present",description:["Proposed and implemented portal website that acts as primary platform for interaction between 20+ organizations and 300+ youth leaders"]}],P=[{id:1,img:k,title:"AccessMe",date:"Oct 2021",type:"Hackathon Project",github:"https://github.com/AnanyaPoddar/borderhacks",devpost:"https://devpost.com/software/accessme",description:"A chrome extension that provides an all-in-one solution to personalize your browsing experience, with the goal of taking us one step closer to universal accessibility on the web.",languages:["WebSpeechAPI","DictionaryAPI","HTML/CSS/JS","Figma"]},{id:2,img:S,title:"EcoBlock",date:"Mar 2021",type:"Hackathon Project",github:"https://github.com/Johnson-Su/EcoBlock",devpost:"https://devpost.com/software/ecoblock",description:"A sustainable proof-of-stake blockchain, with reward system for certified green energy sources and accompanying wallet mobile application",languages:["Google Cloud Vision API","Flutter","Firebase"]},{id:3,img:J,title:"Mock Shell Application",date:"Jun 2020 - Jul 2020",type:"Group Project",project:!0,description:"A shell application that performs linux shell commands, mimicks file system management, and includes text-to-speech functionality.",languages:["Java","Java Speech API","Agile","TDD"]},{id:4,title:"Portfolio Site",img:E,date:"Apr 2021",type:"Solo Project",github:"https://github.com/AnanyaPoddar/portfolio",description:"You are here!",languages:["React","Firebase","Figma"]}];function D(e){e.status;return Object(g.jsx)(y.a,{sm:12,children:Object(g.jsxs)("div",{className:"exp-card","data-aos":"fade-up",children:[Object(g.jsx)("img",{className:"exp-img",src:e.img}),Object(g.jsxs)(w.a.Body,{className:"exp-card-body",children:[Object(g.jsx)("h4",{className:"exp-date",children:e.date}),Object(g.jsx)("h2",{className:"exp-role",children:e.role}),Object(g.jsx)("a",{className:"exp-title",href:e.link,target:"_blank",children:e.company}),Object(g.jsx)("h6",{className:"exp-desc",children:e.desc}),Object(g.jsx)("ul",{className:"langs",children:e.langs&&e.langs.map((function(e){return Object(g.jsx)("li",{className:"lang",children:e})}))})]})]})})}var G=function(){return Object(g.jsxs)("div",{id:"experience",children:[Object(g.jsx)("h1",{className:"heading","data-aos":"fade-up",children:Object(g.jsx)("span",{children:"Experience"})}),Object(g.jsx)("div",{className:"experience-cards",children:M.map((function(e){return Object(g.jsx)(D,{id:e.id,img:e.img,link:e.link,company:e.title,role:e.role,desc:e.description,langs:e.languages,status:e.status,date:e.date},e.id)}))})]})},R=a(25);var U=function(){return Object(g.jsxs)("div",{id:"home",children:[Object(g.jsx)(f.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:5}}),Object(g.jsxs)("div",{className:"intro",children:[Object(g.jsxs)("h1",{"data-aos":"fade-down",children:["Hi, I'm ",Object(g.jsx)("em",{className:"highlight",children:"Ananya Poddar"}),"."]}),Object(g.jsxs)("h3",{"data-aos":"fade-down",children:["A ",Object(g.jsx)("em",{className:"highlight",children:"Software Developer"})," and Computer Science student at the University of Toronto."]}),Object(g.jsx)(R.b,{className:"getStarted",to:"/#experience",spy:!0,smooth:!0,scroll:function(e){return function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})}(e,75)},exact:!0,children:Object(g.jsx)(b.a,{variant:"outline-light",id:"action-btn","data-aos":"fade-down","data-aos-offset":"0",children:" Get Started!"})})]})]})},Y=(a(46),a(78)),T=a(79),B=a.p+"static/media/CVAnanyaPoddar.cd746578.pdf";function F(){var e=function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})};return Object(g.jsx)("div",{id:"navbar",children:Object(g.jsxs)(Y.a,{collapseOnSelect:!0,expand:"sm",children:[Object(g.jsx)(Y.a.Brand,{children:Object(g.jsx)(R.a,{id:"brand",activeClass:"active",to:"/",spy:!0,smooth:!0,scroll:function(t){return e(t,75)},exact:!0,children:"A P"})}),Object(g.jsx)(Y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(Y.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(T.a,{className:"ml-auto",children:[Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)(R.a,{to:"/#experience",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,75)},exact:!0,children:"Experience"})}),Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)(R.a,{activeClass:"active",to:"/#projects",spy:!0,smooth:!0,duration:500,exact:!0,children:"Projects"})}),Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)(R.a,{activeClass:"active",to:"/#contact",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,-75)},exact:!0,children:"Contact"})}),Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)("a",{href:B,target:"_blank",children:"Resume"})})]})})]})})}var q=a(77);function z(e){return Object(g.jsx)(y.a,{lg:6,className:"proj-col",children:Object(g.jsxs)("div",{className:"proj-card","data-aos":"fade-up",children:[Object(g.jsx)("img",{className:"proj-img",src:e.img}),Object(g.jsxs)(w.a.Body,{className:"proj-card-body",children:[Object(g.jsx)("h6",{className:"proj-type",children:e.type}),Object(g.jsx)("h4",{className:"proj-title",children:e.title}),Object(g.jsx)("p",{className:"proj-desc",children:e.desc}),Object(g.jsx)("ul",{className:"langs",children:e.langs&&e.langs.map((function(e){return Object(g.jsx)("li",{className:"lang",children:e})}))}),Object(g.jsxs)("div",{className:"proj-links",children:[e.github&&Object(g.jsx)("a",{target:"_blank",href:e.github,children:Object(g.jsx)("img",{src:h,alt:"Github"})}),e.devpost&&Object(g.jsx)("a",{target:"_blank",href:e.devpost,children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAGYktHRAD/AP8A/6C9p5MAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNTowMyAwMjozMzowNY+Pg5wAAAOOSURBVFhH7ZhJ6E1RHMevIbMyE7EQZYjIjiKUhYWsDDsRElvEQqyQjYUhSZaGMmTaGBaUZAolMpdho8xk5vs5/X96zjvnvvvePS+l/6c+i9/vnnvO7917zzn3vqyVVv5j5slfTXKuTEYH+UCGBkrhY9lJJmG1pNObsh2JRLSV1yR9ryJRlr7yjaTDGSQSM03S9zvZn0QZdkg6O+Gi5nBSMsZ2FzXICPlVfpejSTSJJONwNUv/4oLYHTzuojqZLjn5rexHwoNjeX6Qd+VRuVD2knkwBmNxLmMXhll6Q3IiK0GIysKKyCRdKzvLGLbqMDY1FIIrwUlPZGz9syJidJU8i4vlaWntr8pBMgRjsebSjhpq0k0+l5wwn0QEG7woU+Q9yTnPZKxg2ympgR+cywZJ40uyDYkIfrEWm1/kQ8nEGS6B5/a85PgVGbprjMnYtFlPIga/9qP8KSeRyMGKMiwOSeHLJVDwfUl+DYkAEyU1MEljdyDbK+nkoIvysUIMP+Z9YqzcJRmYYzy/MFUSM+l6kghADbShpirGyx/ysxxKogZ+cX5ciU3YT9Ku1BlJboGLqqEGaqEmavuLc5KTt7ioNn5xfuyzT3J8k4uybIkkPuyiMNRCG2r7wyxJ8qXsQaIAtEfDj30mS47z5gYsa8RsHDGohZpoR41Ze3m7JbGCREFoj4Yf+7Akcvy9i6rjGNREu7u2S9ggFN4sbBm0sWxsJl8eVcvnTEknr2QfEgWgvQ0MfuzjPwYjJXFdj4FxSpJkES8CbdHwY5/9kuMbXZRlSyXxIReFCU4wqHynHEOiBn5xflzJIskxNpyBJMRZSa6hpQu2SjpgDayFX5wfsymMk7ulbQoUDfYp81o2tCkAJ9ozMptEDrRBw+KQXKFlEnpL+1KOvX4W2m6BTumIDjuSiGCFGBabvA/wDrBNDpNAoRckxy/LUi8ywKf2LUnj2C8HK6oo3Hq7ok9lkldEsE8aPo8HkAhQq1gW/VGSWW+TCbmisULrfvk2jkhO2uOiamzwojKZuFOxLw9o6LMGeM5s6ZhAwsMvxpdt9I7kRYXlKTbrjYY/GI3NkpMvyryvhhTslIx1zEUN0F2+kHSS9J8+D7beby2W+jPFdh9mcBcSTcC2epa5UvCg83FHZ+tIJCbpH3NgOwqfJUNIJIILcV1S7EoSqTgg6bQZPpJ5S1rdDJa8NYUGK+sc2co/Ist+A/C0sFHjqUwvAAAAAElFTkSuQmCC",alt:"Devpost"})})]})]})]})})}var K=function(){return Object(g.jsxs)("div",{id:"projects",children:[Object(g.jsx)("h1",{className:"heading","data-aos":"fade-up",children:Object(g.jsx)("span",{children:"Projects"})}),Object(g.jsx)(q.a,{className:"project-cards",children:P.map((function(e){return Object(g.jsx)(z,{id:e.id,img:e.img,title:e.title,type:e.type,desc:e.description,langs:e.languages,github:e.github,devpost:e.devpost},e.id)}))})]})},Z=a(51),H=a(52);function Q(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],n=function(){window.pageYOffset>20?c(!0):c(!1)};return Object(s.useEffect)((function(){window.addEventListener("scroll",n)}),[]),a&&Object(g.jsx)("div",{className:"scrollToTop",onClick:function(){return window.scroll({top:0,behavior:"smooth"})},children:Object(g.jsx)(Z.a,{icon:H.a,size:"2x",color:"#ed003f",className:"scrollBtn"})})}function L(e){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(U,{}),Object(g.jsx)(G,{}),Object(g.jsx)(K,{}),Object(g.jsx)(A,{}),Object(g.jsx)(x,{})]})}function V(){return Object(s.useEffect)((function(){r.a.init({duration:1200})}),[]),Object(g.jsxs)(l.a,{basename:"/",children:[Object(g.jsx)(Q,{}),Object(g.jsx)(F,{}),Object(g.jsx)(d.c,{children:Object(g.jsx)(d.a,{exact:!0,path:"/",component:L})})]})}i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.431f0829.chunk.js.map
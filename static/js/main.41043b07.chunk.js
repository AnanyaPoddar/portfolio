(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(2),i=a.n(s),c=a(27),n=a.n(c),o=a(40),r=a.n(o),l=(a(57),a(58),a(28)),d=a(14),j=a(29),p=a(26),h=a(75),b=a.p+"static/media/github.96997ac2.png",m=a.p+"static/media/linkedin.d748a62d.png",u=a.p+"static/media/new-email.782d1871.png",g=a(3);function f(){return Object(g.jsxs)("ul",{className:"socials",children:[Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/ananya-poddar1",children:Object(g.jsx)("img",{src:m,alt:"Linkedin","data-aos":"fade-left","data-aos-offset":"-30px"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"mailto:ananya.poddar@mail.utoronto.ca",children:Object(g.jsx)("img",{src:u,alt:"Email","data-aos":"fade-left","data-aos-offset":"-30px"})})}),Object(g.jsx)("li",{children:Object(g.jsx)("a",{target:"_blank",href:"https://github.com/AnanyaPoddar",children:Object(g.jsx)("img",{src:b,alt:"Github","data-aos":"fade-left","data-aos-offset":"-30px"})})})]})}var x=a(35),O=a(44);O.a.initializeApp({apiKey:"AIzaSyBnFBvjGdYPikrU4wC3ZrfiIbdbEnIOL5o",authDomain:"portfolio-900d3.firebaseapp.com",projectId:"portfolio-900d3",storageBucket:"portfolio-900d3.appspot.com",messagingSenderId:"174540997603",appId:"1:174540997603:web:0f89116385d1ef95c396d6"});var v=O.a.firestore();var y=function(){var e,t=Object(s.useState)(""),a=Object(p.a)(t,2),i=a[0],c=a[1],n=Object(s.useState)(""),o=Object(p.a)(n,2),r=o[0],l=o[1],d=Object(s.useState)(""),b=Object(p.a)(d,2),m=b[0],u=b[1],f=Object(s.useState)(""),O=Object(p.a)(f,2),y=O[0],A=O[1];return Object(g.jsxs)("div",{id:"contact",children:[Object(g.jsx)(x.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:4}}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.collection("contacts").add({name:i,email:r,msg:m}).catch((function(e){alert(e.message)})),A("Thanks for your message :)"),c(""),l(""),u("")},"data-aos":"fade-up","data-aos-offset":"0",children:[Object(g.jsxs)("h1",{children:["Let's Connect ",i,"!"]}),Object(g.jsx)("input",{maxLength:"36",onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Name",value:i,required:!0}),Object(g.jsx)("input",(e={type:"email",placeholder:"Email",required:!0,onChange:function(e){return l(e.target.value)}},Object(j.a)(e,"type","text"),Object(j.a)(e,"value",r),Object(j.a)(e,"required",!0),e)),Object(g.jsx)("textarea",Object(j.a)({rows:"4",name:"comment",placeholder:"Your Message",required:!0,onChange:function(e){return u(e.target.value)},type:"text",value:m},"required",!0)),Object(g.jsx)("p",{className:"submitted",children:y}),Object(g.jsx)(h.a,{variant:"outline-light",id:"action-btn",type:"submit",children:"Get In Touch"})]})]})},A=a(76),w=a(80),k=a.p+"static/media/accessMe.7beef7a8.jpg",S=a.p+"static/media/ansible.c4df2857.jpg",N=a.p+"static/media/ecoblock.63905f88.png",I=a.p+"static/media/gn.2e470be5.png",C=a.p+"static/media/location.83b2afda.png",E=a.p+"static/media/manulife2.72c511b1.png",P=a.p+"static/media/shell.173f23f1.jpg",J=a.p+"static/media/homeyBot.3e06b6a0.png",M=[{id:1,img:E,link:"https://www.manulife.com/",title:"Manulife",role:"Software Developer Intern",languages:["Java","Spring Boot","Golang","React","Docker","CI&CD"],status:"In Progress",date:"Aug 2021 - Present",description:"Coming soon!",filters:["Software"]},{id:3,img:S,link:"https://www.indexexchange.com/",title:"Index Exchange",role:"Software Engineer Intern",languages:["Kubernetes","Docker","CI&CD","Ansible","Helm"],status:"Completed!",date:"Jan 2021 - Apr-2021",description:["Deployed a scalable UI dashboard to centralize automation and management of hundreds of weekly deployments for 250+ engineering employees"],filters:["Software"]},{id:4,img:I,link:"https://www.linkedin.com/company/giants-network-inc",title:"Giants Network Inc.",role:"Software Developer",languages:["React","NodeJS","Figma","Firebase","Wordpress"],status:"In Progress",date:"Sept 2020 - Present",description:["Proposed and implemented portal website that acts as primary platform for interaction between 20+ organizations and 300+ youth leaders"],filters:["Software"]}],G=[{id:1,img:J,title:"HomeyBot",date:"Nov 2021",type:"Hackathon Project",devpost:"https://devpost.com/software/friendly-guy-frank",description:"A Discord bot that provides a safe space for the community, as dictated by the community. Users collectively decide on and combat inappropriate content and graphic images.",languages:["Python","Google Cloud Natural Language AI","Google Cloud Vision API","Firebase","DictionaryApi"]},{id:2,img:k,title:"AccessMe",date:"Oct 2021",type:"Hackathon Project",github:"https://github.com/AnanyaPoddar/borderhacks",devpost:"https://devpost.com/software/accessme",description:"A chrome extension that provides an all-in-one solution to personalize your browsing experience, with the goal of taking us one step closer to universal accessibility on the web.",languages:["WebSpeechAPI","DictionaryAPI","HTML/CSS/JS","Figma"]},{id:3,img:N,title:"EcoBlock",date:"Mar 2021",type:"Hackathon Project",github:"https://github.com/Johnson-Su/EcoBlock",devpost:"https://devpost.com/software/ecoblock",description:"A sustainable proof-of-stake blockchain, accompanied by a built-in reward system for certified green energy sources and a wallet mobile application.",languages:["Flutter","Google Cloud Vision API","Python","Firebase","Figma"]},{id:4,img:P,title:"Mock Shell Application",date:"Jun 2020 - Jul 2020",type:"Group Project",project:!0,description:"A shell application that performs linux shell commands, mimicks file system management, and includes text-to-speech functionality.",languages:["Java","Java Speech API","Agile","TDD"]},{id:5,title:"Portfolio Site",img:C,date:"Ongoing",type:"Solo Project",github:"https://github.com/AnanyaPoddar/portfolio",description:"You are here!",languages:["React","Firebase","Figma"]}];function D(e){return Object(g.jsx)(A.a,{sm:12,children:Object(g.jsxs)("div",{className:"exp-card","data-aos":"fade-up","data-aos-offset":"-30px",children:[Object(g.jsx)("img",{className:"exp-img",src:e.img}),Object(g.jsxs)(w.a.Body,{className:"exp-card-body",children:[Object(g.jsx)("h4",{className:"exp-date",children:e.date}),Object(g.jsx)("h2",{className:"exp-role",children:e.role}),Object(g.jsx)("a",{className:"exp-title",href:e.link,target:"_blank",children:e.company}),Object(g.jsx)("h6",{className:"exp-desc",children:e.desc}),Object(g.jsx)("ul",{className:"langs",children:e.langs&&e.langs.map((function(e){return Object(g.jsx)("li",{className:"lang",children:e})}))})]})]})})}var U=function(){return Object(g.jsxs)("div",{id:"experience",children:[Object(g.jsx)("h1",{className:"heading","data-aos":"fade-up","data-aos-offset":"-30px",children:Object(g.jsx)("span",{children:"Experience"})}),Object(g.jsx)("div",{className:"experience-cards",children:M.map((function(e){return Object(g.jsx)(D,{id:e.id,img:e.img,link:e.link,company:e.title,role:e.role,desc:e.description,langs:e.languages,status:e.status,date:e.date},e.id)}))})]})},R=a(25);var Y=function(){return Object(g.jsxs)("div",{id:"home",children:[Object(g.jsx)(x.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:5}}),Object(g.jsxs)("div",{className:"intro",children:[Object(g.jsxs)("h1",{"data-aos":"fade-down",children:["Hi, I'm ",Object(g.jsx)("em",{className:"highlight",children:"Ananya Poddar"}),"."]}),Object(g.jsxs)("h3",{"data-aos":"fade-down",children:["A ",Object(g.jsx)("em",{className:"highlight",children:"Software Developer"})," and Computer Science student at the University of Toronto."]}),Object(g.jsx)(R.b,{className:"getStarted",to:"/#experience",spy:!0,smooth:!0,scroll:function(e){return function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})}(e,75)},exact:!0,children:Object(g.jsx)(h.a,{variant:"outline-light",id:"action-btn","data-aos":"fade-down","data-aos-offset":"0",children:" Get Started!"})})]})]})},B=(a(46),a(78)),F=a(79),T=a.p+"static/media/CVAnanyaPoddar.cd746578.pdf";function q(){var e=function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})};return Object(g.jsx)("div",{id:"navbar",children:Object(g.jsxs)(B.a,{collapseOnSelect:!0,expand:"sm",children:[Object(g.jsx)(B.a.Brand,{children:Object(g.jsx)(R.a,{id:"brand",activeClass:"active",to:"/",spy:!0,smooth:!0,scroll:function(t){return e(t,75)},exact:!0,children:"A P"})}),Object(g.jsx)(B.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(B.a.Collapse,{id:"responsive-navbar-nav",children:Object(g.jsxs)(F.a,{className:"ml-auto",children:[Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)(R.a,{to:"/#experience",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,75)},exact:!0,children:"Experience"})}),Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)(R.a,{activeClass:"active",to:"/#projects",spy:!0,smooth:!0,duration:500,exact:!0,children:"Projects"})}),Object(g.jsx)("div",{className:"nav-link",children:Object(g.jsx)(R.a,{activeClass:"active",to:"/#contact",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,-75)},exact:!0,children:"Contact"})}),Object(g.jsx)(h.a,{id:"nav-btn",variant:"outline-light",children:Object(g.jsx)("a",{style:{"text-decoration":"none",color:"white"},href:T,target:"_blank",children:"Resume"})})]})})]})})}var z=a(77);function H(e){return Object(g.jsx)(A.a,{lg:6,className:"proj-col",children:Object(g.jsxs)("div",{className:"proj-card","data-aos":"fade-up","data-aos-offset":"-30px",children:[Object(g.jsx)("img",{className:"proj-img",src:e.img}),Object(g.jsxs)(w.a.Body,{className:"proj-card-body",children:[Object(g.jsx)("h6",{className:"proj-type",children:e.type}),Object(g.jsx)("h4",{className:"proj-title",children:e.title}),Object(g.jsx)("p",{className:"proj-desc",children:e.desc}),Object(g.jsx)("ul",{className:"langs",children:e.langs&&e.langs.map((function(e){return Object(g.jsx)("li",{className:"lang",children:e})}))}),Object(g.jsxs)("div",{className:"proj-links",children:[e.github&&Object(g.jsx)("a",{target:"_blank",href:e.github,children:Object(g.jsx)("img",{src:b,alt:"Github"})}),e.devpost&&Object(g.jsx)("a",{target:"_blank",href:e.devpost,children:Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAGYktHRAD/AP8A/6C9p5MAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNTowMyAwMjozMzowNY+Pg5wAAAOOSURBVFhH7ZhJ6E1RHMevIbMyE7EQZYjIjiKUhYWsDDsRElvEQqyQjYUhSZaGMmTaGBaUZAolMpdho8xk5vs5/X96zjvnvvvePS+l/6c+i9/vnnvO7917zzn3vqyVVv5j5slfTXKuTEYH+UCGBkrhY9lJJmG1pNObsh2JRLSV1yR9ryJRlr7yjaTDGSQSM03S9zvZn0QZdkg6O+Gi5nBSMsZ2FzXICPlVfpejSTSJJONwNUv/4oLYHTzuojqZLjn5rexHwoNjeX6Qd+VRuVD2knkwBmNxLmMXhll6Q3IiK0GIysKKyCRdKzvLGLbqMDY1FIIrwUlPZGz9syJidJU8i4vlaWntr8pBMgRjsebSjhpq0k0+l5wwn0QEG7woU+Q9yTnPZKxg2ympgR+cywZJ40uyDYkIfrEWm1/kQ8nEGS6B5/a85PgVGbprjMnYtFlPIga/9qP8KSeRyMGKMiwOSeHLJVDwfUl+DYkAEyU1MEljdyDbK+nkoIvysUIMP+Z9YqzcJRmYYzy/MFUSM+l6kghADbShpirGyx/ysxxKogZ+cX5ciU3YT9Ku1BlJboGLqqEGaqEmavuLc5KTt7ioNn5xfuyzT3J8k4uybIkkPuyiMNRCG2r7wyxJ8qXsQaIAtEfDj30mS47z5gYsa8RsHDGohZpoR41Ze3m7JbGCREFoj4Yf+7Akcvy9i6rjGNREu7u2S9ggFN4sbBm0sWxsJl8eVcvnTEknr2QfEgWgvQ0MfuzjPwYjJXFdj4FxSpJkES8CbdHwY5/9kuMbXZRlSyXxIReFCU4wqHynHEOiBn5xflzJIskxNpyBJMRZSa6hpQu2SjpgDayFX5wfsymMk7ulbQoUDfYp81o2tCkAJ9ozMptEDrRBw+KQXKFlEnpL+1KOvX4W2m6BTumIDjuSiGCFGBabvA/wDrBNDpNAoRckxy/LUi8ywKf2LUnj2C8HK6oo3Hq7ok9lkldEsE8aPo8HkAhQq1gW/VGSWW+TCbmisULrfvk2jkhO2uOiamzwojKZuFOxLw9o6LMGeM5s6ZhAwsMvxpdt9I7kRYXlKTbrjYY/GI3NkpMvyryvhhTslIx1zEUN0F2+kHSS9J8+D7beby2W+jPFdh9mcBcSTcC2epa5UvCg83FHZ+tIJCbpH3NgOwqfJUNIJIILcV1S7EoSqTgg6bQZPpJ5S1rdDJa8NYUGK+sc2co/Ist+A/C0sFHjqUwvAAAAAElFTkSuQmCC",alt:"Devpost"})})]})]})]})})}var K=function(){return Object(g.jsxs)("div",{id:"projects",children:[Object(g.jsx)("h1",{className:"heading","data-aos":"fade-up","data-aos-offset":"-30px",children:Object(g.jsx)("span",{children:"Projects"})}),Object(g.jsx)(z.a,{className:"project-cards",children:G.map((function(e){return Object(g.jsx)(H,{id:e.id,img:e.img,date:e.date,title:e.title,type:e.type,desc:e.description,langs:e.languages,github:e.github,devpost:e.devpost},e.id)}))})]})},Z=a(51),L=a(52);function Q(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),a=t[0],i=t[1],c=function(){window.pageYOffset>20?i(!0):i(!1)};return Object(s.useEffect)((function(){window.addEventListener("scroll",c)}),[]),a&&Object(g.jsx)("div",{className:"scrollToTop",onClick:function(){return window.scroll({top:0,behavior:"smooth"})},children:Object(g.jsx)(Z.a,{icon:L.a,size:"2x",color:"#ed003f",className:"scrollBtn"})})}function V(e){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(Y,{}),Object(g.jsx)(U,{}),Object(g.jsx)(K,{}),Object(g.jsx)(y,{}),Object(g.jsx)(f,{})]})}function W(){return Object(s.useEffect)((function(){r.a.init({duration:1200})}),[]),Object(g.jsxs)(l.a,{basename:"/",children:[Object(g.jsx)(Q,{}),Object(g.jsx)(q,{}),Object(g.jsx)(d.c,{children:Object(g.jsx)(d.a,{exact:!0,path:"/",component:V})})]})}n.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.41043b07.chunk.js.map
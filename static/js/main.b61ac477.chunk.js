(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),i=a(29),o=a.n(i),c=a(46),r=(a(44),a(22)),l=a(14),d=(a(57),a(74)),j=a(28),p=a(30),u=a(3);var b=function(){return Object(u.jsxs)("div",{id:"home",children:[Object(u.jsx)(j.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:5}}),Object(u.jsxs)("div",{className:"intro",children:[Object(u.jsxs)("h1",{children:["Hi, I'm ",Object(u.jsx)("em",{className:"highlight",children:"Ananya Poddar"}),"."]}),Object(u.jsxs)("h3",{children:["A ",Object(u.jsx)("em",{className:"highlight",children:"Software Developer"})," and Computer Science student at the University of Toronto."]}),Object(u.jsx)(p.a,{className:"getStarted",to:"/#experience",spy:!0,smooth:!0,scroll:function(e){return function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})}(e,75)},exact:!0,children:Object(u.jsx)(d.a,{variant:"outline-light",id:"action-btn",children:" Get Started!"})})]})]})},h=a(77),g=a(78),m=a.p+"static/media/CVAnanyaPoddar.bf697c99.pdf";function x(){var e=function(e,t){window.scroll({top:e.offsetTop-t,left:0,behavior:"smooth"})};return Object(u.jsx)("div",{children:Object(u.jsxs)(h.a,{collapseOnSelect:!0,expand:"sm",className:"navbar",bg:"navbar",variant:"dark",children:[Object(u.jsx)(h.a.Brand,{children:Object(u.jsx)(p.a,{id:"brand",activeClass:"active",to:"/#home",spy:!0,smooth:!0,scroll:function(t){return e(t,75)},exact:!0,children:"A P"})}),Object(u.jsx)(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsx)(h.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(g.a,{className:"ml-auto",children:[Object(u.jsx)(p.a,{activeClass:"active",to:"/#experience",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,75)},exact:!0,className:"nav-link",children:"Experience"}),Object(u.jsx)(p.a,{activeClass:"active",to:"/#contact",spy:!0,smooth:!0,duration:500,scroll:function(t){return e(t,-75)},exact:!0,className:"nav-link",children:"Contact"}),Object(u.jsx)("a",{className:"nav-link",href:m,target:"_blank",children:"Resume"})]})})]})})}var f=a(26),v=a(27),O=a.p+"static/media/github.96997ac2.png",A=a.p+"static/media/linkedin.d748a62d.png",y=a.p+"static/media/new-email.782d1871.png";function w(){return Object(u.jsxs)("ul",{className:"socials",children:[Object(u.jsxs)("li",{children:["        ",Object(u.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/ananya-poddar1",children:Object(u.jsx)("img",{src:A,alt:"Linkedin"})})]}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{target:"_blank",href:"mailto:ananya.poddar@mail.utoronto.ca",children:Object(u.jsx)("img",{src:y,alt:"Email"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{target:"_blank",href:"https://github.com/AnanyaPoddar",children:Object(u.jsx)("img",{src:O,alt:"Github"})})})]})}var k=a(43);k.a.initializeApp({apiKey:"AIzaSyBnFBvjGdYPikrU4wC3ZrfiIbdbEnIOL5o",authDomain:"portfolio-900d3.firebaseapp.com",projectId:"portfolio-900d3",storageBucket:"portfolio-900d3.appspot.com",messagingSenderId:"174540997603",appId:"1:174540997603:web:0f89116385d1ef95c396d6"});var I=k.a.firestore();var S=function(){var e,t=Object(s.useState)(""),a=Object(v.a)(t,2),n=a[0],i=a[1],o=Object(s.useState)(""),c=Object(v.a)(o,2),r=c[0],l=c[1],p=Object(s.useState)(""),b=Object(v.a)(p,2),h=b[0],g=b[1],m=Object(s.useState)(""),x=Object(v.a)(m,2),O=x[0],A=x[1];return Object(u.jsxs)("div",{id:"contact",children:[Object(u.jsx)(j.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:20,amplitude:45,speed:.1,points:4}}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),I.collection("contacts").add({name:n,email:r,msg:h}).catch((function(e){alert(e.message)})),A("Thanks for your message "+n+" :)"),i(""),l(""),g("")},children:[Object(u.jsxs)("h1",{children:["Let's Connect ",n,"!"]}),Object(u.jsx)("input",{maxLength:"36",onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Name",value:n,required:!0}),Object(u.jsx)("input",(e={type:"email",placeholder:"Email",required:!0,onChange:function(e){return l(e.target.value)}},Object(f.a)(e,"type","text"),Object(f.a)(e,"value",r),Object(f.a)(e,"required",!0),e)),Object(u.jsx)("textarea",Object(f.a)({rows:"4",name:"comment",placeholder:"Your Message",required:!0,onChange:function(e){return g(e.target.value)},type:"text",value:h},"required",!0)),Object(u.jsx)("p",{className:"submitted",children:O}),Object(u.jsx)(d.a,{variant:"outline-light",id:"action-btn",type:"submit",children:"Get In Touch"})]})]})},N=a.p+"static/media/dsp-ssp.4d9f7c57.png",C=a.p+"static/media/gn3.6f1604bf.png",E=a.p+"static/media/ecoblock.38ff37eb.gif",D=a.p+"static/media/shell.173f23f1.jpg",M=a.p+"static/media/dashboard.bdfbb04c.jpg",P=a.p+"static/media/ecoblock-details.60a5ffa5.png",G=a.p+"static/media/portfolio-full.d92a570b.png",J=[{id:1,img:N,title:"Index Exchange",role:"Software Engineer Intern",languages:"Kubernetes / Docker / CI&CD / Ansible / Helm",status:"Completed!"},{id:2,img:C,title:"Giants Network Inc.",role:"Software Developer",languages:"HTML / CSS / Javascript",status:"In Progress"},{id:3,img:E,title:"EcoBlock",role:"Hackathon Project",languages:"Flutter / Dart / Google Cloud Vision API / Firebase",status:"Completed!"},{id:4,img:D,title:"Mock Shell Application",role:"Group Project",languages:"Java / OOP / TDD",status:"Completed!"},{id:5,title:"Portfolio Site",role:"",languages:"React / Firebase",status:"In Progress"}],T=[{id:1,img:M,title:"Index Exchange",date:"Jan 2021 - Apr 2021",role:"Software Engineer Intern",link:1,btns:["About IX"],project:!1,description:"I worked in an <strong>Agile Devops </strong>Team. I automated tasks such as syncing data across branches by writing <strong>CI/CD pipelines, </strong>       utilized <strong>Docker</strong> to containerize my applications,       <strong>Kubernetes</strong> for managing deployments to clusters and for scaling applications, and wrote <strong>Ansible</strong> playbooks and <strong>Helm       charts</strong> to configure and deploy to multiple servers.       <br/><br/>      My main project involved deploying a UI to automate and manage hundreds of weekly deployments for <strong>250+ engineering employees</strong>. <br/><br/>      Key Features <ul><li>Configured LDAP authorization for ease of access to all employees</li><li>Fully integrated it with existing CI/CD pipelines to track who       ran which jobs at what time and from which repository</li></ul>",learned:"This was my first co-op experience. As such, not only did I get an introduction to the completely different world of Devops, I also learned about       common Agile tools such as Jira and Confluence."},{id:2,img:C,title:"Giants Network Inc.",date:"Sept 2020 - Present",role:"Software Developer",links:1,btns:["About Giants Network"],project:!1,description:"I worked solo as a Software Developer to design a responsive website using HTML, CSS, and JS(ES6). It is used as the       primary platform to connect with clients and attract potential investors.<br/><br/>",learned:"I learned to wear many hats because it was a startup. This meant not only making programming decisions as a developer,       but making UI/UX decisions, providing demos, etc."},{id:3,img:P,title:"EcoBlock",date:"Mar 2021",role:"Hackathon Project",project:!0,github:"https://github.com/Johnson-Su/EcoBlock",devpost:"https://devpost.com/software/ecoblock",description:"I worked in a group of four to create Ecoblock, an app that provides a sustainable alternative method of coin     production. In addition to using up to 99% less energy than cryptoccurencies such as bitcoin, it allows users to manage and     visualize their profit, and rewards users for using certified green energy sources using the Google Cloud Vision API.<br/><br/>    I created the frontend using Flutter, and configured API calls including sending requests and parsing responses."},{id:4,img:D,title:"Mock Shell Application",date:"Jun 2020 - Jul 2020",role:"Group Project",project:!0,description:"I lead an <strong>Agile</strong> team of four to created a Mock Shell program in <strong>Java</strong>.     In addition to mimicking file system management and basic shell commands, we utilized external APIs to perform text-to-speech,     and recursive search and sort functionality.<br/></br>     I strictly adhered to test-driven-development and OOP principles, and used techniques such as dependency-injection."},{id:5,title:"Portfolio Site",img:G,date:"Apr 2021",role:"Solo Project",project:!0,github:"https://github.com/AnanyaPoddar/portfolio",description:"You are here! I utilized <strong>React</strong> and <strong>Firebase</strong> to create a unique portfolio site     to showcase my work with a clean UI and unique, animated wave component. I learned the basics of React routing, hooks, states, props,     and components. I also utilized declarative programming, and connected it to a database to easily collect contact information."}],U=a(75),F=a(79),R=a(76);function Y(e){return Object(u.jsx)(U.a,{sm:6,md:6,children:Object(u.jsx)(r.b,{style:{textDecoration:"none"},to:"/details/".concat(e.id),children:Object(u.jsxs)(F.a,{className:"exp-card",children:[Object(u.jsx)("div",{className:"card-top",children:Object(u.jsx)(F.a.Img,{className:"exp-img",variant:"top",src:e.img})}),Object(u.jsxs)(F.a.Body,{children:[Object(u.jsx)("div",{className:"status",children:e.status}),Object(u.jsx)("h4",{className:"exp-title",children:e.title}),Object(u.jsx)(F.a.Text,{className:"exp-role",children:e.role}),Object(u.jsx)(F.a.Text,{className:"exp-langs",children:e.langs})]})]})})})}var q=function(){return Object(u.jsxs)("div",{id:"experience",children:[Object(u.jsx)("h1",{children:"Projects and Experience"}),Object(u.jsx)(R.a,{className:"experience-cards",children:J.map((function(e){return Object(u.jsx)(Y,{id:e.id,img:e.img,title:e.title,role:e.role,desc:e.description,langs:e.languages,status:e.status},e.id)}))})]})};function z(e){return Object(u.jsxs)("div",{className:"detailPage",children:[Object(u.jsx)("h6",{className:"date",children:e.date}),Object(u.jsx)("h1",{children:e.title}),Object(u.jsx)("h6",{children:e.role}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"details-info",children:[Object(u.jsx)("img",{className:"details-img",src:e.img,alt:""}),Object(u.jsx)("h5",{children:"Overview"}),Object(u.jsx)("div",{className:"details-desc",dangerouslySetInnerHTML:{__html:e.desc}}),!e.project&&Object(u.jsx)("h5",{children:"What I Learned"}),!e.project&&Object(u.jsx)("p",{className:"details-desc",children:e.learned}),e.github&&Object(u.jsx)("a",{target:"_blank",href:e.github,children:Object(u.jsx)("img",{src:O,alt:"Github"})}),e.devpost&&Object(u.jsx)("a",{target:"_blank",href:e.devpost,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAGYktHRAD/AP8A/6C9p5MAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMTowNTowMyAwMjozMzowNY+Pg5wAAAOOSURBVFhH7ZhJ6E1RHMevIbMyE7EQZYjIjiKUhYWsDDsRElvEQqyQjYUhSZaGMmTaGBaUZAolMpdho8xk5vs5/X96zjvnvvvePS+l/6c+i9/vnnvO7917zzn3vqyVVv5j5slfTXKuTEYH+UCGBkrhY9lJJmG1pNObsh2JRLSV1yR9ryJRlr7yjaTDGSQSM03S9zvZn0QZdkg6O+Gi5nBSMsZ2FzXICPlVfpejSTSJJONwNUv/4oLYHTzuojqZLjn5rexHwoNjeX6Qd+VRuVD2knkwBmNxLmMXhll6Q3IiK0GIysKKyCRdKzvLGLbqMDY1FIIrwUlPZGz9syJidJU8i4vlaWntr8pBMgRjsebSjhpq0k0+l5wwn0QEG7woU+Q9yTnPZKxg2ympgR+cywZJ40uyDYkIfrEWm1/kQ8nEGS6B5/a85PgVGbprjMnYtFlPIga/9qP8KSeRyMGKMiwOSeHLJVDwfUl+DYkAEyU1MEljdyDbK+nkoIvysUIMP+Z9YqzcJRmYYzy/MFUSM+l6kghADbShpirGyx/ysxxKogZ+cX5ciU3YT9Ku1BlJboGLqqEGaqEmavuLc5KTt7ioNn5xfuyzT3J8k4uybIkkPuyiMNRCG2r7wyxJ8qXsQaIAtEfDj30mS47z5gYsa8RsHDGohZpoR41Ze3m7JbGCREFoj4Yf+7Akcvy9i6rjGNREu7u2S9ggFN4sbBm0sWxsJl8eVcvnTEknr2QfEgWgvQ0MfuzjPwYjJXFdj4FxSpJkES8CbdHwY5/9kuMbXZRlSyXxIReFCU4wqHynHEOiBn5xflzJIskxNpyBJMRZSa6hpQu2SjpgDayFX5wfsymMk7ulbQoUDfYp81o2tCkAJ9ozMptEDrRBw+KQXKFlEnpL+1KOvX4W2m6BTumIDjuSiGCFGBabvA/wDrBNDpNAoRckxy/LUi8ywKf2LUnj2C8HK6oo3Hq7ok9lkldEsE8aPo8HkAhQq1gW/VGSWW+TCbmisULrfvk2jkhO2uOiamzwojKZuFOxLw9o6LMGeM5s6ZhAwsMvxpdt9I7kRYXlKTbrjYY/GI3NkpMvyryvhhTslIx1zEUN0F2+kHSS9J8+D7beby2W+jPFdh9mcBcSTcC2epa5UvCg83FHZ+tIJCbpH3NgOwqfJUNIJIILcV1S7EoSqTgg6bQZPpJ5S1rdDJa8NYUGK+sc2co/Ist+A/C0sFHjqUwvAAAAAElFTkSuQmCC",alt:"Devpost"})})]})]})}function B(e){var t,a=e.match.params.id;return window.scrollTo(0,0),Object(u.jsxs)("div",{className:"details-outer",children:[Object(u.jsx)(j.a,{className:"wave",fill:"#140a42",paused:!1,options:{height:90,amplitude:35,speed:.1,points:3}}),Object(u.jsx)("div",{id:"details",children:(t=T[a-1],Object(u.jsx)(z,{title:t.title,date:t.date,role:t.role,img:t.img,desc:t.description,learned:t.learned,project:t.project,github:t.github,devpost:t.devpost},t.id))})]})}var L=a(51),H=a(52);function K(){var e=Object(s.useState)(!1),t=Object(v.a)(e,2),a=t[0],n=t[1],i=function(){window.pageYOffset>20?n(!0):n(!1)};return Object(s.useEffect)((function(){window.addEventListener("scroll",i)}),[]),a&&Object(u.jsx)("div",{className:"scrollToTop",onClick:function(){return window.scroll({top:0,behavior:"smooth"})},children:Object(u.jsx)(L.a,{icon:H.a,size:"2x",color:"#ed003f",className:"scrollBtn"})})}function Z(e){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)(q,{}),Object(u.jsx)(S,{}),Object(u.jsx)(w,{})]})}function Q(){return Object(u.jsxs)(r.a,{children:[Object(u.jsx)(K,{}),Object(u.jsx)(x,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/details/:id",render:function(e){return Object(u.jsx)(B,Object(c.a)({},e))}}),Object(u.jsx)(l.a,{exact:!0,path:"/",component:Z})]})]})}var V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(Q,{})}),document.getElementById("root")),V()}},[[71,1,2]]]);
//# sourceMappingURL=main.b61ac477.chunk.js.map
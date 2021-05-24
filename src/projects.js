import ix from "./images/dsp-ssp.png";
import gn from "./images/gn3.png";
import ecoblock from "./images/ecoblock.gif";
import shell from "./images/shell.jpg";
import dashboard from "./images/dashboard.jpg";
import ecoblockDetails from "./images/ecoblock-details.png";
import portfolio from "./images/portfolio-full.png";
const experience = [
  {
    id: 1,
    img: ix,
    title: "Index Exchange",
    role: "Software Engineer Intern",
    languages: "Kubernetes / Docker / CI&CD / Ansible / Helm",
    status: "Completed!"
  },
  {
    id: 2,
    img: gn,
    title: "Giants Network Inc.",
    role: "Software Developer",
    languages: "HTML / CSS / Javascript",
    status: "In Progress"
  },
  {
    id: 3,
    img: ecoblock,
    title: "EcoBlock",
    role: "Hackathon Project",
    languages: "Flutter / Dart / Google Cloud Vision API / Firebase",
    status: "Completed!"
  },
  {
    id: 4,
    img: shell,
    title: "Mock Shell Application",
    role: "Group Project",
    languages: "Java / OOP / TDD",
    status: "Completed!"
  },
  {
    id: 5,
    title: "Portfolio Site",
    role: "",
    languages: "React / Firebase",
    status: "In Progress"
  },
];

const details = [
  {
    id: 1,
    img: dashboard,
    title: "Index Exchange",
    date: "Jan 2021 - Apr 2021",
    role: "Software Engineer Intern",
    link: 1,
    btns: ["About IX"],
    project: false,
    description:
      "I worked in an <strong>Agile Devops </strong>Team. I automated tasks such as syncing data across branches by writing <strong>CI/CD pipelines, </strong>\
       utilized <strong>Docker</strong> to containerize my applications, \
      <strong>Kubernetes</strong> for managing deployments to clusters and for scaling applications, and wrote <strong>Ansible</strong> playbooks and <strong>Helm \
      charts</strong> to configure and deploy to multiple servers. \
      <br/><br/>\
      My main project involved deploying a UI to automate and manage hundreds of weekly deployments for <strong>250+ engineering employees</strong>. <br/><br/>\
      Key Features <ul><li>Configured LDAP authorization for ease of access to all employees</li><li>Fully integrated it with existing CI/CD pipelines to track who \
      ran which jobs at what time and from which repository</li></ul>",
    learned:
      "This was my first co-op experience. As such, not only did I get an introduction to the completely different world of Devops, I also learned about \
      common Agile tools such as Jira and Confluence."
  },
  {
    id: 2,
    img: gn,
    title: "Giants Network Inc.",
    date: "Sept 2020 - Present",
    role: "Software Developer",
    links: 1,
    btns: ["About Giants Network"],
    project: false,
    description:
      "I worked solo as a Software Developer to design a responsive website using HTML, CSS, and JS(ES6). It is used as the \
      primary platform to connect with clients and attract potential investors.<br/><br/>",
    learned:
      "I learned to wear many hats because it was a startup. This meant not only making programming decisions as a developer,\
       but making UI/UX decisions, providing demos, etc."
  },
  {
    id: 3,
    img: ecoblockDetails,
    title: "EcoBlock",
    date: "Mar 2021",
    role: "Hackathon Project",
    project: true,
    github: "https://github.com/Johnson-Su/EcoBlock" ,
    devpost: "https://devpost.com/software/ecoblock" ,
    description: "I worked in a group of four to create Ecoblock, an app that provides a sustainable alternative method of coin \
    production. In addition to using up to 99% less energy than cryptoccurencies such as bitcoin, it allows users to manage and \
    visualize their profit, and rewards users for using certified green energy sources using the Google Cloud Vision API.<br/><br/>\
    I created the frontend using Flutter, and configured API calls including sending requests and parsing responses.",
  },
  {
    id: 4,
    img: shell,
    title: "Mock Shell Application",
    date: "Jun 2020 - Jul 2020",
    role: "Group Project",
    project: true,
    description: "I lead an <strong>Agile</strong> team of four to created a Mock Shell program in <strong>Java</strong>. \
    In addition to mimicking file system management and basic shell commands, we utilized external APIs to perform text-to-speech, \
    and recursive search and sort functionality.<br/></br> \
    I strictly adhered to test-driven-development and OOP principles, and used techniques such as dependency-injection.",
  },
  {
    id: 5,
    title: "Portfolio Site",
    img: portfolio,
    date: "Apr 2021",
    role: "Solo Project",
    project: true,
    github: "https://github.com/AnanyaPoddar/portfolio",
    description: "You are here! I utilized <strong>React</strong> and <strong>Firebase</strong> to create a unique portfolio site \
    to showcase my work with a clean UI and unique, animated wave component. I learned the basics of React routing, hooks, states, props, \
    and components. I also utilized declarative programming, and connected it to a database to easily collect contact information.",
    // languages: "React",
    // status: "In Progress"
  }
];

export { experience, details };

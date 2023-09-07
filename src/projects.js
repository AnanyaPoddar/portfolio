import accessMe from "./media/accessMe.jpg";
import ix from "./media/ansible.jpg";
import ecoblock from "./media/ecoblock.png";
import gn from "./media/gn.png";
import here from "./media/location.png";
import manulife from "./media/manulife2.png";
import splunk from "./media/splunk.jpeg";
import homeyBot from "./media/homeyBot.png";
import utoronto from "./media/utoronto.png";
import panorama from "./media/panorama.png";
import amorr from "./media/amorr.png";
import mybnb from "./media/mybnb.png";
import pintos from "./media/pintos.svg";


const experience = [
  {
    img: splunk,
    link: "https://www.splunk.com/en_us/about-splunk.html",
    title: "Splunk",
    role: "Software Engineer Intern",
    languages: ["Java", "REST APIs", "Mockito", "Docker", "Kubernetes"],
    status: "Completed",
    date: "Sept 2022 - Dec 2022",
    description: ["Strengthened resiliency of data ingestion into Splunk for 20 000+ customers by integrating circuit-breaker and retry resiliency patterns; Optimized for asynchronous calls in multi-threaded system"],
  },
  {
    img: manulife,
    link: "https://www.manulife.com/",
    title: "Manulife",
    role: "Software Developer Intern",
    languages: ["REST APIs", "Java", "Spring Boot", "React", "Golang", "NodeJS", "Docker", "CI&CD"],
    status: "Completed",
    date: "Aug 2021 - Apr 2022",
    description: ["Developed audit tool using Golang and Github API with React frontend, estimated to save over 100 hours of work annually",
      "Contibuted to open-source linting ruleset for REST API development using JSON:API specification",
      "Architected and implemented microservices using Spring Boot to create microservice standard for 1000s of engineering employees"],
  },
  {
    img: utoronto,
    link: "https://www.utsc.utoronto.ca/cms/computer-science-mathematics-statistics",
    title: "University of Toronto",
    role: "Teaching Assistant",
    languages: ["Python", "SQL", "Data Structures", "Graph Theory", "Proof Concepts", "HCI"],
    status: "In Progress",
    date: "Sept 2021 - Present",
    description: ["Human-Computer Interaction | Introduction to Programming | Discrete Mathematics | Calculus I for Mathematical Sciences", 
    "Taught computer science concepts and programming basics to 60+ students through tutorials & labs", "Created lesson plans to promote deep understanding of graph theory and proof concepts in tutorials"]
  },
  {
    img: ix,
    link: "https://www.indexexchange.com/",
    title: "Index Exchange",
    role: "Software Engineer Intern",
    languages: ["Kubernetes", "Docker", "CI&CD", "Ansible", "Helm"],
    status: "Completed!",
    date: "Jan 2021 - Apr-2021",
    description:
      ["Deployed a scalable UI dashboard to centralize automation and management of hundreds of weekly deployments for 250+ engineering employees"],
  },
  {
    img: gn,
    link: "https://www.linkedin.com/company/giants-network-inc",
    title: "Giants Network Inc.",
    role: "Software Developer",
    languages: ["React", "MongoDB", "NodeJS", "Express", "Figma", "Firebase", "Wordpress"],
    status: "In Progress",
    date: "Sept 2020 - Present",
    description:
      ["Proposed, designed and implementing portal website that acts as primary platform to connect 300+ youth leaders to experiential learning opportunities across 20+ organizations"],
  }
];

const projects = [
  {
    img: panorama,
    title: "Panorama",
    date: "Jun 2022 - Aug 2022",
    type: "Project",
    github: "https://github.com/AnanyaPoddar/panorama",
    external: "https://www.youtube.com/watch?v=qehIdTs6wII",
    description: "An all-inclusive digital collaboration tool with advanced whiteboarding capabilities, group video calls, and mass emails",
    languages: ["WebRTC", "Socket.io", "Node.js", "Express", "React", "MongoDB"]
  },
  {
    img: mybnb,
    title: "MyBnB",
    date: "Jul 2022 - Aug 2022",
    type: "Project",
    github: "https://github.com/AnanyaPoddar/MyBnB",
    description: "A terminal-based database application that mocks AirBnB, with support for all major operations expected for hosts and customers. Includes reports for insights, and a host toolkit to suggest how they can gain more customers.",
    languages: ["Java", "SQL", "JDBC"]
  },
  {
    img: pintos,
    title: "Pintos",
    date: "Jan 2023 - Apr 2023",
    type: "Project",
    description: "Extended simple operating system framework for 80x86 architecture to support multithreading, user programs with I/O support, virtual memory, and a basic file system",
    languages: ["C++", "OS", "Multithreading", "Virtual Memory", "File System"]
  },
  {
    img: amorr,
    title: "Amorr",
    date: "May 2022 - Aug 20022",
    type: "Project",
    github: "https://github.com/AnanyaPoddar/Amorr",
    description: "A web app that connects users with service providers at their doorstep, including filtering for and scheduling services. Services range from beauty and hair to landscaping.",
    languages: ["Flask", "Azure SQL", "ReactJs", "Node.js", "Amazon S3", "Agile",]
  },
  {
    img: homeyBot,
    title: "HomeyBot",
    date: "Nov 2021",
    type: "Hackathon Project",
    external: "https://devpost.com/software/friendly-guy-frank",
    description: "A Discord bot that provides a safe space for the community, as dictated by the community. Users collectively decide on and combat inappropriate content and graphic images.",
    languages: ["Python", "Google Cloud Natural Language", "Google Cloud Vision API", "Firebase", "DictionaryApi"]
  },
  {
    img: accessMe,
    title: "AccessMe",
    date: "Oct 2021",
    type: "Hackathon Project",
    github: "https://github.com/AnanyaPoddar/borderhacks",
    external: "https://devpost.com/software/accessme",
    description: "A chrome extension that provides an all-in-one solution to personalize your browsing experience, with the goal of taking us one step closer to universal accessibility on the web.",
    languages: ["WebSpeechAPI", "DictionaryAPI", "HTML/CSS/JS", "Figma"]
  },
  {
    img: ecoblock,
    title: "EcoBlock",
    date: "Mar 2021",
    type: "Hackathon Project",
    github: "https://github.com/Johnson-Su/EcoBlock",
    external: "https://devpost.com/software/ecoblock",
    description: "A sustainable proof-of-stake blockchain, accompanied by a built-in reward system for certified green energy sources and a wallet mobile application.",
    languages: ["Flutter", "Google Cloud Vision API", "Python", "Firebase", "Figma"]
  },
  {
    title: "Portfolio Site",
    img: here,
    date: "Ongoing",
    type: "Solo Project",
    github: "https://github.com/AnanyaPoddar/portfolio",
    description: "You are here!",
    languages: ["React", "EmailJS", "Figma"]
  }
]

export { experience, projects };


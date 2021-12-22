import accessMe from "./images/accessMe.jpg";
import ix from "./images/ansible.jpg";
import ecoblock from "./images/ecoblock.png";
import gn from "./images/gn.png";
import here from "./images/location.png";
import manulife from "./images/manulife2.png";
import shell from "./images/shell.jpg";
import homeyBot from "./images/homeyBot.png";
import utoronto from "./images/utoronto.png";

const experience = [
  {
    id: 1,
    img: manulife,
    link: "https://www.manulife.com/",
    title: "Manulife",
    role: "Software Developer Intern",
    languages: ["REST APIs", "Java", "Spring Boot", "React", "Golang", "NodeJS", "Docker", "CI&CD"],
    status: "In Progress",
    date: "Aug 2021 - Present",
    description: ["Developing audit tool using Golang and Github API with React frontend, estimated to save over 100 hours of work annually",
      "Contibuting to open-source linting ruleset for REST API development using JSON:API specification",
      "Architecting and implementing microservices using Spring Boot to create microservice standard for 1000s of engineering employees"],
    filters: ["Software"]
  },
  {
    id: 2,
    img: utoronto,
    link: "https://www.utsc.utoronto.ca/cms/computer-science-mathematics-statistics",
    title: "University of Toronto",
    role: "Teaching Assistant",
    status: "In Progress",
    date: "Sept 2021 - Present",
    description: ["MATA31 - Calculus for Mathematical Sciences", "Assisting students through weekly tutorials and office hours"]
  },
  {
    id: 3,
    img: ix,
    link: "https://www.indexexchange.com/",
    title: "Index Exchange",
    role: "Software Engineer Intern",
    languages: ["Kubernetes", "Docker", "CI&CD", "Ansible", "Helm"],
    status: "Completed!",
    date: "Jan 2021 - Apr-2021",
    description:
      ["Deployed a scalable UI dashboard to centralize automation and management of hundreds of weekly deployments for 250+ engineering employees"],
    filters: ["Software"]
  },
  {
    id: 4,
    img: gn,
    link: "https://www.linkedin.com/company/giants-network-inc",
    title: "Giants Network Inc.",
    role: "Software Developer",
    languages: ["React", "MongoDB", "NodeJS", "Express", "Figma", "Firebase", "Wordpress"],
    status: "In Progress",
    date: "Sept 2020 - Present",
    description:
      ["Proposed, designed and implemented portal website that acts as primary platform for interaction between 20+ organizations and 300+ youth leaders"],
    filters: ["Software"]
  }
];

const projects = [
  {
    id: 1,
    img: homeyBot,
    title: "HomeyBot",
    date: "Nov 2021",
    type: "Hackathon Project",
    devpost: "https://devpost.com/software/friendly-guy-frank",
    description: "A Discord bot that provides a safe space for the community, as dictated by the community. Users collectively decide on and combat inappropriate content and graphic images.",
    languages: ["Python", "Google Cloud Natural Language AI", "Google Cloud Vision API", "Firebase", "DictionaryApi"]
  },
  {
    id: 2,
    img: accessMe,
    title: "AccessMe",
    date: "Oct 2021",
    type: "Hackathon Project",
    github: "https://github.com/AnanyaPoddar/borderhacks",
    devpost: "https://devpost.com/software/accessme",
    description: "A chrome extension that provides an all-in-one solution to personalize your browsing experience, with the goal of taking us one step closer to universal accessibility on the web.",
    languages: ["WebSpeechAPI", "DictionaryAPI", "HTML/CSS/JS", "Figma"]
  },
  {
    id: 3,
    img: ecoblock,
    title: "EcoBlock",
    date: "Mar 2021",
    type: "Hackathon Project",
    github: "https://github.com/Johnson-Su/EcoBlock",
    devpost: "https://devpost.com/software/ecoblock",
    description: "A sustainable proof-of-stake blockchain, accompanied by a built-in reward system for certified green energy sources and a wallet mobile application.",
    languages: ["Flutter", "Google Cloud Vision API", "Python", "Firebase", "Figma"]
  },
  {
    id: 4,
    img: shell,
    title: "Mock Shell Application",
    date: "Jun 2020 - Jul 2020",
    type: "Group Project",
    project: true,
    description: "A shell application that performs linux shell commands, mimicks file system management, and includes text-to-speech functionality.",
    languages: ["Java", "Java Speech API", "Agile", "TDD"]
  },
  {
    id: 5,
    title: "Portfolio Site",
    img: here,
    date: "Ongoing",
    type: "Solo Project",
    github: "https://github.com/AnanyaPoddar/portfolio",
    description: "You are here!",
    languages: ["React", "Firebase", "Figma"]
  }
]

export { experience, projects };


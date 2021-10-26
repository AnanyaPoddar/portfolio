import accessMe from "./images/accessMe.jpg";
import ix from "./images/ansible.jpg";
import ecoblock from "./images/ecoblock.png";
import gn from "./images/gn.png";
import here from "./images/location.png";
import manulife from "./images/manulife2.png";
import shell from "./images/shell.jpg";
const experience = [
  {
    id: 1,
    img: manulife,
    link: "https://www.manulife.com/",
    title: "Manulife",
    role: "Software Developer Intern",
    languages: ["Java", "Spring Boot", "React", "Docker", "CI&CD"],
    status: "In Progress",
    date: "Aug 2021 - Present",
    description: "Coming soon!"
  },
  // {
  //   id: 2,
  //   img: utoronto,
  //   link: "https://www.utsc.utoronto.ca/cms/computer-science-mathematics-statistics",
  //   title: "University of Toronto",
  //   role: "Teaching Assistant",
  //   status: "In Progress",
  //   date: "Sept 2021 - Present",
  //   description: "Coming soon!"
  // },
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
      ["Deployed a scalable UI dashboard to centralize automation and management of hundreds of weekly deployments for 250+ engineering employees"]
  },
  {
    id: 4,
    img: gn,
    link: "https://www.linkedin.com/company/giants-network-inc",
    title: "Giants Network Inc.",
    role: "Software Developer",
    languages: ["React", "NodeJS", "Firebase", "Wordpress"],
    status: "In Progress",
    date: "Sept 2020 - Present",
    description:
      ["Proposed and implemented portal website that acts as primary platform for interaction between 20+ organizations and 300+ youth leaders"]
  }
];

const projects = [
  {
    id: 1,
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
    id: 2,
    img: ecoblock,
    title: "EcoBlock",
    date: "Mar 2021",
    type: "Hackathon Project",
    github: "https://github.com/Johnson-Su/EcoBlock",
    devpost: "https://devpost.com/software/ecoblock",
    description: "A sustainable proof-of-stake blockchain, with reward system for certified green energy sources and accompanying wallet mobile application",
    languages: ["Google Cloud Vision API", "Flutter", "Firebase"]
  },
  {
    id: 3,
    img: shell,
    title: "Mock Shell Application",
    date: "Jun 2020 - Jul 2020",
    type: "Group Project",
    project: true,
    description: "A shell application that performs linux shell commands, mimicks file system management, and includes text-to-speech functionality.",
    languages: ["Java", "Java Speech API", "Agile", "TDD"]
  },
  {
    id: 4,
    title: "Portfolio Site",
    img: here,
    date: "Apr 2021",
    type: "Solo Project",
    github: "https://github.com/AnanyaPoddar/portfolio",
    description: "You are here!",
    languages: ["React", "Firebase", "Figma"]
  }
]

export { experience, projects };


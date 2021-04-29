import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/new-email.png";
export default function Socials() {
  return (
      <ul className="socials">
        <li>        <a target="_blank" href="https://www.linkedin.com/in/ananya-poddar1">
          <img src={linkedin} alt="Linkedin" />
        </a></li>
        <li><a target="_blank" href="mailto:ananya.poddar@mail.utoronto.ca">
          <img src={email} alt="Email" />
        </a></li>
        <li><a target="_blank" href="https://github.com/AnanyaPoddar">
          <img src={github} alt="Github" />
        </a></li>
      </ul>
  );
}

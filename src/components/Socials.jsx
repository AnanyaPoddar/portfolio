import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import email from "../images/new-email.png";
export default function Socials() {
  return (
    <div className="socials-outer">
      {" "}
      <div className="socials">
        <a target="_blank" href="https://www.linkedin.com/in/ananya-poddar1">
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a target="_blank" href="mailto:ananya.poddar@mail.utoronto.ca">
          <img src={email} alt="Email" />
        </a>
        <a target="_blank" href="https://github.com/AnanyaPoddar">
          <img src={github} alt="Github" />
        </a>
      </div>
    </div>
  );
}

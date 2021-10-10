import React from "react";
import { experience } from "../projects.js";
import { Card, CardDeck, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ExperienceCard(props) {
  const status = props.status;
  return (
    <Col sm={12}>
      {/* <Link style={{ textDecoration: "none" }} to={`/details/${props.id}`}> */}
      <div className="exp-card">
        <img className="exp-img" src={props.img
        } />
        <div className="card-body">
          <h4 className="exp-date">{props.date}</h4>
          <h2 className="exp-role">{props.role}</h2>
          <a className="exp-title" href={props.link} target="_blank">{props.company}</a>
          <h6 className="exp-desc">{props.desc}</h6>
          <ul className="exp-langs">{props.langs && props.langs.map((lang) => <li className="exp-lang">{lang}</li>)}</ul>
        </div>
      </div>
      {/* </Link> */}
    </Col >
  );
}
function Experience() {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <div className="experience-cards">
        {/* <CardDeck className="experience-cards"> */}
        {experience.map((exp) => (
          <ExperienceCard
            key={exp.id}
            id={exp.id}
            img={exp.img}
            link={exp.link}
            company={exp.title}
            role={exp.role}
            desc={exp.description}
            langs={exp.languages}
            status={exp.status}
            date={exp.date}
          />
        ))}
      </div>
      {/* </CardDeck> */}
    </div>
  );
}

export default Experience;

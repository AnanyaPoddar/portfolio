import { React, useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { experience } from "../projects.js";

function ExperienceCard(props) {
  return (
    <Col sm={12}>
      <div className="exp-card" data-aos="fade-up" data-aos-offset="-30px">
        <img className="exp-img" src={props.img} />
        <Card.Body className="exp-card-body">
          <a className="exp-title" href={props.link} target="_blank">{props.company}</a>
          <h2 className="exp-role">{props.role}</h2>
          <h4 className="exp-date">{props.date}</h4>
          {props.desc && props.desc.length > 1 ? <ul className="exp-desc">{props.desc.map((point) => <li key={point} style={{ "marginBottom": "5px" }}>{point}</li>)}</ul>
            : <h6 className="exp-desc">{props.desc}</h6>}
          <ul className="langs">{props.langs && props.langs.map((lang) => <li key={lang} className="lang">{lang}</li>)}</ul>
        </Card.Body>
      </div>
    </Col >
  );
}
function Experience() {

  return (
    <div id="experience">
      <h1 className="heading" data-aos="fade-up" data-aos-offset="-30px"><span>Experience</span></h1>
      <div className="experience-cards">
        {experience && experience.map((exp) => (
          <ExperienceCard
            key={exp.company}
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
    </div>
  );
}

export default Experience;

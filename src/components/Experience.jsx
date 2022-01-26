import { React, useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { experience } from "../projects.js";
import db from "../firebase";

function ExperienceCard(props) {
  return (
    <Col sm={12}>
      <div className="exp-card" data-aos="fade-up" data-aos-offset="-30px">
        <img className="exp-img" src={props.img} />
        <Card.Body className="exp-card-body">
          <h4 className="exp-date">{props.date}</h4>
          <h2 className="exp-role">{props.role}</h2>
          <a className="exp-title" href={props.link} target="_blank">{props.company}</a>
          {props.desc && props.desc.length > 1 ? <ul className="exp-desc">{props.desc.map((point) => <li style={{ "marginBottom": "5px" }}>{point}</li>)}</ul>
            : <h6 className="exp-desc">{props.desc}</h6>}
          <ul className="langs">{props.langs && props.langs.map((lang) => <li className="lang">{lang}</li>)}</ul>
        </Card.Body>
      </div>
    </Col >
  );
}
function Experience() {
  // const [experience, setExperience] = useState([])
  // useEffect(() => {
  //   const fetchExp = async () => {
  //     const response = db.collection('experience')
  //     const data = await response.get();
  //     data.docs.forEach(exp => setExperience([...experience, exp.data()]))
  //   }
  //   fetchExp()
  // }, [])

  return (
    <div id="experience">
      <h1 className="heading" data-aos="fade-up" data-aos-offset="-30px"><span>Experience</span></h1>
      <div className="experience-cards">
        {experience && experience.map((exp) => (
          <ExperienceCard
            key={exp.id}
            id={exp.id}
            img={exp.img}
            link={exp.link}
            company={exp.company}
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

import React from "react"
import { Col, Row, Card } from "react-bootstrap";
import { projects } from "../projects.js";
function ProjectCard(props) {
    return (
        <Col lg={4} md={6} className="proj-col">
            <div className="proj-card" data-aos="fade-up" data-aos-offset="-30px">
                <img className="proj-img" src={props.img} alt={props.title}/>
                <Card.Body className="proj-card-body">
                    <h4 className="proj-title">{props.title}</h4>
                    <p className="proj-desc">{props.desc}</p>
                    <ul className="langs">{props.langs && props.langs.map((lang) => <li className="lang">{lang}</li>)}</ul>
                    <div className="proj-links">
                        {props.github && <a target="_blank" rel="noreferrer" href={props.github}>
                            <i className="fab fa-github fa-lg"></i>
                        </a>}
                        {props.external&& <a target="_blank" rel="noreferrer" href={props.external}>
                            <i className="fas fa-external-link-alt fa-lg"></i>
                        </a>}
                    </div>
                </Card.Body>
            </div>
        </Col>
    );
}
function Project() {
    return (
        <div id="projects">
            <h1 className="heading" data-aos="fade-up" data-aos-offset="-30px"><span>Projects</span></h1>
            <Row className="project-cards">
                {projects.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        id={proj.id}
                        img={proj.img}
                        date={proj.date}
                        title={proj.title}
                        type={proj.type}
                        desc={proj.description}
                        langs={proj.languages}
                        github={proj.github}
                        external={proj.external}
                    />
                ))}
            </Row>
        </div>
    );
}

export default Project;

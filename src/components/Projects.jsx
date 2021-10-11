import React from "react"
import { Col, Row, Card } from "react-bootstrap";
import Devpost from "../images/devpost.png";
import Github from "../images/github.png";
import { projects } from "../projects.js";
function ProjectCard(props) {
    return (
        <Col lg={6} className="proj-col">
            {/* <Link style={{ textDecoration: "none" }} to={`/details/${props.id}`}> */}
            <div className="proj-card">
                <img className="proj-img" src={props.img} />
                <Card.Body className="proj-card-body">
                    <h6 className="proj-type">{props.type}</h6>
                    <h4 className="proj-title">{props.title}</h4>
                    <p className="proj-desc">{props.desc}</p>
                    <ul className="langs">{props.langs && props.langs.map((lang) => <li className="lang">{lang}</li>)}</ul>
                    <div className="proj-links">
                        {props.github && <a target="_blank" href={props.github}>
                            <img src={Github} alt="Github" />
                        </a>}
                        {props.devpost && <a target="_blank" href={props.devpost}>
                            <img src={Devpost} alt="Devpost" />
                        </a>}
                    </div>
                </Card.Body>
            </div>
            {/* </Link> */}
        </Col>
    );
}
function Project() {
    return (
        <div id="projects">
            <h1 className="heading"><span>Projects</span></h1>
            <Row className="project-cards">
                {projects.map((proj) => (
                    <ProjectCard
                        key={proj.id}
                        id={proj.id}
                        img={proj.img}
                        title={proj.title}
                        type={proj.type}
                        desc={proj.description}
                        langs={proj.languages}
                        github={proj.github}
                        devpost={proj.devpost}
                    />
                ))}
            </Row>
        </div>
    );
}

export default Project;

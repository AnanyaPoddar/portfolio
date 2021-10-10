import React from "react";
import { experience } from "../projects.js";
import { Card, CardDeck, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProjectCard(props) {
    return (
        <Col sm={6} md={6}>
            <Link style={{ textDecoration: "none" }} to={`/details/${props.id}`}>
                <Card className="exp-card">
                    <div className="card-top">
                        <Card.Img className="exp-img" variant="top" src={props.img} />
                    </div>
                    <Card.Body>
                        <div className="status">{props.status}</div>
                        <h4 className="exp-title">{props.title}</h4>
                        <Card.Text className="exp-role">{props.role}</Card.Text>
                        <Card.Text className="exp-langs">{props.langs}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}
function Project() {
    return (
        <div id="experience">
            <h1>Projects</h1>
            <CardDeck className="experience-cards">
                {experience.map((exp) => (
                    <ProjectCard
                        key={exp.id}
                        id={exp.id}
                        img={exp.img}
                        title={exp.title}
                        role={exp.role}
                        desc={exp.description}
                        langs={exp.languages}
                        status={exp.status}
                    />
                ))}
            </CardDeck>
        </div>
    );
}

export default Project;

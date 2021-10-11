import { React, Fragment } from "react";
import { details } from "../projects.js";
import Wave from "react-wavify";
import Navbar from "./Navbar";
import Github from "../images/github.png";
import Devpost from "../images/devpost.png";

function DetailPage(props) {
  return (
    <div className="detailPage">
      <h6 className="date">{props.date}</h6>
      <h1>{props.title}</h1>
      <h6>{props.role}</h6>
      <br />
      <div className="details-info">
        <img className="details-img" src={props.img} alt="" />
        <h5>Overview</h5>
        <div className="details-desc" dangerouslySetInnerHTML={{ __html: props.desc }} />
        {!props.project && <h5>What I Learned</h5>}
        {!props.project && <p className="details-desc">{props.learned}</p>}
        {props.github && <a target="_blank" href={props.github}>
          <img className="github" src={Github} alt="Github" />
        </a>}
        {props.devpost && <a target="_blank" href={props.devpost}>
          <img className="devpost" src={Devpost} alt="Devpost" />
        </a>}
      </div>
    </div>
  );
}
function renderDetails(exp) {
  return (
    <DetailPage
      key={exp.id}
      title={exp.title}
      date={exp.date}
      role={exp.role}
      img={exp.img}
      desc={exp.description}
      learned={exp.learned}
      project={exp.project}
      github={exp.github}
      devpost={exp.devpost}
    />
  );
}

export default function Details({ match: { params: { id } } }) {
  window.scrollTo(0, 0);
  return (
    <div className="details-outer">
      <Wave
        className="wave"
        fill="#140a42"
        paused={false}
        options={{
          height: 90,
          amplitude: 35,
          speed: 0.1,
          points: 3
        }}
      />
      <div id="details">{renderDetails(details[id - 1])}</div>
    </div>
  );
}

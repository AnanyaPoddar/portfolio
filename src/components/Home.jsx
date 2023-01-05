import React from "react";
import { Button } from "react-bootstrap";
import Wave from "react-wavify";
import { NavHashLink as Link } from "react-router-hash-link";
function Home() {
  const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  };
  return (
    <div id="home">
    <div className="wave-container" level={90}>
      <Wave
        fill="#140a42"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 4
        }}
      />
    </div>
      <div className="intro">
        <h1 data-aos="fade-left">
          Hi, I'm <em className="highlight">Ananya Poddar</em>.
        </h1>
        <h3 data-aos="fade-left">
          A <em className="highlight">Software Engineer</em> and fourth-year Computer
          Science student at the University of Toronto.
        </h3>
        <Link className="getStarted"
          to="/#experience"
          spy={true}
          smooth={true}
          scroll={(el) => scrollWithOffset(el, 75)}
          exact={true}
        >
          <Button variant="outline-light" id="action-btn" data-aos="fade-left" data-aos-offset="0"> Get Started!</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Wave from "react-wavify";
function Home() {
  return (
    <div id="home">
      <Wave
        className="wave"
        fill="#140a42"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      <div className="intro">
        <h1>
          Hi, I'm <em className="highlight">Ananya Poddar</em>.
        </h1>
        <h3>
          A <em className="highlight">Software Developer</em> and Computer
          Science student at the University of Toronto.
        </h3>
        <Button variant="outline-light" id="action-btn">
          Get Started!
        </Button>
      </div>
    </div>
  );
}

export default Home;

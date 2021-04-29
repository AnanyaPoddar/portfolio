import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import Socials from "./Socials";
import Wave from "react-wavify";

function Contact() {
  const [name, setName] = useState("");
  const [submitted, setHeading] = useState("");

  function changeName(event) {
    setName(event.target.value);
  }

  function submitForm(event) {
    setHeading("Thanks for your message :)");
    event.preventDefault();
  }

  return (
    <div id="contact">
      <Wave
        className="wave"
        fill="#140a42"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 4
        }}
      />
      <form onSubmit={submitForm}>
        <h1>Let's Connect {name}!</h1>
        <input maxLength= "36" 
          onChange={changeName}
          type="text"
          placeholder="Name"
          value={name}
          required
        />
        <input type="email" placeholder="Email" required />
        <textarea rows="4" name="comment" placeholder="Your Message" required />
        <p className="submitted">{submitted}</p>
        <Button variant="outline-light" id="action-btn" type="submit">
          Get In Touch
        </Button>
      </form>
    </div>
  );
}

export default Contact;

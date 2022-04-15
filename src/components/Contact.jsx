import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Wave from "react-wavify";
import db from "../firebase";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setHeading] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    db.collection("contacts").add({
      name: name,
      email: email,
      msg: msg
    })
      .catch((e) => {
        alert(e.message);
      })
    setHeading("Thanks for your message :)");
    setName(''); setEmail(''); setMsg('');
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
      <form onSubmit={submitForm} data-aos="fade-up" data-aos-offset="0">
        <h1>Let's Connect {name}!</h1>
        <input maxLength="36"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          value={name}
          required />
        <input type="email" placeholder="Email" required
          onChange={(e) => setEmail(e.target.value)}
          value={email}/>
        <textarea rows="4" name="comment" placeholder="Your Message" required
          onChange={(e) => setMsg(e.target.value)}
          value={msg}/>
        <p className="submitted" >{submitted}</p>
        <Button variant="outline-light" id="action-btn" type="submit">
          Get In Touch
        </Button>
      </form>
    </div>
  );
}

export default Contact;

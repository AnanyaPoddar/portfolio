import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import Wave from "react-wavify";
import { send } from 'emailjs-com';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setHeading] = useState("");
  const [error, setError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
          name: name,
          email: email,
          msg: msg
      },
      process.env.REACT_APP_USER_ID,
    )
      .then(() => {
        setShowAlert(true);
        setError(false);
        setHeading("Thanks for your message :)");
        setName(''); setEmail(''); setMsg('');
      })
      .catch((err) => {
        setShowAlert(true);
        setError(true);
        setHeading("Something went wrong when sending this email...try again later");
        console.log('FAILED...', err);
      });
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
        {showAlert &&<Alert variant={error === true? "danger" : "success"} dismissible onClose={() => setShowAlert(false)}><p>{submitted}</p></Alert>}
        <Button variant="outline-light" id="action-btn" type="submit">
          Get In Touch
        </Button>
      </form>
    </div>
  );
}

export default Contact;

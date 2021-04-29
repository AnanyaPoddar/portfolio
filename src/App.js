import "./styles.css";
import React, { useRef } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Details from "./components/Details";
import Socials from "./components/Socials";

function MainPage(props) {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Contact />
      <Socials />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/details/:id"
          render={(props) => <Details {...props} />}
        />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
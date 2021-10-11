import "./styles.css";
import React, { useRef } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
// import Details from "./components/Details";
import Socials from "./components/Socials";
import ScrollToTop from "./components/ScrollToTop";

function MainPage(props) {
  return (
    <div className="App">
      <Home />
      <Experience className="section" />
      <Projects className="section" />
      <Contact className="section" />
      <Socials />
    </div>
  );
}

export default function App() {
  return (
    <Router basename='/'>
      <ScrollToTop />
      <Navbar />
      <Switch>
        {/* <Route
          exact
          path="/details/:id"
          render={(props) => <Details {...props} />}
        /> */}
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
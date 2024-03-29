import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollToTop from "./components/ScrollToTop";
import Socials from "./components/Socials";
import "./styles.css";

function MainPage() {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Socials />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [])
  return (
    <Router basename='/portfolio'>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
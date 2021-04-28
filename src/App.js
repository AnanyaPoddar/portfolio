import "./styles.css";
import React, { useRef } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function MainPage(props) {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

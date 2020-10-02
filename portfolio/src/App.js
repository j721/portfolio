import React from "react";
import Home from "../src/components/Home";
import { Route, useHistory, Switch } from "react-router-dom";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">

      <Route exact path="/" component={Home} />

      <Route path="/projects" component={Projects} />

      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;

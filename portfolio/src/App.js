import React from "react";
import Home from "../src/components/Home";
import { Route, useHistory, Switch } from "react-router-dom";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      
    </div>
  );
}

export default App;

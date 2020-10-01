import React from "react";
import NavBar from "../src/components/NavBar";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Contents-Container">
        <h1>Hi, I'm Julia.</h1>
        <p>
          I'm a fullstack developer who loves to learning new technologies and
          create beautiful projects.
        </p>
        <NavBar />

        <Projects />

        <Contact />
      </div>
    </div>
  );
}

export default App;

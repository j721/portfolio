import React from "react";
import  Projects  from "../src/components/Projects";
import  Contact  from "../src/components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm Julia.</h1>
      <p>
        I'm a fullstack developer who loves to learning new technologies and
        create beautiful projects.
      </p>

      <Projects/>

      <Contact/>

    </div>
  );
}

export default App;

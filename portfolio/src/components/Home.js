import React from "react";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="Home-Container">
      <h1>Hi, I'm Julia.</h1>
      <p>
        I'm a fullstack developer who loves to learning new technologies and
        creating beautiful projects.
      </p>

      <NavBar />

      <Projects />

      <Contact />
    </div>
  );
};

export default Home;

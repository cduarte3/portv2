import React from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import "./index.css";

function Project() {
  return (
    <div className="Resume">
      <Cursor />
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default Project;

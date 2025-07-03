import React from "react";
import Navbar from "./components/Navbar";
import ResHero from "./components/ResHero";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import "./index.css";

function Resume() {
  return (
    <div className="Resume">
      <Cursor />
      <Navbar />
      <ResHero />
      <Footer />
    </div>
  );
}

export default Resume;

import React from "react";
import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import "./index.css";

function Feed() {
  return (
    <div className="Feedback">
      <Cursor />
      <Navbar />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Feed;

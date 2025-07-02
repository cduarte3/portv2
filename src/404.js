import React from "react";
import Not from "./components/404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function NotFound() {
  return (
    <div className="App">
      <Navbar />
      <Not />
      <Footer />
    </div>
  );
}

export default NotFound;

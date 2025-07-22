import React from "react";
import Feedback from "./components/Feedback";
import Cursor from "./components/Cursor";
import "./index.css";

function Feed() {
  return (
    <div className="Feedback">
      <Cursor />
      <Feedback />
    </div>
  );
}

export default Feed;

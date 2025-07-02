import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './index.css';

function Project() {
  return (
    <div className="Resume">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
}

export default Project;

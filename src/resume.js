import React from 'react';
import Navbar from './components/Navbar';
import ResHero from './components/ResHero';
import Footer from './components/Footer';
import './index.css';

function Resume() {
  return (
    <div className="Resume">
      <Navbar />
      <ResHero />
      <Footer />
    </div>
  );
}

export default Resume;

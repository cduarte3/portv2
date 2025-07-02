import React from 'react';
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import './index.css';

function Feed() {
  return (
    <div className="Feedback">
      <Navbar />
      <Feedback />
      <Footer />
    </div>
  );
}

export default Feed;

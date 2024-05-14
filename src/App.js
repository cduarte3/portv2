import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Frame from './components/Frame';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Frame />
    </div>
  );
}

export default App;

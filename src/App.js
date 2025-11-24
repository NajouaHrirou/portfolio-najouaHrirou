import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Formations from './components/Formations';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
         <Navbar />
            <main>
              <Hero />
              <About />
              <Formations />
              <Projects />
              <Certifications />
              <Experiences />
              <Contact />
            </main>
    </div>
  );
}

export default App;
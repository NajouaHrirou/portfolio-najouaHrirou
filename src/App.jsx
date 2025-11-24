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
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          ↑
        </button>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Najoua HRIROU. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="mailto:najwahrirou04@gmail.com">📧 Email</a>
            <a 
              href="https://linkedin.com/in/najoua-hrirou" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>
            <a 
              href="https://github.com/najoua-hrirou" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🐙 GitHub
            </a>
          </div>
          <p className="footer-location">📍 Kénitra, Maroc</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
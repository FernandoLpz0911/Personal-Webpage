
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Fernando Lopez</span>.
        </h1>
        <p className="hero-subtitle">
          Software Engineer Architecting Scalable Systems.
          <br />
          Specializing in xxx
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

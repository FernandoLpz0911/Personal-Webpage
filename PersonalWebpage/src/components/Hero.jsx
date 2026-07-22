
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-highlight">Fernando Lopez</span>
        </h1>
        <p className="hero-subtitle">
          Undergraduate Research Engineer at UIC (Sanchez Research Lab)
          <br />
          Specializing in Clinical ML, Computer Vision, and Full-Stack Systems
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-outline">
            My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Resume
          </a>
          <a href="mailto:flope8@uic.edu" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

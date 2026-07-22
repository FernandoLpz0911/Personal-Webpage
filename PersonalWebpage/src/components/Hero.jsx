
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Fernando Lopez</h1>
        <p className="hero-tagline">
          Undergraduate Research Engineer at UIC (Sanchez Research Lab)
        </p>
        <p className="hero-focus">
          Clinical ML &middot; Computer Vision &middot; Full-Stack Systems
        </p>

        <div className="hero-links">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-link">
            Resume
          </a>
          <span className="hero-link-sep">&middot;</span>
          <a href="mailto:flope8@uic.edu" className="hero-link">
            Contact
          </a>
          <span className="hero-link-sep">&middot;</span>
          <a href="https://github.com/FernandoLpz0911" target="_blank" rel="noopener noreferrer" className="hero-link">
            GitHub
          </a>
          <span className="hero-link-sep">&middot;</span>
          <a href="https://linkedin.com/in/fernando-lopez-dev" target="_blank" rel="noopener noreferrer" className="hero-link">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

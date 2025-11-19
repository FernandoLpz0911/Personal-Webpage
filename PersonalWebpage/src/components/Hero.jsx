import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="status-badge">
          Available for hire
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="hero-highlight">Fernando Lopez</span>.
        </h1>
        <p className="hero-subtitle">
          I am a Software Developer specializing in Front-end experiences.
          Crafting AI-powered tools and seamless interfaces.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="status-badge">
          Computer Science Student @ UIC
        </div>
        <h1 className="hero-title">
          Hello, I'm <span className="hero-highlight">Fernando Lopez</span>.
        </h1>
        <p className="hero-subtitle">
          Software Engineer Architecting Scalable Systems.
          <br />
          Specializing in Full-Stack Development, Mobile Architecture, and Systems Programming (C++/ROS).
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

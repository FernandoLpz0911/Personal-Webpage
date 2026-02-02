import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="abstract" className="section-block hero-padding">
      <p className="meta-label">01 — ABSTRACT</p>
      
      <h2 className="thesis-statement">
        I engineer systems that enforce order upon chaos.
        My practice focuses on high-performance architecture, 
        algorithmic efficiency, and the "Toji" principle of 
        physical and digital optimization.
      </h2>
      
      <div className="academic-bio">
        <p>
          Currently reading Computer Science at the <span className="gold-text">University of Illinois Chicago</span> (Class of 2026).
          Specializing in scalable backend logic, speech analysis algorithms, and 
          distributed IoT networks. My approach is defined not by the breadth of tools used,
          but by the depth of control maintained over the system.
        </p>
      </div>
    </section>
  );
};

export default Hero;
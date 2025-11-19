
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-line"></span>
          About Me
        </h2>
        <div className="about-content-wrapper">
          <div className="about-text">
            <p>
              I'm a passionate developer with a keen eye for design and a drive to build efficient, scalable web applications. 
              Currently, I'm focusing on bridging the gap between complex AI technologies and user-friendly front-end interfaces.
            </p>
            <p>
              My recent work ranges from developing an <strong className="highlight">AI resume checker</strong> that helps candidates optimize their applications, 
              to implementing robust <strong className="highlight">AI watermarking systems</strong> for digital asset protection.
            </p>
            <p>
              When I'm not coding, you can find me exploring new web technologies, contributing to open source, or optimizing user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

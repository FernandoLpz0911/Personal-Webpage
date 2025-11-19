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
        <div className="about-grid">
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
          <div className="about-visual">
            <div className="profile-card">
               <div className="profile-overlay"></div>
               <div className="profile-content">
                  <div className="profile-icon">👨‍💻</div>
                  <h3 className="profile-title">Tech Enthusiast</h3>
                  <p className="profile-subtitle">Building the future, one component at a time.</p>
               </div>
            </div>
            <div className="visual-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
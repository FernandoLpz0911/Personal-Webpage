import React from 'react';
import '../styles/About.css';

const skills = [
  "Python", "C++", "JavaScript", "Golang", "Java", "React", "Django", 
  "Flutter", "ROS", "Git", "Linux", "SQL", "Firebase", "Sanity API"
];

const coursework = [
  "Data Structures", "Machine Organization", "Languages & Automata", 
  "Programming Language Design", "Math Foundations of Computing"
];

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
              I am a Junior Computer Science student at <strong>UIC</strong> with a deep desire for learning and relentless self-improvement. 
              Unlike typical front-end developers, my expertise spans deep into systems programming, complex algorithms, and hardware integration.
            </p>
            <p>
              Currently, I serve on the <strong>NASA Lunabotics Team</strong>, designing control logic for lunar rovers using ROS and C++. 
              I thrive in environments where efficiency, security, and scalability are paramount.
            </p>

            <div className="education-block">
              <h3 className="skills-title">Education & Coursework</h3>
              <div className="uni-info">
                <span className="uni-name">University of Illinois Chicago</span>
                <span className="uni-degree">B.S. Computer Science ('26)</span>
              </div>
              <p className="coursework-list">
                <strong>Relevant Coursework:</strong> {coursework.join(", ")}
              </p>
            </div>
            
            <div className="skills-container">
               <h3 className="skills-title">Technical Arsenal</h3>
               <div className="skills-grid">
                 {skills.map(skill => (
                   <span key={skill} className="skill-pill">{skill}</span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
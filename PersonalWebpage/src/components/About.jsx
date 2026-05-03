import React from 'react';
import '../styles/About.css';

const skills = [
  "Python", "C++", "JavaScript", "Go", "Java", "SQL",
  "React", "Django", "Flutter", "Docker", "Kubernetes",
  "PostgreSQL", "Firebase", "LangChain", "WatsonX", "Agile"
];

const coursework = [
  "Artificial Intelligence",
  "Data Structures", "Machine Organization", "Languages & Automata", 
  "Programming Language Design", "Math Foundations of Computing"
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>

        <div className="education-block">
          <h3 className="skills-title">Education & Coursework</h3>
          <div className="uni-info">
            <span className="uni-name">University of Illinois Chicago</span>
            <span className="uni-degree">Bachelors in Computer Science ('27)</span>
          </div>
        </div>
        
        <div className="about-content-wrapper">
          <div className="about-text">
            <p>
              I am a Senior Undergraduate Research Assistant as UIC with a large breadth in skills including basic frontend, backend,
              continuous integration (automated work), and developing machine learning models.
            </p>
            <p>
              I am currently in the process of developing my research data and paper for submission at an IEEE conference while wrapping up final exams
              for Spring 2026. Continuing my work in the laboratory concurrently with my own independent research.
            </p>
            
            <div className="skills-container">
               <h3 className="skills-title">Technical Skills</h3>
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
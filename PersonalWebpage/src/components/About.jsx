import React from 'react';
import '../styles/About.css';

const skillGroups = [
  {
    category: "Languages",
    items: ["Python", "Dart", "Swift", "C++", "Java", "JavaScript", "Go", "SQL"]
  },
  {
    category: "ML & Data",
    items: ["XGBoost", "scikit-learn", "CoreML", "YOLO11 (pose)", "WebGPU / WGSL", "LangChain", "RAG"]
  },
  {
    category: "Frameworks",
    items: ["Flutter", "FastAPI", "Django", "React", "AVFoundation"]
  },
  {
    category: "Cloud & Tools",
    items: ["Google Cloud Platform", "Firebase", "Docker", "GitHub Actions", "Git", "Linux", "PostgreSQL", "SQLite", "Figma"]
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          About
        </h2>
        <div className="about-content-wrapper">
          <div className="about-text">
            <div className="education-block">
              <h3 className="skills-title">Education</h3>
              <div className="uni-info">
                <span className="uni-name">University of Illinois Chicago</span>
                <span className="uni-degree">B.S. in Computer Science (Expected May 2027)</span>
              </div>
            </div>
            <p>
              I'm an Undergraduate Research Engineer at UIC's Sanchez Research Lab, building the clinical
              software platform behind ongoing oropharyngeal research — spanning Flutter/Firebase app
              development, Swift/CoreML on-device ML, and browser-based WebGPU tooling.
            </p>
            <p>
              Outside the lab I write independent research on LLM inference-cache integrity and build
              end-to-end ML systems, from an XGBoost-driven fitness app to an autonomous trading agent
              built at ProphetHacks 2026.
            </p>


            <div className="skills-container">
               <h3 className="skills-title">Technical Skills</h3>
               {skillGroups.map(group => (
                 <div key={group.category} className="skill-group">
                   <h4 className="skill-group-title">{group.category}</h4>
                   <div className="skills-grid">
                     {group.items.map(skill => (
                       <span key={skill} className="skill-pill">{skill}</span>
                     ))}
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

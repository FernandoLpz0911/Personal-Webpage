import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    role: "Control Systems Team Member",
    company: "NASA Lunabotics Team (UIC)",
    period: "Sep 2025 - Present",
    description: [
      "Designing a lunar robot prototype for the Artemis Mission, focusing on dust tolerance and autonomy.",
      "Engineered C++ control logic and data transmission systems restricted to 4 kbps using H.265 encoding.",
      "Developing pathfinding algorithms using ROS and LiDaR for autonomous visual mapping."
    ]
  },
  {
    id: 2,
    role: "Program Trainer",
    company: "Compudopt",
    period: "Aug 2024 - Feb 2025",
    description: [
      "Taught elementary to middle school students computer software, hardware, and coding concepts.",
      "Expanded digital literacy and fostered problem-solving skills in a classroom setting.",
      "Demonstrated strong communication skills by breaking down complex technical topics for non-technical audiences."
    ]
  },
  {
    id: 3,
    role: "Aspire To Inspire Mentor",
    company: "Women in Computer Science",
    period: "Sep 2025 - Present",
    description: [
      "Mentoring students in full-stack web architecture and AWS deployment strategies.",
      "Architecting a real-time chat application using Django and React to demonstrate complex backend integration."
    ]
  },
  {
    id: 4,
    role: "Event Security",
    company: "Monterrey Security",
    period: "Jun 2025 - Present",
    description: [
      "Coordinating with security teams to maintain safety for large-scale events with 63,500+ patrons.",
      "Demonstrating reliability, conflict resolution, and situational awareness in high-pressure environments."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-line"></span>
          Experience
        </h2>
        
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h4 className="exp-company">{exp.company}</h4>
                <ul className="exp-list">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    role: "Aspire To Inspire Mentor",
    company: "Women in Computer Science",
    period: "Sep 2025 - Present",
    description: [
      "Led and guided two students through the development of personal web portfolios, advising on design, architecture, and deployment best practices.",
      "Coordinated a collaborative team of four (two mentors, two mentees) to architect a real-time chatting application using Django and React.",
      "Defined the initial scope and strategy for implementing AWS deployment and future cross-platform expansion to mobile.",
      "Communicated technical insights and networking strategies, fostering a supportive environment."
    ]
  },
  {
    id: 2,
    role: "Event Security",
    company: "Monterrey Security",
    period: "Jun 2025 - Present",
    description: [
      "Coordinated logistics for large-scale events (60k+ patrons), collaborating with distributed teams to resolve critical incidents and ensure operational safety."
    ]
  },
  {
    id: 3,
    role: "Freelance Software Engineer",
    company: "Dulce Tentaciones",
    period: "Jun 2025 - Aug 2025",
    description: [
      "Directed the full SDLC for a local startup, delivering a responsive React application from requirements to deployment.",
      "Engineered a scalable marketing pipeline using Brevo and EmailJS, capable of processing 1,000+ monthly customer orders without manual intervention.",
      "Integrated Sanity CMS to enable non-technical content updates, reducing developer maintenance time by 100%."
    ]
  },
  {
    id: 4,
    role: "Program Trainer",
    company: "Compudopt",
    period: "Aug 2024 - Feb 2025",
    description: [
      "Translated complex programming paradigms into accessible K-8 curriculum, covering foundational logic such as loops, control flow, and variable types to build technical literacy for 20+ students per semester.",
      "Directed hands-on engineering workshops utilizing microcontrollers (Arduino) and circuit logic to foster early proficiency in embedded systems and real-world software use cases."
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
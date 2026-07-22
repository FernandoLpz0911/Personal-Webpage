import React from 'react';
import '../styles/Experience.css';

const roles = [
  {
    id: 0,
    role: "Mentor",
    company: "Women in Computer Science — Aspire To Inspire",
    period: "Sep 2025 - Present",
    description: [
      "Led a 4-person agile team building a real-time chat application in Django and React.",
      "Mentored 4 students through full-stack development and end-to-end deployment of personal web portfolios."
    ]
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          Leadership
        </h2>

        <div className="timeline">
          {roles.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="exp-role">{item.role}</h3>
                  <span className="exp-period">{item.period}</span>
                </div>
                <h4 className="exp-company">{item.company}</h4>
                <ul className="exp-list">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
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

export default Leadership;

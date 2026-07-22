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

        <div className="cv-list">
          {roles.map((item) => (
            <div key={item.id} className="cv-entry">
              <div className="cv-entry-header">
                <h3 className="cv-role">
                  {item.role} <span className="cv-company">— {item.company}</span>
                </h3>
                <span className="cv-period">{item.period}</span>
              </div>
              <ul className="cv-list-items">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;

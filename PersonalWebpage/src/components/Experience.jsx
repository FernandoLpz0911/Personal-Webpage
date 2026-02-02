import '../styles/Experience.css';

const experiences = [
  {
    role: "Medical Research Assistant",
    company: "University of Illinois Chicago",
    period: "Jan 2026 — Present",
    details: [
      "Optimized database architecture using Firebase, reducing read/writes by 98%.",
      "Architected Voxylex AI: a full-stack speech analysis application for patient data.",
      "Standardized development workflows and led peer code reviews.",
      "Developed a centralized error-logging wrapper, reducing boilerplate by 20%."
    ]
  },
  {
    role: "AI Engineer Intern Applicant",
    company: "Acentra",
    period: "Nov 2025",
    details: [
      "Applied focused engineering principles to AI integration challenges.",
      "Demonstrated capability in large-scale system logic."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h3 className="section-header">02. PROFESSIONAL HISTORY</h3>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <h4 className="exp-role">{exp.role} <span className="at-symbol">//</span> {exp.company}</h4>
              <span className="exp-period">{exp.period}</span>
            </div>
            <ul className="exp-details">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
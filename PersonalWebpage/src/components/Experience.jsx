import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    id: 0,
    role: "Undergraduate Research Engineer",
    company: "Sanchez Research Lab, UIC",
    period: "Jan 2026 - Present",
    description: [
      "Built the multi-app clinical platform (iOS/Android patient app, Windows physician dashboard, web admin console) on one Firebase backend for UIC's oropharyngeal research.",
      "Designed a multi-tenant Firestore schema with atomic batch writes and an IPC security layer gating every desktop child-window API call.",
      "Shipped 600+ unit tests across 11 suites, 7-language localization, and CI/CD via GitHub Actions with signed APK/AAB builds.",
      "Trained 4 YOLO11-pose models on a custom keypoint schema and wrote the Swift/CoreML inference pipeline from scratch for real-time oral motor assessment (Orosense).",
      "Fused TrueDepth camera data with pose keypoints to measure tongue protrusion in real millimeters via camera-intrinsic unprojection.",
      "Built a zero-dependency browser tool (GMPLabeler) with a hand-written WGSL GPU compute shader to auto-label and export YOLO training datasets."
    ]
  },
  {
    id: 1,
    role: "Freelance Software Engineer",
    company: "Dulce Tentaciones",
    period: "Jun 2025 - Aug 2025",
    description: [
      "Directed the full SDLC for a local bakery startup, delivering a responsive React application from requirements to deployment.",
      "Engineered a marketing pipeline using Brevo and EmailJS, processing 1,000+ monthly customer orders without manual intervention.",
      "Integrated Sanity CMS to enable non-technical content updates, reducing developer maintenance time."
    ]
  },
  {
    id: 2,
    role: "Program Teacher",
    company: "Compudopt",
    period: "Aug 2024 - Feb 2025",
    description: [
      "Translated programming concepts into accessible K-8 curriculum covering loops, control flow, and variable types for 20+ students per semester.",
      "Directed hands-on engineering workshops using Arduino microcontrollers and circuit logic to build early embedded systems literacy."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          Experience
        </h2>

        <div className="cv-list">
          {experiences.map((exp) => (
            <div key={exp.id} className="cv-entry">
              <div className="cv-entry-header">
                <h3 className="cv-role">
                  {exp.role} <span className="cv-company">— {exp.company}</span>
                </h3>
                <span className="cv-period">{exp.period}</span>
              </div>
              <ul className="cv-list-items">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="history" className="section-block">
      <p className="meta-label">02 — PROFESSIONAL HISTORY</p>
      
      {/* Role 1 - UIC */}
      <div className="history-block">
        <div className="history-header">
          <h3>Medical Research Assistant</h3>
          <span className="date-stamp">Jan 2026 — Present</span>
        </div>
        <h4 className="institution">University of Illinois Chicago (UIC)</h4>
        <ul className="history-list">
          <li>Optimized database architecture using Firebase, reducing database read/writes by approximately 98% through efficient indexing and query restructuring.</li>
          <li>Architected and deployed <em>Voxylex AI</em>, a full-stack application utilizing speech analysis algorithms to analyze patient data for medical research.</li>
          <li>Standardized development workflows by leading peer code reviews and improving codebase maintainability.</li>
          <li>Developed a centralized error-logging wrapper, reducing boilerplate code by 20% per file.</li>
        </ul>
      </div>

      <div className="gold-divider"></div>

      {/* Role 2 - Dulce Tentaciones */}
      <div className="history-block">
        <div className="history-header">
          <h3>Freelance Software Engineer</h3>
          <span className="date-stamp">Jun 2025 — Aug 2025</span>
        </div>
        <h4 className="institution">Dulce Tentaciones</h4>
        <ul className="history-list">
          <li>Directed the full SDLC for a local startup, delivering a responsive React application.</li>
          <li>Engineered a scalable marketing pipeline using Brevo and EmailJS to process 1,000+ monthly orders.</li>
          <li>Integrated Sanity CMS to enable non-technical content updates, reducing maintenance time by 100%.</li>
        </ul>
      </div>

      <div className="gold-divider"></div>

      {/* Role 3 - Compudopt */}
      <div className="history-block">
        <div className="history-header">
          <h3>Program Teacher</h3>
          <span className="date-stamp">Aug 2024 — Feb 2025</span>
        </div>
        <h4 className="institution">Compudopt Inc.</h4>
        <ul className="history-list">
          <li>Translated complex programming paradigms into K-8 curriculum (loops, control flow).</li>
          <li>Directed hands-on engineering workshops utilizing Arduino microcontrollers and circuit logic.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import '../styles/Research.css';

const publications = [
  {
    id: 1,
    title: "Interrupted Execution Coherence (IEC)",
    venue: "Paper draft, sole author",
    period: "Apr – Jun 2026",
    abstract: "Found that llama.cpp silently restores a KV-cache slot with corrupted attention values when its cell metadata still matches, with no rejection and no error. Built an HMAC-SHA256-based detection to close the gap and scored roughly 1,500 corruption trials against it.",
    techStack: ["Python", "llama.cpp"],
  }
];

const Research = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2 className="section-title">
          Research
        </h2>

        <div className="research-list">
          {publications.map((pub) => (
            <div key={pub.id} className="research-entry">
              <h3 className="research-title">{pub.title}</h3>
              <p className="research-meta">{pub.venue} &middot; {pub.period}</p>
              <p className="research-abstract">{pub.abstract}</p>
              <p className="research-tech">{pub.techStack.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;

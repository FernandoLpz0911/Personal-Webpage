import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Voxylex AI — Clinical Speech Research Platform",
    description: "Multi-app clinical platform (iOS/Android, Windows, web) on one Firebase backend for UIC oropharyngeal research, backed by 600+ unit tests.",
    techStack: ["Flutter", "Firebase", "Dart", "Cloud Run", "GitHub Actions"],
  },
  {
    id: 2,
    title: "Orosense — Real-Time Oral Motor Assessment",
    description: "iOS app measuring tongue function in real millimeters via TrueDepth depth data and a custom Swift/CoreML pose-detection pipeline.",
    techStack: ["Swift", "CoreML", "YOLO11-pose", "TrueDepth"],
  },
  {
    id: 3,
    title: "GMPLabeler — Browser ML Dataset Annotation Tool",
    description: "Zero-dependency browser tool for YOLO training data — webcam capture, auto-detection, and a hand-written WGSL GPU shader for pixel classification.",
    techStack: ["JavaScript", "WebGPU", "WGSL", "MediaPipe"],
  },
  {
    id: 4,
    title: "Interrupted Execution Coherence (IEC)",
    description: "Paper draft, sole author. Found llama.cpp silently restores corrupted KV-cache tensors with no error, and built an HMAC-based detection to close the gap.",
    techStack: ["Python", "llama.cpp"],
  },
  {
    id: 5,
    title: "Workout AI",
    description: "Full-stack fitness app pairing an XGBoost 1RM-prediction backend with an offline-first Dart inference engine for no-network use.",
    techStack: ["Flutter", "Python", "XGBoost", "FastAPI", "GCP"],
  },
  {
    id: 6,
    title: "ProphetHacks 2026 — Autonomous Trading Agent",
    description: "Autonomous trading agent live on Kalshi for 14 days unattended, with an LLM forecasting ensemble and an 8-constraint risk pipeline.",
    techStack: ["Python", "GCP", "Docker", "SQLite"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">
                  {project.description}
                </p>
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

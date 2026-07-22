import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Voxylex AI — Clinical Speech Research Platform",
    description: "Multi-app clinical platform (iOS/Android, Windows, web) on one Firebase backend for UIC oropharyngeal research. 600+ unit tests, 7-language localization, atomic patient registration with Auth rollback.",
    techStack: ["Flutter", "Firebase", "Dart", "Cloud Run", "GitHub Actions"],
  },
  {
    id: 2,
    title: "Orosense — Real-Time Oral Motor Assessment",
    description: "iOS app measuring tongue function in real millimeters via TrueDepth and camera-intrinsic unprojection. Custom CoreML inference pipeline and hand-written NMS in Swift, 4 YOLO11-pose models across 8 tasks.",
    techStack: ["Swift", "CoreML", "YOLO11-pose", "TrueDepth"],
  },
  {
    id: 3,
    title: "GMPLabeler — Browser ML Dataset Annotation Tool",
    description: "Zero-dependency browser tool for YOLO training data: webcam capture, auto-detection, click-to-correct editing. Hand-written WGSL GPU compute shader classifies mouth-ROI pixels every frame.",
    techStack: ["JavaScript", "WebGPU", "WGSL", "MediaPipe"],
  },
  {
    id: 4,
    title: "Interrupted Execution Coherence (IEC)",
    description: "Paper draft, sole author. Found llama.cpp restores a KV-cache slot with corrupted attention values silently when metadata matches — no rejection, no error. Built an HMAC-SHA256 detection and scored ~1,500 corruption trials.",
    techStack: ["Python", "llama.cpp"],
  },
  {
    id: 5,
    title: "Workout AI",
    description: "Full-stack fitness app: XGBoost 1RM prediction backend on FastAPI/Cloud Run, with an offline-first Dart inference engine mirroring the full ML pipeline for no-network use.",
    techStack: ["Flutter", "Python", "XGBoost", "FastAPI", "GCP"],
  },
  {
    id: 6,
    title: "ProphetHacks 2026 — Autonomous Trading Agent",
    description: "Autonomous prediction-market trading agent, live on Kalshi for 14 days unattended. LLM ensemble forecasting, James-Stein shrinkage on Kelly sizing, $180 spend kill switch, 8-constraint risk pipeline.",
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

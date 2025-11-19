import React from 'react';
import { Project } from '../types';
import '../styles/Projects.css';

// Mock Data
const projects: Project[] = [
  {
    id: 1,
    title: "AI Resume Checker",
    description: "An intelligent application that analyzes resumes against job descriptions using NLP to provide actionable feedback and scoring.",
    techStack: ["React", "Python", "OpenAI API", "Tailwind"],
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "Digital Watermark System",
    description: "A security tool for photographers and artists to invisibly watermark their creations using generative adversarial networks.",
    techStack: ["TypeScript", "TensorFlow.js", "Node.js"],
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers featuring real-time data visualization and inventory management.",
    techStack: ["Next.js", "D3.js", "Supabase"],
    image: "https://picsum.photos/600/400?random=3"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-line"></span>
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="view-project-btn">View Project</span>
                </div>
              </div>
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
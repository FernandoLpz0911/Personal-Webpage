
import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Smart Notes Multi-Platform App",
    description: "A personalized, high-performance notes app MVP built in collaboration with other engineers. Features custom C++ conversion logic integrated with Flutter/Dart and Firebase, supporting seamless synchronization for 20,000+ daily edits.",
    techStack: ["C++", "Dart", "Flutter", "Firebase"],
    image: "NotesApp.png"
  },
  {
    id: 2,
    title: "Digital Art Watermark",
    description: "A verifiable permission system using Merkle Trees and Bloom Filters to provide tamper-proof image verification. Reduced hash lookup time to O(log n).",
    techStack: ["React", "Django", "SQLite", "Algorithms"],
    image: "AIWatermarkImage.png"
  },
  {
    id: 3,
    title: "Dulce Tentaciones",
    description: "Full-stack e-commerce platform for a startup bakery. Integrated Sanity CMS for dynamic content and Brevo for marketing, supporting 1,000+ monthly form submissions.",
    techStack: ["React", "Sanity API", "Brevo", "CSS"],
    image: "DulceTentaciones.png"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="section-line"></span>
          Selected Projects
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
                  <span className="view-project-btn">View Details</span>
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

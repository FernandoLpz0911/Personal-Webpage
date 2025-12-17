import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: "Smart Notes Multi-Platform App",
    description: "A personalized, high-performance notes app MVP built in collaboration with other engineers. Features custom C++ conversion logic integrated with Flutter/Dart and Firebase, supporting seamless synchronization for 20,000+ daily edits.",
    techStack: ["C++", "Dart", "Flutter", "Firebase"],
    image: "NotesApp.png",
    link: "https://github.com/FernandoLpz0911/SmartNotes",
  },
  {
    id: 2,
    title: "Digital Art Watermark",
    description: "A verifiable permission system using Merkle Trees and Bloom Filters to provide tamper-proof image verification. Reduced hash lookup time to O(log n).",
    techStack: ["React", "Django", "SQLite", "Algorithms"],
    image: "AIWatermarkImage.png",
    link: "https://ai-watermark-registry.vercel.app/",
  },
  {
    id: 3,
    title: "Dulce Tentaciones",
    description: "Full-stack e-commerce platform for a startup bakery. Integrated Sanity CMS for dynamic content and Brevo for marketing, supporting 1,000+ monthly form submissions.",
    techStack: ["React", "Sanity API", "Brevo", "CSS"],
    image: "DulceTentaciones.png",
    link: "https://dulcetentaciones.com/",
  },
  {
    id: 4,
    title: "RAG AI Document Assistant",
    description: "A context-aware AI tool using IBM WatsonX and LangChain for document analysis. Features a decoupled architecture with a containerized Django backend and vector embeddings for efficient data processing.",
    techStack: ["Django", "React", "Docker", "WatsonX", "LangChain"],
    image: "RAGAssistant.png", 
    link: "https://ibm-ai-manual-summarizer-and-upload.vercel.app/",
  },
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
            <a 
              key={project.id} 
              href={project.link} // 💡 linking here
              target="_blank" // 💡 links in new tab
              rel="noopener noreferrer"
              className="project-card" // 💡 card styling
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />

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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
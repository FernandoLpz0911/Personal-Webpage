import '../styles/Projects.css';

const projects = [
  {
    title: "IoT Smart Home Ecosystem",
    tech: "C++ / ESP32 / Blynk",
    desc: "Wireless network of Arduinos handling real-time motion/environmental data. Improved I/O throughput by 75% via non-blocking algorithms."
  },
  {
    title: "Voxylex AI",
    tech: "Python / React / Speech Analysis",
    desc: "Medical research tool for analyzing patient speech patterns. Deployed for active university research."
  },
  {
    title: "Digital Art Watermark",
    tech: "Merkle Trees / Bloom Filters",
    desc: "Cryptographic verification system using Skip Lists for O(log n) search efficiency."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h3 className="section-header">03. SELECTED WORKS</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-tech">{project.tech}</p>
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
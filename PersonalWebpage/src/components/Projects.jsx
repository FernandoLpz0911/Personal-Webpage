import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section-block">
      <p className="meta-label">SELECTED WORKS</p>

      <div className="abstract-block">
        <div className="abstract-header">
          <h3>IoT Smart Home Ecosystem</h3>
          <span className="date-stamp">C++ / Embedded</span>
        </div>
        <p className="abstract-body">
          A distributed sensor network for real-time environmental monitoring. 
          Hardware architecture utilizes ESP32 microcontrollers communicating via 
          non-blocking I/O algorithms, resulting in a 75% throughput increase over 
          standard synchronous polling methods.
        </p>
      </div>

      <div className="minor-divider"></div>

      <div className="abstract-block">
        <div className="abstract-header">
          <h3>Digital Art Watermark</h3>
          <span className="date-stamp">Cryptography</span>
        </div>
        <p className="abstract-body">
          An ownership verification system leveraging Merkle Tree structures and Bloom Filters. 
          Implements Skip Lists to achieve O(log n) search efficiency for copyright validation 
          in high-volume asset databases.
        </p>
      </div>
      
    </section>
  );
};

export default Projects;
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h3 className="section-header">01. PHILOSOPHY & ARSENAL</h3>
      
      <div className="philosophy-grid">
        <div className="philosophy-block">
          <h4>The Methodology</h4>
          <p>
            I adhere to a philosophy of logic over impulse and proactive harm prevention. 
            In software, this manifests as rigorous error handling and scalable architecture. 
            In life, it manifests as Stoicism and physique development (Toji Fushiguro aesthetic).
            I do not "code"—I solve logic puzzles with aggressive efficiency.
          </p>
        </div>

        <div className="stack-block">
          <h4>The Arsenal</h4>
          <ul className="skill-list">
            <li><strong>Core:</strong> Python, C++, Java, Go, SQL</li>
            <li><strong>Architecture:</strong> Django, React, Docker, Kubernetes</li>
            <li><strong>Intelligence:</strong> WatsonX, LangChain, RAG Systems</li>
            <li><strong>Data:</strong> PostgreSQL, Firebase (98% Optimization), Vector DBs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
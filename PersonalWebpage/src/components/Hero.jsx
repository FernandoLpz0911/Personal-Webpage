import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="section-container hero-section">
      <div className="hero-content">
        <p className="overline">EST. 2026 // CHICAGO, IL</p>
        <h1 className="name-title">FERNANDO LOPEZ</h1>
        <h2 className="role-title">Architecting Scalable Systems & <br/>Pursuing Physical Perfection.</h2>
        
        <div className="manifesto">
          <p>
            I operate at the intersection of high-performance computing and individual optimization. 
            My work is defined not by the languages I use, but by the efficiency of the systems I architect.
            Whether minimizing database reads by 98% or refining physique aesthetics, the goal is identical:
            <span className="accent-text"> Absolute elimination of waste.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
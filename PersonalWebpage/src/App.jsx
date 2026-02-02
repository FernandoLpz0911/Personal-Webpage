import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero'; // Renamed to "Introduction" visually
import Experience from './components/Experience';
import Projects from './components/Projects';
import './styles/App.css';

function App() {
  return (
    <div className="layout-split">
      {/* The Pillar (Fixed Left) */}
      <aside className="layout-sidebar">
        <Sidebar />
      </aside>

      {/* The Manuscript (Scrollable Right) */}
      <main className="layout-content">
        <Hero />
        <Experience />
        <Projects />
        
        {/* Simple Footer built into flow */}
        <div className="heavy-divider"></div>
        <footer className="footer-signature">
          <p>© 2026 Fernando Lopez. University of Illinois Chicago.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PuzzleBackground from './components/PuzzleBackground';
import './styles/App.css';

function App() {
  return (
    <main className="app-main">
      {/* Dynamic Puzzle Background Layer */}
      <PuzzleBackground />

      {/* Content Layer */}
      <Navbar />
      
      <div className="content-layer">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Fernando Lopez. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
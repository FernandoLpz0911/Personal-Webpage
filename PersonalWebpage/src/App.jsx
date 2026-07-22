import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import './styles/App.css';

function App() {
  return (
    <main className="app-main">
      <Navbar />
      <div className="content-layer">
        <Hero />
        <Research />
        <Projects />
        <Experience />
        <Leadership />
        <About />
      </div>
    </main>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Research', href: '#research' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'About', href: '#about' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className={`nav-container ${mobileOpen ? 'menu-open' : ''}`}>
        <a href="#home" className="nav-logo" aria-label="Home">
          Fernando Lopez
        </a>
        <ul className={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
                {...(link.href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="mobile-menu-divider" aria-hidden="true"></li>
          <li className="mobile-menu-socials">
            <a href="https://github.com/FernandoLpz0911" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/github-mark-white.png" alt="" width="22" height="22" />
            </a>
            <a href="https://linkedin.com/in/fernando-lopez-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/InBug-White.png" alt="" width="22" height="22" />
            </a>
          </li>
          <li className="mobile-menu-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-action-btn mobile-action-primary"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
            <a
              href="mailto:flope8@uic.edu"
              className="mobile-action-btn mobile-action-outline"
              onClick={() => setMobileOpen(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             {mobileOpen ? (
               <>
                 <line x1="4" y1="4" x2="20" y2="20"></line>
                 <line x1="20" y1="4" x2="4" y2="20"></line>
               </>
             ) : (
               <>
                 <line x1="3" y1="12" x2="21" y2="12"></line>
                 <line x1="3" y1="6" x2="21" y2="6"></line>
                 <line x1="3" y1="18" x2="21" y2="18"></line>
               </>
             )}
           </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

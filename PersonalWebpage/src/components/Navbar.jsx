
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import '../styles/Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" aria-label="Home">
          <Logo width={50} height={50} />
        </a>
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-link"
                {...(link.href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-btn">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <line x1="3" y1="12" x2="21" y2="12"></line>
             <line x1="3" y1="6" x2="21" y2="6"></line>
             <line x1="3" y1="18" x2="21" y2="18"></line>
           </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

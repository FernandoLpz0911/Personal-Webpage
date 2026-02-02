import React from 'react';
import '../styles/Sidebar.css';
import ProfilePic from '../assets/Professional-Picture-Fernando-Lopez.jpg'; // Ensure image is in src/assets/

const Sidebar = () => {
  return (
    <aside className="sidebar-fixed">
      <div className="sidebar-content">
        
        {/* Profile Image - The "Author" Look */}
        <div className="profile-container">
          <img 
            src="/Professional-Picture-Fernando-Lopez.jpg" 
            alt="Fernando Lopez" 
            className="profile-img" 
          />
        </div>

        {/* Signature Identity */}
        <div className="identity-block">
          <h1 className="name-signature">FERNANDO LOPEZ</h1>
          <p className="role-caption">System Architect &<br/>Researcher</p>
        </div>

        {/* Corrected Navigation Labels */}
        <nav className="nav-menu">
          <a href="#abstract" className="nav-link">01. Abstract</a>
          <a href="#history" className="nav-link">02. Professional History</a>
          <a href="#works" className="nav-link">03. Selected Works</a>
          <a href="/resume.pdf" target="_blank" className="nav-link external">The Dossier ↗</a>
        </nav>

        {/* Footer Contact */}
        <div className="sidebar-footer">
          <p>Chicago, IL</p>
          <a href="mailto:flope8@uic.edu" className="gold-link">flope8@uic.edu</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
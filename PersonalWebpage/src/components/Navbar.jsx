import { Link } from 'react-router-dom';
import '../components/cssfiles/Navbar.css';

const Navbar = ( {onNavigate}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="nav-links">
          <button className='page' onClick={() => onNavigate('/')}>
            Home
          </button>

          <button className='page' onClick={() => onNavigate('/Projects')}>
            Projects
          </button>

          <button className='page' onClick={() => onNavigate('/Experience')}>
            Experience
          </button>

          <button className='page' onClick={() => onNavigate('/DevBlogs')}>
            Dev Blogs
          </button>

          <button className='page' onClick={() => onNavigate('/About')}>
            About Me
          </button>
          
          <button className='page' onClick={() => onNavigate('/Contact')}>
            Contact
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

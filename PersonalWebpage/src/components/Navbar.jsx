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
          <Link to="/Experience" className="nav-link"> Experience </Link>
          </button>

          <button className='page' onClick={() => onNavigate('/DevBlogs')}>
            <Link to="/DevBlogs" className="nav-link"> Dev Blogs </Link>
          </button>

          <button className='page' onClick={() => onNavigate('/About')}>
            <Link to="/About" className="nav-link"> About Me </Link>
          </button>
          
          <button className='page' onClick={() => onNavigate('/Contact')}>
            <Link to="/Contact" className="nav-link"> Contact </Link>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import '../components/cssfiles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="nav-links">
          <button id='animate-button' className='page'>
            <Link to="/" className="nav-link"> Home </Link>
          </button>

          <button id='animate-button' className='page'>
            <Link to="/Projects" className="nav-link"> Projects </Link>
          </button>

          <button id='animate-button' className='page'>
          <Link to="/Experience" className="nav-link"> Experience </Link>
          </button>

          <button id='animate-button' className='page'>
            <Link to="/DevBlogs" className="nav-link"> Dev Blogs </Link>
          </button>

          <button id='animate-button' className='page'>
            <Link to="/About" className="nav-link"> About Me </Link>
          </button>
          
          <button id='animate-button' className='page'>
            <Link to="/Contact" className="nav-link"> Contact </Link>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

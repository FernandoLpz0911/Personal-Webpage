import { Link } from 'react-router-dom';
import '../components/cssfiles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="bakery-logo"> Home </Link>
      
        <div className="navbar-right-group">
          <div className="nav-links">
            <Link to="/Projects" className="nav-link"> Projects </Link>
            <Link to="/Experience" className="nav-link"> Experience </Link>
            <Link to="/DevBlogs" className="nav-link"> Dev Blogs </Link>
            <Link to="/About" className="nav-link"> About Me </Link>
            <Link to="/Contact" className="nav-link"> Contact </Link>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import '../components/cssfiles/Navbar.css';
import ClickToggle  from './ClickToggle';

const Navbar = ( {onNavigate}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <div className="nav-links">
          <Link to="/" className="nav-link"> Home </Link>
          <Link to="/Projects" className="nav-link"> Projects </Link>
          <Link to="/Experience" className="nav-link"> Experience </Link>
          <Link to="/DevBlogs" className="nav-link"> Dev Blogs </Link>
          <Link to="/About" className="nav-link"> About Me </Link>
          <Link to="/Contact" className="nav-link"> Contact </Link>
          <ClickToggle/>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

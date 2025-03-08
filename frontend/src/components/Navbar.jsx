import { NavLink } from 'react-router-dom'; // No need for 'exact' in React Router v6
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Website Name */}
        <div className="website-name">
          <span>Vesta AI</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/signup" 
              className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

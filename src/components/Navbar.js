import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileImage from '../images/Aby.jpg'; // Import your profile image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={profileImage} alt="Your Name" className="navbar-image" />
          Abin
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio" className="navbar-link">
              Porjects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
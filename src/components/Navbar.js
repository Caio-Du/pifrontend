import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Pesquisar</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

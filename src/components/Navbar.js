import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Navbar = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      if (onLogout) {
        onLogout();
      }
    } catch (error) {
      console.error(error);
      alert('Falha ao fazer logout. Tente novamente.');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">Home</Link>
        <Link to="/search">Pesquisar</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

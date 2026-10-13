import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          Product Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>

            <Link to="/addproduct" className="nav-link">
              Add Product
            </Link>

            <span className="navbar-welcome">
              Welcome, <strong>{user?.name || 'User'}</strong>
            </span>

            <button className="navbar-logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
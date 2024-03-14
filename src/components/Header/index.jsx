// App.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light text-align-center">
      <div className="container">
        <img src={'/images/LogoMakr.png'} alt="Logo" className="navbar-brand" />
        {/* <a className="navbar-brand" href="/">
          Your Logo
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto p-3">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">課程介紹</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">會員註冊</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">會員登入</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>  );
};

export default Header;

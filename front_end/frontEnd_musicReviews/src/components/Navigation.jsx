import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navigation({ logo }) {
  const navLinks = [
    { path: "/reviews", label: "Reviews" },
    { path: "/nftstore", label: "NFT Store" },
    { path: "/about", label: "About" },
    { path: "/howItWorks", label: "How It Works" },
    { path: "/register", label: "Register" },
    { path: "/login", label: "Login" },
  ];

  return (
    <nav className="nav-container" aria-label="Main Navigation">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="App logo" />
        </Link>
      </div>
      <ul className="nav-items">
        {navLinks.map(({ path, label }) => (
          <li key={path} className="nav-links">
            <NavLink
              to={path}
              className={({ isActive }) => `nav-item ${isActive ? "active-link" : ""}`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

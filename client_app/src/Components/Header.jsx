import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-brand">My Brand </div>
        <div className="nav-links">
          {/* <a href="" className="nav-link">Home</a>
          <a href="" className="nav-link">Register</a>
          <a href="" className="nav-link">Login </a> */}

          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;

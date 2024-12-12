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

{/* //if you give class nav-bar some error due to ... in bootstrap nav-bar is a class */}


          <Link to="/home" className="navbar-link">  
            Home
          </Link>
          <Link to="/register" className="navbar-link">
            Register
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/places" className="navbar-link">
            Places
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;

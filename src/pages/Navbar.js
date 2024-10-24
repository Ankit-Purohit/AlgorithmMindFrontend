import React from "react";

import "../css/Navbar.css";
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1 className="logo">AlgorithmMind</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
    );
  };
export default Navbar;

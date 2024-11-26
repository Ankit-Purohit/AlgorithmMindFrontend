import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Retrieve JWT token from localStorage and parse it
  const jwtToken = localStorage.getItem("jwtToken");
  let username = null;

  if (jwtToken) {
    try {
      const tokenObject = JSON.parse(jwtToken); // Parse the JSON string
      username = tokenObject.username; // Extract the username
    } catch (error) {
      console.error("Error parsing JWT token:", error);
    }
  }

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Clear JWT token
    alert("You have been logged out!");
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <h1 className="logo">AlgorithmMind</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/youtube">Free Tutorial</a></li>

        {jwtToken ? (
          <>
            <li>Hey, {username}</li> {/* Display username */}
            <li>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

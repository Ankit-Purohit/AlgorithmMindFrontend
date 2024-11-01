import React from 'react';
import '../css/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to AlgorithmMind</h2>
        <p>Please login to continue</p>
        
        <form className="login-form">
          <div className="input-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

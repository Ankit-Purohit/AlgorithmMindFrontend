import React from 'react';
import '../css/Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <p>Join AlgorithmMind today!</p>
        
        <form className="signup-form">
          <div className="input-group">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;

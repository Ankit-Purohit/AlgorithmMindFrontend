import React, { useState } from 'react';
import '../css/Login.css';

const Login = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username:'',
    password:'',
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8083/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        const tok=JSON.stringify(data);
        // Assuming the response has the JWT token
        localStorage.setItem('jwtToken', tok);

        
        // Optionally, navigate to the home page after successful login
        window.location.href = '/';
        alert('Login successful!');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while logging in');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to AlgorithmMind</h2>
        <p>Please login to continue</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Email"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="extra-options">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
        
        <div className="google-login">
          <button className="google-login-button">
            <img
              src="https://cdn-teams-slug.flaticon.com/google.jpg"
              alt="Google logo"
              className="google-icon"
            />
            Login with Google
          </button>
        </div>
        
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

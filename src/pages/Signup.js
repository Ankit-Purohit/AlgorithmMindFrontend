import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Signup.css';

const Signup = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    password: '',
  });

  // State to manage error messages
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

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
      const response = await fetch('http://localhost:8083/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('User registered successfully!');
        console.log(data); // Handle success
        navigate('/login'); // Redirect to login page
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);

        // Map backend validation errors to frontend error state
        const errors = {};
        for (const [field, message] of Object.entries(errorData)) {
          errors[field] = message;
        }
        setFormErrors(errors); // Update state with error messages
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering the user.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <p>Join AlgorithmMind today!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
          </div>

          <div className="input-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Mobile Number"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {formErrors.mobileNumber && <span className="error">{formErrors.mobileNumber}</span>}
          </div>

          <div className="input-group">
            <textarea
              name="address"
              placeholder="Address"
              required
              rows="3"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            {formErrors.address && <span className="error">{formErrors.address}</span>}
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
            {formErrors.password && <span className="error">{formErrors.password}</span>}
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

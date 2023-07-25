import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
     // Create an object with the user data
     const userData = {
        username,
        password,
      };
      console.log(userData);
      axios.post('http://localhost:5000/login', userData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        // Handle the response from the server after login
        if (response && response.data) {
          console.log('Login successful:', response.data);
          // Redirect the user to the dashboard or other authenticated page
          navigate('/');
        } else {
          console.error('Login failed: Invalid response data');
        }
      })
      .catch((error) => {
        // Check if the error response object exists and if it has the data property
        if (error.response && error.response.data) {
          console.error('Login failed:', error.response.data);
        } else {
          console.error('Login failed: Unknown error occurred');
        }
      });

    // Here you can handle the login authentication using an API or any other method.
    // For now, let's just log the entered username and password to the console.
    console.log({
      username,
      password,
    });
    // After successful login, you can redirect the user to a dashboard or other page.
    
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

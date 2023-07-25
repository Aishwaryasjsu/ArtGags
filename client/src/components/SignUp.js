
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission and store the user data in the database using an API or any other method.
    // For now, let's just log the data to the console.
    console.log({
      username,
      password,
      email,
      isSeller,
    });
    // Reset the form after submission
    // setUsername('');
    // setPassword('');
    // setEmail('');
    // setIsSeller(false);



   // Create an object with the user data
   const userData = {
    username,
    password,
    email,
    isSeller,
  };

  console.log({
   userData,
  });

  

  axios.post('http://localhost:5000/signup', userData,{
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((response) => {
    if (response && response.data) {
      console.log('Signup successful:', response.data);
      // Handle the successful response here
    } else {
      console.error('Signup failed: Invalid response data');
      // Handle the case where the response data is missing or invalid
    }
    
    // Reset the form after successful signup
    setUsername('');
    setPassword('');
    setEmail('');
    setIsSeller(false);
    navigate('/login');
  })
  .catch((error) => {
    // Check if the error response object exists and if it has the data property
    if (error.response && error.response.data) {
      console.error('Login failed:', error.response.data);
    } else if (error.message) {
      // If there's a specific error message, log it
      console.error('Login failed:', error.message);
    } else {
      // Otherwise, log a generic error message
      console.error('Login failed: Unknown error occurred');
    }
  });
};


  return (
    <div className="signup-container">
      <h2 className="signup-header">Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group"> 
          <label htmlFor="isSeller">Are you a seller?</label>
          <input type="checkbox" id="isSeller" checked={isSeller} onChange={(e) => setIsSeller(e.target.checked)} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

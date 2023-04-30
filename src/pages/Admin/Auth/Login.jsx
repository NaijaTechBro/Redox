import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../admin.css';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to server or validate input fields
  };

  return (
    <div className="login-page">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
         <p>Don't Have an Account? <Link to='/admin/register'>Register</Link></p>
         <p>Or <Link to='/admin/forgot-pass'>Forgot Password</Link></p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

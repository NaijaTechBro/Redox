import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../admin.css';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to server or validate input fields
  };

  return (
    <div className="register-page">
      <h1>Admin Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />


        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>Already Have an Account? <Link to='/admin/login'>Login</Link></p>
        <p>Or <Link to='/admin/home'>Home</Link></p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

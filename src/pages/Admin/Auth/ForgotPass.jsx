import React, { useState } from 'react';
import '../admin.css';

function ForgotPass() {
  const [email, setEmail] = useState('');
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to server or validate input fields
  };

  return (
    <div className="login-page">
      <h1>Admin Forgot Password</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPass;

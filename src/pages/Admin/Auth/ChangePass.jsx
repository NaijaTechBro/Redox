import React, { useState } from 'react';
import '../admin.css';

function ChangePass() {
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCpasswordChange = (event) => {
    setCpassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to server or validate input fields
  };

  return (
    <div className="login-page">
      <h1>Admin Change Password</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="password">Old Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="cpassword">Confirm Password:</label>
        <input
          type="text"
          id="cpassword"
          value={cpassword}
          onChange={handleCpasswordChange}
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default ChangePass;

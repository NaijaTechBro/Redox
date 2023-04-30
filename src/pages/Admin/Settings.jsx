import React, { useState } from 'react';
import './admin.css';

function Setting() {
  const [password, SetPassword] = useState('')
  const [oldpassword, SetOldpassword] = useState('')


  const handlePasswordChange = (event) => {
    SetPassword(event.target.value);
  }

const handleOldpasswordChange = (event) => {
  SetOldpassword(event.target.value);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Settings updated');
  };

  return (
    <div className="profile-edit">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="oldpassword">Oldpassword:</label>
          <input type="text" id="oldpassword" value={oldpassword} onChange={handleOldpasswordChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Password Update</button>
      </form>
    </div>
  );
}

export default Setting;

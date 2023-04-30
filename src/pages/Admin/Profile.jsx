import React, { useState } from 'react';
import './admin.css';

function Profile() {
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [image, setImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Profile updated');
  };

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Profile Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" id="phone" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;

import React, { useState } from 'react';
import './manage-admin.css';
import Sidebar from '../Sidebar';

function ManageAdmin() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      dob: '1980-01-01',
      phoneNumber: '123-456-7890',
      email: 'johndoe@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      dob: '1990-02-02',
      phoneNumber: '555-555-5555',
      email: 'janesmith@example.com',
      role: 'Super Admin',
    },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    dob: '',
    phoneNumber: '',
    email: '',
    role: '',
  });

  const handleNameChange = (event) => {
    setNewUser({ ...newUser, name: event.target.value });
  };

  const handleDobChange = (event) => {
    setNewUser({ ...newUser, dob: event.target.value });
  };

  const handlePhoneNumberChange = (event) => {
    setNewUser({ ...newUser, phoneNumber: event.target.value });
  };

  const handleEmailChange = (event) => {
    setNewUser({ ...newUser, email: event.target.value });
  };

  const handleRoleChange = (event) => {
    setNewUser({ ...newUser, role: event.target.value });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditMode(true);
  };

  const handleCancel = () => {
    setSelectedUser(null);
    setEditMode(false);
    setNewUser({
      name: '',
      dob: '',
      phoneNumber: '',
      email: '',
      role: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editMode) {
      setUsers(
        users.map((user) => {
          if (user.id === selectedUser.id) {
            return { ...selectedUser, ...newUser };
          }
          return user;
        })
      );
      setSelectedUser(null);
      setEditMode(false);
    } else {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setNewUser({
        name: '',
        dob: '',
        phoneNumber: '',
        email: '',
        role: '',
      });
    }
  };

  return (
    <>
    <div className="admin-list">
      <h2>Manage Admin</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick=''>Update</button>
                <button onClick=''>Delete</button>
                 </td>
                </tr>
          )
          )
}
</tbody>
</table>
</div>
</>
  )
}

export default ManageAdmin;

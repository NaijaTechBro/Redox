import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    }
  return (
    <div className="sidebar">
    <div className="sidebar-top">
        <i className="logo fab fa-sketch"></i>
        <Link to='/admin/home'><img src='https://res.cloudinary.com/dkcazf954/image/upload/v1682628918/redoxlogo_1_cfljyp.png' alt='redox-logo' /></Link>
    </div>
    <div className="sidebar-center">
        <ul className="list">
            <li className="list-item active">
                <i className="list-item-icon fas fa-home"></i>
                <Link to='/admin/home'><span className="list-item-text">Dashboard</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-search"></i>
                <Link to='/admin/create-post'><span className="list-item-text">Create Post</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-stream"></i>
                <Link to='/admin/manage'><span className="list-item-text">Manage Admin</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-book"></i>
                <Link to='/admin/users'><span className="list-item-text">Manage Users</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-users"></i>
                <Link to='/admin/send-mail'><span className="list-item-text">Send Email</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-users"></i>
                <Link to='/admin/profile'><span className="list-item-text">Profile</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-users"></i>
                <Link to='/admin/settings'><span className="list-item-text">Settings</span></Link>
            </li>
            <li className="list-item">
                <i className="list-item-icon fas fa-users"></i>
                <Link to='/admin/settings'><span className="list-item-text">Logout</span></Link>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Sidebar
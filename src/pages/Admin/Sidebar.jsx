import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../../redux/features/auth/authService';
import './admin.css'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goHome = () => {
        navigate("/admin/home")
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const logoutUser = () => {
        dispatch(logout());
        navigate("/admin/login");
    };


return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div className="sidebar-top"onClick={goHome}>
        <i className="logo fab fa-sketch"></i>
        <Link to='/admin/home'><img src='https://res.cloudinary.com/dkcazf954/image/upload/v1682628918/redoxlogo_1_cfljyp.png' alt='redox-logo' /></Link>
    </div>
    <div className="sidebar-center">
        <ul className="list">
            <li className="list-item active">
                <i className="list-item-icon fas fa-home"></i>
                <Link to='/admin/dashboard'><span className="list-item-text">Dashboard</span></Link>
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
                <Link onClick={logoutUser}><span className="list-item-text">Logout</span></Link>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Sidebar
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { createSuperAdmin, validateEmail } from '../../../redux/features/auth/authService';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from '../../../redux/features/auth/authSlice';
import Loading from "../../../components/Loader/Loader";
import '../admin.css';


const initialState = {
  firstName: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { firstName, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !password) {
      return toast.error("All fields are required");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    };
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
  

  const userData = {
    firstName,
    email,
    password,
  };
  setIsLoading(true);
  try {
    const data = await createSuperAdmin(userData);
    await dispatch(SET_LOGIN(true));
    await dispatch(SET_NAME(data.name));
    navigate("/admin/dashboard");
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
  }
};

  return (
    <div className="register-page">
      {isLoading && <Loading />}
      <h1>Admin Register</h1>
      <form onSubmit={register}>
      <input
              type="text"
              placeholder="Name"
              required
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
            />

        <p>Already Have an Account? <Link to='/admin/login'>Login</Link></p>
        <p>Or <Link to='/admin/home'>Home</Link></p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

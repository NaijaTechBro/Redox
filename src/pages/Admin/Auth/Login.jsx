import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../../components/Loader/Loader';
import { validateEmail } from '../../../redux/features/auth/authService';
import {
  login,
  RESET
} from '../../../redux/features/auth/authSlice'
import '../admin.css';

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isLoggedIn, isSuccess, message, isError, twoFactor } = 
  useSelector((state) => state.auth);
  
  const loginUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
      password,
    };

    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/admin/dashboard");
    }

    if (isError && twoFactor) {
      navigate("/admin/home");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, email, navigate, isError, twoFactor])

  return (
    <div className="login-page">
      {isLoading && <Loader />}
      <h1>Admin Login</h1>
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder='Email'
          required
          name='email'
          value={email}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
        placeholder='Password'
        name='password'
          type="password"
          value={password}
          onChange={handleInputChange}
        />
         <p>Don't Have an Account? <Link to='/admin/register'>Register</Link></p>
         <p>Or <Link to='/admin/forgot-pass'>Forgot Password</Link></p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

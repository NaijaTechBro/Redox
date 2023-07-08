import React, { useState } from 'react';
import '../admin.css';
import { toast } from "react-toastify";
import { validateEmail } from "../../../redux/features/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, RESET } from "../../../redux/features/auth/authSlice";
import Loader from "../../../components/Loader/Loader";

function ForgotPass() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  
  const { isLoading } = useSelector((state) => state.auth);

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET());
  };

  return (
    <div className="login-page">
      {isLoading && <Loader />}
      <h1>Admin Forgot Password</h1>
      <form onSubmit={forgot}>
      <label htmlFor="email">Email:</label>
        <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPass;





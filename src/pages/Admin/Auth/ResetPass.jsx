import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RESET, resetPassword } from "../../../redux/features/auth/authSlice";
import Loader from "../../../components/Loader/Loader";
import '../admin.css';


const initialState = {
  password: "",
  password2: "",
};

const ResetPassword = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;
  const { resetToken } = useParams();

  const { isLoading, isError, isSuccess, isLoggedIn, message } = useSelector(
    (state) => state.auth
  );
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      return toast.error("Passwords must be up to 6 characters");
    }
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }

    const userData = {
      password,
      password2,
    };

    await dispatch(resetPassword({ userData, resetToken }));
    await dispatch(RESET());
  };

  useEffect(() => {
    if (isSuccess && message.includes("Reset Successful")) {
      navigate("/login");
    }

    dispatch(RESET());
  }, [isError, isSuccess, message, isLoggedIn, dispatch, navigate]);

  return (
    <div className="login-page">
      {isLoading && <Loader />}
      <h1>Admin Reset Password</h1>
      <form onSubmit={reset}>
      <label htmlFor="password">New Password:</label>
        <input
             placeholder="New Password"
             required
             name="password"
             value={password}
             onChange={handleInputChange}
        />
        <label htmlFor="cpassword">Confirm Password:</label>
        <input
              placeholder="Confirm New Password"
              required
              name="password2"
              value={password2}
              onChange={handleInputChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;

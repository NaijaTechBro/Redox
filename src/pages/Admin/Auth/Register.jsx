import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { register, RESET } from '../../../redux/features/auth/authSlice';
import { validateEmail } from '../../../redux/features/auth/authService';
import Loading from "../../../components/Loader/Loader";
import '../admin.css';


const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [formData, setformData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isLoading, isLoggedIn, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  // const [uCase, setUCase] = useState(false);
  // const [num, setNum] = useState(false);
  // const [sChar, setSChar] = useState(false);
  // const [passLength, setPassLength] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  // useEffect(() => {
  //   // Check Lower and Uppercase
  //   if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
  //     setUCase(true);
  //   } else {
  //     setUCase(false);
  //   }
  //   // Check for numbers
  //   if (password.match(/([0-9])/)) {
  //     setNum(true);
  //   } else {
  //     setNum(false);
  //   }
  //   // Check for special character
  //   if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
  //     setSChar(true);
  //   } else {
  //     setSChar(false);
  //   }
  //   // Check for PASSWORD LENGTH
  //   if (password.length > 5) {
  //     setPassLength(true);
  //   } else {
  //     setPassLength(false);
  //   }
  // }, [password]);


  const registerUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("All fields are required");
    }
    if (password.length < 6) {
      return toast.error("Password must be up to 6 characters");
    }
    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    };
    if (password !== password2) {
      return toast.error("Passwords do not match");
    }
  

  const userData = {
    name,
    email,
    password,
  };

  await dispatch(register(userData));
};

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/admin/login");
    }

    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate]);

  return (
    <div className="register-page">
      {isLoading && <Loading />}
      <h1>Admin Register</h1>
      <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
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

import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/admin/`;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Role = Admin

// Register User
const register = async (userData) => {
  const response = await axios.post(`${API_URL}create`, userData);
  return response.data;
};

// Verify User
const verifyUser = async (verification_token) => {
  const response = await axios.patch(
    `${API_URL}email/verify/${verification_token}`,
  );

  return response.data.message;
};

// Send Verification Email
const resendEmailVerification = async () => {
  const response = await axios.post(API_URL + "email/verify/resend");
  return response.data.message;
};

// Login User
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  return response.data;
};

// Logout User
const logout = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};

// Reset Password
const resetPassword = async (userData, resetToken) => {
  const response = await axios.patch(
    `${API_URL}resetPassword/${resetToken}`,
    userData
  );

  return response.data.message;
};

// fORGOT Password
const forgotPassword = async (userData) => {
  const response = await axios.post(API_URL + "forgotPassword", userData);

  return response.data.message;
};

// Get Login Status
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "loggedIn");
  return response.data;
};

// Change Password
const changePassword = async (userData) => {
  const response = await axios.patch(API_URL + "updatePassword", userData);

  return response.data.message;
};
// Get Admin profile
const getAdmin = async () => {
  const response = await axios.get(API_URL + "profile");
  return response.data;
};

// Update profile
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData);
  return response.data;
};



const authService = {
 register,
 login,
 logout,
 getLoginStatus,
 getAdmin,
 updateUser,
 forgotPassword,
 resetPassword,
 changePassword,
 resendEmailVerification,
 verifyUser,
};

export default authService;




















// // Register Admin
// export const createSuperAdmin = async (userData) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/create`,
//       userData,
//       { withCredentials: true }
//     );
//     if (response.statusText === "OK") {
//       toast.success("SuperAdmin Created successfully");
//     }
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Verify Email
// export const verifyEmail = async (userData, verification_token) => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/email/verify/${verification_token}`,
//       userData
//     );
//     if (response.statusText === "OK") {
//       toast.success("Email Verification Link Sent");
//     }
//     return response.data;
//   } catch (error) {
//     const message = 
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Resend Email Verification
// export const resendEmailVerification = async (userData) => {
//   try {
//     const response = await axios.put(
//       `${API_URL}/email/verify/resend`,
//       userData
//     );
//     if (response.statusText === "OK") {
//       toast.success("Email Verification Link Has Been Resent Successfully!!!");
//     }
//     return response.data;
//   } catch (error) {
//     const message = 
//     (error.response && error.response.data && error.response.data.message) ||
//     error.message ||
//     error.toString();
//   toast.error(message);
    
//   }
// };

// // Login Admin
// export const login = async (userData) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/login`,
//       userData
//     );
//     if (response.statusText === "OK") {
//       toast.success("Login Successful...");
//     }
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Logout User
// export const logoutUser = async () => {
//   try {
//     await axios.get(`${API_URL}/logout`);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Forgot Password
// export const forgotPassword = async (userData) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/forgotpassword`,
//       userData
//     );
//     toast.success(response.data.message);
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Reset Password
// export const resetPassword = async (userData, resetToken) => {
//   try {
//     const response = await axios.put(
//       `${API_URL}/resetpassword/${resetToken}`,
//       userData
//     );
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Get Login Status
// export const getLoginStatus = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/loggedIn`);
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Update Profile
// export const changePassword = async (formData) => {
//   try {
//     const response = await axios.patch(
//       `${API_URL}/updatepassword`,
//       formData
//     );
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Get User Profile
// export const getAdminProfile = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/profile`);
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };

// // Update Profile
// export const updateUser = async (formData) => {
//   try {
//     const response = await axios.patch(
//       `${API_URL}/updateuser`,
//       formData
//     );
//     return response.data;
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     toast.error(message);
//   }
// };



// Role = User
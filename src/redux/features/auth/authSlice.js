import { createSlice } from "@reduxjs/toolkit";


// Admin
const firstName = JSON.parse(localStorage.getItem("firstName"));

const initialState = {
  isLoggedIn: false,
  firstName: firstName ? firstName : "",
  admin: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profileImage: ""
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem("name", JSON.stringify(action.payload));
      state.name = action.payload;
    },
    SET_ADMIN(state, action) {
      const profile = action.payload;
      state.admin.firstName = profile.name;
      state.admin.email = profile.email;
      state.admin.phone = profile.phone;
      state.admin.profileImage = profile.profileImage;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_ADMIN } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectAdmin = (state) => state.auth.admin;

export default authSlice.reducer;
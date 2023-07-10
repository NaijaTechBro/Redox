import { configureStore } from "@reduxjs/toolkit";
import newsletterReducer from '../redux/features/newsletter/newsletterSlice';
import authReducer from '../redux/features/auth/authSlice';
import postsReducer from '../redux/features/post/postsSlice';


export const store = configureStore({
    reducer: {
        newsletter: newsletterReducer,
        auth: authReducer,
        posts: postsReducer,
    },
})
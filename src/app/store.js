import { configureStore } from "@reduxjs/toolkit";
import newsletterReducer from '../features/newsletter/newsletterSlice'

export const store = configureStore({
    reducer: {
        newsletter: newsletterReducer,
    },
})
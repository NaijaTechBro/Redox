import { configureStore } from "@reduxjs/toolkit";
import subscribeReducer from '../features/subscribe/subscribeSlice'

export const store = configureStore({
    reducer: {
        subscribe: subscribeReducer,
    },
})
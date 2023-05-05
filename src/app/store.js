import { configureStore } from "@reduxjs/toolkit";
import waitlistReducer from '../features/waitlist/waitlistSlice'

export const store = configureStore({
    reducer: {
        waitlist: waitlistReducer,
    },
})
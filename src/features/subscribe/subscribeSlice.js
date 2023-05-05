import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import subscribeService from './SubscribeService'

// Get User from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
export const Subscribe =  createAsyncThunk('/waitlist', async(user, thunkAPI) => {
    try {
        return await subscribeService.subscribe(user)
    } catch (error) {
        const message = (
            error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



//ACTIONS
// Register
export const subscribeSlice = createSlice({
    name: 'subscribe',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
            state.twoFactor = false
        }

    },
    extraReducers: (builder) => {
        builder 
        .addCase(Subscribe.pending, (state) => {
            state.isLoading = true
        })
        .addCase(Subscribe.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload,
            toast.success("Welcome to Redox Trading");
        })
        .addCase(Subscribe.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null
        })
    }

})

export const { reset } = subscribeSlice.actions
export default subscribeSlice.reducer
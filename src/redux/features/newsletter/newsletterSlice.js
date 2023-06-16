import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import newsletterService from './newsletterService'

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
export const Newsletter =  createAsyncThunk('/join', async(user, thunkAPI) => {
    try {
        return await newsletterService.newsletter(user)
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
export const newsletterSlice = createSlice({
    name: 'newsletter',
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
        .addCase(Newsletter.pending, (state) => {
            state.isLoading = true
        })
        .addCase(Newsletter.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.user = action.payload,
            toast.success("Welcome to Redox Trading");
        })
        .addCase(Newsletter.rejected, (state, action) => {
            state.isLoading = false,
            state.isError = true,
            state.message = action.payload,
            state.user = null
        })
    }

})

export const { reset } = newsletterSlice.actions
export default newsletterSlice.reducer
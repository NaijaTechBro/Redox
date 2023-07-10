import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import postService from '../post/postService';


const initialState = {
    post: null,
    posts: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    category: []
  };



// Create Post
export const createPost = createAsyncThunk(
    'posts/createPost',
     async (formData, thunkAPI) => {
        try {
            return await postService.createPost(formData);
        } catch (error) {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
             error.message ||
             error.toString();
            return thunkAPI.rejectWithValue(message);
           }
        }
    );

// ACTIONS
const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
      state.twoFactor = false
    },

  },
  extraReducers: (builder) => {
    builder
    // Create Post
      .addCase(createPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.isLoggedIn = true,
        state.post = action.payload,
        toast.success("Post Created Successfully")
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false,
        state.isError = true,
        state.message = action.payload,
        state.post = null,
        toast.error(state.message)
      })
  },
});

export const { reset } =
  postsSlice.actions;

export const selectIsLoggedIn = (state) => state.posts.isLoggedIn;
export const selectUser = (state) => state.posts.user;

export default postsSlice.reducer;

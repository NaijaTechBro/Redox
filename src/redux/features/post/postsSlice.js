import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";
import postService from '../post/postService';


const initialState = {
    post: null,
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    category: [],
  };



// Create Post
export const createPost = createAsyncThunk(
    'posts/create',
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
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    CALC_CATEGORY(state, action) {
      const posts = action.payload;
      const array = [];
      posts.map((item) => {
        const { category } = item;

        return array.push(category);
      });
      const uniqueCategory = [...new Set(array)];
      state.category = uniqueCategory;
    },
  },

  extraReducers: (builder) => {
    builder
    // Create Post
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false,
        state.isSuccess = true,
        state.isError = false,
        console.log(action .payload),
        state.posts.push(action.payload),
        toast.success("Post Created Successfully")
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false,
        state.isError = true,
        state.message = action.payload,
        toast.error(action.payload);
      })
  },
});

export const { CALC_CATEGORY } =
  postSlice.actions;

  export const selectIsLoading = (state) => state.post.isLoading;
  export const selectPost = (state) => state.post.post;
  export const selectCategory = (state) => state.post.category;

export default postSlice.reducer;

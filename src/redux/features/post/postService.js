import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/post/`;


const createPost = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}create-post`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};



const postService = {
    createPost,
}

export default postService;
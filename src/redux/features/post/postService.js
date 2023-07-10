import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1/post/`;


const createPost = async (formData) => {
    const response = await axios.post(`${API_URL}create-post`, formData);
    return response.data;
}


const postService = {
    createPost,
}

export default postService;
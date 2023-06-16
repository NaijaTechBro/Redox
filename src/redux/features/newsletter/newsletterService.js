import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/v1`;
// Newsletter
const newsletter = async (userData) => {
    const response = await axios.post(`${API_URL}/newsletter/join`, userData)
    
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const newsletterService = {
        newsletter,
}

export default newsletterService;
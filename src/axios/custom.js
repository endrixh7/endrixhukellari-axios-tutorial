import axios from "axios";

// Create instance for the root url or baseURL in axios

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
    headers: {
        Accept: 'application/json',
    }
})

export default authFetch;
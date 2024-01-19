import axios from "axios";

// Create instance for the root url or baseURL in axios

const authFetch = axios.create({
    baseURL: 'https://course-api.com',
})

export default authFetch;

// Create interceptors
// Dont forget to import it
authFetch.interceptors.request.use((request)=>{
    // Adding the header
    request.headers['Accept'] = 'application/json';
    console.log('request sent');
    return request;
}, (error)=>{
    return Promise.reject(error);
});


authFetch.interceptors.response.use((response)=>{
    console.log('got the response');
    return response
},
    (error)=>{
        console.log(error.response);
        if (error.response.status === 404 ) {
            console.log('Not found!');
        } 
        return Promise.reject(error);
})
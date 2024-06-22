import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        // else {
        //     console.log(window.location.href)
        //     if (window.location.href !== 'http://localhost:3000/login') {
        //         window.location.href = '/login';
        //     }
        //
        // }
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        // Promise.reject(error)
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 403 || error.response.status === 401) {
            // If 403 or 401 error, redirect to login page
            window.location.href = '/login';
        }
        // return Promise.reject(error);
    }
);

export default axiosInstance;

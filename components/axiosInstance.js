// src/api.js

import axios from 'axios';

// Create an Axios instance with predefined configuration
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
  timeout: 10000, // 10 seconds timeout
});

export default axiosInstance;

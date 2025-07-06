import axios from "axios";
import { BASE_URL } from "./apiPaths"; // Assuming apiPaths.js or apiPaths.ts is in the same directory

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 80000, // 80 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token"); // Get token from local storage
    if (accessToken) {
      // If a token exists, add it to the Authorization header
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config; // Return the modified configuration
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response Interceptor: Handles common API errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    // If the response is successful, simply return it
    return response;
  },
  (error) => {
    // Handle common errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      if (error.response.status === 401) {
        // Unauthorized: Token might be expired or invalid. Redirect to login.
        console.error("Unauthorized: Redirecting to login page.");
        window.location.href = "/"; // Redirect to the root path, usually a login page
      } else if (error.response.status === 500) {
        // Internal Server Error
        console.error("Server error. Please try again later.");
      } else {
        // Other HTTP errors (e.g., 400 Bad Request, 403 Forbidden, 404 Not Found)
        console.error(`API Error: ${error.response.status} - ${error.response.data.message || 'An error occurred'}`);
      }
    } else if (error.code === "ECONNABORTED") {
      // Request was cancelled due to timeout
      console.error("Request timeout. Please try again.");
    } else if (error.request) {
      // The request was made but no response was received (e.g., network error)
      console.error("Network error: No response received from server. Please check your internet connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", error.message);
    }
    // Re-throw the error so that it can be caught by the specific component/function
    // that made the API call, allowing 
    // 
    return Promise.reject(error);
  }
);

export default axiosInstance;
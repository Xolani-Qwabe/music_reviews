import axios from "axios";

// Base URL for API
const API_URL = "http://localhost:3000";

// Axios instance for global settings
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json", // Ensures the request body is sent as JSON
  },
});

// Register user
export const registerUser = async (email, password) => {
  const userData = { email, password };
  console.log("Data sent to /register:", userData); // Logging the data sent
  try {
    const response = await apiClient.post("/register", userData);
    return response.data; // Success response
  } catch (error) {
    throw error.response?.data || "Registration failed"; // Error handling
  }
};

// Login user
export const loginUser = async (email, password) => {
    const loginData = { email, password };
    console.log("Data sent to /login:", loginData); // Logging the data sent
    try {
      const response = await apiClient.post("/login", loginData, { withCredentials: true });
      return response.data; // Success response
    } catch (error) {
      throw error.response?.data || "Login failed"; // Error handling
    }
  };

// Logout user
export const logoutUser = async () => {
    try {
      const response = await apiClient.post("/logout", {}, { withCredentials: true });
      return response.data; // Success response
    } catch (error) {
      throw error.response?.data || "Logout failed"; // Error handling
    }
  };
  
  

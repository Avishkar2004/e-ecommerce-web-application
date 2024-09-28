import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("authToken");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` }, // Added Authorization header
        })
        .then((response) => {
          setUser(response.data.user); // Ensure user object is set properly
        })
        .catch((error) => {
          console.error("Error fetching user:", error);
          Cookies.remove("authToken");
          setUser(null);
        });
    }
  }, []);

  const signup = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        userData
      );
      Cookies.set("authToken", response.data.token);

      // Set the user data after signup
      setUser(response.data.user); // This should contain the username and email
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      Cookies.set("authToken", response.data.token);

      // Set full user object here
      setUser(response.data.user); // Set user object with both username and email
    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data?.message || error.message
      );
      throw error;
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

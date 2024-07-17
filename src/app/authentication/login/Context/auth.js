"use client"

import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "https://diyainteractive.pythonanywhere.com/api/v1/users/login",
        { username, password }
      );
      const { token, data } = response.data;
      setToken(token);
      setUser(data.user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "/job-list";
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

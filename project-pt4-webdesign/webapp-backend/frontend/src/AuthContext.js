import React, { createContext, useState, useContext } from 'react';

// Create AuthContext to share authentication status across components
const AuthContext = createContext();

// Custom hook to access authentication status
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to manage the authentication state
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change this as per your logic

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

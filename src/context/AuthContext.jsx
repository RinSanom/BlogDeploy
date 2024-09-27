import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      setUser(userData);
    } else {
      throw new Error("Invalid credentials");
    }
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

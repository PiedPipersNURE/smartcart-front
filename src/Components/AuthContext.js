import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';  // Убедитесь, что вы установили jwt-decode
import Cookies from 'js-cookie';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  getUserFromToken: () => null,
  hasToken: () => false,
});

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isAuthorized()) {
      setIsLoggedIn(true);
    }
  }, []);

  const getUserFromToken = () => {
    const token = Cookies.get('authToken');
    if (token) {
      try {
        return jwtDecode(token);
      } catch (e) {
        console.error('Invalid token', e);
        return null;
      }
    }
    return null;
  };

  const isAuthorized = () => {
    return !!Cookies.get('authToken');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, getUserFromToken, isAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

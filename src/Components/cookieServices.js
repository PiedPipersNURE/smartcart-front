// cookieService.js
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const CookieService = {
  // Save a cookie
  setCookie: (name, value, options = {}) => {
    Cookies.set(name, value, options);
  },

  // Get a cookie
  getCookie: (name) => {
    return Cookies.get(name);
  },

  // Delete a cookie
  deleteCookie: (name) => {
    Cookies.remove(name);
  },

  // Decode a JWT token
  decodeToken: (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }
};

export default CookieService;
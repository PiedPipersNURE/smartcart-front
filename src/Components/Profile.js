import React, { useEffect, useState } from 'react';
import './Profile.css';
import CookieService from './cookieService';

const Profile = ({ isLoggedIn }) => {
  const [userData, setUserData] = useState({ username: '', email: '' });

  useEffect(() => {
    if (isLoggedIn) {
      const token = CookieService.getCookie('authToken');
      if (token) {
        const decodedToken = CookieService.decodeToken(token);
        if (decodedToken) {
          setUserData({
            username: decodedToken.username,
            email: decodedToken.email
          });
        }
      }
    }
  }, [isLoggedIn]);

  return (
    <div>
      {isLoggedIn ? (
        <div className="profile-body">
          <img
            src="https://www.svgrepo.com/show/335455/profile-default.svg"
            alt=""
            className="profile-picture"
          />
          <div className="profile-user-info">
            <h1 className="user-info-header">Username:</h1>
            <p className="user-info-text">{userData.username}</p>
            <h1 className="user-info-header">Email:</h1>
            <p className="user-info-text">{userData.email}</p>
          </div>
        </div>
      ) : (
        <h1 className="error-header">You are not logged in!</h1>
      )}
    </div>
  );
};

export default Profile;

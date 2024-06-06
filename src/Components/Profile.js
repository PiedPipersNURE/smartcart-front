import React, { useEffect, useState, useContext } from 'react';
import './Profile.css';
import CookieService from './cookieServices';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext.js';

const Profile = () => {
  const [userData, setUserData] = useState({ username: '', email: '' });
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn)

  const handleLogOut = () =>{
    setIsLoggedIn(false)
    alert("Ви вийшли з облікового запису")
  }
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
          <Link to = "/"><button onClick = {handleLogOut}>Log out</button></Link>
        </div>
      ) : (
        <h1 className="error-header">You are not logged in!</h1>
      )}
    </div>
  );
};

export default Profile;

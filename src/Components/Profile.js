import React, { useEffect, useState, useContext } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';
import Cookies from 'js-cookie';

const Profile = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const { isLoggedIn, setIsLoggedIn, getUserFromToken } = useContext(AuthContext);

  const handleLogOut = () => {
    Cookies.remove('authToken');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      const user = getUserFromToken();
      if (user) {
        setUsername(user.Username);
        setEmail(user.email);
      }
    }
  }, [isLoggedIn, getUserFromToken]);

  return (
    <div className="profile-container">
      {isLoggedIn ? (
        <div className="profile-card">
          <Link to="/">
            <button className="Btn" onClick={handleLogOut}>
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 
                  406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 
                  32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 
                  32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z">
                  </path>
                </svg>
              </div>
              <div className="text">Logout</div>
            </button>
          </Link>
          <img
            src="https://www.svgrepo.com/show/335455/profile-default.svg"
            alt=""
            className="profile-picture"
          />
          <div className="profile-user-info">
            <h1 className="user-info-header">Username</h1>
            <p className="user-info-text">{username}</p>
            <h1 className="user-info-header">Email</h1>
            <p className="user-info-text">{email}</p>
          </div>
          
        </div>
      ) : (
        <h1 className="error-header">You are not logged in!</h1>
      )}
    </div>
  );
};

export default Profile;

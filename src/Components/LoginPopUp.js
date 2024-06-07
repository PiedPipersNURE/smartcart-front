import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPopUp.css'; 
import backIcon from '../Assets/login-back-icon.svg';
import AuthContext from './AuthContext.js';
import Cookies from 'js-cookie';

const LoginPopUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const googleAuth = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
    const googleAuthLink = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&scope=openid%20profile%20email&response_type=code&redirect_uri=${redirectUri}&code_challenge=YOUR_CODE_CHALLENGE&code_challenge_method=S256&state=YOUR_STATE_PARAMETER`;
    
    window.location.href = googleAuthLink;
    setIsLoggedIn(true);
  };

  const auth = () => {
    const authLink = `https://localhost:7236/account/login/${email}/${password}`;
    
    axios.get(authLink)
      .then(response => {
        Cookies.set('authToken', response.data, { expires: 7 });
        setIsLoggedIn(true);
        navigate('/profile');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert("Please enter a valid email!");
    } else {
      auth();
    }
  };

  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" className="input" placeholder="Email" onChange={handleEmailChange} required />
        <input type="password" className="input" placeholder="Password" onChange={handlePasswordChange} required />
        <button type="submit" className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Don't have an account? <Link to="/sign-up"><span className="sign-up-link">Sign up</span></Link>
      </p>
      <div className="buttons-container">
        <div className="google-login-button" onClick={googleAuth}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
              c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
              c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
              C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
              c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Log in with Google</span>
        </div>
        <Link to="/"><div className='back-button'><img className="back-icon" src={backIcon} alt="Back Icon"/><span>Back</span></div></Link>
      </div>
    </div>
  ); 
};

export default LoginPopUp;

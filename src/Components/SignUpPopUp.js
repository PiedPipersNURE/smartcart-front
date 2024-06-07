import './SignUpPopUp.css';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import backIcon from '../Assets/login-back-icon.svg';
import axios from 'axios';
import AuthContext from './AuthContext.js';

const SignUpPopUp = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const registrationApiEndpoint = 'https://localhost:7236/account/registration';

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            alert("Введіть правильний email!");
        } else {
            registration();
        }
    }

    const registration = () => {
        axios.post(registrationApiEndpoint, {
            username: name,
            email,
            password
        })
        .then(response => {
            console.log("dSDCVSDsd");
            const token = response.data;
            if (token) {
                Cookies.set('authToken', token, { expires: 7 });
                setIsLoggedIn(true);
                navigate('/profile');
            }
        })
        .catch(error => {
            alert(error);
            console.error('Error:', error);
        });
    }

    return (
        
        <div className="form-container" id='sign-up-form-container'>
            <p className="title">Create account</p>
            <form className="form">
                <input type="text" className="input" placeholder="Name" onChange={handleNameChange} />
                <input type="email" className="input" placeholder="Email" onChange={handleEmailChange} />
                <input type="password" className="input" placeholder="Password" onChange={handlePasswordChange} />
                <button className="form-btn" onClick={handleSubmit}>Create account</button>
            </form>
            <p className="sign-up-label">
                Already have an account? <Link to="/login"><span className="sign-up-link">Log in</span></Link>
            </p>
            <div className="buttons-container">
                <div className="google-login-button" id='sign-up-google-button'>
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        version="1.1"
                        x="0px"
                        y="0px"
                        className="google-icon"
                        viewBox="0 0 48 48"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
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
                    <span>Sign up with Google</span>
                    
                </div>
                <Link to='/'><div className='back-button'><img className="back-icon" src={backIcon} alt="back icon" /><span>Back</span></div></Link>
            </div>
        </div>
    );
};

export default SignUpPopUp;
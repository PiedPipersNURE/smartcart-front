import React, { useContext } from 'react';
import './Header.css';
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext.js';

function Header({toggleGray}) {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    console.log(isLoggedIn)
    const scrollToReviews = () => {
        window.scrollBy(0, 5500);
        {console.log(isLoggedIn)}
    };

    const scrollToContacts = () => {
        window.scrollBy(0, 5500);
        toggleGray();
    };

    return (
        <div className="header">
                <Link to = "/"><img src={logo} className="header-logo" alt="Logo"></img></Link>
            <ul className="right-buttons">
                <Link to = "/FAQ"><li><button className="right-button">FAQ</button></li></Link>
                <Link to = "/"><li><button className="right-button" onClick={scrollToContacts}>Contacts</button></li></Link>
                <Link to = "/"><li><button className="right-button" onClick={scrollToReviews}>Reviews</button></li></Link>
                {isLoggedIn ? (<Link to = "/profile"><li><button className="right-button">Profile</button></li></Link>):(<Link to ="/login"><li><button className="right-button" id="sign-in" >Sign in</button></li></Link>)}
                
            </ul>
        </div>
    );
}

export default Header;

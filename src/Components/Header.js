import React from 'react';
import './Header.css';
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';

function Header({toggleGray}) {
    const scrollToReviews = () => {
        window.scrollBy(0, 5500);
    };

    const scrollToContacts = () => {
        window.scrollBy(0, 5500);
        toggleGray();
    };

    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="Logo"></img>
            <ul className="right-buttons">
                <li><button className="right-button" onClick={scrollToContacts}>Contacts</button></li>
                <li><button className="right-button" onClick={scrollToReviews}>Reviews</button></li>
                <Link to ="/login"><li><button className="right-button" id="sign-in" >Sign in</button></li></Link>
            </ul>
        </div>
    );
}

export default Header;

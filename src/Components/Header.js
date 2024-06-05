import React from 'react';
import './Header.css';
import logo from "../Assets/logo.png";

function Header({toggleGray}) {
    const scrollToReviews = () => {
        // Scroll down by 5500 pixels when "Reviews" button is clicked
        window.scrollBy(0, 5500);
    };
    const scrollToContacts = () => {
        // Scroll down by 5500 pixels when "Reviews" button is clicked
        window.scrollBy(0, 5500);
        toggleGray();
    };
    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="Logo"></img>
            <ul className="right-buttons">
                <li><button className="right-button" onClick={scrollToContacts}>Contacts</button></li>
                <li><button className="right-button" onClick={scrollToReviews}>Reviews</button></li>
                <li><button className="right-button" id="sign-in">Sign in</button></li>
            </ul>
        </div>
    );
}

export default Header;

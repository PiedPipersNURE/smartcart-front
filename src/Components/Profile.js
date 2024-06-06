import React from "react";
import './Profile.css';
const Profile = ({isLoggedIn}) =>{
    return(<div>
        { isLoggedIn ? ( <div className="profile-body">
        <img src="https://www.svgrepo.com/show/335455/profile-default.svg" alt = ""className="profile-picture"></img>
        <div className="profile-user-info">
            <h1 className="user-info-header">Username:</h1>
            <p className="user-info-text">User1</p>
            <h1 className="user-info-header">Email:</h1>
            <p className="user-info-text">user1@gmail.com</p>
        </div>
    </div>) : (<h1 className="error-header">You are not logged in!</h1>)}
    </div>
    );
}

export default Profile;
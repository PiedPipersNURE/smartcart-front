import './Header.css'
import logo from "../Assets/logo.png"
function Header(){
    return <div className = "header">
        <img src = {logo} className = "header-logo"></img>
        <ul className = "right-buttons">
        <li><button /*onClick = {}*/ className = "right-button">Contacts</button></li>
        <li><button /*onClick = {}*/className = "right-button">Rewiews</button></li>
        <li><button /*onClick = {}*/className = "right-button" id = "sign-in">Sign in</button></li>
        </ul>
    </div>
}

export default Header
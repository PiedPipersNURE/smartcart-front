import './App.css';
import Header from './Components/Header.js';
import LoginPopUp from './Components/LoginPopUp.js';
import SignUpPopUp from './Components/SignUpPopUp.js';
import Main from './Components/Main.js';
import FAQ from './Components/FAQ.js';
import Profile from './Components/Profile.js';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isGray, setIsGray] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleGray = () => {
    setIsGray(true);
    setTimeout(() => {
      setIsGray(false);
    }, 1000);
  };

  return (
    <Router>
      <div>

        <Routes>
        <Route path="/profile" exact element={(<div><Header isLoggedIn= {isLoggedIn} toggleGray={toggleGray}/><Profile isLoggedIn={isLoggedIn}/></div>)}/>
          <Route path="/" exact element={(<div><Header isLoggedIn= {isLoggedIn} toggleGray={toggleGray}/> <Main isGray={isGray} /></div>)}/>
          <Route path="/login" exact element={<div className='login-body'><LoginPopUp setIsLoggedIn = {setIsLoggedIn}/></div>}/>
          <Route path="/sign-up" exact element={<div className='login-body'><SignUpPopUp setIsLoggedIn={setIsLoggedIn}/></div>}/>
          <Route path="/FAQ" exact element = {(<div className='faq-wrapper'><Header isLoggedIn= {isLoggedIn} toggleGray={toggleGray}/><FAQ /></div>)}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


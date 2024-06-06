import './App.css';
import Header from './Components/Header.js';
import LoginPopUp from './Components/LoginPopUp.js';
import SignUpPopUp from './Components/SignUpPopUp.js';
import Main from './Components/Main.js';
import FAQ from './Components/FAQ.js';
import Profile from './Components/Profile.js';
import React, { useContext, useState } from 'react';
import { AuthProvider } from './Components/AuthContext.js';
import AuthContext from './Components/AuthContext.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isGray, setIsGray] = useState(false);
  const toggleGray = () => {
    setIsGray(true);
    setTimeout(() => {
      setIsGray(false);
    }, 1000);
  };

  return (
    <AuthProvider>
    <Router>
      <div>

        <Routes>
        <Route path="/profile" exact element={(<div><Header toggleGray={toggleGray}/><Profile/></div>)}/>
          <Route path="/" exact element={(<div><Header toggleGray={toggleGray}/> <Main isGray={isGray} /></div>)}/>
          <Route path="/login" exact element={<div className='login-body'><LoginPopUp /></div>}/>
          <Route path="/sign-up" exact element={<div className='login-body'><SignUpPopUp /></div>}/>
          <Route path="/FAQ" exact element = {(<div className='faq-wrapper'><Header toggleGray={toggleGray}/><FAQ /></div>)}/>
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;


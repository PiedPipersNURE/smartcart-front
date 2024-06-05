import './App.css';
import Header from './Components/Header.js';
import LoginPopUp from './Components/LoginPopUp.js';
import Main from './Components/Main.js';
import React, { useEffect, useState } from 'react';
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
    <Router>
      <div>

        <Routes>
          <Route path="/" exact element={(<div><Header toggleGray={toggleGray}/> <Main isGray={isGray} /></div>)}/>
          <Route path="/login" exact element={<div className='login-body'><LoginPopUp /></div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


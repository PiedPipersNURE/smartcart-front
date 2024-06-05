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
        <Header toggleGray={toggleGray}/>
        <Routes>
          <Route path="/" exact element={<Main isGray={isGray} />}/>
          <Route path="/login" exact element={<LoginPopUp />}/>

          {/* Добавьте другие маршруты здесь, если это необходимо */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


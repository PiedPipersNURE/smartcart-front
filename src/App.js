import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import React, { useEffect, useState } from 'react';

function App() {
  const [isGray, setIsGray] = useState(false);

  const toggleGray = () => {
    setIsGray(true);
    setTimeout(() => {
      setIsGray(false);
    },  1000);
  };
  return (
    <div>
      <Header toggleGray={toggleGray}/>
      <Main isGray={isGray}/>
    </div>
  );
}

export default App;

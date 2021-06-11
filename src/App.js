import logo from './logo.svg';
import './App.css';
import Login from './component/login';
import Home from './component/home';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let loggedIn = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    console.log(loggedIn);
    loggedIn === 'true' ? setIsLoggedIn(true) : setIsLoggedIn(false);
    console.log(isLoggedIn);
  });

  return <>{isLoggedIn ? <Home /> : <Login />} </>;
}

export default App;

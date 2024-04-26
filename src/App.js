import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/LoginPage.js';
import RegisterPage from './screens/RegisterPage';
import HomePage from './screens/HomePage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if access token exists in localStorage
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleRegister = () => {
    setLoggedIn(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setLoggedIn(false)
  }

  return (
    <Router basename='/Task-2-FE'>
      <Routes>

        <Route path="/" element={loggedIn ? <HomePage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} />
        {/* <Route path="/login" element={<LoginPage onLogin={handleLogin} />} /> */}
        <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />

      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
    </Router>
  );
}

export default App;

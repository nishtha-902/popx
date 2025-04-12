import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import CreateAccount from './pages/CreateAccount';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount/>} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
    </Router>
  );
}

export default App;

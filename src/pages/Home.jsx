import React from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="app">
      <div className="card">
        <div className="content">
          <h1>Welcome to <span className="brand">PopX</span></h1>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/create-account")} className="create-btn">Create Account</button>
          <button onClick={() => navigate("/login")} className="login-btn">Already Registered? Login</button>
        </div>
      </div>
    </div>
  )
}

export default Home

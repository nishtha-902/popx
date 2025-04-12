import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.warn("Please enter both email and password.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      console.log("Logged in user:", userCredential.user);
      setTimeout(() => {
        navigate("/welcome"); 
      }, 1000);
      toast.success("Login successful!");

    } catch (error) {
      toast.error("Login failed: " + "Invalid credentials!");
      console.error("Login Error:", error.code, error.message);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="loginHeading">
          <h2>Signin to your PopX account</h2>
        </div>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form onSubmit={handleLogin}>
          <div className='box'><label>Email Address</label></div>
          <input
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className='box'><label>Password</label></div>      
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit" className="loginbtn">Login</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};


export default Signin

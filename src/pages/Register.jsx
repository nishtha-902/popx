import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail
} from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const checkAndRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName || !phone) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length > 0) {
        toast.error("Email already registered. Please log in.");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      setTimeout(() => {
        navigate("/welcome");
      }, 1000);
      toast.success("User created successfully!");

    } catch (error) {
      toast.error("Registration failed: " + "Email already registered.");
      console.error("Firebase Error:", error.code, error.message);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="registerHeading">
          <h2>Create your PopX account</h2>
        </div>
        <form onSubmit={checkAndRegister}>
          <div className='labelBox'><label>Full Name</label><span class="required">*</span></div>
          <input
            type='text'
            placeholder='Enter your full name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <div className='labelBox'><label>Phone Number</label><span class="required">*</span></div>          <input
            type='text'
            placeholder='Enter your phone number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className='labelBox'><label>Email Address</label><span class="required">*</span></div>
          <input
            type='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className='labelBox'><label>Password</label><span class="required">*</span></div>      
          <input
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='labelBox'><label>Comapany Name</label></div>
          <input
            type='text'
            placeholder='Marry Doe'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <p>Are you an Agency?</p>
          <div className="choice">
          <label>
            <input type="radio" name="choice" value="yes" required />
            Yes
          </label>
          <label>
            <input type="radio" name="choice" value="no" />
            No
          </label>
          </div>
          <button type="submit" className="create-btn">Create Account</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;

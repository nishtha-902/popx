import React, { useEffect, useState } from 'react'
import "../App.css";
import { CiCamera } from "react-icons/ci";
import { auth } from '../../firebase';

const Welcome = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  return (
    <div className="welcome">
      <div className="card">
        <div className="welcomeHeading">
          <h2>Account Settings</h2>
        </div>
        <div className="profile">
          <div className="img">
            <img src='https://itbucketo.com/wp-content/uploads/2022/01/wepik-202204-214441.jpg'/>
            <CiCamera className='camera'/>
          </div>
          <div className="info">
            <div className='name'>Marry Doe</div>
            <div className="email">{userEmail ? userEmail : "Guest"}</div>
          </div>
        </div>
        <p className='desc'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
    </div>
  );
};



export default Welcome

import React from "react";
import "./HomeA.css";
import { Outlet, Link } from "react-router-dom";
import './Footer.css'
import logo from "./Img/Rajasthan_Police_Logo (2) (1).png";
import logo1 from "./Img/icons8-phone-call-50.png";
import logo2 from "./Img/icons8-message-32.png";
export default function Home() {
  return (
    <>
      <body className="Homebody">
        <img className="Homeimg" src={logo} alt="" />
        <nav className="Homenav">
          <h1 className="Homehead">Rajasthan Police</h1>
        </nav>
        <p className="Homepara">Police Feedback System</p>

        <main className="Homemain">
         <Link to='/Registration'> <button className="Homebtn">FeedBack</button></Link>
          <button className="Homebtna">ChatBot</button>
        </main>

        <footer className="Homefoot">
          <div className="Homeboxa">
            <p>+91xxxxxxxxxx</p>
          </div>

          <div className="Homeboxb">
            <p>Contact us By</p>
          </div>

          <div className="Homeboxc">hello@xxxxxxxxxx.com</div>
        </footer>
      </body>
    </>
  );
}

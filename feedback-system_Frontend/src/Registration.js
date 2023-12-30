import React from 'react';
import logo from './Img/Rajasthan_Police_Logo (2) (1).png'
import './Register.css'; // Make sure to import your CSS file
import './Footer.css'
const Registration = () => {
  return (
    <>
      <img src={logo}  className='Regimg'/>
      <nav className='Reghead'>
        <h1 className='Reghead'>Registration</h1>
      </nav>
      <div className="Regform-container">
        <form>
          <div className="Regform-group">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="Regform-group">
            <input type="text" placeholder="Last Name" />
          </div>

          <div className="Regform-group">
            <input type="tel" placeholder="Phone No." />
          </div>
          
          <div className="Regform-group">
            <input type="email" placeholder="Email" />
          </div>

         

          <div className="Regform-group">
            <input type="text" placeholder="Address" />
          </div>

          <div className="Regform-group">
            <button type="submit" className='Regbtn'>Submit</button>
          </div>
        </form>

      </div>

      <footer className="Homefoot">
          <div className="Homeboxa">
            <p>+91xxxxxxxxxx</p>
          </div>

          <div className="Homeboxb">
            <p>Contact us By</p>
          </div>

          <div className="Homeboxc">hello@xxxxxxxxxx.com</div>
        </footer>
    </>
  );
};

export default Registration;

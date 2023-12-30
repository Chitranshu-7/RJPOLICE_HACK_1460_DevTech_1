import React from 'react'
import './Email.css'
import logo from './Img/Rajasthan_Police_Logo (2) (1).png'
import './Footer.css'
export default function EmailVerification() {
  return (
 <>

 <body >
    <img src={logo} alt="" className='Emaimg'/>
    <nav className='Emanav'>
        <h1 className='Emahead'>Enter OTP</h1>
    </nav>
    
    <div class="Emaform-container">
        <form>
            <div class="Emaform-group">
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
            </div>
            <div className="Emaform-group">
            <button type="submit" className='Emabtn'>Submit</button>
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
</body>

 </>
  )
}

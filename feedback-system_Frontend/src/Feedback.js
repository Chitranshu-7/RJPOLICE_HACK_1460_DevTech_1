import React from 'react'
import './Feedback.css'
import logo from './Img/Rajasthan_Police_Logo (2) (1).png'
export default function Feedback() {
  return (
    <body>
       
    <img src={logo} alt="" className='Feedimg'/ >
    <nav className='Feednav'>
        <h1 className='Feedhead'>Rajasthan Police</h1>
    </nav>
    <div class="Feedform-container">
        <form>
            <div class="Feedform-group">
                <input type="email" placeholder=" Enter The Email" />
            </div>

            <div class="Feedform-group">
                <textarea placeholder=" Write The Feedback" class="Feedbackbox"></textarea>
            </div>

            <div class="Feedform-group">
                <button type="submit" className='Feedbtn'>Publish FeedBack</button>
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

  )
}

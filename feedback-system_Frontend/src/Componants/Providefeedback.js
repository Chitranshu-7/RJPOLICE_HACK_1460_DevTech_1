import React from 'react'
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import "./App.css";
export default function Providefeedback() {
  return (
    <body>
    <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0 ">
      <div>
        <img src={logo} alt="" className="Headimg  " />
      </div>
      <div>
        <h1 className="text-orange-400 text-5xl text">Rajasthan Police</h1>
        <p className="text-xl font-semibold text-orange-400 mt-3">
          Goverment of India
        </p>
      </div>

      <div>
          <button 
          onClick={()=>{
            window.location.href = '/';
          }      }
          className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600">
            Home
          </button>
        </div>
    </nav>

    <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">FeedBack Portal</h1>
      </main>


<main className="mx-10 mt-20">
<div className="flex flex-wrap justify-center gap-8">
  <button 
  onClick={()=>{
    window.location.href='/Feedbackfir'
  }}
  className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
    Feedback Related To FIR

  
  </button>
  <button 
 onClick={()=>{
  window.location.href='/Feedback'
 }}
  className="w-64 h-40 p-4 bg-white text-orange-400 font-semibold text-xl  rounded-lg hover:transform hover:-translate-y-5 transition-transform">
    Feedback Related To Other
  </button>
 
</div>




</main>




  </body>
  )
}

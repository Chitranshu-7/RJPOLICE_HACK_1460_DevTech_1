import React from 'react'
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import './App.css'
export default function Higherauthor() {
  return (

        
        <body className='relative'>
      <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0 ">
        <div>
          <img src={logo} alt="" className="Headimg  " />
        </div>
        <div>
          <h1 className="text-orange-400 text-5xl text">Rajasthan police</h1>
          <p className="text-xl font-semibold text-orange-400 mt-3">
            Goverment of India
          </p>
        </div>

        <div>
          <button className=" bg-orange-400 py-1 px-6 rounded hover:bg-orange-600">
            Home
          </button>
        </div>
      </nav>

      <main className='  mt-20 py-3
      '>
      <h1 className='text-4xl text-center font-semibold'>Higher Authority Portal</h1>
      </main>
      <main className="mx-10 mt-10">
  <div className="flex flex-wrap justify-center gap-8">
    <button className="w-64 h-40 p-4 bg-white font-semibold text-orange-400 text-xl rounded-lg hover:transform hover:-translate-y-5 transition-transform">
      Meeting Ticket Requests
    </button>
    <button className="w-64 h-40 p-4 bg-white font-semibold text-orange-400 text-xl rounded-lg hover:transform hover:-translate-y-5 transition-transform">
    Police Station Review
    </button>
    
    </div>
  
</main>

{/* <footer className="w-full  flex justify-between p-4 ">
    <div>
      <img src="" alt="" />
      <p>Hello@xxxxxxxxxx.com</p>
    </div>
    <div>
      <p>Write To Us</p>
    </div>
    <div>
      {/* Additional content in the third section of the footer */}
 





  </body>

  )
}

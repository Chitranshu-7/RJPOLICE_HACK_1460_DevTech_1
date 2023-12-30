import React from 'react'
import './App.css'
import { Outlet, Link } from "react-router-dom";
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png'
export default function Home() {
  return (
    <>
    <body>
    <nav className="bg-white text-center py-5 flex flex-wrap justify-around sticky top-0">
        <div>
          <img src={logo} alt="" className="Headimg" />
        </div>
        <div>
          <h1 className="text-orange-400 text-5xl text">Rajasthan police</h1>
          <p className="text-xl font-semibold text-orange-400 mt-3">
            Government of India
          </p>
        </div>
        <div>
          {/* <button className="bg-orange-400 py-1 px-6 rounded hover:bg-orange-600">
            Home
          </button> */}
        </div>
      </nav>
       
       <main className=' mt-20 flex justify-center'>

        <div className='flex flex-col w-60'>
           <button
            onClick={()=>{
              window.location.href='/Registration'
            }}
             className='py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md'> Citizen Portal </button> 
            <button className='py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md'>Police Station Portal</button>
            <button className='py-10 my-4 bg-white text-orange-500 font-semibold text-xl rounded-md'>Higher Authority Portal</button>
        </div>
       </main>
    </body>
    </>
  )
}

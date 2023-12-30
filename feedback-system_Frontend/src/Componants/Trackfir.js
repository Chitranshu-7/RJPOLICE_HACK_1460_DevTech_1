import React from 'react'
import logo from '../Img/Rajasthan_Police_Logo (2) (1).png'

export default function Trackfir() {
  return (
    <body className="relative">
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
        <button className="bg-orange-400 py-1 px-6 rounded hover:bg-orange-600">
          Home
        </button>
      </div>
    </nav>

    <main className="my-16  flex flex-wrap  items-center  justify-center py-10 ">
        <div >
          <input
            className="py-4 text-2xl font-semibold px-2 text-gray-900 outline-none w-full m-2 chinu  "
            type="text"
            name=""
            id=""
            placeholder="Enter FIR NO."
          />
        </div>

        <div className=" ">
          <button className="py-4 text-2xl bg-blue-600 font-semibold px-2 text-white w-full m-2  chinu ">
            Check The Status
          </button>
        </div>
      </main>

  
  </body>
  )
}

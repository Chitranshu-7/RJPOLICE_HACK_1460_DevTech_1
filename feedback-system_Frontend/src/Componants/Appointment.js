import React from 'react';
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import "./App.css";

export default function Appointment() {
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

      <main className="mt-10 py-3">
        <h1 className="text-4xl text-center font-semibold">Appointment Portal</h1>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <button className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600">
            Submit
          </button>
        </div>
      </main>
    </body>
  );
}

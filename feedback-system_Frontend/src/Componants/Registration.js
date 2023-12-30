import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";
import "./App.css";
import axios from "axios";

export default function Registration() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const validateName = (name) => {
    // Name regex: minimum three letters
    const nameRegex = /^[a-zA-Z]{3,}$/;
    return nameRegex.test(name);
  };

  const validateEmail = (Email) => {
    // Email regex
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(Email);
  };

  const validatePassword = (password) => {
    // Password regex: at least 8 characters with at least one uppercase letter and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };
  const validateAddress = (Address) => {
    // Check if the Address is not empty
    return Address.trim() !== "";
  };


  const validatePhoneNumber = (phone) => {
    // Phone number regex: 10 digits only
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleRegistration = async() => {
  
 
    if (!validateName(firstName) || !validateName(lastName)) {
      setError("Minimum three letters required.");
      return;
    }

    if (!validateEmail(Email)) {
      setError("Invalid Email");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters with at least one uppercase letter and one number."
      );
      return;
    }
   
    if (!Address.trim()) {
      setError("Address cannot be empty.");
      return;
    }

    if (!validatePhoneNumber(phone)) {
      setError("Invalid phone number. Must be 10 digits only.");
      return;
    }

    const registrationEndpoint = "http://localhost:4000/api/v1/signup";

    try {
      const response = await axios.post(registrationEndpoint, {
        firstName,
        lastName,
        Email,
        password,
        Address,
        phone,
      });

      // Assuming your server returns a success message
      setSuccessMessage(response.data.message || "Registration successful!");

      // Reset form state on successful registration
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");
      navigate("/Otp");
    } catch (error) {
      setError(error.response?.data.message || "Registration failed. Please try again.");
    }
  };

 

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
        <h1 className="text-4xl text-center font-semibold">Registration</h1>
      </main>

      {/* <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            name="Address"
            id="Address"
            placeholder="Address"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <button className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600">
            Register
          </button>
        </div>
      </main> */}
      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="text"
            name="Email"
            id="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="text"
            name="Address"
            id="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
            required
          />
          <button
            onClick={handleRegistration}
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Register
          </button>
            {error && <p className={`text-${error.includes("successful") ? "green-500" : "red-500"}  font-semibold mt-2`}>{error}</p>}
            {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}
        </div>
      </main>
    </body>
  );
}

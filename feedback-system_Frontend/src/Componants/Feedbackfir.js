import React, { useState } from 'react';
import axios from 'axios';
import logo from "../Img/Rajasthan_Police_Logo (2) (1).png";

export default function Feedbackfir() {
  const [FIRNumber, setFIRNumber] = useState('');
  const [Name, setName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [feedbacktext, setfeedbacktext] = useState('');
  const [Rating, setRating] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState("");



  const handlefeedbacktextClick = async () => {
    setError('');

    if (validateInput()) {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/sendFIRFeedback', {
          FIRNumber,
          Name,
          PhoneNumber,
          feedbacktext,
          Rating
        });

        console.log('feedbacktext FIR submitted:', response.data);
        console.log(response.data.message)
        setSuccessMessage(response.data.message)

        // Reset form state
        setFIRNumber('');
        setName('');
        setPhoneNumber('');
        setfeedbacktext('');
        setRating(null);

      } catch (error) {
        console.error('Error submitting feedbacktext FIR:', error);
        setError('Please try again later.');
      }
    }
  };

  const validateInput = () => {
    const NameRegex = /^[a-zA-Z ]+$/;
    const PhoneNumberRegex = /^\d{10}$/;
    const feedbacktextRegex = /^[a-zA-Z0-9 ,.!?()'\r\n]+$/;

    if (!FIRNumber.trim()) {
      setError('Please enter the FIR number.');
      return false;
    }

    if (!Name.trim()) {
      setError('Please enter your Name.');
      return false;
    }

    if (!PhoneNumber.trim()) {
      setError('Please enter your PhoneNumber number.');
      return false;
    }

    if (!PhoneNumberRegex.test(PhoneNumber)) {
      setError('Invalid PhoneNumber number. Must be 10 digits.');
      return false;
    }

    if (!feedbacktext.trim()) {
      setError('Please enter your feedbacktext.');
      return false;
    }

    if (!NameRegex.test(Name)) {
      setError('Invalid Name. Please use only alphabets and spaces.');
      return false;
    }

    if (!feedbacktextRegex.test(feedbacktext)) {
      setError('Invalid feedbacktext. Please use alphanumeric characters, spaces, commas, periods, exclamation marks, question marks, parentheses, single quotes, and newlines.');
      return false;
    }

    if (Rating === null) {
      setError('Please select a rating (Good/Bad).');
      return false;
    }

    return true;
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
        <h1 className="text-4xl text-center font-semibold">Feedback For FIR</h1>
      </main>

      <main className="mx-10 mt-10 flex flex-wrap justify-center">
        <div className="p-6 bg-white text-gray-700 border rounded flex flex-wrap flex-col w-96">
          <input
            type="text"
            Name="FIRNumber"
            id="FIRNumber"
            value={FIRNumber}
            onChange={(e) => setFIRNumber(e.target.value)}
            placeholder="FIR Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="text"
            Name="Name"
            id="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <input
            type="tel"
            Name="PhoneNumber"
            id="PhoneNumber"
            value={PhoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="PhoneNumber Number"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          />
          <textarea
            Name="feedbacktext"
            id="feedbacktext"
            value={feedbacktext}
            onChange={(e) => setfeedbacktext(e.target.value)}
            placeholder="feedbacktext"
            rows="4"
            className="mb-4 p-2 border border-gray-300 rounded outline-none"
          ></textarea>

          <div className="flex justify-center space-x-4">
            <button
              className={`${
                Rating === true
                  ? 'bg-green-700 text-white'
                  : 'bg-green-200 text-white hover:bg-green-600'
              } py-2 px-4 rounded`}
              onClick={() => setRating(true)}
            >
              Good
            </button>
            <button
              className={`${
                Rating === false
                  ? 'bg-red-700 text-white'
                  : 'bg-red-200 text-white hover:bg-red-600'
              } py-2 px-4 rounded`}
              onClick={() => setRating(false)}
            >
              Bad
            </button>
          </div>

          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 font-semibold mt-2">{successMessage}</p>}


          <button
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-orange-600 mt-4"
            onClick={handlefeedbacktextClick}
          >
            Submit FeedBack
          </button>
        </div>
      </main>
    </body>
  );
}

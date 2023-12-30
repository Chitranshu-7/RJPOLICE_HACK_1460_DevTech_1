import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Citizenport from './Citizenport';
import Registration from './Registration';
import Login from './Login';
import Otp from './Otp';
import Feedbackfir from './Feedbackfir';

import Feedback from './Feedback';
import Providefeedback from './Providefeedback';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          
          <Route path="Citizenport" element={<Citizenport />} />
          <Route path="Providefeedback" element={< Providefeedback />} />
          <Route path="Feedbackfir" element={<Feedbackfir />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Otp" element={< Otp />} />
          <Route path="Login" element={< Login />} />
          <Route path="Feedback" element={<Feedback />} />
       
      </Routes>
    </BrowserRouter>
  )
}

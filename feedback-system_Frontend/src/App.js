import React from 'react'
import ReactDOM from "react-dom/client";
import Home from './Home'
import Feedback from './Feedback'
import EmailVerification from './EmailVerification'
import Registration from './Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="EmailVerification" element={< EmailVerification />} />
       
      </Routes>
    </BrowserRouter>
  )
}

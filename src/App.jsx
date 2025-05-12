import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import About from './pages/About';
import Services from './pages/Services';
import EnquiryForm from './pages/EnquiryForm';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/enquiry-form" element={<EnquiryForm/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

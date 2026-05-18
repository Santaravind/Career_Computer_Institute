import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { Routes, Route, Link } from "react-router-dom";
function App() {
  

  return (
    <>
    <Navigation/>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     
    </>
  )
}

export default App

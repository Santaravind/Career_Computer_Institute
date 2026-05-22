import React from 'react'
import './App.css'
import Navigation from './components/pages/Navigation'
// import Home from './components/pages/Home'
import About from './components/pages/About'
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/pages/Header'
import Hero from './components/pages/Hero'
function App() {
  

  return (
    <>
    <Header />
    <Navigation/>
    
     <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
     
    </>
  )
}

export default App

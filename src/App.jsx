import React from 'react'
import './App.css'
import Navigation from './components/pages/Navigation'

import { Routes, Route, Link } from "react-router-dom";
import Header from './components/pages/Header'
import Hero from './components/pages/Hero'
import Courses from './components/courses/courses';
import Footer from './components/pages/Footer';
import AboutUs from './components/AboutUs';
import Gallery from './components/pages/Gallery';
import Admission from './components/Admission';
function App() {
  

  return (
    <>
    <Header />
    <Navigation/>
    
     <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path='/about' element={<AboutUs/>} ></Route>
        <Route path='/course' element={<Courses/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/admissions' element={<Admission/>}></Route>
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
     
    </>
  )
}

export default App

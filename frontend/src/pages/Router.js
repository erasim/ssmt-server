import React from 'react'
import {Navigate, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import About from './About';
import Career from './Career';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import Tranning from './Tranning';
import Navbar from './Navbar';
import Login from './Login/Login';
import Signup from './Login/Signup';
import RefrshHandler from './Login/RefrshHandler';
// import NavBar from './Nav';

function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="./Login/login" />
  }
  return (
    <>
        <div>
            <Navbar/>
            <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        </div>
       <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/*" element={<Home />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tranning" element={<Tranning />} />
          <Route path="/career" element={<Career />} />
          <Route path='/' element={<Navigate to="../Login/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
         
         
        </Routes>
    </>
  )
}

export default Router

import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Carousel from './components/Carousel';
import NotFound from './components/NotFound';  // 404 Route if no match
import Login from './pages/Login'; 
import Signup from './pages/Signup'; // Check that the path is correct
 // Import Login page

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes> {/* Define routes inside Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
      </Routes>
    </div>
  );
}

export default App;

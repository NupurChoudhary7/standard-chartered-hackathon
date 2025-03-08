import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';  // Ensure no unwanted pink background here.

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>  {/* Only ONE Router here */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Import your App component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* Only one Router here */}
    <App />
  </BrowserRouter>
);

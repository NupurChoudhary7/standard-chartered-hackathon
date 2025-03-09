import React, { useEffect } from 'react';
import './frontend/App.css';
import DashboardPage from './frontend/pages/DashboardPage'; // Import the DashboardPage component
import Navbar from './frontend/components/Navbar'; // Import the Navbar component
import { Routes, Route } from 'react-router-dom'; // Import routing components
import AboutPage from './frontend/pages/AboutPage'; // Import the AboutPage component
import LandingPage from './frontend/pages/LandingPage'; // Import the LandingPage component
import ChatbotButton from './frontend/components/ChatbotButton'; // Import the ChatbotButton component
import OnboardingPage from './frontend/pages/OnboardingPage'; // Import the OnboardingPage component
import LoginPage from './frontend/pages/LoginPage'; // Import the LoginPage component

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0';
    document.head.appendChild(link);

    // Cleanup function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App">
      <Navbar /> {/* Add the Navbar component here */}
      <Routes> {/* Define routes for the application */}
        <Route path="/" element={<LandingPage />} /> {/* Add route for LandingPage */}
        <Route path="/login" element={<LoginPage />} /> {/* Add route for LoginPage */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* Add route for DashboardPage */}
        <Route path="/onboarding" element={<OnboardingPage />} /> {/* Add route for OnboardingPage */}
        <Route path="/about" element={<AboutPage />} /> {/* Add route for AboutPage */}
      </Routes>
      <ChatbotButton /> {/* Add the ChatbotButton component here */}
    </div>
  );
}

export default App;

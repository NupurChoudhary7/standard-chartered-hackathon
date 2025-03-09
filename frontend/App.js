import './App.css';
import DashboardPage from './pages/DashboardPage'; // Import the DashboardPage component
import Navbar from './components/Navbar'; // Import the Navbar component
import { Routes, Route } from 'react-router-dom'; // Import routing components
import AboutPage from './pages/AboutPage'; // Import the AboutPage component
import LandingPage from './pages/LandingPage'; // Import the LandingPage component
import ChatbotButton from './components/ChatbotButton'; // Import the ChatbotButton component
import OnboardingPage from './pages/OnboardingPage'; // Import the OnboardingPage component
import LoginPage from './pages/LoginPage'; // Import the LoginPage component

function App() {
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

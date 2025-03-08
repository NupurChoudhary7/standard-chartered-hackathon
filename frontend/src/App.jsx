import { Route, Routes } from 'react-router-dom';  // Removed <Router> import
import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Carousel from './components/Carousel';      // Added missing import
import NotFound from './components/NotFound';      // Added 404 Route

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carousel" element={<Carousel />} /> 
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
        
      </Routes>
    </div>
  );
}

export default App;

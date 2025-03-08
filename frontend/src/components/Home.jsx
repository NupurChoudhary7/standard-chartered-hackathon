import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { gsap } from 'gsap';
import './Home.css';

function Home() {
  const [showFeatures, setShowFeatures] = useState(false);
  const location = useLocation(); // Detects current route

  // Reset showFeatures when navigating to Home
  useEffect(() => {
    if (location.pathname === '/') {
      setShowFeatures(false);
    }
  }, [location]);

  useEffect(() => {
    gsap.from('.fade-in', { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
  }, [showFeatures]);

  return (
    <div className="container" style={{ overflowY: 'scroll', height: '100vh' }}>
      {!showFeatures ? (
        <div className="background-carousel">
          <img src="/assets/image1.jpg" alt="Image 1" />
          <img src="/assets/stocks.jpg" alt="Image 2" />
          <img src="/assets/rise.jpg" alt="Image 3" />
        </div>
      ) : (
        <div className="features-section">
          <h2 className="fade-in" style={{ color: 'white' }}>Our Amazing Features</h2>
          <div className="features-grid">
            <div className="feature-block fade-in">
              <img src="/assets/investment.jpeg" alt="Investment" />
              <h3 style={{ color: 'white' }}>💼 Tailored Just for You</h3>
              <p style={{ color: 'white' }}>Get investment recommendations based on your financial goals, risk tolerance, and preferences.</p>
            </div>
            <div className="feature-block fade-in">
              <img src="/assets/market.jpeg" alt="Market Insights" />
              <h3 style={{ color: 'white' }}>📈 Stay Ahead of the Market</h3>
              <p style={{ color: 'white' }}>Access real-time market trends and insights powered by advanced AI algorithms.</p>
            </div>
            <div className="feature-block fade-in">
              <img src="/assets/market1.jpeg" alt="Financial Planning" />
              <h3 style={{ color: 'white' }}>🎯 Plan for Your Future</h3>
              <p style={{ color: 'white' }}>Set and track financial goals like retirement, buying a house, or starting a business.</p>
            </div>
            <div className="feature-block fade-in">
              <img src="/assets/security.webp" alt="Privacy" style={{ width: '250px', height: '150px' }} />
              <h3 style={{ color: 'white' }}>🔒 Your Data, Your Privacy</h3>
              <p style={{ color: 'white' }}>We use state-of-the-art encryption to keep your financial data safe and secure.</p>
            </div>
            <div className="feature-block fade-in">
              <img src="/assets/chatbot.png" alt="Chatbot" style={{ width: '250px', height: '160px' }} />
              <h3 style={{ color: 'white' }}>🤖 24/7 Support</h3>
              <p style={{ color: 'white' }}>Get instant answers to your investment questions with our AI-powered chatbot.</p>
            </div>
          </div>
          <div className="navigation-links">
            <div
              className="back-arrow"
              onClick={() => setShowFeatures(false)}
              style={{ cursor: 'pointer', textAlign: 'center', marginBottom: '10px', fontSize: '20px', color: 'white' }}
            >
              ← Back
            </div>
            <Link to="/about" className="more-link" style={{ display: 'block', textAlign: 'center', color: 'white', fontSize: '22px', margin: '20px 0' }}
              onMouseEnter={(e) => e.target.style.color = '#E85A9C'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >Want to know more?</Link>
          </div>
        </div>
      )}

      {!showFeatures && (
        <div
          className="scroll-text"
          onClick={() => setShowFeatures(true)}
          style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', fontSize: '18px', color: 'white', cursor: 'pointer', transition: 'color 0.3s ease' }}
          onMouseEnter={(e) => e.target.style.color = '#E85A9C'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Explore Features
        </div>
      )}
    </div>
  );
}

export default Home;

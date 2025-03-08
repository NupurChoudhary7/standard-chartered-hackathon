import React, { useRef } from 'react';
import './Home.css';

function Home() {
  const featuresRef = useRef(null);

  // Scroll to Features when scrolling up
  const handleScroll = (event) => {
    if (event.deltaY < 0) { // Detect upward scroll
      featuresRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container" onWheel={handleScroll}>
      <div className="background-carousel">
        <img src="/assets/image1.jpg" alt="Image 1" />
        <img src="/assets/Image2.jpeg" alt="Image 2" />
        <img src="/assets/Image3.jpeg" alt="Image 3" />
      </div>

      <div className="overlay">
        <div className="text" style={{ color: '#E85A9C', fontSize: '40px', fontFamily: 'Poppins', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Welcome to Our Platform
        </div>
        <div 
          className="scroll-arrow" 
          onClick={() => featuresRef.current.scrollIntoView({ behavior: 'smooth' })}
          style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', fontSize: '18px', color: 'white', textAlign: 'center', cursor: 'pointer' }}>
          Explore Features
        </div>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="features-section">
        <h2>Our Amazing Features</h2>
        <p>Discover the best tools to enhance your experience!</p>
      </div>
    </div>
  );
}

export default Home;

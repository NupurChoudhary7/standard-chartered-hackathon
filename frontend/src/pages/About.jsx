import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './About.css';

function About() {
  useEffect(() => {
    gsap.from('.about-heading', { opacity: 0, y: 50, duration: 1 });

    // Animate the box after the component mounts
    gsap.to("#box2", {
      x: 500,
      duration: 2,
      delay: 1,
      rotate: 360,
      backgroundColor: "purple",
      borderRadius: "50%",
      scale: 5
    });
  }, []);

  return (
    <div className="about-container">
      {/* Content Block */}
      <div className="about-content-block">
        {/* Box Element */}
        <div id="box2" className="animated-box"></div>

        <h1 className="about-heading">Know More!</h1>

        <div className="about-content">
          <p>
            Empowering Women through Intelligent Investment Solutions.
          </p>
          <p>
            At Women Invest AI, we believe that financial independence is crucial for women to take control of their futures. Our AI-powered investment platform is designed specifically with women in mind. With cutting-edge technology, personalized strategies, and expert advice, we help you make informed, confident investment decisions.
          </p>
          <h3>Why Choose Women Invest AI?</h3>
          <h4>1. Empowering Women to Build Wealth</h4>
          <p>
            We understand the unique financial needs of women. Our platform helps you take control of your financial journey, empowering you to invest with confidence and build wealth for a secure future.
          </p>
          <h4>2. AI-Driven Insights & Personalized Strategies</h4>
          <p>
            Leverage the power of artificial intelligence to create a customized investment plan that suits your financial goals. Our AI algorithms analyze market trends, personal preferences, and risk tolerance to develop a strategy tailored just for you.
          </p>
          <h4>3. Simplified Investing for All Levels</h4>
          <p>
            Whether you’re just starting out or you’ve been investing for years, our platform provides easy-to-understand recommendations and guidance. We ensure that you can invest smartly, regardless of your prior experience.
          </p>
        </div>
        <div className="navigation-links">
          <a
            href="/"
            className="back-link"
            style={{
              fontSize: '22px',
              textDecoration: 'none',
              marginTop: '20px',
              display: 'inline-block',
            }}
          >
            ← Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
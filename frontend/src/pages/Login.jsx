import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';  // Import back arrow icon
import gsap from 'gsap';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const storedEmail = "user@example.com";
  const storedPassword = "password123";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".welcome-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" }
    );
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");
        navigate('/home');
      } else {
        setError("Invalid email or password. Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      {/* Back Arrow for Navigation */}
      <div className="back-arrow" onClick={() => navigate('/')}>
        <FaArrowLeft />
      </div>

      <h1 className="welcome-text">Welcome Back!!</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <p className="signup-link">
          Don't have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Login;

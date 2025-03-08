import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Back Arrow Icon
import gsap from 'gsap';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  // Declare all state variables here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [riskTolerance, setRiskTolerance] = useState('');
  const [individualGoals, setIndividualGoals] = useState('');
  const [financialLiteracy, setFinancialLiteracy] = useState('');

  useEffect(() => {
    gsap.fromTo(
      ".signup-text",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "bounce.out" }
    );
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      alert("Signup Successful!");
      navigate('/login');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="signup-container">
      {/* Back Arrow for Navigation */}
      <div className="back-arrow" onClick={() => navigate('/')}>
        <FaArrowLeft />
      </div>

      <h1 className="signup-text" style={{ color: 'white', fontSize: "50px" }}>Create Your Account</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSignup} className="signup-form">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="gender-dropdown"
        >
          <option value="" disabled>Select your gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>

        <label>Address:</label>
        <textarea
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="address-textarea"
        />

        <label>Current Savings (in INR):</label>
        <input
          type="number"
          placeholder="Enter your savings"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
          required
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Risk Tolerance:</label>
        <select
          value={riskTolerance}
          onChange={(e) => setRiskTolerance(e.target.value)}
          required
        >
          <option value="" disabled>Select Risk Tolerance</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <label>Individual Goals:</label>
        <select
          value={individualGoals}
          onChange={(e) => setIndividualGoals(e.target.value)}
          required
        >
          <option value="" disabled>Select your goal</option>
          <option value="saving_for_retirement">Saving for Retirement</option>
          <option value="buying_a_house">Buying a House</option>
          <option value="saving_for_education">Saving for Education</option>
          <option value="purchasing_for_self">Purchasing for Self</option>
          <option value="starting_a_business">Starting a Business</option>
          <option value="planning_a_vacation">Planning a Vacation</option>
        </select>

        <label>Financial Literacy (Scale 1 to 5):</label>
        <select
          value={financialLiteracy}
          onChange={(e) => setFinancialLiteracy(e.target.value)}
          required
        >
          <option value="" disabled>Rate your financial literacy</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>

        <p className="login-link">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;

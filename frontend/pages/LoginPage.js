import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Logged in with Email: ${email}`);
    // Add your login logic here (e.g., API call, validation)
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F8A8C8] to-[#FDCEDF] p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Login Title */}
        <h2 className="text-2xl font-semibold text-[#4A4A4A] mb-6 text-center">
          Welcome Back!
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#4A4A4A] mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-[#FDCEDF] rounded focus:outline-none focus:border-[#E85A9C]"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#4A4A4A] mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-[#FDCEDF] rounded focus:outline-none focus:border-[#E85A9C]"
          />
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
          className="w-full bg-[#E85A9C] text-white py-2 px-4 rounded hover:bg-[#D14A8C] transition-colors"
        >
          Login
        </motion.button>

        {/* Signup Link */}
        <p className="text-sm text-[#4A4A4A] mt-6 text-center">
          Don't have an account?{' '}
          <a href="/onboarding" className="text-[#E85A9C] hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;

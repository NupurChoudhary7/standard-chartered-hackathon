import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex items-center justify-center h-screen text-center">
    <div>
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-gray-400 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 mt-5 block">Go Back Home</Link>
    </div>
  </div>
);

export default NotFound;

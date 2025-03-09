import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white p-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* App Name */}
        <h1 className="text-[24px] font-semibold text-[#E85A9C] font-poppins">
          Vesta AI
        </h1>

        {/* Navigation Links and Button */}
        <nav className="flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `py-3 px-4 rounded transition duration-200 font-poppins font-medium text-[16px] ${
                isActive
                  ? "bg-[#FDCEDF] text-[#E85A9C]"
                  : "text-[#4A4A4A] hover:text-[#E85A9C]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `py-3 px-4 rounded transition duration-200 font-poppins font-medium text-[16px] ${
                isActive
                  ? "bg-[#FDCEDF] text-[#E85A9C]"
                  : "text-[#4A4A4A] hover:text-[#E85A9C]"
              }`
            }
          >
            About
          </NavLink>
          <a
            href="#features"
            className="py-3 px-4 rounded transition duration-200 font-poppins font-medium text-[16px] text-[#4A4A4A] hover:text-[#E85A9C]"
          >
            Features
          </a>
          <Link
            to="/login"
            className="bg-[#E85A9C] text-white font-poppins font-medium text-[16px] py-3 px-6 rounded hover:bg-[#D84A8C] transition duration-200"
          >
            Signup/Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

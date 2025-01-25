import React from "react";
import { FaBars, FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import logo from "./photos/download.jpeg"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex items-center justify-between px-4 py-2 shadow-lg">
      {/* Left Section: Logo and Menu Icon */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img
          src={logo} // Replace with your logo's URL
          alt="Logo"
          className="h-8 w-8 rounded-full"
        />
        {/* Menu Icon */}
        <FaBars className="h-6 w-6 cursor-pointer" />
      </div>

      {/* Center Section: Page Title */}

      {/* Right Section: Icons and User */}
      <div className="flex items-center space-x-4">
        <FaEnvelope className="h-6 w-6 cursor-pointer" />
        <FaBell className="h-6 w-6 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <span>Sampada Mishra</span>
          <FaUserCircle className="h-8 w-8 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

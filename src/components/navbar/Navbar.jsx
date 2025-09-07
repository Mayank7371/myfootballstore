import React from "react";
import logo from "../../assets/logo.jpg";
import day from "../../assets/day.png";
import night from "../../assets/night.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-2xl font-bold text-white">
            My Football Store
          </span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li className="hover:text-amber-400 cursor-pointer">Home</li>
          <li className="hover:text-amber-400 cursor-pointer">Products</li>
          <li className="hover:text-amber-400 cursor-pointer">Contact</li>
          <li className="hover:text-amber-400 cursor-pointer">About</li>
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-5">
          {/* Search icon */}
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            🔍
          </button>

          {/* Dark/Light toggle */}
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <img src={day} alt="Toggle theme" className="w-6 h-6" />
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

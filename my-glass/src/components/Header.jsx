// Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-0 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Lilu Glasses</div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-white rounded-md shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l-md focus:outline-none w-full border border-gray-300"
          />
          <button className="px-3 py-2 bg-blue-500 rounded-r-md hover:bg-blue-700 text-white">
            🔍
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="relative" aria-label="Messages">
            <span className="text-xl">📧</span>
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              4
            </span>
          </button>
          <button className="relative" aria-label="Notifications">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              17
            </span>
          </button>
          <button aria-label="Profile">
            <span className="text-xl">👤</span>
          </button>
          <button className="relative" aria-label="Cart">
            <span className="text-xl">🛒</span> {/* Cart Icon */}
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3 {/* Number of items in the cart */}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden focus:outline-none"
          aria-label="Open Mobile Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500 text-white">
          <a
            href="#messages"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={closeMenu}
          >
            📧 Messages
          </a>
          <a
            href="#notifications"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={closeMenu}
          >
            🔔 Notifications
          </a>
          <a
            href="#profile"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={closeMenu}
          >
            👤 Profile
          </a>
          <a
            href="#cart"
            className="block py-2 px-4 hover:bg-blue-700"
            onClick={closeMenu}
          >
            🛒 Cart
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

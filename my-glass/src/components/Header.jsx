import React from "react";

function Header({ toggleSidebar }) {
  return (
    <header className="bg-white shadow py-4 px-6 flex justify-between items-center">
      {/* Hamburger Icon */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <span className="font-bold text-gray-900 text-2xl">Header</span>

      {/* Search Bar */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg bg-gray-100"
        />
      </div>
    </header>
  );
}

export default Header;

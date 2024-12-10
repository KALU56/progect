import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out">
      {/* Close button */}
      <button
        onClick={toggleSidebar}
        className="text-white text-2xl absolute top-4 left-4"
      >
        ✖️
      </button>

      {/* Navigation Links */}
      <nav className="mt-12">
        <ul>
          <li className="px-6 py-2 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="px-6 py-2 hover:bg-gray-700">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

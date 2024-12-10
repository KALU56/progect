import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full absolute inset-y-0 left-0 shadow-lg">
      <nav className="mt-8">
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

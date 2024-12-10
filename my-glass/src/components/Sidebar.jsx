import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Close Button inside Sidebar */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      <h2 className="p-6 text-xl font-bold"></h2>
      <nav>
        <ul>
          {["Home", "Shop", "cart", "orders", "profile","support","logout","report"].map((item) => (
            <li key={item} className="p-4 hover:bg-gray-700 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

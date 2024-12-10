import React from "react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div className="w-full bg-gray-800 text-white flex items-center justify-between px-4 h-16">
      <span className="text-2xl font-bold ml-4">Lilu Glass</span>

      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <button className="ml-4">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Header;

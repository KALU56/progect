import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="w-full bg-gray-800 text-white flex items-center justify-between px-4 h-16">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <span className="text-2xl font-bold ml-4">Lilu Glass</span>

      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <button onClick={handleSearchClick}>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleOptionClick = (option) => {
    alert(`${option} option clicked`);
    setIsProfileDropdownOpen(false);
  };

  const handleCloseDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <div className="w-full bg-gray-800 text-white flex items-center justify-between px-4 h-16 relative">
      {/* Sidebar Toggle Button */}
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      <span className="text-2xl font-bold ml-4">Lilu Glass</span>

      <div className="flex items-center space-x-4 relative">
        {/* Search Icon */}
        <button>
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>

        {/* Profile Icon */}
        <button onClick={handleProfileClick}>
          <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
            <UserIcon className="h-6 w-6 text-white" />
          </div>
        </button>

        {/* Profile Dropdown */}
        {isProfileDropdownOpen && (
          <div className="absolute top-12 right-0 bg-white text-black shadow-lg rounded mt-2 w-48">
            <button
              onClick={handleCloseDropdown}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <ul>
              {["Edit Profile", "Settings", "Logout"].map((option) => (
                <li
                  key={option}
                  className="p-4 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

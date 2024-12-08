import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleOptionClick = (option) => {
    alert(`${option} option clicked`);
    setIsProfileDropdownOpen(false);  // Close dropdown after selecting an option
  };

  const handleCloseDropdown = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <div className="w-full bg-gray-800 text-white flex items-center justify-between px-4 h-16 relative">
      {/* Toggle Sidebar Button */}
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
          <UserCircleIcon className="h-8 w-8" />
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

import React from "react";

const navItems = [
  { label: "Dashboard" },
  { label: "Inbox" },
  { label: "Profile" },
  { label: "Settings" },
  { label: "Logout" }
];

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`bg-gray-900 text-white w-64 space-y-6 py-7 absolute md:relative top-0 left-0 h-full transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div className="px-6 text-2xl font-bold">MyApp</div>

      {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          className="block py-2 px-6 hover:bg-gray-700 rounded"
        >
          {item.label}
        </a>
      ))}
    </aside>
  );
}

export default Sidebar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full mx-0 px-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Social</a>
            <a href="#" className="text-gray-400 hover:text-white">Links</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

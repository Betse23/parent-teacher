"use client"
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
         
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-16 w-auto"
              src="image/logo2.jpg" 
              alt="Logo"
            />
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button className="bg-blue-500 hover:bg-blue-600 text-white 
                                font-bold py-2 px-4 rounded-2xl">
                Login
             </button>
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md 
                         text-gray-400 hover:text-black focus:outline-none focus:text-black 
                          transition duration-150 ease-in-out"
            >
               <GiHamburgerMenu className="w-10 h-10" />
            </button>
          </div>

          {/* Navbar links */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:text-black lg:hover:text-[#007bff]  
                            px-3 py-2 rounded-md text-md font-bold"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black lg:hover:text-[#007bff] 
                             px-3 py-2 rounded-md text-md font-bold"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black lg:hover:text-[#007bff] 
                             px-3 py-2 rounded-md text-md font-bold"
              >
                Service
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-black lg:hover:text-[#007bff] 
                             px-3 py-2 rounded-md text-md font-bold"
              >
                Our Mission
              </a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold 
                                py-2 px-4 rounded-2xl">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3">
            <a
              href="/"
              className="block text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 
                        rounded-md text-base font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 
                        rounded-md text-base font-bold"
            >
              Service
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 
                        rounded-md text-base font-bold"
            >
              Our Mission
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:bg-blue-400 hover:text-white px-3 py-2 
                        rounded-md text-base font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

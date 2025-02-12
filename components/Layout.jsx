// components/Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // We'll use the same Sidebar component

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for Large Screens (Left Side - Fixed) */}
      <div className="hidden lg:block lg:w-64 bg-gray-900 text-white fixed inset-y-0 left-0 overflow-y-auto">
        <Sidebar />
      </div>

      {/* Toggle Button for Small Screens */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-50 lg:hidden p-2 bg-gray-900 text-white rounded-md focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sidebar for Small Screens (Right Side - Fixed) */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white lg:ml-64"> {/* Add margin to account for the fixed sidebar */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
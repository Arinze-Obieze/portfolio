import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { HiMenu, HiX } from "react-icons/hi";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <div className="max-md:hidden w-[400px] static bg-black">
        <Sidebar />
      </div>

      {/* Mobile Menu Button (Always on the Right) */}
      <div
        className="md:hidden fixed cursor-pointer top-4 right-4 bg-teal-700 rounded-full p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX className="text-white text-2xl" /> : <HiMenu className="text-white text-2xl" />}
      </div>

      {/* Overlay (Dark Background When Sidebar is Open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)} // Click outside to close
        ></div>
      )}

      {/* Mobile Sidebar (Opens from the Left, but Menu Button Stays Right) */}
      <div
        className={`fixed inset-y-0 left-0 w-1/2 h-screen bg-black z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Content */}
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;

"use client"; // Enables client-side interactivity in Next.js

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaTimes, FaBars } from "react-icons/fa";  // Use FaBars and FaTimes from FontAwesome

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state of isOpen
  };

  return (
    <nav className="relative flex items-center justify-between h-16 bg-gradient-to-br from-purple-800 via-gray-800 to-gray-700 text-white px-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl">
          <FaHome />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}  {/* Use FaBars and FaTimes here */}
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute top-16 left-0 w-full bg-gray-900 text-white transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:static md:flex md:gap-6 md:transform-none md:bg-transparent md:w-auto`}
      >
        <li className="p-4 md:p-0">
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="/#events" className="hover:text-yellow-400">
            Events
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="/#contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link href="/sign-up" className="hover:text-yellow-400">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

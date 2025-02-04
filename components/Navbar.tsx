"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative flex items-center justify-between h-16 bg-gradient-to-br from-[rgba(21,8,32,0.832)] via-[rgba(41,38,30,0.787)] to-gray-700 text-white px-4 shadow-md">
      {/* Logo on the left */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl">
          <FaHome />
        </Link>
      </div>

      {/* Mobile Toggle Button: visible only on small screens */}
      <button
        ref={toggleRef}
        onClick={handleToggle}
        className="md:hidden focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Desktop Menu: hidden on small screens */}
      <ul className="hidden md:flex gap-6">
        <li>
          <Link href="/about" className="hover:text-yellow-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/#events" className="hover:text-yellow-400">
            Events
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/sign-up" className="hover:text-yellow-400">
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Mobile Menu: visible only when toggle is open */}
      {isOpen && (
        <ul
          ref={menuRef}
          className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col gap-4 p-4 md:hidden"
        >
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#events"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/sign-up"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

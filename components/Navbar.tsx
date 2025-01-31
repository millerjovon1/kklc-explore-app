import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="text-2xl">
        <Link href="/">
          <a className="flex items-center">
            <i className="fa-solid fa-house-chimney mr-2"></i>
            <span>KKLC Explore</span>
          </a>
        </Link>
      </div>

      {/* Hamburger Menu Toggle */}
      <div
        className="cursor-pointer sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-700 sm:static sm:flex sm:bg-transparent sm:w-auto`}
      >
        <li className="p-4 sm:p-0 sm:ml-6">
          <Link href="/about">
            <a className="hover:text-yellow-400">About</a>
          </Link>
        </li>
        <li className="p-4 sm:p-0 sm:ml-6">
          <Link href="/#events">
            <a className="hover:text-yellow-400">Events</a>
          </Link>
        </li>
        <li className="p-4 sm:p-0 sm:ml-6">
          <Link href="/#contact">
            <a className="hover:text-yellow-400">Contact</a>
          </Link>
        </li>
        <li className="p-4 sm:p-0 sm:ml-6">
          <Link href="/sign-up">
            <a className="hover:text-yellow-400">Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

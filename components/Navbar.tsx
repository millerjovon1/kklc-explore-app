"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";  // Correct import for client-side navigation in Next.js App Router
import Link from "next/link";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();  // Correct in client context

  const handleToggle = () => setIsOpen((prev) => !prev);

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

  const handleScrollOrNavigate = (sectionId: string) => {
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <nav className="relative flex items-center justify-between h-16 bg-gradient-to-br from-[rgba(21,8,32,0.832)] via-[rgba(41,38,30,0.787)] to-gray-700 text-white px-4 shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-2xl">
          <FaHome />
        </Link>
      </div>

      <button ref={toggleRef} onClick={handleToggle} className="md:hidden focus:outline-none">
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <ul className="hidden md:flex gap-6">
        <li>
          <a onClick={() => handleScrollOrNavigate("about")} className="cursor-pointer hover:text-yellow-400">
            About
          </a>
        </li>
        <li>
          <a onClick={() => handleScrollOrNavigate("events")} className="cursor-pointer hover:text-yellow-400">
            Events
          </a>
        </li>
        <li>
          <a onClick={() => handleScrollOrNavigate("footer")} className="cursor-pointer hover:text-yellow-400">
            Contact
          </a>
        </li>
        <li>
          <Link href="/sign-up" className="hover:text-yellow-400">
            Sign Up
          </Link>
        </li>
      </ul>

      {isOpen && (
        <ul ref={menuRef} className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col gap-4 p-4 md:hidden">
          <li>
            <a
              onClick={() => {
                setIsOpen(false);
                handleScrollOrNavigate("about");
              }}
              className="cursor-pointer hover:text-yellow-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsOpen(false);
                handleScrollOrNavigate("events");
              }}
              className="cursor-pointer hover:text-yellow-400"
            >
              Events
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsOpen(false);
                handleScrollOrNavigate("footer");
              }}
              className="cursor-pointer hover:text-yellow-400"
            >
              Contact
            </a>
          </li>
          <li>
            <Link href="/sign-up" className="hover:text-yellow-400">
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

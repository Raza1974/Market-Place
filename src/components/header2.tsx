"use client";

import { useState } from "react";
import Link from "next/link";

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    
    <nav className="header2 bg-white  fixed top-0 w-full z-50">
      <div className=" ml-10  max-w-[1020px] mx-auto flex items-center justify-between px-4 py-3 md:py-5">
        {/* Logo */}
        <div className="font-montserrat font-bold text-[24px] text-gray-900">
          Bandage
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 text-base font-medium absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none z-10 w-full md:w-auto px-4 md:px-0`}
        >
          <li>
            <Link
              href="/"
              className="block px-4 py-2 md:py-0 hover:underline hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/product-list"
              className="block px-4 py-2 md:py-0 hover:underline hover:text-blue-500"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="block px-4 py-2 md:py-0 hover:underline hover:text-blue-500"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 md:py-0 hover:underline hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Login & Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            Login
          </a>
          <button className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
            Become a member →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header2;

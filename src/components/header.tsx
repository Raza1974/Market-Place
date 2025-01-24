"use client";

import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleShopDropdown = () => {
    setIsShopDropdownOpen((prev) => !prev);
  };

  // Close dropdown on click outside
  const closeDropdowns = () => {
    setIsShopDropdownOpen(false);
  };

  return (
    <header className="bg-green-700 text-white fixed top-0 left-0 w-full h-[58px] z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-4 lg:space-x-12">
            <a href="tel:+12255550118" className="flex items-center">
              <Phone size={14} className="mr-2" />
              (225) 555-0118
            </a>
            <a
              href="mailto:michelle.rivera@example.com"
              className="flex items-center"
            >
              <Mail size={14} className="mr-2" />
              michelle.rivera@example.com
            </a>
          </div>
          <div className="hidden lg:block">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center space-x-3">
            <span>Follow Us:</span>
            <div className="flex space-x-3">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white ">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-black">Bandage</h1>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-center absolute lg:static bg-white w-full lg:w-auto left-0 top-full lg:top-auto lg:bg-transparent p-4 lg:p-0`}
          >
            <a href="./" className="text-gray-600 hover:text-black">
              Home
            </a>

            {/* Dropdown */}
            <div className="relative">
              <Button
                className="flex items-center text-gray-600 hover:text-black"
                onClick={toggleShopDropdown}
              >
                Shop
                <RiArrowDropDownLine className="ml-1 text-lg" />
              </Button>
              {isShopDropdownOpen && (
                <div
                  className="absolute left-0 top-full bg-white shadow-lg rounded-md mt-2 w-40 z-50"
                  onMouseLeave={closeDropdowns}
                >
                  <a
                    href="/Shop"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Shop
                  </a>
                  <a
                    href="/Shop1"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Shop1
                  </a>
                  <a
                    href="/Shop2"
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-black"
                  >
                    Shop2
                  </a>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="/blog" className="text-gray-600 hover:text-black">
              Blog
            </a>
            <a href="/contact" className="text-gray-600 hover:text-black">
              Contact
            </a>
            <a href="/DesktopProduct" className="text-gray-600 hover:text-black">
              Pages
            </a>
          </nav>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Image src="/icn contact.jpg" alt="hero" width={20} height={20} />
            <a href="./login" className="text-blue-500 hover:text-black">
              Login
            </a>
            <span>/</span>
            <a href="./register" className="text-blue-500 hover:text-black">
              Register
            </a>
            <CiSearch className="text-blue-500 text-2xl cursor-pointer hover:text-black" />
            <CiHeart className="text-2xl text-blue-500 hover:text-black cursor-pointer" />
            <IoCartOutline className="text-2xl text-blue-500 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

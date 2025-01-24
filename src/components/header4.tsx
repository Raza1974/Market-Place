"use client"; // Marks this file as a Client Component

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header className="flex flex-col justify-center items-center">
        <div className="max-sm:h-[91px] flex flex-col max-sm:w-full max-sm:bg-[#F6F6F6]">
          <div className="flex sm:w-[1050px] w-full justify-between items-center py-6 max-sm:p-6">
            <h3 className="text-[24px] font-bold text-[#252B42]">
              <Link href="/">Bandage</Link>
            </h3>
            <div className="flex">
              <button
                className="max-sm:block hidden px-[11px]"
                title="Search"
              >
                <Image
                  alt="Search"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="search2.svg"
                />
              </button>
              <button
                className="max-sm:block hidden px-[11px]"
                title="Shopping Cart"
              >
                <Image
                  alt="Cart"
                  loading="lazy"
                  width="24"
                  height="23"
                  decoding="async"
                  src="cart2.svg"
                />
              </button>
              <button
                className="max-sm:block hidden px-[11px]"
                title="Menu"
                onClick={toggleMenu}
              >
                <Image
                  alt="Menu"
                  loading="lazy"
                  width="24"
                  height="14"
                  src="/icn menu .icn-xs.jpg"
                />
              </button>
            </div>
            <div className="hidden sm:flex justify-between items-center w-[815px]">
              {/* Desktop Navigation */}
              <ul className="flex gap-[21px]">
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/product">Product</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/pricing">Pricing</Link>
                </li>

                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="h-[52px] flex gap-[30px]">
                <button className="w-[100px] h-[52px] text-[14px] font-bold text-[#23A6F0] hover:bg-[#23A6F0] bg-[#ffffff] hover:text-[#ffffff] rounded-[5px] transition-all duration-100">
                  Login
                </button>
                <button className="w-[214px] h-[52px] py-[15px] px-[25px] flex items-center justify-between bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-bold hover:text-[#23A6F0] text-[#FFFFFF] rounded-[5px] transition-all duration-100">
                  Become a member
                  <div className="w-3 h-[10px]">
                    <Image
                      alt="Arrow Right"
                      loading="lazy"
                      width="12"
                      height="10"
                      decoding="async"
                      src="arrowRightWhite.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isMenuOpen && (
            <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 w-[90%] max-w-[400px]">
              <ul className="flex flex-col items-center gap-4">
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/product">Product</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/team">Team</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="mt-4 flex flex-col gap-2 items-center">
                <button className="w-full h-[40px] text-[14px] font-bold text-[#23A6F0] hover:bg-[#23A6F0] bg-[#ffffff] hover:text-[#ffffff] rounded-[5px] transition-all duration-100">
                  Login
                </button>
                <button className="w-full h-[40px] text-[14px] font-bold bg-[#23A6F0] hover:bg-[#ffffff] text-[#ffffff] hover:text-[#23A6F0] rounded-[5px] transition-all duration-100">
                  Become a member
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

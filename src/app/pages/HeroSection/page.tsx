"use client";

import React from "react";
import Image from "next/image";
// Adjust the path as per your file structure

const Herosection = () => {
  return (
    <>
      
      <div className="relative w-full h-screen mt-[80px] sm:mt-[90px]">
        {/* Background Image */}
        <Image
          src="/carousel b.jpg"
          alt="main girl"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-6 sm:px-12">
          <div className="w-full sm:max-w-lg text-center sm:text-left space-y-4">
            <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] text-white tracking-wider">
              SUMMER 2020
            </h5>
            <h1 className="font-montserrat font-bold text-[32px] sm:text-[48px] lg:text-[58px] leading-[40px] sm:leading-[56px] lg:leading-[72px] text-white tracking-wide">
              NEW COLLECTION
            </h1>
            <h4 className="font-montserrat font-normal text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[28px] lg:leading-[30px] text-white tracking-wide">
              We know how large objects will act, but things on a small scale.
            </h4>
            <button className="bg-[#2DC071] py-3 px-6 sm:px-10 rounded-md text-white font-montserrat text-[14px] sm:text-[16px] hover:bg-green-600 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;

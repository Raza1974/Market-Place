"use client";

import { useState } from "react";
import Image from "next/image";

export default function MEN() {
  // State to manage whether the images are clicked
  const [showBothImages, setShowBothImages] = useState(false);

  // Handle the click event to show men(2) and men(3) side by side
  const handleImageClick = () => {
    setShowBothImages(true);
  };

  return (
    <div className="bg-gray-100 py-8 flex justify-center items-center">
      <div className="flex space-x-4">
        {/* Initially, display men(1) */}
        {!showBothImages && (
          <div className="relative w-[300px] h-[500px] cursor-pointer" onClick={handleImageClick}>
            <Image
              src="/men(1).jpg"
              alt="Men 1"
              layout="intrinsic"
              width={300}
              height={500}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        {/* Display men(2) and men(3) side by side when showBothImages is true */}
        {showBothImages && (
          <>
            <div className="relative w-[300px] h-[500px]">
              <Image
                src="/men (2).jpg"
                alt="Men 2"
                layout="intrinsic"
                width={300}
                height={500}
                objectFit="cover"
                className="rounded-lg"
              />
                          {/* Text positioned at the bottom of men.jpg */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              MEN
            </div>

            </div>
            <div className="relative w-[300px] h-[500px]">
              <Image
                src="/men(3).jpg"
                alt="Men 3"
                layout="intrinsic"
                width={300}
                height={500}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

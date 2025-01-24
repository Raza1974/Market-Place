import React from "react";
import { ProductCard } from "@/components/Shop/ProductCard";
import { CategoryCard } from "@/components/Shop/CategoryCard";
import { BrandLogo } from "@/components/Shop/BrandLogo";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/Footer";
const products = [
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  }
  // Add the rest of the products here
];

const categories = [
  {
    imageSrc: "",
    title: "CLOTHS",

    itemCount: 1
  },
  {
    imageSrc: "",
    title: "CLOTHS",
    itemCount: 2
  },
  {
    imageSrc: "",
    title: "CLOTHS",
    itemCount: 3
  },
  {
    imageSrc: "",
    title: "CLOTHS",
    itemCount: 4
  },
  {
    imageSrc: "",
    title: "CLOTHS",
    itemCount: 5
  }

  // Add the rest of the categories here
];

const brands = [
  {
    imageSrc: "/fa-brands_hooli.jpg",
    width: "103px",
    heigth: "34px",
    aspectRatio: "3.03"
  },
  {
    imageSrc: "/col-md-2.jpg",
    width: "83px",
    heigth: "59px",

    aspectRatio: "3.03"
  },
  {
    imageSrc: "/col-md-3 .jpg",
    width: "102px",
    heigth: "75px",
    aspectRatio: "3.03"
  },
  {
    imageSrc: "/col-md-4 (3).jpg",
    width: "103px",
    heigth: "42px",

    aspectRatio: "3.03"
  },
  {
    imageSrc: "/fa-brands-5 (1).jpg",
    width: "104px",
    heigth: "62px",
    aspectRatio: "3.03"
  },
  {
    imageSrc: "/col-md-6 (5).jpg",
    width: "76px",
    heigth: "72px",

    aspectRatio: "3.03"
  }

  // Add the rest of the brand logos here
];

const ShopPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <div className=" ml-40 flex overflow-hidden flex-col justify-center items-start py-6 w-full font-bold text-center whitespace-nowrap bg-neutral-50 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center max-md:max-w-full">
            <div className="w-full h-[32px] flex justify-center items-center gap-4 mb-[8px]">
              <Link href="/" className="text-sm font-bold text-[#252B42]">
                Home
              </Link>

              <img
                alt="Arrow"
                loading="lazy"
                width="9"
                height="16"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src="arrowRightGray.svg"
              />
              <span className="text-sm text-[#737373]"> Shop</span>
            </div>
          </div>
        </div>
        <div className="w-[1440px] h-[91px] flex justify-center items-center">
            <div className="w-[143px] h-[72px]">
  <h3 className="text-[18px] font-bold text-gray-400">
  Description
  </h3>
</div>
<div className="w-[220px] h-[72px]">
  <h3 className="text-[18px] font-bold text-gray-400">
  Additional Information
  </h3>
  </div>
  <div className="w-[138px] h-[72px]">
  <h3 className="text-[18px] font-bold text-gray-400">
  Reviews
  </h3>
  </div>
  <div className="w-[138px] h-[72px]">
  <h3 className="text-[18px] font-bold text-gray-400">
  (0)
  </h3>
  </div>
</div>

<div className="ml-40 w-[309px] h-[32px] font-bold text-size-24 text-black">                 
      BESTSELLER PRODUCTS 
      </div>
        {/* Categories Section */}
        <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
            <div className="flex overflow-hidden flex-wrap gap-4 items-start max-md:max-w-full">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            {/* Brands Section */}
            <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
              <div className="flex overflow-hidden flex-col items-center w-full max-w-[1050px] max-md:max-w-full">
                <div className="flex overflow-hidden flex-wrap gap-8 justify-center items-center py-12 max-md:max-w-full">
                  {brands.map((brand, index) => (
                    <BrandLogo key={index} {...brand} />
                  ))}
                </div>
              </div>
            </section>

            {/* Pagination */}
            <div className="w-full max-w-[313px] mx-auto mt-10 border border-gray-300 rounded-lg shadow-md">
              <div className="flex items-center justify-center space-x-2">
                <button className="bg-gray-100 text-gray-600 py-2 px-4 border border-gray-300 rounded-l-md">
                  First
                </button>
                <button className="bg-white text-blue-600 py-2 px-3 border border-gray-300">
                  1
                </button>
                <button className="bg-blue-600 text-white py-2 px-3 border border-gray-300">
                  2
                </button>
                <button className="bg-white text-blue-600 py-2 px-3 border border-gray-300">
                  3
                </button>
                <button className="bg-white text-blue-600 py-2 px-4 border border-gray-300 rounded-r-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ShopPage;

import React from "react";
import { ProductCard } from "@/components/Shop/ProductCard";
import { CategoryCard } from "@/components/Shop/CategoryCard";
import { BrandLogo } from "@/components/Shop/BrandLogo";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/Footer";
const products = [
  {
    imageSrc: "/fixed-height (9).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (9).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (10).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (14).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/fixed-height (8).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5.jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (6).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (7).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (4).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/product-cover-5 (1).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/fixed-height (1).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"]
  },
  {
    imageSrc: "/fixed-height (2).jpg",
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
    imageSrc: "/card-(1).png",
    title: "CLOTHS",

    itemCount: 1
  },
  {
    imageSrc: "/card-(2).png",
    title: "CLOTHS",
    itemCount: 2
  },
  {
    imageSrc: "/card-(3).png",
    title: "CLOTHS",
    itemCount: 3
  },
  {
    imageSrc: "/card-(4).png",
    title: "CLOTHS",
    itemCount: 4
  },
  {
    imageSrc: "/card-(5).png",
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
        <nav className="flex overflow-hidden flex-col justify-center items-center py-6 w-full font-bold text-center whitespace-nowrap bg-neutral-50 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 items-center max-md:max-w-full">
            <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none min-w-[240px] text-slate-800 w-[510px] max-md:max-w-full">
              Shop
            </div>
            <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-sm tracking-wide leading-6 min-w-[240px] w-[509px] max-md:max-w-full">
              <div className="flex overflow-hidden gap-4 items-center py-2.5">
                <Link href="/" className="self-stretch my-auto text-slate-800">
                  Home
                </Link>

                <span className="self-stretch my-auto text-stone-300">
                  Shop
                </span>
              </div>
            </div>
          </div>
        </nav>

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
        <Footer />
        {/* Products Section */}
        <section className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            <div className="flex justify-center gap-0">
              <div className="overflow-hidden self-stretch my-auto text-3xl tracking-normal leading-none  text-slate-800 w-[84px] h-[74px] ">
                First
              </div>
              <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none  text-slate-800 w-[84px] h-[74px] ">
                1
              </div>
              <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none  text-slate-800 w-[84px] h-[74px]">
                2
              </div>
              <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none  text-slate-800 w-[84px] h-[74px]">
                3
              </div>
              <div className="overflow-hidden self-stretch my-auto text-3xl tracking-normal leading-none  text-slate-800 w-[84px] h-[74px] ">
                Next
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ShopPage;

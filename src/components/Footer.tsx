import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Ensure this import is here

const Footer = () => {
  return (
    <footer className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center items-center px-8 bg-neutral-50 max-md:px-5">
        <div className="flex overflow-hidden flex-col justify-center py-10 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex justify-between overflow-hidden flex-wrap gap-10 items-center max-md:max-w-full">
            <div className="flex gl:px-0 md:px-0 sm:px-4 px-4 overflow-hidden flex-col items-start self-stretch my-auto text-2xl font-bold tracking-normal leading-none whitespace-nowrap text-slate-800 ">
              <div className="overflow-hidden py-3.5 max-w-full w-[187px] max-md:pr-5">
                Bandage
              </div>
            </div>
            <div className="flex overflow-hidden lg:px-0 md:px-0 sm:px-4 px-4 flex-col items-center self-stretch my-auto ">
              <div className="flex overflow-hidden gap-5 justify-center items-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>

                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-between px-8 py-12">
        <div className="flex overflow-hidden flex-col font-bold w-[148px]">
          <div className="text-base tracking-normal text-slate-800">
            Company Info
          </div>
          <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
            <div className="">About Us</div>
            <div className="mt-2.5">Carrier</div>
            <div className="mt-2.5">We are hiring</div>
            <div className="mt-2.5">Blog</div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col font-bold w-[148px]">
          <div className="text-base tracking-normal text-slate-800">Legal</div>
          <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
            <div className="">About Us</div>
            <div className="mt-2.5">Carrier</div>
            <div className="mt-2.5">We are hiring</div>
            <div className="mt-2.5">Blog</div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col font-bold w-[148px]">
          <div className="text-base tracking-normal text-slate-800">
            Features
          </div>
          <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
            <div className="">Business Marketing</div>
            <div className="mt-2.5">User Analytics</div>
            <div className="mt-2.5">Live chat</div>
            <div className="mt-2.5">Unlimited Fun</div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col font-bold w-[148px]">
          <div className="text-base tracking-normal text-slate-800">
            Resources
          </div>
          <div className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
            <div className="">Business Marketing</div>
            <div className="mt-2.5">User Analytics</div>
            <div className="mt-2.5">Live chat</div>
            <div className="mt-2.5">Unlimited Fun</div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col min-w-[240px] w-[321px]">
          <div className="text-base font-bold tracking-normal text-slate-800">
            Get In Touch
          </div>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className=" w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Subscribe
            </button>
            <p className="text-sm mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </form>
        </div>
      </div>
      <div className="py-8 px-20 text-[#737373] font-semibold text-sm ">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;

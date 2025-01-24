import Link from "next/link";
import Image from "next/image";

export default function Header3() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="max-sm:h-[91px] flex flex-col max-sm:w-full max-sm:bg-[#F6F6F6]">
          <div className="flex sm:w-[1050px] w-full justify-between items-center py-6 max-sm:p-6">
            <h3 className="text-[24px] font-bold text-[#252B42]">
              <Link href="/">Bandage</Link>
            </h3>
            <div className="flex">
              <button title="Menu Button" className="max-sm:block hidden px-[11px]">
                <Image
                  alt="Search"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="search2.svg"
                />
              </button>
              <button title="Cart Button" className="max-sm:block hidden px-[11px]">
                <Image
                  alt="Cart"
                  loading="lazy"
                  width="24"
                  height="23"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="cart2.svg"
                />
              </button>
              <button title="Menu Toggle" className="max-sm:block hidden px-[11px]">
                <Image
                  alt="Menu"
                  loading="lazy"
                  width="24"
                  height="14"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="menu.svg"
                />
              </button>
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
                  <Link href="/team">Team</Link>
                </li>
                <li className="text-[14px] font-bold text-[#737373]">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <div className="h-[52px] flex gap-[30px]">
                <button className="w-[100px] h-[52px] text-[14px] font-bold text-[#23A6F0] hover:bg-[#23A6F0] bg-[#ffffff] hover:text-[#ffffff] rounded-[5px] transition-all duration-100">
                  <a href="#">Login</a>
                </button>
                <button className="w-[214px] h-[52px] py-[15px] px-[25px] flex items-center justify-between bg-[#23A6F0] hover:bg-[#ffffff] text-[14px] font-bold hover:text-[#23A6F0] text-[#FFFFFF] rounded-[5px] transition-all duration-100">
                  Become a member
                  <Image
                    alt="Arrow Right"
                    loading="lazy"
                    width="12"
                    height="10"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="arrowRightWhite.svg"
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center gap-[30px] py-16 sm:hidden max-sm:bg-[#F6F6F6] transition-all duration-300 ease-in-out opacity-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

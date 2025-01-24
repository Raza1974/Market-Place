import Image from "next/image";
import Header4 from "@/components/header4";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function DesktopTeam() {
  return (
    <div>
      <Header4 />
      {/* Centered Editor's Pick Section */}

      {/* Centered Text Section */}
      <div className="flex flex-col items-center text-center">
        <h5 className="text-[16px] font-bold  text-gray-300 w-187px h-12 px-210 mt-12 mb-1">
          WHAT WE DO
        </h5>
        <h2 className=" text-[58px]  text-black mb-0">
          Innovation tailored for you
        </h2>

        {/* Reduced space using `mb-2` */}

        <div className="w-1050px h-500px flex">

         
          <div className="editter1">
            
            <div className="editter2">
                
            </div>
          </div>
        </div>
      </div>
      <div className="py-[50px] flex flex-col items-center gap-4">
        <div className="flex items-center gap-[15px] py-[10px]">
          <Link href="/" className="text-[14px] font-bold text-[#252B42]">
            Home
          </Link>
      
            <div className="w-[9px] h-[16px]">
              <Image
                alt="Arrow"
                width={9}
                height={16}
                src="/Vector (13).png"
              />
              
           </div>
           <h6 className="text-[14px] font-bold text-[#737373]">Team</h6>
        </div>
        <div className="flex justify-center">
          <div className="flex max-sm:flex-col max-sm:gap-2 sm:w-[1440px] justify-between">
            <div className="team1"></div>
            <Image src="/team1.jpg" alt="1" width={700} height={530} />
            <div className="flex flex-col max-sm:gap-2 justify-between">
              <div className="flex sm:w-[732px] justify-between">
                <div className="team2"></div>
                <Image src="/team2-2.jpg" alt="2" width={361} height={260} />
                <div className="team3"></div>
                <Image src="/team4.jpg" alt="4" width={361} height={260} />
              </div>
              <div className="flex sm:w-[732px] justify-between">
                <div className="team4"></div>
                <Image src="/team3-3.jpg" alt="3" width={361} height={260} />
                <div className="team5"></div>
                <Image src="/team5.jpg" alt="5" width={361} height={260} />
         
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col sm:gap-20 sm:py-28 py-[30px]">
            <div className="flex justify-center max-sm:py-[45px]">
              <h2 className="text-[40px] font-bold text-[#252B42] max-sm:w-[250px] text-center">
                Meet Our Team
              </h2>
            </div>
            <div className="flex max-sm:flex-col gap-[30px]">
              <div className="flex flex-col h-[383px] w-[332px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className=" justify-items-center items-center team1"></div>
                <Image src="/team1-2.jpg"
                      alt="1"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width="25"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>             
                </div>
              </div>
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team2"></div>
                <Image src="/team-1-user-2 (1).jpg"
                      alt="2"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width="25"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team3"></div>
                <Image src="/team-1-user-3 (1).jpg"
                      alt="3"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width="25"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-sm:flex-col gap-[30px]">
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team4"></div>
                <Image src="/team-1-user-4.jpg"
                      alt="4"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width="25"
                      height="24"
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width="22"
                      height="23"
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team5"></div>
                <Image src="/team-1-user-2 (2).jpg"
                      alt="5"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width={25}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team6"></div>
                <Image src="/team-1-user-6.jpg"
                      alt="6"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width={25}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-sm:flex-col gap-[30px]">
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team7"></div>
                <Image src="/team-1-user-7.jpg"
                      alt="7"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width={25}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team8"></div>
                <Image src="/team-1-user-8.jpg"
                      alt="8"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width={25}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[383px] w-[316px] hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                <div className="team9"></div>
                <Image src="/team-1-user9.jpg"
                      alt="9"
                      width={329}
                      height={231}
                      />
                <div className="h-[152px] flex flex-col justify-center items-center gap-[10px] p-[30px]">
                  <h5 className="text-[16px] font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-[14px] font-bold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex gap-[20px]">
                    <Image
                      alt="Facebook"
                      width={23}
                      height={23}
                      className="sm:block hidden transparent-image"
                      src="/face.svg"
                    />
                    <Image
                      alt="Facebook"
                      loading="lazy"
                      width={25}
                      height={24}
                      decoding="async"
                      data-nimg="1"
                      className="max-sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/face1.svg"
                    />
                    <Image
                      alt="Instagram"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/insta.svg"
                    />
                    <Image
                      alt="Instagram"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/instab.svg"
                    />
                    <Image
                      alt="Twitter"
                      loading="lazy"
                      width={22}
                      height={23}
                      decoding="async"
                      data-nimg="1"
                      className="sm:block hidden"
                      style={{ color: "transparent" }}
                      src="/twt.svg"
                    />
                    <Image
                      alt="Twitter"
                      width={25}
                      height={24}
                      className="max-sm:block hidden"
                      src="/twt1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-[#ffffff] justify-center items-center w-full flex-col gap-[30px] p-28 sm:py-40">
          <h2 className="text-[40px] font-bold text-[#252B42] max-sm:w-[321px] text-center">
            Start your 14 days free trial
          </h2>
          <h6 className="text-[14px] font-medium text-[#737373] w-[411px] text-center max-sm:w-[321px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </h6>
          <button className="bg-[#23A6F0] hover:bg-[#fff] w-[186px] px-[40px] py-[15px] rounded-[5px] text-[#FFFFFF] hover:text-[#23A6F0] font-bold text-[14px] transition-all duration-200">
            Try for free
          </button>
          <div className="flex items-center justify-center gap-[34px] py-[10px]">
          <Image
              alt="Twitter"
              loading="lazy"
              width={22}
              height={23}
              decoding="async"
              data-nimg="1"
              className="sm:block hidden"
              style={{ color: "transparent" }}
              src="/twt1.svg"
            />
            <Image
              alt="Twitter"
              width={25}
              height={24}
              className="max-sm:block hidden"
              src="/twt1.svg"
            />
            <Image
              alt="Facebook"
              width={23}
              height={23}
              className="sm:block hidden transparent-image"
              src="/face1.svg"
            />
            <Image
              alt="Facebook"
              loading="lazy"
              width={25}
              height={24}
              decoding="async"
              data-nimg="1"
              className="max-sm:block hidden"
              style={{ color: "transparent" }}
              src="/face1.svg"
            />
            <Image
              alt="Instagram"
              loading="lazy"
              width={22}
              height={23}
              decoding="async"
              data-nimg="1"
              className="sm:block hidden"
              style={{ color: "transparent" }}
              src="/instab.svg"
            />
            <Image
              alt="Instagram"
              width={25}
              height={24}
              className="max-sm:block hidden"
              src="/instab.svg"
            />
            <Image
              alt="Twitter"
              loading="lazy"
              width={22}
              height={23}
              decoding="async"
              data-nimg="1"
              className="sm:block hidden"
              style={{ color: "transparent" }}
              src="/link.svg"
            />
            <Image
              alt="Twitter"
              width={25}
              height={24}
              className="max-sm:block hidden"
              src="/link.svg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

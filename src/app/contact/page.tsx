import Header2 from "@/components/header2";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Header2 />

      <div className="py-1 px-4  ml-20 sm:px-6">
        {/* First Hero Section */}
        <div className="relative w-full min-h-screen bg-white flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start px-12 sm:px-12 lg:w-1/2">
            <h5 className="heading.3 font-montserrat font-bold text-[14px] sm:text-[16px] text-gray-500 mt-20 mb-12">
              CONTACT US
            </h5>
            <h1 className=" headline font-montserrat font-bold text-[32px] sm:text-[48px] text-gray-900 leading-tight  mb-4">
              Get in touch <br /> today!
            </h1>
            <h4 className="text-gray-600 text-center lg:text-left  mb-4">
              We know how large objects will act, <br />
              but things on a small scale.
            </h4>
            <h4 className=" sub-headline font-bold text-black sm:text-[24px]  mb-6">
              Phone: +451 215 215 <br /> Fax: +451 215 215
            </h4>
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start  w-4 h-4 gap-4">
              <img src="/logos_twitter.jpg" alt="Twitter" className="" />
              <img
                src="/logos_facebook.jpg"
                alt="Facebook"
                className=""
              />
              <img
                src="/ant-design_instagram-outlined (2).jpg"
                alt="Instagram"
                className=""
              />
              <img
                src="/logos_linkedin-icon.jpg"
                alt="LinkedIn"
                className=""
              />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-58px flex justify-center">
            <img
              src="/filter-contact.jpg"
              alt="Contact Us"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Office Section */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto text-center space-y-12">
            <div>
              <h6 className="uppercase text-sm text-black font-bold mb-2">
                Visit Our Office
              </h6>
              <h2 className="text-[40px] sm:text-3xl font-bold text-gray-800">
                We help small businesses <br />
                with big ideas
              </h2>
            </div>
            <div className="w-985px  h-403px flex flex-wrap justify-center gap-6">
              {/* Support Card 1 */}
              <div className="w-full sm:w-[328px] h-[343px] bg-white p-6 ">
                <img
                  src="/Vector (7).jpg"
                  alt="Mail"
                  className="mx-auto mb-4"
                />
                <div className="text-sm font-bold text-center">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <h3 className="text-lg font-bold mt-4">Get Support</h3>
                <button className="font-bold  text-blue-300 mt-4 px-6 py-2 border border-blue-300 rounded-xl">
                  Submit Request
                </button>
              </div>

              {/* Support Card 2 */}
              <div className="w-full sm:w-[329px] h-[403px]  bg-[#252B42] text-white p-6 ">
                <img
                  src="/icn settings .icn-xl (1).png"
                  alt="Map"
                  className="mx-auto mb-4"
                />
                <div className="text-sm font-bold text-center">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <h3 className="text-lg font-bold mt-4">Get Support</h3>
                <button className=" font-bold  text-blue-300 mt-4 px-6 py-2 border border-blue-300 rounded-xl bg-#252B42 ">
                  Submit Request
                </button>
              </div>

              {/* Support Card 3 */}
              <div className="w-full sm:w-[329px] h[343px] bg-white p-6 ">
                <img
                  src="/Vector (5).jpg"
                  alt="Mail"
                  className="mx-auto mb-4"
                />
                <div className="text-sm font-bold text-center">
                  <p>georgia.young@example.com</p>
                  <p>georgia.young@ple.com</p>
                </div>
                <h3 className="text-lg font-bold mt-4">Get Support</h3>
                <button className=" font-bold  text-blue-300 mt-4 px-6 py-2 border border-blue-300 rounded-xl ">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
          <div className="w-1440px h-338px flex flex-col items-center max-sm:py-[40px]">
            <div className="w-[90px] h-[38px] ">
                <img alt="Arrow" loading="lazy" width="72" height="21"  src="/Arrow 2.png"/>
            </div>
            <div className="flex flex-col items-center gap-[30px] sm:gap-[16px] max-sm:pt-[20px] max-sm:pb-[80px] sm:py-[80px]">
                <h6 className="text-[16px] font-bold text-[#252B42]">WE Cant WAIT TO MEET YOU</h6>
                <h2 className="text-[58px] font-bold text-[#252B42]">Let’s Talk</h2>
                <button className="h-[52px] w-[186px] rounded-[5px] bg-[#23A6F0] text-[14px] font-bold text-[#ffffff] hover:text-[#23A6F0] hover:bg-[#ffffff] transition-all duration-200">Try it free now</button>
            </div>
</div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

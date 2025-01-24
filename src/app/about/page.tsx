/* eslint-disable @next/next/no-img-element */
import Header2 from "@/components/header2";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Header2 />
      <div className="py-12 sm:px-1">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-36 py-15 bg-white">
           {/* Left Section (Text) */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-sm font-normal tracking-tight md:text-xl dark:text-black">
              About Company
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold text-black">
              About Us
            </h1>
            <p className="text-lg text-gray-600">
              We know how large objects will act,
              <br />
              but things on a small scale.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Get Quote Now
            </button>
          </div>
            {/* Right Section (Image) */}
          <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-full  md:w-[1040px] md:h-[570px]">
        
              <img
                src="/shoppingGirl1.png"
                alt="Company Background"
                loading="lazy"
                
                
              />
           </div>
          </div>
        </div>

        {/* Company Stats Section */}
        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto space-y-12">
            <h2 className="text-xl font-semibold text-red-500">
              Problems trying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Met minim Mollie non desert <br /> Alamo est sit cliquey dolor
                do <br /> met sent.
              </h1>
              <p className="text-gray-600">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { title: "15K", subtitle: "Happy Customers" },
                { title: "150K", subtitle: "Monthly Visitors" },
                { title: "15", subtitle: "Countries Worldwide" },
                { title: "100+", subtitle: "Top Partners" },
              ].map((stat, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.title}
                  </h3>
                  <p className="text-sm text-gray-600">{stat.subtitle}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="/desktop-video-3.jpg"
                alt="Video Thumbnail"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600 text-sm mt-2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  <div className="w-40 h-40 overflow-hidden mb-4">
                    <img
                      src={`/team-1-user-3 (${index + 1}).jpg`}
                      alt={`Team Member ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Username
                  </h3>
                  <p className="text-sm text-gray-500">Profession</p>
                  <div className="flex gap-4 mt-4">
                    {["Facebook", "Instagram", "Twitter"].map((platform, i) => (
                      <a
                        key={i}
                        href={`https://${platform.toLowerCase()}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={`/Vector (${i + 2}).jpg`}
                          alt={platform}
                          className="w-5 h-5 bg-blue-900"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Companies Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Big Companies Are Here
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <div className="bg-gray-50 py-8 mt-12">
              <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center items-center gap-8">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <img
                    key={index}
                    src={`/col-md-${index}.jpg`}
                    alt={`Company ${index}`}
                    className="w-20 h-20 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

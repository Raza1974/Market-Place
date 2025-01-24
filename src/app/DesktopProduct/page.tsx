import Header from "@/components/header";
import Footer from "@/components/Footer";
export default function Desktop() {
  return (
    <div>
      <div className="w-full min-h-screen bg-[#FAFAFA]">
        {/* Navbar + Intro Section */}
        <div className="w-full h-auto bg-white rounded-lg shadow-md">
          <div className="w-full h-auto bg-white/50">
            <Header />
          </div>
          <div className="width={1440} height={589} py-228">
            <div className="width={506} height={546}">
              <div className="width={219} height={75} py-471"> 
                <h2 className="text-[#252B42] text-[32px] font-bold leading-[40px] tracking-[0.2px] text-center">
                  Welcome to Our Store
                </h2>
                <p className="text-[#737373] text-[16px] leading-[24px] tracking-[0.1px] text-center">
                  We provide a wide range of products at affordable prices.
                </p>
                <button className="w-full sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

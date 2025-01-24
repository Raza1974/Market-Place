import React from 'react'
import Image from 'next/image'

const VitaClassic = () => {
  return (
    <div>
      {/* First Hero Section */}
      <div className="relative w-full h-screen bg-green-900 flex items-center">
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
          <div className="w-full sm:w-[599px] h-auto space-y-4 text-center sm:text-left">
            <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
              SUMMER 2020
            </h5>
            <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-white">
              Vita Classic <br></br>Product
            </h1>
            <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
              We know how large objects will act, We know how are objects will act, We know
            </h4>
            
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="font-montserrat font-bold text-[24px] py-2 text-center  text-white">$16.48</span>
              <button className="w-[184px] h-[52px] sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] text-white font-montserrat">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden sm:block">
          <Image 
            src="/shop-hero-2-png-picture-1.jpg" 
            alt="Hero Background" 
            layout="fill"
            objectFit="cover"
            quality={90}
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="relative bg-white">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Image */}
          <div className="w-full sm:w-1/2 ">
            <Image 
              src="/vita-2.jpg" 
              alt="Product Image" 
              layout="responsive"
              width={443} 
              height={685}
              objectFit="cover"
            />
          </div>

          {/* Text Overlay */}
          <div className="w-full sm:w-1/2 p-8">
            <div className="space-y-4 text-center sm:text-left">
              <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-black">
                SUMMER 2020
              </h5>
              <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-black">
                Part of the Neural Universe
              </h1>
              <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-black w-full sm:w-[376px]">
                We know how large objects will act, We know how are objects will act, We know
              </h4>
              
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                <button className="w-[156px] h-[52px] bg-[#2DC071] py-[12px] px-[30px] rounded-[5px] text-white font-montserrat">
                  BUY NOW
                </button>
                <button className="w-[173px] h-[52px] bg-transparent border-2 border-[#2DC071] py-[12px] px-[30px] rounded-[5px] text-[#2DC071] font-montserrat">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    </div>
  )
}

export default VitaClassic


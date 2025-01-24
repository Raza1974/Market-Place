import Header2 from  "@/components/header2"
import Footer from  "@/components/Footer";
export default function Blog(){
        return (
            <div>
                <Header2 />
            <div>
             <section className="bg-white py-12 px-8"  >    
            <div className="ma-w-7x1 ma-auto text-center md:text-let grid grid-cols-1 md:grid-cols-2 items-center gap-12"></div>
    <div className="space-y-6">
    <h2 className=" flex gap-3 text-5xl font-bold text-gray-800 leading-tight">Welcome to  <br></br>
        <span className="text-blue-500">ABOUT US</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">Discover a world of quality products tailored for your everyday needs. From fashion to electronics, we bring you the best at unbeatable prices. Experience seamless shopping with fast delivery and excellent customer service.</p>
        <button className="bg-blue-500 text-white py-3 px-8 text-lg rounded-lg hover:bg-blue-600 transition">Learn More</button>
    </div>
        </section>
    </div>
    <Footer />
    </div>
    )
    }
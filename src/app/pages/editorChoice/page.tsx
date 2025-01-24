import Image from "next/image";

export default function EditorChoice() {
  return (
    <div>
      {/* Centered Editor's Pick Section */}
      
      {/* Centered Text Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold w-187px h-32 px-210 mt-12 mb-1">
          EDITOR’S PICK
          <p className="text-lg text-gray-400 mb-0">
          Problems trying to resolve the conflict between
        </p>
        </h1>
        {/* Reduced space using `mb-2` */}
        

        <div className="w-1050px h-500px flex">
         
         <div className="editter">
          <Image 
          src="/men (2).jpg" 
          alt="men" 
          width={510} 
          height={500}  />
           
          </div>
          
          <div className="editter">
          <Image src="/women(2).jpg" alt="women" width={240} height={500} />
          </div>
          <div className="editter1">
            <Image
              src="/accessories.jpg"
              alt="Hero"
              width={240}
              height={242}
              
              
            />
            
            <div className="editter2">
            <Image
              src="/kid.jpg"
              alt="Hero"
              width={240}
              height={242}
            
        
            />
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}






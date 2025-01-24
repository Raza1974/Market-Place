import React from "react";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  department: string;
  originalPrice: string;
  salePrice: string;
  colors: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  department,
  originalPrice,
  salePrice,
  colors
}) => {
  return (
    <div className="flex flex-col items-start w-[239px]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-full aspect-[0.84]"
      />
      <div className="mt-4 text-base font-bold leading-6 text-slate-800">
        {title}
      </div>
      <div className="mt-1 text-sm leading-5 text-stone-300">{department}</div>
      <div className="flex gap-1 mt-2 text-base font-bold leading-6">
        <span className="text-stone-300 line-through">{originalPrice}</span>
        <span className="text-sky-500">{salePrice}</span>
      </div>
      <div className="mt-2 flex justify-center gap-1">
        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
      </div>
      <div className="flex gap-1 mt-2">
        {colors.map((color, index) => (
          <div key={index} className={`w-4 h-4 rounded-full bg-${color}`} />
        ))}
      </div>
    </div>
  );
};

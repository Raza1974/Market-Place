import React from 'react';

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  itemCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  imageSrc,
  title,
  itemCount,
}) => {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-12 w-[205px]  h-[223max-w-full bg-white rounded-md shadow-sm max-md:px-5">
      <img
        loading="lazy"
        src={imageSrc}
        alt={title}
        className="object-contain w-20 aspect-square"
      />
      <div className="mt-6 text-xl font-bold leading-7 text-center text-slate-800">
        {title}
      </div>
      <div className="mt-1 text-sm leading-5 text-center text-stone-300">
        {itemCount} items
      </div>
    </div>
  );
};

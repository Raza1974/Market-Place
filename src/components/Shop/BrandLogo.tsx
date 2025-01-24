import React from 'react';


interface BrandLogoProps {
  imageSrc: string;
  width: string;
  aspectRatio: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  imageSrc,
  width,
  aspectRatio,
}) => {
  return (
    <img
      loading="lazy"
      src={imageSrc}
      alt="Brand logo"
      className="object-contain shrink-0 my-auto"
      style={{ width, aspectRatio }}
    />
  );
};


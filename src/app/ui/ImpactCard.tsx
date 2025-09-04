import React from 'react';
import Image from 'next/image';

interface ImpactCardProps {
  image: string;
  title: string;
  alt?: string;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ image, title, alt = "" }) => {
  return (
    <div className="w-[29.25rem] h-[25.3125rem] relative overflow-hidden rounded-xl max-md:w-full max-md:max-w-[25rem] max-md:mx-auto max-md:my-0 max-sm:h-[18.75rem]">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover rounded-xl"
      />
      <div className="w-full h-full absolute rounded-xl left-0 top-0" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.88) 100%)'}} />
      <h3 className="text-white text-2xl font-normal leading-6 tracking-[0.03125rem] absolute z-[2] left-[1.9375rem] bottom-[1.9375rem] max-sm:text-xl max-sm:left-4 max-sm:bottom-4 max-sm:px-2 max-sm:max-w-[calc(100%_-_2rem)]">
        {title}
      </h3>
    </div>
  );
};

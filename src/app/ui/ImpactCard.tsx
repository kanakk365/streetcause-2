import React from 'react';
import Image from 'next/image';

interface ImpactCardProps {
  image: string;
  title: string;
  alt?: string;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ image, title, alt = "" }) => {
  return (
    <div className="w-[368px] h-[405px] relative overflow-hidden rounded-xl max-md:w-full max-md:max-w-[400px] max-md:mx-auto max-md:my-0 max-sm:h-[300px]">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover rounded-xl"
      />
      <div className="w-full h-full absolute rounded-xl left-0 top-0" />
      <h3 className="text-white text-2xl font-normal leading-6 tracking-[0.5px] absolute z-[2] left-[31px] bottom-[31px] max-sm:text-xl max-sm:left-5 max-sm:bottom-5">
        {title}
      </h3>
    </div>
  );
};

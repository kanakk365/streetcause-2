import React from 'react';
import Image from 'next/image';

interface HighlightCardProps {
  icon: string;
  title: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 flex-1 max-md:w-[calc(50%_-_20px)] max-sm:w-full max-sm:gap-6 max-sm:p-4">
      <div className="flex w-[9.375rem] h-[9.375rem] justify-center items-center gap-2.5 bg-[rgba(255,255,255,0.23)] px-5 py-3 rounded-[6.25rem] max-sm:w-[7.5rem] max-sm:h-[7.5rem]">
        <Image
          src={icon}
          alt={title}
          width="85"
          height="85"
          className="w-[5.3125rem] h-[5.3125rem] max-sm:w-[4.375rem] max-sm:h-[4.375rem]"
        />
      </div>
      <h3 className="text-white text-xl font-normal leading-8 tracking-[0.03125rem] text-center max-sm:text-xl max-sm:leading-7">
        {title}
      </h3>
    </div>
  );
};

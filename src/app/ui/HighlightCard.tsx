import React from 'react';
import Image from 'next/image';

interface HighlightCardProps {
  icon: string;
  title: string;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 flex-1 max-md:w-[calc(50%_-_20px)] max-sm:w-full">
      <div className="flex w-[150px] h-[150px] justify-center items-center gap-2.5 bg-[rgba(255,255,255,0.23)] px-[21px] py-[13px] rounded-[100px] max-sm:w-[120px] max-sm:h-[120px]">
        <Image
          src={icon}
          alt={title}
          width="85"
          height="85"
          className="w-[85px] h-[85px] max-sm:w-[70px] max-sm:h-[70px]"
        />
      </div>
      <h3 className="text-white text-xl font-normal leading-8 tracking-[0.5px] text-center max-sm:text-xl max-sm:leading-7">
        {title}
      </h3>
    </div>
  );
};

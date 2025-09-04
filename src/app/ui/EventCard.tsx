"use client"

import Image from 'next/image';

interface EventCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  onBuyNow: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  price,
  image,
  onBuyNow
}) => {
  return (
    <article className="w-[28.6875rem] h-[28.3125rem] border shadow-[0_1rem_4rem_0_rgba(0,0,0,0.25)] relative bg-white rounded-xl border-solid border-[#D7D7D7] max-sm:w-full max-sm:max-w-[22rem] max-sm:h-auto max-sm:min-h-[24rem]">
      <div className="absolute left-6 top-6 w-[25.75rem] h-[15.375rem] max-sm:w-[calc(100%_-_48px)] max-sm:h-[12.5rem]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="absolute w-[25.3125rem] left-[1.6875rem] top-[18.375rem] max-sm:w-[calc(100%_-_32px)] max-sm:left-4 max-sm:top-[14rem] max-sm:px-2">
        <h3 className="text-black text-2xl font-semibold leading-6 tracking-[0.03125rem] mb-4 max-sm:text-xl">
          {title}
        </h3>
        <p className="text-neutral-600 text-base font-normal italic leading-6 tracking-[0.03125rem] max-sm:text-sm">
          {description}
        </p>
      </div>
      <div className="absolute text-2xl font-bold leading-6 tracking-[0.03125rem] left-[1.6875rem] bottom-6 text-[#a00357] max-sm:left-4 max-sm:bottom-4 max-sm:text-xl">
        {price}
      </div>
      <button
        onClick={onBuyNow}
        className="flex w-[12.0625rem] h-[2.9375rem] justify-center items-center gap-2.5 shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] absolute cursor-pointer px-5 py-3 rounded-[5.9375rem] right-[1.6875rem] bottom-6 max-sm:w-24 max-sm:h-10 max-sm:right-4 max-sm:bottom-4 max-sm:px-3 max-sm:py-2 bg-gradient-to-b from-[#a00357] to-[#6b022e] hover:from-[#900350] hover:to-[#5a0226] transition-all duration-300"
      >
        <span className="text-white text-xl font-normal leading-[1.875rem] tracking-[0.029rem] max-sm:text-sm">
          Buy now
        </span>
      </button>
    </article>
  );
};

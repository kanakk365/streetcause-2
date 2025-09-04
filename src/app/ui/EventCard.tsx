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
    <article className="w-[459px] h-[453px] border shadow-[0_4px_16px_0_rgba(0,0,0,0.25)] relative bg-white rounded-xl border-solid border-[#D7D7D7] max-sm:w-full max-sm:max-w-[400px]">
      <div className="absolute left-6 top-6 w-[412px] h-[246px] max-sm:w-[calc(100%_-_48px)] max-sm:h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="absolute w-[405px] left-[27px] top-[294px] max-sm:w-[calc(100%_-_54px)] max-sm:top-60">
        <h3 className="text-black text-2xl font-semibold leading-6 tracking-[0.5px] mb-4 max-sm:text-xl">
          {title}
        </h3>
        <p className="text-neutral-600 text-base font-normal italic leading-6 tracking-[0.5px] max-sm:text-sm">
          {description}
        </p>
      </div>
      <div className="absolute text-2xl font-bold leading-6 tracking-[0.5px] left-[27px] bottom-6 text-[#a00357]">
        {price}
      </div>
      <button
        onClick={onBuyNow}
        className="flex w-[193px] h-[47px] justify-center items-center gap-2.5 shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] absolute cursor-pointer px-[21px] py-[13px] rounded-[95px] right-[27px] bottom-6 max-sm:w-[150px] max-sm:h-10 max-sm:right-6 max-sm:bottom-5 bg-gradient-to-b from-[#a00357] to-[#6b022e] hover:from-[#900350] hover:to-[#5a0226] transition-all duration-300"
      >
        <span className="text-white text-xl font-normal leading-[30px] tracking-[0.464px] max-sm:text-base">
          Buy now
        </span>
      </button>
    </article>
  );
};

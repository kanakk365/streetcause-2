"use client"

import Image from "next/image";

export const HeroSection: React.FC = () => {
  const handleSellPass = () => {
    // Handle sell pass action
    console.log('Sell pass clicked');
  };

  const handleDonate = () => {
    // Handle donate action
    console.log('Donate now clicked');
  };

  return (
    <section className="w-full h-[642px] relative max-sm:h-[500px]">
      <Image
        src="/images/herobg.png"
        alt="Navratri celebration background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="w-full h-[642px] absolute bg-[rgba(0,0,0,0.36)] left-0 top-0" />
      <div className="flex flex-col items-center gap-[25px] absolute -translate-x-2/4 w-[673px] h-[189px] left-2/4 top-[227px] max-md:w-[90%] max-md:px-5 max-md:py-0 max-sm:w-[95%] max-sm:top-[150px]">
        <header className="flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-white text-[44px] font-bold leading-[53px] tracking-[0.5px] text-center max-md:text-4xl max-md:leading-[44px] max-sm:text-[28px] max-sm:leading-9">
            NAVRATRI MAHOTSAV
          </h1>
          <p className="text-white text-2xl font-normal leading-[53px] tracking-[0.5px] text-center max-md:text-xl max-md:leading-8 max-sm:text-lg max-sm:leading-7">
            An evening of music, dance & celebration for a cause.
          </p>
        </header>
        <div className="flex items-center gap-[17px] max-md:flex-col max-md:gap-3">
          <button
            onClick={handleSellPass}
            className="flex justify-center items-center font-semibold  shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] cursor-pointer px-[32.682px] py-3 rounded-[75px] max-md:w-[200px] max-sm:w-40 max-sm:h-11 max-sm:px-4 max-sm:py-3 bg-gradient-to-b from-[#f6e024] to-[#fea500] hover:from-[#e6d024] hover:to-[#ea9500] transition-all duration-300"
          >
            <span className="text-black text-xl  leading-6 tracking-[0.5px] max-sm:text-base">
              Sell a pass
            </span>
          </button>
          <button
            onClick={handleDonate}
            className="flex  justify-center items-center gap-2.5 shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] cursor-pointer px-[21px] py-3 rounded-[95px] max-md:w-[200px] max-sm:w-40 max-sm:h-11 max-sm:px-4 max-sm:py-3 bg-gradient-to-b from-[#a00357] to-[#6b022e] hover:from-[#900350] hover:to-[#5a0226] transition-all duration-300"
          >
            <span className="text-white text-xl font-semibold leading-6 tracking-[0.5px] max-sm:text-base">
              Donate now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

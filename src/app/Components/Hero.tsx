"use client"

import Image from "next/image";
import React, { useState } from "react";
import { DonationModal } from "./DonationModal";

export const HeroSection: React.FC = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const handleSellPass = () => {
    // Handle sell pass action
    console.log('Sell pass clicked');
  };

  const handleDonate = () => {
    setIsDonateOpen(true);
  };

  return (
    <section className="max-w-screen min-h-[90vh] relative max-sm:min-h-[100svh] max-sm:h-[100svh]">
      <Image
        src="/images/herobg.png"
        alt="Navratri celebration background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="w-full h-full absolute bg-[rgba(0,0,0,0.36)] left-0 top-0" />
      <div className="flex flex-col items-center justify-center gap-6 absolute inset-0 w-full h-full max-md:px-5 max-md:py-8 max-sm:px-4 max-sm:py-6 max-sm:gap-4">
        <header className="flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-white text-5xl font-bold leading-[3.3125rem] tracking-[0.03125rem] text-center max-md:text-4xl max-md:leading-[2.75rem] max-sm:text-3xl max-sm:leading-[2.25rem] max-sm:px-4">
            NAVRATRI MAHOTSAV
          </h1>
          <p className="text-white text-2xl font-normal leading-[3.3125rem] tracking-[0.03125rem] text-center max-md:text-xl max-md:leading-8 max-sm:text-xl max-sm:leading-7 max-sm:px-4 max-sm:max-w-[90%]">
            An evening of music, dance & celebration for a cause.
          </p>
        </header>
        <div className="flex items-center gap-4 max-md:flex-col max-md:gap-4 max-sm:gap-3 max-sm:w-full max-sm:max-w-[90%] max-sm:flex-col">
          <button
            onClick={handleSellPass}
            className="flex justify-center items-center font-semibold shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] cursor-pointer px-8 py-3 rounded-[4.6875rem] max-md:w-48 max-sm:w-full max-sm:h-12 max-sm:px-6 max-sm:py-4 bg-gradient-to-b from-[#f6e024] to-[#fea500] hover:from-[#e6d024] hover:to-[#ea9500] transition-all duration-300"
          >
            <span className="text-black text-xl leading-6 tracking-[0.03125rem] max-sm:text-base">
              Sell a pass
            </span>
          </button>
          <button
            onClick={handleDonate}
            className="flex justify-center items-center gap-2.5 shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] cursor-pointer px-5 py-3 rounded-[5.9375rem] max-md:w-48 max-sm:w-full max-sm:h-12 max-sm:px-6 max-sm:py-4 bg-gradient-to-b from-[#a00357] to-[#6b022e] hover:from-[#900350] hover:to-[#5a0226] transition-all duration-300"
          >
            <span className="text-white text-xl font-semibold leading-6 tracking-[0.03125rem] max-sm:text-base">
              Donate now
            </span>
          </button>
        </div>
        <DonationModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      </div>
    </section>
  );
};

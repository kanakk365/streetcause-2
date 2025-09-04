import React from 'react';
import { HighlightCard } from '../ui/HighlightCard';

export const HighlightsSection: React.FC = () => {
  const highlights = [
    {
      icon: "/images/eh1.svg",
      title: "Live DJ & Music"
    },
    {
      icon: "/images/eh2.svg",
      title: "Traditional Garba/Dandiya"
    },
    {
      icon: "/images/eh3.svg",
      title: "Food & Refreshments"
    },
    {
      icon: "/images/eh4.svg",
      title: "Cultural Performances"
    }
  ];

  return (
    <section className="w-full h-[548px] shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] px-0 py-20 max-sm:h-auto max-sm:px-0 max-sm:py-[60px] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
      <header className="flex flex-col items-center gap-[30px] w-[775px] mt-0 mb-20 mx-auto">
        <h2 className="text-white text-[40px] font-bold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
          Event Highlights
        </h2>
        <p className="text-white text-2xl font-normal leading-6 tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-6">
          An unforgettable experience filled with energy and tradition.
        </p>
      </header>

      <div className="flex items-center gap-24 max-w-[1205px] mx-auto my-0 px-[118px] py-0 max-md:flex-wrap max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:flex-col max-sm:gap-10 max-sm:px-5 max-sm:py-0">
        {highlights.map((highlight, index) => (
          <HighlightCard
            key={index}
            icon={highlight.icon}
            title={highlight.title}
          />
        ))}
      </div>
    </section>
  );
};

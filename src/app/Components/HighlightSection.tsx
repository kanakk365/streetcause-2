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
    <section className="w-full h-[40rem] shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] px-0 py-20 max-sm:h-auto max-sm:px-4 max-sm:py-16 bg-[#800020]">
      <header className="flex flex-col items-center gap-7 w-full max-w-[48.4375rem] px-4 mt-0 mb-20 mx-auto">
        <h2 className="text-white text-4xl font-bold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
          Event Highlights
        </h2>
        <p className="text-white text-2xl font-normal leading-6 tracking-[0.03125rem] text-center max-sm:text-lg max-sm:leading-6">
          An unforgettable experience filled with energy and tradition.
        </p>
      </header>

      <div className="flex items-center gap-24 max-w-[75.3125rem] mx-auto my-0 px-28 py-0 max-md:flex-wrap max-md:gap-12 max-md:px-10 max-md:py-0 max-sm:flex-col max-sm:gap-8 max-sm:px-4 max-sm:py-0">
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

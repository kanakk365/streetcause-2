import React from 'react';

export const WhySection: React.FC = () => {
  return (
    <section className="w-full h-[29.75rem] px-0 py-20 max-sm:h-auto max-sm:px-0 max-sm:py-[3.75rem] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
      <div className="flex flex-col items-center gap-14 w-[76.75rem] mx-auto my-0 px-[6.625rem] py-0 max-sm:w-[95%] max-sm:gap-7 max-sm:px-5 max-sm:py-0">
        <h2 className="text-white text-4xl font-bold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
          Why This Event Matters
        </h2>
        <p className="text-white text-xl font-normal leading-[2.625rem] tracking-[0.03125rem] text-center max-sm:text-lg max-sm:leading-8">
          All funds raised will be used for the benefit of the NGO&apos;s objectives, including permanent projects, operational costs, executive salaries, office operations, growth initiatives &amp; digital upgrades for the betterment of the society at the discretion of the CEO&apos;s Office.
        </p>
      </div>
    </section>
  );
};

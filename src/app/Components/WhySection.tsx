import React from 'react';

export const WhySection: React.FC = () => {
  return (
    <section className="w-full h-[976px] shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] px-0 py-20 max-sm:h-auto max-sm:px-0 max-sm:py-[60px] bg-black">
      <div className="flex flex-col items-center gap-14 w-[1228px] mx-auto my-0 px-[106px] py-0 max-sm:w-[95%] max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
        <h2 className="text-white text-[40px] font-bold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
          Why This Event Matters
        </h2>
        <p className="text-white text-2xl font-normal leading-[42px] tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-8">
          All funds raised will be used for the benefit of the NGO&apos;s objectives, including permanent projects, operational costs, executive salaries, office operations, growth initiatives &amp; digital upgrades for the betterment of the society at the discretion of the CEO&apos;s Office.
        </p>
      </div>
    </section>
  );
};

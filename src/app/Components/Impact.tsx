import React from 'react';
import Image from 'next/image';
import { ImpactCard } from '../ui/ImpactCard';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      image: "/images/impact1.png",
      title: "500+ students educated",
      alt: "Students in classroom"
    },
    {
      image: "/images/impact2.png",
      title: "2000+ meals served",
      alt: "Community meal service"
    },
    {
      image: "/images/impact3.png",
      title: "1312+ Patients treated",
      alt: "Medical care being provided"
    }
  ];

  return (
    <section className="w-full h-[741px] shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] relative px-0 py-20 max-sm:h-auto max-sm:px-0 max-sm:py-[60px] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
      <Image
        src="/images/impactbg.svg"
        alt="Impact background"
        fill
        className="opacity-50 object-cover"
      />
      
      <div className="relative z-[1] mx-auto my-0 px-[141px] py-0 max-sm:px-5 max-sm:py-0">
        <header className="flex flex-col justify-center items-center gap-[30px] w-[643px] mt-0 mb-20 mx-auto max-sm:w-[95%] max-sm:mb-10">
          <h2 className="text-white text-[40px] font-bold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
            Your Impact with Street Cause
          </h2>
          <p className="text-white text-2xl font-normal leading-6 tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-6">
            Here&apos;s how your support changes lives.
          </p>
        </header>
        
        <div className="flex gap-[27px] w-full max-md:flex-col max-md:gap-[30px]">
          {impacts.map((impact, index) => (
            <ImpactCard
              key={index}
              image={impact.image}
              title={impact.title}
              alt={impact.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

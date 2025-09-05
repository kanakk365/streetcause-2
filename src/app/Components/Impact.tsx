import React from 'react';
import Image from 'next/image';
import { ImpactCard } from '../ui/ImpactCard';

export const ImpactSection: React.FC = () => {
  const impacts = [
    {
      image: "/images/impact1.png",
      title: "People impacted – 3 Million+",
      alt: "People impacted"
    },
    {
      image: "/images/impact2.png",
      title: "Animals impacted – 300+",
      alt: "Animals impacted"
    },
    {
      image: "/images/impact3.png",
      title: "Transformational projects – 50+",
      alt: "Transformational projects"
    },
    {
      image: "/images/impact4.png",
      title: "Total projects – 15,000+",
      alt: "Total projects"
    }
  ];

  return (
    <section className="w-full  relative px-0 py-20 max-sm:h-auto max-sm:px-4 max-sm:py-16 bg-[#082ca7]">
      <Image
        src="/images/impactbg.svg"
        alt="Impact background"
        fill
        className="opacity-50 object-cover"
      />
      
      <div className="relative z-[1] mx-auto my-0 px-[8.8125rem] py-0 max-sm:px-5 max-sm:py-0">
        <header className="flex flex-col justify-center items-center gap-7 w-[40.1875rem] mt-0 mb-20 mx-auto max-sm:w-[95%] max-sm:mb-10">
          <h2 className="text-white text-4xl font-bold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
            16 Years of Impact
          </h2>
        </header>
        
        <div className="grid grid-cols-2 justify-items-center gap-x-6 gap-y-16 w-full max-sm:grid-cols-1 max-sm:gap-x-4 max-sm:gap-y-8">
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

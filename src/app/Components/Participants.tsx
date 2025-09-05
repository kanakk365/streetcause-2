import React from 'react';
import Image from 'next/image';

export const ParticipantsSection: React.FC = () => {
  const participants = [
    {
      image: "/images/part1.png",
      alt: "Participant organization 1"
    },
    {
      image: "/images/part2.png",
      alt: "Participant organization 2"
    },
    {
      image: "/images/part3.png",
      alt: "Participant organization 3"
    },
    {
      image: "/images/part4.png",
      alt: "Participant organization 4"
    }
  ];

  return (
    <section className="px-0 py-20 max-sm:px-4 max-sm:py-16">
      <header className="flex flex-col justify-center items-center gap-7 w-full max-w-[67.125rem] mt-0 mb-20 mx-auto px-5 py-0 max-sm:w-[95%] max-sm:mb-10 max-sm:px-5 max-sm:py-0">
        <h2 className="text-black text-4xl font-bold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
          Our Proud Participants
        </h2>
        <p className="text-[rgba(0,0,0,0.49)] text-2xl font-normal leading-6 tracking-[0.03125rem] text-center max-sm:text-lg max-sm:leading-6">
          Institutions and divisions joining hands to make this Navratri celebration a success.
        </p>
      </header>
      
      <div className="flex items-center justify-center gap-7 w-full max-w-[75rem] h-[6.25rem] mx-auto my-0 px-5 py-0 max-lg:flex-wrap max-lg:gap-6 max-lg:h-auto max-lg:px-5 max-lg:py-0 max-sm:flex-col max-sm:px-0 max-sm:py-0 max-sm:h-auto max-sm:grid max-sm:grid-cols-2 max-sm:gap-6">
        {participants.map((participant, index) => (
          <Image
            key={index}
            src={participant.image}
            alt={participant.alt}
            width={180}
            height={70}
            className="shadow-[0_1rem_4rem_0_rgba(0,0,0,0.25)] object-contain flex-shrink-0 max-lg:w-[9.375rem] max-lg:h-[3.75rem] max-sm:w-full max-sm:max-w-[8rem] max-sm:h-12 max-sm:mx-auto"
          />
        ))}
      </div>
    </section>
  );
};

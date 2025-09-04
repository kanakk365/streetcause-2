import React from 'react';
import Image from 'next/image';

export const ParticipantsSection: React.FC = () => {
  const participants = [
    {
      image: "/participant-1.png",
      alt: "Participant organization 1"
    },
    {
      image: "/participant-2.png",
      alt: "Participant organization 2"
    },
    {
      image: "/participant-3.png",
      alt: "Participant organization 3"
    },
    {
      image: "/participant-4.png",
      alt: "Participant organization 4"
    }
  ];

  return (
    <section className="px-0 py-20 max-sm:px-0 max-sm:py-[60px]">
      <header className="flex flex-col justify-center items-start gap-[30px] w-[1074px] mt-0 mb-20 mx-auto px-[183px] py-0 max-sm:w-[95%] max-sm:mb-10 max-sm:px-5 max-sm:py-0">
        <h2 className="text-black text-[40px] font-bold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
          Our Proud Participants
        </h2>
        <p className="text-[rgba(0,0,0,0.49)] text-2xl font-normal leading-6 tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-6">
          Institutions and divisions joining hands to make this Navratri celebration a success.
        </p>
      </header>
      
      <div className="flex items-center gap-[50px] w-[1589px] h-[100px] overflow-x-auto mx-auto my-0 px-20 py-0 max-md:flex-wrap max-md:gap-[30px] max-md:h-auto max-md:px-10 max-md:py-0 max-sm:flex-col max-sm:gap-5 max-sm:px-5 max-sm:py-0">
        {participants.map((participant, index) => (
          <Image
            key={index}
            src={participant.image}
            alt={participant.alt}
            width={282}
            height={100}
            className="shadow-[0_4px_16px_0_rgba(0,0,0,0.25)] object-contain max-sm:w-full max-sm:max-w-[300px] max-sm:h-20"
          />
        ))}
      </div>
    </section>
  );
};

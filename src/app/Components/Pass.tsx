"use client"
import { EventCard } from '../ui/EventCard';
import React, { useState } from 'react';
import BuyPassModal from './BuyPassModal';
import TicketModal from './TicketModal';

type TicketData = {
  passPurchaseName: string;
  passType: string;
  passId: string;
  mobileNumber: string;
  email: string;
  memberType: string;
  paymentMode: string;
  qrCode: string;
};

export const PassSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPassType, setSelectedPassType] = useState<string | undefined>(undefined);
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [showTicket, setShowTicket] = useState(false);

  const handleBuyPass = (passType: string) => {
    setSelectedPassType(passType);
    setIsModalOpen(true);
  };
  const handleSuccess = (ticket: TicketData) => {
    setTicketData(ticket);
    setShowTicket(true);
  };

  const passes = [
    {
      title: "Dandiya Dhoom (General)",
      description: "Entry for one, Regular Access",
      price: "₹499",
      image: "/images/pass1.png"
    },
    {
      title: "Garba Gold (VIP)",
      description: "Entry for one, Front Row Access",
      price: "₹999",
      image: "/images/pass2.png"
    }
  ];

  return (
    <section id="buy-pass" className="px-0 py-20 max-sm:px-0 max-sm:py-[3.75rem] bg-[#f8ece4]">
      <header className="flex flex-col items-center gap-7 w-[40.375rem] mt-0 mb-20 mx-auto max-sm:w-[95%] max-sm:mb-10">
        <h2 className="text-black text-4xl font-bold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
          Choose Your Pass
        </h2>
        <p className="text-[rgba(0,0,0,0.49)] text-2xl font-normal leading-6 tracking-[0.03125rem] text-center max-sm:text-lg max-sm:leading-6">
          Select from multiple ticket options tailored for you.
        </p>
      </header>
      
      <div className="flex justify-center items-center gap-10 mx-auto my-0 px-[15.0625rem] py-0 max-xl:px-[8rem] max-xl:gap-8 max-lg:px-8 max-lg:gap-6 lg:px-[10rem] max-md:flex-col max-md:gap-8 max-md:px-10 max-md:py-0 max-sm:px-4 max-sm:py-0 max-sm:gap-6 max-sm:flex-col">
        {passes.map((pass, index) => (
          <EventCard
            key={index}
            title={pass.title}
            description={pass.description}
            price={pass.price}
            image={pass.image}
            onBuyNow={() => handleBuyPass(pass.title)}
          />
        ))}
      </div>

      <BuyPassModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialPassType={selectedPassType}
        onSuccess={handleSuccess}
      />
      <TicketModal
        isOpen={showTicket}
        onClose={() => setShowTicket(false)}
        data={ticketData}
      />
    </section>
  );
};

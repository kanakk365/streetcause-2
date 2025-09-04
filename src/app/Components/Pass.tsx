"use client"
import { EventCard } from '../ui/EventCard';

export const PassSection: React.FC = () => {
  const handleBuyPass = (passType: string) => {
    console.log(`Buying ${passType} pass`);
    // Handle ticket purchase logic
  };

  const passes = [
    {
      title: "Dandiya Dhoom (General)",
      description: "Entry for one, access to all event activities.",
      price: "₹499",
      image: "/images/pass1.png"
    },
    {
      title: "Garba Gold (VIP)",
      description: "Front-row access, free snacks, photo zone.",
      price: "₹999",
      image: "/images/pass2.png"
    }
  ];

  return (
    <section className="px-0 py-20 max-sm:px-0 max-sm:py-[60px] bg-[#f8ece4]">
      <header className="flex flex-col items-center gap-[30px] w-[646px] mt-0 mb-20 mx-auto max-sm:w-[95%] max-sm:mb-10">
        <h2 className="text-black text-[40px] font-bold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
          Choose Your Pass
        </h2>
        <p className="text-[rgba(0,0,0,0.49)] text-2xl font-normal leading-6 tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-6">
          Select from multiple ticket options tailored for you.
        </p>
      </header>
      
      <div className="flex justify-center items-center gap-10  mx-auto my-0 px-[241px] py-0 max-md:flex-col max-md:gap-[30px] max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
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
    </section>
  );
};

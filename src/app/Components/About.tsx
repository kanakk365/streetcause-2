import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="px-0 py-20 bg-[#fdf3eb] max-sm:py-16 max-sm:px-4">
      <header className="flex flex-col justify-center items-center gap-7 w-[43.0625rem] mt-0 mb-20 mx-auto max-sm:w-[95%] max-sm:mb-10">
        <h2 className="text-black text-4xl font-semibold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
          About the Event
        </h2>
        <p className="text-[rgba(0,0,0,0.49)] text-xl font-semibold leading-6 tracking-[0.03125rem] text-center max-sm:text-lg max-sm:leading-6">
          Join Street Cause for Navratri Nirvana, an energetic Dandiya night where celebration meets purpose. Dance for a difference, come for the festive fun and contribute to social development with every step.
        </p>
      </header>
      
      <div className="flex justify-center items-start gap-12 c mx-auto my-0 px-28 py-0 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:px-0 max-sm:py-0 max-sm:gap-8 max-sm:flex-col">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 w-[37.0625rem] max-md:w-full max-md:justify-center max-sm:grid-cols-1 max-sm:gap-4 max-sm:w-full">
          <Image
            src="/images/e1.png"
            alt="Navratri celebration moment 1"
            width={283}
            height={238}
            className="w-[17.6875rem] h-[14.875rem] object-cover rounded-xl max-sm:w-full max-sm:h-[11.25rem]"
          />
          <Image
            src="/images/e2.png"
            alt="Navratri celebration moment 2"
            width={283}
            height={238}
            className="w-[17.6875rem] h-[14.875rem] object-cover rounded-xl max-sm:w-full max-sm:h-[11.25rem]"
          />
          <Image
            src="/images/e3.png"
            alt="Navratri celebration panoramic view"
            width={593}
            height={238}
            className="col-span-2 w-[37.0625rem] h-[14.875rem] object-cover rounded-xl max-sm:w-full max-sm:h-[11.25rem]"
          />
        </div>
        
        <aside className="flex w-[39.75rem] h-[31.5625rem] flex-col justify-center items-center gap-2.5 bg-[#FDF3EB] p-10 rounded-xl max-md:w-full max-md:max-w-[37.5rem] max-md:mx-auto max-md:my-0 max-sm:h-auto max-sm:p-6 max-sm:gap-4 max-sm:w-full max-sm:rounded-2xl">
          <div className="flex flex-col items-start gap-10 w-[31.375rem] p-2.5 max-sm:w-full max-sm:gap-5 mb-10">
            <div className="flex items-start gap-3 w-full max-sm:gap-4 max-sm:items-start">
              <div className="flex w-[2.5625rem] h-[2.5625rem] justify-center items-center gap-2.5 shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] rounded-[5.9375rem] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-xl font-semibold leading-10 tracking-[0.03125rem] max-sm:text-lg max-sm:leading-6 max-sm:flex-1">
                Date → 20th September 2025
              </p>
            </div>
            
            <div className="flex items-start gap-3 w-full max-sm:gap-4 max-sm:items-start">
              <div className="flex w-[2.5625rem] h-[2.5625rem] justify-center items-center gap-2.5 shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] rounded-[5.9375rem] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-xl font-semibold leading-10 tracking-[0.03125rem] max-sm:text-lg max-sm:leading-6 max-sm:flex-1">
                Time → 6:00 PM onwards
              </p>
            </div>
            
            <div className="flex items-start gap-3 w-full max-sm:gap-4 max-sm:items-start">
              <div className="flex w-[2.5625rem] h-[2.5625rem] justify-center items-center gap-2.5 shadow-[0_1rem_4rem_0_rgba(255,255,255,0.25)] rounded-[5.9375rem] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-xl font-semibold leading-10 tracking-[0.03125rem] max-sm:text-lg max-sm:leading-6 max-sm:flex-1">
                Venue → Nampally Exhibition Grounds
              </p>
            </div>
          </div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.795!2d78.4728!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e2c6b7f1b7%3A0x2c6b7f1b7f1b7f1b!2sNampally%20Exhibition%20Grounds!5e0!3m2!1sen!2sin!4v1694820000000!5m2!1sen!2sin"
            width="100%"
            height="151"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[9.4375rem] w-full border rounded-xl border-solid border-[#CECECE]"
            title="Event venue location"
          ></iframe>
        </aside>
      </div>
    </section>
  );
};

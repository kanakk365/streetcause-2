import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="px-0 py-20 bg-[#fdf3eb]">
      <header className="flex flex-col justify-center items-center gap-[30px] w-[689px] mt-0 mb-20 mx-auto max-sm:w-[95%] max-sm:mb-10">
        <h2 className="text-black text-[40px] font-semibold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
          About the Event
        </h2>
        <p className="text-[rgba(0,0,0,0.49)] text-xl font-semibold leading-6 tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-6">
          Dance, enjoy, and make a difference with Street Cause
        </p>
      </header>
      
      <div className="flex justify-center items-start gap-[50px] c mx-auto my-0 px-[118px] py-0 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
        <div className="grid grid-cols-2 gap-x-[27px] gap-y-[29px] w-[593px] max-md:w-full max-md:justify-center max-sm:gap-[15px]">
          <Image
            src="/images/e1.png"
            alt="Navratri celebration moment 1"
            width={283}
            height={238}
            className="w-[283px] h-[238px] object-cover rounded-xl max-sm:w-full max-sm:h-[180px]"
          />
          <Image
            src="/images/e2.png"
            alt="Navratri celebration moment 2"
            width={283}
            height={238}
            className="w-[283px] h-[238px] object-cover rounded-xl max-sm:w-full max-sm:h-[180px]"
          />
          <Image
            src="/images/e3.png"
            alt="Navratri celebration panoramic view"
            width={593}
            height={238}
            className="col-span-2 w-[593px] h-[238px] object-cover rounded-xl max-sm:w-full max-sm:h-[180px]"
          />
        </div>
        
        <aside className="flex w-[636px] h-[505px] flex-col justify-center items-center gap-2.5 bg-[#FDF3EB] p-10 rounded-xl max-md:w-full max-md:max-w-[600px] max-md:mx-auto max-md:my-0 max-sm:h-auto max-sm:p-5">
          <div className="flex flex-col items-start gap-10 w-[502px] p-2.5 max-sm:w-full max-sm:gap-5 mb-10">
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-[41px] h-[41px] justify-center items-center gap-2.5 shadow-[0_4px_16px_0_rgba(255,255,255,0.25)]  rounded-[95px] bg-gradient-to-b from-[#a00357] to-[#6b022e]">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-xl font-semibold leading-10 tracking-[0.5px] max-sm:text-lg max-sm:leading-7">
                Date → 25th October 2025
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-[41px] h-[41px] justify-center   items-center gap-2.5 shadow-[0_4px_16px_0_rgba(255,255,255,0.25)]  rounded-[95px] bg-gradient-to-b from-[#a00357] to-[#6b022e] ">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-xl font-semibold leading-10 tracking-[0.5px] max-sm:text-lg max-sm:leading-7">
                Time → 7:00 PM onwards
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full">
              <div className="flex w-[41px] h-[41px] justify-center items-center gap-2.5 shadow-[0_4px_16px_0_rgba(255,255,255,0.25)]  rounded-[95px]  bg-gradient-to-b from-[#a00357] to-[#6b022e]">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <p className="text-black text-xl font-semibold leading-10 tracking-[0.5px] max-sm:text-lg max-sm:leading-7">
                Venue → ABC Grounds, Hyderabad
              </p>
            </div>
          </div>
          
          <Image
            src="/images/footermap.png"
            alt="Event venue map"
            width={596}
            height={151}
            className="h-[151px] w-full border object-cover rounded-xl border-solid border-[#CECECE]"
          />
        </aside>
      </div>
    </section>
  );
};

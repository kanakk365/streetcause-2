import React from 'react';
import Image from 'next/image';

export const WhyFooterSection: React.FC = () => {
  const socialIcons = [
    {
      name: "X (Twitter)",
      icon: "/images/x.svg"
    },
    {
      name: "Facebook",
      icon: "/images/facebook.svg"
    },
    {
      name: "Instagram",
      icon: "/images/insta.svg"
    }
  ];

  const quickLinks = [
    "Home", "About Us", "Our Projects", "News & Updates", "Get Involved", "Contact Us"
  ];

  const getInvolvedLinks = [
    "Volunteer With Us", "Donate", "Become a Partner"
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#a00357] to-[#6b022e]">
      {/* Why Section Content */}
      <div className="w-full px-0 py-20 max-sm:h-auto max-sm:px-0 max-sm:py-[60px]">
        <div className="flex flex-col items-center gap-14 w-[1228px] mx-auto my-0 px-[106px] py-0 max-sm:w-[95%] max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
          <h2 className="text-white text-[40px] font-bold leading-10 tracking-[0.5px] text-center max-sm:text-[32px] max-sm:leading-9">
            Why This Event Matters
          </h2>
          <p className="text-white text-xl font-normal leading-[42px] tracking-[0.5px] text-center max-sm:text-lg max-sm:leading-8">
            All funds raised will be used for the benefit of the NGO&apos;s objectives, including permanent projects, operational costs, executive salaries, office operations, growth initiatives &amp; digital upgrades for the betterment of the society at the discretion of the CEO&apos;s Office.
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="w-full  pt-20 pb-12 px-0 max-sm:pt-[60px] max-sm:px-0">
        <div className="flex gap-[50px] max-w-[1378px] mx-auto my-0 px-[62px] py-0 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
          <div className="flex flex-col items-start gap-6 w-[429px] max-md:w-full">
            <Image
              src="/images/logo.png"
              alt="Street Cause Logo"
              width={230}
              height={69}
              className="object-contain max-sm:w-[200px] max-sm:h-auto"
            />
            <p className="text-white text-lg font-normal leading-[26px] max-sm:text-base max-sm:leading-6">
              A youth-driven NGO dedicated to community service, empowerment, and creating lasting change across India.
            </p>

            <div className="flex flex-col items-start gap-[3px]">
              <h3 className="text-white text-xl font-bold capitalize px-0 py-2.5">
                social media
              </h3>
              <div className="flex items-start gap-[25px] max-sm:gap-[15px]">
                {socialIcons.map((social, index) => (
                  <button
                    key={index}
                    className="hover:opacity-80 transition-opacity w-13 h-13 rounded-full bg-[#b97c98] bg-opacity-20 flex items-center justify-center p-2"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <nav className="flex flex-col items-start gap-[26px] w-[183px] max-md:w-full">
            <h3 className="text-white text-2xl font-normal max-sm:text-xl">
              Quick Links
            </h3>
            <ul className="flex flex-col justify-end items-start gap-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white text-sm font-normal cursor-pointer hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col items-start gap-[26px] w-[183px] max-md:w-full">
            <h3 className="text-white text-2xl font-normal max-sm:text-xl">
              Get Involved
            </h3>
            <ul className="flex flex-col justify-end items-start gap-6">
              {getInvolvedLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white text-sm font-normal cursor-pointer hover:text-gray-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-[26px] w-[363px] max-md:w-full mt-16">

            <address className="text-white text-sm font-normal leading-[25px] not-italic">
              Ft.No.205(Moghal Emami-Complex),St.No.7, Veer Nagar, Chintal basthi road,khairtabad, Hyderabad, TS.
            </address>

            <div className="flex items-center gap-[9px] max-sm:flex-col max-sm:items-start max-sm:gap-2.5">
              <div className="flex justify-center items-center gap-2.5 opacity-60 pl-0 pr-5 pt-2.5 pb-1.5 border-r-white border-r border-solid max-sm:pt-1.5 max-sm:pb-2.5 max-sm:px-0 max-sm:border-r-[none] max-sm:border-b-white max-sm:border-b max-sm:border-solid">
                <a
                  href="tel:+919666683722"
                  className="text-white text-sm font-normal leading-[25px] hover:text-gray-300 transition-colors"
                >
                  +919666683722
                </a>
              </div>
              <div className="flex justify-center items-center gap-2.5 pl-2.5 pr-5 py-1.5 max-sm:pt-2.5 max-sm:pb-1.5 max-sm:px-0">
                <a
                  href="mailto:streetcause@gmail.com"
                  className="text-white text-sm font-normal leading-[25px] hover:text-gray-300 transition-colors"
                >
                  streetcause@gmail.com
                </a>
              </div>
            </div>

            <Image
              src="/images/footermap.png"
              alt="Office location map"
              width={360}
              height={170}
              className="object-cover rounded-xl max-sm:w-full max-sm:h-[150px]"
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

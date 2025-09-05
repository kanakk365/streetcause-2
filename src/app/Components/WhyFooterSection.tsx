import React from 'react';
import Image from 'next/image';

export const WhyFooterSection: React.FC = () => {
  const socialIcons = [
    {
      name: "Instagram",
      icon: "/images/insta.svg",
      url: "https://www.instagram.com/streetcause.hyderabad?igsh=MWcxZXpoMGNndnp1dg=="
    },
    {
      name: "LinkedIn",
      icon: "/images/linkedin.svg",
      url: "https://www.linkedin.com/in/street-cause-hyderabad-5b4a5b369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "YouTube",
      icon: "/images/youtube.svg",
      url: "https://youtube.com/@streetcause?si=kKDl7GhoKxEtpwIc"
    }
  ];

  const quickLinks = [
    { name: "Home", url: "https://streetcause.org/" },
    { name: "About Us", url: "https://streetcause.org/aboutus" },
    { name: "News & Updates", url: "https://streetcause.org/sc_updates" },
    { name: "Contact Us", url: "https://streetcause.org/contactus" }
  ];

  const getInvolvedLinks = [
    { name: "Donate", url: "https://streetcause.org/donate/" },
    { name: "Volunteer With Us", url: "#" },
    { name: "Become a Partner", url: "#" }
  ];

  return (
    <section className="w-full bg-[#082ca7]">
      {/* Why Section Content */}
      <div className="w-full px-0 py-20 max-sm:h-auto max-sm:px-0 max-sm:py-[3.75rem]">
        <div className="flex flex-col items-center gap-14 w-[76.75rem] mx-auto my-0 px-[6.625rem] py-0 max-sm:w-[95%] max-sm:gap-7 max-sm:px-5 max-sm:py-0">
          <h2 className="text-white text-4xl font-bold leading-10 tracking-[0.03125rem] text-center max-sm:text-3xl max-sm:leading-9">
            Why This Event Matters
          </h2>
          <p className="text-white text-xl font-normal leading-[2.625rem] tracking-[0.03125rem] text-center max-sm:text-lg max-sm:leading-8">
            All funds raised will be used for the benefit of the NGO&apos;s objectives, including permanent projects, operational costs, executive salaries, office operations, growth initiatives &amp; digital upgrades for the betterment of the society at the discretion of the CEO&apos;s Office.
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="w-full pt-20 pb-12 px-0 max-sm:pt-[3.75rem] max-sm:px-0">
        <div className="flex gap-12 max-w-[86.125rem] mx-auto my-0 px-[3.875rem] py-0 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:gap-8 max-sm:px-4 max-sm:py-0 max-sm:flex-col">
          <div className="flex flex-col items-start gap-6 w-[26.8125rem] max-md:w-full">
            <div className="flex items-center gap-4 max-sm:gap-2">
              <Image
                src="/images/logol.png"
                alt="Street Cause Logo"
                width={240}
                height={72}
                className="object-contain max-sm:w-48 max-sm:h-auto"
              />
              <Image
                src="/images/logor.png"
                alt="Partner Logo"
                width={100}
                height={100}
                className="object-contain max-sm:w-20 max-sm:h-20"
              />
            </div>
            <p className="text-white text-lg font-normal leading-[1.625rem] max-sm:text-base max-sm:leading-6">
              Street Cause is a leading student-run NGO that empowers students to create tangible community impact, turning passion into action and building the changemakers of tomorrow.
            </p>

            <div className="flex flex-col items-start gap-[0.1875rem]">
              <h3 className="text-white text-xl font-bold capitalize px-0 py-2.5">
                social media
              </h3>
              <div className="flex items-start gap-6 max-sm:gap-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity w-13 h-13 rounded-full bg-[#ffbd00] bg-opacity-20 flex items-center justify-center p-2"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <nav className="flex flex-col items-start gap-[1.625rem] w-[11.4375rem] max-md:w-full">
            <h3 className="text-white text-2xl font-normal max-sm:text-xl">
              Quick Links
            </h3>
            <ul className="flex flex-col justify-end items-start gap-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm font-normal cursor-pointer hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-col items-start gap-[1.625rem] w-[11.4375rem] max-md:w-full">
            <h3 className="text-white text-2xl font-normal max-sm:text-xl">
              Get Involved
            </h3>
            <ul className="flex flex-col justify-end items-start gap-6">
              {getInvolvedLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target={link.url !== "#" ? "_blank" : "_self"}
                    rel={link.url !== "#" ? "noopener noreferrer" : undefined}
                    className="text-white text-sm font-normal cursor-pointer hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-start gap-[1.625rem] w-[22.6875rem] max-md:w-full mt-16">

            <address className="text-white text-sm font-normal leading-[1.5625rem] not-italic">
              Ft.No.205(Moghal Emami-Complex),St.No.7, Veer Nagar, Chintal basthi road,khairtabad, Hyderabad, TS.
            </address>

            <div className="flex items-center gap-[0.5625rem] max-sm:flex-col max-sm:items-start max-sm:gap-2.5">
              <div className="flex justify-center items-center gap-2.5 opacity-60 pl-0 pr-5 pt-2.5 pb-1.5 border-r-white border-r border-solid max-sm:pt-1.5 max-sm:pb-2.5 max-sm:px-0 max-sm:border-r-[none] max-sm:border-b-white max-sm:border-b max-sm:border-solid">
                <a
                  href="tel:+919666683722"
                  className="text-white text-sm font-normal leading-[1.5625rem] hover:text-gray-300 transition-colors"
                >
                  +919666683722
                </a>
              </div>
              <div className="flex justify-center items-center gap-2.5 pl-2.5 pr-5 py-1.5 max-sm:pt-2.5 max-sm:pb-1.5 max-sm:px-0">
                <a
                  href="mailto:streetcause@gmail.com"
                  className="text-white text-sm font-normal leading-[1.5625rem] hover:text-gray-300 transition-colors"
                >
                  streetcause@gmail.com
                </a>
              </div>
              <div className="flex justify-center items-center gap-2.5 pl-2.5 pr-5 py-1.5 max-sm:pt-2.5 max-sm:pb-1.5 max-sm:px-0">
                <a
                  href="https://streetcause.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-normal leading-[1.5625rem] hover:text-gray-300 transition-colors"
                >
                  streetcause.org
                </a>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=17.409144846633414,78.46033230372608&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="170"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl max-sm:w-full max-sm:h-[9.375rem]"
              title="Office location"
            ></iframe>
          </div>
        </div>
      </footer>
    </section>
  );
};

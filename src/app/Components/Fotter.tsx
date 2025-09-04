import React from 'react';
import Image from 'next/image';

export const FooterSection: React.FC = () => {


  const socialIcons = [
    {
      name: "X (Twitter)",
      icon: `<svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 44px; height: 42px; border-radius: 75px; background: rgba(255, 255, 255, 0.48); padding: 31.844px 32.682px; cursor: pointer">
        <rect y="0.787109" width="44" height="41.693" rx="20.8465" fill="white" fill-opacity="0.48"/>
        <path d="M28.901 10.7871H32.581L24.541 19.9771L34 32.4801H26.594L20.794 24.8961L14.156 32.4801H10.474L19.074 22.6501L10 10.7881H17.594L22.837 17.7201L28.901 10.7871ZM27.61 30.2781L19.5 21.134L14.298 12.8741L27.61 30.2781Z" fill="white"/>
      </svg>`
    },
    {
      name: "Twitter",
      icon: `<svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 44px; height: 42px; border-radius: 75px; background: rgba(255, 255, 255, 0.48); padding: 31.844px 32.682px; cursor: pointer">
        <rect y="0.787109" width="42" height="41.501" rx="20.7505" fill="white" fill-opacity="0.48"/>
        <path d="M16.539 31.2882C25.596 31.2882 30.5505 23.7836 30.5505 17.2871C30.5505 17.0771 30.5505 16.8641 30.5415 16.6541C31.5061 15.9559 32.3386 15.0914 33 14.1011C32.099 14.4984 31.1441 14.7603 30.1665 14.8781C31.1963 14.2626 31.9676 13.2941 32.337 12.1526C31.3695 12.7258 30.3105 13.1282 29.2065 13.3421C28.4643 12.5517 27.4821 12.028 26.4121 11.8523C25.3422 11.6765 24.2441 11.8585 23.288 12.3701C22.3319 12.8816 21.5712 13.6941 21.1237 14.6817C20.6761 15.6694 20.5668 16.777 20.8125 17.8332C18.8546 17.735 16.9392 17.2264 15.1906 16.3403C13.4419 15.4542 11.899 14.2104 10.662 12.6896C10.034 13.7743 9.84236 15.0573 10.126 16.278C10.4096 17.4988 11.1472 18.5659 12.189 19.2626C11.4083 19.2361 10.6448 19.0265 9.96 18.6506V18.7181C9.96135 19.8544 10.355 20.9553 11.0743 21.8348C11.7937 22.7143 12.7946 23.3185 13.908 23.5452C13.4854 23.6616 13.0488 23.7196 12.6105 23.7177C12.3015 23.7186 11.9931 23.69 11.6895 23.6322C12.0042 24.6102 12.6169 25.4654 13.4419 26.0779C14.2668 26.6903 15.2627 27.0294 16.29 27.0477C14.5448 28.4184 12.3891 29.1618 10.17 29.1582C9.77898 29.1598 9.38823 29.1373 9 29.0907C11.2523 30.5265 13.8679 31.289 16.539 31.2882Z" fill="white"/>
      </svg>`
    },
    {
      name: "Facebook",
      icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 44px; height: 42px; border-radius: 75px; background: rgba(255, 255, 255, 0.48); padding: 31.844px 32.682px; cursor: pointer">
        <rect y="0.787109" width="42.4" height="41" rx="20.5" fill="white" fill-opacity="0.48"/>
        <path d="M18.398 30.7871H22.398V22.7771H26.002L26.398 18.7971H22.398V16.7871C22.398 16.5219 22.5034 16.2675 22.6909 16.08C22.8784 15.8925 23.1328 15.7871 23.398 15.7871H26.398V11.7871H23.398C22.0719 11.7871 20.8001 12.3139 19.8625 13.2516C18.9248 14.1893 18.398 15.461 18.398 16.7871V18.7971H16.398L16.002 22.7771H18.398V30.7871Z" fill="white"/>
      </svg>`
    },
    {
      name: "Instagram",
      icon: `<svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 44px; height: 42px; border-radius: 75px; background: rgba(255, 255, 255, 0.48); padding: 31.844px 32.682px; cursor: pointer">
        <g clip-path="url(#clip0_64_164)">
          <rect x="0.399994" y="0.787109" width="42" height="41" rx="20.5" fill="white" fill-opacity="0.48"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6 9.28711C14.6904 9.28711 12.8591 10.0457 11.5088 11.3959C10.1586 12.7462 9.39999 14.5776 9.39999 16.4871L9.39999 26.0871C9.39999 27.9967 10.1586 29.828 11.5088 31.1783C12.8591 32.5285 14.6904 33.2871 16.6 33.2871H26.2C28.1096 33.2871 29.9409 32.5285 31.2912 31.1783C32.6414 29.828 33.4 27.9967 33.4 26.0871V16.4871C33.4 14.5776 32.6414 12.7462 31.2912 11.3959C29.9409 10.0457 28.1096 9.28711 26.2 9.28711H16.6ZM15.8 21.2871C15.8 19.8019 16.39 18.3775 17.4402 17.3273C18.4904 16.2771 19.9148 15.6871 21.4 15.6871C22.8852 15.6871 24.3096 16.2771 25.3598 17.3273C26.41 18.3775 27 19.8019 27 21.2871C27 22.7723 26.41 24.1967 25.3598 25.2469C24.3096 26.2971 22.8852 26.8871 21.4 26.8871C19.9148 26.8871 18.4904 26.2971 17.4402 25.2469C16.39 24.1967 15.8 22.7723 15.8 21.2871ZM27 15.6871H28.6V14.0871H27V15.6871Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_64_164">
            <rect x="0.399994" y="0.787109" width="42" height="41" rx="20.5" fill="white"/>
          </clipPath>
        </defs>
      </svg>`
    }
  ];

  const quickLinks = [
    "Home", "About Us", "Our Projects", "News & Updates", "Get Involved", "Contact Us"
  ];

  const getInvolvedLinks = [
    "Volunteer With Us", "Donate", "Become a Partner"
  ];

  return (
    <footer className="w-full shadow-[0_4px_16px_0_rgba(255,255,255,0.25)] pt-20 pb-12 px-0 max-sm:pt-[60px] max-sm:pb-10 max-sm:px-0 bg-black">
      <div className="flex gap-[50px] max-w-[1378px] mx-auto my-0 px-[62px] py-0 max-md:flex-col max-md:gap-10 max-md:px-10 max-md:py-0 max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
        <div className="flex flex-col items-start gap-6 w-[429px] max-md:w-full">
          <Image
            src="/street-cause-logo.png"
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
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                  dangerouslySetInnerHTML={{ __html: social.icon }}
                />
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
        
        <div className="flex flex-col items-start gap-[26px] w-[363px] max-md:w-full">
          <h3 className="text-white text-2xl font-normal max-sm:text-xl">
            Get in touch
          </h3>
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
            src="/office-location-map.jpg"
            alt="Office location map"
            width={360}
            height={170}
            className="object-cover rounded-xl max-sm:w-full max-sm:h-[150px]"
          />
        </div>
      </div>
      
      <div className="w-full h-12 flex justify-center items-center bg-[rgba(0,0,0,0.16)] mt-12 max-sm:h-10 max-sm:mt-[30px]">
        <p className="text-white text-sm font-normal leading-[25px] max-sm:text-xs max-sm:text-center max-sm:px-5 max-sm:py-0">
          © 2025 Street Cause. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

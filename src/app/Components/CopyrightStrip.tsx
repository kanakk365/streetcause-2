import React from 'react';

export const CopyrightStrip: React.FC = () => {
  return (
    <div className="w-full h-12 flex justify-center items-center bg-[#800020] max-sm:h-10">
      <p className="text-white text-sm font-normal leading-[1.5625rem] max-sm:text-xs max-sm:text-center max-sm:px-5 max-sm:py-0">
        © 2025 Street Cause. All Rights Reserved.
      </p>
    </div>
  );
};

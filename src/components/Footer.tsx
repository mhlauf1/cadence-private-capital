import React from "react";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse gap-y-6 md:flex-row items-center px-8 md:px-20 py-12 md:py-6">
      <div className="flex flex-row items-center  flex-grow flex-1  gap-1">
        <p className="text-neutral-500  text-xs md:text-sm text-center md:text-left">
          &copy; Cadence Private Capital 2024. All rights reserved.
        </p>
      </div>

      <div className="flex-grow text-neutral-500 flex-1 text-xs md:text-sm text-center">
        <a href="mailto:info@cadenceprivatecapital.com">
          info@cadenceprivatecapital.com
        </a>
      </div>
      <div className="flex-grow flex-1 flex justify-end">
        <Image
          src="/cpc-footer-logo.png"
          alt="Footer logo"
          className="w-[120px] h-[90px] md:w-[100px] md:h-[75px]"
          width={90}
          height={70}
        />
      </div>
    </footer>
  );
};

export default Footer;

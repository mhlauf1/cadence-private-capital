import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse gap-y-6 md:flex-row items-center px-8 md:px-20 py-10 md:py-6">
      <div className="flex flex-col items-center md:items-start gap-1 flex-1">
        <p className="text-neutral-500  text-xs  text-center md:text-left">
          &copy; Cadence Private Capital 2024. All rights reserved.
        </p>
        <p className="text-neutral-500  text-xs  text-center md:text-left">
          Designed and developed by{" "}
          <a
            href="https://www.lauf.co"
            target="_blank"
            className="font-semibold"
          >
            Lauf.
          </a>
        </p>
      </div>

      <div className="flex-grow text-neutral-500 flex-1 text-xs  text-center">
        <a href="mailto:info@cadenceprivatecapital.com">
          info@cadenceprivatecapital.com
        </a>
      </div>
      <div className="flex-grow flex-1 flex justify-end">
        <Image
          src="/cpc-blue-logo.png"
          alt="Footer logo"
          className="w-[120px] h-[90px] md:w-[90px] md:h-[70px]"
          width={90}
          height={70}
        />
      </div>
    </footer>
  );
};

export default Footer;

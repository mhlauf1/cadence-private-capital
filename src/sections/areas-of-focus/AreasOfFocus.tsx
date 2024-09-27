import React from "react";
import { FaHardHat, FaShoppingCart } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import AnimatedWrapper from "@/components/AnimatedWrapper";

const cardData = [
  {
    id: 0,
    text: "Industrial / Infrastructure Services",
    Icon: FaHardHat, // Pass the icon component reference
  },
  {
    id: 1,
    text: "Consumer",
    Icon: FaShoppingCart,
  },
  {
    id: 2,
    text: "Niche Manufacturing",
    Icon: MdOutlinePrecisionManufacturing,
  },
];

const Card = ({ text, Icon }: { text: string; Icon: React.ElementType }) => {
  return (
    <AnimatedWrapper animationType="slide-in-left" delay={600}>
      <div className="bg-[#fefefe] py-12 md:w-[400px] p-6 rounded-lg flex flex-col gap-8 items-center shadow-md">
        <div className="  bg-blue-200 w-[125px] h-[125px] flex items-center justify-center py-8 rounded-full">
          <Icon className="text-6xl" color="#0AA0F2" />
        </div>
        {/* Render the icon component dynamically */}
        <p>{text}</p>
      </div>
    </AnimatedWrapper>
  );
};

const AreasOfFocus = () => {
  return (
    <section className="px-4 md:px-20 max-w-screen-2xl mx-auto pb-20 pt-24 lg:pb-28 lg:pt-48">
      <div className="flex flex-col gap-8 items-center">
        <AnimatedWrapper delay={200}>
          <span className="uppercase text-sm tracking-wide text-neutral-500">
            Areas of Focus
          </span>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
          <h3 className="text-2xl md:text-3xl text-center lg:w-[42ch] leading-[150%] text-neutral-700">
            Cadence has identified the areas of focus below, but will consider
            investments in a wide variety of industries
          </h3>
        </AnimatedWrapper>

        <section className="relative mt-12 md:mt-0 flex justify-center items-center md:h-[40vh] md:w-[50vw] mx-auto md:bg-blue-50">
          <div className="flex flex-col lg:flex-row gap-12">
            {cardData.map((item) => (
              <div key={item.id}>
                <Card text={item.text} Icon={item.Icon} />{" "}
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AreasOfFocus;

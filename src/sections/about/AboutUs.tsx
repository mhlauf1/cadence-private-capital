import AnimatedWrapper from "@/components/AnimatedWrapper";

const AboutUs = () => {
  return (
    <section className="px-8 md:px-24 max-w-screen-2xl mx-auto pt-28 pb-16 md:pt-28 md:pb-24">
      <div className="flex flex-col">
        {/* <AnimatedWrapper delay={200}> */}
        <span className="uppercase text-sm tracking-wide text-neutral-500">
          About Us
        </span>
        {/* </AnimatedWrapper> */}
        {/* <AnimatedWrapper delay={200}> */}
        <h2 className="mt-4 text-neutral-700 text-2xl sm:text-3xl md:text-4xl tracking-tight">
          Partnership for Growth
        </h2>
        {/* </AnimatedWrapper> */}

        <div className="flex mt-8 md:mt-8 lg:gap-20 flex-col md:flex-row">
          <div className="flex flex-1">
            {/* <AnimatedWrapper delay={200}> */}
            <p className="leading-8 md:w-[90%] text-neutral-600">
              Based in Minneapolis, Minnesota, Cadence Private Capital invests
              in lower middle market companies to drive maximum value for our
              business partners and investors. We fund transactions alongside
              our anchor investors and other key partners.
            </p>
            {/* </AnimatedWrapper> */}
          </div>
          <div className="flex flex-1 mt-6 md:mt-0 flex-col gap-4">
            {/* <AnimatedWrapper delay={300}> */}
            <p className="leading-8 md:w-[90%] text-neutral-600">
              Our model enables us to deploy patient, flexible capital to
              empower businesses to accomplish strategic initiatives and realize
              their full-growth potential.
            </p>
            {/* </AnimatedWrapper> */}
            {/* <AnimatedWrapper delay={400}> */}
            <p className="leading-8 md:w-[90%] text-neutral-600">
              We strive to always deliver on our core values of Integrity,
              Humility, Flexibility and Hard-Work.
            </p>
            {/* </AnimatedWrapper> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

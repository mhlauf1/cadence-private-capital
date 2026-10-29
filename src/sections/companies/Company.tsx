import React from "react";

const strategies = [
  {
    id: 0,
    title: "Pet Services Strategy",
    text: "Cadence has an active strategy in the pet services space (boarding, daycare, grooming, and training) focused on the Midwest. Cadence is actively looking for additional M&A targets.",
  },
  {
    id: 1,
    title: "Custom Windows",
    text: "Cadence has an active strategy in the custom window space through a platform investment that serves as a design consultant and dealer of custom window and door packages for the ultra-luxury home market across the United States, primarily serving $5 million to $100 million homes in the Mountain West region.",
  },
];

const Company = () => {
  return (
    <section className="px-4 md:px-20 max-w-screen-2xl mx-auto pb-20 pt-24 lg:pb-28 lg:pt-36">
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
        {strategies.map((item) => (
          <div
            key={item.id}
            className="bg-[#fefefe] p-8 md:p-10 rounded-lg shadow-md lg:w-[540px] flex flex-col gap-4"
          >
            <h3 className="text-2xl text-neutral-700">{item.title}</h3>
            <p className="leading-[170%] text-neutral-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;

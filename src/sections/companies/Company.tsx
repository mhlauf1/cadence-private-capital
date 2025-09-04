"use client";
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";

type CompanyKey = "embark" | "sightline" | null;

const Company = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [active, setActive] = React.useState<CompanyKey>(null);

  const openFor = (key: CompanyKey) => {
    setActive(key);
    onOpen();
  };

  const title =
    active === "sightline"
      ? "Sightline Solutions Ltd, LLC"
      : "Embark Pet Services, LLC";

  return (
    <section className="px-4 md:px-20 max-w-screen-2xl mx-auto pb-20 pt-24 lg:pb-28 lg:pt-36">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        {/* Embark */}
        <button
          type="button"
          onClick={() => openFor("embark")}
          className="px-8 py-6 rounded-lg duration-300 hover:bg-neutral-50 focus:outline-none"
        >
          <div className="relative w-[250px] h-[80px] md:w-[400px] md:h-[125px]">
            <Image
              fill
              alt="Embark Company Logo"
              src="/embark.png"
              sizes="(min-width: 768px) 400px, 250px"
              className="object-contain p-2"
              priority
            />
          </div>
        </button>

        {/* Sightline */}
        <button
          type="button"
          onClick={() => openFor("sightline")}
          className="px-8 py-6 rounded-lg duration-300 hover:bg-neutral-50 focus:outline-none"
        >
          <div className="relative w-[250px] h-[90px] md:w-[400px] md:h-[135px]">
            <Image
              fill
              alt="Sightline Company Logo"
              src="/sightline-logo.webp"
              sizes="(min-width: 768px) 400px, 250px"
              className="object-contain p-3 md:p-4"
            />
          </div>
        </button>
      </div>

      {/* Shared modal */}
      <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="py-6">
          {(onClose) => (
            <>
              <ModalHeader className="pb-2 text-2xl">{title}</ModalHeader>
              <ModalBody>
                {active === "sightline" ? (
                  <>
                    <p>
                      Sightline Solutions Ltd, LLC (“Sightline”) is a premier
                      design consultant and seller of custom window and door
                      packages for the ultra-luxury home market across the
                      United States, primarily serving $5 million to $100
                      million homes in the Mountain West region.
                      Sightline&apos;s engineering and design expertise,
                      alongside its longstanding relationships with
                      industry-leading manufacturers, enables the company to
                      integrate complex structural and architectural elements to
                      deliver state-of-the-art fenestration on any project.
                    </p>
                    <p>
                      Sightline is based in Aspen, Colorado, and has developed a
                      strong reputation amongst clients and manufacturers for
                      providing exceptional design consultation and custom
                      solutions with unparalleled client service,
                      responsiveness, and reliability.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Embark Pet Services, LLC (“Embark”) is a premier network
                      of pet hotels and service providers, delivering a
                      comprehensive suite of offerings, including boarding,
                      daycare, grooming, training, and veterinary care. With a
                      strong emphasis on quality, reliability, and safety,
                      Embark prides itself on providing trusted homes and care
                      services for pets – all while ensuring a seamless customer
                      experience for owners.
                    </p>
                    <p>
                      Embark&apos;s network currently consists of Rio Grooming
                      School &amp; Salon, Barks &amp; Rec Hastings, Wags Stay
                      N&apos; Play, and Boxers Bed &amp; Biscuits. Cadence
                      Private Capital is actively seeking related add-ons for
                      Embark.
                    </p>
                  </>
                )}
              </ModalBody>
              <ModalFooter className="mt-6">
                {active === "sightline" ? (
                  <Link
                    target="_blank"
                    href="https://www.sightlinesolutions.us/"
                  >
                    <Button color="primary" onPress={onClose}>
                      View Website
                    </Button>
                  </Link>
                ) : (
                  <Link
                    target="_blank"
                    href="https://www.embarkpetservices.com/"
                  >
                    <Button color="primary" onPress={onClose}>
                      View Website
                    </Button>
                  </Link>
                )}
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Company;

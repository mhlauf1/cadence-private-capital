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

const Company = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="px-4 md:px-20 max-w-screen-2xl mx-auto pb-20 pt-24  lg:pb-28 lg:pt-36">
      <div className="flex items-center justify-center">
        <div className="px-10 py-6 rounded-lg duration-300 hover:bg-neutral-50">
          <div className="relative cursor-pointer  w-[250px] h-[80px] md:w-[400px] md:h-[125px]">
            <Image
              onClick={onOpen}
              fill
              src="/embark.png"
              alt="Embark Company Logo"
            />
          </div>
        </div>

        <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent className="py-6">
            {(onClose) => (
              <>
                <ModalHeader className="pb-2 text-2xl">
                  Embark Pet Services, LLC
                </ModalHeader>
                <ModalBody>
                  <p>
                    Embark Pet Services, LLC (“Embark”) is a premier network of
                    pet hotels and service providers, delivering a comprehensive
                    suite of offerings, including boarding, daycare, grooming,
                    training, and veterinary care. With a strong emphasis on
                    quality, reliability, and safety, Embark prides itself on
                    providing trusted homes and care services for pets – all
                    while ensuring a seamless customer experience for owners.
                  </p>
                  <p>
                    Embark&apos;s network currently consists of Rio Grooming
                    School & Salon, Barks & Rec Hastings, and Wags Stay N&apos;
                    Play. Cadence Private Capital is actively seeking related
                    add-ons for Embark.
                  </p>
                </ModalBody>
                <ModalFooter className="mt-8">
                  <Button color="default" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  {/* <Button color="primary" onPress={onClose}>
                    Link to site?
                  </Button> */}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};

export default Company;

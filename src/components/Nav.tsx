"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Investment Criteria", href: "/investment-criteria" },
    { name: "Areas of Focus", href: "/areas-of-focus" },
    { name: "Team", href: "/team" },
    { name: "Advisory Board", href: "/advisory-board" },
    { name: "Companies", href: "/companies" },
  ];

  return (
    <div className="sticky z-10 top-0">
      <Navbar maxWidth="full" className="bg-white py-1 w-full z-50">
        <div className="px-4 md:px-20 flex w-full items-center mx-auto">
          <NavbarBrand>
            <Link href="/">
              <div className="h-auto w-[130px] md:w-[170px]">
                <Image
                  src="/cadence-nav-logo.png"
                  alt="Cadence Logo"
                  width={170}
                  height={170}
                  className="w-full h-auto"
                />
              </div>
            </Link>
          </NavbarBrand>
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 flex items-center text-neutral-900"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
          <NavbarContent
            className="hidden md:flex text-neutral-500 gap-10"
            justify="end"
          >
            {navItems.map((item) => (
              <NavbarItem key={item.name}>
                <Link
                  color="foreground"
                  className="hover:text-black transition"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
        </div>
      </Navbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden sticky inset-0 bg-white z-40 h-screen animate-in">
          <ul className="flex flex-col items-start mt-[10vh] bg-neutral-50 rounded-xl h-full pt-[12vh] mx-2 px-6 py-12 text-neutral-900 text-lg space-y-6">
            {navItems.map((item) => (
              <li key={item.name} className="animate-in">
                <Link
                  className="hover:text-neutral-500 transition"
                  onClick={toggleMenu}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

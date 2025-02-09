/* eslint-disable @typescript-eslint/camelcase */
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Pinyon_Script } from "next/font/google";

const pinyonScript = Pinyon_Script({ weight: "400", subsets: ["latin"] });

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-maroon-800 text-brown-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span
                className={`${pinyonScript.className} text-3xl text-brown-100`}
              >
                Milele
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/about">About</NavLink>
              <div className="relative group">
                <NavLink href="/services" className="flex items-center">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </NavLink>
                <div className="absolute left-0 mt-2 w-48 bg-maroon-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <NavLink
                    href="/services/salon"
                    className="block px-4 py-2 hover:bg-maroon-600"
                  >
                    Salon
                  </NavLink>
                  <NavLink
                    href="/services/barbershop"
                    className="block px-4 py-2 hover:bg-maroon-600"
                  >
                    Barbershop
                  </NavLink>
                  <NavLink
                    href="/services/spa"
                    className="block px-4 py-2 hover:bg-maroon-600"
                  >
                    Spa
                  </NavLink>
                  <NavLink
                    href="/services/physiotherapy"
                    className="block px-4 py-2 hover:bg-maroon-600"
                  >
                    Physiotherapy
                  </NavLink>
                </div>
              </div>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/book-appointment"
              className="bg-maroon-700 text-brown-100 px-4 py-2 rounded-md hover:bg-maroon-800 transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={(): void => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brown-100 hover:text-white hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" mobile>
              Home
            </NavLink>
            <NavLink href="/about" mobile>
              About
            </NavLink>
            <NavLink href="/services" mobile>
              Services
            </NavLink>
            <NavLink href="/services/salon" mobile className="pl-4">
              - Salon
            </NavLink>
            <NavLink href="/services/barbershop" mobile className="pl-4">
              - Barbershop
            </NavLink>
            <NavLink href="/services/spa" mobile className="pl-4">
              - Spa
            </NavLink>
            <NavLink href="/services/physiotherapy" mobile className="pl-4">
              - Physiotherapy
            </NavLink>
            <NavLink href="/blog" mobile>
              Blog
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact Us
            </NavLink>
            <NavLink
              href="/book-appointment"
              mobile
              className="bg-maroon-700 text-brown-100 px-4 py-2 rounded-md hover:bg-maroon-800 transition-colors duration-300"
            >
              Book Appointment
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  mobile = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  className?: string;
}): JSX.Element => (
  <Link
    href={href}
    className={`${
      mobile
        ? "block px-3 py-2 rounded-md text-base font-medium"
        : "px-3 py-2 rounded-md text-sm font-medium"
    } text-brown-100 hover:bg-maroon-700 hover:text-white ${className}`}
  >
    {children}
  </Link>
);

export default Navbar;

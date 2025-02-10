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
    <nav className="bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className={`${pinyonScript.className} text-4xl text-white`}>
                Milele
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink href="/about" className="text-white">
                About
              </NavLink>
              <NavLink href="/services" className="text-white">
                Services
              </NavLink>
              <NavLink href="/blog" className="text-white">
                Blog
              </NavLink>
              <NavLink href="/contact" className="text-white">
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/book-appointment"
              className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={(): void => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <NavLink href="/" mobile className="text-white">
              Home
            </NavLink>
            <NavLink href="/about" mobile className="text-white">
              About
            </NavLink>
            <NavLink href="/services" mobile className="text-white">
              Services
            </NavLink>
            <NavLink href="/blog" mobile className="text-white">
              Blog
            </NavLink>
            <NavLink href="/contact" mobile className="text-white">
              Contact Us
            </NavLink>
            <NavLink
              href="/book-appointment"
              mobile
              className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors duration-300"
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
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  className?: string;
  onClick?: () => void;
}): JSX.Element => (
  <Link
    href={href}
    className={`${
      mobile
        ? "block px-4 py-2 rounded-md text-base font-medium"
        : "px-4 py-2 rounded-md text-lg font-medium"
    } text-black hover:bg-purple-300 hover:text-white ${className}`}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;

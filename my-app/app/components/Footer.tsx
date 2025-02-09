import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-purple-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Milele Hair and Beauty Salon</h3>
            <p className="mt-2">Milele is the best, forget the rest</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-purple-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
          <p className="mt-8 text-base md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Milele Salon. All rights reserved.
          </p>
        </div>
        <div className="mt-8 border-t border-purple-700 pt-8">
          <h3 className="text-xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-black"
              required
            />
            <button
              type="submit"
              className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

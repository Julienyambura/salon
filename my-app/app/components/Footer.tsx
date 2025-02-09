import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-maroon-800 text-brown-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">Milele Hair and Beauty Salon</h3>
            <p className="mt-2">Milele is the best forget the rest</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-brown-100 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-brown-100 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-brown-100 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-maroon-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="/about" className="text-brown-100 hover:text-white">
              About
            </Link>
            <Link href="/services" className="text-brown-100 hover:text-white">
              Services
            </Link>
            <Link href="/blog" className="text-brown-100 hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="text-brown-100 hover:text-white">
              Contact
            </Link>
          </div>
          <p className="mt-8 text-base text-brown-100 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Milele Salon. All rights reserved.
          </p>
        </div>
        <div className="mt-8 border-t border-maroon-700 pt-8">
          <h3 className="text-xl font-bold text-brown-100 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-maroon-900"
              required
            />
            <button
              type="submit"
              className="bg-maroon-700 text-brown-100 px-6 py-2 rounded-md hover:bg-maroon-800 transition-colors duration-300"
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

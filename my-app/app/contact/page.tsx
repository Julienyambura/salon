"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-12 text-center"
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-purple-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-purple-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-purple-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-300 text-brown-100 px-6 py-3 rounded-md hover:bg-purple-400 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-purple-900 mb-6">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-purple-700 mr-4" />
              <span className="text-purple-800">0722426904</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-purple-700 mr-4" />
              <span className="text-purple-800">milelebeauty@gmail.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-purple-700 mr-4" />
              <span className="text-purple-800">
                2nd floor Odyssey plaza Mkomo Road South B
              </span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-purple-900 mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-purple-800">
              <li>Everyday</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

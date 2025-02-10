"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const barbershopServices = [
  { name: "Hair and Scalp Treatment", image: "/images/image14.jpeg" },
  { name: "Haircuts", image: "/images/image2.jpeg" },
  {
    name: "Beard and Mustache Shaping",
    image: "/images/image12.jpeg",
  },
  { name: "Scalp Scrub", image: "/images/image13.jpeg" },
  { name: "Face Scrub", image: "/images/image11.jpeg" },
  { name: "Dreadlocks", image: "/images/image7.jpeg" },
];

export default function Barbershop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-12 text-center"
      >
        Barbershop Services
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {barbershopServices.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-purple-100 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={service.image}
              alt="service"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-900 mb-2">
                {service.name}
              </h2>
              <p className="text-purple-800">
                Experience our expert {service.name.toLowerCase()} services at
                Milele Barbershop.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const spaServices = [
  { name: "Massage", image: "/spa-massage.jpg" },
  { name: "Moroccan Bath", image: "/spa-moroccan-bath.jpg" },
  { name: "Body Scrubs", image: "/spa-body-scrubs.jpg" },
  { name: "Body Wraps", image: "/spa-body-wraps.jpg" },
  { name: "Body Mask", image: "/spa-body-mask.jpg" },
  { name: "Facials", image: "/spa-facials.jpg" },
];

export default function Spa() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-12 text-center"
      >
        Spa Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spaServices.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-purple-100 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-purple-900 mb-2">
                {service.name}
              </h2>
              <p className="text-purple-800">
                Indulge in our rejuvenating {service.name.toLowerCase()}{" "}
                treatments at Milele Spa.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

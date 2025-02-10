"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  BeakerIcon as Beard,
  SpadeIcon as Spa,
  Activity,
} from "lucide-react";
import Link from "next/link";


const services = [
  {
    title: "Salon",
    description: "Expert hair care, styling, and coloring services",
    icon: Scissors,
    link: "/services/salon",
  },
  {
    title: "Barbershop",
    description: "Precision cuts and grooming for men",
    icon: Beard,
    link: "/services/barbershop",
  },
  {
    title: "Spa",
    description: "Relaxing treatments for body and mind",
    icon: Spa,
    link: "/services/spa",
  },
  {
    title: "Physiotherapy",
    description: "Professional care for physical well-being",
    icon: Activity,
    link: "/services/physiotherapy",
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-12 text-center"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Link href={service.link} className="block">
              <div className="bg-purple-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <service.icon className="h-12 w-12 text-purple-700 mb-4" />
                <h2 className="text-xl font-bold text-purple-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-purple-800">{service.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

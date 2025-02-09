import { motion } from "framer-motion";
import Image from "next/image";

const barbershopServices = [
  { name: "Hair and Scalp Treatment", image: "/barbershop-hair-treatment.jpg" },
  { name: "Haircuts", image: "/images/image2.jpeg" }, // Make sure this path is correct
  {
    name: "Beard and Mustache Shaping",
    image: "/barbershop-beard-shaping.jpg",
  },
  { name: "Scalp Scrub", image: "/barbershop-scalp-scrub.jpg" },
  { name: "Face Scrub", image: "/barbershop-face-scrub.jpg" },
  { name: "Dreadlocks", image: "/barbershop-dreadlocks.jpg" },
];

export default function Barbershop() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-12 text-center"
      >
        Barbershop Services
      </motion.h1>
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
              src="/images/image2.jpeg" // Correct path in relation to the public folder
              alt="Haircuts"
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

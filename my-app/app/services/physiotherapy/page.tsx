"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const physiotherapyServices = [
  { name: "Joint Mobilization", image: "/physio-joint-mobilization.jpg" },
  { name: "Muscle Strengthening", image: "/physio-muscle-strengthening.jpg" },
  { name: "Posture Correction", image: "/physio-posture-correction.jpg" },
  { name: "Sports Injury Rehabilitation", image: "/physio-sports-rehab.jpg" },
  { name: "Castor Oil Massage", image: "/physio-castor-oil-massage.jpg" },
];

export default function Physiotherapy() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-12 text-center"
      >
        Physiotherapy Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-purple-800 mb-8 text-center"
      >
        At Milele, we understand the importance of physical well-being. Our
        physiotherapy services are designed to help you recover from injuries,
        manage chronic conditions, and improve your overall physical health.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {physiotherapyServices.map((service, index) => (
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
                Experience our expert {service.name.toLowerCase()} treatments at
                Milele Physiotherapy.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 bg-purple-100 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-purple-900 mb-4">
          The Milele Difference: Castor Oil in Physiotherapy
        </h2>
        <p className="text-purple-800 mb-4">
          At Milele, we incorporate the healing properties of castor oil into
          our physiotherapy treatments. Castor oil is known for its
          anti-inflammatory and pain-relieving properties, making it an
          excellent complement to traditional physiotherapy techniques.
        </p>
        <p className="text-purple-800">
          Our castor oil massages and treatments can help reduce inflammation,
          improve circulation, and promote faster healing. This unique approach
          sets us apart and provides our clients with a holistic path to
          recovery and wellness.
        </p>
      </motion.div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About(): JSX.Element {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold text-maroon-900 mb-8">
          About Milele
        </h1>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-8">
            <p className="  text-2xl text-maroon-900">
              Milele is more than just a salon - a sanctuary for self-care and
              rejuvenation. Founded with a passion for holistic beauty and
              wellness, we offer a wide range of services designed to nurture
              your body, mind, and spirit.
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="bg-maroon-700 text-brown-100 px-4 py-2 rounded-md hover:bg-maroon-800 transition-colors duration-300"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/image1.jpeg"
              alt="Milele Salon Interior"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </motion.div>
      {showMore && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-4xl font-bold text-maroon-900 mb-4">
            Our Philosophy
          </h2>
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 md:pr-8">
              <p className="  text-2xl text-maroon-900">
                At Milele, we believe that true beauty comes from within. Our
                approach combines traditional techniques with modern
                innovations, always prioritizing the use of natural,
                high-quality products. We are particularly proud of our
                signature castor oil treatments, which have become a favorite
                among our clients for their remarkable results.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/milele-philosophy.jpg"
                alt="Milele Salon Philosophy"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-maroon-900 mb-4">Our Team</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <p className="  text-2xl text-maroon-900">
                Our team of skilled professionals is the heart of Milele. Each
                member is carefully selected for their expertise, creativity,
                and dedication to customer satisfaction. We invest in ongoing
                training to ensure we are always at the forefront of the beauty
                and wellness industry.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/milele-team.jpg"
                alt="Milele Salon Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16"
      >
        <h2 className="text-4xl font-bold text-maroon-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question: "What services does Milele offer?",
              answer:
                "Milele offers a wide range of services including hair care, skin treatments, massage therapy, nail care, and physiotherapy. We have dedicated salon, barbershop, spa, and physiotherapy sections to cater to all your beauty and wellness needs.",
            },
            {
              question: "Do I need to book an appointment?",
              answer:
                "While we do accept walk-ins, we recommend booking an appointment to ensure you get the time slot that works best for you. You can easily book online or give us a call.",
            },
            {
              question: "What makes Milele different from other salons?",
              answer:
                "At Milele, we pride ourselves on our holistic approach to beauty and wellness. We use high-quality, natural products, including our signature castor oil treatments. Our staff is highly trained and passionate about providing personalized care to each client.",
            },
            {
              question: "Do you offer gift cards?",
              answer:
                "Yes, we offer gift cards that can be used for any of our services. They make perfect gifts for loved ones who deserve some pampering!",
            },
          ].map((faq, index): JSX.Element => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg rounded-lg p-6"
              >
                <h3 className="text-xl font-bold text-maroon-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-black">{faq.answer}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

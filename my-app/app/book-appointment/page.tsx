"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Haircut",
  "Hair Coloring",
  "Manicure",
  "Pedicure",
  "Facial",
  "Massage",
  "Waxing",
  "Beard Trim",
  "Hair Treatment",
  "Makeup",
];

const availableTimeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00pm",
];

export default function BookAppointment(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }): void => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.service
    ) {
      setErrorMessage("Please fill out all fields.");
      setSuccessMessage("");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrorMessage("Please enter a valid phone number.");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Appointment booked successfully!");
    setErrorMessage("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
    });

    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-purple-900 mb-8 text-center"
      >
        Book an Appointment
      </motion.h1>

      {errorMessage && (
        <div className="mb-4 text-red-600 bg-red-100 p-4 rounded-md">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 text-green-600 bg-green-100 p-4 rounded-md">
          {successMessage}
        </div>
      )}

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-purple-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-purple-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-purple-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-purple-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-purple-700"
          >
            Time
          </label>
          <select
            id="time"
            name="time"
            required
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select a time slot</option>
            {availableTimeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-purple-700"
          >
            Service
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-400 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Book Appointment
          </button>
        </div>
      </motion.form>
    </div>
  );
}

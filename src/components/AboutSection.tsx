"use client";

import { Wrench, Car, Check, Users, ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const staggerChildrenVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Section */}
          <motion.div
            className="relative order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-md lg:max-w-none relative">
              <div className="aspect-[4/5] w-full bg-gray-100 border border-gray-200 shadow-xl overflow-hidden relative">
                <Image
                  src="/about_section.png"
                  alt="Detailing Professional at Work - About Us"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute top-[-20px] left-[-20px] w-16 h-16 rounded-full border-2 border-gray-900 flex items-center justify-center animate-spin-slow">
                <div className="w-8 h-8 bg-gray-900 rounded-full mix-blend-multiply"></div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            className="order-1 lg:order-2"
            variants={staggerChildrenVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeInUpVariants}
              className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-4"
            >
              OUR MISSION
            </motion.p>

            <motion.h2
              variants={fadeInUpVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none mb-8 tracking-tighter"
            >
              ABOUT US
            </motion.h2>

            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-700 mb-6 text-lg max-w-xl"
            >
              We are more than just detailers; we are perfectionists dedicated
              to preserving the beauty and value of your vehicle. Established in
              2015, we've set the standard for premium mobile detailing services.
            </motion.p>

            <motion.p
              variants={fadeInUpVariants}
              className="text-gray-600 mb-8 text-base max-w-xl"
            >
              Our certified technicians use only professional-grade,
              eco-friendly products and cutting-edge techniques to ensure a
              flawless finish every time, delivered right to your location.
            </motion.p>

            <motion.div variants={fadeInUpVariants}>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-red-600 hover:shadow-xl"
              >
                Read Our Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildrenVariants}
        >
          {[
            { value: "500+", label: "Cars Detailed" },
            { value: "10+", label: "Years Experience" },
            { value: "100%", label: "Satisfaction" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className="bg-white rounded-xl p-4 border-b-2 border-red-600 hover:shadow-lg transition"
            >
              <h4 className="text-4xl font-black text-gray-900 mb-1">
                {stat.value}
              </h4>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

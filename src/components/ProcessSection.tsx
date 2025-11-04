"use client";

import { Car, Cog, Sparkles, Hand } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import Link from "next/link";

const ProcessSection = () => {
  const steps = [
    {
      icon: Hand,
      title: "BOOK ONLINE",
      description:
        "Schedule your preferred service and time easily through our website.",
      link: "/book",
    },
    {
      icon: Car,
      title: "WE ARRIVE",
      description:
        "Our fully-equipped mobile unit comes right to your home or office location.",
      link: "/mobile-service",
    },
    {
      icon: Cog,
      title: "THE DETAILING",
      description:
        "Our professional team executes the chosen service with precision and care.",
      link: "/our-process",
    },
    {
      icon: Sparkles,
      title: "FINISH & ENJOY",
      description:
        "Your car is spotless and ready to drive. We guarantee your satisfaction.",
      link: "/guarantee",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading - BIG and LEFT-ALIGNED */}
        <motion.div
          className="mb-16 md:mb-20 text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 max-w-3xl">
            The Easy <span className="text-red-600">4-Step</span> Process
          </h2>

          {/* Divider moved to the left and shortened */}
          <div className="w-16 h-1 bg-red-600 mb-6"></div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            From initial booking to the final shine, we make professional mobile
            auto detailing hassle-free.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={step.link} className="block">
                  <div className="bg-gray-900 rounded-lg shadow-md p-8 flex flex-col items-center text-center h-full border border-gray-700 transition-transform duration-200 hover:shadow-lg">
                    {/* Step Number */}
                    <span className="text-xs font-bold text-red-600 mb-2">{`STEP ${
                      index + 1
                    }`}</span>

                    {/* Icon */}
                    <div className="p-4 mb-4 rounded-full bg-red-100 text-red-600">
                      <IconComponent size={36} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

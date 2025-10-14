"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Car,
  Sun,
  Paintbrush,
  ShieldCheck,
} from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import { MotionButton } from "@/components/ui/motion-button";

const ServicesSection = () => {
  const services = [
    {
      title: "Mobile Detailing",
      description:
        "Professional detailing brought direct to your location, offering convenience and shine.",
      features: [
        "Exterior and interior cleaning",
        "Paint decontamination and correction",
        "Premium wax or sealant application",
        "We bring all supplies and equipment",
      ],
      link: "/services/mobile-detailing",
      iconComponent: Car,
    },
    {
      title: "Window Tinting",
      description:
        "Premium window film installation for comfort, style, and enhanced privacy.",
      features: [
        "Heat and UV rejection",
        "Improved privacy & security",
        "Glare reduction for safer driving",
        "Lifetime warranty available",
      ],
      link: "/services/window-tinting",
      iconComponent: Sun,
    },
    {
      title: "Ceramic Coating",
      description:
        "Long-lasting paint protection with incredible gloss and hydrophobic properties.",
      features: [
        "9H hardness for ultimate protection",
        "Extreme hydrophobic properties",
        "Superior UV protection",
        "2-5 year durability guarantee",
      ],
      link: "/services/ceramic-coating",
      iconComponent: ShieldCheck,
    },
    {
      title: "Paint Correction",
      description:
        "Restore your vehicle's paint to a flawless, mirror-like finish.",
      features: [
        "Removes swirls, scratches, and oxidation",
        "Enhances paint depth and clarity",
        "Multi-stage polishing process",
        "Prepares surface for ceramic coatings",
      ],
      link: "/services/paint-correction",
      iconComponent: Paintbrush,
    },
  ];

  return (
    <section
      id="premium-auto-services"
      className="py-16 md:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 md:mb-5">
            Premium <span className="text-red-600">Auto</span> Services
          </h2>

          {/* Divider */}
          <div className="w-24 md:w-32 h-1 bg-red-600 mx-auto mb-6 md:mb-8 relative"></div>

          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            We offer a complete range of professional auto detailing services to
            keep your vehicle looking its absolute best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/services">
            <MotionButton
              className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 text-lg rounded-full shadow-xl group font-semibold flex items-center justify-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </MotionButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

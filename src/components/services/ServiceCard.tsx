"use client";

import { Check, Car, Sun, HardHat, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MotionButton } from "@/components/ui/motion-button";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  link: string;
  iconComponent?: React.ElementType; // optional prop (avoids TS error)
}

// Map service titles to appropriate icons
const iconMap: { [key: string]: React.ElementType } = {
  "Mobile Detailing": Car,
  "Window Tinting": Sun,
  "Ceramic Coating": HardHat,
  "Paint Correction": Sparkles,
};

const ServiceCard = ({
  title,
  description,
  features,
  link,
}: ServiceCardProps) => {
  const Icon = iconMap[title] || Car; // Fallback to Car icon

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-200 hover:shadow-lg transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 20px -5px rgba(255, 0, 0, 0.1)",
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon Section */}
      <div className="p-6 md:p-8 flex flex-col items-center text-center">
        <div className="bg-gray-100 rounded-full p-4 mb-4 border-2 border-red-600/30">
          <Icon size={40} className="text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-6"></div>

      {/* Features List */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="space-y-3 mb-6 flex-grow">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="bg-red-600 rounded-full p-1 mr-2 flex-shrink-0 mt-0.5">
                <Check size={14} className="text-white" />
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <Link href={link} className="mt-auto block">
          <MotionButton
            className="w-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 font-semibold text-base py-3 rounded-md shadow-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Read More
          </MotionButton>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

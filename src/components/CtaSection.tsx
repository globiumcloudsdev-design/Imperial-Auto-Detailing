"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => {
  const checkItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">

      {/* ✅ Imperial Red Diagonal Background ACCENT */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Red Area (Top Right) */}
        <div
          className="absolute right-0 top-0 w-3/4 md:w-1/2 h-full bg-red-600 transform translate-x-1/2"
          style={{
            clipPath: "polygon(100% 0, 0 0, 75% 100%, 100% 100%)",
            zIndex: 0
          }}
        />

        {/* Inner Black Diagonal Line (Shadow Effect) */}
        <div
          className="absolute right-0 top-0 w-3/4 md:w-1/2 h-full bg-black/10 transform translate-x-1/2"
          style={{
            clipPath: "polygon(100% 0, 0 0, 70% 100%, 100% 100%)",
            zIndex: 1
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tighter max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-red-600">PREMIUM SHINE.</span> MAXIMUM PROTECTION.
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Don't settle for less than the best. Book your detailing or coating service now and experience the difference.
          </motion.p>

          {/* CTA Button (Imperial Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-red-600 text-white hover:bg-red-700 px-12 py-7 text-xl font-bold rounded-md shadow-2xl shadow-red-500/50 transition-all duration-300 uppercase"
              >
                Book Your Service Now
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Features Grid (Replaced dark checks with focused red/white cards) */}
          {/* ✅ Features Grid — All 4 in one line */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { delayChildren: 0.4, staggerChildren: 0.1 } },
            }}
          >
            {[
              { title: "Certified Experts", text: "Trained professionals only." },
              { title: "Quality Guaranteed", text: "We stand by our work." },
              { title: "Free Diagnostics", text: "Full vehicle health check." },
              { title: "Same Day Service", text: "Fast and efficient results." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="text-center p-6 rounded-xl border-2 border-red-600/30 bg-black shadow-lg hover:shadow-red-300 transition-shadow duration-300"
              >
                <Check size={26} className="text-red-600 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

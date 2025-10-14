"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ✅ Window Tinting Packages
const packages = [
  {
    title: "STANDARD TINT",
    subtitle: "Value & Privacy",
    price: "$199",
    features: [
      "Basic Heat Rejection (30%)",
      "UV Protection (99%)",
      "5-Year Warranty",
      "Fast Installation Time",
    ],
    more: [
      "Budget-friendly option",
      "Improves cabin comfort",
      "Adds light privacy",
    ],
    isFeatured: false,
  },
  {
    title: "CERAMIC TINT",
    subtitle: "Our Most Popular Choice",
    price: "$299",
    features: [
      "Superior Heat Rejection (50%)",
      "UV Protection (99.9%)",
      "Lifetime Warranty",
      "Better Clarity & Visibility",
      "Infrared Blocking Technology",
    ],
    more: [
      "Enhanced glare reduction",
      "Fade-resistant technology",
      "Great value for performance and price",
    ],
    isFeatured: true, // Highlight this package
  },
  {
    title: "PRIME XR TINT",
    subtitle: "Maximum Performance & Comfort",
    price: "$399",
    features: [
      "Maximum Heat Rejection (70%+)",
      "UV Protection (99.9%)",
      "Lifetime Warranty",
      "Ultimate Comfort & Privacy",
      "Scratch-Resistant Coating",
    ],
    more: [
      "Superior clarity at night",
      "Top-tier luxury performance",
      "Reduces strain on AC system",
    ],
    isFeatured: false,
  },
];

const WindowTinting = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  const buttonClassName =
    "bg-red-600 text-white hover:bg-red-700 font-bold tracking-wider rounded-md shadow-md";

  return (
    <div className="pt-16 pb-20 bg-white">
      {/* ---------------------- HERO SECTION ---------------------- */}
      <div className="relative overflow-hidden bg-gray-100">
        {/* Diagonal Background Layers */}
        <div className="absolute inset-0 transform skew-y-12 bg-red-600/10" />
        <div className="absolute inset-0 transform -skew-y-12 bg-red-600/5" />

        <div className="container mx-auto px-4 py-24 md:py-40 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tighter">
              Drive Cooler with{" "}
              <span className="text-red-600">Premium Window Tinting</span>
            </h1>

            <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
              Enhance comfort, style, and privacy while blocking up to 99.9% of
              harmful UV rays. Get the ultimate blend of style and protection.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                "99% UV Protection",
                "Lifetime Warranty",
                "Max Heat Rejection",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-red-600 py-2 px-5 rounded-md shadow-lg"
                >
                  <Check size={18} className="text-white" />
                  <span className="text-sm font-semibold text-white">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            <Link href="#packages">
              <Button
                className={`${buttonClassName} px-10 py-4 text-xl group shadow-red-500/50`}
              >
                View Tinting Options
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ---------------------- PACKAGES SECTION ---------------------- */}
      <div id="packages" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase text-lg font-semibold mb-2">
            Comfort & Aesthetics
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tighter">
            Choose Your Tinting Package
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We offer premium tint films installed by certified technicians for a
            flawless, bubble-free finish every time.
          </p>
        </div>

        {/* Grid of Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const isExpanded = expandedCard === index;
            const visibleFeatures = isExpanded
              ? [...pkg.features, ...pkg.more]
              : pkg.features.slice(0, 4);

            const cardBg = pkg.isFeatured
              ? "bg-red-600 text-white"
              : "bg-white text-gray-900 border border-gray-200";

            const needsShowMore =
              pkg.features.length + pkg.more.length > 4;

            return (
              <motion.div
                key={index}
                className={`rounded-xl shadow-2xl p-8 relative flex flex-col transition-all duration-300 ease-in-out ${cardBg}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                {pkg.isFeatured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-lg">
                    Best Seller
                  </div>
                )}

                <div className="flex-grow">
                  <h3
                    className={`text-2xl font-extrabold uppercase mb-1 ${
                      pkg.isFeatured ? "text-white" : "text-red-600"
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-4 ${
                      pkg.isFeatured ? "text-red-200" : "text-gray-500"
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                  <p
                    className={`text-4xl font-bold mb-6 ${
                      pkg.isFeatured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {pkg.price}
                  </p>

                  {/* Features List */}
                  <motion.div
                    layout
                    className="space-y-3 pb-6"
                    transition={{ layout: { duration: 0.3, type: "spring" } }}
                  >
                    {visibleFeatures.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className={`mt-1 ${
                            pkg.isFeatured ? "text-white" : "text-red-600"
                          }`}
                        />
                        <span
                          className={`text-base ${
                            pkg.isFeatured ? "text-white" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* See More / See Less Button */}
                {needsShowMore && (
                  <button
                    onClick={() => toggleCard(index)}
                    className={`mt-auto flex items-center justify-center w-full py-3 px-4 rounded-md transition text-sm font-semibold 
                      ${
                        pkg.isFeatured
                          ? "bg-black/20 hover:bg-black/30 text-white"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                  >
                    {isExpanded ? (
                      <>
                        See Less <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        See More <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                )}

                {/* Booking Button */}
                {/* <Link href="/checkout" className="w-full mt-4 block">
                  <Button
                    className={`w-full py-6 text-base group ${
                      pkg.isFeatured
                        ? "bg-white text-red-600 hover:bg-gray-200"
                        : buttonClassName
                    }`}
                  >
                    BOOK NOW
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link> */}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ---------------------- RESULT SHOWCASE BANNER ---------------------- */}
      <motion.div
        className="relative w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/windowafter.png"
          alt="Car window with professional tinting applied"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center p-8">
            <p className="text-xl md:text-3xl font-extrabold text-white tracking-widest uppercase border-b-4 border-red-600 pb-2 inline-block">
              Immediate Style. Long-Term Comfort.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WindowTinting;

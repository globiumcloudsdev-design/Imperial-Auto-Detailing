"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ✅ Paint Correction Packages
const packages = [
  {
    title: "SINGLE STAGE POLISH",
    subtitle: "Gloss Enhancement & Light Correction",
    price: "$349",
    features: [
      "Light swirl & oxidation removal (60%)",
      "Minor scratch reduction",
      "High-gloss polish application",
      "2-4 hour process time",
    ],
    more: [
      "Perfect for new or well-maintained cars",
      "Adds depth and clarity to paint",
      "Followed by seal/wax protection",
    ],
    isFeatured: false,
  },
  {
    title: "TWO STAGE CORRECTION",
    subtitle: "Standard Defect Removal - Most Popular",
    price: "$599",
    features: [
      "Moderate swirl & defect removal (85%+)",
      "Dedicated compound and polish steps",
      "Restores deep color and reflection",
      "5-8 hour detailed process",
      "Heavy oxidation removal",
    ],
    more: [
      "Ideal for daily drivers with heavy wash marring",
      "Significant gloss improvement",
      "Prepares surface perfectly for ceramic coating",
    ],
    isFeatured: true,
  },
  {
    title: "FULL DEEP CORRECTION",
    subtitle: "Maximum Clarity & Concours Finish",
    price: "$999",
    features: [
      "Near-total defect removal (95%+)",
      "Multi-step compounding, polishing, and refining",
      "Wet-look, maximum mirror finish",
      "10-15+ hour meticulous process",
      "Sanding marks & deep scratch reduction",
    ],
    more: [
      "Show car quality finish",
      "Best for dark-colored or classic vehicles",
      "Includes paint thickness verification",
    ],
    isFeatured: false,
  },
];

const PaintCorrection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  const buttonClassName =
    "bg-red-600 text-white hover:bg-red-700 font-bold tracking-wider rounded-md shadow-md";

  return (
    <div className="pt-16 pb-20 bg-white">
      {/* 🔴 HERO SECTION */}
      <div className="relative overflow-hidden bg-gray-100">
        {/* Diagonal Red Overlays */}
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
              Restore Your Paint&apos;s{" "}
              <span className="text-red-600">Factory Perfection</span>
            </h1>

            <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto">
              Our professional paint correction service eliminates swirls,
              scratches, and oxidation, revealing a flawless, mirror-like finish
              ready for ultimate protection.
            </p>

            {/* Key Highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                "Swirl Removal",
                "Deep Gloss Enhancement",
                "Permanent Results",
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
                View Correction Packages
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 🔴 PACKAGES SECTION */}
      <div id="packages" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase text-lg font-semibold mb-2">
            Pricing & Clarity
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tighter">
            Choose Your Level of Restoration
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We use precision tools and lighting to assess your paint and guarantee
            the safest, most effective correction method.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const isExpanded = expandedCard === index;
            const visibleFeatures = isExpanded
              ? [...pkg.features, ...pkg.more]
              : pkg.features.slice(0, 4);

            const cardBg = pkg.isFeatured
              ? "bg-red-600 text-white"
              : "bg-white text-gray-900 border border-gray-200";

            const needsShowMore = pkg.features.length + pkg.more.length > 4;

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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-lg">
                    Best Value
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

                  {/* Features */}
                  <motion.div layout className="space-y-3 pb-6">
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
                    className={`mt-auto flex items-center justify-center w-full py-3 px-4 rounded-md text-sm font-semibold transition
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
                        See All Details <ChevronDown className="ml-2 h-4 w-4" />
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

      {/* 🔴 SHOWCASE IMAGE */}
      <motion.div
        className="relative w-full h-[50vh] overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/paint.png"
          alt="Car paint with deep, mirror-like gloss after correction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="text-xl md:text-3xl font-extrabold text-white tracking-widest uppercase border-b-4 border-red-600 pb-2 inline-block">
            Eliminate Defects. Achieve Perfection.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaintCorrection;

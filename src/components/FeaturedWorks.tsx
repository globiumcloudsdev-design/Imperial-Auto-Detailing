"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const imageCategories: Record<
  string,
  { backSrc: string; frontSrc: string; backAlt: string; frontAlt: string }
> = {
  Exterior: {
    backSrc: "/exteriorbefore.png",
    frontSrc: "/exteriorafter.png",
    backAlt: "Car getting washed with foam in facility",
    frontAlt: "Mobile detailing van servicing a car",
  },
  Interior: {
    backSrc: "/interiorbefore.png",
    frontSrc: "/interiorafter.png",
    backAlt: "Dirty car interior",
    frontAlt: "Cleaned car interior",
  },
  Ceramic: {
    backSrc: "/ceramicbefore.png",
    frontSrc: "/ceramicafter.png",
    backAlt: "Car without ceramic coat",
    frontAlt: "Car with glossy ceramic coat",
  },
  Tinting: {
    backSrc: "/windowbefore.png",
    frontSrc: "/windowafter.png",
    backAlt: "Car without window tint",
    frontAlt: "Car with window tint applied",
  },
};

const FeaturedWorks = () => {
  const [activeCategory, setActiveCategory] = useState("Exterior");
  const currentImages = imageCategories[activeCategory];

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative bg-black pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="lg:pr-8">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
            >
              Car Detailing Services in <br />
              <span className="text-red-600">Toronto and the GTA</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8 max-w-lg"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
            >
              Wash Me Now is your expert, fully mobile auto detailing service
              with an indoor facility available as well.
            </motion.p>

            <ul className="space-y-4 mb-10">
              {[
                "Available 7 days a week",
                "Mobile & Indoor Facility",
                "Auto detailing in Toronto and the entire GTA",
                "Only highest quality products on your car",
                "The finest interior and exterior detailing services",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-300 text-base"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Check className="text-green-500 h-5 w-5 mr-3 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <Link href="/booking">
              <Button className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition-colors duration-300">
                Find the Right Package
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* RIGHT SIDE - FIXED IMAGE LAYOUT */}
          <motion.div
            className="relative w-full mt-10 lg:mt-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
          >
            {/* Tabs */}
            <div className="absolute top-0 right-0 z-30 flex space-x-2 p-2 bg-white/70 backdrop-blur-sm rounded-bl-lg shadow-md">
              {Object.keys(imageCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeCategory === category
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Before-After Container */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Before */}
              <div className="relative h-[280px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={currentImages.backSrc}
                  alt={currentImages.backAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white z-20 bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                  <p className="font-bold text-sm">BEFORE</p>
                  <p className="text-xs">In-location cleaning</p>
                </div>
              </div>

              {/* After */}
              <div className="relative h-[280px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src={currentImages.frontSrc}
                  alt={currentImages.frontAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 text-white z-20 bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                  <p className="font-bold text-sm">AFTER</p>
                  <p className="text-xs">Mobile Detailing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          className="mt-24 md:mt-32 text-center border-t pt-10 border-gray-700"
          initial="hidden"
          whileInView="visible"
        >
          <motion.h3
            variants={textVariants}
            className="text-3xl md:text-4xl font-extrabold text-white mb-8"
          >
            Thank You for <span className="text-red-600">Trusting Us.</span>
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12 items-center"
            variants={textVariants}
          >
            <Link
              href="https://www.facebook.com/imperialspadetailing/"
              className="flex flex-col items-center text-blue-700 hover:text-blue-800 transition"
            >
              <Image
                src="/facebook-removebg-preview.png"
                alt="Find us on Facebook"
                width={36}
                height={36}
                className="mb-1 object-contain"
              />
              <span className="text-lg font-semibold">Find us on Facebook</span>
            </Link>

            <Link
              href="#"
              className="flex flex-col items-center text-gray-300 hover:text-gray-400 transition"
            >
              <span className="text-3xl text-yellow-500 mb-1">★★★★★</span>
              <span className="text-lg font-semibold">Google Reviews</span>
              <span className="text-sm text-gray-400">5.0 Star Rating</span>
            </Link>

            <Link
              href="#"
              className="flex flex-col items-center text-red-600 hover:text-red-700 transition"
            >
              <span className="text-3xl text-red-600 mb-1">★★★★☆</span>
              <span className="text-lg font-semibold">Yelp Reviews</span>
              <span className="text-sm text-gray-400">4.5 Star Rating</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWorks;

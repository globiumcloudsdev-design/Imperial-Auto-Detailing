"use client";

import { motion, easeOut } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section
        id="hero-section"
        className="h-[75vh] md:h-screen w-full flex items-center justify-center bg-black relative overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0" />

        {/* Red Diagonal Section */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-red-600 transform -skew-x-12 origin-top-right md:w-[70%] lg:w-[65%] xl:w-[60%] z-10" />

        {/* Content Container */}
        <div className="relative w-full h-full flex items-center justify-between z-20">
          {/* Car Image (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            // 👇 moved image slightly upward
            className="absolute left-0 top-[15%] md:top-[14%] lg:top-[12%] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] h-auto z-30"
          >
            <Image
              src="/slider_1-remove.png"
              alt="White sports car"
              width={1000}
              height={560}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Text Content (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 pr-12 md:pr-24 lg:pr-32 xl:pr-40 text-left z-40"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight uppercase"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              COMPLETE <br />
              CAR CARE <br />
              SOLUTIONS
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ---------------- SERVICES GRID SECTION ---------------- */}
      <section
        className="bg-black px-6 md:px-12 relative z-30 border-t-8 border-black"
      >
        {/* 👆 added black border on top & removed top padding / white gap */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-b border-gray-700/50">
          {[
            {
              title: "CERAMIC COATING",
              img: "/ceramicafter.png",
              description: "Advanced protection for your vehicle's paint",
            },
            {
              title: "WHEEL REPAIRS",
              img: "/wheel repairs.jpg",
              description: "Restore and repair damaged wheels",
            },
            {
              title: "CAR DETAILING",
              img: "/car-silhouette.png",
              description: "Comprehensive interior and exterior cleaning",
            },
            {
              title: "WINDOW TINTING",
              img: "/windowafter.png",
              description: "Enhance privacy and reduce heat",
            },
            {
              title: "PANEL REPAIRS AND PAINT",
              img: "/panel repairs.jpeg",
              description: "Professional bodywork and painting services",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.0 }}
              className="relative overflow-hidden group border-r border-gray-700/50 last:border-r-0"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-end">
                <h3 className="text-base font-bold text-white px-4 pt-16 pb-2 w-full">
                  {service.title}
                </h3>
                <div className="w-full px-4 pb-4">
                  {service.title === "CERAMIC COATING" && (
                    <div className="text-xs text-green-400 mb-2">
                      Google Rating 4.9 ★★★★★
                    </div>
                  )}
                  <p className="text-xs text-gray-300 leading-tight">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;

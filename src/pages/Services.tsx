"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { service, vehicleTypes } from "@/utils/services";

// Helper to get image for vehicle type
const getVehicleImage = (id: string) => {
  switch (id) {
    case "sedan":
      return "/sedan.png";
    case "suv":
      return "/suv.png";
    case "truck":
    case "van":
      return "/slider_1.png";
    case "bike":
      return "/bike.jpg";
    case "boat":
      return "/boat.png";
    case "rv":
      return "/rv.png"; // Use boat image for RV
    case "jetski":
      return "/jetski.png"; // Use boat image for jetski
    default:
      return "/slider_1.png";
  }
};

// Helper to get icon for vehicle type
const getVehicleIcon = (id: string) => {
  return <Image src={getVehicleImage(id)} alt={`${id} vehicle icon - Imperial Auto Detailing service`} width={20} height={20} className="mr-2 rounded" />;
};

// Build service categories from services.ts
const serviceCategories: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    sections: {
      title: string;
      packages: {
        name: string;
        price: string;
        features: string[];
        isFeatured?: boolean;
      }[];
    }[];
  }
> = {};

vehicleTypes.forEach((vt) => {
  const vehicleService = service[vt.id];
  if (!vehicleService) return;

  const sections: any[] = [];

  // Interior
  if (vehicleService.interior) {
    const interiorPkgs = [];
    if (typeof vehicleService.interior === "object" && !Array.isArray(vehicleService.interior)) {
      if ('name' in vehicleService.interior) {
        // Single package
        const pkg = vehicleService.interior as any;
        interiorPkgs.push({
          name: pkg.name,
          price: pkg.pricePerFt ? `$${pkg.pricePerFt}/ft` : `$${pkg.price}`,
          features: pkg.includes,
          isFeatured: true,
        });
      } else {
        // Nested packages
        for (const [key, pkg] of Object.entries(vehicleService.interior as Record<string, any>)) {
          interiorPkgs.push({
            name: pkg.name,
            price: pkg.pricePerFt ? `$${pkg.pricePerFt}/ft` : `$${pkg.price}`,
            features: pkg.includes,
            isFeatured: key === "premium",
          });
        }
      }
    }
    if (interiorPkgs.length > 0) sections.push({
      title: "Interior Packages",
      packages: interiorPkgs,
    });
  }

  // Exterior
  if (vehicleService.exterior) {
    const exteriorPkgs = [];
    if (typeof vehicleService.exterior === "object" && !Array.isArray(vehicleService.exterior)) {
      if ('name' in vehicleService.exterior) {
        // Single package
        const pkg = vehicleService.exterior as any;
        exteriorPkgs.push({
          name: pkg.name,
          price: pkg.pricePerFt ? `$${pkg.pricePerFt}/ft` : `$${pkg.price}`,
          features: pkg.includes,
          isFeatured: true,
        });
      } else {
        // Nested packages
        for (const [key, pkg] of Object.entries(vehicleService.exterior as Record<string, any>)) {
          exteriorPkgs.push({
            name: pkg.name,
            price: pkg.pricePerFt ? `$${pkg.pricePerFt}/ft` : `$${pkg.price}`,
            features: pkg.includes,
            isFeatured: key === "premium",
          });
        }
      }
    }
    if (exteriorPkgs.length > 0) sections.push({
      title: "Exterior Packages",
      packages: exteriorPkgs,
    });
  }

  // Full
  if (vehicleService.full) {
    const fullPkgs = [];
    if (typeof vehicleService.full === "object" && !Array.isArray(vehicleService.full)) {
      if ('name' in vehicleService.full) {
        // Single package
        const pkg = vehicleService.full as any;
        fullPkgs.push({
          name: pkg.name,
          price: pkg.pricePerFt ? `$${pkg.pricePerFt}/ft` : `$${pkg.price}`,
          features: pkg.includes,
          isFeatured: true,
        });
      } else {
        // Nested packages
        for (const [key, pkg] of Object.entries(vehicleService.full as Record<string, any>)) {
          fullPkgs.push({
            name: pkg.name,
            price: pkg.pricePerFt ? `$${pkg.pricePerFt}/ft` : `$${pkg.price}`,
            features: pkg.includes,
            isFeatured: key === "premium",
          });
        }
      }
    }
    if (fullPkgs.length > 0) sections.push({
      title: "Full Packages",
      packages: fullPkgs,
    });
  }

  serviceCategories[vt.id] = {
    title: `${vt.name} Detailing Packages`,
    description: `Professional detailing services tailored for your ${vt.name.toLowerCase()}.`,
    image: getVehicleImage(vt.id),
    sections,
  };
});

const Services = () => {
  const [activeTab, setActiveTab] = useState("sedan");

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const currentCategory = serviceCategories[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      <Navbar />

      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >

            <br />
            <br />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tighter">
              Discover Our <span className="text-red-600">Premium Services</span>
            </h1>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full shadow-red-500/50 shadow-lg"></div>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Choose from specialized packages for every vehicle type, ensuring a
              flawless finish and long-lasting protection.
            </p>
          </motion.div>

          {/* Tabs */}
          <Tabs
            defaultValue="sedan"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Imperial Styled Tabs List */}
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-16 rounded-xl bg-gray-100 dark:bg-gray-900 shadow-xl p-2 border border-gray-200 dark:border-gray-800">
              {vehicleTypes.map((vt) => (
                <TabsTrigger
                  key={vt.id}
                  value={vt.id}
                  className="text-xs md:text-sm py-2 font-semibold rounded-lg transition-all duration-300
                             data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/50
                             text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                  {getVehicleIcon(vt.id)}
                  {vt.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            <TabsContent value={activeTab}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  {/* Hero style section */}
                  <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Image Banner */}
                    <Image
                      src={currentCategory.image}
                      alt={currentCategory.title}
                      width={1400}
                      height={500}
                      className="w-full h-72 md:h-[400px] object-cover"
                      priority
                    />
                    {/* Overlay with Text */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 tracking-tighter">
                        {currentCategory.title}
                      </h2>
                      <p className="text-red-400 max-w-3xl text-lg md:text-xl font-medium">
                        {currentCategory.description}
                      </p>
                    </div>
                  </div>

                  {/* Packages Grid */}
                  {currentCategory.sections.map((section, idx) => (
                    <div key={idx} className="mb-16">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center tracking-tight">
                        {section.title}
                      </h3>
                      <div className={`grid grid-cols-1 md:grid-cols-2 ${section.packages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
                        {section.packages.map((pkg, index) => {
                          const isFeatured = pkg.isFeatured;
                          const cardClasses = isFeatured
                            ? "bg-red-600 text-white shadow-red-500/70 shadow-2xl transform scale-[1.02] border-4 border-white/50"
                            : "bg-white dark:bg-gray-900/80 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700";

                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ y: isFeatured ? -8 : -4, transition: { duration: 0.3 } }}
                              className={`rounded-2xl transition p-8 flex flex-col relative ${cardClasses}`}
                            >
                              {isFeatured && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold uppercase py-1 px-4 rounded-full shadow-lg">
                                  BEST VALUE
                                </div>
                              )}

                              <div className="flex-1">
                                <h4
                                  className={`text-2xl font-extrabold mb-1 uppercase ${
                                    isFeatured ? "text-white" : "text-red-600"
                                  }`}
                                >
                                  {pkg.name}
                                </h4>
                                <p
                                  className={`text-3xl font-bold mb-6 ${
                                    isFeatured ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {pkg.price}
                                </p>
                                <ul className="space-y-3 text-base flex-1">
                                  {(pkg.features || []).map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                      <Check
                                        className={`h-5 w-5 flex-shrink-0 mr-3 mt-0.5 ${
                                          isFeatured ? "text-white" : "text-red-600"
                                        }`}
                                      />
                                      <span className={isFeatured ? "text-white" : "text-gray-700 dark:text-gray-300"}>
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Link href={`/booking?package=${pkg.name.toLowerCase().replace(/\s/g, '-')}`} className="w-full mt-8">
                                <Button
                                  className={`w-full py-6 text-base font-bold group rounded-lg transition
                                    ${
                                      isFeatured
                                        ? "bg-white text-red-600 hover:bg-gray-200"
                                        : "bg-red-600 text-white hover:bg-red-700"
                                    }`}
                                >
                                  Book This Package
                                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          </Tabs>

          {/* Bottom CTA */}
          <motion.div
            className="mt-20 bg-gray-900 border border-red-600 shadow-2xl shadow-gray-700/50 p-12 rounded-3xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-red-200 max-w-xl mx-auto mb-8 text-lg">
              Our specialists can craft a bespoke detailing plan, including a mix
              of our protection and restoration services, tailored precisely to
              your vehicle's needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" passHref>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition text-lg font-bold shadow-red-500/50 shadow-md">
                  Start Your Booking
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button className="bg-white text-gray-900 border-2 border-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition text-lg font-bold">
                  Consult with an Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    
     <Footer/>
    </div>
    
  );
 
};


export default Services;
"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/testimonial/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ProcessSection from "@/components/ProcessSection";
import { motion } from "framer-motion";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Imperial Auto Detailing",
            "description": "Premium mobile car detailing services including ceramic coating, paint correction, and interior detailing.",
            "url": "https://imperial-auto-detailing.vercel.app",
            "telephone": "+15555555555",
            "email": "info@imperialdetailing.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Downtown",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "34.0522",
              "longitude": "-118.2437"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "34.0522",
                "longitude": "-118.2437"
              },
              "geoRadius": "48280.3"
            },
            "serviceType": ["Car Detailing", "Ceramic Coating", "Paint Correction", "Window Tinting", "Interior Detailing"],
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
            "sameAs": [
              "https://www.facebook.com/imperialspadetailing/",
              "https://www.instagram.com/imperialspadetailing/"
            ]
          }),
        }}
      />
      <div className="min-h-screen overflow-hidden">
        <Navbar />

        <br/>
        <br/>
        {/* Hero Section */}
        <Hero />

        {/* Main Sections */}
        <div className="bg-black">
          <motion.div
            id="premium-mobile-car-detailing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-20"
          >
            <ServicesSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-20"
          >
            <ProcessSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-20"
          >
            <AboutSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-20"
          >
            <FeaturedWorks />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-20"
          >
            <TestimonialsSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="py-16 md:py-20"
          >
            <CtaSection />
          </motion.div>
        </div>
      </div>
    </>
  );
}




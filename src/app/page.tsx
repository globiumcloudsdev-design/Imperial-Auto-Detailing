"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/testimonial/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ProcessSection from "@/components/ProcessSection";
import DiscountModal from "@/components/DiscountModal";
import { motion } from "framer-motion";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show modal only once - check if promo code has been claimed
    const hasClaimedPromo = localStorage.getItem('promoCodeClaimed');
    if (!hasClaimedPromo) {
      // Set up intersection observer for hero section
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              // Hero is out of view, show modal
              setShowModal(true);
              observer.disconnect(); // Stop observing once shown
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of hero is visible
      );

      if (heroRef.current) {
        observer.observe(heroRef.current);
      }

      return () => observer.disconnect();
    }
  }, []);

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
              "addressLocality": "Virginia Beach",
              "addressRegion": "VA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.8529",
              "longitude": "-75.9780"
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Virginia Beach"
              },
              {
                "@type": "City",
                "name": "Norfolk"
              },
              {
                "@type": "City",
                "name": "Chesapeake"
              }
            ],
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
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="5101f18c-0e4e-4b15-a44b-3072ca488e30";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();window.$crisp.push(["set", "chat:branding", false]);`
        }}
      />
      <div className="min-h-screen overflow-hidden">
        <Navbar />

        <br/>
        <br/>
        {/* Hero Section */}
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* Discount Modal */}
        <DiscountModal isOpen={showModal} onClose={() => setShowModal(false)} />

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




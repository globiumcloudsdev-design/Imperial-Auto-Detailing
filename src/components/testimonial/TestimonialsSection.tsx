"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Heather Bennett",
      role: "Happy Customer",
      avatar: "/heather.png",
      rating: 5,
      testimonial:
        "“Engaged purely by contemplation, however, which means that we endure pains, and receive a training in what is necessary. The raging cosmic consciousness living inside a magnificent structure must be able to do what is best for itself, but only when it has acquired the beginning of knowledge.”",
      date: "April 10, 2025",
    },
    {
      name: "Michael S.",
      role: "Entrepreneur",
      avatar: "/michael.png",
      rating: 5,
      testimonial:
        "“The detailers were extremely professional and did an amazing job on my SUV. It looks better than when I first bought it! I'm truly impressed with the results and the attention to detail.”",
      date: "April 10, 2025",
    },
    {
      name: "Jessica R.",
      role: "Designer",
      avatar: "/jessica.png",
      rating: 5,
      testimonial:
        "“So convenient that they came to my house. The ceramic coating makes water bead beautifully and the car stays clean longer. Highly recommend for anyone looking for premium mobile detailing.”",
      date: "March 22, 2025",
    },
    {
      name: "David T.",
      role: "Developer",
      avatar: "/david.png",
      rating: 5,
      testimonial:
        "“I got window tinting done and couldn't be happier with the results. Professional service and excellent quality. The team was punctual and very efficient.”",
      date: "February 15, 2025",
    },
    {
      name: "Amanda K.",
      role: "Manager",
      avatar: "/amanda.png",
      rating: 4,
      testimonial:
        "“Great service and attention to detail. My car looks amazing after the full detail. Would definitely recommend! Minor delay in arrival but overall a fantastic experience.”",
      date: "January 30, 2025",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section className="bg-red-600 relative py-20 min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* 🔴 Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* 🔴 Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-around items-start opacity-30">
        <div className="w-24 h-24 bg-red-700 rounded-full flex items-end justify-center pb-2">
          <div className="w-12 h-12 bg-red-800 rounded-full"></div>
        </div>
        <div className="w-32 h-32 bg-red-700 rounded-full flex items-end justify-center pb-3">
          <div className="w-16 h-16 bg-red-800 rounded-full"></div>
        </div>
        <div className="w-20 h-20 bg-red-700 rounded-full flex items-end justify-center pb-1">
          <div className="w-10 h-10 bg-red-800 rounded-full"></div>
        </div>
        <div className="w-28 h-28 bg-red-700 rounded-full flex items-end justify-center pb-2">
          <div className="w-14 h-14 bg-red-800 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto min-h-[400px] flex flex-col justify-between">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Testimonials.
            </h2>
            <p className="text-lg text-gray-600">See what people are saying.</p>
          </motion.div>

          {/* Testimonial */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 flex-grow">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full"
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48">
                  <div className="absolute inset-0 bg-red-500 rounded-full opacity-30 scale-110"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-red-400 rounded-full opacity-60"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
                      {currentTestimonial.avatar ? (
                        <Image
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm">
                          No Image
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-grow text-center lg:text-left pt-6 lg:pt-0">
                  <Quote className="w-10 h-10 text-gray-300 mb-4 mx-auto lg:mx-0" />
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    {currentTestimonial.testimonial}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-md text-gray-500">{currentTestimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full shadow-md transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-red-600 w-5" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* 🔴 Blob Animation */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;

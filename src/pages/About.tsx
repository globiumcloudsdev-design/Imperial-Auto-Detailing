import Navbar from "@/components/Navbar";
import { Wrench, Car, Award } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <div className="container mx-auto px-4 pt-28 pb-20">
        {/* ================= OUR STORY SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Column: Image and Title */}
          <div className="relative order-2 lg:order-1">
            {/* ABOUT US Title - Single line and right-shifted center */}
            <h1
              className="absolute top-10 left-1/2 -translate-x-[35%] text-8xl md:text-[9rem] 
              font-extrabold text-gray-900 uppercase tracking-tight leading-none z-20"
            >
              ABOUT&nbsp;US
            </h1>

            {/* Image Container */}
            <div className="relative z-10 p-4 bg-white border border-gray-200 shadow-xl mt-48">
              <Image
                src="/about_us.png"
                alt="Imperial Auto Detailing team working on car"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Accent Icon */}
            <div className="absolute top-1/4 left-4 w-16 h-16 text-black z-0">
              <Wrench size={64} className="rotate-45 text-red-600 opacity-70" />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2 lg:pt-52">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              <strong className="text-red-600">Imperial Auto Detailing</strong> began with a clear mission: to redefine
              high-end car care by merging innovation, precision, and luxury into every client interaction. What started
              as a personal passion has quickly evolved into a trusted brand synonymous with excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our services span comprehensive detailing, long-lasting protection coatings, and expert restoration work.
              We guarantee that your car won't just look cleaned; it will feel meticulously renewed, ensuring your
              vehicle receives the imperial treatment it deserves.
            </p>

            {/* Accent Line */}
            <div className="w-12 h-1 bg-black mt-12"></div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
            THE <span className="text-red-600">IMPERIAL</span> ADVANTAGE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Car size={28} />,
                title: "Master Detailing",
                desc: "Meticulous work ensuring perfection in every corner.",
              },
              {
                icon: <Award size={28} />,
                title: "Certified Experts",
                desc: "Trained and certified in all luxury car care techniques.",
              },
              {
                icon: <Wrench size={28} />,
                title: "Exclusive Products",
                desc: "Only top-tier products for the best possible finish.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-start h-full"
              >
                <div className="text-red-600 mb-3 border-b-2 border-red-600/50 pb-2">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MISSION SECTION ================= */}
        <div className="text-center p-12 bg-white border border-gray-200 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <blockquote className="text-xl font-light text-red-600 max-w-4xl mx-auto leading-snug">
            "To elevate the car care experience by blending precision, innovation, and premium quality — ensuring every
            drive feels like the first."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;

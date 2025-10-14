import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Send,
  ChevronRight, 
} from "lucide-react";

const ImperialFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 pt-0 pb-8 relative overflow-hidden">
      {/* 1. TOP NEWSLETTER BAR */}
      <div className="bg-red-700 py-6 mb-12 shadow-xl">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white text-lg font-semibold tracking-wide flex-shrink-0">
            NEWSLETTER{" "}
            <span className="font-light block sm:inline">
              | Subscribe to our exclusive deals
            </span>
          </div>
          <div className="flex w-full md:w-auto md:max-w-sm">
            <input
              type="email"
              placeholder="your email"
              className="w-full p-3 bg-red-800 text-white placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-white border-none transition-all"
            />
            <button className="bg-black text-white px-5 flex items-center justify-center hover:bg-gray-800 transition-colors">
              Send <Send size={16} className="ml-2 transform -rotate-45" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Column 1: Contact Us Directly */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Contact Us Directly</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-red-600" />
                <a
                  href="tel:+15555555555"
                  className="hover:text-white transition-colors"
                >
                  (555) 555-5555
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-red-600" />
                <a
                  href="mailto:info@imperialdetailing.com"
                  className="hover:text-white transition-colors"
                >
                  info@imperialdetailing.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-red-600" />
                <span>Mobile Service</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Our Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1 text-red-600" />{" "}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Detailing Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 text-white">Detailing Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Ceramic Coating", href: "/ceramic" },
                { name: "Paint Correction", href: "/paint-correction" },
                { name: "Interior Detailing", href: "/interior" },
                { name: "Window Tinting", href: "/tinting" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-500 transition-colors flex items-center"
                  >
                    <ChevronRight size={14} className="mr-1 text-red-600" />{" "}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Logo and Social Media */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/lovable-uploads/imperial logo.png"
                alt="Imperial Auto Detailing Logo"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 mb-4 text-sm">
              The Hotel Show Pros (This will be replaced with your tagline)
            </p>
            <p className="text-gray-500 mb-6 text-sm">
              Experience automotive perfection.
            </p>

            <h4 className="text-sm font-semibold text-white mb-2">Follow us</h4>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/imperialspadetailing/"
                target="_blank"
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/imperialspadetailing/#"
                target="_blank"
                className="text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

            </div>
          </div>
        </div>

        {/* 3. BOTTOM COPYRIGHT */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-3 md:space-y-0">
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-red-500 transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <p>
            &copy; {currentYear}{" "}
            <span className="text-red-500 font-semibold">
              Imperial Auto Detailing
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ImperialFooter;

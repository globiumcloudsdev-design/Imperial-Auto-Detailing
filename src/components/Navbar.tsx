"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ---------------- 1. TOP BAR ---------------- */}
      <div className="fixed top-0 left-0 w-full bg-black text-xs text-gray-200 py-2 px-6 md:px-12 z-[50]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-4">
            <p>📞 1300 346 374</p>
            <p>📧 info@imperialautodetailing.com</p>

            {/* Social Icons Placeholder */}
            <div className="flex space-x-2">
              <Link href="#" className="hover:text-red-500">
                {/* Add social icon here later */}
                <span className="sr-only">Social</span>
              </Link>
            </div>
          </div>

          {/* Right: Promo Text + BOOK NOW */}
          <div className="flex items-center space-x-4">
            <p className="text-red-500 font-semibold uppercase hidden sm:block">
              FREE Battery Health Test & Wiper Blade Check with any Carwash Service
            </p>
            <Link
              href="/booking"
              className="text-white hover:text-red-500 font-bold ml-4 hidden sm:block"
            >
              | BOOK NOW
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------- 2. MAIN NAVBAR ---------------- */}
      <nav className="fixed top-9 md:top-10 left-0 w-full bg-white text-black shadow-lg z-40 px-6 md:px-12 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/lovable-uploads/imperial logo.png"
              alt="Imperial Logo"
              width={180}
              height={140}
              className="h-12 md:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium uppercase">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
                            { href: "/services/car-detailing", label: "Detailing" },

              { href: "/services/ceramic-coating", label: "Ceramic Coating" },
              // { href: "/wheel-repairs", label: "Wheel Repairs" },
              { href: "/services/window-tinting", label: "Tinting" },
              // { href: "/services/paint-correction", label: "Paint Correction" },
              { href: "/Services", label: "Services" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-black hover:text-red-600 transition-colors relative pb-1 ${pathname === item.href ? "text-red-600" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}

          </div>

          {/* Right: Book Now Button */}
          <div className="hidden lg:flex">
            <Link href="/booking">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-2 font-bold text-sm shadow-md transition-all h-auto"
                style={{
                  transform: "skewX(-15deg)",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                <span
                  style={{
                    transform: "skewX(15deg)",
                    display: "inline-block",
                  }}
                >
                  BOOK NOW
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-7 w-7 text-red-600" />
              ) : (
                <Menu className="h-7 w-7 text-red-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ---------------- 3. MOBILE MENU ---------------- */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[80px] left-0 w-full bg-white shadow-xl p-5 space-y-4 z-30 border-t border-red-600/30">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/ceramic-coating", label: "Ceramic Coating" },
            { href: "/wheel-repairs", label: "Wheel Repairs" },
            { href: "/detailing", label: "Detailing" },
            { href: "/tinting", label: "Tinting" },
            { href: "/panel-repair", label: "Panel Repair" },
            { href: "/price-list", label: "Price List" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-black hover:text-red-600 font-medium tracking-wide border-b border-gray-100 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/booking"
            onClick={() => setMobileMenuOpen(false)}
            className="pt-2 block"
          >
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md py-2 h-auto">
              BOOK NOW
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;

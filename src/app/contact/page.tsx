import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/pages/Contact";

export const metadata: Metadata = {
  title: 'Contact Imperial Auto Detailing | Get Your Quote Today',
  description: 'Get in touch with Imperial Auto Detailing for premium mobile car detailing services. Call (555) 555-5555 or email info@imperialdetailing.com. Serving clients in Virginia Beach, Norfolk, and Chesapeake, VA.',
  keywords: 'contact imperial auto detailing, car detailing quote, mobile detailing contact, detailing appointment, car care services, Virginia Beach, Norfolk, Chesapeake, VA',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Imperial Auto Detailing | Get Your Quote Today',
    description: 'Get in touch with Imperial Auto Detailing for premium mobile car detailing services. Call (555) 555-5555 or email info@imperialdetailing.com. Serving clients in Virginia Beach, Norfolk, and Chesapeake, VA.',
    url: 'https://imperial-auto-detailing.vercel.app/contact',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/about_us.png',
        width: 1200,
        height: 630,
        alt: 'Contact Imperial Auto Detailing for premium services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Imperial Auto Detailing | Get Your Quote Today',
    description: 'Get in touch with Imperial Auto Detailing for premium mobile car detailing services. Call (555) 555-5555 or email info@imperialdetailing.com. Serving clients in Virginia Beach, Norfolk, and Chesapeake, VA.',
    images: ['/about_us.png'],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Contact />

    </div>
  );
}

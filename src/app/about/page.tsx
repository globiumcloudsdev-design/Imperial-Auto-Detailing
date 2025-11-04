import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/pages/About";

export const metadata: Metadata = {
  title: 'About Imperial Auto Detailing | Our Story & Expertise',
  description: 'Learn about Imperial Auto Detailing\'s commitment to excellence. Professional car detailing services with certified experts, premium products, and mobile convenience.',
  keywords: 'about imperial auto detailing, car detailing company, professional detailers, mobile car detailing, detailing experts',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/about',
  },
  openGraph: {
    title: 'About Imperial Auto Detailing | Our Story & Expertise',
    description: 'Learn about Imperial Auto Detailing\'s commitment to excellence. Professional car detailing services with certified experts, premium products, and mobile convenience.',
    url: 'https://imperial-auto-detailing.vercel.app/about',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/about_us.png',
        width: 1200,
        height: 630,
        alt: 'Imperial Auto Detailing team and services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Imperial Auto Detailing | Our Story & Expertise',
    description: 'Learn about Imperial Auto Detailing\'s commitment to excellence. Professional car detailing services with certified experts, premium products, and mobile convenience.',
    images: ['/about_us.png'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <About />

    </div>
  );
}

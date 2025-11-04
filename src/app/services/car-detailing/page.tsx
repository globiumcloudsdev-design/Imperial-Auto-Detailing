import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import CarDetailing from "@/pages/ServiceLanding/CarDetailing";

export const metadata: Metadata = {
  title: 'Car Detailing Services | Complete Interior & Exterior Care',
  description: 'Professional car detailing services including interior cleaning, exterior washing, waxing, and protection. Mobile service brings premium detailing to your location.',
  keywords: 'car detailing, interior detailing, exterior detailing, mobile car wash, vehicle detailing, auto detailing services',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/services/car-detailing',
  },
  openGraph: {
    title: 'Car Detailing Services | Complete Interior & Exterior Care',
    description: 'Professional car detailing services including interior cleaning, exterior washing, waxing, and protection. Mobile service brings premium detailing to your location.',
    url: 'https://imperial-auto-detailing.vercel.app/services/car-detailing',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/sedan.png',
        width: 1200,
        height: 630,
        alt: 'Professional car detailing services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Detailing Services | Complete Interior & Exterior Care',
    description: 'Professional car detailing services including interior cleaning, exterior washing, waxing, and protection. Mobile service brings premium detailing to your location.',
    images: ['/sedan.png'],
  },
}

export default function CarDetailingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CarDetailing />

    </div>
  );
}

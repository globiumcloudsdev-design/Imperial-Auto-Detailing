import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";

import Services from "@/pages/Services";

export const metadata: Metadata = {
  title: 'Car Detailing Services | Imperial Auto Detailing',
  description: 'Explore our comprehensive car detailing services including ceramic coating, paint correction, window tinting, and interior detailing. Professional mobile service for all vehicle types.',
  keywords: 'car detailing services, ceramic coating, paint correction, window tinting, interior detailing, mobile detailing, vehicle detailing',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/services',
  },
  openGraph: {
    title: 'Car Detailing Services | Imperial Auto Detailing',
    description: 'Explore our comprehensive car detailing services including ceramic coating, paint correction, window tinting, and interior detailing. Professional mobile service for all vehicle types.',
    url: 'https://imperial-auto-detailing.vercel.app/services',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/slider_1.png',
        width: 1200,
        height: 630,
        alt: 'Imperial Auto Detailing services showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Detailing Services | Imperial Auto Detailing',
    description: 'Explore our comprehensive car detailing services including ceramic coating, paint correction, window tinting, and interior detailing. Professional mobile service for all vehicle types.',
    images: ['/slider_1.png'],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Services />

    </div>
  );
}

import type { Metadata } from 'next'
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Booking from "@/pages/Booking";

export const metadata: Metadata = {
  title: 'Book Car Detailing Service | Imperial Auto Detailing',
  description: 'Schedule your premium mobile car detailing service with Imperial Auto Detailing. Choose from ceramic coating, paint correction, window tinting, and more. Convenient booking for all vehicle types.',
  keywords: 'book car detailing, schedule detailing service, mobile detailing booking, ceramic coating booking, paint correction appointment',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/booking',
  },
  openGraph: {
    title: 'Book Car Detailing Service | Imperial Auto Detailing',
    description: 'Schedule your premium mobile car detailing service with Imperial Auto Detailing. Choose from ceramic coating, paint correction, window tinting, and more. Convenient booking for all vehicle types.',
    url: 'https://imperial-auto-detailing.vercel.app/booking',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/slider_1.png',
        width: 1200,
        height: 630,
        alt: 'Book your Imperial Auto Detailing service today',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Car Detailing Service | Imperial Auto Detailing',
    description: 'Schedule your premium mobile car detailing service with Imperial Auto Detailing. Choose from ceramic coating, paint correction, window tinting, and more. Convenient booking for all vehicle types.',
    images: ['/slider_1.png'],
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <Booking />

    </div>
  );
}

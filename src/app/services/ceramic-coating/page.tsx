import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import CeramicCoating from "@/pages/ServiceLanding/CeramicCoating";

export const metadata: Metadata = {
  title: 'Ceramic Coating Services | Premium Paint Protection',
  description: 'Professional ceramic coating services for ultimate paint protection. Long-lasting shine, hydrophobic properties, and scratch resistance. Mobile service available.',
  keywords: 'ceramic coating, paint protection, hydrophobic coating, scratch resistance, nano ceramic, auto coating services',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/services/ceramic-coating',
  },
  openGraph: {
    title: 'Ceramic Coating Services | Premium Paint Protection',
    description: 'Professional ceramic coating services for ultimate paint protection. Long-lasting shine, hydrophobic properties, and scratch resistance. Mobile service available.',
    url: 'https://imperial-auto-detailing.vercel.app/services/ceramic-coating',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/ceramicbefore.png',
        width: 1200,
        height: 630,
        alt: 'Ceramic coating transformation - before and after',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ceramic Coating Services | Premium Paint Protection',
    description: 'Professional ceramic coating services for ultimate paint protection. Long-lasting shine, hydrophobic properties, and scratch resistance. Mobile service available.',
    images: ['/ceramicbefore.png'],
  },
}

export default function CeramicCoatingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CeramicCoating />

    </div>
  );
}

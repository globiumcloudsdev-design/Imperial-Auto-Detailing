import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import WindowTinting from "@/pages/ServiceLanding/WindowTinting";

export const metadata: Metadata = {
  title: 'Window Tinting Services | Premium Film Installation',
  description: 'Professional window tinting services for UV protection, privacy, and style. High-quality films installed by certified technicians. Mobile service available.',
  keywords: 'window tinting, car window tint, UV protection, privacy tint, auto tinting, window film installation',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/services/window-tinting',
  },
  openGraph: {
    title: 'Window Tinting Services | Premium Film Installation',
    description: 'Professional window tinting services for UV protection, privacy, and style. High-quality films installed by certified technicians. Mobile service available.',
    url: 'https://imperial-auto-detailing.vercel.app/services/window-tinting',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/windowafter.png',
        width: 1200,
        height: 630,
        alt: 'Professional window tinting services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Tinting Services | Premium Film Installation',
    description: 'Professional window tinting services for UV protection, privacy, and style. High-quality films installed by certified technicians. Mobile service available.',
    images: ['/windowafter.png'],
  },
}

export default function WindowTintingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WindowTinting />

    </div>
  );
}

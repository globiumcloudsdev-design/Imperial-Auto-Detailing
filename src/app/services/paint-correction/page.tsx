import type { Metadata } from 'next'
import Navbar from "@/components/Navbar";
import PaintCorrection from "@/pages/ServiceLanding/PaintCorrection";

export const metadata: Metadata = {
  title: 'Paint Correction Services | Restore Your Car\'s Shine',
  description: 'Expert paint correction services to remove scratches, swirl marks, and oxidation. Professional polishing and buffing for flawless paint finish. Mobile service available.',
  keywords: 'paint correction, scratch removal, swirl mark removal, car polishing, paint restoration, auto detailing paint correction',
  alternates: {
    canonical: 'https://imperial-auto-detailing.vercel.app/services/paint-correction',
  },
  openGraph: {
    title: 'Paint Correction Services | Restore Your Car\'s Shine',
    description: 'Expert paint correction services to remove scratches, swirl marks, and oxidation. Professional polishing and buffing for flawless paint finish. Mobile service available.',
    url: 'https://imperial-auto-detailing.vercel.app/services/paint-correction',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/paint.png',
        width: 1200,
        height: 630,
        alt: 'Paint correction services for flawless finish',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paint Correction Services | Restore Your Car\'s Shine',
    description: 'Expert paint correction services to remove scratches, swirl marks, and oxidation. Professional polishing and buffing for flawless paint finish. Mobile service available.',
    images: ['/paint.png'],
  },
}

export default function PaintCorrectionPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
     <PaintCorrection/>

    </div>
  );
}

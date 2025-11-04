import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Imperial Auto Detailing | Premium Mobile Car Detailing Services',
  description: 'Experience luxury car detailing at your doorstep. Professional ceramic coating, paint correction, and interior detailing services. Serving premium clients within 30 miles of Downtown.',
  keywords: 'car detailing, mobile detailing, ceramic coating, paint correction, window tinting, auto detailing, luxury car care',
  authors: [{ name: 'Imperial Auto Detailing' }],
  creator: 'Imperial Auto Detailing',
  publisher: 'Imperial Auto Detailing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://imperial-auto-detailing.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Imperial Auto Detailing | Premium Mobile Car Detailing Services',
    description: 'Experience luxury car detailing at your doorstep. Professional ceramic coating, paint correction, and interior detailing services.',
    url: 'https://imperial-auto-detailing.vercel.app',
    siteName: 'Imperial Auto Detailing',
    images: [
      {
        url: '/lovable-uploads/imperial logo.png',
        width: 1200,
        height: 630,
        alt: 'Imperial Auto Detailing Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imperial Auto Detailing | Premium Mobile Car Detailing Services',
    description: 'Experience luxury car detailing at your doorstep. Professional ceramic coating, paint correction, and interior detailing services.',
    images: ['/lovable-uploads/imperial logo.png'],
    creator: '@imperialdetailing',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
  },
}




// 👇 Yeh alag export hona chahiye
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  )
}

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

// viewport export handles theme-color without a manual <head> tag
export const viewport = {
  themeColor: '#020917',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://rovia.money'),
  title: {
    template: '%s | Rovia',
    default: 'Rovia — RSU Management for Indian Residents at US Companies',
  },
  description:
    'Indian residents at Google, Meta, Microsoft, Amazon, Apple, Netflix: manage your US RSUs with Rovia. INR cost basis, 0 platform FX markup, Schedule FA auto-generated. 48 US companies supported.',
  keywords: [
    'RSU India', 'RSU management India', 'FAANG RSU India', 'US stock India',
    'INR cost basis RSU', 'Schedule FA RSU', 'LTCG India RSU',
    'transfer RSU to India', 'RSU Indian employees', 'US equity India tax',
  ],
  openGraph: {
    siteName: 'Rovia',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Rovia — RSU Management for Indian Residents' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@roviaHQ',
    images: ['/og-default.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // NOTE: No canonical here — each page sets its own via alternates.canonical
};

// Organization + WebSite schema — appears on every page via layout
const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://rovia.money/#organization',
      name: 'Rovia',
      url: 'https://rovia.money',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rovia.money/rovia-logo-dark.png',
        width: 960,
        height: 1080,
      },
      description:
        'Rovia is an India-first investment platform for Indian residents holding US RSUs from FAANG and US technology companies. It provides INR cost basis tracking, 0 platform FX markup on repatriation, Schedule FA auto-generation, and 24-month LTCG countdown per lot.',
      sameAs: ['https://rovia.one'],
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: [
        'RSU management for Indian residents',
        'US equity tax reporting India',
        'Schedule FA India',
        'LTCG India US stocks',
        'INR cost basis RSU',
        'Foreign tax credit India Form 67',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rovia.money/#website',
      url: 'https://rovia.money',
      name: 'Rovia — RSU Management for Indian Residents',
      description:
        'Manage US RSUs as an Indian resident. INR cost basis at every vest, 0 platform FX markup, Schedule FA auto-generated. Supports employees at 48 US technology companies.',
      publisher: { '@id': 'https://rovia.money/#organization' },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://rovia.money/{search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FinancialService',
      '@id': 'https://rovia.money/#service',
      name: 'Rovia RSU Management Platform',
      description:
        'RSU management, tax reporting, and repatriation platform for Indian residents at US technology companies.',
      provider: { '@id': 'https://rovia.money/#organization' },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Investment Management',
      offers: {
        '@type': 'Offer',
        name: 'RSU Management for Indian Residents',
        description:
          'INR cost basis tracking, 0 platform FX markup, Schedule FA, Form 67 / FTC support, 24-month LTCG countdown.',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B88TDLNG49"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B88TDLNG49');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

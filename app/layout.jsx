import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://rovia.money'),
  title: {
    template: '%s | Rovia',
    default: 'Rovia — RSU management for Indian FAANG employees',
  },
  description:
    'Move your RSUs from Fidelity, Schwab, or Morgan Stanley to Rovia. INR cost basis, 0 platform FX markup, India-tax reporting built-in. For Indian residents at Google, Meta, Microsoft, Amazon, Apple, Netflix.',
  openGraph: {
    siteName: 'Rovia',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

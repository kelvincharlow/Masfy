import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/home/Footer';
import { WhatsAppWidget } from '@/components/contact/WhatsAppWidget';
import { ScrollRestoration } from '@/components/navigation/ScrollRestoration';

const siteUrl = 'https://www.masfyconsultants.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Masfy Consulting Engineers | Civil & Structural Engineering Consultants in Kenya',
  description:
    'Civil and structural engineering solutions for safe, efficient, and buildable projects across Kenya and the region.',
  applicationName: 'Masfy Consulting Engineers',
  icons: {
    icon: '/Masfy Logo 2025_New_Version.png',
    apple: '/Masfy Logo 2025_New_Version.png',
  },
  openGraph: {
    title: 'Masfy Consulting Engineers',
    description:
      'Civil and structural engineering consultants in Kenya for safe, efficient, and buildable projects.',
    url: siteUrl,
    siteName: 'Masfy Consulting Engineers',
    images: [
      {
        url: '/Masfy Logo 2025_New_Version.png',
        width: 800,
        height: 800,
        alt: 'Masfy Consulting Engineers logo',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Masfy Consulting Engineers',
    description:
      'Civil and structural engineering consultants in Kenya for safe, efficient, and buildable projects.',
    images: ['/Masfy Logo 2025_New_Version.png'],
  },
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Masfy Consulting Engineers',
  url: siteUrl,
  logo: `${siteUrl}/Masfy%20Logo%202025_New_Version.png`,
  email: 'manza@masfyconsultants.com',
  telephone: '+254726365516',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'The Crescent Pearl, 1st Floor, Crescent Road, Westlands',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: ['Kenya', 'East Africa'],
  serviceType: [
    'Civil engineering consultancy',
    'Structural engineering consultancy',
    'Foundation design',
    'Drainage design',
    'Structural assessment',
    'Construction supervision support',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <ScrollRestoration />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </body>
    </html>
  );
}

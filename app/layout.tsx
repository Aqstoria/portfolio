import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aqstoria - Custom Software Development & Social Media Marketing Agency',
  description: 'Leading digital agency specializing in custom software development, mobile apps, UI/UX design, and social media marketing. Transform your business with cutting-edge technology and strategic marketing campaigns.',
  keywords: 'custom software development, social media marketing agency, mobile app development, UI/UX design, web development, digital marketing, React, Next.js, Shopify development, WordPress development',
  authors: [{ name: 'Aqstoria Team' }],
  creator: 'Aqstoria',
  publisher: 'Aqstoria',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aqstoria.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aqstoria - Custom Software Development & Social Media Marketing Agency',
    description: 'Leading digital agency specializing in custom software development, mobile apps, UI/UX design, and social media marketing. Transform your business with cutting-edge technology and strategic marketing campaigns.',
    url: 'https://aqstoria.com',
    siteName: 'Aqstoria',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aqstoria - Digital Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aqstoria - Custom Software Development & Social Media Marketing Agency',
    description: 'Leading digital agency specializing in custom software development, mobile apps, UI/UX design, and social media marketing.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aqstoria",
              "url": "https://aqstoria.com",
              "logo": "https://aqstoria.com/logo.png",
              "description": "Leading digital agency specializing in custom software development, mobile apps, UI/UX design, and social media marketing.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-300-123-4567",
                "contactType": "customer service",
                "email": "hello@aqstoria.com"
              },
              "sameAs": [
                "https://github.com/Aqstoria",
                "https://linkedin.com/company/aqstoria",
                "https://twitter.com/aqstoria",
                "https://instagram.com/aqstoria"
              ],
              "serviceType": [
                "Custom Software Development",
                "Mobile App Development", 
                "Social Media Marketing",
                "UI/UX Design",
                "Web Development",
                "Shopify Development",
                "WordPress Development"
              ],
              "areaServed": "Worldwide",
              "foundingDate": "2020"
            })
          }}
        />
        
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Our Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "position": 1,
                  "name": "Custom Software Development",
                  "description": "Scalable web applications, SaaS platforms, and enterprise solutions built with modern technologies.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Aqstoria"
                  }
                },
                {
                  "@type": "Service", 
                  "position": 2,
                  "name": "Mobile App Development",
                  "description": "Native iOS/Android apps and cross-platform solutions with React Native and Flutter.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Aqstoria"
                  }
                },
                {
                  "@type": "Service",
                  "position": 3, 
                  "name": "Social Media Marketing",
                  "description": "Strategic campaigns across all platforms with data-driven analytics and ROI tracking.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Aqstoria"
                  }
                },
                {
                  "@type": "Service",
                  "position": 4,
                  "name": "UI/UX Design", 
                  "description": "User-centered design solutions that enhance engagement and drive conversions.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Aqstoria"
                  }
                }
              ]
            })
          }}
        />
        
        {/* Review Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "Organization",
                "name": "Aqstoria"
              },
              "ratingValue": "5.0",
              "reviewCount": "50",
              "bestRating": "5",
              "worstRating": "1"
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

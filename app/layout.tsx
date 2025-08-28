// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { GTM_ID } from '../lib/gtm'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Birla Tyres',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PD2KCX5N3B"
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PD2KCX5N3B');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="M99YrbaDtKwQg9Kuv_9Ip5VI6UlQgSx8ZvkCkNSWsaA"
        />

        {/* JSON-LD Schema: WebSite */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Birla Tyres",
              "url": "https://www.birlatyre.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* JSON-LD Schema: Organization */}
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Birla Tyres",
              "url": "https://www.birlatyre.com/",
              "logo":
                "https://admin.birlatyre.com/uploads/Birla_Tyre_Logo_Final_5_4_24_1_c0eb4135a3.png",
              "parentOrganization": {
                "@type": "Organization",
                "name": "Himadri Speciality Chemical Ltd & Dalmia Bharat Refractories Limited",
              },
              "foundingDate": "1991",
              "description":
                "Discover Birla Tyres – robust truck & bus tyres, heavy-duty off-road solutions, and durable agricultural tyres designed for performance, traction & reliability.",
              "sameAs": [
                "https://www.facebook.com/birlatyres.global/",
                "https://x.com/birla_tyres",
                "https://www.linkedin.com/company/birlatyresglobal",
                "https://www.instagram.com/birlatyres.global/",
                "https://youtube.com/@birlatyres.global",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 89613 90011",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English"],
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress":
                  "Balasore, Chhanpur, Khata No.497/1925, Plot No. 1747/2023",
                "addressLocality": "Balasore",
                "addressRegion": "Odisha",
                "postalCode": "756056",
                "addressCountry": "IN",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  )
}

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
        {/* Google tag (gtag.js) */}
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
        {/* GTM Script */}
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
      </head>
      <body className={inter.className}>
        {/* GTM noscript fallback */}
<noscript>
  <iframe 
  src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0"
 width="0"
  style={{display:"none" , visibility:"hidden"}}
  ></iframe>
</noscript>

        {children}
      </body>
    </html>
  )
}

import React from "react"
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-QF0C5C17LW'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umamiso.aizu-syokubura.com"),
  title: {
    default: "会津ブランド館｜福島県会津の特産品・グルメ通販",
    template: "%s | 会津ブランド館",
  },
  description: "福島県会津の特産品・グルメを全国にお届け。本格喜多方ラーメンをはじめとした会津の味をお楽しみください。",
  generator: "Next.js",
  applicationName: "会津ブランド館",
  referrer: "origin-when-cross-origin",
  keywords: ["会津", "福島", "特産品", "グルメ", "通販", "喜多方ラーメン", "食べるウマミソ", "馬肉"],
  authors: [{ name: "会津ブランド館", url: "https://umamiso.aizu-syokubura.com" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import { Josefin_Sans, Zen_Old_Mincho } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://common-ordinarydays.com/'),
  title: {
    default: "Common. | Studio",
    template: "%s | Common."
  },
  description: "千葉県流山市を拠点に、ホームページ制作、ブランディング、アートディレクションを行うクリエイティブスタジオ。一過性の流行ではなく、普遍的な美学を追求し、ブランドの本質を形にします。",
  keywords: ["Common.", "コモン", "流山市", "千葉県", "ホームページ制作", "Web制作", "デザインスタジオ", "ブランディング", "アートディレクション", "制作会社"],
  icons: {
    icon: '/favicon.ico?v=2',
  },
  verification: {
    google: 'YJXNCRyyaNWRHupGBf2FzQQ0Ypy-KJXcm15cob4gN7M',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://common-ordinarydays.com/',
    siteName: 'Common.',
    title: 'Common. | Studio',
    description: '「普通」の中に潜む美しさを定義する。一過性の流行ではなく、普遍的な美学を追求するクリエイティブスタジオ。',
    images: [
      {
        url: '/ogp-image.png',
        width: 1200,
        height: 630,
        alt: 'Common. Studio - Beyond Minimalism',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Common. | Studio',
    description: '「普通」の中に潜む美しさを定義するクリエイティブスタジオ。',
    images: ['/ogp-image.png'],
  },
};

import SmoothScroll from "@/components/layout/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${josefinSans.variable} ${zenOldMincho.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-CTSK5M1NEW`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CTSK5M1NEW');
          `}
        </Script>
        {/* Local Business Structured Data */}
        <Script id="local-business-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Common.",
            "image": "https://common-ordinarydays.com/ogp-image.png",
            "@id": "https://common-ordinarydays.com",
            "url": "https://common-ordinarydays.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Nagareyama",
              "addressRegion": "Chiba",
              "addressCountry": "JP"
            },
            "description": "千葉県流山市を拠点に、ホームページ制作、ブランディング、アートディレクションを行うクリエイティブスタジオ。",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
              ],
              "opens": "10:00",
              "closes": "19:00"
            }
          })}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#e0e0e0]">
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual";`
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

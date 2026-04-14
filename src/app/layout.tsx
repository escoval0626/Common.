import type { Metadata } from "next";
import { Josefin_Sans, Zen_Old_Mincho } from "next/font/google";
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
  description: "「普通」の中に潜む美しさを定義する。一過性の流行ではなく、普遍的な美学を追求するクリエイティブスタジオ。Web制作、ブランディング、アートディレクションを通じて、ブランドの本質を形にします。",
  keywords: ["Design Studio", "Branding", "Web Production", "Art Direction", "Minimalism", "Portfolio"],
  icons: {
    icon: '/favicon.ico?v=2',
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

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
  title: "Common. | Studio",
  description: "日常の質感と、静寂の重みを愛する人々のためのデジタルスタジオ。",
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
          dangerouslySetInnerHTML={{ 
            __html: `history.scrollRestoration = "manual";` 
          }} 
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

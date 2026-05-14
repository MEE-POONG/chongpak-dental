import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-en",
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  variable: "--font-sans-th",
});

export const metadata: Metadata = {
  title: "Chongpak Dental Wellness | Premium Dental Spa",
  description: "Experience premium dental care in a serene and relaxing environment. เรามอบประสบการณ์การทำฟันที่ผ่อนคลายและหรูหรา เพื่อรอยยิ้มที่มั่นใจของคุณ",
};

import BackgroundCharacters from "@/components/layout/BackgroundCharacters";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${notoSansThai.variable} antialiased relative`}
      >
        <BackgroundCharacters />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ztFormom = localFont({
  src: [
    {
      path: "../fonts/ZTFormom.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ZTFormom-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-zt-formom",
});

export const metadata: Metadata = {
  title: "momentum - co-working sessions in london, ontario",
  description:
    "Momentum is a co-working community where creators, learners, and makers gather to work on passion projects. Join us Sundays at noon in London, Ontario.",
  keywords: [
    "Momentum",
    "Western University",
    "co-working",
    "community",
    "London Ontario",
    "passion projects",
    "creative collaboration",
    "UWO",
  ],
  openGraph: {
    title: "momentum - co-working sessions",
    description:
      "come create with us. sundays at noon in london, ontario.",
    url: "https://momentum.place",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "momentum - come create with us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "momentum - co-working sessions",
    description:
      "come create with us. sundays at noon in london, ontario.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ztFormom.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

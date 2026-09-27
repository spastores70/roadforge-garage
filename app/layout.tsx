import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roadforge-garage.vercel.app"),
  title: "RoadForge Garage | Truck Accessories, Reviews & Fitment Guides",
  description:
    "Independent truck accessory buying guides, fitment help, OEDRO product recommendations, and current automotive gear offers.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "truck accessories",
    "OEDRO reviews",
    "tonneau covers",
    "running boards",
    "truck floor liners",
    "truck gear guides",
  ],
  openGraph: {
    title: "RoadForge Garage — Upgrade Your Truck. Own Every Mile.",
    description:
      "Independent truck accessory reviews, fitment help, buying guides, and OEDRO gear recommendations for work and weekend builds.",
    url: "https://roadforge-garage.vercel.app/",
    siteName: "RoadForge Garage",
    type: "website",
    images: [
      {
        url: "https://roadforge-garage.vercel.app/roadforge-facebook-20260927.jpg",
        width: 1200,
        height: 630,
        alt: "RoadForge Garage — Upgrade your truck. Own every mile.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadForge Garage — Upgrade Your Truck. Own Every Mile.",
    description:
      "Independent truck accessory reviews, fitment help, buying guides, and OEDRO gear recommendations.",
    images: ["https://roadforge-garage.vercel.app/roadforge-facebook-20260927.jpg"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

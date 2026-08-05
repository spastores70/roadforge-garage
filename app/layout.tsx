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
  title: "RoadForge Garage | Truck Accessories, Reviews & Fitment Guides",
  description:
    "Independent truck accessory buying guides, fitment help, OEDRO product recommendations, and current automotive gear offers.",
  keywords: [
    "truck accessories",
    "OEDRO reviews",
    "tonneau covers",
    "running boards",
    "truck floor liners",
    "truck gear guides",
  ],
  openGraph: {
    title: "RoadForge Garage",
    description: "Upgrade your truck. Own every mile.",
    type: "website",
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

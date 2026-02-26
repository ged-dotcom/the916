import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The916 — Multiply What You Have",
    template: "%s — The916",
  },
  description:
    "The916 is a creator-powered movement building ethical influence, real-world impact, and faith-anchored innovation — restoring virtue, building culture, and pointing hearts to Jesus.",
  metadataBase: new URL("https://the916.com"),
  openGraph: {
    title: "The916 — Multiply What You Have",
    description:
      "A creator-powered movement restoring virtue, building culture, and pointing hearts to Jesus.",
    url: "https://the916.com",
    siteName: "The916",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The916 — Multiply What You Have",
    description:
      "A creator-powered movement restoring virtue, building culture, and pointing hearts to Jesus.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ colorScheme: "dark" }}
      >

        {/* Kit Email Script */}
        <Script
          src="https://f.convertkit.com/ckjs/ck.5.js"
          strategy="afterInteractive"
        />

        {children}

        <Analytics />

      </body>
    </html>
  );
}
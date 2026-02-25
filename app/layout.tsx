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
  title: {
    default: "The916 — Multiply What You Have",
    template: "%s — The916",
  },
  description:
    "The916 is a creator-powered movement building ethical influence, real-world impact, and faith-anchored innovation — restoring virtue, building culture, and pointing hearts to Jesus.",
  metadataBase: new URL("https://the916.vercel.app"), // update later to your real domain
  openGraph: {
    title: "The916 — Multiply What You Have",
    description:
      "A creator-powered movement restoring virtue, building culture, and pointing hearts to Jesus.",
    url: "https://the916.vercel.app",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
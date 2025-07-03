import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Martivi Consulting – Digital Growth Services",
    template: "%s | Martivi Consulting",
  },
  description:
    "Full-stack digital marketing, sales-enablement and business-development services from Tbilisi-based consultants.",
  metadataBase: new URL("https://www.martiviconsulting.com"),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.martiviconsulting.com",
    title: "Martivi Consulting – Digital Growth Services",
    description:
      "Full-stack digital marketing, sales-enablement and business-development services.",
    siteName: "Martivi Consulting",
    images: [
      {
        url: "/images/martivi consulting logo.png",
        width: 1200,
        height: 630,
        alt: "Martivi Consulting",
      },
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

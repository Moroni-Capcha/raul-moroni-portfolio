import type { Metadata } from "next";
import { Playfair_Display, Hanken_Grotesk, Geist } from "next/font/google";
import CrimsonAura from "@/components/CrimsonAura";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-geist",
  display: "swap",
});

const siteTitle = "Raúl Moroni Capcha — Desarrollador Frontend";
const siteDescription =
  "Portafolio de Raúl Moroni, desarrollador frontend especializado en React, Next.js y experiencias web de alto rendimiento. Proyectos reales con demo en vivo.";

export const metadata: Metadata = {
  metadataBase: new URL("https://raul-moroni-portfolio.vercel.app"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Raúl Moroni — Portafolio",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "/images/foto1.jpeg",
        width: 1254,
        height: 1254,
        alt: "Retrato de Raúl Moroni, desarrollador frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/foto1.jpeg"],
  },
  icons: {
    icon: "/images/logop.png",
    shortcut: "/images/logop.png",
    apple: "/images/logop.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${hankenGrotesk.variable} ${geist.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-background font-body text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
        <CrimsonAura />
        <div className="light-leak top-[-10%] left-[-10%]" aria-hidden="true" />
        <div className="light-leak bottom-[-10%] right-[-10%]" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

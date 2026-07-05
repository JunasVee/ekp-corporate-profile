import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PT Energi Konstruksi Prima Nusantara | EPC & Energy Infrastructure",
    template: "%s | EKP",
  },
  description:
    "EKP menyediakan layanan EPC terintegrasi — engineering, pengadaan, konstruksi, dan commissioning — untuk proyek Oil & Gas Onshore dan infrastruktur energi di seluruh Indonesia.",
  keywords: ["EPC", "Oil Gas", "Construction", "Energy", "Indonesia", "Engineering", "Mechanical", "Civil"],
  openGraph: {
    siteName: "PT Energi Konstruksi Prima Nusantara",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="antialiased font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

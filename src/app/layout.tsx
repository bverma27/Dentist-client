import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { clinicConfig } from "@/config/clinic";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clinicConfig.brand.clinicName} | Faridabad Dental Care`,
  description: clinicConfig.brand.shortDescription,
  keywords: [
    "Dentist in Faridabad",
    "Dental Clinic Sector 15 Faridabad",
    "Root Canal Treatment Faridabad",
    "Dental Implants Faridabad",
    "Painless Dentistry NCR",
    "Clear Aligners Faridabad",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-alabaster text-slate-charcoal">
        {children}
      </body>
    </html>
  );
}

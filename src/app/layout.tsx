import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body-raw",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Popo.Designs | Graphic Designer | Visuals that stick.",
  description:
    "Independent graphic designer working across branding, sports design and campaigns. Skopje, available worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-canvas font-body text-navy antialiased">
        <Sidebar />
        <MobileNav />
        <main className="lg:ml-[30%]">{children}</main>
      </body>
    </html>
  );
}

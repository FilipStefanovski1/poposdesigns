import type { Metadata } from "next";
import { Fredoka, Inter, Caveat } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display-raw",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body-raw",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand-raw",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Popos Designs — Web3 Product Design",
  description:
    "I help Web3 teams build products that feel simple, polished, and memorable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${inter.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-canvas font-body text-navy antialiased">
        {children}
      </body>
    </html>
  );
}

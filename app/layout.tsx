import type { Metadata } from "next";
import {
  Alfa_Slab_One,
  Bebas_Neue,
  Barlow_Condensed,
  Barlow_Semi_Condensed,
  Lato,
} from "next/font/google";
import "./globals.css";

const alfaSlab = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa-slab",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const barlowSemi = Barlow_Semi_Condensed({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-barlow-semi",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Garaje — Iconic by Design",
  description:
    "An automotive icon that transformed performance into art. Explore the Alfa Romeo 33 Stradale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alfaSlab.variable} ${bebas.variable} ${barlowCondensed.variable} ${barlowSemi.variable} ${lato.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const archivo = Archivo({
  subsets: ["latin"],
  // Added "100" weight for your minimalist H1 headers
  weight: ["100", "400", "500", "600", "700"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Lining Ao - Portfolio",
  description: "3rd Year Software Engineering Student at uOttawa",
  // No icons block needed if icon.svg is in src/app/
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Use archivo.variable to set the CSS variable.
          2. Use font-archivo to tell Tailwind to apply that font.
          3. Use antialiased for that clean, professional engineering look.
      */}
      <body className={`${archivo.variable} font-archivo antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

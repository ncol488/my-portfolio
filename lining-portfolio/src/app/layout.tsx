import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Lining Ao - Portfolio",
  description: "3rd Year Software Engineering Student at uOttawa",
  icons: {
    icon: "icon.svg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

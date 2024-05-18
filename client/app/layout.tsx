import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/index";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student's Chapter CSE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} font-montserrat scroll-smooth overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

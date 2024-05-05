import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} font-montserrat scroll-smooth`}>
        <div className="h-[72px] w-full border-b-[0.5px] border-primary_text fixed bg-background z-10"></div>
        {children}
        </body>
    </html>
  );
}

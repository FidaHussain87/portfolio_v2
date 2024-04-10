import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decoder's World",
  description:
    "This is my personal Portfolio Website, where I have showcased my projects, skills, experience, education and blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

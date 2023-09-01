"use client";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark overflow-hidden bg-background m-0 h-[100vh] w-[100vw]`}
      >
        <Navbar />
        <div className="min-h-screen mx-auto flex justify-center max-w-7xl main mt-[4rem]">
          {children}
        </div>
      </body>
    </html>
  );
}

import Navbar from "@/components/Navbar";
import Blob from "@/components/Blob";
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
    <html lang="en" className="overflow-hidden scroll-smooth">
      <body
        className={`${inter.className} dark bg-background m-0 h-[100vh] w-[100vw]`}
      >
        <Navbar />
        <Blob />

        <div className="select-none min-h-screen mx-auto flex justify-center max-w-6xl main mt-[4rem]">
          {children}
        </div>
      </body>
    </html>
  );
}

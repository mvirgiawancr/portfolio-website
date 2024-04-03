import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moch Virgiawan Caesar Ridollohi",
  description: "Website Portfolio M Virgiawan CR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className} bg-black`}>
        <Navbar />
        {children}
        <Skills />
        <Projects />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/toaster";
// import StairTransition from "@/components/StairTransition";

export const metadata: Metadata = {
  title: "Ashok Shrestha | Full Stack Developer",
  description: "Protfolio",
};

const raleway = localFont({
  src: "./fonts/Raleway.woff2",
  variable: "--fonts-raleway",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased text-white/80`}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}

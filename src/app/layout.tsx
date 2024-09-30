import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Cadence Private Capital | Private Equity Partners for the Lower Middle Market",
  description:
    "Based in Minneapolis, Minnesota, Cadence Private Capital invests in lower middle market companies to drive maximum value for our business partners and investors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${montserrat.className}`}>
        <NextUIProvider>
          <Nav />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}

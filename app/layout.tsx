import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({subsets : ['latin']});

export const metadata: Metadata = {
  title: "MUHAMAD REZA MUKTASIB",
  description: "PORTOFOLIO APP M REZA MUKTASIB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"overflow-x-hidden " +   nunito.className}>{children}</body>
    </html>
  );
}

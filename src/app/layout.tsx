import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: './fonts/RobotoCondensed-VariableFont_wght.ttf',
})
 

export const metadata: Metadata = {
  title: "srodrigo.dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

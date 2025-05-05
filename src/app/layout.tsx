import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Pixelify",
});

export const metadata: Metadata = {
  title: "Pixerly ",
  description: "Pixerly - Social Media For Artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelify.variable} font-pixelify antialiased`}>
        {children}
      </body>
    </html>
  );
}

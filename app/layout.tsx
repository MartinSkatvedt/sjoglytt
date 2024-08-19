import type { Metadata } from "next";
import "./globals.css";
import { amandine, fenwick } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Sjøglytt",
  description: "Sjøglytt er en rorbu som ligger i Bømlo kommune.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${amandine.variable} ${fenwick.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}

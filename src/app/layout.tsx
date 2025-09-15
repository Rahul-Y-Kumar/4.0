import type { Metadata } from "next";
import "./globals.css";
import { poppins } from '../components/frontend/textfont'
export const metadata: Metadata = {
  title: "Rotaract Hackathon",
  description: "Innovate. Create. Inspire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            background-color: black !important;
          }
        `}</style>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}


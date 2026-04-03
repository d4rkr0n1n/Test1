import type { Metadata } from "next";
import { Inter, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Mridul Roy - DevOps Engineer | Cyberpunk Portfolio",
  description: "Futuristic Cyberpunk Portfolio for Mridul Roy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${shareTechMono.variable} ${shareTechMono.className}`}>
        {children}
      </body>
    </html>
  );
}

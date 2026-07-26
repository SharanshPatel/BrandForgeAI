import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppLayout } from "@/components/layout/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrandForge AI — Turn ideas into authentic professional content",
  description:
    "An AI-assisted writing workspace for developers, founders, and creators to build authentic LinkedIn content.",
  keywords: ["AI writing", "LinkedIn content", "Developer branding", "Notion style", "Linear UI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

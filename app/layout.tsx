import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-tajawal" });

export const metadata: Metadata = {
  title: "Almonzer Hamid | AI Innovator & Developer",
  description: "AI Solutions Architect turning ideas into AI-powered reality. Building intelligent digital products that blend strategy, storytelling, and emerging AI technologies.",
  keywords: ["AI", "Machine Learning", "Developer", "Portfolio", "Almonzer Hamid", "Sudan", "Malaysia"],
  authors: [{ name: "Almonzer Hamid" }],
  openGraph: {
    title: "Almonzer Hamid | AI Innovator",
    description: "Turning ideas into AI-powered reality",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${tajawal.variable} antialiased noise-overlay`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

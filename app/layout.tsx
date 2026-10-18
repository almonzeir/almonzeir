import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const arabic = Tajawal({ subsets: ["arabic"], weight: ["500", "700"], variable: "--font-ar" });

const description =
  "Machine learning engineer working on Arabic NLP and large language models. Offline Arabic OCR, medical imaging, LLM evaluation pipelines, and research on Sudanese Arabic in LLMs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://almonzeir.vercel.app"),
  title: "Almonzer Hamid · Machine Learning Engineer, Arabic NLP & LLMs",
  description,
  keywords: ["Almonzer Hamid", "Machine Learning Engineer", "Arabic NLP", "LLM", "Sudanese Arabic", "OCR", "Malaysia"],
  authors: [{ name: "Almonzer Hamid" }],
  openGraph: {
    title: "Almonzer Hamid · Machine Learning Engineer",
    description,
    url: "https://almonzeir.vercel.app",
    siteName: "Almonzer Hamid",
    type: "website",
  },
  twitter: { card: "summary", title: "Almonzer Hamid · Machine Learning Engineer", description },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${display.variable} ${mono.variable} ${arabic.variable}`}>
        {children}
      </body>
    </html>
  );
}

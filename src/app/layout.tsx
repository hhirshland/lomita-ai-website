import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyperactive Studio | AI Workflows for Investment Firms",
  description:
    "Hyperactive helps private equity, venture capital, and fund-of-funds teams turn AI experiments into production workflows that save time and improve decision-making.",
  keywords: [
    "AI workflows for private equity",
    "AI workflows for venture capital",
    "AI for fund of funds",
    "investment operations AI",
    "agentic workflows for funds",
    "investment memo automation",
    "portfolio news tracking",
    "fund diligence AI",
  ],
  openGraph: {
    title: "Hyperactive Studio | AI Workflows for Investment Firms",
    description:
      "We help investment firms redesign high-friction workflows around firm context, AI execution, and human review.",
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
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
